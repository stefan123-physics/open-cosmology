---
page: content/year-4/8.286/age-with-vacuum-energy.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/b891ffb6658f5fbd1f93b3183315ac26_U_Ot1PTuUv4.pdf (read; Lecture 19 transcript, pp. 1–14 in full, pp. 18–19 for the end of the lecture)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec19/ (read; slides 1–8, text and rendered images of slides 4–8)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-20-supernovae-ia-and-vacuum-energy-density/ and its transcript PDF (read, only to check the leadsTo claim)
verdict: pass-with-notes
---

# Review: The age of the universe with vacuum energy

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | Slip note after "The age integral" | p. 9: Planck "told you that the age of the universe was 13.9 billion years"; p. 11: "an age of 13.7, 13.8 billion years" | "...the 2013 Planck value was 13.8 billion years, which is also the figure he gives a few minutes later" | Correct as it stands (Planck 2013: 13.798 ± 0.037 Gyr). For accuracy you could write "close to the 13.7–13.8 he gives a few minutes later". |
| 2 | info | "The age problem disappears", para. 2 | p. 11: Guth says he did not get to plot the Planck point and will add it before posting. The posted slide 8 shows only the "RB" and "WMAP7" points | "Guth adds that the Planck point ... lies there too" | Fine, because the page reports what he said, not what is on the slide. You could add "(he says so in the lecture; the posted slide 8 shows only the Ryden and WMAP7 points)" so readers don't look for it on the slide. |
| 3 | info | Formula "Age at an earlier time (Ω_m,0 < 1)" | Not in the lecture. Guth only says on p. 9 that the integral can be taken up to any x | Cited to "pp. 8–9 (board), integrated to x < 1", and the text says plainly that it is not in the lecture | Acceptable and honestly labelled. I checked the formula: it is correct, and at x = 1 it reduces to the tanh⁻¹ form. |
| 4 | info | Flat-case formula, Ω_m,0 > 1 case | p. 9 slip: "that corresponds to omega vac less than 1 ... So omega vac has to be less than 0" (Guth corrects himself straight away) | Ω_vac,0 < 0 | Right. The page does not need a bracketed note because Guth fixes the slip himself. |
| 5 | info | Opening paragraph | Eddington's remark, given straight (p. 1) | "Arthur Eddington's ironic advice" | "Ironic" is the author's description, not Guth's. Harmless. |

I found no errors. All formula citations are correct:
- Slide 5: gravitational effect of pressure; u_vac, ρ̇_vac = 0 ⇒ p_vac.
- Slide 6: the ρ_n/p_n split, both Friedmann equations, H_vac and a ∝ e^{H_vac t}.
- Board:
  - First Friedmann equation with ρ_m + ρ_rad + ρ_vac, p. 4
  - Density scalings, pp. 4–5
  - ρ_c and Ω_x, p. 5
  - Ω_k,0 and x, p. 6
  - F(x), pp. 6–8, with x² in the denominator on p. 6 corrected to x⁴ on p. 8. The bracketed slip note is accurate.
  - Sum rule, p. 7
  - Separation of variables, p. 8
  - Age integral and its limits, pp. 8–9
  - The three-case flat formula, pp. 9–10

The page's form of the Ω_m > 1 case, tan⁻¹√(Ω_m−1)/√(Ω_m−1), is what Guth's garbled p. 9 wording means. I checked it independently: it equals (2/3)arcsin(√(|Ω_v|/Ω_m))/√|Ω_v|.

## Arithmetic and answer checks
I recomputed everything with a Python script (midpoint rule with the substitution x = u²):
- 1/H₀ conversion: 977.80 Gyr·(km/s/Mpc). The page's 977.8 is correct.
- Worked example, step 1: 977.8/68 = 14.38 Gyr. Two thirds of that is 9.59 Gyr. Correct.
- (a):
  - √0.69 = 0.8307 and tanh⁻¹(0.8307) = 1.1903.
  - H₀t₀ = 0.9553, so t₀ = 13.736 Gyr. The page's 13.74 is correct.
  - A direct numerical integral gives the same 13.7363.
- (b): With Ω_m = 0.30991, Ω_rad = 9.0e-5, Ω_vac = 0.69 and Ω_k = 0, the integral gives t₀ = 13.7320 Gyr, which is 4.4 Myr less. The page's "13.732, about 4 million years less" is correct.
- (c):
  - √(0.69/0.31) = 1.4919 and 0.5^{3/2} = 0.35355; their product is 0.52747.
  - sinh⁻¹(0.52747) = 0.50565.
  - t = (2/3)(14.38)(0.50565)/0.8307 = 5.835 Gyr. The numerical integral to x = 0.5 gives the same.
  - 13.74 − 5.84 = 7.9 Gyr lookback. Correct.
- Plot caption:
  - Ω_m = 0.31, H₀ = 68: the solid curve gives 13.74 Gyr and the dashed open matter-only curve gives 11.58 Gyr. The caption's "13.7" and "11.6" are correct.
  - Both curves equal (2/3)/H₀ at Ω_m = 1. They really do cross there: solid > dashed for Ω_m < 1 (e.g. 0.5: 11.95 vs 10.84) and solid < dashed for Ω_m > 1 (e.g. 1.5: 8.34 vs 8.79). "Cross" is correct.
  - The open and closed matter-only formulas in the dashed `expr` are the standard ones and are continuous through Ω = 1. The 0.99–1.01 plateau differs from the exact values by < 0.012 Gyr.
  - At Ω_m = 0.05 the solid curve is 21.4 Gyr, so it stays inside the y-range of 25.
- Quiz Q1–Q3 and Q5: the marked answers are correct and the explanations agree with transcript pp. 2, 7, 8 and 11–12.
- Quiz Q4: the marked answer (13.7) is correct. The distractors are right too: 9.59 Gyr (flat matter only) and 11.58 Gyr (open matter only, Ω = 0.31). The explanation's numbers (0.955, 14.38) are correct.
- Flashcards: all formulas are correct.
- Later-developments callout:
  - The flat formula with Ω_m = 0.315 and H₀ = 67.4 gives 13.796 Gyr. With 0.3153 and 67.36 it gives 13.801 Gyr. The page's "13.80" is correct.
  - Planck 2018's published age of 13.787 ± 0.020 Gyr is correctly rounded to 13.79 ± 0.02. Its Ω_m ≈ 0.315 and H₀ ≈ 67.4 are also correct.
- "factor of roughly two and a half" (dark energy vs dark matter) is Guth's own figure (p. 12). For 0.69/0.31 the ratio is 2.2. Fine as attributed.
- The matter-only ages from slide 7 are 12.5–13.1 Gyr at Ω = 0.1 and 9.3–9.7 Gyr at Ω = 1 for H₀ = 67–70. The page's "of order 10 billion years ... about 9 billion if Ω = 1" matches Guth (pp. 10–11).

## Coverage and order
- The page follows the lecture order for transcript pp. 1–13:
  1. Review of slides 1–4 (CMB 1975, Berkeley–Nagoya 1987, Eddington, COBE 1990)
  2. Slides 5–6 (pressure, vacuum energy, late-time dominance)
  3. Q&A on eternal expansion and false-vacuum "Swiss cheese"
  4. The age calculation (pp. 4–10)
  5. Slides 7–8 (pp. 10–11)
  6. The dark energy vs vacuum energy Q&A (pp. 11–13)
- The worked example sits between the slides 7–8 discussion and the Q&A. It is the author's own material, so this does not break MIT's order.
- Small omissions, all acceptable:
  - Guth's plan of "as many as three calculations" (p. 4)
  - His remark about Mathematica (p. 10)
  - A student's follow-up asking whether dark matter's attraction is "a form of energy" (p. 12). Guth defers it, so it carries no content.
- Nothing is added that contradicts the lecture. The added material (the t(x) formula, the worked example, the later-developments callout) is clearly marked as the page's own.
- The second half of the lecture (pp. 13–19, luminosity vs redshift) is correctly left to the separate page.

## Licensing
- `grep -il "rights reserved\|courtesy"` on the slide and transcript text finds nothing. The slides carry only the standard OCW footer.
- The page reproduces no MIT figures. COBE, Berkeley–Nagoya and the slide 7/8 age graphs are described, not copied. The only graph is a `<Plot>` generated from formulas.
- No OpenStax or LibreTexts material.
- I found no verbatim copying beyond short phrases. These include "state of the art formula", "Swiss cheese", "totally clueless", "very slowly evolving scalar field" and "phenomenology", which are used as short quotations or standard terminology. The prose is rewritten.
- The worked example is original: own numbers, not in the lecture.

## Notes
- Bracketed slip notes:
  - x² → x⁴ on p. 8: verified on transcript pp. 6 and 8.
  - 13.9 vs 13.8 Gyr: verified on pp. 9 and 11; the 2013 Planck value of 13.798 Gyr is correct.
  - Both notes are accurate and brief, as AGENTS.md rule 4 requires.
- Cosmology callout ("Where this leads"): verified against transcript pp. 13 and 18–19. The second calculation of Lecture 19 is luminosity vs redshift. Guth writes the integrand as "our old friend F of x" in terms of z, and says the 1998 supernova teams used "exactly this formula". The callout is correct and fairly attributed.
- leadsTo Lecture 20: verified. The OCW page lists "vacuum energy density" as a topic, and the Lecture 20 transcript says the estimate is "off by about 120 orders of magnitude" (transcript text lines ~780 and ~952). The "why" text is accurate.
- leadsTo Lecture 23: Guth says on p. 12 that the alternative to vacuum energy is a scalar field "of the same type that drives inflation that we'll be talking about later". The link is therefore justified. I did not read the Lecture 23 transcript, so whether L23 itself is where the scalar field is first introduced (rather than the Higgs-field lecture, L22) is **uncertain**.
- Later-developments callout:
  - It is clearly marked as post-2013.
  - The Planck 2018 numbers are correct (see above).
  - SH0ES ≈ 73 km/s/Mpc is correct.
  - DESI's evolving-dark-energy hint (DR1, April 2024; strengthened in DR2, 2025, in combination with CMB and SNe) is fairly described as unconfirmed.
- Prerequisites `cosmological-constant`, `open-universe` and `matter-radiation-equality` all exist. "Lectures 9 and 10" for the closed and open matter-only ages matches `age-closed-universe` (L9) and `open-universe` (L10).
- Status `draft` is correct until the author appends a Resolution section.

## Resolution (2026-11-14, by the page author)

- No errors or warnings to fix.
- Info 1: the Planck slip note now says the corrected value is close to the "13.7, 13.8" Guth gives later.
- Info 2: the page notes that the Planck point is not yet on the posted slide 8.
- Info 5: "ironic" removed from the description of Eddington's remark.
- Info 3 and 4: no change needed.

## Correction (2026-11-15, found by the calculation tests)

In the worked example, step "(c) Age at z = 1", √(Ω_vac/Ω_m)·x^(3/2) = √(0.69/0.31) × 0.5^(3/2) = 0.52747 was printed as 0.5274; it rounds to 0.5275 (and 1.492 × 0.3536 = 0.5276). Both occurrences now say 0.5275. The next results (sinh⁻¹ = 0.5056, t = 5.84 billion years) were already right.
