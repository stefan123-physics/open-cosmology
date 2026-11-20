---
page: content/year-2/8.03/electromagnetic-waves.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-ii-electromagnetic-waves/lecture-12/ (read, saved HTML)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/resources/mit8_03scf16_lec12/ (read: typed notes, 8 pages plus the OCW terms page; text layer garbled, so all 8 pages were read from rendered images)
  - https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/c43ddf394c37def59e972e74223059b2_8kcvyoHsXrw.pdf (read: transcript, 20 pages, no printed page numbers, so PDF page = page)
  - content/year-4/8.286/black-body-radiation.mdx (read, to check the cosmology callout)
verdict: pass-with-notes
---

# Review: Electromagnetic waves

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Cosmology callout "Light in a box"; `leadsTo` 8.286 L16 `why` | 8.286 L16 (as the site's own black-body page renders it): the field is put in "any big imaginary box, later taken to infinity"; by Fourier's theorem it is a sum of standing-wave modes. Guth does not use conducting walls, and he quotes the energy density without deriving the spectrum (the black-body page's own caption says the per-mode formula is one "Guth refers to but does not write down"). | "Standing electromagnetic waves between conducting walls are **exactly** the modes that 8.286 counts when it **derives** the black-body spectrum"; leadsTo: "the same modes as in the conductor example here". | Soften it: e.g. "8.286 treats the radiation in a box as a sum of standing electromagnetic waves, like the one in front of the conductor here; each standing wave is one mode…". Drop "exactly", "conducting walls" and "derives". |
| 2 | info | "History" paragraph, slip note | Transcript p. 6: Rømer "2 times 10 to the 9"; Bradley "3 times 10 to 9"; then, while turning to Maxwell's prediction: "oh, it should be 3 times 10 to the 8, not to the 9. I was saying 10 to 9." | "Lee corrects the second to $10^8$". | Correct in substance. Whether the correction is meant for Bradley's value or for the 3 × 10⁹ he was about to give for Maxwell's prediction is not clear. "Lee then corrects 3 × 10⁹ to 3 × 10⁸" would be safer. |
| 3 | info | "History": Rømer | Notes p. 3: "1676 Romer: 2.2 × 10⁸ m/s". | Rømer "found $2.2 \times 10^8$ m/s". | Matches the notes. Historically the number was worked out from Rømer's delay by Huygens (1678), not by Rømer. Optional: "Rømer's timing (1676) implies about 2.2 × 10⁸ m/s". Not an error against the source. |
| 4 | info | Paragraph after the Maxwell's equations formula, ending "(transcript, p. 2)" | The monopole joke ("Please tell me now. I want to be the first…") is on transcript p. 1; Maxwell's addition and "you could not see me" are on p. 2. | The whole paragraph is cited to p. 2. | Cite "(transcript, pp. 1–2)". |
| 5 | info | Opening paragraph, "This lecture opens Part II of the course … (transcript, p. 1)" | Transcript p. 1 does not mention Part II. "Part II: Electromagnetic Waves" comes from the OCW course navigation (source.url). | Cites the transcript. | Move the citation to after "electromagnetic wave", or cite the OCW page for "Part II". |
| 6 | info | "Where is the energy?", Poynting vector | Transcript p. 19: Lee says "E0 square, over Mu 0, sine omega t, cosine omega t, …", leaving out the 1/c that the notes (p. 8) include and that his final result on p. 20 contains. | Uses the correct notes form with $\mu_0 c$. | Optional per writing rule 4: a short bracket "(in the lecture the intermediate step is said without the c)". Harmless as it stands. |
| 7 | info | "The wave equation for light" | Transcript p. 4: "we call it Laplace" (for ∇·∇); notes p. 2: "Laplacian operator". | "the Laplacian". | Fine, it follows the notes. No change needed. |
| 8 | info | Parenthetical after the Poynting vector ("Averaged over a half wavelength … $\varepsilon_0E_0^2/4$ at every moment") | Not in the notes or transcript. | Stated in brackets with no marker that it is the page's own addition. | Correct (checked below). Consider adding "(not in the lecture)" so it is not read as Lee's. |

Every formula was checked against its cited page:

- Maxwell's equations and the vacuum form: notes p. 2. Correct.
- Curl of a curl identity: notes p. 2. Correct.
- Wave equation with the explicit ∂²/∂x² + ∂²/∂y² + ∂²/∂z²: notes p. 3. Correct.
- Speed of light, $v_p = c = 1/\sqrt{\mu_0\varepsilon_0} \approx 3\times10^8$ m/s: notes p. 3. Correct.
- Plane wave and the condition ω/k = c: notes p. 5. Correct.
- Magnetic field of the plane wave: notes p. 5. The notes set curl E = −kE₀ sin(kz − ωt) ŷ and the page writes −∂B/∂t = …, which is the same by Faraday's law. Correct.
- B = (1/c) k̂ × E: notes p. 5. Correct.
- General plane wave with φ, r and ω = ck: notes p. 6. Correct.
- Incident and reflected waves: notes p. 7. Correct.
- Standing wave: notes p. 8. Correct.
- U_E and U_B: notes p. 8. Correct.
- Poynting vector: notes p. 8. Correct.

Every "(transcript, p. N)" in the prose was checked against the page-per-line transcript text. All match apart from #4 and #5. Specifically:

- div/curl pp. 2–3
- curl-of-curl derivation p. 4
- nine terms and "no wave without Maxwell" p. 5
- v_p = c pp. 5–6, history p. 6
- B wave equation p. 6, "cannot live without each other" and "the field oscillates" p. 7
- video pp. 7–8, plane wave p. 8, direction pp. 8–9, ω/k p. 9 and "only then" p. 10
- Faraday-not-Ampère pp. 10–11, lessons pp. 12–13, general form pp. 13–14, rotation argument p. 14, "propagates forever" p. 15
- perfect conductor pp. 15–16, E₀cos(−ωt) ≠ 0 and string-wall analogy pp. 16–17, cancellation pp. 17–18, total field p. 18, not in phase pp. 18–19, "don't apply blindly" p. 19, energy at t = 0 p. 19
- Poynting pp. 19–20, oven p. 20

## Arithmetic and answer checks
- `npm run calc:test -- -k electromagnetic-waves`: 14 passed.
- B of the plane wave: ∂E_x/∂z = −kE₀ sin(kz − ωt), so ∂B/∂t = kE₀ sin(kz − ωt) ŷ and B = (k/ω)E₀ cos(kz − ωt) ŷ = (E₀/c) cos(…) ŷ. Correct.
- Notes example: k̂ = (x̂ + ŷ)/√2 and Ê₀ = (−x̂ + ŷ)/√2 give k̂ × Ê₀ = ½(ẑ + ẑ) = ẑ, so B lies along +ẑ. Correct. The page's $\vec E_0 = E_0(-\hat x + \hat y)/\sqrt2$ matches the notes' −(E₀/√2)x̂ + (E₀/√2)ŷ.
- Reflected B: k̂ = −ẑ, so (1/c)(−ẑ) × (−E₀/2 cos(−kz − ωt) x̂) = +(E₀/2c) cos(−kz − ωt) ŷ, as on the page and in the notes.
- Standing wave: (E₀/2)[cos(kz − ωt) − cos(kz + ωt)] = E₀ sin kz sin ωt, and (E₀/2c)[cos(kz − ωt) + cos(kz + ωt)] = (E₀/c) cos kz cos ωt. Correct.
- U_B = B²/2μ₀ = E₀²cos²ωt cos²kz/(2μ₀c²) = (ε₀/2)E₀² cos²ωt cos²kz, using 1/(μ₀c²) = ε₀. Correct.
- S = (1/μ₀)(E₀²/c) sin ωt cos ωt sin kz cos kz = E₀²/(4μ₀c) sin 2ωt sin 2kz ẑ. Correct.
- Averaging over a half wavelength: ⟨sin²kz⟩ = ⟨cos²kz⟩ = ½, so ⟨U_E + U_B⟩ = (ε₀E₀²/4)(sin²ωt + cos²ωt) = ε₀E₀²/4, independent of t. Correct.
- "Quarter period out of phase": E ∝ sin ωt and B ∝ cos ωt. Correct.
- Worked example (original; MIT has nothing similar):
  - (a) 4π × 10⁻⁷ × 8.85 × 10⁻¹² = 1.1121 × 10⁻¹⁷ s²/m² (the units T·m/A × F/m = s²/m² are right), and 1/√ of that = 2.9986 × 10⁸ m/s ≈ 3.00 × 10⁸. Correct.
  - (b) x̂ × ŷ = ẑ, and 30/3.00 × 10⁸ = 1.0 × 10⁻⁷ T. Correct.
  - (c) λ = 3.00 × 10⁸/2.45 × 10⁹ = 0.1224 m, and λ/2 = 6.12 cm ≈ 6.1 cm. Correct. The turntable remark is a fair simplification: a real oven cavity has a 3D mode pattern.
- Quiz:
  - Q1 (answer 1, displacement current): correct, and the explanation is right.
  - Q2 (answer 1, (E₀/c) cos(kz − ωt) ŷ): correct.
  - Q3 (answer 1): correct.
  - Q4 (answer 1): correct; the explanation matches notes p. 8 and transcript p. 19.
- Flashcards: all four are correct.
- Frontmatter summary: the formulas match the body and the notes.

## Coverage and order
- The page follows the transcript's order: recap of the three systems; Maxwell's equations; vacuum; div/curl; the identity and the wave equation; speed and history; the B wave equation; the trillion-fps video; plane wave; ω/k = c; B via Faraday; lessons; general plane wave; propagating forever; perfect conductor; reflected wave; standing wave; energy; Poynting vector; microwave oven. The notes put history after the B equation and div/curl after history. The page follows the lecture instead, which is acceptable.
- Left out (all minor):
  - the spring's speed √(kl/ρ_L) (notes p. 1; the page names the spring but gives no formula);
  - the scalar/vector field definitions with the temperature example and the Lorentz force F = q(E + v × B) (notes p. 3; transcript p. 3);
  - the photo of a bullet through an apple ("how we make applesauce at MIT", transcript p. 7);
  - the plot of E and B along z at x = y = 0 (transcript p. 13; notes p. 6 figure);
  - the explicit E(x, y, z) and B(x, y, z) = (E₀/c) ẑ cos(√2π(x + y)/λ − ωt) of the notes' 45° example (the page gives only the direction of B);
  - Lee's remark that, given B, you can find E the same way (transcript p. 15).
- Added: the averaged-energy parenthetical (#8), the worked example and the cosmology callout.
- The OCW page also lists handwritten notes and Georgi Chapter 8 (§8.3 to end) and Chapter 9 (through §9.2) as readings. The page does not cite them. That is acceptable, since nothing on the page needs them.
- Attributions:
  - The trillion-frames-per-second pulse through a bottle is correctly described as a **video** credited to the MIT Media Lab Camera Culture group (transcript pp. 7–8), not as a live demonstration.
  - There are no simulations or demonstrations in this lecture, and the page claims none.
- The slip note (Rømer/Bradley said as 10⁹) is accurate to transcript p. 6; see #2 for a wording refinement.
- Forward links:
  - `leadsTo` 8.03 L13: the syllabus title "Dispersive Medium, Phase Velocity, Group Velocity" matches the `why`.
  - `leadsTo` 8.286 L16: the black-body page is Lecture 16, but see #1 for the wording.
  - Prerequisite slugs `sound-waves` (8.03) and `maxwell-equations-and-em-waves` (8.02 L28) exist, and so does the inline link target `travelling-waves-reflection`.

## Licensing
- No "All rights reserved" or "Courtesy of" notices were found in the notes text, the transcript text or the OCW page (grep, plus a visual check of all 8 note pages). The notes end with the standard OCW terms page.
- No figures from the notes are reproduced. The hand-drawn field plots, the divergence and curl sketches and the conductor drawings are not used.
- No passages are copied verbatim. Lee's jokes (monopole, "you could not see me", the concert conductor, "very busy") are paraphrased in short phrases.
- The video is described and credited in words, not embedded.
- No OpenStax or LibreTexts material.

## Notes
- No errors were found. All formulas, numbers and quiz answers check out. The one substantive point is the overstated cosmology callout (#1).
- #2 is marked uncertain: the transcript does not make clear which value Lee's "should be 10 to the 8" correction refers to.
- The notes' Stokes's theorem on p. 4 contains a typo (∮ A × dl instead of A · dl). The page does not reproduce the formula, so nothing needs fixing.

## Resolution (2026-11-16, by the page author)

1. The cosmology callout and the 8.286 `why` no longer say "exactly", "conducting walls" or "derives": they speak of counting standing waves in an imaginary box.
2. The slip note now says Lee corrects 3 × 10⁹ to 3 × 10⁸.
3. Added that Huygens first turned Rømer's delay into a speed; the notes credit Rømer.
4. Monopole paragraph cited to transcript pp. 1–2.
5. "Part II" now marked as from the course site.
6. Added a bracket that Lee first states the Poynting vector without the 1/c.
7. No change needed.
8. The averaged-energy remark is now marked "Not in the lecture".
Small omissions: not changed.
