---
page: content/year-1/8.01/circular-motion-dynamics-examples.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter9/ (read: local copy ch9.pdf / ch9.txt; page numbers checked one by one with pdftotext -f N -l N against the printed "9-N" footers)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/11-1-newtons-2nd-law-and-circular-motion/ (read: local copy of the segment page; it only identifies the segment)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html (not fetched; the three values were checked against the values given in the task brief and are consistent with each other and with the known areostationary altitude of about 17,000 km)
  - content/year-5/Ferreras/galaxy-clusters.mdx (read, for the cosmology callout)
  - content/year-1/8.01/newtons-second-law-circular-motion.mdx (read, for repetition)
verdict: needs-changes
---

# Review: Circular motion dynamics: worked problems

The physics, every number and every quiz answer are correct, and the worked examples use their own numbers and situations. The verdict is "needs-changes" only because of page citations: several formulas from Examples 9.2, 9.3 and 9.4 cite a page one too early. The PDF footers were checked page by page: Example 9.2's $r_2$, Eq. (9.3.8) and the Earth–Moon 0.17 d all fall on p. 9-10, $T_1$ is on p. 9-12, and Eq. (9.3.11) is on p. 9-13.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Radius of each star's circle" | $r_1 = G m_2/(\omega^2 s^2)$ is at the foot of p. 9-9; $r_2 = G m_1/(\omega^2 s^2)$ is at the top of p. 9-10 | `at="Example 9.2, p. 9-9"` | `at="Example 9.2, pp. 9-9–9-10"` |
| 2 | error | Formula "Period of a double star" | Eq. (9.3.8) is on p. 9-10 | `at="Eq. (9.3.8), p. 9-9"` | `at="Eq. (9.3.8), p. 9-10"` |
| 3 | error | Text after the double-star formula: "about 0.17 days in a month (notes, p. 9-9)" | The Earth–Moon calculation ($2.33 \times 10^6$ s, "0.17 d shorter") is on p. 9-10 | p. 9-9 | "(notes, p. 9-10)" |
| 4 | error | Formula "Tensions in the two strings" | $T_2 = m_2\,2d\,\omega^2$ is on p. 9-11; $T_1 = d\omega^2(m_1 + 2m_2)$ is on p. 9-12. The example starts on p. 9-10, but neither result is on that page | `at="Example 9.3, pp. 9-10–9-11"` | `at="Example 9.3, pp. 9-11–9-12"` |
| 5 | error | Formula "Tension gradient" | Eq. (9.3.11) is on p. 9-13 (Eq. (9.3.9) is the last one on p. 9-12; (9.3.10) and (9.3.11) open p. 9-13) | `at="Eq. (9.3.11), p. 9-12"` | `at="Eq. (9.3.11), p. 9-13"` |
| 6 | warning | Cosmology callout | Ferreras (galaxy-clusters page): Zwicky used the velocity *dispersion* of galaxies on random orbits, a "hot" system weighed with the virial theorem ($M \approx 3\sigma^2 R/G$), not circular orbits | "Zwicky applied the same idea, Newton's second law with gravity supplying the acceleration" | The broad idea ("motion weighs a system") is fair, but "the same idea" overstates it. Suggest: "a related idea: with the virial theorem he turned the spread of the galaxies' speeds in the Coma cluster into a mass", or cite `ferreras` for the claim |
| 7 | info | Section "A ball circling inside a cone" | The notes also give the inward force in closed form, $F_{\text{cent}} = N\cos\theta = mg\cot\theta$ (p. 9-14), and ask for the time per orbit | The page leaves out $mg\cot\theta$; the period appears only inside the worked example ($T = 2\pi r/v$) | Optional: add a line giving $T = 2\pi r/v = 2\pi v\tan\theta/g$ and the $mg\cot\theta$ result, since the notes ask for both radius and period |
| 8 | info | Cone notation | Notes use $v_0$ for the constant speed | $v$ | Fine. The angle convention matches the notes exactly (see Notes) |
| 9 | info | Whirling string | Notes: the inner and outer objects are at $d$ and $2d$ | The page's toy uses 0.30 m and 0.60 m, the same 1:2 geometry | This is needed to use the notes' formula, and the masses, speed and setting are new. Acceptable |

## Arithmetic and answer checks
All recomputed independently (Python):
- Mars: $\omega = 2\pi/(24.6229 \times 3600\ \text{s}) = 7.0882 \times 10^{-5}$ s⁻¹ ✓; $r_s = (4.2828\times10^{13}/\omega^2)^{1/3} = 2.0428 \times 10^7$ m ✓ (20,400 km); height $20{,}427.6 - 3389.5 = 17{,}038$ km, "about 17,000 km" ✓.
- Notes' geostationary orbit: 6.62 $R_e$ on p. 9-7 ✓ (Eqs. (9.3.4), (9.3.5) and (9.3.7) all confirmed on p. 9-7).
- Earth–Moon: $2.3489\times10^6 - 2.3346\times10^6$ s = 0.166 d ≈ 0.17 d ✓ (the number is right, only the page is wrong, see #3).
- Two Suns 1 AU apart: $1\ \text{yr}/\sqrt2 = 0.7071$ yr = 258.3 d ✓ (direct computation with $GM_\odot$ and 1 AU gives 258.28 d as well).
- Whirling toy: $T_2 = 0.10 \times 0.60 \times 100 = 6.0$ N ✓; $T_1 = 0.30 \times 100 \times 0.40 = 12.0$ N ✓ (check: inner mass needs $0.20 \times 0.30 \times 100 = 6$ N, plus 6 N from the outer string).
- Rope graph: $m = 1.5$ kg, $\omega = 4$ rad/s, $L = 2$ m: $T(0) = 24$ N ✓, $T(1) = 18$ N ✓; "doubling ω multiplies every tension by four" ✓.
- Marble: $r = 4.0 \times 0.57735/9.81 = 0.2354$ m ✓; $T = 2\pi \times 0.2354/2.0 = 0.740$ s ✓.
- Coin: $\omega_{\max} = \sqrt{0.40 \times 9.81/0.15} = 5.115$ rad/s ✓ = 48.84 rpm ✓; 45 rpm = 4.712 rad/s ✓; 78 rpm = 8.168 rad/s ✓; conclusions ✓.
- Quiz 1 (answer index 2, "shorter by √2") ✓. Quiz 2 (index 1, inner string) ✓. Quiz 3 (index 2, falls by √2) ✓. Quiz 4 (index 2, horizontal part of the normal force) ✓. All explanations correct.
- Flashcards: all four formulas agree with Eqs. (9.3.5), (9.3.8), (9.3.13) and (9.3.21) ✓.
- `npm run calc:test`: 1054 passed (includes this page's file).
- **calcs file** (`calcs/8.01/circular-motion-dynamics-examples.yaml`): every value is right, but some `source.at` fields repeat the page-citation errors: `double-star-algebra`, `earth-moon-difference`, `double-sun`, `double-sun-days` and `quiz-double-mass` cite p. 9-9 (should be p. 9-10); `shaft-inner` cites p. 9-11 (should be p. 9-12); `rope-solution` cites "pp. 9-12–9-13" (Eqs. (9.3.11)–(9.3.13) are all on p. 9-13). `rpm-45` and `rpm-78` cite "p. 9-16" for a plain unit conversion that is not in the notes (info). `mars-omega` and `mars-height` use `{cite: marsfact}` where the facts use `{ref: marsfact}`; the harness accepts it, and `uniform-circular-motion.yaml` does the same (info).

## Coverage and order
- All six examples of Section 9.3 are covered, in the notes' order: 9.1 geosynchronous orbit → 9.2 double star → 9.3 rotating objects → 9.4 rope → 9.5 cone → 9.6 turntable ✓.
- Within each example the notes' method is followed (radial second law; adding $r_1 + r_2 = s$; separate free-body diagrams for the two masses; slicing the rope into a differential equation integrated from $T(L) = 0$; dividing the two cone equations; friction reaching $\mu_s N$).
- Left out: the vector forms (9.3.1)–(9.3.3), (9.3.14)–(9.3.15), the coordinate-choice discussion, and the cone's $mg\cot\theta$ (see #7). This is acceptable for a worked-problems page.
- Added: the "recipe" introduction, the Mars, two-Suns, toy, funnel and record-player examples, the rope graph, and the cosmology callout.
- Repetition with `newtons-second-law-circular-motion`: little. That page already says in brackets that a double star's period depends on the total mass, and ends with a "weighing by orbits" callout (Milky Way rotation curve). This page's callout repeats the "weighing" idea at cluster scale; they complement each other. The phrase "as for the banked turn" correctly points to that page's division of the two equations. Its frontmatter already says the Section 9.3 examples are on this page ✓.

## Licensing
- No "All rights reserved" or "Courtesy of" notices anywhere in Chapter 9 or the downloaded segment pages (grep of all .txt/.html files). No figures reproduced; the only graph is generated from Eq. (9.3.13).
- No verbatim copying found: the explanations are rewritten. Shared wording is only standard terminology ("slides without friction", "static friction", "centre of mass").
- Every worked example is new (Mars instead of the Earth, two Suns instead of a general binary/Earth–Moon, numerical toy, funnel, record player). The notes' Earth results (6.62 $R_e$, 0.17 d) are only quoted as the notes' results and cited ✓.
- No OpenStax/LibreTexts material. The NASA fact sheet is a US-government data source, used for numbers only.

## Notes
- **Cone angle convention** (checked as asked): the notes define $\theta$ as the apex half-angle measured from the vertical axis (Example 9.5, p. 9-13) and write $N\cos\theta = mv^2/r$, $N\sin\theta = mg$, $\tan\theta = rg/v^2$, $r = v^2\tan\theta/g$ (p. 9-14). The page uses the same convention and states the geometry correctly: the wall makes $\theta$ with the vertical, so the normal makes $\theta$ with the horizontal. Limit check: a narrow cone (small $\theta$) gives a small $r$ ✓. The funnel's "wall makes 30° with the vertical axis" is consistent.
- **Plot** (warning, not a source difference): the curve's expression hard-codes $L = 2$ (fine, the caption says so), but the point `{ x: 1, y: 18, label: "18 N at 1 m" }` is fixed, so it leaves the curve as soon as a reader moves the $m$ or $\omega$ slider. Suggest a point bound to the curve (`{ curve: 0, at: … }` with a fixed `r` parameter) or no label number.
- **Symbols** (`data/symbols.json`): the meanings scoped to this page (μ, μ_s, ω, ω_max, T, T_1, T_2, d, m, m_s, m_1, m_2, g, v, r, r_1, r_2, s, L, N, R) are correct. Gaps:
  - (warning) `r_s` has only the general meaning "The Schwarzschild radius, 2GM/c²". This page uses $r_s$ for the stationary-orbit radius, so the popup and "Symbols on this page" would show the wrong meaning. Add a meaning scoped to this page ("the radius of the stationary orbit, measured from the planet's centre", unit m).
  - (info) $\theta$ falls back to the general "An angle." A scoped meaning ("the cone's half-angle, measured from its vertical axis") would help.
  - (info) The `T` meaning covers the double-star period and the rope tension, but $T$ is also the marble's time per turn (funnel example) and the period in the callout; say "a period (double star, marble in the funnel)".
  - (info) The `m` meaning ("planet, rope, object in cone or on turntable") is fine; the callout's $m_1 + m_2$ is covered by m_1/m_2.
- **leadsTo**: 8.01 Lesson 12 is "Pulleys and Constraints" in `_course.json` ✓; Ferreras 2.3 is `galaxy-clusters` ✓, and Zwicky 1933 / Coma agrees with that page. Optional: Lesson 13 ("Massive Rope") continues the continuous-rope method of Example 9.4 and could be a second `leadsTo`.
- The `content:check` run shows only the "no review file yet" warning for this page (before this review was written). No em dashes found in the page text.
- Not verified: the live NASA fact sheet (not fetched). The values match the ones given in the brief and the computed areostationary altitude matches the commonly quoted ≈17,000 km.

## Resolution (2026-11-15, by the page author)

- **Citations:** "Radius of each star's circle" now cites pp. 9-9–9-10; "Period of a double star" (Eq. 9.3.8) and the 0.17-day Earth–Moon note cite p. 9-10; "Tensions in the two strings" cites pp. 9-11–9-12; "Tension gradient" (Eq. 9.3.11) cites p. 9-13. The calcs file's `at` fields were corrected to match (double-star-algebra, earth-moon-difference, double-sun, double-sun-days, quiz-double-mass, shaft-inner, rope-solution).
- **Cosmology callout:** reworded. Zwicky used the same principle (speeds of bodies bound by gravity reveal the mass) with the virial theorem, since cluster galaxies move on random orbits, not circles.
- **Rope graph:** the fixed "18 N at 1 m" point is replaced by a point on the curve that follows an r slider, so it stays on the curve when m or ω change; the caption says so.
- **Symbols:** added page-scoped meanings for r_s (radius of the stationary orbit) and θ (the cone's half-angle from the vertical axis); the T meaning now also names the marble's period.
- Minor notes (cone result mg cot θ, a second leadsTo to Lesson 13) left as they are: the page states both force components, and Lesson 13 follows directly as the next page.
