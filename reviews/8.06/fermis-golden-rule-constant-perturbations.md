---
page: content/year-3/8.06/fermis-golden-rule-constant-perturbations.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l10-1/ (read: segment pages L10.1-L10.4 fetched; each reading URL on the page is the transcript link of its own segment page)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/18753b48cad4df6c6aa3ceea59b7493b_kPxBd_S5tsA.pdf (read: L10.1 transcript, 5 pages, checked page by page with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/5ef932c89185beaa6a220720ea66dd36_qk6l3z5ab0o.pdf (read: L10.2 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/8a83cb0a205671df477d276eaf71c946_FA11OqJYnaE.pdf (read: L10.3 transcript, 4 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/4ec6cfc097497b02ae53d980579c42df_nd_sryUc1tc.pdf (read: L10.4 transcript, 3 pages)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-4-time-dependent-perturbation-theory/ (read: chapter 4 PDF; printed pp. 84 and 87-96 rendered as images to read every equation of section 4.3.1 and eq. (4.2.33) exactly)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec19.pdf (read as text, for the callout and leadsTo)
  - content/year-5/8.902/dark-matter-freeze-out.mdx (read, for the callout and leadsTo)
verdict: needs-changes
---

# Review: Constant perturbations and Fermi's golden rule

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Two kinds of perturbation", end of 2nd paragraph: "Once the constant case is understood, Zwiebach says, the harmonic one is easier (L10.1 transcript p. 1)" | This sentence, and the auto-ionization / radiation remarks before it, are on L10.1 p. 2 | p. 1 | Cite "L10.1 transcript p. 2" (optionally add "p. 2" to the auto-ionization sentence too). |
| 2 | error | "Counting the continuum", 1st paragraph: box regulator "(L10.1 transcript pp. 1–2)" | The continuum, the "add a parameter" remark, the delta-function analogy and the box are on p. 2; "we hope that length is going to disappear" is at the top of p. 3. Nothing about it on p. 1 | pp. 1–2 | Cite "pp. 2–3". |
| 3 | error | "Counting the continuum", paragraph after "Box-normalized momentum eigenstates": periodic boundary conditions, torus, hard walls "(L10.1 transcript p. 2)" | All on L10.1 p. 3 | p. 2 | Cite "p. 3". |
| 4 | warning | Sentence after "Number of states in a cell of momentum space": "a famous formula, 'some people know this by heart' (L10.1 transcript p. 3)" | "that's a famous formula" ends p. 3; "Some people know this by heart" opens p. 4 | p. 3 | Cite "pp. 3–4" (the quoted words are on p. 4). |
| 5 | error | "Summing over the continuum", paragraph after the second Plot: "Now one can smile ... (L10.3 transcript p. 1)" | "And now you smile", height t₀² times width 1/t₀, linear in t₀: all on L10.3 p. 2 | p. 1 | Cite "p. 2". |
| 6 | error | "Fermi's golden rule", paragraph after eq. (4.3.34): "nothing more needs integrating (L10.3 transcript p. 3 ...)" and "The units work ... (L10.3 transcript p. 3)" | Both remarks ("the interval has been done ...", "Do units work out? Yes ...") are on L10.3 p. 4. The rate and the golden rule itself are on p. 3 | p. 3 | Cite "p. 4" for both. Same fix in calcs entry `golden-rule-units` (`source: {cite: reading3, at: 'p. 3'}` → `'p. 4'`). |
| 7 | info | "When does it hold?" "(L10.3 transcript pp. 3–4 ...)" | The discussion of the two conditions ("How about our assumptions?") is entirely on p. 4 | pp. 3–4 | Cite "p. 4". |
| 8 | warning | Calcs entry `lobe-height` (source `reading3`, `p. 1`) | "when omega goes to zero, this whole [integrand] goes like t0 squared over 4" is on L10.3 p. 2 | p. 1 | Change to `'p. 2'`. (The page text itself says pp. 1–2, which is fine.) |
| 9 | info | "Auto-ionization of helium": spectrum list "(L10.4 transcript pp. 1–3 ...)"; radiative decay "(L10.4 transcript pp. 2–3 ...)" | The spectrum is on pp. 1–2; the remark that a radiative transition is suppressed is on p. 3 | pp. 1–3; pp. 2–3 | Cite "pp. 1–2" and "p. 3". |
| 10 | warning | Bullet list in "Auto-ionization of helium", 2nd bullet: "above −54.4 eV starts a continuum, (1s) plus a free electron, made of states with negative total energy" | Notes p. 95: the (1S)(∞) continuum "extends for all E ≥ −54.4 eV"; what is new for helium is that the continuum *includes* states of negative energy (Figure 4.4 caption) | Reads as if the continuum consisted only of negative-energy states | "... starts a continuum, (1s) plus a free electron, which reaches down to negative total energy (from −54.4 eV upwards)". |
| 11 | info | Bracket after "The integral, done" formula: "neither the lecture nor the notes dwell on it" | L10.3 p. 2 does say it briefly: "I cannot really integrate from minus infinity to plus infinity in the final energies, but I don't need to because most of the integral comes from this big lobe" | As quoted | Fair as written ("dwell"); could add "(Zwiebach notes it in passing, L10.3 transcript p. 2)". |
| 12 | info | Formula "The integral, done", cited to eqs. (4.3.29)–(4.3.31) | Notes (4.3.29) write du = (t₀/2) dω_fi, then use dE_f = ħ dω_fi in (4.3.26). The form du = t₀ dE_f/(2ħ) is the lecture's (L10.3 p. 3) | du = (t₀/2ħ) dE_f | Equivalent; optionally add L10.3 p. 3 to the citation, or a word that the notes change variable via ω_fi. |
| 13 | info | Formula "First-order transition amplitude", eq. (4.2.33) | Notes write c_n(0) (the coefficient at t = 0) | c_n^{(0)} | Equal by notes eq. (4.2.29), c_n^{(0)}(t) = c_n(0); no change needed. |
| 14 | info | Formula "The transition probability grows linearly", eq. (4.3.32) | Notes write ρ(E_f) in (4.3.32) (and P_{k←i}); the lecture (L10.3 p. 3) writes ρ(E_i) | ρ(E_i) | Same thing with E_f = E_i; fine. |

Every `<Formula>` was checked against the rendered notes:
- (4.3.1): constant perturbation, H⁽⁰⁾ for t ≤ 0, H⁽⁰⁾ + V for t > 0: correct.
- Harmonic perturbation, `reading1` p. 1: correct, the 0 < t < t₀ window is the lecture's (board, L10.1 p. 1); the bracket that the notes (4.3.3) let it run for all t > 0 is right.
- (4.3.4), (4.3.5): correct. (4.3.6), (4.3.7): correct (periodicity is (4.3.6), quantization (4.3.7)). (4.3.8): correct, and the remark that ΔN does not depend on k is in the notes p. 89.
- d³k = k² dk dΩ is (4.3.9): correct. (4.3.10) is E = ħ²k²/2m → k dk = (m/ħ²) dE and (4.3.11) is d³k = k (m/ħ²) dE dΩ: correct.
- (4.3.12)–(4.3.14): ΔN, ΔN = ρ dE, ρ = L³mk dΩ/(8π³ħ²): correct. (4.3.15): correct.
- (4.2.33): correct (see row 13). The text's (4.3.17), (4.3.18) and the formula's (4.3.18), (4.3.19): correct, including the factor e^{iω_fi t₀/2}(−2i) sin(ω_fi t₀/2)/(E_f − E_i).
- (4.3.20), (4.3.21): correct. (4.3.22), (4.3.23): correct.
- (4.3.24), (4.3.25), (4.3.26): correct; I(t₀) = ∫ sin²(ω_fi t₀/2)/ω_fi² dE_f matches the first form of (4.3.26).
- (4.3.27), (4.3.28): correct. (4.3.29)–(4.3.31): correct (row 12).
- (4.3.32), (4.3.33), (4.3.34): correct. (4.3.35) in prose: correct. (4.3.37): correct, and the practical test (w t₀ ≈ 0.01, range ~ ħ/t₀) is on notes p. 94 as cited.
- (4.3.38): the notes write −e²/r₁, −e²/r₂ without Z (and so does the lecture, L10.4 p. 1); the page writes −Ze²/r and says so in a bracket. Correct and honestly flagged.
- (4.3.39): correct. Auto-ionization formula `reading4` p. 2: correct (lecture writes E₂,₂ = E₁,∞ + E). (4.3.40): correct.

Transcript citations confirmed correct (beyond the rows above): L10.1 p. 1 (opening, two cases), p. 4 (cone, d³k), p. 5 (ρ, the dΩ remark, electrons ejected in a direction); L10.2 p. 1 (first-order formula, recitation remark, δ_ni, V_fi out of the integral), p. 2 (P_fi, units, "probability of 3", one in a million, the bra/ket ordering), pp. 2–3 (oscillation, zero at 2π/ω_fi), p. 3 (suppression, "not a good supplier of energy", E_f = E_i limit), pp. 3–4 (need for linear growth, "magic of integration", uncertainty-principle window); L10.3 p. 1 (sum as integral, "the great thing", narrow band, plot first), p. 2 (90%, 95%), pp. 2–3 (extending the limits), p. 3 (u substitution, πħt₀/2, rate), p. 4 (physical applications); L10.4 p. 1 (qualitative, rate not computed; continuum states where unexpected; −108; "54.4" without sign; H₀), p. 2 (−27.2, (∞,2) at 13.6, infinitely many continua, kinetic energy 27.2 eV).
Notes page citations confirmed: p. 88 (regulator), p. 91 (small-t₀ parabola), p. 93 (99% with ten lobes; integration done), p. 94 ((4.3.35), the two conditions, practical test), p. 96 (Auger, radiative decay less likely, short-lived).

## Arithmetic and answer checks
Recomputed independently (Python, with the page's constants m = 9.109e-31 kg, ħ = 1.055e-34 J s = 6.582e-16 eV s, 1 eV = 1.602e-19 J):
- (a) E = 27.2 eV = 4.357e-18 J (page 4.36e-18, correct); k = 2.671e10 m⁻¹ (page 2.67e10, correct); 2π/k = 0.2353 nm (page 0.235, correct).
- (b) ρ = L³mk/(2π²ħ²) (dΩ → 4π in L³mk dΩ/(8π³ħ²): correct) = 1.107e41 J⁻¹ (page 1.11e41) = 1.774e22 eV⁻¹ (page 1.77e22); spacing 5.64e-23 eV (page 5.6e-23). All correct.
- (c) t₀ = 1.0e-14 s; 2πħ/t₀ = 0.4136 eV (page 0.41); ρ ∝ √E changes by +0.757% and −0.763% at the edges (page "about 0.76% either way", correct); states in the main lobe ρ × 2 × 0.4136 eV = 1.47e22 (page "about 1.5e22", correct). Aside: w = 1e14 s⁻¹ gives t₀ = 0.1 fs and half-width 41.4 eV (page 41 eV), wider than 27.2 eV: correct conclusion.
- (d) |V_fi|²ρ = ħw/2π = 1.048e-4 eV (page 1.05e-4, correct); doubling L: ρ × 8, |V_fi|² ÷ 8: correct.
- Lobe fractions: 2∫₀^{Nπ} sin²u/u² du / π = 0.903 (N = 1), 0.950 (N = 2), 0.990 (N = 10), 0.991 (N = 11). The 90 / 95 / 99% claims are right.
- Helium: 13.6 × 4 = 54.4; E(1,1) = −108.8; E(∞,1) = −54.4; E(2,2) = −27.2; E(∞,2) = −13.6; kinetic energy 27.2 eV. All correct.
- Plot 1: in units |V_fi|²/ħ² = 1, P = 4 sin²(ω t₀/2)/ω², maximum 4/ω² ≤ 4 for the slider range ω ∈ [1, 3], inside range [0, 5]; zeros at 2π/ω; dashed t₀² = the E_f = E_i limit. Formula and caption correct.
- Plot 2: integrand sin²(ωT/2)/ω² with the ω = 0 value T²/4 (≤ 4 for T ≤ 4, inside range 4.4); zeros at ±2π/T; "four times taller, half as wide, area doubles": correct.
- Quiz: Q1 answer 2 (oscillates between 0 and 4|V_fi|²/(E_f − E_i)², zero again at 2π/|ω_fi|): correct. Q2 answer 0: correct, explanation (ħt₀/2)·π correct. Q3 answer 3 (w independent of L): correct. Q4 answer 1: correct.
- Flashcards: all four agree with (4.3.14), (4.3.20)/(4.3.23), (4.3.34) and the two conditions (p. 94).
- Calcs file: 44 entries, `npm run calc:test -- -k fermis-golden`: 44 passed. Every number shown on the page has an entry. Two entries carry wrong transcript pages (rows 6 and 8). `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

## Coverage and order
- The page follows MIT's order: L10.1 (two kinds of perturbation; box, periodic conditions, ΔN, ρ(E) with dΩ), L10.2 (first-order amplitude, P_fi, weakness, the two cases, the need for linear growth), L10.3 (sum over the continuum, integrand, lobes, window, change of variables, golden rule, units, validity), L10.4 (helium auto-ionization). Nothing from the lecture is left out.
- Additions from the notes, correctly attributed: the regulator name, Figures 4.2–4.4 (referred to, not reproduced), ten lobes for 99%, L-independence (4.3.35), the practical test, "short-lived". The notes' last paragraph on p. 96 (auto-ionizing Rydberg states of molecules, the general definition of Auger transitions as filling an inner-shell vacancy) is left out; that is fine, it is not in the lecture.
- Additions of the page's own: the worked example and two plots (original), the E_f → −∞ bracket (row 11).

## Licensing
- No "All rights reserved" or "Courtesy of" notices in the chapter 4 PDF text or in the four transcripts. Figures 4.2–4.4 (hand-drawn in the notes) are only referred to; the two graphs are generated from formulas. No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("some people know this by heart") and standard terminology. The worked example is original: MIT computes no numbers for the golden rule in this lecture and does not compute the helium rate.

## Notes
- Cosmology callout and `leadsTo` 8.902 Lecture 19: fair. The 8.902 Lecture 19 notes compare τ_H = 1/H with τ_coll = 1/(n_eq⟨σv⟩) and take the velocity-averaged annihilation cross section as given; nothing in them uses the golden rule, and the page does not claim they do. The statement that computing ⟨σv⟩ for real particles needs relativistic quantum field theory, with the same "matrix element squared times density of final states" structure, is correct general physics and is not attributed to MIT. "The template for every quantum reaction rate" is a little strong (scattering rates in field theory use a generalisation with phase-space integrals), but defensible in a callout.
- `leadsTo` 8.06 Lecture 11: `_course.json` gives "Harmonic perturbations; stimulated emission and absorption; ionization of hydrogen", and notes §4.3.2 gives E_f = E_i ± ħω. Correct.
- Symbols: I diffed `data/symbols.json` against HEAD (57 meanings changed or added, 6 new entries) and checked each against the page. All fit, with one error:
  - **I** (id `I`): unit "J·s" is wrong. I(t₀) = ∫ sin²(ω_fi t₀/2)/ω_fi² dE_f has units s² × J = J·s², and indeed I = (π/2)ħt₀ is J·s × s. (Check: 4|V_fi|²ρ I/ħ² must be unit-free: J² · J⁻¹ · J·s² / (J² s²) = 1.) Severity: error. Fix: `"unit": "J·s²"`.
  - The others are right: ρ (1/J; with dΩ or integrated), ψ (m^(−3/2)), ω, ω_fi, ω_mn (rad/s), dΩ (sr), ΔN (unit-free count), δ (δH and δ_ni), ⟨f|V|i⟩, H, H′, V (J; the helium repulsion), V_fi (J), P_fi (unit-free), c_m, c_f, c_n⁽⁰⁾, k (1/m), k_x,y,z, n_x,y,z, n₁, n₂, r₁, r₂, p₁, p₂, E, E_i, E_f, E_k, E_m, E_n, e (Euler's number and the Gaussian charge), i, f, F, L (m, regulator), N, t, t′, t₀ (s), u (unit-free), w (1/s), Z, x, y, z, m, d.
- The bracketed slip notes ("minus 108", "54.4" without a sign, e² without Z, the full Hamiltonian first called zeroth order) are all accurate against L10.4 p. 1.

Verdict needs-changes because of the off-by-one transcript citations (rows 1–3, 5–6) and the unit of I in `data/symbols.json`; the physics, every equation number and every number on the page are right.

## Resolution (2026-11-18, by the page author)

All transcript citations on the page were rechecked page by page with `pdftotext -f N -l N` against the four transcript PDFs.

1. Fixed: "the harmonic one is easier" now cites L10.1 transcript p. 2, and the auto-ionization / radiation sentence before it gained "(L10.1 transcript p. 2)".
2. Fixed: the box regulator paragraph cites L10.1 transcript pp. 2–3.
3. Fixed: periodic boundary conditions, torus, hard walls now cite L10.1 transcript p. 3.
4. Fixed: "some people know this by heart" cites L10.1 transcript pp. 3–4.
5. Fixed: "Now one can smile …" cites L10.3 transcript p. 2.
6. Fixed: "nothing more needs integrating" and "The units work" cite L10.3 transcript p. 4; calcs entry `golden-rule-units` now has `at: 'p. 4'` (and its `where` says p. 4).
7. Applied: "When does it hold?" cites L10.3 transcript p. 4 (with notes p. 94).
8. Fixed: calcs entry `lobe-height` cites L10.3 p. 2 (`source` and `where`).
9. Applied: the helium spectrum cites L10.4 transcript pp. 1–2; the radiative-decay sentence (and the picture of the transition, "good matrix elements", also on that page) cites L10.4 transcript p. 3.
10. Fixed: the second helium bullet now reads that the continuum starts at −54.4 eV and extends upwards, and that, unlike in hydrogen, it includes states of negative total energy.
11. Applied: the bracket now says Zwiebach notes the lower limit only in passing (L10.3 transcript p. 2).
12. Applied: the formula "The integral, done" now cites the lecture, L10.3 transcript p. 3, with the notes' eqs. (4.3.29)–(4.3.31) in `at`; the text adds that the notes change variable through ω_fi with dE_f = ħ dω_fi. In the same sentence the citation was tightened from pp. 2–3 to p. 3 (the u substitution and the value πħt₀/2 are on p. 3).
13. No change needed (agreed).
14. No change needed (agreed).

Symbols: the unit of I in `data/symbols.json` is now J·s².

Status set to `reviewed`.
