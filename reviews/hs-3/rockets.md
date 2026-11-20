---
page: content/year-0/hs-3/rockets.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter12/ (read: PDF mit8_01scs22_chapter12.pdf, pdftotext, Secs. 12.1 and 12.3 in full)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter10/ (read: PDF, Secs. 10.3 and 10.7 checked)
  - https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/rocket-thrust/ (read)
  - https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/ideal-rocket-equation/ (read)
  - https://www.nasa.gov/learning-resources/for-kids-and-students/what-was-the-saturn-v-grades-5-8/ (read)
verdict: pass-with-notes
---

# Review: Rockets (Lesson 3.9)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "Thrust", derivation paragraph | Exactly, with the page's own convention (gas velocity v + Δv − u), the gas's velocity changes by Δv − u, and the rocket's impulse is Δm(u − Δv). MIT avoids this by letting Δt → 0 (Eq. 12.3.74). | "Its velocity has changed by −u, so its momentum by −u Δm", stated as exact | Say "by very nearly −u (the tiny Δv can be ignored for a short step)", or "about −u Δm". |
| 2 | info | "Adding up many steps", mass ratio | Eq. (12.3.86) defines R = m_r,i / m_r,d: initial mass over **dry** mass, all fuel burned. | "The ratio R = m_i/m_f is the mass ratio (MIT notes, Eq. (12.3.86))", for any final mass | Fine physics. Optionally add "MIT uses it for a burn that uses up all the fuel, so m_f is the empty (dry) mass". |
| 3 | info | Formula "Rocket climbing straight up" | Eq. (12.3.101) is v(t_f) = u ln R − g t_f at burn-out (R with the dry mass). The version for any time t during the burn is Eq. (12.3.100). | Δv = u ln(m_i/m_f) − g t "for a burn of time t starting from rest", cited to (12.3.101) only | Cite `at="Sec. 12.3.2, Eqs. (12.3.100) and (12.3.101)"`. |
| 4 | info | "Choosing the system": "The MIT notes warn about exactly this (Sec. 12.1)" | Sec. 12.1 says to be "very careful" with mass flow and recalls that a system's momentum was defined for a constant mass, so the transferred material must stay in the system. It does not say in so many words that F = Δp/Δt gives wrong answers for a body losing mass. Constant system mass is used at Eqs. (12.3.71) and (12.3.72). | "warn about exactly this … the trick is to choose a system whose mass does not change" | "The MIT notes warn that mass flow needs care (Sec. 12.1) and keep the mass of the system fixed (Sec. 12.3, Eqs. (12.3.71) and (12.3.72))". Supported in substance, so info only. |
| 5 | info | "Why rockets are mostly fuel", end: Saturn V ratios 24 and 64 | NASA gives launch mass and payload masses. Payload is not the rocket's final mass m_f. | The ratios come straight after the mass ratios 11 and 33 | Add half a sentence such as "(these compare the launch mass with the payload, not m_i/m_f of one burn; staging is what makes them possible)", so readers do not set 24 against 11. |
| 6 | info | Quiz 5 explanation | NASA Glenn: rockets carry their own oxidizer. | "Rockets carry their own oxygen" | "their own oxidizer (often liquid oxygen)", in step with the body text. |
| 7 | info | Worked example "How much of a rocket must be fuel?", Fuel fraction step | — | "payload" appears here first, without a gloss, and is not used in any earlier High School lesson | Add "(the cargo it carries, such as a satellite)" at first use. |

## Formulas and citations
- **Speed gained in one step**, Δv = uΔm/m, `cite="mit"`, Eqs. (12.3.70) to (12.3.74). Checked: MIT's (12.3.73) is p_sys(t+Δt) = m_r(t) v_r(t+Δt) − Δm_r u (vectors, Δm_r = −Δm_f < 0). In 1D with u along −x this is m(v+Δv) − uΔm, the page's "m v + m Δv − u Δm". The page's algebra (the four cancelling terms) is correct. The page uses Δm for the expelled gas mass (MIT's Δm_f), which is consistent and clear. The relation is exact for a finite step under the page's convention (gas speed u measured against the rocket's velocity after the step), so the six-burst example is a correct exact calculation.
- **Thrust**, F = (Δm/Δt) u, Eq. (12.3.79) "with the rate at which the fuel is thrown out": correct (MIT writes −(dm_r/dt)u = (dm_f/dt)u). "Not an extra force … forward recoil" is MIT's remark right after (12.3.79), paraphrased and attributed. The pressure-term remark matches NASA Glenn's F = ṁV_e + (p_e − p_0)A_e.
- **Acceleration from thrust and external forces**, Eq. (12.3.78): correct reading (F_ext,x − (dm_r/dt)u = m_r dv/dt).
- **Rocket equation**, Δv = u ln(m_i/m_f), Sec. 12.3.1, Eq. (12.3.84): correct. Eqs. (12.3.80) to (12.3.84) are the calculus steps, as the text says. "Ideal rocket equation" is NASA Glenn's name ("This equation is called the ideal rocket equation"), cited correctly. NASA writes m_f for the *full* mass; the page follows MIT's m_i/m_f, which is fine because it cites MIT for the formula.
- **Mass ratio needed**, m_i/m_f = e^{Δv/u}: Eq. (12.3.84) solved for the ratio; the cite is labelled as such. Correct.
- **Gravity**, Δv = u ln(m_i/m_f) − g t: see table row 3 (cite (12.3.100) too). "Burn the fuel as fast as possible" is MIT's conclusion after (12.3.101): confirmed.
- **MIT's ln > 1 slip**: confirmed. Chapter 12 PDF, page 12-22, first line: "We note ln(m_r,i / m_r,f) > 1. Therefore v_r,x,f > v_r,x,i". The page's bracketed correction ("larger than 0 is what is meant") is right and follows Writing rule 4.
- Other MIT claims checked: Newton's third law and the exhaust velocity "independent of the velocity of the rocket" (Sec. 12.3, opening paragraph): supported. Stages (paragraph after Eq. (12.3.87)): supported.
- reading1 (Ch. 10): Sec. 10.3 (system and surroundings, internal forces cancel by the third law) and Sec. 10.7 (constancy of momentum, isolated systems) exist and support the uses.
- NASA Glenn, Rocket Thrust: supports "rockets carry their own oxidizer, work in a vacuum" ("rockets can generate thrust in a vacuum where there is no other source of oxygen") and the pressure term.
- NASA, What Was the Saturn V?: 2.8 million kg fully fuelled (NASA says "weighed 2.8 million kilograms"; the page correctly says "mass"), 34.5 million N at launch, about 118,000 kg to Earth orbit, about 43,500 kg to the Moon, three stages for Apollo, first stage to about 68 km, second "almost into orbit", third into Earth orbit and then towards the Moon. All match. (NASA adds that the Skylab Saturn V had two stages; the page's "three stages" for the Apollo rocket is correct.)
- All formula notation is SI with g = 9.81 m/s²; 1D signs are explained ("direction of motion as positive", "Up is positive").

## Arithmetic and answer checks
All recomputed independently (Python), and `pytest tests/calc -k rockets`: 49 passed.
- Probe: 2400 × 2.0 / 1200 = 4.0 m/s; 2.0 × 2400 = 4800 kg·m/s; 1200/2.0 = 600. Correct.
- Lift-off: thrust 250 × 2800 = 7.0 × 10⁵ N; weight 5.0 × 10⁴ × 9.81 = 4.905 × 10⁵ ≈ 4.9 × 10⁵ N; net 2.095 × 10⁵ ≈ 2.1 × 10⁵ N; a = 4.19 ≈ 4.2 m/s². Correct.
- Saturn V: weight 2.8 × 10⁶ × 9.81 = 2.747 × 10⁷ ≈ 2.75 × 10⁷ N; thrust/weight = 1.256, "about a quarter more": correct; a = (3.45 − 2.747) × 10⁷ / 2.8 × 10⁶ = 2.51 ≈ 2.5 m/s². Correct. 2.8 × 10⁶/118 000 = 23.7 ≈ 24; 2.8 × 10⁶/43 500 = 64.4 ≈ 64. Correct.
- Six bursts: 200 + 222.2 + 250 + 285.7 + 333.3 + 400 = 1691.3 ≈ 1690 m/s. One burst: 1200 m/s. Limit: 2000 ln 2.5 = 1832.6 ≈ 1830 m/s; N = 60 equal bursts give 1817.7, N = 600 give 1831.1, so "approaches about 1830 from below" is right (each burst uses the larger mass before it).
- ln 2 = 0.693 ≈ 0.69.
- Orbit: 7.7/3.2 = 2.406; e^{2.406} = 11.09 ≈ 11; 1/11.09 = 0.090; fuel 91.0%. Check 3.2 ln 11.1 = 7.70. Correct.
- Plot: curve 3.2·log(R) (mathjs log is natural); points (11.1, 7.7) and (33, 11.2) lie on it (3.2 ln 33 = 11.19). Domain 1–35 and range 0–12 contain both points. Caption "about 11 … about 33" correct.
- Gravity loss: 9.81 × 120 = 1177 ≈ 1.2 × 10³ m/s. Escape: 11.2/3.2 = 3.5; e^{3.5} = 33.1 ≈ 33. Correct.
- Two stages: one stage 2.8 ln 10 = 6.45 ≈ 6.4 km/s; stage 1 2.8 ln(100/30) = 3.371 ≈ 3.37; stage 2 2.8 ln(23/3) = 5.703 ≈ 5.70; total 9.074 ≈ 9.1 km/s; masses 70 + 7 + 20 + 2 + 1 = 100 t; hardware 7 + 2 = 9 t matches the one-stage 9.0 t. Intermediate logs ln 10 = 2.303, ln(10/3) = 1.204, ln(23/3) = 2.037 are as shown.
- Quiz 1: answer 0 (constant total momentum, isolated system) correct; the other three choices are wrong.
- Quiz 2: 40 × 2500 = 1.0 × 10⁵ N, correct; 2500/40 = 62.5 ≈ 63; 40/2500 = 0.016; 2500 is a speed. Explanation true.
- Quiz 3: 2000 × 1.0/800 = 2.5 m/s, correct; 800/2000 = 0.40; 2000 × 1.0 × 800 = 1.6 × 10⁶. Explanation true.
- Quiz 4: 2.5 ln 4 = 3.466 ≈ 3.5 km/s, correct; 2.5 × 4 = 10; 2.5 log₁₀ 4 = 1.505 ≈ 1.5; 2.5 × 3 = 7.5. Explanation true.
- Quiz 5: answer 0 correct; the other choices are false (see row 6 for wording).
- Flashcards: all true. "Roughly nine-tenths fuel" follows from the 91% example (u = 3.2 km/s, no losses).
- Calcs coverage: every result on the page has an entry. Only intermediate values (ln 10 ≈ 2.30, 1.20, 2.04, the exponent 3.5) have no entry of their own; each is implied by an entry that passes (info).

## F = Δp/Δt and variable mass
- The page never applies F = Δp/Δt to a body whose mass changes. It warns against it ("Choosing the system", Summary). It uses the impulse–momentum theorem only for the fixed lump of gas Δm ("a fixed lump of mass Δm, so lesson 3.6 may be used for it"), and the third law to move that impulse to the rocket. The lift-off and Saturn V accelerations use a = (thrust + external forces)/m at one instant. That is MIT's Eq. (12.3.78), valid, and is not Δp/Δt of the rocket.
- No derivative, dp/dt or integral sign appears. The calculus is described in words ("the MIT notes do this adding with calculus") and linked to lesson 0.10 (area in thin strips).

## Only earlier terms
- Prerequisites `exponentials-and-logs` (0.9), `rates-of-change-and-area` (0.10), `relative-velocity` (1.9), `newtons-second-law` (2.3), `newtons-third-law` (2.4), `keplers-laws-and-orbits` (2.12), `what-is-momentum` (3.6), `momentum-is-conserved` (3.7) are all earlier lessons and exist. Lesson 3.11 (escape speed) is named only in the text, not as a prerequisite: correct.
- The lesson numbers quoted in the text match the course files: 2.4 is the third law and does explain rockets ("Walking, swimming and rockets"); 1.9 is relative velocity; 3.6 has F_net = Δp/Δt and the impulse–momentum theorem (its flashcard limits it to constant mass); 3.7 has system, internal/external forces and isolated system; 2.12 has 7.66 ≈ 7.7 km/s for the ISS and introduces escape speed 11.2 km/s; 0.9 has ln, e and the LN key; 0.10 has area under a graph in strips.
- e^{ln x} = x is not written out in 0.9, but it follows at once from 0.9's definition (y = log_b x ⇔ x = b^y). Acceptable.
- Defined on the page at first use: oxidizer, thrust, exhaust speed, mass ratio, stages, tonne ("100 t (100 000 kg)"). "Payload" is not glossed (row 7). "Denominator" appears in 0.x (rearranging-formulas). "Natural logarithm", "impulse–momentum theorem", "isolated" come from earlier lessons.

## Coverage
- §4 row 3.9: topic "Rockets", no PhET, leads to `8-01/rocket-equation`. The OpenStax source named there (CP 8.7) is ignored as instructed; the page cites none. Covered: why rockets work in space, choice of system, one-step Δv, thrust, lift-off condition, the rocket equation, mass ratio, gravity loss, staging. This is more than VWO needs (the logarithmic rocket equation is usually beyond VWO), but it is done without calculus and with Block 0 tools, which suits the site.
- Not covered and not needed at this level: the pressure term of thrust (mentioned and set aside), specific impulse, drag losses beyond a mention, constant-burn-rate v(t) (MIT Eq. 12.3.91).
- The page uses no Siyavula source. Siyavula Gr 10–12 has no rocket-propulsion section that I know of, so MIT and NASA are reasonable choices (not verified on Siyavula).

## Where this leads
- `leadsTo: 8.01 lecture 19`: 8.01's syllabus lecture 19 is "Continuous Mass Transfer", and `content/year-1/8.01/rocket-equation.mdx` (lecture 19) covers the rocket equation, thrust and the gravity case. The `why` text describes it accurately.
- `towards: false`: correct, because 3.9 is not the block's last lesson (3.12 is).

## Licensing and AI terms
- No copied sentences. The closest paraphrases are attributed to MIT and reworded: "The MIT notes stress that thrust is not an extra force from outside: it is the forward recoil of the rocket as it throws its fuel out" (MIT: "Note that this is not an extra force but the result of the forward recoil due to the ejection of the fuel"); "the second carried it almost into orbit" (NASA: "The second stage carried it from there almost into orbit"), a short factual phrase, acceptable.
- Worked examples are the page's own. MIT's Examples 12.4 and 12.5 (2.81 × 10⁷ kg, u = 3000 m/s, 6250 / 3840 / 3340 / 7190 m/s) are not reused. The two-stage comparison follows the idea of Example 12.5 with different numbers and masses. The quiz is original.
- Figures: only one generated `<Plot>`, computed from the formula. MIT's Figures 12.14 and 12.15 are not used. Chapters 10 and 12 have no "All rights reserved" or "Courtesy" notice (grep on the extracted text).
- NASA: cited by title ("NASA Glenn, Rocket Thrust", "NASA, What Was the Saturn V?"). There is no "according to NASA" phrasing and no insignia. "NASA's Saturn V" describes the rocket, not an endorsement. No ESO text is used.
- No forbidden source (OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs, paywalled articles) is cited or used. No Siyavula branding. No em dashes.

## Notes
- Downloads were kept in the scratch directory, not in the repo. No dev server or build was run; only the calcs tests for this page (`pytest -k rockets`).
- No errors found. Rows 1 and 3 are the most worth fixing.

## Resolution (2026-11-20, by the page author)
1. Thrust derivation now says the gas's velocity changes by "very nearly −u (strictly by Δv − u, but the tiny Δv of a short step can be ignored)", and the impulses are "about −u Δm" / "about +u Δm".
2. Added after the mass ratio: the notes use it for a burn that uses up all the fuel, so m_f is the empty (dry) mass.
3. Text and Formula `at` for the gravity case now cite Sec. 12.3.2, Eqs. (12.3.100) and (12.3.101); the calcs entry's `at` updated to match.
4. Reworded: "The MIT notes warn that mass flow needs care (Sec. 12.1) and keep the mass of the system fixed (Sec. 12.3, Eqs. (12.3.71) and (12.3.72))".
5. Added after the Saturn V ratios 24 and 64: they compare the launch mass with the payload, not m_i/m_f of one burn, and only staging makes them possible.
6. Quiz 5 explanation now says "their own oxidizer (often liquid oxygen)".
7. "payload" glossed at first use: "(the cargo it carries, such as a satellite)".
Checks: `pytest tests/calc -k rockets` 49 passed; `content:check` 0 errors, no warning for this page. Status set to reviewed.
