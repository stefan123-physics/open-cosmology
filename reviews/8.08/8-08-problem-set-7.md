---
page: content/year-4/8.08/8-08-problem-set-7.mdx
reviewed: 2026-11-27
sources_read:
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/resources/prb7/ (read: scratchpad txt/prb7.txt and pdf/prb7.pdf; four bare Huang pointers, no notices)
  - https://ocw.mit.edu/courses/8-08-statistical-physics-ii-spring-2005/af9b9ca23f35f9d59214c5ffc9651170_the_bose_gas.pdf (read: downloaded fresh, 22 pages = printed pp. 48-69, rendered as images; pp. 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 69 checked)
  - K. Huang, Statistical Mechanics (not opened, by the course rule)
verdict: pass-with-notes
---

# Review: 8.08 Problem Set 7

Writer: Opus. Reviewer: Opus (same model, blind).

Page reviewed in the worktree `.claude/worktrees/ps-808-7` (commit fe3aeee "8.08 Problem Set 7 (draft)"), with `calcs/8.08/8-08-problem-set-7.yaml` and the page's meanings in `data/symbols.json`.

## Blind solve

### My answers (written before opening the full page; numbers from review/ps7calc/blind.py)

- p1a: T_c = (2πħ²/mk_B)(n/g_{3/2}(1))^{2/3} = 398.3 nK (398.37 with 2.612).
- p1b: U/(Nk_BT_c) = (3/2) g_{5/2}(1)/g_{3/2}(1) = 0.770.
- p1c: P/(nk_BT_c) = g_{5/2}/g_{3/2} = 0.5135; P = 2.824e-10 Pa.
- p1d: S/S(T_c) = (T/T_c)^{3/2} (S = (5/2)k_B V g_{5/2}(1)/λ³ below T_c; checked numerically at T/T_c = 0.3, 0.7).
- p1e: the pressure does not change (P = k_BT g_{5/2}(1)/λ³ depends on T only below T_c; extra atoms go into the condensate).
- p2a: nλ² = g_1(z) = −ln(1−z), so z = 1 − e^{−nλ²}.
- p2b: no: z < 1 for every finite nλ², so a solution exists at every T > 0; no condensation in 2D.
- p2c: μ/k_BT = ln(1 − e^{−4}) = −0.01849.
- p3a: U/N ≈ 3k_BT − (9/8)k_BT_D (next term +(3/20)k_BT_D²/T; checked against the integral at T_D/T = 0.1, 0.3).
- p3b: C_V/(3Nk_B) ≈ 1 − (1/20)(T_D/T)² (checked by a numerical derivative at T/T_D = 3, 5, √5).
- p3c: T/T_D = √5 = 2.236.
- p3d: (9/8)k_BT_D is the zero-point energy per atom, 3·∫(ħω/2) over the Debye spectrum = 3·(3/8)k_BT_D (checked: 1.125). The thermal energy measured from the ground state falls short of the classical 3k_BT by exactly the zero-point energy.
- p4a: U/V = π²(k_BT)⁴/[30(ħv)³] (one polarisation; checked by quadrature).
- p4b: C_V/(Nk_B) = (2π²/15)(k_BT/ħv)³/n = 2.71e-4.
- p4c: ideal Bose gas with He-4 mass at n = 2.18e28 m⁻³: T_c = 3.133 K; C_V/(Nk_B) = (15/4)(g_{5/2}/g_{3/2})(T/T_c)^{3/2} = 0.0571 (0.05706; ratio to the sound quanta 210).

### Comparison with the page (one line per answer id)

- p1-tc: page 398 nK, mine 398.3: agree.
- p1-u: page 0.770, mine 0.7703: agree.
- p1-p: page 0.514, mine 0.5135: agree.
- p1-pa: page 2.82e-10 Pa, mine 2.824e-10: agree.
- p1-s: page (T/Tc)^(3/2), mine the same: agree.
- p1-iso: page choice 2 "stays the same: extra atoms join the condensate", mine the same: agree.
- p2-z: page 1 - exp(-n*lam^2), mine the same: agree.
- p2-bec: page choice 3 "never condenses", mine the same: agree.
- p2-mu: page -0.01849, mine -0.018485: agree.
- p3-u: page 3*kB*T - 9*kB*TD/8, mine the same: agree.
- p3-c: page 1 - TD^2/(20*T^2), mine the same: agree.
- p3-t99: page 2.236, mine √5 = 2.2361: agree.
- p3-zp: page choice 0 "the zero-point energy of the vibrations, per atom", mine the same: agree.
- p4-u: page pi^2*(kB*T)^4/(30*(hbar*v)^3), mine the same (quadrature check 756.053 = 756.053 at T = 1 K): agree.
- p4-c: page 2.71e-4, mine 2.713e-4: agree.
- p4-cid: page 0.0570, mine 0.05706: agree.

No disagreement.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Frontmatter `summary` | (summary rule, course note "Added after Sets 4-6") | "...the corrections to the Debye heat capacity of a solid at high temperature **and what they say about the zero-point energy**" | This names the answer of the choice box p3-zp (whose right choice is "the zero-point energy"), shown at the top of the page and under every "Practise" link. Replace with "the energy and heat capacity of a Debye solid above its Debye temperature". |
| 2 | warning | `data/symbols.json`, meanings scoped to this page (shown under "Symbols on this page" before any solution is opened) | (no hint may give a result away) | `g_1`: "g₁(z) = Σ zʲ/j = −ln(1 − z), **equal to nλ² for the Bose gas on a surface (Problem 2)**"; `U`: "...of the vibrations of the solid **without their zero-point energy** (Problem 3)"; `E_0`: "The zero-point energy of all the vibrations of the Debye solid" | The g_1 line is the whole of p2-z (nλ² = −ln(1−z) gives z at once); the U and E_0 lines give p3-zp away. Reword: g_1 "The function g₁(z) = Σ zʲ/j, summed over j = 1, 2, 3, …" (no closed form, no nλ²); U "The internal energy: of the Bose gas (Problem 1), of the vibrations of the solid as the notes define it (Problem 3), or of the sound quanta of the liquid (Problem 4)"; E_0 "An energy of the Debye solid found in the solution of Problem 3(d)" (or keep "zero-point energy" only if the symbol list is hidden until the solution is opened, which it is not). |
| 3 | warning | Problem 3(a), first `mistakes` hint (`3*kB*T - 3*kB*TD/8`) | (each mistake hint must be true of its formula) | "That takes 𝒟(u) ≈ 1 − 3u/8 but forgets the factor 3k_BT in front of it" | Forgetting the whole factor 3k_BT would subtract the pure number 3u/8 from 3k_BT. The formula 3k_BT − (3/8)k_BT_D multiplies 3u/8 by k_BT, i.e. it drops the 3 of 3k_BT. Write: "That multiplies 3u/8 by k_BT instead of 3k_BT: 3k_BT × 3u/8 = (9/8)k_BT_D." |
| 4 | warning | Problem 1(c), solution, Check | (a physics remark in a solution must be exactly right, course note) | "The pressure is tiny because both the density and the temperature are tiny; **this is why such gases are held by magnetic or optical traps rather than by walls**." | The small pressure is not the reason: a material wall is far hotter than a few hundred nK (atoms touching it would heat up or stick to it). Write: "Such gases are held by magnetic or optical traps rather than by walls, because any wall would be far hotter than the gas." or drop the clause. |
| 5 | warning | Problem 4(c), solution, "The condensation temperature" | Wen p. 61 (rendered): "for He ρ = 0.12 g cm⁻³, n = 1.8×10²² cm⁻³, T_c ≈ 1.8 K, actual T_c = 2.17" | "(At the smaller density 0.12 g/cm³ of the notes, p. 61, the same formula gives about 2.8 K.)" | The page's 2.8 K is right (my check: 2.763 K at 0.12 g/cm³; Wen's own n = 1.8e28 m⁻³ gives the same), but a reader who opens p. 61 finds 1.8 K. Writing rule 4 and the course note ask to say so: "(At the smaller density 0.12 g/cm³ of the notes, p. 61, the same formula gives about 2.8 K; the notes print 1.8 K there, a slip.)" Also a calcs `kind: fact` note is not needed; the calcs entry p4-tc-wen already recomputes 2.8 K. |
| 6 | warning | Problem 1(a), solution, Check | Wen p. 61 gives only a sodium example (n = 10¹⁴ cm⁻³, T_c ≈ 1.5 μK; my check 1.506 μK); nothing on rubidium | "Condensates of rubidium in the laboratory do form at a few hundred nanokelvin." | A quoted real-world figure with no source and no calcs `kind: fact` entry (Writing rule 7). It is true (the first rubidium condensate, JILA 1995, at about 170 nK; before 2005, so no "later development" marker is needed). Either cite a source (e.g. the 2001 Nobel Prize press release on NobelPrize.org, added to `references`, with a fact entry in calcs), or replace it with the notes' own example: "Wen's sodium example (p. 61) gives 1.5 μK at 10¹⁴ atoms per cm³, the same order." |
| 7 | info | Solution Formulas cited `cite="mit"` with `at="Problem N, p. 1 (our own solution)"` (7 formulas) | Not on MIT's sheet | Labelled as ours | The convention accepted in the 8.07 and 8.08 Set 1-6 reviews. Every statement formula is cited to Wen (p. 60 equations of state, p. 54 Debye energy: both checked on the rendered pages, correct). No change. |
| 8 | info | Problem 4(a), second hint | Wen p. 51 gives U/V = σT⁴ with σ = π²k_B⁴/15(ħc)³; the integral π⁴/15 is not written | "∫x³dx/(eˣ − 1) = π⁴/15 (notes p. 51)" | Implied by σ on p. 51, not printed. Optional: "(implied by the notes' σ, p. 51)". |
| 9 | info | Problem 3(d), "The idea" | p. 49 writes each oscillator's energy as nħω + ½ħω, and the free energy without the ½ħω; p. 54 writes U/N = ∫dε D(ε)ε/(e^{βε} − 1)/(⅓∫D), without zero-point energy | "The U of the notes leaves out the zero-point energy ½ε of every mode (notes p. 49)" | Correct, but p. 54 is where the U of the problem is defined. Suggest "(notes pp. 49 and 54)". |
| 10 | info | Problem 3(d), "What it means" | | "a phonon at T_D has an energy of order k_BT_D, not a fixed (9/8)k_BT_D per atom" | The wrong choice is plainly wrong, but the rebuttal is vague. My check: the mean phonon energy at T = T_D in the Debye model is 0.635 k_BT_D (review/ps7calc/check3.py). Optional: give that number. |
| 11 | info | Problem 1(e) and Problem 3(b) checks | Wen p. 60 has the P-V isotherm sketch; p. 54 the C_V/3Nk_B sketch | "as in Wen's sketch of the isotherms", "as Wen's sketch of C_V/3Nk_B shows" | Add the pages: "(p. 60)", "(p. 54)". |
| 12 | info | Problem 4(c), Check | Wen p. 60: sketch of real He-4 with C_V ∝ T³ below 2.17 K; table line "T³: conserved interacting bosons"; p. 69: C_V ∝ T³ at low T | "Measured liquid helium at such temperatures follows the T³ law ... (notes p. 69) ... (p. 60)" | Supported by the notes (both pages checked). The sentence ends awkwardly ("and the last line of his table of low-temperature laws says (p. 60)"); optional rewording: "...as Wen's interacting condensate shows (p. 69); his sketch of real helium-4 and the last line of his table on p. 60 give the same T³." |
| 13 | info | Problem 3(c), Check | | "which is why the law of Dulong and Petit was found long before quantum mechanics" | A historical remark (Dulong and Petit, 1819) without a source; common knowledge and correct. No change needed. |

## Arithmetic and answer checks
- Every number on the page was recomputed (review/ps7calc/blind.py, check2.py, check3.py): m(Rb) 1.443e-25 kg; 2πħ²/mk_B = 3.507e-20 K m²; (n/2.612)^{2/3} = 1.136e13 m⁻²; T_c 398 nK; λ(T_c) 0.297 μm vs spacing 0.215 μm; 0.770; 0.514; 2.82e-10 Pa; nk_BT_c 5.50e-10 Pa; S/Nk_B at T_c 1.28; N₀/N 0.65 → 0.82 on halving the volume at 0.5 T_c (the excited density is fixed, so the excited fraction halves: correct); e⁻⁴ = 0.01832, z = 0.98168, μ/k_BT = −0.01849; z/(1−z) = 53.6; 𝒟(u) = 1 − 3u/8 + u²/20; C_V at u = 1: approximation 0.950, exact 0.9517; T/T_D = 2.236, exact C_V there 0.9901; 3𝒟(1) = 2.02; E₀ = (9/8)Nk_BT_D; n(He) 2.18e28; k_BT/ħv 1.650e8 m⁻¹, cubed 4.494e24; 2π²/15 = 1.316; C_V/Nk_B 2.71e-4; k_max = 1.09e10 m⁻¹, ratio 66; 38 nm; 0.36 nm; m(He) 6.646e-27 kg; T_c(He) 3.13 K; 2.8 K at 0.12 g/cm³; 15/4·g52/g32 = 1.926; C_V/Nk_B 0.0570; ratio 210. All correct.
- Rounding note (info): with T_c = 3.13 exactly, (0.30/3.13)^{3/2} = 0.0297 and 1.926 × 0.0297 = 0.0572; the page's 0.0296 and 0.0570 use the unrounded 3.133 K. A reader following the printed numbers lands within 0.4% of the box value, inside its 1% tolerance. Optional: write (0.30/3.133)^{3/2}.
- Low-T Debye check in 4(a): 3 × (π²/30)(k_BT)⁴/(ħv)³ with k_BT_D = ħv(6π²n)^{1/3} gives (3π⁴/5)nk_BT⁴/T_D³: correct, and agrees with the notes' π⁴/5u³ limit on p. 54.
- Answer boxes: every number box has 1% tolerance, tight enough for 3 significant figures. Formula boxes: `vars` ranges keep the answers and every mistake finite and different (p1-s T ∈ [0.2, 0.9], Tc ∈ [1, 2]: (T/Tc)^{5/2} ≠ (T/Tc)^{3/2} ≠ 1; p2-z: nλ² from 0.125 to 4.5, all three forms finite and distinct; p3-u, p3-c: T_D/T ≤ 0.4, distinct; p4-u: factors 1, 3, 2 distinct). Mistake hints are true of their formulas except #3 above. p1-s "(T/Tc)^(5/2) is how U falls below T_c": true (U ∝ T^{5/2}, p. 60). p2-z "nλ² is the classical limit; for nλ² > 1 it gives z > 1": true. p3-c both hints true. p4-u both hints true (three polarisations give 1/10, two give 1/15 = σT⁴ form).
- Choice boxes: right choices at positions 2, 3, 0; none is the longest or the shortest of its set (lengths checked by eye: p1-iso right 47 characters vs 37-54; p2-bec right 47 vs 41-70; p3-zp right 48 vs 28-62, not shortest "the binding energy of one atom"). Every wrong choice is plainly wrong.
- Hints: none hands over a box result. p1d hint 1 gives TS = U + PV − μN (marked "stated by us"), which leads to S = (5/3)U/T but not to the exponent; p4b hint says U ∝ T⁴, which follows from the 4(a) answer and is needed anyway.
- calcs: every answer box has an entry recomputed by an independent route (integrals for g functions, numerical solves and derivatives). Two info notes: the header and the p4-c `where` say C_V is "the numerical T-derivative of the energy density (k-integral)", but p4-c differentiates the closed form π²w⁴/30 (the k-integral is used only in p4-u); the `amu` fact is cited `cite: mit` "CODATA 2018 value, rounded (our addition)", which is not on MIT's sheet (a CODATA reference would be cleaner). Neither changes a number.

## Coverage and order
- MIT's sheet (March 16, 2005): four pointers, Huang 10.7, 10.8, 11.9, 11.10, no text. The page keeps MIT's four problem slots in order, each "(our own problem)", says so in the intro and in each problem, and does not open Huang. Points are ours and said so (20 + 15 + 20 + 15 = 70).
- `covers: [7]` and `lecture: 7`: by date (Set 7 between Set 6 and Set 8) the set belongs to Chapter VII (The Bose Gas); all four topics are in Wen's pp. 48-69. The three prerequisites exist as lessons.
- Do Problems 2 and 3 stray from the chapter? Problem 2 (the 2D Bose gas) is not in Wen's notes, but it repeats exactly his method of p. 56 (sum to integral, fix z from n) in two dimensions and contrasts with p. 57's condensation; the statement says so. Problem 3 is the Debye model of pp. 53-54, taking Wen's own expansion 𝒟 ≈ 1 − 3u/8 one order further. Both are fair chapter material.
- No duplicate of Sets 1-6 or Set 8 (checked by titles: Set 1 has an Einstein-solid counting problem, Set 6 Bose-level fluctuations and an expanding-universe photon gas, Set 8 a trapped sodium condensate and a uniform condensate's healing length).

## Licensing
- MIT's sheet and Wen's Chapter VII PDF carry no "All rights reserved", "Courtesy of" or "Image by" notice (sheet text read; PDF pages rendered).
- No figure is redrawn; the page has no figures. No OpenStax, LibreTexts or Huang material. Wording is the page's own.
- No em dashes in the page (count 0).

## Notes
- Every citation of Wen's Chapter VII was checked on the rendered PDF (printed page = PDF page + 47): p. 49 (oscillator energy nħω + ½ħω): right; p. 51 (σT⁴, Stefan constant): right; p. 53 (phonons, k_max): right; p. 54 (Debye D(ε), U/N = 3k_BT𝒟(u), 𝒟 ≈ 1 − 3u/8, C_V sketch): right; p. 55 (Bose condensation section begins): right; p. 56 (nλ³ = z classical, g_{3/2}, 2.612, Wen's way of fixing μ): right; p. 57 (k_BT_c formula): right; p. 58 (N₀/N = 1 − (T/T_c)^{3/2}, finite system N₀ = 1/(z⁻¹ − 1)): right; p. 60 (U/V, P = (2/3)U/V, nλ³ = g_{3/2}(z) or z = 1; C_V = (15/4)k_BVg_{5/2}(1)/λ³; T³ table and helium sketch; isotherms): right; p. 61 (0.12 g/cm³ helium): right page, but the notes' 1.8 K is a slip (#5); p. 69 (ħω_k = v|k|, C_V ∝ T³): right. Note: g_{5/2}(1) = 1.341 is not printed on p. 60 (calcs `g52` cites p. 60); it is a standard value, recomputed in calcs, so this is only a citation nicety.
- The (9/8)k_BT_D offset is rightly called the zero-point energy: the total energy including ½ħω per mode tends to 3k_BT with no constant term at high T, and the notes' U (p. 54) has no zero-point term, so U = total − E₀ (checked: E₀ = 3 × (3/8)k_BT_D = 1.125 k_BT_D per atom).
- "How to answer" typing example `a*(b*T)^4/(c + d)^2` has a T⁴ shape like the p4-u answer; it does not give the box away (no 30, no polarisation count). Info only.
- Notation paragraph: "In Problems 3 and 4, v is a speed of sound", but Problem 3 never uses v (and the `v` symbol meaning mentions "in the solid (Problem 3)"). Info: say "In Problem 4" or keep for the solid's Debye relation if one is added.
- Problem 2(c) Check: "At this density a three-dimensional gas, with nλ³ above 2.612, ..." mixes a 2D density with a 3D condition. Info: "In three dimensions, a gas with nλ³ above 2.612 would ...".
- I did not run `npm run content:check` or `calc:test` in the worktree; the review is against the page text, the calcs file and my own calculations.

COUNTS: errors=0 warnings=6 info=13

## Resolution (2026-11-27, by the page author)

- W1: the summary now says "the energy and heat capacity of a Debye solid above its Debye temperature".
- W2: the page-scoped meanings of g₁, U and E₀ in `data/symbols.json` no longer give answers away.
- W3: the Problem 3(a) mistake hint now says the formula multiplies 3u/8 by k_BT instead of 3k_BT.
- W4: the Problem 1(c) check now says traps are used because any wall would be far hotter than the gas.
- W5: Problem 4(c) now notes that the notes print 1.8 K there, a slip (calcs entry `p4-tc-wen-slip`).
- W6: the uncited rubidium remark in Problem 1(a) is replaced by the notes' own example (p. 61: sodium at 10¹⁴ cm⁻³ condenses near 1.5 μK), with a calcs entry.
- Info items left as they are.
- `status: reviewed`.
