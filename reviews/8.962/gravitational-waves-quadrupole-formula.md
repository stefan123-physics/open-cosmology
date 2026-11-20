---
page: content/year-5/8.962/gravitational-waves-quadrupole-formula.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/07ec1f0c803a14a712004279dc892639_R2vL2wLqGYg.pdf (read: local copy L16.pdf / L16.txt and per-page text p16/1.txt to 19.txt; "transcript p. N" = N-th PDF page)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-16-gravitational-radiation-i/ (not opened separately; the transcript is its content, there are no slides or notes)
  - Lecture 17 and 18 transcripts (local L17.txt, L18.txt), read only to check the leadsTo claims
  - content/year-5/8.962/_course.json and linearized-gravity-dynamic-sources.mdx (to check "Lecture 15")
verdict: needs-changes
---

# Review: Gravitational waves: what they do and the quadrupole formula

The source is a video transcript only. Hughes rarely reads board equations aloud, so most formulas were rebuilt from his words. I checked each one against what he says and against standard linearized GR in signature (−,+,+,+). Carroll ch. 7 was used only to check conventions. No rights-reserved or courtesy notice appears in the transcript.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Tensor virial theorem", `at="transcript p. 15"` | p. 15 ends by only *introducing* the theorem ("Back on problem set 2, I asked you to prove a result that I called the tensor virial theorem"). The content (∫T^ij = ½ d²/dt² ∫T^00 x^i x^j) is stated at the top of p. 16. | Cites p. 15 only. | Change to `at="transcript pp. 15–16"`. The sentence before it ("using ∂_μT^{μν} = 0 (transcript p. 15)") can stay. |
| 2 | warning | Formula "Displacement of a test mass", `at="transcript p. 11"` | On p. 11 Hughes splits ξ into a constant part plus a part of order h and describes the ring qualitatively. He never writes the integrated displacement ξ = ξ₀ + ½hξ₀. | Presented as if it were on the board on p. 11. | The formula is correct (it is the double time integral of the cited equation with h = 0 before the wave arrives), but mark it as the page's own step, e.g. label "Displacement of a test mass (integrating the equation above)" and add a short bracket: "[Hughes describes this only in words.]" |
| 3 | warning | Flashcard 4 and Summary bullet 5 | Hughes works with c = 1 and defines I_ij = ∫T^00 x^i x^j (p. 16); at p. 19 he is unsure of the power of c. | Writes the prefactor 2G/(rc⁴) with c restored but keeps I_kl = ∫T^00 x^k x^l d³x. In SI units T^00 is an energy density (ρc²), so this mix gives the wrong dimensions by c². The body text is consistent ("Ï is a mass times a velocity squared"), and so is the worked example (mass moments). | In the flashcard (and anywhere else c is written out) define I_kl = ∫ρ x^k x^l d³x with ρ = T^00/c², or say "(c = 1)" next to the T^00 definition. |
| 4 | warning | Cosmology callout, first sentence | Hughes (p. 15) says higher multipoles are not neglected in practice, and much of his research is on them. | "The quadrupole formula and the TT projection are the tools behind every gravitational-wave measurement since 2015." | This overstates it: real templates use post-Newtonian expansions, numerical relativity and higher multipoles. Suggested wording: "...are the starting point for the waveform models behind every detection since 2015 (the first, GW150914)." |
| 5 | warning | Cosmology callout, standard sirens | (Not in the lecture.) | "its waveform gives the luminosity distance directly ... so sirens offer a separate measurement of the Hubble constant." | Correct but incomplete: the waveform gives distance, not redshift, and the redshift must come from elsewhere (a host galaxy or electromagnetic counterpart, as for GW170817 in 2017, or statistical/catalogue methods). Add "combined with a redshift from the host galaxy", and say it is a later development not covered in the lecture (the claim is not attributed to Hughes, which is fine). |
| 6 | info | Cosmology callout, primordial waves | (Not in the lecture.) | "Inflation may also have left a background ... would imprint a characteristic pattern on the polarization of the CMB." | Accurate and suitably hedged ("may", "would"). You could name the pattern (B-modes) and say it has not been detected so far (BICEP2's 2014 claim was traced to dust). Optional. |
| 7 | info | "Timing light between two bodies", Formula "Round-trip light travel time, for a slowly changing wave" | Hughes writes the two integrals (0 to ε and back) and says only that "in a certain limit" combining them is a good approximation (pp. 7–8). | Gives T_rt ≈ 2ε(1 + ½h_xx) for a slowly varying wave and says so in the label and text. | Fine as written: the limit is stated. Optionally add "(the page's simplification)" to the at= text or the label. |
| 8 | info | LIGO paragraph | p. 12: "Actually, it's a little bit better to do on the plus polarization plot", meaning it is easier to *draw* the sampled ring on the plus diagram. | "two perpendicular arms, best aligned with the plus pattern". | The physics is right (arms along x and y respond most to plus relative to those axes), but this is the page's gloss rather than Hughes's point. No change needed; optionally "arms along x and y, which respond to the plus pattern". |
| 9 | info | Section "Computing the wave from a source", "exact Lorenz-gauge solution of Lecture 15" | Hughes says "I believe it was two lectures ago" (p. 14). | Lecture 15. | Checked: the retarded solution h̄ = 4G∫T/|x−x′| is derived in this site's Lecture 15 page (linearized-gravity-dynamic-sources), and the wave equation □h̄ = −16πG T in Lecture 14. The page is right; Hughes's "two lectures ago" fits the wave equation, not the solution. No change needed. |
| 10 | info | Throughout | Hughes says "Lorentz gauge" (p. 13) and "p dot T equals 0" for the null condition (p. 7, a transcription slip or misspeaking for p·p = 0). | Uses "Lorenz gauge" and p^μp_μ = 0. | The page correctly corrects both without comment. Optional: no bracket needed, since these are spelling or transcription issues. |

## Formula checks (signature −,+,+,+; c = 1)
- Plane-wave matrix (p. 3): symmetric, traceless, zero z row and column. Correct, and it matches Hughes's description (h_xy = h_yx, h_xx + h_yy = 0, z parts zero because the wave is transverse).
- Initial acceleration (p. 5): Γ^α₀₀ = ½η^{αβ}(∂₀h_{β0} + ∂₀h_{0β} − ∂_βh₀₀). Correct, and it matches Hughes's "eta alpha beta ... beta 0, 0 beta, and 00". All three terms vanish for a TT wave. Correct.
- Null condition (p. 7): 0 = −(dt/dλ)² + (1 + h_xx)(dx/dλ)², so dt ≈ (1 + ½h_xx)dx. Correct (calcs `light-expansion`).
- Geodesic deviation (p. 9): with D²ξ^μ/dτ² = R^μ_{νρσ}u^νu^ρξ^σ and u = (1,0,0,0), this gives ∂_t²ξ^j = R^j_{00k}ξ^k = −R^j_{0k0}ξ^k. Correct.
- Riemann components (p. 10): the linearized R_{μνρσ} = ½(∂_ρ∂_νh_{μσ} + ∂_σ∂_μh_{νρ} − ∂_σ∂_νh_{μρ} − ∂_ρ∂_μh_{νσ}) gives R_{x0x0} = −½∂_t²h_xx, R_{y0y0} = −½∂_t²h_yy = +½∂_t²h_xx, R_{x0y0} = −½∂_t²h_xy. All correct, and they agree with Hughes's spoken "minus 1/2 two time derivatives of hxx" and with hyy = −hxx.
- Response equations (p. 11): ∂_t²ξ^x = ½ḧ_xxξ^x + ½ḧ_xyξ^y and ∂_t²ξ^y = ½ḧ_xyξ^x − ½ḧ_xxξ^y. Correct, and they match the transcript's spoken form for h_xy = 0 ("minus those two derivatives ... times xi y"). Calcs `deviation-x` and `deviation-y` agree.
- Displacement formula: correct when h = 0 initially and ξ₀ is constant (see finding 2 on its citation).
- Lorenz-gauge solution (p. 14): □h̄ = −16πG T with the retarded Green's function −δ(…)/4π|x−x′| gives 4G∫T_ret/|x−x′|. Correct.
- Far field (p. 15): 4G/r ∫T_ij(t − r, x′). Correct.
- Tensor virial theorem: ∫T^ij = ½ d²/dt² ∫T^00 x^ix^j. Correct (it follows from ∂_μT^{μν} = 0 applied twice). Citation: see finding 1.
- h̄_ij = (2G/r)Ï_ij (pp. 15–16): 4G × ½ = 2G. Correct, and Hughes says "2 G over r" on p. 16.
- Transversality k_jA_jl = 0, P_ij = δ_ij − n_in_j, h^T = P_ikP_jl h̄_kl (pp. 16–17): correct.
- Trace removal a^TF = a − (1/N)a_kl g^kl g_ij (p. 17): correct.
- Quadrupole formula (p. 18): the trace of h^T with respect to P is P_kl h̄_kl, because P is idempotent. Removing it with N = 2 gives (P_ikP_jl − ½P_ijP_kl)h̄_kl. Correct, and it matches Hughes's "hlk Pli Pkj minus 1/2 ...".
- c⁴: correct when I is a mass moment, since G·(kg m²/s²)/(c⁴·m) is dimensionless. The page reports Hughes's uncertainty (p. 19) correctly. See finding 3 for the flashcard.

## Arithmetic and answer checks
I recomputed these independently in Python (GM_sun = 1.327e20 m³/s², pc = 3.0857e16 m, c = 2.99792458e8 m/s):
- Ω² = 60 × 1.327e20 / (1e6)³ = 7962 s⁻² (page: ≈ 7963; rounding, acceptable). Ω = 89.23 rad/s (page 89.2). f_GW = 2Ω/2π = 28.40 Hz (page 28.4).
- Quadrupole moment: I_xx = 2m(a/2)²cos²Ωt = (ma²/4)(1 + cos2Ωt), so Ï_xx = −ma²Ω²cos2Ωt = −Ï_yy. Correct. TT xx component for n = ẑ: ½(Ï_xx − Ï_yy), so h₊ = −(2Gma²Ω²/rc⁴)cos2Ωt. Correct; it agrees with the standard −(4Gμa²Ω²/rc⁴)cos2Ωt with μ = m/2.
- Amplitude at r = 400 Mpc = 1.234e25 m: 6.36e-22 (page 6.4e-22). Correct.
- δL = ½ × 6.4e-22 × 4000 m = 1.28e-18 m (page 1.3e-18). Correct. The ratio to a proton diameter (≈ 1.7e-15 m) is 7.6e-4, so "about a thousandth" is fair.
- Physical sanity: a = 11.3 GM_tot/c² and orbital speed v ≈ 0.15c, late inspiral where the quadrupole formula is only approximate. Acceptable for an order-of-magnitude example. Optional: one clause noting that at 400 Mpc (z ≈ 0.09) cosmological redshift and luminosity distance would correct r and f by about 10 %.
- Quiz 1 (answer 1): correct. Quiz 2 (answer 2, squeezed): correct. Quiz 3 (answer 1; P·n = 0; trace 3 − 1 = 2): correct. Quiz 4 (answer 0, 1.3e-18 m): correct; the distractors are clearly wrong.
- Flashcards: all correct apart from the units issue in card 4 (finding 3).
- Calcs file: entries match the page. `binary-omega2` expects 7963 against a computed 7962.0; this passes within rounding tolerance (calc:test not run by me; uncertain whether its tolerance accepts it, though 0.01 % should pass).
- Plot: plus curve (cos s + ½A cos(ph) cos s, sin s − ½A cos(ph) sin s) and cross curve (cos s + ½B cos(ph) sin s, sin s + ½B cos(ph) cos s) both match the displacement formula with h₊ = A cos(ph), h× = B cos(ph) on the unit ring. The largest extent is 1.3, inside the ±1.6 range. The caption is accurate. Minor (info): with the default B = 0 the "cross" curve lies exactly on the dashed "no wave" circle. Consider default B = 0.3 with A = 0, or say in the caption that one slider at a time is meant to be used.

## Coverage and order
- The page follows the transcript's order: recap (pp. 1–2), goals (p. 3), plane wave (pp. 3–4), single body (pp. 4–6), light timing (pp. 6–8), geodesic deviation and polarizations (pp. 8–12), LIGO (pp. 12–13), recipe (p. 13), Lorenz solution, far field, virial, quadrupole moment, transverse, traceless, quadrupole formula, c factors (pp. 13–19).
- Nothing substantive is left out. Not covered, and not needed: the remark that three lectures were recorded that day, the problem-set number uncertainty ("7 or 8"), and the Building NW22 aside. The recap of the Lecture 15 decomposition (Φ, Θ, Ψ, the Poisson equations) is cut to one sentence, which is fine since the previous page covers it.
- Additions: the worked example (the page's own), the slow-wave round-trip formula (flagged as a limit), and the integrated displacement (finding 2).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the transcript. No figures are reused; the ring is a generated Plot.
- Verbatim overlap: a 7-word n-gram scan against the transcript found only short phrases: "any convenient gauge by any convenient method" (Hughes's recipe, a standard phrase that could be quoted or reworded), "hundreds of millions to billions of light years" (a factual range), and "the wave field is orthogonal to the". All acceptable. Hughes's "dumb" is quoted and attributed. Otherwise the text is a genuine rewrite.
- The worked example is original (not in the lecture). Its numbers resemble GW150914 but are rounded and are not taken from MIT.
- No OpenStax or LibreTexts material.

## Notes
- AGENTS.md rules: no em dashes (checked); `## Summary` at the end; every display equation is a cited `<Formula>`; the tilde/bar slip and the c⁴/c² uncertainty are noted in brackets; post-lecture facts in the callout are not attributed to Hughes (but see finding 5 on marking them as later developments).
- leadsTo: Lecture 17 is correct (the L17 transcript derives the energy formula and applies it to a binary of two stars). Lecture 18 is correct (Cosmology I opens by switching from perturbations of flat spacetime to cosmology).
- Prerequisites exist (einstein-field-equation, linearized-gravity-static-limit, linearized-gravity-dynamic-sources).
- Uncertain: I could not see the board, so the exact board form of each equation (index placement, whether the round-trip integrals were written with h(t − x) arguments) is inferred from the spoken text. All page formulas agree with the spoken text where it is specific.

## Summary
The physics is correct throughout. I checked every sign and factor (Christoffel symbol, null condition, Riemann components, deviation equations, retarded solution, virial theorem, projector and trace removal, quadrupole formula). The worked example and all four quiz answers recompute correctly. Needed: one citation fix (finding 1, the tensor virial theorem is stated on p. 16). Recommended: mark the integrated displacement formula as the page's own step (2), make the flashcard consistent in units when c is written out (3), and soften and complete the cosmology callout (4, 5). Verdict: needs-changes (one citation error; everything else is a warning or info).

## Resolution (2026-11-19, by the page author)

- #1: the tensor virial theorem now cites transcript pp. 15–16.
- #2: the displacement formula is marked as the page's own integration of the deviation equations (p. 11).
- #3: the flashcard and the summary now define I_kl with the mass density ρ = T⁰⁰/c², so the c⁴ prefactor is dimensionally consistent.
- #4: the callout now says the quadrupole formula is the starting point for modelling, and that real templates add higher multipoles and relativistic corrections.
- #5: standard sirens now need a host-galaxy redshift. GW170817 (2017) is named as a later development, with its own calcs fact entry.
- Info: kept as they are. The cross curve sits on the circle until h× is raised, which is intended.
- Status set to reviewed.
