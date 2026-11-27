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
- [x] 8.044 Set 9: blind review of the draft on branch `ps-8044-9` (worktree `.claude/worktrees/ps-8044-9` on Account A's computer), fix, bring onto `run/a-8044-805`.
- [x] 8.044 Sets 10 and 11 (MIT `resources/mit8_044s13_psN/`, solutions `…_pssN/`, `solutions: mit`).
- [~] 8.05 (Fall 2013): 11 sets (Sets 1–4 done 2026-11-26; second window started 2026-11-27 from `main` 0b71a1d: Sets 5–9 done (0 errors each); next Sets 10 and 11), `resources/assignment-1/` … `assignment-11/`. First check every PDF for rights notices and whether solutions are on OCW.

Later windows:
- [ ] 8.07 (Fall 2012): 10 sets, `resources/mit8_07f12_pset01/` …
- [ ] 8.08 (Spring 2005): 12 sets, `resources/prb1/` … `prb12/`
- [ ] Glossary: review the "First explained in" links that may be passing mentions (`npm run glossary:intro`).
- [x] Trial merge after Account B's first one or two reviewed sets (done 2026-11-26 with B's 8.06 Sets 1–3: 0 errors after `merge-symbols.py` was taught to fold a new entry into an existing entry with the same form; both accounts had added `V_b`, `P_+`, `P_-` under different ids): in a scratch worktree, merge `main`, `run/a-8044-805` and `origin/run/b-806-8962`, run `merge-symbols.py` and `content:check`, then throw the worktree away (nothing is pushed). Write any problem found under "Change requests".
- [x] Merge both branches into `main` (see "Merging") and answer Account B's change requests. Done 2026-11-26: `main` at 8364aed has `run/a-8044-805` (8.044 Sets 9–11, 8.05 Sets 1–4) and `run/b-806-8962` (8.06 Sets 1–5); content check 0 errors, 65 answer tests and 19876 calc tests passed, build 0 errors; both change requests ticked. **Account B starts its next window from the new `main`** (`git checkout main && git pull`, then a new branch or `git merge main` into `run/b-806-8962`); the hook is now executable, so `chmod +x` is no longer needed.
- [x] Second merge into `main` (2026-11-27, after Account B's "merge now"): `run/a-8044-805` (8.05 Sets 5–9) and `run/b-806-8962` (8.06 Sets 6–9, 8.962 Set 1); `data/symbols.json` merged by meaning with `merge-symbols.py`; B's progress copied into docs/PROBLEM-SETS-RUN.md. **Both accounts start their next window from the new `main`** (`git checkout main && git pull`, then `git merge main` into the run branch).

**Resume here (Account A, 2026-11-27, stopped near 85% of the 5-hour limit):** branch `run/a-8044-805`, everything pushed. Done this window, each blind-reviewed (Fable writers, Opus reviewers, 0 errors each), fixed and pushed: 8.05 Sets 5 (covers 8–11; MIT Problem 7 skipped, only a Griffiths pointer), 6 (10–11), 7 (12–14, 16), 8 (14–17; notes the MIT slip in 2(d): ΔH/⟨H⟩ rises up to |α| = 1/√2) and 9 (16–19). No drafts or worktrees are open. Next: 8.05 Sets 10 (calendar 20–23) and 11 (24–26), then 8.07 and 8.08. Writers decide `covers` from the topics: so far every set differed from the calendar. MIT sheets, chapter notes and the 8.05 course note are in this session's scratchpad `805/` (it may be cleared: each sheet is the first .pdf of `resources/assignment-N/`; the course note's text is in docs/PROBLEM-SETS-RUN.md's 8.05 row plus the lessons there). Cost: about 10–12% of the 5-hour limit per set (Fable writer about 320–380k tokens, Opus review 130–200k). Nothing merged into `main` this window.

---

## Account B tasks

**Branch:** `run/b-806-8962`

**You own:** the problem sets of **8.06, 8.09, 8.962, 8.902**:
- `content/year-3/8.06/*-problem-set-*.mdx`, `content/year-4/8.09/*-problem-set-*.mdx`, `content/year-5/8.962/*-problem-set-*.mdx`, `content/year-5/8.902/*-problem-set-*.mdx`
- `calcs/8.06/`, `calcs/8.09/`, `calcs/8.962/`, `calcs/8.902/` (problem-set files)
- `reviews/8.06/`, `reviews/8.09/`, `reviews/8.962/`, `reviews/8.902/` (problem-set files)
- your own new lines in `data/symbols.json` (see the rule for that file below).

This window:
- [x] Set up: `git pull`; create branch `run/b-806-8962` and **push it at once** (`git push -u origin run/b-806-8962`): if that push fails, stop and tell the owner, because no work can be saved; `npm ci`; `python -m venv .venv` and install `requirements-dev.txt` (`.venv/Scripts/pip` on Windows, `.venv/bin/pip` on Linux/macOS); check `pdftotext` exists; download every MIT PDF for 8.06 and 8.962 to a folder outside the repository. If ocw.mit.edu cannot be reached, stop and tell the owner.
- [x] 8.06 (Spring 2018): 9 sets (all done 2026-11-27), `resources/problem-set-1/` … `problem-set-9/`. First check every PDF for rights notices and whether solutions are on OCW.
- [~] 8.962 (Spring 2020): 11 sets, `resources/mit8_962s20_pset01/` … `pset11/` (some sets have a separate `_hint` PDF; `resources/ps10/` may be a second copy of Set 10: check).

Later windows:
- [ ] 8.09 (Fall 2014): 10 sets, `resources/mit8_09f14_pset1/` … (the `damped_pendulum_phasespace` and `logistic_map` files are programs: check their licence before use).
- [ ] 8.902 (Fall 2023): no assignments page was found on 2026-11-26; check the course for problem sets, and if there are none, note it here and skip.

How (docs/PROBLEM-SETS-RUN.md, "One set, step by step"): writer agent in its own git worktree under `.claude/worktrees/` (link `node_modules` and `.venv`: junctions on Windows, `ln -s` on Linux/macOS), given `docs/problem-sets-run/WRITER-BRIEF.md`; strip the page with `scripts/strip-solutions.py`; blind review by the `mit-lecture-reviewer` agent with `docs/problem-sets-run/REVIEW-BRIEF.md`. Tell writers to vary the position of the right choice in choice boxes, to add page-scoped symbol meanings for letters that also have a cosmology meaning (T₀, Ω, H), and that a calcs `shown:` entry must match the page text.

### Progress and lessons (Account B writes here; Account A copies them into docs/PROBLEM-SETS-RUN.md when merging)
- 2026-11-26 setup (Linux PC, 2 agents at a time: one writer on Fable, one blind reviewer on Opus). All 9 8.06 sheets and all 15 8.962 PDFs (11 sheets, 4 hint sheets for Sets 1, 3, 4, 7) downloaded: no "rights reserved", "courtesy", "Image by" or "excluded" notice in any of them. 8.06: no solutions on OCW (`solutions: own`); due dates put Set 1 at L3, 2 at L5, 3 at L7, 4 at L9, 5 at L11, 6 at L15, 7 at L18, 8 at L22, Set 9 not in the calendar (writers confirm covers). 8.962 `resources/ps10/` is not a second copy of Set 10: it is MIT's Mathematica notebook `PS10.nb` for Set 10.
- 8.06 Set 1 (covers 1–3, 80 points) reviewed blind: 0 errors, 3 warnings, fixed (commit 706d111). Set 2 (covers 1–5, 80 points) reviewed blind: 0 errors, 2 warnings, fixed (ef53514). MIT slip on Set 2's sheet: "polarizability α corresponds to energy −αE²" (it is −½αE²), noted on the page.
- Lessons: (1) On Linux, Git checks `.githooks/pre-commit` out in a new worktree without the executable bit (tracked as 100644), so the commit check silently does not run there: `chmod +x .githooks/pre-commit` in every new worktree (see Change requests). (2) The NIST Constants home page now shows CODATA 2022: cite `https://physics.nist.gov/cuu/Constants/archive2018.html` for 2018 values. (3) A formula not printed on MIT's sheet is cited to the notes (`reading1`, equation number), not `cite="mit"`. (4) A new compound symbol entry added by one set (`alpha-p`, form `\alpha_p`) makes `content:check` fail on an earlier set that uses the same form: after `merge-symbols.py`, run `content:check` and add a page-scoped meaning for the earlier page. (5) `data/symbols.json` has one entry per line, so `git diff` shows every touched entry as removed and added: check add-only by meaning with a script, not by the diff. (6) Usage: one set (Fable writer about 250–285k tokens, Opus reviewer 135–165k) took about 25–28 minutes to write and 6–8 minutes to review.
- 8.06 Set 3 (covers 4–6: fine structure, Zeeman; no WKB on the sheet) reviewed blind: 0 errors, 3 warnings, fixed (596b216). Lessons: in a row of similar choice boxes the right answer must not be the shortest either (4 of 5 were "a CSCO"); a formula label must name the state correctly (m_j = +½, not "spin up"); renaming a Formula label breaks a calcs `shown:` entry that quotes it.
- Usage on this PC (Max plan): the 5-hour limit went from 0 to 71% for 3 sets reviewed and merged, 2 more written (about 12–15% per set with writer, reviewer and merging). Plan about 5 sets per window with 2 agents.
- 8.06 Set 4 (covers 7–8: WKB, Airy functions; Problem 5 is our own, MIT's is a Griffiths pointer) reviewed blind: 0 errors, 0 warnings (9cf6676). Set 5 (covers 8–11: tunnelling, first-order amplitude, absorption and emission) reviewed blind: 0 errors, 2 warnings, fixed (0d2bad7). Lessons: a number box whose answer is a large logarithm (log₁₀ τ = 14609) needs an absolute width of a few units, not a percentage (0.2% let through forgetting Δt or giving years); a "distractor" choice that is a sufficient condition is a second right answer.
- Writers' `covers` often differ from the calendar's due dates: decide `covers` from the sheet's topics (Set 3 had no WKB; Set 4 no time-dependent theory).
- Answer to A's change request (alpha-p and alpha-p-polarizability, both form `\alpha_p`): both were B's own new entries from this run (neither is on `main`), so B folded them: `alpha-p-polarizability` removed, `alpha-p` keeps a meaning for 8-06-problem-set-1 and one for 8-06-problem-set-2 (commit after 1a4b8e9). Still add-only against `main`. Cause: a writer adds an entry under a new id without searching for an existing form; tell writers to search `forms` before adding an entry.

- 8.962 Set 1 (covers 1–4: four-vectors, 4-velocity, projection tensor, two boosts give a rotation, GZK threshold 2.885 × 10¹¹ GeV) reviewed blind: 0 errors, 0 warnings. MIT's sheet header says "8.962 Spring 2006" (an older sheet reused); its "hint" sheet has only one clarification (t, x, y are Cartesian), used as reading5. 8.962 transcripts have no printed footer: `at=` counts PDF pages. The T = 2.73 K entry in `calcs/values.yaml` names another page in its role text; the page passes `content:check`, so B left values.yaml alone (A may add the page there).
- Usage this window (2 agents at a time): 8.06 Sets 6–9 and 8.962 Set 1 took the 5-hour limit from 0 to about 82%. Fable writers cost about 12–14% each (270–345k tokens, 25–35 minutes); Opus blind reviews only 1–2% each (110–170k tokens, 5–8 minutes). Running two writers at once, then two reviewers, worked well.
- Third window (2026-11-27, started at the 5-hour reset, from `main` bf4e56c): 8.962 Sets 2–5 reviewed blind and pushed. Set 2 (covers 4–6: dust, stress-energy of rings, virial identities, vector potential, the accelerated astronaut) 0 errors, 1 warning; Set 3 (covers 5, 6, 8, 9: Rindler horizon, perfect fluid, 3+1 split of F, Christoffel transformation, connection identities; MIT's Problems 5–6 are only Carroll pointers, so Problems 5–6 are our own) 0 errors, 2 warnings; Set 4 (covers 5–10: Rindler Christoffels, relativistic Euler equation, hydrostatic equilibrium, affine parameter, charge with a Killing vector) 1 error (the atomic mass constant called exact), 2 warnings; Set 5 (covers 8–11: orbits and tidal deviation, light bending, parallel transport and Riemann on the sphere, Killing identities, 1+1 Riemann) 0 errors, 2 warnings. All fixed.
- Lessons: (1) a listed mistake that is undefined over part of the `vars` range (1/√(1 − g²t̄²)) is seldom matched: keep every mistake finite over the whole range. (2) Name every constant correctly (exact vs measured). (3) Every reading in the frontmatter must be cited, and every "(in our calculation file)" claim must be true. (4) Carroll and Schutz pointers on MIT's sheets: drop them, never fetch the books; where a whole problem is only a pointer, write our own and say so. (5) `merge-symbols.py` folds compound Γ entries of different sets (ids ending -ps3, -gr) into one: run `content:check` after each merge.
- 8.962 Set 6 (covers 11–14: constraint equations via the Bianchi identity, action with a cosmological constant, Nordström's theory, weighing a relativistic body, numbers with the sheet's constants) reviewed blind: 0 errors, 1 warning (a mistake hint said "half the coefficient of 2 dt̄ dx̄"), fixed. Sheet slips noted on the page: Sun's mass as a time 4.93 vs 4.92 × 10⁻⁶ s, an index α for μ.
- Usage this window: Sets 2–5 (four Fable writers, two at a time, four Opus reviews) took the 5-hour limit from 0 to about 68%; Set 6 (one writer asked to stay near 250k tokens, one review) took it to about 83%. The owner allowed up to 90% for Set 6's review.

**Resume here (2026-11-27, Account B, end of third window, stopped near 84% of the 5-hour limit):** branch `run/b-806-8962`, everything pushed. Done: 8.06 complete (Sets 1–9) and 8.962 Sets 1–6, all blind-reviewed and fixed. Half done: nothing (no open worktrees or drafts). Next: 8.962 Sets 7–11 (resource pages `resources/mit8_962s20_psetNN/`, hint sheet `…_pset07_hint/`; `ps10/` is MIT's Mathematica notebook PS10.nb for Set 10; calendar due dates: Set 7 at L18, 8 at L20, 9 at L22, 10 and 11 at L24; decide `covers` from the topics), then 8.09 and 8.902. MIT's PDFs were in the session scratchpad: download them again (each resource page's first .pdf link). Bring a set onto the run branch with `python scripts/merge-symbols.py <worktree base commit> ps-…`, then `content:check`.

**Merge status (Account B, 2026-11-27, end of third window): merge now.** No set in progress (no open writer, review or worktree), everything pushed. New on `run/b-806-8962` since the last merge (bf4e56c): 8.962 Sets 2, 3, 4, 5 and 6. Account B starts no new set until Account A has merged `run/b-806-8962` into `main`.

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

- [x] (from B to A, 2026-11-26) `.githooks/pre-commit`: it is tracked as mode 100644, so on Linux and macOS a fresh checkout or worktree does not run it and commits there skip the checks without a warning. Please run `git update-index --chmod=+x .githooks/pre-commit` and commit. Until then Account B does `chmod +x` in each worktree. Done by A (3ece345, mode 100755), on `main` since the merge; `chmod +x` is no longer needed.

- [x] (from A to B, 2026-11-26) `data/symbols.json` on `run/b-806-8962`: two entries, `alpha-p` and `alpha-p-polarizability`, both have the form `lpha_p`; one symbol should have one entry. The merge script now folds them together, so B need not act unless it edits those entries again. Done by B (257bc50).

---

## Merging (Account A, at the end of a window or when the owner asks)

A trial merge early in the run (Account A's task list) catches conflicts while they are small; the real merge comes at the end.

1. `git fetch origin`; on `main`, merge `run/a-8044-805`.
2. Pull Account B's branch and merge it. A `TASKS.md` conflict in "Change requests" is resolved by keeping B's line, ticked. If `data/symbols.json` conflicts, keep `main`'s version and run `python scripts/merge-symbols.py <merge-base> origin/run/b-806-8962` to add B's entries by meaning. `TASKS.md` merges cleanly as long as each account kept to its own section.
3. Copy B's progress and lessons into docs/PROBLEM-SETS-RUN.md; answer open change requests.
4. Run the tests (rule 8) and `npm run build` (must show `0 error(s)`), commit, push `main` (Vercel deploys it).
