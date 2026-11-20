---
page: content/year-4/8.286/luminosity-and-redshift.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-19-the-cosmological-constant/ (read, via the provided local copy)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/b891ffb6658f5fbd1f93b3183315ac26_U_Ot1PTuUv4.pdf (Lecture 19 transcript, read; 19 pages, printed footer = PDF page, pp. 12–19 read page by page)
  - Lecture 19 slides mit8_286f13_lec19 (read; slides 1–8 cover the Lecture 18 summary and the age plots only, with nothing on luminosity vs redshift, and the page does not cite them)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-20-supernovae-ia-and-vacuum-energy-density/ (lecture page description only, used to check the forward link; Lecture 20 transcript/slides not read)
verdict: needs-changes
---

# Review: How bright is a distant supernova?

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Worked example, step (A) | (not MIT; arithmetic) 0.5505 × 4282.7 Mpc = 2357.7 Mpc | $d_L = 2359$ Mpc | Write $d_L \approx 2358$ Mpc. |
| 2 | error | Worked example, step (B) | (not MIT; arithmetic) 0.66148 × 4282.7 Mpc = 2832.9 Mpc | $d_L = 2835$ Mpc | Write $d_L \approx 2833$ Mpc. |
| 3 | warning | "Later developments" callout | n/a (post-2013) | Pantheon+ (2022) and DES 5-year (2024) "still require ... roughly 70% of the critical density" | From memory (I did not fetch the papers, so treat these figures as uncertain): in flat ΛCDM from supernovae alone, Pantheon+ gives Ω_m ≈ 0.334 (so Ω_Λ ≈ 0.67) and DES-SN5YR gives Ω_m ≈ 0.352 (so Ω_Λ ≈ 0.65). Suggest "roughly two-thirds (about 65–70%)". You could also say that DES-SN5YR combined with DESI BAO (2024–25) hints that dark energy may evolve. This would fit "vacuum-like" and Guth's p. 12 remark that observers are testing this. |
| 4 | info | Slip note after "ã(t₀) from the curvature fraction" | p. 17: "c times the inverse of the present Hubble expansion rate times the square root of minus omega sub k comma zero" | $\tilde a(t_0) = cH_0^{-1}/\sqrt{-\Omega_{k,0}}$ plus a bracketed note | The note is correct. From $\Omega_{k,0} = -kc^2/(a^2(t_0)H_0^2)$ and $\tilde a = a/\sqrt k$ you get $\tilde a^2(t_0) = -c^2/(H_0^2\Omega_{k,0})$, so the root divides. Keep the note. |
| 5 | info | "Changing variable to redshift" paragraph | p. 18: "H squared -- which is x dot over x squared" (transcript slip; it should be $(\dot x/x)^2$) | Writes $H^2 = H_0^2F(x)/x^4$, says it comes from the first half of the lecture | The page does not repeat the slip, so nothing is needed. Note that Guth rewrites this relation on the board at p. 18. |
| 6 | info | Throughout | Guth calls the angle $\psi_d$ (detector, source at centre) on pp. 15–17 and $\psi(z_s)$ / "psi of s" on pp. 18–19 | Page mixes $\psi_d$ and $\psi_s$ the same way | Optional: add one clause saying $\psi_d$ and $\psi_s = \psi(z_s)$ are the same coordinate separation. |
| 7 | info | Formula label "Angle to a source" vs flashcard 4 | — | $\Omega_{\text{rad},0}$ in the formula, $\Omega_{r,0}$ in the flashcard | Cosmetic. Pick one, consistent with age-with-vacuum-energy, which also mixes them. |

Citation check, formula by formula (all board, none on slides; checked against the printed footers with `pdftotext -f N -l N`):
- RW metric, "pp. 13–14 (board)": correct. It starts at the foot of p. 13 and the closing "end curly brackets" is on p. 14.
- Radial angle $\sin\psi = \sqrt k\,r$ and $d\psi = \sqrt k\,dr/\cos\psi = \sqrt k\,dr/\sqrt{1-kr^2}$, "p. 14": correct.
- Closed metric with $\psi$ and $\tilde a = a/\sqrt k$, "p. 14": correct.
- Fraction $A/(4\pi\tilde a^2(t_0)\sin^2\psi_d)$, "pp. 15–16": correct. Area of detector over area of sphere is on p. 15, the explicit $4\pi\tilde a^2(t_0)\sin^2\psi_d$ on p. 16.
- $1+z_s = a(t_0)/a(t_e)$, "p. 16": correct.
- $P_\text{rec}$ and $J$, "pp. 16–17": correct. $P/(1+z_s)^2$ is on p. 16; the fraction and $J$ are on p. 17.
- $\tilde a(t_0)$, "p. 17": correct, with the slip handled (row 4).
- Null ray $d\psi/dt = c/\tilde a$, "p. 18": correct.
- $dz = -\tilde a(t_0)\dot{\tilde a}\,dt/\tilde a^2 = -\tilde a(t_0)H\,dt/\tilde a$ and $\psi_s = \tilde a(t_0)^{-1}\int_0^{z_s}c\,dz/H(z)$, "p. 18": correct, and the algebra checks.
- $\psi(z_s) = \sqrt{|\Omega_{k,0}|}\int_0^{z_s}dz/\sqrt{\Omega_m(1+z)^3+\Omega_r(1+z)^4+\Omega_\text{vac}+\Omega_k(1+z)^2}$, "p. 19": correct. It also follows algebraically from the two previous results with $H = H_0E(z)$.

## Arithmetic and answer checks
I recomputed everything with a Python script (midpoint rule, 200,000 steps) and evaluated the plot expression with the repo's mathjs.
- $c/H_0$ at 70 km/s/Mpc = 4282.7 Mpc. The page's 4283 is OK.
- (A) $\int_0^{0.5}(1+z)^{-3/2}dz = 2(1-1/\sqrt{1.5}) = 0.36701$ and $H_0d_L/c = 0.55051$, both OK. $d_L = 2357.7$ Mpc, but **the page says 2359** (row 1).
- (B) $\int_0^{0.5}dz/\sqrt{0.3(1+z)^3+0.7} = 0.44098$ (page 0.4410, OK) and $H_0d_L/c = 0.66148$ (page 0.6615, OK). $d_L = 2832.9$ Mpc, but **the page says 2835** (row 2).
- $J_B/J_A = (0.55051/0.66148)^2 = 0.6926$. The page's 0.69 is OK.
- Curvature step: the integral with Ω_m = 0.31, Ω_vac = 0.70, Ω_k = −0.01 is 0.44033, so $\psi_d = 0.044033$ (page 0.0440, OK). $H_0d_L/c = 1.5\sin(0.044033)/0.1 = 0.66028$ (page 0.6603, OK). Relative change −0.18% (page "0.2% below", OK). Note: if you use the rounded ψ = 0.0440 you get 0.6598, so the page correctly used the unrounded value.
- Plot: the mathjs expression parses and evaluates (`1:40` is an inclusive range, `.^` elementwise). With Ω_m = 0.3 it gives 0.6926 at z = 0.5 and 0.5766 at z = 1, which matches the caption's 69% and 58%. Exact integrals give 0.6926 and 0.5766, so the 40-point midpoint rule is accurate enough. With Ω_m = 1 the curve is 1.0000–1.0003 over the domain, as expected. At x = 0 the expression is 0/0 = NaN at a single point, which does no harm. The closed form $H_0d_L/c = 2(1+z)(1-1/\sqrt{1+z})$ for flat matter-only is correct. Using ratios of $\int dz/E$ is valid because the $(1+z)$ factors cancel.
- The caption's claim "fainter ... than a decelerating universe allows" holds at z = 0.5 even against the empty (coasting) universe: $H_0d_L/c = z + z^2/2 = 0.625 < 0.6615$. The plot itself compares only with Ω_m = 1 (info only).
- Open-universe bullet: with $\sinh\psi = \sqrt{|k|}\,r$ and $\tilde a = a/\sqrt{|k|}$ you get $\tilde a(t_0) = cH_0^{-1}/\sqrt{\Omega_{k,0}}$. Correct. Flat limit: $\tilde a(t_0)\sin\psi_d \to \tilde a(t_0)\psi_d = (c/H_0)\int_0^{z_s}dz/E$. Correct. $d_L = (1+z_s)\tilde a(t_0)\sin\psi_d$ follows from $J = P/(4\pi d_L^2)$. Correct. The page clearly marks this section as its own addition.
- Quiz:
  - Q1 (answer 1): correct, see p. 13.
  - Q2 (answer 1): correct, see p. 16.
  - Q3 (answer 1, $4\pi\tilde a^2(t_0)\sin^2\psi_d$): correct, see p. 16.
  - Q4 (answer 1, $c/\tilde a$): correct, see p. 18.
  - Q5 (answer 1, about 69%): correct. 1/1.2016² = 0.6926, and the distance ratio is 0.66148/0.55051 = 1.2016.
  - All explanations are right.
- Flashcards: all four match the formulas above.

## Coverage and order
- The page follows transcript pp. 13–19 in MIT order:
  - motivation from the 1998 supernova teams, looking back 5–6 billion years (p. 13)
  - curvature below 1 part in 100, possibly present at 1 in 1,000 (p. 13)
  - RW metric (pp. 13–14)
  - closed-case angle ψ and $\tilde a$ (p. 14)
  - student question about the units of $a$ and $\tilde a$ (p. 15)
  - sphere and detector (pp. 15–16)
  - two factors of $1+z$ (p. 16)
  - $J$ (p. 17)
  - $\tilde a(t_0)$ from $\Omega_{k,0}$ (p. 17)
  - null geodesic (pp. 17–18)
  - change of variable to $z$ (p. 18)
  - final $\psi(z_s)$ (p. 19)
  - the 1998 fit needing 60–70% vacuum energy (p. 19)
- Nothing of substance is left out. Small asides are dropped: "many astronomers who know general relativity can figure this out" (p. 17), and the closing remark that Thursday continues with the physics of vacuum energy (p. 19), which the cosmology callout covers.
- Additions: the "Flat and open universes" section, the luminosity distance, the plot and the worked example. All are clearly marked or obviously original.

## Licensing
- `grep -il "rights reserved\|courtesy"` on transcript.txt and slides.txt finds nothing. The transcript is CC BY-NC-SA. No figures or slides are reused, and the page draws its own plot from formulas.
- No verbatim copying found. Paraphrases such as "any clock at the source appears slowed by $1+z_s$" are rewritten, and only standard phrases are shared.
- No OpenStax or LibreTexts material. The worked example is original (own numbers; MIT has no numerical example here).

## Notes
- Forward link and cosmology callout: the OCW Lecture 20 page is titled "Supernovae Ia and Vacuum Energy Density". Its description reads "first talked about supernovae type Ia; summarized the age of the universe and radiation flux versus redshift; and talked about vacuum energy density." This supports the `leadsTo` reason and the callout. The "puzzle Guth has promised" is promised in this lecture: on p. 12 he says that estimating the magnitude of the vacuum energy is where "we're really totally clueless", to be discussed "at the end of today or next time". I did not read the Lecture 20 transcript, so I have not checked that it explicitly covers the theoretical estimate, though that is likely.
- Possible improvement (uncertain, not checked): the OCW description says Lecture 20 opens by summarising "radiation flux versus redshift", so its opening slides may show the p. 13–19 board formulas. Under the AGENTS.md convention you could add those slides as a second reading for these formulas. The current transcript citations are correct as they stand.
- "Later developments" is correctly marked as post-2013. Only the 70% figure needs softening (row 3).
- Before `status: reviewed`: fix rows 1–2 (and preferably 3).

## Resolution (2026-11-14, by the page author)

- Errors (worked example): $d_L$ corrected to 2358 Mpc (A) and 2833 Mpc (B), using $c/H_0 = 4282.7$ Mpc (the earlier figures had used $c = 3\times10^5$ km/s).
- Warning (later developments): the callout now says supernova samples on their own give roughly two-thirds of the critical density (about 65–70%), and mentions the 2024–25 DESI hint of evolving dark energy as an open question.
- Info: the flashcard now writes $\Omega_{\text{rad},0}$, matching the page. The ψ_d / ψ_s labels are left as Guth uses them. The Lecture 20 slides are not added as a source here; they will be read when Lecture 20 is written.
