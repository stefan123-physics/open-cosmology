---
page: content/year-2/8.03/travelling-waves-reflection.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-i-mechanical-vibrations-and-waves/lecture-10/ (read, saved OCW page: title "Lecture 10: Traveling Waves", typed and handwritten notes, Chapter 8 reading "through section 8.2", three in-class demonstration clips all titled "Bell Labs Wave Machine (Mismatched Impedance)"; the clip pages give no timestamps)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec10/ (read: typed notes, 1.9 MB, 8 pages + OCW back page; text layer garbled, all 8 pages checked as rendered images)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/39926572ca9b80b877648531771b2dde_SnNmbVH5DAM.pdf (read: transcript, 19 pages; no printed footer numbers, so PDF page = page; checked with pdftotext -f N -l N for pp. 15 and 18)
verdict: pass-with-notes
---

# Review: Travelling waves, energy and reflection

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Frontmatter `summary` and the third flashcard | The notes call the transmission coefficient T (p. 6). Lee calls it τ (transcript, p. 18). On this page T is the tension. | The body correctly uses τ and explains why ("Lee writes the transmission coefficient as τ; the notes call it T"). But the summary says "T = 2v₂/(v₁ + v₂) … R = −⅓ and T = ⅔ … R = 1, T = 2", and the flashcard "Reflection and transmission at a junction" says "T = \frac{2v_2}{v_1 + v_2} … Free end: R = 1, T = 2". The same summary and the "Energy in a string" flashcard use T for the tension. | Use τ in the summary and the flashcard, as the body does. The summary and flashcards should match the page. |
| 2 | warning | "Joining two strings", condition 2 | "Then the massless ring will be transferred to, for example Mars, in a second" (transcript, p. 15). | In quotation marks: "would transfer it to Mars in a second". | Quote the transcript's words exactly, or drop the quotation marks and paraphrase. |
| 3 | warning | "Joining two strings" (whole section) | Throughout the junction part Lee says "refraction"/"refracted wave" when he means the reflected wave (transcript, pp. 8, 14, 15, 17, 18, 19), though he also says "reflective wave" (pp. 18, 19). The notes say "reflected" (p. 5). | Says "reflected" without comment. That is correct, but AGENTS rule 4 asks for a short bracketed note when the page departs from a lecturer slip. The page already does this for "up and down horizontally". | Add one bracket, e.g. "(In the lecture the reflected wave is often called 'refracted'; nothing is refracted on a string.)" |
| 4 | info | "Two pulses that cancel", last sentence | The midpoint x = 0 "never change[s] amplitude" is stated for the triangular pulses (p. 8) and again for the circular ones (p. 9). For the "MIT waves" Lee only says they do "really, really crazy things" and that the string remembers (p. 9). He does not say whether they are opposite pulses or whether the midpoint stays still. | "In Lee's computer simulations of triangles, circles and 'MIT waves', the point midway between two opposite pulses never moves (pp. 8–9)." | Limit the still-midpoint remark to the triangles and circles, e.g. "…; for the triangles and circles the midpoint never moves. He also shows 'MIT waves'." |
| 5 | info | "A shape released from rest", last sentence; "Joining two strings", demo sentence | The transcript does not name the device in the release demo (p. 13). The junction demo (p. 18) uses two systems joined by "this ring". OCW lists three in-class clips for this lecture, all titled "Bell Labs Wave Machine (Mismatched Impedance)". | "On the wave machine, a shape made by hand and released splits in two"; "The wave machine confirms it". | Probably right, given the OCW demo list. I could not confirm which clip goes with which demo (no timestamps). No change needed. The page correctly separates real demonstrations (Bell Labs machine) from Lee's computer simulations. |
| 6 | info | "Joining two strings", "Two extremes (notes, p. 6)" | The wall and free-end cases are in the text on notes p. 6. The sketches (wall: R = −1, T = 0; air: R = 1, T = 2) are on p. 7. Neither case is in the transcript; the lecture ends after the heavy-to-light demo (p. 19). | Cites notes p. 6 only. | Optional: "notes, pp. 6–7". It is correct that these come only from the notes. Saying "(not discussed in the lecture)" would be optional. |
| 7 | info | "Travelling-wave solutions" and "Joining two strings" | τ ≡ x − v_pt (notes p. 1, transcript p. 2) and τ = transmission coefficient (transcript p. 18) are both used. | Uses τ for both, as Lee does. The symbol entry for this page covers both meanings. | Acceptable. A reader might trip over it. Optional: write the transmission coefficient as τ_t, or add "(not the τ of the first section)". |
| 8 | info | "What is moving?" | Lee also says on p. 14 that y(x, t) describes displacement "in a horizontal direction". | Notes the p. 5 "up and down horizontally" slip only. | Optional: mention that it happens twice. Not needed. |
| 9 | info | Derivation formula | Notes p. 1 contain a typo: ∂f/∂t = (∂f/∂τ)(∂τ/∂t) = −v_p ∂f/∂t (should be ∂f/∂τ). | Correct form, −v_p f′(τ). | None. The page quietly avoids the typo, which is acceptable for a typo in the notes. |

Formula citations, each checked against the rendered notes:
- "Travelling wave" ψ = f(x − v_pt): notes p. 1 ✓ (transcript p. 2).
- "It solves the wave equation": notes p. 1, (i) and (ii) and the result ✓ (transcript pp. 2–3).
- "Kinetic energy": notes p. 3 ✓ (transcript p. 9).
- "Potential energy", dW ≈ (T/2)(∂ψ/∂x)²dx and the integral: notes p. 3 ✓ (transcript pp. 10–11).
- "Two travelling halves" g = f(x + vt) + f(x − vt), ∂g/∂t = vf′ − vf′: notes p. 4 ✓. The page adds "(x, 0)", which is correct and better than the notes, since the cancellation holds only at t = 0. Transcript pp. 12–13.
- "Two speeds" v₁ = √(T/ρ_L), v₂ = √(T/4ρ_L) = v₁/2: notes p. 5 ✓ (transcript p. 14).
- "Three waves": y_L, y_R on notes p. 5, k₁ = ω/v₁ and k₂ = ω/v₂ on p. 6, so "pp. 5–6" ✓ (transcript pp. 15–16).
- "Reflection and transmission" R = (v₂ − v₁)/(v₂ + v₁), τ = 2v₂/(v₁ + v₂): notes p. 6 ✓ (transcript pp. 17–18).

Prose citations checked:
- The "mouth to ear" remark (p. 2) and the recap (p. 1).
- f(kx ± ωt) (notes p. 1, transcript p. 3).
- Direction (pp. 3–5).
- Linearity and doubling (notes p. 2, transcript p. 6).
- The vote: nobody for "cancel", most for "pass", "four people" for "creative" (pp. 6–7).
- Energy argument (p. 7) and the velocity memory (notes p. 2, transcript pp. 7–8).
- Square-pulse demo on the "Bell Lab machine" (p. 8).
- Example 1/(1 + (x − 3t)⁴) (notes pp. 3–4, transcript p. 11).
- Brute force with Fourier (p. 12) and h/2 (p. 13; the notes' figure on p. 4 also shows ½h).
- Normal modes as two travelling sine waves (notes p. 4).
- Massless ring and boundary conditions (notes p. 5, transcript pp. 14–15).
- Integration step (notes p. 6, transcript pp. 16–17).
- Heavy-to-light demo with a positive reflection (p. 19).
- Impedance Z = T/V and k₁ ∝ v₁⁻¹ (notes p. 6).
- Driven massless ring with and without drag (notes pp. 7–8: Example 2 has no drag, Example 3 has drag −b ∂y/∂t).

All of these check out.

## Arithmetic and answer checks
- Derivation: ∂²f/∂t² = v_p² f″ and ∂²f/∂x² = f″ give the wave equation ✓.
- Example ψ = 1/(1 + (x − 3t)⁴) = f(x − 3t): it moves to +x at speed 3 ✓. The ratio ψ_tt/ψ_xx = 9 = v_p² ✓ (calcs `example-speed`).
- Released shape: ∂g/∂t at t = 0 is v_pf′(x) − v_pf′(x) = 0 ✓.
- Junction: from f_i + f_r = f_t and −v₂f_i + v₂f_r = −v₁f_t, we get f_r(v₁ + v₂) = (v₂ − v₁)f_i ✓ and f_t = (1 + R)f_i = 2v₂/(v₁ + v₂) f_i ✓.
- Integration step: integrating −k₁f_i′ + k₁f_r′ = −k₂f_t′ over t divides each term by ω, with k/ω = 1/v. Multiplying by v₁v₂ then gives the stated form ✓.
- v₂ = v₁/2 gives R = (−½)/(3/2) = −⅓ and τ = 1/(3/2) = ⅔ ✓.
- Wall, v₂ → 0: R = −1, τ = 0 ✓. Free end, v₂ → ∞: R = 1, τ = 2 ✓.
- Impedance: T/v = T/√(T/ρ_L) = √(Tρ_L), so the page's two forms agree ✓.
- Worked example (a): 2e^{−(2x + 8t)²} = 2e^{−4(x + 4t)²}, so it moves towards −x at speed 4 ✓.
- Worked example (b): ρ₂ = ρ₁/9 gives v₂ = 3v₁. R = 2/4 = ½ ✓ and τ = 6/4 = 3/2 ✓.
- Energy: Z₂ = Z₁/3. Reflected Z₁/4 = 0.25 Z₁A², transmitted (Z₁/3)(9/4) = 0.75 Z₁A², sum Z₁A² ✓. Power ∝ ZA² holds for a sinusoid at a fixed ω (P = ½Zω²A²). Lecture 10 does not state this; the problem gives it as a fact, which is fair.
- The worked example is original: own pulse, density ratio 1/9 in the opposite direction, and an energy check MIT does not do.
- Quiz 1: e^{−(x + 5t)²} = f(x + 5t), so it moves towards −x at 5. Answer index 1 ✓.
- Quiz 2: pass through each other. Answer index 1 ✓. The explanation is right: at the flat instant ∂ψ/∂x = 0, so U = 0 and all the energy is kinetic.
- Quiz 3: R = −⅓. Answer index 1 ✓.
- Quiz 4: wall gives R = −1 and nothing transmitted. Answer index 1 ✓.
- Flashcards 1 and 2 are correct. Flashcard 3 is correct apart from the T/τ notation (finding 1).
- `npm run calc:test -- -k travelling-waves`: 12 passed. The calcs file covers every number on the page, including the worked example.

## Coverage and order
- The page follows MIT's order:
  - recap of normal modes;
  - the travelling-wave solution and its proof;
  - f(kx ± ωt);
  - direction of motion;
  - what is moving;
  - superposition and the cancelling pulses (vote, energy argument, velocity memory, wave-machine demo, simulations);
  - kinetic and potential energy;
  - the 1/(1 + (x − 3t)⁴) example (before the break);
  - the released stationary shape (brute force vs two travelling waves, demo);
  - the two joined strings (speeds, boundary conditions, the three waves, solving, R and τ, demos in both directions).
- Content only in the notes is included and attributed to the notes:
  - normal modes as two travelling sine waves (p. 4);
  - impedance and wavelength change (p. 6);
  - wall and free end (pp. 6–7);
  - driven massless ring with and without drag (pp. 7–8; mentioned in one sentence, not worked out).
- Left out: Lee returns the exam during the break (p. 11), which is irrelevant. Lee's closing preview, "more systems described by wave equation … dispersion relation" (p. 19), is not mentioned. The notes' incident amplitude A with A_R and A_T (sketch, p. 5) appears only as the symbols R and τ, which is fine.
- OCW also assigns Chapter 8 of the course text ("through section 8.2"). The page does not cite it. Optional.
- `leadsTo` 8.03 Lecture 11: OCW title "Lecture 11: Sound Waves". The notes for Lecture 11 do set up the wave equation for longitudinal pressure waves in a gas, so the "why" is correct.
- The page has no cosmology callout. That is acceptable: Lecture 10 has no direct cosmology link, and rule 6 asks for one only where a real connection exists.

## Licensing
- `grep -il "rights reserved\|courtesy"` on the notes and transcript text found nothing. The OCW page has no such notice. Course licence: CC BY-NC-SA.
- The page reproduces no MIT figure. The notes' hand-drawn sketches (Gaussian/MIT pulse, cancelling triangles, the junction, wall and air) are not reused. There are no Plot or diagram components.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases: "up and down horizontally", "MIT waves", "air", "creative". The Mars phrase is in quotation marks but is not verbatim (finding 2). Prose and the derivation are rewritten.
- No em dashes on the page (0 found).

## Notes
- The page correctly separates real demonstrations from simulations. The square-pulse cancellation is on the Bell Labs wave machine (p. 8). The triangle, circle and "MIT waves" runs are "my little simulation" (p. 8).
- The junction demo (pp. 18–19) is described in the transcript as two systems joined by a ring that "was falling down … during the lecture". The page summarises it as "the wave machine confirms it". The OCW demo titles ("Mismatched Impedance") support this.
- Physics check of condition 2: a massless junction under equal tension on both sides feels a transverse force T(∂y_R/∂x − ∂y_L/∂x), so the slopes must match. The page's explanation is correct.
- Symbol meanings: every symbol on the page has a scoped meaning in `data/symbols.json`, including τ with both of its uses. Minor inconsistency: ψ has unit m, but y_L and y_R have no unit. This is not a content error.
- Fixing findings 1–3 (all warnings) is enough for `status: reviewed`. There are no errors.

## Resolution (2026-11-16, by the page author)

1. Summary and flashcard now use τ for the transmission coefficient, as in the body (T is the tension).
2. The Mars remark is no longer a quotation: "which would send it off, Lee jokes, to Mars in a second (transcript, p. 15)".
3. Added a bracket that Lee often says "refraction" for reflection (pp. 8, 14–19), and the second "horizontal" (p. 14).
Info notes: not changed (citations and wording already defensible; τ's double use follows the lecture).
