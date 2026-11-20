---
page: content/year-4/8.08/mean-free-path-sound-diffusion.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/transport/ (read: resource page "transport.pdf", Lecture Notes; CC BY-NC-SA 4.0 footer, no "courtesy" or "rights reserved" notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/35e4c4437626cad41f37a509d17fc8d0_transport.pdf (read as page images, PDF pages 1-9 = handwritten pp. 93-101 at 90 dpi; handwritten, no text layer)
verdict: pass-with-notes
---

# Review: Mean free path, effusion, sound and diffusion

Scope: Wen's handwritten pp. 93-101 (PDF pages 1-9). I checked every formula, citation, number, plot, quiz answer and flashcard against the page images. I found no errors. There are three warnings and some info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Bracketed paragraph after the worked example | (not in notes) | "In real air, sound is damped more strongly than these numbers say, because viscosity, heat conduction and the slow exchange of energy with molecular vibrations all add to it." | The example is about **argon**, a monatomic gas, so it has no molecular vibrations, and the sentence switches to air without saying why. For argon itself the classical absorption from viscosity and heat conduction gives an amplitude damping rate (k²/2)[(4/3)ν + (γ−1)χ]. With η ≈ 22.7 µPa·s and κ ≈ 17.7 mW/(m·K) at 300 K (handbook values, quoted from memory, so uncertain to a few per cent), that is (k²/2) × 3.3 × 10⁻⁵ m²/s, about 5-6 times the page's D/2 = (k²/2) × 5.9 × 10⁻⁶. Suggest: "For argon itself, viscosity and heat conduction damp sound about five times faster than this; in air, molecular vibrations add more." Add any number you quote to the calcs file. |
| 2 | warning | Sound waves: "The speed of sound is of the order of the thermal speed of the particles (notes p. 97): a pressure disturbance cannot travel faster than the particles that carry it." | p. 97: "c ~ thermal velocity of particle". Nothing more. | Adds a reason after a colon, so it reads as Wen's. | Mark the reason as the page's own, or soften it to a heuristic ("roughly speaking, a pressure disturbance is carried by the particles themselves"). As a strict statement it is only a rule of thumb. |
| 3 | warning | "The damping of sound by diffusion", bracketed remark | p. 99 writes j = nu − D∇n and p. 101 uses it for the damping of sound. The notes do not say that this is a heuristic model. | The remark says that in a one-component gas the mass current is just ρu, and that the real damping comes from viscosity and heat conduction. | The remark is correct and honest. It should say the consequence outright, though: for a single gas, a diffusion term in the **total** mass continuity equation is not physical (self-diffusion moves labelled particles around but does not change ρ). Wen's model reproduces the right k² law and the right order of magnitude, not the actual mechanism. One clause would make this clear, e.g. "so Wen's diffusion term is a model, not the real mechanism." |
| 4 | info | Intro of section 1 | p. 93 opens with "Two limits: collisionless and hydrodynamic", then gives the mean free path. | Gives the mean free path first, then the two limits. | Harmless reordering. No change needed. |
| 5 | info | Effusion: "Wen asks for the physical picture (notes p. 94): the flux is the density times a typical speed …" | p. 94 has only "I ∝ n T^{1/2} m^{-1/2}. Why? Physical picture", with no answer. | The answer is the page's own. That is fine, but the sentence could be read as Wen's answer. | Optional: "Wen asks for the physical picture without giving it (notes p. 94). Here it is: …". The ¼n⟨\|v\|⟩ form is already marked as the page's addition, and it is correct (checked in calcs). The isotope-separation sentence is also the page's own and correct. |
| 6 | info | Damping section: "(Wen writes its inverse, the decay time τ = 2/Dk²)" | p. 101 boxes τ = 2/Dk², and at the bottom also writes 1/τ = Dk²/2, labelled "damping rate, damping coefficient". | Implies Wen gives only the decay time. | Optional: "Wen boxes the decay time τ = 2/Dk² and calls 1/τ the damping rate." |
| 7 | info | Newton's law: "If we follow one piece of fluid, du/dt = f/m per particle" | p. 95: "if we follow one particle". | "one piece of fluid". | Equivalent in the hydrodynamic picture, and arguably clearer. No change. |
| 8 | info | Spreading from a point | p. 99: ñ(t,k) = e^{−Dk²t} (no N); the back-transform is written with ñ(t,x) on the left (it should be n). | The page flags the missing N. It writes n for the back-transform without comment. | The N note is accurate. The ñ → n slip is minor and silently corrected. Optionally add it to the same bracket. |
| 9 | info | Random walk | p. 100, last box: n(x) = e^{−x²/(2λ²/3τ)t}/(π(2λ²/3τ)t)^{3/2}. The exponent is ambiguous (it should be −x²/[(2λ²/3τ)t]). | The page does not reproduce this line. It goes straight to D = λ²/6τ via α = 4Dt. | Fine. The slip is not repeated. |
| 10 | info | Mean free path, worked example | λ = 1/(σn), with no √2 factor for the relative motion of the partners. | Follows Wen and gets λ ≈ 100 nm for argon. | Optional: one bracket saying that including the motion of the partners (Maxwell) divides λ by √2, giving about 71 nm, close to the commonly quoted ~70 nm for argon at STP. |

## Formula-by-formula check
- "Mean free path" λ = 1/(σn) (p. 93): matches. Correct.
- "Cross-section of two hard balls" σ = π(2r)² = 4πr² (p. 93): matches. Correct.
- "Boltzmann distribution of momenta" (p. 94): matches both boxed lines, f = C e^{−βp²/2m} and C = n(2πmk_BT)^{−3/2}. Correct.
- "Flux of effusion" (p. 94): matches all three lines. Correct.
- "Continuity equation" (p. 95, point ①): matches the box. The integral form in the text is also on p. 95. Correct.
- "Material derivative" (p. 95, point ②): matches. Correct.
- "Euler's equation" (p. 96, point ②): matches the box, ρ(∂t + u·∇)u + ∇P = n f_ex. The slab argument (F_x = A[P(x) − P(x+Δx)], f_x = −∂_xP/n) is on p. 96. Correct.
- "Entropy of the ideal gas" (p. 96, point ③): matches, S = Nk[5/2 − ln(nλ³_T)] with λ = √(2πħ²/mk_BT). The λ_T renaming is flagged. Correct.
- "Adiabatic condition" (p. 96, point ③): matches. The chain nT^{−3/2} → n^{5/2}P^{−3/2} → Pρ^{−5/3} is on p. 96. "5 unknowns ρ, P, u & 5 equations" is on p. 96. Correct.
- "Linearized equations" (p. 97): the two boxed equations and δP/P₀ = γδρ/ρ₀ match. Correct.
- "Sound waves" (p. 97): matches, c = √(γP₀/ρ₀) = √(γk_BT/m). Correct.
- "Diffusion flux" (p. 98): matches j_x = −(1/6)v̄λ∂_xn, j = −D∇n and D ≃ λv̄/6. "In the hydrodynamical limit we set λ = 0, no diffusion" is on p. 98. Correct.
- "Continuity equation with diffusion" (p. 99): matches, together with the ρ form. Correct.
- Completing the square (text, p. 99): matches. I checked the algebra: −Dt(k − ix/2Dt)² − x²/4Dt = −Dtk² + ik·x. Correct.
- "Point source spreading" (p. 100): matches the starred box. Correct.
- "Mean square displacement" (p. 100): matches, 4Dt × 3/2 = 6Dt, x̄ = √(6Dt), with ∫x²e^{−x²}dx = √π/2 in the margin. Correct.
- "Random walk" (p. 100): matches, ⟨x²⟩ = Nλ², x̄ = λ√N. The Gaussian (πα)^{−3/2}e^{−x²/α}, ⟨x²⟩ = 3α/2 and α = 2Nλ²/3 are on p. 100. Correct.
- "Diffusion constant of a random walk" (p. 100): matches the box, D = λ²/6τ = λv̄/6. Correct.
- "Linearized equations with diffusion" and "Damped wave equation" (p. 101): match. Correct.
- "Dispersion relation with damping" (p. 101): matches, ω = ck(1 − (i/2)Dk/c), δρ = A e^{i(kx−ckt)}e^{−t/τ}. I rederived the sign: with e^{−iωt}, Im ω = −Dk²/2, so the wave decays. Correct.

All `at=` citations are on the right handwritten page and point.

## Arithmetic and answer checks
- `npm run calc:test -- -k mean-free-path-sound-diffusion`: 35 passed.
- `npm run content:check`: 0 errors. The only warning for this page is "no review file yet", which this file fixes.
- I recomputed the worked example by hand (k_B = 1.380649 × 10⁻²³, u = 1.66054 × 10⁻²⁷ kg):
  - n = 2.446 × 10²⁵ m⁻³; σ = 4.072 × 10⁻¹⁹ m²; λ = 1.004 × 10⁻⁷ m.
  - Spacing n^{−1/3} = 3.44 nm, so λ is about 29 spacings ("some 30"). OK.
  - Effusion flux: n√(k_BT/2πm) = 2.446 × 10²⁵ × 99.7 = 2.44 × 10²⁷ m⁻² s⁻¹. OK.
  - m = 6.634 × 10⁻²⁶ kg; v̄ = √(2k_BT/m) = 353.4 m/s; D = 5.91 × 10⁻⁶ m²/s; c = √(5k_BT/3m) = 322.6 m/s. OK.
  - √(6Dt) = 5.96 mm at 1 s and 0.357 m at 3600 s. OK.
  - At 1 kHz: k = 19.48 m⁻¹; Γ = 1.12 × 10⁻³ s⁻¹; 1/Γ = 891 s; c/Γ = 288 km ("some 290 km"). OK.
  - At 100 kHz: Γ = 11.2 s⁻¹; c/Γ = 28.8 m; λk = 1.96 × 10⁻⁴. OK.
  - "Oscillates thousands of times": ωτ ≈ 5.6 × 10⁴ rad ≈ 9,000 cycles. OK.
  - Note: v̄ = √(2k_BT/m) is the most probable speed. The true mean speed √(8k_BT/πm) = 399 m/s would give D = 6.7 × 10⁻⁶. The problem statement defines v̄, so this is not an error. The measured self-diffusion constant of argon at 1 atm and 300 K is about 1.8 × 10⁻⁵ m²/s (from memory, uncertain), roughly 3 times the model's value. That fits the page's "right order of magnitude".
- Spreading plot: the three expressions are 4πr²(4πDt)^{−3/2}e^{−r²/4Dt} for Dt = 0.25, 1 and 4 (4Dt = 1, 4, 16). Each has area 1 and peaks at 2√(Dt) = 1, 2, 4. The highest peak is 0.83, inside the range of 0.9. "Sixteen times the time only quadruples the spread" is correct.
- Damping plot: with x = ckt, Γt = (Dk/2c)x = gx/2. The expression e^{−gx/2}cos x is right. The caption's Dk/c ≈ λk/6 (for v̄ ≈ c) is right.
- Text: Γ = λv̄k²/12. The decay time 12/(λv̄k²) ≈ (12/λk)(1/ω), which is "about 1/(λk) times 1/ω" up to the factor 12 that Wen also drops (his "~"). Acceptable.
- Quiz 1 (halved): correct. Quiz 2 (B 2 times slower, m^{−1/2}): correct. Quiz 3 (√(5k_BT/3m)): correct. Quiz 4 (6Dt; 2Dt per axis): correct. All explanations are right.
- Flashcards: all five are consistent with the notes and the page.

## Coverage and order
- Everything on pp. 93-101 is covered, in Wen's order:
  - p. 93: two limits, mean free path, hard balls, the effusion and hydrodynamic-flow sketches (described in words).
  - p. 94: effusion, with "Why? Physical picture".
  - p. 95: caged particles, ρ and ρu, the "no exchange of particle, heat" picture, continuity in differential and integral form, the material derivative.
  - p. 96: Euler's equation, the adiabatic condition, 5 equations for 5 unknowns.
  - p. 97: linearisation, sound, c ~ thermal velocity.
  - p. 98: the six-direction estimate, the λ → 0 remark.
  - p. 99: continuity with diffusion, the point source in k-space.
  - p. 100: the Gaussian, 6Dt, the random walk, D = λ²/6τ.
  - p. 101: damping, τ, "oscillate 1/λk times".
- The only reordering is finding 4 (limits and mean free path). Nothing is left out.
- Additions are the ¼n⟨|v|⟩ form, isotope separation, the plots, the argon example and the remarks on real damping. They are marked as the page's own, except finding 2.

## Licensing
- The OCW resource page has a CC BY-NC-SA 4.0 footer, with no "courtesy" or "all rights reserved" notice.
- No figure from the notes is reproduced. Wen's sketches (cylinder, hole, fluid cells, the six-direction diagram) are described in words only. Both graphs are generated from formulas.
- The wording is the page's own throughout. The only quoted word is "caged", which is attributed. No passage is copied.
- No OpenStax or LibreTexts material.

## Forward links and cosmology callout
- 8.286 Lecture 17 (`temperature-and-decoupling`): that page defines decoupling as the point after which a typical photon never scatters again, and dates it at about 3,000 K and about 380,000 years. The callout's "photons stopped scattering … universe became transparent … dated in Lecture 17" matches. The leadsTo wording, "mean free path becomes so long", is a fair paraphrase.
- 8.902 Lecture 17 (`cmb-anisotropies`): that page says "Photons random-walk out of small hot and cold patches and mix them … This is Silk damping". It also describes acoustic oscillations of the photon-baryon fluid with c_s ≈ c/√3. The callout's "one fluid that carried sound waves" and its Silk-damping sentence match. Calling it "a cousin" of diffusive damping is fair: both are k²-diffusion damping of acoustic waves.
- "Thomson scattering off free electrons" is not on the linked 8.286 page, but it is correct general physics and is not attributed to that page.
- 8.902 Lecture 3 (`relaxation-times`): that page shows that strong encounters have probability about 3/N per crossing and that relaxation takes about N/(6 ln N) crossings, so galaxies are collisionless. The callout's "stars in a galaxy almost never meet" simplifies this. "Collisions" there are gravitational encounters, not contact. The leadsTo's "cross-section for close encounters is so small" is accurate. Info only.

## Notes
- Slips in the notes, none of them repeated on the page:
  - p. 99: N is dropped in ñ, and ñ is written for n in the back-transform.
  - p. 100: the exponent in the last line is ambiguous.
  - p. 101: the factor 12 is dropped in "~ (1/ω)(1/λk)", acceptable as an order-of-magnitude statement.
- The links to the next two pages (`viscosity-conduction-boltzmann-equation`, `einstein-relation-langevin-noise`) point to files that exist in the worktree.
- The 8.03 sound-waves page does use γ = 7/5 for air, as this page says.
- Verdict: pass-with-notes. Fix findings 1-3, which are wording only. The rest is optional.

## Resolution (2026-11-19, by the page author)

1. The remark after the worked example now speaks of argon: viscosity and heat conduction (the true mechanisms) damp sound several times faster than Wen's diffusion term; molecular vibrations are mentioned only for air. No reviewer-memory number was added.
2. "A pressure disturbance cannot travel faster than the particles" is now marked as the page's own rule of thumb, outside the citation to p. 97.
3. The bracketed damping remark now says outright that Wen's diffusion term in the continuity equation is a model, not the real mechanism.
4. Order kept (mean free path first, then the two limits): the limits are defined by λ, so it reads better; no change.
5. The physical picture of effusion is already marked as the page's addition for the ¼n⟨|v|⟩ form; no change.
6. The damping-rate sentence now says Wen writes both τ = 2/Dk² and the rate 1/τ = Dk²/2.
7–9. No change needed.
10. Added a bracket that a careful count divides λ by √2 (about 71 nm for argon), with a calcs entry `ex-mfp-sqrt2`.

`npm run content:check` and `npm run calc:test` pass. Status set to reviewed.
