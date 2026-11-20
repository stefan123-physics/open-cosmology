---
page: content/year-5/8.902/g-dwarf-problem-agn.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec09.pdf (read; local copy, all 6 PDF pages = printed pp. 56–60 plus the OCW end page, rendered as images and compared in detail; text also extracted with pdftotext for the notice check)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec08.pdf (read for printed p. 55 only: start of the G-dwarf problem, eq. (253); local copy, text)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec10.pdf (first page only, to check the leadsTo claim)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDFs above)
verdict: pass-with-notes
---

# Review: The G-dwarf problem and active galactic nuclei

The source is the end of section 3.F (G-dwarf problem, eqs. (254)–(256) and a schematic f(≤Z) sketch, printed p. 56; its introduction is on p. 55 of the Lecture 8 notes) and section 3.G "Active galaxies (AGN)" of the 8.902 Lecture 9 notes (Vogelsberger, Fall 2023). Printed p. 56: (254)–(256), G-dwarf sketch, 3.G definition, start of AGN types; p. 57: radio galaxies, quasars/QSOs, BL Lacs, with three photographs (Hercules A, Einstein Cross, Markarian 501) and their credits; p. 58: Seyferts, Spanish Dancer galaxy photo ("© Leo Shatz. All rights reserved"), sizes (257)–(259), energy sources; p. 59: accretion (260), Eddington luminosity (261)–(264), Eddington accretion rate (265)–(266); p. 60: accretion disc, unified model and its sketch.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "How big is the engine?", after eq. (258) | p. 58 gives r_emission ~ 10⁻³–10⁻² pc and R_s = 10⁻⁷ to 10⁻⁴ pc for 10⁶–10⁹ M☉; it draws no ratio. | "The emitting regions are only tens to thousands of Schwarzschild radii across." The page's own numbers give 10⁻³ pc / 10⁻⁴ pc = 10 up to 10⁻² pc / 10⁻⁷ pc = 10⁵ (for 10⁶ M☉ even the smallest size is 10⁴ R_s). "Thousands" understates the upper end by up to a factor 100. | "only about ten to a hundred thousand Schwarzschild radii across, depending on the mass", or restrict the claim to the most massive black holes ("tens to hundreds of R_s for 10⁹ M☉"). |
| 2 | warning | G-dwarf Plot (caption, marked point) and quiz 1 explanation | p. 56 sketch is schematic: closed-box line and data, x axis log(Z/Z☉) from −1 to 0; no yield or u₀ chosen. p. 55 (Lecture 8) only sets up the problem. | Calibrates with y = Z☉, so today's gas has Z₀ = 2.3 Z☉, and concludes "about 25%" of stars have Z < Z☉/4. Arithmetic is right (0.2458), but the common calibration takes today's gas at about solar metallicity (Z₀ = Z☉, y = Z☉/ln(1/u₀)), which with u₀ = 0.1 gives 49% below Z☉/4 and 23% below Z☉/10, and matches the notes' sketch ending near log(Z/Z☉) = 0. The quiz explanation states "about a quarter" as if model-independent. | Either switch to Z₀ = Z☉ (curve (1 − u₀^(10^x))/(1 − u₀) for x ≤ 0; point at x = −0.602, y = 0.486; quiz "about half") or keep y = Z☉ but say in the quiz explanation that the quarter depends on that choice. Update calcs `gdwarf-fraction` and `gas-metallicity-today` accordingly. |
| 3 | warning | Formula "Radiation pressure" (eqs. 261–262) | p. 59 eq. (261) writes "P_γ = E/c = hν/c" and calls it "the radiation pressure"; it is actually a photon's momentum. | Text correctly says "a photon of energy E has momentum E/c", and data/symbols.json defines P_γ as momentum, but the Formula label is "Radiation pressure" over P_γ = E/c. The page silently half-corrects a notes slip. | Label "Photon momentum and radiation pressure", plus a bracket: "[The notes call P_γ = E/c a pressure; it is the photon's momentum.]" |
| 4 | warning | Unified model, accretion disc bullet; disc paragraph after eq. (266) | p. 60: the disc "emits the X-ray, UV, optical, and TeV radiation"; "heating to temperatures T ~ 10⁸ K". | Repeats both. TeV gamma rays from AGN come from the jets (blazars), not from the disc; a thin disc around a supermassive black hole reaches ~10⁵ K (UV); 10⁸–10⁹ K applies to the hot corona or advection-dominated flows that make the X-rays. (Standard accretion physics, checked from knowledge, not from a cited source.) | Bracket notes, e.g. "[The notes also list TeV emission from the disc; TeV photons come from the jet.]" and "[10⁸ K is the hot corona above the disc; the disc itself reaches about 10⁵ K.]" |
| 5 | info | Unified model, last paragraph | p. 60: "BL Lac objects have a line of sight directly down the jet and a high accretion rate." | Keeps the line of sight, drops "high accretion rate". Reasonable: BL Lacs are usually regarded as low-accretion-rate objects, so the notes' phrase is doubtful. The omission is silent. | Optional bracket: "[The notes add 'and a high accretion rate'; BL Lacs are usually thought to accrete slowly.]" |
| 6 | info | Accretion paragraph after eq. (260) | Not in the notes. | "For a non-rotating black hole the efficiency is about 5.7%, close to 1/16; a spinning one can do much better." Correct (1 − √(8/9) = 0.0572), but uncited; `references: {}`. | Optional: cite a reference or mark as standard GR result. |
| 7 | info | Quiz 3 explanation; Summary bullet 3 | Notes use M• for the black hole. | Uses plain M ("$(M/M_\odot)$", "$2GM/c^2$"), whereas the page's own meaning of M (data/symbols.json) is "the total (gas plus stars) mass of the closed box". The rest of the page writes M_BH. | Write $M_\text{BH}$ in both places. |
| 8 | info | Eq. (266) Formula | p. 59 prints ṁ_edd = 5 × 10⁻¹⁰ (M•/M☉) M☉/yr. | Formula shows ṁ_Edd = 16 L_Edd/c² (a page derivation, not printed), and the notes' number appears only in the bracket. Acceptable since the bracket explains it. | None needed, or "at=" note "eq. (266), p. 59; the notes' number is discussed below". |
| 9 | info | G dwarfs paragraph | p. 55 (Lecture 8): G stars "have not evolved much and are still on the main sequence". | "G dwarfs, stars like the Sun, live longer than the age of the Galaxy." The Sun's main-sequence life (~10 Gyr) is shorter than the age of the oldest Galactic stars (~13 Gyr); true for the cooler G dwarfs and roughly for the disc. | "live about as long as the Galaxy has existed or longer, so almost every one ever formed is still on the main sequence". |
| 10 | info | Quiz 1 explanation | p. 56: model incomplete "(infalls, variations in the IMF, etc.)". | "Gas inflow and a different early history fix this." Main text says inflow and IMF, matching the notes. | Optional: "Gas inflow (and possibly a varying IMF) fix this." |
| 11 | info | Notation | M• (black-hole mass) throughout pp. 58–60. | M_BH. Equivalent, and defined in symbols.json. | None. |

Every Formula checked against the rendered PDF; equation numbers and printed pages are right: (254) p. 56; (255) p. 56 (page writes 1 − u₀^{Z/Z₀}, matching the PDF image; the pdftotext output garbles it); (256) p. 56; (257) p. 58; (258) p. 58; (259) quoted in prose, p. 58; (260) p. 59; (261)–(262) p. 59; (263) p. 59; (264) p. 59; (265)–(266) p. 59.

Bracketed slip notes, each verified against the PDF:
- p. 57: "high radio luminosity L_radio ≥ 10¹⁸ L☉" is printed as stated. 10¹⁸ × 3.828 × 10³³ erg/s = 3.8 × 10⁵¹ erg/s, "about 4 × 10⁵¹" correct; that exceeds the brightest quasars (10⁴⁸ erg/s, p. 57) by over three orders of magnitude, so the bracket's conclusion is sound. (What the notes meant is uncertain; the bracket wisely does not guess.)
- p. 59 eq. (266): ṁ_edd = 5 × 10⁻¹⁰ (M•/M☉) M☉/yr is printed as stated. Recomputed: 16 L_Edd/c² per solar mass = 16 × 1.257 × 10³¹ W / c² = 2.24 × 10¹⁵ kg/s = 3.55 × 10⁻⁸ M☉/yr, ratio 71 ("about 70" correct); at 10% efficiency 2.22 × 10⁻⁸ ("2.2 × 10⁻⁸" correct). Bracket correct.

## Arithmetic and answer checks
- Eq. (259): R_s = 9.6 × 10⁻⁸, 9.6 × 10⁻⁷, 9.6 × 10⁻⁵ pc for 10⁶, 10⁷, 10⁹ M☉; "about 10⁻⁷, 10⁻⁶, 10⁻⁴ pc" correct.
- Light-day: c × 1 day = 8.4 × 10⁻⁴ pc (quiz 2 "8 × 10⁻⁴" fine); 10 days = 8.4 × 10⁻³ pc, matching 10⁻³–10⁻² pc.
- Quiz 2 explanation: "comparable to the Schwarzschild radius of a black hole of 10⁹ M☉": ratio 8.4 × 10⁻⁴ / 9.6 × 10⁻⁵ = 8.8, same order of magnitude; acceptable.
- Eq. (264): 4πcGM☉m_p/σ_T = 1.257 × 10³⁸ erg/s → 1.3 × 10³⁸ correct.
- 1 g at efficiency 1/16: 5.6 × 10¹² J = 1.56 × 10⁶ kWh, "about 10⁶ kWh" correct. Efficiency ratio (1/16)/0.007 = 8.9, flashcard "ten times more" acceptable.
- Energy sources: 3 × 10⁸ × 10^5.5 L☉ = 3.6 × 10⁴⁷ erg/s; 10¹⁰ × 10⁵² erg over 10⁷ yr = 3.2 × 10⁴⁷ erg/s. Both consistent with quasar luminosities; page quotes the notes correctly.
- Worked example (a): 1.3 × 10³⁸ × 10⁸ = 1.3 × 10⁴⁶ erg/s = 1.3 × 10³⁹ W correct. (b): 16 × 1.26 × 10³⁹ / (3 × 10⁸)² = 2.24 × 10²³ kg/s; × 3.16 × 10⁷ / 1.99 × 10³⁰ = 3.56 → "3.6 M☉/yr" correct. Minor inconsistency: (a) states 1.3 × 10³⁹ W, (b) uses 1.26 × 10³⁹ W without saying where the extra digit comes from (info). "Doubles its mass in a few tens of millions of years": at constant 3.6 M☉/yr, 28 Myr; growing at the Eddington rate, the doubling time is ln 2 × 28 = 19.5 Myr. "A few tens of millions" is acceptable for the first, a little generous for the second (info).
- "A quasar of 10⁴⁶ erg/s needs a black hole of at least 10⁸ M☉": 10⁴⁶ / 1.3 × 10³⁸ = 7.7 × 10⁷ M☉, correct.
- Plot: with y = Z☉ and x = log₁₀(Z/Z☉), u₀^{Z/Z₀} = exp(−10^x), so the expression is eq. (256) correctly implemented; the cut at Z ≤ Z₀ = ln(1/u₀) Z☉ is right. Marked point (−0.602, 0.2458): (1 − e^{−0.25})/0.9 = 0.2458 correct. Caption "2.3 Z☉": ln 10 = 2.303 correct. See finding 2 for the calibration choice.
- Quiz 1 (answer 1): correct. Quiz 2 (answer 1): correct. Quiz 3 (answer 2, 1.3 × 10⁴⁶ erg/s): correct. Quiz 4 (answer 1): correct and matches p. 60.
- Flashcards: closed-box formula matches eq. (256); Eddington formula matches eq. (264); accretion efficiency matches eq. (260). All correct.
- calcs/8.902/g-dwarf-problem-agn.yaml: 14 entries, each matching the number shown on the page; `npm run calc:test -- -k g-dwarf`: 14 passed. Gaps (info): no entries for eq. (259) masses 10⁷ and 10⁹ M☉, the 10-day size, the 10⁸ M☉ minimum mass for 10⁴⁶ erg/s, the 5.7% efficiency or the doubling time.

## Coverage and order
- The page follows the notes' order: closed-box G-dwarf distribution (254)–(256) and its failure; AGN definition; types (radio galaxies, quasars/QSOs, BL Lacs, Seyferts); sizes from variability and R_s; ruling out stars and supernovae; accretion and efficiency; Eddington luminosity and accretion rate; accretion disc and ISCO; unified model. Nothing in pp. 56–60 is left out.
- The sketch of the unified model (p. 60) is described in words rather than drawn; acceptable, though a generated diagram would help (optional).
- Additions not in the notes: the non-rotating black-hole efficiency of 5.7% (finding 6), the 10% efficiency comparison in the bracket, the worked example, and the "quasar needs ≥ 10⁸ M☉" turn-around (a fair reading of the garbled p. 59 sentence "massive enough to to be blown apart").
- leadsTo 8.902 Lecture 10: the Lecture 10 notes open Part II with "1.A Cosmological Principle and dynamics" and Hubble's law; the "why" is accurate. No cosmology Callout on the page (none needed for an 8.902 page).

## Licensing
- The Spanish Dancer galaxy image (p. 58) is marked "Processing & Copyright: Leo Shatz © Leo Shatz. All rights reserved. This content is excluded from our Creative Commons license." The page does not use or mention it. Correct.
- Hercules A (NASA/ESA/…, Hubble Heritage), Einstein Cross (NOIRLab/NSF) and Markarian 501 (SDSS, CC BY) photographs: not reused or described beyond the AGN types they illustrate. The unified-model sketch and the G-dwarf sketch are not reproduced; the G-dwarf curve is a generated Plot from eq. (256). No "Courtesy of" credits arise.
- No OpenStax or LibreTexts material. No sentences copied verbatim; short lists such as "highly variable, extremely luminous and highly polarized" are standard descriptive terms rewritten into prose. The worked example is original (the notes have none).

## Notes
- The pdftotext extraction drops ≤, ≥, ~ and the bullet subscript; all symbols were checked on the rendered page images instead.
- Findings 4 and 5 concern physics the notes state doubtfully; the corrections given are from standard astrophysics knowledge, not from a source I re-read, so treat their exact wording as a suggestion.
- No arithmetic error and no wrong citation found; the verdict is pass-with-notes.

## Resolution (2026-11-17, by the page author)

1. Warning: the emitting regions are now "about ten to a hundred thousand Schwarzschild radii across, depending on the black-hole mass".
2. Warning: quiz 1's explanation now says the quarter assumes a yield equal to Z☉, and that with today's gas at Z☉ about half the stars fall below Z☉/4 (new calcs entry, 0.486); it also names IMF variations as in the notes.
3. Warning: eq. (261) is labelled "Photon momentum and radiation pressure", with a bracket noting the notes call P_γ a pressure.
4. Warning: brackets now say TeV photons come mainly from the jets, and that a thin disc reaches about 10⁵ K, with 10⁸ K belonging to the corona.
Info: quiz 3's explanation and the summary use M_BH; worked example (a) now gives 1.26 × 10³⁹ W, the value used in (b). Other info items need no change.

Status set to `reviewed`.
