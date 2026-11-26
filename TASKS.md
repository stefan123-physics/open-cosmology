# Two accounts, two computers: who does what (2026-11-26)

Two Claude Code accounts work on this repository at the same time, on two different computers: **Account A** and **Account B**. They cannot see or talk to each other; they coordinate only through Git and this file.

**Not the earlier two-PC work.** Account A and Account B are not "PC 1" and "PC 2" of docs/TWO-PC-WORKFLOW.md: that High School work is finished and its file is only a record. Old branches on GitHub (`hs-block-*`, `ps-*`, `problem-sets*`, `pc1/*`) are finished history: never check them out, build on them or push to them. Start only from the latest `main`. If this computer still has old local branches or uncommitted changes from earlier work, leave them alone and tell the owner.

**Committing in this run.** AGENTS.md says "commit only when asked": for this run the owner asks both accounts to commit and push as rule 4 says.

## Rules

1. **Always pull the latest changes before starting work** (`git pull` on your branch, and `git fetch origin` to see the other branch and `main`).
2. **Read TASKS.md before every work session**, and again before every commit.
3. **Only edit files in your own area** (your "You own" list below). A shared file is edited only by its owner (see "Shared files and their owner"); if you need a change in one, add it under "Change requests" and carry on with something else.
4. **Commit small changes often, with clear messages, and push right after updating TASKS.md.** For the problem-set run: one commit per reviewed set (message "<course> Problem Set N, reviewed"), and push straight after every commit.
5. **Mark tasks as in progress when you start (`- [~]`) and done when you finish (`- [x]`)**, in your own section only. Commit and push that change at once, so the other computer sees it.
6. **Don't install, remove or upgrade packages unless you own the package file** (`package.json`, `package-lock.json`, `requirements-dev.txt`: owned by Account A). `npm ci` and creating `.venv` from `requirements-dev.txt` are fine: they change no tracked file.
7. **Never commit secrets or local environment files** (`.env*`, `.claude/settings.local.json`, API keys, tokens, `.venv/`, `node_modules/`). Check `git status` before every commit.
8. **Before merging, pull the other branch, run the tests and fix any conflicts**: `npx tsx scripts/check-content.ts`, `npm run test:answers`, `npm run calc:test`, then `npm run build` (must show `0 error(s)`).

Also, from AGENTS.md and docs/PROBLEM-SETS-RUN.md, which still apply in full:
9. Work on your own branch (below), never on `main`. Only Account A merges into `main` (see "Merging").
10. Every problem set gets a blind review on a different model from its writer before it is committed. Never skip the commit checks (`--no-verify`).
11. Run at most 3 agents (writers and reviewers together) at the same time: four at once used 37% of a 5-hour limit in 20 minutes.
12. Stop at 85% of your 5-hour usage (or of the weekly limit, whichever comes first). Before stopping, write a "Resume here" note at the end of your section, commit and push.
13. No em dashes in site text, no OpenStax, nothing marked "All rights reserved". MIT's PDFs are downloaded to a folder outside the repository and never committed.

Status marks: `- [ ]` to do, `- [~]` in progress, `- [x]` done.

---

## Account A tasks

**Branch:** `run/a-8044-805`

**You own:** the problem sets of **8.044, 8.05, 8.07, 8.08**:
- `content/year-3/8.044/*-problem-set-*.mdx`, `content/year-3/8.05/*-problem-set-*.mdx`, `content/year-4/8.07/*-problem-set-*.mdx`, `content/year-4/8.08/*-problem-set-*.mdx`
- `calcs/8.044/`, `calcs/8.05/`, `calcs/8.07/`, `calcs/8.08/` (problem-set files)
- `reviews/8.044/`, `reviews/8.05/`, `reviews/8.07/`, `reviews/8.08/` (problem-set files)
- every shared file marked "A" below.

This window:
- [ ] 8.044 Set 9: blind review of the draft on branch `ps-8044-9` (worktree `.claude/worktrees/ps-8044-9` on Account A's computer), fix, bring onto `run/a-8044-805`.
- [ ] 8.044 Sets 10 and 11 (MIT `resources/mit8_044s13_psN/`, solutions `…_pssN/`, `solutions: mit`).
- [ ] 8.05 (Fall 2013): 11 sets, `resources/assignment-1/` … `assignment-11/`. First check every PDF for rights notices and whether solutions are on OCW.

Later windows:
- [ ] 8.07 (Fall 2012): 10 sets, `resources/mit8_07f12_pset01/` …
- [ ] 8.08 (Spring 2005): 12 sets, `resources/prb1/` … `prb12/`
- [ ] Glossary: review the "First explained in" links that may be passing mentions (`npm run glossary:intro`).
- [ ] Trial merge after Account B's first one or two reviewed sets: in a scratch worktree, merge `main`, `run/a-8044-805` and `origin/run/b-806-8962`, run `merge-symbols.py` and `content:check`, then throw the worktree away (nothing is pushed). Write any problem found under "Change requests".
- [ ] Merge both branches into `main` (see "Merging") and answer Account B's change requests.

---

## Account B tasks

**Branch:** `run/b-806-8962`

**You own:** the problem sets of **8.06, 8.09, 8.962, 8.902**:
- `content/year-3/8.06/*-problem-set-*.mdx`, `content/year-4/8.09/*-problem-set-*.mdx`, `content/year-5/8.962/*-problem-set-*.mdx`, `content/year-5/8.902/*-problem-set-*.mdx`
- `calcs/8.06/`, `calcs/8.09/`, `calcs/8.962/`, `calcs/8.902/` (problem-set files)
- `reviews/8.06/`, `reviews/8.09/`, `reviews/8.962/`, `reviews/8.902/` (problem-set files)
- your own new lines in `data/symbols.json` (see the rule for that file below).

This window:
- [~] Set up: `git pull`; create branch `run/b-806-8962` and **push it at once** (`git push -u origin run/b-806-8962`): if that push fails, stop and tell the owner, because no work can be saved; `npm ci`; `python -m venv .venv` and install `requirements-dev.txt` (`.venv/Scripts/pip` on Windows, `.venv/bin/pip` on Linux/macOS); check `pdftotext` exists; download every MIT PDF for 8.06 and 8.962 to a folder outside the repository. If ocw.mit.edu cannot be reached, stop and tell the owner.
- [ ] 8.06 (Spring 2018): 9 sets, `resources/problem-set-1/` … `problem-set-9/`. First check every PDF for rights notices and whether solutions are on OCW.
- [ ] 8.962 (Spring 2020): 11 sets, `resources/mit8_962s20_pset01/` … `pset11/` (some sets have a separate `_hint` PDF; `resources/ps10/` may be a second copy of Set 10: check).

Later windows:
- [ ] 8.09 (Fall 2014): 10 sets, `resources/mit8_09f14_pset1/` … (the `damped_pendulum_phasespace` and `logistic_map` files are programs: check their licence before use).
- [ ] 8.902 (Fall 2023): no assignments page was found on 2026-11-26; check the course for problem sets, and if there are none, note it here and skip.

How (docs/PROBLEM-SETS-RUN.md, "One set, step by step"): writer agent in its own git worktree under `.claude/worktrees/` (link `node_modules` and `.venv`: junctions on Windows, `ln -s` on Linux/macOS), given `docs/problem-sets-run/WRITER-BRIEF.md`; strip the page with `scripts/strip-solutions.py`; blind review by the `mit-lecture-reviewer` agent with `docs/problem-sets-run/REVIEW-BRIEF.md`. Tell writers to vary the position of the right choice in choice boxes, to add page-scoped symbol meanings for letters that also have a cosmology meaning (T₀, Ω, H), and that a calcs `shown:` entry must match the page text.

### Progress and lessons (Account B writes here; Account A copies them into docs/PROBLEM-SETS-RUN.md when merging)
(none yet)

---

## Shared files and their owner

Only the owner edits these. The other account asks under "Change requests".

| File or folder | Owner | Notes |
|---|---|---|
| `package.json`, `package-lock.json` | A | No installs, removals or upgrades by B. |
| `requirements-dev.txt` | A | Python packages for `calc:test`. |
| `next.config.ts` (security headers, CSP), `tsconfig.json`, `.gitignore`, `.gitattributes` | A | |
| `.githooks/`, `.github/workflows/` | A | Commit check and GitHub checks. |
| `.claude/agents/`, `.claude/launch.json`, `.cursor/` | A | Reviewer agents and tool settings. |
| `vercel.json` | A | Turns off Vercel preview builds for `run/**` and `ps-*` branches, so pushes during the run do not queue builds; `main` still deploys. |
| `.env*` (none exist), `.vercel/` | nobody | Never committed (rule 7). |
| `lib/` (shared types and utilities: schema, content, glossary, answers, symbols, speech) | A | |
| `components/`, `app/` | A | |
| `scripts/` | A | Including `merge-symbols.py`, `strip-solutions.py`, `check-content.ts`. |
| `calcs/values.yaml` | **both, add-only** | A set that quotes an H₀, age, T_CMB, Ω, n_s or σ₈ value the file does not have may **add** it, with its role (AGENTS.md Writing rule 7), in its own commit; **never change or delete an existing value**. Prefer a value already listed. A resolves any conflict at the merge (keep both additions). |
| `calcs/constants.yaml` | A | A new constant is a change request. |
| `data/glossary/*.json` | A | |
| `data/symbols.json` | **both, add-only** | Each adds entries and page-scoped meanings for its own pages on its own branch. Adding your own page to an existing meaning's `pages` list is also fine (and better than a duplicate meaning with the same text). **Never reword or delete an existing meaning**, and never remove a page from a list. A merges by meaning with `scripts/merge-symbols.py`. |
| Lessons (`content/**/*.mdx` that are not problem sets), `_course.json`, `_year.json` | A | Not edited during this run; a slip found in a lesson is a change request. |
| `AGENTS.md`, `OWNER-TODO.md`, `README.md`, `ROADMAP.md`, `docs/` | A | B's progress goes in its own section above. |
| `TASKS.md` | both | Each edits only its own task section; both may add to "Change requests". |

---

## Change requests

Add a line, never edit or delete someone else's. The owner marks it `[x]` when done (with the commit), or explains why not.

Format: `- [ ] (from B to A, 2026-11-26) file: what is needed and why`

(none yet)

---

## Merging (Account A, at the end of a window or when the owner asks)

A trial merge early in the run (Account A's task list) catches conflicts while they are small; the real merge comes at the end.

1. `git fetch origin`; on `main`, merge `run/a-8044-805`.
2. Pull Account B's branch and merge it. If `data/symbols.json` conflicts, keep `main`'s version and run `python scripts/merge-symbols.py <merge-base> origin/run/b-806-8962` to add B's entries by meaning. `TASKS.md` merges cleanly as long as each account kept to its own section.
3. Copy B's progress and lessons into docs/PROBLEM-SETS-RUN.md; answer open change requests.
4. Run the tests (rule 8) and `npm run build` (must show `0 error(s)`), commit, push `main` (Vercel deploys it).
