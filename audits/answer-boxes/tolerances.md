# Answer boxes: tolerances of every number box

Audit by Account B, read-only, 2026-11-28. Nothing on any page was changed. Part of the answer-box fix (docs/ANSWER-BOX-FIX-PLAN.md on `origin/run/a-8044-805`, Steps 4 and 5; TASKS.md, "Answer-box fix: split").

## Summary

- **What was read:** every page with `kind: problems` (195 pages: 174 on `run/b-806-8962` and 21 that are only on Account A's branch `origin/run/a-8044-805` at cc52ed6, read with `git show`; those are marked `*` in the tables). In all, 4881 answer boxes: 2031 number boxes, 1917 formula boxes, 933 choice boxes. This file covers the 2031 number boxes.
- **How the interval is computed:** exactly as `checkNumber` in `lib/answers.ts`: a typed number is right when |typed − value| ≤ tolerance × (1 + 10⁻⁹); a tolerance "N%" is N% of |value|, any other tolerance is absolute, and a box with no tolerance gets half a unit in the last printed digit of `value`. The script parses `value` and `tolerance` from the MDX and computes the interval; nothing was guessed.
- **Tolerances in use:** 1421 percent tolerances, 610 absolute ones, 0 with none. Most common: 1% (774), 0.01 (332), 2% (276), 3% (178), 0.5% (74), 5% (66).
- **Listed mistakes:** no number box has any. `mistakes` exists only for formula boxes (`checkFormula`); `checkNumber` takes only `value` and `tolerance`, and none of the 2,031 number boxes carries a `mistakes` attribute. So the "listed mistakes" column of the brief is empty for every row and is left out of the tables. In its place, flag (b) also checks the wrong values that a solution names in words ("forgetting the factor 3/2 would give 4.14e-21"): see (b2).

### Counts per flag

| Flag | Meaning | Boxes |
|---|---|---|
| (a) | no tolerance (default of half the last digit) | 0 |
| (b) | accepted interval holds an obvious slip of the value (sign flip, ×2, ×½, ×10, ×1/10, ×π, ×1/π, ×√2, ×1/√2, ×2π, ×1/(2π)) | 22 (all with value 0) |
| (b2) | accepted interval holds a wrong value that the solution names in words | 1 real case of 11 hits |
| (c) | percent tolerance above 5%, or absolute tolerance above 5% of the value | 44 (22 with a value that is not 0, 22 with value 0) |
| (d) | the value rounded to 3 significant figures is rejected | 76 (46 where the statement asks for more digits, 30 where it does not say) |
| (e) | whole-number value whose interval holds a neighbouring whole number | 186 (18 of the 87 boxes that ask for a count; 168 are measured quantities that happen to be whole numbers) |

For comparison (no flag): rounding the value to **2** significant figures is accepted by 1587 of the 2031 number boxes (78%).

### Counts per course

| Course | All boxes | Number boxes | (a) | (b) | (c) | (d) | (e) | (e), counts only |
|---|---|---|---|---|---|---|---|---|
| hs-0 | 20 | 19 | 0 | 0 | 0 | 0 | 6 | 2 |
| hs-1 | 27 | 26 | 0 | 0 | 0 | 0 | 4 | 0 |
| hs-2 | 33 | 31 | 0 | 0 | 0 | 0 | 9 | 0 |
| hs-3 | 46 | 36 | 0 | 0 | 0 | 0 | 13 | 0 |
| hs-4 | 43 | 38 | 0 | 0 | 0 | 0 | 14 | 1 |
| hs-5 | 37 | 28 | 0 | 0 | 0 | 0 | 6 | 0 |
| hs-6 | 50 | 40 | 0 | 0 | 1 | 0 | 6 | 1 |
| hs-7 | 49 | 37 | 0 | 0 | 0 | 1 | 6 | 0 |
| hs-8 | 67 | 49 | 0 | 0 | 1 | 0 | 6 | 1 |
| 8.01 | 144 | 26 | 0 | 0 | 0 | 1 | 7 | 0 |
| 18.01 | 126 | 59 | 0 | 1 | 2 | 13 | 3 | 0 |
| 8.02 | 332 | 108 | 0 | 1 | 1 | 0 | 9 | 0 |
| 18.02 | 190 | 104 | 0 | 5 | 5 | 23 | 1 | 1 |
| 8.03 | 248 | 81 | 0 | 0 | 6 | 0 | 5 | 0 |
| 18.03 | 272 | 115 | 0 | 4 | 4 | 9 | 4 | 0 |
| 8.033 | 291 | 148 | 0 | 0 | 5 | 2 | 10 | 4 |
| 18.06 | 347 | 240 | 0 | 4 | 5 | 3 | 2 | 2 |
| 8.04 | 280 | 112 | 0 | 2 | 3 | 4 | 4 | 0 |
| 8.044 | 290 | 61 | 0 | 0 | 3 | 2 | 2 | 1 |
| 8.05 | 318 | 78 | 0 | 3 | 3 | 4 | 2 | 1 |
| 8.06 | 288 | 76 | 0 | 1 | 2 | 1 | 4 | 0 |
| 8.286 | 147 | 44 | 0 | 0 | 0 | 5 | 2 | 0 |
| 8.07 | 258 | 77 | 0 | 0 | 0 | 0 | 7 | 0 |
| 8.08 | 201 | 84 | 0 | 0 | 0 | 0 | 11 | 1 |
| 8.09 | 283 | 62 | 0 | 1 | 1 | 2 | 5 | 0 |
| 8.902 | 128 | 85 | 0 | 0 | 0 | 6 | 24 | 1 |
| Ferreras | 108 | 86 | 0 | 0 | 0 | 0 | 13 | 2 |
| 8.962 | 258 | 81 | 0 | 0 | 2 | 0 | 1 | 0 |
| **All** | **4881** | **2031** | **0** | **22** | **44** | **76** | **186** | **18** |

Pages only on Account A's branch (marked `*`): 18-06-problem-set-1, 18-06-problem-set-2, 18-06-problem-set-3, 18-06-problem-set-4, 18-06-problem-set-6, 8-02-problem-set-10, 8-02-problem-set-11, 8-02-problem-set-5, 8-02-problem-set-6, 8-02-problem-set-7, 8-02-problem-set-8, 8-02-problem-set-9, 8-902-problem-set-4, 8-902-problem-set-5, 8-902-problem-set-6, 8-902-problem-set-7, ferreras-problem-set-1, ferreras-problem-set-2, ferreras-problem-set-3, ferreras-problem-set-4, ferreras-problem-set-5.

## The two cases of the owner's feedback (Ferreras Set 5)

- **Box e1-t (Exercise 6.1 A), value 1.71, tolerance 2%:** accepted interval [1.676, 1.744]. The owner's 1.65 is 3.5% below 1.71 and is rejected. 1.65 is not any of the slips tested here, nor a value the solution names; rounding 1.71 to 1.7 (0.6%) is accepted. The case shows the 2% habit working as intended on a three-digit value: a result that differs in the second digit is refused.
- **Box e2-xf (Exercise 6.2 A), value 26.9, tolerance 1%:** accepted interval [26.63, 27.17]. The owner's 27 is 0.37% above 26.9 and is accepted. The solution itself says that $g_* = 80$ in place of 100 gives $x_f = 27.0$, so the box cannot tell that different input from the right one (the solution calls the answer "not sensitive to our choices"; $g = 1$ or 4 give 26.2 or 27.6, which are rejected). This is the only box where a named wrong or different input lands inside the interval (flag b2).
- **What the pair shows:** the two boxes are consistent with their own tolerances (2% and 1%); the difference the owner saw comes from the rounding step, not from the policy. A percentage allows a different number of rounded digits depending on the leading digit: at 1% a value near 27 survives rounding to two figures (0.37%), a value near 1.71 survives it at 2% (0.6%), but a value such as 1.15 would not survive rounding to 1.1 even at 4%. Across the site, 2-figure rounding is accepted by 78% of number boxes. A written rule (Step 5) could say whether a reader who rounds to two figures should pass, and set the tolerance from that.

## Flagged boxes

### (a) No tolerance

None. Every number box has a `tolerance`, so the default (which 8.02 Set 1 showed can accept a wrong value) is not used anywhere at present. A `content:check` warning for a missing tolerance (plan Step 5) would keep it that way.

### (b) A slip inside the interval

No box with a value other than 0 accepts any of the eleven slips: the nearest slips (×√2 and ×1/√2) are 29% to 41% away from the value, and the widest percent tolerance on the site is 15%. The only boxes flagged are those whose value is 0, where a sign flip or any factor gives 0 again; that is harmless, but such a box cannot catch a slip by its number alone:

| Page | Box | Value | Tolerance | Interval | Label |
|---|---|---|---|---|---|
| 18-01-problem-set-8 | b1-a | 0 | 0.001 | [-0.001, 0.001] | The limit is |
| 8-02-problem-set-1 | p2-a | 0 | 0.01 | [-0.01, 0.01] | $\int_{C_3} \vec F \cdot d\vec s =$ |
| 18-02-problem-set-10 | p1-a-flux | 0 | 0.001 | [-0.001, 0.001] | Flux when $a < 1$: |
| 18-02-problem-set-12 | p1-c-012 | 0 | 0.005 | [-0.005, 0.005] | Work round the face $P_0P_1P_2$ $=$ |
| 18-02-problem-set-3 | p3-b-fy2 | 0 | 0.005 | [-0.005, 0.005] | $f_y(1.2, 0.6) =$ |
| 18-02-problem-set-7 | p5-outer-lower | 0 | 0.001 | [-0.001, 0.001] | Lower limit of the outer integral: |
| 18-02-problem-set-9 | p3-b | 0 | 0.001 | [-0.001, 0.001] | Flux across the whole circle: |
| 18-03-problem-set-5 | p17-c-lag | 0 | 0.05 | [-0.05, 0.05] | The phase lag at that $\omega$, in radians (to 0.05): |
| 18-03-problem-set-5 | p20-b-a2 | 0 | 0.005 | [-0.005, 0.005] | $a_2 =$ |
| 18-03-problem-set-5 | p21-b-b1 | 0 | 0.002 | [-0.002, 0.002] | The coefficient $b_1$ of $\sin(t/2)$ is |
| 18-03-problem-set-5 | p21-b-b4 | 0 | 0.002 | [-0.002, 0.002] | The coefficient $b_4$ of $\sin(4t/2)$ is |
| 18-06-problem-set-1* | p4-b-2 | 0 | 0.01 | [-0.01, 0.01] | In $E_{21}E_{32}$ the entry in row 3, column 1 is |
| 18-06-problem-set-10 | p4-a-21 | 0 | 0.01 | [-0.01, 0.01] | $b_{21} =$ |
| 18-06-problem-set-3* | p3-d-tall | 0 | 0.01 | [-0.01, 0.01] | For a $7 \times 4$ matrix, at least |
| 18-06-problem-set-3* | p4-c-x3 | 0 | 0.01 | [-0.01, 0.01] | and $x_3 =$ |
| 8-04-problem-set-10 | p3-lz | 0 | 0.01 | [-0.01, 0.01] | $\langle L_z\rangle$ in units of $\hbar$: |
| 8-04-problem-set-6 | p1-prob1 | 0 | 0.001 | [-0.001, 0.001] | Probability of $\frac{\hbar^2\pi^2}{2ma^2}$: |
| 8-05-problem-set-1 | p1-x | 0 | 0.01 | [-0.01, 0.01] | $\langle\hat x\rangle =$ |
| 8-05-problem-set-1 | p1-p | 0 | 0.01 | [-0.01, 0.01] | $\langle\hat p\rangle =$ |
| 8-05-problem-set-5 | p5-m33 | 0 | 0.01 | [-0.01, 0.01] | Row 3, column 3: |
| 8-06-problem-set-9 | p2b-s2 | 0 | 0.01 | [-0.01, 0.01] | For this state, $\vec S_{\text{tot}}^{\,2}$ in units of $\hbar^2$: |
| 8-09-problem-set-9 | p5b-rc | 0 | 0.01 | [-0.01, 0.01] | $r_c =$ |

### (b2) Wrong values named in the solution that fall inside the interval

A script read every solution sentence with a slip word near a box (would give, forgetting, without, instead, rounded, the notes'/sheet's/book's, …), took every number in it, and tested it against the box's interval. 11 numbers fell inside. Read one by one:

| Page | Box | Value | Tolerance | Named value | What it is | Verdict |
|---|---|---|---|---|---|---|
| hs-2-practice | p6-b | 1.27 | 5% | 1.28 | With the unrounded push $\mu_s F_N$ the mass cancels and $a = (\mu_s - \mu_k)\,g = 0.13 \times 9.81 = 1.28$ m/s²: | rounding or rounded inputs: correct to accept |
| hs-7-practice | p4-b | 488 | 3% | 487.5 | The unrounded result, $487.5\ \text{nm}$, lies within 0.3% of it; | rounding or rounded inputs: correct to accept |
| 8-02-problem-set-2 | p7-e | 3.24 | 2% | 3.236 | $\Delta U = U_f - U_0 = +3.24$ J (from the unrounded values, $-2.158 - (-5.394) = 3.236$). | rounding or rounded inputs: correct to accept |
| 8-02-problem-set-8* | p4-b | 1533 | 1% | 1525 | (The notes print 1525 A, which is within 1% of ours, from rounded values.)     $Mh$ is a current per unit of height times the height: | rounding or rounded inputs: correct to accept |
| 8-06-problem-set-6 | p4-tau | 1.595 | 1% | 1.6 | The lifetime, 1.6 nanoseconds, matches the worked example of the lesson, which reached it with rounded numbers. | rounding or rounded inputs: correct to accept |
| 8-06-problem-set-8 | p5-count | 3.73 | 2% | 3.71 | With MIT's rounded $e$ for the beam current and a density of 19.3 g/cm³ the result is still 3.73 (3.71 if the rounded $e$ is also used in $e^2/4\pi\ep | rounding or rounded inputs: correct to accept |
| 8-286-problem-set-6 | p7-a | 0.74 | 2% | 0.738 | Worked out from the constants without rounding, the time is 0.738 s. | rounding or rounded inputs: correct to accept |
| 8-286-problem-set-6 | p7-b | 0.685 | 2% | 0.686 | (With the rounded 0.74 s you find 0.686 s, which the box accepts.)     The time is shorter, by about 7%. | rounding or rounded inputs: correct to accept |
| 8-286-problem-set-9 | p3-a | 3.66e9 | 2% | 3.7e+09 | With the rounded $T_0 = 2.7$ K it would be $3.70 \times 10^{9}$. | rounding or rounded inputs: correct to accept |
| ferreras-problem-set-5* | e2-xf | 26.9 | 1% | 27.0 | the result with $g_* = 80$ in place of 100 | **inside: the box cannot tell this input apart** (see the Ferreras section above) |
| 8-962-problem-set-10 | p2b-m | 1.002 | 2% | 0.995 | (MIT's rounded $G$ and $c$ give 12.68 km and 1.002 km as well.) [MIT's example Mathematica notebook](https://ocw.mit.edu/courses/8-962-general-relativ | rounding or rounded inputs: correct to accept |

### (c) Wide tolerances

Percent tolerance above 5%, or an absolute tolerance above 5% of the value. Most are deliberate (estimates read off a graph, ranges that hold two published lists, logarithmically insensitive answers); the brief asks to list them for the owner's rule.

| Page | Box | Value | Tolerance | Interval | Width | Label |
|---|---|---|---|---|---|---|
| hs-6-practice | p3-c | 3 | 0.2 | [2.8, 3.2] | ±6.7% | number of extra electrons: |
| hs-8-practice | p6-a | 1 | 0.1 | [0.9, 1.1] | ±10.0% | charge (in units of e): |
| 18-01-problem-set-5 | p2-c2 | 0.977 | 10% | [0.8793, 1.075] | ±10.0% | Estimate of the maximum value: |
| 8-03-problem-set-10 | p5-a | 2.5 | 0.25 | [2.25, 2.75] | ±10.0% | $a/\lambda =$ |
| 8-03-problem-set-10 | p5-b | 2.5 | 0.25 | [2.25, 2.75] | ±10.0% | $b/\lambda =$ |
| 8-03-problem-set-7 | p2-low | 1.56 | 15% | [1.326, 1.794] | ±15.0% | lower $\omega =$ ($10^4$ s⁻¹) |
| 8-03-problem-set-7 | p2-high | 5.82 | 10% | [5.238, 6.402] | ±10.0% | higher $\omega =$ ($10^4$ s⁻¹) |
| 8-03-problem-set-7 | p2-w | 3.94 | 10% | [3.546, 4.334] | ±10.0% | mean $\omega =$ ($10^4$ s⁻¹) |
| 8-03-problem-set-7 | p2-v | 3.09 | 10% | [2.781, 3.399] | ±10.0% | speed $=$ ($10^4$ m/s) |
| 8-033-problem-set-4 | p2-cross | 0.035 | 10% | [0.0315, 0.0385] | ±10.0% | $(\lambda - \lambda_0)/\lambda_0 =$ |
| 8-033-problem-set-8 | p6-h | 0.7 | 0.05 | [0.65, 0.75] | ±7.1% | $h \approx$ |
| 8-033-problem-set-8 | p6-lambda | 0.725 | 0.05 | [0.675, 0.775] | ±6.9% | dark energy: |
| 8-033-problem-set-8 | p6-baryon | 0.045 | 0.01 | [0.035, 0.055] | ±22.2% | baryons: |
| 8-033-problem-set-8 | p6-dark | 0.23 | 0.04 | [0.19, 0.27] | ±17.4% | dark matter: |
| 18-06-problem-set-6* | p1-b-11 | 0.1111 | 0.01 | [0.1011, 0.1211] | ±9.0% | Row 1, column 1 of $P$: |
| 8-04-problem-set-8 | p4f-delay | 2.1 | 15% | [1.785, 2.415] | ±15.0% | Measured $\Delta\tau \approx$ |
| 8-044-problem-set-10 | p3-n2 | 7 | 8% | [6.44, 7.56] | ±8.0% | N₂: $L$ at the peak $\approx$ |
| 8-044-problem-set-10 | p3-cl2 | 22 | 7% | [20.46, 23.54] | ±7.0% | Cl₂: number of lines out to the peak $\approx$ |
| 8-044-problem-set-11 | p5-xc | 5.07 | 6% | [4.766, 5.374] | ±6.0% | $x_C =$ (in percent) |
| 8-06-problem-set-4 | p4-err5 | -0.12 | 0.03 | [-0.15, -0.09] | ±25.0% | Relative error for $n = 5$, in %: |
| 8-962-problem-set-10 | p3b-rho | 4.89 | 10% | [4.401, 5.379] | ±10.0% | $\rho_c =$ |
| 8-962-problem-set-9 | p5d-ratio | 0.273 | 10% | [0.2457, 0.3003] | ±10.0% | $(\Omega_0 - 1)/(\Omega_1 - 1) =$ |

The other 22 boxes of flag (c) have the value 0 with an absolute tolerance (0.001 to 0.05); a percentage of 0 is not defined, so they are wide only in name. They are the boxes of flag (b).

### (d) A correct answer rounded to 3 significant figures is rejected

Value rounded to 3 figures, then checked against the interval. Where the statement asks for more figures or decimal places ("to six significant figures", "to two decimal places", "to the nearest"), the rejection is deliberate (column "Asks for more" = yes); the others are worth a look, since a reader who gives three figures, the usual habit, is told "Not yet".

| Page | Box | Value | Tolerance | Interval | 3 figures | Asks for more | Label |
|---|---|---|---|---|---|---|---|
| 18-01-problem-set-3 | p5-c-quad | 2.07986 | 0.00001 | [2.08, 2.08] | 2.08 | no | Quadratic approximation to $9^{1/3}$: |
| 18-01-problem-set-6 | p5-a | 0.978219 | 0.000005 | [0.9782, 0.9782] | 0.978 | no | Simpson's rule, four intervals: |
| 18-01-problem-set-6 | p5-b | 0.977503 | 0.000005 | [0.9775, 0.9775] | 0.978 | no | Simpson's rule, eight intervals: |
| 18-02-problem-set-1 | p1-b | 109.5 | 0.05 | [109.5, 109.5] | 110 | no | Bond angle: |
| 18-02-problem-set-5 | p1-b-max | 251.6 | 0.05 | [251.5, 251.7] | 252 | no | $\theta$ of the direction with the largest value: |
| 18-02-problem-set-5 | p1-c-low | 161.6 | 0.05 | [161.5, 161.7] | 162 | no | The $\theta$ between 0 and 180 degrees: |
| 18-02-problem-set-5 | p1-c-high | 341.6 | 0.05 | [341.6, 341.7] | 342 | no | The $\theta$ between 180 and 360 degrees: |
| 18-03-problem-set-4 | p16-b | 1.7656 | 0.002 | [1.764, 1.768] | 1.77 | no | $\omega =$ |
| 18-03-problem-set-5 | p18-num | 0.01103 | 0.00001 | [0.01102, 0.01104] | 0.011 | no | For $n = 10$: $\zeta =$ (4 significant figures) |
| 18-03-problem-set-6 | p22-e-period | 12.57 | 0.01 | [12.56, 12.58] | 12.6 | no | Our own extra: for $\omega_0 = \frac{3}{2}$, the shortest time after which every solution repeats is (to four significant figures) |
| 18-03-problem-set-9 | p34-next | 2.094 | 0.002 | [2.092, 2.096] | 2.09 | no | The voles are next at their baseline at $t =$ (to three decimal places) |
| 18-03-problem-set-9 | p35-b-low | -4.464 | 0.002 | [-4.466, -4.462] | -4.46 | no | $\det A = (\operatorname{tr}A/2)^2$ at the smaller value $a =$ (to three decimal places) |
| 8-033-problem-set-3 | p12-a | 482.901 | 0.004 | [482.9, 482.9] | 483 | no | $\lambda_{\text{approach}} =$ |
| 8-033-problem-set-3 | p12-b | 489.387 | 0.004 | [489.4, 489.4] | 489 | no | $\lambda_{\text{recede}} =$ |
| 18-06-problem-set-10 | p3-c-ratio | 8192 | 0.01 | [8192, 8192] | 8190 | no | For $n = 2^{16}$ the FFT needs this many times fewer multiplications: |
| 18-06-problem-set-7 | p8-b | 527345 | 0.01 | [5.273e+05, 5.273e+05] | 5.27e+05 | no | $g_k$ for $k = 12$: |
| 8-04-problem-set-6 | p5-e3 | 1.2065 | 0.001 | [1.206, 1.207] | 1.21 | no | $E_3/V_0 =$ |
| 8-04-problem-set-6 | p5-e4 | 1.5625 | 0.001 | [1.562, 1.563] | 1.56 | no | $E_4/V_0 =$ |
| 8-044-problem-set-8 | p5-logp | -149.63 | 0.1 | [-149.7, -149.5] | -150 | no | $\log_{10}p_+ =$ |
| 8-044-problem-set-8 | p5-logt | 140.63 | 0.1 | [140.5, 140.7] | 141 | no | $\log_{10}$ of the mean time to fusion in seconds $=$ |
| 8-05-problem-set-2 | p5-bound | 2.424 | 0.003 | [2.421, 2.427] | 2.42 | no | First excited state: $e \le$ |
| 8-06-problem-set-5 | p1-logtau | 14609 | 0.03% | [1.46e+04, 1.461e+04] | 1.46e+04 | no | $\log_{10}$ of $\tau$ in seconds: |
| 8-286-problem-set-8 | p4-a | 0.77143 | 0.01% | [0.7714, 0.7715] | 0.771 | no | $I(1) =$ |
| 8-286-problem-set-8 | p5-a-mu1 | 43.63 | 0.02 | [43.61, 43.65] | 43.6 | no | $\mu_1 =$ |
| 8-902-problem-set-1 | p1a-s1 | 120.17 | 0.02 | [120.2, 120.2] | 120 | no | Sky level of Galaxy 1, $S$ (DN per pixel): |
| 8-902-problem-set-1 | p1a-s2 | 120.10 | 0.02 | [120.1, 120.1] | 120 | no | Sky level of Galaxy 2, $S$ (DN per pixel): |
| 8-902-problem-set-1 | p2b-lc2 | 6677.2 | 0.3 | [6677, 6678] | 6680 | no | Galaxy 2, $\bar\lambda$ of Hα (Å): |
| 8-902-problem-set-1 | p2b-lc1 | 8792.1 | 0.3 | [8792, 8792] | 8790 | no | Galaxy 1, $\bar\lambda$ of Ca II (Å): |
| 8-902-problem-set-1 | p2d-m1 | 14.36 | 0.02 | [14.34, 14.38] | 14.4 | no | Galaxy 1, $m$: |
| 8-902-problem-set-5* | p2-mu | 42.23 | 0.02 | [42.21, 42.25] | 42.2 | no | $\mu_\text{cosmo}(z = 0.5)$: |
| hs-7-practice | p5-c | 656.41 | 0.02 | [656.4, 656.4] | 656 | yes | $\lambda =$ |
| 8-01-problem-set-1 | p5-b | 21.98 | 0.05% | [21.97, 21.99] | 22 | yes | $v_0 =$ |
| 18-01-problem-set-2 | b1-c4 | 35.325 | 0.006 | [35.32, 35.33] | 35.3 | yes | $S_1 =$ |
| 18-01-problem-set-2 | b1-c5 | 35.307 | 0.004 | [35.3, 35.31] | 35.3 | yes | $S_2 =$ |
| 18-01-problem-set-2 | b1-c6 | 35.307 | 0.004 | [35.3, 35.31] | 35.3 | yes | $S_3 =$ |
| 18-01-problem-set-3 | p5-a-x1 | 2.08333 | 0.00001 | [2.083, 2.083] | 2.08 | yes | $x_1 =$ |
| 18-01-problem-set-3 | p5-a-root | 2.08008 | 0.000005 | [2.08, 2.08] | 2.08 | yes | The cube root of 9, to 6 significant figures: |
| 18-01-problem-set-4 | p5-c | 1.718 | 0.001 | [1.717, 1.719] | 1.72 | yes | $\int_0^1 e^x\,dx =$ |
| 18-01-problem-set-5 | p1-b1 | 4216.69 | 0.6 | [4216, 4217] | 4220 | yes | $\int_0^{50} y\,dt =$ |
| 18-01-problem-set-5 | p2-d | 0.099999 | 0.0000004 | [0.1, 0.1] | 0.1 | yes | $f(0.1) \approx$ |
| 18-01-problem-set-7 | p5-volume | 3.586 | 0.002 | [3.584, 3.588] | 3.59 | yes | $V =$ |
| 18-01-problem-set-8 | b1e-value | 1.772 | 0.001 | [1.771, 1.773] | 1.77 | yes | $A(-\tfrac12) =$ |
| 18-02-problem-set-1 | p1-d | 3.464 | 0.002 | [3.462, 3.466] | 3.46 | yes | Area of a face: |
| 18-02-problem-set-10 | p1-b-flux | 6.283 | 0.002 | [6.281, 6.285] | 6.28 | yes | Flux when $a > 1$: |
| 18-02-problem-set-2 | p1-b-t2 | 3.667 | 0.002 | [3.665, 3.669] | 3.67 | yes | $t_2 =$ |
| 18-02-problem-set-3 | p2-a-approx | 3.9477 | 0.0002 | [3.948, 3.948] | 3.95 | yes | Approximate value of $1.98^{2.01}$: |
| 18-02-problem-set-3 | p2-a-exact | 3.9473 | 0.0002 | [3.947, 3.947] | 3.95 | yes | Calculator value of $1.98^{2.01}$: |
| 18-02-problem-set-4 | p1-c-b | -12.985 | 0.01 | [-12.99, -12.97] | -13 | yes | $b =$ |
| 18-02-problem-set-4 | p1-d-a1 | 1.395 | 0.002 | [1.393, 1.397] | 1.4 | yes | $a_1 =$ |
| 18-02-problem-set-4 | p1-d-b1 | -3.564 | 0.003 | [-3.567, -3.561] | -3.56 | yes | $b_1 =$ |
| 18-02-problem-set-4 | p2-b-t1 | 2.094 | 0.002 | [2.092, 2.096] | 2.09 | yes | $\theta_1 =$ |
| 18-02-problem-set-5 | p2-b-x | 1.7778 | 0.0005 | [1.777, 1.778] | 1.78 | yes | $x =$ |
| 18-02-problem-set-5 | p2-b-y | -1.0556 | 0.0005 | [-1.056, -1.055] | -1.06 | yes | $y =$ |
| 18-02-problem-set-5 | p2-b-z | 1.0556 | 0.0005 | [1.055, 1.056] | 1.06 | yes | $z =$ |
| 18-02-problem-set-5 | p2-b-g | 2.0463 | 0.0005 | [2.046, 2.047] | 2.05 | yes | $g$ at that point: |
| 18-02-problem-set-5 | p3-b-lambda | -0.1283 | 0.0002 | [-0.1285, -0.1281] | -0.128 | yes | $\lambda$ at the closest point, to four decimal places: |
| 18-02-problem-set-5 | p3-b-px | 1.7725 | 0.0002 | [1.772, 1.773] | 1.77 | yes | Closest point: $x =$ |
| 18-02-problem-set-5 | p3-b-py | -1.0686 | 0.0002 | [-1.069, -1.068] | -1.07 | yes | Closest point: $y =$ |
| 18-02-problem-set-5 | p3-b-pz | 1.0686 | 0.0002 | [1.068, 1.069] | 1.07 | yes | Closest point: $z =$ |
| 18-02-problem-set-7 | p5-value | 1.625 | 0.002 | [1.623, 1.627] | 1.62 | yes | Our addition: the value of $I_0$: |
| 18-02-problem-set-9 | p2-b | 25.13 | 0.01 | [25.12, 25.14] | 25.1 | yes | Largest value: |
| 18-03-problem-set-1 | p3-d | 151708.93 | 0.02 | [1.517e+05, 1.517e+05] | 1.52e+05 | yes | Amount to invest (dollars): |
| 18-03-problem-set-5 | p18-ratio | 0.999939 | 0.000002 | [0.9999, 0.9999] | 1 | yes | For $n = 10$: the exact $\zeta$ divided by the approximation $\alpha/n$ (6 decimal places) |
| 18-03-problem-set-8 | p32-f-time | 2.094 | 0.003 | [2.091, 2.097] | 2.09 | yes | First later crossing of the $y$ axis: $t =$ |
| 18-03-problem-set-9 | p35-b-high | 2.464 | 0.002 | [2.462, 2.466] | 2.46 | yes | and at the larger value $a =$ (to three decimal places) |
| 18-06-problem-set-2* | p4-a | 5017 | 1 | [5016, 5018] | 5020 | yes | The exact count exceeds $\frac13n^3$ by |
| 8-04-problem-set-6 | p4-e1 | 0.18436 | 0.0001 | [0.1843, 0.1845] | 0.184 | yes | Lowest: $E_1/V_0 =$ |
| 8-04-problem-set-6 | p4-e2 | 0.70747 | 0.0001 | [0.7074, 0.7076] | 0.707 | yes | Next: $E_2/V_0 =$ |
| 8-05-problem-set-2 | p5-e0 | 0.667986 | 0.000002 | [0.668, 0.668] | 0.668 | yes | Ground state: $e =$ |
| 8-05-problem-set-4 | p7-s3 | -0.155271 | 0.1% | [-0.1554, -0.1551] | -0.155 | yes | $s_3 =$ |
| 8-05-problem-set-4 | p7-c4 | 0.0261598 | 0.1% | [0.02613, 0.02619] | 0.0262 | yes | $c_4 =$ |
| 8-286-problem-set-8 | p4-b-05 | 20.236 | 0.01% | [20.23, 20.24] | 20.2 | yes | At $z = 0.5$: |
| 8-286-problem-set-8 | p4-b-10 | 3.7196 | 0.01% | [3.719, 3.72] | 3.72 | yes | At $z = 1.0$: |
| 8-286-problem-set-8 | p4-b-15 | 1.3645 | 0.01% | [1.364, 1.365] | 1.36 | yes | At $z = 1.5$: |
| 8-09-problem-set-10 | p5b-r3 | 3.5441 | 0.0005 | [3.544, 3.545] | 3.54 | yes | $r_3 =$ |
| 8-09-problem-set-10 | p5b-r4 | 3.5644 | 0.0005 | [3.564, 3.565] | 3.56 | yes | $r_4 =$ |

### (e) Whole numbers whose interval holds a neighbouring whole number

Of the 643 number boxes whose value is a whole number, 186 accept the next whole number up or down. 87 boxes ask for a count ("number of", "how many", "whole number", degeneracies): 69 of them are exact (tolerance 0, 0.01, 0.1, 0.4 or a percentage below one unit) and 18 accept a neighbour:

| Page | Box | Value | Tolerance | Interval | Label | Note |
|---|---|---|---|---|---|---|
| hs-0-practice | p1-n | 1250 | 5% | [1188, 1312] | Number of cells: | a count from rounded data (1.0 cm / 8.0 μm = 1250); 5% accepts 1188 to 1312 |
| hs-0-practice | p3-v | 58400 | 5% | [5.548e+04, 6.132e+04] | Litres: | an estimate, not an exact count |
| hs-4-practice | p2-b | 118 | 3% | [114.5, 121.5] | Difference (K): | a temperature difference, not a count |
| hs-6-practice | p9-d | 477 | 1% | [472.2, 481.8] | $N =$ | a number of turns computed from B, I and length: 1% accepts 472 to 481 |
| hs-8-practice | p6-b | 133 | 3% | [129, 137] | mass in proton masses: | a mass ratio, not a count |
| 18-02-problem-set-4 | p1-f-2015 | 34900 | 2% | [3.42e+04, 3.56e+04] | Sales in 2015 by the law: | a model prediction, not a count |
| 8-033-problem-set-2 | p4-n | 140 | 2% | [137.2, 142.8] | Number of atomic diameters $=$ | an estimate, not an exact count |
| 8-033-problem-set-5 | p2-tonnes | 175 | 2% | [171.5, 178.5] | Sunlight caught per day: | a mass, not a count |
| 8-033-problem-set-5 | p7-ratio | 5000 | 2% | [4900, 5100] | Person's W/kg divided by the Sun's: | an order-of-magnitude ratio |
| 8-033-problem-set-7 | p6-pions | 9771 | 4 | [9767, 9775] | Largest number of pions: | deliberate: ±4 for rounding, said in the statement |
| 18-06-problem-set-2* | p4-a | 5017 | 1 | [5016, 5018] | The exact count exceeds $\frac13n^3$ by | deliberate: "accepts any value within 1" |
| 18-06-problem-set-2* | p4-b-k | 1000 | 1 | [999, 1001] | The number of right-hand sides in the same time is | deliberate: "accepts any value within 1" |
| 8-044-problem-set-10 | p3-cl2 | 22 | 7% | [20.46, 23.54] | Cl₂: number of lines out to the peak $\approx$ | deliberate: the solution says the box accepts 21, 22 or 23 |
| 8-05-problem-set-9 | p5-turns | 500 | 1% | [495, 505] | Number of turns around the $z$ axis: | a number of turns: 1% accepts 495 to 505 |
| 8-08-problem-set-11 | p1-stages | 338 | 1% | [334.6, 341.4] | Number of stages: | a number of stages: 1% accepts 335 to 341 |
| 8-902-problem-set-1 | p1b-npix | 890 | 2% | [872.2, 907.8] | Pixels in the ring from 10 to 12 arcseconds: | a pixel count: 2% accepts 873 to 907 |
| ferreras-problem-set-1* | p3-n | 731 | 1% | [723.7, 738.3] | Ratio of numbers: | a ratio, rounded |
| ferreras-problem-set-3* | p1-nside | 1598 | 1% | [1582, 1614] | $N^{1/3}$: | a cube root, rounded |

The other 168 boxes of flag (e) are measured or computed quantities whose printed value happens to be whole (a distance of 650 m, a temperature of 102 K, a speed of 141 km/s) with a percentage tolerance; for them a neighbouring whole number is not a different answer. They are marked (e) in the full table.

## Full table, by course

Columns: page (`*` = only on Account A's branch), box id, value as written, tolerance as written, the accepted interval, its half-width as a percentage of the value, and the flags. No number box has listed mistakes (see the summary).

### hs-0

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| hs-0-practice | p1-n | 1250 | 5% | [1188, 1312] | 5% | e |
| hs-0-practice | p2-a | 0.0003 | 2% | [0.000294, 0.000306] | 2% |  |
| hs-0-practice | p2-b | 18 | 2% | [17.64, 18.36] | 2% |  |
| hs-0-practice | p3-v | 58400 | 5% | [5.548e+04, 6.132e+04] | 5% | e |
| hs-0-practice | p4-b | 5 | 2% | [4.9, 5.1] | 2% |  |
| hs-0-practice | p5-a | 3 | 2% | [2.94, 3.06] | 2% |  |
| hs-0-practice | p5-b | 1 | 2% | [0.98, 1.02] | 2% |  |
| hs-0-practice | p5-c | 25 | 2% | [24.5, 25.5] | 2% |  |
| hs-0-practice | p6-a | 2.02 | 2% | [1.98, 2.06] | 2% |  |
| hs-0-practice | p6-b | 4.04 | 2% | [3.959, 4.121] | 2% |  |
| hs-0-practice | p7-a | 28.7 | 2% | [28.13, 29.27] | 2% |  |
| hs-0-practice | p7-b | 41 | 2% | [40.18, 41.82] | 2% |  |
| hs-0-practice | p8-a | 650 | 2% | [637, 663] | 2% | e |
| hs-0-practice | p8-b | 67.4 | 2% | [66.05, 68.75] | 2% |  |
| hs-0-practice | p9-t | 199 | 2% | [195, 203] | 2% | e |
| hs-0-practice | p10-a | 24 | 2% | [23.52, 24.48] | 2% |  |
| hs-0-practice | p10-b | 1.71 | 2% | [1.676, 1.744] | 2% |  |
| hs-0-practice | p11-a | 14000 | 2% | [1.372e+04, 1.428e+04] | 2% | e |
| hs-0-practice | p11-b | 50 | 2% | [49, 51] | 2% | e |

### hs-1

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| hs-1-practice | p1-a | 39 | 5% | [37.05, 40.95] | 5% | e |
| hs-1-practice | p1-b | -9 | 5% | [-9.45, -8.55] | 5% |  |
| hs-1-practice | p2-a | 2.78 | 5% | [2.641, 2.919] | 5% |  |
| hs-1-practice | p2-b | 1.67 | 5% | [1.587, 1.753] | 5% |  |
| hs-1-practice | p3-a | -2.25 | 5% | [-2.362, -2.138] | 5% |  |
| hs-1-practice | p3-b | 0.3 | 5% | [0.285, 0.315] | 5% |  |
| hs-1-practice | p3-c | 2.1 | 5% | [1.995, 2.205] | 5% |  |
| hs-1-practice | p4-a | -14 | 5% | [-14.7, -13.3] | 5% |  |
| hs-1-practice | p4-b | -350 | 5% | [-367.5, -332.5] | 5% | e |
| hs-1-practice | p5-a | -1.5 | 5% | [-1.575, -1.425] | 5% |  |
| hs-1-practice | p5-b | 9 | 5% | [8.55, 9.45] | 5% |  |
| hs-1-practice | p5-c | 15 | 5% | [14.25, 15.75] | 5% |  |
| hs-1-practice | p6-b | 0.9 | 5% | [0.855, 0.945] | 5% |  |
| hs-1-practice | p6-c | 20 | 5% | [19, 21] | 5% | e |
| hs-1-practice | p7-a | 6.17 | 5% | [5.861, 6.479] | 5% |  |
| hs-1-practice | p7-b | 2.7 | 5% | [2.565, 2.835] | 5% |  |
| hs-1-practice | p7-c | 15.5 | 5% | [14.72, 16.27] | 5% |  |
| hs-1-practice | p8-a | 2.58 | 5% | [2.451, 2.709] | 5% |  |
| hs-1-practice | p8-b | 70.3 | 5% | [66.78, 73.81] | 5% |  |
| hs-1-practice | p9-a | 36.9 | 5% | [35.05, 38.74] | 5% |  |
| hs-1-practice | p9-b | 20 | 5% | [19, 21] | 5% | e |
| hs-1-practice | p10-a | 9.42 | 5% | [8.949, 9.891] | 5% |  |
| hs-1-practice | p10-b | 1.57 | 5% | [1.492, 1.649] | 5% |  |
| hs-1-practice | p10-c | 14.8 | 5% | [14.06, 15.54] | 5% |  |
| hs-1-practice | p11-a | 12.5 | 5% | [11.88, 13.12] | 5% |  |
| hs-1-practice | p11-b | 5.68e16 | 5% | [5.396e+16, 5.964e+16] | 5% |  |

### hs-2

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| hs-2-practice | p1-a | 3770 | 5% | [3582, 3958] | 5% | e |
| hs-2-practice | p1-b | 3810 | 5% | [3620, 4000] | 5% | e |
| hs-2-practice | p1-c | 8.8 | 5% | [8.36, 9.24] | 5% |  |
| hs-2-practice | p2-b | 4710 | 5% | [4474, 4946] | 5% | e |
| hs-2-practice | p3-a | 1.6 | 5% | [1.52, 1.68] | 5% |  |
| hs-2-practice | p3-b | 7.2 | 5% | [6.84, 7.56] | 5% |  |
| hs-2-practice | p3-c | 16.2 | 5% | [15.39, 17.01] | 5% |  |
| hs-2-practice | p4-a | 0.8 | 5% | [0.76, 0.84] | 5% |  |
| hs-2-practice | p4-b | 0.2 | 5% | [0.19, 0.21] | 5% |  |
| hs-2-practice | p4-c | 0.5 | 5% | [0.475, 0.525] | 5% |  |
| hs-2-practice | p5-a | 2.13 | 5% | [2.023, 2.236] | 5% |  |
| hs-2-practice | p5-b | 5.37 | 5% | [5.101, 5.639] | 5% |  |
| hs-2-practice | p6-a | 141 | 5% | [133.9, 148.1] | 5% | e |
| hs-2-practice | p6-b | 1.27 | 5% | [1.207, 1.333] | 5% |  |
| hs-2-practice | p6-c | 40.5 | 5% | [38.48, 42.52] | 5% |  |
| hs-2-practice | p7-a | 123 | 5% | [116.8, 129.2] | 5% | e |
| hs-2-practice | p7-b | 28.4 | 5% | [26.98, 29.82] | 5% |  |
| hs-2-practice | p8-a | 49.9 | 5% | [47.41, 52.39] | 5% |  |
| hs-2-practice | p8-b | 3.53 | 5% | [3.353, 3.706] | 5% |  |
| hs-2-practice | p8-c | 5.32 | 5% | [5.054, 5.586] | 5% |  |
| hs-2-practice | p9-a | 11.4 | 5% | [10.83, 11.97] | 5% |  |
| hs-2-practice | p9-b | 3.05 | 5% | [2.897, 3.202] | 5% |  |
| hs-2-practice | p10-a | 231 | 5% | [219.4, 242.6] | 5% | e |
| hs-2-practice | p10-b | 505 | 5% | [479.8, 530.2] | 5% | e |
| hs-2-practice | p11-a | 6820 | 5% | [6479, 7161] | 5% | e |
| hs-2-practice | p11-b | 2640 | 5% | [2508, 2772] | 5% | e |
| hs-2-practice | p12-a | 2.6 | 5% | [2.47, 2.73] | 5% |  |
| hs-2-practice | p12-b | 4.19 | 5% | [3.981, 4.4] | 5% |  |
| hs-2-practice | p12-c | 1.74 | 5% | [1.653, 1.827] | 5% |  |
| hs-2-practice | p13-a | 1.47e30 | 5% | [1.396e+30, 1.543e+30] | 5% |  |
| hs-2-practice | p13-b | 1.98e41 | 5% | [1.881e+41, 2.079e+41] | 5% |  |

### hs-3

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| hs-3-practice | p1-a | 656 | 3% | [636.3, 675.7] | 3% | e |
| hs-3-practice | p1-c | -656 | 3% | [-675.7, -636.3] | 3% | e |
| hs-3-practice | p2-a | 54.7 | 3% | [53.06, 56.34] | 3% |  |
| hs-3-practice | p2-b | 1.95 | 3% | [1.891, 2.008] | 3% |  |
| hs-3-practice | p3-a | 5.27e5 | 3% | [5.112e+05, 5.428e+05] | 3% |  |
| hs-3-practice | p3-c | -706 | 3% | [-727.2, -684.8] | 3% | e |
| hs-3-practice | p4-a | 25.1 | 3% | [24.35, 25.85] | 3% |  |
| hs-3-practice | p4-b | 16.6 | 3% | [16.1, 17.1] | 3% |  |
| hs-3-practice | p4-c | 1.97e4 | 3% | [1.911e+04, 2.029e+04] | 3% |  |
| hs-3-practice | p4-d | 0.358 | 3% | [0.3473, 0.3687] | 3% |  |
| hs-3-practice | p5-a | 1470 | 3% | [1426, 1514] | 3% | e |
| hs-3-practice | p5-b | 70 | 3% | [67.9, 72.1] | 3% | e |
| hs-3-practice | p5-c | 0.14 | 3% | [0.1358, 0.1442] | 3% |  |
| hs-3-practice | p6-a | 6.27 | 3% | [6.082, 6.458] | 3% |  |
| hs-3-practice | p6-b | 523 | 3% | [507.3, 538.7] | 3% | e |
| hs-3-practice | p6-c | 1050 | 3% | [1018, 1082] | 3% | e |
| hs-3-practice | p7-a | -0.605 | 3% | [-0.6231, -0.5868] | 3% |  |
| hs-3-practice | p7-b | 0.475 | 3% | [0.4607, 0.4892] | 3% |  |
| hs-3-practice | p8-a | 1.13 | 3% | [1.096, 1.164] | 3% |  |
| hs-3-practice | p8-b | 0.875 | 3% | [0.8488, 0.9012] | 3% |  |
| hs-3-practice | p8-c | 6.45 | 3% | [6.256, 6.644] | 3% |  |
| hs-3-practice | p8-d | -6.75 | 3% | [-6.952, -6.548] | 3% |  |
| hs-3-practice | p9-a | 33000 | 3% | [3.201e+04, 3.399e+04] | 3% | e |
| hs-3-practice | p9-b | 3.94 | 3% | [3.822, 4.058] | 3% |  |
| hs-3-practice | p9-c | 2160 | 3% | [2095, 2225] | 3% | e |
| hs-3-practice | p9-d | 1180 | 3% | [1145, 1215] | 3% | e |
| hs-3-practice | p10-a | 5.58 | 3% | [5.413, 5.747] | 3% |  |
| hs-3-practice | p10-b | 2.18 | 3% | [2.115, 2.245] | 3% |  |
| hs-3-practice | p10-c | 6.08 | 3% | [5.898, 6.262] | 3% |  |
| hs-3-practice | p11-a | 2030 | 3% | [1969, 2091] | 3% | e |
| hs-3-practice | p11-b | 1890 | 3% | [1833, 1947] | 3% | e |
| hs-3-practice | p13-a | 7.15e-27 | 3% | [6.936e-27, 7.365e-27] | 3% |  |
| hs-3-practice | p13-c | 0.664 | 3% | [0.6441, 0.6839] | 3% |  |
| hs-3-practice | p12-a | 11100 | 3% | [1.077e+04, 1.143e+04] | 3% | e |
| hs-3-practice | p12-b | 1.23e8 | 3% | [1.193e+08, 1.267e+08] | 3% |  |
| hs-3-practice | p12-c | 3.08e7 | 3% | [2.988e+07, 3.172e+07] | 3% |  |

### hs-4

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| hs-4-practice | p1-a | 240 | 3% | [232.8, 247.2] | 3% | e |
| hs-4-practice | p1-b | 0.234 | 2% | [0.2293, 0.2387] | 2% |  |
| hs-4-practice | p1-c | 2.82e5 | 3% | [2.735e+05, 2.905e+05] | 3% |  |
| hs-4-practice | p1-d | 905 | 3% | [877.9, 932.1] | 3% | e |
| hs-4-practice | p2-a | -196 | 1% | [-198, -194] | 1% | e |
| hs-4-practice | p2-b | 118 | 3% | [114.5, 121.5] | 3% | e |
| hs-4-practice | p2-c | 2.02 | 3% | [1.959, 2.081] | 3% |  |
| hs-4-practice | p3-a | 3.44 | 3% | [3.337, 3.543] | 3% |  |
| hs-4-practice | p3-b | 2.54e5 | 2% | [2.489e+05, 2.591e+05] | 2% |  |
| hs-4-practice | p3-c | 0.0965 | 3% | [0.09361, 0.09939] | 3% |  |
| hs-4-practice | p3-d | 2.00e23 | 3% | [1.94e+23, 2.06e+23] | 3% |  |
| hs-4-practice | p4-a | 6.21e-21 | 3% | [6.024e-21, 6.396e-21] | 3% |  |
| hs-4-practice | p4-b | 612 | 3% | [593.6, 630.4] | 3% | e |
| hs-4-practice | p4-d | 0.45 | 3% | [0.4365, 0.4635] | 3% |  |
| hs-4-practice | p5-a | 2.51e5 | 3% | [2.435e+05, 2.585e+05] | 3% |  |
| hs-4-practice | p5-b | 8.71 | 3% | [8.449, 8.971] | 3% |  |
| hs-4-practice | p5-c | 0.882 | 3% | [0.8555, 0.9085] | 3% |  |
| hs-4-practice | p6-a | 29260 | 3% | [2.838e+04, 3.014e+04] | 3% | e |
| hs-4-practice | p6-b | 1.17e5 | 3% | [1.135e+05, 1.205e+05] | 3% |  |
| hs-4-practice | p6-c | 44.3 | 3% | [42.97, 45.63] | 3% |  |
| hs-4-practice | p6-d | 9.58 | 3% | [9.293, 9.867] | 3% |  |
| hs-4-practice | p7-a | 32.1 | 3% | [31.14, 33.06] | 3% |  |
| hs-4-practice | p7-b | 0.346 | 3% | [0.3356, 0.3564] | 3% |  |
| hs-4-practice | p7-c | 29.5 | 3% | [28.61, 30.39] | 3% |  |
| hs-4-practice | p8-a | 374 | 3% | [362.8, 385.2] | 3% | e |
| hs-4-practice | p8-b | -249 | 3% | [-256.5, -241.5] | 3% | e |
| hs-4-practice | p8-c | 623 | 3% | [604.3, 641.7] | 3% | e |
| hs-4-practice | p8-d | 27 | 3% | [26.19, 27.81] | 3% |  |
| hs-4-practice | p9-a | 35.6 | 3% | [34.53, 36.67] | 3% |  |
| hs-4-practice | p9-b | 24 | 3% | [23.28, 24.72] | 3% |  |
| hs-4-practice | p9-c | 1.99e4 | 3% | [1.93e+04, 2.05e+04] | 3% |  |
| hs-4-practice | p10-a | 653 | 3% | [633.4, 672.6] | 3% | e |
| hs-4-practice | p10-b | 9.04 | 3% | [8.769, 9.311] | 3% |  |
| hs-4-practice | p10-c | 681 | 3% | [660.6, 701.4] | 3% | e |
| hs-4-practice | p10-d | 21.0 | 2% | [20.58, 21.42] | 2% |  |
| hs-4-practice | p11-a | 1635 | 3% | [1586, 1684] | 3% | e |
| hs-4-practice | p11-b | 409 | 3% | [396.7, 421.3] | 3% | e |
| hs-4-practice | p11-c | 102 | 3% | [98.94, 105.1] | 3% | e |

### hs-5

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| hs-5-practice | p1-a | 0.993 | 1% | [0.9831, 1.003] | 1% |  |
| hs-5-practice | p1-b | 0.253 | 2% | [0.2479, 0.2581] | 2% |  |
| hs-5-practice | p2-a | 354 | 1% | [350.5, 357.5] | 1% | e |
| hs-5-practice | p2-b | 253 | 1% | [250.5, 255.5] | 1% | e |
| hs-5-practice | p2-c | 1.36 | 1% | [1.346, 1.374] | 1% |  |
| hs-5-practice | p3-a | 0.438 | 1% | [0.4336, 0.4424] | 1% |  |
| hs-5-practice | p3-b | 588 | 0.5% | [585.1, 590.9] | 0.5% | e |
| hs-5-practice | p3-c | 392 | 0.5% | [390, 394] | 0.5% | e |
| hs-5-practice | p4-a | 2.55e-4 | 2% | [0.0002499, 0.0002601] | 2% |  |
| hs-5-practice | p4-b | 84.1 | 0.5 | [83.6, 84.6] | 0.59% |  |
| hs-5-practice | p4-c | 798 | 2% | [782, 814] | 2% | e |
| hs-5-practice | p5-a | 40.7 | 0.2% | [40.62, 40.78] | 0.2% |  |
| hs-5-practice | p5-c | 38.6 | 0.2% | [38.52, 38.68] | 0.2% |  |
| hs-5-practice | p6-a | 0.955 | 1% | [0.9455, 0.9645] | 1% |  |
| hs-5-practice | p6-b | 11.5 | 2% | [11.27, 11.73] | 2% |  |
| hs-5-practice | p7-a | 1.94e14 | 1% | [1.921e+14, 1.959e+14] | 1% |  |
| hs-5-practice | p7-b | 19.5 | 0.3 | [19.2, 19.8] | 1.5% |  |
| hs-5-practice | p7-c | 69.0 | 0.3 | [68.7, 69.3] | 0.43% |  |
| hs-5-practice | p8-a | 60 | 1% | [59.4, 60.6] | 1% |  |
| hs-5-practice | p8-b | 10 | 1% | [9.9, 10.1] | 1% |  |
| hs-5-practice | p8-c | 10.3 | 1% | [10.2, 10.4] | 1% |  |
| hs-5-practice | p9-a | 6.38 | 1% | [6.316, 6.444] | 1% |  |
| hs-5-practice | p9-b | 650 | 1% | [643.5, 656.5] | 1% | e |
| hs-5-practice | p10-a | 30 | 1% | [29.7, 30.3] | 1% |  |
| hs-5-practice | p10-b | 7.5 | 1% | [7.425, 7.575] | 1% |  |
| hs-5-practice | p11-a | 0.0311 | 1% | [0.03079, 0.03141] | 1% |  |
| hs-5-practice | p11-c | 9.32e6 | 1% | [9.227e+06, 9.413e+06] | 1% |  |
| hs-5-practice | p11-d | 676.7 | 0.3 | [676.4, 677] | 0.044% |  |

### hs-6

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| hs-6-practice | p1-a | 1.5e10 | 3% | [1.455e+10, 1.545e+10] | 3% |  |
| hs-6-practice | p1-b | 1.08e-4 | 3% | [0.0001048, 0.0001112] | 3% |  |
| hs-6-practice | p1-c | 4.41e-5 | 1% | [4.366e-05, 4.454e-05] | 1% |  |
| hs-6-practice | p2-a | 1800 | 1% | [1782, 1818] | 1% | e |
| hs-6-practice | p2-b | 1800 | 1% | [1782, 1818] | 1% | e |
| hs-6-practice | p2-d | 4.22e14 | 1% | [4.178e+14, 4.262e+14] | 1% |  |
| hs-6-practice | p3-a | 1.0e5 | 1% | [9.9e+04, 1.01e+05] | 1% |  |
| hs-6-practice | p3-b | 4.81e-19 | 1% | [4.762e-19, 4.858e-19] | 1% |  |
| hs-6-practice | p3-c | 3 | 0.2 | [2.8, 3.2] | 6.7% | c |
| hs-6-practice | p3-d | 3600 | 1% | [3564, 3636] | 1% | e |
| hs-6-practice | p4-a | 2.21 | 1% | [2.188, 2.232] | 1% |  |
| hs-6-practice | p4-b | 13.3 | 3% | [12.9, 13.7] | 3% |  |
| hs-6-practice | p4-c | 3.98e-8 | 1% | [3.94e-08, 4.02e-08] | 1% |  |
| hs-6-practice | p5-a | 2.16 | 3% | [2.095, 2.225] | 3% |  |
| hs-6-practice | p5-b | 3.25 | 3% | [3.152, 3.348] | 3% |  |
| hs-6-practice | p5-c | 0.541 | 1% | [0.5356, 0.5464] | 1% |  |
| hs-6-practice | p6-a | 2.0 | 1% | [1.98, 2.02] | 1% |  |
| hs-6-practice | p6-b | 3.6 | 1% | [3.564, 3.636] | 1% |  |
| hs-6-practice | p6-c | 7.2 | 1% | [7.128, 7.272] | 1% |  |
| hs-6-practice | p6-d | 1.2 | 1% | [1.188, 1.212] | 1% |  |
| hs-6-practice | p7-a | 1000 | 1% | [990, 1010] | 1% | e |
| hs-6-practice | p7-b | 8.70 | 1% | [8.613, 8.787] | 1% |  |
| hs-6-practice | p7-c | 500 | 1% | [495, 505] | 1% | e |
| hs-6-practice | p7-d | 54 | 1% | [53.46, 54.54] | 1% |  |
| hs-6-practice | p8-a | 8.0e-15 | 1% | [7.92e-15, 8.08e-15] | 1% |  |
| hs-6-practice | p8-b | 0.0995 | 1% | [0.09851, 0.1005] | 1% |  |
| hs-6-practice | p8-c | 3.3 | 2% | [3.234, 3.366] | 2% |  |
| hs-6-practice | p9-a | 6.67e-5 | 1% | [6.603e-05, 6.737e-05] | 1% |  |
| hs-6-practice | p9-b | 2.4 | 1% | [2.376, 2.424] | 1% |  |
| hs-6-practice | p9-c | 2.0e-3 | 1% | [0.00198, 0.00202] | 1% |  |
| hs-6-practice | p9-d | 477 | 1% | [472.2, 481.8] | 1% | e |
| hs-6-practice | p10-a | 6.25e-4 | 1% | [0.0006188, 0.0006312] | 1% |  |
| hs-6-practice | p10-b | 1.25 | 1% | [1.238, 1.262] | 1% |  |
| hs-6-practice | p10-c | 0.25 | 1% | [0.2475, 0.2525] | 1% |  |
| hs-6-practice | p10-e | 40 | 1% | [39.6, 40.4] | 1% |  |
| hs-6-practice | p11-a | 2.50 | 1% | [2.475, 2.525] | 1% |  |
| hs-6-practice | p11-b | 1.0e-12 | 1% | [9.9e-13, 1.01e-12] | 1% |  |
| hs-6-practice | p11-c | 0.12 | 1% | [0.1188, 0.1212] | 1% |  |
| hs-6-practice | p12-b | 3.45e16 | 3% | [3.346e+16, 3.554e+16] | 3% |  |
| hs-6-practice | p12-c | 1.72e20 | 3% | [1.668e+20, 1.772e+20] | 3% |  |

### hs-7

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| hs-7-practice | p1-a | 6.4e-13 | 3% | [6.208e-13, 6.592e-13] | 3% |  |
| hs-7-practice | p1-b | 2.09e-14 | 3% | [2.027e-14, 2.153e-14] | 3% |  |
| hs-7-practice | p2-a | 2.0 | 3% | [1.94, 2.06] | 3% |  |
| hs-7-practice | p2-b | 251 | 3% | [243.5, 258.5] | 3% | e |
| hs-7-practice | p2-c | 0.622 | 3% | [0.6033, 0.6407] | 3% |  |
| hs-7-practice | p3-a | 6.67e14 | 3% | [6.47e+14, 6.87e+14] | 3% |  |
| hs-7-practice | p3-b | 6.62e-34 | 3% | [6.421e-34, 6.819e-34] | 3% |  |
| hs-7-practice | p3-c | 2.30 | 3% | [2.231, 2.369] | 3% |  |
| hs-7-practice | p3-d | 540 | 3% | [523.8, 556.2] | 3% | e |
| hs-7-practice | p4-a | 10 | 0.1 | [9.9, 10.1] | 1% |  |
| hs-7-practice | p4-b | 488 | 3% | [473.4, 502.6] | 3% | e |
| hs-7-practice | p4-c | 95.2 | 3% | [92.34, 98.06] | 3% |  |
| hs-7-practice | p5-b | 49.4 | 3% | [47.92, 50.88] | 3% |  |
| hs-7-practice | p5-c | 656.41 | 0.02 | [656.4, 656.4] | 0.003% | d |
| hs-7-practice | p5-d | 8.15e9 | 3% | [7.906e+09, 8.394e+09] | 3% |  |
| hs-7-practice | p6-a | 2500 | 3% | [2425, 2575] | 3% | e |
| hs-7-practice | p6-b | 2.21e6 | 3% | [2.144e+06, 2.276e+06] | 3% |  |
| hs-7-practice | p6-c | 3.70e10 | 3% | [3.589e+10, 3.811e+10] | 3% |  |
| hs-7-practice | p7-a | 30 | 0.1 | [29.9, 30.1] | 0.33% |  |
| hs-7-practice | p7-b | 4.59 | 3% | [4.452, 4.728] | 3% |  |
| hs-7-practice | p7-c | 3.73 | 3% | [3.618, 3.842] | 3% |  |
| hs-7-practice | p7-d | 1.68e57 | 3% | [1.63e+57, 1.73e+57] | 3% |  |
| hs-7-practice | p7-e | 14.3 | 3% | [13.87, 14.73] | 3% |  |
| hs-7-practice | p8-b | 6 | 0.1 | [5.9, 6.1] | 1.7% |  |
| hs-7-practice | p8-c | 4 | 0.1 | [3.9, 4.1] | 2.5% |  |
| hs-7-practice | p9-a | 50 | 3% | [48.5, 51.5] | 3% | e |
| hs-7-practice | p9-b | 1.00e-6 | 3% | [9.7e-07, 1.03e-06] | 3% |  |
| hs-7-practice | p9-c | 3.99e14 | 3% | [3.87e+14, 4.11e+14] | 3% |  |
| hs-7-practice | p9-d | 69.2 | 3% | [67.12, 71.28] | 3% |  |
| hs-7-practice | p10-a | 25 | 3% | [24.25, 25.75] | 3% |  |
| hs-7-practice | p10-b | 25 | 3% | [24.25, 25.75] | 3% |  |
| hs-7-practice | p10-c | 1.92 | 3% | [1.862, 1.978] | 3% |  |
| hs-7-practice | p10-d | 15.4 | 3% | [14.94, 15.86] | 3% |  |
| hs-7-practice | p11-a | 1.06 | 3% | [1.028, 1.092] | 3% |  |
| hs-7-practice | p11-b | 1.17e-3 | 3% | [0.001135, 0.001205] | 3% |  |
| hs-7-practice | p11-c | 1100 | 3% | [1067, 1133] | 3% | e |
| hs-7-practice | p11-e | 1.47e12 | 3% | [1.426e+12, 1.514e+12] | 3% |  |

### hs-8

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| hs-8-practice | p1-b | 3.57 | 3% | [3.463, 3.677] | 3% |  |
| hs-8-practice | p1-c | 10.7 | 3% | [10.38, 11.02] | 3% |  |
| hs-8-practice | p1-d | 14.0 | 3% | [13.58, 14.42] | 3% |  |
| hs-8-practice | p2-a | 8.20e-14 | 3% | [7.954e-14, 8.446e-14] | 3% |  |
| hs-8-practice | p2-b | 3.99 | 3% | [3.87, 4.11] | 3% |  |
| hs-8-practice | p2-c | 0.968 | 0.5% | [0.9632, 0.9728] | 0.5% |  |
| hs-8-practice | p3-a | 0.00239 | 3% | [0.002318, 0.002462] | 3% |  |
| hs-8-practice | p3-b | 2.23 | 3% | [2.163, 2.297] | 3% |  |
| hs-8-practice | p3-c | 2.83 | 3% | [2.745, 2.915] | 3% |  |
| hs-8-practice | p3-d | 4.02 | 3% | [3.899, 4.141] | 3% |  |
| hs-8-practice | p4-a | 1.43e39 | 3% | [1.387e+39, 1.473e+39] | 3% |  |
| hs-8-practice | p4-b | 9.54e12 | 3% | [9.254e+12, 9.826e+12] | 3% |  |
| hs-8-practice | p4-c | 6.78e10 | 3% | [6.577e+10, 6.983e+10] | 3% |  |
| hs-8-practice | p4-d | 1.32 | 3% | [1.28, 1.36] | 3% |  |
| hs-8-practice | p5-a | 0.180 | 3% | [0.1746, 0.1854] | 3% |  |
| hs-8-practice | p5-d | 46.5 | 3% | [45.1, 47.9] | 3% |  |
| hs-8-practice | p5-e | 1.06e-20 | 3% | [1.028e-20, 1.092e-20] | 3% |  |
| hs-8-practice | p6-a | 1 | 0.1 | [0.9, 1.1] | 10% | c |
| hs-8-practice | p6-b | 133 | 3% | [129, 137] | 3% | e |
| hs-8-practice | p6-c | 9.89 | 3% | [9.593, 10.19] | 3% |  |
| hs-8-practice | p7-a | 14.4 | 3% | [13.97, 14.83] | 3% |  |
| hs-8-practice | p7-c | 8.86 | 3% | [8.594, 9.126] | 3% |  |
| hs-8-practice | p7-d | 5.07e7 | 3% | [4.918e+07, 5.222e+07] | 3% |  |
| hs-8-practice | p7-e | 0.333 | 3% | [0.323, 0.343] | 3% |  |
| hs-8-practice | p8-a | 250 | 3% | [242.5, 257.5] | 3% | e |
| hs-8-practice | p8-b | 7.72e18 | 3% | [7.488e+18, 7.952e+18] | 3% |  |
| hs-8-practice | p8-c | 1.12e30 | 3% | [1.086e+30, 1.154e+30] | 3% |  |
| hs-8-practice | p8-d | 2.5 | 3% | [2.425, 2.575] | 3% |  |
| hs-8-practice | p9-a | 0.0280 | 1% | [0.02772, 0.02828] | 1% |  |
| hs-8-practice | p9-b | 8400 | 3% | [8148, 8652] | 3% | e |
| hs-8-practice | p9-c | 70 | 3% | [67.9, 72.1] | 3% | e |
| hs-8-practice | p9-d | 14.5 | 3% | [14.06, 14.94] | 3% |  |
| hs-8-practice | p10-a | 5.0e9 | 3% | [4.85e+09, 5.15e+09] | 3% |  |
| hs-8-practice | p10-b | 5.45e-10 | 3% | [5.287e-10, 5.614e-10] | 3% |  |
| hs-8-practice | p10-c | 156 | 3% | [151.3, 160.7] | 3% | e |
| hs-8-practice | p10-d | 0.120 | 3% | [0.1164, 0.1236] | 3% |  |
| hs-8-practice | p10-e | 0.239 | 3% | [0.2318, 0.2462] | 3% |  |
| hs-8-practice | p11-a | 19.1 | 3% | [18.53, 19.67] | 3% |  |
| hs-8-practice | p11-b | 0.152 | 3% | [0.1474, 0.1566] | 3% |  |
| hs-8-practice | p11-c | 1467 | 3% | [1423, 1511] | 3% | e |
| hs-8-practice | p12-a | 7.57e20 | 3% | [7.343e+20, 7.797e+20] | 3% |  |
| hs-8-practice | p12-b | 3.68e41 | 3% | [3.57e+41, 3.79e+41] | 3% |  |
| hs-8-practice | p12-c | 4 | 3% | [3.88, 4.12] | 3% |  |
| hs-8-practice | p12-d | 1.45e11 | 3% | [1.406e+11, 1.494e+11] | 3% |  |
| hs-8-practice | p12-e | 1.11e5 | 3% | [1.077e+05, 1.143e+05] | 3% |  |
| hs-8-practice | p13-a | 28.8 | 3% | [27.94, 29.66] | 3% |  |
| hs-8-practice | p13-d | 99.7 | 3% | [96.71, 102.7] | 3% |  |
| hs-8-practice | p13-e | 9.97e-36 | 3% | [9.671e-36, 1.027e-35] | 3% |  |
| hs-8-practice | p13-f | 5e-61 | 3% | [4.85e-61, 5.15e-61] | 3% |  |

### 8.01

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-01-problem-set-1 | p1-b | 15 | 1% | [14.85, 15.15] | 1% |  |
| 8-01-problem-set-1 | p5-a | 4.240 | 0.05% | [4.238, 4.242] | 0.05% |  |
| 8-01-problem-set-1 | p5-b | 21.98 | 0.05% | [21.97, 21.99] | 0.05% | d |
| 8-01-problem-set-10 | p1-b | 4.36 | 1% | [4.316, 4.404] | 1% |  |
| 8-01-problem-set-10 | p3-a | 39.2 | 1% | [38.81, 39.59] | 1% |  |
| 8-01-problem-set-10 | p3-b | 30 | 1% | [29.7, 30.3] | 1% |  |
| 8-01-problem-set-10 | p3-c | 39.2 | 1% | [38.81, 39.59] | 1% |  |
| 8-01-problem-set-11 | p2-b | -0.9375 | 1% | [-0.9469, -0.9281] | 1% |  |
| 8-01-problem-set-12 | p5-c | 0.8 | 1% | [0.792, 0.808] | 1% |  |
| 8-01-problem-set-2 | p1-b | 15.7 | 1% | [15.54, 15.86] | 1% |  |
| 8-01-problem-set-5 | p3-a | 3.2 | 2% | [3.136, 3.264] | 2% |  |
| 8-01-problem-set-5 | p3-b | 1.18e5 | 2% | [1.156e+05, 1.204e+05] | 2% |  |
| 8-01-problem-set-5 | p3-c | 201 | 1% | [199, 203] | 1% | e |
| 8-01-problem-set-6 | p1-a-speed | 1.12 | 1% | [1.109, 1.131] | 1% |  |
| 8-01-problem-set-6 | p1-a-angle | 63.4 | 1% | [62.77, 64.03] | 1% |  |
| 8-01-problem-set-6 | p1-b | 1600 | 1% | [1584, 1616] | 1% | e |
| 8-01-problem-set-6 | p1-c | 1600 | 1% | [1584, 1616] | 1% | e |
| 8-01-problem-set-6 | p3-a | 6249 | 1% | [6187, 6311] | 1% | e |
| 8-01-problem-set-6 | p3-b | 3845 | 1% | [3807, 3883] | 1% | e |
| 8-01-problem-set-6 | p3-c | 3343 | 1% | [3310, 3376] | 1% | e |
| 8-01-problem-set-6 | p3-d | 7188 | 1% | [7116, 7260] | 1% | e |
| 8-01-problem-set-7 | p1-a | -20.4 | 1% | [-20.6, -20.2] | 1% |  |
| 8-01-problem-set-7 | p1-b | 58.8 | 1% | [58.21, 59.39] | 1% |  |
| 8-01-problem-set-7 | p1-c | 38.4 | 1% | [38.02, 38.78] | 1% |  |
| 8-01-problem-set-7 | p1-e | 3.27 | 1% | [3.237, 3.303] | 1% |  |
| 8-01-problem-set-9 | p6-tan | 2 | 1% | [1.98, 2.02] | 1% |  |

### 18.01

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 18-01-problem-set-1 | p2-a-ratio | 1.667 | 0.5% | [1.659, 1.675] | 0.5% |  |
| 18-01-problem-set-1 | p2-a-c | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-01-problem-set-1 | p2-b-ratio-plus | 82.85 | 0.5% | [82.44, 83.26] | 0.5% |  |
| 18-01-problem-set-1 | p2-b-ratio-minus | 200.0 | 0.5% | [199, 201] | 0.5% |  |
| 18-01-problem-set-1 | p3-y | 900 | 0.5% | [895.5, 904.5] | 0.5% | e |
| 18-01-problem-set-1 | p5-a | 3 | 1% | [2.97, 3.03] | 1% |  |
| 18-01-problem-set-1 | p5-b | 2 | 1% | [1.98, 2.02] | 1% |  |
| 18-01-problem-set-2 | b1-c4 | 35.325 | 0.006 | [35.32, 35.33] | 0.017% | d |
| 18-01-problem-set-2 | b1-c5 | 35.307 | 0.004 | [35.3, 35.31] | 0.011% | d |
| 18-01-problem-set-2 | b1-c6 | 35.307 | 0.004 | [35.3, 35.31] | 0.011% | d |
| 18-01-problem-set-2 | b2-b1 | 0.577 | 1% | [0.5712, 0.5828] | 1% |  |
| 18-01-problem-set-2 | b2-b2 | 0.75 | 1% | [0.7425, 0.7575] | 1% |  |
| 18-01-problem-set-3 | p3-a-near | 100.0 | 0.1% | [99.9, 100.1] | 0.1% |  |
| 18-01-problem-set-3 | p3-a-range | 23094 | 0.5% | [2.298e+04, 2.321e+04] | 0.5% | e |
| 18-01-problem-set-3 | p3-b-l2 | 48000 | 0.1% | [4.795e+04, 4.805e+04] | 0.1% | e |
| 18-01-problem-set-3 | p3-b-acc | 10.8 | 1% | [10.69, 10.91] | 1% |  |
| 18-01-problem-set-3 | p4-a-value | 0.8 | 1% | [0.792, 0.808] | 1% |  |
| 18-01-problem-set-3 | p4-b-a | 0.2887 | 0.5% | [0.2873, 0.2901] | 0.5% |  |
| 18-01-problem-set-3 | p4-b-error | 3.33 | 1% | [3.297, 3.363] | 1% |  |
| 18-01-problem-set-3 | p5-a-x1 | 2.08333 | 0.00001 | [2.083, 2.083] | 0.00048% | d |
| 18-01-problem-set-3 | p5-a-root | 2.08008 | 0.000005 | [2.08, 2.08] | 0.00024% | d |
| 18-01-problem-set-3 | p5-a-k | 3 | 0.1 | [2.9, 3.1] | 3.3% |  |
| 18-01-problem-set-3 | p5-c-quad | 2.07986 | 0.00001 | [2.08, 2.08] | 0.00048% | d |
| 18-01-problem-set-3 | p5-c-diff | 2.23 | 2% | [2.185, 2.275] | 2% |  |
| 18-01-problem-set-4 | p2-const | 0.5 | 0.001 | [0.499, 0.501] | 0.2% |  |
| 18-01-problem-set-4 | p4-a-everest | 0.2725 | 1% | [0.2698, 0.2752] | 1% |  |
| 18-01-problem-set-4 | p4-b-diff | 0.01292 | 0.3% | [0.01288, 0.01296] | 0.3% |  |
| 18-01-problem-set-4 | p4-b-percent | 1.3 | 0.3% | [1.296, 1.304] | 0.3% |  |
| 18-01-problem-set-4 | p4-c-drop | 0.013 | 0.3% | [0.01296, 0.01304] | 0.3% |  |
| 18-01-problem-set-4 | p4-c-everest | -0.3 | 1% | [-0.303, -0.297] | 1% |  |
| 18-01-problem-set-4 | p5-b | 1 | 0.001 | [0.999, 1.001] | 0.1% |  |
| 18-01-problem-set-4 | p5-c | 1.718 | 0.001 | [1.717, 1.719] | 0.058% | d |
| 18-01-problem-set-5 | p1-a2 | 67.32 | 0.05 | [67.27, 67.37] | 0.074% |  |
| 18-01-problem-set-5 | p1-b1 | 4216.69 | 0.6 | [4216, 4217] | 0.014% | d |
| 18-01-problem-set-5 | p1-b2 | 966.69 | 0.6 | [966.1, 967.3] | 0.062% |  |
| 18-01-problem-set-5 | p2-a1 | 1.2533 | 1% | [1.241, 1.266] | 1% |  |
| 18-01-problem-set-5 | p2-b1 | 2.1708 | 1% | [2.149, 2.193] | 1% |  |
| 18-01-problem-set-5 | p2-c1 | 1.7725 | 1% | [1.755, 1.79] | 1% |  |
| 18-01-problem-set-5 | p2-c2 | 0.977 | 10% | [0.8793, 1.075] | 10% | c |
| 18-01-problem-set-5 | p2-d | 0.099999 | 0.0000004 | [0.1, 0.1] | 0.0004% | d |
| 18-01-problem-set-5 | p2e-i1 | 1.2533 | 1% | [1.241, 1.266] | 1% |  |
| 18-01-problem-set-5 | p2e-i2 | 0.7979 | 1% | [0.7899, 0.8059] | 1% |  |
| 18-01-problem-set-5 | p2e-ii | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 18-01-problem-set-5 | p3-volume | 0.5333 | 1% | [0.528, 0.5386] | 1% |  |
| 18-01-problem-set-6 | p3-a | 0.667 | 0.001 | [0.666, 0.668] | 0.15% |  |
| 18-01-problem-set-6 | p3-b | 0.471 | 0.001 | [0.47, 0.472] | 0.21% |  |
| 18-01-problem-set-6 | p3-d-a | 0.6931 | 0.5% | [0.6896, 0.6966] | 0.5% |  |
| 18-01-problem-set-6 | p3-d-w | 1.4427 | 0.5% | [1.435, 1.45] | 0.5% |  |
| 18-01-problem-set-6 | p3-d-p | 0.25 | 0.001 | [0.249, 0.251] | 0.4% |  |
| 18-01-problem-set-6 | p5-a | 0.978219 | 0.000005 | [0.9782, 0.9782] | 0.00051% | d |
| 18-01-problem-set-6 | p5-b | 0.977503 | 0.000005 | [0.9775, 0.9775] | 0.00051% | d |
| 18-01-problem-set-7 | p5-volume | 3.586 | 0.002 | [3.584, 3.588] | 0.056% | d |
| 18-01-problem-set-8 | a3-c | 0.667 | 0.001 | [0.666, 0.668] | 0.15% |  |
| 18-01-problem-set-8 | a3-d | 0.25 | 0.001 | [0.249, 0.251] | 0.4% |  |
| 18-01-problem-set-8 | b1-a | 0 | 0.001 | [-0.001, 0.001] | n/a | b c |
| 18-01-problem-set-8 | b1-d-0 | 1 | 0.001 | [0.999, 1.001] | 0.1% |  |
| 18-01-problem-set-8 | b1-d-5 | 120 | 0.01 | [120, 120] | 0.0083% |  |
| 18-01-problem-set-8 | b1e-value | 1.772 | 0.001 | [1.771, 1.773] | 0.056% | d |
| 18-01-problem-set-8 | b2-c-ratio | 1 | 0.005 | [0.995, 1.005] | 0.5% |  |

### 8.02

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-02-problem-set-1 | p1-a | 0.5 | 2% | [0.49, 0.51] | 2% |  |
| 8-02-problem-set-1 | p1-b | 1.5 | 2% | [1.47, 1.53] | 2% |  |
| 8-02-problem-set-1 | p2-a | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 8-02-problem-set-1 | p2-b | -1 | 2% | [-1.02, -0.98] | 2% |  |
| 8-02-problem-set-1 | p8-a | 3.2e-28 | 2% | [3.136e-28, 3.264e-28] | 2% |  |
| 8-02-problem-set-1 | p8-b | 9.6e-28 | 2% | [9.408e-28, 9.792e-28] | 2% |  |
| 8-02-problem-set-1 | p10-a-dist | 1.37 | 2% | [1.343, 1.397] | 2% |  |
| 8-02-problem-set-10* | p3-b | 3 | 2% | [2.94, 3.06] | 2% |  |
| 8-02-problem-set-10* | p3-c | 1e6 | 2% | [9.8e+05, 1.02e+06] | 2% |  |
| 8-02-problem-set-10* | p3-d | 3.00e6 | 2% | [2.94e+06, 3.06e+06] | 2% |  |
| 8-02-problem-set-10* | p3-e1 | 1.00e-4 | 2% | [9.8e-05, 0.000102] | 2% |  |
| 8-02-problem-set-10* | p3-f | 300 | 2% | [294, 306] | 2% | e |
| 8-02-problem-set-10* | p4-c | 4.50e-6 | 2% | [4.41e-06, 4.59e-06] | 2% |  |
| 8-02-problem-set-10* | p4-d | 8.6e-7 | 2% | [8.428e-07, 8.772e-07] | 2% |  |
| 8-02-problem-set-10* | p5-a | 7.96 | 2% | [7.801, 8.119] | 2% |  |
| 8-02-problem-set-10* | p5-b1 | 77.5 | 2% | [75.95, 79.05] | 2% |  |
| 8-02-problem-set-10* | p5-b2 | 2.58e-7 | 2% | [2.528e-07, 2.632e-07] | 2% |  |
| 8-02-problem-set-10* | p5-c | 0.411 | 2% | [0.4028, 0.4192] | 2% |  |
| 8-02-problem-set-11* | p2-e-spacing | 3.99 | 1% | [3.95, 4.03] | 1% |  |
| 8-02-problem-set-11* | p2-e-ratio | 0.853 | 1% | [0.8445, 0.8615] | 1% |  |
| 8-02-problem-set-11* | p2-f | 0.1111 | 1% | [0.11, 0.1122] | 1% |  |
| 8-02-problem-set-11* | p3-a | 60.0 | 1% | [59.4, 60.6] | 1% |  |
| 8-02-problem-set-11* | p3-b | 180 | 1% | [178.2, 181.8] | 1% | e |
| 8-02-problem-set-11* | p3-e | 2.094 | 1% | [2.073, 2.115] | 1% |  |
| 8-02-problem-set-11* | p3-f | 1.80 | 1% | [1.782, 1.818] | 1% |  |
| 8-02-problem-set-11* | p4-c-first | 4.493 | 0.5% | [4.471, 4.515] | 0.5% |  |
| 8-02-problem-set-11* | p4-c-second | 7.725 | 0.5% | [7.686, 7.764] | 0.5% |  |
| 8-02-problem-set-11* | p4-d | 0.0472 | 1% | [0.04673, 0.04767] | 1% |  |
| 8-02-problem-set-11* | p4-e | 39 | 0.4 | [38.6, 39.4] | 1% |  |
| 8-02-problem-set-11* | p5-c | 8.33 | 1% | [8.247, 8.413] | 1% |  |
| 8-02-problem-set-11* | p5-e-area | 1.086e6 | 2% | [1.064e+06, 1.108e+06] | 2% |  |
| 8-02-problem-set-2 | p7-a | -3.24 | 2% | [-3.305, -3.175] | 2% |  |
| 8-02-problem-set-2 | p7-b | 3.24 | 2% | [3.175, 3.305] | 2% |  |
| 8-02-problem-set-2 | p7-c | -5.39 | 2% | [-5.498, -5.282] | 2% |  |
| 8-02-problem-set-2 | p7-d | -2.16 | 2% | [-2.203, -2.117] | 2% |  |
| 8-02-problem-set-2 | p7-e | 3.24 | 2% | [3.175, 3.305] | 2% |  |
| 8-02-problem-set-2 | p8-a | 28 | 2% | [27.44, 28.56] | 2% |  |
| 8-02-problem-set-3 | p1-c | 3 | 0.1 | [2.9, 3.1] | 3.3% |  |
| 8-02-problem-set-3 | p1-l | -49.9 | 2% | [-50.9, -48.9] | 2% |  |
| 8-02-problem-set-3 | p7-b | 10 | 2% | [9.8, 10.2] | 2% |  |
| 8-02-problem-set-3 | p7-c | -10 | 2% | [-10.2, -9.8] | 2% |  |
| 8-02-problem-set-3 | p7-d2 | 8.85e-11 | 2% | [8.673e-11, 9.027e-11] | 2% |  |
| 8-02-problem-set-3 | p8-a1 | 2.0 | 2% | [1.96, 2.04] | 2% |  |
| 8-02-problem-set-3 | p8-a2 | 3.0 | 2% | [2.94, 3.06] | 2% |  |
| 8-02-problem-set-3 | p8-a3 | 2.70e3 | 2% | [2646, 2754] | 2% |  |
| 8-02-problem-set-3 | p8-b1 | 4.0 | 2% | [3.92, 4.08] | 2% |  |
| 8-02-problem-set-3 | p8-b2 | 3 | 2% | [2.94, 3.06] | 2% |  |
| 8-02-problem-set-4 | p1-f | 40.1 | 2% | [39.3, 40.9] | 2% |  |
| 8-02-problem-set-4 | p3-a | 120 | 2% | [117.6, 122.4] | 2% | e |
| 8-02-problem-set-4 | p3-b1 | 80 | 2% | [78.4, 81.6] | 2% | e |
| 8-02-problem-set-4 | p3-b2 | 40 | 2% | [39.2, 40.8] | 2% |  |
| 8-02-problem-set-4 | p3-c | 0.800 | 2% | [0.784, 0.816] | 2% |  |
| 8-02-problem-set-4 | p5-a | 2 | 2% | [1.96, 2.04] | 2% |  |
| 8-02-problem-set-4 | p6-a | 0.667 | 2% | [0.6537, 0.6803] | 2% |  |
| 8-02-problem-set-4 | p6-b1 | 8.00 | 2% | [7.84, 8.16] | 2% |  |
| 8-02-problem-set-4 | p6-b2 | 20.6 | 2% | [20.19, 21.01] | 2% |  |
| 8-02-problem-set-4 | p6-c1 | 7.20 | 2% | [7.056, 7.344] | 2% |  |
| 8-02-problem-set-4 | p6-c2 | 9.60 | 2% | [9.408, 9.792] | 2% |  |
| 8-02-problem-set-4 | p6-c3 | 21.6 | 2% | [21.17, 22.03] | 2% |  |
| 8-02-problem-set-4 | p6-c4 | 19.2 | 2% | [18.82, 19.58] | 2% |  |
| 8-02-problem-set-4 | p9-b | -0.9 | 2% | [-0.918, -0.882] | 2% |  |
| 8-02-problem-set-4 | p9-c | 0.9 | 2% | [0.882, 0.918] | 2% |  |
| 8-02-problem-set-4 | p10-a | 13.4 | 2% | [13.13, 13.67] | 2% |  |
| 8-02-problem-set-4 | p10-b | 6.16 | 2% | [6.037, 6.283] | 2% |  |
| 8-02-problem-set-4 | p10-c | 5.02 | 2% | [4.92, 5.12] | 2% |  |
| 8-02-problem-set-4 | p10-d | 520 | 2% | [509.6, 530.4] | 2% | e |
| 8-02-problem-set-4 | p11-d | 151 | 2% | [148, 154] | 2% | e |
| 8-02-problem-set-5* | p1-b1 | 3.69e6 | 2% | [3.616e+06, 3.764e+06] | 2% |  |
| 8-02-problem-set-5* | p1-b2 | 2.71e-4 | 2% | [0.0002656, 0.0002764] | 2% |  |
| 8-02-problem-set-5* | p1-b3 | 52.6 | 2% | [51.55, 53.65] | 2% |  |
| 8-02-problem-set-5* | p2-a | 54 | 2% | [52.92, 55.08] | 2% | e |
| 8-02-problem-set-5* | p2-b | 0.25 | 2% | [0.245, 0.255] | 2% |  |
| 8-02-problem-set-5* | p5-a | 5.53 | 2% | [5.419, 5.641] | 2% |  |
| 8-02-problem-set-5* | p5-b | 0.263 | 2% | [0.2577, 0.2683] | 2% |  |
| 8-02-problem-set-5* | p5-c | 5.79 | 2% | [5.674, 5.906] | 2% |  |
| 8-02-problem-set-5* | p6-a1 | 3.85 | 2% | [3.773, 3.927] | 2% |  |
| 8-02-problem-set-5* | p6-a2 | 1.54 | 2% | [1.509, 1.571] | 2% |  |
| 8-02-problem-set-5* | p6-a3 | 2.31 | 2% | [2.264, 2.356] | 2% |  |
| 8-02-problem-set-5* | p6-b | 68.6 | 2% | [67.23, 69.97] | 2% |  |
| 8-02-problem-set-5* | p6-c | 29.7 | 2% | [29.11, 30.29] | 2% |  |
| 8-02-problem-set-6* | p3-d | 17.8 | 2% | [17.44, 18.16] | 2% |  |
| 8-02-problem-set-6* | p5-a | 1.74e9 | 2% | [1.705e+09, 1.775e+09] | 2% |  |
| 8-02-problem-set-6* | p5-b | 5.17e4 | 2% | [5.067e+04, 5.273e+04] | 2% |  |
| 8-02-problem-set-7* | p2-f | 6.28 | 1% | [6.217, 6.343] | 1% |  |
| 8-02-problem-set-7* | p4-b | 39.5 | 1% | [39.1, 39.9] | 1% |  |
| 8-02-problem-set-7* | p5-a | 0.02418 | 1% | [0.02394, 0.02442] | 1% |  |
| 8-02-problem-set-7* | p5-b | 4.84 | 1% | [4.792, 4.888] | 1% |  |
| 8-02-problem-set-8* | p1-j | 1.53 | 1% | [1.515, 1.545] | 1% |  |
| 8-02-problem-set-8* | p2-d | 1.15 | 1% | [1.138, 1.161] | 1% |  |
| 8-02-problem-set-8* | p3-b | -1.963 | 1% | [-1.983, -1.943] | 1% |  |
| 8-02-problem-set-8* | p3-c | 0.982 | 1% | [0.9722, 0.9918] | 1% |  |
| 8-02-problem-set-8* | p3-e | 0.578 | 1% | [0.5722, 0.5838] | 1% |  |
| 8-02-problem-set-8* | p4-a | 1.533e6 | 1% | [1.518e+06, 1.548e+06] | 1% |  |
| 8-02-problem-set-8* | p4-b | 1533 | 1% | [1518, 1548] | 1% | e |
| 8-02-problem-set-8* | p4-c | 0.706 | 1% | [0.6989, 0.7131] | 1% |  |
| 8-02-problem-set-8* | p5-e | 40 | 1% | [39.6, 40.4] | 1% |  |
| 8-02-problem-set-9* | p2-b1 | 7.07 | 1% | [6.999, 7.141] | 1% |  |
| 8-02-problem-set-9* | p2-b2 | 0.707 | 1% | [0.6999, 0.7141] | 1% |  |
| 8-02-problem-set-9* | p2-d1 | 0.6667 | 1% | [0.66, 0.6734] | 1% |  |
| 8-02-problem-set-9* | p2-d2 | 0.6667 | 1% | [0.66, 0.6734] | 1% |  |
| 8-02-problem-set-9* | p2-e | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-02-problem-set-9* | p3-d2 | 100 | 1% | [99, 101] | 1% | e |
| 8-02-problem-set-9* | p4-e1 | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-02-problem-set-9* | p4-e2 | 0.75 | 1% | [0.7425, 0.7575] | 1% |  |
| 8-02-problem-set-9* | p5-a | 1e9 | 1% | [9.9e+08, 1.01e+09] | 1% |  |
| 8-02-problem-set-9* | p5-b | 10 | 1% | [9.9, 10.1] | 1% |  |
| 8-02-problem-set-9* | p5-c | 1e-7 | 1% | [9.9e-08, 1.01e-07] | 1% |  |
| 8-02-problem-set-9* | p5-d | 1e-4 | 1% | [9.9e-05, 0.000101] | 1% |  |

### 18.02

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 18-02-problem-set-1 | p1-a-edge | 2.828 | 0.002 | [2.826, 2.83] | 0.071% |  |
| 18-02-problem-set-1 | p1-b | 109.5 | 0.05 | [109.5, 109.5] | 0.046% | d |
| 18-02-problem-set-1 | p1-c-adjacent | 60 | 0.1 | [59.9, 60.1] | 0.17% |  |
| 18-02-problem-set-1 | p1-c-opposite | 90 | 0.1 | [89.9, 90.1] | 0.11% |  |
| 18-02-problem-set-1 | p1-d | 3.464 | 0.002 | [3.462, 3.466] | 0.058% | d |
| 18-02-problem-set-1 | p4-d-plus | 0.7071 | 0.0005 | [0.7066, 0.7076] | 0.071% |  |
| 18-02-problem-set-1 | p4-d-minus | -0.7071 | 0.0005 | [-0.7076, -0.7066] | 0.071% |  |
| 18-02-problem-set-1 | p4-e-angle-up | 135 | 0.5 | [134.5, 135.5] | 0.37% |  |
| 18-02-problem-set-1 | p4-e-angle-down | 225 | 0.5 | [224.5, 225.5] | 0.22% |  |
| 18-02-problem-set-1 | p5-b-protein | 14.32 | 0.02 | [14.3, 14.34] | 0.14% |  |
| 18-02-problem-set-1 | p5-c-a11 | -0.4690 | 1% | [-0.4737, -0.4643] | 1% |  |
| 18-02-problem-set-1 | p5-c-a12 | 0.07048 | 1% | [0.06978, 0.07118] | 1% |  |
| 18-02-problem-set-1 | p5-c-a13 | -0.01280 | 1% | [-0.01293, -0.01267] | 1% |  |
| 18-02-problem-set-1 | p5-d-x1 | -3.136 | 0.03 | [-3.166, -3.106] | 0.96% |  |
| 18-02-problem-set-1 | p5-d-x2 | 10.99 | 0.1 | [10.89, 11.09] | 0.91% |  |
| 18-02-problem-set-1 | p5-d-x3 | -0.889 | 0.01 | [-0.899, -0.879] | 1.1% |  |
| 18-02-problem-set-10 | p1-a-flux | 0 | 0.001 | [-0.001, 0.001] | n/a | b c |
| 18-02-problem-set-10 | p1-b-flux | 6.283 | 0.002 | [6.281, 6.285] | 0.032% | d |
| 18-02-problem-set-10 | p4-a-angle | 0.785 | 0.002 | [0.783, 0.787] | 0.25% |  |
| 18-02-problem-set-11 | p1-flux | 19.74 | 0.05 | [19.69, 19.79] | 0.25% |  |
| 18-02-problem-set-11 | p2-c-1 | 0.3333 | 0.002 | [0.3313, 0.3353] | 0.6% |  |
| 18-02-problem-set-11 | p2-c-2 | -0.1667 | 0.002 | [-0.1687, -0.1647] | 1.2% |  |
| 18-02-problem-set-11 | p5-b-a | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-02-problem-set-11 | p5-b-b | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-02-problem-set-11 | p5-c-work | -82.68 | 0.1 | [-82.78, -82.58] | 0.12% |  |
| 18-02-problem-set-12 | p1-b | 0.5 | 0.005 | [0.495, 0.505] | 1% |  |
| 18-02-problem-set-12 | p1-c-012 | 0 | 0.005 | [-0.005, 0.005] | n/a | b c |
| 18-02-problem-set-12 | p1-c-013 | 0.5 | 0.005 | [0.495, 0.505] | 1% |  |
| 18-02-problem-set-12 | p1-c-023 | 0.5 | 0.005 | [0.495, 0.505] | 1% |  |
| 18-02-problem-set-12 | p1-c-123 | -1 | 0.005 | [-1.005, -0.995] | 0.5% |  |
| 18-02-problem-set-2 | p1-a-d1 | 8 | 0.01 | [7.99, 8.01] | 0.12% |  |
| 18-02-problem-set-2 | p1-a-d2 | 6 | 0.01 | [5.99, 6.01] | 0.17% |  |
| 18-02-problem-set-2 | p1-a-distance | 0.816 | 0.002 | [0.814, 0.818] | 0.25% |  |
| 18-02-problem-set-2 | p1-b-t1 | -4 | 0.01 | [-4.01, -3.99] | 0.25% |  |
| 18-02-problem-set-2 | p1-b-t2 | 3.667 | 0.002 | [3.665, 3.669] | 0.055% | d |
| 18-02-problem-set-2 | p1-b-distance | 0.816 | 0.002 | [0.814, 0.818] | 0.25% |  |
| 18-02-problem-set-2 | p2-b-v0 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-02-problem-set-2 | p2-b-a0 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-02-problem-set-3 | p1-c-y0 | -2 | 0.005 | [-2.005, -1.995] | 0.25% |  |
| 18-02-problem-set-3 | p1-c-z0 | 0.667 | 0.002 | [0.665, 0.669] | 0.3% |  |
| 18-02-problem-set-3 | p1-c-y1 | 2 | 0.005 | [1.995, 2.005] | 0.25% |  |
| 18-02-problem-set-3 | p1-c-z1 | 3 | 0.005 | [2.995, 3.005] | 0.17% |  |
| 18-02-problem-set-3 | p1-d-y | 14 | 0.02 | [13.98, 14.02] | 0.14% |  |
| 18-02-problem-set-3 | p1-d-z | 10 | 0.02 | [9.98, 10.02] | 0.2% |  |
| 18-02-problem-set-3 | p1-e-t | 0.5 | 0.005 | [0.495, 0.505] | 1% |  |
| 18-02-problem-set-3 | p1-e-y | 0.286 | 0.002 | [0.284, 0.288] | 0.7% |  |
| 18-02-problem-set-3 | p1-e-z | 2 | 0.005 | [1.995, 2.005] | 0.25% |  |
| 18-02-problem-set-3 | p2-a-approx | 3.9477 | 0.0002 | [3.948, 3.948] | 0.0051% | d |
| 18-02-problem-set-3 | p2-a-exact | 3.9473 | 0.0002 | [3.947, 3.947] | 0.0051% | d |
| 18-02-problem-set-3 | p3-b-fx1 | -1.25 | 0.005 | [-1.255, -1.245] | 0.4% |  |
| 18-02-problem-set-3 | p3-b-fy1 | -2 | 0.005 | [-2.005, -1.995] | 0.25% |  |
| 18-02-problem-set-3 | p3-b-fx2 | -1.2 | 0.005 | [-1.205, -1.195] | 0.42% |  |
| 18-02-problem-set-3 | p3-b-fy2 | 0 | 0.005 | [-0.005, 0.005] | n/a | b c |
| 18-02-problem-set-3 | p3-d-x1 | 0.485 | 0.01 | [0.475, 0.495] | 2.1% |  |
| 18-02-problem-set-3 | p3-d-y1 | 0.243 | 0.01 | [0.233, 0.253] | 4.1% |  |
| 18-02-problem-set-3 | p3-d-x2 | 1.648 | 0.01 | [1.638, 1.658] | 0.61% |  |
| 18-02-problem-set-3 | p3-d-y2 | 0.824 | 0.01 | [0.814, 0.834] | 1.2% |  |
| 18-02-problem-set-4 | p1-c-a | 7.146 | 0.005 | [7.141, 7.151] | 0.07% |  |
| 18-02-problem-set-4 | p1-c-b | -12.985 | 0.01 | [-12.99, -12.97] | 0.077% | d |
| 18-02-problem-set-4 | p1-c-worst | 9.21 | 0.02 | [9.19, 9.23] | 0.22% |  |
| 18-02-problem-set-4 | p1-d-a1 | 1.395 | 0.002 | [1.393, 1.397] | 0.14% | d |
| 18-02-problem-set-4 | p1-d-b1 | -3.564 | 0.003 | [-3.567, -3.561] | 0.084% | d |
| 18-02-problem-set-4 | p1-d-worst | 1.58 | 0.02 | [1.56, 1.6] | 1.3% |  |
| 18-02-problem-set-4 | p1-f-2006 | 122.6 | 1 | [121.6, 123.6] | 0.82% |  |
| 18-02-problem-set-4 | p1-f-2015 | 34900 | 2% | [3.42e+04, 3.56e+04] | 2% | e |
| 18-02-problem-set-4 | p2-b-t1 | 2.094 | 0.002 | [2.092, 2.096] | 0.096% | d |
| 18-02-problem-set-4 | p2-b-t2 | 4.189 | 0.002 | [4.187, 4.191] | 0.048% |  |
| 18-02-problem-set-4 | p2-c-max | 1.299 | 0.001 | [1.298, 1.3] | 0.077% |  |
| 18-02-problem-set-4 | p2-d-a11 | -0.866 | 0.001 | [-0.867, -0.865] | 0.12% |  |
| 18-02-problem-set-4 | p2-d-test | 0.5625 | 0.001 | [0.5615, 0.5635] | 0.18% |  |
| 18-02-problem-set-4 | p3-d-wx | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-02-problem-set-4 | p3-d-wy | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-02-problem-set-5 | p1-a-max | 0.7906 | 0.0005 | [0.7901, 0.7911] | 0.063% |  |
| 18-02-problem-set-5 | p1-a-min | -0.7906 | 0.0005 | [-0.7911, -0.7901] | 0.063% |  |
| 18-02-problem-set-5 | p1-b-max | 251.6 | 0.05 | [251.5, 251.7] | 0.02% | d |
| 18-02-problem-set-5 | p1-b-min | 71.6 | 0.05 | [71.55, 71.65] | 0.07% |  |
| 18-02-problem-set-5 | p1-c-low | 161.6 | 0.05 | [161.5, 161.7] | 0.031% | d |
| 18-02-problem-set-5 | p1-c-high | 341.6 | 0.05 | [341.6, 341.7] | 0.015% | d |
| 18-02-problem-set-5 | p1-d-max | 0.823 | 0.003 | [0.82, 0.826] | 0.36% |  |
| 18-02-problem-set-5 | p1-d-theta-max | 249.4 | 1.5 | [247.9, 250.9] | 0.6% |  |
| 18-02-problem-set-5 | p1-d-theta-zero | 159.4 | 1.5 | [157.9, 160.9] | 0.94% |  |
| 18-02-problem-set-5 | p2-b-x | 1.7778 | 0.0005 | [1.777, 1.778] | 0.028% | d |
| 18-02-problem-set-5 | p2-b-y | -1.0556 | 0.0005 | [-1.056, -1.055] | 0.047% | d |
| 18-02-problem-set-5 | p2-b-z | 1.0556 | 0.0005 | [1.055, 1.056] | 0.047% | d |
| 18-02-problem-set-5 | p2-b-g | 2.0463 | 0.0005 | [2.046, 2.047] | 0.024% | d |
| 18-02-problem-set-5 | p3-b-coefficient | -16 | 0.01 | [-16.01, -15.99] | 0.062% |  |
| 18-02-problem-set-5 | p3-b-lambda | -0.1283 | 0.0002 | [-0.1285, -0.1281] | 0.16% | d |
| 18-02-problem-set-5 | p3-b-px | 1.7725 | 0.0002 | [1.772, 1.773] | 0.011% | d |
| 18-02-problem-set-5 | p3-b-py | -1.0686 | 0.0002 | [-1.069, -1.068] | 0.019% | d |
| 18-02-problem-set-5 | p3-b-pz | 1.0686 | 0.0002 | [1.068, 1.069] | 0.019% | d |
| 18-02-problem-set-6 | p2-b | -0.2 | 0.002 | [-0.202, -0.198] | 1% |  |
| 18-02-problem-set-7 | p4-b-average | 0.477 | 0.002 | [0.475, 0.479] | 0.42% |  |
| 18-02-problem-set-7 | p4-b-ratio | 2.72 | 0.01 | [2.71, 2.73] | 0.37% |  |
| 18-02-problem-set-7 | p5-outer-lower | 0 | 0.001 | [-0.001, 0.001] | n/a | b c |
| 18-02-problem-set-7 | p5-outer-upper | 1 | 0.001 | [0.999, 1.001] | 0.1% |  |
| 18-02-problem-set-7 | p5-value | 1.625 | 0.002 | [1.623, 1.627] | 0.12% | d |
| 18-02-problem-set-7 | p6-jacobian | 29 | 0.01 | [28.99, 29.01] | 0.034% |  |
| 18-02-problem-set-7 | p6-area | 0.1083 | 0.0003 | [0.108, 0.1086] | 0.28% |  |
| 18-02-problem-set-8 | p2-c1 | 3.142 | 0.002 | [3.14, 3.144] | 0.064% |  |
| 18-02-problem-set-8 | p2-c2 | -3.142 | 0.002 | [-3.144, -3.14] | 0.064% |  |
| 18-02-problem-set-8 | p3-b-n | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-02-problem-set-9 | p2-b | 25.13 | 0.01 | [25.12, 25.14] | 0.04% | d |
| 18-02-problem-set-9 | p3-b-upper | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-02-problem-set-9 | p3-b | 0 | 0.001 | [-0.001, 0.001] | n/a | b c |

### 8.03

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-03-problem-set-1 | p2-e-phi | 1.0472 | 0.5% | [1.042, 1.052] | 0.5% |  |
| 8-03-problem-set-1 | p2-f-phi | 3.6652 | 0.5% | [3.647, 3.684] | 0.5% |  |
| 8-03-problem-set-1 | p3-d | -1.5708 | 0.5% | [-1.579, -1.563] | 0.5% |  |
| 8-03-problem-set-1 | p4-c-a | 0.4167 | 1% | [0.4125, 0.4209] | 1% |  |
| 8-03-problem-set-1 | p4-c-b | 1.111 | 1% | [1.1, 1.122] | 1% |  |
| 8-03-problem-set-1 | p5-c-angle | 14.06 | 1% | [13.92, 14.2] | 1% |  |
| 8-03-problem-set-1 | p5-g | 0.1411 | 1% | [0.1397, 0.1425] | 1% |  |
| 8-03-problem-set-10 | p2-a | 1.25 | 1% | [1.238, 1.262] | 1% |  |
| 8-03-problem-set-10 | p2-b | 4 | 1% | [3.96, 4.04] | 1% |  |
| 8-03-problem-set-10 | p2-c | 0.833 | 1% | [0.8247, 0.8413] | 1% |  |
| 8-03-problem-set-10 | p2-e-main | 9 | 1% | [8.91, 9.09] | 1% |  |
| 8-03-problem-set-10 | p2-e-side | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-03-problem-set-10 | p2-f | 7.33 | 1% | [7.257, 7.403] | 1% |  |
| 8-03-problem-set-10 | p2-g | 0.883 | 1% | [0.8742, 0.8918] | 1% |  |
| 8-03-problem-set-10 | p2-h | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-03-problem-set-10 | p3-a-60 | 0.0436 | 2% | [0.04273, 0.04447] | 2% |  |
| 8-03-problem-set-10 | p3-b-60 | 0.956 | 1% | [0.9464, 0.9656] | 1% |  |
| 8-03-problem-set-10 | p3-c-0 | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-03-problem-set-10 | p4-a | 2.24 | 1% | [2.218, 2.262] | 1% |  |
| 8-03-problem-set-10 | p4-b | 4 | 0.1 | [3.9, 4.1] | 2.5% |  |
| 8-03-problem-set-10 | p5-a | 2.5 | 0.25 | [2.25, 2.75] | 10% | c |
| 8-03-problem-set-10 | p5-b | 2.5 | 0.25 | [2.25, 2.75] | 10% | c |
| 8-03-problem-set-10 | p5-b-zero | 0.0667 | 3% | [0.0647, 0.0687] | 3% |  |
| 8-03-problem-set-10 | p5-b-count | 5 | 0.1 | [4.9, 5.1] | 2% |  |
| 8-03-problem-set-2 | p1-gamma | 10000 | 1% | [9900, 1.01e+04] | 1% | e |
| 8-03-problem-set-2 | p1-omega0 | 15811 | 1% | [1.565e+04, 1.597e+04] | 1% | e |
| 8-03-problem-set-2 | p1-omega | 15000 | 1% | [1.485e+04, 1.515e+04] | 1% | e |
| 8-03-problem-set-2 | p2-ratio | 0.1 | 1% | [0.099, 0.101] | 1% |  |
| 8-03-problem-set-2 | p3-f0 | 1.576 | 1% | [1.56, 1.592] | 1% |  |
| 8-03-problem-set-2 | p3-tau | 2.0 | 1% | [1.98, 2.02] | 1% |  |
| 8-03-problem-set-2 | p3-omega | 9.887 | 1% | [9.788, 9.986] | 1% |  |
| 8-03-problem-set-2 | p3-a | -0.1 | 1% | [-0.101, -0.099] | 1% |  |
| 8-03-problem-set-2 | p3-c | -0.005057 | 1% | [-0.005108, -0.005006] | 1% |  |
| 8-03-problem-set-2 | p5-m11 | 21 | 1% | [20.79, 21.21] | 1% |  |
| 8-03-problem-set-2 | p5-m12 | -15 | 1% | [-15.15, -14.85] | 1% |  |
| 8-03-problem-set-2 | p5-m21 | -5 | 1% | [-5.05, -4.95] | 1% |  |
| 8-03-problem-set-2 | p5-m22 | 11.5 | 1% | [11.38, 11.62] | 1% |  |
| 8-03-problem-set-2 | p5-w1 | 2.524 | 1% | [2.499, 2.549] | 1% |  |
| 8-03-problem-set-2 | p5-w2 | 5.111 | 1% | [5.06, 5.162] | 1% |  |
| 8-03-problem-set-2 | p5-r1 | 1.025 | 1% | [1.015, 1.035] | 1% |  |
| 8-03-problem-set-2 | p5-r2 | -2.925 | 1% | [-2.954, -2.896] | 1% |  |
| 8-03-problem-set-2 | p5-a1 | 0.2596 | 1% | [0.257, 0.2622] | 1% |  |
| 8-03-problem-set-2 | p5-a2 | 0.7404 | 1% | [0.733, 0.7478] | 1% |  |
| 8-03-problem-set-2 | p5-b1 | 0.2531 | 1% | [0.2506, 0.2556] | 1% |  |
| 8-03-problem-set-3 | p1-c | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-03-problem-set-3 | p4-c1 | 0.382 | 1% | [0.3782, 0.3858] | 1% |  |
| 8-03-problem-set-3 | p4-c2 | 2.618 | 1% | [2.592, 2.644] | 1% |  |
| 8-03-problem-set-3 | p4-c3 | 1.618 | 1% | [1.602, 1.634] | 1% |  |
| 8-03-problem-set-4 | p2-count | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 8-03-problem-set-4 | p2-r1 | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-03-problem-set-4 | p2-r2 | -1 | 1% | [-1.01, -0.99] | 1% |  |
| 8-03-problem-set-4 | p3-nodes | 3 | 0.1 | [2.9, 3.1] | 3.3% |  |
| 8-03-problem-set-4 | p4-a2 | 0.8106 | 1% | [0.8025, 0.8187] | 1% |  |
| 8-03-problem-set-4 | p4-a6 | -0.09006 | 1% | [-0.09096, -0.08916] | 1% |  |
| 8-03-problem-set-5 | p2-b-height | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-03-problem-set-5 | p2-b-centre | 0.75 | 1% | [0.7425, 0.7575] | 1% |  |
| 8-03-problem-set-5 | p2-c-mid | -1 | 1% | [-1.01, -0.99] | 1% |  |
| 8-03-problem-set-5 | p4-frac | 0.8889 | 1% | [0.88, 0.8978] | 1% |  |
| 8-03-problem-set-5 | p5-abs | 0.75 | 1% | [0.7425, 0.7575] | 1% |  |
| 8-03-problem-set-6 | p1-f1 | 50 | 1% | [49.5, 50.5] | 1% |  |
| 8-03-problem-set-6 | p1-f2 | 150 | 1% | [148.5, 151.5] | 1% | e |
| 8-03-problem-set-6 | p1-f3 | 250 | 1% | [247.5, 252.5] | 1% | e |
| 8-03-problem-set-6 | p1-c | 3 | 1% | [2.97, 3.03] | 1% |  |
| 8-03-problem-set-7 | p1-tension | 0.0993 | 2% | [0.09731, 0.1013] | 2% |  |
| 8-03-problem-set-7 | p2-low | 1.56 | 15% | [1.326, 1.794] | 15% | c |
| 8-03-problem-set-7 | p2-high | 5.82 | 10% | [5.238, 6.402] | 10% | c |
| 8-03-problem-set-7 | p2-w | 3.94 | 10% | [3.546, 4.334] | 10% | c |
| 8-03-problem-set-7 | p2-v | 3.09 | 10% | [2.781, 3.399] | 10% | c |
| 8-03-problem-set-7 | p3-peak | 1.995 | 1% | [1.975, 2.015] | 1% |  |
| 8-03-problem-set-8 | p1-ratio | 1.847 | 1% | [1.829, 1.865] | 1% |  |
| 8-03-problem-set-8 | p2-limit | 0.866 | 1% | [0.8573, 0.8747] | 1% |  |
| 8-03-problem-set-8 | p2-angle | 35.26 | 1% | [34.91, 35.61] | 1% |  |
| 8-03-problem-set-8 | p2-n3 | 1.732 | 1% | [1.715, 1.749] | 1% |  |
| 8-03-problem-set-8 | p3-thetamax | 59.58 | 1% | [58.98, 60.18] | 1% |  |
| 8-03-problem-set-8 | p3-alphamax | 42.52 | 1% | [42.09, 42.95] | 1% |  |
| 8-03-problem-set-8 | p3-alpha134 | 41.07 | 1% | [40.66, 41.48] | 1% |  |
| 8-03-problem-set-9 | p1-vp | 1.414 | 1% | [1.4, 1.428] | 1% |  |
| 8-03-problem-set-9 | p1-vg | 0.707 | 1% | [0.6999, 0.7141] | 1% |  |
| 8-03-problem-set-9 | p4-ratio | 0.707 | 1% | [0.6999, 0.7141] | 1% |  |
| 8-03-problem-set-9 | p4-d | 2 | 1% | [1.98, 2.02] | 1% |  |
| 8-03-problem-set-9 | p5-deg | 56.7 | 1% | [56.13, 57.27] | 1% |  |

### 18.03

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 18-03-problem-set-1 | p1-c-a | 1.25 | 0.01 | [1.24, 1.26] | 0.8% |  |
| 18-03-problem-set-1 | p1-c-b | -0.5 | 0.005 | [-0.505, -0.495] | 1% |  |
| 18-03-problem-set-1 | p2-a | 1 | 0.005 | [0.995, 1.005] | 0.5% |  |
| 18-03-problem-set-1 | p2-b | 0.5 | 0.002 | [0.498, 0.502] | 0.4% |  |
| 18-03-problem-set-1 | p2-c | 0.6667 | 0.0005 | [0.6662, 0.6672] | 0.075% |  |
| 18-03-problem-set-1 | p3-c | 240000 | 1 | [2.4e+05, 2.4e+05] | 0.00042% | e |
| 18-03-problem-set-1 | p3-d | 151708.93 | 0.02 | [1.517e+05, 1.517e+05] | 1.3e-05% | d |
| 18-03-problem-set-2 | p4-c-num | 0.1163 | 0.0005 | [0.1158, 0.1168] | 0.43% |  |
| 18-03-problem-set-2 | p4-d-num | 6.93 | 0.01 | [6.92, 6.94] | 0.14% |  |
| 18-03-problem-set-2 | p5-a-1 | 1.414 | 0.005 | [1.409, 1.419] | 0.35% |  |
| 18-03-problem-set-2 | p5-a-2 | 1.732 | 0.005 | [1.727, 1.737] | 0.29% |  |
| 18-03-problem-set-2 | p5-a-3 | -2.356 | 0.005 | [-2.361, -2.351] | 0.21% |  |
| 18-03-problem-set-2 | p5-a-4 | 0.866 | 0.001 | [0.865, 0.867] | 0.12% |  |
| 18-03-problem-set-2 | p5-a-5 | 2.356 | 0.005 | [2.351, 2.361] | 0.21% |  |
| 18-03-problem-set-2 | p5-b-mod | 1.414 | 0.005 | [1.409, 1.419] | 0.35% |  |
| 18-03-problem-set-2 | p6-b-re | 0.6931 | 0.001 | [0.6921, 0.6941] | 0.14% |  |
| 18-03-problem-set-2 | p6-c-coeff | -6 | 0.01 | [-6.01, -5.99] | 0.17% |  |
| 18-03-problem-set-2 | p6-c-imag | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-03-problem-set-2 | p6-d-1 | 6.283 | 0.005 | [6.278, 6.288] | 0.08% |  |
| 18-03-problem-set-2 | p6-d-3-re | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-03-problem-set-2 | p6-d-3-im | 6.283 | 0.005 | [6.278, 6.288] | 0.08% |  |
| 18-03-problem-set-2 | p7-a-a | 0.4330 | 0.001 | [0.432, 0.434] | 0.23% |  |
| 18-03-problem-set-2 | p7-a-b | 0.25 | 0.001 | [0.249, 0.251] | 0.4% |  |
| 18-03-problem-set-2 | p7-a-amp | 0.5 | 0.001 | [0.499, 0.501] | 0.2% |  |
| 18-03-problem-set-2 | p7-a-phi | 0.5236 | 0.001 | [0.5226, 0.5246] | 0.19% |  |
| 18-03-problem-set-2 | p7-b-re | 0.2308 | 0.0005 | [0.2303, 0.2313] | 0.22% |  |
| 18-03-problem-set-2 | p7-b-im | -0.1538 | 0.0005 | [-0.1543, -0.1533] | 0.33% |  |
| 18-03-problem-set-2 | p7-c-amp | 0.2774 | 0.001 | [0.2764, 0.2784] | 0.36% |  |
| 18-03-problem-set-3 | p8-b-count | 0.25 | 1% | [0.2475, 0.2525] | 1% |  |
| 18-03-problem-set-3 | p8-c-stable | 750 | 1% | [742.5, 757.5] | 1% | e |
| 18-03-problem-set-3 | p8-c-crash | 250 | 1% | [247.5, 252.5] | 1% | e |
| 18-03-problem-set-3 | p9-a-y0 | 0.75 | 1% | [0.7425, 0.7575] | 1% |  |
| 18-03-problem-set-3 | p9-c-11 | 0.6065 | 0.5% | [0.6035, 0.6095] | 0.5% |  |
| 18-03-problem-set-3 | p9-c-12 | 0.3679 | 0.5% | [0.3661, 0.3697] | 0.5% |  |
| 18-03-problem-set-3 | p11-a-r1 | -0.5 | 1% | [-0.505, -0.495] | 1% |  |
| 18-03-problem-set-3 | p11-a-r2 | -2.5 | 1% | [-2.525, -2.475] | 1% |  |
| 18-03-problem-set-3 | p11-c-slow | -0.5 | 1% | [-0.505, -0.495] | 1% |  |
| 18-03-problem-set-3 | p11-c-fast | -2.5 | 1% | [-2.525, -2.475] | 1% |  |
| 18-03-problem-set-3 | p11-d-number | -0.625 | 1% | [-0.6312, -0.6188] | 1% |  |
| 18-03-problem-set-3 | p12-a-b | 1.118 | 1% | [1.107, 1.129] | 1% |  |
| 18-03-problem-set-3 | p12-b-re | -0.25 | 1% | [-0.2525, -0.2475] | 1% |  |
| 18-03-problem-set-3 | p12-b-im | 1.0897 | 0.5% | [1.084, 1.095] | 0.5% |  |
| 18-03-problem-set-3 | p12-c-gap | 2.883 | 1% | [2.854, 2.912] | 1% |  |
| 18-03-problem-set-3 | p12-c-period | 5.766 | 1% | [5.708, 5.824] | 1% |  |
| 18-03-problem-set-4 | p13-b-a | 0.5 | 0.005 | [0.495, 0.505] | 1% |  |
| 18-03-problem-set-4 | p13-b-phi | 0.7854 | 0.002 | [0.7834, 0.7874] | 0.25% |  |
| 18-03-problem-set-4 | p13-c | 4.7496 | 0.01 | [4.74, 4.76] | 0.21% |  |
| 18-03-problem-set-4 | p13-d-amp | 0.7071 | 0.002 | [0.7051, 0.7091] | 0.28% |  |
| 18-03-problem-set-4 | p13-d-x0 | 0.5 | 0.002 | [0.498, 0.502] | 0.4% |  |
| 18-03-problem-set-4 | p13-d-v0 | 0.5 | 0.002 | [0.498, 0.502] | 0.4% |  |
| 18-03-problem-set-4 | p14-a-gain | 4 | 0.02 | [3.98, 4.02] | 0.5% |  |
| 18-03-problem-set-4 | p14-a-lag | 0.7854 | 0.002 | [0.7834, 0.7874] | 0.25% |  |
| 18-03-problem-set-4 | p16-a-wr | 1.9685 | 0.002 | [1.966, 1.97] | 0.1% |  |
| 18-03-problem-set-4 | p16-a-gmax | 4.0316 | 0.005 | [4.027, 4.037] | 0.12% |  |
| 18-03-problem-set-4 | p16-b | 1.7656 | 0.002 | [1.764, 1.768] | 0.11% | d |
| 18-03-problem-set-4 | p16-c | 3.204 | 0.01 | [3.194, 3.214] | 0.31% |  |
| 18-03-problem-set-5 | p17-b-num | 20 | 0.2 | [19.8, 20.2] | 1% |  |
| 18-03-problem-set-5 | p17-c-omega | 100 | 2 | [98, 102] | 2% | e |
| 18-03-problem-set-5 | p17-c-amp | 5 | 0.1 | [4.9, 5.1] | 2% |  |
| 18-03-problem-set-5 | p17-c-lag | 0 | 0.05 | [-0.05, 0.05] | n/a | b c |
| 18-03-problem-set-5 | p18-num | 0.01103 | 0.00001 | [0.01102, 0.01104] | 0.091% | d |
| 18-03-problem-set-5 | p18-ratio | 0.999939 | 0.000002 | [0.9999, 0.9999] | 0.0002% | d |
| 18-03-problem-set-5 | p20-b-a1 | 1 | 0.005 | [0.995, 1.005] | 0.5% |  |
| 18-03-problem-set-5 | p20-b-a2 | 0 | 0.005 | [-0.005, 0.005] | n/a | b c |
| 18-03-problem-set-5 | p20-b-a3 | -0.333 | 0.002 | [-0.335, -0.331] | 0.6% |  |
| 18-03-problem-set-5 | p20-b-a5 | 0.2 | 0.002 | [0.198, 0.202] | 1% |  |
| 18-03-problem-set-5 | p20-c-rms | 0.342 | 0.002 | [0.34, 0.344] | 0.58% |  |
| 18-03-problem-set-5 | p21-a-cos | -1.732 | 0.003 | [-1.735, -1.729] | 0.17% |  |
| 18-03-problem-set-5 | p21-a-sin | 1 | 0.003 | [0.997, 1.003] | 0.3% |  |
| 18-03-problem-set-5 | p21-b-b1 | 0 | 0.002 | [-0.002, 0.002] | n/a | b c |
| 18-03-problem-set-5 | p21-b-b2 | 1.273 | 0.003 | [1.27, 1.276] | 0.24% |  |
| 18-03-problem-set-5 | p21-b-b4 | 0 | 0.002 | [-0.002, 0.002] | n/a | b c |
| 18-03-problem-set-5 | p21-b-b6 | 0.424 | 0.002 | [0.422, 0.426] | 0.47% |  |
| 18-03-problem-set-5 | p21-c-cos1 | -0.900 | 0.002 | [-0.902, -0.898] | 0.22% |  |
| 18-03-problem-set-5 | p21-c-sin3 | -0.300 | 0.002 | [-0.302, -0.298] | 0.67% |  |
| 18-03-problem-set-5 | p21-c-cos5 | 0.180 | 0.002 | [0.178, 0.182] | 1.1% |  |
| 18-03-problem-set-5 | p21-d-const | 1 | 0.003 | [0.997, 1.003] | 0.3% |  |
| 18-03-problem-set-5 | p21-d-sin | 2.546 | 0.005 | [2.541, 2.551] | 0.2% |  |
| 18-03-problem-set-5 | p21-d-period | 1 | 0.003 | [0.997, 1.003] | 0.3% |  |
| 18-03-problem-set-5 | p21-e-cos3 | -0.333 | 0.002 | [-0.335, -0.331] | 0.6% |  |
| 18-03-problem-set-5 | p21-f-sin1 | 1.273 | 0.003 | [1.27, 1.276] | 0.24% |  |
| 18-03-problem-set-5 | p21-f-sin3 | -0.141 | 0.002 | [-0.143, -0.139] | 1.4% |  |
| 18-03-problem-set-6 | p22-c-below | -6.70 | 0.03 | [-6.73, -6.67] | 0.45% |  |
| 18-03-problem-set-6 | p22-c-above | 6.06 | 0.03 | [6.03, 6.09] | 0.5% |  |
| 18-03-problem-set-6 | p22-e-period | 12.57 | 0.01 | [12.56, 12.58] | 0.08% | d |
| 18-03-problem-set-7 | p27-b-ii-num | 0.736 | 0.004 | [0.732, 0.74] | 0.54% |  |
| 18-03-problem-set-8 | p29-b-ii-re | -0.5 | 0.005 | [-0.505, -0.495] | 1% |  |
| 18-03-problem-set-8 | p29-b-ii-im | 1.5 | 0.005 | [1.495, 1.505] | 0.33% |  |
| 18-03-problem-set-8 | p29-b-iii | 1.414 | 0.005 | [1.409, 1.419] | 0.35% |  |
| 18-03-problem-set-8 | p29-b-iv-height | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-03-problem-set-8 | p32-b-second | -2.5 | 0.005 | [-2.505, -2.495] | 0.2% |  |
| 18-03-problem-set-8 | p32-c-slope1 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-03-problem-set-8 | p32-c-slope2 | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-03-problem-set-8 | p32-d-zero | -0.549 | 0.003 | [-0.552, -0.546] | 0.55% |  |
| 18-03-problem-set-8 | p32-f-time | 2.094 | 0.003 | [2.091, 2.097] | 0.14% | d |
| 18-03-problem-set-8 | p33-a-l1 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-03-problem-set-8 | p33-a-v1 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-03-problem-set-8 | p33-a-l2 | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-03-problem-set-8 | p33-a-v2 | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-03-problem-set-8 | p33-b-lneg | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-03-problem-set-8 | p33-b-vneg | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-03-problem-set-8 | p33-b-lpos | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-03-problem-set-8 | p33-b-vpos | 4 | 0.02 | [3.98, 4.02] | 0.5% |  |
| 18-03-problem-set-9 | p34-re | 0.5 | 0.005 | [0.495, 0.505] | 1% |  |
| 18-03-problem-set-9 | p34-im | 1.5 | 0.005 | [1.495, 1.505] | 0.33% |  |
| 18-03-problem-set-9 | p34-next | 2.094 | 0.002 | [2.092, 2.096] | 0.096% | d |
| 18-03-problem-set-9 | p34-pos | -2.850 | 0.002 | [-2.852, -2.848] | 0.07% |  |
| 18-03-problem-set-9 | p35-b-det | 3 | 0.001 | [2.999, 3.001] | 0.033% |  |
| 18-03-problem-set-9 | p35-b-tr | 1 | 0.001 | [0.999, 1.001] | 0.1% |  |
| 18-03-problem-set-9 | p35-b-low | -4.464 | 0.002 | [-4.466, -4.462] | 0.045% | d |
| 18-03-problem-set-9 | p35-b-high | 2.464 | 0.002 | [2.462, 2.466] | 0.081% | d |
| 18-03-problem-set-9 | p36-c-p | 4 | 0.001 | [3.999, 4.001] | 0.025% |  |
| 18-03-problem-set-9 | p36-c-q | -1 | 0.001 | [-1.001, -0.999] | 0.1% |  |
| 18-03-problem-set-9 | p36-c-r | 2 | 0.001 | [1.999, 2.001] | 0.05% |  |
| 18-03-problem-set-9 | p36-c-s | 1 | 0.001 | [0.999, 1.001] | 0.1% |  |

### 8.033

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-033-problem-set-1 | p1-c | 2.27e8 | 2% | [2.225e+08, 2.315e+08] | 2% |  |
| 8-033-problem-set-1 | p2-a | 0.0338 | 2% | [0.03312, 0.03448] | 2% |  |
| 8-033-problem-set-1 | p2-b | 5.95e-3 | 2% | [0.005831, 0.006069] | 2% |  |
| 8-033-problem-set-1 | p2-c | 2.91e-10 | 2% | [2.852e-10, 2.968e-10] | 2% |  |
| 8-033-problem-set-1 | p2-d | 3.33e-5 | 2% | [3.263e-05, 3.397e-05] | 2% |  |
| 8-033-problem-set-1 | p5-loss | 3 | 1% | [2.97, 3.03] | 1% |  |
| 8-033-problem-set-1 | pa-limit | 1.06e-15 | 2% | [1.039e-15, 1.081e-15] | 2% |  |
| 8-033-problem-set-2 | p4-n | 140 | 2% | [137.2, 142.8] | 2% | e |
| 8-033-problem-set-2 | p5-g01 | 0.0050375 | 0.1% | [0.005032, 0.005043] | 0.1% |  |
| 8-033-problem-set-2 | p5-g001 | 5.0e-7 | 1% | [4.95e-07, 5.05e-07] | 1% |  |
| 8-033-problem-set-2 | p5-g00001 | 5.0e-11 | 1% | [4.95e-11, 5.05e-11] | 1% |  |
| 8-033-problem-set-2 | p5-b2a | 0.125 | 1% | [0.1237, 0.1263] | 1% |  |
| 8-033-problem-set-2 | p5-b2e | 0.13397 | 0.1% | [0.1338, 0.1341] | 0.1% |  |
| 8-033-problem-set-2 | p5-b10e | 0.0050126 | 0.1% | [0.005008, 0.005018] | 0.1% |  |
| 8-033-problem-set-2 | p5-b1000a | 5.0e-7 | 1% | [4.95e-07, 5.05e-07] | 1% |  |
| 8-033-problem-set-2 | p6x-frac | 5.0e-9 | 1% | [4.95e-09, 5.05e-09] | 1% |  |
| 8-033-problem-set-2 | p8-lab | 1.0 | 1% | [0.99, 1.01] | 1% |  |
| 8-033-problem-set-2 | p8-clock | 0.8 | 1% | [0.792, 0.808] | 1% |  |
| 8-033-problem-set-2 | p8-diff | 0.2 | 2% | [0.196, 0.204] | 2% |  |
| 8-033-problem-set-2 | p9-len | 0.8 | 1% | [0.792, 0.808] | 1% |  |
| 8-033-problem-set-2 | p11-first | 0.111 | 1% | [0.1099, 0.1121] | 1% |  |
| 8-033-problem-set-2 | p11-last | 0.222 | 1% | [0.2198, 0.2242] | 1% |  |
| 8-033-problem-set-3 | p2-len-num | 0.938 | 1% | [0.9286, 0.9474] | 1% |  |
| 8-033-problem-set-3 | p2-theta-num | 32.2 | 1% | [31.88, 32.52] | 1% |  |
| 8-033-problem-set-3 | p3-tau | 0.446 | 1% | [0.4415, 0.4505] | 1% |  |
| 8-033-problem-set-3 | p4-a | -8.66 | 1% | [-8.747, -8.573] | 1% |  |
| 8-033-problem-set-3 | p4-b-x | -15 | 1% | [-15.15, -14.85] | 1% |  |
| 8-033-problem-set-3 | p4-b-t | -17.3 | 1% | [-17.47, -17.13] | 1% |  |
| 8-033-problem-set-3 | p4-c-x | 20 | 1% | [19.8, 20.2] | 1% |  |
| 8-033-problem-set-3 | p4-c-t | 17.3 | 1% | [17.13, 17.47] | 1% |  |
| 8-033-problem-set-3 | p7-beta | 0.899 | 1% | [0.89, 0.908] | 1% |  |
| 8-033-problem-set-3 | p8-s2 | 191000 | 2% | [1.872e+05, 1.948e+05] | 2% | e |
| 8-033-problem-set-3 | p8-sigma | 437 | 1% | [432.6, 441.4] | 1% | e |
| 8-033-problem-set-3 | p8-beta | 0.899 | 1% | [0.89, 0.908] | 1% |  |
| 8-033-problem-set-3 | p10-a | 2 | 1% | [1.98, 2.02] | 1% |  |
| 8-033-problem-set-3 | p10-b | 0.8 | 1% | [0.792, 0.808] | 1% |  |
| 8-033-problem-set-3 | p11-beta | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-033-problem-set-3 | p12-a | 482.901 | 0.004 | [482.9, 482.9] | 0.00083% | d |
| 8-033-problem-set-3 | p12-b | 489.387 | 0.004 | [489.4, 489.4] | 0.00082% | d |
| 8-033-problem-set-3 | p12-c | 10.8 | 2% | [10.58, 11.02] | 2% |  |
| 8-033-problem-set-3 | p13-b | 5.74e-7 | 1% | [5.683e-07, 5.797e-07] | 1% |  |
| 8-033-problem-set-3 | p14-a | 4.00 | 1% | [3.96, 4.04] | 1% |  |
| 8-033-problem-set-3 | p14-b | 2.50 | 1% | [2.475, 2.525] | 1% |  |
| 8-033-problem-set-3 | p15-n | 7 | 0.1 | [6.9, 7.1] | 1.4% |  |
| 8-033-problem-set-4 | p1-z | 0.270 | 2% | [0.2646, 0.2754] | 2% |  |
| 8-033-problem-set-4 | p2-cross | 0.035 | 10% | [0.0315, 0.0385] | 10% | c |
| 8-033-problem-set-4 | p2-beta | 0.258 | 2% | [0.2528, 0.2632] | 2% |  |
| 8-033-problem-set-4 | p2-theta | 121.6 | 1% | [120.4, 122.8] | 1% |  |
| 8-033-problem-set-4 | p3-angle | 11.46 | 1% | [11.35, 11.57] | 1% |  |
| 8-033-problem-set-4 | p3-speed | 0.609 | 1% | [0.6029, 0.6151] | 1% |  |
| 8-033-problem-set-4 | p5-x1 | -1.75 | 1% | [-1.768, -1.732] | 1% |  |
| 8-033-problem-set-4 | p5-t1 | 4.25 | 1% | [4.207, 4.293] | 1% |  |
| 8-033-problem-set-4 | p5-y2 | -2.333 | 1% | [-2.356, -2.31] | 1% |  |
| 8-033-problem-set-4 | p5-t2 | 4.417 | 1% | [4.373, 4.461] | 1% |  |
| 8-033-problem-set-4 | p6-speed | 0.8824 | 0.5% | [0.878, 0.8868] | 0.5% |  |
| 8-033-problem-set-4 | p6-vera | 10 | 1% | [9.9, 10.1] | 1% |  |
| 8-033-problem-set-4 | p6-dist | 7.5 | 1% | [7.425, 7.575] | 1% |  |
| 8-033-problem-set-4 | p6-diff | 2 | 1% | [1.98, 2.02] | 1% |  |
| 8-033-problem-set-4 | p7-vera | 8 | 1% | [7.92, 8.08] | 1% |  |
| 8-033-problem-set-4 | p7-hugo | 8 | 1% | [7.92, 8.08] | 1% |  |
| 8-033-problem-set-4 | p10-coeff | 0.556 | 1% | [0.5504, 0.5616] | 1% |  |
| 8-033-problem-set-4 | p11-d | 1.25 | 1% | [1.238, 1.262] | 1% |  |
| 8-033-problem-set-4 | p11-c | 0.8 | 1% | [0.792, 0.808] | 1% |  |
| 8-033-problem-set-5 | p1-sep | 8.0 | 2% | [7.84, 8.16] | 2% |  |
| 8-033-problem-set-5 | p1-speed | 0.882 | 1% | [0.8732, 0.8908] | 1% |  |
| 8-033-problem-set-5 | p1-ke | 1.125 | 1% | [1.114, 1.136] | 1% |  |
| 8-033-problem-set-5 | p1-angle-jim | 12.1 | 2% | [11.86, 12.34] | 2% |  |
| 8-033-problem-set-5 | p1-angle-sue | 71.5 | 2% | [70.07, 72.93] | 2% |  |
| 8-033-problem-set-5 | p1-rate | 8000 | 1% | [7920, 8080] | 1% | e |
| 8-033-problem-set-5 | p2-tonnes | 175 | 2% | [171.5, 178.5] | 2% | e |
| 8-033-problem-set-5 | p3-rate | 17.6 | 2% | [17.25, 17.95] | 2% |  |
| 8-033-problem-set-5 | p5-speed | 0.900 | 1% | [0.891, 0.909] | 1% |  |
| 8-033-problem-set-5 | p6-u | 4.83 | 1% | [4.782, 4.878] | 1% |  |
| 8-033-problem-set-5 | p6-moon | 4.63 | 1% | [4.584, 4.676] | 1% |  |
| 8-033-problem-set-5 | p6-ratio | 7.18e23 | 2% | [7.036e+23, 7.324e+23] | 2% |  |
| 8-033-problem-set-5 | p7-ratio | 5000 | 2% | [4900, 5100] | 2% | e |
| 8-033-problem-set-5 | p8-time | 30.2 | 2% | [29.6, 30.8] | 2% |  |
| 8-033-problem-set-5 | p9-angle | 28.1 | 1% | [27.82, 28.38] | 1% |  |
| 8-033-problem-set-6 | p1-fixed | 1.04e5 | 1% | [1.03e+05, 1.05e+05] | 1% |  |
| 8-033-problem-set-6 | p6-h | 6.605e-34 | 0.2% | [6.592e-34, 6.618e-34] | 0.2% |  |
| 8-033-problem-set-6 | p6-w | 2.27 | 1% | [2.247, 2.293] | 1% |  |
| 8-033-problem-set-6 | p6-cutoff | 544 | 2% | [533.1, 554.9] | 2% | e |
| 8-033-problem-set-6 | p7-trip | 6.31e-6 | 2% | [6.184e-06, 6.436e-06] | 2% |  |
| 8-033-problem-set-7 | p1-c-up | 28 | 0.1% | [27.97, 28.03] | 0.1% |  |
| 8-033-problem-set-7 | p1-c-down | 26 | 0.1% | [25.97, 26.03] | 0.1% |  |
| 8-033-problem-set-7 | p1-c-el | 10 | 0.1% | [9.99, 10.01] | 0.1% |  |
| 8-033-problem-set-7 | p3-b | 41.88 | 1% | [41.46, 42.3] | 1% |  |
| 8-033-problem-set-7 | p3-c | 4.062 | 1% | [4.021, 4.103] | 1% |  |
| 8-033-problem-set-7 | p4-recoil | 1.953e-3 | 1% | [0.001933, 0.001973] | 1% |  |
| 8-033-problem-set-7 | p4-speed | 81.3 | 1% | [80.49, 82.11] | 1% |  |
| 8-033-problem-set-7 | p5-photon | 252.7 | 1% | [250.2, 255.2] | 1% |  |
| 8-033-problem-set-7 | p5-electron | 247.3 | 1% | [244.8, 249.8] | 1% |  |
| 8-033-problem-set-7 | p5-max | 330.9 | 1% | [327.6, 334.2] | 1% |  |
| 8-033-problem-set-7 | p5-limit | 255.5 | 0.5% | [254.2, 256.8] | 0.5% |  |
| 8-033-problem-set-7 | p6-pions | 9771 | 4 | [9767, 9775] | 0.041% | e |
| 8-033-problem-set-7 | p7-fixed | 45601 | 1% | [4.514e+04, 4.606e+04] | 1% | e |
| 8-033-problem-set-7 | p7-collider | 151 | 0.3% | [150.5, 151.5] | 0.3% |  |
| 8-033-problem-set-7 | p11-angle | 53.13 | 1% | [52.6, 53.66] | 1% |  |
| 8-033-problem-set-8 | p3-b | 0.6667 | 1% | [0.66, 0.6734] | 1% |  |
| 8-033-problem-set-8 | p4-photons | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-033-problem-set-8 | p4-empty | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-033-problem-set-8 | p5-matter | 0.6667 | 1% | [0.66, 0.6734] | 1% |  |
| 8-033-problem-set-8 | p5-photons | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-033-problem-set-8 | p5-empty | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-033-problem-set-8 | p5-lcdm | 0.9641 | 0.5% | [0.9593, 0.9689] | 0.5% |  |
| 8-033-problem-set-8 | p5-gyr-matter | 9.32 | 1% | [9.227, 9.413] | 1% |  |
| 8-033-problem-set-8 | p5-gyr-photons | 6.99 | 1% | [6.92, 7.06] | 1% |  |
| 8-033-problem-set-8 | p5-gyr-empty | 13.98 | 1% | [13.84, 14.12] | 1% |  |
| 8-033-problem-set-8 | p5-gyr-lcdm | 13.48 | 1% | [13.35, 13.61] | 1% |  |
| 8-033-problem-set-8 | p5-closed | 13.93 | 0.5% | [13.86, 14] | 0.5% |  |
| 8-033-problem-set-8 | p5-z6 | 0.918 | 1% | [0.9088, 0.9272] | 1% |  |
| 8-033-problem-set-8 | p5-z1000 | 0.537 | 1% | [0.5316, 0.5424] | 1% |  |
| 8-033-problem-set-8 | p6-h | 0.7 | 0.05 | [0.65, 0.75] | 7.1% | c |
| 8-033-problem-set-8 | p6-lambda | 0.725 | 0.05 | [0.675, 0.775] | 6.9% | c |
| 8-033-problem-set-8 | p6-baryon | 0.045 | 0.01 | [0.035, 0.055] | 22% | c |
| 8-033-problem-set-8 | p6-dark | 0.23 | 0.04 | [0.19, 0.27] | 17% | c |
| 8-033-problem-set-8 | p7-amin | 0.598 | 1% | [0.592, 0.604] | 1% |  |
| 8-033-problem-set-8 | p11-s | 2.618 | 1% | [2.592, 2.644] | 1% |  |
| 8-033-problem-set-8 | p11-v | 0.1309 | 1% | [0.1296, 0.1322] | 1% |  |
| 8-033-problem-set-8 | p11-h | 0.05 | 1% | [0.0495, 0.0505] | 1% |  |
| 8-033-problem-set-8 | p11-vfar | 0.785 | 1% | [0.7772, 0.7929] | 1% |  |
| 8-033-problem-set-8 | p12-forever | 0.0419 | 2% | [0.04106, 0.04274] | 2% |  |
| 8-033-problem-set-9 | p4-four | 4.591 | 0.5% | [4.568, 4.614] | 0.5% |  |
| 8-033-problem-set-9 | p5-far | 4.586 | 0.5% | [4.563, 4.609] | 0.5% |  |
| 8-033-problem-set-9 | p6-ground | 6.953 | 0.5% | [6.918, 6.988] | 0.5% |  |
| 8-033-problem-set-9 | p6-ve | 465.1 | 0.5% | [462.8, 467.4] | 0.5% |  |
| 8-033-problem-set-9 | p6-ground-speed | 1.203 | 1% | [1.191, 1.215] | 1% |  |
| 8-033-problem-set-9 | p6-v | 3.873 | 0.5% | [3.854, 3.892] | 0.5% |  |
| 8-033-problem-set-9 | p6-period | 11.97 | 0.5% | [11.91, 12.03] | 0.5% |  |
| 8-033-problem-set-9 | p6-sat | 1.669 | 0.5% | [1.661, 1.677] | 0.5% |  |
| 8-033-problem-set-9 | p6-gain | 45.66 | 0.5% | [45.43, 45.89] | 0.5% |  |
| 8-033-problem-set-9 | p6-loss | 7.107 | 0.5% | [7.071, 7.143] | 0.5% |  |
| 8-033-problem-set-9 | p6-net | 38.55 | 0.5% | [38.36, 38.74] | 0.5% |  |
| 8-033-problem-set-9 | p6-km | 11.56 | 0.5% | [11.5, 11.62] | 0.5% |  |
| 8-033-problem-set-9 | p7-water | 1.350 | 1% | [1.337, 1.364] | 1% |  |
| 8-033-problem-set-9 | p8-rs1 | 2.970 | 0.5% | [2.955, 2.985] | 0.5% |  |
| 8-033-problem-set-9 | p8-rs2 | 2.970 | 0.5% | [2.955, 2.985] | 0.5% |  |
| 8-033-problem-set-9 | p8-coef | 8.803 | 0.5% | [8.759, 8.847] | 0.5% |  |
| 8-033-problem-set-9 | p8-p2 | 88.03 | 0.5% | [87.59, 88.47] | 0.5% |  |
| 8-033-problem-set-9 | p9-seconds | 26.42 | 1% | [26.16, 26.68] | 1% |  |
| 8-033-problem-set-9 | p10-max | 6 | 0.5% | [5.97, 6.03] | 0.5% |  |
| 8-033-problem-set-9 | p11-r | 9550 | 0.1% | [9540, 9560] | 0.1% | e |
| 8-033-problem-set-9 | p12-six | 0.7071 | 0.5% | [0.7036, 0.7106] | 0.5% |  |
| 8-033-problem-set-9 | p12-years | 5.858 | 0.5% | [5.829, 5.887] | 0.5% |  |
| 8-033-problem-set-9 | p12-tourist-r | 4 | 0.5% | [3.98, 4.02] | 0.5% |  |
| 8-033-problem-set-9 | p12-tourist-rate | 0.5 | 0.5% | [0.4975, 0.5025] | 0.5% |  |
| 8-033-problem-set-9 | ph-time | 33.02 | 0.5% | [32.85, 33.19] | 0.5% |  |
| 8-033-problem-set-9 | ph-delay | 45.62 | 1% | [45.16, 46.08] | 1% |  |

### 18.06

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 18-06-problem-set-1* | p1-a-x | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-1* | p1-a-y | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-1* | p1-b-1 | 7 | 0.01 | [6.99, 7.01] | 0.14% |  |
| 18-06-problem-set-1* | p1-b-2 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-1* | p1-c-a | 1.5 | 0.01 | [1.49, 1.51] | 0.67% |  |
| 18-06-problem-set-1* | p2-a-1 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-1* | p2-a-2 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-1* | p2-a-3 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-1* | p2-b-alpha | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-1* | p2-b-beta | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-1* | p2-c-b3 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-1* | p3-a-l21 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-1* | p3-a-l31 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-1* | p3-a-l32 | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-1* | p3-a-p2 | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-06-problem-set-1* | p3-a-p3 | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-1* | p3-b-c3 | 8 | 0.01 | [7.99, 8.01] | 0.12% |  |
| 18-06-problem-set-1* | p3-b-x | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-1* | p3-b-y | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-1* | p3-b-z | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-1* | p3-c-q | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-06-problem-set-1* | p3-c-s | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-1* | p4-a | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-06-problem-set-1* | p4-b-1 | -4 | 0.01 | [-4.01, -3.99] | 0.25% |  |
| 18-06-problem-set-1* | p4-b-2 | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 18-06-problem-set-1* | p4-c-1 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-1* | p4-c-2 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-1* | p5-a-ab | 12 | 0.01 | [11.99, 12.01] | 0.083% |  |
| 18-06-problem-set-1* | p5-a-ba | 18 | 0.01 | [17.99, 18.01] | 0.056% |  |
| 18-06-problem-set-1* | p5-b-ab | 10 | 0.01 | [9.99, 10.01] | 0.1% |  |
| 18-06-problem-set-1* | p5-b-ba | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-06-problem-set-1* | p5-c | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-1* | p5-e | 6 | 0.01 | [5.99, 6.01] | 0.17% |  |
| 18-06-problem-set-1* | p6-a | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-1* | p6-c-t | 1.5 | 0.01 | [1.49, 1.51] | 0.67% |  |
| 18-06-problem-set-1* | p6-c-x2 | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-10 | p1-a-len | 10 | 0.01 | [9.99, 10.01] | 0.1% |  |
| 18-06-problem-set-10 | p1-a-re | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-10 | p1-a-im | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-10 | p1-b-small | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-10 | p2-a-y0 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-10 | p2-a-y1re | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-10 | p2-a-y1im | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-10 | p2-a-y3im | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-06-problem-set-10 | p2-b | 24 | 0.01 | [23.99, 24.01] | 0.042% |  |
| 18-06-problem-set-10 | p3-a-re | -0.7071 | 0.01 | [-0.7171, -0.6971] | 1.4% |  |
| 18-06-problem-set-10 | p3-b | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-10 | p3-c-ratio | 8192 | 0.01 | [8192, 8192] | 0.00012% | d |
| 18-06-problem-set-10 | p4-a-11 | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-10 | p4-a-12 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-10 | p4-a-21 | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 18-06-problem-set-10 | p4-a-22 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-10 | p5-a-lam | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-10 | p5-a-num | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-10 | p5-b | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-10 | p5-c-k1 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-10 | p5-c-k3 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-10 | p6-a-off | -30 | 0.01 | [-30.01, -29.99] | 0.033% |  |
| 18-06-problem-set-10 | p6-a-s1 | 10 | 0.01 | [9.99, 10.01] | 0.1% |  |
| 18-06-problem-set-10 | p6-a-s2 | 5 | 0.01 | [4.99, 5.01] | 0.2% |  |
| 18-06-problem-set-10 | p6-c | 100 | 0.01 | [99.99, 100] | 0.01% |  |
| 18-06-problem-set-10 | p7-b-null | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-10 | p7-b-left | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-2* | p1-a-11 | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-2* | p1-a-12 | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-2* | p1-a-23 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-2* | p1-b | -5 | 0.01 | [-5.01, -4.99] | 0.2% |  |
| 18-06-problem-set-2* | p1-c-t | 2.5 | 0.01 | [2.49, 2.51] | 0.4% |  |
| 18-06-problem-set-2* | p2-a-21 | -4 | 0.01 | [-4.01, -3.99] | 0.25% |  |
| 18-06-problem-set-2* | p2-a-22 | 5 | 0.01 | [4.99, 5.01] | 0.2% |  |
| 18-06-problem-set-2* | p2-b-11 | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-2* | p2-b-21 | -7 | 0.01 | [-7.01, -6.99] | 0.14% |  |
| 18-06-problem-set-2* | p3-a-l31 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-2* | p3-a-l32 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-2* | p3-a-piv | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-2* | p3-b-num | 5 | 0.01 | [4.99, 5.01] | 0.2% |  |
| 18-06-problem-set-2* | p3-c | 0.3333 | 0.01 | [0.3233, 0.3433] | 3% |  |
| 18-06-problem-set-2* | p3-d-c3 | 8 | 0.01 | [7.99, 8.01] | 0.12% |  |
| 18-06-problem-set-2* | p3-d-x2 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-2* | p4-a | 5017 | 1 | [5016, 5018] | 0.02% | d e |
| 18-06-problem-set-2* | p4-b-t | 9 | 0.01 | [8.99, 9.01] | 0.11% |  |
| 18-06-problem-set-2* | p4-b-k | 1000 | 1 | [999, 1001] | 0.1% | e |
| 18-06-problem-set-2* | p5-a-l21 | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-2* | p5-a-u23 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-2* | p5-b-k | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-2* | p5-b-inv | 10 | 0.01 | [9.99, 10.01] | 0.1% |  |
| 18-06-problem-set-2* | p6-a-12 | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-2* | p6-a-23 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-2* | p6-a-tr | 11 | 0.01 | [10.99, 11.01] | 0.091% |  |
| 18-06-problem-set-2* | p7-b-s | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-3* | p2-a-x2 | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-3* | p2-a-x3 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-3* | p2-c-x1 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-3* | p2-c-x2 | 5 | 0.01 | [4.99, 5.01] | 0.2% |  |
| 18-06-problem-set-3* | p3-a-piv | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-3* | p3-a-rank | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-3* | p3-b-41 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-3* | p3-b-43 | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-3* | p3-b-51 | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-06-problem-set-3* | p3-b-53 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-3* | p3-d-wide | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-3* | p3-d-tall | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 18-06-problem-set-3* | p4-b-x1 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-3* | p4-b-x3 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-3* | p4-c-x1 | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-3* | p4-c-x3 | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 18-06-problem-set-3* | p5-a-q | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-3* | p5-b-x1 | 6 | 0.01 | [5.99, 6.01] | 0.17% |  |
| 18-06-problem-set-3* | p5-c-rank | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-3* | p6-a-12 | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-3* | p6-a-14 | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-3* | p6-a-24 | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-3* | p6-b-rank | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-3* | p6-b-first | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-4* | p1-b-c1 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-4* | p1-b-c3 | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-06-problem-set-4* | p2-a | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-4* | p2-c-1 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-4* | p2-c-4 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-4* | p3-c-hi | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-4* | p3-c-lo | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-4* | p4-a-c | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-4* | p4-a-row | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-4* | p4-a-n | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-4* | p4-a-left | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-4* | p4-b-s | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-4* | p4-b-t | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-4* | p4-d-1 | 7 | 0.01 | [6.99, 7.01] | 0.14% |  |
| 18-06-problem-set-4* | p4-d-2 | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-4* | p5-a-n | 5 | 0.01 | [4.99, 5.01] | 0.2% |  |
| 18-06-problem-set-4* | p5-a-left | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-4* | p6-a-p | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-4* | p6-a-q | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-6* | p1-a-x | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-6* | p1-a-e2 | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-06-problem-set-6* | p1-b-23 | 0.4444 | 0.01 | [0.4344, 0.4544] | 2.3% |  |
| 18-06-problem-set-6* | p1-b-11 | 0.1111 | 0.01 | [0.1011, 0.1211] | 9% | c |
| 18-06-problem-set-6* | p2-a-x1 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-6* | p2-a-x2 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-6* | p2-a-e | 24 | 0.01 | [23.99, 24.01] | 0.042% |  |
| 18-06-problem-set-6* | p2-b-11 | 0.8333 | 0.01 | [0.8233, 0.8433] | 1.2% |  |
| 18-06-problem-set-6* | p2-b-12 | -0.3333 | 0.01 | [-0.3433, -0.3233] | 3% |  |
| 18-06-problem-set-6* | p3-a-ata | 6 | 0.01 | [5.99, 6.01] | 0.17% |  |
| 18-06-problem-set-6* | p3-a-atb | 7 | 0.01 | [6.99, 7.01] | 0.14% |  |
| 18-06-problem-set-6* | p3-a-c | 1.1 | 0.01 | [1.09, 1.11] | 0.91% |  |
| 18-06-problem-set-6* | p3-a-d | 0.8 | 0.01 | [0.79, 0.81] | 1.2% |  |
| 18-06-problem-set-6* | p3-b-e4 | -0.7 | 0.01 | [-0.71, -0.69] | 1.4% |  |
| 18-06-problem-set-6* | p3-b-ee | 1.8 | 0.01 | [1.79, 1.81] | 0.56% |  |
| 18-06-problem-set-6* | p3-c-e4 | 2.3 | 0.01 | [2.29, 2.31] | 0.43% |  |
| 18-06-problem-set-6* | p4-a-12 | -0.48 | 0.01 | [-0.49, -0.47] | 2.1% |  |
| 18-06-problem-set-6* | p4-b-12 | 0.96 | 0.01 | [0.95, 0.97] | 1% |  |
| 18-06-problem-set-6* | p4-b-rw | 1.52 | 0.01 | [1.51, 1.53] | 0.66% |  |
| 18-06-problem-set-6* | p5-a-b1 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-6* | p5-a-c4 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-6* | p5-a-cl | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-6* | p5-b-12 | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-6* | p5-b-23 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-6* | p5-c-x2 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-6* | p5-c-p4 | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-6* | p5-c-err | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-6* | p6-a | 0.4286 | 0.01 | [0.4186, 0.4386] | 2.3% |  |
| 18-06-problem-set-6* | p6-b | -6 | 0.01 | [-6.01, -5.99] | 0.17% |  |
| 18-06-problem-set-7 | p1-a | -162 | 0.01 | [-162, -162] | 0.0062% |  |
| 18-06-problem-set-7 | p1-b | 0.25 | 0.005 | [0.245, 0.255] | 2% |  |
| 18-06-problem-set-7 | p1-c | -6 | 0.01 | [-6.01, -5.99] | 0.17% |  |
| 18-06-problem-set-7 | p2-a | 8 | 0.01 | [7.99, 8.01] | 0.12% |  |
| 18-06-problem-set-7 | p2-b | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-7 | p2-c | 6 | 0.01 | [5.99, 6.01] | 0.17% |  |
| 18-06-problem-set-7 | p3-a | 15 | 0.01 | [14.99, 15.01] | 0.067% |  |
| 18-06-problem-set-7 | p3-b | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-7 | p4-a | 5 | 0.01 | [4.99, 5.01] | 0.2% |  |
| 18-06-problem-set-7 | p4-b | -0.6 | 0.005 | [-0.605, -0.595] | 0.83% |  |
| 18-06-problem-set-7 | p4-c-det | 10 | 0.01 | [9.99, 10.01] | 0.1% |  |
| 18-06-problem-set-7 | p4-c-x | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-7 | p5-a | 10.5 | 0.01 | [10.49, 10.51] | 0.095% |  |
| 18-06-problem-set-7 | p5-b | 16 | 0.01 | [15.99, 16.01] | 0.062% |  |
| 18-06-problem-set-7 | p5-c | 48 | 0.01 | [47.99, 48.01] | 0.021% |  |
| 18-06-problem-set-7 | p6-a-1 | 6 | 0.01 | [5.99, 6.01] | 0.17% |  |
| 18-06-problem-set-7 | p6-a-2 | 5 | 0.01 | [4.99, 5.01] | 0.2% |  |
| 18-06-problem-set-7 | p6-a-3 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-7 | p6-b | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-7 | p6-c | -4 | 0.01 | [-4.01, -3.99] | 0.25% |  |
| 18-06-problem-set-7 | p6-d-t | 0.5 | 0.005 | [0.495, 0.505] | 1% |  |
| 18-06-problem-set-7 | p7-a-big | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-7 | p7-a-small | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-7 | p7-c | 582 | 0.01 | [582, 582] | 0.0017% |  |
| 18-06-problem-set-7 | p8-a | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-7 | p8-b | 527345 | 0.01 | [5.273e+05, 5.273e+05] | 1.9e-06% | d |
| 18-06-problem-set-7 | p8-c-geo | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-8 | p1-a-big | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-8 | p1-a-small | -4 | 0.01 | [-4.01, -3.99] | 0.25% |  |
| 18-06-problem-set-8 | p1-b-c2 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-8 | p1-c-t | 0.4621 | 0.005 | [0.4571, 0.4671] | 1.1% |  |
| 18-06-problem-set-8 | p1-c-max | 0.9449 | 0.005 | [0.9399, 0.9499] | 0.53% |  |
| 18-06-problem-set-8 | p2-a | 6 | 0.01 | [5.99, 6.01] | 0.17% |  |
| 18-06-problem-set-8 | p2-c-re | -2.5 | 0.01 | [-2.51, -2.49] | 0.4% |  |
| 18-06-problem-set-8 | p2-c-im | 2.5 | 0.01 | [2.49, 2.51] | 0.4% |  |
| 18-06-problem-set-8 | p3-c | 6.2451 | 0.01 | [6.235, 6.255] | 0.16% |  |
| 18-06-problem-set-8 | p3-d-geo | 0.3333 | 0.005 | [0.3283, 0.3383] | 1.5% |  |
| 18-06-problem-set-8 | p4-a-11 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-8 | p4-a-13 | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 18-06-problem-set-8 | p4-b | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-8 | p4-c | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-8 | p5-a-lam | 0.5 | 0.005 | [0.495, 0.505] | 1% |  |
| 18-06-problem-set-8 | p5-b | 600 | 0.01 | [600, 600] | 0.0017% |  |
| 18-06-problem-set-8 | p5-d | 6 | 0.01 | [5.99, 6.01] | 0.17% |  |
| 18-06-problem-set-8 | p6-b-big | 0.5 | 0.005 | [0.495, 0.505] | 1% |  |
| 18-06-problem-set-8 | p6-b-small | 0.2 | 0.005 | [0.195, 0.205] | 2.5% |  |
| 18-06-problem-set-8 | p6-c-2 | 600 | 0.01 | [600, 600] | 0.0017% |  |
| 18-06-problem-set-8 | p6-c-3 | 900 | 0.01 | [900, 900] | 0.0011% |  |
| 18-06-problem-set-8 | p7-a-3 | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 18-06-problem-set-8 | p7-a-4 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 18-06-problem-set-8 | p7-b-1 | 1.2732 | 0.01 | [1.263, 1.283] | 0.79% |  |
| 18-06-problem-set-8 | p7-b-3 | 0.4244 | 0.005 | [0.4194, 0.4294] | 1.2% |  |
| 18-06-problem-set-9 | p1-a-big | 7 | 0.01 | [6.99, 7.01] | 0.14% |  |
| 18-06-problem-set-9 | p1-a-small | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-06-problem-set-9 | p1-b | 0.4 | 0.01 | [0.39, 0.41] | 2.5% |  |
| 18-06-problem-set-9 | p1-c | 148 | 0.01 | [148, 148] | 0.0068% |  |
| 18-06-problem-set-9 | p1-d-pivot | -4.2 | 0.01 | [-4.21, -4.19] | 0.24% |  |
| 18-06-problem-set-9 | p2-d | 0.6 | 0.01 | [0.59, 0.61] | 1.7% |  |
| 18-06-problem-set-9 | p3-a-2 | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 18-06-problem-set-9 | p3-a-3 | 9.33333 | 0.01 | [9.323, 9.343] | 0.11% |  |
| 18-06-problem-set-9 | p3-b-count | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-9 | p3-b-prod | -56 | 0.01 | [-56.01, -55.99] | 0.018% |  |
| 18-06-problem-set-9 | p3-c | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-9 | p4-b | 2.12132 | 0.01 | [2.111, 2.131] | 0.47% |  |
| 18-06-problem-set-9 | p4-d | 0.6 | 0.01 | [0.59, 0.61] | 1.7% |  |
| 18-06-problem-set-9 | p5-a | 9 | 0.01 | [8.99, 9.01] | 0.11% |  |
| 18-06-problem-set-9 | p5-b-m | 1.5 | 0.01 | [1.49, 1.51] | 0.67% |  |
| 18-06-problem-set-9 | p5-b-p | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-9 | p5-c-val | -16 | 0.01 | [-16.01, -15.99] | 0.062% |  |
| 18-06-problem-set-9 | p6-a-big | 16 | 0.01 | [15.99, 16.01] | 0.062% |  |
| 18-06-problem-set-9 | p6-a-small | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 18-06-problem-set-9 | p6-b-major | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-9 | p6-b-minor | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 18-06-problem-set-9 | p6-d | 6.28319 | 0.01 | [6.273, 6.293] | 0.16% |  |
| 18-06-problem-set-9 | p7-a | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 18-06-problem-set-9 | p7-b-fxx | 12 | 0.01 | [11.99, 12.01] | 0.083% |  |
| 18-06-problem-set-9 | p7-b-det | 36 | 0.01 | [35.99, 36.01] | 0.028% |  |
| 18-06-problem-set-9 | p7-b-val | -4 | 0.01 | [-4.01, -3.99] | 0.25% |  |

### 8.04

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-04-problem-set-1 | p1-b50 | 0.00751 | 2% | [0.00736, 0.00766] | 2% |  |
| 8-04-problem-set-1 | p1-b1pm | 0.0531 | 2% | [0.05204, 0.05416] | 2% |  |
| 8-04-problem-set-1 | p1-b1fm | 1.68 | 2% | [1.646, 1.714] | 2% |  |
| 8-04-problem-set-1 | p1-time | 1.31e-11 | 2% | [1.284e-11, 1.336e-11] | 2% |  |
| 8-04-problem-set-1 | p3-car | 1.5e-38 | 2% | [1.47e-38, 1.53e-38] | 2% |  |
| 8-04-problem-set-1 | p3-marble | 6.6e-31 | 2% | [6.468e-31, 6.732e-31] | 2% |  |
| 8-04-problem-set-1 | p3-smoke | 5.92e-15 | 2% | [5.802e-15, 6.038e-15] | 2% |  |
| 8-04-problem-set-1 | p3-rb | 2.70e-8 | 2% | [2.646e-08, 2.754e-08] | 2% |  |
| 8-04-problem-set-1 | p3-e400 | 3.09 | 2% | [3.028, 3.152] | 2% |  |
| 8-04-problem-set-1 | p3-e700 | 1.76 | 2% | [1.725, 1.795] | 2% |  |
| 8-04-problem-set-1 | p3-oven | 1.82e26 | 2% | [1.784e+26, 1.856e+26] | 2% |  |
| 8-04-problem-set-1 | p3-laser | 3.20e16 | 2% | [3.136e+16, 3.264e+16] | 2% |  |
| 8-04-problem-set-1 | p3-phone | 4.46e23 | 2% | [4.371e+23, 4.549e+23] | 2% |  |
| 8-04-problem-set-1 | p3-water | 4.85e27 | 2% | [4.753e+27, 4.947e+27] | 2% |  |
| 8-04-problem-set-1 | p6-a | 0.986 | 1% | [0.9761, 0.9959] | 1% |  |
| 8-04-problem-set-1 | p6-b | 0.154 | 1% | [0.1525, 0.1555] | 1% |  |
| 8-04-problem-set-1 | p6-c | 0.64 | 1% | [0.6336, 0.6464] | 1% |  |
| 8-04-problem-set-1 | p7-a | 0.333 | 1% | [0.3297, 0.3363] | 1% |  |
| 8-04-problem-set-1 | p7-b | 0.941 | 1% | [0.9316, 0.9504] | 1% |  |
| 8-04-problem-set-10 | p3-p12 | 0.667 | 1% | [0.6603, 0.6737] | 1% |  |
| 8-04-problem-set-10 | p3-pz | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-04-problem-set-10 | p3-l2 | 10 | 1% | [9.9, 10.1] | 1% |  |
| 8-04-problem-set-10 | p3-lz | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 8-04-problem-set-10 | p3-dl2 | 2.83 | 1% | [2.802, 2.858] | 1% |  |
| 8-04-problem-set-10 | p3-dlz | 2 | 1% | [1.98, 2.02] | 1% |  |
| 8-04-problem-set-10 | p4-count | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 8-04-problem-set-10 | p4-z2 | -0.102 | 2% | [-0.104, -0.09996] | 2% |  |
| 8-04-problem-set-10 | p5-int | -5.95 | 1% | [-6.01, -5.891] | 1% |  |
| 8-04-problem-set-10 | p6-kms | 2188 | 1% | [2166, 2210] | 1% | e |
| 8-04-problem-set-10 | p7-pnum | 9.0e-15 | 2% | [8.82e-15, 9.18e-15] | 2% |  |
| 8-04-problem-set-10 | p7-ps1 | -6.80 | 1% | [-6.868, -6.732] | 1% |  |
| 8-04-problem-set-10 | p7-size | 2 | 1% | [1.98, 2.02] | 1% |  |
| 8-04-problem-set-2 | p1-delta | 12.26 | 1% | [12.14, 12.38] | 1% |  |
| 8-04-problem-set-2 | p1-ell | 2426 | 1% | [2402, 2450] | 1% | e |
| 8-04-problem-set-2 | p1-e | 0.7227 | 1% | [0.7155, 0.7299] | 1% |  |
| 8-04-problem-set-2 | p1-beta1 | 0.7071 | 1% | [0.7, 0.7142] | 1% |  |
| 8-04-problem-set-2 | p1-lam-e | 1.240 | 1% | [1.228, 1.252] | 1% |  |
| 8-04-problem-set-2 | p1-lam-p | 0.1771 | 1% | [0.1753, 0.1789] | 1% |  |
| 8-04-problem-set-2 | p1-kmax | 214.6 | 1% | [212.5, 216.7] | 1% |  |
| 8-04-problem-set-2 | p1-beta3 | 0.7100 | 0.3% | [0.7079, 0.7121] | 0.3% |  |
| 8-04-problem-set-2 | p2-a0-fm | 52918 | 1% | [5.239e+04, 5.345e+04] | 1% | e |
| 8-04-problem-set-2 | p2-lc | 386.2 | 1% | [382.3, 390.1] | 1% |  |
| 8-04-problem-set-2 | p2-r0 | 2.818 | 1% | [2.79, 2.846] | 1% |  |
| 8-04-problem-set-2 | p4-fmax | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-04-problem-set-2 | p5-g2 | -1 | 1% | [-1.01, -0.99] | 1% |  |
| 8-04-problem-set-4 | p1-atom | 1.59e-13 | 5% | [1.51e-13, 1.67e-13] | 5% |  |
| 8-04-problem-set-4 | p1-cm | 1590 | 5% | [1510, 1670] | 5% | e |
| 8-04-problem-set-4 | p4-prob | 0.288 | 1% | [0.2851, 0.2909] | 1% |  |
| 8-04-problem-set-5 | p3-prod | 0.568 | 1% | [0.5623, 0.5737] | 1% |  |
| 8-04-problem-set-5 | p5-delta | 60 | 1% | [59.4, 60.6] | 1% |  |
| 8-04-problem-set-5 | p6-z1 | 1.571 | 1% | [1.555, 1.587] | 1% |  |
| 8-04-problem-set-5 | p6-z3 | 7.854 | 0.5% | [7.815, 7.893] | 0.5% |  |
| 8-04-problem-set-5 | p6-e3 | 0.423 | 2% | [0.4145, 0.4315] | 2% |  |
| 8-04-problem-set-5 | p7-xi | 0.860 | 1% | [0.8514, 0.8686] | 1% |  |
| 8-04-problem-set-5 | p7-v0 | 23.7 | 1% | [23.46, 23.94] | 1% |  |
| 8-04-problem-set-6 | p1-prob1 | 0 | 0.001 | [-0.001, 0.001] | n/a | b c |
| 8-04-problem-set-6 | p1-prob2 | 0.3333 | 1% | [0.33, 0.3366] | 1% |  |
| 8-04-problem-set-6 | p1-prob3 | 0.6667 | 1% | [0.66, 0.6734] | 1% |  |
| 8-04-problem-set-6 | p3-count | 3 | 0.1 | [2.9, 3.1] | 3.3% |  |
| 8-04-problem-set-6 | p3-next | 65 | 0.1 | [64.9, 65.1] | 0.15% |  |
| 8-04-problem-set-6 | p4-n | 2 | 0.1 | [1.9, 2.1] | 5% |  |
| 8-04-problem-set-6 | p4-e1 | 0.18436 | 0.0001 | [0.1843, 0.1845] | 0.054% | d |
| 8-04-problem-set-6 | p4-e2 | 0.70747 | 0.0001 | [0.7074, 0.7076] | 0.014% | d |
| 8-04-problem-set-6 | p5-quartic | 0.668 | 0.002 | [0.666, 0.67] | 0.3% |  |
| 8-04-problem-set-6 | p5-e3 | 1.2065 | 0.001 | [1.206, 1.207] | 0.083% | d |
| 8-04-problem-set-6 | p5-e4 | 1.5625 | 0.001 | [1.562, 1.563] | 0.064% | d |
| 8-04-problem-set-6 | p5-e9 | 5.557 | 0.005 | [5.552, 5.562] | 0.09% |  |
| 8-04-problem-set-6 | p5-ratio | 0.960 | 0.5% | [0.9552, 0.9648] | 0.5% |  |
| 8-04-problem-set-6 | p5-pred | 0.952 | 0.005 | [0.947, 0.957] | 0.53% |  |
| 8-04-problem-set-6 | p6-e | -17.26 | 1% | [-17.43, -17.09] | 1% |  |
| 8-04-problem-set-6 | p6-sum | -5.93 | 2% | [-6.049, -5.811] | 2% |  |
| 8-04-problem-set-7 | p1-threshold | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-04-problem-set-7 | p1-e-even | -0.615 | 2% | [-0.6273, -0.6027] | 2% |  |
| 8-04-problem-set-7 | p1-e-odd | -0.317 | 2% | [-0.3233, -0.3107] | 2% |  |
| 8-04-problem-set-7 | p2-ratio-open | 4 | 1% | [3.96, 4.04] | 1% |  |
| 8-04-problem-set-7 | p2-ratio-closed | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-04-problem-set-7 | p2-e1 | 6.63 | 1% | [6.564, 6.696] | 1% |  |
| 8-04-problem-set-7 | p2-e2 | 7.30 | 1% | [7.227, 7.373] | 1% |  |
| 8-04-problem-set-7 | p3-n0 | 0.157 | 1% | [0.1554, 0.1586] | 1% |  |
| 8-04-problem-set-7 | p3-n1 | 0.112 | 1% | [0.1109, 0.1131] | 1% |  |
| 8-04-problem-set-7 | p3-n2 | 0.0951 | 1% | [0.09415, 0.09605] | 1% |  |
| 8-04-problem-set-8 | p2-e0 | -4 | 1% | [-4.04, -3.96] | 1% |  |
| 8-04-problem-set-8 | p2-einf | -1 | 1% | [-1.01, -0.99] | 1% |  |
| 8-04-problem-set-8 | p2-crit | 0.40 | 5% | [0.38, 0.42] | 5% |  |
| 8-04-problem-set-8 | p2-vmin | -1.025 | 1% | [-1.035, -1.015] | 1% |  |
| 8-04-problem-set-8 | p4-c1 | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-04-problem-set-8 | p4-c2 | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-04-problem-set-8 | p4-c3 | 1.414 | 0.5% | [1.407, 1.421] | 0.5% |  |
| 8-04-problem-set-8 | p4-c4 | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-04-problem-set-8 | p4f-dk | 0.125 | 1% | [0.1237, 0.1263] | 1% |  |
| 8-04-problem-set-8 | p4f-du | 4 | 1% | [3.96, 4.04] | 1% |  |
| 8-04-problem-set-8 | p4f-dtau | 2 | 1% | [1.98, 2.02] | 1% |  |
| 8-04-problem-set-8 | p4f-peak | -17.9 | 2% | [-18.26, -17.54] | 2% |  |
| 8-04-problem-set-8 | p4f-delay | 2.1 | 15% | [1.785, 2.415] | 15% | c |
| 8-04-problem-set-8 | p5-num | 0.211 | 1% | [0.2089, 0.2131] | 1% |  |
| 8-04-problem-set-9 | p1-width | 0.1665 | 1% | [0.1648, 0.1682] | 1% |  |
| 8-04-problem-set-9 | p1-lam | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-04-problem-set-9 | p1-exc | 0.0827 | 5% | [0.07856, 0.08683] | 5% |  |
| 8-04-problem-set-9 | p1-mag0 | 0.1772 | 1% | [0.1754, 0.179] | 1% |  |
| 8-04-problem-set-9 | p1-mag2 | 0.1715 | 1% | [0.1698, 0.1732] | 1% |  |
| 8-04-problem-set-9 | p1-ph2 | -0.179 | 2% | [-0.1826, -0.1754] | 2% |  |
| 8-04-problem-set-9 | p1-num | 0.1715 | 0.5% | [0.1706, 0.1724] | 0.5% |  |
| 8-04-problem-set-9 | p1-max | 0.992 | 0.5% | [0.987, 0.997] | 0.5% |  |
| 8-04-problem-set-9 | p2-gap2 | 0.137 | 0.5% | [0.1363, 0.1377] | 0.5% |  |
| 8-04-problem-set-9 | p2-gap5 | 0.621 | 0.5% | [0.6179, 0.6241] | 0.5% |  |
| 8-04-problem-set-9 | p2-gap9 | 1.325 | 0.5% | [1.318, 1.332] | 0.5% |  |
| 8-04-problem-set-9 | p2-n5 | 2 | 0.1 | [1.9, 2.1] | 5% |  |
| 8-04-problem-set-9 | p3-top | -3.627 | 1% | [-3.663, -3.591] | 1% |  |
| 8-04-problem-set-9 | p3-slope | -0.800 | 1% | [-0.808, -0.792] | 1% |  |
| 8-04-problem-set-9 | p4-u1 | 2.878 | 0.5% | [2.864, 2.892] | 0.5% |  |
| 8-04-problem-set-9 | p4-delay1 | 14.13 | 1% | [13.99, 14.27] | 1% |  |
| 8-04-problem-set-9 | p4-a1 | 3.74 | 1% | [3.703, 3.777] | 1% |  |

### 8.044

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-044-problem-set-1 | p3-middle | 0.3333 | 1% | [0.33, 0.3366] | 1% |  |
| 8-044-problem-set-1 | p4-minus | 0.1667 | 1% | [0.165, 0.1684] | 1% |  |
| 8-044-problem-set-1 | p4-zero | 0.3333 | 1% | [0.33, 0.3366] | 1% |  |
| 8-044-problem-set-1 | p4-plus | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-044-problem-set-1 | p4-cum | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-044-problem-set-1 | p5-peak | 0.3989 | 1% | [0.3949, 0.4029] | 1% |  |
| 8-044-problem-set-1 | p6-phi10 | 10.49 | 0.5% | [10.44, 10.54] | 0.5% |  |
| 8-044-problem-set-10 | p1-nf | 3 | 0.1 | [2.9, 3.1] | 3.3% |  |
| 8-044-problem-set-10 | p1-nb | 6 | 0.1 | [5.9, 6.1] | 1.7% |  |
| 8-044-problem-set-10 | p2-p0 | 0.533 | 1% | [0.5277, 0.5383] | 1% |  |
| 8-044-problem-set-10 | p3-sym | 10 | 0.1 | [9.9, 10.1] | 1% |  |
| 8-044-problem-set-10 | p3-ratio | 0.6 | 1% | [0.594, 0.606] | 1% |  |
| 8-044-problem-set-10 | p3-n2 | 7 | 8% | [6.44, 7.56] | 8% | c |
| 8-044-problem-set-10 | p3-cl2 | 22 | 7% | [20.46, 23.54] | 7% | c e |
| 8-044-problem-set-10 | p4-ways | 120 | 0.1 | [119.9, 120.1] | 0.083% |  |
| 8-044-problem-set-10 | p4-argon | 16.1 | 1% | [15.94, 16.26] | 1% |  |
| 8-044-problem-set-10 | p5-three | 1.04 | 1% | [1.03, 1.05] | 1% |  |
| 8-044-problem-set-11 | p1-power | 1.333 | 1% | [1.32, 1.346] | 1% |  |
| 8-044-problem-set-11 | p1-int | 3.93 | 1% | [3.891, 3.969] | 1% |  |
| 8-044-problem-set-11 | p3-half | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-044-problem-set-11 | p3-x2 | 0.732 | 1% | [0.7247, 0.7393] | 1% |  |
| 8-044-problem-set-11 | p4-cu | 9.63 | 1.5% | [9.486, 9.774] | 1.5% |  |
| 8-044-problem-set-11 | p4-he | 5.06 | 1.5% | [4.984, 5.136] | 1.5% |  |
| 8-044-problem-set-11 | p5-n21 | 1.07 | 2% | [1.049, 1.091] | 2% |  |
| 8-044-problem-set-11 | p5-xc | 5.07 | 6% | [4.766, 5.374] | 6% | c |
| 8-044-problem-set-2 | p1-max | 0.707 | 1% | [0.6999, 0.7141] | 1% |  |
| 8-044-problem-set-2 | p3-peak | 3.41 | 1% | [3.376, 3.444] | 1% |  |
| 8-044-problem-set-2 | p6-rim | 0.436 | 1% | [0.4316, 0.4404] | 1% |  |
| 8-044-problem-set-3 | p2-single | 0.816 | 1% | [0.8078, 0.8242] | 1% |  |
| 8-044-problem-set-3 | p2-gas | 1.57e-10 | 2% | [1.539e-10, 1.601e-10] | 2% |  |
| 8-044-problem-set-5 | p1-double | 11.53 | 1% | [11.41, 11.65] | 1% |  |
| 8-044-problem-set-5 | p1-mix | 4.676 | 1% | [4.629, 4.723] | 1% |  |
| 8-044-problem-set-6 | p1-dt | 0.485 | 1% | [0.4801, 0.4899] | 1% |  |
| 8-044-problem-set-7 | p3-t0 | 0.25 | 1% | [0.2475, 0.2525] | 1% |  |
| 8-044-problem-set-7 | p3-ds-num | 52.7 | 1% | [52.17, 53.23] | 1% |  |
| 8-044-problem-set-7 | p4-rms-num | 1.02 | 1% | [1.01, 1.03] | 1% |  |
| 8-044-problem-set-7 | p5-x300 | 170.76 | 0.5 | [170.3, 171.3] | 0.29% |  |
| 8-044-problem-set-7 | p5-x1000 | 50.81 | 0.3 | [50.51, 51.11] | 0.59% |  |
| 8-044-problem-set-8 | p1-ratio | 0.0354 | 1% | [0.03505, 0.03575] | 1% |  |
| 8-044-problem-set-8 | p2-equal | 0.338 | 1% | [0.3346, 0.3414] | 1% |  |
| 8-044-problem-set-8 | p2-face | 0.85 | 1% | [0.8415, 0.8585] | 1% |  |
| 8-044-problem-set-8 | p3-alpha | 4.5 | 1% | [4.455, 4.545] | 1% |  |
| 8-044-problem-set-8 | p3-eta | 3 | 1% | [2.97, 3.03] | 1% |  |
| 8-044-problem-set-8 | p3-t8 | 0.25 | 1% | [0.2475, 0.2525] | 1% |  |
| 8-044-problem-set-8 | p4-z | 1.773 | 0.5% | [1.764, 1.782] | 0.5% |  |
| 8-044-problem-set-8 | p4-c1 | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-044-problem-set-8 | p5-emin | 1.92e-6 | 1% | [1.901e-06, 1.939e-06] | 1% |  |
| 8-044-problem-set-8 | p5-logp | -149.63 | 0.1 | [-149.7, -149.5] | 0.067% | d |
| 8-044-problem-set-8 | p5-v | 9.18e7 | 1% | [9.088e+07, 9.272e+07] | 1% |  |
| 8-044-problem-set-8 | p5-path | 0.0923 | 1% | [0.09138, 0.09322] | 1% |  |
| 8-044-problem-set-8 | p5-tau | 1.01e-9 | 1.5% | [9.948e-10, 1.025e-09] | 1.5% |  |
| 8-044-problem-set-8 | p5-logt | 140.63 | 0.1 | [140.5, 140.7] | 0.071% | d |
| 8-044-problem-set-8 | p5-lograte | -83.55 | 0.2 | [-83.75, -83.35] | 0.24% |  |
| 8-044-problem-set-9 | p1-volume | 1e9 | 1% | [9.9e+08, 1.01e+09] | 1% |  |
| 8-044-problem-set-9 | p1-volume-cmb | 1.334e9 | 1% | [1.321e+09, 1.347e+09] | 1% |  |
| 8-044-problem-set-9 | p1-length | 1101 | 1% | [1090, 1112] | 1% | e |
| 8-044-problem-set-9 | p2-einstein-one | 0.921 | 1% | [0.9118, 0.9302] | 1% |  |
| 8-044-problem-set-9 | p3-vnum | 6.44 | 1% | [6.376, 6.504] | 1% |  |
| 8-044-problem-set-9 | p3-inum | 2.04 | 1% | [2.02, 2.06] | 1% |  |
| 8-044-problem-set-9 | p4-power | 4.14 | 1% | [4.099, 4.181] | 1% |  |
| 8-044-problem-set-9 | p4-hertz | 4.14 | 1% | [4.099, 4.181] | 1% |  |

### 8.05

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-05-problem-set-1 | p1-x | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 8-05-problem-set-1 | p1-p | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 8-05-problem-set-10 | p1-eq | 0.25 | 1% | [0.2475, 0.2525] | 1% |  |
| 8-05-problem-set-10 | p1-max | 1.5 | 1% | [1.485, 1.515] | 1% |  |
| 8-05-problem-set-10 | p1-ang | 60 | 1% | [59.4, 60.6] | 1% |  |
| 8-05-problem-set-10 | p2-bar | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-05-problem-set-10 | p2-count | 8 | 0.01 | [7.99, 8.01] | 0.12% |  |
| 8-05-problem-set-10 | p2-num | 0.842 | 0.5% | [0.8378, 0.8462] | 0.5% |  |
| 8-05-problem-set-10 | p3-three | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 8-05-problem-set-10 | p5-alpha | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-05-problem-set-10 | p5-beta2 | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-05-problem-set-10 | p5-j2 | 3.75 | 1% | [3.712, 3.788] | 1% |  |
| 8-05-problem-set-11 | p1-l1 | 0.707 | 1% | [0.6999, 0.7141] | 1% |  |
| 8-05-problem-set-11 | p1-amp | 0.707 | 1% | [0.6999, 0.7141] | 1% |  |
| 8-05-problem-set-11 | p1-p0 | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-05-problem-set-11 | p1-p1 | 0.25 | 1% | [0.2475, 0.2525] | 1% |  |
| 8-05-problem-set-11 | p1-e0 | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-05-problem-set-11 | p3-ground | 0.702 | 1% | [0.695, 0.709] | 1% |  |
| 8-05-problem-set-11 | p4-thr | 1.571 | 1% | [1.555, 1.587] | 1% |  |
| 8-05-problem-set-11 | p4-count | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 8-05-problem-set-11 | p5-min | 16.3 | 1% | [16.14, 16.46] | 1% |  |
| 8-05-problem-set-11 | p5-nodes | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 8-05-problem-set-2 | p2-test | 6.283 | 0.5% | [6.252, 6.314] | 0.5% |  |
| 8-05-problem-set-2 | p5-e0 | 0.667986 | 0.000002 | [0.668, 0.668] | 0.0003% | d |
| 8-05-problem-set-2 | p5-bound | 2.424 | 0.003 | [2.421, 2.427] | 0.12% | d |
| 8-05-problem-set-2 | p5-e1 | 2.394 | 0.005 | [2.389, 2.399] | 0.21% |  |
| 8-05-problem-set-3 | p1-theta | 109.5 | 1% | [108.4, 110.6] | 1% |  |
| 8-05-problem-set-3 | p1-phi | 195 | 1% | [193.1, 196.9] | 1% | e |
| 8-05-problem-set-3 | p2-example | 0.375 | 1% | [0.3713, 0.3787] | 1% |  |
| 8-05-problem-set-3 | p4-example | 1.8 | 1% | [1.782, 1.818] | 1% |  |
| 8-05-problem-set-3 | p4-tri | 2.646 | 1% | [2.62, 2.672] | 1% |  |
| 8-05-problem-set-3 | p5-w | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 8-05-problem-set-3 | p6-b21 | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 8-05-problem-set-3 | p6-t11 | 6 | 0.01 | [5.99, 6.01] | 0.17% |  |
| 8-05-problem-set-3 | p6-t21 | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 8-05-problem-set-3 | p6-t22 | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 8-05-problem-set-3 | p6-t12 | 6 | 0.01 | [5.99, 6.01] | 0.17% |  |
| 8-05-problem-set-4 | p5-num | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 8-05-problem-set-4 | p7-s1 | 0.987862 | 0.1% | [0.9869, 0.9888] | 0.1% |  |
| 8-05-problem-set-4 | p7-s3 | -0.155271 | 0.1% | [-0.1554, -0.1551] | 0.1% | d |
| 8-05-problem-set-4 | p7-s5 | 0.00564312 | 0.1% | [0.005637, 0.005649] | 0.1% |  |
| 8-05-problem-set-4 | p7-c0 | 0.978326 | 0.1% | [0.9773, 0.9793] | 0.1% |  |
| 8-05-problem-set-4 | p7-c2 | -0.452288 | 0.1% | [-0.4527, -0.4518] | 0.1% |  |
| 8-05-problem-set-4 | p7-c4 | 0.0261598 | 0.1% | [0.02613, 0.02619] | 0.1% | d |
| 8-05-problem-set-4 | p7-end | 0.0160 | 2% | [0.01568, 0.01632] | 2% |  |
| 8-05-problem-set-4 | p7-tay | 0.524 | 1% | [0.5188, 0.5292] | 1% |  |
| 8-05-problem-set-5 | p3-s21 | -2.5 | 0.01 | [-2.51, -2.49] | 0.4% |  |
| 8-05-problem-set-5 | p5-m22 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 8-05-problem-set-5 | p5-m32 | -1.414 | 0.5% | [-1.421, -1.407] | 0.5% |  |
| 8-05-problem-set-5 | p5-m33 | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 8-05-problem-set-5 | p5-min | -1 | 0.01 | [-1.01, -0.99] | 1% |  |
| 8-05-problem-set-5 | p5-mid | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 8-05-problem-set-5 | p9-max | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 8-05-problem-set-5 | p9-twice | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 8-05-problem-set-5 | p9-a2top | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 8-05-problem-set-5 | p9-a2low | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 8-05-problem-set-6 | p2-time | 1.03 | 1% | [1.02, 1.04] | 1% |  |
| 8-05-problem-set-6 | p2-bound | 0.526 | 1% | [0.5207, 0.5313] | 1% |  |
| 8-05-problem-set-6 | p4-trk | 0.961 | 1% | [0.9514, 0.9706] | 1% |  |
| 8-05-problem-set-6 | p4-quartic | 0.667 | 1% | [0.6603, 0.6737] | 1% |  |
| 8-05-problem-set-6 | p5-x2 | 1.225 | 1% | [1.213, 1.237] | 1% |  |
| 8-05-problem-set-6 | p5-comm | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 8-05-problem-set-6 | p5-amp | 0.707 | 1% | [0.6999, 0.7141] | 1% |  |
| 8-05-problem-set-6 | p6-eq | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 8-05-problem-set-6 | p6-low | 3.5 | 0.01 | [3.49, 3.51] | 0.29% |  |
| 8-05-problem-set-7 | p1-half | 0.708 | 1% | [0.7009, 0.7151] | 1% |  |
| 8-05-problem-set-7 | p4-t | 13.6 | 1% | [13.46, 13.74] | 1% |  |
| 8-05-problem-set-7 | p4-v | -27.2 | 1% | [-27.47, -26.93] | 1% |  |
| 8-05-problem-set-7 | p5-time | 8.64 | 1% | [8.554, 8.726] | 1% |  |
| 8-05-problem-set-8 | p2-max | 0.707 | 1% | [0.6999, 0.7141] | 1% |  |
| 8-05-problem-set-8 | p3-limit | 1.414 | 1% | [1.4, 1.428] | 1% |  |
| 8-05-problem-set-8 | p6-num | 0.577 | 1% | [0.5712, 0.5828] | 1% |  |
| 8-05-problem-set-8 | p6-period | 0.866 | 1% | [0.8573, 0.8747] | 1% |  |
| 8-05-problem-set-9 | p1-num | 0.244 | 1% | [0.2416, 0.2464] | 1% |  |
| 8-05-problem-set-9 | p2-sy | 0.0100 | 1% | [0.0099, 0.0101] | 1% |  |
| 8-05-problem-set-9 | p4-camp | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-05-problem-set-9 | p5-turns | 500 | 1% | [495, 505] | 1% | e |
| 8-05-problem-set-9 | p6-phase | 1 | 1% | [0.99, 1.01] | 1% |  |

### 8.06

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-06-problem-set-1 | p3-deg | 3 | 0.1 | [2.9, 3.1] | 3.3% |  |
| 8-06-problem-set-1 | p5-frac | 2.86 | 2% | [2.803, 2.917] | 2% |  |
| 8-06-problem-set-1 | p5-ev | 3.89 | 2% | [3.812, 3.968] | 2% |  |
| 8-06-problem-set-1 | p5-mu | 4.28 | 2% | [4.194, 4.366] | 2% |  |
| 8-06-problem-set-2 | p5-c | 2.667 | 0.5% | [2.654, 2.68] | 0.5% |  |
| 8-06-problem-set-2 | p5-split | 45.28 | 1% | [44.83, 45.73] | 1% |  |
| 8-06-problem-set-2 | p5-field | 2852 | 1% | [2823, 2881] | 1% | e |
| 8-06-problem-set-3 | p1-1s | 5 | 1% | [4.95, 5.05] | 1% |  |
| 8-06-problem-set-3 | p3-de | 1.342 | 1% | [1.329, 1.355] | 1% |  |
| 8-06-problem-set-3 | p3-b | 1159 | 1% | [1147, 1171] | 1% | e |
| 8-06-problem-set-3 | p3-bint | 1545 | 1% | [1530, 1560] | 1% | e |
| 8-06-problem-set-3 | p4-n2 | -0.02865 | 1% | [-0.02894, -0.02836] | 1% |  |
| 8-06-problem-set-3 | p4-levels | 5 | 1% | [4.95, 5.05] | 1% |  |
| 8-06-problem-set-3 | p5-sz | -0.1667 | 1% | [-0.1684, -0.165] | 1% |  |
| 8-06-problem-set-4 | p1-dist | 3.15 | 1% | [3.119, 3.181] | 1% |  |
| 8-06-problem-set-4 | p2-e1 | 2.338 | 0.2% | [2.333, 2.343] | 0.2% |  |
| 8-06-problem-set-4 | p2-e2 | 4.088 | 0.1% | [4.084, 4.092] | 0.1% |  |
| 8-06-problem-set-4 | p3-e0 | 1.40 | 1.5% | [1.379, 1.421] | 1.5% |  |
| 8-06-problem-set-4 | p3-height | 13.6 | 1.5% | [13.4, 13.8] | 1.5% |  |
| 8-06-problem-set-4 | p3-n | 8.91 | 2% | [8.732, 9.088] | 2% |  |
| 8-06-problem-set-4 | p4-eps | 1.333 | 0.5% | [1.326, 1.34] | 0.5% |  |
| 8-06-problem-set-4 | p4-delta | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-06-problem-set-4 | p4-beta | 1.3765 | 0.5% | [1.37, 1.383] | 0.5% |  |
| 8-06-problem-set-4 | p4-e0 | 0.546 | 0.5% | [0.5433, 0.5487] | 0.5% |  |
| 8-06-problem-set-4 | p4-err0 | -18.2 | 2% | [-18.56, -17.84] | 2% |  |
| 8-06-problem-set-4 | p4-err5 | -0.12 | 0.03 | [-0.15, -0.09] | 25% | c |
| 8-06-problem-set-4 | p5-num | 6.9 | 3% | [6.693, 7.107] | 3% |  |
| 8-06-problem-set-4 | p6-c | 0.736 | 1% | [0.7286, 0.7434] | 1% |  |
| 8-06-problem-set-5 | p1-e1ev | 9.40 | 1% | [9.306, 9.494] | 1% |  |
| 8-06-problem-set-5 | p1-expo | 3.367 | 1% | [3.333, 3.401] | 1% |  |
| 8-06-problem-set-5 | p1-logtau | 14609 | 0.03% | [1.46e+04, 1.461e+04] | 0.03% | d e |
| 8-06-problem-set-6 | p1-tau | 6.65 | 1% | [6.584, 6.716] | 1% |  |
| 8-06-problem-set-6 | p1-wtau | 1.03 | 1% | [1.02, 1.04] | 1% |  |
| 8-06-problem-set-6 | p3-nu0 | 4.33 | 1% | [4.287, 4.373] | 1% |  |
| 8-06-problem-set-6 | p3-xvis | 80.0 | 1% | [79.2, 80.8] | 1% |  |
| 8-06-problem-set-6 | p3-rmaser | 1.60 | 1% | [1.584, 1.616] | 1% |  |
| 8-06-problem-set-6 | p4-x | 0.527 | 1% | [0.5217, 0.5323] | 1% |  |
| 8-06-problem-set-6 | p4-r2 | 0.555 | 1% | [0.5494, 0.5606] | 1% |  |
| 8-06-problem-set-6 | p4-tau | 1.595 | 1% | [1.579, 1.611] | 1% |  |
| 8-06-problem-set-6 | p4-ratio | 2.40 | 1% | [2.376, 2.424] | 1% |  |
| 8-06-problem-set-6 | p4-he | 99.7 | 1% | [98.7, 100.7] | 1% |  |
| 8-06-problem-set-6 | p5-lambda | 656.1 | 0.5% | [652.8, 659.4] | 0.5% |  |
| 8-06-problem-set-6 | p5-z | 0.542 | 1% | [0.5366, 0.5474] | 1% |  |
| 8-06-problem-set-6 | p5-sum | 0.881 | 1% | [0.8722, 0.8898] | 1% |  |
| 8-06-problem-set-6 | p5-tau | 158.3 | 1% | [156.7, 159.9] | 1% |  |
| 8-06-problem-set-6 | p5-ratio | 99.2 | 1% | [98.21, 100.2] | 1% |  |
| 8-06-problem-set-7 | p5-ground | 0.09 | 2% | [0.0882, 0.0918] | 2% |  |
| 8-06-problem-set-7 | p7-lz | 0.533 | 1% | [0.5277, 0.5383] | 1% |  |
| 8-06-problem-set-7 | p7-first | 0.372 | 1% | [0.3683, 0.3757] | 1% |  |
| 8-06-problem-set-8 | p3-zero | 4.493 | 0.5% | [4.471, 4.515] | 0.5% |  |
| 8-06-problem-set-8 | p3-ab | -0.273 | 1% | [-0.2757, -0.2703] | 1% |  |
| 8-06-problem-set-8 | p4-res | 3.080 | 0.5% | [3.065, 3.095] | 0.5% |  |
| 8-06-problem-set-8 | p5-n | 5.907 | 1% | [5.848, 5.966] | 1% |  |
| 8-06-problem-set-8 | p5-inc | 3.121 | 1% | [3.09, 3.152] | 1% |  |
| 8-06-problem-set-8 | p5-ds | 2.022 | 1% | [2.002, 2.042] | 1% |  |
| 8-06-problem-set-8 | p5-count | 3.73 | 2% | [3.655, 3.805] | 2% |  |
| 8-06-problem-set-8 | p6-ten | 10 | 1% | [9.9, 10.1] | 1% |  |
| 8-06-problem-set-9 | p1a-ho-s | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 8-06-problem-set-9 | p1a-ho-a | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 8-06-problem-set-9 | p1b-n-s | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 8-06-problem-set-9 | p1b-n-a | 12 | 0.01 | [11.99, 12.01] | 0.083% |  |
| 8-06-problem-set-9 | p2a-n | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 8-06-problem-set-9 | p2a-s2 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 8-06-problem-set-9 | p2b-s2 | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 8-06-problem-set-9 | p2c-split | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 8-06-problem-set-9 | p3a-total | 20 | 0.01 | [19.99, 20.01] | 0.05% |  |
| 8-06-problem-set-9 | p3a-e0 | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 8-06-problem-set-9 | p3a-g2 | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 8-06-problem-set-9 | p3a-g3 | 8 | 0.01 | [7.99, 8.01] | 0.12% |  |
| 8-06-problem-set-9 | p3a-up | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 8-06-problem-set-9 | p3b-total | 10 | 0.01 | [9.99, 10.01] | 0.1% |  |
| 8-06-problem-set-9 | p3b-levels | 7 | 0.01 | [6.99, 7.01] | 0.14% |  |
| 8-06-problem-set-9 | p3b-g3 | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 8-06-problem-set-9 | p3c-total | 27 | 0.01 | [26.99, 27.01] | 0.037% |  |
| 8-06-problem-set-9 | p3c-g1 | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 8-06-problem-set-9 | p3c-g3 | 7 | 0.01 | [6.99, 7.01] | 0.14% |  |

### 8.286

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-286-problem-set-10 | p3-b-gly | 46.2 | 1% | [45.74, 46.66] | 1% |  |
| 8-286-problem-set-10 | p3-b-mpc | 14170 | 1% | [1.403e+04, 1.431e+04] | 1% | e |
| 8-286-problem-set-10 | p4-a-num | 3.17 | 1% | [3.138, 3.202] | 1% |  |
| 8-286-problem-set-10 | p4-c-z1 | 9.15 | 2% | [8.967, 9.333] | 2% |  |
| 8-286-problem-set-10 | p4-d | 62.1 | 0.2 | [61.9, 62.3] | 0.32% |  |
| 8-286-problem-set-2 | p2-b | 0.0339 | 1% | [0.03356, 0.03424] | 1% |  |
| 8-286-problem-set-2 | p3-b-mpc | 6053 | 1% | [5992, 6114] | 1% | e |
| 8-286-problem-set-2 | p3-b-ly | 19.7 | 1% | [19.5, 19.9] | 1% |  |
| 8-286-problem-set-2 | p4-b | 1.35 | 1% | [1.337, 1.364] | 1% |  |
| 8-286-problem-set-3 | p3-b | 0.6 | 1% | [0.594, 0.606] | 1% |  |
| 8-286-problem-set-3 | p4-b | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 8-286-problem-set-6 | p1-c | 0.351 | 1% | [0.3475, 0.3545] | 1% |  |
| 8-286-problem-set-6 | p2-e | 4.36e-16 | 3% | [4.229e-16, 4.491e-16] | 3% |  |
| 8-286-problem-set-6 | p5-c | 4.5 | 1% | [4.455, 4.545] | 1% |  |
| 8-286-problem-set-6 | p7-a | 0.74 | 2% | [0.7252, 0.7548] | 2% |  |
| 8-286-problem-set-6 | p7-b | 0.685 | 2% | [0.6713, 0.6987] | 2% |  |
| 8-286-problem-set-6 | p7-c-three | 8.21 | 2% | [8.046, 8.374] | 2% |  |
| 8-286-problem-set-6 | p7-c-four | 9.54 | 2% | [9.349, 9.731] | 2% |  |
| 8-286-problem-set-7 | p1-a | 5.5 | 0.01 | [5.49, 5.51] | 0.18% |  |
| 8-286-problem-set-7 | p1-c | 1.95 | 0.5% | [1.94, 1.96] | 0.5% |  |
| 8-286-problem-set-7 | p2-a | 3.5 | 0.01 | [3.49, 3.51] | 0.29% |  |
| 8-286-problem-set-7 | p2-b-photons | 2 | 0.01 | [1.99, 2.01] | 0.5% |  |
| 8-286-problem-set-7 | p2-b-neutrinos | 5.25 | 0.01 | [5.24, 5.26] | 0.19% |  |
| 8-286-problem-set-7 | p2-b-electrons | 3.5 | 0.01 | [3.49, 3.51] | 0.29% |  |
| 8-286-problem-set-7 | p2-c | 1.099 | 0.5% | [1.094, 1.104] | 0.5% |  |
| 8-286-problem-set-8 | p3-b | 3.82 | 1% | [3.782, 3.858] | 1% |  |
| 8-286-problem-set-8 | p3-c | 3.65 | 1% | [3.613, 3.687] | 1% |  |
| 8-286-problem-set-8 | p4-a | 0.77143 | 0.01% | [0.7714, 0.7715] | 0.01% | d |
| 8-286-problem-set-8 | p4-b-05 | 20.236 | 0.01% | [20.23, 20.24] | 0.01% | d |
| 8-286-problem-set-8 | p4-b-10 | 3.7196 | 0.01% | [3.719, 3.72] | 0.01% | d |
| 8-286-problem-set-8 | p4-b-15 | 1.3645 | 0.01% | [1.364, 1.365] | 0.01% | d |
| 8-286-problem-set-8 | p5-a-mu1 | 43.63 | 0.02 | [43.61, 43.65] | 0.046% | d |
| 8-286-problem-set-8 | p5-a-21 | 0.342 | 2% | [0.3352, 0.3488] | 2% |  |
| 8-286-problem-set-8 | p5-a-31 | 0.598 | 2% | [0.586, 0.61] | 2% |  |
| 8-286-problem-set-9 | p2-b-num | 1.02e98 | 2% | [9.996e+97, 1.04e+98] | 2% |  |
| 8-286-problem-set-9 | p2-c | 124.07 | 0.1 | [124, 124.2] | 0.081% |  |
| 8-286-problem-set-9 | p3-a | 3.66e9 | 2% | [3.587e+09, 3.733e+09] | 2% |  |
| 8-286-problem-set-9 | p3-b | 11.3 | 2% | [11.07, 11.53] | 2% |  |
| 8-286-problem-set-9 | p3-c | 1.78e8 | 2% | [1.744e+08, 1.816e+08] | 2% |  |
| 8-286-problem-set-9 | p4-c | 1.35e-52 | 2% | [1.323e-52, 1.377e-52] | 2% |  |
| 8-286-problem-set-9 | p5-a-num | 1.71e-39 | 2% | [1.676e-39, 1.744e-39] | 2% |  |
| 8-286-problem-set-9 | p5-b-num | 9.26e89 | 2% | [9.075e+89, 9.445e+89] | 2% |  |
| 8-286-problem-set-9 | p5-c | 2.92e-5 | 2% | [2.862e-05, 2.978e-05] | 2% |  |
| 8-286-problem-set-9 | p5-d | 2.48e21 | 3% | [2.406e+21, 2.554e+21] | 3% |  |

### 8.07

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-07-problem-set-1 | p1-full | 6 | 1% | [5.94, 6.06] | 1% |  |
| 8-07-problem-set-1 | p1-bx | -10 | 1% | [-10.1, -9.9] | 1% |  |
| 8-07-problem-set-1 | p2-ax | -14 | 1% | [-14.14, -13.86] | 1% |  |
| 8-07-problem-set-1 | p2-accnum | 2.89 | 1% | [2.861, 2.919] | 1% |  |
| 8-07-problem-set-1 | p3-a1 | 2.23 | 1% | [2.208, 2.252] | 1% |  |
| 8-07-problem-set-1 | p3-grad | 3.60 | 1% | [3.564, 3.636] | 1% |  |
| 8-07-problem-set-1 | p4-max | 4.90 | 1% | [4.851, 4.949] | 1% |  |
| 8-07-problem-set-1 | p4-dir | 0.667 | 1% | [0.6603, 0.6737] | 1% |  |
| 8-07-problem-set-1 | p5-g0 | 0.239 | 1% | [0.2366, 0.2414] | 1% |  |
| 8-07-problem-set-1 | p5-frac | 0.354 | 1% | [0.3505, 0.3575] | 1% |  |
| 8-07-problem-set-1 | p5-small | 0.00233 | 1% | [0.002307, 0.002353] | 1% |  |
| 8-07-problem-set-1 | p7-hemi | 12.57 | 1% | [12.44, 12.7] | 1% |  |
| 8-07-problem-set-1 | p7-disk | -7.07 | 1% | [-7.141, -6.999] | 1% |  |
| 8-07-problem-set-10 | p2-num | 1.771 | 1% | [1.753, 1.789] | 1% |  |
| 8-07-problem-set-10 | p4-abs | 4.540 | 1% | [4.495, 4.585] | 1% |  |
| 8-07-problem-set-10 | p4-ref | 9.080 | 1% | [8.989, 9.171] | 1% |  |
| 8-07-problem-set-10 | p4-earth | 5.789 | 1% | [5.731, 5.847] | 1% |  |
| 8-07-problem-set-10 | p5-num | 4.427 | 1% | [4.383, 4.471] | 1% |  |
| 8-07-problem-set-10 | p6-num | 0.0400 | 1% | [0.0396, 0.0404] | 1% |  |
| 8-07-problem-set-2 | p1-avg | 5.33 | 1% | [5.277, 5.383] | 1% |  |
| 8-07-problem-set-2 | p2-num | 44.4 | 1% | [43.96, 44.84] | 1% |  |
| 8-07-problem-set-2 | p2-pct | 4.92 | 1% | [4.871, 4.969] | 1% |  |
| 8-07-problem-set-2 | p3-wnum | 243 | 1% | [240.6, 245.4] | 1% | e |
| 8-07-problem-set-2 | p3-out | 0.833 | 1% | [0.8247, 0.8413] | 1% |  |
| 8-07-problem-set-2 | p4-num | 7.08 | 1% | [7.009, 7.151] | 1% |  |
| 8-07-problem-set-2 | p5-cnum | 8.34 | 1% | [8.257, 8.423] | 1% |  |
| 8-07-problem-set-2 | p6-half | 0.397 | 1% | [0.393, 0.401] | 1% |  |
| 8-07-problem-set-2 | p6-inum | 82.5 | 1% | [81.67, 83.33] | 1% |  |
| 8-07-problem-set-2 | p7-f | -37.7 | 1% | [-38.08, -37.32] | 1% |  |
| 8-07-problem-set-2 | p7-c | 6.28 | 1% | [6.217, 6.343] | 1% |  |
| 8-07-problem-set-3 | p1-fn | 5.40 | 1% | [5.346, 5.454] | 1% |  |
| 8-07-problem-set-3 | p1-fg | 18.3 | 1% | [18.12, 18.48] | 1% |  |
| 8-07-problem-set-3 | p1-vnum | 539 | 1% | [533.6, 544.4] | 1% | e |
| 8-07-problem-set-3 | p2-ratio | 3.28 | 1% | [3.247, 3.313] | 1% |  |
| 8-07-problem-set-3 | p3-vnum | -498 | 1% | [-503, -493] | 1% | e |
| 8-07-problem-set-3 | p3-fnum | 63.9 | 1% | [63.26, 64.54] | 1% |  |
| 8-07-problem-set-3 | p4-alpha | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-07-problem-set-3 | p4-beta | 0.866 | 1% | [0.8573, 0.8747] | 1% |  |
| 8-07-problem-set-3 | p4-pf | 7.35 | 1% | [7.276, 7.423] | 1% |  |
| 8-07-problem-set-3 | p5-centre | 0.107 | 1% | [0.1059, 0.1081] | 1% |  |
| 8-07-problem-set-3 | p5-sixth | 0.1667 | 1% | [0.165, 0.1684] | 1% |  |
| 8-07-problem-set-4 | p1-cube | 0.107 | 1% | [0.1059, 0.1081] | 1% |  |
| 8-07-problem-set-4 | p1-point | 0.0465 | 2% | [0.04557, 0.04743] | 2% |  |
| 8-07-problem-set-4 | p2-wnum | 1.32 | 1% | [1.307, 1.333] | 1% |  |
| 8-07-problem-set-4 | p3-a11 | -1.447 | 1% | [-1.461, -1.433] | 1% |  |
| 8-07-problem-set-4 | p4-qmin | 13.4 | 1% | [13.27, 13.53] | 1% |  |
| 8-07-problem-set-4 | p5-c3 | -0.125 | 1% | [-0.1263, -0.1237] | 1% |  |
| 8-07-problem-set-4 | p5-c5 | 0.0625 | 1% | [0.06187, 0.06313] | 1% |  |
| 8-07-problem-set-4 | p5-vnum | 2400 | 1% | [2376, 2424] | 1% | e |
| 8-07-problem-set-4 | p6-num | -3056 | 1% | [-3087, -3025] | 1% | e |
| 8-07-problem-set-5 | p2-capnum | 7.08 | 1% | [7.009, 7.151] | 1% |  |
| 8-07-problem-set-5 | p3-vnum | 0.449 | 1% | [0.4445, 0.4535] | 1% |  |
| 8-07-problem-set-5 | p4-d31 | -2.285 | 1% | [-2.308, -2.262] | 1% |  |
| 8-07-problem-set-5 | p4-y33 | -0.4172 | 1% | [-0.4214, -0.413] | 1% |  |
| 8-07-problem-set-6 | p1-d | 0.103 | 1.5% | [0.1015, 0.1045] | 1.5% |  |
| 8-07-problem-set-6 | p2-num | 1.333 | 1% | [1.32, 1.346] | 1% |  |
| 8-07-problem-set-6 | p3-v | 431 | 1% | [426.7, 435.3] | 1% | e |
| 8-07-problem-set-6 | p5-num | 4.45 | 1% | [4.405, 4.495] | 1% |  |
| 8-07-problem-set-6 | p6-num | 0.708 | 1% | [0.7009, 0.7151] | 1% |  |
| 8-07-problem-set-7 | p1-num | 1.803 | 1% | [1.785, 1.821] | 1% |  |
| 8-07-problem-set-7 | p2-tri | 36.0 | 1% | [35.64, 36.36] | 1% |  |
| 8-07-problem-set-7 | p3-frac | 0.955 | 1% | [0.9455, 0.9645] | 1% |  |
| 8-07-problem-set-7 | p7-cos2 | 4.189 | 1% | [4.147, 4.231] | 1% |  |
| 8-07-problem-set-8 | p2-ratio | 0.887 | 1% | [0.8781, 0.8959] | 1% |  |
| 8-07-problem-set-8 | p5-bc | 0.928 | 1% | [0.9187, 0.9373] | 1% |  |
| 8-07-problem-set-8 | p5-hend | 0.510 | 1% | [0.5049, 0.5151] | 1% |  |
| 8-07-problem-set-8 | p7-xnum | 3.74 | 1% | [3.703, 3.777] | 1% |  |
| 8-07-problem-set-8 | p7-ratio | 0.841 | 1% | [0.8326, 0.8494] | 1% |  |
| 8-07-problem-set-8 | p7-x1 | 3.66 | 1% | [3.623, 3.697] | 1% |  |
| 8-07-problem-set-9 | p1-num | 0.400 | 1% | [0.396, 0.404] | 1% |  |
| 8-07-problem-set-9 | p2-num | 0.568 | 1% | [0.5623, 0.5737] | 1% |  |
| 8-07-problem-set-9 | p3d-p | 35.8 | 1% | [35.44, 36.16] | 1% |  |
| 8-07-problem-set-9 | p4-num | 9.31 | 1% | [9.217, 9.403] | 1% |  |
| 8-07-problem-set-9 | p5-z | 47.1 | 1% | [46.63, 47.57] | 1% |  |
| 8-07-problem-set-9 | p6-num | 3.40 | 1% | [3.366, 3.434] | 1% |  |
| 8-07-problem-set-9 | p7-num | 331 | 1% | [327.7, 334.3] | 1% | e |
| 8-07-problem-set-9 | p8-g | 0.442 | 1% | [0.4376, 0.4464] | 1% |  |

### 8.08

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-08-problem-set-1 | p1-count | 15 | 0 | [15, 15] | 0% |  |
| 8-08-problem-set-1 | p1-num | 0.816 | 1% | [0.8078, 0.8242] | 1% |  |
| 8-08-problem-set-1 | p2-count | 495 | 0 | [495, 495] | 0% |  |
| 8-08-problem-set-1 | p2-exact | 46.21 | 1% | [45.75, 46.67] | 1% |  |
| 8-08-problem-set-1 | p3-num | 0.828 | 1% | [0.8197, 0.8363] | 1% |  |
| 8-08-problem-set-1 | p3-heat | 5.00 | 1% | [4.95, 5.05] | 1% |  |
| 8-08-problem-set-1 | p4-z | 9.08 | 1% | [8.989, 9.171] | 1% |  |
| 8-08-problem-set-10 | p1-bpnum | 4.44 | 1% | [4.396, 4.484] | 1% |  |
| 8-08-problem-set-10 | p2-tf | 24600 | 1% | [2.435e+04, 2.485e+04] | 1% | e |
| 8-08-problem-set-10 | p2-tstarnum | 0.804 | 1% | [0.796, 0.812] | 1% |  |
| 8-08-problem-set-10 | p2-gamma | 1.67 | 1% | [1.653, 1.687] | 1% |  |
| 8-08-problem-set-10 | p3-tf | 872 | 1% | [863.3, 880.7] | 1% | e |
| 8-08-problem-set-10 | p3-rf | 30.3 | 1% | [30, 30.6] | 1% |  |
| 8-08-problem-set-10 | p4-ebnum | 0.774 | 1% | [0.7663, 0.7817] | 1% |  |
| 8-08-problem-set-10 | p4-ratio | 2290 | 1% | [2267, 2313] | 1% | e |
| 8-08-problem-set-11 | p1-num | 2.02 | 1% | [2, 2.04] | 1% |  |
| 8-08-problem-set-11 | p1-stages | 338 | 1% | [334.6, 341.4] | 1% | e |
| 8-08-problem-set-11 | p2-ratio | 0.683 | 1% | [0.6762, 0.6898] | 1% |  |
| 8-08-problem-set-11 | p2-h2 | 1316 | 1% | [1303, 1329] | 1% | e |
| 8-08-problem-set-11 | p2-pipe | 1.72 | 2% | [1.686, 1.754] | 2% |  |
| 8-08-problem-set-11 | p3-ratio | 3 | 1% | [2.97, 3.03] | 1% |  |
| 8-08-problem-set-11 | p4-lam | 81.3 | 2% | [79.67, 82.93] | 2% |  |
| 8-08-problem-set-11 | p4-k | 1.68 | 2% | [1.646, 1.714] | 2% |  |
| 8-08-problem-set-11 | p4-q | 2.79 | 2% | [2.734, 2.846] | 2% |  |
| 8-08-problem-set-11 | p4-p | 0.687 | 2% | [0.6733, 0.7007] | 2% |  |
| 8-08-problem-set-11 | p5-lam | 1.78 | 2% | [1.744, 1.816] | 2% |  |
| 8-08-problem-set-11 | p5-yr | 2870 | 2% | [2813, 2927] | 2% | e |
| 8-08-problem-set-11 | p5-factor | 3.90 | 2% | [3.822, 3.978] | 2% |  |
| 8-08-problem-set-12 | p1-lnum | 2.44 | 2% | [2.391, 2.489] | 2% |  |
| 8-08-problem-set-12 | p1-al | 270 | 2% | [264.6, 275.4] | 2% | e |
| 8-08-problem-set-12 | p2-c | 2.04 | 2% | [1.999, 2.081] | 2% |  |
| 8-08-problem-set-12 | p2-lam | 200 | 3% | [194, 206] | 3% | e |
| 8-08-problem-set-12 | p3-n | 8.43 | 1% | [8.346, 8.514] | 1% |  |
| 8-08-problem-set-12 | p3-tau | 2.47 | 2% | [2.421, 2.519] | 2% |  |
| 8-08-problem-set-12 | p3-lam | 38.9 | 2% | [38.12, 39.68] | 2% |  |
| 8-08-problem-set-12 | p4-lam | 95.0 | 2% | [93.1, 96.9] | 2% |  |
| 8-08-problem-set-12 | p4-nu | 7.74 | 2% | [7.585, 7.895] | 2% |  |
| 8-08-problem-set-12 | p4-fric | 1.46 | 3% | [1.416, 1.504] | 3% |  |
| 8-08-problem-set-12 | p4-t | 5.87 | 3% | [5.694, 6.046] | 3% |  |
| 8-08-problem-set-12 | p5-half | 1.665 | 1% | [1.648, 1.682] | 1% |  |
| 8-08-problem-set-2 | p1-num | 0.2931 | 1% | [0.2902, 0.296] | 1% |  |
| 8-08-problem-set-2 | p3-gas | 0.630 | 1% | [0.6237, 0.6363] | 1% |  |
| 8-08-problem-set-2 | p4-num | 476.3 | 1% | [471.5, 481.1] | 1% |  |
| 8-08-problem-set-2 | p4-frac | 0.0460 | 1% | [0.04554, 0.04646] | 1% |  |
| 8-08-problem-set-2 | p5-const | 0.2857 | 1% | [0.2828, 0.2886] | 1% |  |
| 8-08-problem-set-2 | p5-lapse | 9.78 | 1% | [9.682, 9.878] | 1% |  |
| 8-08-problem-set-3 | p1-num | 0.937 | 1% | [0.9276, 0.9464] | 1% |  |
| 8-08-problem-set-3 | p2-beta | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-08-problem-set-3 | p3-num-tc | 7.5 | 1% | [7.425, 7.575] | 1% |  |
| 8-08-problem-set-3 | p3-num-t1 | 10.0 | 1% | [9.9, 10.1] | 1% |  |
| 8-08-problem-set-4 | p1-num | 0.1677 | 1% | [0.166, 0.1694] | 1% |  |
| 8-08-problem-set-4 | p1-half | 3414 | 1% | [3380, 3448] | 1% | e |
| 8-08-problem-set-4 | p2-cover | 0.0340 | 1% | [0.03366, 0.03434] | 1% |  |
| 8-08-problem-set-5 | p1-num-ni | 7.28e15 | 3% | [7.062e+15, 7.498e+15] | 3% |  |
| 8-08-problem-set-5 | p1-num-nh | 5.29e10 | 3% | [5.131e+10, 5.449e+10] | 3% |  |
| 8-08-problem-set-5 | p2-cond | 0.333 | 1% | [0.3297, 0.3363] | 1% |  |
| 8-08-problem-set-5 | p3-num | 0.206 | 2% | [0.2019, 0.2101] | 2% |  |
| 8-08-problem-set-5 | p3-quantum | 2.52e-13 | 2% | [2.47e-13, 2.57e-13] | 2% |  |
| 8-08-problem-set-5 | p4-left | 0.0197 | 2% | [0.01931, 0.02009] | 2% |  |
| 8-08-problem-set-6 | p1-num | 0.452 | 1% | [0.4475, 0.4565] | 1% |  |
| 8-08-problem-set-6 | p2-num | 0.385 | 1% | [0.3811, 0.3889] | 1% |  |
| 8-08-problem-set-6 | p3-ratio | 1.368 | 1% | [1.354, 1.382] | 1% |  |
| 8-08-problem-set-6 | p4-n | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-08-problem-set-6 | p4-dens | 410.5 | 1% | [406.4, 414.6] | 1% |  |
| 8-08-problem-set-6 | p4-early | 2725 | 1% | [2698, 2752] | 1% | e |
| 8-08-problem-set-6 | p4-s | 3.602 | 1% | [3.566, 3.638] | 1% |  |
| 8-08-problem-set-7 | p1-tc | 398 | 1% | [394, 402] | 1% | e |
| 8-08-problem-set-7 | p1-u | 0.770 | 1% | [0.7623, 0.7777] | 1% |  |
| 8-08-problem-set-7 | p1-p | 0.514 | 1% | [0.5089, 0.5191] | 1% |  |
| 8-08-problem-set-7 | p1-pa | 2.82e-10 | 1% | [2.792e-10, 2.848e-10] | 1% |  |
| 8-08-problem-set-7 | p2-mu | -0.01849 | 1% | [-0.01867, -0.01831] | 1% |  |
| 8-08-problem-set-7 | p3-t99 | 2.236 | 1% | [2.214, 2.258] | 1% |  |
| 8-08-problem-set-7 | p4-c | 2.71e-4 | 1% | [0.0002683, 0.0002737] | 1% |  |
| 8-08-problem-set-7 | p4-cid | 0.0570 | 1% | [0.05643, 0.05757] | 1% |  |
| 8-08-problem-set-8 | p1-a | 2.81 | 1% | [2.782, 2.838] | 1% |  |
| 8-08-problem-set-8 | p1-atoms | 1.55 | 1% | [1.534, 1.566] | 1% |  |
| 8-08-problem-set-8 | p2-vc-num | 6.01 | 1% | [5.95, 6.07] | 1% |  |
| 8-08-problem-set-8 | p2-rc-num | 0.459 | 1% | [0.4544, 0.4636] | 1% |  |
| 8-08-problem-set-8 | p2-kmax-num | 4.87 | 1% | [4.821, 4.919] | 1% |  |
| 8-08-problem-set-9 | p1-nu | -0.5 | 0.01 | [-0.51, -0.49] | 2% |  |
| 8-08-problem-set-9 | p2-shift | 0.00822 | 1% | [0.008138, 0.008302] | 1% |  |
| 8-08-problem-set-9 | p3-num | 0.5413 | 1% | [0.5359, 0.5467] | 1% |  |
| 8-08-problem-set-9 | p4-rnum | 11.0 | 1% | [10.89, 11.11] | 1% |  |
| 8-08-problem-set-9 | p4-x | 0.00535 | 2% | [0.005243, 0.005457] | 2% |  |

### 8.09

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-09-problem-set-1 | p2a-ratio | 2.414 | 1% | [2.39, 2.438] | 1% |  |
| 8-09-problem-set-1 | p3c-angle | 60.6 | 1% | [59.99, 61.21] | 1% |  |
| 8-09-problem-set-1 | p3c-osc | 8.71 | 1% | [8.623, 8.797] | 1% |  |
| 8-09-problem-set-1 | p4c-wmax | 10.0 | 1% | [9.9, 10.1] | 1% |  |
| 8-09-problem-set-10 | p1a-n | 4 | 0.1 | [3.9, 4.1] | 2.5% |  |
| 8-09-problem-set-10 | p1a-y | -3 | 0.01 | [-3.01, -2.99] | 0.33% |  |
| 8-09-problem-set-10 | p1b-freq | 1.414 | 1% | [1.4, 1.428] | 1% |  |
| 8-09-problem-set-10 | p1c-s1 | 4.5 | 1% | [4.455, 4.545] | 1% |  |
| 8-09-problem-set-10 | p1c-s2 | -2.5 | 1% | [-2.525, -2.475] | 1% |  |
| 8-09-problem-set-10 | p2c-w | 1.5 | 1% | [1.485, 1.515] | 1% |  |
| 8-09-problem-set-10 | p2d-w | 3.06 | 1% | [3.029, 3.091] | 1% |  |
| 8-09-problem-set-10 | p3b-onset | 0.287 | 2% | [0.2813, 0.2927] | 2% |  |
| 8-09-problem-set-10 | p4a-amp | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-09-problem-set-10 | p4a-per | 6.283 | 1% | [6.22, 6.346] | 1% |  |
| 8-09-problem-set-10 | p4b-a2 | 2 | 1% | [1.98, 2.02] | 1% |  |
| 8-09-problem-set-10 | p5a-d | 3.66e-11 | 2% | [3.587e-11, 3.733e-11] | 2% |  |
| 8-09-problem-set-10 | p5b-r3 | 3.5441 | 0.0005 | [3.544, 3.545] | 0.014% | d |
| 8-09-problem-set-10 | p5b-r4 | 3.5644 | 0.0005 | [3.564, 3.565] | 0.014% | d |
| 8-09-problem-set-10 | p5b-q1 | 4.751 | 3% | [4.608, 4.894] | 3% |  |
| 8-09-problem-set-10 | p5b-q2 | 4.656 | 3% | [4.516, 4.796] | 3% |  |
| 8-09-problem-set-10 | p5d-i | 1.319 | 1% | [1.306, 1.332] | 1% |  |
| 8-09-problem-set-10 | p5d-ii | 2 | 1% | [1.98, 2.02] | 1% |  |
| 8-09-problem-set-10 | p5d-iii | 2.718 | 1% | [2.691, 2.745] | 1% |  |
| 8-09-problem-set-2 | p3c-angle | 60.0 | 1% | [59.4, 60.6] | 1% |  |
| 8-09-problem-set-2 | p3d-slip | 36.9 | 1% | [36.53, 37.27] | 1% |  |
| 8-09-problem-set-2 | p4c-c | 4.55 | 1% | [4.505, 4.595] | 1% |  |
| 8-09-problem-set-2 | p5d-angle | 35.3 | 1% | [34.95, 35.65] | 1% |  |
| 8-09-problem-set-2 | p5d-time | 0.563 | 1% | [0.5574, 0.5686] | 1% |  |
| 8-09-problem-set-2 | p5g-land | 0.840 | 1% | [0.8316, 0.8484] | 1% |  |
| 8-09-problem-set-3 | p1c-angle | 120 | 1% | [118.8, 121.2] | 1% | e |
| 8-09-problem-set-3 | p2b-time | 31.8 | 1% | [31.48, 32.12] | 1% |  |
| 8-09-problem-set-3 | p4b-small | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-09-problem-set-3 | p4b-mid | 1.75 | 1% | [1.732, 1.768] | 1% |  |
| 8-09-problem-set-3 | p4b-large | 2.25 | 1% | [2.228, 2.272] | 1% |  |
| 8-09-problem-set-4 | p1c-num | 109 | 1% | [107.9, 110.1] | 1% | e |
| 8-09-problem-set-4 | p3b-ratio | 1.732 | 1% | [1.715, 1.749] | 1% |  |
| 8-09-problem-set-4 | p3c-ratio | -2.00 | 1% | [-2.02, -1.98] | 1% |  |
| 8-09-problem-set-4 | p4c-num | 10.57 | 1% | [10.46, 10.68] | 1% |  |
| 8-09-problem-set-5 | p6b-range | 35.3 | 1% | [34.95, 35.65] | 1% |  |
| 8-09-problem-set-7 | p3b-h2max | 9.33 | 1% | [9.237, 9.423] | 1% |  |
| 8-09-problem-set-7 | p4c-num | 250 | 1% | [247.5, 252.5] | 1% | e |
| 8-09-problem-set-8 | p1a-wall | 90 | 1% | [89.1, 90.9] | 1% |  |
| 8-09-problem-set-8 | p1b-wall | 45 | 1% | [44.55, 45.45] | 1% |  |
| 8-09-problem-set-8 | p1c-wall | 270 | 1% | [267.3, 272.7] | 1% | e |
| 8-09-problem-set-8 | p2b-min | -3375 | 1% | [-3409, -3341] | 1% | e |
| 8-09-problem-set-8 | p2c-top | 1.28 | 1% | [1.267, 1.293] | 1% |  |
| 8-09-problem-set-8 | p4b-num | 0.310 | 1% | [0.3069, 0.3131] | 1% |  |
| 8-09-problem-set-8 | p5a-n | 3 | 1% | [2.97, 3.03] | 1% |  |
| 8-09-problem-set-8 | p5b-v | 2 | 1% | [1.98, 2.02] | 1% |  |
| 8-09-problem-set-8 | p5c-f | 4 | 1% | [3.96, 4.04] | 1% |  |
| 8-09-problem-set-8 | p6a-n | 4 | 1% | [3.96, 4.04] | 1% |  |
| 8-09-problem-set-8 | p6b-d | 0.5 | 1% | [0.495, 0.505] | 1% |  |
| 8-09-problem-set-8 | p6b-w | 4 | 1% | [3.96, 4.04] | 1% |  |
| 8-09-problem-set-8 | p6b-f | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-09-problem-set-9 | p1c-us | 0.213 | 1% | [0.2109, 0.2151] | 1% |  |
| 8-09-problem-set-9 | p2d-deg | 31.7 | 1% | [31.38, 32.02] | 1% |  |
| 8-09-problem-set-9 | p3a-rate | 13.67 | 1% | [13.53, 13.81] | 1% |  |
| 8-09-problem-set-9 | p3b-num | 8.49 | 1% | [8.405, 8.575] | 1% |  |
| 8-09-problem-set-9 | p3c-num | 11.83 | 1% | [11.71, 11.95] | 1% |  |
| 8-09-problem-set-9 | p5a-rc | 1 | 0.01 | [0.99, 1.01] | 1% |  |
| 8-09-problem-set-9 | p5b-rc | 0 | 0.01 | [-0.01, 0.01] | n/a | b c |
| 8-09-problem-set-9 | p5c-rc | -1 | 0.01 | [-1.01, -0.99] | 1% |  |

### 8.902

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-902-problem-set-1 | p1a-s1 | 120.17 | 0.02 | [120.2, 120.2] | 0.017% | d |
| 8-902-problem-set-1 | p1a-s2 | 120.10 | 0.02 | [120.1, 120.1] | 0.017% | d |
| 8-902-problem-set-1 | p1b-npix | 890 | 2% | [872.2, 907.8] | 2% | e |
| 8-902-problem-set-1 | p1c-mu1 | 22.89 | 0.02 | [22.87, 22.91] | 0.087% |  |
| 8-902-problem-set-1 | p1c-mu2 | 21.91 | 0.02 | [21.89, 21.93] | 0.091% |  |
| 8-902-problem-set-1 | p1d-rs1 | 5.80 | 2% | [5.684, 5.916] | 2% |  |
| 8-902-problem-set-1 | p1d-re1 | 11.5 | 2% | [11.27, 11.73] | 2% |  |
| 8-902-problem-set-1 | p1d-rs2 | 8.28 | 2% | [8.114, 8.446] | 2% |  |
| 8-902-problem-set-1 | p1d-re2 | 58.2 | 2% | [57.04, 59.36] | 2% |  |
| 8-902-problem-set-1 | p2a-t1 | 4140 | 5% | [3933, 4347] | 5% | e |
| 8-902-problem-set-1 | p2a-t2 | 6300 | 5% | [5985, 6615] | 5% | e |
| 8-902-problem-set-1 | p2b-lc2 | 6677.2 | 0.3 | [6677, 6678] | 0.0045% | d |
| 8-902-problem-set-1 | p2b-v2 | 5215 | 1% | [5163, 5267] | 1% | e |
| 8-902-problem-set-1 | p2b-lc1 | 8792.1 | 0.3 | [8792, 8792] | 0.0034% | d |
| 8-902-problem-set-1 | p2b-v1 | 8776 | 1% | [8688, 8864] | 1% | e |
| 8-902-problem-set-1 | p2c-d1 | 123.6 | 1% | [122.4, 124.8] | 1% |  |
| 8-902-problem-set-1 | p2c-d2 | 73.4 | 1% | [72.67, 74.13] | 1% |  |
| 8-902-problem-set-1 | p2c-r1 | 6.91 | 2% | [6.772, 7.048] | 2% |  |
| 8-902-problem-set-1 | p2c-r2 | 2.95 | 2% | [2.891, 3.009] | 2% |  |
| 8-902-problem-set-1 | p2d-m1 | 14.36 | 0.02 | [14.34, 14.38] | 0.14% | d |
| 8-902-problem-set-1 | p2d-m2 | 13.78 | 0.02 | [13.76, 13.8] | 0.15% |  |
| 8-902-problem-set-1 | p2d-l1 | 2.71e10 | 3% | [2.629e+10, 2.791e+10] | 3% |  |
| 8-902-problem-set-1 | p2d-l2 | 1.64e10 | 3% | [1.591e+10, 1.689e+10] | 3% |  |
| 8-902-problem-set-1 | p3a-sl | 7.63 | 2% | [7.477, 7.783] | 2% |  |
| 8-902-problem-set-1 | p3a-sv | 260 | 2% | [254.8, 265.2] | 2% | e |
| 8-902-problem-set-1 | p3b-ss | 244 | 2% | [239.1, 248.9] | 2% | e |
| 8-902-problem-set-1 | p3c-m | 9.58e10 | 4% | [9.197e+10, 9.963e+10] | 4% |  |
| 8-902-problem-set-1 | p3c-ml | 3.54 | 5% | [3.363, 3.717] | 5% |  |
| 8-902-problem-set-2 | p1b-rp | 0.3109 | 1% | [0.3078, 0.314] | 1% |  |
| 8-902-problem-set-2 | p1b-tr | 2.985 | 1% | [2.955, 3.015] | 1% |  |
| 8-902-problem-set-2 | p1b-dpsi | 247.9 | 1% | [245.4, 250.4] | 1% |  |
| 8-902-problem-set-2 | p1c-turns | 68.86 | 1% | [68.17, 69.55] | 1% |  |
| 8-902-problem-set-2 | p1d-frac | 0.639 | 2% | [0.6262, 0.6518] | 2% |  |
| 8-902-problem-set-2 | p2c-sigma | 224 | 1% | [221.8, 226.2] | 1% | e |
| 8-902-problem-set-3 | p1b-v0-num | 231.1 | 2 | [229.1, 233.1] | 0.87% |  |
| 8-902-problem-set-3 | p1b-period-num | 226 | 2 | [224, 228] | 0.88% | e |
| 8-902-problem-set-3 | p1c-slope-num | -2.45 | 0.03 | [-2.48, -2.42] | 1.2% |  |
| 8-902-problem-set-3 | p1d-kappa-num | 36.68 | 0.4 | [36.28, 37.08] | 1.1% |  |
| 8-902-problem-set-3 | p1e-ratio-num | 1.349 | 0.015 | [1.334, 1.364] | 1.1% |  |
| 8-902-problem-set-3 | p2b-factor | 0.5427 | 0.005 | [0.5377, 0.5477] | 0.92% |  |
| 8-902-problem-set-3 | p2c-cloud | 1.066 | 0.015 | [1.051, 1.081] | 1.4% |  |
| 8-902-problem-set-4* | p1-z1 | 2.906 | 0.5% | [2.891, 2.921] | 0.5% |  |
| 8-902-problem-set-4* | p1-z2 | 3.010 | 0.5% | [2.995, 3.025] | 0.5% |  |
| 8-902-problem-set-4* | p1-dchi | 99.6 | 1% | [98.6, 100.6] | 1% |  |
| 8-902-problem-set-4* | p1-z21 | 0.02653 | 1% | [0.02626, 0.0268] | 1% |  |
| 8-902-problem-set-4* | p1-hz1 | 306.1 | 1% | [303, 309.2] | 1% |  |
| 8-902-problem-set-4* | p1-dchi-approx | 101.5 | 1% | [100.5, 102.5] | 1% |  |
| 8-902-problem-set-4* | p2-sigma | 0.156 | 2% | [0.1529, 0.1591] | 2% |  |
| 8-902-problem-set-4* | p2-radius | 223 | 2% | [218.5, 227.5] | 2% | e |
| 8-902-problem-set-4* | p3-chirec | 13430 | 1% | [1.33e+04, 1.356e+04] | 1% | e |
| 8-902-problem-set-4* | p3-theta-gal | 0.914 | 2% | [0.8957, 0.9323] | 2% |  |
| 8-902-problem-set-4* | p3-theta-200 | 0.853 | 2% | [0.8359, 0.8701] | 2% |  |
| 8-902-problem-set-4* | p3-dh-rec | 249.6 | 2% | [244.6, 254.6] | 2% |  |
| 8-902-problem-set-4* | p3-mass-rec | 4.75 | 2% | [4.655, 4.845] | 2% |  |
| 8-902-problem-set-4* | p3-zeq | 3640 | 1% | [3604, 3676] | 1% | e |
| 8-902-problem-set-4* | p3-mass-eq | 4.17 | 2% | [4.087, 4.253] | 2% |  |
| 8-902-problem-set-5* | p1-eta | 4.297 | 1% | [4.254, 4.34] | 1% |  |
| 8-902-problem-set-5* | p1-mass | 3.99 | 2% | [3.91, 4.07] | 2% |  |
| 8-902-problem-set-5* | p1-ml | 133 | 3% | [129, 137] | 3% | e |
| 8-902-problem-set-5* | p1-halo | 177 | 3% | [171.7, 182.3] | 3% | e |
| 8-902-problem-set-5* | p1-rmax | 998 | 2% | [978, 1018] | 2% | e |
| 8-902-problem-set-5* | p1-tmax | 8.26 | 2% | [8.095, 8.425] | 2% |  |
| 8-902-problem-set-5* | p1-tcoll | 2.81 | 3% | [2.726, 2.894] | 3% |  |
| 8-902-problem-set-5* | p2-dl-flat | 6515 | 1% | [6450, 6580] | 1% | e |
| 8-902-problem-set-5* | p2-dl-closed | 4770 | 1% | [4722, 4818] | 1% | e |
| 8-902-problem-set-5* | p2-dl-open | 5790 | 1% | [5732, 5848] | 1% | e |
| 8-902-problem-set-5* | p2-mu | 42.23 | 0.02 | [42.21, 42.25] | 0.047% | d |
| 8-902-problem-set-5* | p2-sig | 0.110 | 2% | [0.1078, 0.1122] | 2% |  |
| 8-902-problem-set-5* | p2-dmu | 0.222 | 3% | [0.2153, 0.2287] | 3% |  |
| 8-902-problem-set-6* | p1-tff | 340 | 2% | [333.2, 346.8] | 2% | e |
| 8-902-problem-set-6* | p1-t12 | 1.39 | 2% | [1.362, 1.418] | 2% |  |
| 8-902-problem-set-6* | p1-p | 0.667 | 1% | [0.6603, 0.6737] | 1% |  |
| 8-902-problem-set-6* | p1-nh | 9.16 | 2% | [8.977, 9.343] | 2% |  |
| 8-902-problem-set-6* | p1-tcool | 199 | 2% | [195, 203] | 2% | e |
| 8-902-problem-set-6* | p1-mmax | 2.23 | 3% | [2.163, 2.297] | 3% |  |
| 8-902-problem-set-6* | p2-mstar | 0.159 | 1% | [0.1574, 0.1606] | 1% |  |
| 8-902-problem-set-7* | q1-rmin-pc | 122 | 2% | [119.6, 124.4] | 2% | e |
| 8-902-problem-set-7* | q1-lamj | 584 | 2% | [572.3, 595.7] | 2% | e |
| 8-902-problem-set-7* | q2-peak-ratio | 0.434 | 1% | [0.4297, 0.4383] | 1% |  |
| 8-902-problem-set-7* | q3-ratio | 2.20 | 1% | [2.178, 2.222] | 1% |  |
| 8-902-problem-set-7* | q3-ncross | 1448 | 1% | [1434, 1462] | 1% | e |
| 8-902-problem-set-7* | q4-vnum | 207 | 2% | [202.9, 211.1] | 2% | e |
| 8-902-problem-set-7* | sa-slope | -2 | 1% | [-2.02, -1.98] | 1% |  |
| 8-902-problem-set-7* | sd-b | 0.0413 | 2% | [0.04047, 0.04213] | 2% |  |
| 8-902-problem-set-7* | sd-number | 6.36 | 2% | [6.233, 6.487] | 2% |  |

### Ferreras

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| ferreras-problem-set-1* | p1-b | 235 | 1% | [232.7, 237.3] | 1% | e |
| ferreras-problem-set-1* | p2-a | 3 | 1% | [2.97, 3.03] | 1% |  |
| ferreras-problem-set-1* | p2-b | 1.05 | 2% | [1.029, 1.071] | 2% |  |
| ferreras-problem-set-1* | p2-ml | 105 | 2% | [102.9, 107.1] | 2% | e |
| ferreras-problem-set-1* | p2-fstar | 4.8 | 2% | [4.704, 4.896] | 2% |  |
| ferreras-problem-set-1* | p2-d | 5 | 1% | [4.95, 5.05] | 1% |  |
| ferreras-problem-set-1* | p3-n | 731 | 1% | [723.7, 738.3] | 1% | e |
| ferreras-problem-set-1* | p3-m | 10.0 | 1% | [9.9, 10.1] | 1% |  |
| ferreras-problem-set-1* | p3-l | 322 | 1% | [318.8, 325.2] | 1% | e |
| ferreras-problem-set-1* | p4-b | 2.68 | 1% | [2.653, 2.707] | 1% |  |
| ferreras-problem-set-1* | p5-rho | 3730 | 2% | [3655, 3805] | 2% | e |
| ferreras-problem-set-1* | p5-core | 5.27 | 2% | [5.165, 5.375] | 2% |  |
| ferreras-problem-set-1* | p5-tidal | 11.0 | 2% | [10.78, 11.22] | 2% |  |
| ferreras-problem-set-1* | p6-b | 3.95 | 1% | [3.911, 3.99] | 1% |  |
| ferreras-problem-set-1* | p8-a | 0.682 | 1% | [0.6752, 0.6888] | 1% |  |
| ferreras-problem-set-1* | p8-b | 2.98 | 1% | [2.95, 3.01] | 1% |  |
| ferreras-problem-set-1* | p8-c-te | 0.849 | 1% | [0.8405, 0.8575] | 1% |  |
| ferreras-problem-set-1* | p8-c-dm | 1.49 | 1% | [1.475, 1.505] | 1% |  |
| ferreras-problem-set-1* | p8-e | 2.13 | 2% | [2.087, 2.173] | 2% |  |
| ferreras-problem-set-2* | e1-r0 | 319 | 2% | [312.6, 325.4] | 2% | e |
| ferreras-problem-set-2* | e1-r1 | 160 | 2% | [156.8, 163.2] | 2% | e |
| ferreras-problem-set-2* | e1-zc | 0.596 | 2% | [0.5841, 0.6079] | 2% |  |
| ferreras-problem-set-2* | e2-a01 | 0.228 | 1% | [0.2257, 0.2303] | 1% |  |
| ferreras-problem-set-2* | e2-a10 | 0.149 | 1% | [0.1475, 0.1505] | 1% |  |
| ferreras-problem-set-2* | e3-nfw | 2.163 | 0.5% | [2.152, 2.174] | 0.5% |  |
| ferreras-problem-set-2* | e3-hern | 1 | 1% | [0.99, 1.01] | 1% |  |
| ferreras-problem-set-2* | e3-re-hern | 2.414 | 0.5% | [2.402, 2.426] | 0.5% |  |
| ferreras-problem-set-2* | e3-re-nfw | 2.217 | 1% | [2.195, 2.239] | 1% |  |
| ferreras-problem-set-2* | e4-c | 0.219 | 1% | [0.2168, 0.2212] | 1% |  |
| ferreras-problem-set-2* | e4-ratio | 0.183 | 1% | [0.1812, 0.1848] | 1% |  |
| ferreras-problem-set-2* | e4-krot | 0.0222 | 1% | [0.02198, 0.02242] | 1% |  |
| ferreras-problem-set-2* | e5-rf | 0.0961 | 1% | [0.09514, 0.09706] | 1% |  |
| ferreras-problem-set-2* | e5-v005 | 1.071 | 0.5% | [1.066, 1.076] | 0.5% |  |
| ferreras-problem-set-2* | e5-v07 | 0.983 | 0.5% | [0.9781, 0.9879] | 0.5% |  |
| ferreras-problem-set-2* | e5-rf-compact | 0.0696 | 1% | [0.0689, 0.0703] | 1% |  |
| ferreras-problem-set-2* | e5-rpeak | 0.086 | 3% | [0.08342, 0.08858] | 3% |  |
| ferreras-problem-set-2* | e5-vpeak | 1.249 | 1% | [1.237, 1.261] | 1% |  |
| ferreras-problem-set-3* | p1-rhom | 4.08 | 2% | [3.998, 4.162] | 2% |  |
| ferreras-problem-set-3* | p1-d0 | 9.06 | 2% | [8.879, 9.241] | 2% |  |
| ferreras-problem-set-3* | p1-d2 | 3.71 | 2% | [3.636, 3.784] | 2% |  |
| ferreras-problem-set-3* | p1-nside | 1598 | 1% | [1582, 1614] | 1% | e |
| ferreras-problem-set-3* | p2-c | 0.75 | 1% | [0.7425, 0.7575] | 1% |  |
| ferreras-problem-set-3* | p2-y5 | 3.57 | 1% | [3.534, 3.606] | 1% |  |
| ferreras-problem-set-3* | p2-open | 8.91 | 1% | [8.821, 8.999] | 1% |  |
| ferreras-problem-set-3* | p3-dm-fast | 1.333 | 1% | [1.32, 1.346] | 1% |  |
| ferreras-problem-set-3* | p3-dm-slow | 1.25 | 1% | [1.238, 1.262] | 1% |  |
| ferreras-problem-set-3* | p4-n | -1.2 | 1% | [-1.212, -1.188] | 1% |  |
| ferreras-problem-set-3* | p4-bias | 1.222 | 1% | [1.21, 1.234] | 1% |  |
| ferreras-problem-set-4* | e1-ng | 413 | 1% | [408.9, 417.1] | 1% | e |
| ferreras-problem-set-4* | e1-rg | 0.262 | 2% | [0.2568, 0.2672] | 2% |  |
| ferreras-problem-set-4* | e1-nn | 338 | 2% | [331.2, 344.8] | 2% | e |
| ferreras-problem-set-4* | e1-ratio | 0.683 | 1% | [0.6762, 0.6898] | 1% |  |
| ferreras-problem-set-4* | e2-temp20 | 7.97 | 2% | [7.811, 8.129] | 2% |  |
| ferreras-problem-set-4* | e3-ne | 0.216 | 2% | [0.2117, 0.2203] | 2% |  |
| ferreras-problem-set-4* | e3-z | 41.4 | 2% | [40.57, 42.23] | 2% |  |
| ferreras-problem-set-4* | e3-obmax | 4.71e-5 | 3% | [4.569e-05, 4.851e-05] | 3% |  |
| ferreras-problem-set-4* | e4-integral | 1.803 | 1% | [1.785, 1.821] | 1% |  |
| ferreras-problem-set-4* | e4-mean | 3.15 | 1% | [3.119, 3.181] | 1% |  |
| ferreras-problem-set-4* | e4-gstar | 3.36 | 1% | [3.326, 3.394] | 1% |  |
| ferreras-problem-set-4* | e5-cold | 0.0107 | 2% | [0.01049, 0.01091] | 2% |  |
| ferreras-problem-set-4* | e5-m | 112 | 2% | [109.8, 114.2] | 2% | e |
| ferreras-problem-set-4* | e5-hot | 5.65e-6 | 2% | [5.537e-06, 5.763e-06] | 2% |  |
| ferreras-problem-set-4* | e6-frac | 8.89e-4 | 2% | [0.0008712, 0.0009068] | 2% |  |
| ferreras-problem-set-4* | e6-kt | 84.2 | 2% | [82.52, 85.88] | 2% |  |
| ferreras-problem-set-4* | e6-temp | 0.977 | 2% | [0.9575, 0.9965] | 2% |  |
| ferreras-problem-set-4* | e6-t | 238 | 3% | [230.9, 245.1] | 3% | e |
| ferreras-problem-set-4* | e7-g1 | 2.46 | 1% | [2.435, 2.485] | 1% |  |
| ferreras-problem-set-4* | e7-g10 | 6.4 | 1% | [6.336, 6.464] | 1% |  |
| ferreras-problem-set-5* | e1-t | 1.71 | 2% | [1.676, 1.744] | 2% |  |
| ferreras-problem-set-5* | e1-tnu | 1.32 | 2% | [1.294, 1.346] | 2% |  |
| ferreras-problem-set-5* | e1-tg | 0.738 | 2% | [0.7232, 0.7528] | 2% |  |
| ferreras-problem-set-5* | e2-xf | 26.9 | 1% | [26.63, 27.17] | 1% |  |
| ferreras-problem-set-5* | e2-tf | 3.72 | 2% | [3.646, 3.794] | 2% |  |
| ferreras-problem-set-5* | e2-t | 1.75 | 2% | [1.715, 1.785] | 2% |  |
| ferreras-problem-set-5* | e3-rho1 | 0.00220 | 2% | [0.002156, 0.002244] | 2% |  |
| ferreras-problem-set-5* | e3-zc | 9.29 | 2% | [9.104, 9.476] | 2% |  |
| ferreras-problem-set-5* | e3-rho8 | 0.439 | 3% | [0.4258, 0.4522] | 3% |  |
| ferreras-problem-set-5* | e3-gamma | 2.07 | 2% | [2.029, 2.111] | 2% |  |
| ferreras-problem-set-5* | e4-xe | 29.1 | 2% | [28.52, 29.68] | 2% |  |
| ferreras-problem-set-5* | e4-vmin | 95.3 | 2% | [93.39, 97.21] | 2% |  |
| ferreras-problem-set-5* | e6-excess | 2.19 | 2% | [2.146, 2.234] | 2% |  |
| ferreras-problem-set-5* | e6-a0 | 5.54 | 2% | [5.429, 5.651] | 2% |  |
| ferreras-problem-set-5* | e6-v | 141 | 2% | [138.2, 143.8] | 2% | e |
| ferreras-problem-set-5* | e7-arcsec | 0.525 | 2% | [0.5145, 0.5355] | 2% |  |
| ferreras-problem-set-5* | e7-ratio | 1.690 | 1% | [1.673, 1.707] | 1% |  |
| ferreras-problem-set-5* | e8-z2 | 1.933 | 1% | [1.914, 1.952] | 1% |  |

### 8.962

| Page | Box | Value | Tolerance | Interval | ± | Flags |
|---|---|---|---|---|---|---|
| 8-962-problem-set-1 | p3b-trace | 3 | 0.01 | [2.99, 3.01] | 0.33% |  |
| 8-962-problem-set-1 | p5b-vmin | 0.7071 | 1% | [0.7, 0.7142] | 1% |  |
| 8-962-problem-set-1 | p5c-theta | 11.42 | 1% | [11.31, 11.53] | 1% |  |
| 8-962-problem-set-1 | p6a-kt | 2.353 | 1% | [2.329, 2.377] | 1% |  |
| 8-962-problem-set-1 | p6a-eth | 2.885e11 | 2% | [2.827e+11, 2.943e+11] | 2% |  |
| 8-962-problem-set-10 | p2a-rho | 7.43 | 1% | [7.356, 7.504] | 1% |  |
| 8-962-problem-set-10 | p2a-p | 8.26 | 1% | [8.177, 8.343] | 1% |  |
| 8-962-problem-set-10 | p2a-kfac | 1.36 | 1% | [1.346, 1.374] | 1% |  |
| 8-962-problem-set-10 | p2a-k | 7.30 | 1% | [7.227, 7.373] | 1% |  |
| 8-962-problem-set-10 | p2b-r | 12.68 | 2% | [12.43, 12.93] | 2% |  |
| 8-962-problem-set-10 | p2b-m | 1.002 | 2% | [0.982, 1.022] | 2% |  |
| 8-962-problem-set-10 | p2c-z | 0.0899 | 2% | [0.0881, 0.0917] | 2% |  |
| 8-962-problem-set-10 | p2d-mp | 1.082 | 2% | [1.06, 1.104] | 2% |  |
| 8-962-problem-set-10 | p2e-delta | 0.0794 | 2% | [0.07781, 0.08099] | 2% |  |
| 8-962-problem-set-10 | p3b-m | 1.174 | 2% | [1.151, 1.197] | 2% |  |
| 8-962-problem-set-10 | p3b-msun | 0.795 | 2% | [0.7791, 0.8109] | 2% |  |
| 8-962-problem-set-10 | p3b-rho | 4.89 | 10% | [4.401, 5.379] | 10% | c |
| 8-962-problem-set-11 | p1f-eta | 1.087 | 1% | [1.076, 1.098] | 1% |  |
| 8-962-problem-set-11 | p1f-tau | 7.80 | 1% | [7.722, 7.878] | 1% |  |
| 8-962-problem-set-11 | p2d-max | 0.1667 | 1% | [0.165, 0.1684] | 1% |  |
| 8-962-problem-set-11 | p2e-zs | 0.225 | 1% | [0.2228, 0.2273] | 1% |  |
| 8-962-problem-set-11 | p2e-zc | 0.355 | 1% | [0.3514, 0.3585] | 1% |  |
| 8-962-problem-set-11 | p3a-t | 49.25 | 1% | [48.76, 49.74] | 1% |  |
| 8-962-problem-set-11 | p3a-l | 14.77 | 1% | [14.62, 14.92] | 1% |  |
| 8-962-problem-set-11 | p3b-lc | 4.725 | 1% | [4.678, 4.772] | 1% |  |
| 8-962-problem-set-11 | p3b-r | 3.571 | 1% | [3.535, 3.607] | 1% |  |
| 8-962-problem-set-11 | p3c-en | 0.9839 | 0.1% | [0.9829, 0.9849] | 0.1% |  |
| 8-962-problem-set-11 | p3c-ang | 4.583 | 1% | [4.537, 4.629] | 1% |  |
| 8-962-problem-set-11 | p3c-adv | 91.3 | 1% | [90.39, 92.21] | 1% |  |
| 8-962-problem-set-11 | p3d-ang | 3.780 | 1% | [3.742, 3.818] | 1% |  |
| 8-962-problem-set-11 | p3d-en | 0.9562 | 0.1% | [0.9552, 0.9572] | 0.1% |  |
| 8-962-problem-set-11 | p3d-period | 9.79 | 1% | [9.692, 9.888] | 1% |  |
| 8-962-problem-set-11 | p3e-en | 1.134 | 0.5% | [1.128, 1.14] | 0.5% |  |
| 8-962-problem-set-11 | p3e-tau | 2.93 | 1% | [2.901, 2.959] | 1% |  |
| 8-962-problem-set-2 | p1-n | 6.167 | 1% | [6.105, 6.229] | 1% |  |
| 8-962-problem-set-2 | p3c-trace | -2 | 0.01 | [-2.01, -1.99] | 0.5% |  |
| 8-962-problem-set-2 | p4b-particle | 6.4 | 1% | [6.336, 6.464] | 1% |  |
| 8-962-problem-set-2 | p4c-particle | 111.1 | 1% | [110, 112.2] | 1% |  |
| 8-962-problem-set-2 | p6e-horizon | 9.16 | 1% | [9.068, 9.252] | 1% |  |
| 8-962-problem-set-3 | p1c-ly | 0.968 | 1% | [0.9583, 0.9777] | 1% |  |
| 8-962-problem-set-3 | p2b-angle | 45 | 1% | [44.55, 45.45] | 1% |  |
| 8-962-problem-set-3 | p3c-a | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-962-problem-set-3 | p3c-b | 1 | 1% | [0.99, 1.01] | 1% |  |
| 8-962-problem-set-3 | p6c-at | -0.5465 | 0.006 | [-0.5525, -0.5405] | 1.1% |  |
| 8-962-problem-set-4 | p2e-w0 | 9.217 | 1% | [9.125, 9.309] | 1% |  |
| 8-962-problem-set-4 | p2e-lkm | 8.444 | 1% | [8.36, 8.528] | 1% |  |
| 8-962-problem-set-5 | p1b-period | 92.4 | 1% | [91.48, 93.32] | 1% |  |
| 8-962-problem-set-5 | p1d-time | 23.1 | 1% | [22.87, 23.33] | 1% |  |
| 8-962-problem-set-5 | p2-sun | 1.75 | 1% | [1.732, 1.768] | 1% |  |
| 8-962-problem-set-5 | p3-angle | 123.1 | 1% | [121.9, 124.3] | 1% |  |
| 8-962-problem-set-5 | p4a-count | 4 | 0.01 | [3.99, 4.01] | 0.25% |  |
| 8-962-problem-set-5 | p4c-triangle | 90 | 0.5 | [89.5, 90.5] | 0.56% |  |
| 8-962-problem-set-5 | p6b-xbar | 1.543 | 1% | [1.528, 1.558] | 1% |  |
| 8-962-problem-set-6 | p3d-shift | 2.18 | 1% | [2.158, 2.202] | 1% |  |
| 8-962-problem-set-6 | p5a | 0.443 | 1% | [0.4386, 0.4474] | 1% |  |
| 8-962-problem-set-6 | p5b | 7.41 | 1% | [7.336, 7.484] | 1% |  |
| 8-962-problem-set-6 | p5c | 8.23 | 1% | [8.148, 8.312] | 1% |  |
| 8-962-problem-set-6 | p5d-s | 3.27 | 1% | [3.237, 3.303] | 1% |  |
| 8-962-problem-set-6 | p5d-yr | 1.03 | 1% | [1.02, 1.04] | 1% |  |
| 8-962-problem-set-6 | p5e | 2.74 | 1% | [2.713, 2.767] | 1% |  |
| 8-962-problem-set-6 | p5f | 2.59 | 1% | [2.564, 2.616] | 1% |  |
| 8-962-problem-set-6 | p5g-m | 2.17 | 1% | [2.148, 2.192] | 1% |  |
| 8-962-problem-set-6 | p5g-e | 1.22 | 1% | [1.208, 1.232] | 1% |  |
| 8-962-problem-set-8 | p2e-mc | 1.174 | 1% | [1.162, 1.186] | 1% |  |
| 8-962-problem-set-8 | p2e-fdot | 16.3 | 1% | [16.14, 16.46] | 1% |  |
| 8-962-problem-set-8 | p2e-tau | 2.30 | 1% | [2.277, 2.323] | 1% |  |
| 8-962-problem-set-8 | p3f-same | 180 | 1% | [178.2, 181.8] | 1% | e |
| 8-962-problem-set-8 | p3f-swap | 45 | 1% | [44.55, 45.45] | 1% |  |
| 8-962-problem-set-9 | p1-te | 74.3 | 2% | [72.81, 75.79] | 2% |  |
| 8-962-problem-set-9 | p1-theta | 0.854 | 2% | [0.8369, 0.8711] | 2% |  |
| 8-962-problem-set-9 | p2-zmax | 1.25 | 1% | [1.238, 1.262] | 1% |  |
| 8-962-problem-set-9 | p3a-ratio | 0.0149 | 2% | [0.0146, 0.0152] | 2% |  |
| 8-962-problem-set-9 | p3c-theta | 0.851 | 2% | [0.834, 0.868] | 2% |  |
| 8-962-problem-set-9 | p4a-lambda | 2.54 | 2% | [2.489, 2.591] | 2% |  |
| 8-962-problem-set-9 | p4b-ne | 59.3 | 1 | [58.3, 60.3] | 1.7% |  |
| 8-962-problem-set-9 | p4b-t2 | 2.04 | 3% | [1.979, 2.101] | 3% |  |
| 8-962-problem-set-9 | p4c-log | 25.8 | 0.5 | [25.3, 26.3] | 1.9% |  |
| 8-962-problem-set-9 | p5b-n | 6.62 | 2% | [6.488, 6.752] | 2% |  |
| 8-962-problem-set-9 | p5b-gut | 6.62 | 2% | [6.488, 6.752] | 2% |  |
| 8-962-problem-set-9 | p5d-ratio | 0.273 | 10% | [0.2457, 0.3003] | 10% | c |
| 8-962-problem-set-9 | p5d-extra | 1.65 | 0.05 | [1.6, 1.7] | 3% |  |
