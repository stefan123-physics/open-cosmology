# Blind review brief: one Open Cosmology problem set

Act as the reviewer described in `.claude/agents/mit-lecture-reviewer.md` (section "Problem sets" and the template). Read that file first.

Your task names: the page path (in a worktree or the main checkout), the stripped statements file (hints, answer boxes and solutions removed), MIT's problem-set text (pdftotext), and where to write the review.

## Order (strict)
1. Read ONLY the stripped statements file and MIT's text. Do NOT open the full page, its calcs file, or any other problem-set review yet.
2. Solve every problem and part in full, on your own. Use Python (`/home/user/open-cosmology/.venv/bin/python`, numpy/scipy/sympy available) for algebra checks and numbers. Write your final answers to the review file (section `## Blind solve`, "My answers") BEFORE opening the full page.
3. Then open the full page and its calcs file and check, as the agent file says: each final answer vs yours (check equivalence by value at a few points), every solution step and its closing check, each `<Answer>` (expr/value matches the solution, `vars` ranges finite and physical, tolerance tight enough to reject each listed mistake but loose enough for 3 significant figures, each mistake hint true of that formula), every hint matching its mistake, no hint giving the result away, fidelity to MIT (same physics and order of parts, own wording, MIT's points), citations (`at=` page numbers = printed page of MIT's PDF; lecture-transcript citations: fetch the transcript PDF from the page's `source.readings` and check the printed footer page with `pdftotext -f N -l N`), licensing, symbols, claims about lessons, no `## Summary` with answers, no em dashes.
4. With `solutions: own`, any disagreement is an error until shown wrong by a calculation written into the review.

Do not edit the page. Write the review in the template, with a final line `COUNTS: errors=<n> warnings=<n> info=<n>`. Downloads go in a scratch folder outside the repo.

Report back: the verdict, the COUNTS line, and a numbered list of every error and warning (one line each, with the exact fix you suggest).
