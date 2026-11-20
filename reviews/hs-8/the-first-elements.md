---
page: content/year-0/hs-8/the-first-elements.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec20.pdf (read: local copy pc2-handover/work/src-814/lec20.pdf, all 5 PDF pages = printed pp. 109–112; p. 111 also checked as an image for equation numbers)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec19.pdf (read: src813/n19.pdf; its last page repeats printed p. 109)
  - https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf (read: local copy src-814/pdg2025.pdf / pdg.txt, Sec. 24.1–24.5)
  - https://pdg.lbl.gov/2025/listings/rpp2025-list-n.pdf (read: src-814/n.pdf; mean life 878.4 ± 0.5 s OUR AVERAGE)
  - https://physics.nist.gov/cgi-bin/cuu/Value?mpu and ?mnu (not re-fetched; checked against CODATA 2022 values 1.007 276 466 5789 u and 1.008 664 916 06 u)
  - https://ocw.mit.edu/courses/8-901-astrophysics-i-spring-2006/9d2060b793ec3a34dacd02dd885b3044_ps2.pdf (not read; cited only for Wien's constant, which is standard and in lesson 7.2)
verdict: needs-changes
---

# Review: The first elements (8.14)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Quiz 1 question: "Three seconds after the Big Bang a typical photon had far less than the 2.22 MeV needed" | The page's own worked example "How strong were the photons?": a peak photon has 2.22 MeV at 5.2 × 10⁹ K, "So from about 5 × 10⁹ K downwards, a typical photon was too weak". At 3 s the universe was at about 5.8 × 10⁹ K (Guth's 9.98 × 10⁹/√3; lesson 8.13), where the same method gives a peak photon of about 2.5 MeV (mean photon 2.7 kT ≈ 1.3 MeV) | "far less" at 3 s | Contradicts the page. Change "Three seconds" to "Thirty seconds" (about 1.8 to 2 × 10⁹ K, peak photon about 0.8 MeV, as in the worked example at 2 × 10⁹ K) or "One minute". |
| 2 | warning | Section "Free neutrons decay", the paragraph after "Three minutes of decay": "This simple estimate treats freeze-out as one sudden moment, which it is not" | PDG Sec. 24.2 says only that n/p ≈ 1/6 at freeze-out "dropped to n/p ≈ 1/7 by the time nuclear reactions began"; it gives T ≈ 0.1 MeV (≈ 1.2 × 10⁹ K) for that moment, which is about 2 minutes after the start (own check: 1/6 → 1/7 takes τ ln(8/7) = 117 s) | The 1-to-7.6 of the example is blamed on a sudden freeze-out | The difference comes mostly from rounding (1/6 and 1/7 are rounded) and from the start time (3 min in the example, about 2 min for PDG's T ≈ 0.1 MeV). Either use 120 s in the example (fraction left 0.872, 87.2 neutrons, 612.8 protons, ratio 0.142 = 1 to 7.0, matching PDG exactly), or write "This simple estimate uses rounded numbers and a sharp starting moment; detailed calculations give about one neutron for every 7 protons". |
| 3 | warning | Section "The deuterium bottleneck", last paragraph, and lesson 8.13 (worked example (c)) | 8.13 says 10⁹ K is reached at 100 s, "under two minutes"; this page says "about three minutes" (8.902 eq. (490): 8 × 10⁸ K at 200 s; PDG: T ≈ 0.1 MeV, elements made by the end of the first three minutes) | "about **three minutes** after the start (the 8.902 notes give 200 s)" | This page is right (own check: 10⁹ K at about 180 s once the e± pairs are gone). Keep it; fix 8.13 (see its review, row 1) so that both say: "about $10^{9}\ \text{K}$, about three minutes after the start". |
| 4 | warning | Section "Free neutrons decay": "A free neutron has a mean life of 878.4 s (PDG neutron listing), so its half-life is 878.4 × ln 2 = 609 s" | Lesson 7.9 (`half-life`) introduces t½ and λ = ln 2/t½, but not the mean life (no match for "mean life" in Block 7) | "mean life" used without explanation; also flashcard 1 | Add half a sentence: "a mean life (the average time a neutron lasts, 1/λ in lesson 7.9's notation) of 878.4 s, so its half-life is ln 2 times as long: 609 s". |
| 5 | warning | Callout "Weighing the universe with deuterium": "The university lecture works this out with the Saha equation, and the answer agrees with an independent measurement from the cosmic microwave background" | 8.902 p. 111 uses the Saha equation to find *when* deuterium forms (eqs. (486)–(490)); p. 112 only notes that the D abundance is a sensitive measure of Ω_b. The CMB agreement is in PDG Sec. 24.4 ("Concordance, Dark Matter, and the CMB"), not in the MIT notes | Saha "works this out"; no cite for the CMB agreement | Write "The university lecture uses the Saha equation to find when deuterium survives, and notes that leftover deuterium measures the amount of ordinary matter (8.902 notes, p. 112). The result agrees with an independent measurement from the cosmic microwave background (PDG review, Sec. 24.4; a later development), the subject of lesson 8.15." |
| 6 | info | Section "Checking against the sky", last paragraph: "except for lithium they fit the prediction with one single value of the density of ordinary matter (PDG review, Sec. 24.1)" | Sec. 24.1 has the nine orders of magnitude and "good overall agreement"; the single value of η and the lithium exception are in Sec. 24.4 | Sec. 24.1 only | Cite "Sec. 24.1 and 24.4". |
| 7 | info | Section "The deuterium bottleneck": "the measured ratio, in the PDG review, is one nucleon per 1.7 × 10⁹ photons" | PDG Sec. 24.2/24.4: η₁₀ = 6.040 ± 0.118 is the range that explains the abundances, fixed essentially by D/H | "measured ratio" | Write "the value found from the light elements". 1/6.040 × 10¹⁰ = 1.66 × 10⁹ ✓. |
| 8 | info | Section "Free neutrons decay": "Lesson 7.8 met the decay of a free neutron" | Lesson 7.8 shows a neutron turning into a proton inside a nucleus (beta-minus decay) | "free neutron" | Write "Lesson 7.8 met this change of a neutron into a proton; a free neutron does the same:". |
| 9 | info | 8.902 notes p. 111 call 890 s the neutron "half-life" | 890 s is (roughly) the mean life; their n/p ≈ 0.15 after 200 s follows from e^(−200/890), not from 2^(−200/890) | The page uses PDG's mean life and the correct half-life 609 s | No change needed: the page does not repeat the slip. Optionally add "(the notes' 890 s is the mean life)" next to the eq. (491) cite. |
| 10 | info | Worked example "How strong were the photons?" | — | "a typical photon" = the photon at the peak of the wavelength spectrum (4.97 kT) | The average photon has about 2.7 kT, about half as much; the conclusion holds even more strongly. Optional: "(the average photon has even less)". |
| 11 | info | Lines with "$10^{10}$ K", "$10^9$ K", "$1.5 \times 10^{10}$ K", "$2 \times 10^{9}$ K", "$5 \times 10^9$ K", "$10^{9}$ K", "$8 \times 10^{8}$ K" (flashcards 0 and 2, sections 1, 2, 5, summary) | — | Unit K outside the maths | Put the unit inside (`\ \text{K}`), as 8.13 and the other Block 8 lessons do. |
| 12 | info | Quiz 3: "Start from one neutron in every 7 nucleons" | — | Correct (1 to 6 at freeze-out) but easy to misread as the 1-to-7 ratio of the text | Write "Start from the freeze-out ratio, one neutron for every 6 protons (one in every 7 nucleons)". |

## Formulas and citations
- ΔE = (m_n − m_p)c² ≈ 1.29 MeV: 8.902 eq. (481), p. 110 (n_n/n_p ≈ e^(−1.29 MeV/kT)) verified; PDG gives Q = 1.293 MeV. CODATA masses give 1.2933 MeV ✓.
- Free-neutron decay equation: 8.902 p. 110 ("neutrons … decay through β-decay before they can fuse") verified; equation balanced (1 = 1 + 0, 0 = 1 − 1); same notation as lesson 7.8 ✓.
- Decay law N = N₀(½)^(t/t½): eq. (491), p. 111 verified as the equation that applies the decay (n_n/n_p ≈ 0.15 after 200 s); the law itself is lesson 7.9's, as the `at` says ✓.
- p + n ⇌ D + γ: eq. (482), p. 110 ✓; binding 2.22 MeV (8.902; PDG gives 2.23) ✓.
- D(p,γ)³He and ³He(D,p)⁴He: PDG Sec. 24.2, p. 1 ✓; both balanced in A and Z ✓.
- Y = 2n/(n + p) = 2(n/p)/(1 + n/p): 8.902 eqs. (492)–(493), pp. 111–112 (equation numbers checked on the rendered page) and PDG eq. (24.1) ✓.
- 8.902 eq. (490), p. 111: T ≈ 8 × 10⁸ K, t ≈ 200 s ✓. p. 110: freeze-out at 0.8 MeV, 1 s, e^(−1.29/0.8) ≈ 0.2, "a 5-to-1 ratio" ✓; the page's "the simpler estimate in the 8.902 notes gives 1 to 5" is correct. Instant-fusion Y = 4/12 = 0.33, observed 0.24 (eq. (483)) ✓ (not used on the page).
- PDG Sec. 24.1: three minutes, nine orders of magnitude, ⁴He/H ≈ 0.08 ✓. Sec. 24.2: T ≈ 1 MeV at t ≈ 1 s, n/p ≈ 1/6 then ≈ 1/7, η₁₀ = 6.040, photons delay D until T ≈ 0.1 MeV, density comparable to air, nearly all neutrons in ⁴He, no stable mass 5 or 8, Coulomb barriers, D and ³He a few × 10⁻⁵, ⁷Li/H ≈ 10⁻¹⁰ ✓. Sec. 24.3: D/H = 25.08 × 10⁻⁶ (24.2), Y_p = 0.245 (24.3), Li/H = 1.45 × 10⁻¹⁰ (24.4) ✓. Sec. 24.5: predicted Li/H = 4.72 × 10⁻¹⁰ (24.10), the lithium problem ✓.
- Later developments (point (e) of the brief): Y = 0.245, D/H = 2.5 × 10⁻⁵ and the lithium problem are introduced as "Recent measurements, as summarised by the Particle Data Group in 2025 (later developments, not part of the MIT notes)" ✓. The plot caption says "(PDG review, 2025)" ✓. Calcs mark them `origin: later-data` ✓.
- The page quotes no H₀, age, T_CMB, Ω, n_s or σ₈, so `calcs/values.yaml` is not involved.

## Arithmetic and answer checks
Recomputed independently in Python; `npm run calc:test -k "the-big-bang or the-first-elements"`: 82 passed. `content:check`: 0 errors for this page (only "no review file yet").
- 1.00866 − 1.00728 = 0.00138 u; × 931.5 = 1.285 → 1.29 MeV ✓; × 1.6 × 10⁻¹³ = 2.06 × 10⁻¹³ J ✓; /1.38 × 10⁻²³ = 1.50 × 10¹⁰ K ✓ (1.29 MeV/k_B = 1.497 × 10¹⁰ K).
- 878.4 ln 2 = 608.9 s ✓, 10.1 min ✓. 180/609 = 0.2956 ✓; 0.5^0.2956 = 0.8147 ✓; 81.5 and 618.5 ✓; 81.5/618.5 = 0.132 ✓; 7.59 ✓.
- Wien: 2.9 × 10⁻³/2 × 10⁹ = 1.45 × 10⁻¹² m ✓; hc/λ = 1.372 × 10⁻¹³ J ✓ = 0.857 MeV ✓; 2.22 MeV = 3.552 × 10⁻¹³ J ✓; λ = 5.60 × 10⁻¹³ m ✓; T = 5.18 × 10⁹ K ✓.
- Y: 1/7 → 0.25 ✓, 4/16 ✓; 1/6 → 0.2857 ✓, 4/14 ✓. Plot: 2x/(1 + x) at 0.5 = 0.667 < 0.7 ✓; points (0.1429, 0.25), (0.1667, 0.2857) on the curve ✓.
- 0.1 MeV/k_B = 1.16 × 10⁹ K ("about 10⁹ K") ✓; 1 MeV/k_B = 1.16 × 10¹⁰ K ("about 10¹⁰ K") ✓. Li 4.72/1.45 = 3.26 ("about 3 times") ✓.
- Quiz 0: 0.25/1.125 = 0.222 ✓ (answer 1); counting 4/18 ✓; 0.11 = 2/18 neutron fraction ✓, 0.25 and 0.29 belong to 1:7 and 1:6 ✓. Explanation true.
- Quiz 1: answer 1 is the right reason ✓; others wrong ✓; but the "three seconds" premise is wrong (row 1).
- Quiz 2: answer 1 ✓; others wrong ✓; explanation true.
- Quiz 3: 2 × 609 = 1218 s ≈ 20 min ✓; 1/28 × 2 = 0.0714 ✓ (answer 2); 0.29 (no decay), 0.14 (one half-life, or forgetting a factor), 0 wrong ✓. See row 12.
- Quiz 4: 0.755/(0.245/4) = 12.33 ✓ (answer 2); 3.08 (forgot ×4), 4, 49 wrong ✓. Consistent with PDG ⁴He/H ≈ 0.08 (12.5).
- Flashcards: all true (card 4: lithium 3.3 times rarer ✓).

## Only earlier terms
- Warning: "mean life" (row 4), not in lesson 7.9.
- Checked present in prerequisites: k_B, 931.5 MeV per u, 1.11 MeV per nucleon for deuterium, 7.1 MeV per nucleon for ⁴He, electric repulsion between nuclei (8.4 `fission-and-fusion`); weak force, gluons (8.7); positron, neutrino, antineutrino, beta decay (7.8); half-life and N = N₀(½)^(t/t½) (7.9); Wien's law and the black-body tail (7.2); isotopes and D (7.7); pp chain and the Sun's 28% helium (8.5); scale of temperature at one second (8.13).
- "Saha equation" and "freeze-out" are named/defined on the page; fine.
- Read-aloud of n and N (point (d)): `data/symbols.json` has page-scoped meanings for n ("number of neutrons, counted for every p protons"), N ("free neutrons left … in the decay law"), N₀ and p. Since the page uses both cases, `pageCapitals` reads N as "capital N" and n as "n", so the two are spoken differently; the nuclide symbols ${}^{1}_{0}\mathrm{n}$, ${}^{1}_{1}\mathrm{p}$ are roman and not symbols. `content:check` reports no same-sound conflict. Unambiguous. Using two letters for neutron counts is acceptable because they live in separate sections (N follows lesson 7.9's notation).

## Coverage
- §4 row 8.14 (topic "The first elements", leads to `8-902/big-bang-nucleosynthesis`): covered at VWO level: n/p and its freeze-out, neutron decay, deuterium bottleneck, helium build-up, Y formula, traces, the mass-5 and mass-8 gap, observations and the lithium problem, heavier elements from stars.
- Left out: dependence of D/H on the baryon density is in the callout only; the number of neutrino species (PDG) is not mentioned. Neither needed at this level.
- No PhET sim; §4 names none.

## Where this leads
- `{8.902, 20}` → `content/year-5/8.902/big-bang-nucleosynthesis.mdx` (lecture 20) ✓; the `why` (equilibrium ratio, freeze-out at one second, Saha for when deuterium survives, decay during the wait, Y formula) matches the notes.
- `{8.033, 20}` → `content/year-2/8.033/evidence-for-the-big-bang.mdx` (lecture 20) ✓; that page lists BBN as Evidence 3 next to Hubble's law and the CMB.
- `towards: false` ✓.

## Consistency with 8.13 (brief points (a)–(c))
- (a) 10⁹ K: this page's "about three minutes" is right; 8.13's "t = 100 s, under two minutes" should be qualified (8.13 review row 1). Recommended wording for both: "about $10^{9}\ \text{K}$, about three minutes after the start".
- (c) Freeze-out 1:6 (PDG) with 8.902's 1:5 named; decay to about 1:7 (PDG): correctly attributed. See row 2 for the explanation of 1:7.6 vs 1:7.
- One second at about 10¹⁰ K agrees with 8.13.

## Licensing and AI terms
- No sentence copied. Closest: 8.902 "The high energy tail of photons is still sufficient to destroy deuteron" → page "the high-energy tail of more than a billion photons per nucleon"; PDG "comparable to that of air!" → "about that of air" (short phrases). Fine.
- No figure copied; the one graph is generated from Y = 2x/(1 + x). PDG Fig. 24.1 is not reproduced.
- Worked examples are the page's own. The counting device (a small group of nucleons) is the same idea as 8.902 eq. (483) (12 nucleons, 5:1), but the page uses its own numbers (16 nucleons at 1:7, 14 at 1:6, 18 in quiz 0) and a different question; acceptable. No PDG exercise exists.
- PDG review and listing are CC BY 4.0 (AGENTS.md table: allowed for facts and values); cited by section and equation. NIST used for two values only.
- MIT 8.902 notes: no "excluded from our Creative Commons license" or "all rights reserved" text on the pages used.
- No NASA or ESO material. No forbidden source. No em dashes.

## Notes
- My 180 s for 10⁹ K uses the standard t = 2.42 g^(−½) (T/MeV)⁻² s with g = 3.36 after e± annihilation; not from the cited sources at this precision, so it is an own check.

## Resolution (2026-11-20, by the page author)
1. Fixed. Quiz 1 now starts "One minute after the Big Bang a typical photon (one at the peak of the spectrum)". At one minute T = 1.0 x 10^10 K/sqrt(60) = 1.3 x 10^9 K (lesson 8.13), so the peak photon has about 0.56 MeV, far less than 2.22 MeV. New calcs entry quiz-peak-photon-one-minute. Explanation unchanged (still true).
2. Fixed by rewording. PDG Sec. 24.2 gives T of about 0.1 MeV for the start of the reactions but no time, so the worked example keeps 180 s. The sentence now reads "This simple estimate uses rounded numbers (the 1 to 6 at freeze-out is itself rounded) and one sharp starting time for the nuclear reactions. Detailed calculations give about one neutron for every 7 protons ...".
3. Fixed. The bottleneck section, the summary and flashcard 2 now use the shared wording "about 10^9 K, about three minutes after the start" (the unit inside the maths); the section cites PDG Sec. 24.1 and 24.2 and the 8.902 notes' 8 x 10^8 K at 200 s, eq. (490). The frontmatter summary line says "about a billion kelvin, about three minutes after the start".
4. Fixed. "A free neutron has a mean life (the average time a neutron lasts before it decays) of 878.4 s (PDG neutron listing). The half-life of lesson 7.9 is ln 2 times as long: 878.4 x ln 2 = 609 s". Flashcard 1: "(mean life, the average time a free neutron lasts: 878 s)".
5. Fixed. Callout: "The university lecture also uses the Saha equation to find when deuterium can survive. The amount of ordinary matter found from deuterium agrees with an independent measurement from the cosmic microwave background (PDG review, Sec. 24.4; a later development, not part of the MIT notes), the subject of lesson 8.15."
6. Fixed: cites "PDG review, Sec. 24.1 and 24.4".
7. Fixed: "the value found from the light elements, in the PDG review, is one nucleon per 1.7 x 10^9 photons".
8. Fixed: "Lesson 7.8 met this change of a neutron into a proton inside a nucleus; a free neutron does the same:".
9. No change (the page does not repeat the notes' slip).
10. Fixed: "a typical photon (one at the peak of the spectrum; the average photon has even less energy)"; quiz 1 says the same.
11. Fixed: every temperature now has its unit inside the maths (\ \text{K}); tools/plain.mjs reports nothing for this page.
12. Fixed: quiz 3 says "Start from the freeze-out ratio, one neutron for every 6 protons (one in every 7 nucleons)."

Checks: npm run calc:test -- -k the-first-elements: 44 passed. npm run content:check: 0 error(s) for this page (whole site 0 error(s), 28 warning(s), none for this page). Status set to reviewed.
