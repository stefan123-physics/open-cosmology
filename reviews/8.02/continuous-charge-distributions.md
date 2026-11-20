---
page: content/year-1/8.02/continuous-charge-distributions.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w01d2-1/ (read: local copy p2.pdf / p2.txt, Session 2 slides; slide number = "P02 - N" label = PDF page; this is both `source.url` and `reading2`; slides 24–41 in scope, 1–23 belong to the electric-dipoles page)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap2coulomb_law/ (read: local copy ch2.pdf / ch2.txt, Course Notes Chapter 2 "Coulomb's Law"; printed page = PDF page − 1, checked page by page with pdftotext -f 15 -l 26 for Sections 2.9–2.11, and pp. 26–27 for Section 2.12)
  - content/year-4/8.286/_course.json (read: lecture 6 = "The Dynamics of Homogeneous Expansion, Part II") and content/year-4/8.286/expanding-sphere.mdx (read: the Lecture 6 page)
  - calcs/8.02/continuous-charge-distributions.yaml (read; `npm run calc:test -- -k continuous-charge`: 6 passed)
  - `npm run content:check`: 0 errors; the only warning on this page is the missing review file
verdict: pass-with-notes
---

# Review: Electric fields of continuous charge distributions

Citation convention checked: `reading1` = Course Notes Chapter 2 (printed page numbers), `reading2` = Session 2 slides (P02 numbers). `source.url` and `reading2` are the same URL, as for the other 8.02 pages.

Course notes page map (printed pages): p. 15 = end of 2.8 (Eq. 2.8.9, comb and paper), 2.9 starts, 2.9.1, Eq. 2.9.1; p. 16 = Eq. 2.9.2, mass density Eq. 2.9.3, 2.9.2 (Eqs. 2.9.4–2.9.5), 2.9.3 (Eqs. 2.9.6–2.9.7); p. 17 = "densities become uniform", 2.10 starts, Eqs. 2.10.1–2.10.2, "vector integral … one for each component", Example 2.2 begins (λ = Q/ℓ, dq = λ dx); p. 18 = Eqs. 2.10.3–2.10.4, Example 2.3 begins; p. 19 = Eqs. 2.10.5–2.10.9 (x = y tan θ); p. 20 = Eqs. 2.10.10–2.10.11 (limits), Example 2.4 begins; p. 21 = Eqs. 2.10.12–2.10.14; p. 22 = "field at the center of the ring vanishes", Example 2.5 (Eqs. 2.10.15–2.10.16); p. 23 = Eqs. 2.10.17–2.10.20 (two-case disc formula, Taylor expansion, point-charge limit, infinite plane); p. 24 = Eq. 2.10.21 (jump σ/ε₀), 2.11 Summary; pp. 25–27 = summary end, 2.12 Problem-Solving Strategies (six-step recipe and table for line, ring, disc).

Slide map (24–41): 24 title; 25 break the distribution into parts, Q = Σqᵢ → ∫dq, dE = k_e dq r̂/r², superposition; 26 densities ρ, σ, λ with dQ = ρ dV etc. and ρ = Q/V, σ = Q/A, λ = Q/L; 27–30 visualization links (line and ring integration and fields); 31 ring example (P on axis at x, radius a); 32 "1) Think about it: E⊥ = 0, symmetry; 2) Define variables"; 33 "3) Write equation" (dE_x two ways); 34 "4) Integrate", "everything except dq is constant"; 35 "5) Clean up", E_x = k_eQx/(a² + x²)^(3/2), "6) Check limit a → 0" gives k_eQ/x²; 36–37 in-class line of charge (perpendicular bisector, distance s); 38 E = k_eQ/(s(s² + L²/4)^(1/2)) ĵ with limits s ≫ L (point charge) and s ≪ L (2k_eλ/s); 39 in-class disc; 40 disc formula and its two limits (point charge; σ/2ε₀ for x ≪ R); 41 "E for plane is constant????": dipole 1/r³, point 1/r², line 1/r, plane constant.

All six formulas are at the cited place and are correct: Eqs. (2.9.1)–(2.9.2) pp. 15–16; Eqs. (2.10.1)–(2.10.2) p. 17; Eq. (2.10.3) p. 18 (page gives the magnitude; MIT's vector is −î with P at the origin and the rod on +x); Eq. (2.10.9) p. 19 (MIT writes (2λ/y) sin θ with sin θ = (ℓ/2)/√(y² + (ℓ/2)²), which equals the page's λℓ/(y√(y² + (ℓ/2)²))); Eq. (2.10.14) p. 21; Eq. (2.10.17) p. 23 (z > 0 branch, which the page states). Every prose page/section/slide reference was checked against the maps above and is correct, with the qualifications below. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "A charged disc and an infinite plane", last sentences | Eq. (2.10.20) p. 23: E = +(σ/2ε₀) k̂ for z > 0 and −(σ/2ε₀) k̂ for z < 0, i.e. away from the sheet on both sides when σ > 0. | "the field of an infinite plane, pointing away from it on both sides" (no sign condition; the worked example does add "if σ > 0"). | Add "(for σ > 0; towards it for σ < 0)". |
| 2 | info | Order of sections | Slides: integral (25) → densities (26) → ring (31–35) → line on its bisector (36–38) → disc (39–40) → fall-off (41). Notes: densities (2.9) → integral (2.10) → rod on axis → rod on bisector → ring → disc. | Follows the notes' order; the rod comes before the ring, while the recipe paragraph cites the ring slides 32–35. | Fine (it is MIT's order in the notes). Optionally say "following the course notes" once, or note that the recipe steps are illustrated on the slides with the ring. |
| 3 | info | "The field as an integral", recipe | Slides 32–35 have six steps: think about it (symmetry), define variables, write equation, integrate, clean up, check limit. Notes Section 2.12 (pp. 25–27) give their own six-step recipe and a table applying it to the line, ring and disc. | Five steps (omits "clean up"); cites only the slides. | Optional: add Section 2.12, pp. 25–27 to the citation; "clean up" can stay out. |
| 4 | info | "A ring of charge", far limit | Notes p. 22 state only that the field vanishes at the centre; the far limit k_eQ/x² is on slide 35 (as the limit a → 0 rather than z ≫ R, the same thing). | "zero at the centre … close to k_eQ/z² far away (p. 22; slide 35)" | Correct as cited; no change needed. |
| 5 | info | "A charged rod", along its axis | Notes Example 2.2 assume a positive charge, so the field at P points away from the rod (−î in their coordinates). | "Every piece pushes P the same way" | Fine; optionally "(away from the rod, for Q > 0)". |
| 6 | info | Charge densities paragraph | Notes p. 17 say only that the densities "become uniform"; the explicit ρ = Q/V, σ = Q/A, λ = Q/L are on slide 26. | "(p. 17; slide 26)" | Correct as cited. |

## Arithmetic and answer checks
- Worked example (a): d/dz [z(R² + z²)^(−3/2)] = (R² + z²)^(−5/2)(R² − 2z²) = 0 ⇔ R² + z² = 3z² ⇔ z = R/√2 = 0.07071 m. Correct.
- R² + z² = 0.01 + 0.005 = 0.015 m². 0.015^(3/2) = 1.8371 × 10⁻³. Numerator 8.99 × 10⁹ × 5 × 10⁻⁹ × 0.07071 = 3.1785. E = 1730 N/C ≈ 1.73 × 10³ N/C. Cross-check with E_max = 2k_eQ/(3√3 R²) = 89.9/0.05196 = 1730 N/C. Correct.
- Worked example (b): 10⁻⁶/(2 × 8.854 × 10⁻¹²) = 5.647 × 10⁴ N/C ≈ 5.65 × 10⁴ N/C. Correct. (k_e = 8.99 × 10⁹ and ε₀ = 8.854 × 10⁻¹² are consistent: 1/(4πε₀) = 8.988 × 10⁹.)
- Plot: ring curve 2.6 u/(1 + u²)^(3/2) peaks at u = 1/√2 with value 2.6 × 0.3849 = 1.0008, so "near 1" is right (the exact factor would be 3√3/2 ≈ 2.598; optional). Disc curve 1 − u/√(u² + 1) is Eq. (2.10.17) divided by σ/2ε₀: 1 at u = 0⁺, decreasing. Range [0, 1.05] contains both. Caption statements (ring zero at centre, peak at z = R/√2, disc largest at the surface) all correct.
- All six numbers are in calcs/8.02/continuous-charge-distributions.yaml and pass (`npm run calc:test -- -k continuous-charge`: 6 passed).
- Worked example is original: MIT's examples derive the fields symbolically; neither the notes (Examples 2.2–2.5, Solved Problems 2.13, Problems 2.15) nor the slides compute the position or size of the ring field's maximum or a numerical sheet field.
- Quiz 1: answer 1 (Q/L). Correct (notes p. 16–17; slide 26).
- Quiz 2: answer 1 (zero). Correct (notes p. 22; Eq. 2.10.14 at z = 0).
- Quiz 3: answer 2 (constant σ/2ε₀). Correct (Eq. 2.10.20, p. 23; slide 40).
- Flashcards: densities and units (Eqs. 2.9.1, 2.9.4, 2.9.6); ring field, zero at centre and k_eQ/z² far away (Eq. 2.10.14; slide 35); fall-off list (slide 41). All correct.
- Other in-text results checked: rod far limit Q/(4πε₀x₀²) (Eq. 2.10.4); bisector limits Q/(4πε₀y²) and 2λ/(4πε₀y) (Eqs. 2.10.10–2.10.11; slide 38); disc far limit Q/(4πε₀z²) (Eq. 2.10.19); jump σ/ε₀ (Eq. 2.10.21, p. 24). All correct.

## Coverage and order
- Covered: slides 24–26 and 31–41; Sections 2.9.1–2.9.3 and all four examples of Section 2.10 (2.2 rod on axis, 2.3 bisector, 2.4 ring, 2.5 disc/plane), including both limits of each and the discontinuity across the plane.
- Left out (all optional): slides 27–30 (visualization links, no content in the PDF); the mass-density integral Eq. (2.9.3) is mentioned in words only; the z < 0 branch of Eq. (2.10.17) (the page restricts to z > 0 and then states the field on both sides of the plane, which is enough); notes Section 2.12 (problem-solving recipe and table, see finding 3), Solved Problems 2.13 and Sections 2.14–2.15 are on neither 8.02 Session 2 page (the task scoped this page to 2.9–2.10, so this is noted, not a finding). The notes' remark that the infinite-line result will be rederived with Gauss's law in Chapter 4 (p. 20) is not mentioned; could be one clause.
- Order: see finding 2.

## Licensing
- `grep -il "rights reserved\|courtesy"` on ch2.txt and p2.txt: no match. The page reuses no MIT figure; its only graph is generated from Eqs. (2.10.14) and (2.10.17).
- No verbatim copying found. Closest phrasing: "This is a vector integral, one integral for each component" (notes p. 17: "an example of a vector integral which consists of three separate integrations, one for each component"); short and standard, acceptable.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: gravity's inverse-square law means the same superposition integrals give gravitational fields (with attraction instead of repulsion), and the field of a uniform ball acts at its surface as if its mass sat at the centre (Newton's shell theorem). The 8.286 Lecture 6 page (expanding-sphere.mdx) indeed uses the shell theorem ("a shell feels only the mass inside it") to get the equation of motion r̈ = −GM(rᵢ)/r² and from it the deceleration of a uniformly expanding sphere. The claim and attribution are fair. Small nuance: Guth applies the result to every shell (each is the surface of the ball inside it), and the Lecture 6 page quotes the shell theorem rather than deriving it by superposition, so "the same superposition … gives" in `leadsTo.why` is accurate in principle but describes the derivation behind the theorem, not what the lecture does. Whether Guth credits Newton by name in Lecture 6 was not checked against the transcript (uncertain; the historical attribution itself is correct).
- leadsTo 8.286 Lecture 6: `_course.json` lists it as "The Dynamics of Homogeneous Expansion, Part II", and expanding-sphere.mdx exists with `lecture: 6`, so the link resolves. Correct.
- Notation: the page uses ℓ (notes) where the slides use L, and z, R (notes) where the ring slides use x, a; consistent within the page. k_e and 1/(4πε₀) are mixed, as in MIT.
- Prerequisites electric-dipoles and double-integrals both exist. Internal link /courses/8-02/electric-dipoles matches the course slug.
- Verdict pass-with-notes: no errors; finding 1 (unqualified sign for the plane field) should be fixed before `status: reviewed`; the rest are optional.

## Resolution (2026-11-16, by the page author)

- Warning 1: the infinite-plane sentence now says "(for σ > 0)".
- Info 2 and 3: the recipe paragraph now says the slides work it through the ring example below, and includes the "clean up" step. The page keeps the course notes' order.
- Other info notes: no change (the page is correct as cited; the graph scale 2.6 is kept, its peak being 1.0008).
