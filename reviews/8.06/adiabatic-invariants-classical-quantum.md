---
page: content/year-3/8.06/adiabatic-invariants-classical-quantum.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l15-1/ (read; title "L15.1 Classical analog: oscillator with slowly varying frequency", transcript link = reading1, CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/20f26602f22e0792fdaa4a511a2625d7_DYJM_P4sG-c.pdf (read, local copy; L15.1 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/3d0d5959338277143edefca3103eeff9_qxBhW2DRnPg.pdf (read, local copy; L15.2 transcript, 3 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/d68c09728a4010b8bb1ebdd0be4d55a1_BkCyJ6Nr7qU.pdf (read, local copy; L15.3 transcript, 4 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/da5605b8e42473108a6728e2471bdaf4_0AM6arPSszI.pdf (read, local copy; L15.4 transcript, 6 pp.)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/95ffb7405e75bec4f75564318e173ce0_MIT8_06S18ch6.pdf (read, local copy; pp. 1-6 rendered as images to read every equation and its number)
  - content/year-4/8.286/mass-energy-and-radiation.mdx, temperature-and-decoupling.mdx, neutrinos-and-particle-counting.mdx, cmb-spectrum.mdx (read, for the claims about 8.286 Lectures 15, 17, 18; the 8.286 transcripts themselves were not re-read)
verdict: pass-with-notes
---

# Review: Adiabatic invariants, classical and quantum

The transcripts have no printed footers, so PDF page numbers are the citation convention; every transcript citation on the page was checked against `pdftotext -f N -l N`. In the notes, printed page = PDF page; pp. 1-6 were rendered with pdftoppm and every equation number checked against the image. Neither the transcripts nor the notes carry a "rights reserved" or "Courtesy of" notice. The author's notes.md was not used.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | First sentence: "The last chapter of perturbation theory dealt with fields switched on suddenly or oscillating at a definite frequency." | The chapter just before (L13.2-L14, notes ch. 5) is charged particles in electromagnetic fields / Landau levels (see `_course.json`: L14 "Gauge invariance; magnetic field on a torus; Landau levels"). Time-dependent perturbation theory came before that. | Reads as if the previous chapter were perturbation theory. | "The chapter on time-dependent perturbation theory dealt with ..." |
| 2 | warning | `leadsTo` 8.286 Lecture 17, `why`: "The cosmic radiation cools as T ∝ 1/a and keeps its black-body shape" | The site's L17 pages (temperature-and-decoupling, neutrinos-and-particle-counting) show Guth deriving T ∝ 1/a from conserved entropy with fixed g; neither says the spectrum keeps its black-body shape by mode stretching. While the radiation is in equilibrium the shape is kept by equilibrium itself; the stretching argument matters after decoupling (CMB spectrum, Lecture 18). Uncertain: I did not re-read the L17 transcript. | Attributes "keeps its black-body shape" to what L17 covers. | Write "cools as T ∝ 1/a (from conserved entropy)" and keep the black-body point as the page's own; or add a leadsTo to 8.286 Lecture 18 (cmb-spectrum) for the shape after decoupling. |
| 3 | info | "So the energy changes ... True, but, as Zwiebach says, not very interesting (L15.1 transcript p. 3)" | "True, but not too interesting" is on L15.1 p. 2 (the "0-th order result"); p. 3 has "Nothing too dramatic. We need to do better." | p. 3 | Cite "pp. 2-3". |
| 4 | info | Formulas "First-order transition probability" and "Constant perturbation" (eqs. 1.17, 1.18) | Notes write P_{f←i}, δH̃_fi (tilde), e^{iω_fi t} inside a dt′ integral, and e^{iω_fi T} in (1.18) (both look like typos in the notes). Transcript: "delta h f i", "e to the i omega f i t prime". | P_fi, δH_fi without tilde, e^{iω_fi t′} and e^{iω_fi t}. | Correct as written (agrees with the transcript); the silent corrections of the notes' typos are fine. Optionally mention the notes' P_{f←i} notation. |
| 5 | info | "Condition for an adiabatic change" | Transcript p. 4: (2π/ω²)|dω/dt| ≪ 1; "forget the 2π": ω̇/ω² ≪ 1; also d/dt(2π/ω) ≪ 1. | Writes the three with ⟺; text says the 2π is dropped. | Faithful. Strictly, |dT/dt| ≪ 1 is the first form (with 2π), and the middle one lacks an absolute value; harmless. |
| 6 | info | "The invariant as a contour integral", eq. (1.14) | Notes (1.14): ∮p dx = 2πI; "for the oscillator it is 2πE/ω" in the next sentence. | ∮p dx = 2πE/ω = 2πI | Fine (both on p. 4). |
| 7 | info | Bracket after (1.8): "[The notes drop the factor A² ...; the lecture says only that V − K goes like ω² cos 2ωt]" | Notes (1.8): "~ ½mω²(sin²ωt − cos²ωt) ~ −½mω² cos 2ωt" with A set aside although x = A sin ωt; L15.2 p. 3: "will go like omega squared cosine of 2 omega t, the v minus k" (with x = sin ωt, no A). | As quoted. | Verified real and fairly stated (both use "~"/"goes like", so it is an omission rather than an outright error; the page's wording is mild enough). |
| 8 | info | Bracket after (1.12): "[The transcript has '2 square root of 2E over m omega squared' for a ...]" | L15.3 p. 1: "a is the value of x when p0-so it's 2 square root of 2E over m omega squared"; notes (1.12): a = √(2E/mω²). | As quoted. | Verified real (possibly a transcription of "the square root"); π·2√(2E/mω²)·√(2mE) = 4πE/ω would indeed be wrong. Fine. |
| 9 | info | "Which axis is the longer depends on the units, and does not matter." | Transcript: "I actually don't know which is the major and which is the minor." | The page's own gloss. | Correct physics (a and b have different units); fine. |

Every other formula matches its cited equation and page: (1.1) p. 1 (page writes H(x, p, t) for the notes' H(x, p, ω(t)), same thing), (1.2), (1.3) p. 1, (1.4) p. 2 (left halves only), (1.5)-(1.8) p. 2, (1.9)-(1.11) p. 3, orbit equation p. 3, (1.12), (1.13) p. 3, (1.14)-(1.18) p. 4, (2.1)-(2.8) p. 5, (2.9)-(2.12), (2.14), (2.15) p. 6. The page's (2.4) and (2.5) factor the exponential out where the notes write E(t)|Ψ(t)⟩; same content. (2.13) is not shown but is described in words ("the other components of (2.6) at t = 0"). The adiabatic condition is correctly cited to the transcript (reading1 p. 4), since the notes give only τ ≫ T, as the page itself says.

Transcript citations checked and correct: L15.1 pp. 1, 2, 2-3, 3, 4; L15.2 pp. 1, 2, 2-3, 3; L15.3 pp. 1, 2, 3, 3-4, 4; L15.4 pp. 1, 1-2, 2, 2-3, 3, 4, 4-5, 5, 6 (only exception: item 3). Notes page citations (pp. 2, 4, 6) correct.

Specific checks requested:
- Classical derivation: dH/dt = ∂H/∂t = mωω̇x² follows from Hamilton's equations (−ṗẋ + ẋṗ = 0) as stated. dI/dt = (1/ω²)(ω·mωω̇x² − Hω̇) = (ω̇/ω²)(½mω²x² − p²/2m) = (ω̇/ω²)(V − K): verified by hand and by calcs `dI-dt`. V − K = −½mω²A² cos 2ωt verified; its period average is zero (calcs `V-K-average-zero`).
- Phase space: πab = π√(2E/mω²)√(2mE) = 2πE/ω; ∮p dx with clockwise orientation (top half left to right, bottom half right to left with dx < 0, p < 0) gives the full area, matching the notes' figure orientation.
- Quantum ansatz (2.3)-(2.12): signs and factors agree with the notes; ⟨ψ|ψ̇⟩ = −⟨ψ|ψ̇⟩* correctly gives a pure phase; the "serious mistake" (projecting a vector equation onto one state; needs |ψ̇⟩ ∥ |ψ⟩; (2.15)) is faithful to L15.4 pp. 5-6 and notes p. 6, including the perturbation-theory analogy (L15.4 p. 6).

## Arithmetic and answer checks
Recomputed independently (Python):
- ω₁ = √9.81 = 3.1321 rad/s, T₁ = 2.0061 s; ω₂ = √39.24 = 6.2642 rad/s, T₂ = 1.0030 s. Correct.
- L̇ = 0.75/600 = 1.25×10⁻³ m/s; ω̇/ω² = |L̇|/(2√(gL)) (derivation checked) = 1.995×10⁻⁴ at 1.00 m and 3.991×10⁻⁴ at 0.25 m; |dT/dt| = 2π × 3.991×10⁻⁴ = 2.51×10⁻³. Correct.
- E₁ = ½·0.50·9.81·0.050² = 6.131×10⁻³ J; I = 1.958×10⁻³ J s; E₂ = 1.226×10⁻² J; work 6.13×10⁻³ J. Correct.
- A₂ = 5.0/√2 = 3.536 cm; angles 0.050 rad = 2.86° and 0.1414 rad = 8.10° (0.0354/0.25 = 0.1416 rad = 8.11°). Correct. Consistency check: θ₀ ∝ L^(-3/4) (the classical Rayleigh/Lorentz-Einstein pendulum result) gives 0.050 × 4^(3/4) = 0.1414 rad. Agrees.
- I/ħ = 1.958×10⁻³ / 1.0546×10⁻³⁴ = 1.856×10³¹. Correct.
- Modelling note: with x = Lθ and a steady pull (L̈ = 0), the small-angle equation θ̈ + 2(L̇/L)θ̇ + (g/L)θ = 0 becomes exactly ẍ = −(g/L)x, so the page's "oscillator in x with ω = √(g/L)" is exact for this example, not just an approximation. Good choice.
- Cosmology: H₀ = 70/3.0857×10¹⁹ s⁻¹ = 2.27×10⁻¹⁸ s⁻¹; ω = 2π×10¹¹ = 6.28×10¹¹ s⁻¹; H/ω = 3.6×10⁻³⁰ ("about 4×10⁻³⁰", fine). |ω̇|/ω² = H/ω for ω ∝ 1/a verified. H₀ = 70 passes the values.yaml check (content:check: 0 errors).
- Plot: in units x/A₁, p/(mω₁A₁) the start orbit is the unit circle (area π); after ω = rω₁ with E = rE₁, semi-axes A₁/√r and √r·mω₁A₁ (area π); at fixed E, A₁/r and mω₁A₁ (area π/r). The three parametric curves implement exactly this. Over r ∈ [0.5, 3] all curves stay within ±2.2 (max x = 2 for the dashed curve at r = 0.5). Caption correct.
- Quiz 1 (answer 2, E/ω): correct. Quiz 2 (answer 1): correct; explanation right. Quiz 3 (answer 3): E ∝ ω → ×3, A ∝ ω^(-1/2) → ÷√3 = 0.577; correct. Quiz 4 (answer 0): correct; explanation matches notes p. 6.
- Flashcards: all four correct (c = e^{i∫ i⟨ψ|ψ̇⟩dt′} matches (2.11); ∮p dx = 2πħ(n + ½) matches (1.16)).
- calcs/8.06/adiabatic-invariants-classical-quantum.yaml: every number on the page has an entry with the right expected value; formula identities cover (1.5), (1.7), (1.8), (1.10)-(1.11), the adiabatic condition, (1.13), (1.14), (1.15), (1.16), (1.18), (2.8), (2.10), the plot and the callout. `pytest tests/calc -k adiabatic`: 40 passed. Minor: `hamilton-cancel` only checks ∂H/∂t, not the cancellation of the first two terms (trivial; fine).

## Coverage and order
- MIT's Lecture 15 is four videos (L15.1-L15.4) and the notes §1.1, §1.2 and §2 up to (2.15). The page follows that order: oscillator and dH/dt (L15.1), adiabatic condition (L15.1), invariant and its averaging (L15.2), phase-space area, quantum number, Bohr-Sommerfeld, transitions (L15.3), instantaneous eigenstates, ansatz and the mistake (L15.4). The worked example sits between L15.3 and L15.4 material; fine.
- Nothing of substance omitted. Left out only: the right-hand arrow forms of (1.4) and the display (2.13) (described in words). Added: the full A² in (1.8), the numerical example, the plot, the cosmology callout (all marked as the page's own).
- The page stops at (2.15) and leaves (2.16)-(2.17) (θ, ν, γ) to the next lecture, consistent with the brief.

## Licensing
- No "rights reserved" or "Courtesy of" notices in the transcripts or notes pp. 1-6; OCW page footer CC BY-NC-SA 4.0.
- No MIT figure reproduced: the notes' hand-drawn ω(t) ramp and ellipse are not copied; the plot is generated from formulas and shows different content (three orbits under a slider).
- No verbatim copying found; the prose is a rewrite (short phrases such as "instantaneous eigenstate", "serious mistake", "extra suppression" are standard terms or brief attributed quotes). Worked example is original. No OpenStax/LibreTexts material. No em dashes.

## Notes
- Cosmology callout: claims about 8.286 Lectures 15 (each photon's hν ∝ 1/a, ρ ∝ 1/a⁴) and 17 (T ∝ 1/a from entropy) agree with the site's 8.286 pages; the callout says honestly that neither lecture uses adiabatic invariants and that the argument is a standard one from neither course. The physics is right (mode frequency ∝ 1/a; E/ω = ħ(n + ½) fixed ⇒ photon number per mode fixed; uniform scaling keeps a Planck spectrum with T ∝ 1/a). Two optional refinements: (i) for free radiation the result ω ∝ 1/a is in fact exact (Maxwell's equations are conformally invariant), so the adiabatic estimate is sufficient but not needed; a half-sentence would avoid implying the redshift depends on slowness; (ii) Guth's entropy route assumes the particle species (g) stay fixed, which the `guth17` location mentions but the callout does not. See also item 2 on the L17 `leadsTo`.
- `leadsTo` 8.06 Lecture 16 (adiabatic theorem, Landau-Zener) matches the 8.06 syllabus. `leadsTo` 8.286 Lecture 15 is fair.
- Symbols (data/symbols.json, meanings scoped to this page): δ, λ, ν, τ, χ, ψ, ω, a, H, c, T, x, n, i, f, g, A, b, L, p, E, V, K, I, E₁, E₂, A₁, A₂, ω₁, ω₂, ψ̇, Ψ, P_fi, δH_fi, ẋ, and new entries ṗ (N), ω̇ (rad/s²), ċ (1/s), L̇ (m/s). All meanings fit their use on the page, units are right, and the multi-use letters (a: semi-axis / turning point / scale factor; b: semi-axis / turning point; H: Hamiltonian / Hubble rate; n: quantum number / basis label; i: imaginary unit / initial state) are each described. The existing entry id `newton-error-1`/`-2` reused for E₁/E₂ is an odd id name but harmless. `npm run content:check`: 0 errors; the only warning for this page is the missing review file.
- Prerequisites (airy-functions-connection-formulae, fermis-golden-rule-constant-perturbations) exist and fit (WKB/Bohr-Sommerfeld and first-order transitions are both used).
- Not checked: the other three OCW resource pages (l15-2 ... l15-4) and the ch6 URL online; local copies supplied by the caller were used.

## Resolution (2026-11-18, by the page author)

1. Fixed: the opening sentence now reads "The chapter on time-dependent perturbation theory dealt with ...".
2. Fixed: the 8.286 Lecture 17 `leadsTo` now says only what that lecture shows (T ∝ 1/a from conserved entropy while the number of species is fixed); a new `leadsTo` to 8.286 Lecture 18 (cmb-spectrum, checked) carries the black-body shape after decoupling (photons stretched about 1,090-fold), with a `guth18` reference and a calcs fact entry. The callout also mentions the fixed-species assumption and that the shape argument matters most after decoupling.
3. Fixed: the citation is now L15.1 transcript pp. 2–3.
4. No change: P_fi and δH_fi follow the transcript, as the review notes.
5. No change: faithful to the transcript (harmless notation).
6. No change: both forms are on notes p. 4.
7. No change: the bracket was verified as fair.
8. No change: the slip was verified.
9. No change: the gloss is correct.
Notes (callout): added that ω ∝ 1/a is exact for free radiation (Maxwell's equations), so slowness is sufficient but not needed; added the fixed-species condition for Guth's entropy route. Status set to reviewed.
