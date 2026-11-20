---
page: content/year-0/hs-6/towards-the-universe-why-gravity-rules.mdx
reviewed: 2026-11-20
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap2coulomb_law/ (read: local PDF text of Chapter 2; Sec. 2.13.1 (a)-(d) and Sec. 2.7.1 checked line by line; no "rights reserved" or "courtesy" notice)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/cb950383a94305d1894010ba577ec20b_45RQrWHzovU.pdf (read: local text of the Lecture 5 transcript, printed pages 13-22)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec05/ (read: local text of the slides; slides 1-3, Newton's letters of 10 Dec 1692 and 17 Jan 1693)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/electrostatics/09-electrostatics-02 (read; CCBY row in docs/siyavula-licences.tsv)
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/newtons-laws/02-newtons-laws-04 (read; CCBY row in docs/siyavula-licences.tsv)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html (read: 5.9722 × 10²⁴ kg)
  - https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html (read: 0.07346 × 10²⁴ kg, 0.3844 × 10⁶ km)
  - https://www.nasa.gov/image-article/magnetic-map-of-milky-way/ (read)
  - https://science.nasa.gov/image-article/apod-2021-january-20-the-magnetic-field-of-the-whirlpool-galaxy (read)
  - docs/HIGHSCHOOL-PLAN.md §4 row 6.13 (read); lessons 6.1, 6.2, 6.9, 5.13 and content/year-4/8.286/newtons-static-universe.mdx (read for prerequisites and leadsTo)
verdict: needs-changes
---

# Review: Towards the universe: why gravity, not electricity, rules the cosmos

Every number, quiz answer and the calcs file recompute correctly, every formula citation is right, and the 8.286 history matches Guth's Lecture 5. Two errors remain: the magnetism argument ("no net charge, so no grip") contradicts lesson 6.9's force on a neutral current-carrying wire, and "neutron" is used before Block 7 introduces it. The rest are wording and citation points.

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | "What about magnetism?", first bullet; quiz 3 (answer and explanation); flashcard "Magnetic fields in space"; Summary bullet 5 | Lesson 6.9 (MIT 8.02T Eq. 8.3.1): a neutral wire carrying a current feels F = BIL | "A star or planet as a whole carries almost no net charge, so the field has almost no grip on it"; quiz 3: "A whole star carries almost no net charge, so the field cannot steer it" | The reasoning does not follow: the reader has just learned that a neutral wire is pushed by a field. The right reason: when a neutral body moves as a whole, its positive and negative charges move together at the same velocity, so the magnetic pushes on them are equal and opposite and cancel. Internal currents (the body's own magnetism) do give a force, but it is tiny because a dipole's effect falls off fast (bullet 2). Reword bullet 1, quiz 3 choice 0 and explanation, the flashcard and the Summary along these lines, e.g. "a star moves its positive and negative charges along together, so the magnetic pushes on them cancel". |
| 2 | error | "How small an imbalance would matter?" ("every nucleon (proton or neutron)"); "nucleons" throughout, quiz 1, flashcard 3 | docs/HIGHSCHOOL-PLAN.md §4: neutrons and the nucleus are lesson 7.7 (Block 7, later) | Uses "neutron" and "nucleon" with only the bracket "(proton or neutron)" | "Nucleon" is defined on the page, but "neutron" is not introduced anywhere before Block 7 (grep of hs-0 to hs-6 finds it only on this page). Add one sentence: "besides protons, atoms contain neutral particles about as heavy as a proton, called neutrons (lesson 7.7)". |
| 3 | warning | "Gravity and the whole universe", paragraph 2; quiz 4 (correct choice and explanation) | Transcript p. 21: the Gauss's-law contradiction comes from a non-zero enclosed mass; Guth says the opposite sign of the gravitational constant "is important for some issues, but not for what we're saying now" | "The trouble is that gravity only attracts ... Guth shows ... that this is a contradiction"; quiz 4: "Gravity only attracts: a static, evenly filled universe contradicts Newton's own law" | Guth's argument needs only that the average mass density is not zero, which holds because mass has one sign and cannot cancel; whether the force attracts or repels does not enter. Say "mass comes in one kind only, so it cannot average out to zero the way charge does; Gauss's law then forbids a field that is zero everywhere". Keep "only attracts" for the clumping paragraph, where it is the right reason. Quiz 4's explanation already says "never cancels like charge does": lead with that. |
| 4 | warning | "Gravity and the whole universe", paragraph 1 | Slides 1-3 / transcript pp. 15-19: in the 10 Dec 1692 letter Newton says matter in an infinite space would clump into many masses; the "infinite attraction every way, so rest in equilibrio" argument is Bentley's, which Newton rejects (slide 3, p. 17); Newton's own reason is the symmetry argument (p. 19), which Guth states, not the letters | "In letters to ... Bentley ... (shown on the slides) he reasoned that a finite cloud would fall together ... Then, he argued, each star is pulled equally in every direction ... and stays at rest" | The sentence ties the "stays at rest" reasoning to the letters on the slides, which actually show Newton expecting clumping and rejecting the "pulled equally" argument. Separate the two: "In letters to Bentley (slides 1-3) Newton explains that a finite cloud would fall together. Guth describes how Newton then reasoned that in an infinite, even distribution ... no direction ... stays at rest". "Pulled equally in every direction" is close to Bentley's rejected argument; Newton's own was "every direction looks the same, so the force has no direction to point in" (p. 19). |
| 5 | warning | "What about magnetism?", paragraph 1 | NASA APOD 2021-01-20: SOFIA shows the field does not simply follow the spiral arms; at the outer disc it weaves across them | "SOFIA traced the field along the spiral arms of the Whirlpool Galaxy" | "Along" reads as "parallel to". Say "traced the field across the Whirlpool Galaxy's disc, where it partly follows the spiral arms and partly crosses them". Also: Planck measured polarised emission from dust, SOFIA polarised infrared light from aligned grains; "in the same way" is acceptable but "in a similar way" is more exact. |
| 6 | warning | "What about magnetism?", second bullet (writer's open point) | MIT 8.02T Ch. 2 Sec. 2.7.1: a dipole's field falls as 1/r³ "since the net charge of a dipole is zero" | "Magnetic effects of the two poles partly cancel, so a magnet's pull dies away faster with distance than an inverse-square force" (uncited) | Correct physics (a magnetic dipole field falls as 1/r³). Cite it by analogy: "(the same happens for a pair of opposite charges: MIT 8.02T notes, Sec. 2.7.1)". |
| 7 | warning | "Why big things are neutral", paragraph 3 (writer's open point) | (no source cited) | "A cloud of gas in space that has lost electrons pulls electrons back in from its surroundings." | Physically fine as a statement about a net charge, but "a cloud that has lost electrons" can be read as "ionised gas", which is still neutral because the freed electrons stay in it. Say "If a cloud of gas in space ever had more positive than negative charge, it would pull electrons in from its surroundings." The general statement (an imbalance attracts opposite charge) is standard and follows from lessons 6.1-6.2; no citation needed. |
| 8 | warning | Callout "Where 8.286 picks this up" | 8.286 syllabus (content/year-4/8.286/_course.json): Lectures 1-23 contain no lectures on the growth of structure; that is 8.902 (listed in the 8.286 "Structure formation" theme) | "the course works out ... how the small denser regions grow into galaxies" | Change to "and the site's lessons on structure formation (8.902) show how the small denser regions grow into galaxies", or drop the clause. The Friedmann equations claim is correct (Lectures 6-9). |
| 9 | warning | Step "A particle heavy enough to balance"; worked example "A Moon", step "The charges" | (arithmetic) | `\sqrt{9.0 \times 10^9/6.67 \times 10^{-11}}` and `5.97 \times 10^{24}/1.67 \times 10^{-27}` | As written these read (9.0/6.67) × 10⁹ × 10⁻¹¹ etc. Bracket the denominators, `/(6.67 \times 10^{-11})`, `/(1.67 \times 10^{-27})`, as the quiz 0 explanation already does; update the calcs `shown` strings of `balance-mass` and `earth-nucleons` if they quote these. |
| 10 | info | "What about magnetism?", last paragraph (writer's open point) | (no source cited) | "the glowing loops above the Sun's surface"; "They matter for how stars form from that gas" | Both standard and correct. Neither NASA page read supports them (the Planck page does not mention star formation; the APOD page does not say what the field does). Optionally cite a NASA SDO page on coronal loops; otherwise acceptable unsourced at this level. |
| 11 | info | Quiz 0 | Siyavula 9.2 Worked Example 2 compares the electric and gravitational forces between two electrons 10⁻¹⁰ m apart (2.30 × 10⁻⁸ N against 5.54 × 10⁻⁵¹ N) | Quiz asks the ratio for two electrons | Same pair of particles, but the quiz asks for the distance-free ratio and adds the "depends on distance" distractor, so it is not a copy. Optionally mention in the explanation that Siyavula 9.2 works the same pair at a fixed distance (cite reading1). |
| 12 | info | Quiz 1 explanation (writer's open point) | f² × 1.2386 × 10³⁶ with f = 10⁻¹⁷ = 123.9 | "= 124, about 120" | Fine: 124 to two significant figures is 1.2 × 10². No change needed; "about 120 times" in the choice is not misleading next to the distractors (10⁻¹⁷, equal, 10¹⁹). |

## Formulas and citations
- Coulomb's law, cite reading1 "Sec. 9.2": Siyavula 9.2 gives F = kQ₁Q₂/r² with k = 9.0 × 10⁹ N m²/C² and compares it with F = Gm₁m₂/d². Correct.
- Newton's law, cite reading2 "Sec. 2.4": Siyavula 2.4 gives F = Gm₁m₂/d², G = 6.67 × 10⁻¹¹ N m² kg⁻², "always an attractive force". Correct (Siyavula uses d, the page r; harmless).
- F_e/F_g = ke²/(Gm_p²), cite mit "Sec. 2.13.1 (c), the same ratio for an electron and a proton, independent of r": MIT (c) has ke²/(G m_p m_e) = 2.2 × 10³⁹ (with m_p = 1.7 × 10⁻²⁷ kg, m_e = 9.1 × 10⁻³¹ kg), "independent of r". The page's two-proton version is an adaptation and the `at` says so. Correct.
- F_e/F_g = f² ke²/(Gm_p²), cite mit "(c) and (d) ... combined here": MIT (d) says planets are neutral because the charges are equal to about 10⁻²⁴; the combination is the page's own and the `at` says so. Correct.
- "Experiments show the two charges are equal in size to an astonishing precision (MIT 8.02T notes, Sec. 2.13.1)": MIT (d) gives "on the order of 10⁻²⁴". Supported.
- MIT 8.02T (d) says "In light of your calculation in (b)"; it means (c). The page does not repeat the slip.
- references mit5 locations checked against the printed footers: pp. 14-15 (Newton static; finite distribution collapses; infinite distribution, "wouldn't know which way to go"; the 1692 letter, local coagulation on p. 15), p. 19 (symmetry argument; "not questioned by anybody for hundreds of years, until ... Einstein ... the first person ... to realize that even ... an infinite distribution ... would collapse"), pp. 20-21 (Coulomb → Gauss's law; Gauss's law of gravity and the contradiction on p. 21). All correct.
- mit5slides "slides 1-3: letters of 10 December 1692 and 17 January 1693": correct.
- "Newton's symmetry argument went unchallenged for more than two hundred years": Guth says "hundreds of years", hedged "as far as I know"; 1692 to 1917 is 225 years, so "more than two hundred" is right, and "As Guth tells it" attributes it (rule 5). Good.
- "Newton himself guessed that matter would clump in this way into many separate masses": supported by slide 1 and transcript p. 15; add "(Lecture 5, slide 1)" since it is a historical claim.
- Rule 4 (Guth's slips): Lecture 5 p. 22 calls ∇²φ = 4πGρ "Laplace's equation" (it is Poisson's); the page does not mention it, so nothing to flag.
- "theologian Richard Bentley": Guth's word (p. 15). Fine.

## Arithmetic and answer checks
All recomputed independently with k = 9.0 × 10⁹, e = 1.6 × 10⁻¹⁹, G = 6.67 × 10⁻¹¹, m_p = 1.67 × 10⁻²⁷, m_e = 9.11 × 10⁻³¹:
- Two protons: ke² = 2.304 × 10⁻²⁸; Gm_p² = 1.8602 × 10⁻⁶⁴; ratio 1.2386 × 10³⁶ → 1.2 × 10³⁶ and 1.24 × 10³⁶. "A million million million million million million" = 10³⁶. Correct.
- Electron-proton: 2.304 × 10⁻²⁸/(1.0148 × 10⁻⁶⁷) = 2.27 × 10³⁹ → 2.3 × 10³⁹ (matches lesson 6.2). Correct.
- m_p/m_e = 1833, "about 1800". Correct.
- Balance mass e√(k/G) = 1.6 × 10⁻¹⁹ × 1.1616 × 10¹⁰ = 1.859 × 10⁻⁹ kg → 1.9 × 10⁻⁹ kg = 1.9 µg, "about 2 micrograms". /m_p = 1.113 × 10¹⁸ → 1.1 × 10¹⁸. Correct.
- Critical f = 1/√(1.2386 × 10³⁶) = 8.985 × 10⁻¹⁹ → 9.0 × 10⁻¹⁹, 0.90 × 10⁻¹⁸, 1.1 × 10¹⁸ nucleons. Correct.
- Plot: coefficient 1.2386; at x = 2 the curve reaches 4.95, inside range [0, 5]; crossing at x = 0.8985. Caption correct.
- Earth: 5.97 × 10²⁴/1.67 × 10⁻²⁷ = 3.575 × 10⁵¹ (3.57, 3.6); charge 5.72 × 10¹⁷ C. Moon: 4.401 × 10⁴⁹; 7.04 × 10¹⁵ C. Correct.
- F_e = 9.0 × 10⁹ × 5.72 × 10¹⁷ × 7.04 × 10¹⁵/(1.4746 × 10¹⁷) = 2.458 × 10²⁶ N → 2.5 × 10²⁶. F_g = 6.67 × 10⁻¹¹ × 4.388 × 10⁴⁷/1.4746 × 10¹⁷ = 1.985 × 10²⁰ N → 2.0 × 10²⁰. Ratio 1.238 × 10⁶ → 1.2 × 10⁶ = 10⁻³⁰ × 1.24 × 10³⁶. Correct.
- NASA values: 5.9722 → 5.97 × 10²⁴ kg; 0.07346 × 10²⁴ → 7.35 × 10²² kg; 0.3844 × 10⁶ km → 3.84 × 10⁸ m. Correct.
- Quiz 0: ke²/(Gm_e²) = 2.304 × 10⁻²⁸/(5.536 × 10⁻⁷¹) = 4.16 × 10⁴² → 4.2 × 10⁴². Marked answer right; 2.3 × 10³⁹ (electron-proton) and 1.2 × 10³⁶ (two protons) are wrong for two electrons; "depends on distance" wrong. Siyavula's own figures give the same ratio (2.30 × 10⁻⁸/5.54 × 10⁻⁵¹ = 4.15 × 10⁴²).
- Quiz 1: 10⁻³⁴ × 1.2386 × 10³⁶ = 123.9. Marked answer right; others wrong.
- Quiz 2: marked answer right; "falls faster" and "cannot cross empty space" false; "gravity is stronger between protons" false (10⁻³⁶). Correct.
- Quiz 3: marked answer is the intended one but its reason needs the fix of finding 1.
- Quiz 4: marked answer right in substance; see finding 3 for "only attracts".
- Flashcards: values correct; flashcard 3 "about 10¹⁸" agrees with 1.1 × 10¹⁸.
- Summary "10³⁶ to 10⁴²": 1.2 × 10³⁶ (two protons) to 4.2 × 10⁴² (two electrons). Correct.
- Calcs file: every number on the page is covered, including the quiz entries. Minor: `k-block` and `G-value` have `origin: mit` but cite reading1/reading2 (Siyavula); harmless, but `origin` could name the source actually cited. `earth-moon-ratio-direct` uses rounded inputs (2.458 × 10²⁶, 1.985 × 10²⁰) and is consistent.

## Only earlier terms
- Neutron: not introduced before lesson 7.7 (finding 2). Error.
- Nucleon: defined on the page. Fine once "neutron" is explained.
- Proton, electron, elementary charge e, k: lessons 6.1-6.2. Fine.
- Newton's law of gravitation, G: lesson 2.11 `newtons-law-of-gravitation` is planned (PC 1, Block 2, listed in hs-2/_course.json) and not yet written; its §4 row covers it, so it counts as introduced (docs/TWO-PC-WORKFLOW.md).
- Magnetic field, force on moving charges, aurorae, no lone pole, force on a wire: lesson 6.9. Fine.
- Dipole falloff "faster than an inverse-square force": new on this page, explained in words. Fine (cite as in finding 6).
- Hubble's redshifts: lesson 5.13 `towards-the-universe-redshift` (written). Fine.
- Gauss's law of gravity: named only, as "a reformulation of Newton's own law"; not used. Fine for a towards lesson.
- Friedmann equations, polarised light, SOFIA, Planck: named only, in context. Fine.
- `powers-of-ten` prerequisite: exists in hs-0. Fine.

## Coverage
- §4 row 6.13: "why gravity, not electricity, rules the cosmos", towards lesson, target `8-286/newtons-static-universe`. Covered: inverse-square comparison, the particle ratios, neutrality, the size of the imbalance that would matter, gravity adds up, magnetism in space, Newton's static universe and why it fails. Complete at VWO level, with good depth for a block finale.
- The level is right for a VWO beginner: the algebra is one ratio and one square root; the cosmology is told in words.

## Where this leads
- `leadsTo: 8.286 Lecture 5`: `content/year-4/8.286/newtons-static-universe.mdx` ("Why a static universe cannot work", lecture 5) exists and is on exactly this topic. The `why` text is correct (Gauss's law of gravity shows a static, evenly filled universe cannot work).
- `towards: true` is set; it is the block's last lesson (6.13). Cosmology claims checked: correct, except the callout's structure-formation clause (finding 8) and the "only attracts" framing of the Gauss argument (finding 3). "A universe ruled by gravity ... must be expanding or collapsing" is right for Newtonian gravity with matter alone; Einstein's 1917 static universe with a cosmological constant is unstable, so the statement stands at this level (no change needed).

## Licensing and AI terms
- No sentence copied from MIT 8.02T, the 8.286 transcript or Siyavula; the Newton letters are not quoted (paraphrased only). Short phrases ("wouldn't know which way to go" → "does not know which way to go") are in the page's own words.
- No figures: the only graph is a generated Plot.
- Worked examples are original: Siyavula 9.2 works two electrons at 10⁻¹⁰ m and Siyavula 2.4 the Earth-Moon gravitational force; the page's two-proton ratio, balance mass and charged Earth-Moon example are its own (see finding 11 for quiz 0).
- Siyavula URLs: both are CCBY rows in docs/siyavula-licences.tsv (lines 422 and 451). No Siyavula branding.
- MIT: Chapter 2 of 8.02T and the 8.286 Lecture 5 transcript and slides carry no "All rights reserved", "courtesy" or "excluded" notice.
- NASA: no insignia; NASA pages are cited by title; no "according to NASA" phrasing. The Planck map is described as Planck's (an ESA mission with NASA contributions), which is accurate.
- No forbidden source cited or used; none was opened in this review.
- No em dashes on the page.

## Notes
- The writer's open points are answered in findings 6 (dipole falloff: cite 8.02T Sec. 2.7.1), 7 (ionised gas: reword, no citation needed), 10 (solar loops: optional NASA citation) and 12 (quiz 1 "about 120": fine).
- Uncertain: none of the arithmetic; the reading of "along the spiral arms" (finding 5) is a wording judgment.

## Resolution (2026-11-20, by the page author)

1. Fixed. "What about magnetism?" bullet 1 now says a current-carrying wire is pushed because only its electrons move along it, while a star or planet moving as a whole carries its positive and negative charges at the same velocity, so the magnetic pushes on them are equal and opposite and cancel. Bullet 2 now opens with the body's internal currents (a small force, dying away fast). Quiz 3 choice 0 and explanation, the flashcard "Magnetic fields in space" and Summary bullet 5 reworded the same way.
2. Fixed. One sentence added before the first use: besides protons, atoms contain neutral particles about as heavy as a proton, called neutrons (lesson 7.7); protons and neutrons together are nucleons.
3. Fixed. The Gauss's-law paragraph now leads with "mass cannot average out to zero the way charge does" and says a field zero everywhere is only possible where there is no mass (transcript p. 21). "Only attracts" is kept for the clumping paragraph. Quiz 4 choice 0 and explanation, the flashcard "Newton's static universe" and Summary bullet 6 now give the same reason.
4. Fixed (checked against the local slides and transcript pp. 18-19). Paragraph 1 now separates the sources: the 1692 letter (slide 1) says a finite cloud falls into one mass and an infinite even spread gathers into many masses; Bentley's "pulled equally from every side, so at rest" argument was rejected by Newton in 1693 (slide 3); Guth describes Newton's own reason, the symmetry argument (no direction for the force to point in, p. 19). "(Lecture 5, slide 1)" added to Newton's clumping guess. The mit5slides location now names what each letter says.
5. Fixed. SOFIA "in a similar way" traced the field across the Whirlpool Galaxy's disc, where it partly follows the spiral arms and partly crosses them; the nasaWhirlpool location updated to match.
6. Fixed. Bullet 2 now adds "(the same happens for a pair of opposite charges, whose field falls as 1/r³: MIT 8.02T notes, Sec. 2.7.1)", checked in the local Chapter 2 text (Eq. 2.7.8 and the sentence after it).
7. Fixed. Now "If a cloud of gas in space ever had more positive than negative charge, it would pull electrons in from its surroundings."
8. Fixed. The callout now ends the 8.286 part with the Friedmann equations and says the site's structure-formation lessons (from MIT 8.902, Astrophysics II) show how the denser regions grow into galaxies.
9. Fixed. Denominators bracketed: 9.0 × 10⁹/(6.67 × 10⁻¹¹) and 5.97 × 10²⁴/(1.67 × 10⁻²⁷). The calcs `shown` of `balance-mass` updated; `earth-nucleons` quotes only the result and still matches.
10. Not changed (optional): both statements are standard and acceptable unsourced at this level.
11. Done: the quiz 0 explanation notes that Siyavula Sec. 9.2 works out both forces for two electrons at one fixed distance, with the same ratio.
12. No change needed.
Calcs `origin` of `k-block` and `G-value`: left as `mit`, since the calcs files use only the labels mit, page-own, later-data and slip, and `mit` is the label used for a value taken from the cited source.

Checks: `npm run calc:test -- -k towards-the-universe-why-gravity-rules` 29 passed; `npm run content:check` 0 error(s), the only warning for this page being the planned prerequisite `newtons-law-of-gravitation` (Block 2, PC 1). No em dashes. Status set to reviewed.
