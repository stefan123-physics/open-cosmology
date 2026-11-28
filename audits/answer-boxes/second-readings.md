# Answer boxes: second valid answers and readings

Audit by Account B, read-only, 2026-11-28. Nothing on any page was changed. For plan Step 4 (docs/ANSWER-BOX-FIX-PLAN.md on `origin/run/a-8044-805`): which boxes should get `alsoAccept` (a second value or formula, with a note shown to the reader).

## Summary

- **What was read:** all 195 problem-set pages (`kind: problems`): 174 on `run/b-806-8962` and 21 that are only on Account A's branch `origin/run/a-8044-805` (cc52ed6), read with `git show` and marked `*` below (8.02 Sets 5 to 11, 18.06 Sets 1 to 4 and 6, 8.902 Sets 4 to 7, Ferreras Sets 1 to 5). 4,881 answer boxes: 2,031 number, 1,917 formula, 933 choice.
- **How:** for every box, a script took the text from the start of its part (or the previous box) to the next box: statement, hints and solution. It searched that text for "with the factor", "identical particles", "other reading", "another reading", "if instead", "alternatively", "either", "also correct", "also accepted", "equally valid", "another convention", "other convention", "if you take", "depending on", "some books", "many books", "strictly", "read as", "would give", "would be", "interpret", "counting each", "both are", then in a second pass "our reading", "we read", "the notes'", "the sheet's formula", "the book's value", "as printed", "box accepts", "either value", "either sign", "convention", and in a third "each pair", "double count", "works as well", "is accepted", "accepts both". Every hit was read by hand.
- **Hits:** 500 in the first pass (437 boxes, 130 of them choice boxes), 185 in the second (159 boxes), 27 in the third (mostly the same boxes): about 570 distinct boxes.
- **Result:**
  - **5 boxes with a real second answer** (section A): 3 for `alsoAccept` with high confidence, 2 with medium confidence. Ferreras Set 5 box e3-gamma, the owner's 6.3(D), is the first.
  - **1 box with a second sign convention** that the statement already fixes (section B): a message, not `alsoAccept`.
  - **13 boxes where the second reading is already accepted** by the tolerance (section C): no change needed.
  - **29 boxes where the solution names a value or formula from another reading that the statement rules out** (section D): not `alsoAccept`; candidates for a "wrong reading" message if number boxes ever get listed mistakes.
  - **Discarded:** the remaining hits, on about 520 boxes: counterfactual checks ("without friction it would be 5.42 m/s"), "either side", "both are positive", "interpret the result", "strictly between", hints that say "either compute … or …", and statements that fix one reading with no second answer.
- **Per course (sections A / B / C / D):** Ferreras 1 / 0 / 1 / 4; 8.286 1 / 0 / 4 / 1; 8.03 1 / 0 / 0 / 0; 8.962 2 / 0 / 0 / 5; 8.08 0 / 1 / 0 / 6; 8.902 0 / 0 / 0 / 4; 8.06 0 / 0 / 3 / 1; 8.044 0 / 0 / 2 / 1; 8.033 0 / 0 / 1 / 2; 8.02 0 / 0 / 1 / 2; 8.04 0 / 0 / 1 / 0; 18.01 0 / 0 / 0 / 2; hs-4 0 / 0 / 0 / 1. All other courses: none.
- **Also found:** in 8.962 Set 2 the two formula boxes p3b-rho0 and p3b-tt disagree: the first lists the "δa as diameter" reading as a mistake with a hint, the second does not (section A, #5).

## A. Real second answers: candidates for `alsoAccept`

| # | Page | Box | Current answer | Second answer | Note to show the reader | Sure? |
|---|---|---|---|---|---|---|
| 1 | content/year-5/Ferreras/ferreras-problem-set-5.mdx* (Exercise 6.3 D) | e3-gamma | value 2.07 (label "$\Gamma_a$ in units of $10^{-42}$ cm⁻³ s⁻¹"), tolerance 2% | value 1.035, tolerance 2% (accepts the 1.04 the solution prints; exactly half of 2.07). Calcs entry `e3-gamma-half` (expected 1.04e-42) already exists. | "Correct with the factor ½ for identical particles: each pair is counted once." | High: the solution names it ("Counting each pair of identical particles once adds a factor ½, $1.04 \times 10^{-42}$") and the owner asked for it (plan Step 6). Note that the statement says to use the book's rate "as printed … with no factor ½", so the note should say that the main answer follows the book. The box is also in power-of-ten.md (10⁻⁴²). |
| 2 | content/year-4/8.286/8-286-problem-set-10.mdx (Problem 4 c) | p4-c-z1 | value 9.15 (unit × 10²⁶), tolerance 2% | value 8.20, tolerance 2% (calcs entry `p4-zmin-fallback`, expected 8.20e26) | "Correct with MIT's fallback horizon distance 3ct₀; with Problem 3's horizon distance the answer is 9.15." | High: MIT's sheet lets students who skipped Problem 3 use 3ct₀; the statement says the box expects Problem 3's value, so today 8.20 is refused. The next box, p4-d ($N_\text{min}$, 62.1 ± 0.2), already accepts ln(8.20 × 10²⁶) = 61.97. |
| 3 | content/year-2/8.03/8-03-problem-set-10.mdx (Problem 10.5 a) | p5-b | value 2.5 ($b/\lambda$), tolerance 0.25 | value 5, tolerance 0.5 ("an estimate within a tenth", as the solution says for 2.5) | "That is b read as the distance between the centres of the slits (MIT's words). This page's b is the opaque strip between them, d − a = 2.5λ." | Medium: the page defines b as the strip ("this page reads MIT's 'distance between the two slits' in that way"), and its solution names 5λ as the other reading. Accepting it is a choice for the owner; a message without the point would also do. |
| 4 | content/year-5/8.962/8-962-problem-set-2.mdx (Problem 3 b) | p3b-rho0 (formula) | `N*m*sqrt(1 - a^2*w^2)/(2*pi^2*a*da^2)` | `2*N*m*sqrt(1 - a^2*w^2)/(pi^2*a*da^2)` (4 times larger) | "Correct if δa is the diameter of the cross-section; this page takes it as the radius (our reading of the sheet)." | Medium: the statement fixes δa as the radius as "our reading of the sheet", and the solution says the diameter reading makes "every component … 4 times larger". Today the box lists this formula as a **mistake** with a hint, which is also defensible. |
| 5 | same page (Problem 3 b) | p3b-tt (formula) | `N*m/(sqrt(1 - a^2*w^2)*2*pi^2*a*da^2)` | `2*N*m/(sqrt(1 - a^2*w^2)*pi^2*a*da^2)` (4 times larger) | as #4 | Medium. **Inconsistency to fix either way:** p3b-rho0 lists the diameter reading as a mistake with a hint, p3b-tt does not, so a reader who took δa as the diameter gets a hint on the first box and a bare "Not yet" on the second. The two ratio boxes p3b-tx and p3b-xy do not depend on δa. |

## B. A second convention that the statement already fixes

| Page | Box | Current answer | Other convention | Suggested handling | Sure? |
|---|---|---|---|---|---|
| content/year-4/8.08/8-08-problem-set-9.mdx (Problem 1 d) | p1-nu | value −0.5, tolerance 0.01 | +0.5, the "familiar ν = ½ of Ginzburg–Landau theory" (solution) | The statement defines ν by $\xi \propto |T_c - T|^{\nu}$ and says many books write $|T - T_c|^{-\nu}$. A reader who types +0.5 has the physics right and the sign of this page's definition wrong: a message ("Right size; with this page's definition a diverging length has ν < 0") fits better than `alsoAccept`. | Medium |

## C. Second readings that the box already accepts (no change needed)

| Page | Box | Value, tolerance | Second reading named by the page | Accepted interval |
|---|---|---|---|---|
| 8-033-problem-set-3 | p8-s2 | 191000, 2% | 1.90 × 10⁵ m² with c = 3.00 × 10⁸ m/s ("Both are accepted") | [187180, 194820] |
| 8-044-problem-set-10 | p3-cl2 | 22, 7% | 21 or 23 lines ("The box accepts 21, 22 or 23 lines") | [20.46, 23.54] |
| 8-044-problem-set-11 | p5-xc | 5.07, 6% | 5 percent with MIT's rounding ("The box accepts both") | [4.766, 5.374] |
| 8-06-problem-set-4 | p3-e0 | 1.40, 1.5% | 1.407 with the exact Airy zero ("Both boxes accept either value") | [1.379, 1.421] |
| 8-06-problem-set-4 | p3-height | 13.6, 1.5% | 13.7 μm with the exact Airy zero | [13.40, 13.80] |
| 8-06-problem-set-8 | p5-count | 3.73, 2% | 3.71 with MIT's rounded e | [3.655, 3.805] |
| 8-04-problem-set-9 | p1-exc | 0.0827 (in units of π), 5% | 0.253 or 0.267 rad with the full phase, that is 0.0805π and 0.0850π ("The box accepts those values too") | [0.0786, 0.0868] |
| 8-286-problem-set-6 | p7-b | 0.685, 2% | 0.686 from the rounded 0.74 s ("which the box accepts") | [0.6713, 0.6987] |
| 8-286-problem-set-9 | p3-a | 3.66e9, 2% | 3.70 × 10⁹ with T₀ = 2.7 K | [3.587e9, 3.733e9] |
| 8-286-problem-set-9 | p5-d | 2.48e21, 3% | Guth's 2013 values 2.7 K and 67.3 km/s/Mpc (statement: "are accepted too") | [2.406e21, 2.554e21] |
| 8-286-problem-set-10 | p4-d | 62.1, absolute 0.2 | 61.97 from MIT's fallback 3ct₀ (see A #2) | [61.9, 62.3] |
| 8-02-problem-set-8* | p4-b | 1533, 1% | 1525 A printed in the notes from rounded values | [1518, 1548] |
| ferreras-problem-set-5* | e2-xf | 26.9, 1% | 27.0 with $g_* = 80$ in place of 100 ("not sensitive to our choices") | [26.63, 27.17] |

8.033 Set 8 box p6-h and its three neighbours (h, Ω_Λ, Ω_b, Ω_d) take ranges that hold "both lists of the course slides (2005 and 2006)", by design.

## D. Other readings that the statement rules out (not `alsoAccept`)

The solution names a value or formula that a reader could reach with a different reading, a printed formula of the source, or a common convention, but the statement fixes the reading. Today the reader gets a bare "Not yet" on a number box. Listed so that the owner can decide whether such values should get a message (number boxes have no `mistakes` today).

| Page | Box | Value or formula | Other value | Where it comes from | Note |
|---|---|---|---|---|---|
| ferreras-problem-set-5* | e6-excess | 2.19 | 0.686 | dark matter as a fraction of the total mass, the solution's "other reading" of the book's "fractional mass excess" | The statement fixes "a multiple of the mass of stars and gas". A message would help: the book's wording is open. |
| ferreras-problem-set-5* | e7-arcsec | 0.525 | 0.3 (book, p. 168) | the book's value, which the page could not reproduce | Plan Step 6: the book's 0.3 is probably the Newtonian deflection, half of ours (0.26). Content note for the solution, not a box change. |
| ferreras-problem-set-4* | e3-z | 41.4 | 62 | a matter-only universe, Ω_m,0 = 1 | Already a listed mistake of the formula box before it ("That is the result for a universe with Ω_m,0 = 1"). |
| ferreras-problem-set-2* | e4-ratio | 0.183 | 0.129 | E taken as the potential energy, not the virial total | Statement fixes "our reading of E". |
| 8-902-problem-set-5* | p1-halo | 177 kpc | 355 kpc | MIT's sheet formula $M(<R) = v_c^2R/(2G)$, which the page corrects | The statement says so and drops the 2. A reader working from MIT's sheet gets 355. |
| 8-902-problem-set-6* | p2-mstar | 0.159 | 0.317 | Press–Schechter with the factor 2 of the notes | Statement asks for "plain Press–Schechter". |
| 8-902-problem-set-4* | p3-theta-gal | 0.914 arcmin | 0.457 arcmin | the radius in place of the diameter | "The angle that a sphere subtends" is its diameter; a message would help. |
| 8-902-problem-set-6* | p1-t12 | 1.39 (10⁶ K) | 2.78, or 1.67 | all the potential energy at the virial radius into heat (breaks energy conservation), or μ = 0.6 in place of ½ | Statement fixes the assumptions. |
| 8-08-problem-set-12 | p1-l (formula) | `pi^2*kB^2/(3*e^2)` | half | the notes' factor 1/6 in $K = \frac16 n\bar v\lambda c_v$ | Already a listed mistake with a hint. |
| 8-08-problem-set-12 | p1-lnum | 2.44 | 1.22 | the notes' 1/6 | Number box: no hint possible today, though its formula box has one. |
| 8-08-problem-set-12 | p1-al | 270 | 135 | the notes' 1/6 | As above. |
| 8-08-problem-set-12 | p2-lam | 200 nm | 100 nm | "many books" write $K = \frac13 Cv\lambda$ | The statement gives the notes' 1/6. |
| 8-08-problem-set-12 | p4-nu | 7.74 (10⁻⁶ Pa s) | 15.5 | the notes' box on p. 102, which prints $\sqrt{2mk_BT}/(3\sigma)$ for $(6\sigma)$ | A reader who copies the notes' box gets twice the answer; the statement gives the right formula. |
| 8-08-problem-set-11 | p3-ratio | 3 | 2.36 | the mean speed $\sqrt{8k_BT/\pi m}$ in place of $\bar v$ | Statement fixes $\lambda = \bar v\tau$. |
| 8-06-problem-set-3 | p3-bint | 1545 gauss | 2185 gauss | $|\vec L| = \sqrt{l(l+1)}\,\hbar$ in place of ħ | Statement fixes $|\vec L| = \hbar$. |
| 8-02-problem-set-11* | p3-b | 180 μm | 150 μm | the third dark fringe | Statement says "third-order bright fringe". |
| 8-02-problem-set-11* | p4-e | 39 | 41 | counting the two missing fringes at the edges | Statement asks for the bright fringes inside the central maximum. |
| 8-962-problem-set-1 | p2f (formula) | `-5*t` | `5*t` | signature (+, −, −, −) | The page's conventions fix (−, +, +, +). |
| 8-962-problem-set-1 | p2g-up (formula) | `-2*t` | `2*t` (upper components with the other signature) | signature (+, −, −, −) | As above. |
| 8-962-problem-set-3 | p3c-a | 1 | −1 | the wedge product written $\vec E\wedge\vec U$ | Statement defines $\vec U\wedge\vec E$. |
| 8-962-problem-set-6 | p3b-r, p3c-kappa (formula) | `-6*L`, `24*pi*G` | `6*L`, `-24*pi*G` | the other sign of the Riemann tensor or the other signature | Already listed mistakes with hints. |
| 18-01-problem-set-5 | p2e-i1, p2e-i2 | 1.2533, 0.7979 | −1.2533, −0.7979 | the pair −c₁, −c₂ also works, since g is odd | Statement: "take both positive". |
| hs-4-practice | p5-a | 2.51e5 J | −2.51e5 J | the sign of Q for heat that leaves the water | Statement asks how much heat it "has given off". |
| 8-044-problem-set-8 | p4-z | 1.773 | 1.386 | counting each level once in place of each state | A mistake, named in the check. |
| 8-033-problem-set-7 | p6-pions | 9771 | 10133 | the neutral pion's 135.0 MeV | Statement: "Take the rest energy of every pion to be 140 MeV, as MIT does". |
| 8-033-problem-set-8 | p5-closed | 13.93 Gyr | slightly less | an online calculator that includes photons | "Expect small differences in the last digits"; the box allows 0.5%. |
| 8-286-problem-set-9 | p2-c | 124.07 | 120.9 | the cut-off $k_\text{max} = 1/\ell_P$ | Statement fixes $\lambda_\text{min} = \ell_P$; already a listed mistake of the formula box. |

## Not counted as second readings

- Formula boxes accept every equivalent form by design (checked by value), so "either form will do" in a solution is not a second reading.
- Choice boxes: no hit named a second right choice.
- The owner's 7.3(C) (Ferreras Set 5 box e7-arcsec, the book's 0.3″) is in section D, as a content note.
