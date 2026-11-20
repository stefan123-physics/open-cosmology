---
page: content/year-1/18.02/diffusion-equation.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-29-divergence-theorem-cont/ (read: local copy lec.html; it links b7d644f796f56b59a1e0d81f484b7869_wu8kXZSAp20.pdf and lec_week12, matching the page's readings)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/b7d644f796f56b59a1e0d81f484b7869_wu8kXZSAp20.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec29", 5 pages; cited page = PDF page; text per page checked in tp.txt; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week12/ (read: local copy week12.pdf; Lecture 29 is printed p. 1 = PDF p. 2, extracted with pdftotext -f 2 -l 2)
  - content/year-1/18.02/_course.json (read: Lecture 29 = Divergence Theorem (cont.), Lecture 30 = Line Integrals)
  - content/year-5/8.902/linear-perturbations.mdx (read: continuity equation ∂ρ/∂t + ∇·(ρv⃗) = 0 in eq. (376); target of the callout link)
  - calcs/18.02/diffusion-equation.yaml (read; `npm run calc:test -- -k diffusion-equation`: 3 passed)
verdict: needs-changes
---

# Review: The divergence theorem, its proof and the diffusion equation

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers (PDF page − 1). `reading1` = Week 12 summary, `reading2` = transcript. Transcript page map: p. 1 = recap, del notation, curl "next week", physical interpretation (source rate, incompressible fluid, outward normal, net amount leaving per unit time, sources minus sinks), 8.02 remark, start of the Q&A on divergence vs gradient; p. 2 = rest of the Q&A, first-order operators, the proof's two simplifications, vertically simple region, triple integral z first, top flux; p. 3 = bottom flux, sides, recap, doughnut cut, Green's theorem, diffusion equation introduced (smoke, ink, u, the equation, Laplacian), start of "heat equation"; p. 4 = still air, heat equation, metal bar, F = −k∇u, flux and smoke, divergence theorem, differentiation under the integral, dividing by volume; p. 5 = averages equal for every region, div F = −∂u/∂t, combination.

The five formulas:
- "Del" (`reading1`, "Lecture 29, p. 1"): notes p. 1, ∇ = ⟨∂/∂x, ∂/∂y, ∂/∂z⟩, ∇f, ∇·F = P_x + Q_y + R_z. Correct.
- "Physical meaning" (`reading2`, "pp. 1–2"): everything in the formula is on transcript p. 1 (outward normal, "the amount of fluid that's leaving the region, D, per unit time", sources minus sinks). Page 2 has only the divergence-vs-gradient Q&A. See finding 1.
- "Triple integral side" (`reading1`, "Lecture 29, p. 1"): notes p. 1, same formula. Correct.
- "Diffusion equation" (`reading2`, p. 3): transcript p. 3 ("partial u partial t equals … k times … del squared u … divergence of gradient u … partial squared u over partial x squared …"). Correct.
- "Conservation of smoke" (`reading2`, p. 4): flux = −d/dt ∫∫∫ u dV, divergence theorem, and moving the derivative inside are all on transcript p. 4. Correct.

No "rights reserved" or "courtesy" notice in the transcript, the Week 12 summary or the lecture page (grep: no match). No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `<Formula label="Physical meaning">`, `at="pp. 1–2"`, and the sentence before it "With the normal pointing outwards (pp. 1–2; notes, p. 1)" | The outward-normal convention and the whole interpretation are on transcript p. 1; p. 2 continues only the Q&A on divergence vs gradient. | pp. 1–2 | `at="p. 1"` and "(p. 1; notes, p. 1)". |
| 2 | error | "which, since the fluid cannot be compressed, must be the total amount of sources (minus sinks) inside D (p. 2; notes, p. 1)" | Transcript p. 1: "the only explanation is that there is something … sucking up water or producing more water … total amount of sources minus the amount of syncs". | p. 2 | "(p. 1; notes, p. 1)". |
| 3 | warning | "What the theorem says physically" | Transcript pp. 1–2: in answer to a question Auroux stresses that divergence is not the gradient ("with new notations comes new responsibility"): gradient takes functions to vectors, divergence vectors to functions, curl (later) vectors to vectors; both are first-order differential operators. He also notes a purely rotating flow has zero divergence, and that for force fields such as 8.02's electric fields this fluid interpretation "doesn't quite work". | Not mentioned | Add two or three sentences (citing pp. 1–2): ∇f vs ∇·F and what each maps to; rotation has zero divergence; the source picture is for flows, not force fields. |
| 4 | info | "The del notation" | Transcript p. 1: the same notation works in two variables, ⟨∂/∂x, ∂/∂y⟩, and the plane curl was the "determinant" of del and F. | Not mentioned | Optional half-sentence. |
| 5 | info | "The diffusion equation", first paragraph | Transcript p. 3: Auroux introduces it as an equation "observed empirically well before" it was understood, motivating the divergence theorem physically. | Not mentioned | Optional. |
| 6 | info | "It is also the heat equation, with u the temperature (pp. 3–4)" | Transcript p. 4 adds that for heat the medium may be a solid (a metal bar with one end in the oven), and that both laws come from molecules moving and colliding. Also p. 4: the fluid must be at rest (stirring mixes faster). | Says "still fluid" only | Optional: "in a fluid or solid at rest". |
| 7 | info | Proof, "Any region … Auroux shows a doughnut" | Transcript p. 3: he slices a bagel/doughnut into four pieces (after first saying five). | No count | Fine as written. |
| 8 | info | Callout "Conservation laws" | Not in the lecture; it is the page's own forward remark. The continuity equation ∂u/∂t + div F = 0 with u = ρ, F = ρv⃗ is exactly the first of the 8.902 fluid equations (eq. 376) on `linear-perturbations`. Correct and fairly attributed (no claim is put on MIT). | `kind="note"`, no `leadsTo` to 8.902 | Optional: since this is the page's real cosmology connection, make it `kind="cosmology"` and add a `leadsTo` entry for 8.902 Lecture 13 ("the continuity equation of the fluid description of matter"). |

## Arithmetic and answer checks
- `npm run calc:test -- -k diffusion-equation`: 3 passed.
- Worked example (a): ∇²(x² + y² + z²) = 2 + 2 + 2 = 6; for u = at + x² + y² + z², u_t = a and k∇²u = 6k, so a = 6k. Correct. The remark "fed from far away where u is large" is right: F = −k∇u = −2k⟨x, y, z⟩ points inwards and div F = −6k = −u_t.
- Worked example (b): each second partial of sin x sin y sin z is −sin x sin y sin z, so ∇²u = −3u; u_t = −3ku = k∇²u. Correct.
- Quiz 1: ∇·F (index 1). Correct; explanation correct.
- Quiz 2: index 0 (high to low, faster where concentration changes faster). Correct, matches transcript p. 4 and notes p. 1.
- Quiz 3: 6 (index 0). Correct.
- Flashcards: all three correct (del, physical meaning, diffusion equation with F = −k∇u and ∂u/∂t = −div F).
- calcs file: the three entries cite `reading2` p. 3 for the page's own examples; harmless (origin page-own), noted only.

## Coverage and order
- Order follows the lecture: recap, del, physical meaning, proof (components, vertically simple, top/bottom/sides, cutting general regions, Green's analogy), diffusion equation (definition, heat equation, two inputs, averaging argument, combination). Matches transcript pp. 1–5 and notes p. 1.
- Left out: the divergence-vs-gradient Q&A, rotating flow, and the 8.02 force-field caveat (finding 3); smaller asides in findings 4–6.
- Added: worked example (original) and the conservation-law callout (finding 8).
- Citations checked one by one: intro p. 1, del pp./notes correct, "curl next week" p. 1 correct, source rate and incompressible p. 1 correct; proof citations p. 2 (components, vertically simple, z first), pp. 2–3 (three parts), p. 3 (sum, doughnut, Green's) all correct; diffusion citations p. 3, pp. 3–4, p. 4 (inputs, physics, conservation), pp. 4–5 (averages, shrinking: the "tiny little box" is on p. 4, the conclusion on p. 5), p. 5 (combination) all correct. Only findings 1 and 2 are wrong.
- leadsTo 18.02 Lecture 30 ("Line integrals in space"): _course.json title "Line Integrals"; the next lecture does treat line integrals in space. Fine.

## Licensing
- No paragraph copied from the transcript or notes. The physics line "from high to low concentration, faster where the concentration changes more abruptly" is close to the notes' "flow goes from highest to lowest concentration, faster if concentration changes more abruptly" (one short clause; acceptable, could be reworded).
- No rights-reserved or courtesy material; no OpenStax/LibreTexts material; no figures.

## Notes
- Bottom normal written as −⟨−∂z₁/∂x, −∂z₁/∂y, 1⟩ dx dy, as in notes p. 1. Correct.
- The transcript's "guesses are compressible" (p. 1) is a transcription error for "gases"; the page correctly says gases.
- Not checked: `npm run content:check` was not run in this review.

## Resolution (2026-11-16, by the page author)

- **Errors 1–2:** the "Physical meaning" formula, the sentence before it and the sources-minus-sinks sentence now cite transcript p. 1.
- **Warning 3:** the page now says a rotating flow has zero divergence, that divergence is not the gradient (functions to vectors versus vectors to functions), and that the fluid picture does not quite fit force fields.
- Info: the closing note is now a cosmology callout with a leadsTo to 8.902 Lecture 13. The other info items are left as they are.
