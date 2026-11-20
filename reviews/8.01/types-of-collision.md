---
page: content/year-1/8.01/types-of-collision.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-9-collision-theory/26-1-momentum-in-collisions/ (read; segment page, CC BY-NC-SA footer, and the Week 9 segment list)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter15/ (read; Chapter 15 PDF extracted with pdftotext; Sections 15.1 and 15.3 and Example 15.2 compared in full; printed page footers checked with pdftotext -f/-l)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/2e6641aa72c764df3cf2100a6913fb68_YLDRzy8Dcgo.pdf (read; segment 26.1 transcript, 2 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/2eb2522c6ee64adb93d0f0d4e601348a_4ZnijNan49U.pdf (read; segment 26.2 transcript, 3 pages)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/542651eebff015e780bd2b0420394854_CcJoqITNvh0.pdf (read; segment 26.3 transcript, 3 pages)
  - content/year-5/Ferreras/weak-lensing-and-machos.mdx (read; the Ferreras 2.6 page the leadsTo points to, checked for the Bullet Cluster claims)
verdict: needs-changes
---

# Review: Types of collision

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Opening paragraph, "(notes, Section 15.1, pp. 15-1–15-2)" | Section 15.1 lies entirely on printed page 15-1; Section 15.2 starts on the same page, and p. 15-2 is all Section 15.2 (Eqs. 15.2.1–15.2.4). | pp. 15-1–15-2 | Cite "Section 15.1, p. 15-1". |
| 2 | warning | "Which type a collision is must be assumed as part of the model (p. 2)" | The 26.2 sentence ("in order to make a model of our problem, we have to beforehand make some assumptions about the nature of the collision") starts at the bottom of p. 1 and ends at the top of p. 2. | p. 2 | Cite "pp. 1–2". |
| 3 | warning | Types list, "Totally inelastic: the objects stick together; this loses the most kinetic energy"; flashcard 2 "(largest loss)" | Neither 26.2, 26.3 nor Section 15.3 says that a totally inelastic collision loses the most kinetic energy. 15.3 only defines it (e = 0) and gives ΔK = −½ μ v_A², Eq. (15.3.4). | States it as fact, under the citation to Eqs. (15.3.2)–(15.3.5) | The physics is right only with a qualifier: for given masses and initial velocities, and with momentum conserved, sticking together removes all the kinetic energy of the motion relative to the centre of mass, the most that can be lost. Add that qualifier or mark it as the page's own remark. |
| 4 | warning | Cosmology callout, "the gas is slowed and glows even more strongly in X-rays" | The linked Ferreras 2.6 page (weak-lensing-and-machos) says the gas was slowed and shows a bow shock; it says nothing about stronger X-ray emission. | "glows even more strongly in X-rays" | Shock heating does raise the gas temperature, but "even more strongly" is not supported by any source cited here (uncertain). Replace with "is heated (a bow shock is seen) and lags behind", or cite a source. |
| 5 | info | Cosmology callout | The Bullet Cluster lensing result is Clowe et al. (2006); the 8.01 centre-of-mass page dates it. | No date or attribution | Optionally add "(published in 2006)", as on centre-of-mass.mdx. |
| 6 | info | Worked example (b) | Notes 15.1: the momentum argument needs no external force along the line, or a nearly instantaneous collision. | Uses momentum conservation for a bullet hitting a block hanging from strings, without saying why | Add one clause: the collision is so short that the block has not yet moved, and the strings pull only vertically. |
| 7 | info | "Superelastic" bullet | 26.2 adds that the superelastic case is "a little bit tricky in terms of what we're calling our system" (the chemical energy). | Omitted | Optional: a few words that the released energy was stored inside the system. |
| 8 | info | Totally inelastic section | Section 15.3 gives ΔK = −½ μ v_A² with μ = m₁m₂/(m₁ + m₂), Eq. (15.3.4); Example 15.2 uses it as its first route, Eq. (15.5.4), and the lab-frame algebra only as a check. | Only the lab-frame algebra of 26.3 (also the notes' check) | Correct as it stands, since it follows the video. Optionally mention the reduced-mass form, which Lesson 27/DD.2 will need. |
| 9 | info | Slip note "(The transcript keeps a stray ½ in one term after cancelling the halves, p. 2.)" | 26.2 p. 2: "...equals M1 V1x final squared plus 1/2 m2 V2x final squared. And we've already canceled all the halves". | As stated | Correct and on the right page. (The transcript also numbers the energy equation 1 and momentum 2, while 26.1 called momentum "equation 1"; not worth a note.) |

## Arithmetic and answer checks
- Formula "Momentum in a one-dimensional collision" matches 26.1 p. 2 (component equation, called "equation 1") ✓.
- Formula "Elastic collision: kinetic energy" matches 26.2 p. 2 after cancelling the halves (without the transcript's stray ½) ✓.
- Formula "Totally inelastic: common velocity": the momentum condition is stated in words on 26.3 p. 1, and v_xf = m₁v₁xi/(m₁ + m₂) is said on p. 2, so "pp. 1–2" ✓. Matches notes Eq. (15.5.3) ✓.
- Formula "Kinetic energy lost": ½(m₁ + m₂)·(m₁/(m₁ + m₂))² v² = ½m₁v²·m₁/(m₁ + m₂); minus ½m₁v² gives ½m₁v²(m₁/(m₁ + m₂) − 1) = −m₂/(m₁ + m₂) K_i ✓. The derivation is on 26.3 p. 2 and the ratio on p. 3, so "pp. 2–3" ✓. Matches notes Eqs. (15.5.4)–(15.5.6) and the check on p. 15-14 ✓.
- Notes citations checked against printed footers: Section 15.3 and Eqs. (15.3.1)–(15.3.5) on p. 15-7 ✓; Example 15.2, Eqs. (15.5.3)–(15.5.4) on p. 15-13 and (15.5.5)–(15.5.6) on p. 15-14, so "pp. 15-13–15-14" ✓. Coefficient of restitution e = 1, < 1, 0, > 1 for elastic, inelastic, totally inelastic, superelastic matches 15.3 ✓.
- Other transcript citations: 26.1 external impulse and frictionless/no air p. 1 ✓, components and signs p. 2 ✓; 26.2 no external work and the three types p. 1 ✓, quadratic and "alternative way" pp. 2–3 ✓; 26.3 internal forces cancel in pairs and irreversible deformation p. 1 ✓, "other forms of energy" p. 3 ✓.
- Worked example (a): v_f = 1500 × 20/2500 = 12 m/s ✓. K_i = ½ × 1500 × 400 = 300 000 J ✓. K_f = ½ × 2500 × 144 = 180 000 J ✓. Loss 120 kJ = 40% ✓ = 1000/2500 ✓.
- Worked example (b): 0.010 × 400 = 4.0 kg m/s; 4.0/2.01 = 1.990 m/s ✓. 2.0/2.01 = 0.99502, so 99.5% ✓. h = 1.990²/(2 × 9.8) = 3.960/19.6 = 0.202 m ≈ 0.20 m ✓.
- Quiz 1: elastic, index 0 ✓; explanation correct. Quiz 2: 40%, index 1 ✓. Quiz 3: m₂ ≫ m₁, index 2 ✓; "the speed is large" is correctly a distractor (the fraction is independent of speed). Quiz 4: momentum equation, index 1 ✓; explanation correct.
- Flashcards: all three correct (see row 3 for the "largest loss" wording).
- calcs/8.01/types-of-collision.yaml: every entry agrees with my recomputation. `npm run calc:test` passed (1552 tests), but I could not confirm from its output that this new, untracked file was among the tests collected (uncertain). Minor: `pendulum-height` cites reading4 p. 3, but 26.3 has no pendulum; it is the page's own step (origin page-own is right; the source could be dropped or pointed at the energy-conservation lesson).

## Coverage and order
- The page follows MIT's segment order: 26.1 (momentum in components), 26.2 (kinetic energy, types, the elastic energy equation), 26.3 (totally inelastic, ΔK/K_i). Nothing from the three segments is missing.
- Added from the notes: the coefficient of restitution (15.3), cited. Added by the page: the car crash and ballistic pendulum example, and the cosmology callout.
- Correctly left out: Section 15.2 (reference frames, relative velocity, CM frame), which belongs to Lesson 27 and the DD.2 segments, and Section 15.4 onwards.

## Licensing
- Segment pages and the Week 9 page carry the Creative Commons licence; the page uses CC BY-NC-SA 4.0 ✓.
- No "All rights reserved" or "Courtesy of" notice in the chapter PDF text or the transcripts (grep found none). No figures reused.
- The Lisa Randall quotation (LHC superlatives, *Knocking on Heaven's Door*) that opens Chapter 15 is not reused in any form ✓.
- No verbatim copying found; only short standard phrases ("internal forces cancel in pairs", "deformations ... irreversible", "chemicals that exploded" as a paraphrase of the video's image). Example 15.2 and the 26.3 derivation are symbolic; the page's numerical car and bullet example is original.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.01 Lecture 27: the Week 9 segment list has 27.2 "Relative velocity in 1D", 27.3 "Kinetic energy and momentum equation" and 27.6 "2D collisions", so "solved with relative velocities, and collisions in two dimensions" is fair ✓. The page's "The next lesson shows a quicker way" matches the end of 26.2.
- leadsTo Ferreras 2.6: the syllabus entry is "Gravitational lensing" and the 2.6 page weak-lensing-and-machos.mdx covers the Bullet Cluster (gas slowed, bow shock, lensing mass with the galaxies, collisionless dark matter) ✓. The callout's physics (gas collides inelastically and heats; galaxies and dark matter pass through; lensing mass and X-ray gas separated) is correct, apart from row 4.
- Symbols scoped to "types-of-collision" in data/symbols.json (e, g, h, m_1, m_2, K, K_i, K_f, K_sys, v_1,i, v_2,i, v_1,f, v_2,f, v_f, v_1x,i, v_2x,i, v_1x,f, v_2x,f, v_x,f): every meaning fits its use on the page; e as coefficient of restitution matches 15.3; m_1/m_2 and v_f cover both parts of the worked example. Units are right. No problem found. content:check reported no symbol error for this page (only "no review file yet").
- Prerequisites conservation-of-momentum (Lesson 16) and energy-conservation (Lesson 24) exist; the opening link resolves to an existing slug. No em dashes on the page.

## Resolution (2026-11-16, by the page author)

- **Error 1:** Section 15.1 is now cited to p. 15-1.
- **Warning 1:** the 26.2 sentence cites pp. 1–2.
- **Warning 2:** "loses the most kinetic energy" now carries the qualifier (for given masses and initial velocities, with momentum conserved), also in flashcard 2.
- **Warning 3:** the callout no longer says the gas glows more strongly; it says the gas is heated, forms a shock and lags behind.
- Info: the callout gives the 2006 date of the lensing map; the bullet example says why horizontal momentum is conserved; `pendulum-height` now cites the notes. The other info items are left as they are.
