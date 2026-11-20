---
page: content/year-4/8.286/robertson-walker-closed.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/94d64e9de7dffb202372b30df69c48a5_ARuzDX55Xnk.pdf (read, local copy of the Lecture 11 transcript; pp. 20-25 checked line by line)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-11-non-euclidean-spaces-closed-universes/ (not fetched; the transcript was read from a local copy, and the slide content was checked through the structured study notes for Lecture 11, which list slides 1-21 and their notices)
verdict: pass-with-notes
---

# Review: Curvature and expansion — the Robertson–Walker metric

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example, Problem: "Measurements quoted by Guth put Ω_total within about half a percent of 1" | Lecture 11 (pp. 20-25) quotes no measured value of Ω and no value of H. Guth only says Ω → 1 is the flat case (p. 24). | Attributes a measurement to Guth, with no lecture cited. | Either cite the lecture where Guth quotes the Planck value of Ω, or drop "quoted by Guth" and say "Current measurements (e.g. Planck 2013) put…". |
| 2 | warning | Last paragraph of "The Robertson–Walker metric", and `leadsTo` ("the full spacetime metric") | End of transcript p. 25: only closed universes have been discussed; "open will in fact follow very quickly", and the next lecture begins with open universes. The time part of the metric is not mentioned. | "the open case and the time part of the metric follow in the next lecture." | Keep "the open case follows in Lecture 12". Only keep "the time part" if the Lecture 12 transcript confirms it (not checked here, so this is uncertain). Same for the `leadsTo.why` text. |
| 3 | info | "The curvature itself is $1/R$." | Guth says "1 over r is really the curvature" (p. 23). | Same. | Optional: add "(loosely; the Gaussian curvature of a 3-sphere is $1/R^2$)". |
| 4 | info | "a universe at exactly the critical density is flat, which is where the name 'flat' comes from" | Guth: Ω approaching 1 "is the flat universe case", and the formula "shows it very directly" (p. 24). He does not say this is where the name comes from. | Adds the naming claim. | Optional: "which is why it is called the flat case". |
| 5 | info | Worked example, Meaning step: "matter-only formula … with dark energy the relation … keeps the same form, as later lectures show" | Not in Lecture 11. | Hedge. | The physics is right: with any extra component in ρ the Friedmann equation gives $kc^2/a^2 = H^2(\Omega_\text{tot} - 1)$, i.e. $\Omega_k = -kc^2/(a^2H^2)$, so $R = cH^{-1}/\sqrt{\Omega_\text{tot}-1}$ is unchanged. But the derivation on the page never used "matter only", only total ρ, so "matter-only formula" undersells it. Suggest "the formula holds with Ω the total density parameter, including dark energy". |

Checks that match the source:
- **R ∝ a** (p. 21): all distances in the sphere metric scale with R, all physical distances with a, so R(t) ∝ a(t). Matches.
- **Units argument** (pp. 21-22): R in m, a in m/notch, k in notch⁻², giving R² = (dimensionless const) × a²/k. Matches. The page writes "× a²/k". It does **not** repeat Guth's board slip ("="), which a student caught on p. 22. Citation `pp. 21–22` is correct.
- **Constant = 1** (p. 23, "I'll just tell you the answer"): matches. It is stated, not derived, and the page says so. `p. 23` is correct.
- **R² = a²c²/(2|E|)** (p. 23): Guth first wrote 2E. A student caught the missing minus sign, and he fixed it with an absolute value (E < 0, k > 0). The page gives the corrected form and states E < 0. Matches.
- **R = cH⁻¹/√(Ω−1)** (p. 24): rederived. $H^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2}$ with $\rho = \Omega\rho_c$ and $\rho_c = 3H^2/(8\pi G)$ gives $kc^2/a^2 = H^2(\Omega-1)$. Then $R^2 = a^2/k = c^2/[H^2(\Omega-1)]$, so $R = cH^{-1}/\sqrt{\Omega-1}$. Correct, and `p. 24` is correct.
- **"Curvature is relativistic"** (pp. 23-24): R → ∞ as c → ∞ at fixed density and H. Matches.
- **"Flat as Ω → 1"** (p. 24): matches what Guth means. Note that on p. 24 he misspeaks ("goes to 0 as omega goes to 1") and in the next sentence says correctly that it goes to infinity. The page has the correct version.
- **Robertson–Walker metric** (pp. 24-25): ds² = (a²/k)[du²/(1−u²) + u²dΩ²] with r ≡ u/√k = sin ψ/√k, giving ds² = a²[dr²/(1−kr²) + r²(dθ² + sin²θ dφ²)]. Matches. Rechecked: du = √k dr, so (a²/k)·k dr²/(1−kr²) = a²dr²/(1−kr²), and (a²/k)u² = a²r². r is in notches, as the page says. `p. 25` is correct.
- **Lecture 9 link** ("a/√k is the radius of curvature"): consistent with the study notes. ã = a/√k from Lectures 9-10 is exactly R.

## Arithmetic and answer checks
- c/H = 299,792.458/67.3 = 4454.6 Mpc. The page's "4450" is a fair rounding.
- R = 4454.6/√0.005 = 4454.6 × 14.142 = 62,997 Mpc ≈ 63 Gpc. Correct. (The page's intermediate 4450 × 14.1 = 62,745 also rounds to 63,000.)
- "Far larger than the horizon distance": today's horizon (particle-horizon) distance is about 14 Gpc (≈ 46 Gly), so R is roughly 4.5 × the horizon. "Far larger" is fair. "Indistinguishable from flat" is a little strong for a factor of 4.5, because curvature at that level is constrained, not invisible. Optional: "very nearly flat".
- Plot: the curve 1/√(W−1) is R in units of c/H. The point (2, 1) is correct: Ω = 2 gives R = c/H. At the left end of the domain (W = 1.001) y = 31.6, beyond the range of 12, so the curve is clipped at the top. That is acceptable and conveys the divergence.
- Quiz (answers are 0-based indices, per components/Quiz.tsx):
  - Q1, answer 1 = "R² = a²/k": correct. The explanation is correct.
  - Q2, answer 1 = "Infinite — space would be flat": correct (p. 23).
  - Q3, answer 2 = "R → ∞ (flat)": correct.
- Flashcards: all three formulas match the transcript (pp. 23, 24, 25).

## Coverage and order
- The page covers section E of Lecture 11 (transcript pp. 20-25), in Guth's order: R ∝ a, units, constant = 1, k = −2E/c² and the sign, R in observables, the limits c → ∞ and Ω → 1, and the RW metric. The 2-sphere, the 3-sphere and the u coordinate (pp. 4-20) are on the prerequisite page `sphere-metrics`. Nothing in section E is left out.
- Added beyond the source: the plot, and the worked example with H = 67.3 and Ω − 1 = 0.005 (see rows 1 and 5).

## Licensing
- No slide images are reused. All the physics on this page comes from Guth's board work (pp. 20-25), which carries no restriction notice. None of the restricted slides of Lecture 11 (the review slides 2-4 and 11-16, credited to Amin, and slide 9, "All rights reserved") are used.
- The text is paraphrased. No verbatim transcript passages were found. Short phrases such as "how matter curves space" and "relativistic effect" are standard terminology.
- No OpenStax or LibreTexts material.

## Notes
- There are no `Callout kind="cosmology"` blocks. `leadsTo` points to Lecture 12, which is correct for open universes. See row 2 for "full spacetime metric".
- `references: {}` is empty while `cite="reading1"` is used. That is consistent with the other 8.286 pages, if `reading1` resolves to `source.readings[0]`.
- The Lecture 12 transcript was not available, so the "time part next lecture" claim could not be verified either way.

## Resolution (2026-11-14, by the page author)
- The half-percent Ω measurement is now attributed to Lecture 7, with a link.
- Forward pointer now names Lecture 12 by its OCW title ("… Open Universes and the Spacetime Metric") instead of claiming what Lecture 11 promised.
- Curvature: Guth's "1/R" kept, with a note that Gaussian curvature is usually 1/R²; "flat" naming and "indistinguishable from flat" softened; dark-energy remark now says the relation holds with total Ω.
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
