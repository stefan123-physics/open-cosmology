# Siyavula: licence evidence

Read on 2026-11-20 (logged out, from this PC) by Claude for the owner. Used for the High School (docs/HIGHSCHOOL-PLAN.md §2.0). Short quotes only, to record what each page says.

| Page | URL | What it says |
|---|---|---|
| Book contents page (Physical Sciences Grade 10) | https://www.siyavula.com/read/za/physical-sciences/grade-10 | Footer: "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License." Embedded videos, simulations and presentations from external sources are not necessarily covered. |
| Book contents page (Natural Sciences Grade 7) | https://www.siyavula.com/read/za/natural-sciences/grade-7 | The same footer as above. |
| Section pages (e.g. Physical Sciences Grade 10, 17.1; Grade 11, 11.3) | https://www.siyavula.com/read/za/physical-sciences/grade-10/electric-circuits/17-electric-circuits-01 | Footer: "Except where otherwise noted, this site is covered by a closed copyright license. All rights reserved." |
| Open textbooks page | https://www.siyavula.com/read/za/science/grade-7 (redirects to the open textbooks list) | Branded printed/PDF books: CC BY-ND 3.0 (no changes). Unbranded versions of the same content: CC BY 3.0, "the only requirement being to give appropriate credit to Siyavula". Information Technology and Computer Applications Technology books: closed copyright (MTN). |
| Terms and Conditions | https://www.siyavula.com/info/terms-and-conditions | Some material is under a Creative Commons Attribution licence; a remix must state the author's name and "From siyavula.com"; "Only material that is clearly marked with a Creative Commons license can be re-used without permission"; no logos, brand marks or trademarks in a remix and no suggestion of endorsement. No clause about AI, machine learning, scraping or text and data mining. |

## Archived copies

On 2026-11-21 every Siyavula page the site cites (99 pages) was saved on the Internet Archive as evidence of its licence footer on that date: the snapshot addresses are in [siyavula-archive.tsv](siyavula-archive.tsv). To redo it for newly cited pages, run `python -I scripts/archive-siyavula.py` (it rewrites that file).

## How we read it

The textbook content is marked CC BY 3.0 at book level (contents pages, open textbooks page), and the section-page footer is the site's general default, which applies "except where otherwise noted". So the online textbook sections are treated as CC BY 3.0. Because the two statements differ, the owner asks Siyavula once to confirm (OWNER-TODO.md §6); keep the reply in this folder, personal email addresses removed.

## Rules that follow

- Use the online textbook text of Siyavula's open textbooks only; never the branded PDFs (CC BY-ND), never the closed-copyright IT and CAT books, never embedded third-party videos, simulations or figures.
- Rewrite in our own words (AGENTS.md Writing rules 1); no Siyavula logos or brand; no suggestion that Siyavula endorses the site.
- Never cite (or fetch) a section page whose footer says "All rights reserved" (rows `ARR` in docs/siyavula-licences.tsv), nor Physical Sciences Grade 12 sections 5.3, 5.4 and 5.5 (work, energy and power), which contain OpenStax material (owner decision 2026-11-21). `npm run content:check` fails on any of them (`SIYAVULA_BLOCKED` in scripts/check-content.ts). Before using a new Siyavula page, check its text for "OpenStax"; if it is there, do not use the page and add it to that list.
- Every lesson that uses Siyavula credits it automatically (components/Credit.tsx, High School credits): "From siyavula.com", Siyavula Education as author, a link to CC BY 3.0, and a note that the material was rewritten and adapted.
