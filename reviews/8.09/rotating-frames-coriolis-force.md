---
page: content/year-4/8.09/rotating-frames-coriolis-force.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/6fe39e8d5ce4ce746ca256dfea665eda_MIT8_09F14_Chapter_2.pdf (read: local copy, rendered page images for printed pp. 33-37 and text layer; Section 2.4 opening checked for leadsTo)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_2/ (not fetched separately; it is the resource page of the same PDF)
verdict: pass-with-notes
---

# Review: Rotating coordinates: centrifugal, Coriolis and Euler forces

All 19 `<Formula>` blocks were compared with the rendered notes pages (printed pp. 34-37). Every equation number and printed page is correct, and every formula matches the notes in physics and notation. No errors found. The flagged slip in the notes is real: see check 1 below.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Falling bodies drift east", last paragraph (the physical explanation of the west drift and east drift) | Not in the notes (they give only the calculation) | "the ball keeps the eastward speed of the ground it was thrown from ... falls behind"; the stone "starts with the larger eastward speed of the tower top and gets ahead" | The sign is right, but the reason is only half the story. In the inertial frame the ball conserves angular momentum about the axis, not eastward speed: its eastward speed *drops* as it rises (v_t = L/(m r)). Check at the equator: with r^2 φ̇ conserved, the relative eastward rate is −2Ωz, which is (2.28) for θ = 90°. "Constant eastward speed" gives −Ωz, half the true drift. Suggest: "the ball keeps its angular momentum about the Earth's axis, so as it rises it turns more slowly than the ground and falls behind (to the west)", with the matching change for the stone. Or soften it to "roughly" and say the full effect is twice this. |
| 2 | info | "Fictitious forces", sentence after (2.23) | Notes: "As d_R r/dt = v_R ... then (2.24)" (they do not say which terms combine) | "The two middle terms are equal and combine into 2ω × v_R" | (2.23) has three middle terms (d_Rω/dt × r, ω × d_R r/dt, ω × v_R). Say "the third and fourth terms" or "the two terms ω × d_R r/dt and ω × v_R". |
| 3 | info | "The rotating Earth", "Projectiles turn right" | Notes p. 35: projectile "perturbed to the right/left relative to its velocity direction" | "Working out −ω × v_R for horizontal motion shows that it always points to the right of the velocity" | Correct for the horizontal part of the force, which comes from the vertical component of ω. The horizontal component of ω gives a vertical force for east-west motion, so the full vector does not point purely to the right. You could add "its horizontal part". This follows the notes, so it is optional. |
| 4 | info | "Falling bodies drift east", choice of axes | Notes: z up, y towards the north pole; they do not name x | "x horizontal towards the east" | Checked: a right-handed frame with y north and z up has x = y × z pointing east, and with ω = ω(sin θ ŷ + cos θ ẑ) and v = v_z ẑ, (ω × v)_x = ω sin θ v_z, which gives (2.28). The added label is correct. |
| 5 | info | Quiz 3, distractor "About 73 cm east" and its explanation | Notes' printed x(t1) = 8ω sinθ h³/(3g²) | "The 73 cm comes from the formula printed in the notes" | The notes' expression evaluates to 0.731 in SI units, but its unit is m·s³, not m, so calling it "73 cm" is loose. That fits a distractor. Optionally "73 (wrong units) ...". No change needed. |

## Arithmetic and answer checks
1. **The notes' slip on p. 37 is confirmed.** From (2.28) with v0 = 0, ẋ = ω sinθ g t², so x(t1) = (ω sinθ/3) g t1³. With t1 = sqrt(2h/g) this is g (2h/g)^{3/2} = sqrt(8h³/g), giving x(t1) = (ω sinθ/3) sqrt(8 h³/g). The printed 8ω sinθ h³/(3g²) has units s⁻¹·m³/(m² s⁻⁴) = m·s³, so it cannot be a length. The page's corrected form and its bracketed note are right. The calcs identity `stone-drift-two-forms` also checks it.
2. ω_Earth = 2π/86400 = 7.272e-5 s⁻¹ (page: 7.3e-5 and 7.27e-5). Sidereal: 2π/86164 = 7.292e-5 (page 7.29e-5). The sidereal day is 236 s = 3.9 min shorter (page "about 4 minutes"). All correct.
3. Centrifugal at the equator: (7.272e-5)² × 6.371e6 = 0.0337 m/s², 0.34% of 9.8. The page's 0.034 and 0.3% are correct.
4. Foucault at 40°: 24/sin 40° = 24/0.6428 = 37.3 h. Correct. (With a sidereal day, 37.2 h; within the page's stated approximation.)
5. Worked example: ω sinθ = 7.272e-5 × 0.7071 = 5.142e-5 s⁻¹. The stone's t1 = sqrt(160/9.8) = 4.041 s and x = (1/3)(5.142e-5)(9.8)(65.97) = 0.01108 m, so 1.1 cm east. The ball reaches 20²/19.6 = 20.41 m, its flight takes 40/9.8 = 4.082 s, and x = −4(5.142e-5)(8000)/(3 × 96.04) = −0.00571 m, so 5.7 mm west. The ratio 0.515 matches "about half". Drift/height is 1.4e-4 (stone) and 2.8e-4 (ball), so "parts in ten thousand" is right. All correct.
6. Sign of the thrown-up case: ẋ = −2ω sinθ (v0 t − g t²/2) = −2ω sinθ z(t) < 0 while z > 0. Correct. Eq. (2.33) from (2.29) at t1 = 2v0/g: −2ω sinθ (2v0³/g² − 4v0³/(3g²)) = −4ω sinθ v0³/(3g²). Correct.
7. Plot: the stone curve 1000·2·5.14e-5·9.8 t³/6 equals (ω sinθ/3) g t³ in mm and reaches 11.07 mm at 4.04 s. The ball curve reaches −5.71 mm at 4.08 s and decreases monotonically, so the minimum is at landing. The range [−8, 13] contains both curves, and the caption's numbers (11 mm, −5.7 mm, 4.08 s) are right.
8. Quiz: Q1 (answer ω × b), Q2 (only the centrifugal force), Q3 (1.1 cm east) and Q4 (ω sin λ, clockwise in the north) are all correct, and so are their explanations. The flashcards are correct.
9. `pytest tests/calc -k rotating`: 22 passed.

## Coverage and order
- The page follows Section 2.2 in order: the two bases (2.19), the turning basis vectors (2.20), the derivative rule and mnemonic (2.21), velocity (2.22), acceleration (2.23), Newton's law in the rotating frame (2.24), the Lagrangian (2.25), the centrifugal direction (p. 35), the Earth's ω and the projectile example (Fig. 2.6), the Foucault pendulum, then the falling and thrown bodies (2.26)-(2.33). Nothing is left out.
- Additions beyond the notes: the name "Euler force" (marked as not in the notes), ω × ω = 0, the sidereal day, the size of the centrifugal term, "does no work", the weather remark, the latitude-40° number, the corrected x(t1), the physical explanation of the drifts, and the worked example and plot. All are correct except the half-right explanation in difference 1.
- "Fig. 2.2" in the notes' Foucault example: confirmed that the notes' Figure 2.2 is the centre-of-mass coordinates figure in Section 2.1 (text layer, line 47). The pendulum drawing is the unnumbered one at the top of p. 36. The page's remark is right.
- Weather remark (cyclones anticlockwise in the north, clockwise in the south): correct and standard. It is not in the notes, and the page does not attribute it to them.

## Licensing
- The notes are CC BY-NC-SA, and the text layer has no "rights reserved" or "courtesy" notice for Chapter 2 (grep). None of the notes' figures (the rotating basis vector, Fig. 2.6, the pendulum, the Earth axes) are redrawn. The only graphic is a Plot generated from (2.29).
- Paraphrase: the page is in its own words. The closest sentence is the description of the third force ("appears only when the rotation is not uniform, so that the frame has an angular acceleration"; the notes say "arises from non-uniform rotational motion, so that there is angular acceleration within the body frame"). This is short technical phrasing and acceptable, though it could be reworded further. The rise-and-return sentence for the thrown ball follows the notes' structure but is mostly mathematics. Neither is a problem.
- The worked example is original: the notes have no numbers, and the latitude, heights and speed are the page's own.

## Notes
- Site rules: no em dashes (0 found); every display equation is a `<Formula>` with `cite="reading1"` and an `at=` naming the section, equation and printed page; the page ends with `## Summary`. The three prerequisites exist.
- leadsTo Section 2.4: confirmed. The notes' Section 2.4 opens with τ = dL/dt = d_R L/dt + ω × L (2.66), which is exactly the claim.
- The page has no cosmology callout. That is fine for this section; no cosmology claims needed checking.
- The page says ω_Earth is from "notes p. 35" and the notes use 24 × 3600 s. The page's own sidereal remark is correct and says it makes no difference here.

## Resolution (2026-11-19, by the page author)

- Warning (physical explanation of the drifts): reworded in terms of conservation of angular momentum about the Earth's axis: rising, the ball's eastward speed drops while keeping pace with the ground would need more; falling, the stone's eastward speed grows.
- Info ("the two middle terms"): now "the third and fourth terms on the right", which are the two equal terms ω × d_R r/dt and ω × v_R.
- Other info items: no change needed (the 73 cm distractor stays as the value of the notes' misprinted formula).
