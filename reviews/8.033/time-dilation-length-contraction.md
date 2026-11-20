---
page: content/year-2/8.033/time-dilation-length-contraction.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture5_kinem2/ (read: Lecture 5 slides PDF, 23 pages, from the text layer and the rendered slide images; the text layer is incomplete, so every equation was checked on the images)
  - MIT 8.033 Lecture 6 slides (lecture6_kinem3) and Lecture 7 slides (read, only to check the Lecture 6 leadsTo)
  - content/year-4/8.286/age-of-the-universe.mdx, anthropic-multiverse.mdx, homogeneous-expansion.mdx, cosmological-redshift.mdx (read, to check the cosmology callout and leadsTo)
verdict: needs-changes
---

# Review: Time dilation, length contraction and the interval

Slide numbers below are PDF page numbers of the Lecture 5 slides: 1 summary of last lecture, 2 title/today, 3 "IS IT RIGHT?", 4 time dilation, 5 light clock, 6 light clock + muon puzzle, 7 yardstick question, 8 "Let's measure the length of our moving eraser!", 9 simultaneity, 10 inverse transform, 11 length contraction (world lines), 12 endpoint world lines in S′, 13 measuring at t′ = 0, 14 velocity addition, 15 perpendicular velocity addition (setup), 16 answer, 17 boosts as rotations, 18 hyperbolic trig reminders, 19 Lorentz invariant (ΛᵗηΛ = η), 20 invariance of xᵗηx, 21 interval and its kinds, 22 "Everything is relative, or is it?", 23 "Summary lecture" (time dilation, length contraction, simultaneity, problem solving tips).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | `leadsTo` 8.286 Lecture 2 | 8.286 Lecture 2 (page `anthropic-multiverse`) covers the anthropic argument, the multiverse and Hubble's law; cosmic time and comoving coordinates are introduced in 8.286 Lecture 4 (`homogeneous-expansion`, section "Cosmic time", which even raises the relativity-of-simultaneity puzzle) and used in Lecture 5 (`cosmological-redshift`). | "8.286, lecture 2: Cosmic time and comoving distance are defined so that every observer moving with the expansion agrees on them." | Change to `lecture: 4` (optionally add Lecture 5). |
| 2 | warning | `leadsTo` 8.033 Lecture 6, `why` | Lecture 6 slides cover space/time unification, proper time, null/spacelike/timelike, 4-vectors U and k, velocity addition, Doppler effect and aberration. No jets were found in the Lecture 6 slides (text layer and slides 24–28 checked); a quasar jet ("cosmic traffic pile-up") appears in the Lecture 7 slides. The site's own Lecture 6 page does not mention jets either. | "Velocity addition, aberration and the relativistic Doppler effect, with astrophysical jets." | Drop "with astrophysical jets" (or move it to a Lecture 7 leadsTo). |
| 3 | warning | Frontmatter `summary` | Slide 16: u_y = u_y′√(1 − v²/c²)/(1 + u_x′v/c²), same for u_z. | "perpendicular components pick up a factor √(1 − v²/c²)" | Incomplete: they are also divided by (1 + u_x′v/c²). Say "pick up a factor √(1 − v²/c²)/(1 + u_x′v/c²)". The body formula (slide 16) is correct. |
| 4 | warning | Length contraction, first paragraph (slides 7–8) | Slide 7 first gives the trap: "For t = 0, the Lorentz transformation gives x′ = γx, where γ > 1", then asks longer / shorter / one yard. | Asks the question but omits the naive x′ = γx argument that motivates "longer". | Add one sentence with the naive t = 0 argument and why it fails (it compares the ends at the same t, not the same t′), which is the point of slides 11–13. |
| 5 | info | Time dilation, light clock sentence ("slides 4–5") | Slides 5–6 only say "The light clock movie says it all" with a link; slide 4 says "(Draw Minkowski diagram.)". The longer-diagonal-path explanation is not on the slides. | "A light clock … the light travels a longer diagonal path at the same speed c (slides 4–5)." | Fine physics; cite as "slides 5–6" for the light clock and present the diagonal-path argument as the page's own explanation. |
| 6 | info | Opening paragraph (slides 1–3) | Slide 1 also asks "(Assumptions leading to this?)" and says "Compare to Einstein's 1905 paper"; slide 2 lists "Key people: Einstein". | Not mentioned. | Optional. |
| 7 | info | Order (simultaneity before length contraction) | Slides 7–8 (yardstick question, eraser demo) come before simultaneity (9) and the inverse transform (10). | The yardstick question is moved to the length-contraction section, after slides 9–10. | Reasonable regrouping; no change needed, or note it. |
| 8 | info | Interval bullets / quiz / flashcard | Slide 21: Δτ ≡ √(−Δs²) (a length), "proper time interval". | Body correctly says "as a length; divide by c for a time"; quiz 4 says "proper time √(−Δs²)/c"; flashcard and summary say "proper time √(−Δs²)". | All defensible, but make the flashcard match the body ("proper time interval √(−Δs²), i.e. c times the proper time"). |
| 9 | info | Muon numbers (slide 6) | Slide says half-life 1.56 × 10⁻⁶ s. | Same. | The measured muon half-life is about 1.52 μs (mean life 2.197 μs × ln 2). The page follows the slide, which is fine; a bracketed note is optional. |
| 10 | info | Rapidity and metric both written η | Slides 17 and 19 also use η for both. | Same; symbols.json has one meaning covering both. | No change; perhaps one sentence warning the reader that η means two things. |

Checked and matching the slides (no finding):
- Slide 4 formula: x₁ = x₁′ = 0, x₂ = (0, 0, 0, cΔt), x₂′ = (−γvΔt, 0, 0, γcΔt); Δt′ = γΔt > Δt, "slower". Correct (−γβ·cΔt = −γvΔt).
- Slide 6 muon puzzle: 10 km, 1.56 × 10⁻⁶ s, 0.47 km, γ ≈ 7 at 0.99c, γ ≈ 71 at 0.9999c, "Leads to twin paradox". Correct.
- Slide 9: x₂ = (L, 0, 0, 0) → x₂′ = (γL, 0, 0, −γβL); "the second event happened first"; S-clocks at larger x run further ahead. Correct.
- Slide 10: Λ(−v)Λ(v) = I, so Λ(−v) = Λ(v)⁻¹. Correct.
- Slide 11: "Trickier than time dilation, opposite result" (short quote, acceptable); world lines (0,0,0,ct), (L,0,0,ct) → (−γβct, 0, 0, γct), (γL − γβct, 0, 0, γct − γβL). Correct.
- Slide 12: x₁′ = −vt₁′; x₂′ = γL − β(ct₂′ + γβL) = L/γ − vt₂′; x₂′ − x₁′ = L/γ + v(t₁′ − t₂′) = L/γ for t₁′ = t₂′. Verified algebraically (ct = (ct₂′ + γβL)/γ, γL(1 − β²) = L/γ).
- Slide 13: t₁′ = 0 at t = 0 with x₁′ = 0; t₂′ = 0 at ct = βL with x₂′ = γL − γβ²L = L/γ; L′ = L/γ. Correct (the OCR text is garbled; the image shows γL − γβ²L).
- Slide 14: Λ(v₃) = Λ(v₂)Λ(v₁); product = γ₁γ₂[(1 + β₁β₂) … −(β₁ + β₂)]; β₃ = −Λ₁₄/Λ₁₁ = (β₁ + β₂)/(1 + β₁β₂); v₃ = (v₁ + v₂)/(1 + v₁v₂/c²). Correct, ratio of (1,4) and (1,1) entries as on the slide. (The slide itself shows 4 × 4 matrices beside a "SIMPLER WITH 2x2 MATRICES" box; the page's wording is fine.)
- Slides 15–16: dx = γ(dx′ + v dt′), dy = dy′, dz = dz′, dt = γ(dt′ + v dx′/c²) from the inverse transformation; u_x, u_y, u_z formulas match slide 16. (Slide 15 has a typo, "velocity u in S′?" for S; the page states it correctly.)
- Slides 17–18: boost as rotation with cosh η, sinh η, η = tanh⁻¹β; identities cosh(tanh⁻¹x) = 1/√(1 − x²), sinh(tanh⁻¹x) = x/√(1 − x²), tanh⁻¹x = ½ ln((1 + x)/(1 − x)); rapidities add, order does not matter. Correct. (The slide's phrase "rotation by an imaginary angle" is not repeated; fine.)
- Slide 19: η = diag(1, 1, 1, −1), ΛᵗηΛ = η, ΛᵗIΛ = I for rotations, proof outline. Correct.
- Slide 20: x′ᵗηx′ = (Λx)ᵗη(Λx) = xᵗ(ΛᵗηΛ)x = xᵗηx = x² + y² + z² − (ct)²; "can be positive or negative". Correct (the final equality is from the top of the same slide).
- Slide 21: Δs² ≡ ΔxᵗηΔx = Δx² + Δy² + Δz² − (cΔt)²; null / spacelike Δσ ≡ √Δs² (proper distance, frame where simultaneous) / timelike Δτ ≡ √(−Δs²) (proper time interval, frame where same place). Correct. "As for two points on a light ray" is the page's own (correct) addition.
- Slide 22: rest length, proper time, rest mass (later). Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k time-dilation-length`: 11 passed.
- Recomputed by hand: c × 1.56 μs = 468 m ≈ 0.47 km; γ(0.99) = 7.09 ≈ 7; γ(0.9999) = 70.7 ≈ 71.
- Worked example: γ(0.995) = 1/√0.009975 = 10.01 ≈ 10.0; trip 15 000 m/(0.995 × 3.00 × 10⁸ m/s) = 5.025 × 10⁻⁵ s ≈ 5.03 × 10⁻⁵ s; dilated half-life 15.6 μs; 50.25/15.62 = 3.22 half-lives, 2⁻³·²² = 0.107 ≈ 0.11; without dilation 50.25/1.56 = 32.2 half-lives, 2⁻³²·² = 2.0 × 10⁻¹⁰; contracted atmosphere 15/10.01 = 1.50 km, crossed in 1499 m/(2.985 × 10⁸ m/s) = 5.02 × 10⁻⁶ s ≈ 3.2 half-lives. All correct, and the two frames agree as stated.
- Quiz 1 (answer 3, "every γ seconds"): correct.
- Quiz 2 (answer 0, event at x = L first): correct, ct₂′ = −γβL < 0.
- Quiz 3 (answer 0, L/γ): correct.
- Quiz 4 (answer 1, timelike, proper time √(−Δs²)/c): correct; explanation correct.
- Flashcards: correct (see finding 8 for the √(−Δs²) wording).

## Coverage and order
- All slides 1–22 are covered. Slide 23 ("Summary lecture", including "problem solving tips") is not; it is the summary repeated at the start of Lecture 6 and needs no coverage here.
- Order follows the slides except that the yardstick question (slides 7–8) is moved after simultaneity and the inverse transform (finding 7).
- Omitted: slide 1's "(Assumptions leading to this?)" / Einstein 1905 comparison, slide 4 and 12's "Draw Minkowski diagram" prompts, slide 7's naive x′ = γx argument (finding 4).
- Added by the page: light-clock path explanation (finding 5), the null "light ray" example, the "as a length" remark, the worked example, the cosmology callout.

## Licensing
- The page uses no images. The Lecture 5 slides carry no "All rights reserved" or "Courtesy of" notice in the text layer (checked); the light-clock movie is only a link on the slides and is not used.
- No verbatim copying beyond short phrases ("trickier than time dilation, opposite result", given in quotation marks; "Everything is relative", the slide title). Acceptable.
- No OpenStax or LibreTexts material.
- The worked example (15 km, 0.995c) is original; it reuses the slide's half-life but with its own situation and numbers.

## Notes
- Cosmology callout: physically correct. In an FRW universe cosmic time equals the proper time of comoving clocks, and the age of the universe is that proper time since t = 0. However, the linked page `age-of-the-universe` does not itself frame age as proper time on comoving clocks, and the site's definition of cosmic time (`homogeneous-expansion`, `cosmological-redshift`) is via synchronisation by a shared physical signal (CMB temperature, value of H). "Cosmology builds its cosmic time on it" is a fair simplification; consider also linking `/courses/8-286/homogeneous-expansion#…` (section "Cosmic time"), which explicitly discusses the relativity of simultaneity. Not an error.
- `npm run content:check`: 0 errors on the run checked; the only warning for this page is the missing review file (this file).
- Lecture 6 jets (finding 2): checked the Lecture 6 text layer and slides 18–28 rendered; I did not render slides 1–17 at full size, so a jet image on an early Lecture 6 slide cannot be fully excluded, but neither the text layer nor the site's Lecture 6 page mentions one.

## Resolution (2026-11-16, by the page author)

Error: the 8.286 leadsTo now points to Lecture 4 (cosmic time and comoving coordinates).
Warnings:
2. The 8.033 Lecture 6 `why` no longer mentions jets.
3. The summary now includes the division by 1 + u′ₓv/c² for perpendicular components.
4. Slide 7's naive argument (x′ = γx at t = 0) is now given.
Info: the light-clock explanation is marked as the page's own; the callout also links the 8.286 cosmic-time page. Others not changed.
