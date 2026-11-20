---
page: content/year-4/8.286/open-closed-flat.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-7-the-dynamics-of-homogeneous-expansion-part-iii/ (read via a local copy of the Lecture 7 transcript, t07.txt, video ID m00PjHTq6jU, which matches the `readings[0]` PDF filename. The relevant second half, from the sign-of-E classification to the end, was read in full. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/a8d35e02dbabc99e6a5fb7af82012b61_m00PjHTq6jU.pdf (same transcript, read via the local copy t07.txt. The URL was not fetched, so I could not confirm that the link resolves.)
  - Lecture 8 transcript (local t08.txt, video ID OtJFD9HNnoc) and Lecture 9 transcript (local t09.txt, video ID U9n-Y_ZC-2M), plus slide text l08.txt and l09.txt. I searched these and read the relevant parts to check the forward claims.
  - A third-party notes file for Lecture 7 (notes-L7.md). Every point used here was checked against t07.txt.
verdict: pass-with-notes
---

# Review: Open, closed and flat universes

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Frontmatter `leadsTo` (Lecture 8: "The full solutions a(t) for closed and open universes, and the age of the universe.") | Lecture 8 derives the age of a flat universe, t = (2/3)H⁻¹ (9.7 ± 0.2 Gyr), and discusses the problem that some stars are older. In its last minutes it only sets up the closed-universe equation (ã, t̃ and the integral). Guth says he will finish "next Tuesday after the quiz". The parametric closed solution, θ − sin θ and 1 − cos θ, is completed in Lecture 9. Lecture 9 does not solve the open case (I found no open-universe derivation in t09.txt). | Says Lecture 8 gives the full closed and open solutions. | For example: "The age of a flat universe and the problem that stars look older (Lecture 8). The closed-universe solution begins here and is finished in Lecture 9." Or point `leadsTo` at Lectures 8 and 9. |
| 2 | info | Worked example "The age of a flat matter-only universe" and the last Summary bullet | t = 2/(3H), the 97.8 km/s/Mpc ↔ (10¹⁰ yr)⁻¹ conversion, the 9.7 Gyr result and the point that the oldest stars are older (Krauss & Chaboyer, at least 11.2 Gyr) are all **Lecture 8** material. Lecture 7 stops at a ∝ t^(2/3). | Presented on the Lecture 7 page. The final step says "Later lectures come back to this", which is correct. | Add "(Lecture 8)" to the example title or the last step. The example follows L8's route closely: same formula, same conversion constant, same 9.7 answer. It uses H0 = 67.4 instead of Guth's 67.3, and the wording is the page's own. That is acceptable for standard textbook steps, but the attribution should be there. |
| 3 | info | Same example, "A problem" step: quotation marks around "age problem" | Guth describes the tension between a flat universe and the stellar ages (L8, and recapped at the start of L9). He does not use the phrase "age problem" in either transcript. | Puts "age problem" in quotes as if it were a term from the lectures. | Drop the quotes, or say it is the usual name in the literature. The physics claim is correct. In L9 Guth calls this age calculation "one of the pieces of evidence" for dark energy, which supports "one of the clues". |
| 4 | info | "Our universe", eras: "until a few billion years ago, when dark energy took over" | "up to about 9 billion years after the Big Bang" | "a few billion years ago" | This is consistent: 13.8 − 9 ≈ 5 Gyr ago. You could quote Guth's "about 9 billion years after the Big Bang" directly. The 50,000-year start matches the transcript. |
| 5 | info | Second Plot ("no gravity: a ∝ t", dashed) | Not in MIT. The plot is original. | Both curves are normalised to a = 1 at t = 1, so they describe two universes of the **same age** but with different H0 today: the slopes at t = 1 are 2/3 and 1. | The caption's qualitative point is right. A comparison at the same H0 is more common and probably clearer: make the dashed line tangent at today, a = 1 + (2/3)(t − 1). Otherwise say in the caption that both curves have the same age. |
| 6 | info | First Plot | Not in MIT. The plot is original. | Beyond a = 5 the closed curve is drawn below zero, which is unphysical because ȧ² < 0. | The caption already says the universe turns around at a_max = 5. You could clip the closed curve at a = 5. |
| 7 | info | Coverage: Lecture 7 Q&A not used | Guth answers three student questions here. (a) Could unseen mass such as black holes spoil the picture? He says the model passes tests from light-element production and the CMB. (b) Is "5 protons" baryons only? No, it is the total density, and the proton is just a "meter stick". (c) How is dark energy measured? Through its repulsive gravity and its constant energy density, which requires pressure equal to minus the energy density. | Answer (b) is implied, because the page says the total density is near critical, but it is not stated. | Optional: add one sentence saying the "5 protons" figure measures total mass, not just baryons. |

## Arithmetic and answer checks
- ȧ² = 2E + (8π/3)Gρ_i/a: matches L7-6 (t07.txt, around line 880). E = −kc²/2 is equivalent to Guth's k ≡ −2E/c².
- Three-case classification: matches the transcript. For E > 0 (k < 0), ȧ² ≥ 2E, so there is a minimum expansion rate and the universe is open. For E < 0 (k > 0), the system is bound, reaches a maximum size, recollapses to a = 0 (the "Big Crunch") and is closed. E = 0 (k = 0) is the critical/flat borderline. The statement that the names describe time evolution for now, and that "flat" will be motivated later, matches Guth.
- a_max = −4πGρ_i/(3E): setting 2E + (8π/3)Gρ_i/a = 0 gives a = −(8π/3)Gρ_i/(2E) = −4πGρ_i/(3E). Correct, and it matches Guth.
- ρ_c = 3H²/(8πG): obtained by setting k = 0, matching L7-8 and L7-9. Recomputed: 3(100 km/s/Mpc)²/(8πG) = 1.878 × 10⁻²⁹ g/cm³, so 1.88 h0² × 10⁻²⁹ is correct.
- h0 = 0.67: 1.88 × 0.4489 = 0.844, so 8.4 × 10⁻³⁰ g/cm³. Correct, and Guth gives the same.
- 8.43 × 10⁻²⁴ g/m³ ÷ 1.673 × 10⁻²⁴ g ≈ 5.0 protons/m³. Correct. "about 10⁻²⁹ times water" and "a far better vacuum than anything made in a laboratory" are fair paraphrases of Guth.
- Ω ≡ ρ/ρ_c, with Ω > 1 closed, Ω = 1 flat and Ω < 1 open: matches the transcript. The flashcard's "(matter only)" qualifier is correct.
- 2013 budget: Ω_total = 1 to about ±0.5%, Ω_matter (visible plus dark) ≈ 0.3, Ω_DE ≈ 0.70, dark energy discovered in 1998, inflation advocates expecting Ω = 1 and observers finding 0.2–0.3, "both partly right". All match the transcript (around lines 1140–1194).
- Flat solution: ȧ² = const/a, then a^(1/2) da = const dt, then (2/3)a^(3/2) = const·t + c′. With t = 0 at a = 0, c′ = 0 and a ∝ t^(2/3). This matches L7-13 to L7-16, including the remark that the origin of time is arbitrary.
- Worked example 1: with a_i = 1, E = ½H_i² − (4π/3)Gρ_i. Since (4π/3)Gρ_c = ½H², E = ½H_i²(1 − Ω_i). Then a_max = (½H_i²Ω_i)/(½H_i²(Ω_i − 1)) = Ω_i/(Ω_i − 1). Ω_i = 2 gives 2, and Ω_i = 1.01 gives 1.01/0.01 = 101. All correct. The example is original, since Lecture 7 has no such example.
- Worked example 2: H = (2/3)t^(−1/3)/t^(2/3) = 2/(3t), so t0 = 2/(3H0). 1/H0 = (97.8/67.4) × 10¹⁰ yr = 14.51 Gyr, and t0 = 9.67 ≈ 9.7 Gyr. Correct. Guth (L8) gets 9.7 ± 0.2 Gyr with H0 = 67.3. "Some stars are older" is supported: Guth cites Krauss & Chaboyer, with oldest stars at 10.4 Gyr (95% lower limit) plus 0.8 Gyr before star formation, giving at least 11.2 Gyr.
- First plot: in units where 8πGρ_i/3 = 1, ȧ² = 2E + 1/a. For the closed curve, 2E = −0.2, so ȧ² = 0 at a = 5. Cross-check with the formula: 4πGρ_i/3 = ½ and E = −0.1, so a_max = 0.5/0.1 = 5. The caption is correct. For the open curve, 2E = 0.3, and its asymptote of 0.3 shows the minimum rate. The flat curve tends to 0 only as a → ∞. Correct.
- Second plot: t^(2/3) against t, both equal to 1 at t = 1. The curves are correct; see note 5 about the normalisation.
- Quiz 1 (answer 1, "expands to a maximum size, then recollapses"): correct.
- Quiz 2 (answer 1, 3H²/(8πG)): correct.
- Quiz 3 (answer 1, "open"): correct for pressureless matter.
- Quiz 4 (answer 2, t^(2/3)): correct, and the explanation is correct.
- Quiz 5 (answer 0, "about 5 protons per cubic metre"): correct.
- Flashcards: all four are correct.

## Coverage and order
- The page covers the second half of Lecture 7 in Guth's order: sign-of-E classification, a_max and the Big Crunch, critical density, numbers, Ω and the 2013 budget, then the flat solution. The first half of Lecture 7 (Friedmann equation, k, notch units, why Newton matches GR) is presumably on the companion page `friedmann-equation`, which is order 1 and was not reviewed here.
- Omitted from Lecture 7: Guth's remark that the k = ±1 rescaling makes the three cases look more distinct than they are, and that E = 0 is arbitrarily close to both other cases. The page does call the flat case "the borderline", so this is minor. The three Q&A items listed in table row 7 are also omitted.
- Added beyond Lecture 7: both worked examples, both plots, and the age example (which is Lecture 8 material; see row 2).

## Licensing
- The transcripts carry the standard OCW Creative Commons header. In the Lecture 7 material I found no "All rights reserved" or "Courtesy of" notices, and the notes file reports the same for the slides. The page licence, CC BY-NC-SA 4.0, is compatible.
- No figures or slide images are reused. Both plots are computed and original.
- I found no verbatim copying. The wording paraphrases Guth: for example, "a far better vacuum than anything made in a laboratory" for his "vastly better vacuum than can be made on Earth".
- No OpenStax or LibreTexts material.

## Notes
- The page correctly avoids the transcript garbles ("8.410", "5 protons per cubic medium") and gives 8.4 × 10⁻³⁰ g/cm³ and 5 protons/m³.
- The h0 = 0.67 and H0 = 67.4 values are 2013-era and 2018-era Planck values respectively. Both are fine. You could use one value throughout for consistency (Guth uses 67.3, i.e. h0 ≈ 0.67).
- There are no `Callout kind="cosmology"` blocks on this page.
- Not verified: that the two OCW URLs in the frontmatter resolve. They were not fetched, but the transcript video ID matches the PDF filename.

## Resolution (2026-11-14, by the page author)
- `leadsTo` for Lecture 8 now says: age of a flat universe, stars that seem older, start of the closed solution.
- Age example introduced as Lecture 8 material; "age problem" quotes removed.
- t^(2/3) plot now compares universes with the same H0 today (time in units of 1/H0), marking each "today".
- Closed curve in the first plot is no longer drawn below zero.
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
