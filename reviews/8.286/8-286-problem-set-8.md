---
page: content/year-4/8.286/8-286-problem-set-8.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps8/ (read, pdftotext)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_pset8_supp/ (read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_pset8_supp2/ (read; 157 gold rows parsed)
  - 8.286 Lecture 19 transcript b891ffb6..._U_Ot1PTuUv4.pdf (read; printed footer = PDF page)
  - 8.286 Lecture 18 transcript fe429f43..._MKPswx4hjec.pdf (read, p. 20 only checked)
  - 8.286 Lecture 20 slides and transcript (not read in this session: budget)
  - https://arxiv.org/abs/1305.3943 (could not read: arxiv.org not reachable from this session)
verdict: pass-with-notes
---

# Review: Problem Set 8: brightness against redshift, and the supernova data

## Blind solve

### My answers (written before opening the full page)
- p1a: J = P H0² Ω_k,0 / [4π (1+z_S)² c² sinh²ψ_D], ψ_D = √Ω_k,0 ∫_0^{z_S} dz/E(z) (r = sinh ψ/√|k|).
- p1b: J = P H0² / [4π (1+z_S)² c² I²].
- p2a: ρ = (3H0²/8πG)[Ω_m,0/x³ + Ω_rad,0/x⁴ + Ω_vac,0 + Ω_ms,0/x^{3/2}].
- p2b: f(x) = x / √(Ω_m,0 x + Ω_rad,0 + Ω_vac,0 x⁴ + Ω_ms,0 x^{5/2} + Ω_k,0 x²), Ω_k,0 = 1 − ΣΩ.
- p3a: comoving distance to the quasar = half the present comoving horizon; ∫_0^z dz'/E = ∫_z^∞ dz'/E.
- p3b: z = 3.8248 (Ω_rad = 0; total ∫_0^∞ dz/E = 3.2402).
- p3c: z = 3.6513 (Ω_rad = 9.2e-5, Ω_vac = 0.685 − 9.2e-5).
- p4a: I(1) = 0.771427066.
- p4b: J/(P H0²) in 1e-19 s²/m²: z=0.1 766.500; 0.2 169.076; 0.3 67.3612; 0.4 34.4198; 0.5 20.2358; 0.6 13.0316; 0.7 8.95026; 0.8 6.45010; 0.9 4.82542; 1.0 3.71962; 1.1 2.93835; 1.2 2.36909; 1.3 1.94341; 1.4 1.61802; 1.5 1.36450.
- p5a: μ1(z=1, H0=66) = 43.630; μ2 − μ1 = 0.3416; μ3 − μ1 = 0.5978.
- p5b (own check, weighted best shift): 157 gold rows; shifts (data − model) 0.298, 0.177, 0.052; χ² 324.7, 211.0, 177.1 for models 1, 2, 3.
- p5c: model 3 (flat with vacuum energy) preferred; beyond z ≈ 1 the curves of models 3 and 2 approach each other (deceleration in the past), so high-z data separate the models.

### Comparison (one line per answer id)
- p1-a: page `P*H0^2*Ok/(4*pi*(1+z)^2*c^2*sinh(psi)^2)` = mine. Agree.
- p1-b: page `P*H0^2/(4*pi*(1+z)^2*c^2*I^2)` = mine. Agree.
- p2-a: page = mine (identical expression). Agree.
- p2-b: page = mine, with Ω_k written out as 1 − ΣΩ (four fractions). Agree.
- p3-a: page answer index 1 ("half the comoving distance light covers") = mine. Agree.
- p3-b: page 3.82, mine 3.8248. Agree.
- p3-c: page 3.65, mine 3.6513. Agree.
- p4-a: page 0.77143, mine 0.7714271. Agree.
- p4-b-05 / -10 / -15: page 20.236 / 3.7196 / 1.3645, mine 20.2358 / 3.71962 / 1.364499. Agree; the full 15-row table on the page matches mine row by row to the digits shown, I(z) column included.
- p5-a-mu1 / -21 / -31: page 43.63 / 0.342 / 0.598, mine 43.6302 / 0.34158 / 0.59778. Agree.
- p5-b (fit table, stored as facts): page shifts 0.30, 0.18, 0.05 and χ² 325, 211, 177; mine from ps8_supp2.txt (157 gold rows, weighted mean residual, H0 = 66): 0.298, 0.177, 0.052 and 324.7, 211.0, 177.1. Agree; the unrounded values in the calcs comment (0.2983/324.70, 0.1767/211.03, 0.0517/177.13) match mine.
- p5-c: same conclusion as mine.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 5(a) | MIT's Problem 5 asks only for the plot (and the remark on extending to z = 2/3). It does not ask for μ₁, μ₂ − μ₁, μ₃ − μ₁ at z = 1. | Part (a) is presented as part of MIT's problem; only "every other split between parts is ours" is said. Problem 3(c) is explicitly flagged "our own addition", 5(a) is not. | Add to the 5(a) statement: "This part is our own addition, a step towards the plot." |
| 2 | info | Problem 3(c), bracket "We take the zero to be a slip in the set" | MIT lists Ω_rad,0 = 0 as the authors' parameter. | Calls it a slip, citing the abstract (Planck best-fit values). | Fair. My numbers: Ω_rad = 0 gives 3.8248, Ω_rad = 9.2e-5 gives 3.6513, i.e. the paper's 3.65 to three figures only with radiation; the abstract's event horizon 1.87 is reproduced (1.8689). I could not read the abstract (arxiv.org unreachable), so the wording "the abstract says the parameters are the best-fit values of the Planck satellite" is unverified by me. The bracket already marks it as our inference; keep it. |
| 3 | info | Problem 5 statement | MIT also offers Ω_vac,0 = 0.6 instead of the flat case, and Ω_m,0 = 0.29, Ω_vac,0 = 0.71 to compare with Riess et al. Fig. 4; it also accepts the SCP table instead of Riess. | Uses the three main models and the Riess table only (SCP mentioned in a bracket). | Optional: one sentence naming MIT's two alternative models. |
| 4 | info | Problem 4 | MIT: "the result from Problem 4" | Page notes Problem 1 is meant. | None; correct handling of a slip. |

## Arithmetic and answer checks
- Every number in the solutions recomputed (script in the reviewer's scratch folder): Problem 1(a) check ψ_D = 0.5461, sinh = 0.5736, H0 d_L/c = 1.3712 (closed form agrees); 1(b) I_k = 0.7495, ψ = 0.2370, ratio 1.0094, 0.94%, 1.9% (1.85%); Problem 3 total 3.2402, u = 0.4553, x₁ = 0.2073, with radiation total 3.1800, x₁ = 0.2150, future integral 1.1497 → z = 1.87, gap 4.6 tolerances ("more than four"), shift 4.5% relative to 3.82 (4.54%); Problem 4 check 885 × 10⁻¹⁹, 13% (13.4%), 17% (17.4%), factor 562 (561.7); Problem 5 c/H0 = 4542.3 Mpc, 58% (57.7%), Δμ(3−2) = 0.256 at z = 1 and 0.189 at z = 2, maximum 0.256 near z = 0.99 (caption "at most about a quarter of a magnitude, near z = 1" correct). All correct.
- Problem 2 checks: matter only 2/3, mysterious stuff only x^(−1/4) → 4/3, a ∝ t^(4/3), p = −ρc²/2: all correct.
- Plot formulas: model 1 and 2 closed forms correct; model 3 uses a 40-point midpoint sum, error below 6 × 10⁻⁵ mag up to z = 2. Fine.
- Answer boxes: every `expr`/`value` equals the solution's result; `vars` ranges keep every formula finite (p2-b: Ω_k ≥ 0.05 over the ranges). Each mistake differs from the answer and each mistake hint is true of its formula (checked p1-a ×6, p1-b ×6, p2-a ×6, p2-b ×6).
- Problem 4's 0.01% tolerance: half a unit in the fifth figure is ≤ 0.004% for all three entries, so a correct 5-figure answer passes; 4-figure roundings 20.24 (0.02%), 1.365 (0.04%) are rejected and 3.720 (0.010%) is rejected only just; c = 3 × 10⁸ m/s (0.14%) is rejected. The tolerance fits MIT's "5 significant figures". p4-a 0.01% likewise fine.
- Hints: none gives a final result away (3(b) hint 2 restates part (a)'s condition, acceptable since (a) precedes).
- calcs: `pytest tests/calc` 13422 passed in the worktree; `content:check` 0 errors (only warning for this page: no review file yet).

## Coverage and order
- Five problems in MIT's order, points 25/20/20 + 20/20 extra credit as MIT gives; Problem 2's 10/10 split is MIT's; other splits are the page's and are said to be.
- `covers: [18, 19, 20]`: correct. MIT's calendar has Problem Set 7 due at L18 and Set 8 due at L20; Problem 1 is the Lecture 19 flux derivation (Lecture 20 slides recap), Problem 2 the Lecture 19 age calculation (with the Lecture 18 vacuum-energy rules), Problems 4 and 5 the Lecture 20 supernova material. Prerequisites are pages of Lectures 18–20.
- Added: Problem 3(c) (flagged as own addition), Problem 5(a) (not flagged, see #1), the χ² table and the two graphs.

## Licensing
- No MIT figure is redrawn; the graphs are generated from formulas, and the data points are from MIT's posted tables (OCW, CC BY-NC-SA; the tables are numbers from published papers). No "rights reserved" or "courtesy" notice in ps8.txt, the supplements or the Lecture 18/19 transcripts.
- Wording is the page's own; short MIT phrases ("mysterious stuff", "shared causal past") only.
- The Friedman et al. (APS, Phys. Rev. D) paper is cited via arXiv and only its abstract is claimed as read, as AGENTS.md rule 11 requires; the reviewer did not fetch the article.

## Notes
- Citations checked: Lecture 19 transcript pp. 4–5, 5, 8, 13–14, 16–18, 18–19 match the printed footers and the content (density rules, critical density, age integral, RW metric, flux, E(z)); Lecture 18 p. 20 has ρ̇ = −3H(ρ + p/c²). Lecture 20 slide numbers (slides 1–2, 2, 5–6) were not checked in this session: uncertain.
- values.yaml additions: H₀ = 66 is labelled `example`; it is the value Guth himself quotes in 2013 (fit to Riess et al.), so `Guth 2013:` would be the more accurate role (info). Ω_vac = 0.685 as `Guth 2013: Planck 2013, as quoted in PS8` is right. Ω_vac = 0.6 as `example` (the open alternative MIT allows; used in the 1(b) small-curvature check) is right. The existing Ω_m = 0.315 entry is labelled `later: Planck 2018`, but on this page 0.315 is the 2013 (Planck 2013 + WP) value quoted by Guth; consider adding that use to its label (info).
- No `## Summary` with answers; no em dashes found in the page text.

COUNTS: errors=0 warnings=1 info=5

## Resolution (2026-11-21, by the page author)

- Warning 1: Problem 5(a) now says it is our own addition, a step towards the plot.
- Info 5: H₀ = 66 in `calcs/values.yaml` is now labelled `Guth 2013` (his own fit value), not `example`.
- Info 2, 3, 4 and 6: no change (the Problem 3 slip note stands; the Lecture 20 slide citations were checked by the writer against the slides).
- Status set to `reviewed`.
