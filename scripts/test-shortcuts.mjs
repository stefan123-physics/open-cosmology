// Checks that every one-key shortcut in the "?" list really works, with focus mode off and on.
// Uses a locally installed Chrome or Edge in headless mode over the DevTools protocol (no extra packages).
//
//   npm run build && npm run start          (or any running copy of the site)
//   npm run test:shortcuts                  (BASE_URL=http://localhost:3000 by default; BROWSER=path to chrome/edge)
//
// Exits with code 1 if any check fails.
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const LESSON = "/courses/8-01/contact-forces"; // has a previous and a next lesson, sections, a quiz
const TERMS_LESSON = "/courses/8-286/homogeneous-expansion"; // uses glossary words (homogeneous, isotropic)
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

const browserPath = CANDIDATES.find((p) => existsSync(p));
if (!browserPath) {
  console.error("No Chrome or Edge found; set BROWSER=/path/to/browser.");
  process.exit(2);
}

const port = 9300 + Math.floor(Math.random() * 500);
const profile = mkdtempSync(join(tmpdir(), "oc-shortcuts-"));
const proc = spawn(browserPath, [`--headless=new`, `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "--no-first-run", "--window-size=1280,900", "about:blank"], {
  stdio: "ignore",
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let failures = 0;
const check = (name, ok, detail = "") => {
  console.log(`${ok ? "ok  " : "FAIL"}  ${name}${detail ? `  (${detail})` : ""}`);
  if (!ok) failures++;
};

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
function send(method, params = {}) {
  const n = ++id;
  ws.send(JSON.stringify({ id: n, method, params }));
  return new Promise((resolve, reject) => pending.set(n, { resolve, reject }));
}
async function evaluate(expression) {
  const r = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description ?? ""));
  return r.result.value;
}
async function press(key, code = `Key${key.toUpperCase()}`, modifiers = 0) {
  // modifiers: 1 Alt, 2 Ctrl, 4 Meta, 8 Shift (DevTools protocol)
  const text = key.length === 1 && !modifiers ? key : undefined;
  await send("Input.dispatchKeyEvent", { type: "keyDown", key, code, text, modifiers });
  await send("Input.dispatchKeyEvent", { type: "keyUp", key, code, modifiers });
}
async function goto(path) {
  await send("Page.navigate", { url: BASE + path });
  for (let i = 0; i < 60; i++) {
    await sleep(150);
    const ready = await evaluate(`document.readyState === "complete" && !!document.querySelector("main")`).catch(() => false);
    if (ready) break;
  }
  await sleep(1500); // hydration
}
const path = () => evaluate("location.pathname");
async function waitFor(expr, ms = 3000) {
  for (let t = 0; t < ms; t += 100) {
    if (await evaluate(expr).catch(() => false)) return true;
    await sleep(100);
  }
  return false;
}
const visible = (sel) => `(() => { const e = document.querySelector(${JSON.stringify(sel)}); if (!e) return false; const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== "hidden"; })()`;

async function setOptions(patch) {
  await evaluate(`(() => { const o = JSON.parse(localStorage.getItem("reading-options") || "{}"); Object.assign(o, ${JSON.stringify(patch)}); localStorage.setItem("reading-options", JSON.stringify(o)); })()`);
}

async function run(focus) {
  const tag = `focus ${focus}`;
  await goto(LESSON);
  await setOptions({ focus, keys: "on" });
  await goto(LESSON);
  check(`${tag}: focus mode state`, (await evaluate(`document.documentElement.dataset.focus`)) === focus);

  // ?  opens the shortcuts list, Esc closes it
  await press("?", "Slash");
  check(`${tag}: ? opens the shortcuts list`, await waitFor(visible(".shortcuts-panel")));
  await press("Escape", "Escape");
  check(`${tag}: Esc closes it`, await waitFor(`!document.querySelector(".shortcuts-panel")`));

  // /  opens search; typing n in the search box must not navigate
  await press("/", "Slash");
  check(`${tag}: / opens search`, await waitFor(visible(".search-overlay input")));
  check(`${tag}: the search box has the keyboard focus`, await waitFor(`document.activeElement?.matches(".search-overlay input")`));
  await press("n");
  await sleep(600);
  check(`${tag}: n while typing in search does nothing`, (await path()) === LESSON);
  await press("Escape", "Escape");
  await waitFor(`!document.querySelector(".search-overlay")`);

  // Ctrl K also opens search
  await press("k", "KeyK", 2);
  check(`${tag}: Ctrl K opens search`, await waitFor(visible(".search-overlay input")));
  await press("Escape", "Escape");
  await waitFor(`!document.querySelector(".search-overlay")`);

  // Alt + / Alt − change the text size, Alt 0 resets it
  const scale = `getComputedStyle(document.documentElement).getPropertyValue("--text-scale").trim() || "1"`;
  const s0 = await evaluate(scale);
  await press("=", "Equal", 1);
  await sleep(300);
  const s1 = await evaluate(scale);
  check(`${tag}: Alt + makes the text larger`, parseFloat(s1) > parseFloat(s0), `${s0} -> ${s1}`);
  await press("-", "Minus", 1);
  await sleep(300);
  check(`${tag}: Alt − makes it smaller again`, parseFloat(await evaluate(scale)) < parseFloat(s1));
  await press("=", "Equal", 1);
  await press("0", "Digit0", 1);
  await sleep(300);
  check(`${tag}: Alt 0 resets the size`, parseFloat(await evaluate(scale)) === 1);

  // Tab moves the keyboard focus
  await evaluate(`document.activeElement?.blur()`);
  await press("Tab", "Tab");
  await sleep(200);
  check(`${tag}: Tab moves focus to a control`, await evaluate(`document.activeElement && document.activeElement !== document.body`));
  await evaluate(`document.activeElement?.blur()`);

  // n / p  next and previous lesson
  await press("n");
  const okNext = await waitFor(`location.pathname !== ${JSON.stringify(LESSON)}`);
  check(`${tag}: n goes to the next lesson`, okNext, await path());
  await sleep(1200);
  await press("p");
  check(`${tag}: p goes back to the previous lesson`, await waitFor(`location.pathname === ${JSON.stringify(LESSON)}`), await path());
  await sleep(1200);

  // j / k  next and previous part, in focus mode only
  const part = `(document.querySelector(".focus-pick select") || {}).value`;
  if (focus === "on") {
    const before = await evaluate(part);
    await press("j");
    await sleep(400);
    const afterJ = await evaluate(part);
    check(`${tag}: j moves to the next part`, afterJ !== before, `${before} -> ${afterJ}`);
    await press("k");
    await sleep(400);
    check(`${tag}: k moves back`, (await evaluate(part)) === before);
  } else {
    await press("j");
    await sleep(400);
    check(`${tag}: j does nothing without focus mode`, (await path()) === LESSON && !(await evaluate(`!!document.querySelector(".focus-bar")`)));
  }

  // Single-key shortcuts switched off: ? and / do nothing
  await setOptions({ keys: "off" });
  await goto(LESSON);
  await press("?", "Slash");
  await press("/", "Slash");
  await sleep(500);
  check(`${tag}: with single-key shortcuts off, ? and / do nothing`, !(await evaluate(`!!document.querySelector(".shortcuts-panel, .search-overlay")`)));
}

try {
  ws = new WebSocket(await connect());
  await new Promise((r) => ws.addEventListener("open", r, { once: true }));
  ws.addEventListener("message", (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    }
  });
  await send("Page.enable");
  await send("Runtime.enable");
  // Every shortcut in the "?" list must be one this test checks.
  await goto(LESSON);
  await press("?", "Slash");
  await waitFor(visible(".shortcuts-panel"));
  const listed = await evaluate(`[...document.querySelectorAll(".shortcuts-table kbd")].map((k) => k.textContent.trim())`);
  await press("Escape", "Escape");
  const tested = ["?", "/  or  Ctrl K (⌘ K)", "n", "p", "j  /  k", "w  /  Shift W", "Alt +  /  Alt −", "Alt 0", "Esc", "Tab  /  Shift Tab"];
  const untested = listed.filter((k) => !tested.includes(k));
  check("every shortcut in the list is covered by this test", untested.length === 0, untested.join(", "));
  for (const focus of ["off", "on"]) await run(focus);
  await setOptions({ focus: "off", keys: "on" });

  // w / Shift W  move to the next / previous marked glossary word; Enter opens the word panel, Esc closes it and
  // puts focus back on the word (docs/GLOSSARY-PLAN.md §9). On a lesson that uses "homogeneous" and "isotropic".
  await setOptions({ terms: "every" });
  await goto(TERMS_LESSON);
  const isTerm = `document.activeElement?.matches("a.term")`;
  await press("w");
  check("w moves focus to a marked word", await waitFor(isTerm));
  const firstWord = await evaluate(`document.activeElement?.dataset.term + "@" + [...document.querySelectorAll("a.term")].indexOf(document.activeElement)`);
  await press("w");
  await sleep(200);
  const secondWord = await evaluate(`document.activeElement?.dataset.term + "@" + [...document.querySelectorAll("a.term")].indexOf(document.activeElement)`);
  check("w again moves to the next one", (await evaluate(isTerm)) && secondWord !== firstWord, `${firstWord} -> ${secondWord}`);
  await press("W", "KeyW", 8);
  await sleep(200);
  const backWord = await evaluate(`document.activeElement?.dataset.term + "@" + [...document.querySelectorAll("a.term")].indexOf(document.activeElement)`);
  check("Shift W moves back", backWord === firstWord, `${secondWord} -> ${backWord}`);
  await press("Enter", "Enter");
  check("Enter on a word opens the word panel", await waitFor(visible(".tp")));
  check("the panel names the word", await waitFor(`(document.querySelector(".tp-term")?.textContent || "").length > 0`));
  check("the panel stays on this page", (await path()) === TERMS_LESSON);
  await press("Escape", "Escape");
  check("Esc closes the panel", await waitFor(`!document.querySelector(".tp")`));
  check("focus returns to the word", await evaluate(isTerm));
  await setOptions({ terms: "off" });
  await goto(TERMS_LESSON);
  await press("w");
  await sleep(300);
  check("with marks switched off, w does nothing", !(await evaluate(isTerm)));
  await setOptions({ terms: "first" });

  // Every lesson can be read aloud: "Listen to this page", and the speaker button of "Symbols on this page".
  const xml = await (await fetch(BASE + "/sitemap.xml")).text();
  const lessons = [...xml.matchAll(/<loc>[^<]*?(\/courses\/[^/<]+\/[^/<]+)<\/loc>/g)].map((m) => m[1]);
  const missing = [];
  for (const l of lessons) {
    await goto(l);
    const r = await evaluate(`({ page: !!document.querySelector(".read-controls"), symbols: !document.querySelector(".page-symbols") || !!document.querySelector(".page-symbols .read-section") })`);
    if (!r.page || !r.symbols) missing.push(`${l}${r.page ? "" : " (no Listen button)"}${r.symbols ? "" : " (symbols not readable)"}`);
  }
  check(`all ${lessons.length} lessons have read-aloud for the page and its symbols`, missing.length === 0, missing.join("; "));

  // What read-aloud actually hands to the speech engine (speechSynthesis.speak is replaced by a recorder): a silent
  // primer first (a cold engine cut off the first word), and the brackets of the associative rule kept.
  await goto("/courses/8-01/vectors");
  // Each utterance "ends" at once, until the rule has been read; then reading stops there (otherwise it would race to
  // the end of the page and on to the next lesson). The waiting is done from here: timers inside a background
  // headless page are throttled to minutes.
  await evaluate(`(() => {
    const out = (window.__said = []);
    const found = () => out.some((x) => /vector (capital )?C/.test(x.text) && /quantity/.test(x.text));
    speechSynthesis.speak = (u) => {
      out.push({ text: u.text, volume: u.volume });
      if (!found() && out.length < 80) queueMicrotask(() => u.onend && u.onend(new Event("end")));
    };
    document.querySelector(".read-controls button").click();
    return true;
  })()`);
  await waitFor(`(window.__said || []).some((x) => /vector (capital )?C/.test(x.text) && /quantity/.test(x.text))`, 15000);
  const said = await evaluate(`window.__said || []`);
  check("read-aloud starts with a silent primer, then the page title", said[0]?.volume === 0 && /^Vectors$/.test(said[1]?.text ?? ""), JSON.stringify(said.slice(0, 2)));
  check(
    "read-aloud keeps the brackets of the associative rule",
    // "capital C": the page also uses a small c (lib/speech.ts pageCapitals)
    said.some((x) => /the quantity vector A plus vector B, all plus vector (capital )?C equals vector A plus the quantity vector B plus vector (capital )?C/.test(x.text)),
    said.map((x) => x.text).filter((t) => /vector (capital )?C/.test(t)).join(" | ")
  );
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
console.log(failures ? `\n${failures} check(s) failed` : "\nAll shortcut checks passed");
process.exit(failures ? 1 : 0);
