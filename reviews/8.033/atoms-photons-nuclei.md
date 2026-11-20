---
page: content/year-2/8.033/atoms-photons-nuclei.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture12_part1/ (read: local copy of the 31-slide PDF, deck titled "MIT Course 8.033, Fall 2006, Lecture 12"; text via pdftotext plus every slide viewed as an image, slides 24, 27 and 28 rendered at 150 dpi. No transcript exists.)
  - Lecture 14 deck (lecture13_part2, local s13.txt) (read, opening slides only, to check the leadsTo claim)
verdict: pass-with-notes
---

# Review: Atoms, photons and nuclei

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Terminology" paragraph; quiz Q4 explanation | Slide 26: "The mass excess for a nucleus is m₀ − A amu ... the mass excess of C¹² is zero." | Repeats this for a *nucleus*; quiz Q4: "The atomic mass unit is defined as one twelfth of the mass of carbon-12." | The atomic mass unit is one twelfth of the mass of a neutral carbon-12 *atom*. Mass excesses are tabulated for atoms. The bare ¹²C nucleus is lighter by six electron masses, minus their small binding energy (about 0.0033 u), so its "mass excess" would be about −3.07 MeV, not zero. Say "atom" (or "atomic mass") and add a short bracketed note that the slide says "nucleus". Q4's marked answer (carbon-12) is still the right choice. |
| 2 | warning | "Terminology" paragraph; flashcard "Atomic number Z and atomic weight A" | Slide 26 calls A the "atomic weight". | Uses "atomic weight A" with no comment. | Today A is the *mass number*. "Atomic weight" now means the average relative atomic mass, which is not an integer (for iron, 55.845). Following the rule on lecturer slips, add a bracketed note ("the slide says atomic weight; the usual name is mass number") and change the flashcard to match. |
| 3 | warning | Intro, "Lecture 13" | The deck linked as the source is titled "Lecture 12". | Calls it Lecture 13 without saying so. | Add a short note that the site numbers this as Lecture 13 (as in `_course.json`) while the slides say Lecture 12. Otherwise readers who open the source may think the link is wrong. |
| 4 | warning | "Working with photons", link to the wave 4-vector | Slide 24 writes the 3-vector as bold **k** and the 4-vectors as **P** and **K**. | Writes the 3-vector as $\vec k$ and the wave 4-vector as $K$. The linked page `four-vectors-doppler-aberration` uses $\vec k$ for the *4-vector* $(k_x,k_y,k_z,\omega/c)$. | Add half a sentence saying that $K$ is the wave 4-vector written $\vec k$ on the earlier page, and that here $\vec k$ is its spatial part. Otherwise the same symbol means two different things on two linked pages. |
| 5 | info | Slide 28 units note | $E_{\rm binding}/c^2 \approx [\dots]$ MeV (checked in the 150 dpi image). | Says the left side should be $E_{\rm binding}$ when the bracket is in MeV. | The slip is real and the note is correct. Writing "MeV/c²" on the right would also fix it; no change needed. |
| 6 | info | Quark masses | Slide 28: $m_u \approx 4$ MeV, $m_d \approx 7$ MeV. | "The slide's 2006 values; today's are about 2 and 5 MeV". | The current values (PDG: about 2.2 and 4.7 MeV, MS-bar at 2 GeV) support "about 2 and 5". Uncertain, from memory: the PDG ranges in 2006 were about 1.5–3 MeV (u) and 3–7 MeV (d), so the slide's numbers were already at or above the top of those ranges. "The slide's values" would be more exact than "2006 values". |
| 7 | info | Element 118 | Slide 8: "#118 just confirmed!" | "That was in 2006, and element 118 was named oganesson in 2016." | Correct. Optionally add that IUPAC formally recognised the discovery only in December 2015, so "confirmed" in 2006 was early. |
| 8 | info | Slide 11 sentence and cosmology callout | The COBE plot is captioned "Theory and observation agree". | "agree exactly with theory" / "fit theory perfectly". | This is acceptable (FIRAS found a black body to about 50 parts per million), but it is stronger than the slide. "Agree to high precision" would be safer. |
| 9 | info | Slide 23 | The graph shows $E = (\Delta E/\Delta f)\,f + W_A$ with a negative intercept. | Mentions only the slope $h$. | Optionally add that the intercept on the energy axis is $-W_e$. |
| 10 | info | Slide 31 | "Brought to you by Tom Lehrer" over a periodic table. | "The periodic table as set to song by Tom Lehrer." | The reading is reasonable (Lehrer's "The Elements", 1959), but the song is the page's own interpretation, not stated on the slide. |
| 11 | info | Slide 6 | The figure is unlabelled: alpha source, gold foil, scattered alpha particles. | "Rutherford's experiment, not named on the slide." | Correct as marked. Strictly, Geiger and Marsden did the experiment (1909) and Rutherford interpreted it (1911). Optional. |
| 12 | info | Slide 30 | The graph peaks at Fe-56. | "Peaks near iron-56 at almost 9 MeV." | "Near" is correct. The true maximum per nucleon is ⁶²Ni (8.795 MeV), with ⁵⁸Fe and ⁵⁶Fe (8.790 MeV) just below it. No change needed. |

Formula citations checked:
- $\Delta E = h\nu$, slide 7: on the slide (label in the Bohr-orbit figure). Correct.
- $K = h\nu - W_e$, slide 22: the slide states the electrons' kinetic energy as "hν − W_e" in words. The symbol $K$ is the page's own. Correct.
- Photon 4-momentum $P = \hbar(\vec k, k)$, $k = \omega/c$, $P = \hbar K$, slide 24: all three are on the slide. Correct.
- Semi-empirical formula, slide 28: every coefficient (15.8, 18.3, 0.714, 23.2, 12), every power and the $(-1)^Z$ pairing sign match the slide, as does "omitted if A is odd". The term names are correctly marked as "the page's own reading".
- The Rydberg formula and $R \approx 1.097\times10^7$ m⁻¹ are correctly marked "Not on the slides" and are not a `<Formula>`.

## Arithmetic and answer checks
- Rydberg check of every slide 17 wavelength with $R = 1.097\times10^7$ m⁻¹:
  - Lyman: 121.5, 102.6, 97.2, 95.0 and 93.8 nm.
  - Balmer: 656.3, 486.2, 434.1 and 410.2 nm.
  - Paschen: 1875.2, 1281.9 and 1093.9 nm.
  - All match the values the page quotes from the slide, and the page reproduces the slide's values correctly.
- Example (a): $1/\lambda = 1.097\times10^7(1/4 - 1/9)$ gives 656.3 nm. Correct.
- Example (b) and quiz Q1: $1239.84/400 = 3.0996$ eV, which rounds to 3.10. Then $3.10 - 2.3 = 0.80$ eV. Correct; answer index 1 is right.
- Example (c), Fe-56 ($A = 56$, $Z = 26$, even $A$ and even $Z$, so the pairing term is +):
  - The terms are 884.80, 267.86, 126.16, 6.63 and 1.60.
  - The unrounded sum is 485.76 MeV; the page's rounded terms give 485.7. The difference is cosmetic only, but strictly "485.8" or "about 486" would be more accurate.
  - Per nucleon: 8.674, shown as 8.67. Correct.
- Measured Fe-56 binding energy, 492.3 MeV (8.79 per nucleon): agrees with AME tables (8.7904 MeV × 56 = 492.26). The formula is 1.3% low, so "about 1%" is fair.
  - The page gives no source for 492.3, and the calcs entry `iron-measured` cites `{cite: mit, at: 'slide 30'}`. Slide 30 is only a graph and does not give this number. Suggest adding a reference (for example AME2020 or NNDC) to `references` and pointing the calcs entry at it. (Warning, calcs file.)
- Quiz Q2: the marked answer, index 3 ($P = \hbar K$), is right, and the explanation matches slide 24.
- Quiz Q3: the marked answer, index 0, is right. The explanation is correct.
- Quiz Q4: the marked answer, index 2 (carbon-12), is right. For the "atom" wording, see finding 1.
- Flashcards: all correct apart from the "atomic weight" term (finding 2).
- Calcs entry `quarks-proton` (1.6%) is not shown as a number on the page. It is harmless.

## Coverage and order
Slide by slide:
- Slide 1 (welcome) and slide 2 (dynamics recap): not covered; they are a recap.
- Slide 3 (topics): referred to in the intro. The previous page, `force-acceleration-interstellar-travel`, does cover force and acceleration and accelerators, so the cross-reference is correct.
- Slide 4 (aims): covered.
- Slides 5–8: covered.
- Slides 9–13: covered.
- Slides 14–17: covered. Slides 15–16 (Bohr orbits; absorption and emission between levels) are only summarised. Acceptable.
- Slides 18–24: covered, in order.
- Slides 25–31: covered, in order.

The page follows MIT's order throughout. No slide content is left out, apart from the recap on slide 2.

The page adds (all marked as its own):
- the Rydberg formula;
- today's quark masses;
- the oganesson name;
- the term names in the semi-empirical formula;
- the measured Fe-56 value;
- the "valley" of stable nuclei, a reading of slide 29;
- the worked example.

"Particle physics" from slide 3 is not in this deck; it is the topic of the Lecture 14 deck ("Today's topics: Particle physics; the greatest unsolved problems"). So the leadsTo to 8.033 Lecture 14 is correct.

## Licensing
- No images are reused, and every diagram is described in words. The slides contain "Figure by MIT OCW" figures (slides 6, 10, 12, 15–17, 19–21, 27) and images credited to Wikipedia (slides 1, 7, 13, 23, 30), NASA (slide 11) and the National Nuclear Data Center (slide 29). None appear on the page, so no `courtesy` entry is needed. No "All rights reserved" notice appears in the deck.
- No OpenStax or LibreTexts material.
- Wording close to the slides, all short and attributed:
  - slide 4: "better see the big picture, get more out of popular talks and articles, ... 'cocktail party test'", introduced with "as the slides put it";
  - slide 22: "a photon can be treated as just another particle";
  - slide 24: "holds for all particles, even massive ones";
  - slide 27: rest energy as "the sum of all energy contributions: positive ones ... negative ones", a close paraphrase of the slide's bullet;
  - slide 28: "Much work remains to be done in this field, the slide adds".

  Each is a phrase or a single sentence, not a paragraph, so this is acceptable. If the author wants more distance, slide 27 is the closest.
- No em dashes found on the page. The en dashes in slide ranges and in "Klein–Gordon" are fine.

## Notes
- Cosmology callout:
  - The CMB as the cooled glow of the hot early universe, and its release once electrons and nuclei combined into atoms so that photons stopped scattering: both correct and fairly put.
  - The link `/courses/8-286/cmb-spectrum` exists (8.286 Lecture 18), so the leadsTo to 8.286 Lecture 18 is correct.
- "A proton's mass is mostly glue: the energy of the strong field" is acceptable for this level. Strictly, it is the energy of the gluon field together with the kinetic energy of the quarks (QCD binding energy). Optional refinement.
- The "1.7 MeV electromagnetic" figure is given without saying what it is the electromagnetic contribution *to*. The slide does not say either, so the page cannot be more precise without an outside source. Fine as it is.
- In worked example (b), the question wording "How fast-moving, in energy, are the electrons it frees?" is awkward. "What is the largest kinetic energy of the electrons it frees?" would be clearer.
- Quiz Q1 repeats worked example (b) with the same numbers. Consider changing the numbers in one of them.

## Resolution (2026-11-16, by the page author)

- Warning 1: the mass excess note now says the atomic mass unit is a twelfth of a neutral carbon-12 atom (bare nucleus about −3.07 MeV); quiz 4's explanation says "atom".
- Warning 2: "atomic weight" is marked as the slide's term (today the mass number), in the text and the flashcard.
- Warning 3: the intro explains the deck title "Lecture 12" and the site's numbering by class sessions.
- Warning 4: the page notes that the earlier page wrote the wave 4-vector as k.
- Warning 5: the measured 492.3 MeV now cites AME 2020 (new `references` entry; calcs entries use it, origin later-data).
- Info: "agree exactly" softened; Geiger and Marsden named; nickel-62 noted; worked example (b) reworded.
