---
page: content/year-0/hs-3/towards-the-universe-expanding-ball.mdx
reviewed: 2026-11-21
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/1a0af97c8db7221f47634e47e0bb3324_vKLqWj0FRyc.pdf (Lecture 6 transcript, 30 pp.; read; printed footer = PDF page)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec06/ (Lecture 6 slides, 2745fbe8…_MIT8_286F13_lec06.pdf, 8 slides; read, slide 8 viewed as an image)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/a8d35e02dbabc99e6a5fb7af82012b61_m00PjHTq6jU.pdf (Lecture 7 transcript, 27 pp.; read; printed footer = PDF page)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec07/ (Lecture 7 slides, 4c58c059…_MIT8_286F13_lec07.pdf, 3 slides; read, viewed as an image)
  - https://physics.nist.gov/cgi-bin/cuu/Value?bg (read: 6.674 30(15) × 10⁻¹¹ m³ kg⁻¹ s⁻², CODATA 2022)
  - https://physics.nist.gov/cgi-bin/cuu/Value?mp (read: 1.672 621 925 95(52) × 10⁻²⁷ kg, CODATA 2022)
verdict: pass-with-notes
---

# Review: Towards the universe: will an expanding ball of matter stop?

No errors found. Every formula citation points to the right transcript page or slide, every number recomputes, the calcs file passes (`npm run calc:test -- -k expanding-ball`: 39 passed), and the quiz is correct. The findings below are warnings and info: chiefly that the page sends readers forward to Block 8 for ideas that lessons 0.4, 0.11 and 1.9 already introduced, and that the "real universe" section can cite Lecture 7 pp. 23–24 directly instead of inferring from Lecture 6 p. 15.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | warning | "A ball of galaxies" (megaparsec "lesson 8.10", Hubble's law "lesson 8.11 shows how we know", "Lesson 8.11 shows that an observer in any other galaxy sees exactly the same pattern"); worked example step 1 ("lesson 8.10"); quiz 4 explanation ("the Hubble time of lesson 8.12") | Lesson 0.11 `towards-the-universe-scales` already introduces Hubble's law $v = H\,d$, H = 70 km/s/Mpc, the megaparsec (3.26 million light-years) and the Hubble time $1/H$; lesson 0.4 `rearranging-formulas` uses Hubble's law with Mpc; lesson 1.9 `relative-velocity` shows that an observer on another galaxy sees the same Hubble's law (no centre) | Points only forward to Block 8, as if these ideas were new; `prerequisites` does not list `towards-the-universe-scales` or `relative-velocity` | Refer back to lessons 0.11 (Hubble's law, megaparsec, Hubble time) and 1.9 (no centre), keep the Block 8 pointers as "more in", and add `towards-the-universe-scales` (and `relative-velocity`) to `prerequisites`. Also note that lesson 0.11 writes $d$ for the distance while this page writes $r$ (Guth's letter); one bracket saying so would help |
| 2 | warning | "The real universe", second and third sentences | Lecture 7 p. 23: "omega matter … visible plus dark matter … is roughly about 0.3 … omega dark energy is about equal to 0.70"; p. 24: dark energy "finally discovered in 1998" | "Ordinary matter and dark matter … together make up only about a third" (uncited; inferred from Lecture 6 p. 15, "about 60% or 70%", which by itself would allow 40% matter) | Cite Lecture 7 transcript p. 23 for the third (Ω_m ≈ 0.3, Ω_DE ≈ 0.70) and keep Lecture 6 p. 15 for the quote, or replace the quote by p. 23's 0.3/0.70. This also answers writer flag (3). It agrees with lesson 8.17 (about 68% dark energy) |
| 3 | warning | "The real universe", second paragraph, last sentence | Not in Lectures 6 or 7. Lesson 8.17 (8.286 Lecture 18 p. 23) says a constant vacuum energy makes the scale factor grow exponentially, and that future surveys test whether dark energy changes; lesson 8.19 says the universe most likely expands forever but "nobody really knows" | "If dark energy stays as it is, the expansion goes on for ever, faster and faster; whether it does stay so is still not known." Uncited | Correct and consistent with lessons 8.17 and 8.19, but uncited. Add "(lesson 8.17)" at the end of the sentence, or add 8.286 Lecture 18 as a reading and cite p. 23 |
| 4 | warning | "Only the mass inside pulls", last paragraph | Lecture 6 pp. 17–18: shells could in principle cross; the equations hold while there are no crossings, and they then show that no crossings happen. Lecture 7 p. 3 repeats this | "the galaxies inside stay inside: they all move outwards, the nearer ones more slowly. So $M$ stays the same" | The reason given only holds while the ball expands (in the collapse they move inwards), and it states as obvious what Guth argues needs care. Suggest: "The nearer galaxies move more slowly, so they stay inside, and Guth shows that the shells never overtake each other (transcript pp. 17–18)" |
| 5 | info | Plot caption | — | "Above 1 the curve reaches zero where the ball stops" | With the domain $r/r_0 \le 6$, the zero lies at $r/r_0 = q/(q-1)$, which is beyond the plot for $1 < q < 1.2$ (for example, 21 at q = 1.05). Add "(for densities just above 1, beyond the right edge of the graph)" or start the slider at 1.25 |
| 6 | info | "The escape-speed question again", "(Lecture 7, transcript pp. 17–19)" | The open case is on p. 18, the closed case and the Big Crunch on p. 19, and the critical case on p. 20 | "the same three cases … pp. 17–19" | Write pp. 17–20, or "the first and last" for pp. 17–19 |
| 7 | info | "The energy of a galaxy on the edge", last paragraph (the bracket about a particle inside) | Lecture 6 pp. 29–30 (also Lecture 7 p. 8) | No page given | Add "(transcript pp. 29–30)" |
| 8 | info | Worked example, step "Check" | `calcs/values.yaml` lists H₀ "67" as "later: CMB-based H₀ in the Hubble tension, rounded"; Guth's value is h₀ = 0.67 ("Guth 2013") / 67.3 ("Guth 2013: Planck 2013") | "the Planck satellite's 2013 Hubble constant of about 67 km/s/Mpc" | The value is correct (Guth p. 22: "h0, according to Planck, is 0.67"). The registered role of "67" does not match this use. Write "$h_0 = 0.67$, that is 67 km/s/Mpc" or extend the role of '67' in values.yaml (writer flag 2) |

## Formulas and citations
- **Hubble's law**, `reading2` slide 8: correct. Lecture 6 slide 8, "Mathematical Model", shows a sphere with radius $R_{\max,i}$ and $\vec v_i = H_i \vec r$ (checked visually). The `at` note about the vector form is right.
- **Mass of an evenly filled ball**, `reading4` slide 2: correct. Lecture 7 slide 2: "Let $M(r_i)$ ≡ mass inside $r_i$-shell = $\frac{4\pi}{3} r_i^3 \rho_i$ at all times."
- **Energy per kilogram**, `reading1` pp. 28–29 (board): correct. On p. 28 Guth defines $E_{\rm phys} = m r_i^2 E$ with $E = \tfrac12\dot a^2 - \tfrac{4\pi}{3}G\rho_i/a$. On p. 29 it is written as $\tfrac12 m(\dot a r_i)^2 - GmM(r_i)/(a r_i)$, which he identifies as the kinetic plus potential energy of a test particle on the boundary. The conserved $E$ itself is also on Lecture 7 slide 3, and the frontmatter cites that correctly.
- **Energy zero: the dividing line**, `reading3` p. 20 (board), "this form … is the page's own": correct. p. 20 has the critical case, E = 0; the form is a correct page step (calcs `zero-energy-line`).
- **Critical density**, `reading3` p. 20 (board): correct. p. 20: "3H squared over 8 pi G". Denser means closed and less dense means open, also on p. 20; the page has this right.
- **Speed of the edge**, `reading3` p. 17 (board): correct. p. 17: "a dot squared is equal to 2E plus 8 pi over 3 G rho sub i over a". I derived it independently from Guth's equation: with $a = r/r_0$, $a(t_i) = 1$, $\dot a(t_i) = H$, we get $2E = H^2(1 - q)$ with $q = \rho/\rho_c$, so $\dot a^2 = H^2[1 - q(1 - 1/a)]$, which is the page's formula times $r_0^2$. Correct.
- **The expansion rate from the energy**, `reading3` p. 9 (board): correct. p. 9: multiplied by 2/a², "$(\dot a/a)^2 - \tfrac{8\pi}{3}G\rho$" equals $2E/a^2$. Since $E_{\rm mech}/m = r_i^2 E$ and $r = a r_i$, $2E/a^2 = 2(E_{\rm mech}/m)/r^2$, so the page's form is the same equation. Guth says Lecture 7 continues "pretty much on the blackboard" (p. 8), so "board" is right.
- Other page citations checked:
  - Lecture 7 p. 2 (Newton's shell results): correct.
  - Lecture 6 p. 19 (acceleration $GM/r^2$ from the mass inside): correct.
  - Lecture 6 p. 18 (mass inside constant without shell crossing): correct.
  - Lecture 6 p. 6 (Newtonian answer exact in GR): correct, continued on p. 7 and p. 15.
  - Lecture 7 p. 9 (Friedmann, general relativity, 1922): correct. 1922 is also historically right for the first paper; this is not Guth's 1923/1924 slip of AGENTS.md rule 4.
  - Lecture 7 pp. 18–19 (open, closed, Big Crunch): correct.
  - Lecture 7 p. 20 (critical case): correct.
  - Lecture 7 p. 22: correct for $1.88\,h_0^2 \times 10^{-29}$ g/cm³, $h_0 = 0.67$ "according to the Planck satellite", 8.4 × 10⁻³⁰ g/cm³, "about 5 protons per cubic meter", "within about a half of a percent", "10 to the minus 29 times the density of water", and the vacuum better than any on Earth.
  - Lecture 6 p. 15 ("about 60% or 70% of the total"): correct, and the quote is verbatim.
- The frontmatter `location` texts of all four readings match the transcripts and slides.
- **Writer flag (1)**: the four "page's own" formulas say so in `at` and each has an identity check in calcs. Fine.
- **Writer flag (4)**: the 1998 discovery is before 2013, so it needs no "later development" mark. Guth himself says dark energy was "finally discovered in 1998" (Lecture 7 p. 24). That page supports the year but not the supernova method; the supernova method is in 8.286 Lecture 18 p. 16, which lesson 8.17 cites. Fine, since the page points to lesson 8.17.
- **Writer flag (6)**: hydrogen atom 1.67 × 10⁻²⁷ kg cited to the NIST proton mass. The atom is $m_p + m_e$ = 1.6735 × 10⁻²⁷ kg, which still rounds to 1.67, and the page says "almost all of it the proton". Acceptable.
- The roughly stated GR argument ("a small ball already tells you everything, and inside a small ball Newton's gravity is accurate") and "the energy term … describes how space itself is curved" are standard and correct. Guth points to the geometry link on Lecture 7 p. 21 ("connected to the geometry of the universe … later"). Info only.

## Arithmetic and answer checks
All recomputed by hand and with Python, independently of calcs:
- $H_0 = 7.0\times10^4 / 3.086\times10^{22} = 2.2683\times10^{-18}$ s⁻¹; $H_0^2 = 5.1453\times10^{-36}$; $8\pi G = 1.67736\times10^{-9}$; $\rho_c = 9.2025\times10^{-27}$ kg/m³ (page 9.20). /1.67e-27 = 5.51 (page 5.5, "five or six").
- Guth: $1.88 \times 0.67^2 = 0.844$, so 8.44 × 10⁻³⁰ g/cm³ = 8.4 × 10⁻²⁷ kg/m³. Divided by $m_p$: 5.0 protons. $9.20 \times (67/70)^2 = 8.43$. Water ratio 9.2 × 10⁻³⁰ ≈ 10⁻²⁹ as an order of magnitude (Guth's own wording).
- Probes (lesson 3.11's numbers, consistent with that lesson):
  - $\sqrt{2 \times 6.256\times10^7} = 11.19$ km/s.
  - At 8.0 km/s: $r_{\max} = 6.256\times10^7 \times 6.371\times10^6/3.056\times10^7 = 1.304\times10^7$ m, height 6.67 × 10⁶ m ≈ 6700 km.
  - At 12.0 km/s: energy +9.44 × 10⁶ J/kg, final speed 4.3 km/s ("a little speed"). Correct.
- ρ = 2ρ_c: $r_{\max}/r_0 = q/(q-1) = 2$. ρ = 1.25ρ_c: $r_0/r = 0.2$, $r = 5r_0$. Correct.
- Quiz:
  - Q1: answer "four times" is correct ($\rho_c \propto H^2$); the other choices are wrong.
  - Q2: q = 0.6 gives energy $\tfrac12 v_0^2(1-q) > 0$ and $v^2 \to 0.4\,v_0^2$, so it expands for ever and slows down. Correct. "Stops at once" and "faster and faster" are wrong.
  - Q3: correct; the explanation is right (both terms grow as $r^2$).
  - Q4: 2.27 × 10⁻¹⁸ s⁻¹ is correct. The distractors are right: 70/3.086e22 = 2.27e-21; 7e4/3.086e19 = 2.27e-15; 1/H₀ = 4.41 × 10¹⁷ s (shown with unit s⁻¹ as a distractor, and the explanation says "in seconds"; fine).
  - Q5: choice 1 is correct. Choice 0 is wrong (the density is close to critical, p. 22), choice 2 is wrong, and choice 3 is wrong (the same equation, p. 6 and p. 9).
- Flashcards: all true. Flashcard 4 (2.27 × 10⁻¹⁸, 9.2 × 10⁻²⁷, five or six atoms) matches.
- Calcs coverage: every result-like number on the page has an entry. "About a third", "1998" and "half a percent" have no `fact` entries; adding them is optional.

## Only earlier terms
- **Hubble's law, Hubble constant, km/s/Mpc, megaparsec, Hubble time:** introduced in lessons 0.4 and 0.11, and used in 0.5, 1.2 and 1.9. The page attributes them to lessons 8.10–8.12 instead (finding 1). So these are not terms used before they are introduced, but the cross-references point the wrong way.
- **"Any observer sees the same pattern":** lessons 0.11 and 1.9 (finding 1).
- **Defined on this page:** density (also lesson 0.2, kg/m³), critical density, open, closed, Big Crunch, Friedmann equation, dark energy (also met in lesson 1.4 `acceleration`, with the 1998 supernovae, "exploding stars").
- **Glossed in place:** scale factor (in the Callout, with "lesson 8.13").
- **Earlier lessons:**
  - Supernovae: lessons 1.4 and 1.5.
  - Dark matter: lesson 2.13.
  - Shell results: lessons 2.11 (outside) and 2.13 (inside), as the page says.
  - Escape speed and $-GMm/r$: lesson 3.11.
  - Conservation of energy and $E_{\rm mech}$: lesson 3.4.
  - Einstein's general relativity: named in lessons 2.11 and 3.11.
  - Hydrogen atom and proton: lesson 0.11.
  - Vacuum: lessons 1.12 and 3.9.
- **Planck satellite:** named without a gloss. It is only a name for where the value came from; info.

## Coverage
- §4 row 3.12 ("will an expanding ball of matter stop?", no PhET, leads to `8-286/expanding-sphere` and `8-286/friedmann-equation`): fully covered. The page covers:
  - the uniform Hubble-expanding ball;
  - the shell theorem;
  - the conserved energy of the edge;
  - the three fates;
  - the critical density with a number;
  - how the edge slows down;
  - the Friedmann equation in Newtonian form;
  - why dark energy changes the answer.
- At VWO level this is a stretch topic that goes beyond the syllabus. Its maths (energy conservation, algebra) stays within Blocks 0–3.
- Left out: shell-crossing and homogeneity preservation, the scale-factor rescaling, $k$ and notches, and the $t^{2/3}$ solution. All are correctly left to the university pages; none matters at this level.
- The §4 sources (OpenStax A 29.1, 29.2; CP 34.4) were correctly replaced by MIT 8.286 (an MIT OCW source of §2.0). The block's main source, Siyavula, has no cosmology, so a towards lesson built on 8.286 alone is reasonable (info).

## Where this leads
- Lecture 6 leads to `content/year-4/8.286/expanding-sphere.mdx` (lecture 6). Lecture 7 leads to `friedmann-equation.mdx` and `open-closed-flat.mdx` (both lecture 7). Both exist, cover the same topic, and match the §4 row.
- The "why" texts are accurate:
  - In Lecture 6 Guth follows every shell, shows that uniformity is preserved (pp. 16–17), and finds the first integral from the equation of motion (pp. 27–28).
  - In Lecture 7 he gives the Friedmann equation (p. 9), the open, closed and flat cases (pp. 17–20) and the critical density with Planck's H₀ (p. 22).
  - `open-closed-flat` uses the same 8.4 × 10⁻³⁰ g/cm³ and 5 protons.
- `towards: true` is set, and 3.12 is the block's last lesson. The cosmology claims are correct and consistent with:
  - lesson 8.11 (H₀ ≈ 70 km/s/Mpc);
  - lesson 8.12 (H₀ = 2.27 × 10⁻¹⁸ s⁻¹, with Mpc as 3.08 × 10²² m there and 3.086 × 10²² m here; both give 2.27; info);
  - lesson 8.17 (1998 supernovae, about 68% dark energy, a constant vacuum energy leading to exponential growth);
  - lesson 8.19 (most likely expands forever, nobody really knows).
- The Callout's account of Lectures 6 and 7 is accurate.

## Licensing and AI terms
- **No copied sentences.** I compared the closest passages:
  - The page's "far better vacuum than any machine on Earth can make" stands beside Guth's "vastly better vacuum than can be made on Earth by any machinery that we have access to" (p. 22). This is a paraphrase.
  - The two direct quotes ("about 60% or 70% of the total", "about 5 protons per cubic meter") are short, marked and cited.
- **No figures copied.** The only graph is a generated `<Plot>`. Guth's sphere diagram (slide 8) is not reproduced.
- **Worked examples are original.** Guth computes ρ_c only in cgs with h₀ = 0.67. The page uses SI, H = 70, a hydrogen-atom count, and the 2ρ_c and 1.25ρ_c turnaround examples, none of which are in the lectures. The quiz questions are the page's own.
- **No "rights reserved" or "courtesy" notices** in the transcripts or slides (grep found none). MIT OCW is allowed under AGENTS.md rule 11.
- **Nothing else to flag:**
  - no Siyavula branding (Siyavula is not used);
  - no NASA or ESO material, no NASA insignia and no "according to NASA";
  - NIST is used only to look up two values.
- **No forbidden source** (OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs, publisher full texts) is cited or used.

## Notes
- Writer flags: (1) fine; (2) finding 8; (3) findings 2 and 3; (4) fine; (5) the probe numbers match lesson 3.11 exactly; (6) fine.
- Calcs file: complete; `npm run calc:test -- -k expanding-ball` gives 39 passed. Some entries cite `reading1`/`reading3` for numbers that are lesson 3.11's or the page's own, with the `at` text saying so; acceptable.
- I did not check the symbols in `data/symbols.json`, or label placement and read-aloud; `content:check` covers those.

## Resolution (2026-11-21, by the page author)
- Warning 1: megaparsec, Hubble's law and the Hubble time now point back to lesson 0.11 and the "no centre" argument to lesson 1.9; `towards-the-universe-scales` and `relative-velocity` added to `prerequisites`; a sentence notes that lesson 0.11 writes d where this page writes r. Lesson 8.11 is kept only as where the measurements are explained.
- Warning 2: "about a third" now cites Lecture 7 transcript p. 23 (matter about 0.3, dark energy about 0.7), added to the reading's location; Lecture 6 p. 15 kept for the quote.
- Warning 3: "(lesson 8.17)" added to the sentence on whether dark energy stays as it is.
- Warning 4: added that no shell overtakes another, which Guth checks (Lecture 6, transcript pp. 17–18).
- Info: caption notes that for densities just above critical the turning point lies beyond the graph; pp. 17–19 corrected to pp. 17–20 (location and body); the bracket on a particle inside the ball cites Lecture 6 pp. 29–30; `calcs/values.yaml` role of "67" extended to Guth's h₀ = 0.67 on this page.
- Status set to reviewed.

## Change (2026-11-28, by Account A, from reader feedback)

The sentence introducing $H$ now calls it the Hubble parameter (the same for every galaxy at a given moment, but changing as the universe expands) and its value today the Hubble constant. No number changed.
