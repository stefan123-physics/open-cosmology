---
page: content/year-4/8.286/supernova-evidence.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-20-supernovae-ia-and-vacuum-energy-density/ (read: lecture page HTML, checked for notices)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/02cf009d0b92e400bc2ef271443c465f_RgScJ20EnW8.pdf (read: transcript pp. 1–13; printed footer = PDF page, checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec20/ (read: slides 1–7, text and rendered image of PDF p. 2)
verdict: needs-changes
---

# Review: The supernova evidence for acceleration

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Worked example, step "Open model" | (Not in MIT; recomputed) $2[0.1 - 1.8(\sqrt{1.1}-1)]/0.04 = 0.607204$ | $= 0.6073$ | Write $0.6072$. The values that follow ($d_L = 2601$ Mpc with $c/H_0 = 4282.7$ Mpc gives 2600.5; $m - M = 42.08$) are still correct when rounded. |
| 2 | warning | "Later developments" callout | — | "Light-curve corrections like MLCS remain standard." | Light-curve standardisation is still standard, but current samples (Pantheon+, DES-SN5YR) mostly use SALT2/SALT3 fits, not MLCS itself. Suggest "light-curve-shape corrections (today mostly SALT2/SALT3 fits, successors of MLCS) remain standard". |
| 3 | warning | "Later developments" callout | — | DESI hints "would favour something like quintessence over a pure vacuum energy" | The DESI best fits ($w_0 > -1$, $w_a < 0$) imply $w < -1$ at earlier times ("phantom crossing"), which the simplest single-field quintessence cannot produce. Suggest "would favour a dynamical dark energy (quintessence or something more exotic) over a pure vacuum energy". |
| 4 | info | Section 1, "his students worked them out on the homework" | p. 3: "you'll actually be asked to do those on the homework set" (future tense) | Past tense | Write "are left to the homework". |
| 5 | info | Section 1, opening paragraph | Slides 2–3 and pp. 1–2 recap the age integral $t_0 = H_0^{-1}\int_0^1 x\,dx/\sqrt{\dots}$ | Recap given in one clause, with no formula | Acceptable, since the age integral is on the Lecture 19 page. Could add a link to `age-with-vacuum-energy`. |
| 6 | info | "What the 1998 data showed", ΛCDM gloss | p. 7: "cold, dark matter is just what we've been calling non-relativistic matter" | Same | Faithful to Guth. Strictly, the "m" in ΛCDM is all non-relativistic matter (baryons plus CDM), so CDM by itself is a part of it. An optional bracket would make this precise. |
| 7 | info | Text after the plot | p. 8: "each tenth of a magnitude corresponds to about 10% in brightness" | Same | Faithful. For precision: $10^{-0.04} = 0.912$, so about 9%. 0.2–0.3 mag is 17–24%, close to Guth's "20–30%". No change needed. |

Formula citations checked:
- Flux formula $J = PH_0^2|\Omega_{k,0}|/[4\pi(1+z_S)^2c^2\sin^2\psi(z_S)]$, `reading2`, slide 6: **correct**. It is on slide 6 (boxed), and the page matches it.
- "$\psi(z_S)$ … (slide 5)": **correct**. The boxed $\psi$ integral and $\tilde a(t_0) = cH_0^{-1}/\sqrt{-\Omega_{k,0}}$ are on slide 5.
- Luminosity distance $J = P/(4\pi d_L^2)$, `reading1`, "p. 6 (board)": **correct**. It is defined at the board on transcript p. 6 and does not appear on any slide.
- Distance modulus, `reading1`, "pp. 5–6 (board)": **correct**. The definition $5\log_{10}(d_L/1\text{ Mpc}) + 25$ runs from the end of p. 5 onto p. 6, and the combined form $-\frac52\log_{10}(4\pi J(1\text{ Mpc})^2/P) + 25$ is on p. 6. Both are board work. I checked the algebra: the two forms are equivalent.
- The slide 7 axis label "m−M (mag)" with "MLCS" agrees with the page's description.

## Arithmetic and answer checks
I recomputed everything in Python (midpoint integration with 20000 steps) and checked the Plot expressions with mathjs from the repo's `node_modules`.
- $c/H_0$ at 70 km/s/Mpc is 4282.7 Mpc. Page: 4283. OK.
- Open model at $z = 0.5$: $H_0 d_L/c = 0.60720$. The page says **0.6073 (wrong in the last digit, finding 1)**. $d_L = 2600.5$ Mpc (page: 2601, OK) and $m - M = 42.075$ (page: 42.08, OK).
- $\int_0^{0.5} dz/\sqrt{0.24(1+z)^3 + 0.76} = 0.45056$. Page: 0.4506. OK.
- Vacuum model: $1.5 \times 0.45056 = 0.67584$ (page 0.6759, OK), $d_L = 2894.5$ Mpc (page 2894, OK), $m - M = 42.308$ (page 42.31, OK).
- $\Delta(m - M) = 0.2325$ (page 0.23, OK). Flux ratio $10^{-0.4 \times 0.2325} = 0.807$ (page 0.81, "about 19% fainter", OK).
- Plot caption: the vacuum model minus the open model is 0.2325 mag at $z = 0.5$ (caption 0.23, OK) and 0.2773 at $z = 1$ (caption 0.28, OK).
- Plot expressions, evaluated with mathjs:
  - The vacuum curve (40-point midpoint sum) gives 0.2326 at $z = 0.5$ and 0.2773 at $z = 1$ for $\Omega_m = 0.24$.
  - Setting $\Omega_m = 1$ reproduces the matter-only curve to $< 10^{-3}$ mag, a good consistency check.
  - The matter-only curve is −0.213 at $z = 0.5$ and −0.402 at $z = 1$.
  - The open-model closed form (Mattig) agrees with numerical integration: at $z = 0.7$ both give 0.906296.
  - The flat matter-only form $2(1 + z - \sqrt{1+z})$ is correct.
  - Minor: with the slider at $\Omega_m = 0.05$ the vacuum curve reaches 0.63 at $z = 1$ and leaves the fixed range of ±0.5. This is cosmetic only.
- Quiz:
  - Q1 (answer 1): correct (p. 2).
  - Q2 (answer 1): correct (p. 6).
  - Q3 (answer 1): correct. The minus sign gives larger $m - M$ for smaller $J$ (pp. 6–7).
  - Q4 (answer 1): correct (pp. 8–9). The "equivalently, at a given redshift the source is farther away" clause is a valid restatement.
  - Q5 (answer 1): correct (pp. 9–10).
  - All explanations are consistent with the transcript.
- Flashcards: all five are correct. The flux card matches slide 6. The distance-modulus card is right ("larger means dimmer and farther", as on p. 7).

## Coverage and order
- The page follows the transcript order for pp. 1–12:
  1. Recap of Lecture 19 (pp. 1–5)
  2. High-Z data on slide 7 (p. 5)
  3. Distance modulus and luminosity distance (pp. 5–6)
  4. MLCS (p. 6)
  5. The three models and the re-plot relative to the open model (pp. 6–7)
  6. ΛCDM (p. 7)
  7. 20–30% dimmer (p. 8)
  8. The "what year?" question (p. 8)
  9. Why dimmer means accelerating (pp. 8–9)
  10. Dust: reddening, gray dust, the student question, host-galaxy scatter (pp. 9–11)
  11. Evolution (a) and (b) (p. 11)
  12. CMB confirmation (p. 12)
  13. Quintessence (p. 12)
- Omitted: the Lecture 19 age-integral recap is only mentioned (finding 5). Guth's remark that the Ω = 1 model is the dashed, lowest curve is also omitted, which is harmless.
- Added: the original worked example, the generated model plot, and the later-developments callout. All are clearly the page's own.
- The split with `vacuum-energy-puzzle` (order 2, from p. 12 on) starts at the right place: the transition at the foot of p. 12 into "physics of vacuum energy".

## Licensing
- Slide 7 is a High-Z team data figure (Riess et al. 1998 style: upper panel m−M vs z with MLCS, lower panel Δ(m−M) with ΛCDM / Open / CDM labels). **The page does not reproduce it.** The Plot draws only the three model curves, computed from formulas, with no data points. Its axes are the page's own: linear z from 0.01 to 1, not the slide's log axis. The caption says "no data shown".
- I grepped the slides text, the transcript text and the OCW lecture and slide pages for "rights reserved", "courtesy" and "fair use" and found no matches. The rendered slide 7 has no visible credit line either. No `courtesy:` entry is needed.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short phrases. The closest paraphrases are:
  - the $d_L$ sentence ("the distance the source would have to be at, in a static Euclidean universe, to look as bright as it does", vs p. 6);
  - "it has speeded up to reach today's rate" (vs p. 8).

  Both are single-sentence paraphrases and acceptable. "Up for grabs" is a short quoted phrase, attributed to Guth.

## Notes
- leadsTo Lecture 23 (Inflation): the link is fair. On p. 12 Guth says quintessence is "in principle exactly the same as what we talk about for inflation in the early universe and will be talking about later". I did not read the Lecture 23 transcript, so whether it develops the scalar-field mechanism is **unverified**. Lecture 22 (Higgs field) may be an equally good or better target, also unverified.
- The later-developments callout is correctly marked as post-2013 (rule 5).
  - Pantheon+ (2022, about 1550 SNe) and DES-SN5YR (2024, about 1600 SNe) both fit "well over a thousand".
  - "Tens of objects in 1998" is right: High-Z used 16 high-z plus 34 nearby SNe, and SCP had 42 high-z.
  - DESI hints from 2024 (DR1) onward are correctly described as hints. See findings 2 and 3 for the wording.
- No `Callout kind="cosmology"` is needed, since this is itself an 8.286 page.
- The prerequisite `luminosity-and-redshift` exists.
- "Two were discussed seriously at the time" and "almost unanimous" (Guth: "almost 100%") are fair renderings.

## Resolution (2026-11-14, by the page author)

- Error: the open-model value in the worked example is now 0.6072.
- Warning (MLCS): the callout now says light-curve-shape correction remains standard, today mostly with the SALT2/SALT3 fitters.
- Warning (quintessence): the callout now says the DESI hints would favour some form of dynamical dark energy, and that the best fits are not easy to explain with the simplest quintessence models.
- Info: the homework remark now says Guth assigns the open and flat cases as homework; the plot's y range is extended to 0.7 so the curve stays on screen at small Ω_m. The other info items need no change; the Lecture 23 forward link is kept (Guth ties quintessence to inflation, which Lecture 23 covers).
