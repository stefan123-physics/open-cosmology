# Two accounts at once: who does what (2026-11-26)

## Rules (read before you start)

1. **Read this whole file before starting, and again before every commit.**
2. **Only touch your own files** (the "You own" list of your section). If you need a change in a file you do not own, write it under "Requests for the other account" in your own section and carry on with something else.
3. **Mark a task as done** (`- [x]`) in your own section when it is finished, committed and pushed. Never edit the other account's section.
4. Work on **your own branch** (below), never on `main`. One commit per finished, reviewed problem set; **push your branch after every commit**.
5. **Stop at 85% of your 5-hour usage** (or of the weekly limit, whichever comes first). Before stopping, write a "Resume here" note at the end of your section (what is done, what is half done, branch and commit), commit and push.
6. AGENTS.md and docs/PROBLEM-SETS-RUN.md still apply in full: blind review on a different model from the writer, `npx tsx scripts/check-content.ts`, `npm run test:answers` and `npm run calc:test` before every commit, never skip the commit checks, no em dashes, no OpenStax.
7. Only Account A merges into `main`, at the end (see "Bringing the work together").

## Files that both accounts touch, and how

| File | Rule |
|---|---|
| `data/symbols.json` | Both edit it on their own branch (one entry per line, written as AGENTS.md says). Add entries and page-scoped meanings; **never delete or reword an existing meaning** (that would conflict). Account A merges with `scripts/merge-symbols.py`. |
| `TASKS.md` | Each account edits only its own section. |
| `docs/PROBLEM-SETS-RUN.md` | **Account A only.** Account B writes its progress, lessons learned and the facts for the progress table in its own section here; A copies them in when merging. |
| `data/glossary/*.json`, `lib/`, `components/`, `app/`, `scripts/`, `AGENTS.md`, `OWNER-TODO.md`, `package.json` | **Account A only**, and only if needed. Account B asks under "Requests". |

Lessons (`content/**/*.mdx` that are not problem sets) are not edited by either account during this run; a slip found in a lesson goes under "Requests" (B) or is fixed by A in a separate commit.

---

## Account A tasks (desktop app, this PC)

**Branch:** `run/a-8044-805` (from `main` after this file is committed).

**You own:** everything for courses **8.044, 8.05, 8.07, 8.08**:
`content/year-3/8.044/*-problem-set-*.mdx`, `content/year-3/8.05/*-problem-set-*.mdx`, `content/year-4/8.07/*-problem-set-*.mdx`, `content/year-4/8.08/*-problem-set-*.mdx`, the matching `calcs/<course>/` and `reviews/<course>/` files, plus the shared files marked "Account A only" above.

This window:
- [ ] 8.044 Set 9: blind review of the draft on branch `ps-8044-9` (local worktree `.claude/worktrees/ps-8044-9`), fix, bring onto `run/a-8044-805`.
- [ ] 8.044 Sets 10 and 11 (MIT `resources/mit8_044s13_psN/`, solutions `…_pssN/`, `solutions: mit`).
- [ ] 8.05 (Fall 2013): 11 sets, `resources/assignment-1/` … `assignment-11/`. First check every PDF for rights notices and whether solutions are on OCW; add the 8.05 row to the progress table.

Later windows: 8.07 (10 sets, `resources/mit8_07f12_pset01/` …), 8.08 (12 sets, `resources/prb1/` …).

Also Account A: the glossary "First explained in" links that may still be passing mentions (`npm run glossary:intro`), when there is time; merging (below).

### Requests for the other account
(none)

---

## Account B tasks (Claude Code on the web, in Chrome)

**Branch:** `run/b-806-8962` (from `main` after this file is committed). If the web session insists on its own `claude/…` branch name, use that and write the name here.

**You own:** everything for courses **8.06, 8.09, 8.962, 8.902**:
`content/year-3/8.06/*-problem-set-*.mdx`, `content/year-4/8.09/*-problem-set-*.mdx`, `content/year-5/8.962/*-problem-set-*.mdx`, `content/year-5/8.902/*-problem-set-*.mdx`, the matching `calcs/<course>/` and `reviews/<course>/` files, and your own lines in `data/symbols.json` (see the table above).

This window:
- [ ] Set up the cloud checkout: `npm ci`; `python3 -m venv .venv && .venv/bin/pip install -r requirements-dev.txt`; check `pdftotext` exists (else `apt-get install -y poppler-utils`); check that `https://ocw.mit.edu` can be downloaded (if blocked, stop and tell the owner: the cloud environment needs network access to ocw.mit.edu).
- [ ] 8.06 (Spring 2018): 9 sets, `resources/problem-set-1/` … `problem-set-9/`. First check every PDF for rights notices and whether solutions are on OCW.
- [ ] 8.962 (Spring 2020): 11 sets, `resources/mit8_962s20_pset01/` … (some sets have a separate `_hint` PDF; `ps10` may be a second copy of Set 10: check).

Later windows: 8.09 (10 sets, `resources/mit8_09f14_pset1/` …; the `damped_pendulum_phasespace` and `logistic_map` files are programs, check their licence before use), 8.902 (no assignments page found on 2026-11-26: check the course for problem sets; if none, note it and skip).

How (Linux notes in docs/PROBLEM-SETS-RUN.md, "Lessons learned"): download MIT's PDFs to a folder **outside the repository** (for example `/tmp/ocw`), `pdftotext -layout`; writer agent in a git worktree under `.claude/worktrees/` with `node_modules` and `.venv` linked by `ln -s`; strip with `.venv/bin/python scripts/strip-solutions.py`; blind reviewer `mit-lecture-reviewer` on a different model from the writer; briefs in `docs/problem-sets-run/`. Tell writers to vary the position of the right choice in choice boxes and to add page-scoped symbol meanings for letters that also have a cosmology meaning (T₀, Ω, H).

### Progress and lessons (Account B writes here; Account A copies into docs/PROBLEM-SETS-RUN.md)
(none yet)

### Requests for the other account
(none)

---

## Bringing the work together (Account A, at the end of a window or when the owner asks)

1. `git fetch origin`, then on `main`: merge `run/a-8044-805` (fast-forward or merge commit).
2. Merge Account B's branch. If `data/symbols.json` conflicts, take `main`'s version and run `python scripts/merge-symbols.py <merge-base> <B's branch>` to add B's entries by meaning. `TASKS.md` merges cleanly as long as each account kept to its section.
3. Copy B's progress and lessons into docs/PROBLEM-SETS-RUN.md.
4. `npm run build` (must show `0 error(s)`), commit, push `main` (Vercel deploys it).
