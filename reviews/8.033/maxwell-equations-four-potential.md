---
page: content/year-2/8.033/maxwell-equations-four-potential.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture15_em2/ (read: local copy of the 19-slide PDF, deck titled "MIT Course 8.033, Fall 2006, Lecture 15"; text via pdftotext, which only extracts the PowerPoint overlay text, so every slide was viewed as an image at 90 dpi and slide 10 at 150 dpi. No transcript exists.)
  - content/year-2/8.033/_course.json (read, to check the session numbering: Lecture 11 = Quiz 1, so deck "Lecture 15" = site Lecture 16)
verdict: pass-with-notes
---

# Review: Maxwell's equations, the 4-potential and the field of a moving charge

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "Gauge freedom and the result", Formula at slide 10 and the bracket after it | Slide 10: A → A + ∇ψ and φ → φ + ∂ψ/c∂t; Lorentz gauge ∇·A − (1/c)φ̇ = 0 (eq. 11); □𝔸 = −(4π/c)𝕁 | φ → φ − (1/c)∂ψ/∂t; ∇·A + (1/c)φ̇ = 0; □A₄ = +(4π/c)J₄, with a bracket naming the slide's versions | **Verified: the page is right, and it says so openly.** With slide 8's E = −∇φ − (1/c)Ȧ, the change A → A + ∇ψ alters E by −(1/c)∇ψ̇, so φ has to change by −(1/c)ψ̇. Gauss's law gives −∇²φ − (1/c)∂ₜ(∇·A) = 4πρ. With the page's gauge this becomes □φ = 4πρ (□ as on slide 9), and the static limit is Poisson's equation ∇²φ = −4πρ. With the slide's gauge it becomes −∇²φ − φ̈/c² = 4πρ, which is not a wave equation. The Ampère–Maxwell law gives ∇(∇·A + φ̇/c) + □A = (4π/c)J, so □A = +(4π/c)J. The page's correction holds. Nothing to fix. Optional: add that with the slide's gauge condition the equations do not even reduce to a wave equation. That is a stronger reason than the sign alone. |
| 2 | info | Same bracket, and the sentence on slide 12 | Slide 12 (the index-notation synopsis) also has □A_μ = −(4π/c)J_μ and A_{μ,μ} = 0 | Mentions slide 12 only as "a five-line synopsis" | Slide 12's minus sign is correct in its own convention: in Pauli's x₄ = ict notation (or mostly-plus signature) □ = ∂_μ∂_μ = ∇² − ∂²/c²∂t², and there A_{μ,μ} = 0 is ∇·A + φ̇/c = 0, the page's condition. A reader who compares slides 10 and 12 may be confused, so one clause would help: "slide 12's minus sign belongs to the opposite sign convention for □". (Uncertain: my reading is that slide 10 took its signs from that notation. The slides do not say so.) |
| 3 | info | Gauge freedom sentence | Slide 10: "for any scalar field ψ satisfying the wave equation" | "adding ∇ψ … leaves E and B unchanged" (for any ψ) | The page is physically correct: any ψ leaves E and B unchanged, and the wave-equation condition only preserves the Lorentz gauge. The difference is not stated, though. Optional: add a short note. |
| 4 | warning | Cosmology callout | Not on the slides | "The relativistic form of the theory guarantees that this radiation looks the same, black-body with a lower temperature, to every observer." | This is imprecise. An observer moving through the CMB sees a black-body spectrum in every direction, but its temperature depends on direction, T(θ) = T₀/(γ(1 − β cos θ)) (the dipole): hotter ahead, not uniformly lower. The lower temperature in time comes from the expansion, not from a change of frame. Suggest: "…guarantees that a moving observer still sees black-body radiation in every direction, only with a temperature that varies with direction (the CMB dipole), while the expansion lowers the temperature over time." |
| 5 | info | Section "Invariants and Einstein's puzzle" | Slide 13 (Einstein's puzzle) comes before slide 15 (invariants) | Invariants first, then the puzzle | Swap the two paragraphs, or keep the order and note it. Minor. |
| 6 | info | Einstein's puzzle paragraph | Slide 13 is only the question "What about Einstein's puzzle?" | Gives its own answer, marked "(The page's own summary: …)" | The answer is correct: Einstein's 1905 paper opens with the magnet and conductor asymmetry. It is marked as not from the slides, which is good. The phrase "The page's own summary" reads oddly; "(Not on the slides: …)" would be clearer. |
| 7 | info | Formula citations | Maxwell's equations are numbered (5)–(8) on slide 6, potentials (9)–(10) on slide 8, the gauge condition (11) on slide 10 | `at="slide 6"`, `"slide 8"`, `"slide 10"` | Correct as they are. Optional: add the equation numbers (for example `at="slide 6, eqs. (5)–(8)"`). The moving-charge formula is on slide 17 (and again on slide 18). Correct. |
| 8 | warning | Several sentences (see Licensing) | Slide wording | Close paraphrase in places | Rewrite more freely (see the list under Licensing). |

All formulas checked against the slide images:
- Slide 6: Maxwell's equations in Gaussian units. Match.
- Slide 8: E = −∇φ − (1/c)Ȧ, B = ∇×A and 𝔸 = (A_x, A_y, A_z, φ). Match.
- Slide 9: □ = (∂/c∂t)² − ∇² and □ψ = 0. Match, including the claim of Lorentz invariance.
- Slide 15: E² − B² and E·B invariant. Match.
- Slide 17: E′ = γq r′ / (γ²x′² + y′² + z′²)^{3/2}. Match.
- Slide 19: F = (2/3)(q²/c³)ȧ, ȧ = ωa, ω = (3/2)c³m/q² ≈ (6.266×10⁻²⁴ s)⁻¹. Match.
- Slide 10: differs on purpose and with a note, verified as row 1.

## Arithmetic and answer checks
- Abraham–Lorentz time, recomputed:
  - In Gaussian units, τ = 2e²/(3mₑc³) = 6.2664×10⁻²⁴ s, which matches the slide's 6.266×10⁻²⁴ s.
  - In SI with exact CODATA constants, τ = 6.2664×10⁻²⁴ s.
  - With the page's rounded constants, τ = 6.2650×10⁻²⁴ s, which gives the page's "≈ 6.3×10⁻²⁴ s".
  - Doubling time: τ ln 2 = 4.34×10⁻²⁴ s, the page's "≈ 4.3×10⁻²⁴ s". Correct.
  - The slide's "around 10⁻²³ seconds" is an order of magnitude, and the page says this. Correct.
- Calcs file entries:
  - `abraham-lorentz-time`: 6.265 vs 6.3, difference 0.035 within the tolerance of 0.05. Passes.
  - `doubling-time`: 4.3425 vs 4.3, difference 0.0425 within the tolerance of 0.05. Passes, but narrowly. Consider `expected: '4.34e-24'` with a tighter tolerance.
  - `slide-time`: 6.26642 vs 6.266, difference 0.00042 within the tolerance of 0.0005. Passes.
  - The `invariant-check` identity (transverse E_y, B_z under a boost along x, using the slide 2/15 transformation rules) is correct.
  - `moving-field-ahead` is correct.
- Worked example (a): ahead (y′ = z′ = 0), γqx′/(γ²x′²)^{3/2} = q/(γ²x′²), a factor 1/100 for γ = 10. To the side (x′ = 0), the field is γq/y′², a factor 10. Correct. This is the same calculation as quiz question 1; see Notes.
- Quiz 1: the answer "Ahead 1/100 as strong, to the side 10 times stronger" is correct. The explanation writes the formula with unprimed x, y, z while the page uses primes. This is harmless, but use primes for consistency.
- Quiz 2: E² − B² = 9 − 0 = 9 > 0 in every frame. A purely magnetic field would give −B² ≤ 0, so it is impossible. Answer index 2 is correct.
- Quiz 3: "□A = (4π/c)J" (index 1) is correct with the page's (verified) sign. It differs from slide 10, as the page explains.
- Quiz 4: index 2 is correct. ȧ = ωa gives a ∝ e^{ωt}, and "about 10⁻²³ s" quotes the slide.
- Flashcards: all four agree with slides 6, 8, 15 and 17. "Points away from the charge's present position" is correct for uniform motion (slide 17, Conclusion 2).
- Static limit claim □φ = 4πρ ⇒ ∇²φ = −4πρ (Poisson): correct.

## Coverage and order
- Slides 1–3 (title, last-lecture summary, topics): covered in the opening paragraph and §1.
- Slide 4 (the two halves of a theory, with the analogy to gravity and general relativity): the two halves are covered. The gravity/general relativity analogy is left out (info). The slide's own wording appears to swap "former" and "latter": geodesic motion is "how fields affect matter". This is irrelevant to the page because the page omits it.
- Slide 5 (the 4-current and the proper charge density): mentioned briefly. "Proper charge density" is not named (info).
- Slides 6–10: covered in order.
- Slide 11 (Maxwell's original notation) and slide 12 (index synopsis): covered in words, in reverse order (slide 12, then 11). This is trivial.
- Slide 13 (Einstein's puzzle) and slide 15 (invariants): covered, in swapped order (row 5). Slide 14 repeats slide 2. Nothing is lost.
- Slides 16–17 (retarded positions, field of a moving charge): covered.
- Slide 18 (key equations summary): its content is covered.
- Slide 19 (Abraham–Lorentz): covered. Omitted: the velocity solution u = u₀ + a₀e^{ωt}/ω and the remark about runaway to γ → ∞ (info).
- Additions not on the slides: the answer to Einstein's puzzle (marked as such), the □φ = 4πρ check, the cosmology callout and the worked example (b) in SI units.

## Licensing
- Slide 1's portrait of Maxwell ("Image courtesy of Wikipedia") is not reused. Correct.
- Slide 11 is a page reproduced from another publisher ("copyright © (2000) by AW-Verlag"). The page only describes it in words ("how differently Maxwell himself wrote the equations") and reproduces none of it. Correct.
- No OpenStax or LibreTexts material. No em dashes in the page (count 0).
- Wording close to the slides (warning, row 8). None of these is a long verbatim copy, but several follow the slide sentence by sentence:
  - §1, slide 8: "A vector field with no curl is the gradient of a scalar field, and one with no divergence is the curl of a vector field. So the last two equations allow us to write", and the proof "∇·B = 0 gives B = ∇×A, after which the fourth equation says …". This follows slide 8 closely. The mathematics is standard, but rephrase the sentence structure.
  - §1, slide 7: "shown to admire the theory's elegance, which only appears in 4-vector notation" (slide: "so that you can admire the full elegance … which only becomes manifest in relativistic 4-vector notation").
  - §3, slide 17 Conclusion 2: "which is remarkable: the field can only spread at the speed of light, so what we feel now was caused when the charge was elsewhere … once the charge accelerates it no longer does".
  - §4, slide 19: "As beautiful as it is, classical electromagnetism has a lethal flaw, resolved only by quantum mechanics" (slide: "as beautiful as it is, this whole theory has a lethal flaw (resolved by quantum mechanics)").
  - §4, slide 19: "which depends on the rate of change of the acceleration, the third derivative of position".
  - §4, slide 19: "the electron would, on its own, accelerate ever faster, its speed doubling on a timescale of about 10⁻²³ s, in stark contrast to what we observe" (slide: "the electron will all on its own increase its velocity exponentially, doubling on a timescale around 10⁻²³ seconds, in stark contrast to what we actually observe!").

## Notes
- Forward links:
  - leadsTo 8.033 Lecture 17 matches the syllabus (lecture16_gr, "The Equivalence Principle and General Relativity").
  - leadsTo 8.286 Lecture 16 is "Black-Body Radiation … Part II", and `black-body-radiation` is a Lecture 16 page. Fair.
  - In the callout, "energy density falls as the fourth power of the expansion" (ρ ∝ a⁻⁴) is correct. The sentence about every observer needs the fix in row 4.
- The lecture-number note ("in which the first quiz took one") is consistent with `_course.json` (Lecture 11 = Quiz 1).
- The worked example (a) repeats quiz question 1 with the same γ = 10. Consider other numbers in one of them (for example γ = 3 in the example) so the quiz tests rather than repeats.
- Not checked: `npm run content:check`, symbols entries and rendering.

## Resolution (2026-11-16, by the page author)

- Warning (callout): now says a moving observer sees a direction-dependent black-body temperature T₀/(γ(1 − β cos θ)), the CMB dipole, and that the fall over cosmic time comes from the expansion.
- Warning (close paraphrase): the six passages from slides 7, 8, 17 and 19 are rewritten.
- Info: the slide's condition that ψ obey the wave equation is mentioned; slide 12's opposite sign convention for □ is noted; calcs `doubling-time` tolerance widened slightly (the page shows 4.3 × 10⁻²⁴ s).
