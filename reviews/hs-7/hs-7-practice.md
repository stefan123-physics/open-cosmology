---
page: content/year-0/hs-7/hs-7-practice.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/09484768966cc14934e8d96a5aa0d8ac_Hz7ouec7dKo.pdf (read, local PDF: p. 4 gray and sievert, p. 7 betas and gammas weighting 1; no background figure in this transcript)
  - https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/c61eb2dc2ab817d8dc4f522044ae3c80_kzOFhSJFihI.pdf (read, local PDF: p. 7 "a couple of millisieverts a year of dose just from background")
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html (read: mass 1,988,400 × 10²⁴ kg, volumetric mean radius 695,700 km, luminosity 382.8 × 10²⁴ J/s, last updated 9 May 2024)
  - MIT 8.02T Ch. 3 Eq. (3.3.5); 8.044 L15 slide 15; 8.04 L21–22 notes eq. (2.31); 8.286 L3 pp. 3–5 and p. 19; 8.902 L8 p. 50; 22.02 Ch. 1 Secs. 1.1.1 and 1.1.3; 22.01 L8 pp. 1–2, L10 pp. 23–24, L13 p. 1; 8.286 L17 pp. 18–19; 8.286 L5 p. 6; 8.901 PS2 Problem 1(c); COBE FIRAS overview (not re-read: identical locators to the reviewed Block 7 lessons 7.1 to 7.11, checked in their reviews)
  - Siyavula Gr 12 12.2 and 12.3, Gr 10 11.5 and 4.3 (not re-read, same sections as the reviewed lessons; all four URLs are CCBY rows in docs/siyavula-licences.tsv, lines 521, 522, 277, 356)
verdict: needs-changes
---

# Review: Practice set: atoms and radiation

All 49 answer boxes agree with an independent blind solve (below). No wrong physics and no wrong number. Points add up to 130. One unsupported citation (the background dose in 10(d)) makes the verdict needs-changes. The rest are care points in Problem 10, two citation details, a missing calcs entry and wording.

## Blind solve

Solved from the statements only (scratchpad file `hs-7-practice-blind.md`, written before the page or calcs file was opened). My answer, then the page's:

- p1-a 6.4e-13 J | 6.4e-13: agree
- p1-b 2.09e-14 m | 2.09e-14: agree
- p1-c 2kZe²/E_k | 2*k*Z*e^2/E: agree
- p1-d grows 79/29 = 2.72 times | choice 2 "Grows about 2.7 times": agree
- p2-a 2.0 μm | 2.0: agree
- p2-b 251 kW | 251: agree
- p2-c 0.622 eV | 0.622: agree
- p2-d a sixteenth | choice 3: agree
- p3-a 6.67e14 Hz | 6.67e14: agree
- p3-b 6.62e-34 J s | 6.62e-34: agree
- p3-c 2.30 eV | 2.30: agree
- p3-d 540 nm | 540: agree
- p3-e same V_s, more electrons per second | choice 1: agree
- p4-a 6 | 6: agree
- p4-b 488 nm (487.5) | 488: agree
- p4-c 97.5 nm | 97.5: agree
- p4-d 13.6(1/4 − 1/n²) | same: agree
- p5-a absorption spectrum | choice 2: agree
- p5-b 49.4 km/s | 49.4: agree
- p5-c 656.41 nm | 656.41: agree
- p5-d 8.15e9 m | 8.15e9: agree
- p6-a 2500 K | 2500: agree
- p6-b 2.21e6 W/m² | 2.21e6: agree
- p6-c 3.70e10 m | 3.70e10: agree
- p6-d (T₂/T₁)² | (T2/T1)^2: agree
- p6-e upper right, with the giants | choice 1: agree
- p7-a 30 | 30: agree
- p7-b 4.59 fm | 4.59: agree
- p7-c 3.73 | 3.73: agree
- p7-d 1.68e57 | 1.68e57: agree
- p7-e 14.3 km | 14.3: agree
- p8-a radium-228 | choice 1: agree
- p8-b 6 | 6: agree
- p8-c 4 | 4: agree
- p8-d Z₂ − Z₁ + (A₁ − A₂)/2 | (A1 − A2)/2 − Z1 + Z2: agree
- p9-a 50 MBq | 50: agree
- p9-b 1.00e-6 s⁻¹ | 1.00e-6: agree
- p9-c 3.99e14 | 3.99e14: agree
- p9-d 69.2 days | 69.2: agree
- p10-a 25 Gy | 25: agree
- p10-b 25 Sv | 25: agree
- p10-c 1.92 μSv per hour | 1.92: agree
- p10-d 15.4 μSv | 15.4: agree
- p10-e none: irradiated, not contaminated | choice 3: agree, but see the Problem 10 section (my blind note: the answer needs an assumption the statement does not make)
- p11-a 1.06 mm | 1.06: agree
- p11-b 1.17e-3 eV | 1.17e-3: agree
- p11-c 1100 | 1100: agree
- p11-d T_then/(1 + z) | Tthen/(1 + z): agree
- p11-e 1.47e12 | 1.47e12: agree

Ambiguities noted while solving blind: 10(c) does not say to treat the patient as a small source; 10(e) depends on whether any iodine reached the nurse; 4(a) is lesson 7.4's own n = 4 example; Problem 5 follows the plan of lesson 7.5's worked example. Everything else could be solved from the statement and the Block 7 lessons, plus v = 2πr/T (lesson 1.10) and logarithms (lesson 0.9), both earlier High School lessons.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | 10(d) check, "A natural background of about 2 mSv a year"; calcs `hs7p-p10-d-background` cites `reading9` | 22.01 Lecture 30 (reading9) has no background figure (checked in the transcript). Lecture 31 transcript p. 7 says "a couple of millisieverts a year of dose just from background"; lesson 7.10 cites it as its reading 2 | No citation in the text; calcs names reading9 (Lecture 30) | Add the Lecture 31 transcript as reading13 (location "p. 7: a couple of millisieverts a year from background"), write "(reading 13, p. 7)" after the 2 mSv, and point the calcs entry at reading13 |
| 2 | warning | 9(a) and 9(d) `<Formula>`, `at="transcript p. 24"` | p. 24 gives N = N₀e^(−λt) and t½ = ln 2/λ, not the (½)^(t/t½) form or its logarithm | "transcript p. 24" | As in lesson 7.9: `at="follows from transcript p. 24"` for both (9(d) also "(our own step)") |
| 3 | info | 4(b) check | Own computation: 487.5 nm is 0.29% from 486.1 nm; the 488 nm shown is 0.39% from it | "488 nm … lands within 0.3% of it" | "The unrounded result, 487.5 nm, lies within 0.3% of it." The claim that the gap comes from the rounded constants is right: with exact h, e and c, 13.6 eV × 3/16 gives 486.3 nm (vacuum wavelength) |

## Formulas and citations
- Every `<Formula>` cites a reading or reference with a locator. The locators match the reviewed lessons word for word: (3.3.5) as in 7.1; slide 15 as in 7.2 and 7.6; eq. (2.31) as in 7.4; p. 50 above eq. (226) as in 7.6 and 7.11; Secs. 1.1.1 and 1.1.3 as in 7.7; transcript pp. 1–2 and p. 2 as in 7.8; pp. 23–24 as in 7.9; Lecture 17 p. 18 with Lecture 5 p. 6 as in 7.11; Problem 1(c) as in 7.2. I did not re-read those sources; their lesson reviews checked them.
- Lecture 30 p. 4 (gray and sievert) and p. 7 (weighting factor 1 for X-rays, gammas and betas): confirmed in the downloaded transcript.
- The "our own step" formulas (1(b), 1(c), 3(b), 4(d), 6(d), 8(d), 11(d)) each name the formula they are built from. `cite="mit"` on hf = E_upper − E_lower points to the set's `source.url`, Siyavula 12.3: correct.
- `nasaSun` (writer's open point): the mass of 1 988 400 × 10²⁴ kg is exactly what the NASA Sun Fact Sheet says (read today; the page was last updated 9 May 2024). The radius and luminosity also match. No correction is needed. **Warning:** the number this mass supports, "about 1.4 times the Sun's mass" in 7(d) (2.8e30/1.9884e30 = 1.41), has no calcs entry. Add one (source nasaSun).
- 5(d) uses v = 2πr/T "from lesson 1.10" in the prose. Lesson 1.10 is `content/year-0/hs-1/circular-motion.mdx`, an earlier High School lesson, so it needs no `<Formula>` here.
- 486.10 vs 486.1 nm (writer's open point): Problem 5 gives 486.10 nm as data, and 4(b) compares with "486.1 nm (lesson 7.5)". These are consistent. The only issue is finding 3.

## Arithmetic and answer checks
- `npm run calc:test`: 11066 passed. `content:check`: 0 errors; the only warning for this page is "no review file yet". Every `calc=` id on the page exists in the calcs file.
- I recomputed every number in the solutions and checks my own way, and all agree. For example: 1(b) 5000 times smaller than an atom (4785); 2(c) a 700 nm photon has 1.78 eV; 4(c) the six lines 1880, 488, 658, 122, 103 and 97.5 nm; 4(d) limit 366 nm; 5(d) 11.7 solar radii; 6(b) the Sun radiates 29 times more per m²; 7(e) density 2.3 × 10¹⁷ kg/m³ (as in lesson 7.7, line 203); 9(c) 8.7 × 10⁻¹¹ kg; 10(d) 5.5 μSv a day, 2.8 days; 11(b) 1.29 eV at 967 nm; 11(e) 4.59 × 10⁶ and 3.13 × 10⁻⁶ W/m².
- Points: 11 + 11 + 13 + 12 + 11 + 13 + 12 + 11 + 11 + 12 + 13 = 130. Each exercise's parts add up to its total.
- Tolerances: the 3% on every decimal box accepts correctly rounded answers by any reasonable route. I checked hc = 1240 eV nm, which gives 486.3, 97.25 and 0.620, all accepted. p5-c's absolute 0.02 nm accepts 656.40 to 656.43 and rejects the "same 0.08 nm shift" mistake (656.38): good. The integer boxes (p4-a, p7-a, p8-b, p8-c) use 0.1. **Info:** p11-c accepts 1101 (the value of 1 + z) as 1100. That cannot be avoided at 3% and does no harm.
- The formula boxes p1-c, p4-d, p6-d, p8-d and p11-d equal my formulas by value. Their `vars` keep them finite and physical (n ≥ 3, positive temperatures, z ≥ 0.1, E > 0). Every `mistakes` entry differs from the answer over these ranges, and each hint is true of its wrong formula.
- Choice keys: p1-d 2, p2-d 3, p3-e 1, p5-a 2, p6-e 1, p8-a 1, p10-e 3. The key is not always first, and the correct option is not always the longest (in p3-e it is one character shorter than the longest). Every other option is wrong.
- No hint gives a result away. The second hint of 1(c) gives the route (r = kQq/E_k with Q = Ze and q = 2e), as the hs-6 set does for formula parts: acceptable.

## Problem 10 (health statements)
- 10(a) check: "the dose is aimed at one organ, and the rest of the body gets far less" is true and careful. **Warning:** some students know that a few sievert to the whole body can kill, so 25 Sv may alarm them. Add one sentence, for example: "Spread over the whole body, such a dose would be deadly; here it is given on purpose, under a doctor's control, to one small gland, to destroy overactive or cancerous thyroid tissue." (Info, optional: for doses this large, doctors usually speak in gray, because the sievert is meant for the risk of small doses.)
- 10(c) **warning:** the inverse square law holds for a small source, and 1 m from a person it is only an approximation. Add "Treat the patient as a small source of gamma rays" to the statement (the hint already says "small source").
- 10(e) **warning:** the solution says "No iodine-131 got onto or into the nurse", but the statement does not say this. With iodine-131 patients, contamination through sweat, saliva or urine is a real concern, which is why hospitals have rules for them. Add to the statement, for example: "The nurse never touches the patient or anything the patient has used." Optionally add one sentence to the solution saying that this is what those hospital rules are for.
- 10(e) "The patient ... gives out radiation for some weeks": correct (8-day half-life, plus what the body gets rid of).
- The background comparison in 10(d) (three days' worth) is careful and correct, apart from its citation (finding 1).
- No statement calls any dose "safe" or "harmless". There is no E = mc² anywhere on the page.

## Only earlier terms
- Every idea is taught in Block 7 or in an earlier High School lesson. From Block 7: Kirchhoff's spectra, the Doppler shift, the HR diagram, R = R₀A^(1/3), decay chains, λ = ln 2/t½, gray, sievert, w_R, the inverse square law, and 1 + z for the background. From earlier blocks: v = 2πr/T (lesson 1.10), logarithms (lesson 0.9) and electric potential energy (Block 6). Nothing is used before it is introduced.

## Coverage
- Each of the eleven lessons has its own problem: Problem N practises lesson 7.N (P1 lesson 7.1, P2 lesson 7.2, and so on to P11 lesson 7.11). The level is VWO, with one formula part per problem.

## Where this leads
- A practice set has no `leadsTo`, so this check does not apply.

## Licensing and AI terms
- No sentence is copied, and the problems are not the lessons' worked examples or quizzes, with two exceptions. **Info:** 4(a) repeats lesson 7.4's own example (n = 4, the six jumps listed at line 204). Problem 5 follows the plan of lesson 7.5's worked example "A star with an invisible partner" (a line swinging about its laboratory value, an orbiting companion), but with another line, other numbers and the new parts (c) and (d). Both are acceptable for practice. Starting Problem 4 from n = 5 (10 lines) would make 4(a) new, but 4(c) would have to be recomputed.
- Beyond the sections the lessons used, I did not compare the problems line by line with Siyavula's exercises. None of the statements resembles a Siyavula example quoted in the lesson reviews. This check is uncertain only to that extent.
- There are no figures and no Siyavula branding. NASA is cited by page title, with no insignia and no "according to NASA". No forbidden source is used. No em dashes (checked with grep).

## Notes
- **Info**, 2(d): "A modest cooling of the surface cuts the glow a lot": halving the absolute temperature (from 1450 K to 725 K) is not a modest cooling. Suggest "Halving the absolute temperature cuts the glow sixteenfold."

## Resolution (2026-11-20, by the page author)

1. (error) Fixed. Added the MIT 22.01 Lecture 31 transcript (the same URL lesson 7.10 uses) as reading13, location "p. 7: a couple of millisieverts a year from background" (checked in the local PDF: the sentence is on p. 7). 10(d) now reads "about 2 mSv a year (reading 13, p. 7)". Calcs hs7p-p10-d-background and hs7p-p10-d-days now cite reading13.
2. (warning) Fixed. 9(a) and 9(d) Formula locators are now "follows from transcript p. 24"; 9(d) adds "(our own step)".
3. (info) Fixed. 4(b) check: "The unrounded result, 487.5 nm, lies within 0.3% of it; the small gap comes mostly from the rounded constants." Calcs shown string updated.
Problem 10 notes:
- 10(a) and 10(b) (warning) Fixed. 10(a) check adds that spread over the whole body a dose this large would be deadly, and that here it is given on purpose, under a doctor's control, to one small gland, to destroy overactive or cancerous thyroid tissue. 10(b) check repeats that the 25 Sv is a planned dose to one gland and would kill if given to the whole body. No medical advice is given.
- 10(c) (warning) Fixed. The statement now says "Treat the patient as a small source of gamma rays."
- 10(e) (warning) Fixed. The statement now says "The nurse never touches the patient or anything the patient has used." The solution adds that iodine leaves the body in sweat, saliva and urine, which is what the hospital rules on touching such a patient and the things the patient has used are for.
Formulas and citations: 7(d) "about 1.4 times the Sun's mass" (warning) fixed. The calcs entry hs7p-p7-d-mass now uses the NASA mass 1.9884e30 kg (ratio 1.41), source nasaSun.
Licensing (info): 4(a) no longer repeats lesson 7.4's example. The atoms are now lifted to n = 5: 4(a) is 10 lines (4 + 3 + 2 + 1, 5 × 4/2); 4(b) keeps the 4 to 2 jump (488 nm, still a possible jump); 4(c) is now the 5 to 1 jump, E5 = -0.544 eV, 13.06 eV = 2.09e-18 J, 95.2 nm, and the check lists all ten wavelengths (4060, 1290, 435, 95.2, 1880, 488, 97.5, 658, 103, 122 nm) with three visible; 4(d) check adds n = 5 (2.86 eV, the violet line at 435 nm). Answer boxes, solutions and calcs (new entries p4-c-E5, p4-c-E-eV, p4-c-54, p4-c-53, p4-c-52, p4-c-41, p4-c-visible, p4-d-n5) updated. Problem 5 left as it is (the review calls it acceptable).
Notes (info), 2(d): Fixed: "So halving the absolute temperature cuts the glow sixteenfold."
Tolerance note on p11-c: no change (cannot be avoided, harmless).
Also: every unit written as plain text right after an inline number now sits in the maths ("$8.0\ \text{days}$", "$69.2\ \text{days}$" and so on, in Problems 5, 9 and 10), and the seven plain "years" in half-life.mdx likewise, with the calcs shown strings of both pages updated.
New symbol E_5 (energy of level 5 of hydrogen): meaning in the scratch file sym-hs-7-practice-fix.json for the coordinator to apply to data/symbols.json.

Checks: npm run calc:test -k hs-7: 524 passed. npm run test:answers: 65 passed. npm run content:check: no warnings for hs-7; one error for this page, the missing symbol E_5, which the sym fix file clears. The plain-unit scan of content/year-0/hs-7 finds nothing.
