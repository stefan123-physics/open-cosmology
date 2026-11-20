---
page: content/year-0/hs-2/what-is-a-force.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-02 (read; footer "released under the terms of a Creative Commons Attribution License"; listed CCBY in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-10/skills-for-science/01-skills-for-science-03 (read; CC BY footer; listed CCBY in docs/siyavula-licences.tsv)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter7/ (read, PDF mit8_01scs22_chapter7.pdf; no "rights reserved", "courtesy" or "excluded" notice)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read, PDF mit8_01scs22_chapter8.pdf; no "rights reserved", "courtesy" or "excluded" notice)
verdict: needs-changes
---

# Review: What is a force? (High School lesson 2.1)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Worked example "A sledge pulled by two ropes", step "Size and direction"; the vector-diagram caption; "Balanced and unbalanced forces" (third child) | Not from a source. Recomputed without early rounding: F_x = 227.87 N, F_y = −13.742 N, angle = tan⁻¹(13.742/227.87) = 3.451°, which is **3.5°** to two significant figures | 3.4°, from the already rounded 13.7/228 (3.439°). This goes against lesson 0.3 ("round only at the end", flashcard "Keep extra digits in the intermediate steps"). The calcs entry `sledge-angle` uses the rounded inputs, so `calc:test` does not catch it | Give 3.5° in all three places (or "about 3.4° to 3.5°" if you want to show the effect of rounding), and compute `sledge-angle` and `sledge-balance` in the calcs file from the unrounded components |
| 2 | error | "Balanced and unbalanced forces", paragraph 3: "the engine's push just cancels friction and drag" | Siyavula 2.2 (friction section): for a car at constant velocity the force at the wheels is static friction between road and tyres. Lessons 2.3 (quiz 2: "the forward push of the road on the tyres") and 2.4 ("the tyres push backwards on the road, and the road pushes the car forwards") say the same | The forward force on the car is called "the engine's push". The engine is part of the car, so it cannot be an external force on it. The page also says "friction" for the backward force, although the road's friction on the tyres is what pushes the car forwards | For example: "the forward push of the road on the driving wheels just cancels drag and rolling resistance" (or "...cancels the backward forces of the air and the road"). This matches 2.3 and 2.4 |
| 3 | warning | Callout "Towards cosmology": "two nuclear forces that act only over distances about the size of an atomic nucleus" | No cited source covers the four interactions. MIT 8.01SC Sec. 8.2 talks about looking for fundamental forces but does not list them | The strong force's range (about 10⁻¹⁵ m) matches the claim. The weak force acts over about 10⁻¹⁸ m, roughly a thousand times less than a nucleus. The rest of the callout is standard and correct: four interactions; the electric force is about 10³⁶ times stronger than gravity between two protons; charges nearly cancel in bulk matter; Newtonian gravity only attracts | Write "only over distances no larger than an atomic nucleus" (or "the size of a nucleus or smaller"). The claim is standard textbook physics, so it can stay unsourced, but a short "(lesson 7.x)" pointer to where Block 7 covers nuclear forces would help |
| 4 | warning | Section "Weight": symbol $F_g$ | MIT Eq. (8.2.2) and Siyavula use $F_g$ | Lesson 2.3 written alongside this one renames weight $\vec W = m\vec g$ ("written there as F_g = m g"). A beginner reading 2.1 and then 2.3 sees two symbols for the same force with no explanation | Use one symbol across the block. Either use $F_g$ in 2.3, or have 2.1 say "also written $W$" (2.1 is where weight is introduced) |
| 5 | warning | Quiz 5 (skydiver with open parachute, constant speed, balanced forces) | — | Same situation and answer as lesson 2.2's quiz 1 ("A parachutist with an open parachute falls straight down at a steady 5.0 m/s…") and 2.2's worked example (parachutist, 780 N) | Replace one of them, for example in 2.1 with a lamp hanging from a ceiling, or a puck sliding on ice at constant velocity |
| 6 | warning | "Kinds of force", last paragraph: "The normal force and friction are, underneath, electric forces between atoms (MIT 8.01SC notes, Sec. 8.3.1)" | MIT Sec. 8.3.1 explains only the normal (pushing) part through electrons repelling. Friction appears there as the tangential part of the same contact force, with no atomic explanation. Sec. 8.2 links spring forces to Coulomb's law | Friction is attributed to the cited section as an electric force | The physics is correct and standard. Either cite Sec. 8.3.1 for the normal force only, or reword to "the normal force (and, at bottom, friction too)" so it does not read as MIT's claim |
| 7 | info | "Kinds of force", contact force bullets | MIT Sec. 8.3.1: "the atoms … are in contact with each other. If you press harder … The electrons in the atoms begin to repel" | "the atoms of your hand never quite touch the atoms of the table" | The physics is the same, said the other way round. No change needed |
| 8 | info | Section "Free-body diagrams" | Siyavula gives the "equal forces get equal arrows" rule for force diagrams. For free-body diagrams Siyavula draws arrows "pointing away from the dot"; MIT 8.4.1 draws them "at the point" | The page combines both into one set of rules for free-body diagrams | Fine |

## Formulas and citations
- `1 N = 1 kg·m/s²`, cite `si-units` at "1.3, Combinations of SI base units": correct. Table 1.2 of the Grade 10 page gives "kg·m·s⁻²: N (Newton)". The page writes it as kg·m/s², which is the same thing.
- `F_g = m g`, cite reading2 at "Sec. 8.2.3, Eq. (8.2.2)": correct. MIT writes $F^G_{\text{earth,object}} = m g$ with g "a positive constant", and gives 9.80345 N·kg⁻¹, which supports the N/kg form. Note that MIT deliberately avoids the word "weight" (Sec. 8.3.1, Example 8.2: "We shall always refer to this force as the gravitational force instead of 'weight'"). The page's use of "weight" follows Siyavula and the VWO level, which is fine.
- `F_net = F_1 + F_2 + ⋯`, cite reading2 at "Sec. 8.4.1, Eq. (8.4.1)": correct. MIT writes $\vec F = \vec F_1 + \vec F_2 + \cdots$, and Siyavula 2.2 says "the resultant force is simply the vector sum of all the forces". Adding the subscript "net" is the site's notation and fine.
- Components, cite reading2 at "Sec. 8.4.1, Eq. (8.4.3)": correct for the x part. MIT gives only $F_x = F_{1,x} + F_{2,x} + \cdots$; the y part follows the same pattern. Siyavula's "Finding the resultant force" sets out the same strategy (resolve, add along x and y, combine).
- "MIT 8.01SC notes, Sec. 7.1, Eq. 7.1.6": correct. Eq. (7.1.6) is $\vec F_T = \vec F_1 + \vec F_2$, and MIT says it is "a consequence of the experimental result", just as the page says ("an experimental fact").
- "force measured through the acceleration of a known mass (Sec. 7.1)": correct (Eq. 7.1.1, $F \equiv m_s a$).
- Spring balance "the larger the pull, the more the spring stretches (Sec. 8.1.1)": supported by Hooke's law in Sec. 8.1.1.
- Readings locations "8.2.4 (electric force)" and "8.3.1 (contact forces)" exist and support the uses made of them. Drag is not in any listed location (it is MIT Sec. 8.6). The one-line description of drag is standard, so this is only info.
- Statements Siyavula 2.2 supports: force as a vector with symbol $\vec F$; the newton named after Newton; contact and non-contact forces with the same three non-contact examples (Earth–Moon, proton–electron, magnet–paper clip); the normal force always perpendicular to the surface; friction parallel to the surface and the reason a sliding box stops; tension in ropes; all forces on the same object; a negative resultant points the other way; balanced forces give a resultant of zero.

## Arithmetic and answer checks
Every number was recomputed independently (Python):
- Apple 0.10 × 9.81 = 0.981 N ✓; bottle 1.5 × 9.81 = 14.7 ≈ 15 N ✓; potatoes 2.5 × 9.81 = 24.525 → 24.5 N, ≈ 25 N ✓; sugar 0.40 × 9.81 = 3.924 → 3.92 N, 3.9 N ✓; half kilogram 4.905 → 4.9 N ✓; book 1.2 × 9.81 = 11.77 → 11.8 N ✓; crate 25.0 × 9.81 = 245.25 → 245 N ✓.
- Crate +120 − 80 = +40 N ✓; vertical 0 ✓. Tug of war 760 − 820 = −60 N ✓.
- Sledge: 150 cos 25° = 135.95 → 136 ✓; 150 sin 25° = 63.39 → 63.4 ✓; 120 cos 40° = 91.93 → 91.9 ✓; 120 sin 40° = 77.13 → 77.1 ✓; F_x = 227.87 → 228 ✓; F_y = −13.74 → −13.7 ✓; |F| = 228.29 → 228 ✓; angle 3.451° → **3.5°, page 3.4° ✗** (finding 1). Sum of the pulls 270 ✓.
- Diagram scales: book ±1.18 squares at 10 N per square ✓; crate 2.45, 1.2, 0.8 at 100 N per square ✓; sledge (1.36, 0.634) and (0.919, −0.771) at 100 N per square ✓. Sledge caption: forward is to the right and left (+y) is up, so "3.4° to the right of forward (downwards in the drawing)" is consistent apart from the 3.4.
- Balancing pull: the opposite of (228, −13.7) is (−228, +13.7), which points backwards and to the left. "to the left of straight backwards" ✓ (angle: see finding 1).
- Quiz 1: answer 2 (gravity) ✓; the other choices are all contact forces ✓.
- Quiz 2: answer 1 (kg·m/s²) ✓; kg·m/s is momentum, kg·m²/s² the joule (named in lesson 0.2), kg/(m·s²) the pascal; all wrong ✓.
- Quiz 3: 45 − 18 − 12 = +15 N to the right ✓; 75 N (sizes added) and 15 N left are wrong ✓.
- Quiz 4: √(81 + 144) = √225 = 15 N ✓; 3, 21 and 108 N are wrong ✓.
- Quiz 5: balanced ✓; the explanation is true (finding 5 is about repetition only).
- Flashcards: all five are true. The free-body card ("arrow starting at the dot") matches the page and Siyavula.
- Calcs file `calcs/hs-2/what-is-a-force.yaml`: 30 entries, `npm run calc:test -- -k what-is-a-force` passes (30 passed). Every entry has `source: {cite, at}`. `origin` is `page-own` except `g` (`mit`, the standard value 9.80665 m/s² from Sec. 8.2.3, rounded): honest. Entries citing `mit` mean the page's main source (Siyavula 2.2) at existing subsections ("Force diagrams", "Finding the resultant force") ✓. Every number on the page is covered, except the diagram coordinates, which are derived from covered entries. `sledge-angle` and `sledge-balance` start from rounded inputs (finding 1).

## Only earlier terms
- Defined earlier and used correctly: newton and joule (0.2), rounding (0.3), sin, cos, tan⁻¹ and Pythagoras (0.7), vector, magnitude, components, resultant and head to tail (0.8), velocity (1.2), acceleration (1.4), g = 9.81 m/s² and the ball at the top of its flight (1.7). The prerequisites list (units-and-si, introducing-vectors, acceleration, free-fall) reaches all of these, with trigonometry through introducing-vectors.
- Introduced on this page: force, contact and non-contact, applied force, normal force, friction, tension, drag, weight, spring balance, free-body diagram, resultant/net force, balanced and unbalanced.
- Forward pointers, all to lessons in the block list: 2.2, 2.3, 2.7, Block 6. Lessons 2.2 to 2.4 exist (same branch). 2.7 "Springs and Hooke's law" is planned (§4 row), so it counts as introduced there.
- info: "electron", "proton", "electric charge (positive and negative)" and "atomic nucleus" are used before Block 6/7 defines them. They were named earlier (proton and nucleus in 0.1 and 0.11, electron in 1.8, charged particles in 1.11), and the page points to Block 6. Acceptable at this level.
- The "Balanced and unbalanced forces" section states the content of the first law before lesson 2.2 and says so ("lessons 2.2 and 2.3 give a short answer"). Acceptable.

## Coverage
- §4 row 2.1 "What is a force?", PhET forces-and-motion-basics: covered. The page has force as a push or pull and a vector, the newton, contact and non-contact forces, weight and mass, measuring forces, free-body diagrams, resultant force (along a line and with components), and balanced and unbalanced forces. That is a full VWO introduction.
- Siyavula 2.2 also has coefficients of friction, static and kinetic friction, and gravity components on an incline. These belong to the planned 2.6 and 2.8, so leaving them out is correct.
- The PhET sim is embedded, and the "Try it" text matches its screens (Net Force tug of war with the cart, pushing objects, friction).

## Where this leads
- `leadsTo` 8.01 lecture 4 (`content/year-1/8.01/newtons-laws.mdx`, "Newton's laws of motion"), as in the §4 row ✓. 8.01 lecture 6 (`contact-forces.mdx`, "Contact forces: the normal force and friction") is an extra target on the same topic ✓.
- `towards: false` is correct: 2.1 is not the block's last lesson.
- The cosmology callout's claim that 8.286 builds on Newtonian gravity acting on a uniform expanding sphere matches the site's 8.286 `homogeneous-expansion` lesson. Nuclear range: finding 3.

## Licensing and AI terms
- No copied sentences. The closest wordings: Siyavula "all the forces must be acting on the same object" against the page's "All the forces must act on the same object" (a short standard phrase, fine), and Siyavula "Why does a box sliding on a surface eventually come to a stop? … friction" against the page's "It is why a sliding box comes to a stop" (fine).
- The three non-contact examples (Earth–Moon, proton–electron, magnet–paper clip) are Siyavula's own examples, reworded. CC BY allows this with the attribution the page gives (info).
- Worked examples and quiz items are original. Siyavula uses 4 N and 6 N on a box, a car and trailer, a shopping trolley (75 N/20 N) and a donkey cart; MIT Example 7.1 uses two ropes on a post (70î + 20ĵ N). The sledge with two ropes is similar in idea to MIT 7.1 but has its own situation and numbers (info).
- All diagrams are site-generated VectorDiagrams. No Siyavula logo, and "Everything Science" is not used as branding. The MIT chapters carry no excluded or all-rights-reserved material. No NASA or ESO material. No forbidden source is cited or used. The CvTE syllabus was not opened.

## Notes
- Both MIT PDFs are the Spring 2022 printing (`mit8_01scs22_…`) hosted in the Fall 2016 8.01SC course. Lesson 2.4 says so in its reading title ("PDF printed for 8.01, Spring 2022"); 2.1 does not. Use one style across the block (info).
- Lesson 2.3 introduces friction again ("a force of the ground that opposes sliding, lesson 2.6") and tension ("Lesson 2.5 calls the pull of a rope its tension") even though 2.1 already defines both. This is a finding for 2.3's review, noted here for consistency. Otherwise the definitions of force, newton, net/resultant force and free-body diagram in 2.1 match 2.2 to 2.4.
- I did not run `content:check` (symbols, glossary, label layout). Only `calc:test` for this page was run.

## Resolution (2026-11-20, by the page author)
1. The sledge angle is now 3.5° in the worked example (computed as tan⁻¹(13.74/227.9), with a short note that the rounded 13.7/228 would give 3.4°, pointing to lesson 0.3), in the vector-diagram caption and in the "third child" sentence. Calcs: `sledge-angle` and `sledge-balance` now compute from the unrounded components; new entries `sledge-balance-angle`, `sledge-angle-caption` (both 3.5°, unrounded) and `sledge-angle-rounded` (3.4° from the rounded values, for the note). `calc:test` passes (33).
2. "the engine's push just cancels friction and drag" is now "the forward push of the road on the driving wheels just cancels the backward forces of the air and the road", matching Siyavula 2.2 and lessons 2.3 and 2.4.
3. Callout: "only over distances no larger than an atomic nucleus".
4. Kept $F_g$ (lesson 2.3 is being changed to $F_g$ as well) and added in "Weight": "Some books write it as $W$ instead of $F_g$; this course uses $F_g$." A page-scoped meaning for W was handed to the coordinator (scratchpad sym-fix-what-is-a-force.json).
5. Quiz 5 kept: lesson 2.2 is replacing its own duplicate parachutist question instead.
6. Reworded: "The normal force is, underneath, an electric force between atoms (MIT 8.01SC notes, Sec. 8.3.1), and so, at bottom, is friction." The citation now covers only the normal force; friction's electric origin is stated as standard knowledge.
7. No change needed (info).
8. No change needed (info).
