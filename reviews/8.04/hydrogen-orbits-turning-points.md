---
page: content/year-2/8.04/hydrogen-orbits-turning-points.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/more-on-the-hydrogen-atom-degeneracies-and-orbits/ (read: segment page; transcript PDF 5f762ab7…_fXlzY2l1-4w.pdf matches reading1)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/5f762ab73c124de816b8961e4eeb505a_fXlzY2l1-4w.pdf (read, 6 PDF pages, page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/orbits-in-the-hydrogen-atom/ (Lecture 23.4 transcript, read for the coverage question)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/rydberg-atoms/ (Lecture 23.3 transcript, skimmed for the coverage question)
  - OCW calendar and lecture-video list (read: L23 "Virial theorem applied. Circular orbits and eccentricity"; L24.1–24.4)
verdict: pass-with-notes
---

# Review: Hydrogen orbits: turning points and eccentricity

Writer: Opus. Reviewer: Opus (same model).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Introduction (whole page) | Segment 24.1 continues Lecture 23: "we were doing this for the hydrogen atom last time to try to understand the various orbits" (p. 2) and "I mentioned last time…" (p. 5). L23.4 "Orbits in the hydrogen atom" gives the intuitive effective-potential argument (l = 0 most elongated, l = n − 1 circular, r × p large for a circle) and announces the turning-point calculation "next time"; L23.3 "Rydberg atoms" covers the virial theorem. No site page covers either (hydrogen-spectrum says these topics "are not in the lecture notes on OCW", but they are in the video transcripts). | Presents the material as if Zwiebach starts it here; L23.3/23.4 not mentioned. | Add to the intro: "This calculation finishes what Lecture 23 began in its video segments 'Rydberg atoms' (the virial theorem) and 'Orbits in the hydrogen atom' (the picture of why l = n − 1 is circular and l = 0 most elongated); those segments have no page on this site yet." Optionally add two sentences of the L23.4 r × p intuition, cited to that transcript as a reference. Separately (not on this page): a page for L23.3–23.4 is still missing from the programme. |
| 2 | warning | `data/symbols.json`, entry `m`, meaning scoped to this page | (page uses `m` twice) | Meaning reads only "The mass of the electron (the reduced mass, in the radial equation)", but the page also uses $m$ as the magnetic quantum number ("one for each $m$ from $-l$ to $l$", "$u$ does not know about $m$", quiz 4 choice 3). | Change the text to "The electron's (reduced) mass, in ħ²/2m and a₀ = ħ²/(me²); as a label, the magnetic quantum number, −l ≤ m ≤ l." (as spherical-harmonics-radial-equation does). |
| 3 | info | "The energy diagram…", last paragraph | The 2l + 1 counting of states is the end of the segment (transcript pp. 5–6). | Moved to the first section and cited "transcript p. 5". | Either say "(the lecture ends with this point)" or cite "transcript pp. 5–6". Order otherwise follows MIT. |
| 4 | info | "Shapes of the orbits", first bullet | "r plus is almost the same as r minus. And the orbit is circular, completely circular" (p. 4). | "nearly a circle", later ε = 1/√n. | The page is right (ε = 1/√n ≠ 0); a bracket "(the lecture calls it completely circular; at finite n it is not quite)" would meet rule 4. Optional. |
| 5 | info | Signs of r± (note after the formula) | Board: $r_\pm = n^2a_0(1 \mp \sqrt{\cdots})$ (p. 4), yet p. 5 calls r₊ ≈ 18,000 a₀ the outer one. | Writes ±, explains in brackets. | Checked against the transcript: the note is accurate and handled as AGENTS rule 4 asks. No change. |
| 6 | info | Kepler paragraph | "the period … just depended on the semi-major axis. So periods are related to energies" (p. 5). | Same, in own words. | Optional own addition: the classical Coulomb energy of an ellipse is exactly E = −e²/(2a), and with a = n²a₀ this is E_n: an even more direct match. |

## Arithmetic and answer checks
Recomputed independently with NumPy/SymPy (`.venv/bin/python`):
- Quadratic: SymPy solves L/x² − 2/x + 1/n² = 0 to x = n(n ± √(n² − L)) = n²(1 ± √(1 − L/n²)). Coefficient ħ²/(2ma₀²) = e²/(2a₀) with a₀ = ħ²/(me²): correct.
- Every turning point substituted back into l(l+1)/x² − 2/x + 1/n² gives 0 to 1e-16.
- Rydberg example n = 100, l = 60: √(1 − 3660/10⁴) = 0.7962 → "1 ± 0.80" ok; r₊ = 17,962 a₀ (≈ 18,000), r₋ = 2,038 a₀ (≈ 2,000): ok. n²a₀ = 10⁴ × 0.0529177 nm = 529.18 nm: "about 529 nm, about half a micrometre", ok; 10⁴ × ground-state size: ok.
- Plot (n = 3): l = 1: 9(1 ± √(7/9)) = 16.937, 1.0627 (points 16.94, 1.063, caption "about 1.06 and 16.9") ok; l = 2: 14.196, 3.804 ok; l = 0: x = 18 ok; E₃ = −1/9 = −0.1111 ok. Curve minima (−0.5 at x = 2, −1/6 at x = 6) lie inside the range [−0.6, 0.3].
- Worked example n = 10: l = 0: 200, 0, ε = 1; l = 5: √0.7 = 0.8367, r₊ = 183.67, r₋ = 16.33; l = 9: √0.1 = 0.3162, r₊ = 131.62, r₋ = 68.38; n = 100, l = 99: ε = 0.1; E₁₀ = −(e²/2a₀)/100. All correct. Example is original (MIT uses only n = 100, l = 60).
- Eccentricity (page's own step, marked): for an ellipse with the force centre at a focus, r_min,max = a(1 ∓ ε), so ε = √(1 − l(l+1)/n²); l = n − 1 gives l(l+1)/n² = 1 − 1/n, ε = 1/√n. Correct.
- Quiz: Q1 l = 4 (index 2) correct; Q2 16a₀ (index 1) correct; Q3 r₋ = 0, r₊ = 2n²a₀ (index 3) correct; Q4 symmetry of 1/r (index 0) correct. Positions 2, 1, 3, 0: varied. Explanations correct.
- Flashcards correct.
- calcs file: all 25 `shown:` strings found verbatim on the page; `pytest tests/calc -k` for both pages: 38 passed.
- Formula citations: radial equation p. 1, turning-point condition p. 3, unit-free equation p. 3 (the "+1/n² = 0" form ends p. 3), 1/x p. 4, r± p. 4, semi-major axis p. 5: every PDF page checked; each equation is spoken as being written ("I'll write it here", "this equation"), so "board" is plausible (no slides exist).

## Coverage and order
- Covers every part of segment 24.1 in MIT's order (diagram of a central potential, the miracle of coinciding levels, turning points, quadratic, r±, l = n − 1 and l = 0 cases, semi-major axis, Rydberg example, Kepler, 2l + 1 counting), except that the 2l + 1 counting is moved forward (finding 3).
- Additions, all marked or clearly the page's own: eccentricity formula ("the page's own step"), n = 10 worked example, the plot ("The page's own illustration"), and the Kepler/dark-matter callout.
- Lecture 23 segments 23.3 "Rydberg atoms" and 23.4 "Orbits in the hydrogen atom" have no page (finding 1). L23.4 is the qualitative half of exactly this page's topic, so this page should at least mention it; full coverage belongs on a separate Lecture 23 page.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript or on the segment page (grep). Figures are the page's own (generated plot). Text is rewritten; no copied sentences found (only short phrases like "semi-major axis", "periods are related to energies").
- No OpenStax or LibreTexts material.

## Notes
- Forward links: `leadsTo` 8.05 L26 exists (hydrogen-hidden-symmetry, Runge–Lenz) and Ferreras 2.2 exists (rotation-curves); the callout link `/courses/fundamentals-of-dark-matter/rotation-curves` resolves. The callout's physics (Keplerian fall-off expected beyond the visible matter, flat curves measured) is right and is clearly a site addition.
- Symbols: `npm run content:check` in the worktree: 0 errors; no symbol warnings for this page. Page-scoped meanings for ε (eccentricity), n, l, r, r±, E, E_n, V, V_eff, x, e, a₀, φ fit; only `m` is incomplete (finding 2).
- No em dashes; `## Summary` present.

COUNTS: errors=0 warnings=2 info=4

Writer: Opus. Reviewer: Opus (same model).

## Resolution (2026-11-28, by the page author)

- Warning 1: the introduction now says that this calculation finishes what Lecture 23 began in its video segments "Rydberg atoms" and "Orbits in the hydrogen atom", which have no page on this site yet.
- Warning 2: the page meaning of m now also covers m as the magnetic quantum number.
- Info items left as they are.
