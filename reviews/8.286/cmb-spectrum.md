---
page: content/year-4/8.286/cmb-spectrum.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-18-cosmic-microwave-background-spectrum-and-the-cosmological-constant/ (read from a local HTML copy, p.html. Its first PDF link is the transcript fe429f4326945aa8e12f2eaf56219446_MKPswx4hjec.pdf, which matches reading1.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/fe429f4326945aa8e12f2eaf56219446_MKPswx4hjec.pdf (read from a local copy, t18.pdf / p18.txt. Pages 1–16 read in full. The printed footers on pp. 11, 12 and 15 were checked with pdftotext and equal the PDF page numbers.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec18/ (read from a local copy, s.html, s18.pdf / s18.txt. All 12 slides were read, and slides 8–12 were also rendered as images to read the figure labels.)
verdict: needs-changes
---

# Review: The spectrum of the cosmic microwave background

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `<Formula>` "The 1987 rocket results": $T_{0.2}$, $T_{0.3}$ | Slide 10 labels the three rocket points **(1), (2), (3)**. Guth's spoken "point 2" and "point 3" appear in the transcript (pp. 11–12) as "0.2" and "0.3". On p. 12 he says "this point number three is something like 16 standard deviations off". | The subscripts "0.2" and "0.3" repeat the transcription artefact as if they were physical labels (a wavelength or frequency). On slide 10, points (2) and (3) lie near 420 GHz (≈0.7 mm) and 590 GHz (≈0.5 mm), not at "0.2" or "0.3" of anything. | Write $T_{(2)} = 2.955 \pm 0.017$ K and $T_{(3)} = 3.175 \pm 0.027$ K, or name them "point 2" and "point 3", and cite `at="pp. 11–12; slide 10"`. Also say that the 16 σ point is point 3. |
| 2 | error | "COBE, 1990": "presented it at the January 1990 meeting of the American Physical Society" | p. 13: "John Mather presented this data at the January 1990 American Physical Society meeting". | The page repeats this. | Historically, Mather showed the FIRAS spectrum at the **American Astronomical Society** meeting in January 1990 (Washington, D.C. area). I am confident of this, but I checked it from general knowledge and not from a source opened in this review. This looks like a lecturer slip, and writing rule 4 says not to repeat slips. Suggest "the January 1990 meeting of the American Astronomical Society [Guth says 'American Physical Society']". |
| 3 | warning | "One frequency": "fifty years before 2015, as Guth points out" | p. 10: the discovery "is going to have its 50th anniversary in the coming year". The lecture date is 14 Nov 2013 (slide 1), so "the coming year" is 2014. | The page attributes "2015" to Guth. | Guth gives no year. Suggest "whose 50th anniversary, Guth noted in late 2013, was coming up". The measurement was made in 1964 and published in 1965. |
| 4 | warning | Plot, slider `T` max 3.5 with `range={[0, 1700]}` | n/a | At T = 3.5 K the peak is 2,127 eV/m³/GHz, so the curve is clipped above 1,700. At the advertised 3.175 K the peak is 1,588, which fits. | Either raise the range to about 2,200, or cap the slider at about 3.2 K. |
| 5 | info | "COBE, 1990": "the first satellite dedicated to the CMB" | p. 12: Guth says this. | The page states it as fact. | Arguably the Soviet RELIKT-1 experiment (1983, on Prognoz 9) came earlier, though as an experiment on a satellite rather than a dedicated mission. Suggest "the first satellite dedicated to the CMB, as Guth puts it" or "the first dedicated CMB satellite mission". Uncertain: this depends on what counts as "dedicated". |
| 6 | info | "One frequency": "Within about a year, Roll and Wilkinson measured it…" | p. 10: "I guess within the same year". | "within about a year" | This is acceptable. Roll and Wilkinson published in 1966. |
| 7 | info | Plot caption: "Penzias and Wilson's frequency, 4.08 GHz" | Not stated in Lecture 18. Slide 9 shows the point only graphically, below 10 GHz. | The page gives 4.08 GHz. | Historically correct (4,080 MHz, 7.35 cm). It is an addition by the page, which is fine. |
| 8 | info | Plot and quiz use T = 2.725 K | Slide 12: the COBE 1990 best fit was **2.735 K**. Slide 9 uses 2.726 K. | The page uses 2.725 K (the modern value) for "today". | This is fine, but the caption could note that the 1990 COBE fit shown on slide 12 gave 2.735 K. |
| 9 | info | Worked example and quiz 3: $h\nu_\text{peak} \approx 2.82\,kT$ | Not in Lecture 18. Guth gives only the spectrum formula. | Used as given. | It is correct (the root of $3(1-e^{-x}) = x$ is $x = 2.8214$). Since it is the page's own addition, a short "(this follows from setting $du_\nu/d\nu = 0$)" would help. |

### Formula and citation check
- **"The 1987 rocket results"**, `reading1`, "pp. 11–12": the numbers are right (2.955 ± 0.017 K on p. 11; 3.175 ± 0.027 K on p. 12). The labels are wrong (see #1). Guth reads them from what he "tabulated here", i.e. alongside slide 10, so adding "slide 10" would be fair. The rendered slide 10 itself shows no numbers, only the points (1)–(3) with error bars.
- **"Black-body spectrum"**, `reading1`, "p. 15 (board)": **correct**. The definition starts on p. 14 and the formula is spoken on p. 15 ("16 pi squared h bar nu cubed, divided by c cubed times 1 over e to the 2 pi h bar nu over kt, minus 1 d nu"). It is not on any slide, and Guth says "after I write it down", so "board" is right. As a check, the integral over ν reproduces $\pi^2 (kT)^4/15(\hbar c)^3$ (see below).
- The renaming $\rho_\nu \to u_\nu$ is supported: on p. 14 Guth says "I usually call energy density u", and on p. 16 a student confirms the units are energy density and Guth says "I should have called it u". Correct.
- Slide references in the text: the slides 2–8 recap, 9 (CMB data 1975), 10 (Berkeley–Nagoya 1987), 11 (COBE preprint cover) and 12 (COBE spectrum) all match the slide deck.

### Claims checked against the transcript
- Recap (p. 2): fermion factors 7/8 and 3/4, and "type" = species, particle/antiparticle, spin state. Matches slide 2 and p. 2. Correct.
- Q&A on why e± behave as radiation (p. 2). Correct.
- Majorana Q&A (p. 4): same product, with the 2 moved from particle/antiparticle to spin; masses matter only when kT < mc², "on the order of electron volts at most". Correct.
- Penzias–Wilson (p. 10): one frequency, "tour de force", liquid-helium cold load, same reading in all directions, pigeon droppings (from Weinberg's book), back-to-back papers, "Dickie" (the page correctly writes Dicke and notes the transcript spelling). Correct.
- Slide 9 and p. 10–11: Guth's tabulation of the 1975 data for his popular book, theory curve at 2.726 K, cyanogen points, the 1971 balloon flight by "MIT's own Ray Weiss" as the first evidence of the turnover, and the 1974 balloon with broad error bars. The page's "Rainer (Ray) Weiss" is correct (his full name is Rainer Weiss; the transcript says only "Ray Weiss"). Correct.
- 1987 Berkeley–Nagoya rocket (pp. 11–12): three points, all above the curve, small error bars, ≈16 σ, the team found nothing wrong, some built models, Guth waited "and we were right". Correct. The page omits Guth's aside that the Japanese group supplied the rocket and the Americans the instruments, which is harmless.
- COBE (pp. 12–14): launched 1989 ("I guess"), first data January 1990, preprints mailed to about 100 institutions, preprint 90-01, standing ovation, Mather and Smoot Nobel 2006, full data set with error bars smaller by a factor of 10 "a couple years later". Correct apart from APS/AAS (#2). The page omits that the first result used "nine minutes of data or something like that", which is optional.
- Rumour of the rocket exhaust (p. 13): correct. The page omits the American–Japanese dispute, which is fine.
- Filter argument (p. 14): correct. The page attributes it to "the filter argument of Lecture 16". I did not verify that it also appears in Lecture 16, because the Lecture 16 transcript was not read for this review.
- Wavelength version and Weinberg's plot (p. 15): correct.
- "Before about one year", "confirmed back to about one year" (p. 15): correct and attributed.
- COBE still the best spectrum, WMAP and Planck dedicated to the anisotropies, COBE also first measured them, "later in the course" (pp. 15–16): correct.

## Arithmetic and answer checks
Recomputed with a Python script (CODATA constants):
- Plot coefficients: $16\pi^2\hbar(10^9)^3/c^3$ in eV·s/m³, times $10^9$ per GHz, gives **0.0038577** eV/m³/GHz⁴. And $2\pi\hbar\cdot10^9/k$ gives **0.047992** K/GHz. Both correct.
- Peak at 2.725 K: $x = 2.82144$, so ν = **160.20 GHz**, $u_\nu$ = **1,003.8** eV/m³/GHz with the page's coefficients (1,003.76 with exact ones). The point marker (160.2, 1003.8) is correct.
- Area: **2.604 × 10⁵ eV/m³ = 4.172 × 10⁻¹⁴ J/m³**, which equals $\pi^2(kT)^4/15(\hbar c)^3$ at 2.725 K. The caption is correct.
- At 4.08 GHz, $u_\nu$ ≈ 3.5 eV/m³/GHz, which is "far down the left-hand slope". Correct.
- Peaks at the rocket temperatures: 1,345 (2.955 K) and 1,588 (3.175 K), both inside the range. At 3.5 K the peak is 2,127, which is clipped (#4).
- 16 σ: (3.175 − 2.735)/0.027 = 16.3 against the COBE 2.735 K, and 16.7 against 2.725 K. "Roughly 16" is fine.
- Worked example: ν_peak = 2.82 × 1.381e-23 × 2.725 / 6.626e-34 = **1.601 × 10¹¹ Hz**, so λ = **1.87 mm** ≈ 1.9 mm. Correct. Ratio 2,970/2.725 = **1,089.9**. ν = **1.745 × 10¹⁴ Hz** (1.75e14 is correct), λ = **1.718 μm** (1.7 μm is correct), hν = **0.722 eV**. Correct. "1.9 mm/1.7 μm ≈ 1,100": the rounded inputs give 1,118, and the unrounded ones give exactly 1,090. "≈ 1,100" is acceptable, but writing "1.87 mm / 1.72 μm ≈ 1,090" would make the comparison consistent with the 1,090 stated just before.
- Description of a 2,970 K spectrum peaking at 1.7 μm as near-infrared with a dull orange visible tail: reasonable.
- Quiz 1 (answer 1): correct per p. 10. The explanation ("only one frequency, so no peak") is correct.
- Quiz 2 (answer 1): correct per pp. 11–13. The explanation's temperatures are correct.
- Quiz 3 (answer 1, 160 GHz / 1.9 mm): correct.
- Quiz 4 (answer 1): correct per p. 15.
- Flashcards: the formula matches p. 15. COBE launch 1989, data January 1990, Nobel 2006: correct. Peak 160 GHz: correct. "No big energy release later than about one year": correct.

## Coverage and order
- The page follows the transcript order of pp. 1–16: recap (pp. 1–9), Penzias–Wilson (p. 10), 1975 data (pp. 10–11), 1987 rocket (pp. 11–12), COBE (pp. 12–14), black-body formula (pp. 14–16), implications and anisotropies (pp. 15–16). Order is correct.
- Recap items on slides 3–8 that the page skips: $g_\nu = 21/4$, $g^*_\nu = 9/2$; $g_{e^\pm} = 7/2$, $g^*_{e^\pm} = 3$; $T_\nu = (4/11)^{1/3}T_\gamma$ and $u_{\text{rad},0} = 7.01\times10^{-14}$ J/m³; neutrino mass splittings; Dirac and Majorana masses; kT = 0.860 MeV/√t; s ∝ 1/a³; recombination at 4,000 K and decoupling at 3,000 K / 380,000 yr. All of these are Lecture 17 material, presumably covered on `neutrinos-and-particle-counting` and `temperature-and-decoupling`, so skipping them is acceptable. Optional: one sentence linking to those pages for the recap.
- Additions not in the lecture: the plot (generated from the formula, which is good), the 2.82 kT peak rule, 4.08 GHz, the worked example, and the later-developments callout. All are labelled or harmless.
- The cosmological constant (pp. 16–26) is correctly left to `cosmological-constant`, and the closing callout and `leadsTo` (Lecture 19) are consistent with this.

## Licensing
- No text is copied verbatim beyond short phrases ("tour de force", "fantastically good fit", "standing ovation", "waited for it to go away" is paraphrased). Acceptable.
- No "All rights reserved" or "Courtesy of" notices were found in the extracted transcript or slide text. Slides 9–12 are images of others' data (Guth's figure for his popular book, the Berkeley–Nagoya data, the COBE preprint and spectrum). The page correctly does not reproduce them. It describes them and draws its own curve from the formula.
- No OpenStax, LibreTexts, Tong or Feynman material was detected.
- Weinberg is mentioned only as Guth's citation (pigeon droppings, cyanogen, the plot of $\rho_\lambda$). No Weinberg content is reproduced.

## Notes
- Later-developments callout: Penzias and Wilson shared the 1978 Nobel Prize (with Kapitsa), which is correct. Weiss shared the 2017 Nobel Prize with Barish and Thorne for LIGO, which is correct and post-2013. "COBE's spectrum measurement still sets the limits on spectral distortions; proposed future missions aim to improve on it" matches my understanding: the COBE/FIRAS limits of |μ| < 9 × 10⁻⁵ and |y| < 1.5 × 10⁻⁵ (Fixsen et al. 1996) are still the standard, and PIXIE-type missions have been proposed. I did not check this against a source in this review, so mark it **uncertain but believed correct**. The callout is marked as later material. Strictly, only the 2017 Nobel is post-2013. That is fine, but the title "Later developments" slightly overstates it, so consider "Postscript".
- Cosmology callout and `leadsTo`: the second half of Lecture 18 is indeed the cosmological constant (p. 16 onwards), and "come back to anisotropies later" is on p. 16. The `leadsTo` Lecture 19 description (age in a model with matter, radiation and vacuum energy) was not checked against Lecture 19 in this review.
- Prerequisites `black-body-radiation` and `temperature-and-decoupling` are reasonable.

## Resolution (2026-11-14, by the page author)

- Error 1: the labels are now T_(2) and T_(3), cited to "pp. 11–12; points (2) and (3) of slide 10".
- Error 2: Mather's January 1990 presentation is now attributed to the American Astronomical Society, with a bracket noting Guth's "American Physical Society".
- Warnings: "fifty years before 2015" became "its 50th anniversary was coming up, Guth notes", and the plot's y-range is raised to 2,200, so the curve fits at T = 3.5 K.
- Info: "first satellite dedicated to the CMB" is now attributed to Guth. "Within about a year" became "within the same year, Guth says". The worked-example check now reads 1.87 mm / 1.72 μm ≈ 1,090. Kept 2.725 K (the modern value) rather than COBE's 1990 fit of 2.735 K.
