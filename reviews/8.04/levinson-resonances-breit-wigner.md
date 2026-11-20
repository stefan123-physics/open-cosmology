---
page: content/year-2/8.04/levinson-resonances-breit-wigner.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes19/ (read: Zwiebach, Lecture 19 notes, 10-page PDF, via pdftotext and rendered page images of pp. 3-8; printed footer page numbers equal the PDF page numbers, pp. 1-9)
  - https://pdg.lbl.gov/2024/tables/rpp2024-sum-gauge-higgs-bosons.pdf (read: PDG 2024 summary table, Higgs mass and width, to check the page's bracketed note)
  - content/year-2/8.04/phase-shifts-time-delay.mdx and content/year-4/8.286/higgs-field.mdx (read: for the worked example's premise and the cosmology callout)
verdict: needs-changes
---

# Review: Levinson's theorem, resonances and the Breit–Wigner distribution

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "Phase shift of the well behind a barrier" (eq. (2.8)) | Inside the fractions the coefficient is $\frac{k'}{\kappa}$: numerator $\sin k'a\cosh\kappa a + \frac{k'}{\kappa}\cos k'a\sinh\kappa a$, denominator $\sin k'a\sinh\kappa a + \frac{k'}{\kappa}\cos k'a\cosh\kappa a$ (notes p. 4, checked on the rendered page). Independent derivation agrees: continuity of $\psi'$ at $x = a$ gives $B = A\frac{k'}{\kappa}\cos k'a$, and $\psi/\psi'$ at $x = 2a$ equals $\tan(2ka+\delta)/k$. | $\frac{\kappa}{k'}$ in both places (inverted). | Replace `\frac{\kappa}{k'}` by `\frac{k'}{\kappa}` twice in the `tex`. The prefactor $\frac{k}{\kappa}$ (notes write $\frac{ka}{\kappa a}$) is correct. |
| 2 | info | Breit–Wigner and (3.2) formulas | Notes write $|\psi_s|^2$ in eqs. (3.2), (3.5), (3.7) and switch to $A_s$ in (3.11). | $|A_s|^2$ throughout. | Same quantity ($|\psi_s| = |A_s|$); consistent with the previous page. No change needed; optionally mention once. |
| 3 | info | Higgs paragraph | "4.07 Mev (±4%)". | 4.07 MeV, uncertainty omitted. | Optional: add "(±4%)". |
| 4 | info | Complex k plane section | Notes add that $\tan\delta = -i$ requires $\delta \to -i\infty$ (using $\tan iz = i\tanh z$). | Omitted; page says only that no real $\delta$ allows it. | Optional one-line addition. |
| 5 | info | "How negative can the delay be?" closing sentence | "The argument was not rigorous but the result is rather accurate, receiving corrections that vanish for packets of large energy." | "The argument is not rigorous, but the bound is accurate, with corrections that vanish for energetic packets." | Close paraphrase of one sentence; acceptable, but could be reworded further. |

All other formula citations were checked and are correct in content, equation number and printed page: (1.1) p. 1; (1.3) p. 2; (1.4)-(1.6) p. 2; (1.7)-(1.8) p. 2; (1.9) p. 3; (2.1)-(2.3) p. 3; (2.4) p. 3; (2.5)-(2.7) p. 4; (2.8) p. 4 (apart from finding 1); (2.9)-(2.10) p. 4; Figure 5 discussion pp. 5-6; (3.1) p. 6; (3.2)-(3.4) p. 7; (3.5)-(3.7) p. 7 ($\Gamma = 2\alpha\beta\hbar^2/m$ matches); (3.8) p. 7; (3.9)-(3.10) p. 8 ($\Delta t = 2m/(\alpha\beta\hbar) = 4\tau$ matches); Higgs paragraph p. 8; (3.11)-(3.13) p. 8; "shadow" pp. 8-9; (3.14)-(3.15) p. 9.

## Arithmetic and answer checks
- $u_* = 1.8523$, $z_1^2 = 5$: $E/V_1 = u^2/z_1^2 = 3.431/5 = 0.686 \approx 0.69$. Correct; "about 14 free transit times $4a/v_0$" matches notes p. 6.
- Worked example (a): $z_0 = \sqrt{3.40} = 1.844$; $\pi/2 = 1.571 < 1.844 < 3\pi/2 = 4.712$, so exactly one odd state of the symmetric well of half-width $a$, i.e. one bound state with the wall. Levinson: $(0 - (-\pi))/\pi = 1$. Consistent; the premise (phase from 0 to $-\pi$ for $z_0^2 = 3.40$) matches the previous page (phase-shifts-time-delay, line 110).
- Worked example (b): $6.582\times10^{-22}/4.07 = 1.617\times10^{-22}$ s, rounds to $1.62\times10^{-22}$ s (matches notes). $c\tau = 2.998\times10^8 \times 1.617\times10^{-22} = 4.85\times10^{-14}$ m, rounds to $4.9\times10^{-14}$ m. Correct.
- "About fifty times the size of a proton" (warning): not in the calcs file and depends on what "size" means. With the charge radius 0.84 fm the ratio is about 58; with the diameter (about 1.7 fm) about 29; with "about 1 fm" about 49. Suggest "tens of times the size of a proton" or state the size used, and add a calcs entry.
- Worked example (c): $\frac{1/4}{1 + 1/4} = 0.2$. Correct.
- Plot: with $x = (E - E_\alpha)/\Gamma$, $\frac{\Gamma^2/4}{x^2\Gamma^2 + \Gamma^2/4} = \frac{1}{1 + 4x^2}$, as plotted; the point $(0.5, 0.5)$ lies on the curve; caption ("peak 1, one half at ±Γ/2") is correct.
- Quiz 1: $(0 + 2\pi)/\pi = 2$, answer index 0 = "2". Correct.
- Quiz 2: answer 0 (cannot return before reaching $R$; delay $\gtrsim -2R/v_0$, $d\delta/dk \gtrsim -R$). Correct, matches eqs. (2.1)-(2.3).
- Quiz 3: half maximum at $E_\alpha \pm \Gamma/2$, answer 0. Correct.
- Quiz 4: poles at $k = \alpha - i\beta$, answer 0; explanation (bound states on positive imaginary axis) correct.
- Flashcards: all four correct ($\tau = \hbar/\Gamma = \Delta t/4$; resonance condition $\tan\delta = -i$).
- calcs/8.04/levinson-resonances-breit-wigner.yaml covers all numbers above except the proton comparison. Note that the calcs file has no formula check of eq. (2.8), which is how finding 1 slipped through; consider adding an identity check (e.g. compare (2.8) with a direct numerical matching at sample $u$).

## Coverage and order
- Order follows the notes: Levinson's theorem (Section 1) -> resonances, causality bound, well behind a barrier, Figure 5 discussion (Section 2) -> modelling, Breit–Wigner, lifetime, Higgs, complex k plane (Section 3).
- Omitted: the remark $\delta \to -i\infty$ (finding 4) and the "±4%" on the Higgs width; the notes' figures are described in words, not reproduced. Nothing substantive missing.
- Added: the cosmology callout, the bracketed Higgs-width note and the worked example, all marked as the page's own.

## Licensing
- The notes carry no "All rights reserved" or "Courtesy of" notice (grep and reading of all pages); the only credit line is that Sarah Geller transcribed the handwritten notes (not a third-party image credit).
- No figures reproduced; the only graph is generated from eq. (3.7).
- No verbatim paragraphs; one close paraphrase (finding 5). Short phrases ("regulator", "shadow", "width at half maximum") are standard or quoted.
- Worked example: part (a) and (c) are original; part (b) re-checks the notes' Higgs lifetime (MIT's numbers) but adds its own light-travel calculation. Acceptable as a check of a quoted number.
- No OpenStax or LibreTexts material.

## Notes
- Bracketed Higgs-width note: fair. PDG 2024 lists the Higgs full width as $3.7^{+1.9}_{-1.4}$ MeV, "assumes equal on-shell and off-shell effective couplings", and mass $125.20 \pm 0.11$ GeV; 4.07 MeV is the Standard Model prediction and lies within that range, and the experimental mass resolution (GeV scale) is indeed far too coarse to read a few-MeV width off the peak. Suggestions (info): mention that the indirect value rests on that assumption, and give the PDG reference a specific URL/edition (currently the generic https://pdg.lbl.gov/) and cite it in the text (e.g. as a link or `pdg` mention) since it is otherwise unused.
- Cosmology callout and leadsTo: the 8.286 Lecture 22 page (content/year-4/8.286/higgs-field.mdx) does discuss the Higgs field settling from zero to a nonzero value as the universe cools, i.e. a symmetry-breaking phase transition, so the callout is fairly attributed. (Uncertain/optional nuance: in the Standard Model with a 125 GeV Higgs, lattice studies find the electroweak change is a smooth crossover rather than a sharp phase transition; "one of the phase transitions that cosmology studies" is acceptable at this level.) Link `/courses/8-286/higgs-field` matches the URL pattern used on other pages. leadsTo 8.04 Lecture 20 matches the syllabus title.
- Prerequisite `phase-shifts-time-delay` exists and is the right predecessor.
- No em dashes found in the page text.

## Resolution (2026-11-17, by the page author)

1. Fixed: eq. (2.8) now has k′/κ inside both fractions, as in the notes; calcs entry `barrier-matching` checks the matching by a finite difference.
2. "About fifty times the size of a proton" changed to "nearly sixty times the radius of a proton (about 0.84 × 10⁻¹⁵ m)", with calcs entry `ex-proton-radii`.
3.–4. No change.
5. The sentence is reworded ("a heuristic argument; the notes add that the corrections become negligible for packets of high energy").
6. The Higgs bracket now names the assumption of equal on-shell and off-shell couplings, and the `pdg` reference points to the 2024 gauge and Higgs boson summary table.
7. No change. (The callout says the change of the Higgs value is one of the phase transitions cosmology studies; whether it is a sharp transition or a smooth crossover is left to the 8.286 page.)

Status set to `reviewed`.
