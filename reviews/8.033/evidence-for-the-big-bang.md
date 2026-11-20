---
page: content/year-2/8.033/evidence-for-the-big-bang.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture19_cosmo3/ (read: the slide PDF "lecture19_cosmo3", deck titled "MIT Course 8.033, Fall 2006, Lecture 18", 33 slides; text extracted with pdftotext and every slide rendered as an image and looked at. No transcript exists for this course.)
verdict: pass-with-notes
---

# Review: The evidence for the big bang

The page has no `<Formula>` blocks (only inline $v = Hr$, which is on slide 10), so there are no equation citations to check. All numbers, the worked example and all four quiz answers are correct. No figures are reused. The findings are claims that go a little beyond what the slides show, and two loose descriptions of slide 16.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Evidence 1", slide 16 sentence | Slide 16: "Hubble 1929: H≈550 km/s/Mpc" and "Riess et al 1996: H≈70 km/s/Mpc", with two velocity–distance plots. Nothing about the Hubble Space Telescope. | "the Hubble Space Telescope era (Riess and others, 1996)" | Drop "the Hubble Space Telescope era". Riess, Press & Kirshner (1996) used type Ia supernovae observed from the ground; HST came in only through the Cepheid calibration. Say "Riess and colleagues (1996), using supernovae" or just "Riess and others (1996)". |
| 2 | warning | same sentence | Slide 16: Hubble's plot runs to 2 Mpc; the Riess plot runs to 500 Mpc, with its farthest point near 450 Mpc. | "from galaxies a hundred times farther away" | The ratio of the plotted ranges is about 225–250. Say "a couple of hundred times farther away" or "out to about 450 Mpc instead of 2 Mpc". |
| 3 | warning | "Evidence 2", COBE sentence | Slide 27 is the COBE logo and sky map (with a schematic curve), plus the Nobel text. Slide 28 shows the COBE satellite and two plots: brightness against frequency, where the FIRAS points sit on the black-body curve and red points from other experiments scatter with error bars; and $T_{\rm CMB}$ against frequency. | "the data points lie exactly on a black-body curve (slides 27–28)" | Say that COBE's points lie on the black-body curve within their tiny errors (slide 28), and that the plot also shows earlier measurements at other frequencies, all consistent with one temperature. Cite slide 28 only for the spectrum. |
| 4 | warning | "Evidence 3" | Slide 32 shows only a credit line, "Figure 2 from Tytler et al 2000, Review of Big Bang Nucleosynthesis and Primordial Abundances" (astro-ph/0001318). The figure itself is not in the OCW file. Slide 29: "correctly predicts the abundance of light elements". | "helium-4, deuterium, helium-3 and lithium-7, all fitted by one value of the density of ordinary matter (slide 32 shows such a comparison…)" | (a) Say that the figure is not in the OCW file (the frw-metric-expansion page does this for the Lineweaver figure). (b) The claim that lithium-7 is fitted by the same density as the others goes beyond the slides and overstates the case. The "lithium problem" (predicted ⁷Li about 3× the observed value at the CMB baryon density) was already being discussed by 2006. Say that helium-4 and deuterium agree with one baryon density, and that lithium-7 is a known, unresolved discrepancy. Mark this as a later or extra fact. |
| 5 | warning | "Evidence 4" | Slide 33: only the heading "Evidence 4: The fine details of cosmic clumpiness". | "the detailed pattern of fluctuations in the CMB and in the distribution of galaxies agrees with the theory in fine detail" | The claim is right in substance, but the slide does not make it. Mark it as a preview of the next lecture ("the next lecture shows…") or as the page's own statement. |
| 6 | warning | Worked example (a) | Not on the slides. | "Hubble's distances were too small, mostly because of a mix-up between two kinds of variable stars." | Historically, Baade's 1952 Cepheid correction (two populations of Cepheids) roughly doubled the distances. Sandage's later corrections (HII regions mistaken for bright stars, and others) supplied much of the rest of the factor of about 7–8. Say "partly because of", or name both causes. |
| 7 | info | "Evidence for what?" | Slide 9: "once **as hot as** the core of the Sun, doubling its size in a under a second" | "once **hotter than** the core of the Sun" | The page's wording is physically defensible: when the doubling time was under a second, T ≈ 10¹⁰ K, far above the Sun's core (≈1.5×10⁷ K). Still, it differs from the slide without saying so. Either keep the slide's "as hot as", or add a bracket explaining the change. |
| 8 | info | slide 15 sentence | Slide 15 (photos removed): "Edwin Hubble 1889- (American; 1930 paper)" and a separate caption "Mt. Wilson Observatory 1931". | "Slide 15 notes Hubble at Mount Wilson Observatory in 1931." | The slide does not link Hubble to the 1931 caption; it is a separate photo caption, and what the photo showed is uncertain. Say "slide 15 introduces Edwin Hubble (born 1889) and shows Mount Wilson Observatory in 1931". The slide's "1930 paper" is probably a slip for 1929 (the page rightly uses 1929). |
| 9 | info | slide 18 sentence | Slide 18 is credited "Figure from STScI/NASA". | "a NASA illustration" | Say "an STScI/NASA illustration". |
| 10 | info | slides 22–24 sentence | Slide 24 shows only a credit line for Figure 1 of Tegmark, de Oliveira-Costa & Hamilton (astro-ph/0302496); the map is not in the OCW file. | "Slides 22–24 show … including a foreground-cleaned map from a 2003 paper" | Add "(credited on slide 24; the map is not in the OCW file)". |
| 11 | info | intro | Slide 5's agenda: "Friedmann equation and its solutions; Age of the Universe; Brief history of the Universe II: the evidence". | "covers the brief history of the universe again, now with the evidence (slide 5)" | Fine, since the first two items appear only as recap slides (2–3). You could mention that the agenda lists them. |

## Arithmetic and answer checks
- Radiation-era gloss: with $a \propto t^{1/2}$, doubling needs 4× the age, so from 0.1 s it takes 0.4 − 0.1 = 0.3 s. Correct.
- Hubble time for 550 km/s/Mpc: 9.778/5.5 = 1.778, about 1.8 Gyr. Correct (977.8/550 gives the same). This is less than the Earth's age of about 4.5 Gyr. Correct. The page uses 9.778 Gyr, while slide 2 uses 9.7846; the earlier frw-metric-expansion page already explains the difference, so no change is needed.
- kT = 8.617×10⁻⁵ × 2.726 = 2.349×10⁻⁴ eV, about 2.3×10⁻⁴ eV. Correct.
- Wien peak: 2.898×10⁻³ / 2.726 = 1.063×10⁻³ m = 1.06 mm. Correct. (This is the wavelength peak of B_λ. The page does not compare it with a frequency peak, so it is not misleading.)
- Quiz 1 (answer 2, "direct observation of the initial singularity"): correct; slide 9 says "Not evidence for a singularity".
- Quiz 2 (answer 1, about 1.8 billion years): correct.
- Quiz 3 (answer 3, finite age and expansion): correct; the explanation is right.
- Quiz 4 (answer 1, Smoot and Mather): correct. Penzias and Wilson's Nobel Prize was in 1978. Correct.
- Flashcards: consistent with slide 9 and slides 12–14. The "dimmed" card's physics (area spreading, arrival rate and photon energy) is correct and is the page's own addition.
- Historical facts checked: Gamow 1904–1968 (slide 1). Penzias and Wilson 1965 (slide 25; the discovery was made in 1964 and published in 1965, so "1965" is the usual date). Smoot graduated from MIT (slide 27; correct, SB 1966, PhD 1970). 2006 Nobel Prize to Smoot and Mather for COBE: correct; slide 27 names only Smoot, then "and", so the page's note that Mather's name is cut off is accurate. The other MIT names (Bennett, Cheng, Meyer, Weiss, Wright) match slide 27.
- Times quoted: 400,000 years, about 400 million years and 13.7 billion years match slide 11. 3 min, 3×10⁵ yr and 3×10⁹ yr match slides 22 and 31; I checked 3×10⁹ on a 200-dpi render.
- calcs/8.033/evidence-for-the-big-bang.yaml: every entry matches the page. `npm run calc:test`: 3443 passed, 1 failed. The failure is in a different page, `8.033/expanding-universe-history:matter-sum`: "page no longer contains 'and $\Omega_m \approx 0.25$ (a year earlier'". That page's author should fix it; it does not affect this page.
- calcs/values.yaml `'550': 'historical: Hubble 1929 as given on the 8.033 slides'`: correct role, and matches slide 16. (It sits next to the existing '500' entry for Hubble 1929, which is fine. Hubble's own fits ranged from about 465 to 530; the slide rounds to 550.)

## Coverage and order
- The page follows the slide order: 1, 2–8 (recap), 9, 10, 11–14, 15–16, 17–19, 21–28, 29–30, 32, 33.
- Not mentioned: slide 20 (credit line only, for Figure 8 of Lineweaver, astro-ph/9911294; the figure is not in the OCW file) and slide 2's label "Interpretation of r, t, a, comoving". Both are minor; a short mention of slide 20 would complete the coverage.
- Slide 31 ("CMB" + the (Very) Brief History figure again) comes after the Gamow slide in the nucleosynthesis part of the deck. The page cites it in the CMB section together with slide 22. That is acceptable, since it is the same figure, but the order differs slightly.
- Olbers' paradox: the page correctly marks the explanation as its own. The physics is right; finite age is the main reason and redshift dimming a secondary one. "As bright as the Sun" should strictly be "as bright as the surface of the Sun", but the sentence already says "every line of sight would end on a star's surface".
- The radiation-era doubling gloss is correctly marked as the page's own and is correct. "Nucleosynthesis … is the earliest epoch that we test in detail" is fair.
- "Slides 17–19 return to the deceleration parameter": correct. q₀ was introduced in the frw-metric-expansion deck (that page, slide 18). Slides 17 and 19 here are the same q₀ figure.
- The slide 18 paraphrase (decelerating universes may recollapse, are younger than coasting ones, accelerating ones are older still, repulsion pushes galaxies apart) matches the STScI/NASA caption.

## Licensing
- The page contains no images. Everything credited to NASA, WMAP/NASA, STScI/NASA, Wikipedia, arXiv papers (Tegmark et al., Lineweaver, Tytler et al.) or "Figure by MIT OCW" is described in words only. No "All rights reserved" notice appears in the deck. No OpenStax or LibreTexts material.
- Wording close to the source:
  - "plenty of 'bang' for most people" echoes slide 9's "Plenty enough bang for most people to call 'big'". It is a short phrase, acceptable.
  - "an accelerating universe is older still" and "pushing galaxies apart" are near-verbatim from the STScI/NASA caption on slide 18 (third-party text). They are short and acceptable, but could be rephrased to be safe.
  - "Standard candles, rulers or clocks" (slide 14) is quoted and marked with quotation marks. Fine.
- No em dashes on the page (checked).

## Notes
- The cosmology callout links to cmb-spectrum (8.286 L18), temperature-and-decoupling (L17) and supernova-evidence (L20). All three exist, and their summaries match what the callout says about them. The leadsTo to 8.286 Lecture 18 (CMB spectrum) is correct.
- leadsTo to 8.033 Lecture 22: the syllabus has Lecture 21 = Quiz 2 and Lecture 22 = lecture20_cosmo4, and slide 5 says "Cosmology 3/4". So "the last cosmology lecture" is correct. That deck's content ("fine details of cosmic clumpiness") is taken from slide 33's heading; I did not read it.
- The intro's explanation of the deck numbering ("Lecture 18", same as the previous deck) matches the PDF.
- Uncertain: what the removed photos on slides 15, 25 and 26 showed. The page does not describe them beyond their captions, which is right.

## Resolution (2026-11-17, by the page author)

- Warning 1: "Hubble Space Telescope era" removed; Riess et al. (1996) is described as supernovae out to 500 Mpc.
- Warning 2: the distance ratio is now given as the plots' ranges (about 2 Mpc and 500 Mpc).
- Warning 3: COBE's points lie on the curve, with other experiments' points scattered around it.
- Warning 4: slide 32 is described as a credit line (figure not in the OCW file); the lithium problem is noted as the page's own remark.
- Warning 5: the Evidence 4 sentence is marked as a preview in the page's words.
- Warning 6: Hubble's distance error now names Baade's Cepheid correction (about a factor of 2) and Sandage's later corrections.
- Info: "as hot as" the Sun's core (as on slide 9); slide 15's caption quoted; slide 18 credited to STScI/NASA and its caption reworded.
