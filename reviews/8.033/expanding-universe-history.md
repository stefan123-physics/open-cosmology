---
page: content/year-2/8.033/expanding-universe-history.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture18_cosmo2/ (read: slide deck "MIT Course 8.033, Fall 2006, Lecture 18", 13 slides, from the local PDF and its text, with every slide rendered as an image; slide 11 checked at high resolution around the first-stars label; slides 6 and 9 compared and found to be the same embedded image)
  - Previous deck lecture17_cosmo1 (local PDF s17.pdf), slide 8 only, to check the page's claim about the earlier parameter values (read)
  - No transcript exists for this lecture (slides only).
verdict: needs-changes
---

# Review: The expanding universe and its brief history

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "A brief history of our universe", first-stars sentence; also `calcs/8.033/expanding-universe-history.yaml`, id `history-times` | Slide 11 (checked at 250 dpi): the NASA/WMAP graphic's printed "~200 million years" is struck through with a yellow line. Above it, "400" is handwritten in yellow. So Tegmark corrects 200 to **400** million years. | "the slide shows 400 crossed out and replaced by about 200 million years". The calcs fact has "about 200 (400 crossed out) million years". | Reverse it, e.g. "the slide's '~200 million years' is crossed out and corrected to 400 million years". Fix the calcs `value` in the same way. The other mentions of "a few hundred million years" (quiz 3 explanation, flashcard 3, Summary) stay correct. |
| 2 | warning | "The Friedmann equation and the age", bracket "(a year earlier the slides had 0.05, 0.25, 0.7 and 0.3)" | This deck has no 2005 values. They appear in the previous lecture's deck (lecture17_cosmo1, slide 8), headed "Cosmological parameter measurements (2005)", with h ≈ 0.70. The page's Lecture 18 (`frw-metric-expansion`) quotes them from there. | "a year earlier the slides had…". This reads as if the 2005 course's slides were meant, and it cites nothing. | Write e.g. "(the [previous lecture's](/courses/8-033/frw-metric-expansion) slide 8 listed the 2005 measurements: 0.05, 0.25, 0.7 and 0.3)". |
| 3 | warning | Question 2 in the list of thirteen | Slide 8, Q2: "…when the Universe is only 14 billion **light years** old?" (a slip: an age in light years) | "…only about 14 billion years old?". It is corrected without saying so. | Rule 4: add a short bracket, e.g. "(the slide says 'light years old')". |
| 4 | warning | "A brief history", "Gravity is the fluctuation amplifier" and "Inflation … makes the universe hot, dense and smooth" | Slide 11 labels inflation "Fluctuation generator". It puts the label "Fluctuation amplifier" on a bracket from the CMB to the present and does not name gravity. A two-headed arrow runs "Hot Dense Smooth" ↔ "Cool Rarefied Clumpy" as the overall trend from early to late times. The slide does not say inflation makes the universe hot. | Presents "gravity" as the amplifier and inflation as making the universe hot, dense and smooth, in a paragraph introduced as "Slide 11 summarizes…" | The physics is fine: gravity does amplify the fluctuations, and inflation's reheating does give a hot, dense, smooth start. Mark these as the page's reading, e.g. "(the slide's 'fluctuation amplifier' is gravity)", and describe the hot→cool arrow as the trend over time. |
| 5 | warning | "Two key facts" and the example's Hubble time | Slide 3: "h ≡ H₀/(100 km s⁻¹ Mpc⁻¹) ≈ H₀ × 9.7846 Gyr". The constant is slightly off: 1/(100 km/s/Mpc) = 9.778 Gyr. | Uses 9.778 (correct) with no mention of the slide's 9.7846. The calcs file cites slide 6 for the Hubble time. | Optionally add "(slide 3 gives 9.7846 Gyr; the accurate conversion is 9.778)". In calcs, cite slide 3 rather than slide 6 for `ex-hubble-time` / `ex-matter-age`. The 0.07% difference does not change any rounded number. |
| 6 | info | Question 7 | Slide 8, Q7: "If the Universe is only 10 billion years old, how can we see objects that are now 30 billion light years away?" | Drops "10 billion years old". | Optional: keep the numbers. In a flat matter-only universe the horizon is 3ct, so 10 billion years gives exactly 30 billion light years. That makes a nice link to the 8.286 horizon-distance page. |
| 7 | info | "What expansion means" | Slides 7 and 8 also carry "(Bunjee cord)" and a yellow dot (apparently a bungee-cord demonstration in class). | Not mentioned. | Optional one-line mention ("a bungee cord demonstration, not recorded on OCW"). It is uncertain what the demo showed. |
| 8 | info | Opening paragraph, Hubble | Slide 1: "Edwin Hubble 1889-1953 (American; 1930 paper)" | Keeps the slide's dates and correctly notes that the velocity–distance paper is from 1929 (PNAS 15, 168, 1929). | Correct. No change. |
| 9 | info | Opening, "Two slides were short films, which are not on OCW" | Slides 12 and 13: "Formation movies" and "SDSS movie" (titles only) | Calls them films of structure formation and of the SDSS | Matches the slide titles. I did not verify the claim that OCW does not host the films (uncertain). |

Formula citations checked:
- `v = Hr`, slide 4: on the slide. Correct.
- Friedmann equation (both lines), slide 6: on slide 6, character for character (Ω_γ, Ω_m, Ω_k, Ω_Λ; signs and powers 4, 3, 2, 0). The same equation is repeated on slide 9, and the page says "slides 6 and 9". Correct.
- Inline age integral t(z) = ∫_z^∞ dz′/((1+z′)H(z′)): on slides 6 and 9. Correct.
- "Solutions" formula, cited `slide 5 (topic; the solutions are the page's own)`: slide 5 lists only "Friedmann equation and its solutions". The `at` text states this honestly. The physics is right: one term ∝ a⁻ⁿ gives ȧ/a ∝ a^(−n/2), so n = 4 gives t^(1/2), n = 3 gives t^(2/3), and n = 0 gives e^(Ht).
- 2006 parameters (Ω_b ≈ 0.04, Ω_d ≈ 0.21, Ω_Λ ≈ 0.75, Ω_k ≈ 0, h ≈ 0.7, Ω_m ≡ Ω_b + Ω_d ≈ 0.25): exactly as on slide 6.

## Arithmetic and answer checks
- Hubble time: 9.778/0.7 = 13.97 Gyr, which rounds to 14.0. Correct.
- (a) Matter only: (2/3) × 13.97 = 9.31, which rounds to 9.3 Gyr. Correct. "Younger than the oldest stars" is fair (globular cluster ages are about 12 to 13 Gyr).
- (b) Flat ΛCDM: √0.75 = 0.8660; √(0.75/0.25) = 1.7321; sinh⁻¹(1.7321) = ln(3.7321) = 1.3170; 2/(3 × 0.8660) = 0.7698; 0.7698 × 1.3170 = 1.0138; × 13.97 = 14.16, which rounds to 14.2 Gyr. Correct. The bracket says the rounded slide parameters cannot reproduce 13.7. I checked this: with WMAP-like h = 0.71, Ω_m = 0.27 the same formula gives 0.9928 × 13.77 = 13.67 Gyr. The explanation is therefore fair and the sensitivity to h is real. The slide does not itself say that 13.7 is "the WMAP measurement". It credits only the "WMAP images" to NASA. The figure is indeed from WMAP's graphic and results, but say "the WMAP-era value" rather than imply the slide states it.
- (c) c/H₀ = 299,800/70 = 4282.9 Mpc, which rounds to 4280. In light years, 4282.9 × 3.2616 × 10⁶ = 1.397 × 10¹⁰, so about 14 billion. Correct. "Beyond it, galaxies recede faster than light" is correct for v = Hr with proper distance today.
- "Vacuum energy makes the universe older than (2/3)/H₀": correct for fixed H₀ (14.2 > 9.3).
- Quiz 1 (answer 0): correct. The explanation is right.
- Quiz 2 (answer 2, 2/(3H₀)): correct. a ∝ t^(2/3) gives H = 2/(3t).
- Quiz 3 (answer 1, 379,000 years): matches slide 11. The explanation's "a few hundred million years" is consistent with the corrected 400.
- Quiz 4 (answer 3, everywhere): correct.
- Flashcards: all three are correct. In the "Brief history" card, "first stars form after a few hundred million years" is fine.
- calcs file: all formula entries recompute as stated. `matter-age-factor` is a correct identity. `history-times` has the 200/400 reversal (finding 1). `ex-hubble-time` and `ex-matter-age` cite slide 6, but the Hubble-time conversion is on slide 3 (finding 5).
- Answers to the thirteen questions (physics):
  1. "Nothing": correct.
  2. Correct in outline.
  3/4. "Everywhere, no centre": correct.
  5/6. "Infinite from the start, just denser; k > 0 finite with no edge": correct for FRW with the slide's 1 − kr² sign. Non-trivial topologies are ignored, which is fine at this level.
  7. "Distance now exceeds the light-travel distance": correct.
  8. Correct.
  9. "Both descriptions work locally; expanding space is natural globally": acceptable. Strictly, it is a choice of coordinates. No change needed.
  10. Bound systems do not expand: correct.
  11. "Strong evidence for a hot dense state; singularity not known": correct.
  12. "Unknown; inflation preceded the hot big bang in inflationary models": correct and fairly hedged.
  13. Fine.

## Coverage and order
- Slides 1 (Hubble), 2 (key fact 1), 3 (summary of last lecture), 4 (key fact 2), 5 (topics), 7 (balloon), 8 (thirteen questions), 6/9 (Friedmann, parameters, age integral), 10/11 (brief history) and 12/13 (films) are all covered.
- Order: the page treats slide 6 after slides 7 and 8. This matches the deck, where slide 9 repeats slide 6 after the questions. Acceptable.
- Not covered: the "(Bunjee cord)" demonstration (finding 7). Slide 3 also carries the label "Interpretation of r, t, a, comoving". The page covers it in one line.
- The page adds the solutions of the Friedmann equation (only listed as a topic on slide 5), the age t₀ = (2/3)/H₀, the closed-form ΛCDM age and the worked example. All are marked as the page's own.

## Licensing
- No images are reused. Slide 1 (Hubble photo, "Image courtesy of Wikipedia"), slide 7 (balloon cartoon, "Figures by MIT OCW") and slide 11 ("WMAP images courtesy of NASA") are only described in words. No figure is copied or redrawn closely. This is fine.
- No OpenStax or LibreTexts material.
- Wording: the list of thirteen questions follows slide 8 closely. Several are identical: Q1 "What is the Universe expanding into?", Q10 "Is the Milky Way expanding?", Q12 "What came before the Big Bang?", Q13 "Should I feel insignificant?". The others are near-verbatim. They are short questions, presented explicitly as the slide's list, and the answers are the page's own, so this is acceptable as quotation. Consider framing them clearly as quoted questions (e.g. "Slide 8 asks:"). The labels "fluctuation generator/amplifier" and "hot, dense, smooth / cool, rarefied, clumpy" are short slide labels and are fine.
- The page contains no em dashes. (The en dash in "1889–1953" is fine.)

## Notes
- Cosmology callout: `/courses/8-286/homogeneous-expansion` (8.286 Lecture 4) and `/courses/8-286/horizon-distance` (8.286 Lecture 8) both exist, and the claims are fair. 8.286 Lecture 4 explains homogeneous expansion and Hubble's law, and Lecture 8 covers the horizon distance. "How inflation generates the fluctuations" is also taken up in 8.286, but it has no link. A link to the relevant inflation/density-perturbation page would help. I did not check which slug.
- `leadsTo`: 8.033 Lecture 20 (lecture19_cosmo3) exists in the syllabus. The "why" text (CMB and what the universe is made of) matches that deck's content as far as I checked from its text (Penzias, Smoot's 2006 Nobel, dark matter / Bullet Cluster). I did not review that deck in detail. 8.286 Lecture 4 is `homogeneous-expansion`. Correct.
- Values registry (`calcs/values.yaml`), entries for this page:
  - `age '14.2'` (computed, 2006 slide values): correct.
  - `Omega_m '0.25'` and `Omega_vac '0.75'` (historical, 2006 values on the 8.033 slides): correct roles.
  - The page also quotes **13.7 billion years** (slide 11, WMAP era). The existing registry entry for '13.7' says "computed: flat ΛCDM age for H₀ = 68, Ω_m = 0.31 (age-with-vacuum-energy)". On this page it is a historical value from the slide, so the role does not fit. Consider extending the description, e.g. "…; also historical: the WMAP-era figure on 8.033 slide 11 (expanding-universe-history)".
  - Similarly, `h '0.7'` is registered as "example: the round value in the 8.902 notes". Here it is the 2006 slide value (historical). Consider noting it.
  - Question 2's "about 14 billion years old" is an age, but the registry's '14' is "the Hubble time … (not the age)". The text matches the slide's own "14 billion", so a note is enough. Uncertain whether the age regex picks this phrase up, because the text reads "14 billion years old".
- I did not run `npm run content:check` or `npm run calc:test`. I recomputed every number by hand, as above.

## Resolution (2026-11-17, by the page author)

- Error 1 (slide 11, first stars): corrected; the slide's "about 200 million years" is struck through and corrected by hand to 400. Calcs `history-times` corrected too.
- Warning 2: the 2005 values are now attributed to the previous deck, with a link to `frw-metric-expansion`.
- Warning 3: the slide's "14 billion light years old" slip is noted.
- Warning 4: the fluctuation generator/amplifier labels are given as on the slide, with the physics marked as the page's own reading; the hot-to-cool arrow is described as a trend over time.
- Warning 5: slide 3's 9.7846 Gyr is mentioned in the worked example; the calcs entries now cite slide 3.
- Info: question 7 restored with "10 billion years", linking the 3ct horizon; the bungee-cord demonstration mentioned; the thirteen questions framed as the slide's; "WMAP-era value", with a check that h = 0.71, Ω_m = 0.27 give 13.7 Gyr (new calcs entry; Ω_m 0.27 added to the values registry); inflation link added.
