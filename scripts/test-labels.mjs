// Checks every label on every graph in a real browser: vector and angle labels on vector diagrams, the words on
// the parallax diagram, and the point labels on Plot graphs. On a phone (375 px) and a wide screen (1400 px), at
// normal and at the largest text size, each label must be
//   - fully inside its graph (nothing cut off, accents included),
//   - clear of the caption, of the other labels and of the drawn lines and curves,
//   - at least 12 px tall (readable).
// lib/plot-check.ts checks the same rules at build time with estimated sizes; this test measures the real ones.
// Uses a locally installed Chrome or Edge in headless mode over the DevTools protocol (no extra packages).
//
//   npm run build && npm run start          (or any running copy of the site)
//   npm run test:labels                     (BASE_URL=http://localhost:3000 by default; BROWSER=path to chrome/edge)
//   SHOTS=folder npm run test:labels        also saves a screenshot of every graph that has labels
//
// Exits with code 1 if any check fails.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const SHOTS = process.env.SHOTS;
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

// Pages with labelled graphs, found from the lesson sources.
function lessonFiles(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? lessonFiles(p) : f.endsWith(".mdx") ? [p] : [];
  });
}
const slugs = lessonFiles("content")
  .filter((f) => {
    const s = readFileSync(f, "utf8");
    return /<VectorDiagram\b|<ParallaxDiagram\b/.test(s) || /<Plot\b[\s\S]*?points=\{\[[\s\S]*?label:/.test(s);
  })
  .map((f) => f.replace(/\\/g, "/").split("/").pop().replace(/\.mdx$/, ""));

const browserPath = CANDIDATES.find((p) => existsSync(p));
if (!browserPath) {
  console.error("No Chrome or Edge found; set BROWSER=/path/to/browser.");
  process.exit(2);
}
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text().catch(() => "");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
// PAGES=vectors,doppler-effect checks only those pages.
const wanted = process.env.PAGES ? process.env.PAGES.split(",") : null;
const pages = slugs.filter((s) => !wanted || wanted.includes(s)).map((s) => urls.find((u) => u.endsWith(`/${s}`))).filter(Boolean);
if (!pages.length) {
  console.error(`No pages with labelled graphs found at ${BASE} (is the site running?)`);
  process.exit(2);
}

const port = 9300 + Math.floor(Math.random() * 500);
const profile = mkdtempSync(join(tmpdir(), "oc-labels-"));
const proc = spawn(browserPath, [`--headless=new`, `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "--no-first-run", "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let failures = 0;
let checks = 0;

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
  // A command the browser never answers fails after `ms` instead of hanging the whole test.
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

// Runs in the page: measures every labelled graph and returns the problems found.
const MEASURE = String.raw`(() => {
  const problems = [];
  const R = (e) => e.getBoundingClientRect();
  const inside = (a, b, tol = 0.5) => a.left >= b.left - tol && a.right <= b.right + tol && a.top >= b.top - tol && a.bottom <= b.bottom + tol;
  const meets = (a, b, pad = 0) => a.left < b.right + pad && b.left < a.right + pad && a.top < b.bottom + pad && b.top < a.bottom + pad;
  // The full drawn extent of a label, children included (KaTeX accents can reach outside the outer span).
  const ink = (el) => {
    let r = R(el);
    let box = { left: r.left, right: r.right, top: r.top, bottom: r.bottom };
    for (const c of el.querySelectorAll("*")) {
      if (c.closest(".katex-mathml")) continue;
      const q = c.getBoundingClientRect();
      if (!q.width || !q.height) continue;
      box = { left: Math.min(box.left, q.left), right: Math.max(box.right, q.right), top: Math.min(box.top, q.top), bottom: Math.max(box.bottom, q.bottom) };
    }
    return box;
  };
  // Does the segment cross the rectangle (shrunk a little, so touching is allowed)?
  const segHits = (x1, y1, x2, y2, r, shrink = 1.5) => {
    const x0 = r.left + shrink, xr = r.right - shrink, y0 = r.top + shrink, yb = r.bottom - shrink;
    if (x0 >= xr || y0 >= yb) return false;
    let t0 = 0, t1 = 1;
    const dx = x2 - x1, dy = y2 - y1;
    for (const [p, q] of [[-dx, x1 - x0], [dx, xr - x1], [-dy, y1 - y0], [dy, yb - y1]]) {
      if (p === 0) { if (q < 0) return false; continue; }
      const t = q / p;
      if (p < 0) { if (t > t1) return false; if (t > t0) t0 = t; } else { if (t < t0) return false; if (t < t1) t1 = t; }
    }
    return t0 <= t1;
  };
  // Screen-space segments of the drawn lines in an SVG (lines, polygons, paths; not grid lines or leaders).
  const segments = (svg, skip) => {
    const out = [];
    const pt = svg.createSVGPoint();
    const map = (el, x, y) => { pt.x = x; pt.y = y; const m = el.getScreenCTM(); const q = pt.matrixTransform(m); return [q.x, q.y]; };
    for (const el of svg.querySelectorAll("line, polygon, path, circle")) {
      if (skip(el)) continue;
      if (el.tagName === "line") {
        const [a, b] = [map(el, +el.getAttribute("x1"), +el.getAttribute("y1")), map(el, +el.getAttribute("x2"), +el.getAttribute("y2"))];
        out.push([...a, ...b]);
      } else if (el.tagName === "polygon") {
        const ps = el.getAttribute("points").trim().split(/\s+/).map((s) => s.split(",").map(Number)).map(([x, y]) => map(el, x, y));
        ps.forEach((p, i) => out.push([...p, ...ps[(i + 1) % ps.length]]));
      } else {
        const len = el.getTotalLength ? el.getTotalLength() : 0;
        if (!len) continue;
        const n = Math.min(400, Math.max(8, Math.ceil(len / 4)));
        let prev = null;
        for (let i = 0; i <= n; i++) {
          const p = el.getPointAtLength((len * i) / n);
          const q = map(el, p.x, p.y);
          if (prev) out.push([...prev, ...q]);
          prev = q;
        }
      }
    }
    return out;
  };
  const check = (graph, name, labels, segs, area) => {
    const fig = graph.closest("figure");
    const cap = fig && fig.querySelector("figcaption");
    const boxes = labels.map((l) => ({ l, b: ink(l.el) }));
    for (const { l, b } of boxes) {
      const fs = parseFloat(getComputedStyle(l.el).fontSize);
      if (fs < 12) problems.push(name + ": label " + l.name + " is only " + fs.toFixed(1) + " px");
      // No stray boxes: nothing inside a label may have a border or a background (KaTeX's fraction and root lines aside).
      for (const e of [l.el, ...l.el.querySelectorAll("*")]) {
        if (e.closest(".katex-mathml") || e.matches(".frac-line, .overline-line, .underline-line, .hline, .sqrt *")) continue;
        const s = getComputedStyle(e);
        const border = ["Top", "Right", "Bottom", "Left"].some((k) => parseFloat(s["border" + k + "Width"]) > 0 && s["border" + k + "Style"] !== "none");
        const bg = s.backgroundColor !== "rgba(0, 0, 0, 0)" && s.backgroundColor !== "transparent";
        if (border || bg) {
          problems.push(name + ": label " + l.name + " has a " + (border ? "border" : "background") + " around part of it (" + e.tagName.toLowerCase() + (e.className && typeof e.className === "string" ? "." + e.className.split(" ")[0] : "") + ")");
          break;
        }
      }
      if (!inside(b, area)) problems.push(name + ": label " + l.name + " is not fully inside the graph");
      if (cap && meets(b, R(cap))) problems.push(name + ": label " + l.name + " overlaps the caption");
      if (segs.some((s) => segHits(...s, b))) problems.push(name + ": label " + l.name + " crosses a line or curve");
    }
    for (let i = 0; i < boxes.length; i++)
      for (let j = i + 1; j < boxes.length; j++)
        if (meets(boxes[i].b, boxes[j].b, -1)) problems.push(name + ": labels " + boxes[i].l.name + " and " + boxes[j].l.name + " overlap");
  };
  let graphs = 0;
  document.querySelectorAll(".vector-diagram .vd-stage, .parallax-diagram .vd-stage").forEach((stage, k) => {
    graphs++;
    const svg = stage.querySelector("svg");
    const labels = [...stage.querySelectorAll(".vd-label, .pd-label")].map((el) => ({ el, name: JSON.stringify(el.querySelector(".katex-mathml annotation")?.textContent ?? el.textContent) }));
    const skip = (el) => el.closest(".vd-grid") || el.classList.contains("pd-bg") || el.getAttribute("stroke-width") === "1" || el.classList.contains("pd-leader") || el.tagName === "circle" && !el.classList.contains("pd-orbit");
    check(stage, (stage.closest(".parallax-diagram") ? "parallax diagram " : "vector diagram ") + (k + 1), labels, segments(svg, skip), R(stage));
  });
  document.querySelectorAll(".plot .plot-canvas").forEach((gd, k) => {
    const anns = [...gd.querySelectorAll(".annotation")];
    if (!anns.length) return;
    graphs++;
    const drag = gd.querySelector(".nsewdrag");
    const area = drag ? R(drag) : R(gd);
    const svg = gd.querySelector(".main-svg");
    const labels = anns.map((a) => ({ el: a.querySelector(".annotation-text-g") || a, name: JSON.stringify(a.textContent) }));
    const curveSegs = segments(svg, (el) => !el.closest(".scatterlayer") || !el.classList.contains("js-line"));
    check(gd, "plot " + (k + 1), labels, curveSegs, area);
  });
  return { graphs, problems };
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
  if (SHOTS) mkdirSync(SHOTS, { recursive: true });
  // ONLY=3,4 runs only those screen and text sizes (1-based, in the order of CASES).
  const only = process.env.ONLY ? process.env.ONLY.split(",").map(Number) : null;
  for (const [ci, c] of CASES.entries()) {
    if (only && !only.includes(ci + 1)) continue;
    await send("Emulation.setDeviceMetricsOverride", { width: c.width, height: c.height, deviceScaleFactor: 1, mobile: c.mobile });
    await send("Page.navigate", { url: BASE + "/" });
    await waitFor(`document.readyState === "complete"`);
    await evaluate(`localStorage.setItem("reading-options", JSON.stringify({ scale: ${c.scale} }))`);
    for (const p of pages) {
     try {
      await send("Page.navigate", { url: BASE + p });
      await waitFor(`document.readyState === "complete" && !!document.querySelector("main")`);
      // Plots load Plotly when they scroll near; bring each graph into view and wait for its labels.
      await evaluate(`(async () => { for (const f of document.querySelectorAll(".plot, .vector-diagram, .parallax-diagram")) { f.scrollIntoView({ block: "center" }); await new Promise((r) => setTimeout(r, 120)); } })()`);
      await waitFor(`[...document.querySelectorAll(".plot .plot-canvas")].every((g) => g.querySelector(".main-svg"))`, 15000);
      await sleep(700);
      const r = await evaluate(MEASURE);
      checks++;
      const ok = r.problems.length === 0;
      console.log(`${ok ? "ok  " : "FAIL"}  ${p}  [${c.name}]  ${r.graphs} graph(s)`);
      for (const m of [...new Set(r.problems)]) console.log(`        ${m}`);
      if (!ok) failures++;
      if (SHOTS) {
        const figs = await evaluate(`[...document.querySelectorAll(".vector-diagram, .parallax-diagram, .plot")].filter((f) => f.querySelector(".vd-label, .pd-label, .annotation")).map((f) => { const r = f.getBoundingClientRect(); return { x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height }; })`);
        for (const [i, f] of figs.entries()) {
          // Screenshots are a convenience: one that fails is noted, not counted as a label failure.
          try {
            await evaluate(`window.scrollTo(0, ${Math.max(0, f.y - 40)})`);
            await sleep(150);
            const shot = await send("Page.captureScreenshot", { format: "png", clip: { x: f.x, y: f.y, width: f.w, height: f.h, scale: 1 } });
            writeFileSync(join(SHOTS, `${p.split("/").pop()}-${i + 1}-${c.width}-${c.scale}x.png`), Buffer.from(shot.data, "base64"));
          } catch (e) {
            console.log(`        (screenshot ${i + 1} skipped: ${e.message})`);
          }
        }
      }
     } catch (e) {
      // One page that cannot be measured is a failure, not the end of the test.
      checks++;
      failures++;
      console.log(`FAIL  ${p}  [${c.name}]  could not be measured: ${e.message}`);
     }
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
console.log(failures ? `\n${failures} of ${checks} page checks failed` : `\nAll ${checks} page checks passed (${pages.length} pages × ${CASES.length} screen and text sizes)`);
process.exit(failures ? 1 : 0);
