---
page: content/year-3/8.044/maxwell-relations.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l10/ (read: the 16-page slide PDF mit8_044s13_l10.pdf, text via pdftotext; slides 1, 2, 3, 5, 6, 7, 8, 9, 10, 12 and 15 also checked as images because the text extraction is garbled)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_notes-max/ (read: pp. 1–5; pp. 4–5 also as images for the square diagram)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l11/ (read: slide text only, to check the Lecture 11 leadsTo claim)
verdict: pass-with-notes
---

# Review: Maxwell relations and thermodynamic potentials

Slide numbering: PDF page n = slide L10B n for n = 1–15; PDF page 16 = OCW notice. In the note, the printed page number equals the PDF page number (pp. 1–5, then the OCW notice).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Consequences" (a) | Slide 5 is titled "CONSEQUENCES a) γ", and slide 6 (image checked) ends with the underlined result $\gamma - 1 = T\alpha^2V/(\kappa_T C_V)$. | Gives $C_P - C_V = TV\alpha^2/\kappa_T$ but never states the result for $\gamma = C_P/C_V$. | Add one sentence (and optionally a `<Formula cite="mit" at="slide 6">`): dividing by $C_V$ gives $\gamma - 1 = TV\alpha^2/(\kappa_T C_V)$. This is the underlined endpoint of MIT's part (a). |
| 2 | warning | "Maxwell relations", magic square paragraph | Slide 15 and notes p. 4 show the square as a figure (E, F top; H, G bottom; x, −T, −X, S on the sides; slide 15 with the hydrostatic labels −V and P and a drawn path giving $(-1)(\partial S/\partial P)_T = (-1)(-1)(\partial V/\partial T)_P$). | Describes the square in words only, with no diagram and no worked trip round it. | The rule is hard to follow without a picture. Add an original diagram (generated, not MIT's figure) or a small table of the corners and sides, plus one worked trip (e.g. the Gibbs relation as on slide 15). Also mention "in either direction" (notes p. 5). |
| 3 | info | Magic square paragraph | Notes pp. 4–5: "displayed at the corners of a square, proceeding clockwise in alphabetic order … each thermodynamic potential is bracketed by its natural variables … stepping around the four sides of the square in order … then turning around and taking two steps backward … placed in the six positions in the two partial derivatives … signs are accumulated on the appropriate sides of the equality." | "Write the potentials clockwise in alphabetical order at the corners of a square … each potential sits between its natural variables … go once round all four sides in order, then reverse and go back along two: the six variables passed fill the six places in the two derivatives, and the signs met are collected on their sides of the equation." | Not copied word for word, but it is a sentence-by-sentence paraphrase that follows the note's structure closely. Consider recasting it in the page's own order, e.g. tied to a worked trip on the diagram suggested in #2. |
| 4 | info | Slide 12 wire relation and the bracket at the end of "Other potentials" | Slide 12 (image checked) writes the wire's tension as a script $\mathcal{F}$, so it does not clash with the free energy $F$. | Plain $F$ for the tension, then a bracket explaining that $F$ and $H$ later mean free energy and enthalpy. | Correct as it stands, since the clash is explained. Using $\mathcal F$ as MIT does would remove the clash for $F$. $H$ (magnetic field vs enthalpy) clashes in MIT too. |
| 5 | info | "Consequences" (b), energy of an ideal gas | Slide 7 writes $U = \int_0^T C_V(T', V)\,dT' + \text{constant}$, then concludes $C_V = C_V(T)$. | Concludes $C_V = C_V(T)$ first, then writes $C_V(T')$ in the integral. | Logically equivalent. No change needed. |
| 6 | info | "Consequences" (c), last sentence | Slide 10 (image checked) lists three constants for an isentropic change: $VT^{3/2}$, $V^{2/3}T$, $V^{5/3}P$. | Lists $VT^{3/2}$ and $V^{5/3}P$. | $V^{2/3}T$ is just $VT^{3/2}$ raised to the power 2/3. Optional. |
| 7 | info | "Consequences" (a), "which is never negative" | Not on the slides or in the note. | States that $C_P - C_V \ge 0$. | True for a stable system ($\kappa_T > 0$). Optionally add "since $\kappa_T > 0$ for a stable system". |
| 8 | info | "Maxwell relations", from the energy | Notes p. 1 also remark that $E(S, V)$ would give $T(S, V)$ and $P(S, V)$, "perhaps not the most practical form", and that the differential is exact whatever variables are used for $T$ and $P$. Notes p. 5 gives a magnetic example of the square: $(-1)(\partial H/\partial S)_M = (-1)(\partial T/\partial M)_S$. | Both left out. (The magnetic relation itself appears, from slide 12.) | Optional: one sentence on the first point. |
| 9 | info | Introduction and summary, "slides 1–15" | Slides 1–10 use $U$ for the internal energy, slides 11–15 and the note use $E$ (notes p. 1 explain why: consistency with Reif, and the mnemonic). | Switches from $U$ to $E$ and says so ("the notes use $E$ here, as Reif does"). | Fine. Optionally say that the slides switch at slide 11 too. |
| 10 | info | leadsTo (Lecture 11) | Lecture 11 slides 1–7 first apply the square to an elastic rod ($E(T, L)$, $S(T, L)$, homework problem on a chain, rubber band). Heat engines start at slide 8 (efficiency) and the Carnot cycle at slide 10. | "Heat engines and the Carnot cycle, where entropy as a state function limits efficiency." | Correct but incomplete. Consider: "Lecture 11 first uses the Maxwell relations on an elastic rod, then turns to heat engines and the Carnot cycle." |

Formulas checked and found correct (content and citation):
- $\kappa_T$, $\kappa_S$ (slide 2, image checked), including "adiabatic ⇒ constant S if quasistatic" as the origin of the subscript S.
- Second law statements $dS \ge 0$ (isolated) and $dS_1 \ge \delta Q_1/T_{\text{bath}}$ (slide 1, image checked). The page writes $\Delta S \ge 0$; same content.
- $dS$ in terms of $T$ and $V$ (slide 3, image checked): identical.
- Energy equation $(\partial U/\partial V)_T = T(\partial P/\partial T)_V - P$ (slide 4), with "does not contain S"; the cancellation of the $\partial^2U/\partial T\partial V$ terms is the slide 4 derivation.
- $C_P = C_V + [(\partial U/\partial V)_T + P](\partial V/\partial T)_P$, $\alpha$ definition (slide 5); $(\partial P/\partial T)_V = \alpha/\kappa_T$ and $C_P - C_V = T\alpha^2V/\kappa_T$, ideal gas $Nk$, "polyatomic as well as monatomic" (slide 6). Cited slide 6: correct.
- Ideal-gas energy: $(\partial U/\partial V)_T = P - P = 0$, $dU = C_V dT$, integral, $C_V = C_V(T)$ (slide 7). Correct.
- $(\partial S/\partial T)_V = C_V/T$, $(\partial S/\partial V)_T = Nk/V$ (slide 8); $S(T, V)$ integral and monatomic form $Nk\ln[(V/V_0)(T/T_0)^{3/2}]$ (slide 9, cited slide 9: correct); isentropic constants (slide 10).
- $dE = T\,dS - P\,dV$, natural variables, $(\partial T/\partial V)_S = -(\partial P/\partial S)_V$ (slide 11; notes p. 1).
- Wire and magnet relations, $d(TS)$, $d(PV)$ (slide 12, image checked).
- $F$, $dF$ and its Maxwell relation; $H$, $dH$ and its relation (slide 13; notes pp. 2–3). $G$, $dG$ and its relation (slide 14; notes p. 4). All signs verified. Natural variables $(T,V)$, $(S,P)$, $(T,P)$: notes pp. 3–4. "Three additional functions with the units of energy" and "physical interpretations … studied later": notes p. 2.
- Magic square description against notes pp. 4–5 and slide 15: corner order, side labels (shared natural variable with the sign of its term), conjugates on opposite sides, the walk, and the generic $dE = T\,dS + X\,dx$ (with $X = -P$, $x = V$ for the hydrostatic case). Correct. (Slide 15's labels −V and P are the same thing with the sign of each term attached.)

## Arithmetic and answer checks
- Example (a): $1/0.0224 = 44.643 \to 44.64$; $1/0.0448 = 22.321 \to 22.32$; $0.137 \times 22.321 = 3.058 \to 3.06$ J. Correct. The algebra $T(\partial P/\partial T)_V - P = RT/(V-b) - P = a/V^2$ is correct, and $\Delta U = \int a/V^2\,dV = a(1/V_1 - 1/V_2)$ is correct; $b$ correctly drops out.
- Example (a) input: $a = 0.137$ Pa m⁶ mol⁻² for N₂ (tabulated 1.37 L² bar mol⁻²): correct. The page writes "Pa m⁶" without "per mole squared"; for one mole the number is right. Optional: "Pa m⁶ mol⁻²". $V = 0.0224$ m³ is the molar volume at STP, a sensible start.
- Example (b): $293 \times 1.807\times10^{-5} \times (2.07\times10^{-4})^2 / 4.59\times10^{-10} = 0.4943 \to 0.494$ J/K per mole. Correct. Inputs: $\alpha = 2.07\times10^{-4}$ K⁻¹ and $\kappa_T = 4.59\times10^{-10}$ Pa⁻¹ at 20 °C are the standard values. Molar volume at 20 °C is $18.015/998.2 = 1.805\times10^{-5}$ m³ (the page's 1.807 corresponds to about 997 kg/m³, i.e. 25 °C); the difference is 0.1% and the result still rounds to 0.494. Optional: use 1.805. $C_P \approx 75$ J/(K mol) for water is right (75.3); $0.494/75 = 0.66\%$, so "under 1%" is correct.
- Example (c): $\Delta S = \frac32R\ln 2 + R\ln 2 = \frac52 \times 8.314 \times 0.6931 = 14.407 \to 14.41$ J/K. Correct (slide 9 formula).
- The example is original: MIT's slides and note give no numerical example.
- Quiz 1 (answer 0): correct (slide 4); explanation correct.
- Quiz 2 (answer 0, $Nk$): correct (slide 6); explanation correct.
- Quiz 3 (answer 0, $T$ and $V$): correct (notes p. 3); explanation's relation correct (slide 13).
- Quiz 4 (answer 0): correct (slide 14). Distractors 3 and 4 are true Maxwell relations from $E$ and $H$, so they are wrong only because the question asks which comes from $G$; the question says so, so this is fine.
- Flashcards: all three correct.
- calcs/8.044/maxwell-relations.yaml covers every number on the page plus identity checks for slides 6 and 9 and the van der Waals energy equation; `pytest -k maxwell` passes (30 passed, including other tests matching the name). The quoted inputs (N₂'s $a$, water's $\alpha$, $\kappa_T$, molar volume and $C_P \approx 75$) are not stored as `kind: fact`; optional.

## Coverage and order
- The page follows slides 1–15 in order: second law (1), S as a state function and the compressibilities (2), hydrostatic example and the energy equation (3–4), consequences a (5–6), b (7), c (8–10), Maxwell relation from $E$ (11), wire and magnet and $d(TS)$, $d(PV)$ (12), $F$ and $H$ (13), $G$ and the name "thermodynamic potentials" (14), magic square (15). The note (pp. 1–5) is covered in the same order inside "Maxwell relations".
- Left out: $\gamma - 1$ (slide 6; see #1); $V^{2/3}T$ (slide 10; #6); the note's remarks on p. 1 and its magnetic square example on p. 5 (#8); a picture of the square (#2).
- Added: the worked example (original), "never negative" (#7), the link to the microcanonical result.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the Lecture 10 slides or the note (grep and visual check); both are under the course's CC BY-NC-SA licence.
- No MIT figure is reused (the page has no figure). No OpenStax or LibreTexts material.
- No sentence copied verbatim. "New information that does not contain $S$" echoes slide 4's "New Information! Does not contain S!", a short phrase, fine. The magic-square paragraph is a close paraphrase of notes pp. 4–5 (#3).
- No em dashes in the page (searched for "—"). The frontmatter summary uses minus signs (−), which is fine.

## Notes
- Earlier-lecture claim: "the same as the microcanonical result" is correct. The Lecture 8 microcanonical ideal-gas entropy $S = kN\ln\{V[\frac43\pi e m(E/N)]^{3/2}\}$ with $E = \frac32NkT$ becomes $Nk\ln(VT^{3/2}) + \text{const}$, which matches slide 9's form. This link is the page's own (it is not on the Lecture 10 slides) and is fair.
- Later-lecture claim: see #10. "Physical meaning comes later" is fair (notes p. 2).
- No cosmology callout. That is acceptable for a pure thermodynamics page with no direct link to cosmology, though a short callout (for example, the adiabatic $VT^{3/2}$ law pointing towards adiabatic cooling of a gas in an expanding universe) could be considered. Not required.
- Uncertain: I did not check how the page renders. `content:check` (symbols, read-aloud of $\mathcal F$ if adopted) was not run.

## Resolution (2026-11-17, by the page author)

- Warning 1: added γ − 1 = TVα²/(κ_T C_V) as a formula citing slide 6.
- Warning 2: the magic square is now shown as a table, the trip round it is rewritten in the page's own order (either direction allowed), and slide 15's Gibbs example is worked through step by step.
- Info: "never negative" now gives its reason (κ_T > 0 for a stable system); the Lecture 11 leadsTo mentions the elastic rod before heat engines; nitrogen's a now carries "per mole squared"; water's molar volume is 1.805 × 10⁻⁵ m³ (20 °C), and the result is unchanged at 0.494 J/K per mole. The other info items need no change.
