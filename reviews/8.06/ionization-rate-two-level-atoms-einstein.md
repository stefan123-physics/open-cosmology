---
page: content/year-3/8.06/ionization-rate-two-level-atoms-einstein.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l12-1/ (read: the five segment pages L12.1 to L12.5 were checked; each page's first .pdf link is the reading URL the page gives for that segment, and each page title matches the reading title)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/ca6baadcc599f1f1c3a98d6f85474db5_OyZbj4_P7JM.pdf (read: L12.1 transcript, 4 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/1465beef1113d6aa309d2b3d02a9ccc9_xHE5uf-S9Iw.pdf (read: L12.2 transcript, 3 pages, page by page; its own first line is mislabelled "L12.3", an OCW slip; the OCW page title is L12.2)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/0631f3b1d97284b631e9cba63eb2b5b2_pBvHt3Nea6Q.pdf (read: L12.3 transcript, 5 pages, page by page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/b8c6f154a2525daf4105a745894d64f8_PAlB9kA7c-s.pdf (read: L12.4 transcript, 3 pages, page by page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/2aead0613901296c439e60f4721a4e39_YulNobAZgkA.pdf (read: L12.5 transcript, 3 pages, page by page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-4-time-dependent-perturbation-theory/ (read: chapter 4 PDF; printed pp. 102-108 rendered as images with pdftoppm to read every equation and equation number from (4.4.27) to (4.5.15); p. 109 read as text only)
  - content/year-4/8.286/cmb-spectrum.mdx and content/year-4/8.286/black-body-radiation.mdx (read, for the callout and leadsTo; Guth's transcripts were not reopened)
verdict: pass-with-notes
---

# Review: The ionization rate of hydrogen; two-level atoms and Einstein's argument

Every transcript citation on the page was checked against the page it names (pdftotext -f N -l N, PDF page numbers, since the transcripts have no printed footers). No off-by-one transcript citation was found. Every notes equation number ((4.4.28), (4.4.29), (4.4.31)-(4.4.36), (4.5.1), (4.5.3)-(4.5.13)) and the unnumbered notes citations (p. 107 for A/(BU), p. 108 for the field) were checked on the rendered pages and are right.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The rate per solid angle", paragraph after eq. (4.4.31) | L12.1 p. 2: "This is an energy. And this is an h bar. This is actually a Rydberg with a factor of 2. So ... units of 1 over time"; notes p. 103: w ~ ([E]²/ħ)·(1/[E]) ~ 1/T | "eE₀a₀ is an energy, divided by ħ it is a frequency, and the factor in front of it is a pure number, since ħ²/ma₀² = 2R_y is an energy too." The factor in front, ma₀²/ħ², is not a pure number: it is 1/(2R_y), an inverse energy, and (eE₀a₀)²/ħ is energy × frequency, not a frequency. The conclusion (a rate) is right, the steps as written are not. | e.g. "(eE₀a₀)²/ħ is an energy times a frequency, and the factor in front of it, ma₀²/ħ² = 1/(2R_y), is one over an energy, so dw/dΩ is one over a time." |
| 2 | info | "Atomic field and atomic time", cited "eq. (4.4.36)" | Eq. (4.4.36) gives E_* = 2R_y/(ea₀) = e/a₀² and t_* = a₀/(αc) only | Adds t_* = ħ/2R_y | Correct (a₀/αc = ħ/mα²c² = ħ/2R_y; numerically both 2.419 × 10⁻¹⁷ s). The form comes from the transcript (corrected). Optional: "eq. (4.4.36); L12.1 p. 3 for ħ/2R_y". |
| 3 | info | "The total rate": "In the window of validity ka₀ runs from about 3 to 13 ... (L12.1 transcript pp. 2–3)" | The numbers 9 ≤ (ka₀)² ≤ 169 are in notes p. 103 (referring to (4.4.13)); the transcript only says ka₀ "must be significantly bigger than this number" | Cites the transcript only | Add "notes p. 103" to the citation. |
| 4 | info | Bracket "[The notes, p. 104, call the same quantity ω_ab, and switch to ω_ba from p. 106 ...]" | Notes p. 104 define ω_ab; eq. (4.5.2) on p. 105 still has ω_ab; from (4.5.4) the equations use ω_ba, but the prose on pp. 106-107 keeps writing U(ω_ab) | "switch to ω_ba from p. 106" | Roughly right. More exact: "and mix the two names from p. 106 on (the equations use ω_ba)". Optional. |
| 5 | info | "Two-level atoms and light", list of the two processes, cited "notes p. 105" | The two processes (i), (ii) are listed on notes p. 104; p. 105 has the figure and the laser | notes p. 105 | "notes pp. 104–105". |
| 6 | info | "Spontaneous emission and the A and B coefficients", start of the vacuum-fluctuation paragraph | Notes p. 107: "Spontaneous emission does not care about U(ω_ba); the photons flying around." | "The rate of spontaneous emission does not care about the photons flying around." | Short and nearly verbatim; acceptable as a short phrase, but could be reworded ("does not depend on how many photons are present"). |
| 7 | info | Omitted details | Notes p. 104: a laser intensity of 3.55 × 10¹⁶ W/cm² has peak field E_*; notes p. 108: "even for ionization frequencies λ/a₀ ~ 1700" | Not mentioned | Optional. If the intensity is added, note that cε₀E_*²/2 = 3.51 × 10¹⁶ W/cm² (my computation; the notes' 3.55 looks slightly off, uncertain which constants were used). |

Slips the page attributes to the sources, all verified as real in the text:
- "smaller, or much smaller than the atom" (L12.1 p. 1): in the transcript exactly; the condition is λ ≫ a₀ (notes (4.4.4)–(4.4.5)). Correct.
- cos² integral "is 4π", then "multiplied by 1/3" (L12.1 p. 2): in the transcript. Correct.
- t_* "two Rydbergs over h bar" (L12.1 p. 3): in the transcript; ħ/2R_y is right (2R_y/ħ would be 4.1 × 10¹⁶ s⁻¹, not a time). Correct.
- Notes eq. (4.5.2) has N_a/N_b on the left with e^{−βE_b}/e^{−βE_a} on the right (seen on the rendered p. 105). Correct.
- "minus v dot n" (L12.5 p. 2): in the transcript. Correct.
- Notes (4.5.13) written as P_{a←b}(t) and called "the stimulated emission process" (rendered p. 108). Correct.
As in earlier reviews: whether a transcript slip is spoken or a transcription error cannot be told from the text; the page already says "the transcript reads", which is the careful wording.

## Arithmetic and answer checks
- Eq. (4.4.28) → (4.4.31): (2π/ħ)(L³/8π³)(m/ħ²)k · 1024π(eE₀a₀)²k²a₀⁵cos²θ/(L³(1+k²a₀²)⁶) = (256/π)(ma₀²/ħ²)((eE₀a₀)²/ħ)k³a₀³cos²θ/(1+k²a₀²)⁶. Checked by hand; L³ cancels. Correct.
- ∫cos²θ dΩ = 4π/3; averages 1/3 and 2/3. Correct.
- (256/π)(4π/3)/(2R_y) = 512/(3R_y): eq. (4.4.33). Correct. Dropping the 1: k³a₀³/(ka₀)¹² = (ka₀)⁻⁹. Correct.
- Atomic units: eE₀a₀ = (E₀/E_*)·2R_y = (E_p/E_*)R_y, so (512/3)(E_p/E_*)²R_y/ħ = (256/3)(E_p/E_*)²(2R_y/ħ) = (256/3)(E_p/E_*)²/t_*. Correct.
- E_* = 27.2114 V / 0.0529177 nm = 5.142 × 10¹¹ V/m; t_* = 2.419 × 10⁻¹⁷ s (both forms). Correct.
- Worked example (a): ka₀ = √(500/13.6 − 1) = 5.980; E_p/E_* = 1.946 × 10⁻³, square 3.785 × 10⁻⁶; 5.98⁹ = 9.779 × 10⁶; w = 1.365 × 10⁶ s⁻¹ (1.364 × 10⁶ with unrounded ka₀); 1/w = 0.733 μs. "500 times weaker" (514). All correct.
- (b): (35.765/36.765)⁶ = 0.8475, so about 15% lower. Correct.
- (c): 2·2π∫₀^{π/6}cos²θ sinθ dθ/(4π/3) = 1 − cos³30° = 0.3505; solid-angle fraction 1 − cos 30° = 0.134. "35% into 13%" correct.
- (d): k_BT = 0.51702 eV; 10.2/0.51702 = 19.73; e^{19.73} − 1 = 3.70 × 10⁸. Correct. (10.2 eV = (3/4)·13.6 eV, Lyman alpha. Correct.)
- (e): hν = 5.875 × 10⁻⁶ eV; k_BT = 2.348 × 10⁻⁴ eV; ratio 0.02502; e^x − 1 = 0.02533; 1/0.02533 = 39.5 ("about 39", fine); crossover T = 5.875 × 10⁻⁶/(8.617 × 10⁻⁵ ln 2) = 0.0984 K. Correct.
- Einstein's argument: from 0 = −AN_b − B_baUN_b + B_abUN_a, U = (A/B_ab)/(e^{βħω} − B_ba/B_ab); matching Planck at all T gives B_ab = B_ba, A/B_ab = ħω³/π²c³; A/(BU) = e^{ħω/k_BT} − 1. Checked by hand. Correct. Units: B in m³/(J s²) so that BU is 1/s, A/B in J s/m³ (consistent with U). Correct.
- Plot: curve e^{1/x} − 1 for x = k_BT/ħω_ba, cut where above 6 (x < 0.514); dashed line at 1; point (1/ln 2 = 1.4427, 1). Caption's reading (above the line spontaneous dominates) correct. Generated from the formula; the notes' p. 107 hand sketch is not copied.
- Quiz 1 (answer 1, cos²θ along the field): correct. Quiz 2 (answer 3, (ka₀)^{3−12}; explanation: k² from |H′|², k from ρ): correct. Quiz 3 (answer 0): correct. Quiz 4 (answer 2, k_BT = ħω/ln 2 ≈ 1.44 ħω; colder → spontaneous dominates): correct.
- Flashcards: all four correct.
- calcs file: `npm run calc:test -- -k ionization-rate-two-level` → 50 passed. Entries match the numbers on the page. `npm run content:check`: 0 errors; the only warning for this page is the missing review file (this one).

## Coverage and order
- The page follows MIT's order: L12.1 (rate per solid angle, total rate, (ka₀)⁻⁹, atomic units, field-theory remark) → L12.2 (two levels, absorption, stimulated emission, laser, population inversion, optical pumping) → L12.3 (three facts, failed equilibrium, spontaneous emission) → L12.4 (solving for U, B_ab = B_ba, A/B, vacuum fluctuations, temperature dependence) → L12.5 (dipole operator up to eq. (4.5.13)). Notes sections 4.4 (from (4.4.28)) and 4.5.1–4.5.3 up to (4.5.13) are covered.
- Nothing of the lecture is left out; small omissions from the notes in row 7. Additions: the spontaneous/stimulated ratio plot (from the notes p. 107 formula, which the lecture discusses only qualitatively), the worked example, and the cosmology callout, all marked as the page's own.
- leadsTo 8.06 Lecture 13: the syllabus title ("Thermal radiation, Einstein's A and B coefficients ...") and notes pp. 108-109 ((4.5.14)-(4.5.23): integrating over U(ω), averaging over n) support the "why". Correct.

## Licensing
- No "rights reserved" or "courtesy" notice in the five transcripts or in chapter 4 (grep). The notes' hand-drawn figures (pp. 103-108) are not reproduced; the page's only graph is generated from a formula.
- No OpenStax or LibreTexts material. No copied paragraphs; one short near-verbatim sentence (row 6). The worked example is original (MIT has no numerical example here).

## Notes
- Cosmology callout and leadsTo 8.286 Lecture 18: COBE 1990, a Planck spectrum at about 2.7 K, and "evidence that the early universe was in thermal equilibrium" match content/year-4/8.286/cmb-spectrum.mdx. "Black-body radiation in equilibrium is the same whatever contains it" is from 8.286 Lecture 16 (black-body-radiation.mdx: "independent of what the box is made of"), not Lecture 18; the callout does not name a lecture, so it is fair, but "(Lectures 16 and 18)" would be more precise. The 21 cm / Lyman alpha application is marked as going beyond Guth. Fair and honestly attributed.
- Prerequisites exist and fit: harmonic-perturbations-ionization-of-hydrogen (8.06 L11; its ka₀ = 5.98 and eq. (4.3.46) match what this page uses), canonical-ensemble and thermal-radiation (8.044, Boltzmann factor and Planck spectrum). The inline link to 8.05 hyperfine-21cm-adding-angular-momenta resolves.
- "a couple of lectures ago" for the density of states: the transcript says "a couple of weeks ago"; on this site it was Lecture 10 (fermis-golden-rule-constant-perturbations.mdx, eqs. (4.3.12)-(4.3.14)), so the page's wording is accurate.
- Symbols (data/symbols.json, compared with HEAD): new page-scoped meanings for β, δ(H), θ, ω, a, b, H, d, n, e, A, B, E, U, E_a, E_b, E_p, E_*, t_*, N_a, N_b, B_ab, B_ba, H′_ab, P_ab, ω_ab, ω_ba; this slug added to existing meanings for α, λ, ν, ρ, Ω, c, k, T, Φ, t, m, v, r, q, h, L, w, E₀, a₀, k_B, H′, E_f, R_y, E_e, H′_fi. Every meaning I checked fits this page; units checked (B in m³/(J s²) and U in J s/m³ are consistent). The existing Φ meaning says "−eΦ is the electron's potential energy" while the page writes qΦ with q = −e: consistent. No problem found.

## Resolution (2026-11-18, by the page author)
- Row 1 (warning): fixed. The units paragraph after eq. (4.4.31) now says that (eE₀a₀)²/ħ is an energy times a frequency and that the factor in front, ma₀²/ħ² = 1/(2R_y), is one over an energy, so dw/dΩ is one over a time.
- Row 2: the "Atomic field and atomic time" formula now cites "eq. (4.4.36); L12.1 transcript p. 3 for ħ/2R_y".
- Row 3: "notes p. 103" added to the citation for ka₀ from about 3 to 13.
- Row 4: the bracket now says the notes call it ω_ab on p. 104 and mix the two names from p. 106 on, with ω_ba in the equations.
- Row 5: the two processes now cite "notes pp. 104–105".
- Row 6: reworded to "does not depend on how many photons are present".
- Row 7: not added (optional; the intensity and λ/a₀ ~ 1700 remarks are not in the lecture).
- Notes, callout: "(Lectures 16 and 18)" added after "In 8.286".
- Status set to `reviewed`.
