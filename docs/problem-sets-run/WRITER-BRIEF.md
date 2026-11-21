# Writer brief: one Open Cosmology problem set

You write ONE problem-set page for Open Cosmology, in your own git worktree (given in your task). Work only inside that worktree. Never touch the main checkout (/home/user/open-cosmology itself), never push, never switch branches.

## Read first (in your worktree)
- AGENTS.md: "Problem sets", "Writing rules", "Symbols", "MDX components", the YAML escaping note.
- docs/PROBLEM-SETS-RUN.md (lessons learned) and docs/PROBLEM-SETS-DESIGN.md §3, §4, §8, §9.
- docs/CONTENT_GUIDE.md section "Problem sets".
- The model page: content/year-4/8.286/8-286-problem-set-2.mdx, its calcs calcs/8.286/8-286-problem-set-2.yaml and its review reviews/8.286/8-286-problem-set-2.md (see what the reviewer flagged, avoid it).
- The site's lessons for the lectures the set covers (content/<year>/<course>/*.mdx with those `lecture:` numbers): use their notation, link them, and set `prerequisites` to them.

## The MIT source
The MIT problem set text is given in your task (a pdftotext file in the scratchpad, outside the repo). It is MIT OCW, CC BY-NC-SA: rewrite in your own words, keep MIT's physical situation and order of parts, never copy paragraphs. If the text has "All rights reserved", "Courtesy of", "Image by …" (other than MIT OpenCourseWare) or "excluded from our Creative Commons license", skip that item and say so in your report. Skip due dates, reading assignments and grading notes. MIT's extra credit = `optional`. MIT publishes no solutions for 8.286 problem sets: `solutions: own`.

## What to write
1. `content/<year>/<course>/<course-slug>-problem-set-N.mdx` (`kind: problems`, `set`, `lecture` = last lecture covered, `order: 90`, `covers`, `solutions`, `status: draft`, `source.url` = MIT's resource page for the set, readings for the lecture transcripts you cite). Every display equation is a `<Formula ... cite=... at=...>`; problem statements cite the MIT set (`cite="mit"`, `at="Problem 2, p. 3"` with the printed page). Points as MIT gives them; split between parts is ours (say so in "How to answer").
2. Answer boxes: formula boxes (`expr`, `vars` with physical ranges that keep it finite, `names`), number boxes (`value`, `tolerance` about 1–2%, unit stated in the statement, `calc=` id), choice boxes. Every listed `mistakes` entry needs a hint that is true of that wrong formula. "Show that" parts have no box (self-marking).
3. Hints go from a nudge to the method, never the result. Every solution states the idea, then steps, then a check (units, a limit, a number). No `## Summary` that prints answers.
4. `calcs/<course>/<slug>.yaml`: an entry with `answer: <box id>` for every box (number boxes: the value; formula boxes: an identity check of the formula against an independent route: a limit, special case, numerical integration or solve), plus every other number on the page. Format: copy the model's calcs file.
5. `data/symbols.json`: page-scoped meanings (`pages: [<slug>]`) for any symbol whose general meaning does not fit; never widen a general meaning. Edit this JSON with a Python script (load, modify, dump with the same formatting: check `git diff` stays small).
6. No em dashes. No OpenStax, LibreTexts, Wikipedia text. Cite papers only through arXiv abstracts. Post-2013 facts marked as later developments. Use values from calcs/values.yaml when quoting H0, ages, T_CMB, Ω.

## Checks (all must pass, 0 errors; fix warnings about your page)
- `npx tsx scripts/check-content.ts` (or `npm run --silent content:check`)
- `npm run --silent calc:test -- -k <slug>`
- `npm run --silent test:answers`
Then commit on your branch only: `git add <your mdx> <your calcs yaml> data/symbols.json` (never `git add -A`; node_modules and .venv are symlinks) and `git commit -m "<course> Problem Set N (draft)"`. The pre-commit hook runs the checks again.

## Report back (short)
Slug, file paths, commit hash, number of exercises/boxes, total points, `covers`, anything skipped for licensing, any decision you made that the reviewer should know, and anything you were unsure of.
