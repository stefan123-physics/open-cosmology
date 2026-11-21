"""Ask the Internet Archive (Save Page Now) to save every Siyavula page the site cites.
Writes docs/licences/siyavula-archive.tsv: url, status, snapshot address, time. Run from the repo root."""
import os, re, time, urllib.request, urllib.error, datetime

urls = set()
for top in ("content", "calcs"):
    for d, _, fs in os.walk(top):
        for f in fs:
            if f.endswith((".mdx", ".yaml")):
                t = open(os.path.join(d, f), encoding="utf-8").read()
                for m in re.findall(r"https://www\.siyavula\.com/read/[^\s\"')`>#?]+", t):
                    urls.add(m.rstrip("/.,;"))
urls = sorted(urls)
print(len(urls), "pages", flush=True)

out = "docs/licences/siyavula-archive.tsv"
rows = ["# Internet Archive snapshots of every Siyavula page the site cites, requested 2026-11-21 (Save Page Now).",
        "# Evidence of each page's licence footer on that date. Columns: page, HTTP status, snapshot, time (UTC)."]
for i, u in enumerate(urls):
    snap, status = "", ""
    for attempt in range(3):
        try:
            req = urllib.request.Request("https://web.archive.org/save/" + u, headers={"User-Agent": "Mozilla/5.0 (compatible; open-course-archiver)"})
            with urllib.request.urlopen(req, timeout=120) as r:
                status = str(r.status)
                loc = r.headers.get("Content-Location") or r.geturl()
                snap = loc if loc.startswith("http") else "https://web.archive.org" + loc
            break
        except urllib.error.HTTPError as e:
            status = str(e.code)
            if e.code == 429:
                time.sleep(60)
                continue
            break
        except Exception as e:
            status = type(e).__name__
            time.sleep(20)
    if "/web/" not in snap:
        snap = ""
    now = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M")
    rows.append("\t".join([u, status, snap, now]))
    print(i + 1, status, u, snap, flush=True)
    time.sleep(8)
open(out, "w", encoding="utf-8", newline="\n").write("\n".join(rows) + "\n")
print("done", out)
