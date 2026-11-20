---
page: content/year-4/8.286/temperature-and-decoupling.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-17-black-body-radiation-and-the-early-history-of-the-universe-part-iii/ (not opened directly; the transcript and slides it links were read from local copies)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (read from a local copy split by PDF page, t17.pdf / p17.txt. Pages 15–20 read in full. The printed footers on pp. 17 and 19 were checked with pdftotext and equal the PDF page numbers.)
  - Lecture 17 slides (local copy, s17.pdf / s17.txt). These only summarise Lecture 16. They contain neither the kT(t) formula nor anything on decoupling.
  - https://arxiv.org/abs/1807.06209 (read; PDF text extracted, Table 2)
  - content/year-4/8.286/_course.json (Lecture 18 title). The Lecture 18 transcript was not read.
  - content/year-4/8.286/matter-radiation-equality.mdx (to find where 1 + z = 3,246 comes from)
verdict: pass-with-notes
---

# Review: The temperature of the early universe and decoupling

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | `<Formula>` "Time of decoupling (estimate)" vs. quiz 4 explanation | p. 19: "2.7 over 3,000 to the 3/2 times 13.8 trillion years. And that's about 380,000 years." The expression actually evaluates to 372,600 yr. | The formula shows "(2.7/3000)^{3/2} × 13.8×10⁹ yr ≈ 380,000 yr". Quiz 4 gives the same expression as "≈ 3.7 × 10⁵ yr". | The page contradicts itself, and the displayed equation is off by 2%. Suggest writing "≈ 3.7 × 10⁵ yr" in the formula and adding "(Guth rounds to 'about 380,000 years')". With T₀ = 2.725 K the result is 378,000 yr, which may be what lies behind Guth's figure. |
| 2 | warning | "Temperature as a function of time", line after the first formula | g is the black-body degeneracy factor built up on pp. 1–16: spin states, particle/antiparticle, and 7/8 for fermions (hence 10¾). | "$g$ the total count of particle species" | This is imprecise: g is not a species count, since photons give 2 and e± give 7/2. Suggest "g the effective number of degrees of freedom (spin states, with a factor 7/8 for fermions)", or link to `neutrinos-and-particle-counting`. |
| 3 | warning | Worked example (b): "$1 + z \approx 3{,}246$" | Lecture 15 (as cited on `matter-radiation-equality`) gives 1 + z_eq ≈ 3,226, i.e. z_eq ≈ 3,200. Planck 2018 Table 2 gives z_eq = 3402 ± 26. | 3,246, without a source. It seems to come from the plot caption on `matter-radiation-equality` (Ω_m = 0.30, Ω_r = 9.24e-5 gives 3,245). | State where the number comes from, or use Guth's 3,200 (T ≈ 8,700 K) or Planck's ≈ 3,400 (T ≈ 9,270 K). The conclusion (hotter than 4,000 K, so still ionised) holds for all three. |
| 4 | info | "Recombination and decoupling" | p. 19: "this is pretty much exactly the number that people quote when they calculate this more accurately … So the time of decoupling was about 400,000 years". | "lands almost exactly on the number obtained from careful calculations — about 400,000 years in round numbers." | This reads as if the careful calculation gives 400,000. Guth says it gives about 380,000, and then rounds his own result to 400,000. Suggest: "…lands almost exactly on the number quoted from careful calculations; in round numbers, about 400,000 years." |
| 5 | info | Section order | p. 18: recombination at 4,000 K is introduced first. T ∝ 1/a is then brought in "to estimate when this happens", and decoupling follows (pp. 18–19). | The "Cooling as the universe grows" section (T ∝ 1/a) comes before "Recombination and decoupling". | This small reordering is harmless for teaching, and all the content is there. Optional: note that Guth introduces T ∝ 1/a as the tool for dating recombination and decoupling. |
| 6 | info | Plot caption and worked example (a): "crosses the electron rest energy at about 2.8 s, when the electron–positron pairs start to annihilate" | p. 17: at 1 s kT ≈ 1 MeV > ½ MeV, and the pairs "start to disappear pretty much immediately after that". | The pairs start to annihilate at kT = m_e c² (2.8 s). | The 2.8 s crossing is the page's own heuristic. Pair annihilation is a gradual process that runs on until kT is well below m_e c². This is acceptable as a rough marker, and step (a) already flags it as approximate. Optional: "around this time" rather than "when". |
| 7 | info | "Recombination and decoupling", decoupling | p. 19: photons must stop interacting "with the electron positrons" [sic]. | "free electrons" | The silent correction is right. At 3,000 K there are no positrons left. No bracket is needed, because this is a trivial slip of the tongue, but you could add one under writing rule 4 if you want consistency. |
| 8 | info | Cosmology callout and `leadsTo` (Lecture 18) | `_course.json`: "Cosmic Microwave Background Spectrum and the Cosmological Constant, Part I". p. 20: "continue next time". | Lecture 18 covers the CMB spectrum (observed at 2.7 K) and then turns to the cosmological constant. | This is consistent with the title. The Lecture 18 transcript was not read, so the order "spectrum, then cosmological constant" is **unverified**, although likely. |

### Formula and citation check
- kT = (45ħ³c⁵/16π³gG)^{1/4}/√t, `reading1`, "p. 17 (board)": **page correct**. It is spoken at the top of p. 17 ("45 h bar cubed c to the fifth, divided by 16 pi cubed little g times capital G … to the 1/4 power, times 1 over the square root of t"). It is not on the slides, so "board" is consistent, though the transcript itself does not say "board". I derived it independently: 3c²/(32πGt²) = gπ²(kT)⁴/(30ħ³c³) gives (kT)⁴ = 90ħ³c⁵/(32π³gGt²) = 45ħ³c⁵/(16π³gGt²). **Correct.** A numerical check gives ρc²/u = 1.000.
- kT = 0.860 MeV/√t and T = 9.98×10⁹ K/√t, "p. 17 (board)": **page correct**. Both are on p. 17 ("0.860 MeV"; "9.98 times 10 to the ninth k").
- s ∝ 1/a³, s ∝ T³ ⇒ T ∝ 1/a, "p. 18 (board)": **page correct**. This includes Guth's self-correction that s ∝ 1/a³ "is always true" and only s ∝ T³ needs fixed g. The page reproduces this distinction correctly.
- t_d = (T₀/T_d)^{3/2} t₀, "p. 19 (board)": **page correct**. The "≈ 380,000" in the displayed equation is discussed in #1.
- `planck2018` reference, "Table 2: z* ≈ 1090": **correct**. Table 2 gives z* = 1089.92 ± 0.25 (baseline TT,TE,EE+lowE+lensing) and 1089.80 ± 0.21 (+BAO).

### Claims checked against the transcript
- g = 10¾ at about 1 s, with neutrinos at the same temperature as the photons before e± annihilation: p. 17. Correct.
- The formula is approximate near thresholds and very accurate well inside an era: p. 17. Correct.
- "0.86 ≈ 1", so kT ≈ 1 MeV at 1 s, above the electron's ½ MeV: p. 17. Correct.
- 4,000 K is not a property of hydrogen alone but depends on density; the "re" in recombination is meaningless but conventional: p. 18. Correct.
- Recombination is gradual and dated at the half-way point; decoupling means a typical photon has not scattered since; decoupling is colder because half the hydrogen is still ionised at 4,000 K: pp. 18–19. Correct.
- Matter domination is assumed from decoupling to today, dark energy is not yet in the course, and decoupling is long after equality: p. 19. Correct. (Guth says "we don't yet even know about dark energy", although he mentioned it in Lecture 16. The page's wording "not yet introduced" is fair.)
- The "13.8 trillion years" slip is on p. 19. It is flagged correctly in brackets.
- "About 20% helium and the rest hydrogen": p. 18. The bracket "[By mass the helium fraction is closer to 25%]" is correct. Planck 2018 Table 2 caption: BBN Y_P ≈ 0.2454. Guth does not say whether he means by mass or by number; by number it is about 8%. Fine as written.
- CMB as an image of the universe at decoupling, with the face/eyes analogy: p. 20. Correct and attributed implicitly. The analogy is Guth's, paraphrased.

## Arithmetic and answer checks
These were recomputed with a Python script (CODATA ħ, c, G, k_B, MeV).
- kT at 1 s, g = 10.75: 0.85917 MeV. The caption's "0.859 (lecture rounds to 0.860)" is OK. T = 9.970×10⁹ K. The lecture's 9.98×10⁹ equals 0.860 MeV/k_B (rounded value). The page uses the lecture values, and the caption explains the 0.859 vs 0.860 difference. Optional: note that 9.98 likewise comes from the rounded 0.860, since the unrounded value is 9.97×10⁹ K.
- Plot expression 0.8592·(10.75/g)^{1/4}/√x: at g = 10.75 it gives 0.8592/√t, which matches the formula. Crossing 0.511 MeV: t = (0.8592/0.511)² = 2.827 s, so "about 2.8 s" is OK. With 0.860 the crossing is at 2.832 s. kT ∝ g^{−1/4}, so the statement "smaller g is hotter" is OK. Range check: at t = 0.05 s, g = 10.75 gives 3.84 MeV, inside the range [0, 4]. With g = 2 it gives 5.85 MeV, which is clipped at the left edge only. Acceptable.
- t_d = (2.7/3000)^{1.5} × 13.8e9 = 372,600 yr. See #1. With T₀ = 2.725 K it is 377,800 yr.
- Worked example (a): (0.860/0.511)² = 2.83 s. "≈ 2.8 s" is OK. kT = 0.511 MeV corresponds to T = 5.93×10⁹ K.
- Worked example (b): 2.725 × 3,246 = 8,845 K, so "≈ 8,850 K" is OK. On the source of 3,246, see #3.
- Worked example (c): 2.725 × 1,091 = 2,973 K, so "≈ 2,970 K" is OK. 1,091^{−3/2} × 13.8e9 = 382,950 yr, so "≈ 383,000" is OK. Planck z* = 1089.92 gives 1 + z = 1090.92, which is consistent with 1,091. The example marks the value clearly as "later measured … (Planck 2018)", which is OK. The close agreement with careful ΛCDM results partly comes from compensating approximations: radiation is ignored early, and dark energy is ignored late. This is not a problem for the page.
- Quiz 1: answer 1 (t^{−1/2}). Correct, and the explanation is correct.
- Quiz 2: answer 2 (about 10¹⁰ K, 0.86 MeV). Correct.
- Quiz 3: answer 1. Correct, as on pp. 18–19.
- Quiz 4: answer 2 (about 380,000 years). Correct as the best choice. The explanation's 3.7×10⁵ is arithmetically right.
- Quiz 5: answer 1. Correct, as on p. 20.
- Flashcards: all three are correct. The kT formula matches the derivation.

## Coverage and order
- The page covers transcript pp. 16 (bottom) to 20: the kT(t) formula, the g = 10¾ numbers, T ∝ 1/a, recombination, decoupling, t_d, and the CMB as an image of decoupling. Nothing in this range is left out. The questions on pp. 15–16 (Majorana neutrinos, lepton number) belong to `neutrinos-and-particle-counting` and were not reviewed here.
- Order: there is one small reordering (#5). Otherwise it follows MIT.
- Added material: the plot, the worked example and the Planck z*. All are labelled as the page's own or as later data.

## Licensing
- `grep -il "rights reserved\|courtesy"` on the transcript and slide text finds nothing. No third-party figures are used.
- No paragraphs are copied verbatim. Short phrases such as "image of the universe at decoupling" and "in exactly the way you see someone's face" are close paraphrases of Guth's p. 20 analogy. They are short and acceptable.
- The worked example is original: Guth works no numerical example beyond the t_d estimate.
- Planck 2018 is cited only for one number (z*), so there is no reuse issue. There is no OpenStax or LibreTexts material.

## Notes
- No errors were found. All formula page citations, the derivation of kT(t) and the quiz answers are correct.
- Recommended fixes: #1 (the 380,000 vs 372,600 inconsistency in the displayed equation), #2 (the definition of g) and #3 (the unsourced 1 + z_eq = 3,246).
- Uncertain: whether the kT formula was physically written on the board. The transcript is consistent with this, and it is not on the slides. The content of Lecture 18 is unverified beyond its title.

## Resolution (2026-11-14, by the page author)

- Warning 1: the displayed formula now gives ≈ 3.7 × 10⁵ yr, matching quiz 4. The text adds that Guth rounds to about 380,000 years (378,000 with T₀ = 2.725 K).
- Warning 2: g is now defined as the effective number of degrees of freedom (spin states, particle/antiparticle, fermions counted at 7/8).
- Warning 3: worked example (b) now says where 3,246 comes from (Guth's method with h₀ = 0.67 and Ω_m = 0.30), and gives Guth's 3,226 and Planck's ≈ 3,400. The conclusion holds for all three (8,800–9,300 K).
- Info: the 400,000-year wording now matches the transcript (careful calculations ≈ 380,000; Guth rounds to 400,000). The T ∝ 1/a section has moved after recombination, as in the lecture. The 2.8 s annihilation remark is marked as the page's own rough marker.

## Later change (2026-11-15, from the calculation audit, reviews/calc-audit.md)

- Added a bracket after the formula "With g = 10¾": computed exactly, the formula gives 0.859 MeV and 9.97 × 10⁹ K; the lecture rounds them to 0.860 MeV and 9.98 × 10⁹ K, which the page keeps using. (The plot caption already noted the 0.859.) No other text or value changed. New calcs entries `kT-1s-exact-note` and `T-1s-exact-note` check the two exact values.
