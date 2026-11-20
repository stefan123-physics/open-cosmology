---
page: content/year-5/8.902/cmb-cosmological-parameters.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec18.pdf (read; local copy, pp. 103–105 rendered as images, plus the OCW end page)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec17.pdf (not re-read for this review; per the cmb-anisotropies review its p. 103 is the same page the Lecture 18 notes repeat)
  - https://arxiv.org/abs/1907.12875 (not opened; Fig. 57 number, caption and peak heights checked from the reproduction in the Lecture 18 notes, p. 104)
  - Planck 2018 VI (A&A 641, A6) parameter values: from memory only, not opened (marked uncertain below)
verdict: pass-with-notes
---

# Review: Reading the universe from the CMB peaks

Section 1.C of the notes (pp. 103–105) has no numbered equations; every check below is of prose claims, the page's own additions and numbers.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Callout "What Planck measured", last sentence | Notes: nothing on parameter values. Planck 2018 VI (from memory, uncertain on the exact digits): CMB alone (TT,TE,EE+lowE+lensing) gives Ω_k ≈ −0.011 ± 0.013; only with BAO added does it tighten to 0.0007 ± 0.0019. Ω_b and Ω_m come from TT+TE+EE+lensing, not only the TT spectrum in Fig. 57. | "Fitting the whole spectrum gives a universe that is flat to within a fraction of a percent, with about 5% … in baryons and about 31% in all matter." | Say "Fitting the CMB spectra (together with other data, for the curvature) gives…" or "flat to within about a percent from the CMB alone, a fraction of a percent with galaxy surveys (BAO)". Add Planck 2018 VI to `references` (the calcs file already cites it but the page does not). |
| 2 | warning | Callout, "roughly the ratio used in the quiz", with quiz 4 | — | Planck's ~2.3 peak ratio is linked to the toy model's (1 + 2R)², which then gives R ≈ 0.26. | The real value at recombination is R = 3ρ_b/4ρ_γ ≈ 0.62 (Ω_b h² = 0.0224, z ≈ 1090); the toy (unit amplitude, no driving or damping) underestimates it by more than a factor 2. Either drop "roughly the ratio used in the quiz" or add a sentence that the toy's R is not the real R (the quiz explanation's "effects this toy leaves out" is not enough once the callout ties the two together). |
| 3 | info | "The curvature from the position…", end of bracket | Notes say only that the first-peak position constrains Ω_k. | "The observed first peak sits where a flat universe puts it, and this is the measurement that established that the universe is close to flat." | Correct history (BOOMERanG/MAXIMA, 2000), but not from the notes; mark it as the page's own remark, e.g. inside the brackets. |
| 4 | info | Same section, open bullet | Notes: "angular size of the sound horizon will appear smaller" in an open universe (with the open/flat/closed ray sketch). | "light rays from the two ends of the ruler diverge as they travel, so the ruler appears smaller". | Physics right; the wording is loose (traced back from us, rays that leave at a given angle diverge faster than in flat space, so they meet the ruler's ends at a wider separation). Optional rewording. |
| 5 | info | "The matter density…", second paragraph | Notes: "For larger Ω_m, the universe is younger for a given redshift"; figure a(t) for Ω₁ > Ω₂, t₁ < t₂ (p. 105). | "decelerates more strongly, so it reaches any given redshift … sooner". | Correct given fixed H₀ (the page's worked example states it). Could say "with the same expansion rate today" in the prose too. |
| 6 | info | Body, matter section and summary | Notes give only the timing argument and state it as fact. | Page attributes it ("according to the notes") and adds, in brackets, the standard radiation-driving / matter–radiation-equality explanation. | Good: the addition is marked and correct (more Ω_m h² → earlier equality → weaker driving by decaying potentials → lower first peak). No change. |
| 7 | info | Sum-rule paragraph | "based on the first peak, we get Ω_m and Ω_k, so also Ω_Λ (assuming flat universe)!" (p. 105). | Ω_Λ = 1 − Ω_m − Ω_k (radiation neglected), with a bracket explaining the notes' "assuming flat universe". | Correct with Ω_k ≡ 1 − Ω_total (the usual sign). Optionally state that convention once, since 8.286 pages work with Ω_total. |
| 8 | info | Baryon section, even peaks | Notes: odd peaks = compression, enhanced; "the second peak is compressed compared to the first" (p. 105). | Adds "The even-numbered peaks come from rarefaction, which is not enhanced." | Follows from the notes' "rebounds to the same position"; fine. |
| 9 | info | Toy model paragraph and Plot | Not in the notes. | Marked "not in the notes". | Correctly marked. No change. |
| 10 | info | Callout placement | Planck Fig. 57 sits on p. 104, between the Ω_m bullet and its a(t) figure. | Callout at the end of the page. | Fine; order of the argument is kept. |

## Arithmetic and answer checks
- Worked example "Moving the first peak": 1/0.9 = 1.111 → "1.11"; 0.9 × 220 = 198. Correct. Larger apparent ruler → smaller ℓ → closed. Correct.
- Worked example "How much younger?": t = 2/(3H) with H = H₀√Ω_m (1+z)^{3/2} for matter domination at high z; correct. √2 = 1.414; 1/√2 = 0.707; 1 − 0.707 = 29.3% → "about 29% earlier". Correct. The caveat about radiation near recombination is right.
- Toy model: at cos = −1, −(1+R) − R = −(1+2R), squared (1+2R)²; at cos = +1, (1+R) − R = 1. Correct. R = 0 gives equal peaks (before damping). Correct.
- Plot (recomputed numerically, ℓ₁ = 220): R = 0 maxima at ℓ ≈ 222, 439, 658, 877 … heights 2.43, 2.31, 2.11, 1.88; R = 0.3: 4.66, 2.31, 3.84, 1.88; R = 0.8: 10.66, 2.31, 8.50, 1.88. So the even peaks are unchanged and the odd ones rise, exactly as the caption says. Largest value (R = 0.8) 10.66 < range top 12. Same S(ℓ) and damping factor as the cmb-anisotropies plot (amplitude 1.5 instead of 6, which the caption does not claim to match). Correct.
- Callout: Fig. 57 (notes p. 104) shows the first peak at ℓ ≈ 220 near 5800 μK² ("almost 6000" fine), second and third near 2500–2600 μK² ("about 2500" fine). 5800/2500 = 2.32, 5800/2600 = 2.23: "roughly" 2.3. Composition: Ω_b h² = 0.0224, h = 0.674 → Ω_b = 0.049 ("about 5%"); Ω_m = 0.315 ("about 31%"; 31.5% would round to 32%, acceptable with "about"). Values from memory of Planck 2018 VI, uncertain on the last digit.
- Quiz 1: answer B (larger ℓ) correct; explanation right.
- Quiz 2: answer B correct; t ∝ Ω_m^{-1/2} right.
- Quiz 3: answer B correct (degeneracy, ratio of first two peaks), matches p. 105.
- Quiz 4: √2.3 = 1.5166 → "1.52"; R = 0.258 → "about 0.26". Answer B correct. Distractor 0.65 is (2.3 − 1)/2 (forgot the root), a sensible trap.
- Flashcards: all three correct and consistent with pp. 103–105.
- `calcs/8.902/cmb-cosmological-parameters.yaml` (read at the start of this review): every entry matches the page text (1.11, 198, 1.41, 0.71, 29, 0.26, 1.52, Planck facts, 5800/2500 = 2.32 within tolerance 0.15). Citations to p. 103 (curvature) and p. 105 (a(t) figure, baryons) are right. Planck composition entry cites Planck 2018 VI, which the page's `references` lacks (see #1). **Not run:** by the end of the review the page and its calcs file were no longer in the working tree (git status showed only the cmb-anisotropies files), so `pytest tests/calc` did not collect them. All its values were recomputed by hand above.
- 13.8 billion years is the site's standard age (calcs/values.yaml).

## Coverage and order
- Section 1.C is covered completely and in the notes' order: the three-arrow sketch (p. 103), Ω_k from the first-peak position with the open/closed geometry (p. 103), Ω_m from the first-peak height and the timing argument with the a(t) figure (pp. 103–105), the Ω_Λ note (p. 105), Ω_b from the second peak, its degeneracy with Ω_m and BBN (p. 105), baryon loading with the spring picture (p. 105), the Planck figure (p. 104, as a callout).
- The p. 103 sketch of the full spectrum (end of 1.B) belongs to the previous page and is correctly not repeated.
- Additions (all correct physics, all marked except #3): triangle-angle link to 8.286, θ ∼ 180°/ℓ scaling, both worked examples, the matter–radiation-equality remark, the sum rule, R = 3ρ_b/4ρ_γ and the toy model, the Planck numbers.

## Licensing
- No "All rights reserved" or "Courtesy of" notices on pp. 103–105 or the end page of the Lecture 18 notes.
- No drawing reused: the sketches (three arrows, ray diagram, a(t), springs) are described in words; the plot is generated from a stated formula. Planck Fig. 57 (CC BY per the notes' credit) is only described and credited in `references`.
- Text is rewritten. Closest phrasings (short, acceptable): "more matter means more gravity … bigger peaks" (notes: "more matter means more gravity and so bigger peaks"), "less time to form structures", "falls deeper … rebounds only to the same position". No OpenStax or LibreTexts material.

## Notes
- `leadsTo`: Lecture 19 is "Thermal History of Dark Matter" and Lecture 20 "Big Bang Nucleosynthesis" in `_course.json`; the Lecture 18 notes p. 105 start section 2 (thermal history, freeze-out) and say Ω_b "can also be derived from Big Bang nucleosynthesis". Both claims are fair. The Lecture 19 and 20 notes themselves were not read for this review.
- The cmb-anisotropies page's plot caption should now point to this page for the odd/even peak heights (its review finding #1).
- Uncertain: the exact Planck 2018 VI numbers in #1 and the arithmetic checks are from memory, not from the paper.

## Resolution (2026-11-17, by the page author)

The reviewer could not run the calc tests because the page and its calcs file were moved out of the working tree for a few minutes while the Lecture 17 page was committed on its own; they are back, and `npm run calc:test -k cmb-cosmological` passes (13 checks).

1. Warning (flatness overstated): the callout now says the temperature, polarization and lensing data together (Planck 2018 VI, added to `references`) give about 5% baryons and 31% matter and a universe close to flat, and that with BAO the curvature is below a few tenths of a percent.
2. Warning (toy R tied to Planck's ratio): the callout and the quiz explanation now say the toy would need R ≈ 0.26 while the real loading at recombination is about 0.6 (checked: 3ρ_b/4ρ_γ ≈ 0.62 at z ≈ 1090), because the toy leaves out driving and damping. Added as a calcs fact.
3. The "established flatness" remark is now marked as not in the notes (balloon experiments around 2000, then WMAP).
4. "Light rays diverge" removed; the Ω_k sign convention is stated; "for the same Hubble constant today" added to the timing argument.
5. The cmb-anisotropies caption already points to this page.

Status set to `reviewed`.
