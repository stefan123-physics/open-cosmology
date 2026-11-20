---
page: content/year-1/18.02/differentials-and-chain-rule.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-11-chain-rule/ (read: local copy lec.html, title "Lecture 11: Chain Rule"; its transcript link is `54de670bb48e3729141c9f712652badc_7eZVshlT33Q.pdf`, matching the page's reading2 URL; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/54de670bb48e3729141c9f712652badc_7eZVshlT33Q.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec11", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked in tp.txt; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week5/ (read: local copy week5.pdf, "Week 5 Summary"; PDF p. 1 is a cover; Lecture 11 (Tue, Oct 2, 2007) is entirely on printed p. 1 = PDF p. 2, checked with pdftotext -f 2 -l 2)
  - content/year-4/8.286/cosmological-constant.mdx (read, for the cosmology callout and leadsTo: `lecture: 18`; formula "Pressure of the vacuum" uses ρ̇ = −3(ȧ/a)(ρ + p/c²), which the page calls "the energy-conservation equation from Lecture 15")
  - content/year-4/8.286/matter-radiation-equality.mdx (read: `lecture: 15`; formulas "How matter density changes" ρ̇ = −(3b/a⁴)ȧ = −3(ȧ/a)ρ and "Energy balance of a comoving box" giving ρ̇ = −3(ȧ/a)(ρ + p/c²))
  - content/year-1/18.02/_course.json (read: Lecture 11 = Chain Rule, Lecture 12 = Gradient)
  - calcs/18.02/differentials-and-chain-rule.yaml (read; `npm run calc:test -- -k differentials-and`: 8 passed)
  - `npm run content:check`: no error for this page; its only warning is the missing review file (the 2 errors in the run belong to content/year-1/18.02/gradient.mdx, a different page)
verdict: pass-with-notes
---

# Review: Differentials and the chain rule

Citation convention checked: `reading1` = Week 5 summary (Lecture 11 is on printed p. 1), `reading2` = transcript (PDF pages 1–4). The one formula citing `reading1` ("Chain rule", "Lecture 11, p. 1") is correct: the chain rule df/dt = f_x dx/dt + f_y dy/dt + f_z dz/dt is on notes p. 1 (and spoken on transcript p. 1). All other formulas cite `reading2`; every page number was checked and is right (list below). No "rights reserved" or "courtesy" notice in the transcript, the Week 5 summary or either OCW page (grep: no match).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | `leadsTo` 8.286 Lecture 18, and the cosmology callout | The density equation ρ̇ = −3(ȧ/a)ρ for matter (by differentiating ρ = b/a³, i.e. the chain rule) and the general ρ̇ = −3(ȧ/a)(ρ + p/c²) are derived in 8.286 **Lecture 15** (matter-radiation-equality.mdx, "How matter density changes" and "Energy balance of a comoving box"). Lecture 18 (cosmological-constant.mdx) only *uses* the general equation, calling it "the energy-conservation equation from Lecture 15". | leadsTo: Lecture 18, "The rate of change of the energy density in an expanding universe is found with the chain rule through the scale factor." | Point the leadsTo at 8.286 Lecture 15 (where the rate is actually found that way), or keep Lecture 18 but reword `why` to "uses ρ̇ = −3H(ρ + p/c²) to show that vacuum energy needs negative pressure". In the callout, consider adding a link to [matter-radiation-equality](/courses/8-286/matter-radiation-equality) where Guth derives both equations. |
| 2 | info | Cosmology callout, "Guth's general version, ρ̇ = −3H(ρ + p/c²), is used in the cosmological constant to show why vacuum energy needs a negative pressure" | cosmological-constant.mdx: ρ̇_vac = 0 plus ρ̇ = −3(ȧ/a)(ρ + p/c²) gives p_vac = −ρ_vac c². | As quoted. | Correct and fairly attributed; the page writes H where Guth writes ȧ/a, and the callout defines H = ȧ/a, so fine. The matter step is also right (see checks). |
| 3 | info | "Differentials in one variable", "this is implicit differentiation (transcript, p. 1; notes, p. 1)" | Transcript p. 1 calls it implicit differentiation; notes p. 1 only say "Recall in single variable calculus". | Cites both for the name. | Optional: cite only the transcript for the term. Not wrong. |
| 4 | info | Formula "Chain rule in two new variables" | Transcript p. 3 (text layer) reads the v-formula as "partial f over partial x times partial x over partial v plus partial f over partial u partial y over partial v", a slip or transcription error for ∂f/∂y. Notes p. 1 only give f_u and "similarly for f_v". | Correct ∂f/∂y ∂y/∂v. | None needed; the page rightly does not repeat it. (Same for "f sub q" for f_u on p. 2.) |
| 5 | info | Coverage | Transcript p. 1: Auroux does not like reading differentials as "infinitesimal changes" and prefers "placeholders" for the tangent approximation. Transcript p. 4 (student question): the dt chain rule is a special case of the u, v one; with a single variable the partial equals the ordinary derivative, so straight d's are used. | The placeholder reading is given (without the "infinitesimal" contrast); the special-case remark is not mentioned. | Optional: one sentence each. Leaving them out is defensible. |
| 6 | info | `source.readings[0]` | Week 5 summary covers Lectures 11–13. | Has `location: "Lecture 11, p. 1"`. | Correct. |

Every formula and prose page reference was checked against its cited location:
- Opening "(transcript, p. 1)": differentials as the new tool after partial derivatives and extremes. Correct.
- dy = f′(x) dx, dy/dx and its reciprocal; y = sin⁻¹x, x = sin y, dx = cos y dy, dy/dx = 1/cos y = 1/√(1 − x²): transcript p. 1; notes p. 1. Formula cites `reading2` p. 1. Correct.
- Total differential df = f_x dx + f_y dy + f_z dz, also in ∂ notation: transcript p. 1 (both notations spoken); notes p. 1. Cites `reading2` p. 1. Correct.
- "Not numbers, not vectors, not matrices", df ≠ Δf, df only expressible through other differentials: transcript p. 1; notes p. 1 ("df is not the same as Δf"). Correct.
- Textbook mixes d and Δ in "a couple of formulas": transcript p. 1; notes p. 1 ("The textbook has it wrong"). Correct.
- Two uses (placeholder → Δf ≈ f_xΔx + f_yΔy + f_zΔz, "tangent plane approximation", = versus ≈; divide by dt → chain rule): transcript p. 1; notes p. 1. Correct.
- First justification by substituting dx = x′(t) dt etc.: starts at the end of transcript p. 1 and is worked on p. 2; notes p. 1 ("Can justify the chain rule in 2 ways: 1."). Page cites p. 2. Correct.
- Distrust of differentials "just yet": transcript p. 2. Correct.
- Formula "Dividing the approximation by Δt", limit Δt → 0 makes it exact: transcript p. 2; notes p. 1 ("2. (more rigorous)"). Cites `reading2` p. 2. Correct (spoken, not written; the transcript is the right citation).
- Example w = x²y + z, x = t, y = eᵗ, z = sin t; dw/dt = 2teᵗ + t²eᵗ + cos t by both methods; "roughly equal in complication"; chain rule needed when f is complicated or only its partials are known: transcript p. 2; notes p. 1. Correct.
- Product rule from f = uv, f_u = v, f_v = u: transcript p. 2; notes p. 1. Cites `reading2` p. 2. Correct.
- Quotient rule g = u/v, g_u = 1/v, g_v = −u/v², clearing the denominator v²: transcript pp. 2–3; notes p. 1. Correct.
- New variables u, v; polar coordinates as motivation; arctangent makes substitution messy; need f_x, f_y, x_u, x_v, y_u, y_v: transcript p. 3; notes p. 1. Correct.
- Formula "Substituting differentials" (collecting du and dv terms): transcript p. 3; notes p. 1 (term for term). Cites `reading2` p. 3. Correct.
- Formula "Chain rule in two new variables", coefficient of du is ∂f/∂u with v fixed: transcript p. 3; notes p. 1. Cites `reading2` p. 3. Correct.
- How to remember it, the two effects add, more variables more terms: transcript p. 3. Repeated substitutions one chain rule at a time: transcript p. 4. Cited "pp. 3–4". Correct.
- No "simplifying" by ∂x: ∂f/∂u = ∂f/∂u + ∂f/∂u, curly ∂ as a warning: transcript p. 3; notes p. 1 ("It's not legal to 'simplify by ∂x'"). Correct.
- "∂f" alone means nothing; df is the total variation: transcript p. 4. Correct.
- Formula "The r-derivative in polar coordinates" f_r = f_x x_r + f_y y_r = cos θ f_x + sin θ f_y, and f_θ similarly: transcript p. 4; notes p. 1. Cites `reading2` p. 4. Correct.
- Gradient next lecture, vector of partial derivatives: transcript p. 4 ("On Thursday"; Lecture 12 is Thu, Oct 4 in the Week 5 summary). Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k differentials-and`: 8 passed. Recomputed by hand as well:
- d/dx sin⁻¹x: 1/cos y with cos y = √(1 − sin²y) = √(1 − x²) (cos y ≥ 0 on the principal branch). Correct.
- Lecture example: w_x = 2xy, w_y = x², w_z = 1; 2t·eᵗ·1 + t²·eᵗ + 1·cos t. Substitution: d/dt(t²eᵗ + sin t) = 2teᵗ + t²eᵗ + cos t. Same. Correct.
- Quotient: (1/v)u′ − (u/v²)v′ = (u′v − uv′)/v². Correct.
- Polar: x_r = cos θ, y_r = sin θ, so f_r = cos θ f_x + sin θ f_y. Correct.
- Worked example (a): w = xy², w_x = y² = 0.5, w_y = 2xy = 1 at t = π/4, dx/dt = −sin t = −0.7071, dy/dt = cos t = 0.7071; dw/dt = −0.35355 + 0.70711 = 0.35355 ≈ 0.354 (exactly √2/4). The step writes "2(0.5)(0.7071)" for 2xy cos t, i.e. 2·(xy = 0.5)·cos t; right, if a little terse. Substitution: w = cos t sin²t, dw/dt = −sin³t + 2 sin t cos²t = −0.35355 + 0.70711 ≈ 0.354. Correct, and the two methods agree.
- Worked example (b): f = x² + y², f_r = cos θ·2r cos θ + sin θ·2r sin θ = 2r; directly f = r², df/dr = 2r. Correct.
- The worked example is original (the lecture's only examples are x²y + z and the general polar formula).
- Cosmology callout: ρ = C a⁻³, dρ/da = −3C a⁻⁴ = −3ρ/a, times ȧ gives −3(ȧ/a)ρ = −3Hρ. Correct, and matches 8.286 Lecture 15's eq. (3).
- Quiz 1: f = x²y, f_x = 2xy, f_y = x², df = 2xy dx + x² dy. Answer 0 correct; the distractors are wrong (missing factors, no differentials, swapped). Explanation right.
- Quiz 2: dw/dt = f_x dx/dt + f_y dy/dt. Answer 1 correct; explanation right.
- Quiz 3: partial derivatives hold different variables fixed and are not fractions; cancelling gives ∂f/∂u = ∂f/∂u + ∂f/∂u (transcript p. 3). Answer 1 correct; explanation right.
- Flashcards: all three correct (total differential and its two uses; f_u = f_x x_u + f_y y_u; f_r = f_x cos θ + f_y sin θ).
- calcs file (info): the page-own entries (worked example, cosmology note) carry `source: {cite: reading2, …}` though the numbers are not in the transcript; harmless, since `origin: page-own` marks them correctly. The matter-density entry could cite 8.286 Lecture 15 instead; optional.

## Coverage and order
- The page follows the lecture's order exactly: implicit differentiation and sin⁻¹ (p. 1); total differential, df ≠ Δf, textbook warning, two uses, chain rule (p. 1); two justifications (pp. 1–2); the x²y + z example (p. 2); product and quotient rules (pp. 2–3); chain rule with new variables, how to remember it, no cancelling (p. 3); student questions: one chain rule at a time, ∂f alone meaningless (p. 4); polar coordinates and preview of the gradient (p. 4). Same order as notes p. 1.
- Left out: the "infinitesimal changes" reading Auroux dislikes (p. 1), the remark that the dt chain rule is the one-variable special case of the u, v rule (p. 4), and the "what kind of object is w" question (p. 2: w is the same as f). All minor (row 5).
- Added: the worked example, the cosmology callout, and the link to 18.01 implicit differentiation (content/year-1/18.01/implicit-differentiation.mdx exists).

## Licensing
- No "rights reserved" or "courtesy" notice in any source used; both are CC BY-NC-SA OCW material.
- No paragraph copied: the prose is rewritten throughout. Short standard phrases ("new type of object", "placeholder", "tangent plane approximation") are terminology. The formulas necessarily match the notes.
- No OpenStax or LibreTexts material. No figures.

## Notes
- The leadsTo to 18.02 Lecture 12 ("The gradient vector, which packages the partial derivatives together") matches transcript p. 4 and the Week 5 summary (Lecture 12: Gradient). Correct.
- No em dashes in the page.
- Only row 1 needs a change before `status: reviewed`; the rest are optional.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the 8.286 leadsTo now points to Lecture 15, where Guth derives the density equations, and the callout links `matter-radiation-equality` for the derivation and `cosmological-constant` for the later use.
- Info 2: the "implicit differentiation" sentence now cites only the transcript.
- Info 3 and 4 need no change.
