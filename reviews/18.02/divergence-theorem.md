---
page: content/year-1/18.02/divergence-theorem.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-28-divergence-theorem/ (read: local copy lec.html, title "Lecture 28: Divergence Theorem"; its .pdf link is 4787b3f7449a9dd236e9a74b84ff5687_WfEQabCGAqI.pdf, matching the transcript reading)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/4787b3f7449a9dd236e9a74b84ff5687_WfEQabCGAqI.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec28", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked in tp.txt; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week11/ (read: local copy week11.pdf, each page extracted with pdftotext -f N -l N; PDF p. 1 is a cover, so printed page = PDF page − 1. Printed p. 3 (PDF p. 4) has the end of Lecture 27, then the Lecture 28 header, flux through a graph, the cross product, n̂ = dir(dS⃗) and dS = √(f_x² + f_y² + 1) dx dy, the paraboloid example (π/2), and the first lines of "Parametric surfaces" (up to "To find dS⃗,"). Printed p. 4 (PDF p. 5) has the parametric formula and "won't be needed on exam", implicit surfaces with the absolute-value correction, vertical surfaces, the graph as a special case, the divergence theorem, the z k̂ example and the physical interpretation)
  - content/year-1/18.02/_course.json (read: Lecture 28 = Divergence Theorem)
  - content/year-5/8.902/linear-perturbations.mdx (read: lecture 13, order 1, the only 8.902 Lecture 13 page; target of the callout link and the leadsTo; Poisson's equation ∇²φ = 4πGρ in eq. (376), with force per unit mass −∇φ)
  - calcs/18.02/divergence-theorem.yaml (read; `npm run calc:test -- -k divergence-theorem`: 6 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: needs-changes
---

# Review: Flux through graphs and the divergence theorem

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers (PDF page − 1). `reading1` = Week 11 summary, `reading2` = transcript. The five formulas:
- "Flux element for a graph" (`reading1`, "Lecture 28, p. 3"): notes printed p. 3, the determinant ending in ⟨−f_x, −f_y, 1⟩ΔxΔy and "dS⃗ = ±⟨−f_x, −f_y, 1⟩ dx dy". Correct.
- "Flux through the paraboloid" (`reading2`, p. 2): transcript p. 2 (z dx dy, x² + y², "r² times r dr dθ", r 0 to 1, θ 0 to 2π, "pi over two"). Correct; also notes p. 3.
- "Parametric surfaces" (`reading2`, p. 3): transcript p. 3 ("n dS is this cross-product times du dv up to sign"). Correct; also notes p. 4.
- "Implicit surfaces" (`reading2`, p. 4): n̂ dS = ±N⃗/(N⃗ · k̂) dx dy is boxed on transcript p. 4. But the first half, dS = |N⃗|/|N⃗ · k̂| dx dy with the absolute value, is not in the transcript (p. 4 says "length of N divided by N dot k times delta A"); it is the corrected form in notes p. 4 (#5).
- "Divergence theorem" (`reading1`, "Lecture 28, p. 4"): notes printed p. 4 (PDF p. 5), including div(P î + Q ĵ + R k̂) = P_x + Q_y + R_z. Correct; also transcript p. 4.

No "rights reserved" or "courtesy" notice in the transcript, the Week 11 summary or the lecture page (grep: no match). No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Flux through a graph", first sentence: "(transcript, pp. 1–2; notes, p. 3)" | The whole setup and derivation (graph over its shadow, small rectangle Δx by Δy, parallelogram, vectors U and V, linear approximation, the cross product, n̂ dS = ±⟨−f_x, −f_y, 1⟩ dx dy) is on transcript p. 1. Page 2 begins inside the paraboloid example. | pp. 1–2 | "(transcript, p. 1; notes, p. 3)". |
| 2 | error | Same paragraph: linear approximation and the sides ⟨1, 0, f_x⟩Δx, ⟨0, 1, f_y⟩Δy "(p. 2; notes, p. 3)", and "The cross product gives both the area and the normal direction at once (p. 2; notes, p. 3)" | Both on transcript p. 1 ("f of x plus delta x … approximately … plus delta x times f sub x"; "one, zero, f sub x times delta x … zero, one, f sub y delta y"; "the cross-product gives us two in one"). | p. 2 (twice) | "(p. 1; notes, p. 3)" in both places. |
| 3 | error | Paragraph after the first formula: "For a horizontal plane, f_x = f_y = 0 and it gives k̂ dx dy (p. 2)" | Transcript p. 1 ("if we look at a very easy case where this is just a horizontal plane … You get dx, dy"). | p. 2 | "(p. 1)". |
| 4 | info | Paraboloid example, "(p. 2; notes, p. 3)" (first citation) | The example is posed at the very end of p. 1 ("Let's say we want to find the flux of the vector field z times k …") and worked on p. 2. | p. 2 | Optional: "(pp. 1–2; notes, p. 3)". |
| 5 | warning | `<Formula label="Implicit surfaces">`, `cite="reading2" at="p. 4"` | Transcript p. 4: ΔS = \|N⃗\|/(N⃗ · k̂) ΔA, no absolute value. Notes p. 4: "(In fact the first formula should be dS = \|N⃗\|/\|N⃗ · k̂\| dA, I forgot the absolute value)", plus n̂ dS = ±N⃗/(N⃗ · k̂) dx dy. | Formula with \|N⃗ · k̂\| cited to the transcript | Cite `reading1` at "Lecture 28, p. 4", which has both formulas in the form shown (the page's bracket already explains the correction). |
| 6 | info | "Implicit surfaces": "cos α = N⃗ · k̂/\|N⃗\|" | Notes p. 4 and transcript p. 4 write it the same way (no absolute value). | Same | Optional, for consistency with the corrected dS formula: cos α = \|N⃗ · k̂\|/\|N⃗\|. |
| 7 | info | "Parametric surfaces", "(transcript, pp. 2–3; notes, p. 4)" | The notes' "Parametric surfaces" paragraph starts at the bottom of printed p. 3 and the formula is on p. 4. | notes, p. 4 | Optional: "notes, pp. 3–4". |
| 8 | info | "(This general form was not needed for the exam, notes, p. 4.)" | Notes p. 4: "won't be needed on exam" (future, about the coming exam). | "was not needed" | Optional: "(The notes add that this general form is not needed for the exam, p. 4.)" |
| 9 | warning | "The divergence theorem", bracket "(The transcript here says "Green's theorem", meaning its space version.)" | On transcript p. 4 Auroux says "Green's theorem" three times while redoing the z k̂ sphere example ("more efficiently now by Green's theorem … Green's theorem says that our flux integral can actually be replaced by the triple integral"), i.e. before the ⟨x, y, z⟩ remark. It is a slip for the divergence theorem, though he had just called it the "space version of Green's theorem". | The bracket follows the ⟨x, y, z⟩ sentence, so it seems to refer to that remark | Move the bracket to the end of the z k̂ sentence and say plainly that it is a slip, e.g. "(In the transcript Auroux calls it "Green's theorem" here; he means the divergence theorem, its space version.)" |
| 10 | info | "If S is vertical … using î or ĵ instead of k̂ (p. 4; notes, p. 4)" | Transcript p. 4 gives the projection onto the yz-plane (N⃗/(N⃗ · î) dy dz) without mentioning vertical surfaces; notes p. 4 give the vertical case and suggest the xz-plane. | Combined | Fine; both places support the sentence together. |
| 11 | info | Paraboloid example: "replace z by f(x, y)" | Transcript p. 2 stresses this as "one of the most sticky and tricky points": z can be replaced only because the integral is on the surface, unlike a triple integral where x, y, z are independent. | Mentioned without the warning | Optional: add a short clause ("allowed because we are on the surface"). |
| 12 | info | Divergence theorem formula | Transcript p. 4: Auroux puts a circle on the double integral as a reminder that the surface is closed. | Plain ∫∫ | Optional: mention the ∯ notation in words. |

## Arithmetic and answer checks
- Cross product: ⟨1, 0, f_x⟩ × ⟨0, 1, f_y⟩ = ⟨0·f_y − f_x·1, −(1·f_y − 0·f_x), 1·1 − 0·0⟩ = ⟨−f_x, −f_y, 1⟩. Correct. Horizontal plane: ⟨0, 0, 1⟩ = k̂. Correct.
- dS = \|⟨−f_x, −f_y, 1⟩\| dx dy = √(f_x² + f_y² + 1) dx dy. Correct.
- Paraboloid: f = x² + y², n̂ dS = ⟨−2x, −2y, 1⟩ dx dy; F⃗ · n̂ dS = z dx dy = (x² + y²) dx dy; ∫₀^{2π}∫₀¹ r³ dr dθ = 2π/4 = π/2. Correct (calc `paraboloid-flux`).
- Graph as implicit surface: g = z − f, ∇g = ⟨−f_x, −f_y, 1⟩, ∇g · k̂ = 1. Correct.
- z k̂ out of the sphere: div = 0 + 0 + 1 = 1, flux = (4/3)πa³. Correct (calc `sphere-volume`, a = 1.5: 14.137). ⟨x, y, z⟩: div = 3, 3 · (4/3)πa³ = 4πa³, matching the direct a · 4πa² of Lecture 27. Correct (not in the calcs file).
- Worked example (a): face x = 1, n̂ = î, F⃗ · n̂ = 1, area 1; same for y = 1, z = 1; faces x = 0, y = 0, z = 0 have F⃗ · n̂ = −x = 0 etc.; total 3. div = 3, volume 1, 3. Correct (calc `cube-flux`).
- Worked example (b): k̂ · ⟨−2x, −2y, 1⟩ = 1, flux = area of the unit disc = π. Correct (not in the calcs file).
- Worked example (c): ∫₀¹ √(4r² + 1) r dr = [(4r² + 1)^{3/2}/12]₀¹ = (5√5 − 1)/12 = 0.84836; times 2π = π(5√5 − 1)/6 = 5.3304 ≈ 5.33 > π ≈ 3.14. Correct (calcs `paraboloid-area`, `paraboloid-area-closed`).
- Callout: Gauss's law ∯ g⃗ · n̂ dS = −4πG M_inside = ∭ (−4πGρ) dV for every region, so div g⃗ = −4πGρ; with g⃗ = −∇φ, ∇²φ = 4πGρ. Correct, and the sign convention matches `linear-perturbations` (eq. 376 and its bracket: force per unit mass −∇φ).
- Quiz 1: ⟨−f_x, −f_y, 1⟩ dx dy (index 1). Correct for the upward normal; the question says "oriented upwards". Explanation correct.
- Quiz 2: div⟨x², y, −3z⟩ = 2x + 1 − 3 = 2x − 2 (index 0). Correct.
- Quiz 3: closed surface, outward normal, F⃗ defined and differentiable inside (index 1). Correct; matches transcript p. 4 and notes p. 4.
- Flashcards: all three correct.
- `npm run calc:test -- -k divergence-theorem`: 6 passed. Gaps (info): the ⟨x, y, z⟩ value 4πa³, worked example (b) π and quiz 2 (2x − 2) have no entry; `graph-cross` checks only the x component of the cross product; `paraboloid-area-closed` lists as `shown` the text "larger than the shadow's π ≈ 3.14" but computes 5.33 (the shown text does not match the number checked; point it at "≈ 5.33", or add a separate entry for π ≈ 3.14).

## Coverage and order
- Lecture order (transcript): recap and the graph formula (p. 1); derivation by cross product (p. 1); paraboloid example (pp. 1–2) and student questions (p. 2); parametric surfaces (pp. 2–3) with the two checks (graph, sphere in φ, θ); implicit surfaces: plane, gradient, projection and cos α (p. 3), N⃗ · k̂, the boxed formula, other planes, the graph as g = z − f (p. 4); divergence theorem, div, z k̂ and ⟨x, y, z⟩ on the sphere, hemisphere remark, physical meaning, proof next time (p. 4). The page follows this order.
- Everything in the notes' Lecture 28 section is covered, including the absolute-value correction and the vertical-surface note.
- Left out (minor, info): the opinion poll on the sign of the flux before choosing an orientation (the page states the result); the explicit sphere parametrisation x = a sin φ cos θ, y = a sin φ sin θ, z = a cos φ (p. 3; the page only says the earlier formulas come back); the "land on a cliff" illustration; the closed-surface circle notation (#12); the warning about replacing z (#11).
- Added: the worked example and the cosmology callout (page's own).
- leadsTo: 8.902 Lecture 13 resolves to `linear-perturbations` (the only Lecture 13 page), whose fluid equations include Poisson's equation ∇²φ = 4πGρ and whose subject is the growth of density perturbations. The "why" ("Poisson's equation, which drives the growth of structure") is accurate.

## Licensing
- No "All rights reserved" or "Courtesy of" material in either source; none reused. The lecture's pictures are not reproduced.
- No paragraphs copied. Short echoes: "gives both the area and the normal direction at once" (transcript p. 1: "two in one"), "net amount of fluid leaving D per unit time" (notes p. 4: "net amount leaving D per unit time"), "total of the sources inside minus the sinks" (transcript p. 4). Standard phrasing; acceptable.
- The paraboloid z k̂ example and the z k̂ / ⟨x, y, z⟩ sphere checks are MIT's and presented as such. The worked example is original: the cube is the page's own; (b) and (c) reuse MIT's paraboloid surface with new questions (constant field, surface area), which is fine.

## Notes
- The cosmology callout is physically correct and fairly framed: it states standard physics, attributes nothing to 18.02, and the link and leadsTo point to a page that does use ∇²φ = 4πGρ. "the growth of galaxies from small density ripples" is slightly narrower than the linked page (growth of perturbations, i.e. structure in general); optional: "the growth of structure".
- Known site issue, not this page's fault: read-aloud of integrals with grouped upper limits (`\int_0^{2\pi}`) is garbled (lib/speech.ts).
- After fixing #1–#3 (and preferably #5 and #9), the page can be set to `status: reviewed`.

## Resolution (2026-11-16, by the page author)

- **Errors 1–3:** the graph derivation, the parallelogram sides, the cross product and the horizontal-plane remark now cite transcript p. 1.
- **Warning 1:** the "Implicit surfaces" formula, with the absolute value, now cites the notes (reading1, Lecture 28, p. 4).
- **Warning 2:** the "Green's theorem" bracket moved to the z k̂ example and now calls it a slip for the divergence theorem.
- Info: the paraboloid example cites transcript pp. 1–2; the parametric remark cites notes pp. 3–4 and keeps the notes' tense; calcs gains entries for 4πa³ and for (b), and the paraboloid-area anchor now points at 5.33. The other info items are left as they are.
