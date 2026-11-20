---
page: content/year-4/8.07/larmor-formula-radiation-reaction.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln16/ (read: resource page "Electromagnetism II, Lecture Notes 16", links the PDF below, CC BY-NC-SA 4.0)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/d936ba66d0231ca4a1904845fba0a473_MIT8_07F12_ln16.pdf (read, local copy: typeset slides, Lecture 37, December 12, 2012; slides -13- to -24- read from the page images, every equation compared by eye; the pdftotext output is garbled, used only to search for notices)
  - content/year-4/8.286/temperature-and-decoupling.mdx, content/year-5/8.902/cmb-anisotropies.mdx, content/year-5/8.902/g-dwarf-problem-agn.mdx, content/year-2/8.03/wave-plates-radiation.mdx, content/year-4/8.07/electric-magnetic-dipole-radiation.mdx, content/year-4/8.07/electrostatic-energy-self-energy.mdx (read in part, for the links and claims about them)
verdict: needs-changes
---

# Review: The Larmor formula and radiation reaction

The page covers slides 14 to 24 of Lecture Notes 16 (Guth, "Radiation", Lecture 37), eqs. (25) to (40), plus its own worked example, plot and Thomson-scattering section. The author's notes.md was not used. Every `<Formula>` was compared with the slide images; the page's own expansion sketch and the Thomson derivation were redone by hand; every number was recomputed in Python. `npm run calc:test -- -k larmor`: 38 passed. `npm run content:check`: 0 errors; the only warning for this page was the missing review file (this file).

Formula by formula (label, `at=`, verdict). All 14 sit at the cited slide and equation number, and "(boxed)" is correct each time it is used:
- Retarded potential, slide 14, eq. (25): match (slide writes dτ′, page d³x′; not mentioned, harmless).
- Potential to dipole order, slide 15, eq. (26): match.
- Radiation fields, slide 15, eq. (27), boxed: match, both lines.
- E of a moving charge, slide 17, eq. (28), boxed: match.
- Vector u, slide 17, eq. (29), boxed: match, with Griffiths' script r rewritten as n̂ = (r − r_p)/|r − r_p| and |r − r_p|; the page says so.
- E_rad, slide 17, eq. (30), boxed: match, with the slide's |r − r′| corrected to |r − r_p| (flagged on the page).
- Poynting vector, slide 18, eq. (31): match (only the right-hand part is boxed on the slide; "(boxed)" acceptable).
- Larmor formula, slide 18, eq. (32), boxed: match (also repeated on slides 19 and 20).
- Liénard, slide 19, eq. (33), boxed: match; the "for relativists only" form (μ₀q²/6πm₀²c)(dp_μ/dτ)(dp^μ/dτ) is described in words correctly.
- First guess, slide 20, eq. (34): match, including the "?" over the equals sign.
- Integration by parts, slide 21, eq. (35): match; the page writes the boundary term out and says so.
- Energy condition, slide 21, eq. (36): match. Abraham–Lorentz, slide 21, eq. (37), boxed: match (also boxed on slide 22).
- Runaway, slide 23, eqs. (38), (39), (40): match; the slide's "≈ 6 × 10⁻²⁴ s for an electron" is quoted correctly.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Runaway solutions", last paragraph (slide 24) | Slide 24: "In quantum electrodynamics the situation is at least under much better control. Infinities arise, but they can be removed from the theory by a technique called renormalization. This process can be proven to succeed order by order in perturbation theory … but the perturbation expansion is not believed to converge. Nothing can be proven rigorously, but there are reasons to believe that the theory is not completely well-defined, but that it nonetheless gives a consistent description up to extraordinarily high energies, well beyond the Planck mass." | Almost the same paragraph, sentence by sentence, with only a few words changed ("In quantum electrodynamics the situation is at least under much better control. Infinities arise, but they can be removed by a technique called renormalization, which can be proven to succeed order by order in perturbation theory … Nothing can be proven rigorously, Guth says, and there are reasons to believe the theory is not completely well-defined, but it nonetheless gives a consistent description up to extraordinarily high energies, well beyond the Planck mass"). This breaks writing rule 1 (no paragraphs copied from MIT). | Rewrite in the page's own words, e.g. "Guth closes with quantum electrodynamics, where the infinities are tamed by renormalization: it works term by term in an expansion in α ≈ 1/137, though the whole series probably diverges. QED is not known to be mathematically well-defined, yet it describes nature consistently to energies far above the Planck mass." A short quoted phrase is fine. |
| 2 | warning | "Radiation reaction" (slides 20, 22) and "Runaway solutions" first sentence (slide 23) | Slide 22: "We have not proven it, but we have shown that it provides a force that is consistent with conservation of energy, at least for periodic motion. The Abraham-Lorentz formula can be "derived" by modeling the point particle as an extended object, so that one can calculate the force that one part of the object exerts on the other parts. One then takes a limit in which the size … approaches zero. But the result depends on the details of the model, so the result remains inconclusive." Slide 23: "gives reasonable predictions … under many circumstances, but it also has an important pathology: runaway solutions." Slide 20: "If an accelerating particle radiates energy, it must lose energy — obviously! But it is not clear exactly how." | Close paraphrases that keep the slides' sentence structure and most of their words. Content is correct (the "not proven", "consistent with energy conservation for periodic motion", "model-dependent, inconclusive" status matches slide 22 exactly). | Recast these sentences more freely; keep the meaning. |
| 3 | warning | "Radiation reaction", paragraph after eq. (34) | Slide 20: "Since the RHS of Eq. (34) does not depend on v, there is no way to match the two sides." | "…at an instant when v = 0, the left side vanishes whatever the force (slide 20)." The v = 0 illustration is a correct and useful elaboration, but it is not on slide 20. | Mark it as the page's own, e.g. "(for example, at an instant when v = 0 …)" without the slide citation, or move "(slide 20)" before it. |
| 4 | info | "Liénard's generalization" paragraph | Slide 19 gives the four-momentum form "for relativists only" without comment. | "…which makes it plain that the result is the same in every inertial frame (slide 19)." Correct physics (the right side is a Lorentz scalar), but the remark is the page's, not the slide's. | Optional: move the citation so the remark reads as the page's. |
| 5 | info | Section 1, after the doubly infinite series | Slide 16 only lists the series (electric dipole, quadrupole, …; magnetic dipole, quadrupole, …). | Adds "they are weaker by powers of the source size over the wavelength". Correct (amplitudes down by about d/λ per order), unlabelled as an addition. | Optional: "(our addition)". |
| 6 | info | "Runaway solutions" | — | τ is "the time light takes to cross about two thirds of the classical electron radius". It is exactly (2/3) r_e/c (calcs `tau-two-thirds-re`). | Optional: drop "about". |

Slips the page attributes to MIT, each checked on the slide image:
- Eq. (30), slide 17: denominator |r − r′| where the distance from the charge |r − r_p| (Griffiths' script r) is meant. Real; correctly flagged.
- Slide 19: "P = rate at which energy that is destined to become leaving the particle." The word "radiation" is missing. Real; correctly flagged.
- Eq. (22) sign (slide 13): not mentioned on this page (it belongs to the order-1 page). Checked anyway: slide 13 boxes E = −(μ₀m₀ω²/4πc)(sin θ/r)cos[ω(t − r/c)] φ̂, but applying the slide's own eq. (23) (p₀ → m₀/c, θ̂ → −φ̂) to the electric dipole field −(μ₀p₀ω²/4π)(sin θ/r)cos[…] θ̂ gives a plus sign, as in Griffiths eq. (11.36). The slip is real. This page's calcs header lists only the eq. (30) and slide 19 slips, which is right for this page.

## Arithmetic and answer checks
Constants as given on the page (q = 1.602e-19 C, m = 9.109e-31 kg, μ₀ = 1.2566e-6, c = 2.998e8):
- a = qvB/m = 1.7587e18 m/s² → "1.759 × 10¹⁸": correct. ω_c = 1.7587e11 s⁻¹: correct.
- P = μ₀q²a²/(6πc) = 1.7651e-17 W → "1.77 × 10⁻¹⁷ W": correct.
- K = 4.5545e-17 J = 284.3 eV → "4.55 × 10⁻¹⁷ J, about 284 eV": correct.
- K/P = 2.580 s → "2.58 s" (2.6 s in the frontmatter summary): correct. The exponential-decay argument (P ∝ v² ∝ K, so dK/dt = −(P/K)K) is right.
- 2π/ω_c = 35.7 ps → "36 ps": correct.
- τ = 6.265e-24 s with the page's rounded constants, 6.266e-24 s with CODATA → "6.27 × 10⁻²⁴ s": correct.
- τω_c = 1.102e-12 → "1.10 × 10⁻¹²" (summary "10⁻¹²"): correct.
- ȧ = −ω_c² v for uniform circular motion, so F_self·v = −mτω_c²v² = −mτa² = −μ₀q²a²/(6πc): correct, and the instantaneous balance for circular motion (a constant in size, ȧ·v = −a² at every instant) is right.
- v/c = 0.03336 → "0.0334"; γ⁴ = 1.00223 → "1.0022", "0.2%": correct.
- Plot: γ⁶ = 21.43 and γ⁴ = 7.72 at v = 0.8c → "21.4 and 7.7": correct; γ⁶(1 − β²) = γ⁴ for a ⊥ v: correct; range 0–25 contains both curves on the domain.
- Expansion sketch (page's own, labelled "our sketch of the steps the slide leaves out"): |r − r′| ≈ r − r̂·r′, t_r ≈ t₀ + r̂·r′/c, ρ(r′, t_r) ≈ ρ + ρ̇ r̂·r′/c, 1/|r − r′| ≈ (1 + r̂·r′/r)/r; first-order product integrates to Q/r + r̂·p/r² + r̂·ṗ/(rc). Redone: correct, and it is eq. (26).
- Reduction of eq. (27) to the simple dipole: (r̂·ẑ)r̂ − ẑ = sin θ θ̂, so E = −(μ₀p₀ω²/4π)(sin θ/r)cos ωt₀ θ̂: correct.
- n̂ × (n̂ × a) = n̂(n̂·a) − a = −a_⊥: correct.
- Larmor integral: (μ₀q²a²/16π²c) × 2π × 4/3 = μ₀q²a²/(6πc): correct.
- Thomson (page's own, labelled "beyond the slides"): ⟨P⟩ = μ₀q⁴E₀²/(12πm²c), ⟨S⟩ = ½cε₀E₀², ratio μ₀q⁴/(6πε₀m²c²) = (8π/3)r_e² using μ₀ε₀c² = 1: all redone, correct. r_e = 2.8179e-15 m (CODATA) → "2.818 × 10⁻¹⁵ m"; σ_T = 6.6525e-29 m² (CODATA value 6.6524587e-29) → "6.65 × 10⁻²⁹ m²": correct. (With the worked example's rounded constants r_e = 2.817e-15; the page's 2.818 uses CODATA, which is what the calcs entry uses.)
- Quiz 1 (answer 3, at right angles to a): correct, sin²θ about the acceleration.
- Quiz 2 (answer 1): correct; both reasons are on slide 20 (the v = 0 example is the page's, see row 3).
- Quiz 3 (answer 0, a ∝ e^{t/τ}): correct; eq. (38) divided by m gives a = τ ȧ.
- Quiz 4 (answer 2): correct; slide 14 asks for |ρ̈/ρ̇| ≪ c/d plus "similar approximations as before" (d ≪ λ ≪ r on slide 13). The explanation's "the net charge only adds a static Coulomb term" is right.
- Flashcards 1–4: all statements correct (eq. (27); eq. (32) and (33); eq. (37) with ∫a² dt = −∫ȧ·v dt over a cycle, from eq. (35); eqs. (38)–(40)).
- Calcs file `calcs/8.07/larmor-formula-radiation-reaction.yaml`: every number on the page is covered, 38 entries pass. The one `kind: fact`, `decoupling-age` (380,000 years), is sourced by `ref` to Planck 2018 with `origin: later-data`; the page presents it plainly, and Guth's own 2013 8.286 lectures give the same figure (content/year-4/8.286/temperature-and-decoupling.mdx: "Guth gives the result as about 380,000 years"), so there is no unmarked post-2013 claim. Info: the entry could cite the 8.286 page / Guth 2013 as well. Calcs `general-to-simple-dipole` checks the θ component through a pre-simplified expression (it nearly restates itself); harmless.

## Coverage and order
- Slides 14 (eq. 25 and the |ρ̈/ρ̇| ≪ c/d condition), 15 (eqs. 26–27 and "same as the simple dipole with −ω²p₀ → p̈"), 16 (doubly infinite series), 17 (eqs. 28–30), 18 (eqs. 31–32), 19 (eq. 33, "for relativists only", the definition of P), 20 (eq. 34 and both objections), 21 (eqs. 35–37), 22 (status: not proven, consistent for periodic motion, model-dependent "derivations" inconclusive), 23 (runaway, eqs. 38–40), 24 (QED, renormalization, α ≈ 1/137, not convergent, beyond the Planck mass) are all covered, in MIT's order. Slide 25 is the OCW citation page. Nothing left out.
- Added: the expansion sketch (labelled), the γ⁶/γ⁴ plot (labelled as computed from eq. 33), the worked example, the Thomson cross-section (labelled "beyond the slides"), the cosmology callout. All placed after the material they build on.

## Licensing
- `grep -i "rights reserved\|courtesy"` on the extracted text: nothing. The OCW resource page gives CC BY-NC-SA 4.0.
- Slide 14's diagram (a charge distribution with r, r′ and dτ′) is marked "Image by MIT OpenCourseWare" under the footnote "All diagrams are from D.J. Griffiths, Introduction to Electrodynamics, 3rd Edition". The page does not reproduce it, redraw it or describe its layout; it says it is not reproduced. No other Griffiths figure is used. Correct. (Strictly, the slide's image is OCW's redrawing after Griffiths; "from Griffiths' textbook" is how the slide itself puts it.)
- The plot is generated from eq. (33); the worked example (electron at 10⁷ m/s in 1 T) is original and not on the slides.
- Near-verbatim text: slide 24 (error, row 1) and slides 20, 22, 23 (warning, row 2). No OpenStax or LibreTexts material.

## Notes
- F_self notation: the page explains that Guth writes F_rad and that the site uses F_self so read-aloud does not say "radian". The self-energy page (content/year-4/8.07/electrostatic-energy-self-energy.mdx) uses the same F_self, now cites "Lecture Notes 16, slide 23, eqs. (38)–(40)" and links to this page; the slide reference is right (I checked slide 23). Consistent. This page's remark that the physical solution "must be picked out by hand, as on the self-energy page" matches that page's quiz explanation.
- Cosmology callout and leadsTo: the 8.286 Lecture 17 page temperature-and-decoupling exists and describes free electrons scattering photons until decoupling at about 380,000 years (it does not name Thomson scattering, but the callout only says it explains decoupling); 8.902 cmb-anisotropies exists and names Thomson scattering off free electrons until decoupling; 8.902 g-dwarf-problem-agn (Lecture 9) exists and derives the Eddington luminosity from radiation pressure on electrons through σ_T. All claims fairly attributed. leadsTo 8.286 L17 and 8.902 L9 match those pages' lecture numbers.
- The 8.03 link (wave-plates-radiation) does derive "only a_⊥ radiates" with field-line kinks, as the page says. The reference to "the bound electrons of the blue sky on the first page" matches electric-magnetic-dipole-radiation.
- Prerequisites (electric-magnetic-dipole-radiation, lienard-wiechert-point-charge-fields, electrostatic-energy-self-energy) all exist and are appropriate.
- Symbols (data/symbols.json, meanings scoped to this page): all checked. Fit and units are right (τ as 2e²/(4πε₀·3mₑc³) equals μ₀e²/(6πmₑc); ω_c, F_self, n̂, t₀, t₁, t₂, ṗ, p̈, ρ̇, ρ̈, σ_T, r_e, Q, P, K, a₀ fine). One mismatch (warning): the shared meaning of `r`, "With an arrow, the position of the field point (inside an integral, of the current); without, its distance from the origin", does not fit here: inside this page's integral (eq. 25) r is still the field point and there is no current. Give this page (with electric-magnetic-dipole-radiation if it fits there too) its own meaning without "of the current".
- Not compared: the lecture video (no transcript for 8.07 on OCW; owner decision: notes and slides suffice).

## Resolution (2026-11-18, by the page author)

1. (error) The slide 24 paragraph is rewritten in our own words: QED as the better-behaved successor, infinities tamed by renormalization at every step of an expansion in the fine-structure constant (about 1/137) although the series is thought to diverge, not shown to be well-defined, yet consistent up to energies far above the Planck mass, attributed to Guth.
2. (warning) The slide 20 opening, the slide 22 status paragraph and the slide 23 opening are recast with new sentence structure; meaning unchanged (not proven, consistent with energy conservation for repeating motion, extended-object "derivations" model-dependent and inconclusive; a serious flaw, runaway solutions).
3. (warning) The v = 0 remark is now marked "(Our illustration of the second point: …)" and carries no slide citation; the two objections are attributed to slide 20 as a pair.
4. (info) The frame-invariance remark is marked "(Our remark: …)", after the slide 19 citation.
5. (info) "Weaker by roughly another factor of the source size over the wavelength" is marked "(Our addition: …)".
6. (info) "about two thirds" is now "two thirds" (τ = (2/3)r_e/c exactly); the calcs `shown` text follows.
- Symbols: `r` now has its own meaning for this page and electric-magnetic-dipole-radiation ("the position of the field point, … also inside the retarded integrals; without, its distance from the origin"), and the two slugs were removed from the shared meaning that mentions "of the current". `E` also has a page-scoped meaning with unit V/m for both pages.
- Calcs: `decoupling-age` now also names Guth 2013 (8.286 Lecture 17, temperature-and-decoupling) beside Planck 2018.
- Status set to `reviewed`. content:check (0 errors, no warnings for this page), calc:test and build rerun after the changes.
