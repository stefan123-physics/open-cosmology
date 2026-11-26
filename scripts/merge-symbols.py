"""Merge one branch's data/symbols.json changes into the working tree's file, by meaning.

usage: python scripts/merge-symbols.py <base-commit> <branch>
(base-commit = the commit the branch started from; written 2026-11-21 for parallel writers in worktrees)
Run from the repository root. Only additive changes are carried over: new entries,
new meanings, pages/courses added to a meaning, new forms/tex. A new entry whose form or TeX
command another entry already has is folded into that entry. Prints what it did.
"""
import json, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8")  # the log names symbols such as √; a Windows console is cp1252

base_ref, branch = sys.argv[1], sys.argv[2]
def load_ref(ref):
    out = subprocess.run(["git", "show", f"{ref}:data/symbols.json"], capture_output=True, check=True).stdout
    return json.loads(out.decode("utf-8"))

base = {e["id"]: e for e in load_ref(base_ref)}
br = load_ref(branch)
path = "data/symbols.json"
target = json.load(open(path, encoding="utf-8"))
tidx = {e["id"]: e for e in target}

def union(a, b):
    out = list(a or [])
    for x in b or []:
        if x not in out:
            out.append(x)
    return out

log = []
for e in br:
    b0 = base.get(e["id"])
    if b0 == e:
        continue
    t = tidx.get(e["id"])
    if t is None:
        # A new entry whose form or TeX command already belongs to another entry (both branches added the same
        # symbol under different ids, 2026-11-26): fold its meanings into that entry, so one symbol has one entry.
        keys = set(e.get("forms") or []) | set(e.get("tex") or [])
        owner = next((x for x in target if keys & (set(x.get("forms") or []) | set(x.get("tex") or []))), None) if b0 is None else None
        if owner is None:
            target.append(e); tidx[e["id"]] = e
            log.append(f"new entry {e['id']}")
            continue
        for m in e.get("meanings", []):
            if m not in owner["meanings"]:
                owner["meanings"].append(m)
        log.append(f"folded new entry {e['id']} into {owner['id']} (same form or TeX)")
        continue
    for k in ("forms", "tex"):
        if e.get(k) and e.get(k) != (b0 or {}).get(k):
            new = union(t.get(k), e.get(k))
            if new != t.get(k):
                t[k] = new; log.append(f"{e['id']}: {k} -> {new}")
    bml = (b0 or {}).get("meanings", [])
    for m in e.get("meanings", []):
        if m in bml or m in t["meanings"]:
            continue
        same = [x for x in bml if x["text"] == m["text"]]
        # the base meaning this one grew from: same text, and its pages a subset
        orig = next((x for x in same if set(x.get("pages") or []) <= set(m.get("pages") or []) and set(x.get("courses") or []) <= set(m.get("courses") or [])), None)
        tm = None
        if orig is not None:
            tm = next((x for x in t["meanings"] if x["text"] == orig["text"] and set(orig.get("pages") or []) <= set(x.get("pages") or [])), None)
        if tm is None:
            t["meanings"].append(m); log.append(f"{e['id']}: new meaning {m['text'][:60]!r} {m.get('pages') or m.get('courses')}")
        else:
            for k in ("pages", "courses"):
                if m.get(k):
                    new = union(tm.get(k), m.get(k))
                    if new != tm.get(k):
                        tm[k] = new; log.append(f"{e['id']}: {k} += {m[k]}")
            for k, v in m.items():
                if k not in ("text", "pages", "courses") and k not in tm:
                    tm[k] = v; log.append(f"{e['id']}: meaning field {k}")
    # removed pages from meanings or removed meanings are ignored (additive merge only)

with open(path, "w", encoding="utf-8", newline="\n") as f:
    f.write("[\n" + ",\n".join("  " + json.dumps(e, ensure_ascii=False) for e in target) + "\n]\n")
print("\n".join(log) or "no changes")
