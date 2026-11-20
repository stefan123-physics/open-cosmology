---
page: content/year-5/8.902/dark-matter-freeze-out.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec19.pdf (read; local copy, pdftotext plus rendered pages for printed pp. 105–109, used to check the Greek letters and the equations)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (not read separately; it is only the index page for the PDF above)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec20.pdf (read, opening page only, to confirm that section 3 (BBN) is Lecture 20 material)
verdict: needs-changes
---

# Review: Where dark matter comes from — freeze-out, hot and cold

The source is the 8.902 Lecture 19 notes, sections 2 (intro), 2.A and 2.B, eqs. (466)–(476) on printed pp. 105–109. The notes' p. 105 starts with the end of the CMB-peaks material (Lecture 18), and p. 109 starts section 3 (BBN). The Lecture 20 PDF repeats p. 109, so the page is right to stop at the end of 2.B.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Equilibrium" section, first sentence | p. 106: "$T > 10^{12}$ K $\cong 100$ GeV". This is a slip in the notes: $10^{12}$ K is $k_BT \approx 86$ MeV $\approx 0.1$ GeV, while 100 GeV is $\approx 1.2\times10^{15}$ K. | "Above about $10^{12}$ K ($kT \approx 100$ GeV)". The slip is copied with no note. | Write e.g. "Above about $10^{15}$ K ($kT \approx 100$ GeV)" and add a bracket: [The notes write $10^{12}$ K $\cong$ 100 GeV; $10^{12}$ K is only about 0.1 GeV.] |
| 2 | warning | Timeline, "~keV, ~1 day" | p. 109: "$T\sim$ keV, $t \sim 1$ day". | Copied as is. But the page's own worked example (b) gives $kT = 1$ keV at $t \approx 1.3\times10^6$ s, about two weeks, so the page contradicts itself. | Add a bracket: the radiation-era relation gives about two weeks at 1 keV (the notes' "1 day" is a rough order). Optionally also say the photon-number freeze-out (double Compton/bremsstrahlung) happens at $z \sim 10^6$, i.e. weeks to months. |
| 3 | warning | Timeline, "10s–100s GeV, $10^{-8}$ s" (and "$10^{19}$ GeV, $10^{-43}$ s") | p. 109 gives these times. | Copied. With $t = 1/2H$ and $g_* \approx 87$–107, 10–100 GeV gives $t \approx 3\times10^{-9}$ to $2\times10^{-11}$ s, and $10^{19}$ GeV gives $\sim 2\times10^{-45}$ s (the Planck time is $5\times10^{-44}$ s). | These are order-of-magnitude labels from the notes. Either leave them alone or add a short bracket. The page already brackets the equality and recombination entries, so applying the same standard here would be consistent. |
| 4 | warning | WIMP miracle section; flashcard "WIMP miracle"; timeline; worked example (c) | p. 106: freeze-out "happens around 10–100 GeV" (a temperature). p. 107: "we get $m$ and $\sigma$ at the electroweak scale". The notes give no WIMP mass. | The page says the notes put the particle at "roughly 10–100 GeV" (a mass) and the flashcard says "(~10–100 GeV)". Example (c) has a 100 GeV WIMP freezing out at $kT \approx 4$ GeV. The timeline (from the notes) has WIMPs freezing out at $T \sim$ 10s–100s GeV. With $x_f \approx 25$ these fit only if $m \sim$ 0.25–2.5 TeV. | Keep temperature and mass apart. Say the notes' 10–100 GeV is the freeze-out temperature, that $T_f \approx m/25$, and do not attribute a 10–100 GeV mass to the notes. A one-line bracket in the timeline would resolve the clash with example (c). |
| 5 | warning | WIMP miracle section, first sentence | "we get $m$ and $\sigma$ at the electroweak scale" | "the observed amount ... fixes $\langle\sigma v\rangle$ (and, through $x_f$, the mass scale)". $x_f$ depends on mass only logarithmically. The relic density fixes $\langle\sigma v\rangle$, and the mass scale only follows once a weak-interaction form for $\sigma(m)$ is assumed. | Reword, e.g. "fixes $\langle\sigma v\rangle$; a weak-interaction cross section of that size points to electroweak-scale masses". |
| 6 | info | Eq. (468) bracket | The notes print "$= n_\text{eq}^2\langle\sigma v\rangle$" with no left-hand side (checked on the rendered p. 106). | The page restores $\psi$ and notes the omission. | Correct; no change. |
| 7 | info | Eq. (469) bracket | The notes print $n_c = n\,(a/a_0)^{-3}$. | The page writes $(a/a_0)^{+3}$ and notes it. Correct: $n\propto a^{-3}$, so $n(a/a_0)^3$ is the conserved quantity. | No change. |
| 8 | info | Eq. (470) bracket | $dn_c/dt = -\langle\sigma v\rangle(n_c^2 - n_{c,\text{eq}}^2)$ | The page notes the missing factor $(a_0/a)^3$. Verified: $\frac{d}{dt}(n a^3/a_0^3) = -\langle\sigma v\rangle (a/a_0)^3 (n^2 - n_\text{eq}^2) = -\langle\sigma v\rangle (a_0/a)^3 (n_c^2 - n_{c,\text{eq}}^2)$. | Optional: the page says the factor "doesn't affect the argument". It is in fact what makes (471) become (472) with $\tau_\text{coll} = 1/(n_\text{eq}\langle\sigma v\rangle)$ (physical $n_\text{eq}$, not $n_{c,\text{eq}}$), so it is worth saying that. |
| 9 | info | Eq. (472) | The notes write $\tau = 1/H$ in the text and $\tau_H$ in the equation, and have "$\tau_h$" in the late-time bullet. | The page uses $\tau_H$ throughout. | Fine, no change needed. |
| 10 | info | Eq. (476) bracket | The notes print "2 keV", "3 keV" and $l_h \sim ct_h$. | The page says the numbers fit eV masses and the comoving $ct_h(1+z_h)$. Verified (see below). | Correct. One small point: the bracket uses $ct(1+z)$ to match the 60 Mpc, while the worked example uses the comoving horizon $2ct(1+z)$, a factor 2 larger. Both are labelled, but one sentence saying that "horizon" is used loosely to within a factor 2 would help. |
| 11 | info | Timeline, equality and recombination brackets | p. 109: equality "$T\sim3$ eV, $t\sim10^{4-5}$ yr". Recombination "$T\sim$ eV, 400,000 yr". | The brackets give $1+z\approx3400$, $T\approx9000$ K, $kT\approx0.8$ eV, ~50,000 yr; recombination at $kT\approx0.26$ eV (3000 K), 380,000 yr. Verified. | The page points to "8.286's matter–radiation equality page" for these numbers, but that page gives 75,000 yr (Guth's estimate), 47,000 yr (Ryden) and $z_\text{eq}\approx3390$ (Planck). It does not give "about 50,000 years". Say "Planck 2018 values; compare 8.286's equality page" instead. |
| 12 | info | Eq. citations | — | Checked against the rendered pages: (466)–(471) p. 106; (472)–(474) p. 107; (475)–(476) p. 108; the eV–K conversion on p. 105. All correct, and every formula matches the notes apart from the corrections the page itself flags. | None. |
| 13 | info | Claims not in the notes | — | These are not in the notes: WIMP $x_f\approx20$–30; "light neutrinos are the classic example" of hot DM; WIMP free-streaming "of order Earth masses"; "Observations ... favour bottom-up"; the "Since the notes" callout (LZ, XENONnT, LHC, axions, sterile neutrinos). All are standard and correct to my knowledge. The Earth-mass cutoff is really set by kinetic decoupling and is usually quoted as $\sim10^{-6}M_\odot$, so "free-streaming scale ... of order Earth masses" mixes a length and a mass. LZ's first results (2022) are older than the Fall 2023 notes, so "Since the notes" is only partly accurate. | Optional: mark the bottom-up observational sentence as not from the notes (e.g. "Not in the notes, but ..."). Say "cutoff mass" for (c). Retitle the callout "Beyond the notes" or "Status of searches". |

## Arithmetic and answer checks
I checked every number with a Python script (radiation era, $t = 1/2H$, $\rho = g_*\frac{\pi^2}{30}\frac{(kT)^4}{\hbar^3c^5}$, $g_* = 2 + \frac78\cdot6\cdot(4/11)^{4/3} = 3.363$, $1+z = T/2.7255$ K, $kT = mc^2/3$).
- **Eq. (476) eV vs keV claim: verified.** At $m = 2$ eV, $t = 2.97\times10^{12}$ s (the notes give $2\times10^{12}$). At $m = 3$ eV, $ct(1+z) = 54.6$ Mpc (the notes give 60). With keV masses: $t = 3.0\times10^{6}$ s at 2 keV, and $ct(1+z) = 0.055$ Mpc at 3 keV. So "a million times shorter / a thousand times smaller" is right ($t\propto m^{-2}$, $l\propto m^{-1}$).
- **Worked example (a), 2 eV:** $kT = 0.667$ eV, $T = 7736$ K, $t = 2.97\times10^{12}$ s = 94 kyr ("about 0.1 Myr" ok), $1+z = 2839$ ("≈2800" ok), $2ct(1+z) = 164$ Mpc ("≈160" ok). The caveat about being near equality is appropriate.
- **(b), 3 keV:** $kT = 1$ keV, $t = 1.32\times10^6$ s = 15.3 days ("about two weeks" ok), $1+z = 4.26\times10^6$ ("≈4×10⁶" ok), $2ct(1+z) = 0.109$ Mpc ("≈0.1" ok). Using $g_* = 3.36$ at 1 keV is correct (e⁺e⁻ annihilation is over).
- **(c), 100 GeV:** $m/3 = 33$ GeV ("~30 GeV" ok); $m/25 = 4$ GeV ok; $x_f = 20$–30 gives 3.3–5 GeV.
- **Freeze-out plot model:** $n_\text{eq}/T^3 \propto x^{3/2}e^{-x}$ ✓. $\tau_H/\tau_\text{coll} = n_\text{eq}\langle\sigma v\rangle/H \propto m\langle\sigma v\rangle\,x^{1/2}e^{-x}$ (since $H\propto T^2$) ✓. The iterated exact root of $A x^{1/2}e^{-x}=1$ against the approximation $\ln A + \frac12\ln\ln A$: for $\log_{10}A$ = 4, 8, 15 the approximations are 10.32, 19.88, 36.31 and the exact roots 10.38, 19.92, 36.34, so the ratio is 1.06, 1.04, 1.03 at the approximate $x_f$ ✓. Frozen level $x_f^{3/2}e^{-x_f} = x_f/A$ ✓. Plotted frozen levels: $\log_{10}$ = −2.96, −6.69, −13.43, all inside the range [−20, 0]. The equilibrium curve at $x = 50$ is −19.2, inside the range ✓. The mathjs expression matches the caption.
- **P(k) plot:** $\log_{10}[kT^2]$ with $T = 1/(1+(kL_0)^2)$ gives $x - 2\log_{10}(1+10^{2x})$ ✓. Slope +1 → −3 ✓. HDM factor $\exp(-(k/k_\text{fs})^2)$ in log10 is $-10^{2(x-f)}/\ln10$ ✓. The CDM curve at $x=2$ is −6.0, at the edge of the range. The transfer function matches the one on the power-spectrum page ✓.
- **Unit conversions:** 1 eV/$k_B$ = 11605 K ✓. $10^{12}$ K = 86 MeV ✗ (row 1). Equality: $2.7255\times3400 = 9267$ K, 0.80 eV ✓ (Planck 2018 $z_\text{eq}\approx3387$). Recombination: 3000 K = 0.259 eV ✓. Today: 2.7255 K = $2.35\times10^{-4}$ eV ✓ (the page's "2.3×10⁻⁴" is fine).
- **Quiz:** Q1 answer 1 ✓. Q2 answer 1 ✓ (relic $\propto 1/\langle\sigma v\rangle$ up to the slowly varying $x_f$). Q3 answer 1 ✓. Q4 answer 1 ✓; "of order 100 Mpc (comoving)" for a few eV agrees with the 109–164 Mpc computed above. The distractors are clearly wrong.
- **Flashcards:** the $n_\text{eq}$ formula matches (466). The time-scale card matches (472) and the regimes. The hot/cold card matches (473) and the cases. "WIMP miracle (~10–100 GeV)": see row 4.

## Coverage and order
- The page follows the notes' order: section 2 intro (T ∝ 1+z, creation/annihilation, freeze-out, eV–K conversion), then 2.A (466–472, two regimes, freeze-out sketch → own plot, WIMP miracle, hot vs cold 473, free-streaming 474–476, CDM, P(k) sketch → own plot, top-down vs bottom-up), then 2.B timeline, all eleven entries in order.
- Left out: the intro remark that the later history "below ~16 GeV" is standard-model physics. This is minor and could be added in a few words.
- Added (all labelled as the page's own or as later developments, except as noted in row 13): the freeze-out and P(k) plots, the worked example, the "Since the notes" callout, the WIMP $x_f\approx20$–30 value, and the observational support for bottom-up.
- Section 3 (BBN), which starts on p. 109 of the Lecture 19 PDF, is correctly left to Lecture 20. Its PDF repeats p. 109, and `leadsTo` 8.902 Lecture 20 with that reason is accurate.

## Licensing
- `grep -il "rights reserved|courtesy"` on the extracted text finds no notices. The notes are CC BY-NC-SA via OCW.
- The notes' three figures (the $n_c$ freeze-out sketch on p. 107, the P(k) HDM/CDM sketch and the bottom-up/top-down drawing on p. 108) are **not reproduced**. The page replaces the first two with plots computed from formulas, and gives the third only as a bullet list in its own words ✓.
- No text copied verbatim beyond short standard phrases ("relic abundance", "WIMP miracle", "free-streaming length", "top-down/bottom-up"). The timeline is a paraphrase of the notes' list. That is unavoidable for a factual list and fine.
- The worked example is original: the notes have no worked example. No OpenStax or LibreTexts material.

## Notes
- Cosmology forward links: the 8.286 references (monopole/inflation lectures for the GUT transition, the equality page) are fair. Row 11 is the only mis-attribution: the "about 50 000 years" is not on that page.
- Prerequisites `why-cold-dark-matter` and `neutrinos-and-particle-counting` exist. The page is listed in the 8.286 `_course.json` themes.
- `status: draft` is correct until row 1 is fixed and the warnings are dealt with.
- Uncertain: I did not check whether "Lyman-α forest" and "clustering" observations are discussed in later 8.902 lectures (Lecture 21 is Lyman-α). If they are, the bottom-up sentence could point there.

## Resolution (2026-11-15, by the page author)

- Error (row 1): the page now gives kT ≈ 100 GeV ≈ 10¹⁵ K, with a bracket noting the notes' "10¹² K ≅ 100 GeV" slip (10¹² K ≈ 86 MeV).
- Row 2: the timeline's "~keV, ~1 day" now has a bracket: 1 keV is reached after about two weeks; one day corresponds to kT ≈ 4 keV.
- Row 3: brackets added for 10⁻⁴³ s (the Planck time; the radiation-era relation gives ~10⁻⁴⁵ s) and for WIMP freeze-out at 10⁻⁸ s (10–100 GeV is 10⁻⁹–10⁻¹¹ s; 10⁻⁸ s fits kT ≈ 4 GeV).
- Row 4: 10–100 GeV is now described as a freeze-out temperature; the WIMP mass is "of order 100 GeV", freezing out at kT 20–30 times below it (text and flashcard).
- Row 5: the mass dependence is now described as weak (logarithmic, through x_f).
- Row 8: the eq. 470 bracket now explains that the (a₀/a)³ factor is what makes eq. 471's prefactor the physical n_eq, and says to read it as included.
- Row 10: the eq. 476 bracket now notes the factor 2 between ct(1+z) and the worked example's 2ct(1+z).
- Row 11: the equality bracket now quotes the 8.286 page correctly (68 000–75 000 yr estimate, 47 000 yr fuller calculation).
- Row 13: the bottom-up sentence is marked as not from the notes; example (c) says "cutoff mass … (a standard estimate, not from the notes)"; the callout is retitled "Beyond the notes".

## Later fix (2026-11-15, found while writing the calculation file)

- Recomputing every number (`calcs/8.902/dark-matter-freeze-out.yaml`) confirmed the worked example and the keV/eV timeline values with g* = 3.36. The two GeV-scale timeline brackets (10¹⁹ GeV ↔ about 10⁻⁴⁵ s; 10–100 GeV ↔ about 10⁻⁹–10⁻¹¹ s; 10⁻⁸ s ↔ kT ≈ 4 GeV) are right only with the full count of particle species, g* ≈ 100, at those temperatures; with the worked example's 3.36 each time is about five times longer. The brackets now say g* ≈ 100 and that 3.36 applies only after electron–positron annihilation. No number changed.
