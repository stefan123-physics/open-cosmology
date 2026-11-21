# Writing every problem set: run guide (2026-11-21)

How to write the problem sets of every university course, over several days and several chats. Read with AGENTS.md ("Problem sets", "Writing rules") and [PROBLEM-SETS-DESIGN.md](PROBLEM-SETS-DESIGN.md). Keep the progress table at the end up to date: it is how the next chat knows where to continue.

## What exists

- Built: problem-set pages (`kind: problems`), answer boxes, hints, solutions, points, progress, checks (`content:check`, `calc:test`, `test:answers`). Not built: exam mode and the homepage suggesting a set (design §5–6); not part of this run.
- Written and reviewed: 8.286 Problem Sets 1 (draft until its blind review) and 2; all nine High School practice sets.
- Models: a pilot on 8.286 Problem Set 2 (2026-11-21) had Fable 5.2 and Opus 5.5 write the same set from the same brief. Both took about 14 minutes and 225k tokens, and both passed a blind review by the same reviewer with 0 errors (warnings: 3 and 2). One sample only. Writers may run on Fable; keep the blind reviewer on a different model from the writer (Opus) so it does not share the writer's blind spots.

## Order

The order of work in AGENTS.md, maths alongside physics: 8.286 (finish Sets 1 and 3–10 first: cosmology is the destination), then 8.01 + 18.01, 8.02 + 18.02, 8.03 + 18.03, 8.033, 18.06, 8.04, 8.044, 8.05, 8.06, 8.07, 8.08, 8.09, 8.902, 8.962. The course URLs are in each `_course.json`.

Before a course: open its OCW Assignments page and list its problem sets (number, PDF, solutions PDF if any, the lectures each covers from the calendar). Check every PDF for "All rights reserved", "courtesy", "Image by …" or "excluded from our Creative Commons license": skip those items. Some courses have no problem sets on OCW, or only exams; note it in the table and move on. Ferreras (textbook course) has none: skip it unless the owner decides otherwise.

## One set, step by step

1. **Writer** (agent, model Fable), in its own git worktree under `.claude/worktrees/<name>` on its own branch, with `node_modules` and `.venv` linked as junctions (PowerShell: `New-Item -ItemType Junction`). It writes `content/<year>/<course>/<course-slug>-problem-set-N.mdx` (`kind: problems`, `set: N`, `covers`, `solutions: own` or `mit`, `status: draft`), its calcs file with an `answer:` entry per box and independent checks of every formula answer, and page-scoped symbol meanings; runs `content:check`, `calc:test -k <slug>`, `test:answers`; commits on its branch. Model the page on `content/year-4/8.286/8-286-problem-set-2.mdx`.
2. **Blind review** (agent, model Opus, agent type `mit-lecture-reviewer`): it strips hints, answers and solutions by script, solves first, saves its answers, then compares, and checks citations, coverage, licensing and answer-box tolerances. It writes `reviews/<course>/<slug>.md` with `COUNTS: errors=… warnings=… info=…`.
3. **Fix** every error and warning (the writer can be resumed with the review), add `## Resolution (date, by the page author)` to the review, set `status: reviewed`.
4. **Bring it onto the run branch** in the main checkout: `git checkout <branch> -- <the mdx> <the calcs yaml>`, then `python scripts/merge-symbols.py <base commit> <branch>` for `data/symbols.json` (never copy the whole file: other sets changed it too), then `npx tsx scripts/check-content.ts` and commit. Remove the worktree: first remove the two junctions with `cmd /c rmdir`, never `rm -rf` (that would follow them into the real `node_modules`), then `git worktree remove --force`.

Run several sets in parallel (one writer per worktree, up to about four at once), but bring them onto the branch one at a time.

## Briefs for the agents (2026-11-21)

`docs/problem-sets-run/WRITER-BRIEF.md` and `docs/problem-sets-run/REVIEW-BRIEF.md` are the briefs the 8.286 run gave each writer and blind reviewer. Download MIT's PDFs to the scratchpad (outside the repo), convert them with `pdftotext -layout`, strip the page with `scripts/strip-solutions.py`, and point each agent at its brief plus the paths. Add to each writer's task the lessons learned below. Each reviewer writes its review to the scratchpad; the main session copies it in, fixes the findings, appends the Resolution and sets `status: reviewed`.

Extra lessons from the 8.286 run, all flagged by reviewers:
- Choose formula-box `vars` ranges where wrong-but-close forms (|sin θ| against sin θ) differ everywhere: the browser checks five random points.
- A choice box must not be answerable from units alone; choice strings contain no backslash TeX.
- Mark parts that are our own additions as such; never claim more than can be checked ("only", "everywhere").
- If MIT points to a solution outside OCW (web.mit.edu quiz solutions), say so in the intro and do not use it.
- Check every transcript page against the printed footer; do not reuse page numbers from lessons unchecked.
- A set that links to another set (8.286 Set 10 → Set 9 #p5) needs that set merged first.

## Lessons learned (2026-11-20 and 21)

- Reviews catch real errors in about half of all pages (wrong hint direction, a source slip repeated from MIT, a quiz with two right answers, terms used before their lesson). Never skip the blind review.
- No `## Summary` that prints the answers: it lets readers see answers without opening a solution.
- Every listed mistake needs a hint that matches that mistake; reviewers check this.
- Number boxes compare bare numbers: say the unit in the statement and keep tolerances tight enough (about 1–2%) to reject listed slips.
- Cite papers through arXiv only (AGENTS.md rule 11); read abstracts, never paywalled full texts.
- The pre-commit hook checks the whole working tree: do not commit in the main checkout while an agent is editing files there.
- On this Windows PC the Write and Edit tools often fail with ENOENT inside worktrees and some folders: agents write in the scratchpad and copy files in, or edit with a Python script. In the Bash tool, backslashes inside inline heredocs get halved: put Python with backslashes in a file.
- Commit after each set; push when the owner asks.
- Blind review input: `python scripts/strip-solutions.py <page.mdx> <out>` prints the page without hints, answer boxes and solutions; hand the reviewer only that file and MIT's PDF.
- On Linux (cloud sessions, 2026-11-21): link with `ln -s ../../../node_modules node_modules` (and `.venv`) inside the worktree, remove the links with `rm node_modules .venv` (no trailing slash) before `git worktree remove`; Python is `.venv/bin/python`. `.gitignore` ignores the links and `.claude/worktrees/`.

## Progress

| Course | Sets on OCW | Written | Reviewed | Notes |
|---|---|---|---|---|
| 8.286 | 10 (+ 2 supernova data files for Set 8) | 1–10 | 1–10 | Set 1 blind-reviewed 2026-11-21 (0 errors, 0 warnings). No "rights reserved" or "courtesy" notices in Sets 1–10; Set 2 has one figure "Image by MIT OpenCourseWare" (OCW's own, not redrawn). Covers (site lectures, from the calendar and topics): 3: 5–7, 4: 8–9, 5: 10–12, 6: 13–16, 7: 16–18, 8: 18–20, 9: 20–22, 10: 22–23 (writers confirm). Set 9 Problem 5 and Set 10 Problem 1 are the same monopole problem |
| 8.01 (8.01SC 2016) | 12 (no solutions on OCW: `solutions: own`) | 1–12 | 1–12 | Resource pages `mit8_01f16_pset1_new`, `mit8_01f16_pset2` … `pset12`; no rights notices. The worked examples listed with each set are videos with lessons already, not part of the sets. Each set maps to the OCW week of the same number |
| 18.01 (Fall 2006) | 8 (Sets 2 and 8 in two PDFs each) | 1–8 | 1–8 (Set 8 is one page for 8A and 8B) | Each set has Part I (exercises from the Simmons textbook, which may not be used, and from MIT's course reader, Section E, solved by MIT in Section S on OCW) and Part II (MIT's own problems, no solutions). Run decision 2026-11-21: a page = Part II in full (`solutions: own`), plus a short list of the course-reader Part I exercises linked to OCW's E and S PDFs, not rewritten; Simmons items left out. Set 6: MIT's printed "exact" Fresnel value 1.22505 is √(π/2) times the integral (0.97745); corrected on the page. MIT's sheet numbers some lectures differently from OCW (its Lecture 25 = site Lecture 27) |
| 8.02 (8.02T Spring 2005) | none: "The written homework assignments are not available to OCW users"; only 10 in-class problem-solving sessions (`resources/solving01` … `solving10`) | none | none | Owner decision needed: make the problem-solving sessions into practice pages, or skip 8.02 |
| 18.02 (Fall 2007) | 12 (`resources/ps1` … `ps12`; Part A = Edwards & Penney textbook + Supplementary Notes with solutions; Part B = MIT's own, no solutions) | 1 (2–5 being written on branches `ps-1802-2` … `ps-1802-5`) | 1 | Same rule as 18.01: Part B in full, Part A Notes exercises linked; textbook left out. Some sets use MATLAB: keep, let the reader use any tool |

**Resume here (2026-11-21, second chat):** 8.01, 18.01 and 8.286 are complete and reviewed; 18.02 Set 1 is reviewed (0 errors, 0 warnings). Writers for 18.02 Sets 2–5 run in worktrees `.claude/worktrees/ps-1802-N` (branch `ps-1802-N`). For each branch with a "(draft)" commit: strip it, blind review (REVIEW-BRIEF.md; MIT sheets in the scratchpad or from `resources/psN/`), fix, bring it in (step 4), remove its worktree. A branch without a draft commit: check `git -C .claude/worktrees/ps-1802-N status`, commit a complete page or restart its writer. Then Sets 6–12. Writers get, besides WRITER-BRIEF.md, the 18.02 rules: model page 18.02 Set 1; Part B in full with own solutions; Part A Supplementary-Notes exercises only listed and linked, grouped by lecture; textbook (Edwards and Penney) left out; map MIT's calendar lecture numbers (which count exam days) to the site's by title; MATLAB problems kept, any tool allowed; render the sheet with `pdftoppm` because pdftotext loses maths. Empty leftover folders `.claude/worktrees/ps-1801-8` and `ps-801-4` were locked; delete them when free.
