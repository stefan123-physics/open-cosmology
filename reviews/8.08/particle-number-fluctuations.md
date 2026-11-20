---
page: content/year-4/8.08/particle-number-fluctuations.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/thermal_fluct/ (read: resource page; CC BY-NC-SA 4.0 link, no "courtesy" or "rights reserved" notice)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/602f7128f333bcba16bc87697f785eb7_thermal_fluct.pdf (read as page images: handwritten pp. 41-44 = PDF pages 1-4 at 160 dpi; handwritten, no text layer)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec14.pdf and mit8_902_f23_lec15.pdf (read, pdftotext; only to check the cosmology callout and leadsTo)
verdict: pass-with-notes
---

# Review: Fluctuations in the number of particles and the compressibility

Scope: Chapter VI, point 1, notes pp. 41-44. Every formula, page citation, number, quiz answer and flashcard was checked against the page images. I found no errors. There are two warnings (one claim that is wrong for the entropy, and an attribution to 8.902 Lecture 15) and a few info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "From thermodynamic functions to probabilities", last sentence; Summary, bullet 2 | p. 42 lists P ∝ e^{S/k_B}, e^{-βA}, e^{-βΩ}, e^{-βG} and does not say what is extremised. | "In each case the most probable macroscopic state **minimizes** the function"; Summary: "The minimum is the most probable state". | This is wrong for the first function in the list: the most probable state *maximizes* S. Write "maximizes S, or minimizes A, Ω or G", and in the Summary write "the extremum (maximum of S, minimum of A, Ω, G) is the most probable state". |
| 2 | warning | Cosmology callout ("MIT 8.902 Lecture 15 measures that clustering with ... ξ(r), which is zero for a random (Poisson) scattering") and `leadsTo` why ("Lecture 15 defines the correlation function ξ, zero for a random (Poisson) scattering") | 8.902 defines ξ in the **Lecture 14** notes (eqs. 407-408, p. 89). The Lecture 15 notes open with the repeated p. 90 (the observed ξ ∝ r^-1.8 and ξ_cc ≈ 20 ξ_gg). Neither set of notes says "ξ = 0 for a Poisson distribution"; it only follows from dP = n0²[1 + ξ]dV1dV2. | Says Lecture 15 defines ξ and attributes the Poisson statement to that lecture. | The linked site page (power-spectrum, filed as Lecture 15) covers both lectures, so the link is fine. Reword the attribution, e.g. callout: "The 8.902 page on the power spectrum (Lectures 14-15) measures that clustering with ... ξ(r). From its definition, ξ is zero for a random (Poisson) scattering ..."; leadsTo why: "The 8.902 notes (Lectures 14-15) define the correlation function ξ, ...". |
| 3 | info | Slip note after "The chemical potential" | p. 43: boxed "∂a/∂v\|_T = ∂A/∂V\|_{T,N} = P". Then ∂A/∂N = a - vP and ∂²A/∂N² = (v³/V)∂P/∂v = **-(v²/V)(1/K_T)**, but the boxed ⟨(N-N̄)²⟩ = k_BT VK_T/v² is positive. | "With the notes' sign, the next step gives a negative ∂²A/∂N² ...; the boxed result below has the correct, positive sign." | Verified: the sign slip is real. The correct value is ∂a/∂v = -P, which gives a + vP and +v²/(VK_T). The page's account is accurate. Optional: say plainly that the notes *write* -v²/(VK_T) and that the box drops the minus sign, so there are two slips that cancel. Note also that ∂a/∂v = ∂A/∂V is itself right; only "= P" is wrong. |
| 4 | info | Slip note after "The first two moments" | p. 41: "⟨N²⟩ = Σ_i ⟨x_i⟩² + Σ_{i≠j}⟨x_i x_j⟩ = N0 P(1) + (N0² - N0)P(1)²". | The notes write Σ⟨x_i⟩² for Σ⟨x_i²⟩. | Verified: the superscript 2 sits outside the bracket, and ⟨x_i⟩² = p² would give N0p², not the N0p of the next line. The note is accurate. No change. |
| 5 | info | Bracket after "Free energy of an ideal gas" | p. 42: "A = Nk_BT ln N + const"; "P(N) = e^{-βA} is peaked at N ~ 1/2"; ∂A/∂N = k_BT ln N + k_BT. | The page says the "constant" contains a part linear in N, which moves the peak to nλ³ = 1. | Verified. The real slip is the "const": it is Nk_BT[ln(λ³/V) - 1], linear in N. With the notes' own form, the exact peak of e^{-βNk_BT ln N} is at N = 1/e ≈ 0.37, so "~1/2" is a fair order-of-magnitude reading of that form, and the page rightly does not call it a slip. No change. |
| 6 | info | "From thermodynamic functions..." paragraph; flashcard 2 | p. 42 gives only the four exponentials, with margin notes "# of state" (S) and "total prob." (A) and "Gibbs potential" (G). | Assigns conditions to each one: isolated, fixed T, particle reservoir, fixed pressure. | These are correct, standard readings, but they are the page's gloss. Optional: "(the conditions are our addition)". |
| 7 | info | "Large fluctuations near the critical point" | p. 44: the P-V sketch labels the highest isotherm T₁ "PV ≈ k_BNT" and the critical isotherm "K_T = ∞ critical point". | Mentions the sketch and K_T → ∞, but not the ideal-gas label at high T. | Optional: one clause, e.g. "far above T_c the isotherms approach the ideal gas's PV = Nk_BT". |
| 8 | info | First section | p. 41 defines P(0) as the probability for x = 0 (with ditto marks), without writing 1 - P(1). | "P(0) = 1 - P(1)". | Implied, and correct. No change. |

## Formula-by-formula check
- "Probability that one atom is in the region" (p. 41, point 1): P(1) = V/V0. Matches.
- "The number of atoms in the region" (p. 41): N = Σ_{i=1}^{N0} x_i. Matches.
- "The first two moments" (p. 41): matches, with the Σ⟨x_i²⟩ correction flagged (#4).
- "The spread of the number of atoms" (p. 41): √⟨(N-⟨N⟩)²⟩ = √(⟨N²⟩-⟨N⟩²) = √(⟨N⟩(1-p)) → √⟨N⟩ as V/V0 → 0. Matches.
- "The relative fluctuation" (p. 41, boxed): ΔN/⟨N⟩ = 1/√N. Matches.
- "Thermodynamic functions as probabilities" (p. 42): matches.
- "Free energy of an ideal gas" (p. 42): A = Nk_BT[ln(nλ³) - 1]. Matches.
- "Free energy of region and reservoir" (p. 42): A_tot = A - μN = const + ½ ∂²A/∂N²\|_N̄ (N-N̄)². Matches.
- "Number fluctuations from the free energy" (p. 42): P ∝ e^{-(β/2)∂²A/∂N²(N-N̄)²} ⇒ ⟨(N-N̄)²⟩ = k_BT/(∂²A/∂N²). Matches the box.
- "The ideal gas again" (p. 42): ∂²A/∂N² = k_BT/N, variance = N̄. Matches the box. The page's ∂A/∂N = k_BT ln(nλ³) is correct for the full A (calcs `ideal-dA-dN`).
- "Free energy per particle" (p. 43): A = N a(T, V/N) = (V/v) a(T, v). Matches.
- "Changing variables" (p. 43): ∂/∂N = (∂v/∂N)∂/∂v = -(V/N²)∂/∂v = -(v²/V)∂/∂v. Matches.
- "The chemical potential" (p. 43): the page's a + vP is the correct form. The notes have a - vP (#3). I rederived it: -(v²/V)∂_v[(V/v)a] = a - v a' with a' = -P.
- "The second derivative" (p. 43): -(v²/V)∂_v[a + vP] = -(v³/V)∂P/∂v = v²/(VK_T). Correct and positive. The notes' sign is discussed in #3.
- "Isothermal compressibility" (p. 43, boxed): K_T = -(1/v)∂v/∂P = -(1/V)∂V/∂P. Matches.
- "Number fluctuations and the compressibility" (p. 43, boxed): k_BT VK_T/v². Matches.
- "Relative density fluctuation" (p. 44): all four forms and V_c = k_BT K_T match. Rederived: √(k_BT VK_T/v²)/N = √(k_BT K_T/(vN)) = √(k_BT K_T/V).

All page citations are right: the circled ① is on p. 41, and pp. 42-44 are its starred sub-items. Each formula sits on the page it cites.

## Arithmetic and answer checks
- `npm run calc:test -- -k particle-number-fluctuations`: 39 passed.
- I recomputed these by hand. k_BT(298.15 K) = 4.1164e-21 J. V_c(water) = 4.1164e-21 × 4.52e-10 = 1.861e-30 m³ = 1.86 Å³. nV_c = 3.33e28 × 1.86e-30 = 0.0619, so "6%" holds. δn/n for a 10 nm cube = √(1.86e-6) = 1.364e-3, so 0.14%. Molecules in it: 3.33e28 × 1e-24 = 33 300. Air: V_c = 4.1164e-21/101325 = 4.063e-26 m³ = 40.6 nm³. That gives 24.6 molecules, and √0.0406 = 0.2016 = 1/√24.6. 1% in water: V = 1.86e-26 m³, side 2.65 nm (2.65³ = 18.6), 619 molecules, 1/√620 = 0.040.
- Input data. Water at 25 °C has K_T ≈ 4.52e-10 Pa⁻¹, a standard handbook value. n = 997.0/0.018015 × 6.022e23 = 3.333e28 m⁻³.
- Text: 1/√100 = 10%. A cm³ of air holds PV/k_BT = 2.46e19 molecules, and 1/√2.46e19 = 2.0e-10, so "a few parts in 10¹⁰" holds.
- Van der Waals paragraph and plot. The reduced equation P_r = 8T_r/(3v_r - 1) - 3/v_r² has ∂P_r/∂v_r = -24T_r/4 + 6 = -6(T_r - 1) at v_r = 1. Then K_T = 1/[6P_c(T_r - 1)]. With k_BT = (8/3)T_r P_c v_c this gives k_BT K_T/v_c = (4/9)T_r/(T_r - 1). The high-T limit 4/9 = (1 - b/v)² at v = 3b is consistent with the hard-core explanation. v_c = 3b/N agrees with the van der Waals page (V_c = 3b with b the total excluded volume). On the plot, at T/T_c = 1.1 the curve is 4.89, inside the range [0, 5]. The caption matches the formula.
- Quiz 1: answer index 1. Binomial variance N0p(1-p) = ⟨N⟩(1-p). Correct.
- Quiz 2: answer index 1. Correct, and the explanation (a linear term does not change the curvature) is right.
- Quiz 3: answer index 2 (0.14%). Correct, and the 20% figure for air is right.
- Quiz 4: answer index 1. Correct. The "(5000 Å)³" matches p. 44.
- Flashcards 1-5: all correct. Flashcard 2's conditions are the page's gloss (#6).
- GL claim: the Ginzburg-Landau page does give χ ∝ 1/|T - T_c| (γ = 1). The "mean-field behaviour" comparison is fair.
- 8.044 notation: 8.044 pages do use F for the Helmholtz free energy and κ_T for the isothermal compressibility. Verified.

## Coverage and order
- p. 41: the setup and sketch (small V in a box V0, particle reservoir), x_i, P(1), the moments, ΔN, and the boxed 1/√N. All covered.
- p. 42: the "how to calculate for a generic system" question, the four probabilities with margin notes, the ideal-gas A and its sketch, the peak, A_tot with its sketch, the Gaussian and the box. All covered.
- p. 43: the question "∂²A/∂N² = ∂μ/∂N?", A = N a, the change of variables, ∂A/∂N, ∂²A/∂N², the K_T box, the result box, and "fluctuation ↔ response, closely related, ⇔ ∂²A/∂N²". All covered.
- p. 44: δn/n, V_c, "smaller volume, stronger fluctuation", "order 1 when V ~ V_c", V_c ~ (1 Å)³, V_c → ∞ at the critical point, milky at (5000 Å)³, and the P-T and P-V sketches. All covered except the small "PV ≈ k_BNT" label (#7).
- The order follows the notes. The companion page starts at p. 45 (point 2), so the split leaves nothing of pp. 41-44 out.
- Additions are clearly marked as the page's own: the van der Waals application and plot ("this application is ours"), the worked example ("our own" in the intro), and the ξ-integral remark in the callout. The binomial → Poisson remark and the "why thermodynamics works" sentence are short, standard glosses (unmarked, acceptable).

## Licensing
- The OCW resource page shows CC BY-NC-SA 4.0. The scanned pp. 41-44 carry no "courtesy" or "rights reserved" notice, and no textbook figure is reproduced in them.
- The page reproduces none of Wen's sketches (box with sub-volume, A(N) and A_tot(N) curves, P-T and P-V diagrams). Its only graphic is its own formula-generated plot.
- Paraphrase: no copied passages. Short phrases ("total prob.", "closely related", "turn milky") are quoted or are standard wording.
- No OpenStax or LibreTexts material.

## Notes
- Symbols scoped to this slug were checked: p (= P(1)), x_i, x_j, N0, V0, A, A_tot, a, v, v_c, V_c (fluctuation volume, distinguished from the critical volume), K_T, κ_T, F, Q, Ω, G, P (probability, and pressure in the compressibility formulas), σ, δ, ξ, r, b, T_c, P_c, n, λ, μ, β. All fit their use on the page. The ξ and r meanings fit the callout.
- Prerequisite slugs exist (grand-canonical-ensemble is the 8.044 page). Internal links resolve to existing 8.08 pages.
- The cosmology callout's physics is correct (counts-in-cells variance = N̄ + n̄²∫∫ξ, the analogue of the compressibility relation), and it is marked as the page's addition. Only its lecture attribution needs care (#2).

Verdict: **pass-with-notes**. Fix #1 (maximum of S) and #2 (8.902 lecture attribution). The rest is optional.

## Resolution (2026-11-19, by the page author)

- Warning 1 (maximize S, minimize A, Ω, G): fixed in "From thermodynamic functions to probabilities" and in Summary bullet 2.
- Warning 2 (8.902 attribution): the callout and the `leadsTo` reason now speak of the 8.902 power-spectrum page (Lectures 14 and 15) and say that ξ = 0 for a random scattering follows from its definition. The `leadsTo` keeps lecture 15, the lecture under which that page is filed.
- Info, p. 43 slips: the bracket now says plainly that the notes write ∂²A/∂N² = −v²/(VK_T) and the box drops that minus sign, two slips that cancel.
- Info, conditions on the four exponentials: now marked as our gloss.
- Info, p. 42 "N ~ 1/2", P(0) = 1 − P(1), the "PV ≈ k_BNT" label: left as they are (the page already treats the peak as an order of magnitude; the other two need no comment).
