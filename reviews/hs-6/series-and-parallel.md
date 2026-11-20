---
page: content/year-0/hs-6/series-and-parallel.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electric-circuits/17-electric-circuits-04 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electric-circuits/17-electric-circuits-05 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/electric-circuits/11-electric-circuits-02 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-12/electric-circuits/10-electric-circuits-03 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electric-circuits/17-electric-circuits-02 (read)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/electric-circuits/17-electric-circuits-01 (read)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap7dc_circuits/ (read; PDF 01decae81aae80df6e65d8831582764a_chap7dc_circuits.pdf downloaded to a scratch folder outside the repo, Sec. 7.1 to 7.5 read)
verdict: pass-with-notes
---

# Review: Series and parallel circuits (lesson 6.7)

No errors found. All formulas are in the cited places, every number recomputes, the quiz answers are right, coverage matches the §4 row, and no forbidden source is cited or used. The findings below are small improvements.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | calcs file, `quiz-internal-distractors` | (calcs completeness) | `where` says "V/I, ε/I and (ε − V)·I" but the entry computes only V/I = 2.0 Ω; the wrong choice 0.18 Ω = (ε − V)·I = 0.3 × 0.60 has no entry | Add an entry for 0.18 Ω and narrow the `where` of this entry to "V/I" |
| 2 | warning | calcs file, distractors of quiz 0, 1 and 3 | (calcs completeness) | Wrong choices 0.25 A (10/40), 1010 Ω (sum), 505 Ω (half the sum), 990 Ω (difference) and 12.5 V (9.0 + 3.5) are not in the calcs file, while other distractors are | Add them (or drop the distractor entries everywhere for consistency) |
| 3 | info | calcs file, `quiz-parallel-small`, `quiz-junction` | (calcs metadata) | No `quiz: 1` / `quiz: 2` keys, unlike the other quiz answer entries | Add `quiz: 1` and `quiz: 2` |
| 4 | info | "Kirchhoff's two rules", junction-rule Formula | MIT Eq. (7.4.1) is the general rule, ΣI_in = ΣI_out; the two-branch form I = I₁ + I₂ is Eq. (7.3.4) (and the example after 7.4.1 is I₁ = I₂ + I₃) | `tex="I = I_1 + I_2"`, `at="Sec. 7.4, Eq. (7.4.1)"` | Acceptable as a special case; optionally `at="Sec. 7.4, Eq. (7.4.1); two-branch form Eq. (7.3.4)"` |
| 5 | info | "Kirchhoff's two rules", loop rule | MIT Eq. (7.4.2): ΣΔV = 0 around a closed loop | Loop rule given in words only; the junction rule gets a `<Formula>` | Optional: give the loop rule a Formula too (e.g. in words-as-symbols for one battery, ε = V₁ + V₂ + …, or ΣΔV = 0) cited to reading4 Eq. (7.4.2), so the two rules are treated alike |
| 6 | info | Plot caption | — | "The series total is always above R₁" while the domain starts at R₂ = 0, where series and parallel totals equal R₁ and 0 | "…above R₁ for any R₂ > 0" |

## Formulas and citations
- `V = V_1 + V_2 + …` (mit = Siyavula Gr 10 17.4): matches "V_battery = V₁ + V₂ + …". Correct.
- `R_s = R_1 + R_2 + …` (mit, 17.4): matches "R_S = R₁ + R₂ + …". Correct.
- `1/R_p = 1/R_1 + 1/R_2 + …` (reading1, 17.5): matches. Correct.
- `R_p = R_1R_2/(R_1 + R_2)` (reading1, 17.5): 17.5 states it as "product over sum". Correct. (Siyavula's Worked example 12 has a typo in its three-resistor formula; the page does not use it.)
- `I = I_1 + I_2` (reading4, Sec. 7.4, Eq. 7.4.1): see finding 4.
- `V = ε − Ir` (reading3, Gr 12 10.3): Siyavula writes ε = V + Ir; same equation. Correct. (Siyavula also says, in one sentence, that the largest current is "less than ε/r", which conflicts with its own I = ε/r; the page's I = ε/r for R ≈ 0 is the correct one.)
- `I = ε/(R + r)` (reading4, Sec. 7.2, Eq. 7.2.7): matches Eq. (7.2.7). Correct.
- Calcs identity sources: Eq. (7.3.1) for V = I(R₁ + R₂) and Eq. (7.2.6) for ε − Ir − IR = 0 are the right equations.
- Prose claims checked against sources: wires of no resistance at one potential (MIT 7.2, Siyavula 17.5); short circuit, fuse in series (MIT 7.1); ammeter in series (17.2), voltmeter in parallel (17.1); series resistors as voltage divider (Siyavula 17.4, MIT 7.4); smallest resistor carries most current, short as the extreme case (MIT 7.3); loads in parallel across the supply (MIT 7.1); emf as energy per coulomb (Siyavula 17.1, Gr 12 10.3; MIT Eq. 7.2.1); "lost volts" with energy transferred, not lost (Gr 12 10.3). The headlights-dimming example and the fairy-lights example are not in the sources but are standard and correct.

## Arithmetic and answer checks
Recomputed by hand; `pytest tests/calc -k series-and-parallel`: 36 passed. `npm run content:check`: 0 errors; the page's only warnings are the planned prerequisite and the missing review file.
- Quiz 0: 40 + 60 = 100 Ω; 10/100 = 0.10 A. Correct (choice 0). Distractors: 10/40 = 0.25, 10/24 = 0.417 ≈ 0.42, 10 A; all wrong.
- Quiz 1: 10·1000/1010 = 9.90 Ω, "a little less than 10 Ω". Correct (choice 2).
- Quiz 2: 2.5 − 1.0 = 1.5 A, charge conservation. Correct (choice 0); the "energy" choice with the same number is correctly wrong.
- Quiz 3: 9.0 − 3.5 = 5.5 V. Correct (choice 1).
- Quiz 4: (1.5 − 1.2)/0.60 = 0.50 Ω. Correct (choice 1). Distractors 0.18 (= 0.3·0.6), 2.0 (= 1.2/0.6), 2.5 (= 1.5/0.6) all wrong.
- Series example: 30 Ω, 0.20 A, 2.0 V, 4.0 V, sum 6.0 V. Correct.
- Parallel example: 0.60 A, 0.40 A, 1.0 A, 20·30/50 = 12 Ω, 12/12 = 1.0 A. Correct.
- Combination: 10·15/25 = 6.0 Ω, 10 Ω, 1.2 A, 4.8 V, 7.2 V, 0.72 A, 0.48 A, sum 1.2 A. Correct.
- Internal resistance: 6.0/3.0 = 2.0 A; 6.0 − 0.80 = 5.2 V; 2.0·2.6 = 5.2 V; 6.0/0.40 = 15 A. Correct.
- Flashcards: all statements correct.
- Plot: y-range 0 to 90 holds the largest series total (30 + 60 = 90). Curves computed from the formulas.

## Only earlier terms
- Charge conservation (6.1), voltage as energy per coulomb and potential (6.4), current, resistance, V = IR, ammeter and voltmeter (6.6) are all prerequisites and are referred back to correctly.
- `conservation-of-energy` (3.4) is planned, not written yet (PC 1); its lesson-list title covers the idea used here, so it counts as introduced.
- New terms are defined where first used: in series, in parallel, junction, Kirchhoff's rules, short circuit, voltage divider, emf, internal resistance, load, terminal voltage, lost volts. "Fuse" and "mains" are explained by context; acceptable at this level.
- Note (not this page): lesson 6.6 already uses "in series" and "in parallel" for meters before 6.7 defines them; harmless, since 6.6 explains the connection in words.

## Coverage
- §4 row 6.7: series and parallel, Kirchhoff's rules, emf and terminal voltage, PhET circuit-construction-kit-dc. All covered, at VWO level: equivalent resistance, sharing of current and voltage, step-by-step reduction of combinations, emf and internal resistance, short-circuit current.
- Left out, fine at this level: multi-loop circuits with several batteries (that is where `leadsTo` 8.02 Lecture 10 goes), meter resistances and their effect on readings (MIT 7.5; 6.6 already states it qualitatively).
- No repetition of 6.6: meter placement is one sentence pointing back to 6.6; Ohm's law is only used. No overlap with 6.8: power formulas (P = VI, I²R, V²/R) are absent; heating is mentioned only in words. MIT Eq. (7.2.8) (power split between r and R) is rightly left to 6.8.

## Where this leads
- `8.02` Lecture 10 exists on this site (`dc-circuits`, "Current, resistance and DC circuits"; syllabus title "DC Circuits; Kirchhoff's Loop Rules"), matching §4's `8-02/dc-circuits`. The `why` is accurate (the MIT notes derive the loop rule from ∮E·ds = 0, Eq. 7.2.2).
- `towards: false` is right: 6.7 is not the block's last lesson.

## Licensing and AI terms
- No copied sentences found. Closest wording: "like a road map" against MIT's "somewhat like road maps" (a short standard phrase, fine); the short-circuit and smallest-resistor passages are rewritten, not copied.
- No figures: the only graph is generated from formulas; the symbols table describes symbols in words.
- Worked examples and quiz items are the page's own: none match Siyavula's examples (17.4: 5 + 17 Ω, 0.5 + 7.5 + 11 Ω, 750 kΩ + 1.7 MΩ; 17.5: 15 ∥ 7 Ω; Gr 11: 2 + 4 Ω on 12 V, 2 ∥ 4 Ω, 4 ∥ 12 Ω on 18 V, four 10 Ω network; Gr 12: 12.00 V, 10.00 V, 4.00 A). Quiz 4 has the same answer (0.50 Ω) as Gr 12 Worked example 6 but different numbers; acceptable.
- No Siyavula logo or branding; Siyavula is cited by section only.
- MIT Ch. 7 PDF: no "All rights reserved" or "Courtesy of" notice found in its text; course page is CC BY-NC-SA 4.0.
- PhET: `<PhET title="Circuit Construction Kit: DC" />` with `phet: circuit-construction-kit-dc`, as on other High School pages; attribution is printed by the component.
- No forbidden source cited or read (no OpenStax, Khan, CK-12, IOPSpark, Wikiwijs, Wikipedia, Feynman, Tong).
- Info for the owner: the footer of every Siyavula page fetched says the site is under a closed copyright licence "except where otherwise noted". AGENTS.md records that the textbook content is CC BY 3.0 (contents page read 2026-11-20); this review did not re-verify that notice on the section pages themselves.

## Notes
- reading4's `location` lists Sec. 7.5 (meters), but the page uses nothing from 7.5 beyond what 6.6 already said; harmless, could be dropped.

## Resolution (2026-11-20, by the page author)
1. Fixed. The `where` of `quiz-internal-distractors` now says "quiz 4, wrong choice V/I" only. New entry `quiz-internal-distractor-product` recomputes the 0.18 choice as 0.3 × 0.60 (numbers only, since the product is not a resistance).
2. Fixed. New entries `quiz-series-distractor-one` (10/40 = 0.25 A), `quiz-parallel-distractor-sum` (1010 Ω), `quiz-parallel-distractor-half` (505 Ω), `quiz-parallel-distractor-difference` (990 Ω) and `quiz-loop-distractor-sum` (9.0 + 3.5 = 12.5 V).
3. Not done, with a comment in the calcs file. calc:test rejects both keys: for quiz 1 it also matches the choice "a little less than 10 Ω" (it reads the 10), and for quiz 2 the wrong choice "1.5 A, because energy is conserved" has the same number, so the test cannot single out the marked answer.
4. Fixed: `at="Sec. 7.4, Eq. (7.4.1); two-branch form Eq. (7.3.4)"` (both equations checked in the local Chapter 7 PDF text).
5. Fixed. The loop rule now has its own Formula, ΣΔV = 0, cited to reading4 Sec. 7.4, Eq. (7.4.2) (checked in the PDF), with one sentence explaining the sign convention (gains positive, drops negative). Existing symbol meanings cover it; content:check reports no symbol error, so no symbol fix file was needed.
6. Fixed: the caption now says "For any R₂ > 0 the series total is above R₁, ...".
7. Fixed: Sec. 7.5 (meters) removed from reading4's location.
8. Left for the owner (licence question, not a page fix): whether the Siyavula section pages carry the CC BY 3.0 notice is recorded in AGENTS.md from the contents page; re-verifying it is an owner decision across all High School pages.

Checks: `npm run calc:test -- -k series-and-parallel`: 42 passed. `npm run content:check`: 0 error(s); the page's only warning is the planned prerequisite `conservation-of-energy`. Status set to reviewed.
