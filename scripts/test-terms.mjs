// Checks the glossary marks and the word panel in a real browser (docs/GLOSSARY-PLAN.md §11), on a phone (375 px)
// and a wide screen (1400 px), at normal and at the largest text size. On each page:
//   - marks are present, and none sits in a heading, a formula, a figure or another link;
//   - a click (tap) on a mark opens the panel, which shows the word's short meaning from "Words on this page" and
//     does not cover the word (on a phone the word stays visible above the bottom sheet);
//   - "More" loads its text (/glossary-more/<letter>);
//   - Escape closes the panel and returns focus to the word;
//   - Space on a focused mark opens the panel too (keyboard), and Escape closes it again.
// Uses a locally installed Chrome or Edge in headless mode over the DevTools protocol (no extra packages).
//
//   npm run build && npm run start          (or any running copy of the site)
//   npm run test:terms                      (BASE_URL=http://localhost:3000 by default; BROWSER=path to chrome/edge)
//   PAGES=vectors,homogeneous-expansion npm run test:terms     only those lessons; ONLY=1,3 only those sizes
//
// Exits with code 1 if any check fails.
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const CANDIDATES = [
  process.env.BROWSER,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);
const CASES = [
  { name: "phone 375 px, normal text", width: 375, height: 812, mobile: true, scale: 1 },
  { name: "phone 375 px, largest text", width: 375, height: 812, mobile: true, scale: 2 },
  { name: "wide 1400 px, normal text", width: 1400, height: 900, mobile: false, scale: 1 },
  { name: "wide 1400 px, largest text", width: 1400, height: 900, mobile: false, scale: 2 },
];
// One or two lessons from every year, including the one with the most words and a page with a page-scoped meaning.
const DEFAULT_PAGES = [
  "vectors",
  "derivative-as-slope",
  "positive-definite-matrices-minima",
  "one-random-variable",
  "homogeneous-expansion",
  "simulating-galaxy-formation",
  "conserved-momenta-riemann-tensor",
];

const browserPath = CANDIDATES.find((p) => existsSync(p));
if (!browserPath) {
  console.error("No Chrome or Edge found; set BROWSER=/path/to/browser.");
  process.exit(2);
}
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text().catch(() => "");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const slugs = process.env.PAGES ? process.env.PAGES.split(",") : DEFAULT_PAGES;
const pages = slugs.map((s) => urls.find((u) => u.startsWith("/courses/") && u.endsWith(`/${s}`))).filter(Boolean);
if (!pages.length) {
  console.error(`None of the lessons found at ${BASE} (is the site running?)`);
  process.exit(2);
}

const port = 9300 + Math.floor(Math.random() * 500);
const profile = mkdtempSync(join(tmpdir(), "oc-terms-"));
const proc = spawn(browserPath, [`--headless=new`, `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "--no-first-run", "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let failures = 0;
let checks = 0;
const only = process.env.ONLY ? process.env.ONLY.split(",").map(Number) : null;

async function connect() {
  for (let i = 0; i < 50; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const page = list.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(200);
  }
  throw new Error("browser did not start");
}
let ws;
let id = 0;
const pending = new Map();
function send(method, params = {}, ms = 30000) {
  const n = ++id;
  ws.send(JSON.stringify({ id: n, method, params }));
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(n);
      reject(new Error(`${method} timed out`));
    }, ms);
    pending.set(n, { resolve: (v) => (clearTimeout(timer), resolve(v)), reject: (e) => (clearTimeout(timer), reject(e)) });
  });
}
async function evaluate(expression) {
  const r = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description ?? ""));
  return r.result.value;
}
async function waitFor(expr, ms = 8000) {
  for (let t = 0; t < ms; t += 150) {
    if (await evaluate(expr).catch(() => false)) return true;
    await sleep(150);
  }
  return false;
}
async function click(x, y) {
  for (const type of ["mouseMoved", "mousePressed", "mouseReleased"])
    await send("Input.dispatchMouseEvent", { type, x, y, button: "left", clickCount: type === "mouseMoved" ? 0 : 1 });
}
async function key(k, code, keyCode) {
  await send("Input.dispatchKeyEvent", { type: "keyDown", key: k, code, windowsVirtualKeyCode: keyCode, text: k === " " ? " " : undefined });
  await send("Input.dispatchKeyEvent", { type: "keyUp", key: k, code, windowsVirtualKeyCode: keyCode });
}
const esc = () => key("Escape", "Escape", 27);

// In the page: a mark in the lesson text to test, scrolled to the middle of the window, and its position.
const PICK = String.raw`(() => {
  const marks = [...document.querySelectorAll("#article-body a.term[data-term]")];
  const bad = marks.filter((m) => m.closest("h1, h2, h3, h4, h5, h6, .katex, .formula, figure, .plot, .vector-diagram, a:not(.term)") );
  // The first mark whose word has a row in "Words on this page" and that a pointer can actually hit (a word wrapped
  // round a drop capital or across two lines is skipped).
  for (const m of marks) {
    const link = document.querySelector('.page-terms a[data-open-term="' + CSS.escape(m.dataset.term) + '"]');
    if (!link || !m.getClientRects().length) continue;
    m.scrollIntoView({ block: "center", behavior: "instant" });
    for (const r of m.getClientRects()) {
      const x = r.left + r.width / 2, y = r.top + r.height / 2;
      const at = document.elementFromPoint(x, y);
      if (r.width < 4 || !at || !m.contains(at)) continue;
      window.__mark = m;
      return { count: marks.length, bad: bad.map((b) => b.textContent), id: m.dataset.term, word: m.textContent, x, y, short: link.closest(".pt-row").querySelector(".pt-short").textContent };
    }
  }
  return { count: marks.length, bad: bad.map((b) => b.textContent) };
})()`;
// In the page: the open panel, and whether it covers the word.
const PANEL = String.raw`(() => {
  const p = document.querySelector(".tp[role=dialog]");
  if (!p) return null;
  const m = window.__mark;
  const a = m.getClientRects()[0];
  const b = p.getBoundingClientRect();
  const covers = a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
  const visible = a.top >= 0 && a.bottom <= innerHeight;
  return { short: p.querySelector(".tp-short")?.textContent, covers, visible, more: !!p.querySelector(".tp-more"), sheet: p.classList.contains("tp-sheet") };
})()`;

try {
  ws = new WebSocket(await connect());
  await new Promise((r) => ws.addEventListener("open", r, { once: true }));
  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const p = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result);
    }
  });
  await send("Page.enable");
  await send("Runtime.enable");
  for (const [ci, c] of CASES.entries()) {
    if (only && !only.includes(ci + 1)) continue;
    await send("Emulation.setDeviceMetricsOverride", { width: c.width, height: c.height, deviceScaleFactor: 1, mobile: c.mobile });
    await send("Page.navigate", { url: BASE + "/" });
    await waitFor(`document.readyState === "complete"`);
    await evaluate(`localStorage.setItem("reading-options", JSON.stringify({ scale: ${c.scale} }))`);
    for (const p of pages) {
      const problems = [];
      let word = "";
      try {
        await send("Page.navigate", { url: BASE + p });
        await waitFor(`document.readyState === "complete" && !!document.querySelector("#article-body")`);
        await sleep(600); // hydration: the panel listens for clicks once the page's scripts run
        const m = await evaluate(PICK);
        if (!m.count) problems.push("no marks in the lesson text");
        if (m.bad.length) problems.push(`marks inside a heading, formula, figure or link: ${m.bad.slice(0, 5).join(", ")}`);
        if (m.id) {
          word = m.word;
          // Tap or click.
          await sleep(300);
          // Measure again just before the click: diagrams and graphs that load late can move the text.
          const at = await evaluate(`(() => { for (const r of window.__mark.getClientRects()) { const x = r.left + r.width / 2, y = r.top + r.height / 2; const e = document.elementFromPoint(x, y); if (r.width >= 4 && e && window.__mark.contains(e)) return { x, y }; } return { x: ${m.x}, y: ${m.y}, miss: document.elementFromPoint(${m.x}, ${m.y})?.outerHTML.slice(0, 120) }; })()`);
          if (at.miss) problems.push(`"${m.word}" is covered by: ${at.miss}`);
          await evaluate(`window.__log = []; for (const t of ["pointerdown", "click"]) document.addEventListener(t, (e) => window.__log.push(t + ">" + (e.target.textContent || e.target.tagName).slice(0, 20) + (e.defaultPrevented ? "!" : "")), true); new MutationObserver(() => window.__log.push("dialog:" + !!document.querySelector(".tp[role=dialog]"))).observe(document.body, { childList: true }); 1`);
          await click(at.x, at.y);
          if (!(await waitFor(`!!document.querySelector(".tp[role=dialog]")`, 4000))) problems.push(`a click on "${m.word}" did not open the panel (${await evaluate("window.__log.join(' ')")}, scrollY ${await evaluate("scrollY")})`);
          else {
            await sleep(400); // placement, and the phone's scroll that keeps the word above the sheet
            const v = await evaluate(PANEL);
            if (v.short !== m.short) problems.push(`panel shows "${v.short}", list says "${m.short}"`);
            if (v.covers) problems.push(`the panel covers "${m.word}"`);
            if (!v.visible) problems.push(`"${m.word}" is out of view while its panel is open`);
            if (c.mobile !== v.sheet) problems.push(c.mobile ? "not a bottom sheet on a phone" : "a bottom sheet on a wide screen");
            if (v.more) {
              await evaluate(`document.querySelector(".tp-more summary").click()`);
              const loaded = await waitFor(`(() => { const d = document.querySelector(".tp-more"); return d && d.open && !/Loading|Could not load/.test(d.textContent) && d.querySelectorAll("p").length > 0; })()`, 5000);
              if (!loaded) problems.push(`"More" did not load: ${await evaluate(`document.querySelector(".tp-more")?.textContent ?? "(gone)"`)}`);
            }
            await esc();
            if (!(await waitFor(`!document.querySelector(".tp[role=dialog]")`, 2000))) problems.push("Escape did not close the panel");
            else if (!(await evaluate(`document.activeElement === window.__mark`))) problems.push(`focus did not return to "${m.word}" after Escape`);
          }
          // Keyboard: Space on the focused mark.
          await evaluate(`window.__mark.focus()`);
          await key(" ", "Space", 32);
          if (!(await waitFor(`!!document.querySelector(".tp[role=dialog]")`, 3000))) problems.push(`Space on "${m.word}" did not open the panel`);
          else {
            await esc();
            if (!(await waitFor(`!document.querySelector(".tp[role=dialog]")`, 2000))) problems.push("Escape did not close the panel opened by Space");
            else if (!(await evaluate(`document.activeElement === window.__mark`))) problems.push("focus did not return to the word after the keyboard check");
          }
        } else if (m.count) problems.push("no mark with a row in Words on this page could be tested");
      } catch (e) {
        problems.push(`could not be checked: ${e.message}`);
      }
      checks++;
      const ok = problems.length === 0;
      if (!ok) failures++;
      console.log(`${ok ? "ok  " : "FAIL"}  ${p}  [${c.name}]${word ? `  "${word}"` : ""}`);
      for (const m of problems) console.log(`        ${m}`);
    }
  }
} catch (e) {
  console.error(e);
  failures++;
} finally {
  try {
    ws?.close();
  } catch {}
  proc.kill();
  await sleep(500);
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {}
}
console.log(failures ? `\n${failures} of ${checks} page checks failed` : `\nAll ${checks} page checks passed (${pages.length} pages × ${only?.length ?? CASES.length} screen and text sizes)`);
process.exit(failures ? 1 : 0);
