---
page: content/year-3/8.044/thermodynamic-variables.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_l5/ (read: PDF of 29 slides plus OCW page, text via pdftotext, slides 14a and 14d also viewed as images)
  - https://ocw.mit.edu/courses/8-044-statistical-physics-i-spring-2013/resources/mit8_044s13_notes-def/ (read: 3 printed pages)
verdict: pass-with-notes
---

# Review: Thermodynamic variables, temperature and work

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The zeroth law and temperature", last paragraph: "(slides 13–14)" | The PDF has no plain slide 14. The slide after L5B13 ("we could … Define t ≡ c_g PV/N … simple paramagnet t = c_m (M/H)^-1 … possible alternative t' ≡ c_g'(PV/N)^α") is followed by L5B14b, L5B14c, L5B14d, so it is almost certainly L5B14a. Its footer label is in a font pdftotext cannot decode, so this is a strong inference, not a direct reading. | Cites "slides 13–14" for defining t ∝ PV/N and for the paramagnet result | Cite "slides 13–14a". The "slides 14a–14d" citation for the choice of scale is then correct: 14b PV = Nkt, 14c t' = (PV/Nk)², 14d t'' = √(PV/Nk). |
| 2 | warning | "The mathematics of thermodynamics", chain-rule sentence "(slides 21a–22)" | Slide 21a: for W = W(x, y, z), with only two of x, y, z independent, along a path of constant W, (∂x/∂y)_W (∂y/∂z)_W (∂z/∂x)_W = +1. Slide 22: "then it follows that" (∂x/∂y)_w = (∂x/∂z)_w / (∂y/∂z)_w. | Gives only the chain rule, and calls w "a fourth quantity" without saying it is a function of x, y, z | Add the slide 21a identity (product = +1 at constant w, in contrast to −1 on slide 21) and say that w = w(x, y, z). Using lower-case w to avoid a clash with work is sensible; one bracket noting the change from MIT's W would help. |
| 3 | warning | Flashcard "Work done on a system" | Slide 17 writes E dP for the dielectric, and the page body renames it E dP_e because P is pressure | Flashcard writes "$E\\,dP$ (dielectric)" and leaves out the chemical cell ε dZ | Use `$E\\,dP_e$` to match the page, and optionally add ε dZ (cell). |
| 4 | warning | Plot of the three paths | Slide 19 draws paths a, b and c as complete paths: the isochoric legs at V₂ (path a) and V₁ (path b) are part of each path | Draws only the isotherm and the two horizontal segments, P = P₁ and P = 2P₁ on [0.5, 1]. The vertical (constant-volume) legs, which do no work, are not drawn, although the caption speaks of "three paths". | Add the two vertical legs (for example as parametric curves at V = 0.5 and V = 1 between P = 1 and 2), or say in the caption that the constant-volume steps do no work and are not drawn. The areas in the caption are correct. |
| 5 | info | "The zeroth law and temperature": "sometimes jokingly called 'law 0.5'" | Slide 6 is headed "Law 0.5 ?", Greytak's own label with a question mark | Presents it as a name that is used generally | Say "which Greytak's slide labels 'Law 0.5?'". |
| 6 | info | Zeroth-law paragraph: "equilibrium means equal values of PV (per molecule) (slides 8–11)" | Slides 8–11 write the dilute-gas example as P_C V_C − P_A V_A = 0 and P_A V_A = P_B V_B, with no "per molecule". PV/N appears from slide 13 on. | Adds "(per molecule)" | Physically this is the better general statement. Either drop the bracket or say that it generalises the slide's example. |
| 7 | info | "Any monotonic function of PV/N would serve as well; choosing PV = Nkt is natural, and the thermodynamic temperature comes later (slides 14a–14d)" | The slides show t, t' = (PV/Nk)² and t'' = √(PV/Nk) (and (PV/N)^α on 14a) and conclude "Many possible choices for t". They do not call one choice "natural" or mention the thermodynamic temperature. | Adds "natural" and "the thermodynamic temperature comes later" | These are fair remarks about the course, but not on these slides. Present them as the page's own comment, or drop "natural". |
| 8 | info | Work section | Slide 17 says the E and H in E dP and H dM are the fields "as set up by external sources" in the absence of the matter | Says only that the forms leave out the energy the field would store without the matter | Optionally add that E and H are the applied (external) fields. |
| 9 | info | Worked example (a) | (page's own) | "A gas … compressed … at constant temperature" | Say "a dilute (ideal) gas", since PV = constant is assumed. |

The following were checked and agree with the source:
- Equations of state: PV = NkT, V = V₀(1 + αT − κ_T P), M = cH/(T − T₀) for T > T₀. Notes p. 2, also on slide 4. The extracted text loses the Greek letters, so α and κ_T are the standard reading.
- Fluid work dW = F dx = (PA)(−dV/A) = −P dV: slide 15.
- Wire F dL ("P pushes, F pulls") and film S dA: slide 16.
- Cell, dielectric and magnet: slide 17, with E_EMF dZ_CHARGE renamed ε dZ and P renamed P_e, both explained on the page.
- "All differentials are extensive / only −PdV has a negative sign / good only for quasistatic processes / W is not a state function": slide 18.
- Paths (a), (b) and (c), and the isothermal integral: slide 20. Each step matches.
- The reciprocal rule and the triple product rule (= −1): slide 21.
- dS = A dx + B dy: slide 22.
- The test for an exact differential ("necessary … but it is also sufficient") and the path-independent integral: slide 23.
- The integration procedure: slides 24–25.
- The zeroth-law argument (slides 7–11) is described correctly:
  - the properties of h listed on slide 7;
  - F₁ = 0 solved for X_C = f₁(Y_C, X_A, Y_A) (slide 8);
  - X_C = f₂(Y_C, X_B, Y_B) (slide 9);
  - f₁ = f₂ combined with the zeroth-law condition F₃(X_A, Y_A, X_B, Y_B) = 0, so Y_C drops out (slide 10);
  - h(X_A, Y_A) = h(X_B, Y_B) (slide 11).
- The definitions match the notes:
  - microscopic and macroscopic variables, extensive and intensive (p. 1);
  - adiabatic walls, equilibrium, steady state and complete specification with the counts 2, 3, 2, 3 (p. 2);
  - "in equilibrium with each other", thermodynamics and statistical mechanics (p. 3).
- The page's statement that the last row (U, T) is new matches the notes' "Those below the line are new".

## Arithmetic and answer checks
- Example (a):
  - P₁V₁ = 1.013×10⁵ Pa × 1.00×10⁻³ m³ = 101.3 J. Correct.
  - Isotherm: 101.3 ln 2 = 70.22 J, given as 70.2 J. Correct.
  - Lower pressure first: P₁(V₁ − V₂) = 101.3 × 0.5 = 50.65 J, given as 50.7 J. Correct (with 1.01325×10⁵ Pa it is 50.66 J).
  - Higher pressure first: P₂ = 2P₁, so 2P₁ × 0.5 L = 101.3 J. Correct.
  - The ordering 50.7 < 70.2 < 101.3 J is consistent with the plot.
- Example (b): (∂P/∂V)_T (∂V/∂T)_P (∂T/∂P)_V = (−NkT/V²)(Nk/P)(V/Nk) = −NkT/(PV) = −1. Correct, and the variables are in the same cyclic order as slide 21.
- Example (c):
  - y dx − x dy: ∂A/∂y = 1 but ∂B/∂x = −1, so it is not exact.
  - y dx + x dy: both derivatives are 1, so it is exact, with S = xy + const. Correct.
- Plot, with P/P₁ = 1/(V/V₁) on [0.5, 1]:
  - the area under the isotherm is ln 2 ≈ 0.693;
  - under P = P₁ it is 0.5;
  - under P = 2P₁ it is 1.0.
  - Caption values P₁V₁/2, P₁V₁ ln 2 and P₁V₁ are correct. At V = V₁/2 the isotherm reaches 2P₁, so the dashed line "at P₂" is at the right height.
- Quiz:
  - Q1 "Pressure" (intensive): correct.
  - Q2 empirical temperature: correct.
  - Q3: W = NkT ln(V₁/V₂) = P₁V₁ ln 2. Correct, and the explanation is right.
  - Q4: ∂A/∂y = ∂B/∂x. Correct, and the explanation is right.
- Flashcards: the zeroth law and the triple product and reciprocal rules are correct. For the work card, see finding 3.
- calcs/8.044/thermodynamic-variables.yaml covers every number on the page. Minor point: ex-P1V1 uses 1.013e5 while ex-low and ex-high use 1.01325e5. This is harmless, but the page states 1.013×10⁵ Pa.

## Coverage and order
- The page follows MIT's order:
  - notes pp. 1–3 and slides 1–4 (vocabulary);
  - slides 5–14d (zeroth law, empirical temperature);
  - slides 15–20 (work, paths);
  - slides 21–25 (mathematics).
- Omitted: the slide 21a identity (finding 2). Not drawn: the isotherm figures on slides 12–13 and 14b–14d, which the page explains in words.
- Added: the page's own worked example and plot, clearly marked as the page's own.
- There is no `Callout kind="cosmology"`. This is acceptable: the lecture has no direct cosmology link, and `leadsTo` points to 8.044 Lecture 6 ("The first law and paths"), whose syllabus entry exists. The reason given (first law, heat and work depend on the path) fits that title. I did not read Lecture 6 itself.

## Licensing
- Neither PDF has an "All rights reserved" or "Courtesy of" notice (grep on the extracted text found nothing). Both fall under OCW's CC BY-NC-SA.
- No slide figure is reproduced. The plot is generated from PV = constant and says it is the page's own illustration.
- No passages are copied verbatim:
  - the definitions are paraphrased;
  - the zeroth-law statement is the standard wording (and close to slide 5);
  - "many macroscopic states of B can be in equilibrium with a given state of A" is nearly verbatim from slide 6, but it is one short sentence. Acceptable, though it could be reworded.
- The worked example (1 atm, 1 L, halved isothermally; ideal-gas triple product; y dx ± x dy) is not taken from MIT's slides or notes. These are standard textbook exercises, written in the page's own way.
- No OpenStax or LibreTexts material.

## Notes
- The labels on slides 14a and 15 are in an undecodable font. I identified them from their position in the PDF (pages 14 and 18 of 30), and the visible "a" on page 14 supports 14a. Finding 1 rests on this.
- I did not run `content:check` or `calc:test`.

## Resolution (2026-11-17, by the page author)

1. The citation now reads "slides 13–14a".
2. Added the slide 21a identity (∂x/∂y)_w (∂y/∂z)_w (∂z/∂x)_w = +1, with w(x, y, z) the slides' W; the chain rule now cites slide 22.
3. The work flashcard now includes ε dZ (cell) and E dP_e (dielectric).
4. The plot caption now says only the compression steps are drawn, the constant-volume steps doing no work.
5. "Law 0.5" is now attributed to the slide's own heading.
6. "PV (per molecule)" changed to "PV" for slides 8–11.
7. The temperature paragraph now follows slides 14a–14d: t, its square and its square root, with many possible choices.
8. Added that H and E in the work formulas are the externally applied fields.
9. Example (a) now says the gas is dilute (ideal).

Status set to `reviewed`.
