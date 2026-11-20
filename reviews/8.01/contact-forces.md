---
page: content/year-1/8.01/contact-forces.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/6-1-contact-forces/ (read: segment page and transcript of segment 6.1, MIT8_01F16_w02s04v02)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/6-2-static-friction-lesson/ (read: segment page and transcript of segment 6.2, MIT8_01F16_w02s04v04)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read: Course Notes Chapter 8, Section 8.3, pp. 8-9 to 8-16; page numbers checked with pdftotext -f N -l N)
  - calcs/8.01/contact-forces.yaml (read; recomputed with pytest, 13 passed)
verdict: needs-changes
---

# Review: Contact forces — the normal force and friction

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The normal force is not weight", first warning bullet; repeated in Summary bullet 2 | Notes p. 8-13: in *this particular example* the normal force equals the gravitational force in magnitude "because the object is at rest". MIT does not say N = mg holds only at rest. | "$N = mg$ holds **only** in this special case (at rest, horizontal surface, no other vertical forces). Push down on the block, tilt the surface, or accelerate and the normal force changes." Summary: "equals $mg$ only in special cases (at rest on a horizontal surface …)". | "Only … at rest" is wrong physics and contradicts the page's own crate example, which uses $N = mg$ for a crate *sliding* at constant speed ("Vertically nothing accelerates"). The condition is no *vertical* acceleration (horizontal surface, no other vertical forces); horizontal acceleration does not change N. Reword as e.g. "only when nothing accelerates vertically, the surface is horizontal and no other vertical forces act … or accelerate up or down", and fix the Summary in the same way. |
| 2 | warning | Same section, paragraph after the block-in-hand formula; Summary bullet 2 | Notes pp. 8-12 to 8-13 give both uses: the scale reading and the "feel" are effects of the normal force, **and** "the word 'weight' is often used to describe the gravitational force that Earth exerts on an object"; MIT therefore avoids the word and says "gravitational force". | "What we usually call 'weight' … is really the **normal force**." Summary: "'Weight' in everyday speech is really the normal force". | State both uses, as MIT does: what you *feel* or what a scale *reads* is the normal force, while "weight" is also commonly used for the gravitational force, which is why MIT avoids the word. |
| 3 | info | "The contact force and its two parts", para after Eq. (8.3.1) | Notes p. 8-11: care is needed "when the distributed nature of the contact force plays a key role in constraining the motion of a rigid body". No examples given. | "sometimes (for rolling or tipping objects) its spread matters." | Acceptable. "Tipping" is a clear example; "rolling" is less obvious at this level (it matters mainly for rolling resistance). Consider "tipping or toppling objects". |
| 4 | info | "Kinetic friction", list intro | Notes p. 8-14 call only the area-independence "rather surprising"; transcript 6.1 calls the three properties "crucial". | "And two properties are surprising" | Fine as an opinion; no change needed. |
| 5 | info | "Kinetic friction", para after the list | Transcript 6.1: "we still don't have a very good theoretical model … although today, there is a lot of contemporary research which has made a lot of progress". | Adds "modern research on friction at the scale of atoms". | The "scale of atoms" detail is not in segment 6.1 (OCW's Week 2 has a separate Deep Dive "DD 1.1 Friction at the nanoscale", not read for this review). Either drop "at the scale of atoms" or cite that Deep Dive. Uncertain whether the Deep Dive supports the exact wording. |
| 6 | info | "Static friction", "Usually $\mu_s$ is slightly larger than $\mu_k$" | Notes p. 8-15 and transcript 6.2 state $\mu_s > \mu_k$ without "usually". | "Usually …"; quiz 4 explanation and flashcard state $\mu_s > \mu_k$ without hedging. | The hedge is physically more careful; fine. Optionally make quiz/flashcard wording match ("usually"). |
| 7 | info | "Static friction", just-slipping sentence | Transcript 6.2: just-slipping is when the object suddenly starts to slip because static friction has reached its maximum; notes p. 8-16: applied force along the surface exceeding $(f_s)_\text{max}$. | "The moment the applied force exceeds $(f_s)_\text{max}$ is the **just-slipping condition**." | Consistent with notes p. 8-16. Could add "along the surface" (the notes specify the tangential component of the applied force), which matters on the slope example. |

Formula citations (all checked against the PDF pages):
- Eq. (8.3.1), p. 8-11: correct (equation on PDF page 11; the preceding text and Figure "8.6" are on p. 8-10).
- Eqs. (8.3.2)–(8.3.4), p. 8-12: correct. Page's chain $\vec N + \vec F^{g} = 0 \Rightarrow N - mg = 0 \Rightarrow N = mg$ matches the three equations and MIT's sign choice (upwards positive).
- Eq. (8.3.5), p. 8-14: correct.
- Eqs. (8.3.6) and (8.3.7), p. 8-15: correct; notation $(f_s)_\text{max}$ matches.
- Notation: page uses $\vec F^{\,g}$ for gravity, same as MIT's $\vec F^{g}$.

Other claims checked and supported:
- History: da Vinci measurements "between 1493-4 and about 1515", Amontons 1699, speed-independence due to Coulomb (notes p. 8-14). Correct.
- Constraint forces not given by a force law (notes Section 8.3, p. 8-9, and p. 8-11). Correct.
- Third-law partners of N and gravity (notes p. 8-13, interaction-pair notation). Correct.
- Feeling weightless when jumping; gravity not switched off (notes p. 8-13). Correct.
- Static friction zero with no push, grows with push, drops slightly on slipping; direction opposes applied force "as long as the surfaces are not accelerating"; direction can depend on all other constraints (transcript 6.2, notes pp. 8-15 to 8-16). Correct.
- Chalk / fingernails / violin bow examples (notes p. 8-15). Correct.

## Arithmetic and answer checks
- Lift: $N = 60 \times (9.8 + 1.5) = 678$ N. Correct. $678 / 9.8 = 69.2$ → "about 69 kg". Correct. $60 \times 9.8 = 588$ N. Correct. Physics (N − mg = ma, upward a) correct.
- Crate: $N = 25 \times 9.8 = 245$ N; $0.30 \times 245 = 73.5$ N → "≈ 74 N". Correct (rounding 73.5 up; "about 74 N" is fine).
- Plot caption: $0.5 \times 20 \times 9.8 = 98$ N; $0.4 \times 20 \times 9.8 = 78.4$ → "78 N". Correct. Plot expressions implement $f_s = F$ up to $\mu_s mg$, then $\mu_k mg$. Correct.
- Slope: $\arctan 0.45 = 24.23°$ → "≈ 24.2°". Correct. $\sin = 0.4104$, $\cos = 0.9119$; $a = 9.8 (0.4104 - 0.35 \times 0.9119) = 0.894$ m/s² → "≈ 0.89". Correct (with the page's rounded 0.410 and 0.912 also 0.89). Derivation ($N = mg\cos\theta$, slip at $\tan\theta = \mu_s$, mass-independent) correct.
- Quiz 1: answer 1 (the two normal forces on table and book) correct; explanation correct.
- Quiz 2: answer 1 ("About 74 N") correct; distractors 7.5 N ($0.30 \times 25$, g forgotten), 245 N (mg), 25 N are all wrong. Correct.
- Quiz 3: answer 1 (20 N) correct; explanation correct.
- Quiz 4: answer 1 correct; explanation correctly rules out choice 4 via $\mu_s > \mu_k$.
- Flashcards: all three correct.
- calcs/8.01/contact-forces.yaml: every number on the page has an entry (678, 69, 588, 1699, 245, 74 twice, 98 twice, 78, 24.2, the tan θ = μ_s identity, 0.89); inputs and formulas match the page. `pytest -k contact`: 13 passed. Minor (info): `static-max-quiz` assumes 20 kg and μ_s = 0.5, which the quiz text does not state (it only gives 98 N) — harmless but the entry documents an assumption not on the page; `plot-kinetic`'s `shown` quotes the parameter list rather than the "78 N" it computes (78 N is quoted under `plot-slip`); `lift-scale-kg` and `lift-gravity` cite "p. 8-12" though these numbers are page-own, which `origin: page-own` already makes clear.
- Plot (info): sliders allow $\mu_k > \mu_s$ (e.g. μ_s = 0.1, μ_k = 0.75), which is unphysical and makes friction *jump up* at slipping; and with large m and μ_s the slip point (up to 235 N) and dashed line fall outside the shown domain/range (F ≤ 150, y ≤ 120). Consider limiting μ_k's max or clamping it below μ_s, and widening the range.
- `npm run content:check`: 0 errors; the only warning for this page was the missing review file.

## Coverage and order
- Segment 6.1 (object pushed at constant speed; contact force = normal + tangential; kinetic friction law; independence of area and speed; no good theory yet) — covered.
- Segment 6.2 (static friction from zero to a maximum; just-slipping; drop to kinetic friction; $\mu_s > \mu_k$; direction opposes applied force; can depend on all constraints) — covered, plus a generated plot standing in for the segment's simulation.
- Notes Section 8.3: page follows 8.3 → 8.3.1 → Example 8.2 → 8.3.2 order. Segment order (6.1 then 6.2) is kept. The page places the normal-force/weight discussion (notes Example 8.2) before kinetic friction, which follows the notes rather than the transcripts (segment 6.1 does not discuss weight); this is fine.
- Omitted (info): the four constrained-motion examples of Figure 8.6 (incline, sphere, gas in vessel, bead on rotating rod); Figure 8.7 (forces on the hand incl. the forearm); the "feels lighter" remark with a second hand; MIT's subscripted interaction-pair notation $\vec f^{\,k}_{1,2}$, $\vec f^{\,s}_{1,2}$ and the remark that friction forces form third-law pairs; the explicit point (notes p. 8-16, difference 1) that kinetic friction has a fixed magnitude while static friction's magnitude and direction depend on the applied forces (implied on the page but not stated).
- Added: lift example, crate example, tilted-board example (all original), and the friction plot.
- No cosmology callout; acceptable (no real cosmology link from friction). `leadsTo` 8.01 Lecture 7 (tension and springs) and Lecture 36 (OCW segment 36.1 "Friction on a rolling wheel") are fair; the Lecture 36 claim about static friction direction on a rolling wheel matches the segment title and transcript 6.2's forward remark, but segment 36.1 itself was not read (uncertain detail).

## Licensing
- No "All rights reserved" or "Courtesy of" notices found in ch8.txt, t61.txt, t62.txt or the two segment pages (grep). No figures reused; the only graphic is a generated `<Plot>`.
- No OpenStax/LibreTexts material.
- Wording is rewritten throughout. Closest paraphrases (acceptable, short): the opening "rest your hand on a table … electrons repel" scenario (notes p. 8-10), the chalk/fingernails/violin-bow list (p. 8-15), and "when you jump … gravity has not switched off" (p. 8-13). None is a copied sentence.
- Worked examples are original (own numbers and situations); none copied from MIT.

## Notes
- Source URLs in frontmatter (6.1 segment page, 6.2 segment page as `seg62`, Chapter 8 resource) all resolve to the right OCW pages. `seg62` is defined in `references` but not cited by any `<Formula>`; fine, but could be cited `at=` for the static-friction section if a transcript citation is wanted.
- Quiz 2 repeats the crate worked example with identical numbers; consider changing the numbers so it tests the method rather than recall.
- Fix #1 (error) and #2 (warning) before setting `status: reviewed`.

## Resolution (2026-11-15, by the page author)

- Error (N = mg "only at rest"): fixed. The warning bullet and Summary now give the real conditions — a horizontal surface, no other vertical forces and no vertical acceleration — and say that sliding sideways (as in the crate example) does not change N.
- Warning ("weight"): fixed. The page now says the word has two uses (often the gravitational force; what a scale reads and what you feel is the normal force), and that MIT's notes avoid it for that reason. Summary reworded to match.
- Info: "rolling or tipping" changed to "an object that tips over".
- Info: "research at the scale of atoms" changed to "contemporary research has made much progress", as in transcript 6.1.
- Info: quiz 4 explanation and the static-friction flashcard now say "usually" μ_s > μ_k.
- Info: the just-slipping sentence now says "the applied force along the surface".
- Info: plot sliders capped (m ≤ 25 kg, μ_s ≤ 0.6, μ_k ≤ 0.6) and axes widened to 160 N, so every setting stays on the graph; the caption says to keep μ_k below μ_s.
- Info: quiz 2 now uses its own numbers (30 kg, μ_k = 0.20, about 59 N); calcs entry crate-push-quiz updated.
- Calcs notes: plot-kinetic now quotes "78 N"; static-max-quiz says the quiz gives 98 N and matches the plot defaults. calc tests pass.
- Not changed: the omitted constrained-motion examples (Fig. 8.6), forearm diagram (Fig. 8.7) and interaction-pair friction notation are not needed for the segment-level lesson.
