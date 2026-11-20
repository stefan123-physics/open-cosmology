---
page: content/year-5/Ferreras/mond-tests.mdx
reviewed: 2026-11-15
sources_read:
  - https://doi.org/10.14324/111.9781800084704 — Ferreras, Fundamentals of Dark Matter (UCL Press 2025), local PDF and pdftotext extraction, Sections 7.3–7.5, printed pp. 164–172 (read; maths symbols garbled, equations reconstructed from `-layout` and `-raw` extractions of PDF pp. 178–186)
verdict: needs-changes
---

# Review: Testing MOND — accelerations, lensing and relativistic theories

## Differences from the MIT source
(The source here is the Ferreras textbook, not MIT.)

| # | Severity | Where on page | Book says | Page says | Suggested fix |
|---|----------|---------------|-----------|-----------|---------------|
| 1 | error | "Towards a full theory", first paragraph | "A-QUAdratic Lagrangian (AQUAL)" (p. 170). The name means an *a*-quadratic, i.e. non-quadratic, Lagrangian; the Newtonian one is quadratic in ∇Φ. | "**AQUAL** (a "quadratic Lagrangian" formulation)" | This reverses the meaning. Write "AQUAL (from 'aquadratic Lagrangian': unlike Newton's, it is not quadratic in ∇Φ)". |
| 2 | error | Worked example "How far from Newton is a strong lens?", step "Meaning" | (Book has no such example.) On the `mond` page, f(x) = x/(1+x) is a function of the true acceleration, x = a/a₀ (Eq. 7.4/7.6). | Evaluates f at the **Newtonian** value 6 a₀: f = 6/7, so gravity is "about 17% stronger" | Solving a²/(a + a₀) = a_N with a_N = 6a₀ gives a = (6 + √60)/2 · a₀ = 6.87 a₀, which is about 15% stronger. Either use "about 15%", or say that f evaluated at a_N/a₀ is an approximation. The conclusion (far too small to close the gap) is unchanged. Update `calcs/Ferreras/mond-tests.yaml` `mond-boost` to match. |
| 3 | warning | AQUAL `<Formula>` `at="Eq. (7.12), pp. 170–171"` | The equation is printed on p. 171. It sits right after the "…PHYSICS 171" header; p. 170 only introduces it. | pp. 170–171 | `at="Eq. (7.12), p. 171"`. |
| 4 | warning | Text, flashcard 2, summary: deflection tends to "about 0.3″" | Book: α₀ ≈ 0.3 arcsec for 10¹¹ M⊙, D_L ≈ 10³ Mpc (p. 168, Fig. 7.4) | Repeats 0.3″, attributed to Ferreras in the text but stated as plain fact in flashcard 2 and the summary | Uncertain; please check. My own deep-MOND estimate, using the same "double the Newtonian integral" method, gives α∞ = (2/c²)·π√(GMa₀) = 2π√(GMa₀)/c² ≈ 2.5 × 10⁻⁶ rad ≈ 0.53″ for a₀ = 10⁻¹⁰ m/s². That is about 1.7 × the book's figure. I could not reconstruct Eq. 7.10 well enough from the garbled extraction to see where the difference comes from. At least keep "Ferreras finds" wording in the flashcard and summary, or say "a few tenths of an arcsecond". |
| 5 | info | Eq. (7.12) as written | Extraction is badly garbled. Legible: a minus sign or outer bracket, a₀²/(8πG) with the π lost, F(|·|²/a₀²), d³x. I cannot confirm whether a ρΦ term is printed. | $\mathcal L = -\int[\rho\Phi + \frac{a_0^2}{8\pi G}F(\frac{|\nabla\Phi|^2}{a_0^2})]d^3x$ | The page's form is the standard Bekenstein–Milgrom (1984) Lagrangian and agrees with every legible part. Whether the book prints the ρΦ term is uncertain, not an error. |
| 6 | info | Radial acceleration relation: "2693 points in 240 galaxies (from the SPARC database)" | Book: "a set of 240 galaxies … 2,693 local measurements" (p. 164) | Same | This follows the book faithfully. From memory, not checked here: in Lelli et al. (2017) the 2693 points come from 153 SPARC late-type galaxies; the 240 includes early-type galaxies and dwarf spheroidals not in SPARC. Consider "2693 points in 153 disc galaxies (SPARC), in a study of 240 galaxies". Mark as uncertain. |
| 7 | info | HE 1104−1805 citation | "Ferreras, Sakellaradiou and Yusaf, 2008" (misprint) | "Sakellariadou" (correct spelling) | Fine. Optionally add a bracketed note, as done for Verlinde on the quintessence page. |
| 8 | info | Bullet Cluster: "the lensing mass sits elsewhere, with the galaxies" | The book stresses the morphological mismatch between the X-ray gas and the weak-lensing mass (p. 170). It does not say "with the galaxies" in 7.4. | Adds "with the galaxies", and "Gravity sourced by baryons should follow the gas" | Both are true, but they are the page's own additions. Acceptable. |
| 9 | info | Quiz 1, marked choice | — | "…Newtonian above about $a_0$, rising above it below" | "it" is ambiguous (a₀ or the 1:1 line). Suggest "rising above the 1:1 line below it". |

The other formulas match the book:
- (7.9) $L_X \propto v_\text{max}^{\alpha_X}$, slope about 3–4, p. 166.
- (7.11) $a = GM/\xi^2 = GM/(\theta^2D_L^2) \approx 6a_0 (M/10^{11}M_\odot)(\theta/1'')^{-2}$, p. 169.
  - The extraction shows "ˇ2" where the exponent sign is lost, but a ∝ θ⁻² follows from the middle expression, so the page's −2 is correct.
- (7.13) $\tilde g_{\mu\nu} = e^{-2\phi}g_{\mu\nu} - U_\mu U_\nu(e^{2\phi} - e^{-2\phi})$, p. 171.
  - Decoded glyph by glyph: `g˜° ˝ e˙2˛ g˜° ˙ U˜ U° ˆe2˛ ˙ e˙2˛ ˇ`, with ˜=μ, °=ν, ˝="=", ˙="−", ˛=φ, ˆ/ˇ = brackets. This is an exact match. It also equals Bekenstein's $e^{-2\phi}g - 2U U\sinh 2\phi$.
- (7.14) $ds^2 = -(1+2\Phi)dt^2 + (1-2\Phi)(dx^2+dy^2+dz^2)$ with $\Phi = \Phi_N + \phi$, p. 171. Exact match.

The claims also match the book:
- Mortlock & Turner 2001 with the factor-of-two trick.
- D_L ≈ 10³ Mpc at z ≈ 0.3, and the footnote that a MOND cosmology would need its own distances.
- HST/JWST resolution.
- HE 1104−1805 at z = 0.73 with log M⋆ ≈ 11.5, and lens masses above stellar masses with little gas.
- AQUAL: Galilean invariance and the conservation laws.
- TeVeS 2004: φ does not obey its own Poisson equation; lensing, strong and weak, and dark energy remain incomplete.

## Arithmetic and answer checks
- Eq. (7.11) coefficient and worked example:
  - 1″ = 4.848 × 10⁻⁶ rad.
  - ξ = 4.848 × 10⁻⁶ × 3.0857 × 10²⁵ m = 1.496 × 10²⁰ m = 4.85 kpc. Correct.
  - GM = 6.674 × 10⁻¹¹ × 1.989 × 10⁴¹ = 1.327 × 10³¹.
  - a = 1.327 × 10³¹ / 2.238 × 10⁴⁰ = 5.93 × 10⁻¹⁰ m/s² ≈ 6 a₀. Correct, and it confirms the book's coefficient 6.
- f(6) = 6/7 = 0.857 and 1/0.857 = 1.167: the arithmetic is right, but it is the wrong application (see #2). The consistent value is 1.146, about 15%.
- The 0.3″ limit is uncertain (see #4).
- z ≈ 0.3 for D_A ≈ 10³ Mpc: in flat ΛCDM (70, 0.3) D_A(0.3) ≈ 0.92 Gpc. Consistent.
- Quiz:
  - Q1: answer 1 is correct (wording, #9).
  - Q2: answer 1 is correct. The explanation's 6a₀ is verified.
  - Q3: answer 1 is correct.
  - Q4: answer 1 is correct. The explanation matches the book (p. 172).
- Flashcards:
  - Card 1 is correct (subject to #6).
  - Card 2 is subject to #4.
  - Card 3 is correct.
- `calc:test` subset passes, but entry `mond-boost` encodes the approximation in #2.

## Coverage and order
- The book's order: 7.3 (RAR, Fig. 7.3; Tully–Fisher Eq. 7.9; baryonic TF); 7.4 (lensing needs a full theory; Mortlock–Turner Eq. 7.10; Exercise 7.3; Fig. 7.4 constant deflection ≈ 0.3″; Eq. 7.11; HE 1104−1805, Fig. 7.5; Bullet Cluster); 7.5 (AQUAL Eq. 7.12; TeVeS Eq. 7.13; weak-field metric Eq. 7.14; open problems).
- The page follows this order fully.
- Eq. 7.10 is described in words only, not displayed. This is acceptable, but a learner cannot see the integral the 0.3″ comes from. A `<Formula>` for 7.10, or a generated plot of deflection against a/a₀ (the counterpart of Fig. 7.4), would make the lensing section complete. Optional.
- Exercise 7.3 is not attempted. This is fine.

## Licensing
- No copied paragraphs. The 7-gram overlaps are short standard phrases only: "strong lenses have image separations of order" and "science advances by proposing theories and testing them". The second is close to the book's sentence. Consider rewording it, though it is short.
- Figures 7.3 and 7.4 (SPARC data, the book's own) and Figure 7.5 (adapted from Ferreras, Sakellariadou & Yusaf 2008, PRL, a third party) are not reproduced. Good.
- The source is CC BY-NC 4.0 and the page is CC BY-NC-SA 4.0, which is allowed with attribution through `_course.json`.

## Notes
- The prerequisites `mond` and `weak-lensing-and-machos` exist.
- `leadsTo` → Ferreras 8.3 (`quintessence-and-the-dark-sector`, `lecture: 8.3`): fair. The book itself closes 7.5 by pointing to dark energy as the next chapter.
- `content:check`: no errors for this page.

## Resolution (2026-11-15, by the page author)

- Error (AQUAL meaning): corrected to "a-quadratic Lagrangian", i.e. not simply quadratic in the field gradient.
- Error (boost computed at the Newtonian acceleration): the worked example now solves a²/(a + a₀) = a_N = 6a₀, giving a = ½(6 + √60)a₀ ≈ 6.87a₀, about 15% stronger. Calcs: mond-boost and mond-boost-percent.
- Warning (Eq. 7.12 page): now cited as p. 171.
- Warning (0.3″ stated as fact): the flashcard and summary now say "in Ferreras's estimate", like the text.
- Info (Lelli et al. sample, Sakellariadou spelling, "with the galaxies", quiz wording): no change. The page follows the book's sample description and the correct spelling.

## Equation check against the page images (2026-11-15, by the page author)

Every cited equation was compared with the book's printed page, rendered with Poppler (pdftoppm), now that the text extraction's garbled maths could be checked directly.

- HE 1104−1805's stellar mass is an upper limit in the book (log M ≲ 11.5); the page now says so. In the printed Eq. 7.12 the matter term is blank; the page keeps the standard Bekenstein–Milgrom form, with a note.
