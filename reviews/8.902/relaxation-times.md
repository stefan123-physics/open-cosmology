---
page: content/year-5/8.902/relaxation-times.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec03.pdf (read; local copy, all 6 PDF pages rendered as images: printed pp. 16–21, plus the OCW end page via pdftotext, compared in detail)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; index page for the PDF above)
verdict: pass-with-notes
---

# Review: Why stars do not collide: relaxation times in galaxies

The source is sections 2.B "Relaxation times" and 2.C "Collisionless relaxation" of the 8.902 Lecture 3 notes (Vogelsberger, Fall 2023). Printed p. 16 opens with the end of 2.A (eqs. 56–59, covered by `virial-theorem`), then 2.B, the encounter sketch and eq. (60); p. 17 has (61)–(66); p. 18 the weak-encounter text, the random-walk sketch, (67)–(68) with the cylinder sketch, and (69); p. 19 has (70)–(74) and the start of 2.C; p. 20 phase mixing (sketch), (75)–(76); p. 21 the potential-well sketch, (77), then section 3 (modelling galaxies, Lecture 4 page), which is not counted as missing.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Opening paragraph: "do stars in a galaxy ever collide … ? … The answer is a resounding yes, they almost never do." | Notes: "we will show that stars are collisionless, i.e. that two-body collisions are rare". | "yes" answers a question whose answer is "no" (they practically never collide); the sentence contradicts itself. | E.g. "The answer is a resounding no: they almost never do." |
| 2 | warning | End of "Strong encounters are almost impossible": "Only in dense globular clusters, with $N \sim 10^4$ to $10^5$ stars, are strong encounters common." | p. 17: "For globular clusters, $N \sim 10^4$, so strong encounters are more common." | "common", and adds $10^5$. With the page's own numbers ($p = 3/N$, crossing time 0.49 Myr) a star in a $10^5$-star cluster has $p = 3\times10^{-5}$ per crossing and about $2.8\times10^4$ crossings in 13.8 Gyr, i.e. under one strong encounter per star per Hubble time ($\approx 0.85$; $\approx 8$ for $N = 10^4$). "Common" overstates it. | "are strong encounters far more frequent (though still rare for any one star)", or follow the notes' "more common". |
| 3 | info | Formula "The Coulomb logarithm" (eqs. 70–71) | Eq. (70), p. 19, prints $b_\text{min} \approx b_\text{strong} = 2R/v_*$ (a $v$ in place of $N$). | $2R/N_*$, silently corrected. | Optionally add to the existing bracket: "[The notes print $2R/v_*$; $N_*$ is meant.]" |
| 4 | info | Line after eq. (61): "roughly the acceleration at closest approach, $Gm/b^2$" | p. 17 prints $GM/b^2$ here too (same capital-M slip as eq. 62). | $Gm/b^2$, silently corrected. | Optionally mention in the eq. (62) bracket that the text after (61) has the same $M$. |
| 5 | info | Bracket after eq. (71): "$b_\text{min}$ is about 0.04 AU rather than the notes' 0.01 AU" | Eq. (70): "$10^{-10}$ kpc (0.01 AU)". | Correct (2×10⁻¹⁰ kpc = 0.041 AU). Note that the notes' own $10^{-10}$ kpc is 0.021 AU, so the notes' 0.01 AU is off by a further factor 2 independent of the factor 2 in $2R/N$; the bracket implies the whole difference comes from $2R/N$. Also the formula itself keeps "$\approx 10^{-10}$ kpc" (as in the notes) while the bracket says $2\times10^{-10}$. | Fine as an order of magnitude; optionally "(the notes' $10^{-10}$ kpc is itself 0.02 AU)". |
| 6 | info | Bracket after eq. (62): "[The notes write $GM/v^2$ …]" | Eq. (62), p. 17: $b_{90} = GM/v^2$. | $2Gm/v^2$ with the bracket. | Verified: the bracket is correct. $2Gm/(bv) = v$ gives $b = 2Gm/v^2$, and with $v^2 = GNm/R$ this is $2R/N$, which is what (64) states, so the factor 2 and the single-star mass are both needed. No change. |
| 7 | info | Formula "Violent relaxation time" (eq. 77) and bracket | Eq. (77), p. 21: last line $\sim\langle\dot\phi^2/\phi\rangle^{-1/2}$. | $\langle\dot\phi^2/\phi^2\rangle^{-1/2}$ with the bracket. | Verified: $\dot\phi^2/\phi$ has units of energy per mass per time², so $\langle\cdot\rangle^{-1/2}$ would not be a time; with $E \sim \phi$ from the line before, $\phi^2$ is right. No change. |
| 8 | info | "How collisionless systems relax": "A system is called relaxed when its coarse-grained phase-space distribution … no longer changes." | p. 20: "We say a system is relaxed when its coarse grained phase-space distribution function does not change any more." | Close paraphrase of a one-sentence definition. | Acceptable as a standard definition; no change needed. |
| 9 | info | Formula "Number of encounters at impact parameter b" (eq. 68) | Uses $N$ for the number of encounters, as on the page. | Same, while $N$ is the number of stars everywhere else. | Optional: write $dN$ or $\delta N$, or add "(here $N$ counts encounters, not stars)". |

Every Formula checked against the rendered PDF; equation numbers and printed pages are right: (60) p. 16; (61) p. 17; (62) p. 17; (63) p. 17; (64)–(65) p. 17; (66) p. 17; (67) p. 18; (68) p. 18; (69) p. 18; (70)–(71) p. 19; (72) p. 19; (73) p. 19; (74) p. 19; (75) p. 20; (76) p. 20; (77) p. 21. Content of each matches the notes (the page compresses the chain-rule lines of (76) into one line, with the two ingredients stated in the text; correct).

## Arithmetic and answer checks
- Eq. (61) integral: $\int_{-\infty}^{\infty} ds/(1+s^2)^{3/2} = [s/\sqrt{1+s^2}] = 2$. Correct; $Gm/b^2 \times 2b/v = 2Gm/(bv)$. Correct.
- Eq. (66): $\frac{N}{\frac43\pi R^3}\cdot\frac{4\pi R^2}{N^2}\cdot R = 3/N$; $3\times10^{-11}$ for $N = 10^{11}$. Correct.
- Coulomb logarithm: $\ln 10^{11} = 25.33$; $\ln(10\ \text{kpc}/2\times10^{-10}\ \text{kpc}) = \ln(5\times10^{10}) = 24.63$. "24.6 instead of 25.3" correct. $2\times10^{-10}$ kpc $= 2\times10^{-7}$ pc $\times 206265$ AU/pc $= 0.041$ AU. Correct.
- Eq. (74) re-derived: $v^4 = G^2M^2/R^2$, $n = 3M/(4\pi mR^3)$, so $v^4/(8\pi G^2m^2nR\ln\Lambda) = M/(6m\ln\Lambda) = N/(6\ln\Lambda)$. Correct.
- Plot: curve $\log_{10}(N/(6\ln N))$ over $\log_{10}N \in [2, 12]$ gives 0.56 to 9.78, inside the range [0, 10]. Points: $N = 10^5$: $10^5/69.08 = 1447.6$, $\log_{10} = 3.161$; $N = 10^{11}$: $6.58\times10^8$, $\log_{10} = 8.818$. Both correct. Caption "about 1400 crossing times" (1448) and "about 7 × 10⁸" correct.
- Worked example (a): $10\ \text{kpc} = 3.086\times10^{17}$ km; $/200 = 1.543\times10^{15}$ s $= 48.9$ Myr. $N/(6\ln N) = 6.58\times10^8$; $t_\text{relax} = 3.22\times10^{16}$ yr, $2.3\times10^6$ times 13.8 Gyr: "more than a million times" correct. The given $v = 200$ km/s is consistent with the virial assumption behind $N/(6\ln N)$: $\sqrt{0.0043\times10^{11}/10^4} = 207$ km/s (for solar-mass stars).
- Worked example (b): $5\ \text{pc} = 1.543\times10^{14}$ km; $/10 = 1.543\times10^{13}$ s $= 0.489$ Myr. $6\ln10^5 = 69.08$; $10^5/69.08 = 1448$ ("1450" fine). $t_\text{relax} = 7.1\times10^8$ yr ("0.7 billion" correct). Virial check: $\sqrt{0.0043\times10^5/5} = 9.3$ km/s, consistent with $v = 10$ km/s.
- Quiz 1 (answer 1, $2Gm/(bv)$): correct; explanation correct.
- Quiz 2 (answer 1): correct. "Tiny compared with the area of the galaxy per star": $\sigma/(\pi R^2/N) = 4/N$; true. Explanation $3/N = 3\times10^{-11}$ correct.
- Quiz 3 (answer 2, about $7\times10^8$): $6.58\times10^8$. Correct; "crossing time of about 50 million years" matches the worked example.
- Quiz 4 (answer 1, $dE/dt = \partial\phi/\partial t$): correct, eq. (76).
- Flashcards: $b_\text{strong} \approx 2Gm/v^2 \approx 2R/N$; $t_\text{relax}$ and $N/(6\ln N)$ from (72)/(74); collisionless relaxation from 2.C. All correct.
- `calcs/8.902/relaxation-times.yaml`: 14 entries (encounter integral, strong probability, both Coulomb logarithms, $b_\text{min}$ in AU, galaxy ratio, both plot points, both crossing times, both relaxation times, cluster ratio, galaxy crossing in s). Each matches the page text it quotes; origins (mit / page-own / slip) are sensible. `npm run calc:test -- -k relaxation`: 14 passed, 0 failed.

## Coverage and order
- The page follows the notes' order: aim of 2.B; one encounter (60)–(61); strong encounters (62)–(66) and globular clusters; weak encounters and random walk (67)–(69); limits and Coulomb logarithm (70)–(71); relaxation time (72)–(74); 2.C relaxed state, phase mixing, violent relaxation (75)–(77), Lynden-Bell 1967, free-fall time.
- Nothing in 2.B or 2.C is left out. The notes' p. 18 sentence (kicks accumulate "until $v_\perp \approx v$") is expressed as $\sum(\delta v_i)^2 \approx v^2$, which is the notes' own definition in (72).
- Additions (own material): the plot, the worked example (globular-cluster relaxation is flagged as "not in the notes"), "every factor of ten in $b$ contributes equally", the plasma remark on the Coulomb logarithm, and the slip brackets. All correct.
- Sketches not reproduced: encounter geometry (p. 16), random walk (p. 18), cylinder (p. 18), phase mixing (p. 20), potential wells (p. 21). The last two are described in words in the page's own phrasing; adequate.
- `leadsTo` 8.902 Lecture 4 ("potential-density pairs and the orbits of stars in a smooth potential") matches the Lecture 4 notes (3.A potential-density pairs, 3.B Orbits). No cosmology callout; none needed for this 8.902 page.

## Licensing
- No "All rights reserved" notice and no "Courtesy of" credit on printed pp. 16–21 (checked every page and the extracted text); OCW end page only, CC BY-NC-SA.
- No figure is reused; the phase-mixing and potential-well sketches are only described.
- No verbatim copying beyond the one-sentence definition of "relaxed" (finding 8) and standard phrases ("impact parameter", "Coulomb logarithm", "collective potential").
- Worked example is original (own numbers and situations). No OpenStax or LibreTexts material. `references` is empty, which is right: Lynden-Bell 1967 is mentioned only as the notes cite it.

## Notes
- No em dashes on the page.
- The page mixes $N$ and $N_*$ for the number of stars, exactly as the notes do; harmless.

## Resolution (2026-11-17, by the page author)

1. Warning: the opening now reads "The answer is a resounding no: they almost never do."
2. Warning: globular clusters now follow the notes ("N ∼ 10⁴ stars, strong encounters are far more frequent, though still rare for any one star").
Info: the b_min bracket now also notes the notes' 2R/v_* and GM/b² slips. The formula keeps the notes' ≈ 10⁻¹⁰ kpc, with the bracket giving 2 × 10⁻¹⁰. Other info items need no change.

Status set to `reviewed`.
