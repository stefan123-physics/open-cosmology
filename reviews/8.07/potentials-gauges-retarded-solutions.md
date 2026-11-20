---
page: content/year-4/8.07/potentials-gauges-retarded-solutions.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln15/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/e41ad0b285a2c825fe8909aff2a8dee5_MIT8_07F12_ln15.pdf (read, local copy: typeset slides, Lecture 36, December 10, 2012; slides -1- to -14- (PDF pages 1-32) read from the page images, including the last build-up page of slides 9, 10, 13 and 14; slide -18- (PDF page 36) read for eq. (38); OCR text used only as an index)
  - MIT 8.07 Lecture Notes 16 (local copy, text only, first slides, to check the leadsTo claim about Lecture 16)
  - content/year-4/8.286/inflation-solutions.mdx, content/year-4/8.286/eternal-inflation.mdx (frontmatter and a search for "entropy"/"arrow of time", for the callout and leadsTo claims)
verdict: pass-with-notes
---

# Review: Potentials, gauge choices and the retarded solutions

The page covers slides 1 to 14 of Lecture Notes 15 (Guth, "Potentials and Fields", Lecture 36, December 10, 2012, the second-last lecture: Lecture Notes 16 are headed "Lecture 37 ... (THE LAST)"). Every `<Formula>` was compared with the slide images; the author's notes.md was not used. Every derivation step was redone by hand. `npm run calc:test -- -k potentials`: 27 passed. `npm run content:check`: 0 errors; the only warning for this page is the missing review file (this file).

Formula by formula (label, `at=`, verdict). All 23 sit at the cited slide and equation number:
- slide 1, eq. (1), Maxwell's equations with sources, numbered (i) ∇·E, (ii) ∇·B, (iii) ∇×E, (iv) ∇×B: match, and the page's "(i) to (iv) in this order" is right.
- slide 2, eq. (2) boxed, eq. (3), eq. (4) boxed: match (both sides of the implications as on the slide).
- slide 3, eq. (5): given in words only, correctly cited.
- slide 4, eq. (6); the unnumbered Ampère–Maxwell line (cited "slide 4" without a number, right); eq. (8); eq. (7): all match. The page puts (8) before (7), which is the logical order; the numbers are kept.
- slide 5, eq. (9) boxed, (10), (11): match, including the sign of the two Λ terms in (11).
- slide 6, eq. (12) boxed, (13), (14) boxed, (15): match.
- slide 7, eq. (16), (17) boxed, (18) boxed: match. (The slide repeats eq. (7) between (17) and (18); the page refers back to it instead; fine.)
- slide 8, eqs. (19), (20) boxed, (21) boxed: match.
- slide 9, eq. (22) (three facts: ∂ᵢ|r − r′|, ∂ᵢρ(r′, t_r) with ρ̇ ≡ ∂ρ/∂t_r, ∂ᵢ[(xᵢ − x′ᵢ)/|r − r′|³] = 4πδ³), ∂ᵢV, and the five-term ∂ᵢ²V: match.
- slide 10, the line with ∂²ρ/∂t_r² and the final line "= −ρ/ε₀ + (1/c²)∂²V/∂t²" with "YES!": match.
- slide 11, eqs. (23), (24) boxed; slide 12, eqs. (25), (26) boxed: match except the A prefactor (slip, below).

The five terms of slide 9 were rederived with R = |r − r′|: from −ρ(xᵢ − x′ᵢ)/R³, differentiating the ρ gives +(1/c)ρ̇/R² and differentiating the rest gives −4πρδ³; from −(1/c)ρ̇(xᵢ − x′ᵢ)/R², differentiating ρ̇ gives +(1/c²)ρ̈/R, R⁻² gives +(2/c)ρ̇/R², and ∂ᵢ(xᵢ − x′ᵢ) = 3 gives −(3/c)ρ̇/R². The page attributes each term to its origin correctly, and 1 + 2 − 3 = 0 is right. For the advanced solution all three ρ̇ terms flip sign and the ρ̈ term keeps its sign, as the page says.

The lecturer slips and notes the page attributes, each checked:
- Eqs. (23) and (25): real. Both slides print 1/(4πε₀) in front of the integral for A (image checked). The correct prefactor is μ₀/4π, and slide 18, eq. (38) indeed has μ₀/4π, as the page says. The page writes μ₀/4π in both formulas and notes the slip in brackets after each. Correct.
- "Lorentz Gauge": real. Slides 6 and 7 write "Lorentz Gauge" / "Lorentz gauge" (three times). Ludvig Lorenz's condition dates from 1867 (Ann. Phys. 131 and Phil. Mag. 34, both 1867): correct. The statement that Griffiths' third edition also says "Lorentz gauge" agrees with my memory of that edition (the fourth edition switched to "Lorenz") but I could not check it against a copy; it is uncited (finding 4).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | `leadsTo` 8.286 L23, `why` | Slide 14 only: the low-entropy beginning, "Who knows?", and Guth's preferred unbounded-entropy explanation. No mention of inflation. | "Guth ends the arrow-of-time discussion with the state the universe began in, the question inflationary cosmology addresses." | Overstated: inflation addresses initial conditions such as homogeneity and flatness, but whether it explains the low initial entropy is disputed (e.g. Penrose's objection), and neither 8.286 page linked discusses entropy or the arrow of time (searched). Suggest: "Guth ends with the state the universe began in; 8.286 Lecture 23 shows how inflation is thought to have set up the early universe's initial conditions." |
| 2 | warning | Cosmology callout, last sentence | (not on the slides) | "The slides do not connect the two; whether the entropy of such a universe is unbounded ... is still an open question." | "The two" is unclear (the two 8.286 topics? slide 14 and inflation?). Say "The slides do not connect the arrow of time with inflation". The rest of the callout is fair: it attributes only what slide 14 says and marks the link to eternal inflation as open. |
| 3 | info | Coulomb gauge section, last sentence | Slide 6: "V is not measurable. E and B receive information only at the speed of light." | Adds the mechanism: the instantaneous change of −∇V is cancelled by a change in −∂A/∂t. | Correct physics, but not on the slide; add "(our explanation)" like the other additions on the page. |
| 4 | info | Lorenz gauge note | Slides say "Lorentz". | "[Guth, like the third edition of Griffiths, calls it the 'Lorentz gauge'. ... Lorenz in 1867 ...]" | Facts right as far as I can verify; consider adding a reference entry (e.g. Jackson & Okun, Rev. Mod. Phys. 73, 663 (2001), "Historical roots of gauge invariance") so the 1867 date is sourced. |
| 5 | info | Worked example step (d) | — | "the Lorenz condition of the next section" | The next section is Coulomb gauge; Lorenz comes in the section after. Say "of a later section". |
| 6 | info | Coulomb gauge, first paragraph | Slide 6: gauge freedom makes ∇·A "whatever we want". | Adds how: Λ with ∇²Λ = −f. | Correct (∇·A′ = f + ∇²Λ); a page addition attributed to slide 6 by position. Optional "(our step)". |
| 7 | info | Arrow-of-time paragraph | Slide 13 shows a strip of stills marked "Standard YouTube License". | "He illustrated it with a short video in class" | Whether the clip was played as a video cannot be confirmed from the notes (the slide shows still frames from a YouTube clip; no lecture video exists for this course on OCW as far as I know). Harmless; "with a clip from YouTube" would be safe. |

## Arithmetic and answer checks
- Worked example (a): V = −E₀x, A = 0 gives E = −∇V = E₀x̂, B = 0. V = 0, A = −E₀t x̂ gives E = −∂A/∂t = E₀x̂, B = ∇×A = 0 (A uniform in space). Correct.
- (b): ∇Λ = A′ − A = −E₀t x̂ gives Λ = −E₀xt (+ constant); V′ = V − ∂Λ/∂t = −E₀x − (−E₀x) = 0. Correct, and the sign convention is the slide's eq. (9).
- (c): V = −200 × 3 = −600 V; A_x = −200 × 5 = −1000 V·s/m. Units: V·s = Wb, Wb/m = T·m, so −1000 T·m. Correct (sign negative since A points along −x̂ for t > 0, consistent with −∂A/∂t = +E₀x̂).
- (d): both sets have ∇·A = 0 (A_x has no x dependence) and ∂V/∂t = 0, so both satisfy the Coulomb and the Lorenz conditions. Correct. Residual freedom: ∇·A′ + (1/c²)∂V′/∂t = ∇·A + (1/c²)∂V/∂t + ∇²Λ − (1/c²)∂²Λ/∂t², so any Λ with □²Λ = 0 keeps the Lorenz condition; Λ = −E₀xt has ∇²Λ = 0 and ∂²Λ/∂t² = 0. Correct, and marked as the page's own remark.
- Quiz 1 (answer index 2, A + ∇Λ and V − ∂Λ/∂t): eq. (9). Correct; the explanation of why the plus sign fails is right. Distractor 4 (A + ∇×(Λẑ), V − Λ) changes B in general, so it is wrong as intended.
- Quiz 2 (answer index 3, V at once, E about 10 ns later): 3/2.998×10⁸ = 1.0007×10⁻⁸ s ≈ 10 ns. Correct, and in line with slide 6.
- Quiz 3 (answer index 0, about 499 s earlier): 1.496×10¹¹/2.998×10⁸ = 499.0 s = 8.32 min. Correct; "8.3 hours" and "499 s later" are clearly wrong.
- Quiz 4 (answer index 1, □²V = −ρ/ε₀ and □²A = −μ₀J): eqs. (17), (18). Correct; the explanation (the bracket in (7) vanishes; (6) gains −(1/c²)∂²V/∂t²) is right.
- Flashcards 1–4: all correct (eqs. (5), (9), (12)–(18), (23)–(24) with μ₀/4π).
- Calcs file `calcs/8.07/potentials-gauges-retarded-solutions.yaml`: 27 entries, all pass; every page number (−600 V, −1000 T·m, 10 ns, 499 s, 8.3 min) has an entry, and the derivation steps (∂ᵢR, the retarded chain rule, the wave equation for ρ(t ∓ R/c)/R away from the source, the divergence of the Coulomb field away from r′, μ₀/4π = 1/(4πε₀c²)) are checked numerically. One flaw: the `lorenz-1867` fact gives `source: {cite: reading1, at: 'slide 6, eq. (14)'}`, but the slide says nothing about Lorenz or 1867 (it says "Lorentz"); the source should be a reference (see finding 4), not reading1 (calcs only).

## Coverage and order
- Slides 1–14 are all covered in MIT's order: sources (1), potentials (2–3), the other two equations (4), gauge transformations (5), Coulomb and Lorenz gauges (6–7), the guess (8), the check (9–10), retarded solutions (11), advanced solutions (12), arrow of time (13–14). The worked example sits after slide 5, before the gauge choices; a sensible place.
- Additions, all marked or clearly the page's own except as noted: worked example; how to reach Coulomb gauge (finding 6); the ∂A/∂t cancellation (finding 3); the Lorenz condition being satisfied by the retarded potentials through charge conservation (marked "the slides do not discuss it"; correct); links to 8.06 (gauge and the wave function's phase) and 8.033 (4-potential).
- Slides 15–20 (point charge, Liénard–Wiechert potentials and fields) are left to `lienard-wiechert-point-charge-fields`, as the intro says.

## Licensing
- PDF pages 19–26 (slide 13) carry a strip of five video stills of an egg falling and breaking, marked "Standard YouTube License. This content is excluded from our Creative Commons license." The page does not reproduce or describe the clip: it says only that Guth illustrated the point with a short video that is not under the course's licence and is not shown. Compliant.
- No other third-party material or "rights reserved" notice in slides 1–14. No figure is redrawn (the slides have none besides the stills).
- Text is in the page's own words. Close to the slide only in short attributed phrases: "Who knows?" (quoted), "As Guth puts it, Maxwell's equations and the laws of physics as we know them make no distinction between the future and the past" (one attributed slide sentence, nearly verbatim; acceptable as a quotation, could be put in quotation marks), and the paraphrase of the "most often heard explanation" on slide 14.
- No OpenStax or LibreTexts material.

## Notes
- Prerequisites all exist: wave-equation-group-velocity (8.07 L14), integral-form-electrostatics (8.07 L3, Poisson solution and the delta identity), magnetic-multipole-expansion-dipoles (8.07 L10, vector potential and static gauge freedom), maxwell-equations-four-potential (8.033 L16). Appropriate.
- Internal links resolve to existing slugs: ideal-magnetic-dipole-current, charged-particles-em-fields-gauge-invariance (8.06), inflation-solutions (8.286 L23), eternal-inflation (8.286 L1), lienard-wiechert-point-charge-fields.
- leadsTo 8.07 L16: Lecture Notes 16 ("Radiation") open by recalling the Liénard–Wiechert potentials and then treat electric dipole radiation; the `why` is fair.
- The intro's "the last notes" means the previous notes (LN14), while the 8.07 L16 `why` uses "the last notes" for the final notes. Both are right but the same phrase means two things; "the previous notes" in the intro would avoid it.
- Symbols (data/symbols.json): 32 meanings now list this page. Checked: Λ (gauge function), □ ("Written □²: ∇² − (1/c²)∂²/∂t²", scoped to this page; note it is the opposite sign of the 8.033 meaning, correctly kept apart), t_r, t_a, ρ̇ and ρ̈ (derivatives with respect to t_r, units C/(m³ s) and C/(m³ s²)), V′, E₀ (200 V/m), f, xᵢ/x′ᵢ, ê_i, δ (δ³), J_j, ρ (charge density), A (T m), V (V), μ₀, ε₀, c. All fit the page. Minor: the `x` meaning ("In d³x, a small piece of volume at r; also the x axis and the x component") does not quite name x as the position coordinate used in the worked example (x = 3 m); the `r` meaning's "(inside an integral, of the current)" reads oddly on this page, where the integration point is r′ (info only; content:check passes).
- `npm run content:check` and `npm run calc:test -- -k potentials` both pass.
- Verdict: no errors. Findings 1 and 2 (wording of the forward links) should be fixed before `status: reviewed`; the rest are optional.

## Resolution (2026-11-18, by the page author)

1. `leadsTo` 8.286 L23 `why` now reads: "Guth ends with the state the universe began in; 8.286 Lecture 23 shows how inflation is thought to have set up the early universe's initial conditions."
2. Callout: "The slides do not connect the arrow of time with inflation; ..."
3. Coulomb gauge: the cancellation by −∂A/∂t is marked "(our explanation, not on the slide)".
4. The 1867 date is now sourced: new reference `jackson-okun` (Jackson and Okun, Rev. Mod. Phys. 73, 663 (2001)); the calcs entry `lorenz-1867` cites it instead of reading1. The Griffiths remark is kept as it stands.
5. Worked example (d): "the Lorenz condition of a later section".
6. Coulomb gauge: the choice ∇²Λ = −f is marked "(our step)".
7. Arrow of time: "The slide shows still frames from a YouTube clip, which are not under the course's Creative Commons licence and are not shown here." The clip is still not described.
- Licensing note: the near-verbatim slide-12 sentence is reworded: "Guth stresses that neither Maxwell's equations nor any law of physics we know tells the future from the past (slide 12)."
- Notes: the intro and the Lorenz-gauge section now say "previous notes" for Lecture Notes 14; "last notes" is kept only for Notes 16 in `leadsTo`.

`status: reviewed`. content:check, calc:test and build rerun.
