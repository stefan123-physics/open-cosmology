---
page: content/year-1/8.01/pulleys-and-constraints.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-4-drag-forces-constraints-and-continuous-systems/12-1-pulley-problems-part-i-set-up-the-equations/ (read; segment pages 12.1-12.5 checked for titles and transcript links, which match the page's readings 2-6)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read, from a pdftotext conversion; Example 8.9, printed pp. 8-39 to 8-43, read in full)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/38a82f06f358df8ecce84f9f4be2174c_FNOfxJxceIM.pdf (12.1 transcript, read, 6 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/cd1a26f576e5ba5810c0484f3874630a_gWLC3r6EHl0.pdf (12.2 transcript, read, 3 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/8c153f6fd50b8e58e53f71de1e0c7726_GuiIyYbI0HM.pdf (12.3 transcript, read, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/2da40e804b66611cac1c8a1750089b5f_lw9W32ezQhM.pdf (12.4 transcript, read, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/42e7bfd333f22149712e0748c67e58ff_3V5y9uq5au0.pdf (12.5 transcript, read, 5 pages; the video and its board figure were not available)
verdict: pass-with-notes
---

# Review: Pulleys and constraint conditions

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The system and its assumptions", "the lecture states its assumptions (pp. 2–3): both pulleys are massless and frictionless, and the rope is massless and does not stretch" | 12.1 transcript p. 2 states only: pulley masses approximately zero, the rope "not slipping" / "just slipping" / "sliding" on the pulleys, and the rope massless. It never says "frictionless" or "does not stretch". Those two words are in the notes (Example 8.9, p. 8-39: "massless and frictionless … massless and inextensible"). | Attributes "frictionless" and "does not stretch" to the lecture. | Write e.g. "the lecture assumes massless pulleys and a massless rope that slides over them (pp. 2–3); the notes add that the pulleys are frictionless and the rope inextensible (Example 8.9, p. 8-39)". |
| 2 | warning | Formula "Acceleration of block 2 and the tension", `cite="reading5" at="p. 2"` | 12.4 p. 2 derives only a₁ and says "I'll leave that as an exercise" for a₂ and T. | The text says it is an exercise, but the Formula's citation reads as if MIT shows these results. The 12.5 formula for F handles the same situation with "(solved on this page)". | Change `at` to "p. 2 (left as an exercise; solved on this page)". The results themselves are correct (see below). |
| 3 | info | "A horizontal system", description of the geometry | 12.5 transcript (pp. 1–3): a force pulls "this block"; "this block here is fixed to the ground" at distance d from the origin; fixed lengths s_A and s_B; length = (d − s_A − x₂) + 2πR + (x₁ − s_B − s_A − x₂) + (x₁ − s_B − x₂); block 1 feels F and T_B "to the pulley B"; block 2 feels T_A (string "attached to pulley A") and T; pulley A feels T, T and T_A; pulley B feels T_B and 2T. | "Block 1 is tied by a short string to pulley B, and block 2 to pulley A; a rope with one end fixed winds round both pulleys and is tied to block 2"; blocks slide "horizontally, with no friction". | Supported, but by inference. I reconstructed the layout from the three length terms (fixed anchor at d → round pulley A at x₂ + s_A → round pulley B at x₁ − s_B → block 2 at x₂) and checked that it reproduces all four force equations with the transcript's signs; it does. The transcript never says "horizontal", "no friction" or "short"; these follow from the x/î coordinates and the absence of friction, gravity and normal forces in the free-body diagrams. Optionally say "(from the length terms in the transcript; the video's figure is not reproduced)" and drop "short". |
| 4 | info | "The system and its assumptions", bracketed note on "slipping" | 12.1 p. 2: "our rope is not slipping. So the rope is actually is just slipping on the pulleys. So what that means is it's just the rope is sliding as the objects move … this rope is also slipping." | "[The transcript wavers between "not slipping" and "slipping" here; what matters is that a massless, frictionless pulley does not change the tension.]" | Accurate description of the transcript, and the physics is right (a massless pulley with no friction at its axle or at the rope, whether the rope rolls or slides, has equal tension on both sides). Could add that the lecturer's own clarification ("the rope is sliding") is what the page follows. |
| 5 | info | Flashcard 1, "the sum of accelerations is zero" | 12.2 p. 3: 2a_B + a₁ = 0; notes Eq. (8.6.51): a₂ + a₃ + 2a₁ = 0. | "the sum of accelerations is zero" | It is a weighted sum. Write "a sum of accelerations, each counted as many times as its coordinate appears in the length, is zero". |
| 6 | info | Formula "Constraint for three blocks", `at="Eqs. (8.6.46)–(8.6.51), pp. 8-39–8-40"` | (8.6.46) is on p. 8-39, (8.6.47)–(8.6.51) on p. 8-40. | Same. | Correct; no change. All other notes citations (8.6.55–56 on p. 8-41; 8.6.62–8.6.69 on p. 8-42; 8.6.70–71 and the check on p. 8-43) also match the printed footers. |

All transcript page citations were checked against the PDF pages: 12.1 system p. 1, assumptions pp. 2–3, unit vectors p. 3, block equations p. 4, pulley A p. 4 and pulley B p. 5, combined system p. 5; 12.2 coordinates pp. 1–2, lengths p. 2, second derivatives and a₁ = −2a₂ p. 3; 12.3 virtual displacement p. 1, length-based version pp. 1–2; 12.4 three equations p. 1, a₁ p. 2; 12.5 length and constraint pp. 2–3, the four equations p. 4, "solve for F or either acceleration" pp. 4–5. All correct. Every formula matches its source in physics and notation (12.4's a₁ = (2m₁g − m₂g)/(2m₁ + m₂/2) is shown in MIT's form and simplified correctly).

## Arithmetic and answer checks
- `pytest tests/calc -k pulleys`: 25 passed.
- 12.4 page-own results: a₂ = −a₁/2 = (m₂ − 2m₁)g/(4m₁ + m₂) and T = m₁(g − a₁) = m₁g[(4m₁ + m₂) − 2(2m₁ − m₂)]/(4m₁ + m₂) = 3m₁m₂g/(4m₁ + m₂). Correct; sign convention (down positive for both blocks) consistent with 12.1. Balance at m₂ = 2m₁ gives T = 6m₁²g/6m₁ = m₁g. Limits (m₂ → 0: a₁ → g; m₂ → ∞: a₂ → g, a₁ → −2g) correct.
- Plot: a₁/g = 2(2 − r)/(4 + r), a₂/g = (r − 2)/(4 + r); a₁/g(0) = 1, a₁/g(10) = −1.14, inside the range [−2.2, 1.2]. Caption correct.
- Worked example 1 (m₁ = 2.0, m₂ = 6.0): a₁ = −4(9.81)/14 = −2.803 m/s²; a₂ = 1.401 m/s²; T = 36(9.81)/14 = 25.23 N; m₁g − T = 19.62 − 25.23 = −5.61 N = m₁a₁ (−5.606). All correct.
- Three-block example (notes): denominator m₁m₃ + m₁m₂ + 4m₂m₃ = 8 + 4 + 8 = 20 kg²; T_B = 4(9.81)(8)/20 = 15.70 N; T_A = 31.39 N; a₁ = 9.81 − 7.85 = 1.96; a₂ = 9.81 − 15.70 = −5.89; a₃ = 9.81 − 7.85 = 1.96 m/s²; 2a₁ + a₂ + a₃ = 0.00. All correct.
- 12.5 page-own result: T_A = T_B = 2T, 3T = m₂a₂, a₂ = 2a₁/3 → T = 2m₂a₁/9, T_B = 4m₂a₁/9, F = m₁a₁ + T_B = (m₁ + 4m₂/9)a₁. Correct, with î positive for both blocks as in the transcript (a₁ = 3a₂/2, so both accelerate the same way, which matches the reconstructed layout).
- Power check: F v₁ = m₁a₁v₁ + m₂(2a₁/3)(2v₁/3) = (m₁ + 4m₂/9)a₁v₁. Correct; the argument is valid (massless rope and pulleys, fixed anchor does no work, no friction).
- Worked example 3: F = (1.0 + 1.333)(0.90) = 2.10 N; a₂ = 0.60 m/s²; T = 0.60 N; T_A = T_B = 1.2 N; F − T_B = 0.90 N = m₁a₁. Also block 2: T + T_A = 1.8 N = m₂a₂. Correct.
- Quiz 1: movable pulley drops 10 cm → free end rises 20 cm. Answer index 2 correct.
- Quiz 2: T₃ = 2T. Index 2 correct.
- Quiz 3: m₂ = 6.0 > 2m₁ = 4.0 → a₁ < 0 → up. Index 1 correct.
- Quiz 4: index 1 correct.
- Calcs coverage (info): no entry for the general a₂ formula, the balance check T = m₁g at m₂ = 2m₁, the 12.5 length sum 2x₁ − 3x₂ (identity from the four terms), or quiz 3's sign. Optional additions.

## Coverage and order
- Segments 12.1, 12.2, 12.3, 12.4 and 12.5 are all covered, in MIT's order. Nothing omitted.
- Added: notes Example 8.9 (three blocks), placed between 12.4 and 12.5 and announced in the introduction. Appropriate (Lesson 12's reading).
- Overlap with Lesson 7 (`tension-and-springs`): Lesson 7 solves the single fixed pulley (a₁ = a₂) and notes the support carries 2T. This page refers back to it in one sentence and does not repeat the solution. The "massless pulley gives 2T" point recurs but is now applied to a moving pulley, which is new. No problematic repetition. Minor: Lesson 7 uses g = 9.8, this page 9.81 (consistent with Lesson 11).
- leadsTo 8.01 Lecture 13 (rope with mass; 13.1 "Rope hanging between trees") is correct. No cosmology callout; acceptable since no direct cosmology link exists.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in Example 8.9 or in the five segment pages/transcripts (grep of the converted text and HTML).
- No figures reused; the page draws none (consider an original generated diagram of the 12.1 system later, but none is required).
- No verbatim copying found; prose is rewritten. Worked examples use the page's own numbers (MIT's segments are purely symbolic; Example 8.9 is symbolic). The three-block example uses the notes' system with own masses, which is clearly labelled.
- No OpenStax or LibreTexts material.

## Notes
- Symbols scoped to this page in data/symbols.json (T, y, d, g, F, R, a_B, m_1, m_2, m_3, m_i, m_P, a_1, a_2, a_3, a_i, a_P, T_2, T_3, T_A, T_B, x_1, x_2, y_1, y_2, y_3, y_B, y_P, s_1, l_1, l_2, l_A, l_B, v_1, v_2) all fit their use on the page, including the two-system meanings of T_A and T_B and the "along î in the horizontal system" clause for a_1. Units correct. The T meaning says "massless frictionless pulleys"; if finding 1 is fixed, this still fits (the notes state it).
- `npm run content:check`: no errors for this page (only "no review file yet", which this file resolves); the 2 current errors belong to `18.01/linear-and-quadratic-approximations`.
- No em dashes in the page.

## Resolution (2026-11-15, by the page author)

- **Assumptions (warning 1):** the page now credits only "massless" and "slides over the pulleys" to the 12.1 transcript, and says the notes add "frictionless" and "does not stretch" (notes, p. 8-39).
- **a₂ and T formula (warning 2):** its `at` now reads "p. 2 (left as an exercise; solved on this page)".
- **12.5 layout (info 3):** the page now says the equations contain no gravity or friction (hence horizontal and frictionless), drops "short", and states that the figure is not reproduced and the layout is read from the transcript's length terms.
- **Flashcard 1 (info 5):** now says a weighted sum of the accelerations is zero (2a_B + a₁ = 0).
- Optional extra calcs not added; the existing 25 entries cover every number shown.
