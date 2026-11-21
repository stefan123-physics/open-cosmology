---
page: content/year-4/8.286/8-286-problem-set-7.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_ps7/ (read: pdftotext of the PS7 PDF, 4 printed pages)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/20c456df533b6f63151a28bfe9df60eb_6b83DypBeYg.pdf (Lecture 16 transcript, read)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (Lecture 17 transcript, read)
verdict: pass-with-notes
---

# Review: Problem Set 7: entropy, cold neutrinos and the redshifted black-body spectrum

Reviewed in a worktree (`.claude/worktrees/ps7`). Blind solve done first from the stripped statements and MIT's PDF; answers written to the review file before the full page and calcs were opened.

## Blind solve

### My answers (written before opening the full page)
- 1(a): g(photons + e±) = 2 + (7/8)(1 species)(2 particle/antiparticle)(2 spins) = 2 + 3.5 = 5.5.
- 1(b): photon+pair gas: g(aT)^3 conserved, 5.5 (aT)^3 = 2 (aT_γ)^3 => aT_γ grows by (11/4)^{1/3} = 1.4010. Neutrinos decoupled: own entropy conserved, g_ν unchanged => aT_ν constant.
- 1(c): T_ν = (4/11)^{1/3} × 2.725 K = 1.945 K (with MIT's 2.7 K: 1.927 K).
- 2(a): g_μ = (7/8)(1)(2)(2) = 3.5.
- 2(b): photons 2; e± 3.5; neutrinos ν_e, ν_μ, ν_τ with antineutrinos, one spin state each: (7/8)(3)(2)(1) = 5.25. Total of the others 10.75 (with muons 14.25). (Pions, 135–140 MeV, are not counted at kT just above 106 MeV in Guth's treatment; their presence would be partly Boltzmann-suppressed: uncertain how the page treats this.)
- 2(c): aT grows by (14.25/10.75)^{1/3} = (57/43)^{1/3} = 1.0985 (to three decimals 1.099).
- 3(a): ν2 = ν1 a(t1)/a(t2); dν2 = dν1 a(t1)/a(t2).
- 3(b): photons are neither created nor absorbed after t1 (free streaming); every photon's frequency scales by the same factor, so the band maps onto the band; photons cross the comoving boundary, but by homogeneity and isotropy as many enter as leave on average.
- 3(c): dN2 = dN1 with dν2/ν2 = dν1/ν1 gives ũ(ν2,t2) a2³ = ũ(ν1,t1) a1³. Insert the Planck form at T1 with ν1 = ν2 a2/a1: (a1/a2)³ ν1³ = ν2³, hν1/kT1 = hν2/(k T1 a1/a2), so ũ(ν2,t2) = u_ν(ν2, T1 a1/a2).

### Comparison (one line per answer id)
- `p1-a` (5.5): page 5.5, tolerance 0.01 absolute. Agrees.
- 1(b) (show, no box): page derives (11/2)(aT)³ = 2(aT_γ)³ and constant aT_ν from separate neutrino entropy. Agrees with my route.
- `p1-c` (1.95 K): page 1.95 K for T_γ = 2.725 K; mine 1.9450 K. Agrees; 1.945 is 0.26% from 1.95, inside 0.5%.
- `p2-a` (3.5): agrees.
- `p2-b-which` (choice 2: photons, three neutrinos with antineutrinos, e±): agrees.
- `p2-b-photons` (2), `p2-b-neutrinos` (5.25), `p2-b-electrons` (3.5): agree.
- `p2-c` (1.099, tolerance 0.5%): mine (57/43)^{1/3} = 1.09851. Agrees. Rejects (14.25/10.75) without cube root (1.326), (9/5.5)^{1/3} = 1.178 (neutrinos left out), g_ν with two spin states (1.068) and a fourth root (1.073): all outside 1.0935 to 1.1045.
- `p3-a-nu` (nu1*a1/a2) and `p3-a-dnu` (dnu1*a1/a2): agree.
- 3(b), 3(c) (show, no box): same argument as mine (photon number conservation, band maps onto band, homogeneity for boundary crossings; dν/ν invariant; ν³ prefactor absorbs (a1/a2)³; ratio moves from ν to T in the exponent).

No disagreement between my answers and the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Problem 1, parts (a) and (c) | Problem 1 is a single "show that" question (aT_γ grows by (11/4)^{1/3}, aT_ν constant); the ratio (4/11)^{1/3} and "slightly colder than the 2.7 K photons" are stated, not asked; no g count and no number asked | Three parts: (a) g of photons + pairs (box), (b) the MIT question, (c) T_ν today to three figures (box) | Say so once, e.g. at the top of Problem 1: "MIT's Problem 1 is part (b); parts (a) and (c) are steps of our own." The intro sentence on splitting points does not cover added parts. |
| 2 | warning | Problem 3(c) solution, second "Check the result" paragraph | (no such remark) | "The argument needs the exact form of the black-body spectrum: a factor ν³ times a function of ν/T only. Another shape would not turn into the same shape with a new temperature." | Overstated: any spectrum of the form ν³ f(ν/T) keeps its form (Wien's ν³e^{−hν/kT}, or a Bose–Einstein spectrum with μ/T fixed). Reword: "The argument uses only that the spectrum is ν³ times a function of ν/T, which the black-body spectrum is. A spectrum without this property would not keep its shape." |
| 3 | info | Problem 1(c) statement and `p1-c` | "the 2.7 K background of photons" (p. 1) | T_γ = 2.725 K (calcs/values.yaml, "Guth 2013: the value used for calculations in 8.286"), answer 1.95 K; 0.5% rejects 1.927 K (MIT's 2.7 K) | The statement gives 2.725 K explicitly, so it is clear; keep the box as is. Optional: add one sentence to the solution, "With the rounded 2.7 K of MIT's set you would get 1.93 K." Do not widen the tolerance to 1.2%: it would then also accept rounding slips around 1.93 to 1.97 with no gain. |
| 4 | info | Problem 3 statement | ρ_ν, ρ̃; "350,000 years after the big bang"; T ∝ 1/a "in a radiation-dominated universe" | u_ν, ũ (stated in brackets); "a few hundred thousand years"; "as the lessons found from the entropy" | Fine. The notation change is declared. |
| 5 | info | Problem 2 statement | "There is no known particle with a mass between that of an electron and that of a muon." | "No known particle has a mass between the masses of the electron and the muon." | Close to MIT's sentence, but a single factual sentence of standard content; acceptable. |

## Arithmetic and answer checks
- `npm run content:check` in the worktree: 0 errors; the only warning about this page is the missing review file.
- `pytest tests/calc -k problem-set-7`: 25 passed.
- Points: 4+8+3 = 15, 5+10+10 = 25, 6+6+13 = 25; total 65 = MIT (p. 4).
- (11/4)^{1/3} = 1.40102 ("40%" ok); (4/11)^{1/3} = 0.71377; × 2.725 = 1.9450 K; × 2.7 = 1.9272 K.
- 106/0.511 = 207 ("about 200 times") ok. 3.5/5.5 = 7/11 ok; 3.5/14.25 = 14/57 = 0.246 ("about a quarter") ok.
- Decimal g boxes: `tolerance="0.01"` is absolute in `lib/answers.ts` (`numberTolerance`), so 5.5, 2, 5.25, 3.5 accept only the exact decimals (and "5,25"). That is right for exact counts. A typed fraction such as `11/2` is refused as unreadable by `parseNumber` (an "invalid" verdict, not a counted try), and the statements and "How to answer" say to type decimals, so this is clear. Rounding 5.25 to 5.3 is rejected; acceptable because the statement asks for the decimal value of an exact count.
- Formula boxes: `vars` ranges (nu1 1 to 5, dnu1 0.01 to 0.1, a1 0.2 to 1, a2 1.5 to 4) are finite and physical (a2 > a1 always). Each listed mistake differs from the answer, and each hint is true of its wrong formula (nu1*a2/a1 is higher; nu1 has no redshift; the cube belongs to volumes; dnu1 unchanged; dnu1*a2/a1 is wider).
- Every solution ends with a check (comparison with the lesson's 10¾, 7/8 independent of mass, limits a2 > a1, photon number ∝ T³a³ constant, energy ∝ 1/a⁴). The calcs entry `p3-energy-density-dilution` checks the last one numerically.
- No hint gives a final number away. Hint 3 of 3(c) spells out the method closely, but 3(c) is a "show" part with no box, so this is fine.

## Citations
- MIT PS7 `at=` pages checked against the printed pages: u = g π²/30 … on p. 2 (Problem 2(a)); (P3.1) p. 2; (P3.2), (P3.3), (P3.4), (P3.5) p. 3; (P3.6), (P3.7) p. 4; (4/11)^{1/3} and the entropy argument p. 1; total 65 p. 4. All correct.
- Lecture 16 transcript p. 25 (board), entropy density s = g (2π²/45) k⁴T³/(ħc)³: verified. The formula is on printed p. 25 ("2 pi squared over 45 times k to the fourth T cubed over h bar c cubed"), and it is in the part of the lecture after Guth says (printed p. 13, "let us continue on the blackboard") that he moved from slides to the board. Board is right.
- Lecture 17 transcript pp. 8–10 (board), the g counting: verified. 7/8 for fermions on printed p. 8; the "string of factors" for neutrinos pp. 8–9 (21/4 on p. 9); the e± pairs, one species, particle and antiparticle, two spin states on p. 10. The calcs' pp. 10–11 for 10¾: verified (2 + 21/4 + 7/2 = 10 and 3/4 on p. 11). Whether Guth wrote these on the board rather than a slide can only be inferred from the transcript ("we'll write it out as a string of factors"); no slide is mentioned there. Board is very likely right.
- Calcs `nucleon-rest-energy`, `origin: later-data` with a PDG `ref`: this is a valid label under the harness (`origin` allows only mit, page-own, later-data, slip, and `source: {ref}` only goes with later-data; `higgs-field.yaml` does the same for a PDG value). But a better source exists: Guth says "the proton weighs 938 MeV" in the Lecture 16 transcript, printed p. 29 (reading1). Suggest (info) `origin: mit`, `source: {cite: reading1, at: 'p. 29 (proton 938 MeV)'}`, keeping the PDG neutron value in the `where` text if wanted. Either label passes; this one is not wrong, only weaker.

## Coverage and order
- All three MIT problems and all of MIT's parts are present, in MIT's order: Problem 1 (as part (b), see difference 1), Problem 2(a)–(c), Problem 3(a)–(c). Same physics throughout.
- The "What you need from the lessons" section adds the fermion rule and the entropy-density formula, both cited to the transcripts; MIT points to Lecture Notes 6, which are not on OCW. Fine.

## Licensing
- No figures. No "All rights reserved" or "Courtesy of" material in the PS7 PDF (grep of the text). No OpenStax or LibreTexts. Statements are rewritten in the page's own words (one close sentence, difference 5). Solutions are the page's own; MIT publishes none.

## Writer's remarks checked
- 2(b), pions: true. π⁰ (135 MeV) and π± (139.6 MeV) have m c²/kT ≈ 1.3 at kT ≈ 106 MeV, so they are far from Boltzmann-suppressed and would add to g in a real calculation. "Like MIT's set, this problem leaves them out" is a fair description: MIT's statement does not mention them. Correctly marked as a remark of the page's own.
- 3(c), "needs the exact form": overstated, see difference 2. The second sentence (result independent of a(t), so it holds in any era) is correct and is a fair generalisation of MIT's "radiation-dominated" wording.
- 1(b) check, T_γ does not jump up but cools more slowly than 1/a: correct (T falls monotonically as long as g_s(T) changes smoothly).
- 2(c) check, the neutrinos share the muons' heat so no temperature difference arises: correct under the problem's assumption (neutrinos decouple near 1 MeV, far below 106 MeV).
- 1(c) "Nobody has detected this neutrino background directly so far": true as of 2026 and consistent with the lesson `neutrinos-and-particle-counting`.

## Notes
- Links to six lessons all resolve; claims about them checked: `neutrinos-and-particle-counting` gives 10¾ and 1.95 K; `mass-energy-and-radiation` gives u_γ ∝ 1/a⁴; `cmb-spectrum` uses u_ν and says Guth wrote ρ_ν; `black-body-radiation` gives the same s with the same g.
- No em dashes; no `## Summary`; no quiz or flashcards in frontmatter (none needed for a set).
- Pages counted as uncertain: only the slide-versus-board point for Lecture 17 pp. 8–10 (inferred from the transcript wording, not from slides).

COUNTS: errors=0 warnings=2 info=3

## Resolution (2026-11-21, by the page author)

- Difference 1 (warning): the statement of Problem 1 now says that MIT's Problem 1 is part (b) and that parts (a) and (c) are steps of our own.
- Difference 2 (warning): the remark in the check of Problem 3(c) now reads "The argument uses only that the spectrum is ν³ times a function of ν/T, which the black-body spectrum is. A spectrum without this property would not keep its shape."
- Difference 3 (info): the solution of Problem 1(c) adds "With MIT's rounded 2.7 K you would get 1.93 K." (new calcs entry `p1-neutrino-temperature-rounded`). The box and its tolerance are unchanged.
- Difference 5 (info): the sentence about no particle between the electron and the muon was reworded.
- Citations (info): the calcs entry `nucleon-rest-energy` is now `origin: mit` with `source: {cite: reading1, at: 'p. 29'}` (Lecture 16 transcript; reading1 is that transcript).
- Difference 4 (info): no change needed.
- `status: reviewed` set. `content:check`: 0 errors; `calc:test -k 8-286-problem-set-7`: all passed; `test:answers`: all passed.
