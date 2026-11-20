---
page: content/year-1/18.02/flux.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-23-flux/ (read: local copy lec.html, title "Lecture 23: Flux"; its .pdf link is 6b140b816031bd21d6fad9651f650c93_CdoRiNSrqI.pdf, matching the transcript reading)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/6b140b816031bd21d6fad9651f650c93_CdoRiNSrqI.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec23", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked; the text layer drops "+" signs and some board formulas)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week9/ (read: local copy week9.pdf; PDF p. 1 is a cover; Lecture 23 on printed pp. 3–4 = PDF pp. 4–5. Printed p. 3 starts with the end of Lecture 22 (RHS of the main step, area example, planimeter), then the Lecture 23 header, the definition, work vs flux, the Riemann sum, the parallelogram interpretation, the circle examples, n̂ ds = ⟨dy, −dx⟩ and ∮ −Q dx + P dy. Printed p. 4 starts with "(or if F = ⟨M, N⟩, ∮ −N dx + M dy)", then "no example given", Green's theorem for flux, the renaming proof, the M, N form, the translated circle and the source-rate interpretation)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-24-simply-connected-regions/ (read via web fetch, description only: "Simply connected regions; review")
  - content/year-1/18.02/_course.json (read: Lecture 23 = Flux; Lecture 24 = Simply Connected Regions)
  - content/year-4/8.286/homogeneous-expansion.mdx (read: Lecture 4, target of the callout link and the leadsTo) and content/year-4/8.286/expanding-sphere.mdx (Lecture 6, ρ ∝ 1/a³)
  - calcs/18.02/flux.yaml (read; `npm run calc:test -- -k 18.02/flux`: 5 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Flux and the normal form of Green's theorem

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers. `reading1` = Week 9 summary, `reading2` = transcript. All five formulas are at the cited place:
- "Flux" (`reading2`, p. 1): transcript p. 1 (flux = ∫_C F · n̂ ds, boxed; limit of the sum of F · n̂ Δs). Correct; also notes p. 3.
- "Flow through a small piece" (`reading2`, p. 1): transcript p. 1 (parallelogram, base Δs, height F · n̂, "area is base times height"). Correct; also notes p. 3 ("Δs · height = Δs (F · n̂)").
- "Flux out of a circle" (`reading2`, p. 2): transcript p. 2 (F · n̂ = a, ∫ a ds = a · length = 2πa²). Correct; also notes p. 3.
- "Flux in components" (`reading2`, p. 3): transcript p. 3 (line integral of ⟨P, Q⟩ · ⟨dy, −dx⟩ = ∫ −Q dx + P dy). Correct; also notes p. 3.
- "Green's theorem, normal form" (`reading1`, "Lecture 23, p. 4"): notes p. 4 ("Green's theorem for flux … div(F) = P_x + Q_y"). Correct; also transcript p. 3.

No "rights reserved" or "courtesy" notice in the transcript, the Week 9 summary or the lecture page (grep: no match). The lecture's pictures (zoomed parallelogram, circle with radial field) are not reproduced. No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Callout "The Hubble flow has the same divergence everywhere", last two sentences, and its only link | The linked 8.286 page (`homogeneous-expansion`, Lecture 4) covers v = H r, H = ȧ/a and the scale factor; it says nothing about the density falling. ρ ∝ 1/a³ is on `expanding-sphere` (Lecture 6), from which ρ̇ = −3(ȧ/a)ρ = −3Hρ follows. | "its density falls, at the rate ρ̇ = −3Hρ. See the homogeneous expanding universe." | Keep the Lecture 4 link for v = H r, and add "(the density law ρ ∝ 1/a³ is on [the expanding sphere](/courses/8-286/expanding-sphere))", or link that page for the last sentence. The physics itself is right: with ρ uniform, continuity gives ρ̇ = −ρ div v = −3Hρ, the same as differentiating ρ ∝ a⁻³. |
| 2 | info | Callout, "just as the lecture found that only uniform 'pumping' everywhere can produce such a flow" | Transcript p. 4 gives two readings of divergence: for a gas, how much the flow expands areas; for water (incompressible), the source rate, which for x î + y ĵ needs pumps everywhere. | Uses the pumping (water) reading first, then says no matter is pumped in for the universe. | The universe fits the lecture's **gas** reading (expanding areas, density falling), not the water one. Suggest: "In the lecture's gas picture, divergence measures how fast the flow expands areas (volumes in space); for the universe no matter is pumped in, so …". |
| 3 | info | Callout, "3H in space" | The lecture defines divergence only in the plane; 3D divergence comes later in 18.02. | "$3H$ in space" | Correct (∂(Hx)/∂x + ∂(Hy)/∂y + ∂(Hz)/∂z = 3H). Optional: "(adding the z term, as later in this course)". |
| 4 | info | Section "Flux in coordinates", "In the limit, n̂ ds = ⟨dy, −dx⟩ (pp. 2–3)" | Transcript p. 2 has the whole argument, including "take the limit"; p. 3 starts with P, Q. | "(pp. 2–3)" | "(p. 2)". |
| 5 | info | Section "Flux in coordinates", "Auroux knows no trick for remembering where the minus sign goes (p. 3; notes, p. 4)" | The "no good way of helping you remember" remark is transcript p. 3 only; notes p. 4 has just the M, N formula. | Cites both for the sentence. | Fine as a citation of the formula; optional: move "notes, p. 4" next to the formula. |
| 6 | info | Section "Green's theorem for flux", "defined and differentiable on all of R" | Transcript p. 3: "defined everywhere … also on R … defined and differentiable in R". Notes p. 4 state no hypothesis. | As the transcript. | None. |
| 7 | info | Section "What divergence means" | Transcript p. 4: contracting field toward the origin has negative divergence; translation and rotation zero. | Same. | None. |

Prose page references checked against the sources:
- Opening (flux in space in a couple of weeks, the plane version first): transcript p. 1. Correct.
- n̂ 90° clockwise from T̂, to the right of travel: p. 1; notes p. 3. Correct.
- Work sums the tangential component ("with or against F"), flux the normal component, right positive, left negative; same set-up for a mathematician: p. 1; notes p. 3. Correct.
- Velocity field, fluid per unit time, dam with holes: p. 1; notes p. 3. Correct (paraphrased, not copied).
- Net flow, left to right positive: pp. 1–2. Round tank, dam on a diameter evens out: p. 2. Correct.
- Counterclockwise closed curve: n̂ points out, flux out of the region: p. 2. Correct.
- −y î + x ĵ tangent, flux 0: p. 2; notes p. 3. Correct.
- P, Q chosen to stress a different integral: p. 3; notes p. 3 ("using new letters to make things look different"). Correct.
- Divergence easier than curl, no signs or swapping; normal vs tangential form: p. 3. Correct.
- Renaming proof M = −Q, N = P; M, N version ∮ −N dx + M dy = ∫∫ (M_x + N_y) dA: p. 3; notes p. 4. Correct.
- div(x, y) = 2, flux 2πa²; circle moved elsewhere, inflow and outflow, still 2πa²: pp. 3–4 (the example starts at the end of p. 3); notes p. 4. Correct.
- Gas reading, water/source rate per unit area per unit time, pumps everywhere vs a single spring that slows with distance: p. 4; notes p. 4 (source rate). Correct.

## Arithmetic and answer checks
- Circle, F = x î + y ĵ: on r = a, F · n̂ = a, ∮ a ds = a · 2πa = 2πa². By Green: div F = 2, 2 · πa² = 2πa². calcs (a = 1.5): 14.137 both ways. Correct.
- −y î + x ĵ on the circle: F · n̂ = 0, flux 0. Correct.
- Worked example (a), F = ⟨x, 0⟩, unit square: right side x = 1, n̂ = î, F · n̂ = 1, length 1 → 1; left side F = 0; top/bottom F · ĵ = 0. Total 1. div F = 1, area 1 → 1. Correct (not in calcs; trivial).
- Worked example (b), G = ⟨1, 0⟩ along (0, 0) → (1, 1): x = y = t, ∫ −0 dt + 1 dt = 1. Geometric check: T̂ = (1, 1)/√2, n̂ = (1, −1)/√2 (south-east), G · n̂ = 1/√2, length √2, flux 1. Sign explanation correct. calcs: 1.
- Worked example (c), K = ⟨x², y²⟩: div K = 2x + 2y, ∫₀¹∫₀¹ = 1 + 1 = 2. Direct: right side x² = 1 (×1), top y² = 1 (×1), left and bottom 0 (x = 0, y = 0), total 2. Correct. calcs checks only the double-integral side (as ∫2x dx + ∫2y dy on unit widths); the direct side is not stored. Info: the entry's `source` is `reading1`, although the numbers are the page's own (origin page-own); harmless.
- Quiz 1: normal component (index 1). Correct.
- Quiz 2: div⟨3x, −y⟩ = 3 − 1 = 2 (index 0, choice "$2$"). Correct.
- Quiz 3: div⟨−y, x⟩ = 0 + 0 = 0, field defined and smooth everywhere, so flux 0 out of any closed curve (index 2). Correct.
- Flashcards: definition with n̂ to the right and ∫ −Q dx + P dy; normal form with div F = P_x + Q_y, counterclockwise; meaning of divergence (areas expanded; source rate for an incompressible fluid). All agree with transcript pp. 1–4 and notes pp. 3–4.
- `npm run calc:test -- -k 18.02/flux`: 5 passed.

## Coverage and order
- Page order follows the transcript: definition and n̂ convention, work vs flux, Riemann sum, fluid interpretation and parallelogram, net flow and the tank, the two circle examples, components (n̂ ds = ⟨dy, −dx⟩, P, Q and M, N), Green's theorem for flux, normal vs tangential form, renaming proof, the circle by Green and the moved circle, meaning of divergence. Same order as notes pp. 3–4.
- Left out (minor): the remark that the time and length units must be very small for the parallelogram approximation (pp. 1–2); the advice to guess the sign of a flux from the picture (p. 2); "double integrals and line integrals are the two skills, whatever they represent" (p. 3); the "trick question: where to put the circle for the largest flux? It doesn't matter" (p. 4, covered in substance by "the total is still 2πa²").
- Added: the worked example (three original problems; MIT gives no computed example beyond the circle, notes p. 4 "no example given"), and the cosmology callout.
- leadsTo: only 8.286 Lecture 4. Note for the author: OCW describes 18.02 Lecture 24 as "Simply connected regions; review", so it is not only an exam review; it extends Green's theorem to regions with holes. A forward link to it (or to the later 18.02 lectures on flux in space, which the opening sentence already announces) would be reasonable once those pages exist. Not required; I did not read the Lecture 24 transcript.

## Licensing
- No paragraph copied from the transcript or the notes. Close phrases are standard terminology ("rotated 90° clockwise from T̂", "source rate", "per unit area per unit time") or short paraphrases ("a dam with holes in it").
- No rights-reserved or courtesy material in the sources; no figures reproduced.
- No OpenStax or LibreTexts material.

## Notes
- The cosmology claim is correct: H(x î + y ĵ) has divergence 2H everywhere; in 3D, H r has divergence 3H, and a uniform density with no sources falls at ρ̇ = −3Hρ (equivalently ρ ∝ a⁻³). Attribution is fine (no claim is put in Guth's mouth). See #1 for the link and #2 for which of the lecture's two readings of divergence fits.
- The 8.286 link and leadsTo point to Lecture 4 (`homogeneous-expansion`), which exists and states v = H r and H = ȧ/a.
- During the review the page file was briefly absent from the working tree while the previous lesson was committed; the version reviewed is the one read at the start (133 lines; the reappeared file has the same line count and was not re-read in full).

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the callout now also links `expanding-sphere` for the falling density.
- Info 2: the callout now uses the lecture's "expanding areas" reading for the universe, not the pumping picture.
- Info 3: the n̂ ds limit cites p. 2; the minus-sign remark is credited to the transcript, with the formula also in the notes.
