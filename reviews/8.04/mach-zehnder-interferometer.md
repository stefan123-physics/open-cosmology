---
page: content/year-2/8.04/mach-zehnder-interferometer.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes2/ (read: the PDF "Chapter 2: Experiments with photons", B. Zwiebach, February 9, 2016, 7 printed pages plus the OCW terms page, read in full from a local copy; every page extracted with pdftotext -f N -l N without -layout to check symbols and the printed footer, which equals the PDF page number)
  - https://doi.org/10.1103/PhysRevLett.74.4763 (read: APS abstract page only, not the full paper)
verdict: pass-with-notes
---

# Review: The Mach–Zehnder interferometer and the Elitzur–Vaidman bombs

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The Elitzur–Vaidman bombs", bracketed addition on Kwiat et al. 1995 | Not in the notes (page's own addition). The APS abstract says the fraction of interaction-free measurements "can be made arbitrarily close to 1" by repeated weak tests (a theoretical scheme) and that the authors give "a preliminary experimental demonstration of some of these ideas", using single photons in a Michelson interferometer. | "it also showed that the success rate can be pushed well above the one-in-four of this simple set-up" | "Showed" reads as an experimental result. Reword, e.g. "it also argued, with a preliminary demonstration, that the fraction of interaction-free measurements can be pushed towards 1". Optionally say the experiment used a Michelson rather than a Mach–Zehnder interferometer. I could not check the measured efficiency in the full paper (uncertain). |
| 2 | warning | Same bracket: "the proposal dates from 1993, and the first demonstration ... as cited below" | Notes give no date or reference. | 1993 date given, but only Kwiat 1995 is in `references`. | The date is correct (Elitzur and Vaidman, "Quantum mechanical interaction-free measurements", Foundations of Physics 23, 987 (1993)), but add it as a reference so the 1993 claim is cited too. |
| 3 | info | Bracketed addition: "the first demonstration with single photons" | Not in the notes. | First demonstration. | It is widely called the first experimental realization, and the abstract confirms single photons. The abstract itself calls it "preliminary". Acceptable as is. I did not verify "first" independently. |
| 4 | info | Section 1, phase-shifter paragraph, and the Plot caption ("The page's own extension") | p. 2: the notes' Figure 1 has a phase shifter in the lower branch, but the notes never work out its effect on the output. | The phase shifter is described in general terms, and the δ-dependent plot is labelled as the page's own. | This is correct as labelled. Optionally say that the notes' figure has a phase shifter in the lower branch and that the notes leave its effect unworked. |
| 5 | info | "The whole interferometer", last sentence: "the photon is in both branches at once" | p. 4 only gives the matrix result. The notes make no interpretive claim here. | An interpretive gloss. | It matches the wording of the Lecture 1 page (Chapter 1, pp. 8–9), so it is consistent. A more careful form would be "has an amplitude in both branches". |
| 6 | info | Beam-splitter section | p. 2, eq. (1.5) gives the two input cases. Eqs. (1.9)–(1.11) on p. 3 give the normalization and balance conditions. | Prose cites "notes p. 2" and "notes p. 3" without these equation numbers. | Optional: add "(1.5)" and "(1.9)–(1.11)". |

All formula citations checked and correct:
- (1.1)–(1.2) on p. 1.
- (1.4) on p. 2.
- (1.6)–(1.8) on pp. 2–3: (1.6) and (1.7) are on p. 2, (1.8) is on p. 3.
- (1.14) on p. 3.
- (1.15)–(1.16) on p. 4.
- (1.17)–(1.18) on p. 4.
- (1.19) on p. 4.
- Table (1.20) on p. 4.
- (1.21)–(1.22) on p. 5.
- Table (1.23) on p. 6.
- Tables (2.24) and (2.25) on p. 7. The notes do number these tables "(2.24)" and "(2.25)", even though the earlier equations are numbered (1.x).

The notation matches the notes: α, β, s, t, u, v, δ, BS1/BS2 and D0/D1. The notes define s and t as reflection and transmission for a photon from above, and v and u as reflection and transmission for a photon from below. The page has the same.

The coating physics matches p. 4:
- The coating's index lies between those of glass and air.
- There is a phase shift only on reflection at a higher index.
- (1.14) corresponds to a coating on the bottom side and (1.17) to a coating on the top side.
- Transmitted light has no shift.

## Arithmetic and answer checks
- BS2·BS1 = (1/2)[[1,1],[1,−1]]·[[−1,1],[1,1]] = (1/2)[[0,2],[−2,0]] = [[0,1],[−1,0]], so the output is (β, −α). Correct, matches (1.19).
- The first guess (all entries 1/√2) acting on (1/√2, 1/√2) gives (1, 1), with total probability 2. Correct, matches (1.13).
- The (1.14) matrix gives (α+β, α−β)/√2. The cross terms cancel in ½(|α+β|² + |α−β|²) = |α|² + |β|². Correct.
- Blocked path: BS1(0,1) = (1,1)/√2. BS2(1/√2, 0) = (1/2, 1/2). P(block) = 1/2, P(D0) = 1/4, P(D1) = 1/4. Correct.
- Plot: with a phase e^{iδ} on the lower branch, the output is (1+e^{iδ}, 1−e^{iδ})/2. |1+e^{iδ}|²/4 = (2+2cos δ)/4 = cos²(δ/2) and |1−e^{iδ}|²/4 = sin²(δ/2). At δ = 0 all photons go to D0; at δ = π all go to D1. The caption is correct. The domain [0, 2π] and range [0, 1.2] show both curves in full.
- Worked example (a): BS1(0.6, 0.8i) = (−0.6+0.8i, 0.6+0.8i)/√2, and each entry has |·|² = 1/2, for a total of 1. Correct.
- Worked example (b): cos²30° = 0.75 and sin²30° = 0.25. Correct.
- Worked example (c): (1/4)/(1/4 + 1/2) = 1/3. Correct. A geometric series gives the same: Σ (1/4)ⁿ·(1/4) = (1/4)/(3/4) = 1/3.
- Quiz 1: |0.8i|² = 0.64, so answer 0 is correct.
- Quiz 2: input (0,1) gives output (1,0), so the photon always reaches D0. Answer 0 is correct.
- Quiz 3: 1/4. Answer 0 and its explanation (amplitude 1/2 towards D1) are correct.
- Quiz 4: the bomb works and the photon never entered it. Answer 0 is correct, matching p. 7.
- Flashcards: the BS2 matrix is correct. "A quarter of the photons reach D1" is correct, counting the photons sent in.
- calcs/8.04/mach-zehnder-interferometer.yaml covers every number on the page, and the values I recomputed agree with it. I did not run `npm run calc:test`.

## Coverage and order
- The page follows the notes' order: two-component state (1.1)–(1.4), phase shifter, beam-splitter matrix (1.5)–(1.8), constraints and the failed guess (1.9)–(1.13), balanced matrix (1.14)–(1.16), the coating explanation and (1.17)–(1.18), the interferometer (1.19)–(1.20), the blocked path (1.21)–(1.23), and the Elitzur–Vaidman bombs (2.24)–(2.25).
- Nothing in Chapter 2 is left out (see item 6 for the equation numbers that are not cited).
- Additions are the phase-shifter plot, the worked example, and the 1993 and 1995 historical notes. All are marked as the page's own.

## Licensing
- The notes carry no "All rights reserved" or "Courtesy of" notice, only the standard OCW terms page. The credit to Sarah Geller as transcriber is in the notes and does not need a `courtesy:` entry.
- None of the notes' Figures 1–7 is reproduced. The set-up is described in prose, and the only graph is generated from a formula.
- No verbatim copying found. The closest passages are the coating sentence and the bomb description, which are rewritten, not copied. "Experiments, without bombs, have confirmed" echoes the notes' "experiments (without using bombs!) have confirmed", which is a short phrase.
- No OpenStax or LibreTexts material.

## Notes
- There is no `Callout kind="cosmology"`. This is acceptable: Chapter 2 has no direct link to cosmology, and the 8.04 Lecture 1 page already has the course's cosmology callout.
- `leadsTo` points to 8.04 Lecture 3 (photoelectric effect, Compton scattering, de Broglie). This matches the syllabus in `_course.json`.
- No em dashes on the page.
- The opening line ("The first lecture introduced the Mach–Zehnder interferometer in words") matches the notes ("We have discussed before") and Chapter 1, pp. 8–9.

## Resolution (2026-11-17, by the page author)

1. The Kwiat et al. sentence now says "a preliminary demonstration with single photons", whose authors argued that the success rate can approach 1; the reference's location note says the same.
2. Added Elitzur and Vaidman, Foundations of Physics 23, 987 (1993), to `references`.
3. "First" removed.
4. The plot caption now says the notes draw a phase shifter in the lower branch but do not work out its effect.
5. "is in both branches at once" changed to "has an amplitude in both branches at once".
6. Prose now cites eq. (1.5) and eqs. (1.9)–(1.11).

Status set to `reviewed`.
