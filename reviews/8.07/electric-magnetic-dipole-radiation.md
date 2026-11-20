---
page: content/year-4/8.07/electric-magnetic-dipole-radiation.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln16/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/d936ba66d0231ca4a1904845fba0a473_MIT8_07F12_ln16.pdf (read, local copy: typeset slides, Lecture 37, December 12, 2012; slides -1- to -13- read from the page images, every equation compared by eye; the pdftotext output was used only for the notices, because the equations do not survive extraction)
  - content/year-5/8.962/_course.json (read, for the 8.962 leadsTo lecture number)
  - content/year-4/8.286/_course.json and content/year-4/8.286/temperature-and-decoupling.mdx (read in part, for the 8.286 leadsTo and the callout link)
  - calcs/8.07/electric-magnetic-dipole-radiation.yaml (read; `pytest tests/calc -k electric-magnetic-dipole`: 37 passed)
verdict: pass-with-notes
---

# Review: Electric and magnetic dipole radiation

The page covers slides 1 to 13 of Lecture Notes 16 (Guth, "Radiation", Lecture 37), eqs. (1) to (24). The author's notes.md was not used. Every `<Formula>` was compared with the slide images. The derivation steps (E from V and A, the cancellation of the radial parts, the cycle average, the sphere integral, the sign of the magnetic dipole field) were redone by hand. Every number was recomputed in Python. `npm run content:check`: 0 errors; the only warning for this page was the missing review file (this file).

Formula by formula (label, `at=`, verdict). All 20 sit at the cited slide and equation number:
- Liénard–Wiechert potentials, slide 2, eqs. (1)–(2): match. The slide writes the script-r unit vector; the page writes it out as (r − r_p)/|r − r_p|, and gives only the last form of (2), A = (v_p/c²)V. Equivalent.
- Retarded time, slide 2, "eqs. (3)–(4)": (3) matches; (4) only defines the script-r symbols, which the page writes out (info, #6).
- q(t) = q₀ cos ωt, slide 3, eq. (5): match.
- Two-sphere potential, slide 3, eq. (6): match (r± for script-r±).
- r± = √(r² ∓ rd cos θ + (d/2)²), slide 4 (unnumbered): match.
- First order in d/r, slide 4, eq. (7), both lines: match.
- Phase expansion, slide 4, eq. (8): match, including ∓.
- Ideal dipole potential, slide 5, eq. (9): match. Checked numerically in calcs (two-sphere potential divided by d as d → 0).
- Radiation-zone V, slide 5, eq. (10) (boxed): match.
- Retarded A, slide 6, eq. (11): page has μ₀/4π; the slide has 1/(4πε₀). The slip is real (seen on the slide image) and the page says so in brackets. Correct.
- Current element, slide 6, eq. (12): match.
- Dipole A, slide 6, eq. (13) (boxed): match. (The slide's typesetting also shows μ₀/4 without π on the integral line and "μ₀p₀ω/4" with "πr" displaced in the box; the page writes μ₀/4π and 4πr correctly without comment; info, #7.)
- E, slide 7, eq. (14) (boxed): match. Re-derived: −∇V along r̂ gives −(μ₀p₀ω²/4π)(cos θ/r)cos[…] (using μ₀ε₀c² = 1); −∂A/∂t = +(μ₀p₀ω²/4πr)cos[…](cos θ r̂ − sin θ θ̂); the r̂ parts cancel and the θ̂ part is the slide's result.
- B = (1/c) r̂ × E, slide 7, eq. (15) (boxed): match.
- Poynting vector, slide 8, eq. (16) (boxed): match.
- Intensity, slide 8, eq. (17) (boxed): match; (1/2)(μ₀/c)(p₀ω²/4π)² = μ₀p₀²ω⁴/(32π²c).
- Total power, slide 11, eq. (18) (boxed): match; ∫sin³θ dθ dφ = 8π/3, and (8π/3)/(32π²) = 1/(12π).
- I(t), slide 12, eq. (19); m(t), slide 12, eq. (20); m₀ = πb²I₀, slide 12, eq. (21): match.
- E of the loop, slide 13, eq. (22): page has a plus sign, slide a minus. The slip is real: (23) applied to (14) gives −(μ₀m₀ω²/4πc)(sin θ/r)cos[…](−φ̂) = +…φ̂, and directly, the loop's radiation-zone vector potential A = −(μ₀m₀ω/4πc)(sin θ/r) sin[ω(t − r/c)] φ̂ gives E = −∂A/∂t with a plus sign (this agrees with Griffiths 3rd ed. eq. 11.36, used only as a check). The page's bracketed note is right.
- Substitution rule, slide 13, eq. (23): match.
- B = (1/c) r̂ × E, slide 13, eq. (24) (boxed): match.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Order of "Where the energy goes" and "Polarized blue skies" | Slides 9–10 (blue sky, polarization) come before slide 11 (total power) | Total power (slide 11) is given first, then the blue sky (slides 9–10) | Either follow MIT's order or add a short note that the total power is moved forward. The move is sensible (the ω⁴ argument reads well after (18)) but is not said. |
| 2 | warning | "Polarized blue skies", first paragraph | Slide 9: only the ω⁴ factor and the red sunset; no word on bound electrons or resonance | The bound-electron argument (visible light far below the resonance, so the induced dipole hardly depends on frequency) and "the light crosses much more air" sit between "(slide 9)" citations | Mark the resonance argument as the page's own addition (e.g. "(Guth's slide does not spell this out: …)"), so it is not read as Guth's. Physics is correct. |
| 3 | warning | Cosmology callout, last sentence | (not in MIT) | CMB polarization arises "for the same reason as the sky" | Simplification: the sky is polarized because the sunlight arrives from one direction; CMB polarization needs Thomson scattering of radiation with a quadrupole anisotropy around each electron. Suggest "by the same scattering, because the light arriving at each electron was slightly uneven (a quadrupole pattern)". |
| 4 | info | "What radiation is", first paragraph | Slide 1 gives only the definition and the 1/r, 1/r², 4πr² argument | Adds the static-field contrast (Coulomb field, Poynting at least as fast as 1/r⁴) before a "(slide 1)" citation | Correct physics; fine as is, or mark as the page's own illustration. |
| 5 | info | Callout | (not in MIT) | "the same sin² pattern" for Thomson scattering | True for the radiation of each oscillating electron; for unpolarized incident light the scattered intensity goes as (1 + cos²χ)/2 in the scattering angle. Acceptable; optional clarification. |
| 6 | info | "The retarded time" formula, `at="slide 2, eqs. (3)–(4)"` | Eq. (4) defines the script-r unit vector and magnitude | Only eq. (3) is shown | Could cite "eq. (3)" only; harmless. |
| 7 | info | Eq. (13) | Slide line 1 shows μ₀/4 (π missing), box shows π misplaced | Correct μ₀/4π and 4πr | Optional bracket noting the typesetting slip, as for (11). |
| 8 | info | Introduction | Four of slides 1–13 carry diagrams (slides 3, 8, 10, 12); the fifth Griffiths slide is 14 (next page) | "the five slides with diagrams take them from Griffiths' textbook" | Could say "the slides with diagrams" or "four of these slides (five in the notes)". |

No errors found in the physics, the citations or the equation numbers.

## Arithmetic and answer checks
- Blue/red ratio: (700/450)⁴ = 5.855 ≈ 5.9. Wavelengths are 450 nm (blue) and 700 nm (red), stated on the page; the slide quotes no numbers.
- Worked example (μ₀ = 1.2566 × 10⁻⁶, c = 2.998 × 10⁸): λ = 29.98 m ≈ 30.0 m; ω = 6.283 × 10⁷ s⁻¹; p₀ = 5 × 10⁻¹⁰ C m; ω⁴ = 1.5585 × 10³¹; ⟨P⟩ = 4.332 × 10⁻⁴ W ≈ 0.43 mW. Correct.
- Far field: the intensity 5.17 × 10⁻¹¹ W/m² is at r = 1 km and θ = 90°, i.e. in the equatorial plane, at right angles to the axis, as the problem says. E amplitude μ₀p₀ω²/(4πr) = 1.974 × 10⁻⁴ V/m: this is the **peak** amplitude (the coefficient of the cosine in (14)), and the page calls it "the field amplitude", which is correct; the rms value would be 1.40 × 10⁻⁴ V/m. Cross-check E₀²/(2μ₀c) = 5.17 × 10⁻¹¹ W/m², consistent. At 45°: 2.59 × 10⁻¹¹ W/m². Correct. (The step writes μ₀/4π as 10⁻⁷; with the page's μ₀ = 1.2566 × 10⁻⁶ that is 1.00000 × 10⁻⁷, no effect.)
- Loop: "the same current" is defined on the page as the same current amplitude I₀ = q₀ω = 0.3142 A that flows in the wire between the spheres. m₀ = π(0.05)²(0.3142) = 2.467 × 10⁻³ A m²; cp₀ = 0.1499 A m²; ratio 0.01646, squared 2.709 × 10⁻⁴, inverse 3691 ≈ "about 3700". Correct. The loop's diameter (10 cm) equals d, so "similar size" holds.
- General size ratio: (m₀/c)/p₀ = πb²ω/(cd), which for b = d is πbω/c = 2π²b/λ. Correct.
- Magnetic dipole power μ₀m₀²ω⁴/(12πc³), marked as the page's own step: correct.
- Plot: x = sin³s, z = sin²s cos s is the polar curve r = sin²θ with θ from the z axis; the full 0 to 2π range draws both lobes. Largest |z| = 2/(3√3) = 0.385 < 0.6, largest |x| = 1 < 1.2. The caption describes it correctly. Generated from the formula, not an image.
- Quiz 1: 2⁴ = 16, answer index 2 = "16 times more". Correct; the remark that the field amplitude grows by 4 is right.
- Quiz 2: along the axis, index 0. Correct; sin²45° = 1/2 is right.
- Quiz 3: index 3 (first-order expansion in ωd/c). Correct; the explanation's path difference ≈ d cos θ (so time difference (d/c) cos θ) is right, and the r ≫ λ remark is right.
- Quiz 4: p₀ = m₀/c, index 1. Correct.
- Flashcards: all four correct and consistent with the slides.
- Calcs file: 37 entries, all pass; covers every number on the page and the two sign checks for (22). The `ex-field-amplitude` "where" says μ₀/4π = 10⁻⁷ but the formula uses 1.2566 × 10⁻⁶/4π; harmless.

## Coverage and order
- Slides 1–13 are all covered: definition (1), Liénard–Wiechert recall (2), two-sphere dipole (3), approximations 1–3 (4–5), A (6), E and B (7), Poynting and intensity (8), blue sky (9), polarization (10), total power (11), magnetic dipole (12–13). Slides 14–24 are left to the second page, as the intro says.
- Order: as MIT except total power (slide 11) is placed before the blue sky (slides 9–10); see #1.
- Additions not on the slides: static-field contrast, the "Liénard–Wiechert factor is 1" remark, the bound-electron resonance argument, the polarizing-filter remark, "the loop is neutral, so there is no scalar potential", the magnetic dipole total power (marked as the page's), the size comparison and the worked example. All correct; #2 asks for the resonance argument to be marked.

## Licensing
- Slides 3, 8, 10, 12 (and 14, on the next page) say "All diagrams are from D.J. Griffiths, Introduction to Electrodynamics, 3rd Edition"; each diagram is also labelled "Image by MIT OpenCourseWare". No "All rights reserved" and no "Courtesy of" notice in the notes.
- The page reproduces none of these diagrams. The only figure is a generated 2D polar plot of sin²θ, which is not the 3D doughnut of slide 8. The two-sphere set-up (spheres on the z axis, origin midway, r± and θ) is described in words, but that is the slide's own text and the minimum needed to define the symbols, not a description of the drawing. The polarization paragraph explains the physics (dipole along the line of sight sends nothing) without describing the slide 10 picture (Sun, observer on a globe, arrows). The loop paragraph names the radius b and the xy plane only. No close description of any Griffiths diagram.
- No text copied verbatim beyond short standard phrases ("ideal dipole approximation", "radiation zone", "carry energy off to infinity" paraphrased as "carry energy off to infinity"/"carries energy to infinity", which is the definition itself). The worked example is original (the slides contain no numbers). No OpenStax or LibreTexts material.

## Notes
- Slips attributed: eq. (11) 1/(4πε₀) for μ₀/4π is real (seen on the slide image); eq. (22) minus sign is real and the page's correction is right. Both are reported in brackets, as AGENTS.md rule 4 asks.
- leadsTo 8.962 Lecture 16: in content/year-5/8.962/_course.json Lecture 16 is "Gravitational Radiation I" (17 is "Gravitational Radiation II"), so 16 is the right target. 8.962 has no pages yet, so this stays a plain reference. The reasoning is correct: the second time derivative of the mass dipole moment is the rate of change of total momentum, which is zero, so there is no mass dipole radiation and the leading term is the quadrupole. (The gravitational analogue of magnetic dipole radiation is also absent, by conservation of angular momentum; the page need not say so.)
- leadsTo 8.286 Lecture 17: "Black-Body Radiation and the Early History of the Universe, Part III"; temperature-and-decoupling.mdx has `lecture: 17` and discusses free electrons scattering photons until decoupling. The link in the callout and the leadsTo are consistent.
- Callout facts: free-electron (Thomson) scattering is frequency-independent at low energy, correct; CMB polarization first detected in 2002 (DASI, Kovac et al., Nature 420, 772), correct and before 2013, so no later-development marking needed; since mapped over the whole sky (WMAP, Planck), correct. See #3 for the mechanism wording.
- Prerequisites all exist: lienard-wiechert-point-charge-fields (8.07 L15), potentials-gauges-retarded-solutions (8.07 L15), electromagnetic-plane-waves-reflection (8.07 L14, matching the "Lecture 14 page" link), wave-plates-radiation (8.03 L18), magnetic-multipole-expansion-dipoles (8.07 L10, which does define m = I a, as the page says).
- Symbols: the meanings scoped to this page in data/symbols.json were read (ε₀, λ, μ₀, φ/φ̂, ω, dℓ, z/ẑ, c, x, y, t, d, m, m₀, r, P, A, B, b, q, q₀, S, E, x′, V, J, I, I₀, v_p, r_p, t_r, p₀, r₊, r₋, r±). All fit the page; units correct where given (A in T m, m₀ in A m², I₀ in A, P in W, S in W/m²). Minor: E has no unit on this page although V/m would be clear; the t_r meaning speaks of a source point r′ while eq. (3) uses r_p (both uses occur on the page, so acceptable). content:check reports no missing or unused meanings.

## Resolution (2026-11-18, by the page author)

1. (warning) The introduction now says the total power (slide 11) is moved forward to sit with the intensity, before the blue-sky slides 9 and 10.
2. (warning) The bound-electron resonance argument and "at sunset the light crosses much more air" are moved into a bracket marked as our additions; the slide 9 citations now cover only the ω⁴ factor, the blue sky and the red sunset (blue scattered out of the path).
3. (warning) The CMB sentence now says the light arriving at each electron was a little uneven around it (a quadrupole pattern), and scattering such light leaves a net polarization.
4. (info) The static-field contrast is marked "(Our contrast: …)".
5. (info) The callout now says each electron radiates with the sin² pattern about its motion, and that for unpolarized incoming light the scattered intensity averages to (1 + cos²χ)/2 in the scattering angle χ (new page-scoped meaning for χ).
6. (info) Left as is: the formula shows eq. (3), and (4) only defines the symbols written out on the page.
7. (info) The bracket after eq. (11) now also notes that the slide's typesetting of (13) drops or displaces the π of 4π.
8. (info) "the five slides with diagrams" is now "the four slides here with diagrams".
- Symbols: `E` on this page now has unit V/m (page-scoped meaning shared with larmor-formula-radiation-reaction); `r` has its own meaning without "of the current" (see the companion review).
- Status set to `reviewed`. content:check (0 errors, no warnings for this page), calc:test and build rerun after the changes.
