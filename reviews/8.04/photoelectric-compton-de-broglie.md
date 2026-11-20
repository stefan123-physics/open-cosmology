---
page: content/year-2/8.04/photoelectric-compton-de-broglie.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/resources/mit8_04s16_lecnotes3/ (read: Zwiebach, "Particle Nature of Light and Wave Nature of Matter", 8-page PDF, local copy; printed footer page numbers 1-7 equal the PDF page numbers, checked page by page)
  - content/year-4/8.286/temperature-and-decoupling.mdx (read, for the cosmology callout and leadsTo)
  - content/year-2/8.04/_course.json (read, for the leadsTo to Lecture 4)
  - calcs/8.04/photoelectric-compton-de-broglie.yaml (read)
verdict: pass-with-notes
---

# Review: The photoelectric effect, Compton scattering and matter waves

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Compton scattering, last paragraph ("thousands of times smaller"); quiz 4 explanation | p. 6: the carbon atom is "several thousands of times" heavier than the electron | "thousands of times smaller than the electron's" | The ratio is 12 x 1822.9 ≈ 21,900, about twenty thousand. The notes understate it; per writing rule 4, don't repeat it. Write "about 20,000 times smaller" (or "tens of thousands"), optionally with a bracketed note that the notes say "several thousands", and add a calcs entry. |
| 2 | warning | Quiz 4, distractor "Thomson scattering of the same photons" | p. 6: unshifted peak = electron stays bound, whole atom recoils | Marks the bound-electron answer correct (right), but offers "Thomson scattering" as a wrong choice | In standard terminology the unshifted line is coherent (Rayleigh) scattering by bound electrons, the atomic version of classical Thomson scattering, so a well-informed reader could pick it. Replace that distractor with a plainly wrong one (e.g. "The X-ray tube emits a second, unrelated line at that wavelength only at 90°"). |
| 3 | info | Photoelectric section, bracketed note "(The notes say the dependence is on 'the energy' ...)" | p. 2: Millikan "confirmed their linear dependence on the energy" (of the light) | Treats this as a slip | Not really a slip: the photon energy is hν, so the notes' wording is correct. The bracket may be dropped or reworded ("on the photon energy, that is, on the frequency"). |
| 4 | info | Same paragraph, "Einstein's equation predicts ..." | p. 2: "Equation (1.2) allowed Einstein to make a prediction"; the linear dependence actually follows from (1.1) | Silently says "Einstein's equation", i.e. (1.1) | Correct as written; a short bracket noting that the notes cite (1.2) would follow rule 4 (optional). |
| 5 | info | Thomson cross-section, "(in Gaussian units)" | Notes give (2.17) without naming the unit system | Adds "in Gaussian units" | Correct addition (e²/(mc²) is the Gaussian form). Fine. |
| 6 | info | Matter waves, Eibenberger "in 2013" | p. 6: "A recent experiment [arXiv:1310.8343]" | "in 2013" | Consistent with the arXiv number (October 2013). Fine. |
| 7 | info | ħc formula, eq. (1.3) | ħc = 197.33 MeV fm | 197.33 eV nm, with a sentence explaining the equality | Deliberate (read-aloud cannot say "fm"), explained on the page and correct (10^6 x 10^-15 = 10^-9). Fine. |

All 14 formula citations were checked against the PDF: (1.1), (1.2), (1.3) p. 2; (1.10), (1.12), (2.13) p. 3; (2.14), (2.15)-(2.16), (2.17) p. 4; (2.18), (2.19)-(2.20), (2.21) p. 5; (3.23), (3.25) p. 6. Every equation number and page is correct, and every formula matches the notes' physics and notation (m, m_e, λ_C, λ_i, λ_f, θ). The prose page citations (pp. 1, 2, 2-3, 3, 4, 4-5, 5-6, 6, 6-7, 7) also match where the material sits in the notes.

## Arithmetic and answer checks
- hc = 2π x 197.33 = 1239.85 eV nm; "≈ 1239.8" correct.
- λ_C(e) = 1239.85/511,000 = 0.0024263 nm = 2.426 pm; correct. Bohr radius 53/2.426 = 21.8 ("about 20"); 2426 fm / 1 fm ("about two thousand"); both follow the notes and are fair roundings.
- Classical electron radius 2.818 fm ("about 2.8 fm"); correct.
- Molybdenum: 1239.8/0.0709 = 17.49 keV ("≈ 17.5 keV"); shift 0.0731 - 0.0709 = 0.0022 nm = 2.2 pm; correct.
- Plot: curve 2.426(1 - cos θ) over 0-180°, maximum 4.852 pm fits the range [0, 6]; the point (90, 2.426) lies on the curve; the caption's "2λ_C ≈ 4.85 pm" is correct.
- Worked example (a): 1239.8/400 = 3.0995 ≈ 3.10 eV; 3.10 - 2.30 = 0.80 eV; v/c = sqrt(1.6/511,000) = 1.7695e-3 ≈ 1.77e-3; v = 530.5 km/s ≈ 530 km/s. Correct.
- (b): 2.426 x 0.5 = 1.213 pm; 0.0500 + 0.001213 = 0.05121 ≈ 0.0512 nm. Correct.
- (c): sqrt(2 x 511,000 x 100) = 10,109 eV ≈ 10,110 eV; 1239.8/10,109 = 0.1226 ≈ 0.123 nm (nonrelativistic is fine at 100 eV). Ball: 0.145 x 40 = 5.8 kg m/s; 6.626e-34/5.8 = 1.14e-34 m ≈ 1.1e-34 m. Correct.
- Quiz 1: answer 0 correct (current proportional to photon rate; energy hν - W unchanged).
- Quiz 2: 1239.8/2.30 = 539.0 nm; answer 0 correct.
- Quiz 3: 2λ_C = 4.852 pm at 180°; answer 0 correct.
- Quiz 4: answer 0 correct per notes p. 6 (see finding 2 about a distractor).
- Flashcards: all four correct.
- The calcs file covers every number on the page; it lacks an entry for the carbon-atom/electron mass ratio (finding 1).

## Coverage and order
- The page follows the notes' order: Section 1 (Hertz, three observations, Einstein, work function, (1.1)-(1.2), Millikan, ħc and the example, units of h, Compton wavelength and its meaning, (1.12)); Section 2 (Einstein 1916, (2.13)-(2.16), Thomson scattering (2.17), the photon picture, Compton formula (2.18)-(2.20), Compton's experiment (2.21), the two peaks); Section 3 (duality, (3.23), Davisson-Germer, electrons one at a time, Eibenberger, (3.24)-(3.25), classical limit and coherent states).
- Given in words rather than as formulas: (1.8)-(1.9) units of h, (1.11), (3.22), (3.24). Fine.
- Left out (minor): the comparison of (2.13) with the classical E = p²/2m; the suggestion to verify (2.13) from (2.14); "20 million times the mass of the electron" for the molecules (it is really about 18 million; the calcs file notes this); the acknowledgement footnote. None is needed.
- Added: the Gaussian-units remark, worked example parts (b) and (c), the cosmology callout. All correct.
- The notes' own slips ("Thompson" for Thomson, "shown in Figure 2" for Figure 3) are not repeated.

## Licensing
- The notes PDF carries no "All rights reserved" or "Courtesy of" notice (searched the full text); OCW's CC BY-NC-SA terms apply.
- None of the notes' four figures is reproduced; the one graph is generated from Compton's formula.
- No verbatim copying found: sentences are rewritten (the closest is "This is a purely quantum property" vs. the notes' "This is a fully quantum property", a standard phrase). No OpenStax or LibreTexts material.
- The worked example is original: 400 nm on W = 2.30 eV, not the notes' 290 nm on W = 4.05 eV; parts (b) and (c) have no counterpart in the notes. Part (a) asks the same three things (photon energy, kinetic energy, speed), which the page says openly.

## Notes
- Cosmology callout: correct. Photons scattering off free electrons before recombination is Thomson scattering, the low-energy limit of Compton scattering with negligible wavelength change, as the callout says; "first few hundred thousand years" agrees with the 8.286 page's ~380,000 years for decoupling. The 8.286 Lecture 17 page explicitly discusses free electrons scattering photons until decoupling, so the leadsTo is fairly attributed. Optional: name it "Thomson scattering", since the page has just introduced the term.
- The link `/courses/8-286/temperature-and-decoupling` matches the convention used on other pages, and that page exists.
- leadsTo 8.04 Lecture 4 matches the course syllabus (Galilean transformation of the de Broglie wavelength; wave packets and group velocity).
- source.url matches the syllabus entry for Lecture 3. There are no `source.readings` or `references`, so every `cite="mit"` points to the notes; consistent.

## Resolution (2026-11-17, by the page author)

1. The carbon atom's Compton wavelength is now "about 20,000 times smaller" (prose and quiz 4), with a bracketed note giving 12 × 1823 ≈ 21,900 and the notes' "several thousand"; calcs entry `carbon-electron-mass-ratio` added.
2. Quiz 4's choice "Thomson scattering of the same photons" replaced by "The X-ray tube emits two wavelengths at random".
3. The bracketed note on "linear dependence on the energy" removed.
4. No note added for the (1.2)/(1.1) reference; the page already ties the prediction to Einstein's equation.
5. No change.
6. The cosmology callout now names Thomson scattering.

Status set to `reviewed`.
