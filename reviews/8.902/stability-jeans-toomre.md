---
page: content/year-5/8.902/stability-jeans-toomre.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec07.pdf (read; local copy, all 7 PDF pages: printed pp. 42–47 rendered as images and compared in detail, plus the OCW end page; text also extracted with pdftotext for the notice check)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
  - https://doi.org/10.1086/147861 (Toomre 1964; not read; the 3.36 coefficient is checked against standard knowledge only)
verdict: pass-with-notes
---

# Review: When does a stellar system collapse? The Jeans and Toomre criteria

The source is section 3.D "Stability of stellar systems" of the 8.902 Lecture 7 notes (Vogelsberger, Fall 2023). Printed p. 42 opens with the end of 3.C (eqs. 183–186, covered by `jeans-equations`), then the 3.D heading and its two-sentence introduction. p. 43: small scales, sketch of a non-rotating static system, eqs. (187)–(191); p. 44: (192)–(199); p. 45: (200)–(206); p. 46: end of the crossing-time argument, large scales with the rotating-disc sketch, (207)–(211); p. 47: (212)–(217) and the Q-profile figure (Extended Data Fig. 7b of Neeleman et al. 2020, Nature). 3.C is not counted as missing.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Bracket after "Critical velocity dispersion" (eqs. 213–216) | p. 47, eq. (216): "Toomre finds σ_crit = 3.26 GΣ/κ", i.e. the notes attribute their own heuristic 3.26 to Toomre. | "Toomre's exact calculation for a disc of stars gives 3.36 (Toomre 1964)". Correct, but it does not say that the notes misattribute 3.26 to Toomre, so a reader comparing with eq. (216) sees a contradiction without explanation (writing rule 4). | Say it outright: "[Eq. (216) credits 3.26 to Toomre; his exact calculation for a stellar disc gives 3.36 (Toomre 1964) …]". |
| 2 | info | Formula "Critical velocity dispersion" and the bracket under it | p. 47: √(32/3) with "3.26" underneath. | Formula ends "≈ 3.26"; the bracket says "√(32/3) = 3.27". √(32/3) = 3.2660, so 3.27 is the correct rounding and 3.26 is the notes' truncation. The two lines on the same page disagree. | In the formula write "≈ 3.27", or add "(the notes round down to 3.26, used below)". |
| 3 | info | Bracket "for a gas disc the factor is π" | Not in the notes. | Correct physics (Q_gas = c_sκ/(πGΣ)), but uncited; and the calcs entry `toomre-exact` cites `toomre1964` for it, whereas the gas criterion is not Toomre 1964's (Safronov 1960; Goldreich and Lynden-Bell 1965). | Either drop "π for gas" from the calcs `where`/source, or add a reference for the gas criterion. |
| 4 | info | Paragraph on the Wolfe Disk (p. 47 figure) | p. 47: solid line = model Q assuming an exponential gas profile; points = observed data, which "underestimates Q likely due to beam smearing". | Describes the model curve ("near or below 1 over much of the disc"; read off the figure: minimum about 0.9 near 1.5–2 kpc, above 1 inside about 0.8 kpc and beyond about 2.8 kpc, so fair). Leaves out the data points and the beam-smearing remark; adds "gas-rich" and "so it is prone to fragmenting and forming stars", which the notes do not say (plausible, and the paper's own reading, but unverified here: the paper was not read). | Optional: "(the measured points lie lower still, which the notes put down to beam smearing)", and mark the fragmentation sentence as an interpretation. |
| 5 | info | "Is the solar neighbourhood stable?" Step 2 | Not in the notes. | "Discs tend to settle near Q ~ 1–2, because unstable discs heat up (or form stars) until they become stable": standard self-regulation argument, correct, but presented without saying it is outside the notes (the cloud example does say so). | Optional: "(not in the notes)". |
| 6 | info | Jeans-swindle paragraph | p. 43 only states the swindle. | Adds that in an expanding universe the swindle is not needed and refers to "the linear-perturbations page" (correct; that page exists, 8.902 Lecture 13) but as plain text, not a link. | Make it a link (`/courses/8.902/linear-perturbations`), and consider a `leadsTo` entry for 8.902 Lecture 13 (the Jeans length in an expanding universe), the obvious cosmological continuation. |
| 7 | info | Thin-disc Jeans length λ_J = (π/8)σ²/(GΣ) | p. 47: "adapting λ_J from an arbitrary 3D potential to a 2D disk", no derivation. | Attributed to the notes, as it should be. The factor π/8 is not derived in the notes and is not the usual 2D form (σ²/(GΣ) up to order-one factors); the page correctly does not claim more. | None needed. |
| 8 | info | Notation | Notes write w for ω in (201)–(202) and the text; "centripetal" acceleration on p. 46; spelling "Neelemen". | ω; "centrifugal"; "Neeleman". Silent corrections of trivial slips, all fine. | None. |
| 9 | info | Quiz 2 explanation and text after eq. (206) | p. 46: "differing only by a factor of π". | Same wording. Strictly the factor π is in r² (√π in r). | Optional: "up to a factor of π in r²". |

Every Formula checked against the rendered PDF; equation numbers and printed pages are right: (187)–(188) p. 43; (189) p. 43; (190) p. 43 (ε included, as in the notes); (192) p. 44; (195) p. 44; (196) p. 44; (199) p. 44; (200)–(201) p. 45; (202)–(203) p. 45; (204)–(205) p. 45; (206) p. 45; (207) p. 46; (208) p. 46; (209) p. 46; (210)–(211) p. 46; (212) p. 47; (213)–(216) p. 47; (217) p. 47. Inline references (eq. 191), (eqs. 193–194), (eqs. 197–198), (eqs. 213–214) also correct. φ₀ = 0, v₀ = 0 and the Poisson inconsistency match p. 43.

Bracketed slip notes, each verified against the PDF:
- Eq. (187): notes print ∂(nσ_ij)/∂x_i; the text below then writes P = ρσ_ij² = ρσ_ij = mnσ_ij². σ_ij² is meant. Bracket correct.
- Eq. (200): notes print exp[i(k·c − ωt)]; x is meant. Bracket correct.
- Eq. (211): notes print R_rot > 2πGΣ/(3Ω³); eq. (210) has 3Ω². Bracket correct; the page's Ω² is right.
- Eq. (215): notes print GΣ/(κ²/√2); with Ω = κ/√2 it is κ/√2, and only then is the result √(32/3)·GΣ/κ. Bracket correct.
- 3.26 vs 3.36: see findings 1 and 2. Toomre (1964) gives σ_R,min = 3.36 GΣ/κ for a stellar disc (standard result, e.g. Binney & Tremaine; paper itself not read).

Derivations checked: (192) and (196) linearisation; (197)–(199): ∂²ρ₁/∂t² + ρ₀∇·(−∇φ₁ − (v_s²/ρ₀)∇ρ₁) = 0 with ∇²φ₁ = 4πGρ₁ gives (199). Plane wave in (199): −ω² − 4πGρ₀ + v_s²k² = 0, so ω² = v_s²k² − 4πGρ₀ (201). ω = 0: k² = 4πGρ₀/v_s², (2π/k)² = πv_s²/(Gρ₀) (202). (207) d/dR'(GπR²Σ/R'²) = −2GπR²Σ/R'³; (208)–(209) a_c = Ω²R⁴/R'³, derivative −3Ω²R⁴/R'⁴; (210)–(211) give R > 2πGΣ/(3Ω²). (212): (π/8)σ²/(GΣ) ≥ 2πGΣ/(3Ω²) ⇒ σ² ≥ 16G²Σ²/(3Ω²) ⇒ σ ≥ (4/√3)GΣ/Ω. (213)–(214): Ω = v_c/r gives r dΩ²/dr = −2Ω², κ² = 2Ω². (215): (4/√3)·√2 = √(32/3) = 3.266. All correct.

## Arithmetic and answer checks
- Cold cloud (recomputed with k = 1.380649e-23, m_H = 1.67e-27 as on the page, G = 6.674e-11): v_s = 188.4 m/s → 188; ρ₀ = 10⁹ × 2.33 × 1.67e-27 = 3.89e-18 → 3.9e-18 kg/m³; λ_J = 2.07e16 m → 2.1e16 m = 0.671 pc → 0.67 pc; M_J = 72.9 M☉ → 73; t_ff = 1/√(Gρ₀) = 6.21e13 s → 6.2e13 s = 1.97 Myr → "about 2 million years". All correct. (Calcs use m_H = 1.6735e-27; same results to the precision shown.)
- Note on the cloud: M_J here uses λ_J as the radius (the notes' eq. 203); with λ_J as diameter it would be 8 times smaller (about 9 M☉). The page follows the notes, so this is consistent; "a few tens of solar masses" fits the notes' definition.
- Toomre example and quiz 4: 3.26 × 0.0043 × 50/0.036 = 19.47 → 19.5 km/s; Q = 35/19.47 = 1.80 → 1.8. With Toomre's 3.36, σ_crit = 20.1 and Q = 1.74; the conclusion (stable) is unchanged. κ = 36 km/s/kpc matches the orbits-and-epicycles page (quiz 3 there). Correct.
- Quiz 1 (answer 1, ω² < 0, λ > λ_J): correct; explanation correct.
- Quiz 2 (answer 1, crossing within a free-fall time): correct; see finding 9 for "factor π".
- Quiz 3 (answer 1, large scales by rotation, small by random motions): correct, matches p. 47.
- Quiz 4 (answer 1, about 20 km/s): correct; explanation's 19.5 and Q ≈ 1.8 correct.
- Flashcards: Jeans length and mass match eq. (203); Toomre card correct (3.26 notes, 3.36 Toomre; Q > 1 stable).
- Summary (frontmatter) "σ_crit ≈ 3.3 GΣ/κ": fine as a rounded value.
- `calcs/8.902/stability-jeans-toomre.yaml`: 11 entries (sound speed, density, λ_J in m and pc, M_J, t_ff in s and Myr, √(32/3), Toomre 3.36 as fact, σ_crit, Q). Each `shown` string matches the page text. `npm run calc:test -- -k stability-jeans`: 11 passed, 0 failed. See finding 3 for the `toomre-exact` source; the `cloud-density` and `cloud-sound-speed` entries cite eqs. (203) and (195) as source although the numbers are the page's own (marked `origin: page-own`, so acceptable).

## Coverage and order
- The page follows the notes' order: introduction (p. 42); rewriting the Jeans equation as a fluid equation (187)–(189); perturbations and the Jeans swindle (190); linearised continuity and Jeans equations (191)–(196); wave equation (197)–(199); plane wave and dispersion relation (200)–(201); Jeans length and mass (202)–(203); stable and unstable cases; physical meaning via free-fall and crossing times (204)–(206); rotating disc and R_rot (207)–(211); combined criterion (212); κ vs Ω (213)–(215); Toomre's coefficient (216) and Q (217); the Wolfe Disk figure.
- Left out: the two sketches (non-rotating static system with an overdensity, rotating patch); the remark that "κ is not too far off from Ω for real galaxies" is condensed. Nothing of substance missing.
- Additions: both worked examples, the expanding-universe remark on the swindle, the skater analogy, the gas-disc factor π, the Q ~ 1–2 self-regulation remark, and the slip brackets. All correct (findings 3, 5, 6 on attribution).
- `leadsTo` 8.902 Lecture 8 ("Stellar and Chemical Evolution" in `_course.json`): matches the Lecture 8 notes (3.E Stellar population synthesis, 3.F Chemical evolution of galaxies). No cosmology callout; none of the 8.902 pages uses one, so this is consistent, but see finding 6. Prerequisites `jeans-equations` and `orbits-and-epicycles` exist.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in printed pp. 42–47 (pdftotext grep, and visual check).
- The Q-profile figure on p. 47 is Extended Data Fig. 7b of Neeleman et al., Nature 581, 269 (2020), third-party material. The page does not reproduce or redraw it; it only describes it in words and credits the paper by name and year. Correct handling.
- The notes' own sketches are not reused. No graph on the page.
- No verbatim copying beyond short standard phrases ("Jeans swindle", "the speed at which perturbations propagate"); the crossing-time argument and the disc argument are rewritten. Both worked examples are original. No OpenStax or LibreTexts material.

## Notes
- No em dashes on the page.
- The notes use σ both for the velocity dispersion and (σ_ij) for the dispersion tensor; the page uses σ only for the dispersion; no clash.
- Toomre (1964) was not read; the 3.36 coefficient is the well-known result and is stated as such.

## Resolution (2026-11-17, by the page author)

1. Warning: the bracket after eq. (216) now says the notes round down to 3.26 and credit that value to Toomre, while Toomre's exact stellar-disc value is 3.36.
2. Info: the same bracket explains the 3.26 (notes) vs 3.27 (√(32/3)) rounding.
3. Info: the gas-disc factor π is now credited to Safronov (1960) and Goldreich and Lynden-Bell (1965), also in the calcs entry.
4. Info: the Wolfe Disk paragraph now follows the notes (model with exponential gas fall-off, Q below 1 over part of the disc, measured points lower, beam smearing) and drops "gas-rich" and "prone to fragmenting".
5. Info: the Q ∼ 1–2 remark is marked as not in the notes.
6. Info: the linear-perturbations page is now a link.
7. Info: kept as in the notes ("up to a factor of π" refers to r²).

Status set to `reviewed`.
