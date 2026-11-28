# Plan: Fable re-review of the pages Opus wrote and Opus reviewed (from 2026-12-03)

Written 2026-11-28 by Account B at the owner's request. **Not started, and not in TASKS.md yet**: on or after 2026-12-03 (the weekly Fable limit resets) the owner says "go", and the plan is then copied into TASKS.md for both accounts.

## 1. Why

On 2026-11-27 the owner decided (TASKS.md rule 10): no Fable for a while; writers **and** blind reviewers on Opus, with three safeguards. The third: "after the Fable reset (2026-12-03), Fable re-reviews a sample of these sets (about 1 in 4). If it finds an error, every Opus-on-Opus set of that course gets a Fable review." A reviewer on the same model catches most mistakes but may share a systematic blind spot with the writer; a review on another model is the check on that.

## 2. What is in scope

Every page whose review file says "Writer: Opus" and "Reviewer: Opus" (found with `grep -rl "Reviewer: Opus" reviews` on 2026-11-28): **70 pages**, 66 problem sets and 4 lessons. Per course, with the errors and warnings the Opus review found (errors/warnings):

| Course | Pages | Owner | Opus review findings |
|---|---|---|---|
| 18.06 | Sets 1–10 | A: 1–6, B: 7–10 | S1 1/1, S2 0/5, S3 1/4, S4 3/5, S5 0/3, S6 0/2, S7 2/3, S8 1/7, S9 0/7, S10 2/6 |
| 8.02 | Sets 1–11 | B: 1–4, A: 5–11 | S1 1/6, S2 0/4, S3 0/6, S4 1/2, S5 0/2, S6 1/1, S7 0/4, S8 2/1, S9 0/5, S10 0/3, S11 1/2 |
| 8.08 | Sets 1–12 | A | S1 0/2, S2 0/2, S3 0/1, S4 0/2, S5 0/1, S6 0/4, S7 0/6, S8 1/4, S9 0/1, S10 0/3, S11 1/8, S12 1/6 |
| 8.09 | Sets 1–10 | B | S1 0/1, S2 0/4, S3 1/2, S4 0/1, S5 0/3, S6 1/1, S7 2/1, S8 0/0, S9 1/3, S10 3/5 |
| 8.902 | Sets 1–7 | B: 1–3, A: 4–7 | S1 1/1, S2 1/1, S3 2/3, S4 0/2, S5 0/6, S6 2/4, S7 0/1 |
| 8.07 | Sets 5–10 | A | S5 2/1, S6 2/3, S7 0/4, S8 1/2, S9 0/5, S10 0/2 |
| 8.962 | Sets 7–11 | B | S7 0/2, S8 0/2, S9 0/3, S10 0/2, S11 3/2 |
| Ferreras | Sets 1–5 | A | S1 0/6, S2 0/1, S3 0/5, S4 1/2, S5 0/1 |
| Lessons | 8.04 `hydrogen-orbits-turning-points`, `simplest-quantum-system-spin`, `rydberg-atoms-virial-theorem`; 8.033 `relativity-course-overview` | B | 0/2, 0/2, 0/3, 0/4 |

Out of scope: pages written by Fable (reviewed by Opus), and everything reviewed before 2026-11-27.

## 3. The sample (about 1 in 4: 21 of 70)

Per course, a quarter rounded up, choosing the pages most likely to hide a shared blind spot: the ones where the Opus review still found errors (the writer slipped there), the ones with the most numerical work, and the first page of a new kind of source.

| Course | Re-review | Who | Why these |
|---|---|---|---|
| 18.06 | Sets 4, 7, 10 | A: 4; B: 7, 10 | most errors (3, 2, 2); our own problems only, no MIT text to compare with |
| 8.02 | Sets 1, 8, 11 | B: 1; A: 8, 11 | errors found; first sets built from sessions plus notes |
| 8.08 | Sets 8, 11, 12 | A | the only 8.08 sets with errors; 11 had 8 warnings |
| 8.09 | Sets 3, 7, 10 | B | errors found (1, 2, 3); 10 is chaos with numerics |
| 8.902 | Sets 3, 6 | B: 3; A: 6 | 2 errors each; Set 1's generated galaxy data is also worth it if time allows |
| 8.07 | Sets 5, 6 | A | 2 errors each |
| 8.962 | Sets 10, 11 | B | 11 had 3 errors; 10 is the TOV numerical integration |
| Ferreras | Sets 1, 4 | A | 4 had an error; 1 had 6 warnings |
| Lessons | `rydberg-atoms-virial-theorem` | B | first lessons from video transcripts |

**Account B: 10 pages** (18.06 Sets 7, 10; 8.02 Set 1; 8.09 Sets 3, 7, 10; 8.902 Set 3; 8.962 Sets 10, 11; the Rydberg lesson). **Account A: 11 pages** (18.06 Set 4; 8.02 Sets 8, 11; 8.08 Sets 8, 11, 12; 8.902 Set 6; 8.07 Sets 5, 6; Ferreras Sets 1, 4). Each account re-reviews its own pages.

## 4. How

1. A **fresh Fable reviewer** (`model: "fable"`, agent `mit-lecture-reviewer`), with the same brief as the first review (`docs/problem-sets-run/REVIEW-BRIEF.md` for sets: strip the page with `scripts/strip-solutions.py`, solve blind, write the answers into the review first, then compare; the agent file's lesson review for lessons). It does **not** see the Opus review until its own answers and findings are written; then it reads the Opus review and says what that review missed.
2. Output: a new section at the end of the page's existing review file, `## Fable re-review (date)`, with its findings and a `COUNTS:` line. The page's owner fixes the findings, adds a Resolution and commits ("<course> Problem Set N, Fable re-review").
3. One reviewer at a time on Account B's PC (two at most on A's), as for the writing.

## 5. The rule after the sample

- **No error found** in a course's sample: that course is done; the other Opus-on-Opus pages stay as they are.
- **An error found** (a wrong answer, a wrong formula, a wrong citation, an answer leak counts; a warning does not): **every** Opus-on-Opus page of that course gets a Fable review, split between the accounts by owner, in the same way.
- Errors are recorded in the review file and summarised in TASKS.md, so the lesson reaches both accounts' writers.

## 6. Cost

A Fable review costs more of the weekly Fable limit than an Opus one; plan on about 2–4% of the 5-hour limit per review on Account B's PC and keep the weekly Fable limit below 85% (the owner's earlier stop). Ten reviews fit in one or two windows per account. If several courses fall under section 5's rule, spread the full reviews over the following weeks.
