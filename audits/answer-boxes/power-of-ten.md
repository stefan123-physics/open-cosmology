# Answer boxes: answers asked as a factor of a power of ten

Audit by Account B, read-only, 2026-11-28. Nothing on any page was changed. For plan Step 4 (docs/ANSWER-BOX-FIX-PLAN.md on `origin/run/a-8044-805`): the message "Right number, but type only the factor in front of 10^k" can be tested on these boxes.

## Summary

- **What was searched:** the 2031 number boxes of all 195 problem-set pages (174 on `run/b-806-8962`, 21 only on `origin/run/a-8044-805`, marked `*`). A box is listed when its `label` or `unit` asks for the answer as a multiple of a power of ten ("in units of $10^{-11}$", "($10^4$ s⁻¹)", unit "× 10²⁶", "10¹⁸ M☉"), of a word multiplier ("million", "billion years", "in millions"), or as a percentage (a factor 100 from the fraction a reader may type). Statement sentences were searched too ("Give it in units of $10^k$", "in millions of years"); a statement hit that belongs to a different box of the same part was dropped by hand (33 such hits, for example "in units of $10^{-12}$" next to a box in m/s). Powers that are part of a condition in the label ("at $10^{10}$ Hz", "for $\beta = 10^{-5}$") are not counted.
- **Found:** 115 boxes: 90 with an explicit power of ten, 14 with a word multiplier, 11 asking for a percentage.
- **Per course:** hs-3 1, hs-4 2, hs-8 2, 8.01 1, 18.01 3, 18.02 4, 8.03 4, 8.033 9, 8.044 7, 8.06 16, 8.286 9, 8.07 5, 8.08 12, 8.902 10, Ferreras 11, 8.962 19.
- **Today every one of them rejects the full number** (for example 5.54e-11 in Ferreras Set 5 box e6-a0), because `checkNumber` compares the typed value with `value` only, and the reader is told only "Not yet". No label says "type only the number in front" (the plan's Step 6 wording for Ferreras 7.2(B)).
- **Ferreras Set 5, box e6-a0 (Exercise 7.2 B):** value 5.54, label "$a_0$ in units of $10^{-11}$ m/s²", statement "Estimate $a_0$, in units of $10^{-11}$ m/s² (tolerance 2%)". A reader who types 5.54e-11 is rejected. First row of the first table.
- **For the generic message** ("any typed value equal to the answer × 10^k for |k| ≥ 2"): the listed powers run from $10^{-66}$ to $10^{71}$; a percentage box differs by 10², and "thousand" by 10³. All listed boxes would be caught by |k| ≥ 2. Note that a reader can also be off by the box's power and a prefix at once ("in $10^{-6}$ Pa s" typed in μPa s is right, in Pa s is ×10⁻⁶), which the generic rule covers.

## Explicit powers of ten

Column "Reader may type" is the full number, value × 10^k, which the box rejects today.

| Page | Box | Value | Tolerance | Wording (label, unit; statement) | Power | Reader may type |
|---|---|---|---|---|---|---|
| ferreras-problem-set-5* | e6-a0 | 5.54 | 2% | $a_0$ in units of $10^{-11}$ m/s²:; "Estimate $a_0$, in units of $10^{-11}$ m/s² (tolerance 2%)." | 10^-11 | 5.54e-11 |
| 8-01-problem-set-10 | p1-b | 4.36 | 1% | $I_{\text{cm}}$, in units of $10^{-5}\ \text{kg}\,\text{m}^2$:; "Give it in units of $10^{-5}\ \text{kg}\,\text{m}^2$: for $2." | 10^-5 | 4.36e-05 |
| 18-01-problem-set-3 | p4-b-error | 3.33 | 1% | The accuracy of $a$, in units of $10^{-4}$: plus or minus | 10^-4 | 0.000333 |
| 18-01-problem-set-3 | p5-c-diff | 2.23 | 2% | Exact value minus quadratic approximation, in units of $10^{-4}$: | 10^-4 | 0.000223 |
| 8-03-problem-set-7 | p2-high | 5.82 | 10% | higher $\omega =$ ($10^4$ s⁻¹); "There are two: give both, in units of $10^4$ s⁻¹." | 10^4 | 5.82e04 |
| 8-03-problem-set-7 | p2-low | 1.56 | 15% | lower $\omega =$ ($10^4$ s⁻¹); "There are two: give both, in units of $10^4$ s⁻¹." | 10^4 | 1.56e04 |
| 8-03-problem-set-7 | p2-v | 3.09 | 10% | speed $=$ ($10^4$ m/s); "Around which mean angular frequency should the pulse be built (in units of $10^4$ s⁻¹), and how large is that speed (in units of $10^4$ m/s)?" | 10^4 | 3.09e04 |
| 8-03-problem-set-7 | p2-w | 3.94 | 10% | mean $\omega =$ ($10^4$ s⁻¹); "Around which mean angular frequency should the pulse be built (in units of $10^4$ s⁻¹), and how large is that speed (in units of $10^4$ m/s)?" | 10^4 | 3.94e04 |
| 8-033-problem-set-4 | p3-speed | 0.609 | 1% | $1 - \beta =$ ($10^{-3}$); "Give $1 - \beta$, in units of $10^{-3}$." | 10^-3 | 0.000609 |
| 8-033-problem-set-9 | p6-ground | 6.953 | 0.5% | $GM/(Rc^2) =$ ($10^{-10}$); "Give it in units of $10^{-10}$." | 10^-10 | 6.953e-10 |
| 8-033-problem-set-9 | p6-ground-speed | 1.203 | 1% | $v_E^2/(2c^2) =$ ($10^{-12}$); "Find its speed $v_E$ in m/s, and its speed term $v_E^2/(2c^2)$ in units of $10^{-12}$." | 10^-12 | 1.203e-12 |
| 8-033-problem-set-9 | p6-sat | 1.669 | 0.5% | $GM/(rc^2) =$ ($10^{-10}$); "y circular orbit the speed term $v^2/(2c^2)$ is exactly half of the gravity term $GM/(rc^2)$, and find the gravity term of the satellite in units of $10^{-10}$." | 10^-10 | 1.669e-10 |
| 8-033-problem-set-9 | p7-water | 1.350 | 1% | $M =$ ($10^8\,M_\odot$); "Give the mass in units of $10^8$ solar masses." | 10^8 | 1.35e08 |
| 8-033-problem-set-9 | p8-coef | 8.803 | 0.5% | $P/(M/M_\odot) =$ ($10^{-5}$ s); "with $r$ just outside the Schwarzschild radius, for a mass $M$: write it as a number of seconds times $M/M_\odot$, and give that number in units of $10^{-5}$ s." | 10^-5 | 8.803e-05 |
| 8-044-problem-set-11 | p4-cu | 9.63 | 1.5% | Copper: $H_0 =$ (in $10^4$ tesla); "Give the size of the field, in units of $10^4$ tesla." | 10^4 | 9.63e04 |
| 8-044-problem-set-11 | p4-he | 5.06 | 1.5% | Helium-3: $H_0 =$ (in $10^3$ tesla); "Give it in units of $10^3$ tesla." | 10^3 | 5060 |
| 8-044-problem-set-11 | p5-n21 | 1.07 | 2% | Largest $n_3 =$ (in $10^{21}$ cm⁻³); "The first box is our addition: the largest $n_3$ in units of $10^{21}$ cm⁻³." | 10^21 | 1.07e21 |
| 8-044-problem-set-7 | p3-ds-num | 52.7 | 1% | $\Delta S =$ (unit: × 10⁴ erg/K); "The second box is our addition: the same entropy change as a number, in units of $10^4$ erg/K." | 10^4 | 5.27e05 |
| 8-044-problem-set-9 | p4-hertz | 4.14 | 1% | Noise power in 1 Hz $=$ (in $10^{-21}$ W); "Give the power in units of $10^{-14}$ W." | 10^-21 | 4.14e-21 |
| 8-044-problem-set-9 | p4-power | 4.14 | 1% | Noise power in 10 MHz $=$ (in $10^{-14}$ W); "Give the power in units of $10^{-14}$ W." | 10^-14 | 4.14e-14 |
| 8-06-problem-set-1 | p5-ev | 3.89 | 2% | $\Delta E$ in units of $10^{-9}$ eV: | 10^-9 | 3.89e-09 |
| 8-06-problem-set-1 | p5-frac | 2.86 | 2% | $\Delta E$ / binding energy, in units of $10^{-10}$: | 10^-10 | 2.86e-10 |
| 8-06-problem-set-1 | p5-mu | 4.28 | 2% | Factor, in units of $10^4$: | 10^4 | 4.28e04 |
| 8-06-problem-set-3 | p3-de | 1.342 | 1% | Splitting in units of $10^{-5}$ eV:; "First find the splitting between $3P_{1/2}$ and $3P_{3/2}$ in units of $10^{-5}$ eV (this box is our addition)." | 10^-5 | 1.342e-05 |
| 8-06-problem-set-4 | p3-e0 | 1.40 | 1.5% | $E_0$ in units of $10^{-12}$ eV: | 10^-12 | 1.4e-12 |
| 8-06-problem-set-4 | p3-n | 8.91 | 2% | $n$ in units of $10^{30}$: | 10^30 | 8.91e30 |
| 8-06-problem-set-4 | p5-num | 6.9 | 3% | $\Delta$ in units of $10^{-4}\,E_F$: | 10^-4 | 0.00069 |
| 8-06-problem-set-5 | p1-expo | 3.367 | 1% | $-\ln T$, in units of $10^4$: | 10^4 | 3.367e04 |
| 8-06-problem-set-6 | p1-tau | 6.65 | 1% | $\tau$ in units of $10^{-10}$ s: | 10^-10 | 6.65e-10 |
| 8-06-problem-set-6 | p1-wtau | 1.03 | 1% | $\omega\tau$ in units of $10^{7}$: | 10^7 | 1.03e07 |
| 8-06-problem-set-6 | p3-nu0 | 4.33 | 1% | $\nu_0$ in units of $10^{12}$ Hz: | 10^12 | 4.33e12 |
| 8-06-problem-set-6 | p3-rmaser | 1.60 | 1% | $r$ at $10^{10}$ Hz, in units of $10^{-3}$: | 10^-3 | 0.0016 |
| 8-06-problem-set-8 | p5-inc | 3.121 | 1% | Alpha particles per second in the beam, in units of $10^{9}$: | 10^9 | 3.121e09 |
| 8-06-problem-set-8 | p5-n | 5.907 | 1% | Gold nuclei per m³, in units of $10^{28}$: | 10^28 | 5.907e28 |
| 8-286-problem-set-10 | p4-a-num | 3.17 | 1% | $kT_\text{RH} =$ (unit: × 10¹⁵ GeV); "Then give its value for $E_{16} = 1$ and $g_\text{RH} = 300$, in units of $10^{15}$ GeV." | 10^15 | 3.17e15 |
| 8-286-problem-set-10 | p4-c-z1 | 9.15 | 2% | $Z_1 =$ (unit: × 10²⁶); "Give $Z_1$ in units of $10^{26}$ (this box accepts values within 2% of ours), and give $f$." | 10^26 | 9.15e26 |
| 8-286-problem-set-6 | p7-c-four | 9.54 | 2% | four species: $\rho =$ (unit: × 10⁸ kg/m³); "Give both in units of $10^8\ \text{kg/m}^3$: for $3." | 10^8 | 9.54e08 |
| 8-286-problem-set-6 | p7-c-three | 8.21 | 2% | three species: $\rho =$ (unit: × 10⁸ kg/m³); "Give both in units of $10^8\ \text{kg/m}^3$: for $3." | 10^8 | 8.21e08 |
| 8-286-problem-set-8 | p4-b-05 | 20.236 | 0.01% | At $z = 0.5$: (unit: × 10⁻¹⁹ s²/m²); "Now compute the table of $J/(P\,H_0^2)$, in units of $10^{-19}$ s²/m², for $z = 0." | 10^-19 | 2.024e-18 |
| 8-286-problem-set-8 | p4-b-10 | 3.7196 | 0.01% | At $z = 1.0$: (unit: × 10⁻¹⁹ s²/m²); "Now compute the table of $J/(P\,H_0^2)$, in units of $10^{-19}$ s²/m², for $z = 0." | 10^-19 | 3.72e-19 |
| 8-286-problem-set-8 | p4-b-15 | 1.3645 | 0.01% | At $z = 1.5$: (unit: × 10⁻¹⁹ s²/m²); "Now compute the table of $J/(P\,H_0^2)$, in units of $10^{-19}$ s²/m², for $z = 0." | 10^-19 | 1.365e-19 |
| 8-07-problem-set-10 | p2-num | 1.771 | 1% | $\mathcal P_y$ in units of $10^{-10}$ kg m/s:; "Give the momentum in units of $10^{-10}$ kg m/s." | 10^-10 | 1.771e-10 |
| 8-07-problem-set-10 | p4-earth | 5.789 | 1% | Force in units of $10^8$ N:; "Give it in units of $10^8$ N." | 10^8 | 5.789e08 |
| 8-07-problem-set-7 | p1-num | 1.803 | 1% | $e/m_e$ in units of $10^{11}$ C/kg:; "Answer in units of $10^{11}$ C/kg." | 10^11 | 1.803e11 |
| 8-07-problem-set-9 | p6-num | 3.40 | 1% | $B'$ in units of $10^7$ T:; "Find $B'$ in units of $10^7$ T." | 10^7 | 3.4e07 |
| 8-08-problem-set-10 | p1-bpnum | 4.44 | 1% | $B_p$ in $10^4$ T:; "Give $B_p$ in units of $10^4$ T, as a decimal (tolerance 1%)." | 10^4 | 4.44e04 |
| 8-08-problem-set-11 | p5-factor | 3.90 | 2% | $t/(R/c)$ in units of $10^{10}$:; "Give the factor in units of $10^{10}$." | 10^10 | 3.9e10 |
| 8-08-problem-set-12 | p1-lnum | 2.44 | 2% | $L$ in $10^{-8}$ W Ω/K²:; "Give $L$ of part (b) as a number, in units of $10^{-8}$ W Ω/K² (tolerance 2%)." | 10^-8 | 2.44e-08 |
| 8-08-problem-set-12 | p2-c | 2.04 | 2% | $C$ in $10^6$ J/(m³ K):; "Give $C$ in units of $10^6$ J/(m³ K) (tolerance 2%)." | 10^6 | 2.04e06 |
| 8-08-problem-set-12 | p3-n | 8.43 | 1% | $n$ in $10^{28}$ m⁻³:; "Find the density $n$ of conduction electrons, in units of $10^{28}$ m⁻³ (tolerance 1%)." | 10^28 | 8.43e28 |
| 8-08-problem-set-12 | p3-tau | 2.47 | 2% | $\tau$ in $10^{-14}$ s:; "Find the relaxation time $\tau$, in units of $10^{-14}$ s (tolerance 2%)." | 10^-14 | 2.47e-14 |
| 8-08-problem-set-12 | p4-fric | 1.46 | 3% | $1/\eta$ in $10^{-8}$ kg/s:; ") Estimate the friction coefficient $1/\eta$ of the ball, with your $\nu$ of part (b), in units of $10^{-8}$ kg/s (tolerance 3%)." | 10^-8 | 1.46e-08 |
| 8-08-problem-set-12 | p4-nu | 7.74 | 2% | $\nu$ in $10^{-6}$ Pa s:; ") Estimate the viscosity $\nu$ of air, in units of $10^{-6}$ Pa s (tolerance 2%)." | 10^-6 | 7.74e-06 |
| 8-08-problem-set-12 | p4-t | 5.87 | 3% | $t$ in $10^5$ s:; "Give the time in units of $10^5$ s (tolerance 3%)." | 10^5 | 5.87e05 |
| 8-08-problem-set-8 | p2-kmax-num | 4.87 | 1% | $k_{\text{max}}$ in $10^6$ m⁻¹:; "5\,v_c$, give also $k_{\text{max}}$ of part (b) in units of $10^6$ m⁻¹ (tolerance 1% each)." | 10^6 | 4.87e06 |
| 8-902-problem-set-4* | p3-mass-eq | 4.17 | 2% | $M_H =$ (unit: 10¹⁷ M☉); " 1%), and the total mass within the horizon then, in units of $10^{17}\,M_\odot$ (tolerance 2%), with the same meaning of horizon and total mass as in part (c)." | 10^17 | 4.17e17 |
| 8-902-problem-set-4* | p3-mass-rec | 4.75 | 2% | $M_H =$ (unit: 10¹⁸ M☉); "Give $d_H$ in kpc (tolerance 2%) and the mass in units of $10^{18}\,M_\odot$ (tolerance 2%)." | 10^18 | 4.75e18 |
| 8-902-problem-set-5* | p1-mass | 3.99 | 2% | $M_T$ in $10^{12}\,M_\odot$:; "With the $\eta$ of part (c), find the total mass of the pair, in units of $10^{12}\,M_\odot$ (tolerance 2%)." | 10^12 | 3.99e12 |
| 8-902-problem-set-6* | p1-mmax | 2.23 | 3% | $M_\text{max}$ in $10^{12}M_\odot$:; "Give it in units of $10^{12}M_\odot$ (tolerance 3%)." | 10^12 | 2.23e12 |
| 8-902-problem-set-6* | p1-nh | 9.16 | 2% | $n_\text{H}$ in $10^{-3}$ cm⁻³:; "Give $n_\text{H}$ in units of $10^{-3}$ cm⁻³ and $t_\text{cool}$ for $M = 10^{12}M_\odot$ in Myr (tolerance 2% each)." | 10^-3 | 0.00916 |
| 8-902-problem-set-6* | p1-t12 | 1.39 | 2% | $T_{12}$ in $10^6$ K:; "Give $T_{12}$ in units of $10^6$ K (tolerance 2%) and the exponent $p$ as a decimal (tolerance 1%)." | 10^6 | 1.39e06 |
| 8-902-problem-set-7* | q3-ratio | 2.20 | 1% | Cluster galaxy over star galaxy, in $10^{-6}$:; "to that of the star galaxy, in units of $10^{-6}$ (tolerance 1%), and (our addition) the relaxation time of the cluster galaxy in crossing times (tolerance 1%)." | 10^-6 | 2.2e-06 |
| 8-902-problem-set-7* | sd-number | 6.36 | 2% | Expected number in 10 Gyr, in $10^{-9}$:; "for a strong encounter in AU (tolerance 2%), and the expected number of strong encounters of one star in 10 billion years, in units of $10^{-9}$ (tolerance 2%)." | 10^-9 | 6.36e-09 |
| ferreras-problem-set-1* | p2-b | 1.05 | 2% | $M$ in $10^{15}\,M_\odot$:; "Give it in units of $10^{15}\,M_\odot$ (tolerance 2%)." | 10^15 | 1.05e15 |
| ferreras-problem-set-1* | p5-core | 5.27 | 2% | Mass inside the core in $10^4\,M_\odot$:; "Give it in units of $10^4\,M_\odot$ (tolerance 2%)." | 10^4 | 5.27e04 |
| ferreras-problem-set-1* | p5-tidal | 11.0 | 2% | Mass inside the tidal radius in $10^5\,M_\odot$:; "Give the result in units of $10^5\,M_\odot$ (tolerance 2%)." | 10^5 | 1.1e06 |
| ferreras-problem-set-1* | p8-e | 2.13 | 2% | $M$ in $10^{11}\,M_\odot$:; "Give it in units of $10^{11}\,M_\odot$ (tolerance 2%)." | 10^11 | 2.13e11 |
| ferreras-problem-set-3* | p1-rhom | 4.08 | 2% | $\bar\rho_{m,0}$ in $10^{10}\,M_\odot$ per Mpc³:; "Give it in units of $10^{10}\,M_\odot$ per Mpc³ (tolerance 2%)." | 10^10 | 4.08e10 |
| ferreras-problem-set-4* | e6-temp | 0.977 | 2% | $T$ in $10^9$ K:; "What is $k_BT$ then, in keV (tolerance 2%), and the temperature in units of $10^9$ K (tolerance 2%)?" | 10^9 | 9.77e08 |
| ferreras-problem-set-5* | e2-t | 1.75 | 2% | $t_f$ in units of $10^{-8}$ s:; "What was the cosmic time at freeze-out, in units of $10^{-8}$ s (tolerance 2%)?" | 10^-8 | 1.75e-08 |
| ferreras-problem-set-5* | e3-gamma | 2.07 | 2% | $\Gamma_a$ in units of $10^{-42}$ cm⁻³ s⁻¹:; "How many annihilations happen per cubic centimetre per second, in units of $10^{-42}$ cm⁻³ s⁻¹ (tolerance 2%)?" | 10^-42 | 2.07e-42 |
| 8-962-problem-set-1 | p6a-kt | 2.353 | 1% | $kT =$ (unit: × 10⁻⁴ eV); "Our addition: first give the photon energy $kT$ in units of $10^{-4}$ eV, with $k = 8." | 10^-4 | 0.0002353 |
| 8-962-problem-set-10 | p2a-kfac | 1.36 | 1% | 1 g⁻²ᐟ³ cm⁴ s⁻² $=$ (unit: × 10⁻⁹ km⁴ᐟ³) | 10^-9 | 1.36e-09 |
| 8-962-problem-set-10 | p2a-p | 8.26 | 1% | 1 dyne/cm² $=$ (unit: × 10⁻⁴⁰ km⁻²) | 10^-40 | 8.26e-40 |
| 8-962-problem-set-10 | p2a-rho | 7.43 | 1% | 1 g/cm³ $=$ (unit: × 10⁻¹⁹ km⁻²) | 10^-19 | 7.43e-19 |
| 8-962-problem-set-10 | p3b-rho | 4.89 | 10% | $\rho_c =$ (unit: × 10¹⁵ g/cm³) | 10^15 | 4.89e15 |
| 8-962-problem-set-2 | p6e-horizon | 9.16 | 1% | $c^2/g =$ (unit: × 10¹⁵ m); "81$ m/s², type the distance $c^2/g$ in units of $10^{15}$ m." | 10^15 | 9.16e15 |
| 8-962-problem-set-4 | p2e-w0 | 9.217 | 1% | $w_0 =$ (unit: × 10⁻¹³); "ts named in the introduction, find the number $w_0 = kT/(\mu c^2)$ that part (d) needs to describe this gas, in units of $10^{-13}$, and the scale height in km." | 10^-13 | 9.217e-13 |
| 8-962-problem-set-6 | p3d-shift | 2.18 | 1% | $gh/c^2 =$ (unit: × 10⁻¹⁵) | 10^-15 | 2.18e-15 |
| 8-962-problem-set-6 | p5b | 7.41 | 1% | $\bar\rho =$ (unit: × 10⁻¹⁴ cm⁻²) | 10^-14 | 7.41e-14 |
| 8-962-problem-set-6 | p5c | 8.23 | 1% | $\bar P =$ (unit: × 10⁻¹⁶ cm⁻²) | 10^-16 | 8.23e-16 |
| 8-962-problem-set-6 | p5d-s | 3.27 | 1% | $g =$ (unit: × 10⁻⁸ s⁻¹) | 10^-8 | 3.27e-08 |
| 8-962-problem-set-6 | p5e | 2.74 | 1% | $L =$ (unit: × 10⁻⁷ (a pure number)) | 10^-7 | 2.74e-07 |
| 8-962-problem-set-6 | p5f | 2.59 | 1% | $\hbar =$ (unit: × 10⁻⁶⁶ cm²) | 10^-66 | 2.59e-66 |
| 8-962-problem-set-6 | p5g-e | 1.22 | 1% | Planck energy $=$ (unit: × 10²⁸ eV) | 10^28 | 1.22e28 |
| 8-962-problem-set-6 | p5g-m | 2.17 | 1% | Planck mass $=$ (unit: × 10⁻⁵ g) | 10^-5 | 2.17e-05 |
| 8-962-problem-set-9 | p4a-lambda | 2.54 | 2% | $\Lambda =$ (unit: × 10⁷¹ s⁻²) | 10^71 | 2.54e71 |
| 8-962-problem-set-9 | p4b-t2 | 2.04 | 3% | $t_2 \approx$ (unit: × 10⁻³⁴ s) | 10^-34 | 2.04e-34 |
| 8-962-problem-set-9 | p5b-gut | 6.62 | 2% | At grand unification, $\|\Omega - 1\| \le$ (unit: × 10⁻⁵⁵) | 10^-55 | 6.62e-55 |
| 8-962-problem-set-9 | p5b-n | 6.62 | 2% | At nucleosynthesis, $\|\Omega - 1\| \le$ (unit: × 10⁻¹⁹) | 10^-19 | 6.62e-19 |

## Word multipliers (thousand, million, billion)

| Page | Box | Value | Tolerance | Wording | Factor | Reader may type |
|---|---|---|---|---|---|---|
| hs-8-practice | p4-d | 1.32 | 3% | $t =$ (unit: billion years); "Give it in billions of years." | 10^9 | 1.32e09 |
| hs-8-practice | p9-d | 14.5 | 3% | $1/H_0 =$ (unit: billion years); "Give it in billions of years." | 10^9 | 1.45e10 |
| 18-02-problem-set-4 | p1-c-worst | 9.21 | 0.02 | Size of the largest error: (unit: million); "Give $a$ and $b$ to three decimal places, and the size of the largest error in millions of iPods, to two decimal places." | 10^6 | 9.21e06 |
| 18-02-problem-set-4 | p1-d-worst | 1.58 | 0.02 | Size of the largest error: (unit: million); " gives Compute the errors, the actual $y_i$ minus the value of this formula, and report the size of the largest one in millions of iPods, to two decimal places." | 10^6 | 1.58e06 |
| 18-02-problem-set-4 | p1-f-2006 | 122.6 | 1 | Sales in 2006 by the law: (unit: million); "Give the number for 2006 in millions, to the nearest million, and the number for 2015 in billions (thousands of millions), within 2%." | 10^6 | 1.226e08 |
| 18-02-problem-set-4 | p1-f-2015 | 34900 | 2% | Sales in 2015 by the law: (unit: billion); "Give the number for 2006 in millions, to the nearest million, and the number for 2015 in billions (thousands of millions), within 2%." | 10^9 | 3.49e13 |
| 8-033-problem-set-5 | p8-time | 30.2 | 2% | Duration of the contraction: (unit: million years); "Answer in millions of years, with one year equal to $3." | 10^6 | 3.02e07 |
| 8-033-problem-set-8 | p5-z1000 | 0.537 | 1% | $t(z = 10^3) =$ (unit: Myr); "Give $t(6)$ in Gyr and $t(10^3)$ in millions of years (Myr)." | 10^6 | 5.37e05 |
| 8-033-problem-set-9 | p8-rs2 | 2.970 | 0.5% | $R_S(M_2) =$ (unit: million km); "Find the Schwarzschild radius $R_S = 2GM/c^2$ of each: the first in km, the second in millions of km." | 10^6 | 2.97e06 |
| 8-286-problem-set-10 | p3-b-gly | 46.2 | 1% | $\ell_{p,\text{horizon}}(t_0) =$ (unit: billion light-years); "Find the horizon distance today, in billions of light-years and in Mpc." | 10^9 | 4.62e10 |
| 8-286-problem-set-2 | p3-b-ly | 19.7 | 1% | $\ell_p(t_0) =$ (unit: billion light-years) | 10^9 | 1.97e10 |
| 8-08-problem-set-8 | p1-atoms | 1.55 | 1% | $N$ in millions:; ") Find also the number of atoms in this condensate, in millions (tolerance 1%)." | 10^6 | 1.55e06 |
| 8-902-problem-set-3 | p1b-period-num | 226 | 2 | $P$ at the Sun (millions of years): (unit: Myr) | 10^6 | 2.26e08 |
| 8-902-problem-set-3 | p2c-cloud | 1.066 | 0.015 | $t_f$ for the cloud (millions of years): (unit: Myr) | 10^6 | 1.066e06 |

## Percentages

A reader may type the fraction (value/100) instead of the percentage.

| Page | Box | Value | Tolerance | Wording | Reader may type |
|---|---|---|---|---|---|
| hs-3-practice | p5-b | 70 | 3% | Efficiency (%):; "What is its efficiency, in percent?" | 0.7 |
| hs-4-practice | p9-a | 35.6 | 3% | Carnot limit (%):; "Give it in percent." | 0.356 |
| hs-4-practice | p9-b | 24 | 3% | Efficiency (%):; "What is the actual efficiency of the station, in percent?" | 0.24 |
| 18-01-problem-set-4 | p4-b-percent | 1.3 | 0.3% | Estimated drop, from the linear approximation: (unit: %) | 0.013 |
| 8-044-problem-set-11 | p5-xc | 5.07 | 6% | $x_C =$ (in percent); "The second is $x_C$ in percent." | 0.0507 |
| 8-06-problem-set-4 | p4-err0 | -18.2 | 2% | Relative error for $n = 0$, in %:; "Type the relative errors in per cent, with their sign." | -0.182 |
| 8-06-problem-set-4 | p4-err5 | -0.12 | 0.03 | Relative error for $n = 5$, in %:; "Type the relative errors in per cent, with their sign." | -0.0012 |
| 8-07-problem-set-2 | p2-pct | 4.92 | 1% | Excess of the exact $C$, in per cent: | 0.0492 |
| 8-08-problem-set-11 | p2-pipe | 1.72 | 2% | Rise in pitch, in percent: | 0.0172 |
| ferreras-problem-set-1* | p2-fstar | 4.8 | 2% | Fraction in stars, in %:; "Give the fraction as a percentage (tolerance 2%)." | 0.048 |
| ferreras-problem-set-3* | p2-y5 | 3.57 | 1% | Relative error, in percent:; "Give it in percent (tolerance 1%)." | 0.0357 |

## Not listed, but close

- Boxes in standard astronomical units with a built-in multiplier (Myr, Gyr, kpc, Mpc, keV, GeV, nm, μs) are not listed unless the page itself says "millions of years" or similar; a reader who types years in a Myr box is off by 10⁶ too, and the generic message would catch it.
- 8.04 Set 9, box p1-exc: "in units of $\pi$" (value 0.0827). A reader who types the phase in radians (0.260) is off by a factor π, not a power of ten; the generic message would not catch it.
