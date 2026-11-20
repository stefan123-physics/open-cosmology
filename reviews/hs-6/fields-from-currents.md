---
page: content/year-0/hs-6/fields-from-currents.mdx
reviewed: 2026-11-20
sources_read:
  - https://www.siyavula.com/read/za/physical-sciences/grade-11/electromagnetism/10-electromagnetism-02 (read; footer: "All Siyavula textbook content ... Creative Commons Attribution License")
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read; PDF 4c84733e3977ba42a930a4c0414f70d0_ch9sourc_b_field.pdf, 69 pages, every cited page checked against its printed footer; no "rights reserved" or "courtesy" notice found in the text)
  - https://www.nist.gov/si-redefinition/ampere-introduction (read)
  - https://www.nist.gov/si-redefinition/ampere-history (read; redirects to https://www.nist.gov/si-redefinition/ampere/ampere-history)
  - https://physics.nist.gov/cgi-bin/cuu/Value?mu0 (read, only to check the present value of μ₀; not cited by the page)
verdict: needs-changes
---

# Review: Magnetic fields from currents (lesson 6.10)

## Differences from the sources
| # | Severity | Where on page | Source says | Page says | Suggested fix |
|---|----------|---------------|-------------|-----------|---------------|
| 1 | error | Formula "Field inside a long solenoid", `at="Eq. (9.4.3), p. 20"`; also calcs entries quiz-solenoid-n, quiz-solenoid-field, quiz-solenoid-wrong, lab-solenoid-n, lab-solenoid-field (`at: 'Eq. (9.4.3), p. 20'`) | Eq. (9.4.3) `B = μ₀NI/l = μ₀nI` is at the top of printed **p. 21** (PDF page 22); p. 20 ends with Eq. (9.4.2) | p. 20 | Change to `at="Eq. (9.4.3), p. 21"` on the page and in the five calcs entries |
| 2 | warning | "Electromagnets and iron cores", "The iron used in an electromagnet is chosen so that its domains fall back out of line when the current stops; in a permanent magnet they stay lined up." | MIT Sec. 9.6.4 (pp. 31–32) says the field-magnetisation relation depends on the material's history (hysteresis) and that the strong interaction between neighbouring dipoles **can keep them aligned** when the field is removed, the origin of permanent magnets (p. 32). It says nothing about choosing iron for electromagnets. Siyavula 10.2 does not discuss it either | The iron is "chosen so that its domains fall back out of line" | The physics is standard and right in spirit (soft iron), but it is unsourced and slightly overstated: soft iron keeps a little magnetism. Suggest: "Electromagnets use soft iron, which keeps very little of its magnetism when the current stops. In other materials the domains stay lined up after the field is gone: that is how a permanent magnet is made." and cite MIT Sec. 9.6.4, p. 32 for the second sentence |
| 3 | warning | Home experiment, "the clips drop when you disconnect" | Siyavula's experiment (10.2, "Electromagnets") only compares compass deflection with and without a nail; it makes no claim about clips dropping | Clips drop when disconnected | Ordinary nails are steel and often stay slightly magnetised, so a reader may see a clip or two stay on and think they did it wrong. Say "most of the clips drop" (consistent with fix 2) |
| 4 | warning | "The old definition of the ampere": "That definition is the reason why μ₀ has the tidy value 4π × 10⁻⁷ T m/A." | Since 20 May 2019 μ₀ is a measured constant: NIST/CODATA gives 1.256 637 061 27(20) × 10⁻⁶ N A⁻², which differs from 4π × 10⁻⁷ by about 1 part in 10¹⁰ | Present tense, implies the value is still exact | Add a short clause: "(since 2019 μ₀ is measured rather than fixed, but it still equals 4π × 10⁻⁷ T m/A to better than one part in a billion)". If a number is quoted, add a calcs `kind: fact` entry citing NIST CODATA |
| 5 | warning | Quiz 4 stem: "The same wire is rewound on a tube twice as wide, with the same number of turns over the same length" | — | Physically inconsistent: the same number of turns on a tube twice as wide needs twice the length of wire | Reword: "A second solenoid is wound on a tube twice as wide, with the same number of turns over the same length, and carries the same current." Answer and explanation stay as they are |
| 6 | info | "Electromagnets are used wherever …": "Many electric motors use them too." (writer's open point) | Siyavula 10.2 "Real-world applications": the electric motor is named as "Perhaps the most obvious example" of a device using electromagnets; it also lists bells, relays, loudspeakers, scrapyard cranes and security doors | Same list plus motors | Supported by the lesson's main source; no change needed |
| 7 | info | "Infinitely long wires cannot be built, so since 2019 the ampere has been based instead on the charge of one electron, e." | NIST (Ampere: Introduction) gives two reasons: the definition was a "completely hypothetical situation" that could not be realised, and it was tied to the drifting kilogram artefact; since 20 May 2019 the ampere is based on the elementary charge e | One reason only | Acceptable simplification at this level; optionally "Such wires cannot be built, so …" is fine as is |
| 8 | info | Section "Oersted's discovery", the battery warning "a bare wire has very little resistance …" | Siyavula's experiment uses hook-up wires with clips and limits the current to 10 seconds because "the wire has very little resistance on its own" | Paraphrased, not copied | Fine. "bare wire" could read as "uninsulated"; "a wire on its own" is clearer |

## Formulas and citations
- `B = μ₀I/(2πr)`, cite reading1 at "Eq. (9.1.7), p. 5": correct. Eq. (9.1.7) is on printed p. 5, the infinite-length limit of the finite rod; MIT writes `a` for the distance, the page `r` (notation only).
- `B = μ₀I/(2R)`, cite reading1 at "p. 9, B₀ below Eq. (9.1.15)": correct. Eq. (9.1.15) is at the foot of printed p. 8; `B₀ = μ₀I/2R` is defined in the first line of p. 9.
- `B = μ₀nI, n = N/L`, cite reading1 at "Eq. (9.4.3), p. 20": **wrong page**, Eq. (9.4.3) is on p. 21 (finding 1). MIT writes `l` for the length; the page `L` (notation only).
- `F/L = μ₀I₁I₂/(2πd)`, cite reading1 at "Eq. (9.2.1), p. 13": correct. MIT gives the force vector `F₁₂ = −(μ₀I₁I₂l/2πa) k̂` on p. 13, followed by "same direction attract, opposite repel"; the page's per-metre form is the same equation divided by l.
- μ₀ = 4π × 10⁻⁷ T m/A: Eq. (9.1.2), printed p. 2 (calcs entry mu0): correct.
- Earth's field 0.5 gauss = 5 × 10⁻⁵ T: Problem 9.13.12, printed p. 67: correct.
- Iron factor 10³ to 10⁴: Sec. 9.6.4, printed p. 31 ("10³ or 10⁴ times greater than the applied field"): correct.
- Oersted 1820, lecture demonstration, compass over a wire: Siyavula 10.2 (and NIST Ampere: History). Correct.
- Right-hand (grip) rule, both forms (straight wire; loop with thumb out of the north face), ⊙ and ⊗ with the arrow tip and feathers, conventional current, "the wrong hand always gives the wrong answer": all in Siyavula 10.2. Correct.
- Solenoid field outside like a bar magnet: Siyavula 10.2 (Figure 10.3 text). Uniform field inside: MIT Sec. 9.4. Correct.
- Ampere definition 1948–2019, 2 × 10⁻⁷ N per metre at 1 m: NIST Ampere: Introduction (the definition text, "Until 2019", "Starting on May 20, 2019 … elementary charge") and Ampere: History ("In 1948, the CIPM officially adopted the new definition"). Correct. The history URL now redirects to `/si-redefinition/ampere/ampere-history`; consider updating the reference URL.
- Claims not in a cited source but standard and correct: iron filings forming circles; field lines of a wire are closed with no start or end; a flat coil of N turns gives N times the centre field; 1/r versus 1/r² explained by spreading sideways versus in all directions.
- "μ₀ … plays the same part for magnetic fields that k played for electric ones": a loose analogy (k = 1/(4πε₀), so μ₀ really pairs with ε₀). Acceptable at this level as "a constant of nature that sets the strength"; info only.

## Arithmetic and answer checks
All recomputed by hand; `npm run calc:test -- -k fields-from-currents`: 20 passed.
- Plot caption: μ₀I/(2πr) × 10⁶ = 2 × 10⁻⁷ × 10⁶ I/r = 0.2 I/r μT. Correct. At I = 20 A, r = 0.02 m: 200 μT, inside the 0–250 range.
- Worked example (a): 2 × 10⁻⁷ × 12 / 0.030 = 8.0 × 10⁻⁵ T = 80 μT. Correct. (b): 2 × 10⁻⁷ × 12 / 5 × 10⁻⁵ = 0.048 m. Correct.
- Lab solenoid: n = 500/0.20 = 2500 m⁻¹; B = 4π × 10⁻⁷ × 2500 × 2.0 = 6.28 × 10⁻³ T → 6.3 mT. Correct. Ratio 6.28 × 10⁻³ / 5 × 10⁻⁵ = 126 → "about 130" is right at two significant figures (info: "about 125" or "more than a hundred" would be closer).
- Power cord: 2 × 10⁻⁷ × 10 × 10 / 0.0040 = 5.0 × 10⁻³ N/m; × 2.0 m = 1.0 × 10⁻² N; m = F/g = 1.02 g. Correct; repulsion for opposite currents correct.
- Ampere check: 2 × 10⁻⁷ × 1 × 1 / 1 = 2 × 10⁻⁷ N/m. Correct.
- Quiz 1 (index 0): thumb towards the viewer, fingers curl anticlockwise. Answer 0 correct; the other three are wrong; explanation true.
- Quiz 2 (index 1): B ∝ 1/r, 30 × 6/2 = 90 μT. Answer 2 correct. 10 μT (inverted), 30 μT (no change), 270 μT (1/r²) are all wrong.
- Quiz 3 (index 2): n = 2000 m⁻¹; B = 4π × 10⁻⁷ × 2000 × 0.50 = 1.257 × 10⁻³ T → 1.3 mT. Answer 2 correct. Distractors: 0.38 mT (= μ₀ × 600 × 0.50, explained), 0.63 mT, 5.0 mT, all wrong. Writer's open point on the 4% tolerance: 1.3 mT is the correct two-significant-figure rounding of 1.257 mT (3.4% off), so the tolerance is justified; optionally write "$1.26 \times 10^{-3}\ \text{T} \approx 1.3\ \text{mT}$" in the explanation and give the calcs entry `expected: 1.26 mT` with a 0.5% tolerance, as the other entries do. Info only.
- Quiz 4 (index 3): B = μ₀nI has no width; answer 0 correct (stem wording, finding 5).
- Quiz 5 (index 4): opposite currents repel; answer 1 correct; third-law statement true.
- Flashcards: all five true. "a thousand times stronger or more" matches MIT's 10³ to 10⁴.
- Calcs metadata (info): `oersted-year` has `origin: mit` with `source: {cite: mit, at: 'Sec. 10.2'}`, but `mit` here is the page's source URL, Siyavula; `ampere-years` has `origin: mit` but its source is NIST. If `origin` means "taken from a cited source", these are fine; if it means MIT, change them.

## Only earlier terms
- Magnetic field, tesla, field lines, compass, domains, ferromagnetic, the Earth's field, the force F = BIL and the direction rule: lesson 6.9 (magnetic-fields-and-force), a prerequisite.
- Conventional current, ampere: lesson 6.6 (current-and-ohms-law), a prerequisite.
- k: lesson 6.2 (coulombs-law); elementary charge e: lesson 6.1 (electric-charge). Both reach this page through 6.9's prerequisites. Fine.
- Newton's third law: Block 2, reached through 6.9's prerequisites (newtons-second-law etc.). Fine.
- New terms introduced here before use: ⊙ / ⊗, right-hand grip rule, permeability of free space μ₀, solenoid, turns per metre n, electromagnet, relay. All defined where first used.
- Info: "ferromagnetic" and "domains" are bolded and defined again although 6.9 already defines them; a short "As in lesson 6.9, iron is ferromagnetic: …" would avoid repeating 6.9.

## Coverage
- §4 row 6.10: "Magnetic fields from currents", old sources CP 22.9 (fields produced by currents) and 22.10 (force between parallel conductors), PhET magnets-and-electromagnets. Covered: Oersted, straight wire (direction and size), loop, solenoid, electromagnets, parallel wires, old ampere definition, PhET with the Electromagnet screen.
- Siyavula 10.2 fully covered (straight wire, loop, solenoid, applications, both experiments). Siyavula's power-line environment box is left out; it does not matter.
- VWO level: B = μ₀I/(2πr) and B = μ₀NI/L are the usual VWO formulas; the centre-of-loop formula and F/L between wires go slightly beyond, but are clearly presented and fine.
- No repetition of 6.9 beyond a short recap (finding in "Only earlier terms"); no induction (6.11): nothing about changing fields, flux or induced voltage. Good.
- Ampère's law and Biot–Savart are not named, correctly left to the university lessons via leadsTo.

## Where this leads
- 8.02 Lecture 15 = `content/year-1/8.02/biot-savart-law.mdx` ("Forces on currents and the Biot–Savart law"): it derives B = μ₀I/2πa, the ring at its centre and on its axis, and parallel currents attract. Matches the `why`.
- 8.02 Lecture 18 = `content/year-1/8.02/ampere-law.mdx` ("Levitation and Ampère's law"): the straight wire and the solenoid by Ampère's law. Matches.
- `towards: false` is correct (6.10 is not the block's last lesson).

## Licensing and AI terms
- No sentence copied from Siyavula, MIT or NIST; the closest (Siyavula's battery warning and "wrong hand" remark) are paraphrased in the page's own words.
- No figures copied: one generated Plot; no diagrams from the sources.
- Worked examples and quiz questions are the page's own. The lab-solenoid example has the same shape as MIT Problem 9.13.12 (a solenoid's field compared with the Earth's) but with different numbers (500 turns, 20 cm, 2.0 A versus 3000 turns, 60 cm, 5.0 A); acceptable.
- No Siyavula logo or "Everything Science" branding; the source title is descriptive.
- No MIT material marked "excluded" or "All rights reserved" in Chapter 9.
- NASA and ESO not used.
- No forbidden source cited or used (no OpenStax, LibreTexts, Khan, CK-12, IOPSpark, Wikiwijs, Wikipedia, Feynman, Tong). The §4 row still names OpenStax sections (CP 22.9, 22.10); they were not opened and the page does not cite them.
- NIST pages are US government works; used for facts only.

## Notes
- No em dashes on the page.
- `content:check` and `npm run build` were not run by this review.
- Fixes needed before `status: reviewed`: finding 1 (error); findings 2–5 (warnings) recommended.

## Resolution (2026-11-20, by the page author)
1. Fixed. Checked in the MIT Chapter 9 PDF: Eq. (9.4.3) is at the top of printed p. 21 (p. 20 ends with Eq. 9.4.2). The solenoid Formula now has at="Eq. (9.4.3), p. 21", and the calcs entries quiz-solenoid-n, quiz-solenoid-field, quiz-solenoid-wrong, lab-solenoid-n and lab-solenoid-field (and the new quiz-solenoid-choice) cite p. 21.
2. Fixed. The sentence now reads: electromagnets use soft iron, which keeps very little of its magnetism when the current stops; in other materials the domains stay lined up after the field is gone, which is how a permanent magnet is made, cited in the text to MIT 8.02T notes Sec. 9.6.4, p. 32 (checked: "can keep those dipole moments aligned ... the origin of permanent magnets").
3. Fixed: "most of the clips drop when you disconnect".
4. Fixed. Added: since 2019 mu0 is measured rather than fixed, but the measured value given by NIST still equals 4 pi x 10^-7 T m/A to about one part in 10^10. New reference nist-mu0 (NIST CODATA value page, 1.256 637 061 27(20) x 10^-6 N A^-2, read 2026-11-20) and calcs entry mu0-measured-vs-old (relative difference 1.3 x 10^-10).
5. Fixed: quiz 4 now starts "A second solenoid is wound on a tube twice as wide, with the same number of turns over the same length, and carries the same current." Answer and explanation unchanged.
6. No change needed (supported by Siyavula 10.2).
7. Info on the ampere reasons: kept as is (acceptable simplification). Info on quiz 3 tolerance (Arithmetic section): the explanation now shows 1.26 x 10^-3 T = 1.3 mT; calcs quiz-solenoid-field now expects 1.26 mT at 0.5%, and a separate entry quiz-solenoid-choice keeps the 4% match to the answer choice 1.3 mT.
8. Battery warning wording left as it is. NIST history reference URL updated to https://www.nist.gov/si-redefinition/ampere/ampere-history (200 OK). "Only earlier terms" note: the iron paragraph now starts "As in lesson 6.9, iron is ferromagnetic: ..." instead of defining ferromagnetic and domains again.
Calcs metadata note (origin: mit on oersted-year and ampere-years): origin marks "taken from a cited source" in the Block 5 and 6 calcs files (see the file header), so left as is.
Siyavula licence: the only Siyavula URL cited (10-electromagnetism-02, 10.2 Magnetic field associated with a current) is a CCBY row in docs/siyavula-licences.tsv.
Checks: npm run calc:test -- -k fields-from-currents: 22 passed. npm run content:check: 0 error(s), no warnings for this page.
