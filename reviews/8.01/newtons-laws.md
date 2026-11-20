---
page: content/year-1/8.01/newtons-laws.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter7/ (read; Chapter 7 PDF as text, pp. 7-1 to 7-8, all of Sections 7.1–7.4 compared)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/ (read; Lesson 4 segment list 4.1–4.4 and the CC BY-NC-SA 4.0 footer)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/4-1-newtons-first-and-second-laws/ (read; page and the video transcript PDF)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/4-2-newtons-third-law/ (read; transcript PDF)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/4-3-reference-frames/ (read; transcript PDF)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-2-newtons-laws/4-4-non-inertial-reference-frames/ (read; transcript PDF)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-4-the-kinematics-of-the-homogeneous-expanding-universe/ (read; page title and license only. The Lecture 4 transcript was read from a local copy, pp. 24–25.)
verdict: pass-with-notes
---

# Review: Newton's laws of motion

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The first law: inertia", last paragraph; frontmatter `source.title` "(4.1–4.4)" | 4.3 derives r′ = r − R, v′ = v − V, and a′ = a for constant V, so F′ = F, and a frame moving at constant velocity relative to an inertial frame is also inertial. 4.4: if S′ accelerates at A, then a′ = a − A and a fictitious force −mA appears (centrifugal and Coriolis forces are examples). | One paragraph: defines an inertial frame, gives the smooth-train example ("both frames are inertial"), and says a braking or turning train is not inertial, then points to 4.3/4.4 "in more detail". | The treatment is fair and correct, and it says that it is brief. The source title claims 4.1–4.4, though, and the page never gives the key 4.3 result (a′ = a, so F = ma holds in every frame moving at constant velocity) or names the 4.4 fictitious force −mA. Add one sentence for each, or narrow the source title. |
| 2 | info | "The second law" `<Formula>` cite "Eqs. (7.3.1)–(7.3.5)" | (7.3.1) p = mv; (7.3.2) I = FΔt = Δp; (7.3.3) F = lim Δp/Δt ≡ dp/dt; (7.3.4) F = m dv/dt; (7.3.5) F = ma | The formula shows (7.3.3)–(7.3.5). (7.3.1) and (7.3.2) appear in the prose just before it. | The range is acceptable because it covers the whole derivation. Optionally cite "(7.3.3)–(7.3.5)" on the formula. |
| 3 | info | Second-law paragraph | 7.3 also discusses constraint forces (contact forces, wall forces), which no force law fixes in advance. 4.1 adds that F = dp/dt is the general form for systems whose mass changes. | Mentions force laws only. "For constant mass" is stated correctly. | Optional: add one line on constraint forces, or on F = dp/dt for changing mass. |
| 4 | info | First law, "Before Galileo, it seemed natural…" | 7.2 credits the principle of inertia to Galileo ("Newton did not acknowledge Galileo's contribution"). It does not discuss pre-Galilean views. | Adds historical context on the pre-Galilean view. | Correct as general history and not in conflict with MIT. No change needed. |
| 5 | info | "Where Newton's laws stop working" | Gives a threshold of v > 0.1c for special relativity, and "general relativity and cosmology" for large-scale structure. | "At speeds approaching the speed of light"; "replaced by general relativity". | A fair paraphrase. Optionally give MIT's rough 0.1c threshold. |

All four formula citations match the MIT notes:
- (7.1.1) F ≡ m_s a ✓
- (1.9) as printed, m_in = m_s a_s/a_in ✓. The equations in Section 7.1.1 really are printed as (1.7)–(1.9), and the page notes this.
- (7.3.3)–(7.3.5) ✓
- (7.4.1) F₁,₂ = −F₂,₁ ✓

The notation (F₁,₂ is the force on body 2 due to body 1) matches MIT's definition in 7.4. The page's claim that "the accelerations add as vectors, so the forces add as vectors too" matches MIT Eqs. (7.1.5)–(7.1.6), including that this is an experimental result, not a definition. The summary line m_in/m_s = a_s/a_in matches Eq. (1.8).

## Arithmetic and answer checks
- Worked example, puck: F_net = (6.0 − 2.0, 0 + 4.0) = (4.0, 4.0) N ✓; a = F/m = (2.0, 2.0) m/s² ✓; |a| = 2√2 = 2.828, shown as 2.83 m/s² ✓; direction atan(2/2) = 45° ✓; v = a·t = (6.0, 6.0) m/s ✓; speed 6√2 = 8.485, shown as 8.5 m/s ✓. Leaving out gravity and the normal force (which cancel, and are not a third-law pair) is correct.
- Quiz 1 (answer index 1, "Zero") ✓. The explanation is correct.
- Quiz 2 (answer index 0, m_B = 3 m_A): m_B/m_A = a_A/a_B = 6/2 = 3 ✓.
- Quiz 3 (answer index 2, equal and opposite) ✓. This matches the 4.2 marble-and-train discussion. The page's car/truck version is written independently.
- Quiz 4 (answer index 0, (2î + 2ĵ) m/s²) ✓. It uses the same numbers as the worked example.
- Flashcards: first law ✓; second law (F = dp/dt, and F = ma for constant mass) ✓; third law (index convention matches 7.4) ✓; p = mv ✓; inertial frame (matches the 4.3 definition) ✓.
- Warning callout (car vs truck: equal forces, a = F/m larger for the car) ✓.

## Coverage and order
- MIT order: 7.1 force (Example 7.1) → 7.1.1 mass calibration → 7.2 first law → 7.3 momentum and second law → 7.4 third law → limits of Newtonian mechanics. The page follows the same order exactly.
- The video segments run 4.1 (first and second laws, inertial coordinate systems) → 4.2 (third law, marble/train, interaction pairs vs. balanced forces on one body) → 4.3 (Galilean transformation) → 4.4 (non-inertial frames, fictitious forces). The page covers 4.1 and 4.2 fully. It covers 4.3 and 4.4 only in outline (see row 1).
- Left out: MIT Example 7.1 (a post pulled by two ropes; the ground force is (−40, −50) N, 64 N at 51.3°). The page's puck example has the same "add several forces as vectors" structure, but its numbers and question are different (acceleration and velocity, not an equilibrium force). It counts as original.
- 4.2 also stresses that the weight and the normal force on a standing person are *not* a third-law pair. The page makes the general point ("act on different bodies"), but not this standard example. It is optional to add.
- Added (not in MIT): the impulse is stated in words, which MIT has as (7.3.2); the PhET simulation; and the cosmology callout.

## Licensing
- The Chapter 7 PDF carries "© Peter Dourmashkin 2012" and the OCW CC BY-NC-SA 4.0 terms. The page's `courtesy` line reflects this ✓. The OCW footer links CC BY-NC-SA 4.0 ✓.
- No text is copied verbatim from MIT. The Newton quotations in the chapter (the Motte/Cajori translation) are not reproduced. The page's statement of the first law is its own wording.
- No OpenStax or LibreTexts material was found. The PhET sim is embedded, not copied.

## Notes
- Cosmology callout and `leadsTo`: checked against the 8.286 Lecture 4 transcript (pp. 24–25). Guth derives dx/dt = c/a(t) as a unit conversion, with x in notches and a in meters per notch. Answering a student's question, he justifies it because inertial observers are equivalent and the speed of light does not depend on its source. He first says a comoving observer is "not really" inertial because of gravity, then states that "if I'm standing still in this expanding coordinate system, I am an inertial observer", which general relativity makes rigorous. The page's "locally, an inertial observer" is a fair and correctly hedged summary. The formula is correct ✓, and the attribution to Lecture 4 (Fall 2013) and the reference URL are correct ✓. Optional: say that x is a comoving coordinate and a(t) has units of length per coordinate unit, so the reader sees why a is in the denominator.
- Not verified: that the PhET "Forces and Motion: Basics" sim matches the "push a crate, add friction" description (I did not open it).
- The Chapter 7 PDF footer reads "8.01 Classical Mechanics, Spring 2022", while the URL is under the Fall 2016 8.01SC course. This is consistent with the other 8.01 reviews and is not an error.

## Resolution (2026-11-14, by the page author)
- Added the 4.3 result (same acceleration in frames moving at constant relative velocity, so F = ma holds in all inertial frames) and the 4.4 fictitious force −mA.
- Open: constraint forces and the 0.1c threshold left out deliberately (covered in later lessons / relativity). Video segments not compared. Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
