---
page: content/year-3/8.044/heat-engines-carnot.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l11/ (read: the 17-page slide PDF mit8_044s13_l11.pdf, text via pdftotext; slides 1, 2, 4, 5, 6, 7, 9, 10, 11a, 11b, 12, 13, 14 and 15 also checked as images because the text extraction is garbled)
  - content/year-3/8.044/_course.json syllabus (read, to check the Lecture 12 leadsTo title only; the Lecture 12 slides were not read)
verdict: pass-with-notes
---

# Review: An elastic rod, heat engines and the Carnot cycle

Slide numbering (checked on the images): PDF page n = slide L11B n for n = 1–10; PDF 11 = L11B11a, PDF 12 = L11B11b, PDF 13 = L11B12, PDF 14 = L11B13, PDF 15 = L11B14, PDF 16 = L11B15, PDF 17 = OCW notice. (The mapping in the review request, "PDF 12 = 11a, PDF 13 = 11b", is off by one; the page cites the printed labels, so its citations are unaffected.)

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The Carnot cycle", efficiency derivation (text before the slide 12 formula) | Slide 12 (image checked) labels the cycle points as on slides 11a/11b: hot isotherm 1 → 1′, cold isotherm 2 → 2′. It writes $\lvert Q_H\rvert \le T_H\int_1^{1'}dS$, $-\lvert Q_C\rvert \le T_C\int_2^{2'}dS$ and uses $\int_2^{2'}dS = -\int_1^{1'}dS$ because the adiabats are at constant $S$. | $\lvert Q_H\rvert \le T_H\int_1^2 dS$ and $-\lvert Q_C\rvert \le T_C\int_2^1 dS$, with points 1 and 2 never defined, and the plot has no point labels. In the slides' labelling, 1 → 2 is not the hot isotherm (2 is the end of the hot-to-cold adiabat). | Either use the slides' labels (1, 1′, 2, 2′) and mark them on the plot, or say explicitly that "1" and "2" here are the entropies $S_1$ and $S_2$ at the ends of the hot isotherm. The result is unchanged; only the notation is ambiguous. |
| 2 | info | "The Carnot cycle", "(the adiabats change nothing, and $S$ returns to its start)" | Slide 12 uses $\int_2^{2'}dS = -\int_1^{1'}dS$, which assumes reversible (isentropic) adiabats. | Same reasoning, stated briefly. | Fine. Optionally "the adiabats are reversible, so $S$ is constant on them", since with $\delta Q \le T\,dS$ an irreversible adiabat could raise $S$. |
| 3 | info | "Example: an elastic rod", entropy | Slide 4 (image checked) writes $(\partial S/\partial T)_L = C_V/T = eT^2$, a slip for $C_L/T$. | Writes $C_L/T = AT^2$ (correct). | Correct as it stands. Under AGENTS.md rule 4 a short bracket "(the slide writes $C_V$)" could be added; optional for a one-letter slide typo. |
| 4 | info | Whole rod section | Slides use a script $\mathcal F$ for tension and $e$ for the heat-capacity constant. | Uses $F$ and $A$, and says so in a bracket. | Notation change is stated, correct and consistent throughout (formulas, quiz, flashcards, symbols.json meanings for F, A and e on this page). The previous page (maxwell-relations) uses $F$ for the Helmholtz free energy and the quiz explanation here calls $E - TS$ "the free energy" without a symbol, so there is no clash on this page. Fine. |
| 5 | info | "Rubber", "as you can feel by stretching one against your lip" | Not on the slides (slide 7 only: rapid expansion ⇒ ΔS ≈ 0, increase in L ⇒ increase in T). | The page's own remark. | Physically correct (the classic Gough–Joule demonstration: stretch a band quickly and touch it to the lip, which is sensitive to small temperature rises). No change needed. |
| 6 | info | "The Carnot cycle", "with equality for a reversible (quasi-static) cycle" | Not stated on slide 12. | Added. | Correct and helpful. No change. |
| 7 | info | "Heat engines", first sentence | Slide 8 bullets: "Takes a substance around a closed cycle", "Heat is put into the substance and taken out", "Work is taken out". | "takes a substance around a closed cycle; heat goes in and comes out, and work is taken out". | Close to the slide bullets, but these are short definitional phrases. Acceptable; optionally reword ("works in a closed cycle, absorbing and rejecting heat and delivering work"). |
| 8 | info | Plot | Slide 11b shows both a T–S rectangle and the P–V cycle with points 1, 1′, 2, 2′ and arrows. | P–V plot only, no points or arrows; the caption says the cycle runs clockwise; the T–S rectangle is described in words. | Optional: add points (with labels matching #1) so the direction and the derivation's limits can be read off the figure. |

## Formula citations (all checked against the slide images)
- Tension and $C_L = AT^3$: slide 1. Correct.
- Maxwell relation $-(\partial S/\partial L)_T = (\partial F/\partial T)_L = b(L - L_0)$: slide 2 (written $(-1)(\partial S/\partial L)_T$). Correct; the free-energy differential $-S\,dT + F\,dL$ matches slide 2's square (E, L, F, −T, G, −𝓕, H, S). The step $T(\partial S/\partial L)_T + F = a(L - L_0)$ and $dE = AT^3dT + a(L - L_0)dL$ are also on slide 2 (cited in text as slides 1–3: fine).
- $E(T, L)$: slide 3. Correct.
- $S(T, L)$: slide 4. Correct.
- Strange chain $L = Nl\tanh(lF/kT)$, $\alpha = -1/T$ for small extensions: slide 5 ("Homework problem 4-5, A Strange Chain"). Correct.
- $(\partial L/\partial T)_F = -b(L - L_0)/(a + bT)$: slide 6. Correct, including "+ for stability" and $b > 0$.
- Rapid stretch, $\Delta S \approx 0$, $T$ rises: slide 7. Correct.
- Efficiency definition: slide 8. Correct.
- $\Delta U = Q + W = 0$, $Q = -W$: slide 9 (in text). Correct; slide 9 writes $\Delta Q$, $\Delta W$.
- $W_{\text{out}} = -W = Q = |Q_H| - |Q_C|$, $\eta = 1 - |Q_C|/|Q_H|$: slide 10. Correct.
- Carnot: any substance, isothermal and adiabatic changes: slide 10; $T$–$S$ rectangle and $P$–$V$ drawing: slides 11a/11b. Correct.
- Carnot efficiency $|Q_C|/|Q_H| \ge T_C/T_H$, $\eta \le 1 - T_C/T_H$: slide 12. Correct (limits: see #1).
- $|Q_H| = \int_1^2\delta Q \le \int_1^2 T\,dS \le T_{\max}\int_1^2 dS$: slide 13. Correct, same limits as the slide.
- $|Q_C| \ge T_{\min}\int_1^2 dS$, $\eta \le 1 - T_{\min}/T_{\max}$: slide 14. Correct (the page skips the slide's middle step $|\int_2^1 T\,dS|$, which is fine).
- Pure thermodynamics: Carnot cycle defines temperature ($\eta \equiv 1 - T_C/T_H$) and entropy ($\oint\delta Q/T \le 0 \Rightarrow \delta Q/T$ exact): slide 15. Correct; the page's "for reversible changes" is a fair (and more careful) reading.

## Arithmetic and answer checks
- Plot against slide 11b: the hot isotherm $P = 1.5/V$ runs from $V = 1$ to $2^{3/2} = 2.8284$; $Nk\ln 2^{3/2} = \frac32Nk\ln 2$, matching "$S_{\text{HIGH}} - S_{\text{LOW}} = (3/2)Nk\ln 2$" and $T_H = 1.5T_C$. Adiabat constants: $(1.5/2.8284)\cdot 2.8284^{5/3} = 1.5\cdot 2.8284^{2/3} = 3.000$, so $3/V^{5/3}$ is right; $1.5\cdot 1^{5/3} = 1.5$ for the other. Ends: $2.8284\cdot 1.5^{3/2} = 5.1962$ and $1.5^{3/2} = 1.8371$. At $V = 5.1962$: isotherm $1/V = 0.19245$, adiabat $3/V^{5/3} = 0.19245$; at $V = 1.8371$: $0.5443$ and $0.5444$. The four curves join. Range 0–1.8 covers the top point $P = 1.5$. The monatomic choice ($\gamma = 5/3$) is the page's own, but it matches slide 11b drawn to scale: measured on the slide image, $V_{1'}/V_1 \approx 2.8$ and $V_2/V_{1'} \approx 1.85 \approx 1.5^{3/2}$. The caption honestly calls it "the page's own drawing".
- Example (a): $1 - 300/800 = 0.625$. Correct.
- Example (b): $1.0/0.40 = 2.5$ GW; $2.5 - 1.0 = 1.5$ GW. Correct (and 40% < 62.5%, consistent).
- Example (c): $2.5\times10^9/800 = 3.125\times10^6$ W/K; $1.5\times10^9/300 = 5.0\times10^6$ W/K; difference $1.875\times10^6$ W/K. Correct ("about" is unnecessary since it is exact, harmless).
- Example (d): $\frac32\cdot 8.314\cdot\ln 2 = 8.6443$ J/K → 8.644; $450\times 8.6443 = 3889.9$ → 3890 J; $150\times 8.6443 = 1296.6$ → 1297 J; $1296.6/3889.9 = 1/3 = 1 - 300/450$. Correct. Uses the figure's entropy step for one mole, consistent with the plot.
- The worked example is original (MIT's slides have no numerical example).
- Quiz 1 (answer 0): correct (slide 2); explanation correct.
- Quiz 2 (answer 0): correct (slides 4, 7); explanation correct ($b > 0$).
- Quiz 3 (answer 0, 50%): $1 - 300/600 = 0.5$. Correct (slide 14 bound, reached by Carnot).
- Quiz 4 (answer 0): correct (slide 9).
- Flashcards: all three correct.
- calcs/8.044/heat-engines-carnot.yaml has 17 entries covering every number on the page (plot breakpoints, quiz, example) plus identity checks for slides 2–5; `pytest -k heat-engines` passes (17 passed).

## Coverage and order
- The page follows slides 1–15 in order: rod set-up (1), Maxwell relation and $dE$ (2), $E$ (3), $S$ (4), strange chain (5), negative expansion coefficient (6), adiabatic stretch (7), heat engine and efficiency (8), closed cycle (9), most general case and Carnot as a special case (10), Carnot diagrams (11a, 11b), Carnot efficiency (12), arbitrary cycle (13–14), pure thermodynamics (15). Nothing on the slides is left out.
- Added: the plot (own, generated from formulas), the lip remark (#5), "equality for a reversible cycle" (#6), the worked example, the statement that no engine beats Carnot between the same extremes (follows from slide 14).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the Lecture 11 slides (text checked; the only notice is the standard OCW terms page, PDF 17). Under the course's CC BY-NC-SA licence.
- No MIT figure is reused: the P–V cycle is a generated `<Plot>` from the page's own formulas; the slide 5 chain picture and the slide 2 square are not reproduced.
- No OpenStax or LibreTexts material.
- No sentence copied verbatim; the slide 8 definition is closely echoed in short phrases (#7). "Most general case" and "very special case" are short phrases.
- No em dashes in the page (searched for "—"). The frontmatter uses minus signs (−) only.

## Notes
- Notation changes stated by the page ($F$ for the script tension, $A$ for $e$) are applied consistently, and `data/symbols.json` has page-scoped meanings for $F$ (tension, N), $A$ (J/K⁴), $e$ (the slides' name for $A$), $a$ (N/m), $b$ (N/(m K)) with correct units.
- Later-lecture claim: leadsTo 8.044 Lecture 12, "The canonical ensemble: a system in contact with a heat bath rather than isolated." The syllabus title is "Derivation of the canonical ensemble", and the description is the standard meaning of the canonical ensemble. Verified against the syllabus title only; the Lecture 12 slides were not read.
- No cosmology callout. Acceptable for this thermodynamics page; an optional link (for example, the radiation-like $C_L \propto T^3$ or adiabatic expansion of the early-universe plasma) is not required.
- Uncertain: I did not check how the page renders, nor run `content:check`.

## Resolution (2026-11-17, by the page author)

- Warning 1: the Carnot efficiency step now uses ΔS, the entropy gained along the hot isotherm, instead of unlabelled points 1 and 2. It says that the reversible adiabats leave S unchanged, and notes that the slides label the corners 1, 1′, 2, 2′.
- Info items: no change needed. The slide 4 C_V/T for C_L/T is handled silently, as the page uses C_L throughout; the lip remark stays as the page's own illustration.
