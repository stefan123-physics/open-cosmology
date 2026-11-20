---
page: content/year-0/hs-1/acceleration.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/motion-in-one-dimension/21-motion-in-one-dimension-04 (read; CC BY footer "All Siyavula textbook content made available on this site is released under the terms of a Creative Commons Attribution License"; listed CCBY in docs/siyavula-licences.tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter4.pdf (read; Sections 4.4, 4.4.1, 4.4.2, 4.5)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter5.pdf (read; Section 5.2)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/fe429f4326945aa8e12f2eaf56219446_MKPswx4hjec.pdf (read; transcript pp. 16-17)
verdict: pass-with-notes
---

# Review: Acceleration

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | Frontmatter `references.guth18`; callout "Towards cosmology" | Guth, Lecture 18 transcript p. 16: "the very important discovery originally made in 1998 ... that the universe is accelerating", two groups; p. 17: type Ia supernovae as standard candles, expected slowing down, found "speeding up" | Callout names "8.286, Lecture 18" in words, but no `<Formula>` uses `cite="guth18"`. References are only rendered when a Formula cites them (`lib/mdx.tsx`), so the reader never sees this reference and the callout's 1998 claim carries no visible citation | Either drop `guth18` from `references` (the claims are standard and correct, and the callout already names the lecture), or link the lecture in the callout text. As is, the reference is dead frontmatter. The transcript does support every claim in the callout (p. 16 for 1998 and two teams, p. 17 for supernovae and "expected slowing down") |
| 2 | warning | Section "How large are accelerations?", last paragraph | Standard values: crewed launches reach about 3 g (Shuttle about 3 g, Saturn V about 4 g); crashes reach tens of g | "many times $g$ is a crash or a rocket launch" | A rocket launch is "a few times g", not "many times". Write e.g. "a few times $g$ is a rocket launch, and tens of $g$ a crash" |
| 3 | warning | Formula "Acceleration of free fall", bullet and Summary | MIT 8.01SC Ch. 5 Sec. 5.2: g = 9.8 m·s⁻² (matches the page). Site convention in the reviewer brief and Block 5 lessons (the-pendulum, resonance, hs-5-practice): g = 9.81 m/s² | $g \approx 9.8\ \text{m/s}^2$ | Matches its cited source, so not wrong; but for consistency with the rest of the High School say "$g \approx 9.81\ \text{m/s}^2$, about 9.8" or make sure lesson 1.7 states which value the site uses. Update calcs `g` and `g-per-second` if changed |
| 4 | info | Average-acceleration formula | Siyavula 21.4 writes $\vec a_{av} = \Delta\vec v/\Delta t$ | $\vec a_\text{ave}$ (MIT's subscript, Eq. 4.3.24) and the expanded form $(\vec v_f - \vec v_i)/(t_f - t_i)$ | Fine: same physics; the expanded form uses the $v_i, v_f, t_i, t_f$ of Siyavula's Worked example 2 |
| 5 | info | Quiz 1 | Siyavula Exercise 21.4: "A bus accelerates uniformly from ... 15 m·s⁻¹ to ... 7 m·s⁻¹ in 4 seconds" | A bus speeding up from 4.0 to 16 m/s in 8.0 s | Same kind of object, different numbers and direction; not a copy. Optional: another vehicle |
| 6 | info | Calcs `car-kmh`, `car-a` | 21.4 has no km/h conversion | `source: {cite: mit, at: '21.4, Average acceleration ...'}` | The 1/3.6 factor comes from lesson 1.2 (and Siyavula 21.3). Honest enough because the entry says the numbers are the page's own; a more exact `at` would be "lesson 1.2 / 21.3" |

## Formulas and citations
- Average acceleration, `cite="mit"` at "21.4, Average acceleration": supported (Siyavula: $\vec a_{av} = \Delta\vec v/\Delta t$, "change in velocity ... divided by change in time"). Note that Siyavula's own wording "change in average velocity" and its magnitude line $a = \Delta\vec v/\Delta t$ are sloppy; the page correctly does not repeat them.
- Unit $1\ (\text{m/s})/\text{s} = 1\ \text{m/s}^2$, `cite="mit"` "(unit metre per second squared)": supported (Siyavula: unit name "metre per second squared", symbol m·s⁻²; MIT Sec. 4.4.1 says the same). The page writes m/s² instead of m·s⁻², the site's style.
- $v_f = v_i + a\,\Delta t$, `reading1` "Sec. 4.5, Eq. (4.4.2), with Δt for t": checked. Ch. 4 Sec. 4.5 prints $v(t) = v_0 + at$ as Eq. (4.4.2) (the chapter's equation numbers lag the section numbers by one; the page cites the printed number, correctly). The change of notation is stated in `at`.
- Instantaneous acceleration $a(t) = \lim_{\Delta t\to 0}[v(t+\Delta t) - v(t)]/\Delta t$, `reading1` "Sec. 4.4.2, Eq. (4.3.25)": checked, exact match (MIT also adds $= dv/dt$, which the page omits at this level; fine). MIT's statement that this is the slope of the tangent (Figure 4.7) supports the page's tangent sentence.
- $g \approx 9.8\ \text{m/s}^2$, `reading2` "Sec. 5.2 (value used in the projectile examples)": checked; Ch. 5 Sec. 5.2 states "g = 9.8 m·s⁻²" in the text and uses it in the examples. See finding 3.
- Claims checked against Siyavula 21.4: acceleration is a vector; it says nothing about how fast or which way the object moves (page: "Notice what acceleration does not tell you", rewritten); same signs speed up, opposite signs slow down (the page's table matches Siyavula's four cases); avoid "deceleration" for a negative acceleration (page explains why, in its own words); with constant acceleration the average and instantaneous accelerations are equal (Siyavula and MIT Sec. 4.5).
- Claims beyond the sources, checked as standard and correct: a change of direction at constant speed is an acceleration (forward to lesson 1.10); a ball at the top of its flight has zero velocity but non-zero acceleration; position–time graph a parabola under constant acceleration (lesson 1.6, whose page says so); charged particle in a uniform electric field follows a parabola (true; forward reference to Block 6, whose §4 rows do not list this explicitly, harmless).
- Callout: supported by Guth Lecture 18 pp. 16-17 (1998, two teams, type Ia supernovae, expected slowing, found speeding up). "Dark energy is still one of the big open questions" is standard. The 1998 result is dated in the text ("In 1998"), set against the earlier expectation ("For most of the twentieth century"), so it is marked as a later development; it predates Guth's 2013 lecture, which tells it. "The rate at which galaxies move apart is growing today" is correct for a given pair of galaxies ($\ddot a > 0$); the page does not claim that the Hubble parameter grows, which would be wrong. Correct.
- No forbidden source cited. The §4 row's OpenStax sources (P 3.1; CP 2.4) were replaced, as required.

## Arithmetic and answer checks
All recomputed by hand; `calcs/hs-1/acceleration.yaml` has 27 entries, all passing (`pytest tests -k hs-1/acceleration`: 27 passed).
- Tram: Δv = 15 − 3.0 = 12 m/s; 12/6.0 = 2.0 m/s²; sequence 3, 5, 7, 9, 11, 13, 15 (six steps of 2). Correct.
- Train: (−8.0 − (−20))/4.0 = 12/4.0 = +3.0 m/s²; with west positive (8 − 20)/4 = −3.0 m/s². Correct; slowing down is right (speed 20 to 8).
- Skateboarder: 1.5 + 0.80 × 5.0 = 5.5 m/s. Correct.
- Sprinter, v = 11t/(t + 1.3): v(2.0) = 22/3.3 = 6.667 m/s; average 3.33 m/s²; dv/dt = 11 × 1.3/(t + 1.3)² gives 14.3/1.69 = 8.46 ≈ 8.5 m/s² at t = 0 and 14.3/10.89 = 1.31 ≈ 1.3 m/s² at t = 2.0 s; v(0.10) = 1.1/1.4 = 0.786 m/s, average 7.86 ≈ 7.9 m/s². All correct. Model is realistic (top speed 11 m/s, start about 8.5 m/s²).
- Car: 100/3.6 = 27.78 m/s, /10 = 2.78 ≈ 2.8 m/s². Emergency stop (0 − 30)/4.0 = −7.5 m/s². Correct.
- Plots: tram line 3 + 2t matches the worked example and stays inside range 0–16 on 0–6 s (max 15); sprinter curve max 9.04 m/s at t = 6 within range 0–12.
- Quiz 1: (16 − 4.0)/8.0 = 1.5 m/s², choice 1 correct; distractors 0.67 (8/12, inverted), 2.0 (16/8), 12 (Δv only) all wrong. Explanation true.
- Quiz 2: v = −6.0, a = +2.0: moving left, slowing down; choice 2 correct; others wrong.
- Quiz 3: choice 1 correct (acceleration not zero; it is g, downwards); "points upwards" and the others wrong. Explanation true.
- Quiz 4: 3.0 + 2.5 × 4.0 = 13 m/s, choice 3 correct; 5.5, 7.5, 10 wrong. Explanation true.
- Quiz 5: (5.0 − 20)/5.0 = −3.0 m/s², choice 1 correct; explanation true.
- Flashcards: all five true. The "deceleration" card is correct.
- Calcs honesty: every entry has `source: {cite, at}`; page-own numbers are marked "(the numbers are the page's own)" and `origin: page-own`; `g` is `origin: mit`, `kind: fact`, at Sec. 5.2, which is right. The header line "All numbers are the page's own except g" is true. `plane-cruise` (250 m/s, a typical airliner cruise, about 900 km/h) is a page-own illustration, honestly marked. Small blemishes only (finding 6; `sprinter-v2` cites "Sec. 4.4.1" for a velocity value, harmless). Quiz 1 distractor 0.67 has no calcs entry (info).

## Only earlier terms
- Velocity, sign of a velocity, km/h to m/s: lesson 1.2 (prerequisite). Displacement, final minus initial: lesson 1.1 (via 1.2).
- Vector: lesson 0.8 (prerequisite). Slope, rise over run: lesson 0.9 (graphs-and-slope, earlier block). Tangent and the limit idea: lesson 0.10 (prerequisite) and lesson 1.3, which introduced the $\lim_{\Delta t\to 0}$ notation for velocity (prerequisite). Rearranging (multiplying both sides by Δt): lesson 0.4, cited by number; earlier block, not in `prerequisites` (fine).
- Function notation $v(t)$: explained on the page where used. "Velocity–time graph": defined on the page.
- Parabola: Block 0 lesson `quadratics-and-power-laws` (earlier block); used only in a forward pointer.
- "Charged particle", "uniform electric field", "dark energy", "supernovae": forward pointers or explained on the spot (supernovae glossed as "exploding stars"; dark energy named as the open question). Galaxies and the expansion: lesson 0.11.
- No term used before it is introduced.

## Coverage
- §4 row 1.4 "Acceleration": average acceleration, unit, vector and sign, speeding up and slowing down, constant acceleration with $v_f = v_i + a\Delta t$, instantaneous acceleration as the slope of the tangent, typical sizes. This covers Siyavula 21.4 fully and MIT Sec. 4.4–4.5 (first part) at VWO level.
- Left to later lessons, as planned: reading v–t graphs and area under them (1.5), the full equations of motion (1.6), free fall (1.7), centripetal acceleration (1.10). Acceleration–time graphs are not shown here; they belong to 1.5. Nothing missing that matters at this level.
- §4 lists no PhET sim for 1.4; none is used. Correct.

## Where this leads
- `leadsTo` 8.01 lecture 2 → `content/year-1/8.01/acceleration-1d.mdx` ("Acceleration in one dimension", lecture 2), matching §4's `8-01/acceleration-1d`. Same topic. Correct.
- `towards: false`: correct, this is not the block's last lesson (1.11 is).

## Licensing and AI terms
- Siyavula 21.4 page has the CC BY footer and is CCBY in docs/siyavula-licences.tsv. No Siyavula logo or "Everything Science" branding; the source title names Siyavula only as attribution.
- No sentence copied. Closest pair: page Summary "Avoid 'deceleration' for a negative acceleration" vs Siyavula "Avoid the use of the word deceleration to refer to a negative acceleration": a short standard phrase, and the body text explains it in its own words. Page "Notice what acceleration does **not** tell you. It says how the velocity changes, not how large the velocity is or which way the object is moving" vs Siyavula "Acceleration does not provide any information about the motion, but only about how the motion changes. It is not possible to tell how fast an object is moving or in which direction from the acceleration alone": same idea, rewritten.
- Worked examples (tram, westbound train, skateboarder, sprinter model) and quiz items are the page's own; Siyavula's examples (car 2→10→4 m/s; athlete; bus 15→7 m/s in 4 s; aeroplane 100→200→240 m/s) and MIT's (Example 4.3, $v = bt$; car and bus) are not reused (see finding 5).
- No figures copied: both graphs are generated `<Plot>`s from formulas; no images.
- MIT Ch. 4 and Ch. 5: `grep` for "rights reserved" / "courtesy" finds nothing; the Guth transcript is used for a claim only.
- No NASA or ESO material; no forbidden source (OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs) cited or used.

## Notes
- Siyavula's Worked example 2 itself contains an arithmetic slip (its working shows 10 m/s instead of Δv = 8 m/s over 8 s, and 4 m/s instead of Δv = −6 m/s over 6 s, though the results ±1 m/s² are right); the page does not depend on it, so no action needed.
- The page's choice of plain signed $v$ along a line follows lesson 1.2 (see that lesson's review, finding 3, on writing signed $v$ versus magnitude).
- "It is the third and last of the basic quantities of motion" is a fair simplification at this level (rate of change of acceleration is not needed anywhere in the High School).

## Resolution (2026-11-20, by the page author)
1. The callout now links the lecture in its text: "[8.286 Lecture 18](transcript PDF) (transcript pp. 16 to 17)", so the 1998 claim carries a visible citation. The `guth18` entry stays in `references` as the record of the same source.
2. "many times $g$ is a crash or a rocket launch" became "a few times $g$ is a rocket launch, and tens of $g$ is a crash".
3. Kept $g \approx 9.8$ m/s² as in the cited MIT Sec. 5.2, and added: "from there on the High School uses the slightly more precise value $g = 9.81$ m/s²" (lesson 1.7 uses 9.81). New calcs entry `g-site` (fact, marked as the site's convention, not in the source).
4. No change (same physics, as noted).
5. No change (numbers and direction differ from Siyavula's exercise).
6. `car-kmh` and `car-a` now say in `at` that the 1/3.6 factor is from lesson 1.2 (Siyavula 21.3), not 21.4.
