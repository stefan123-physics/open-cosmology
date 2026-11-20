---
page: content/year-5/8.962/frw-cosmology-from-symmetry.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/4a374ede6b01ec89d1962085190fc1e5_wBvXOb59l-k.pdf (read: local copy L18.pdf, 20 pages, extracted with pdftotext; page markers checked against pdftotext -f N -l N for pp. 3, 8, 13, 19)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-18-cosmology-i/ (not opened separately; the lecture has no slides or notes, only the transcript)
  - Carroll, Spacetime and Geometry, sec. 3.9 and ch. 8 (from memory, fact-checking only: eqs. for maximally symmetric Riemann tensor, R_11 = (2/r) d beta/dr, R_00 = -3 a''/a, R_ij = (a a'' + 2 a'^2 + 2 kappa) gamma_ij, rescaling k -> k/|k|)
verdict: needs-changes
---

# Review: Cosmology from symmetry: the Robertson–Walker metric and the Friedmann equations

The page follows Lecture 18 closely and in order, its formulas are correct in signature (-,+,+,+) with c = 1, and every number checks out. The F1/F2 labels match Hughes's usage (p. 14: "take F1 ... left-hand side as H squared"; p. 19: "Friedmann 1 becomes a dot over a squared"). The bracketed corrections of the k-rescaling slip (p. 8), "kappa is greater than 1" (p. 14) and "to the fourth power" (p. 17) are right. The errors are in how the page handles Hughes's miscount of the Minkowski Killing vectors, in the body and in the quiz's marked answer.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Maximally symmetric spaces", second example (line 65) | p. 2: "I have 3 rotations, 3 translations, and 4 boosts". This is a slip. Minkowski spacetime has 3 rotations, 3 boosts and 4 translations (3 spatial plus time). | "which Hughes lists as 3 rotations, 3 translations and 4 boosts (the fourth 'boost' being the time translation)". This turns the slip into a grouping that does not exist, because a time translation is not a boost. | State the correct count (3 rotations, 3 boosts, 4 spacetime translations) and add a bracketed slip note: [Hughes says "3 translations and 4 boosts"; the numbers are the other way round.] |
| 2 | error | Quiz 1, marked answer (choice index 1) and explanation | as #1 | The correct choice reads "10, namely 3 rotations, 3 translations and 4 boosts", which is physically wrong (there are 3 boosts). The explanation then gives the right split, "3 rotations, 3 spatial translations, 3 boosts and the time translation", but says Hughes was grouping them. | Change the choice to "$n(n+1)/2$: 10, namely 3 rotations, 3 boosts and 4 translations". In the explanation, drop the "grouping" excuse or call it a slip. |
| 3 | warning | Bracket after formula "Flat, one species" (line 253) | p. 19: the one-species F1 is said *with* the square ("a dot over a squared equals 8 pi g rho over 3"). The square is missing only later, in the Lambda case ("I have a dot over a equals 8 pi g rho over 3"), and Hughes corrects himself a few lines on ("a dot over a squared equals this, which equals lambda over 3"). | "[The transcript reads this as '$\dot a$ over $a$ equals'; the square belongs there.]", placed at the one-species formula | Remove the bracket. Hughes corrected the slip himself, so no note is needed. If one is kept, move it to the Lambda formula and say that he corrects it. |
| 4 | warning | Worked example, step "What it means" | Not in the lecture (the example is the page's own). | Omega = 1.02 gives curvature "so large that its curvature would be hard to detect inside our horizon". | This is misleading as stated. Current CMB plus BAO data constrain abs(Omega_k) to a few times 10^-3 (Planck 2018: Omega_k = 0.0007 +- 0.0019, later than the lecture). A 2% curvature would be clearly detected. Say instead that such a universe is finite yet locally very nearly flat, and that today's data already rule out Omega - 1 = 0.02 (marked as a later measurement, with a calcs fact entry). |
| 5 | warning | "Hubble parameter and critical density", Hubble-tension sentence | p. 13: Hughes mentions a controversy ("smells like something might be a little bit off ... we're not quite there yet"). He does not name it the "Hubble tension". | "(the 'Hubble tension', which was under active debate in 2020 and is not settled)" | "is not settled" is a claim about the present (2026), not the lecture. Under rule 5 it should be marked as a later development and carry a reference. Otherwise limit it to what Hughes said in 2020. Status of the tension today: likely still open, but not verified here. |
| 6 | warning | Cosmology callout, last sentence | p. 11: the perfect fluid is "the default choice" and "automatically satisfies the requirements of isotropy and homogeneity" if it is at rest in comoving coordinates. | "the perfect fluid is the only source the symmetry allows", presented as part of what "Hughes's route shows" | This is true as general physics: any T_mu_nu that respects homogeneity and isotropy has perfect-fluid form (e.g. Weinberg; Carroll ch. 8 remarks on it). Hughes does not show it, though. Reword it as "a perfect fluid at rest in comoving coordinates respects the symmetry (and is in fact the only form of source that does)", without crediting it to the lecture. |
| 7 | info | "Its Ricci tensor" text | p. 3: "I'm taking the trace on indices alpha and beta", a slip, since that trace vanishes by antisymmetry. | "Contracting on alpha and mu" (correct) | The silent fix is fine. Optionally add [Hughes says "alpha and beta"]. |
| 8 | info | "The metric in comoving coordinates", dipole | p. 6: "a dipole isotropy" (slip or transcription error) | "dipole anisotropy" | The correction is right. No note is needed. |
| 9 | info | "Symmetric in space, not in time" | p. 4: a parsec is "approximately 3.2 light years" | "about 3.26 light years" | Fine (more precise). The calcs file records Hughes's 3.2. |
| 10 | info | "Solving for the spatial metric", RW history | p. 12: "first written down in the 1920s, and Robertson and Walker developed this basically just as I have done it here" | "first written down in the 1920s on just this kind of symmetry argument" | Acceptable: Robertson's symmetry derivation is from 1929. Walker's papers are 1935–37, so "1920s" fits Robertson (and Friedmann/Lemaître) but not Walker. Optionally attribute the date to Hughes. |
| 11 | info | Quiz 2 stem | n/a | "Today the density of the universe is measured to be 10% above the critical density." | This reads as a factual claim that contradicts observation. Use "Suppose the density were measured to be ...". |
| 12 | info | "Three spatial geometries", k = +1 bullet | p. 9: "if it were possible to step out of time and just run around on a spacial slice, you would find that it is a finite size" | "Stepping outside time and running around a slice, you would find it has a finite size." | This is the closest paraphrase on the page: the same images and the same clause order. Reword it, e.g. "Each slice has a finite total volume, 2 pi^2 R^3 at that moment." |

Slips checked and not repeated (no action needed): p. 9 "there's no bounds on chi, chi can go from 0 to infinity" for the closed case (the page correctly gives the range 0 to pi); p. 10 "define some particular value of k such that the scale factor there ... R_0" (meant t); p. 12 "rho is the pressure ... excuse me, the density" and "negative dp -- du" (both self-corrected); "lead derivative" (transcription of Lie derivative). The three bracketed slip notes on the page that are correct:
- p. 8, k' = alpha k: with r~ = sqrt(alpha) r and R' = R/sqrt(alpha), the term k r^2 becomes alpha^2 k r^2. Only k -> k/alpha leaves the metric unchanged. This agrees with Carroll's k -> k/|k|, r -> sqrt(|k|) r, a -> a/sqrt(|k|). The page's correction is right.
- p. 14, "kappa is greater than 1": the page's note is right.
- p. 17, "scales with the scale factor to the fourth power": the page's note is right.

## Arithmetic and answer checks
- Killing vectors: 3·4/2 = 6 and 4·5/2 = 10. Correct.
- Ricci from Riemann: g^{alpha mu} R_{alpha beta mu nu} = R/(n(n-1)) (n − 1) g_{beta nu} = (R/n) g_{beta nu}. Correct. For n = 3 with R/(n(n−1)) = k: Ricci is 2k gamma and the scalar is 6k. Correct.
- (2/r) beta' = 2k e^{2 beta} becomes d(e^{−2 beta})/dr = −2 beta' e^{−2 beta} = −2 k r. With beta(0) = 0 this gives e^{−2 beta} = 1 − k r^2. Correct, and it matches Carroll's R_11 = (2/r) ∂_1 beta.
- chi substitution (sin, identity, sinh) and the three line elements: correct.
- a = R/R_0, r = R_0 r̄, kappa = k/R_0^2: a^2 dr^2/(1 − kappa r^2) = R^2 dr̄^2/(1 − k r̄^2). Correct.
- T^mu_nu = diag(−rho, P, P, P) and T = −rho + 3P: correct. Energy conservation rho' = −3(a'/a)(rho + P) is equivalent to d(rho R^3)/dt = −P d(R^3)/dt (expanded by hand). Correct.
- tt equation: −3 a''/a = 8 pi G (rho − ½(−rho + 3P)(−1)) = 4 pi G (rho + 3P), which gives F2. Correct. ij equation: a a'' + 2a'^2 + 2kappa = 4 pi G (rho − P) a^2. Removing a'' with F2 gives a'^2 = (8 pi G/3) rho a^2 − kappa, which is F1. Correct. The stated R_tt and R_ij match Carroll eq. (8.34) in this signature.
- rho_crit = 3H^2/(8 pi G); Omega − 1 = kappa/(H^2 a^2); rho_curv = −3 kappa/(8 pi G a^2) gives Omega_curv = −kappa/(H^2 a^2) and Omega + Omega_curv = 1. Correct, with the sign convention of the usual Omega_k.
- Worked example: c/H_0 = 299 792.458/70 = 4282.7 Mpc; sqrt(0.02) = 0.1414; 4282.7/0.1414 = 30 284 Mpc ≈ 30 300; ratio 7.07 ("some seven times"). All correct. (The interpretation is questioned in #4.)
- Plot 1 caption: sinh^2(pi/2) = 5.296 → 5.30; (pi/2)^2 = 2.467 → 2.47. Correct. Area = 4 pi R^2 sin^2 chi (and so on) follows from the line elements.
- Dilution: rho ∝ a^{−3(1+w)}. Doubling a gives 8 (w = 0), 16 (w = 1/3) and 1 (w = −1). Correct.
- Flat one species: (a'/a)^2 ∝ a^{−n}, so a' ∝ a^{1−n/2} and a ∝ t^{2/n}, n = 3(1+w). This gives t^{2/3}, t^{1/2}, and n = 0 for Lambda. With rho_0 = Lambda/(8 pi G), (a'/a)^2 = Lambda/3 and a ∝ exp(sqrt(Lambda/3) t). Correct.
- Plot 2 caption: 2^{2/3} = 1.587 → 1.59; 2^{1/2} = 1.414 → 1.41; w = 1 gives t^{1/3}; e^{t−1} has a = 1 and rate 1 at t = 1. Correct.
- Quiz 1: the index is right (n(n+1)/2 = 10), but the wording of the choice is wrong (#2). Quiz 2: Omega = 1.1 gives kappa > 0, closed; index 2 is correct. Quiz 3: 2/(3·2) = 1/3, index 2 is correct; rho ∝ a^{−6} and the stronger deceleration (rho + 3P = 4 rho) are correct. Quiz 4: index 1 is correct.
- Flashcards: all five are correct.
- Calcs file: its entries match the page's numbers and formulas (checked by hand; `calc:test` not run by the reviewer).

## Coverage and order
- The page follows the transcript order exactly: maximally symmetric spaces (pp. 2–3) → space vs spacetime symmetry and scales (pp. 3–5) → metric and comoving coordinates, Earth's motion and the dipole (pp. 5–6) → spatial curvature (p. 6) → solving for beta (pp. 6–7) → rescaling of k (p. 8) → chi and the three geometries (pp. 9–10) → a, r, kappa (pp. 10–11) → perfect fluid (p. 11) → energy conservation and the naming of RW (p. 12) → Friedmann equations (pp. 12–13) → H and H_0 (pp. 13–14) → rho_crit and Omega (p. 14) → curvature density (p. 15) → equations of state and species (pp. 15–18) → one-species flat universes (pp. 18–19) → mixtures and the next lecture (pp. 19–20).
- Every formula citation was checked against the PDF pages and is where Hughes writes or says the equation: p. 2 (Killing count), p. 3 (Riemann and Ricci), p. 5 (line element), p. 6 (spatial curvature), p. 7 (spherical metric, beta equation, RW metric), p. 8 (rescaling), p. 9 (chi), pp. 10–11 and p. 11 (a, kappa, metric), p. 11 (perfect fluid), p. 12 (conservation), pp. 12–13 (trace-reversed equation), p. 13 (F1/F2), p. 14 (rho_crit, Omega − 1), p. 15 (curvature density), p. 16 (dilution), p. 19 (one species, Lambda). All correct.
- Small omissions (info): Hughes's remark that in general one simply writes down both Friedmann equations and integrates them numerically (p. 18), and the pointer to the Riess colloquium (p. 13). Neither is needed.
- Additions beyond the lecture, all labelled: the explicit R_tt and R_ij (flagged as "we state the components"), the explicit rho_curv (flagged), the worked example and the stiff-fluid quiz.

## Licensing
- The transcript carries no "All rights reserved" or "Courtesy of" notice (grep: 0 hits). No figures are reused, and both plots are generated from formulas.
- No OpenStax or LibreTexts material. Carroll is only referred to as the reading Hughes assigns, and nothing is copied from it.
- Paraphrase: generally well rewritten. The one close sentence is #12. Short quoted phrases ("little bit of work", "ridiculously infinite", "a little weird", "the jury is still out") are attributed.

## Notes
- Internal links resolve: robertson-walker-spacetime (8.286 L13), friedmann-equation (8.286 L7), sphere-metrics (L11), open-universe-geometry (L12), radiation-dominated-universe (L16, which does cover pressure in a'' ∝ rho + 3p), and 8.902 friedmann-equations-density-parameters (Lecture 10, which has H^2 = H_0^2 E^2(a)). The callout's attribution to 8.902 Lecture 10 is correct.
- leadsTo 8.962 Lecture 19 (observables: redshift, distances, energy budget) matches Hughes's preview on pp. 18 and 20.
- The values 70 (example) and 73 km/s/Mpc are present in calcs/values.yaml. 73 is recorded there as "later: local distance ladder (SH0ES)", while on this page it is the value from Hughes's scanned notes. The role may deserve a page-specific note, but `content:check` decides that.
- Not verified: whether the Hubble tension is "not settled" as of 2026 (#5).

## Resolution (2026-11-19, by the page author)

1. Killing vectors of Minkowski spacetime: the body now gives 3 rotations, 3 boosts and 4 translations (three in space, one in time), with a bracketed note that Hughes says "3 translations and 4 boosts". The "time translation as fourth boost" excuse is gone. Calcs entry `killing-minkowski-split` updated (origin: slip).
2. Quiz 1: the marked choice now reads "3 rotations, 3 boosts and 4 translations"; the explanation no longer excuses the count.
3. The slip note at "Flat, one species" is removed; the Λ case now says Hughes first drops the square and corrects himself.
4. Worked example, "What it means": reworded; states that measurements only bound |Ω − 1| and, marked as a later development, that Planck 2018 with galaxy surveys bounds it at a few tenths of a percent, so a 2% excess would have been seen.
5. Hubble tension: now "under active debate in 2020; as a later development, it has persisted in the measurements since then".
6. Cosmology callout: no longer says the perfect fluid is the only source allowed; it says a perfect fluid at rest in comoving coordinates respects the symmetry automatically, as Hughes says.
7. Info items: the 1920s date is attributed to Hughes with Robertson 1929 and Walker's 1930s papers in brackets (10); quiz 2 starts "Suppose ... were 10% above" (11); the close paraphrase on p. 9 is rewritten (12). Items 7–9 need no change.

Status set to `reviewed`.
