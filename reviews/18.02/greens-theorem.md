---
page: content/year-1/18.02/greens-theorem.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-22-greens-theorem/ (read: local copy lec.html, title "Lecture 22: Green's Theorem"; its .pdf link is 146b24918d4297fb69788c32d9e991fd_tYdoS0tkAHA.pdf, matching the transcript reading)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/146b24918d4297fb69788c32d9e991fd_tYdoS0tkAHA.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec22", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week9/ (read: local copy week9.pdf, file 14a8493b19c42b8fbbeb9d05b5c0fd52_lec_week9.pdf; PDF p. 1 is a cover; Lecture 22 on printed pp. 2–3 = PDF pp. 3–4. Printed p. 2 runs from the end of Lecture 21 (curl examples, torque analogy) through the Lecture 22 header, the theorem, the (2, 0) example, the gradient-field application with the PS8 Problem 2 note, remarks 1) and 2) of the proof, and the LHS of the main step; printed p. 3 has the RHS, "any region can be subdivided", the N part via horizontally simple pieces, the area example and the planimeter, then the start of Lecture 23. Printed p. 4 (PDF p. 5) has "Green's theorem for flux")
  - content/year-1/18.02/_course.json (read: Lecture 22 = Green's Theorem; Lecture 23 = Flux)
  - content/year-4/8.286/newtons-static-universe.mdx (read: target of the cosmology callout and the 8.286 Lecture 5 leadsTo)
  - content/year-1/18.02/gradient-fields-and-curl.mdx and polar-double-integrals.mdx: exist, targets of the inline links (polar-double-integrals has "Average values and the centre of mass")
  - calcs/18.02/greens-theorem.yaml (read; `npm run calc:test -- -k greens-theorem`: 6 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Green's theorem

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 9 summary, `reading2` = transcript. All seven formulas are at the cited place:
- "Green's theorem" (`reading2`, p. 1): transcript p. 1 (line integral of work = ∫∫_R curl F dA; in coordinates M dx + N dy and (N_x − M_y) dA). Correct; also notes p. 2.
- "Using Green's theorem" (`reading2`, p. 1): transcript p. 1 (N_x = x + e^(−x), M_y = e^(−x), giving ∫∫_R x dA). Correct; also notes p. 2.
- "Zero curl gives a gradient field" (`reading1`, "Lecture 22, p. 2"): notes p. 2 ("Theorem: if F … is defined and continuously differentiable in the whole plane, then N_x = M_y ⇒ F is conservative"; "by Green, ∮ F·dr = ∫∫ curl F dA = ∫∫ 0 dA = 0"). Correct.
- "The two halves" (`reading1`, "Lecture 22, p. 2"): notes p. 2, remark 1). Correct.
- "Line integral side" (`reading2`, p. 3): transcript p. 3 (C1 from a to b with y = f1(x), C2 and C4 zero, C3 from b to a with y = f2(x); sum = ∫_a^b M(x, f1(x)) dx − ∫_a^b M(x, f2(x)) dx). Correct.
- "Double integral side" (`reading1`, "Lecture 22, p. 3"): notes p. 3, "RHS". Location correct; notation differs (see #1).
- "Area as a line integral" (`reading2`, p. 4): transcript p. 4 ("line integral of x dy … this will be just the area of the region inside"). Correct; also notes p. 3, where the formula ∮ x dy = ∫∫ 1 dA = area(R) is written out.

No "rights reserved" or "courtesy" notice in the transcript, the Week 9 summary or the lecture page (grep: no match). The planimeter photo shown in the lecture is not reproduced; the page describes the device in words only. No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "Double integral side", cited `reading1` "Lecture 22, p. 3" | Notes p. 3 name the bounds f0(x) < y < f1(x) (RHS: −∫_a^b (M(x, f1(x)) − M(x, f0(x))) dx). Transcript p. 3 names them f1 (bottom) and f2 (top) and does the same computation in words. | Uses f1 (bottom) and f2 (top), the transcript's names, but cites the notes, where f1 is the top curve. | Cite `reading2`, p. 3 (as for the "Line integral side" formula, which uses the same names), or keep the notes citation and say in brackets that the notes call the curves f0 and f1. |
| 2 | warning | Callout "A family of theorems", last sentence | The linked 8.286 page (`newtons-static-universe`) uses Gauss's law of gravity, ∮ g·da = −4πG M_enclosed, for **any closed surface** to show that a static, uniformly filled universe is impossible (g = 0 everywhere contradicts ρ > 0). It does not use a spherical region. | "Guth uses that law for the gravity of a spherical region of a uniform universe; see why a static universe cannot work." | Match the linked page: "Guth uses that law to show that a static, uniformly filled universe is impossible; see why a static universe cannot work." (The spherical-region use belongs to Guth's later derivation of the Friedmann equation; link that page instead if that is the point.) |
| 3 | info | Callout, "the gravitational field through a closed surface measures the mass inside" | 8.286 page: the **flux** of g out of a closed surface equals −4πG M_enclosed. | "the gravitational field through a closed surface". | "the flux of the gravitational field out of a closed surface measures the mass inside". |
| 4 | info | Callout, "Its three-dimensional relative for flux, Gauss's (divergence) theorem" | Notes p. 4 (Lecture 23): "Green's theorem for flux", ∮ F·n̂ ds = ∫∫ div F dA, proved by renaming components in the Lecture 22 theorem. | Calls Gauss's theorem the 3D relative "for flux". | Correct as stated: the direct 2D analogue of Gauss's theorem is the normal form of Lecture 23, which the first leadsTo already announces. Optional: "its flux form (next lecture) has a three-dimensional relative…". |
| 5 | info | Section "The main step", "(pp. 3; notes, pp. 2–3)" | | "pp. 3" | Typo: "p. 3". |
| 6 | info | Section "Why the theorem is true", last line "Gluing the pieces and adding the N part completes the proof" | Notes p. 3: the N part is proved by subdividing into **horizontally** simple pieces. | The swap of x and y is mentioned earlier ("the second is the first with x and y swapped"), but horizontally simple pieces are not. | Optional: "(for the N part, with horizontally simple pieces)". |
| 7 | info | Section "The theorem" and Summary, "defined and differentiable" | Transcript p. 1: "defined and differentiable everywhere"; notes p. 2 (application): "defined and continuously differentiable in the whole plane". | "defined and differentiable". | Matches the transcript. Optional: "continuously differentiable", as in the notes. |
| 8 | info | Section "The test for gradient fields, proved" | Transcript p. 2 names the field: problem set 8, problem 2; adds that one may picture the curl at the origin as "becoming infinite" so the double integral gives 2π, and that it is really undefined (a single point would not change the integral). | "the problem-set field undefined at the origin"; no remark about the undefined curl at a single point. | Fine; optional mention of PS8 Problem 2 and that changing the value at one point would not change a double integral, so the problem is that the curl is not defined, not that it is unknown. |
| 9 | info | Section "The test for gradient fields, proved" | Transcript p. 2: for a figure eight, cut it into its two loops, apply Green to each. | "(A clockwise curve, or a figure eight, is split into loops oriented counterclockwise.)" | Correct summary. |

Prose page references checked against the sources:
- Opening (curl not zero, work around a closed curve by Green's theorem): transcript p. 1. Correct.
- Statement, counterclockwise, F defined and differentiable on C and in R: p. 1; notes p. 2 ("positively oriented"). Correct.
- "A strange statement": left side on the curve, x and y related; right side, x and y independent between bounds: p. 1. Correct.
- Orientation matches the curl convention N_x − M_y; clockwise = negative; only for closed curves, otherwise parametrise or close the path: p. 1. Correct.
- Example: unit circle centred at (2, 0), counterclockwise; parametrisation x = 2 + cos θ, y = sin θ "pretty much doomed": p. 1; notes p. 2. Correct.
- ∫∫ x dA = area · x̄ = π · 2 = 2π: transcript pp. 1–2 (starts at the end of p. 1, result on p. 2); notes p. 2. Correct.
- Consequence for curl zero in the whole plane; justifies last lecture's criterion: p. 2; notes p. 2. Correct.
- PS field with curl zero but 2π around the unit circle; Green cannot be applied when C encloses the origin: p. 2; notes p. 2. Correct.
- First simplification (two halves; N half by swapping x and y): transcript pp. 2–3 (begins at the end of p. 2, the N half and the sum on p. 3); notes p. 2. Correct.
- Second simplification (R1, R2, shared edge traversed in opposite directions cancels): p. 3; notes p. 2. Vertically simple regions a ≤ x ≤ b, f1(x) ≤ y ≤ f2(x): p. 3. Correct.
- Main step, four sides, dx = 0 on the vertical sides: p. 3; notes pp. 2–3 (the LHS is on printed p. 2). Correct apart from typo #5.
- Double integral dy dx, inner integral of M_y gives M back: p. 3; notes p. 3. Correct.
- Planimeter (F = ⟨0, x⟩, N_x − M_y = 1; graph paper, arm moved around the curve, wheels compute a line integral, some models ∮ x dy, dial shows the area at the end, never visits the inside): transcript p. 4; notes p. 3. Correct.

Note on the notes: printed p. 2 says "along C2, x from b to a … y = f1(x)", which is a slip for C3 (the upper side). The page correctly has the top run from b back to a and does not repeat the slip.

## Arithmetic and answer checks
- Example (2, 0): N = ½x² − e^(−x), N_x = x + e^(−x); M = y e^(−x), M_y = e^(−x); N_x − M_y = x. ∫∫ x dA = π · 2 = 2π ≈ 6.2832. Direct check in calcs (x = 2 + r cos θ, the cos term integrates to 0): 2π ∫₀¹ 2r dr = 2π. Correct.
- Worked example (a): M = −y³, N = x³; N_x − M_y = 3x² + 3y² = 3r²; ∫₀^{2π}∫₀¹ 3r³ dr dθ = 3 · ¼ · 2π = 3π/2 ≈ 4.712. Correct.
- Worked example (a) directly: x = cos θ, y = sin θ, dx = −sin θ dθ, dy = cos θ dθ; −y³ dx + x³ dy = (sin⁴θ + cos⁴θ) dθ; each of ∫₀^{2π} sin⁴ and ∫₀^{2π} cos⁴ is 3π/4, total 3π/2 = 2π · ¾. Correct.
- Worked example (b): x = 3 cos t, dy = 2 cos t dt, ∫₀^{2π} 6 cos² t dt = 6π ≈ 18.85 = π · 3 · 2. Correct; t from 0 to 2π runs counterclockwise, as Green's theorem requires.
- Quiz 1: answer 1 (counterclockwise, region on the left). Correct; clockwise changes the sign (transcript p. 1).
- Quiz 2: M = −y, N = x, N_x − M_y = 1 − (−1) = 2, so ∮ = 2 · area. Answer 2 ("twice the area inside"). Correct.
- Quiz 3: answer 0 (theorem needs F defined and differentiable everywhere inside C). Correct (transcript p. 2; notes p. 2).
- Flashcards: Green's theorem statement, ∮ x dy = area, proof idea (vertically simple pieces, inner edges cancel, N part, add). All correct.
- calcs/18.02/greens-theorem.yaml: 6 entries, `npm run calc:test -- -k greens-theorem` 6 passed. Minor: `shifted-disc-direct` (origin page-own) has `shown` = the area × x̄ sentence, but the page does not show the direct polar computation; and `quiz-2`, `example-a-*` cite `reading2` p. 1 although these are the page's own numbers (the curl 2 of ⟨−y, x⟩ is in notes p. 2, Lecture 21 part). Harmless; optional tidy-up.

## Coverage and order
- Order follows the lecture: motivation, statement, orientation and closed-curve warning, the (2, 0) example, the consequence for curl-zero fields and the PS8 counterexample, the proof (two halves, additivity, vertically simple regions, main step LHS then RHS), the planimeter. Same order as transcript pp. 1–4 and notes pp. 2–3.
- Left out (all minor): the "alien" remark on conventions; the student exchange on the curl at the origin (#8); Auroux's remark that the direct double integral for the (2, 0) disc is "a nice exercise"; the planimeter's cost. The note that the N part uses horizontally simple pieces (#6).
- Added: the worked example (a)/(b), original (not in the lecture or summary), and the cosmology callout.

## Licensing
- No text copied verbatim beyond standard terms ("vertically simple", "planimeter", "counterclockwise"). The prose is rewritten throughout.
- No "All rights reserved" or "Courtesy of" material in the sources; the planimeter photo is described in words only, not reproduced.
- No OpenStax or LibreTexts material.
- The worked example is original (own field −y³ dx + x³ dy and own ellipse).

## Notes
- leadsTo 18.02 Lecture 23 ("Flux across a curve, and the normal form of Green's theorem"): correct, notes pp. 3–4 (flux; "Green's theorem for flux").
- leadsTo 8.286 Lecture 5: `newtons-static-universe` has `lecture: 5` and uses Gauss's law of gravity (cited to the Lecture 6 review slides). The link and the "why" are fair; only the callout's description of how Guth uses the law should match that page (#2).
- Status `draft` is right until the findings are resolved.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the "Double integral side" formula now cites the transcript (p. 3), whose names f₁ (bottom) and f₂ (top) it uses; the text notes that the notes call them f₀ and f₁.
- **Warning 2:** the callout now says that Guth applies Gauss's law to closed surfaces in a uniform universe to show it cannot be static, and speaks of the flux of the gravitational field.
- Info: the "(pp. 3" typo is fixed; the N half now mentions horizontally simple pieces. The other info items are left as they are.
