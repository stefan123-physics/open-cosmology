---
page: content/year-2/8.04/rydberg-atoms-virial-theorem.mdx
reviewed: 2026-11-28
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/rydberg-atoms/ (read, segment page HTML)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/c0d6933a7ae4b6d9a2ebc8a8f37672be_avQ2XUzbsgk.pdf (read, 6 PDF pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/a3af8676dfce816a84c6504dff8685cd_c5yzy1S3gPg.pdf (read, 3 PDF pages)
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/orbits-in-the-hydrogen-atom/ (read, segment page HTML)
verdict: pass-with-notes
---

# Review: Rydberg atoms, the virial theorem and the shapes of hydrogen orbits

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Rydberg atoms in nature and in the laboratory", 2nd paragraph ("The reason is that the levels crowd together"); Summary bullet 4 ("live long because their levels are only about 1/n³ apart"); flashcard 3 ("lives long, because its levels are only about 1/n³ apart") | R1 p. 6: Zwiebach's heuristic, "lots and lots of states there. And it takes a long time for it to decay from one to another." | States the heuristic as the physical reason, in the page's own voice. It is at best part of the story: spontaneous decay of a Rydberg state goes mostly to low levels (large ω³), and its rate falls because the overlap with them shrinks; lifetimes grow roughly as n³ (low l) to n⁵ (l near n − 1), not because neighbouring levels are close. | Attribute it: "Zwiebach links this to the crowding of the levels: …" in the text, and in the Summary/flashcard write "and live long (Zwiebach relates this to their levels being only about 1/n³ apart)". Optionally add one bracketed sentence of our own: lifetimes grow roughly as n³ to n⁵. |
| 2 | warning | Cosmology callout, last sentence | (not in MIT) | "The faint lines they left on the cosmic microwave background are predicted but far too weak to have been detected so far (the page's own addition)." | Physics correct to my knowledge (the cosmological recombination spectrum is predicted at a level of order 10⁻⁹ of the CMB and is undetected as of my knowledge cut-off), but "so far" is undated (Writing rule 5). Write "… are predicted but, as of 2026, far too weak to have been detected (the page's own addition)." |
| 3 | warning | Neighbouring page `hydrogen-orbits-turning-points.mdx`, intro paragraph (line 51) | n/a | That page still says the Lecture 23 segments "Rydberg atoms" and "Orbits in the hydrogen atom" "have no page on this site yet"; this page now covers them. | On `hydrogen-orbits-turning-points.mdx`: replace "those segments have no page on this site yet" with a link "[Rydberg atoms, the virial theorem and the shapes of hydrogen orbits](/courses/8-04/rydberg-atoms-virial-theorem)" and add `rydberg-atoms-virial-theorem` to its `prerequisites`. (Optionally, in `hydrogen-spectrum.mdx` line 48, point to this page for the calendar topics "not covered here".) |
| 4 | info | "The virial theorem", 2nd paragraph | R1 p. 2: "there was a factor of 2 or a 1/2 there. How did it go? It takes me a few seconds to try to reconstruct" | "Zwiebach admits he never remembers where the factor 2 goes" | Slight overstatement; "admits it takes him a moment to remember where the factor 2 goes". |
| 5 | info | "The shapes of the orbits", 3rd bullet | R2 p. 2: "that is your spherical orbit" (a slip for circular) | "the orbit is a circle" | Fine as written; the page silently corrects the slip. Optionally add "(he says 'spherical')". |
| 6 | info | "The shapes of the orbits", 1st paragraph, last bracket | not in MIT | "(A spherically symmetric probability cloud is not a circular orbit: it is the average over all the directions …)" | Correct semi-classically; mark it "(the page's own remark: …)" like the other additions. |
| 7 | info | "Rydberg atoms in nature …", 3rd paragraph | R1 p. 6: "You would need millions of volts per centimeter" | Repeats "a field of millions of volts per centimetre" (attributed) | Classical field-ionization of ground-state H is about 1/16 a.u. ≈ 3 × 10⁸ V/cm, so "millions" understates it by about a hundred. Optionally add "(in fact some 10⁸ V/cm for ground-state hydrogen)". |
| 8 | info | Worked example, step (c) | n/a | "10.2 eV, about 80,000 times more" | Ratio is 82,996; "about 80,000" is acceptable, "about 83,000" is closer. |
| 9 | info | "Rydberg atoms in nature …", 1st paragraph | R1 p. 6 (after the lab and lifetimes) | Hair comparison placed with the size on p. 5 | Small reordering for readability; cited correctly to p. 6. No change needed. |

All 14 `<Formula>` citations were checked against the PDFs page by page: virial theorem (R1 p. 2), ⟨T⟩ = −E_n, ⟨V⟩ = 2E_n (R1 p. 2, written after the student's correction "Oh, 2Eb, I'm sorry, here. Thank you."), ⟨1/r⟩ (R1 pp. 2–3: the sentence runs from the foot of p. 2 onto p. 3), ⟨r⟩ (R1 p. 3), ψ_nlm = A r^l W_nl e^(−r/(na₀)) Y_lm = f_nl Y_lm (R1 p. 3), p(r) = r²|f_nl|² (R1 p. 4), p ∝ r^(2n) e^(−2r/(na₀)) (R1 foot of p. 4 to top of p. 5), the maximum 2n/r − 2/(na₀) = 0 ⇒ r = n²a₀ (R1 p. 5), 1/n³ spacing (R1 p. 6, expansion marked as own), V_eff (R2 p. 1), V_eff minimum (R2 p. 1 for V_eff, minimum marked as own). All page numbers are correct. "Board" is plausible for each (the lecturer refers to "this equation", "the top blackboard"); the transcripts cannot confirm board vs. spoken beyond that.

Writer's slip notes, checked against the transcript:
- ⟨V⟩ = E corrected to 2E: correct (R1 p. 2, "it's equal to the energy … The expectation value of V is the energy", then "Oh, 2Eb, I'm sorry … Thanks for correcting it").
- Degree n − l + 1 corrected on p. 4: correct (R1 p. 3 "degree n minus l plus 1"; p. 4 "minus l plus-- well, minus l minus 1"). n − l − 1 matches `hydrogen-spectrum.mdx` (N = n − l − 1).
- "almost a million times bigger" vs 350² = 122,500: correct (R1 p. 5); "about 120,000" is fine.
- "mystery of the quadratic potential": the transcript says exactly this (R2 p. 3); the page's reading (the 1/r potential is meant) is right, since the argument is Kepler's.
- "perfectly circular": in the transcript (R2 p. 2); the page's correction (l = n − 1 does not reach the bottom of the well, eccentricity 1/√n) is right and consistent with the Lecture 24 page.

## Arithmetic and answer checks
Recomputed with my own sympy/scipy script (not the calcs file); all agree with the page:
- Exact hydrogen radial functions, (n, l) = (1,0), (2,0), (2,1), (3,0), (3,2), (4,1), (4,3), (5,2): normalized; ⟨r⟩ equals n²a₀[1 + ½(1 − l(l+1)/n²)] in every case (3/2, 6, 5, 27/2, 21/2, 23, 18, 69/2); ⟨1/r⟩ = 1/n² in every case, so ⟨V⟩ = −⟨1/r⟩ = 2E_n and ⟨T⟩ = −E_n (units e = a₀ = 1, E_n = −1/(2n²)).
- l = 0 bracket 3/2; l = n − 1 bracket 1 + 1/(2n); ground state 3/2 a₀ matches the hydrogen-spectrum page.
- Jensen: 1/r convex for r > 0, so ⟨1/r⟩ ≥ 1/⟨r⟩, ⟨r⟩ ≥ n²a₀; bracket − 1 = ½(1 − l(l+1)/n²) ≥ 1/(2n) > 0. Correct.
- General virial 2⟨T⟩ = k⟨V⟩ for V ∝ r^k, k = −1 gives ⟨V⟩ = −2⟨T⟩; classical 2T + U = 0. Correct.
- Peak of r^(2n) e^(−2r/n): at r = n² (n = 2, 3, 4: 4, 9, 16). Normalizations ∫ = 24, 98415/8 = 12301.9 (= 720 × 1.5⁷), 20643840 (= 40320 × 2⁹), equal to (2n)!(n/2)^(2n+1). Normalized peak heights 0.195, 0.107, 0.070, inside the range 0.22. For l = n − 1, W has degree 0, so the peak at n²a₀ is exact. Correct.
- n = 350: 350² × 0.529177 × 10⁻¹⁰ m = 6.48 µm ≈ 6.5 µm; hair 50/6.48 = 7.7 ("factor 5 to 10"); blood cell 8/6.48 = 1.23 ("comparable").
- Spacing: (1/n² − 1/(n+1)²) ≈ 2/n³, so ΔE ≈ (e²/a₀)/n³. Correct.
- R_H c = 3.2898419603 × 10¹⁵ Hz /(1 + 1/1836.15267343) = 3.28805 × 10¹⁵ Hz ("3.2881"). H109α: 5008.92 MHz ("about 5.009 GHz"; agrees with the observed 5008.923 MHz). 351 → 350: 152.72 MHz ("near 153 MHz").
- Worked example n = 60: 3600a₀ = 190.50 nm; 5400a₀ = 285.76 nm; 3630a₀ = 192.09 nm; E₆₀ = −3.7794 meV, ⟨T⟩ = 3.779 meV, ⟨V⟩ = −7.559 meV; ΔE(60→61) = 0.12290 meV; estimate 2 × 13.606/60³ eV = 0.12598 meV, 2.5% high ("within 3%"); ν = 29.72 GHz ("29.7 GHz"); 10.2 eV / 0.1229 meV = 82,996 ("about 80,000", info 8). "A few hundred nanometres across": radius 190–286 nm, diameter 380–570 nm, fine.
- V_eff/(e²/2a₀) = L/x² − 2/x: minimum at x = L = l(l+1), value −1/L; with a₀ = ħ²/(me²), ħ²/(2ma₀²) = e²/(2a₀). Correct.
- n = 4 turning points (E = −1/16): l = 0 at x = 32; l = 1 at 1.033 and 30.967 ("about 1.0 and 31.0"); l = 3 at 8 and 24, well bottom −1/12 at x = 12 below −1/16; l = 1 bottom −1/2 at x = 2, off the plotted range −0.15. Correct.
- l_max: l(l+1) ≤ n² ⇒ l ≤ n − 1 since (n−1)n < n² < n(n+1); n = 100: 100 × 101 = 10100 > 10000, 99 × 100 = 9900 ≤ 10000. Eccentricity √(1 − (n−1)/n) = 1/√n, matching `hydrogen-orbits-turning-points.mdx`.
- Quiz: Q1 answer 2 (⟨T⟩ = −E_n, ⟨V⟩ = 2E_n), correct; Q2 answer 0 (n²a₀), correct; Q3 answer 3 (l = 0), correct; Q4 answer 1 (E below the well bottom), correct. Positions 2, 0, 3, 1 are varied. Explanations correct. Flashcards correct apart from the attribution point in finding 1.
- Calcs file: every `shown:` string occurs in the page text (scripted check); `pytest tests/calc -k rydberg`: 67 passed. `content:check` in the worktree: 0 errors, only "no review file yet" for this page.

## Coverage and order
- Segment "Rydberg atoms" (R1 pp. 1–6): definition and net charge +1 (p. 1), the wrong guess na₀ (p. 1), virial theorem and its picture (p. 2), ⟨1/r⟩ (pp. 2–3), ⟨1/r⟩ ≠ 1/⟨r⟩ and ⟨r⟩ with its l = 0 and l = n − 1 cases (p. 3), why the guess fails: ψ_nlm, p(r), top power, maximum (pp. 3–5), interstellar Rydberg atoms, n = 350, 6.5 µm, blood cell, lifetimes (p. 5), 1/n³ spacing, three lasers to n = 10 and 60, ionization detection, hair, Bohr (p. 6). All covered, in MIT's order (one small reordering, info 9).
- Segment "Orbits in the hydrogen atom" (R2 pp. 1–3): poll for n = 100, l = 100 question (p. 1), V_eff and the l = 0 motion, planet picture (pp. 1–2), l = 1, 2, 3 and the touching case (p. 2), r × p argument (p. 2), announcement of r± and their average n²a₀ (p. 2), Kepler and the degeneracy (p. 3). All covered, in order.
- Additions, each marked as the page's own: general virial theorem, Jensen check, closed form for l = n − 1, exactness of the peak for l = n − 1, the expansion of the spacing, radio recombination lines, the V_eff minimum and the l ≤ n − 1 argument, both plots, the worked example, the cosmology callout. One unmarked own remark (info 6).
- Overlap: no duplication with `hydrogen-spectrum.mdx` (states and wavefunctions) or `hydrogen-orbits-turning-points.mdx` (the r± calculation); the page announces the result and links forward. Notation (l for ℓ, Gaussian −e²/r, a₀, N = n − l − 1, ε = 1/√n) consistent with both. The Lecture 24 page's intro is now out of date (warning 3).

## Licensing
- Neither transcript nor segment page carries an "All rights reserved" or "Courtesy of" notice (grep of the PDFs' text and HTML).
- No MIT figure reproduced; both plots are generated from formulas (`<Plot>` with mathjs expressions).
- No verbatim copying beyond short standard phrases; the poll and the "go back and learn why" remark are paraphrased.
- No OpenStax or LibreTexts material. CODATA values used for the radio-line numbers are fine to cite.

## Notes
- `leadsTo` targets exist: 8.04 Lecture 24 (`hydrogen-orbits-turning-points`), 8.902 Lecture 2 (`virial-theorem`), 8.286 Lecture 17 (`temperature-and-decoupling`). Links in the text use the site's `/courses/8-04/…` form.
- Cosmology callout: Zwicky's 1933 use of the virial theorem on the Coma cluster ("in the 1930s") is fairly attributed; the recombination-line statement is accurate but needs a date (warning 2). The lecture's own remark linking interstellar Rydberg atoms to the moment "the universe cooled off" is muddled in the transcript; the page's rendering (same capture process, today in gas kept ionized by hot stars) is a fair and correct clarification.
- Quoted figures not recomputed (lifetimes 10⁻⁷ s to 1 s, the field strength, the MIT lab's n = 10 and 60) are attributed to the lecture and stored as `kind: fact`.
- Symbols: page-scoped meanings exist for every symbol the page uses (n, l, m, r, E, E_n, E_60, E_61, E_100, E_n+1, V, V_eff, T, U, k, p, L, A, W_nl, f_nl, ψ_nlm, Y_lm, a_0, Z, R_H, ν, h, c, d, e, φ, r±); k as "the power of r in V ∝ r^k" and p as both the radial density and the momentum are scoped and fit. `content:check` reports no symbol problems.
- No em dashes; ends with `## Summary`.

COUNTS: errors=0 warnings=3 info=6

Writer: Opus. Reviewer: Opus (same model).

## Resolution (2026-11-28, by the page author)

- Warning 1: the long lifetimes are now attributed: "Zwiebach links this to the crowding of the levels", and the Summary and the flashcard say "(Zwiebach relates this to … only about 1/n³ apart)".
- Warning 2: the callout now says "as of 2026, far too weak to have been detected".
- Warning 3: `hydrogen-orbits-turning-points` (Account B's page) now links to this page instead of saying the segments have no page, and lists it as a prerequisite (separate commit on the run branch).
- Info items left as they are.
