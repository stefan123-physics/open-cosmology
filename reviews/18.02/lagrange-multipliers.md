---
page: content/year-1/18.02/lagrange-multipliers.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-13-lagrange-multipliers/ (read: local copy of the lecture page; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/a45ade1ebf51f5fbdda72a1de1915058_15HVevXRsBA.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec13", 15 pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week5/ (read: local copy week5.pdf; PDF p. 1 is a cover; Lecture 13 starts lower down printed p. 2 = PDF p. 3 (problem, hyperbola example, ∇f = λ∇g, the system) and continues on printed p. 3 = PDF p. 4 (solving, why it works, warning, pyramid); checked with pdftotext -f 3 -l 4)
  - content/year-1/18.02/_course.json (read: Lecture 14 = Non-Independent Variables)
  - content/year-4/8.286/black-body-radiation.mdx (read, for the cosmology callout and leadsTo: `lecture: 16`; equipartition, Planck mean energy per mode, u, n, s; no entropy maximisation or Lagrange multiplier)
  - content/year-1/18.02/planes-and-linear-systems.mdx (read: the in-text link target, Lecture 4, det A = 0 gives non-zero solutions of AX = 0)
  - calcs/18.02/lagrange-multipliers.yaml (read; `npm run calc:test -- -k lagrange-mult`: 10 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Lagrange multipliers

Citation convention checked: transcript pages are PDF pages (no printed numbers); notes pages are printed page numbers (Lecture 13 = printed pp. 2–3). `reading1` = Week 5 summary, `reading2` = transcript. The only `reading1` formula, "Lagrange condition" ∇f = λ∇g at "Lecture 13, p. 2", is on printed p. 2 ("there exists λ ('multiplier') such that ∇f = λ∇g"): correct. All other formulas cite `reading2`; every page number is right (list below). No "rights reserved" or "courtesy" notice in the transcript, the Week 5 summary or the lecture page (grep: no match).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | `leadsTo` 8.286 Lecture 16, `why` | 8.286 Lecture 16 (page `black-body-radiation`) uses equipartition and the quantum mean energy per mode; it does not maximise entropy with a constraint or introduce a multiplier. | "Thermal equilibrium maximises entropy at fixed energy, a constrained maximum; the multiplier becomes the temperature." Shown under "Where this leads" next to 8.286 Lecture 16, a reader may expect Lecture 16 to do this derivation. Also "becomes the temperature" is loose: the multiplier is 1/(kT), the inverse temperature (the callout says this correctly). | Reword so it does not suggest Guth derives it, e.g. "The thermal distributions behind black-body radiation come from maximising entropy at fixed energy (a constrained maximum whose multiplier is 1/(kT)); Lecture 16 uses the results." |
| 2 | info | Callout "Temperature as a multiplier" | Not MIT material. | "maximises the entropy … The multiplier for that constraint turns out to be 1/(kT)". | Physics correct and not attributed to 8.286 (it says "statistical physics", and only that it "leads to" the thermal distributions behind black-body radiation). Convention detail: maximising ln W (entropy in units of k) gives β = 1/(kT); maximising S itself (with k) gives 1/T. Optional: "maximises ln W (the entropy divided by k)". |
| 3 | info | "Solving the equations", formula "A linear system for x and y" | Transcript p. 7: matrix [[2, −λ], [λ, −2]], det = −4 + λ². Notes p. 3 write the second equation as −λx + 2y = 0, so det = 4 − λ². | Follows the transcript, cites `reading2` p. 7. | Correct as cited; no change needed. |
| 4 | info | "Minimum or maximum?" | The saddle remark and the substitution y = 3/x come in answers to questions on transcript p. 6, before the solution of the equations. | Moved to the min/max section, cited p. 6. | Fine; the move is sensible and the citation is right. |
| 5 | info | Not on page | Transcript p. 9: "what is a Lagrange multiplier? … what you have to multiply ∇g by to get ∇f"; p. 9: solutions are critical points under the constraint, not guaranteed absolute extrema. | The name is implicit ("the multiplier"); the second point is covered in "Minimum or maximum?". | Optional half-sentence on why it is called a multiplier. |
| 6 | info | "An advanced example", side-face height √(u_i² + h²) and constraint Σ ½a_iu_i = A | Same in transcript pp. 13–14 and notes p. 3. | Same. | Both MIT and the page tacitly assume the point below the top lies inside the base triangle (otherwise one u_i enters the constraint with a minus sign). Optional bracket; not an MIT discrepancy. |

Every formula and prose page reference was checked against its cited location:
- Opening: constraint g(x, y, z) = c, minimise f only on it: transcript p. 1; notes p. 2. Solve for a variable if simple, otherwise a new method: p. 1. PV = NRT example: p. 1. Critical points of f no help: p. 2. Correct.
- Hyperbola xy = 3, minimise the squared distance: transcript p. 2; notes p. 2. Formula "The problem" `reading2` p. 2. Correct.
- Contour plot, four points on a large circle, smallest circle tangent: pp. 2–3 (the "four points" at f = 20 on p. 2, tangency on p. 3); notes p. 2 ("Observe on picture"). Tangent ⇒ same tangent line ⇒ normals (gradients) parallel: p. 3; notes p. 2. Correct.
- Proportional, λ: transcript p. 4; notes p. 2. λ positive or negative: p. 5. Correct.
- Three unknowns, two gradient equations plus the constraint, formula "The system" `reading2` p. 4; f_z = λg_z: p. 4. Correct. Hyperbola equations 2x = λy, 2y = λx, xy = 3: p. 5; notes p. 2. Correct.
- No general method, may need a computer: p. 7; notes p. 3. Correct. Linear system and determinant, λ = ±2: p. 7. Correct. Cases λ = 2 (x = y, x² = 3) and λ = −2 (−x² = 3, no solution): p. 8; notes p. 3. Correct. f = 6: p. 6 ("I think it will end up being 6"); ∇f twice ∇g on the picture: p. 8 (notes p. 3: "Checked on applet that ∇f = 2∇g"). Correct.
- Why it works: only increase or only decrease along the level set, zero to first order, allowed directions: p. 9; notes p. 3. Formula "No change along the constraint" `reading2` pp. 9–10 (df/ds in direction û = 0 on p. 9, = ∇f · û on p. 10). Correct. ∇f normal to the level set, ∇g too, so parallel, level sets tangent: p. 10; notes p. 3. Correct.
- Warning, min or max, saddle: pp. 6, 11; notes p. 3. No second derivative test, only allowed directions: p. 11. Compare values, or geometry: p. 11; notes p. 3. Tied minima, maximum infinite: p. 11. Substitution x² + 9/x²: p. 6. Correct.
- Pyramid: given triangular base and volume, least area: pp. 11–12; notes p. 3. Gold building story: p. 12 (the page does not name the architect; fine). V = ⅓A h fixes h: p. 12; notes p. 3. Cross products too messy: p. 13; notes p. 3. a_i, u_i, Pythagoras: pp. 13–14; notes p. 3. Formula "The pyramid problem" `reading2` p. 14 (f and the constraint both on p. 14). Correct. ∂f/∂u₁ = ½a₁u₁/√(u₁² + h²) = λ·½a₁ starts on p. 14 and ends on p. 15; "The solution" `reading2` p. 15 (u₃/√(u₃² + h²) = λ, u₁ = u₂ = u₃, incenter on p. 15). Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k lagrange-mult`: 10 passed. Recomputed by hand as well:
- Lecture example: det [[2, −λ], [λ, −2]] = −4 + λ² = 0 at λ = ±2. λ = 2: x = y, x² = 3, (√3, √3) and (−√3, −√3); xy = 3, f = 3 + 3 = 6. ∇f = ⟨2√3, 2√3⟩, ∇g = ⟨y, x⟩ = ⟨√3, √3⟩, ratio 2. λ = −2: −x² = 3, no real solution. Correct.
- Pyramid: d/du [½a√(u² + h²)] = ½a·u/√(u² + h²); ∂g/∂u = ½a; ratio u/√(u² + h²) = λ; this function is strictly increasing in u ≥ 0 (derivative h²/(u² + h²)^{3/2} > 0), so equal values force u₁ = u₂ = u₃. Correct.
- Worked example (a): ⟨2x, 2y, 2z⟩ = λ⟨1, 2, 2⟩ gives (λ/2, λ, λ); λ/2 + 2λ + 2λ = 4.5λ = 9, λ = 2; point (1, 2, 2), on the plane (1 + 4 + 4 = 9); distance 3, which agrees with the plane-distance formula 9/|⟨1, 2, 2⟩| = 9/3 = 3. Correct.
- Worked example (b): ⟨y, x⟩ = λ⟨2x, 2y⟩, x = 4λ²x, x = 0 forces y = 0 (off the circle), λ = ±½. λ = ½: y = x, 2x² = 8, (2, 2), (−2, −2), xy = 4. λ = −½: y = −x, (2, −2), (−2, 2), xy = −4. Max 4, min −4. Correct (also by xy = 4 sin 2θ on the circle of radius 2√2).
- Worked example is original (own constraint and function; the lecture has only the hyperbola and the pyramid).
- Quiz 1: answer 1 (parallel). Correct; explanation right.
- Quiz 2: answer 1 ("3": x, y, λ). Correct.
- Quiz 3: answer 2 (compare values or argue geometrically). Correct; explanation matches notes p. 3.
- Flashcards: all three correct.
- Calcs file (info): `lambda-determinant` checks λ = 2 only, not λ = −2; the `source` of the page-own entries (example-a/b) points to unrelated transcript pages (pp. 2, 5, 11). Harmless, optional tidy-up.

## Coverage and order
- The page follows the lecture: constraint and motivation → hyperbola example → tangency of level curves → ∇f = λ∇g → the system → solving (linear system, determinant, cases) → why it works → warning, min or max → pyramid. Same order as transcript and notes, except the saddle and substitution remarks from the p. 6 questions are moved into the min/max section (finding 4).
- Left out: the student questions on p. 5–6 about setting f = g and about "closest point" being lost in the general method; the name "multiplier" (finding 5); the notes' remark that the pyramid constraint was asked by flashcards (classroom logistics). Nothing of substance.
- Added: the worked example (closest point on a plane, extrema of xy on a circle) and the cosmology callout.
- leadsTo: 18.02 Lecture 14 "Non-Independent Variables" matches `_course.json`; the reason is right. 8.286 Lecture 16 is the lecture of `black-body-radiation`; the link is fair, but see finding 1 for the wording.
- The in-text link "another solution" goes to `planes-and-linear-systems` (Lecture 4), which covers det A = 0 giving non-zero solutions of AX = 0. Apt.

## Licensing
- No "rights reserved" or "courtesy" notice in any source read. The lecture's applet (contour plot of x² + y² with the hyperbola, gradient vectors) is described in words only; the page has no images or plots.
- Text is rewritten; no copied sentences found. Shared short phrases ("variables adapted to the geometry", "allowed directions", "compare values") are standard terminology or brief paraphrases, acceptable.
- No OpenStax or LibreTexts material.

## Notes
- The cosmology callout does not claim that 8.286 derives the thermal distribution by Lagrange multipliers; it says statistical physics does and that this "leads to" the distributions behind black-body radiation. That is fair. Only the `leadsTo` wording (finding 1) could mislead.
- No errors found; verdict pass-with-notes.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the 8.286 leadsTo now says that black-body radiation uses thermal distributions, which statistical physics derives as a constrained maximum with multiplier 1/(kT); it no longer suggests Lecture 16 does the derivation.
- Info: the callout says 1/(kT) holds when entropy is counted in units of k; the page now says why λ is called a multiplier (p. 9).
- The other info items are left as they are.
