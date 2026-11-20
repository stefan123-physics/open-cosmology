---
page: content/year-4/8.286/homogeneous-expansion.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9b67a2c6895709ae6d74037a4e82ec24_wuPEmfon9lg.pdf (read via a local copy of the Lecture 4 transcript, t04.txt, read in full; the video ID wuPEmfon9lg in the transcript header matches this URL. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec04/ (read via local copies l04.txt/l04.pdf of the Lecture 4 slides. The PDF text layer is sparse; slide contents for 3, 5, 6 and 7 come from the transcript and a third-party notes file that I checked against the transcript. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-4-the-kinematics-of-the-homogeneous-expanding-universe/ (not fetched; the lecture content was taken from the transcript above)
verdict: pass-with-notes
---

# Review: The homogeneous expanding universe

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | ParallaxDiagram caption | Guth defines the parsec as the distance at which 1 AU subtends 1 arcsecond (the page body says the same). | "As the Earth moves around the Sun, a star at 1 parsec shifts by 1 arcsecond." | The parallax angle is half of the annual shift. Over six months the star moves by 2″ in total (±1″). Rephrase as "...the Earth–Sun distance seen from a star 1 parsec away spans 1 arcsecond (the parallax angle)". |
| 2 | warning | "Georges Lemaître ... Edwin Hubble, using largely his own measurements..." | Guth says Hubble used "largely his own data" and Lemaître used other people's data, mostly Hubble's. | Follows Guth. | This matches MIT, but the history is imprecise. Hubble's 1929 distances were his own, while most of his radial velocities were V. M. Slipher's redshifts (some were Humason's). Consider "using his own distance measurements (and mostly Slipher's velocities)". |
| 3 | info | History paragraph: "For decades, astronomers argued over values between 50 and 100" | Values fell steadily during the 1940s–60s (Baade, Sandage). "50 to 100" describes Guth's graduate-student years, when two camps insisted on 50 and on 100. | Gives "50 to 100" for "decades". | Acceptable simplification. You could add that the range came from two opposing camps rather than from honest error bars. |
| 4 | info | History paragraph: modern values | Guth lists HKP 2001 72±8, Tammann & Sandage 2001 60 (±<10%), WMAP 2003 72±5, WMAP 2011 70.2±1.4 and Planck 2013 67.3±1.2. He calls the Planck discrepancy a roughly 2.5σ "tension". | Quotes three of the five values, all correctly, with correct attributions. Describes "a mild disagreement". | Fine. You could mention the low Tammann–Sandage value, which shows that the 50-vs-100 dispute continued into 2001. |
| 5 | info | Hubble tension paragraph (post-2013 addition, not in MIT) | (not in source) | CMB ≈ 67, Cepheid + SN Ia distance ladder ≈ 73, open question. | Correct by my own knowledge, not checked against a source: Planck 2018 gives 67.4 ± 0.5, and SH0ES (Riess et al. 2022) gives 73.0 ± 1.0, a difference of about 5σ. Not every local calibration agrees with 73. The tip-of-the-red-giant-branch / JWST work of Freedman's CCHP group gives about 70, so "the local distance ladder ... gives about 73" holds specifically for the Cepheid-calibrated ladder, which is what the page says. You could add "(other local methods give values in between)". |
| 6 | info | "Most textbooks instead make a a pure number equal to 1 today" | Guth says only that most books make a dimensionless. | Adds the normalisation a(t₀) = 1. | The addition is correct and standard. |
| 7 | info | Light section, "starting point for the cosmological redshift and for working out how far light can have travelled" | Not stated in Lecture 4. | Forward pointer. | Correct. These topics follow from dx/dt = c/a in later lectures. |
| 8 | info | Steady-state sentence | Guth says the short ages "gave extra credence" to the steady-state theory. | "That conflict helped the rival steady-state theory for years." | Fine. |

## Arithmetic and answer checks
- Parsec: 1.496×10¹¹ m × 206 265 = 3.086×10¹⁶ m = 3.2616 ly. "≈ 3.26 ly" is correct and matches Guth's 3.2616.
- Conversion: 1 Mpc / 10¹⁰ yr = 3.0857×10¹⁹ km / 3.1558×10¹⁷ s = 97.78 km/s/Mpc. Correct. The page also states, like Guth, that this is a unit identity and not a value of H.
- CMB: dipole about 10⁻³, interpreted as our motion; residual about 10⁻⁵. Both match the transcript. Recombination at about 400,000 yr, including the "re-" misnomer, matches the transcript.
- Historical H: Lemaître 1927, 575–625 (two methods). Hubble 1929, 500. HKP 72±8, WMAP 70.2±1.4, Planck 67.3±1.2. All match the transcript and are correctly attributed.
- Factor ~7: 500/70 = 7.1. The ~2 Gyr age matches 97.8/500 × 10¹⁰ yr = 1.96 Gyr. Both match Guth ("2 billion years instead of 14 billion years, a factor of 7"). The page does not repeat Guth's Q&A slip, where he said a factor of 4 in intensity means a factor of 16 in distance (correct: a factor of 2).
- Plot: 500 × 20 = 10 000 km/s, which fits the 0–10 500 range. H slider 40–120 is fine. The caption says the slope was "seven times too steep". Correct.
- Worked example "Reading Hubble's law": 70 × 100 = 7000 km/s. 7000/299 792 = 2.3% ("a bit over 2%"). 97.8/70 = 1.397, so 1/H ≈ 1.40×10¹⁰ yr. All correct. The comparison with the age (13.8 Gyr) is correct.
- Worked example "Changing observers": 700 and 1400 km/s. Subtracting 700 gives −700, 0 and +700. B sees v = 70 × 10 at 10 Mpc on both sides. Correct. This is an original numeric rewrite of the idea in slide 6 (Weinberg's Y–Z–A–B–C diagram), not a copy.
- Derivation: v = ȧ ℓ_c = (ȧ/a) ℓ_p, so H = ȧ/a, and dx/dt = c/a(t). Both match the transcript. The units in notches (a in m/notch) match.
- Quiz: Q1 answer 1 (same at every place). Q2 answer 2 (same law from every galaxy). Q3 answer 2 (ȧ/a). Q4 answer 2 (about 14 Gyr). Q5 answer 1 (gravitationally bound). All marked answers and explanations are correct.
- Flashcards: all correct.
- Formula citations: "reading1" at slide 1 (v = Hr) is correct; slide 1 is "Hubble's Law". "reading2" (the transcript) for 97.8 is correct. "mit" resolves to source.url through lib/mdx.tsx.

## Coverage and order
- Order matches the lecture: isotropy → CMB (400,000 yr, 10⁻³ dipole, 10⁻⁵) → homogeneity → one-without-the-other examples → Copernican principle → Hubble's law → units/parsec/97.8 → history of H → age ∝ 1/H and steady state → no centre (Galilean frame change) → photographic enlargement → why galaxies do not expand → comoving coordinates and map analogy → ℓ_p = a ℓ_c with notches → H = ȧ/a → light dx/dt = c/a → cosmic time. One small difference: the Lemaître/Hubble attribution sentence comes before the parsec section. In the lecture, only the naming remark comes there and the history follows the units. This is harmless.
- MIT content the page leaves out (all info): Guth's marble-grinding analogy; Jim Peebles' remark on "recombination"; the student example of periodicity in one direction and Guth's example of an anisotropic CMB as homogeneous-but-not-isotropic cases; the thought problem on isotropy about two points (Euclidean vs curved 2D surfaces); Hubble's name "K" for the constant; Hubble's 1929 plot with velocity mislabelled as "km", and its scatter; the solar-motion corrections (Lemaître 300, Hubble 280 km/s); Baade and Sandage; the Cepheid-type mix-up as the cause of the distance error; Tammann & Sandage 60 and WMAP 2003 72±5; Lemaître's slowly expanding near-Einstein-static 1927 model; the Q&A on expanding space vs moving galaxies; the history of the R vs a notation; why the scale factor cannot synchronize clocks (notches are arbitrary); de Sitter space as a model in which clocks cannot be synchronized. The cosmic-time section would gain the most from a sentence on why a(t) itself cannot serve as the clock.
- Additions not in MIT: the Hubble-tension paragraph (clearly marked as "Since then"); a(t₀) = 1; two original worked examples; the interactive plot and ExpansionDiagram; the forward pointer to redshift and horizons.

## Licensing
- The page embeds no images. It does not reuse slide 3 (Lemaître photo and first page of his 1927 paper, "© Source unknown. All rights reserved"), slide 4 (Hubble photo, "Photo courtesy Observatories of the Carnegie Institution of Washington"), Hubble's 1929 plot (slide 5) or the Weinberg diagram (slide 6).
- ParallaxDiagram (components/ParallaxDiagram.tsx) is an original inline SVG. It shows the Sun, Earth on a dashed orbit, a star, the angle p and labels, and it is drawn differently from the bare triangle on slide 2. The geometry is generic, and slide 2 has no rights notice anyway. ExpansionDiagram (components/ExpansionDiagram.tsx) is an original generated jittered-grid model, not slide 7.
- Verbatim check: a 7-word n-gram comparison against the transcript found only standard phrases ("cosmology is the study of the universe in the large", "a few hundred million light years", "400,000 years after the Big Bang", "isotropy means the same in all directions"). No copied passages. The map analogy (1 inch = 7, 8, 9 miles) is a short paraphrase with attribution ("Guth's analogy").
- License CC BY-NC-SA 4.0 is compatible with MIT OCW's CC BY-NC-SA. No OpenStax or LibreTexts material was found.

## Notes
- None of the OCW URLs in the frontmatter were fetched in this review. The transcript URL's video ID matches the local transcript.
- The paragraph "Since then the disagreement has grown into the Hubble tension" was judged from my own knowledge (cutoff mid-2026), not from a cited source. It is accurate. The page has `references: {}`, so the paragraph cites nothing. Consider adding a reference (e.g. Planck 2018 VI; Riess et al. 2022) because it goes beyond the MIT source.
- The third-party notes file (notes-l04.md) agreed with the transcript on every point I checked. I did not rely on it for any finding without checking the transcript.

## Resolution (2026-11-14, by the page author)
- Parallax caption corrected: p is half the yearly shift; a star at 1 pc has p = 1″.
- Hubble 1929 attribution now says his distances plus velocities measured largely by Slipher.
- Hubble tension paragraph mentions local methods near 70 and leaves the cause open.
- Open: de Sitter clock-synchronisation aside and why a(t) cannot serve as a clock are not covered. Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
