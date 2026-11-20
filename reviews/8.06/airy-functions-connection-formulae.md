---
page: content/year-3/8.06/airy-functions-connection-formulae.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l8-1/ (resource page not re-fetched; the four segment transcripts below were read)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/fae624d468be0e1600498e080e58d6da_bD0CFnI9eug.pdf (read: L8.1 transcript, 5 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/b9ed3c2166557b25bdf0ba9824eb847a_qaj4u42XZLg.pdf (read: L8.2 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/18fca5e14b465d9d5918c9a4707e5cc9_lw5ka_lJFkU.pdf (read: L8.3 transcript, 5 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/05dd67e134ac40717fe7999c39b499fb_BiLtNbncW8o.pdf (read: L8.4 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-3-semiclassical-approximation/ (read: chapter 3 PDF; pp. 12-21 as text, pp. 12-20 also rendered as images to read the equations exactly)
verdict: pass-with-notes
---

# Review: Airy functions and the derivation of the connection formulae

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Deriving the connection formulae", formula "The general connection", `at="eqs. (3.4.33)–(3.4.44)"` | Notes (3.4.33)-(3.4.43) use different constants: A, B, C, D are first rescaled by η^½/√π (p. 15), and C, D are the coefficients of e^{±i∫k} (3.4.12), giving C = ½e^{−iπ/4}(2A + iB), D = ½e^{iπ/4}(2A − iB) (3.4.42)-(3.4.43). Only the boxed (3.4.44) is the page's formula. The page's C = 2A, D = −B (cos/sin coefficients) is the transcript's route (L8.3 pp. 4-5, L8.4 p. 1) | Cites the whole range (3.4.33)-(3.4.44) next to a derivation whose C and D mean something else | Cite `at="eq. (3.4.44)"` (or cite reading3/reading4 for the matching and reading5 eq. (3.4.44) for the result). Optionally add a bracket: "(the notes reach the same result with exponentials instead of cos and sin)". |
| 2 | warning | "Tunnelling through a barrier" | Notes §3.5 (pp. 17-21) has three parts: the derivation (3.5.1)-(3.5.11); a worked example, the rectangular barrier compared with the exact result, which fixes the prefactor 16(E/V₀)(1 − E/V₀) (3.5.12)-(3.5.20); and lifetimes of a temporarily trapped particle, τ = 1/B = t/T with t = 2m∫_a^b dx/p (3.5.21)-(3.5.27) | Only the derivation and (3.5.10)-(3.5.11); the page does not say the rest is left out | Either add a short paragraph on lifetimes (τ ≈ t/T) and mention the notes' prefactor (which also improves the worked example, see the next row), or say in the intro bracket that only the tunnelling formula from §3.5 is used. As far as I can tell, no other 8.06 page covers this material. |
| 3 | info | Worked example (b), last bracket | Notes (3.5.20): for a rectangular barrier T ≃ 16(E/V₀)(1 − E/V₀) e^{−2κ·width} when z₀ ≫ 1 | "its exponent is right, its prefactor is not" | Correct, but here the prefactor is 16 × ½ × ½ = 4, so T is about four times the WKB value (exact formula (3.5.18): T = 0.0236 for 0.5 nm against 6.0 × 10⁻³). One sentence would make "rough guide" concrete. Also z₀ = 1.8 for the 0.5 nm barrier, so (3.5.20) is only approximate there. Optional; a new number needs a calcs entry. |
| 4 | info | "Why the arrows", formula "Rule for the connection formulae", `at="eq. (3.4.47)"` | (3.4.47) is the boxed sentence "We can connect away from a decaying exponential and into a growing exponential." The "decaying → oscillation, oscillation → growing" form is the unnumbered summary just after (3.4.44) (p. 16) | Formula in the arrow form, cited to (3.4.47) | Fine as it is; for precision cite "text after eq. (3.4.44); eq. (3.4.47)". |
| 5 | info | "Airy's equation and its solutions", "With Γ the real axis and C = 1/2π" | L8.2 p. 1 says "the constant c equal to 1", and p. 2 writes the integral as ∫dk/2π, so the lecture puts the 1/2π into the measure | C = 1/2π | The page is correct (Ai(u) = (1/2π)∫e^{i(k³/3+ku)}dk). No change needed; a bracket is optional. |
| 6 | info | Callout "Tunnelling out of a false vacuum", second sentence | `content/year-4/8.286/false-vacuum.mdx` (Lecture 23) says the false vacuum tunnels, as worked out by Sidney Coleman and collaborators, in small regions that grow as bubbles; it gives no decay-rate formula | "Its decay rate is set by an exponential of a barrier integral, the field-theory cousin of exp(−2∫κ dx)." | The physics is right (Coleman's Γ ∝ e^{−B}), but neither 8.286 nor this lecture states it. Attribute it ("as Coleman showed, …"), since the 8.286 page already names Coleman. The rest of the callout (classically stable, bubbles, collisions leading to an extremely inhomogeneous universe, model replaced) matches false-vacuum.mdx. |
| 7 | info | Notation in example (b) | (none) | "$\hbar\kappa c$" | Write `\hbar c\,\kappa` (the usual order); cosmetic. |

No sign errors found. In particular, the left-forbidden formulae match notes (3.4.45)-(3.4.46) exactly, including the minus sign on the growing exponential and the direction of the arrows. An independent Airy-function check agrees: with u = −η(x − b), Bi gives sin(∫_b^x k − π/4)/√k ↔ −e^{∫_x^b κ}/√κ, and Ai gives e^{−∫_x^b κ}/√κ → 2cos(∫_b^x k − π/4)/√k.

## Arithmetic and answer checks
- Airy integrals in real form (L8.2 p. 1): checked numerically at u = 0.5. (1/π)∫₀^∞cos(k³/3 + ku)dk = 0.231694 against scipy Ai(0.5) = 0.231694; (1/π)∫₀^∞[e^{−k³/3+ku} + sin(k³/3 + ku)]dk = 0.854277 against Bi(0.5) = 0.854277. Correct.
- Decaying sectors: Im(k³) > 0 for arg k ∈ (0, π/3), plus the same sector rotated by 2π/3 and 4π/3. Correct (L8.1 pp. 2-3). The page does not repeat the transcript's "30 degrees" slip on p. 3.
- Stationary phase: φ′ = k² + u = 0 gives k = ±i√u for u > 0; φ(i√u) = −iu^{3/2}/3 + iu^{3/2} = (2/3)iu^{3/2}; the quadratic term i√u k̃² gives a Gaussian of width u^{−1/4}; (1/2π)·√π·u^{−1/4}e^{−ξ} = (1/(2√π))u^{−1/4}e^{−ξ}. Correct (L8.2 pp. 2-3).
- Asymptotic forms (3.4.21)-(3.4.23): match the notes exactly, with the ½ only on the decaying branch of Ai. Checked numerically: at u = 3, Ai = 0.006591 against the asymptotic form 0.006709, and Bi = 14.04 against 13.70; at u = −6, Ai = −0.3291 against −0.3303, and Bi = −0.1467 against −0.1444 (with the minus sign before the sine). Correct.
- Scaled coordinate (3.4.18): u = (2mg/ħ²)^{1/3}(x − a). Correct. κ² = η²u and k² = η²|u| (3.4.26)-(3.4.27); ∫κ = ∫k = ξ (3.4.30)-(3.4.31); 1/√κ = η^{−½}|u|^{−¼} (3.4.32). Correct.
- C = 2A from Ai's ½ (L8.3 p. 4) and D = −B from Bi's −sin (L8.4 p. 1, where the transcript says "B must be equal to minus D", the same relation). Correct. The general connection equals boxed (3.4.44). Setting A = 1, B = 0 and A = 0, B = 1 reproduces the previous page's (3.3.1) and (3.3.2) (−sin → +e^{∫κ}, equivalent to sin ↔ −e^{∫κ}). Consistent.
- 5/(16u²): ψ = u^{−1/4}e^{−(2/3)u^{3/2}} gives ψ″/ψ = u + 5/(16u²). Checked by finite differences at u = 0.7, 1.3 and 2.0 (agreement to 1e-8). Correct (3.4.25).
- (1/2)^{2/3} = 0.62996 ≈ 0.63. Correct (3.4.29).
- Worked example (a): η³ = 2 × 511000/197.33² = 26.246 nm⁻³; η = 2.9718 nm⁻¹; 0.63/η = 0.2120 nm. Page: 26.2, 2.97, 0.21. Correct.
- Worked example (b): κ = √(2 × 511000 × 1)/197.33 = 5.1231 nm⁻¹; 2κ(0.5) = 5.123, e^{−5.123} = 5.958 × 10⁻³; 2κ(1) = 10.246, e^{−10.246} = 3.549 × 10⁻⁵. Page: 5.12, 6.0 × 10⁻³, 10.25, 3.5 × 10⁻⁵. Correct. "Doubling the width squares T": (5.958 × 10⁻³)² = 3.549 × 10⁻⁵. Correct.
- Tunnelling formula (3.5.10)-(3.5.11): the page's (2/ħ)∫√(2m(V − E))dx equals the notes' ∫√((2m/ħ²)(V − E))dx. Correct. The outline (sine part of the transmitted wave → growing toward the left via (3.4.46) → decaying from a → cosine via (3.3.1); T = |F|²/|Fe^θ|² = e^{−2θ}) matches (3.5.1)-(3.5.9).
- Quiz 1: answer 0 correct; the explanation's u = (2mg/ħ²)^{1/3}(x − a) is correct.
- Quiz 2: answer 0 correct; the distractor (1/(2√π))…e^{−ξ} is the u ≫ 1 form, as the explanation says.
- Quiz 3: answer 0 correct; the explanation matches L8.4 p. 2 and (3.4.47).
- Quiz 4: answer 0 correct; the numbers 6 × 10⁻³ and 3.5 × 10⁻⁵ are recomputed above.
- Flashcards: all four correct (card 2 matches (3.4.21) and (3.4.23); card 3 matches (3.4.47)).
- Calcs file `calcs/8.06/airy-functions-connection-formulae.yaml`: I checked every entry by hand, and `pytest tests/calc -k airy` passes (15 passed). The identities `wkb-integral-in-u` and `half-factor` are algebraically exact. `wkb-form-equation` uses central differences with h = 1e-3 (error about 1e-7, inside the 1e-5 tolerance). Nothing is missing for the numbers the page shows.

## Citation checks
- Notes equation numbers, checked against the rendered pages 12-20: (3.4.18), (3.4.19) (printed as ψ″ − uψ = 0), (3.4.20), (3.4.21)-(3.4.23), (3.4.24)-(3.4.29), (3.4.30)-(3.4.32), (3.4.44), (3.4.45)-(3.4.46), (3.4.47), (3.5.10)-(3.5.11). All exist and say what the page uses them for, apart from finding 1 (range) and finding 4 (precision).
- Transcript pages, each checked with `pdftotext -f N -l N`:
  - L8.1: p. 1 (Airy biography, Airy equation); pp. 1-2 (Fourier transform gives a first-order equation; integral on p. 2); pp. 2-3 (decaying sectors); pp. 4-5 (integration by parts, boundary terms vanish at the contour ends). All correct.
  - L8.2: p. 1 (contour C₂; Bi = −i∫C₁ + 2i∫C₂; the two real integrals); p. 2 (Stokes phenomenon); pp. 2-3 (stationary phase, u > 0); p. 4 (u < 0 and the forms failing near 0). All correct.
  - L8.3: p. 1 (linear potential, V − E = g(x − a), right WKB solution); pp. 1-3 (WKB on both sides, left on p. 3); pp. 2-4 (u, η, Airy equation; the equation in u at the bottom of p. 3); pp. 4-5 (matching with Ai, C = 2A). All correct.
  - L8.4: p. 1 (Bi matching, D = −B); pp. 1-3 (directions); p. 3 (left-forbidden formulae; the Griffiths remark); p. 4 (tunnelling as an exercise, "in the notes"). All correct.
- Formulas cited to slides or board: the 8.06 videos are blackboard lectures, and the transcript formulas are spoken from the board. The integral representations are cited to the transcripts (they are not in the notes; I found no Fourier/contour material in chapter 3), which is appropriate.

## Coverage and order
- The page follows L8.1 → L8.2 → L8.3 → L8.4 in order: Airy biography and equation; Fourier transform and the integral; decaying sectors and contour deformation; rigour (boundary terms); Ai and the second contour, Bi; the real integrals; Stokes; stationary phase for u > 0, then u < 0; the forms failing near 0; linear potential and the WKB forms on both sides; u and η; exact solution; C = 2A; Bi and D = −B; directions; the left-forbidden formulae; pointer to tunnelling.
- From the notes §3.4.1 it adds the 5/(16u²) and 0.63 estimates (not in the lecture). It says so ("The notes also check…"). Fine.
- Omitted from the lecture: the remark that the other solution has no Fourier transform (L8.1 p. 2), the Mathematica aside, and the sketch of Ai against its asymptotic forms (L8.2 p. 4, partly covered by "Both forms fail near u = 0"). All minor.
- Tunnelling: covered only partly (finding 2).
- The leadsTo to 8.06 Lecture 9 matches `_course.json` ("Time-dependent perturbation theory: the interaction picture").

## Licensing
- `grep -il "rights reserved\|courtesy"` on the four L8 transcripts and ch3.txt finds nothing. The page uses no figures (the notes' hand drawings (3.4.9), the p. 16 figure and Figures 3.4-3.5 are not reproduced).
- No OpenStax or LibreTexts material.
- Spot-checks for verbatim copying: the page's prose is rewritten throughout. The closest phrase is "one can connect away from a decaying exponential and into a growing one" (page) against the notes' boxed (3.4.47) "We can connect away from a decaying exponential and into a growing exponential", repeated in the quiz 3 explanation. It is a one-line statement of a rule and is cited, so acceptable.
- The worked example is the page's own (an electron, its own numbers). The notes' worked example is a rectangular barrier in z₀ form with no numbers, so it is not copied.

## Forward links
- The `leadsTo` to 8.286 Lecture 23 is right: `false-vacuum.mdx` is Lecture 23 and describes old inflation ending by tunnelling, with bubbles that collide into an inhomogeneous universe (the graceful exit problem). The callout is fairly attributed ("as Guth explains in 8.286"), except for the decay-rate sentence (finding 6).
- The `leadsTo` to 8.06 Lecture 9 is right (see above).

## Notes
- George Biddell Airy: "seventh Astronomer Royal from 1835 to 1881", Greenwich, and optics all match L8.1 p. 1 and are historically correct. He held the post 1835-1881. His transit circle (1851) defines the Greenwich meridian adopted in 1884, so "where the Prime Meridian was established" is fair. His 1838 work on light near a caustic is where the functions arose. The page spells "Biddell" correctly; the transcript has "Biddle", a transcription slip, so nothing needs flagging on the page. The calcs `airy-years` fact cites L8.1 p. 1, correct.
- The transcript's Bi asymptotic form at L8.4 p. 1 is spoken as "minus 1 over pi" (missing the square root). The page uses the notes' (3.4.22), which is correct, so nothing needs flagging.
- In L8.4 p. 1, "B must be equal to minus D" with "B equals to minus 1 and D equals to 1" is the same relation as the page's D = −B.
- I did not watch the videos. Board content is taken from what the transcripts say.

## Resolution (2026-11-18, by the page author)

Warnings:
1. "The general connection" now cites eq. (3.4.44) alone. The matching C = 2A, D = −B is attributed in the text to the L8.3 and L8.4 transcripts.
2. The tunnelling section now says that the notes go on to the rectangular barrier, whose exact prefactor 16(E/V₀)(1 − E/V₀) WKB misses, and to lifetimes, and that those parts are left to the notes.

Info:
- The callout attributes the barrier-integral form of the false-vacuum decay rate to Sidney Coleman.
- Example (b) now writes ħc κ.
- The worked example's prefactor (about 4) is not quoted as a number; the sentence that WKB gets the exponent but not the prefactor stands.
- The arrow-rule citation and C = 1/2π are left as they are (the review found both acceptable).
