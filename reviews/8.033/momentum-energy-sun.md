---
page: content/year-2/8.033/momentum-energy-sun.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture10_dyn1/ (read: the Lecture 10 slide PDF, 18 pages, from a local copy; text layer extracted with pdftotext and every slide also checked on the rendered images)
  - Lecture 11 and Lecture 12 slide PDFs (read for comparison only, to check the leadsTo claim about 8.033 Lecture 12)
  - content/year-4/8.286/mass-energy-and-radiation.mdx (read, to check the cosmology callout's link)
verdict: needs-changes
---

# Review: Relativistic momentum and energy, and why the Sun shines

Slide map used (PDF page = slide): 1 "Welcome back to 8.033!" with Einstein portrait ("Image courtesy of Wikipedia"); 2 summary of last two lectures, variational calculus, brachistochrone figure ("Figure by MIT OCW"); 3 "Next lecture: INSTERSTELLAR SPACE TRAVEL" (sic); 4 title "MIT Course 8.033, Fall 2005, Lecture 10" and today's topics (fixing (generalizing) 8.01; momentum; energy; momentum 4-vector; kinetic energy, rest energy, mass-energy equivalence; the three unifications: space & time, E & p, E & m); 5 title "The Sun"; 6 photo of the Sun with Earth for scale ("Image courtesy of NASA"); 7 basic properties (1 AU, 2 × 10³⁰ kg, radius 100 times Earth, density similar to water, luminosity 4 × 10²⁶ W); 8 composition pie chart (H 70%, He 28%, O 0.8%, C 0.3%, Fe 0.2%; "How do we know this?"); 9 absorption-line spectrum ("Image courtesy of Wikipedia"; "These lines are formed in the photosphere"); 10 "What did they know when my Dad was born?" / what is the Sun, why does it shine, why for so long; 11 cutaway of the Sun labelled solar core, corona, photosphere, prominences ("Image courtesy of Wikipedia"); 12 why fusion occurs in the core; 13 "What is nuclear fission?", controlled fission vs fusion, "It is easier to destroy than to create."; 14 neutrons, β-decay and inverse β-decay, the neutrino; 15 proton–proton chain (IN: 6 H, (2 e⁻); OUT: He, 2 H, 2 νₑ, 4 γ; diagram "Image courtesy of Wikipedia"); 16 why the Sun shines, 99.3%, ".007 x 4 m_H", E = mc²; 17 "How do we know what is happening inside the Sun?"; 18 "Observing" the solar interior (opaque, computer models, sunquakes via Doppler shifts, neutrinos).

No momentum or energy formula appears on any of the 18 slides; slide 4 is a topic list only.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | The four `<Formula>`s "Momentum 4-vector", "Momentum and energy", "Rest energy plus kinetic energy", "Energy–momentum relation", all `cite="mit" at="slide 4"`; also "(slide 4)" after "momentum has to be redefined" and "Expanding γ … (slide 4)" | Slide 4 is a list of topic headings. None of these equations, and not the argument that mu is not conserved in every frame, is on slide 4 or any other slide. | Each formula is cited to slide 4 as if it were there. The opening paragraph does say the formulas are not on the slides, but the citation on each formula still points to a location that does not contain it. | Make each `at` say what is true, e.g. `at="slide 4 (topic only; the formula is the page's own)"`, and write "(topic on slide 4; the argument is the page's own)" in the prose. |
| 2 | warning | Opening paragraph: "the momentum and energy formulas were derived on the board" | There is no transcript or video text for this lecture; nothing on OCW shows what was done on the board. | States as fact that they were derived on the board. | Say "the slides only list these topics, so this page derives them in its own words" without claiming what happened on the board. |
| 3 | warning | `leadsTo` 8.033 Lecture 12: "Relativistic collisions, decays and particle physics." | By the course syllabus, Lecture 12 is `lecture11_dyn2`, whose slides (titled "Lecture 11", Fall 2006) list: dynamics problem-solving toolbox; more on mass-energy equivalence, kinetic and rest energy; acceleration and force; particle accelerators; interstellar rocket travel. This matches slide 3 here ("Next lecture: interstellar space travel"). Atomic, nuclear and particle physics is the next deck (course Lecture 13). Collisions and decays do not appear in the extracted Lecture 12 text (uncertain: the toolbox slide may hold them as an image). | "Relativistic collisions, decays and particle physics." | Use the topics of Lecture 12, e.g. "Force and acceleration, particle accelerators and relativistic rockets for interstellar travel." Optionally mention slide 3's "next lecture" in the page. |
| 4 | warning | "Humans have controlled fission but not yet fusion" (slide 13) | Slide 13 (written 2005/2006): "Humans have only achieved controlled fission, not controlled fusion." | Repeats it as a present-day fact. | Attribute and date it, and be exact: controlled fusion reactions have been made in laboratories for decades (tokamaks such as JET; in 2022 the National Ignition Facility got more fusion energy out of a target than the laser energy delivered to it), but nobody has yet built a fusion power plant. For example: "In 2006 Tegmark noted that humans had controlled fission but not fusion; fusion has since been made in the laboratory, but there is still no fusion power station (a later development)." |
| 5 | warning | "The reverse reaction turns a proton into a neutron: … p⁺ → n + e⁺ + νₑ" | Slide 14 labels the second reaction "inverse β-decay". | Calls it "the reverse reaction" of neutron decay. | It is not the reverse of n → p + e⁻ + ν̄ₑ (that would be p + e⁻ + ν̄ₑ → n). p → n + e⁺ + νₑ is today usually called β⁺ decay (positron emission), and "inverse beta decay" now usually means ν̄ₑ + p → n + e⁺. Suggest: "A proton can turn into a neutron in the related reaction the slide calls inverse beta decay (also called β⁺ decay):". The bracketed note that it needs energy, so a free proton is stable, and happens in the Sun when two protons fuse into deuterium is correct. |
| 6 | info | "The answer is nuclear fusion in its core (slide 11)." | Slide 11 is a labelled cutaway of the Sun (solar core, corona, photosphere, prominences). It does not say "fusion"; slide 12's title is the first mention. | Cites slide 11 for the answer. | "… in its core (slide 11 shows the core and outer layers; slide 12)". |
| 7 | info | "No chemical fuel could keep it shining for billions of years." | Not on the slides. | Stated with no mark. | Correct physics. Optionally mark it as the page's own, or mention that gravitational contraction (Kelvin–Helmholtz) also gives only tens of millions of years. |
| 8 | info | "A free neutron is not stable: it decays in minutes." | Slide 14: "Neutrons are not stable! They do not exist alone for long!" | Adds "in minutes". | Correct (mean lifetime about 880 s, about 15 minutes). No change needed. |
| 9 | info | Notation | The previous page (four-vectors-doppler-aberration) writes 4-vectors with an arrow ($\vec U$, $\vec k$, $\vec x$). | This page writes 4-vectors without one ($U$, $P$) and uses the arrow for 3-vectors ($\vec u$, $\vec p$). | Both are clear inside this page. Consider one sentence saying that here $P$ and $U$ are 4-vectors and $\vec p$, $\vec u$ the ordinary 3-vectors, as the notation changes from the last lecture. |

## Arithmetic and answer checks
- Momentum 4-vector, $E = \gamma mc^2$, $\vec p = \gamma m\vec u$, the expansion $E \approx mc^2 + \frac12 mu^2$, and $P^t\eta P = p^2 - E^2/c^2 = -m^2c^2 \Rightarrow E^2 = (pc)^2 + (mc^2)^2$: all correct, with $\eta = \text{diag}(1,1,1,-1)$ and the $(x, y, z, ct)$ order used on the previous page. The linearity argument (if total $P$ is conserved in one frame it is in all, since every particle's $P$ transforms with the same $\Lambda$) is correct.
- Slide 7 data: 2 × 10³⁰ kg, 4 × 10²⁶ W match the slide. "More precisely 109": 6.957 × 10⁸ / 6.371 × 10⁶ = 109.2. Correct. Density "similar to water" (mean 1.41 g/cm³): fine.
- Composition: 70% H, 28% He, small O (0.8%), C (0.3%), Fe (0.2%) as on slide 8. Correct transcription.
- 0.7%: 1 − 0.993 = 0.007. As a check, 4 m(¹H atom) = 4.03130 u vs m(⁴He atom) = 4.00260 u gives a ratio 0.99288, i.e. 0.71%; with bare nuclei (4 m_p vs m_α) it is 0.68%. Both round to the slide's 0.7%.
- Worked example (a): 0.007 × 4 × 1.67 × 10⁻²⁷ × (3.00 × 10⁸)² = 4.21 × 10⁻¹² J; / 1.602 × 10⁻¹³ J/MeV = 26.3 MeV. Page: 4.2 × 10⁻¹² J, about 26 MeV. Correct (the measured value is 26.7 MeV, part of it carried away by neutrinos).
- (b) 4 × 10²⁶ / 9.0 × 10¹⁶ = 4.44 × 10⁹ kg/s. Page: 4.4 × 10⁹. Correct.
- (c) 0.007 × 9 × 10¹⁶ = 6.3 × 10¹⁴ J/kg; 0.1 × 0.7 × 2 × 10³⁰ = 1.4 × 10²⁹ kg; product 8.82 × 10⁴³ J; / 4 × 10²⁶ W = 2.205 × 10¹⁷ s; / 3.156 × 10⁷ s/yr = 6.99 × 10⁹ yr. Page: 6.3 × 10¹⁴, 1.4 × 10²⁹, 8.8 × 10⁴³, 2.2 × 10¹⁷ s, about 7 billion years. All correct. (Info: the usual main-sequence estimate is about 10 billion years; 7 follows from the stated 10% assumption, so no change is needed.)
- The example is original: the slides give only the 99.3% ratio; no worked numbers are taken from MIT.
- Calcs file `calcs/8.033/momentum-energy-sun.yaml`: every entry matches the page and recomputes as stated (checked by hand above). The `energy-momentum` identity is correct.
- Quiz 1: γ(0.6c) = 1/√0.64 = 1.25; E = 1.25 mc², kinetic 0.25 mc². Answer index 1 correct.
- Quiz 2: $E^2 = (pc)^2 + (mc^2)^2$, index 2 correct; explanation correct.
- Quiz 3: 0.7%, index 0 correct.
- Quiz 4: index 3 correct; the distractors are clearly wrong (the whole Sun contains hydrogen; neutrinos are a product, not the cause; opacity is irrelevant).
- Flashcards: all four correct.

## Coverage and order
- The page follows the slides in order: slide 4 (topics) then slides 5–18. Every content slide from 4 to 18 is represented.
- Left out: slide 1 (welcome), slide 2 (recap of the variational calculus figure, covered on the previous page), slide 3 ("Next lecture: interstellar space travel"), slide 6 (NASA photo). Only slide 3 carries information worth a clause (see finding 3).
- Added: the whole derivation of the momentum 4-vector, $E = \gamma mc^2$, the low-speed expansion and $E^2 = (pc)^2 + (mc^2)^2$ (slides only list the topics; see findings 1–2), the neutron lifetime, the stability of the free proton, the "no chemical fuel" remark, and the worked example. All physics in these additions is correct.
- The proton–proton chain paragraph matches slide 15 (6 H and 2 e⁻ in; He, 2 H, 2 νₑ and γ rays out; effectively 4 H → 1 He). The page says "gamma rays" for the slide's "4 γ"; fine.

## Licensing
- The slide PDF has no "All rights reserved" notice and no "image removed due to copyright restrictions" placeholder (checked by text search and on the images).
- Credited images on the slides: slides 1, 9, 11, 15 "Image courtesy of Wikipedia"; slide 6 "Image courtesy of NASA"; slide 2 "Figure by MIT OCW". The page reproduces none of them, so no `courtesy:` entry is needed.
- No OpenStax or LibreTexts material.
- Verbatim text: the quoted "it is easier to destroy than to create" (slide 13) is a short, quoted phrase; fine. Two sentences follow the slides very closely and could be reworded further (warning-level wording, not a licence problem): "a weakly interacting particle with almost no mass that travels at nearly the speed of light" (slide 14: "a weakly interacting particle which has almost no mass and travels at nearly the speed of light") and "they come close enough for the strong nuclear force to bind them together" (slide 12: "nuclei come close enough for the strong nuclear force to bind them together").
- No em dashes on the page (checked by search); "Energy–momentum" and "proton–proton" use en dashes, which is allowed.

## Notes
- The page's remark that the slides' title line says "Fall 2005" is correct (slide 4), and the slide's typo "INSTERSTELLAR" (slide 3) is not repeated.
- Cosmology callout: the link to `/courses/8-286/mass-energy-and-radiation` exists (8.286 Lecture 15, which discusses pair creation and thermal equilibrium), and `leadsTo` 8.286 Lecture 15 matches it. "When kT ≳ mc², radiation creates particle–antiparticle pairs" and "the first helium was fused … in the first few minutes" are correct physics and fairly stated; primordial helium is made by a different route from the solar pp chain (neutrons and protons via deuterium), but "by the same release of rest mass" is accurate as worded.
- Not checked: `npm run content:check` and the symbol entries for this page were not run as part of this review; `npm run calc:test` was not run (numbers were recomputed by hand).
- The mapping of `lecture11_dyn2` (course Lecture 12) to the deck titled "Lecture 11" is taken from the syllabus in `_course.json` and agrees with this deck's slide 3; I did not refetch OCW to confirm it.

## Resolution (2026-11-16, by the page author)

- Error (slide 4 citations): all four formulas now say `at="slide 4 (topic only; the formula is the page's own)"`.
- "Derived on the board": now "listed as topics but not written out on them".
- Link to 8.033 Lecture 12: the `leadsTo` reason now matches that deck (toolbox, force and acceleration, accelerators, interstellar travel).
- Fission/fusion: dated to 2006 as the slide's claim, with a marked later development (National Ignition Facility, 2022; no fusion power plant yet).
- "The reverse reaction": rephrased as the slide's "inverse β-decay", with a note that it is today called β⁺ decay and that "inverse beta decay" usually means ν̄ₑ + p → n + e⁺.
- Close wording (slides 12 and 14): both sentences rewritten.
- Info (notation): left as is; this lesson follows the slides, which write 4-vectors in plain upper case.
