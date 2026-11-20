---
page: content/year-2/8.033/force-acceleration-interstellar-travel.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture11_dyn2/ (read: the slide PDF, 36 pages, deck titled "MIT Course 8.033, Fall 2006, Lecture 11", from a local copy; text layer extracted with pdftotext, and slides 2-16 (equations only in images) plus 19, 20, 23, 34 checked on rendered images, slide 4 also at 300 dpi)
  - No transcript exists for this lecture (slides only)
  - content/year-4/8.286/radiation-dominated-universe.mdx and content/year-4/8.286/temperature-and-decoupling.mdx (read, to check the cosmology callout and leadsTo)
  - content/year-2/8.033/atoms-photons-nuclei.mdx and content/year-2/8.033/_course.json (read, to check the leadsTo to 8.033 Lecture 13 and the lecture numbering)
  - calcs/8.033/force-acceleration-interstellar-travel.yaml (read; key entries recomputed independently)
verdict: needs-changes
---

# Review: Force, acceleration, accelerators and interstellar travel

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Interstellar travel, first paragraph | Slide 25 ("Current Status of Space Travel"): Galileo "swung by Jupiter and achieved a speed of 100,000 miles per hour"; it does not say this is the fastest spacecraft. | "The fastest spacecraft so far, Galileo swinging by Jupiter, reached about 100,000 miles per hour" | The claim is not on the slide and is false: Helios 2 (1976) already reached about 70 km/s (about 157,000 mph) heliocentric, and Parker Solar Probe reached about 190 km/s (about 430,000 mph) in 2024. Write "Slide 25 quotes Galileo, which reached about 100,000 miles per hour swinging by Jupiter" and, if wanted, add a dated later-development note on Parker Solar Probe. |
| 2 | warning | Bracket after the kinetic energy formula (slide 4) | Slide 4 writes the remainder as $O\left(\frac{u^4}{c}\right)$ (checked at 300 dpi: the superscript 4 sits on the $u$ in the numerator, inside the bracket) and the third expression as $m_0(\gamma - 1)$. | "The slide ... writes the correction as $O((u/c)^4)$" | The $c^2$ slip is described correctly. Describe the second slip as the slide shows it: "writes the correction as $O(u^4/c)$". The page's corrected $\frac38 m_0u^4/c^2$ is right. |
| 3 | warning | Worked example, step (b) | Slide 28: about $10^{137}$ kg of propellant for chemical rockets (500 s). | "$M_i/M_f \approx 10^{129}$: hopeless, of the same astronomical order as the slide's $10^{137}$ kg" | A mass ratio of $10^{129}$ (no units) and a propellant mass of $10^{137}$ kg are 8 orders of magnitude apart and only agree if the payload is about $10^8$ kg (or the slide included braking, which would square the ratio). Say instead "hopeless, like the slide's $10^{137}$ kg", or state the payload/assumption that makes them comparable. |
| 4 | warning | Callout "Accelerators as time machines" | (Page's own) | "The energy per particle in a collider is the typical energy of particles when the universe was hot enough, $kT$ of the same size." | The sentence is hard to parse. Suggest: "The energy per particle in a collider equals the typical thermal energy $kT$ of particles at the time when the universe was that hot." |
| 5 | warning | `leadsTo` (8.286 Lecture 16) and the callout link | The temperature as a function of time ($kT = 0.860\text{ MeV}/\sqrt{t}$) is in 8.286 Lecture 17 (`temperature-and-decoupling`). The Lecture 16 page `radiation-dominated-universe` gives $a \propto t^{1/2}$ and says the temperature comes in Lecture 17. | `why: "How hot the early universe was, and when, in the radiation era."` pointing at Lecture 16, and the callout links `radiation-dominated-universe` "when temperature and time were tied together". | Point the `leadsTo` (or add a second one) at 8.286 Lecture 17, and/or link `temperature-and-decoupling` from the callout. |
| 6 | info | Accelerators paragraph | Slide 20 is titled "Linear particle accelerator (Fermilab)" but the photo shows Fermilab's ring (the Tevatron). | "slide 20, Fermilab's ring" | The page corrects the slide title without saying so. Optional: "(the slide calls it a linear accelerator, but the photo shows the ring)". |
| 7 | info | Rocket limitation paragraph | Slide 28: "send one canister past Centauri Cluster within 900 years"; the numbers in brackets are given only as "(500 sec)" etc. | "pass Alpha Centauri"; numbers explained as specific impulse | Both are reasonable readings of the slide (there is no "Centauri Cluster"; seconds are the usual unit of specific impulse), but they are interpretations. Optional short bracket noting the slide's wording. |
| 8 | info | Antimatter paragraph | Slide 32: "Right now, antimatter is the most expensive substance on Earth. It costs about $62.5 trillion a gram". | "in 2006 antimatter cost about \$62.5 trillion per gram" | The slide is from 2006, but the figure appears to originate from a NASA statement of about 1999 (uncertain, not checked against a primary source). Safer: "the slides quoted about \$62.5 trillion per gram". |
| 9 | info | Acceleration and force, first sentence | Slide 7: A and the force 4-vector are "less useful than their 4-vector cousins X, U, P and K". | "less useful in relativity than momentum and energy" | Fine as a simplification. |
| 10 | info | Coverage of slide 34 | Slide 34 "Starship Propulsion": nuclear (H-bomb) powered, solar sail, interstellar ramjet. | Summarised under "the last slides (33-36)". | Optional: mention the H-bomb (pulse) propulsion idea, which no other part of the page names. |

Formulas checked against the slides (all correct, citations correct):
- Momentum 4-vector, slide 3 (the slide's middle term $= m(u_x, u_y, u_z, c)$ is left out, which is fine); $\beta = cp/E$, slide 3.
- Kinetic energy, slide 4 (the page's version is the corrected one, and says so).
- Rest mass invariant and $E = \sqrt{(m_0c^2)^2 + (cp)^2}$, slide 5 (correct; the slide's $p = \sqrt{E^2/c^2 - (m_0c)^2}$ is omitted). Low and high speed limits, slide 5.
- System invariant and the one-dimensional collision remark, slide 6.
- $\dot\gamma_u = \gamma_u^3\,\vec u\cdot\vec a/c^2$, slide 7 (correct slide).
- Force 4-vector $Q = dP/d\tau = m_0A = \gamma_u(\vec F, \dot E/c)$, slide 8. Renaming the slide's outlined F as $Q$ and $P$ (power) as $\dot E$ is stated on the page.
- Work and power, slide 9.
- $\vec F/(m_0\gamma_u) = \vec a + \gamma_u^2(\vec u\cdot\vec a/c^2)\vec u$ and the two special cases, slide 10.
- $\vec a = \vec F/(m_0\gamma_u) - \dot E\,\vec u/(m_0\gamma_u c^2)$ and the friction-term remark, slide 11.
- Force transformation, slides 12-13: $F_x'$, $F_y'$, $F_z'$, $\dot E'$ all match slide 13; I rederived $\dot E' = (\dot E - vF_x)/(1 - u_xv/c^2)$ from slide 12's matrix. Rest-frame special case, slide 13.
- Acceleration transformation with the caveat ($u_y' = 0$ or $a_x' = 0$), slide 14.
- Toolbox summary, slide 16 (correct slide number; slide 15 is "OK, now wake up!").
- $r = p/(qB)$ (slide 21 has only the question "How derive curvature radius?") and the photon rocket formula (slide 28 has only the topic) are correctly marked as the page's own in `at=`. Derivations checked: $quB = \gamma m_0u^2/r$ follows from the perpendicular case; photon rocket $M_i = \gamma M_f(1+\beta)$ from energy and momentum conservation gives $\sqrt{(1+\beta)/(1-\beta)}$.

## Arithmetic and answer checks
- Quiz 1: $\sqrt{25 - 16} = 3$ GeV, answer index 2 = "3 GeV". Correct; $\beta = 4/5 = 0.8$ correct.
- Quiz 2: perpendicular case $\vec F = \gamma m_0\vec a$, answer index 0. Correct; explanation correct (parallel case $\gamma^3$).
- Quiz 3: $7\times10^{12}/(2.998\times10^8 \times 8.33) = 2803$ m, about 2.8 km; answer index 1 = "2.8 km". Correct. The real LHC dipole bending radius is about 2,804 m, so "close to the LHC's real bending radius" is right.
- Quiz 4: answer index 1 ("unchanged along $x$, divided by $\gamma$ across") matches slide 13. Correct.
- Kinetic energy correction: $\gamma - 1 = \beta^2/2 + 3\beta^4/8 + \dots$, so $\frac38 m_0u^4/c^2$. Correct.
- Travel times at constant speed to Proxima (4.24 ly): 100,000 mph gives 28,430 yr ("about 28,000"), 30,000 mph gives 94,780 yr ("about 95,000"). Correct; the slide's 44,500 and 74,100 years are in ratio 1.67, not 3.33, so the page's remark that they do not scale with the speeds is correct.
- Antimatter ratios (slide 29, quoted): annihilation $9\times10^{16}$ J/kg vs hydrogen-oxygen about $1.3$-$1.6\times10^7$ J/kg gives about $6$-$7\times10^9$ (order ten billion); fission about $8\times10^{13}$ J/kg gives about 1,100; D-T fusion about $3.4\times10^{14}$ J/kg gives about 270. The slide's ratios are fair.
- Photon rocket at $\beta = 0.5$: $\sqrt{3} = 1.732$. Correct.
- Worked example (a): 2.80 km. Correct.
- Worked example (b): $4.37/900 = 0.004856$, i.e. 1,456 km/s ("about 0.0049 $c$ or 1,460 km/s" correct); $9.81 \times 500 = 4{,}905$ m/s; $1456/4.905 = 296.8$; $296.8/\ln 10 = 128.9$, so $10^{129}$. Correct (see finding 3 on the comparison with $10^{137}$ kg).
- Callout: at $kT \sim 1$ TeV, $t \approx (0.86\text{ MeV}/1\text{ TeV})^2$ s $\approx 7\times10^{-13}$ s with $g = 10.75$ (smaller still with the larger particle count at those temperatures), so "far less than a nanosecond old" is correct.
- LHC facts: circumference 26.7 km ("27 km" fine); first collisions November 2009 (correct); "still being built in 2006" correct.
- Calcs file: the entries I recomputed all pass. `ke-correction` evaluates at $\beta = 0.001$, where rounding error gives 0.37488 (within the 0.001 tolerance but fragile); $\beta = 0.01$ gives 0.37503. Info only.

## Coverage and order
- The page follows the slide order: topics (2), toolbox (3-6), acceleration and force (7-11), transformations (12-14), summary (16), accelerators (17-21), interstellar travel (22-36). Slide 15 ("wake up") is rightly skipped.
- Every slide with content is covered. Lightly covered: slide 34 (starship propulsion list, finding 10), and slide 5's formula for $p$.
- Additions, marked as the page's own: the radius derivation for slide 21, the photon rocket, the worked example, the cosmology callout, the LHC date and circumference.
- The page calls this Lecture 12 while the deck says "Lecture 11"; this follows the site syllabus (`_course.json`, where Lecture 11 is Quiz 1). Fine; optionally say so once in the intro.

## Licensing
- Pictures in the deck: slide 1 and slides 19-20 "Image courtesy of Wikipedia", slide 33 "Image courtesy of NASA"; slide 23 (M100) has no image in the OCW PDF. The page reuses no image, so no courtesy credit is needed. No "All rights reserved" or "image removed" notice appears in the deck.
- No OpenStax or LibreTexts material.
- Text is rewritten. The closest sentence is the friction-term remark ("the departure from $\vec F = m\vec a$ looks like a friction term proportional to the power put into the particle"), close to slide 11's wording but short. Optional light rewording. The collision remark (slide 6) is also close but is a single short clause.
- No em dashes found on the page.

## Notes
- The 8.033 Lecture 13 `leadsTo` ("Atomic, nuclear and particle physics ...") matches the existing page `atoms-photons-nuclei` (Lecture 13, deck lecture12_part1).
- The page's statement that $E = cp$ is exact for "photons and gravitons" follows slide 5; gravitons are hypothetical, which is fine to leave.
- "The inverse of the Doppler factor" for the photon rocket ratio is correct if the Doppler factor means the redshift factor $\sqrt{(1-\beta)/(1+\beta)}$. Optional: say "the inverse of the redshift factor".
- Uncertain: the origin of the \$62.5 trillion per gram figure (finding 8) was not checked against a primary source.

## Resolution (2026-11-16, by the page author)

- Error (Galileo "fastest so far"): now given as the slide's figure for Galileo, with a dated later-developments note (Helios 2, 1976; Parker Solar Probe, 2024).
- Slide 4: the page now quotes the slide's correction term as O(u⁴/c).
- Worked example (b): no longer compares a mass ratio with a mass; it says the propellant would be some 10¹³⁰ kg or more, as absurd as the slide's 10¹³⁷ kg.
- Cosmology callout reworded; the callout and `leadsTo` now point to 8.286 Lecture 17 (`temperature-and-decoupling`).
- Info: slide 20's title noted; "Centauri Cluster" and the specific-impulse reading marked; the $62.5 trillion figure attributed as an older estimate quoted on the slides; slide 7's "X, U, P, K" restored; slide 11 sentence reworded; deck numbering explained; `ke-correction` now uses β = 0.01.
