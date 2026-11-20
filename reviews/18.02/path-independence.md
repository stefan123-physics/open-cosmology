---
page: content/year-1/18.02/path-independence.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-20-path-independence/ (read: local copy lec.html, title "Lecture 20: Path Independence"; its only .pdf link is 871465b45c12ea4bbf666a9a7a8a2d37_o7UCBjGsRTE.pdf, matching the transcript reading; title matches `_course.json`)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/871465b45c12ea4bbf666a9a7a8a2d37_o7UCBjGsRTE.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec20", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week8/ (read: local copy week8.pdf; PDF p. 1 is a cover; Lecture 20 on printed pp. 3–4 = PDF pp. 4–5. Printed p. 3 runs from the Lecture 20 header through the recall, the sector example (C₁, C₂, C₃), "If F is a gradient field … potential function" and ends exactly with the heading "Fundamental theorem of calculus for line integrals:"; printed p. 4 has the theorem itself, the differentials form, the proof, the f = xy example, the consequences, the warning and the ⟨−y, x⟩ example (circle of radius a, 2πa²), the physical interpretation and the four equivalent properties)
  - content/year-1/18.02/_course.json (read: Lecture 20 = Path Independence, 21 = Gradient Fields)
  - content/year-1/18.02/gradient.mdx (lecture 12) and differentials-and-chain-rule.mdx (lecture 11): exist, targets of the inline links
  - content/year-4/8.286/expanding-sphere.mdx (lecture 6) and friedmann-equation.mdx (lecture 7) (read, for the cosmology callout and leadsTo)
  - calcs/18.02/path-independence.yaml (read; `npm run calc:test -- -k path-independence`: 8 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Gradient fields and path independence

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 8 summary, `reading2` = transcript. All four formulas are at the cited place:
- "The arc" (`reading2`, p. 1): transcript p. 1 (cos² θ − sin² θ = cos 2θ, ½ sin 2θ, "sine pi over two is one", ½). Also notes p. 3. Correct.
- "Fundamental theorem of calculus for line integrals" (`reading1`, "Lecture 20, p. 4"): the heading is the last line of printed p. 3, the formula ∫_C ∇f · dr = f(P₁) − f(P₀) is the first line of printed p. 4. Correct.
- "Proof" (`reading2`, p. 2): transcript p. 2 (x′(t) dt, y′(t) dt, chain rule, df/dt, f(x(t), y(t)) between t₀ and t₁). Correct; the same chain is written out in the notes p. 4.
- "Not conservative" (`reading2`, p. 3): transcript p. 3 (F tangent, |F| = 1 on the unit circle, ∫ 1 ds = 2π ≠ 0). Correct. The notes (p. 4) use a circle of radius a and 2πa²; the page follows the transcript's unit circle, which is fine.

No "rights reserved" or "courtesy" notice in the transcript or the Week 8 summary (grep: no match). The two computer plots in the lecture (the field ⟨y, x⟩ and its contour plot of xy) are only described in words. No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Section "Physics: potentials and energy", sentence "the change in kinetic energy equals the work, which equals the change in potential energy, so **total energy is conserved**" | Notes p. 4: "the change in kinetic energy equals the work of the force equals the change in potential energy" (written in the mathematicians' sign convention F = ∇f, where the work is +Δf). Transcript p. 3: "total energy is conserved". | Takes the notes' wording over. Two paragraphs earlier the page has said physicists' potential energy has the opposite sign. With that physical potential energy U, ΔKE = W = −ΔU. KE + U is constant only because of that minus sign. As written, "ΔKE = ΔU, so total energy is conserved" does not follow for the reader. | Say it with the sign: "the change in kinetic energy equals the work, which is minus the change in potential energy (physicists' sign), so kinetic plus potential energy stays constant". Or say "the change in the potential f" and keep the mathematicians' convention. |
| 2 | warning | Same section, last sentence: "A non-conservative field can supply energy around a loop, which is how transformers draw energy from magnetic fields (with a power supply maintaining the field) (p. 3)" | Transcript p. 3: "if you just look at magnetic fields and transformers or power adapters … you precisely extract energy from the magnetic field … you actually have to take some power supply to maintain the magnetic fields." | Repeats the lecturer's loose physics. The magnetic force qv × B does no work. A transformer works through the **electric** field induced by a changing magnetic flux, which is not conservative: ∮ E · dr = −dΦ/dt ≠ 0. (AGENTS.md rule 4: don't repeat lecturer slips.) | E.g. "…which is how a transformer works: a changing magnetic field produces an electric field whose work around a loop of wire is not zero (Auroux puts it loosely as drawing energy from the magnetic field)". Keep the citation p. 3. |
| 3 | info | Section "Consequences", "Many fields are not gradients; magnetic fields, for example, are not (p. 2; notes, p. 4)" | Magnetic fields: transcript p. 2 only. Notes p. 4 has the "WARNING: this is only for gradient fields!" but not the magnetic example. | Cites both. | Fine as a combined citation; optionally "(p. 2; warning in notes, p. 4)". |
| 4 | info | Section "Consequences", "from $(1, 0)$ to $(-1, 0)$ the upper half circle gives $\pi$, the lower one $-\pi$ (p. 3)" | Transcript p. 3: "if I go from here to here along the upper half circle or along the lower half circle … π … negative π". The endpoints are only on the board. | Names the endpoints (1, 0) and (−1, 0). | This is the only reading that gives ±π for the unit circle, so it is right; no change needed. |
| 5 | info | Section "Four equivalent properties", (2) ⟹ (3) | Transcript p. 4 and notes p. 4: define f(x, y) as the work from a fixed point ((0, 0) in the notes). | Same, in words. | Correct as MIT states it. MIT says nothing here about the region being connected; the page could add "(for a field defined on a connected region)", but that is optional and goes beyond the lecture. |
| 6 | info | Coverage | Transcript p. 3: a student asks whether non-path-independence means you cannot draw level curves perpendicular to the field. Auroux answers that you may still draw perpendicular curves. Rescaling a gradient field by different factors in different places keeps it perpendicular to those curves but can make it non-conservative. | Not on the page. | Optional: one sentence after the ⟨−y, x⟩ example ("being perpendicular to some family of curves is not enough to be a gradient"). |

Prose page references checked against the sources:
- Opening ("how to avoid most of that work"): transcript end of p. 1 ("how to avoid computing line integrals"). Correct.
- Recall ∫ F · dr = ∫ M dx + N dy = ∫ F · T̂ ds: transcript p. 1; notes p. 3. Correct.
- The sector example, enclosing the sector between 0 and π/4: p. 1; notes p. 3. Correct.
- C₁: y = 0, dy = 0, integral 0; F = x ĵ perpendicular to the path: p. 1 (also notes p. 3). Correct.
- C₂: parametrisation and dx, dy: p. 1; notes p. 3. Correct.
- C₃: from (1/√2, 1/√2) to the origin; direct parametrisation "unnecessarily complicated"; −C₃ with x = y = t, 0 ≤ t ≤ 1/√2, ∫ 2t dt = ½, so −½: p. 1; notes p. 3. Correct.
- "a lot of calculations for nothing": verbatim from p. 1, in quotation marks. Correct.
- Gradient as a vector field ("encountered a few weeks ago"): pp. 1–2. Lecture 12 = the gradient page (lecture 12). Correct.
- Gradient field, potential f: p. 2; notes p. 3 ("f is called 'potential function'"). Physicists' sign, "just put a minus sign if you are doing physics": p. 2. Correct.
- Theorem for a curve from P₀ to P₁: p. 2; notes p. 4. Correct.
- Differentials form ∫ f_x dx + f_y dy = ∫ df, "same statement as in single variable calculus": p. 2; also notes p. 4. Correct.
- Proof by parametrisation and chain rule: p. 2; notes p. 4. Correct.
- Example again with f = xy: C₁ on the level f = 0, C₂ rises 0 → ½, C₃ falls back: p. 2; notes p. 4 ("f = xy", "0 + ½ − ½ = 0"). Correct.
- Warning, gradient fields only: p. 2; notes p. 4. Correct (see finding 3).
- Path independence, even with f unknown: pp. 2–3, the "mysterious function" remark p. 3; notes p. 4. Correct.
- Conservative: closed curve gives f(P) − f(P) = 0: p. 3; notes p. 4. One curve with zero work is not enough: p. 3. Correct.
- ⟨−y, x⟩: not conservative, hence not a gradient: p. 3; notes p. 4. Correct.
- Physics: work = change in potential; gravitational and electric potential, voltage: pp. 2–3; notes p. 4. Correct. Energy statement: see finding 1. Transformers: see finding 2.
- Four equivalent properties: list starts at the end of p. 3 and runs over p. 4; notes p. 4. (1) ⟺ (2) via C₁ − C₂: p. 4; notes p. 4. (3) ⟹ (2) the FTC, converse = method for the potential "on Tuesday": p. 4; notes p. 4. (3) and (4) the same: p. 4; notes p. 4. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k path-independence`: 8 passed. Also recomputed independently (SciPy `quad` and by hand):
- "The arc": ∫₀^{π/4} cos 2θ dθ = ½ sin(π/2) = ½. Correct.
- −C₃: ∫₀^{1/√2} 2t dt = (1/√2)² = ½; along C₃, −½. Total 0 + ½ − ½ = 0. Correct.
- With f = xy: f(1, 0) = 0, f(1/√2, 1/√2) = ½, f(0, 0) = 0. Correct.
- ⟨−y, x⟩ on the unit circle: F · T̂ = |F| = 1, ∮ = 2π. Upper half (1, 0) → (−1, 0) counterclockwise: π; lower half, clockwise: −π. Correct.
- Worked example (original: own field and numbers): f = x²y gives f_x = 2xy, f_y = x², so ∇f = F. f(2, 3) − f(0, 0) = 4 · 3 = 12. On x = 2t, y = 3t: F = ⟨2 · 2t · 3t, 4t²⟩ = ⟨12t², 4t²⟩, r′ = ⟨2, 3⟩, 24t² + 12t² = 36t², ∫₀¹ 36t² dt = 12. (c) zero. All correct.
- Quiz 1: f = x² + y, f(1, 2) − f(0, 0) = 1 + 2 = 3, answer 0 ("$3$"). Correct; this is page-own material.
- Quiz 2: answer 1 (zero for every closed curve is needed). Correct; matches transcript p. 3.
- Quiz 3: answer 0 (2π ≠ 0 around the unit circle). Correct; the distractors are clearly wrong.
- Flashcards: all three correct. The third ("only the sign differs") matches transcript p. 2 and notes p. 4.
- Frontmatter summary: correct. It repeats the energy statement without the problem in finding 1 ("conservative means energy is conserved").

## Coverage and order
- The page follows the transcript order: recall and the three-piece example (p. 1); gradient fields, the potential and the sign convention, the theorem, differentials, proof, the example again (p. 2); the warning, path independence and conservativeness (pp. 2–3); the ⟨−y, x⟩ counterexample (p. 3); physics (p. 3); the four equivalent properties (pp. 3–4).
- One small reordering. The transcript makes the perpetual-motion/transformer remark while defining "conservative", before the ⟨−y, x⟩ example. The page moves it into the "Physics" section, together with Auroux's later "one minute of physics". This is reasonable and matches the notes' grouping ("Physical interpretation" on p. 4).
- Omitted: the student question about perpendicular curves (finding 6); the jokes; "the potential is defined up to adding a constant" (p. 4) is only implicit in "choose the potential at one point". Nothing substantive missing.
- Added: the worked example and the cosmology callout (both page-own, clearly separate).

## Licensing
- No rights-reserved or courtesy material in either source; nothing to credit beyond the MIT source and readings already in the frontmatter.
- No copied paragraphs. The prose is a rewrite. Only short phrases are close to the sources: "a lot of calculations for nothing" (quoted and cited); "no energy can be extracted for free from the field" (transcript p. 3: "no energy can be extracted for free -- from the field", one clause); and the energy clause taken from notes p. 4 (finding 1). All are acceptable as short phrases.
- The worked example (⟨2xy, x²⟩, (0, 0) → (2, 3)) and quiz 1 (x² + y) are original, not taken from MIT.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: correct and fairly attributed. "Newtonian gravity … is minus the gradient of a potential" uses the physicists' sign, consistent with the page's earlier remark. In expanding-sphere.mdx (8.286 Lecture 6), Guth's conserved E = ½ȧ² − (4π/3)Gρᵢ/a is the kinetic plus potential energy per unit mass (times 1/rᵢ²) of a shell's particle in the field of the constant enclosed mass. friedmann-equation.mdx (Lecture 7) rewrites E as the Friedmann equation with k = −2E/c². The sign of E decides eternal expansion versus recollapse (expanding-sphere.mdx, "A conserved quantity"). The callout's "exactly what Guth turns into the Friedmann equation" and "sign of the energy deciding whether the universe expands forever" both match.
- One remark on the callout, uncertain whether it is worth changing. Guth obtains E by integrating the radial equation of motion (multiplying by ȧ), which is a one-dimensional conservation law. Path independence of a 2D/3D field is more than that derivation needs. The callout does not claim otherwise, so no change is required.
- leadsTo: 18.02 Lecture 21 (Gradient Fields) is where the test for a gradient and the method for the potential come (transcript pp. 2 and 4: "on Tuesday"). Correct. 8.286 Lecture 6 is the expanding-sphere page, where the conserved quantity is introduced. Correct.
- Inline links: /courses/18-02/vector-fields-and-line-integrals (Lecture 19), /courses/18-02/gradient (Lecture 12), /courses/18-02/differentials-and-chain-rule (Lecture 11), /courses/8-286/expanding-sphere and /courses/8-286/friedmann-equation all point to existing pages.
- Verdict: no errors. Fixing findings 1 and 2 (both wording of physics, both inherited from MIT) is recommended before setting `status: reviewed`.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the energy sentence now uses the physicists' potential energy U: the change in kinetic energy equals the work, which is −ΔU, so kinetic energy plus U is constant.
- **Warning 2:** the transformer sentence now credits the example to Auroux and adds that the work is done by the induced electric field (whose loop integral is not zero), not by the magnetic force.
- Info: the magnetic-field remark now cites only the transcript. The other info items are left as they are.
