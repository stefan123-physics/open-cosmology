---
page: content/year-1/8.02/gauss-law.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w02d2-1/ (read: local copy presentati_w02d2-1.pdf, 47 pages, "Class 05"; slide number = "P05 - N" label = PDF page; resource page title "presentati_w02d2.pdf")
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte4gauss_law/ (read: local copy chapte4gauss_law.pdf, 39 pages; printed page = PDF page − 1, checked page by page with pdftotext -f N -l N for printed pp. 1–15)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/1a0af97c8db7221f47634e47e0bb3324_vKLqWj0FRyc.pdf (read: 8.286 Lecture 6 transcript, downloaded to scratch, to check the cosmology callout and leadsTo)
  - content/year-4/8.286/expanding-sphere.mdx (read: the only 8.286 Lecture 6 page, target of the leadsTo); content/year-4/8.286/friedmann-equation.mdx (read: Lecture 7) and newtons-static-universe.mdx (Lecture 5, cites the Lecture 6 slides for Gauss's law of gravity)
  - content/year-1/8.02/continuous-charge-distributions.mdx (read: the line and plane results the page says it reproduces)
  - calcs/8.02/gauss-law.yaml (read; `npm run calc:test -- -k gauss-law`: 7 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Gauss's law

Citation convention checked: `reading1` = Course Notes Chapter 4, printed page numbers (PDF page − 1); `reading2` = Session 5 slides, slide = PDF page. `cite="mit"` is not used. The seven formulas:
- "Flux through a flat surface" (`reading1`, Eq. (4.1.2), p. 1): Φ_E = E⃗ · A⃗ = EA cos θ = E_n A on printed p. 1. Correct.
- "Flux through a closed surface" (`reading1`, Eq. (4.1.4), p. 2): ∯ E⃗ · dA⃗ on printed p. 2. Correct.
- "Gauss's law" (`reading1`, Eq. (4.2.5), p. 4): printed p. 4, with q_enc (the page writes q_in, as the slides do, slides 9, 14, 23). Correct.
- "Field of a uniform ball" (`reading2`, slides 30–31): r > a on slide 30, r < a (Qr/4πε₀a³) on slide 31. Correct.
- "Infinite line of charge" (`reading1`, Eq. (4.2.16), p. 8): printed p. 8. Correct.
- "Infinite plane of charge" (`reading1`, Eq. (4.2.19), p. 10): printed p. 10. Correct.
- "Potential inside a uniform ball" (`reading2`, slide 44): slide 44 gives (1/8πε₀)(Q/R)(3 − r²/R²); the page writes a for R (the slides mix R and a on slides 43–44). Correct.

All in-text page and slide numbers were checked: Section 4.1 pp. 1–2, slides 11–12, 15, 16, 17; point charge Section 4.2 pp. 2–4 and slide 21; slide 22 (S1, S2, S3); solid angle pp. 4–5 (Eqs. 4.2.6–4.2.10) and pp. 5–6 (Eqs. 4.2.11–4.2.14); symmetry table and steps p. 6 (steps run onto p. 7), slides 23–25; Example 4.4 pp. 13–14, "as if all the charges were concentrated at the center" p. 14; Example 4.3 pp. 11–12, jump σ/ε₀ on p. 12; Example 4.1 pp. 7–8 with "agreement with … Eq. (2.10.11)" on p. 8; Example 4.2 pp. 9–10; slides 27–31, 33–35, 36–38, 42–45. All correct except as noted in #1 and #2 below.

No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Gauss's law", "with several charges, inside or outside, the fluxes add (Section 4.2, p. 4; slide 22)" | Notes p. 4 and slide 22 only say that the same result Q/ε₀ holds for any closed surface S1, S2, S3 around one charge; neither mentions several charges, charges outside, or adding fluxes. Notes Eq. (4.2.5) speaks of the "net charge enclosed". | Superposition and outside charges cited to p. 4 / slide 22 | Physics is right. Either cite only the "any closed surface" part to p. 4 / slide 22 and mark the superposition sentence as the page's own explanation, or rephrase: "q_in is the net charge inside (Eq. (4.2.5)); charges outside send as many lines in as out, so they add nothing." |
| 2 | info | "A thin shell", "(Section 4.2, Example 4.3, pp. 11–12; slide 32)" | Slide 32 is only the title "PRS Question: Field Inside Spherical Shell"; the question and answer are not in the slide text. | Cites slide 32 as a source for the shell results | Fine as a pointer; optionally "slide 32 (a concept question)". |
| 3 | info | "A thin shell", "The field jumps by σ/ε₀ across the shell" | Notes p. 11 define σ = Q/4πa² before the jump on p. 12. | σ used without definition in this paragraph | Add "(σ = Q/4πa²)". |
| 4 | info | Paragraph before "Flux through a closed surface": "In general the field varies and the surface curves … (Section 4.1, p. 2; slide 17)" | Slide 17 (Case III) is for any curved surface, with an open integral; the notes switch to closed surfaces on p. 2 before Eq. (4.1.4). | Goes straight from "in general" to the closed-surface integral | Optional: "For a closed surface, the case Gauss's law needs, …" before the formula. |
| 5 | info | "Using Gauss's law", four steps | Notes pp. 6–7 and slide 23 have five steps (the notes: symmetry; direction of E⃗ and surface; regions and q_enc; flux; equate and solve). | Four steps, merged | Fine; content is the same. |
| 6 | info | "Why any surface?", "This only works because Coulomb's law is exactly inverse-square." | Not stated in the notes in these words; it is what Eqs. (4.2.12)–(4.2.14) use. | Stated as fact | Correct physics; no change needed. |
| 7 | warning | Cosmology callout: "In 8.286, Guth uses exactly this to follow a sphere of matter in an expanding universe and derive the Friedmann equation." Also the leadsTo "why": "Gauss's law for gravity is why only the mass inside an expanding sphere pulls on its edge, the key step in deriving the Friedmann equation." | 8.286 Lecture 6 transcript: Guth recalls the Gauss's-law form of Newton's gravity at the start (p. 1) for the static-universe argument; for the expanding sphere he invokes the shell result as "the statement from Newton, that if all the masses are ranged spherically symmetrically … the force due to the mass that's on a shell that's at a larger radius than you are, produces no acceleration for you" (p. 19; also p. 4). Lecture 6 derives ä = −(4π/3)Gρa and the conserved E; the Friedmann equation proper is the Lecture 7 page (`friedmann-equation`). The site's `expanding-sphere` page says "By the shell theorem". | Guth "uses exactly this" (Gauss's law) and derives the Friedmann equation | Physics is right (the shell theorem follows from Gauss's law with spherical symmetry), but the attribution is a little strong. Suggest: "In 8.286 (Lecture 6), Guth reviews Gauss's law for gravity and uses its spherical consequence, Newton's shell theorem, to follow a sphere of matter in an expanding universe: this gives the equation for ä, and in Lecture 7 the Friedmann equation." Similarly in the leadsTo: "…the key step towards the Friedmann equation." |
| 8 | info | Introduction, "It is the physics of the divergence theorem of 18.02" | Session 5 uses only the integral form; the differential form (∇ · E⃗ = ρ/ε₀) is not in Sections 4.1–4.2 or the slides. | Link to 18.02 divergence theorem | Fine as a forward/backward connection; not an MIT claim. |

## Arithmetic and answer checks
- Point charge: Q/(4πε₀r²) × 4πr² = Q/ε₀, independent of r. Correct (calc `sphere-flux`).
- Solid angle: ΔΩ = ΔA/r², tilted ΔA cos θ/r², whole sphere 4πr²/r² = 4π. Correct (notes Eqs. 4.2.6, 4.2.7, 4.2.10). Flux through a patch E·ΔA cos θ = (Q/4πε₀)ΔΩ, so independent of shape and tilt. Correct.
- Uniform ball: q_in = Q r³/a³ inside, E·4πr² = Qr³/(ε₀a³) gives E = Qr/(4πε₀a³). Correct; continuous at r = a with Q/(4πε₀a²).
- Line: E·2πrℓ = λℓ/ε₀ gives λ/(2πε₀r) = 2k_eλ/r, which matches `continuous-charge-distributions` (2k_eλ/y). Correct. Plane: 2EA = σA/ε₀ gives σ/2ε₀, matches the disc limit on that page. Correct.
- Potential inside the ball: −∫_∞^a k_eQ/r² dr − ∫_a^r k_eQr/a³ dr = k_eQ/a − (k_eQ/2a³)(r² − a²) = (k_eQ/2a)(3 − r²/a²) = Q/(8πε₀a)(3 − r²/a²). Correct; equals k_eQ/a at r = a and 3k_eQ/2a at the centre.
- Worked example (a): k_eQ = 8.99 × 10⁹ × 3 × 10⁻⁹ = 26.97 V m. Correct (units N m²/C = V m). At 2 cm: 26.97 × 0.02/1.25 × 10⁻⁴ = 4315.2 ≈ 4.32 × 10³ N/C. Correct. Surface: 26.97/0.0025 = 10 788 ≈ 1.08 × 10⁴ N/C, the maximum. Correct. At 10 cm: 26.97/0.01 = 2697 ≈ 2.70 × 10³ N/C, a quarter of the surface value (radius doubled). Correct.
- Worked example (b): 2 × 8.99 × 10⁹ × 2 × 10⁻⁹/0.1 = 359.6 ≈ 360 N/C. Correct.
- Plot: in units of k_eQ/a² and u = r/a, the ball is u inside and 1/u² outside; the shell is NaN inside (zero, "not drawn" as the caption says) and 1/u² outside. Both peak at 1 at u = 1, so the range [0, 1.1] fits. The caption ("inside the ball E grows as r, inside the shell it is zero (not drawn), and outside both fall as 1/r²") matches the curves. Note (info): for u > 1 the dashed shell curve lies exactly on the ball curve, which the caption implies but does not say; optional: "outside, the two curves coincide".
- Quiz 1: q/ε₀ (index 0). Correct; explanation correct.
- Quiz 2: zero (index 1). Correct; explanation correct (q_in = 0 and E constant on the Gaussian sphere by symmetry).
- Quiz 3: coaxial cylinder (index 1). Correct; explanation correct.
- Flashcards: all three correct (Gauss's law with outward dA⃗; surfaces per symmetry; ball field k_eQr/a³ inside, k_eQ/r² outside).
- `npm run calc:test -- -k gauss-law`: 7 passed. Info: the identity entry is named `inside-potential-centre` but checks the value at r = a (the surface), not the centre; rename it (for example `inside-potential-surface`) or add a centre check (3k_eQ/2a). The ball and shell formulas, the line and plane results and the plot have no formula checks; optional identity entries (E continuous at r = a; the potential integral) would cover them.

## Coverage and order
- Slide order: outline and PRS/recap (1–6); Gauss's law, idea and equation (7–9); flux cases I and II (11–12), PRS (13); closed surfaces and outward dA⃗ (14–16); case III (17); point charge, open and closed surfaces (18–19), PRS (20); sphere around a point charge (21); arbitrary surfaces (22); applying Gauss's law and choosing surfaces (23–25), PRS (26); uniform ball (27–31); PRS shell (32); rod (33–35); plane (36–38); slab PRS and group problem (39–41); potential from E for the ball (42–45); slab potential group problem (46); two concentric shells group problem (47). The page follows this order (the notes' order is rod, plane, shell, ball; the page follows the slides, which is fine).
- Left out (warning, coverage): the group problems on slides 40 and 46 (infinite slab of thickness 2d: E everywhere, and V(x) with V(0) = 0) and slide 47 (two concentric spherical shells with equal and opposite charge: E and V everywhere). They are part of the session's second hour. A short section on the thick slab (E = ρx/ε₀ inside, ρd/ε₀ outside) and a sentence on the shells (E only between them, zero inside and outside) would complete the session; or say that they are left for the problem pages.
- Left out (info): the notes' spherical-coordinate flux integral (Eqs. 4.2.1–4.2.3; the page uses the simpler route of Eq. 4.2.4, also on slide 21), the 2D angle analogy (Eqs. 4.2.8–4.2.9), the plane's field jump (Eq. 4.2.21; mentioned only for the shell, and on the earlier continuous-charge page), the uniform-field example on slide 24 (+EA on top, −EA on bottom, zero on sides), the open-surface point-charge picture (slide 18) and the PRS questions.
- Not covered, correctly: Section 4.3 (conductors) and later, which belong to Session 7.
- Added: the worked example, the plot, the cosmology callout (page's own).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the Chapter 4 text or the Session 5 slide text (grep: no match), nor on either resource page. The only "courtesy" on the course home page is an image credit to John Belcher, not used here.
- No figures reused; the only graph is generated from formulas.
- No paragraphs copied. Short echoes of standard phrasing ("as if all its charge sat at the centre" vs "as if all the charges were concentrated at the center"; "open surface … does not [contain a volume]") are rewritten. Acceptable.
- Worked example is original: own numbers (3 nC ball of 5 cm; 2 nC/m wire at 10 cm); the slides and notes do these geometries only symbolically.
- No OpenStax or LibreTexts material.

## Notes
- Physics: signs (outward dA⃗; flux positive leaving, negative entering), regions (r < a and r > a for ball and shell), the plane's direction ("away from the plane on both sides, for σ > 0") and the solid-angle argument are all right.
- Cosmology callout: "the flux of g⃗ out of a closed surface is −4πG times the mass inside" matches Guth's sign (8.286 Lecture 6 transcript p. 1, "minus 4 pi GM"; `newtons-static-universe` quotes the Lecture 6 slide). The two consequences (pull depends only on the mass inside; it acts as if at the centre) are right; strictly they need only spherical symmetry, not a uniform ball. See #7 for the attribution.
- leadsTo: 8.286 Lecture 6 resolves to `expanding-sphere` (the only Lecture 6 page), which does use "only the mass inside" for each shell. Fine apart from #7's wording.
- No errors found; the verdict is pass-with-notes. The page can be set to `status: reviewed` once #1 and #7 are addressed (and preferably the coverage note on slides 40, 46 and 47).

## Resolution (2026-11-16, by the page author)

- Warning 1: the "several charges, inside or outside" sentence is now marked as the page's own remark; only the any-surface statement is cited to p. 4 and slide 22.
- Warning 2: the callout now says Guth uses the result as Newton's shell theorem, as the first step towards the Friedmann equation; the leadsTo reason mentions the shell theorem and no longer claims the Friedmann derivation.
- Warning 3: the page now says that the slides' group problems (slab, slides 40 and 46; concentric shells, slide 47) are left for the problem pages.
- Info: σ = Q/4πa² defined for the shell and the slide 32 citation dropped; the graph caption says the curves coincide outside; the calcs check is renamed inside-potential-surface. The four-step recipe is kept (MIT's five steps merged).
