---
page: content/year-4/8.286/anthropic-multiverse.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-2-inflationary-cosmology-is-our-universe-part-of-a-multiverse-part-ii/ (read; local copy page.html)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/4d101efb212cd7dbb3780edb6055a2a1_4OinSH6sAUo.pdf (read; transcript pp. 1–32, local pdftotext copy)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec02/ (read; slides 1–12, local pdftotext copy)
verdict: pass-with-notes
---

# Review: The anthropic argument and the multiverse — and where the course begins

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Formula "Vacua with a vacuum energy as small as ours", `at="slide 'The Landscape and Environmental Selection'"` | The slides **are** numbered: each carries a printed number (–1– … –12–). The equation $10^{-120}\times10^{500}=10^{380}$ is on slide **6** ("The Landscape and Environmental Selection"), and Guth also says it aloud on transcript p. 12. | Cites the slide by its title, on the assumption that the slides have no numbers. | Change to `at="slide 6"`. A title is not a wrong citation, but it breaks the site's convention, and the assumption behind it is incorrect. |
| 2 | warning | "Questions about the multiverse" section (whole list) | The Q&A comes in two batches. The first comes **during the review of Lecture 1, before the landscape counting** (pp. 5–11): open pocket universes, repulsive gravity, zero energy, the "speckled" universe, what expands, the future and the cyclic universe, decays inside our pocket, what distinguishes vacua, particles and energy. The second comes **after the Rees/Linde/Weinberg anecdote** (pp. 17–22): carbon-based life, separate pockets and collisions, "long-lived", the accelerated observer, whether it is science, stability, whether our vacuum is longer-lived. | All the questions sit in one section placed after the anthropic material and the "three winds", as if they all came at the end. | Either split the list, or add one sentence: "the first questions came while Guth was reviewing Lecture 1 (pp. 5–11), the rest after the overview ended (pp. 17–22)". |
| 3 | info | "The explanation of last resort", last sentence | Slide 9: "It is even hard to deny that, as of now, the selection-effect explanation is by far the most plausible that is known." | "it is hard to deny that it is, so far, the most plausible explanation known." | This follows the slide's sentence structure closely. It is short, so it is not a licence problem, but consider rewording it or marking it as Guth's phrase. |
| 4 | info | "Measuring v and r", final parenthesis | Guth (p. 30) says ignoring gravity "is OK for the nearby stars". | "fine for nearby galaxies" | This is a sensible correction of a slip. Following writing rule 4, it could get a short bracketed note (e.g. "[Guth said 'stars']"). Optional. |
| 5 | info | "Questions about the multiverse", accelerated-observer bullet | Guth does not name the effect. He says the accelerating observer sees particles at a temperature set by the acceleration, and adds "You don't even need relativity… you don't [need] general relativity" (p. 20). | "[this is the Unruh effect]" | The bracketed note is correct: an observer with uniform acceleration in the Minkowski vacuum sees a thermal bath, which is the Unruh effect. The bracket marks it properly as the page's addition. "Cosmologists take freely falling … observers to define reality" generalises Guth's "we tend to just adopt the philosophy". That is acceptable, but "Guth says cosmologists tend to…" would be a more faithful attribution. |
| 6 | info | Callout "Later developments" | Guth (p. 19) already mentions "at least one astronomical paper" that looked for bubble collisions and found nothing definitive. This is presumably the WMAP-based search of Feeney et al. (2011), which predates the lecture. | "Searches … in WMAP and Planck data have found no convincing signal so far", under "Later developments". | The WMAP search is not a later development; the 2013 lecture already refers to it. Suggest: "The search Guth mentions used WMAP data; later work, including Planck data, has still found no convincing signal." I am not certain which Planck-era bubble-collision analyses exist, so I did not verify the "Planck" part. |

No errors in physics, numbers or attributions were found.

Claims checked against the source and found to agree:
- The five summary slides (slides 1–5; pp. 1–4).
- The range from $-10^{120}$ to $+10^{120}$ (slide 5; p. 5). The "$10^{123}$" answer (p. 5).
- The thin slice of $10^{-120}$ (p. 12).
- About 1 g/cm³ give or take a factor of 10, $10^{-30}$ g/cm³, and "better than laboratory vacua" (pp. 12–13).
- "Chance? Luck? Divine providence?" (slide 6; p. 13).
- Weinberg 1987, "first to … sometimes be believed" (p. 13).
- Fly apart or collapse (slide 7; pp. 13–14). The $10^{-20}$ s figure (p. 20).
- Galaxies assumed necessary for life (p. 14).
- Martel–Shapiro–Weinberg 1998, factor of about 5 (slide 7; p. 14).
- Last resort (slide 8; pp. 14–15).
- The three winds (slide 11; p. 16).
- Each Q&A bullet (pp. 5–11, 17–22).
- Hubble's law, "Hubble expansion rate", "lifetime of an astronomer", the factor of about 10 (pp. 26–27).
- The Lemaître/Livio story, the MIT PhD of 1927, the Harvard College Observatory, Lemaître estimating $H$ from averages without showing linearity (pp. 27–29).
- Standard candles and Weinberg's book (p. 29).
- The Doppler set-up: source receding, observer stationary, air at rest, $\Delta t_O > \Delta t_S$ (pp. 30–31).

The Rees/Linde/Weinberg anecdote is paraphrased in indirect speech and does not reproduce slide 12's quoted sentence verbatim. The setting is correct: Rees and Linde spoke at a conference; Weinberg was not present and commented later in an article (pp. 16–17).

## Arithmetic and answer checks
- $10^{-120}\times10^{500}=10^{380}$: correct.
- Worked example, recomputed with python3:
  - $0.31\times8.6\times10^{-30}=2.67\times10^{-30}$ g/cm³, which rounds to 2.7: correct.
  - $5.5/2.7\times10^{-30}=2.04\times10^{30}$, and $5.5/2.666\times10^{-30}=2.06\times10^{30}$. Both round to "about $2\times10^{30}$": correct.
  - The input $\rho_c\approx8.6\times10^{-30}$ g/cm³ matches $3H_0^2/8\pi G$ for $h=0.677$ (8.61e-30); for $h=0.674$ it gives 8.53e-30.
  - $\Omega_m\approx0.31$ is a reasonable present-day value.
  - The example is original: Guth uses about 1 g/cm³ for "things around this room", while the page uses the Earth's mean density and a computed mean matter density.
  - Minor note: these are post-2013 parameter values, which is acceptable in an original example.
- Quiz:
  - Q1 (answer 1, $10^{380}$): correct.
  - Q2 (answer 1, density example): correct. Matches slide 6 and pp. 12–13.
  - Q3 (answer 1): correct. The explanation ("within about a factor of 5 of the observed value, or less") matches p. 14 and slide 7.
  - Q4 (answer 1, last resort): correct. Matches slide 8 and p. 15.
  - Q5 (answer 1): correct. Matches p. 28. The explanation's claim that Lemaître himself cut the paragraphs is correct (pp. 27–28).
- Flashcards: all four are consistent with the source (slides 6, 7 and 11; pp. 26–27).

## Coverage and order
- Main order matches MIT: summary recap → landscape counting → density example → Weinberg/MSW → controversy and last resort → summary and three winds → Rees/Linde/Weinberg → questions → housekeeping → Hubble's law → Lemaître → $v$ and $r$ → Doppler set-up. The exception is the placement of the first batch of questions (finding 2).
- Omitted (all minor):
  - The numerical content of the Lecture 1 recap: CMB uniform to 1 part in $10^5$, Ω = 1.0010 ± 0.0065, the ripple spectrum (pp. 1–3; slides 2–3). The overview "paradigm in great shape" summary (slide 10; p. 15). Both are covered on the Lecture 1 page.
  - Slide 8's parenthesis that anthropic explanations are also discussed for the Higgs mass, the top-quark mass and the size of density perturbations. This one is worth a clause.
  - The question on what "long-lived" means: long compared with about $10^{10}$ years (p. 20).
  - The last question: our low-energy vacuum is presumably longer-lived than average, but with an infinite future decays still happen (p. 22).
  - Einstein's static model, and Hubble convincing Einstein (p. 29).
  - Guth's notation for the Doppler problem: $u$, $v$ positive for recession, $\Delta t_S$, $\Delta t_O$ (p. 31). Optional, since the calculation is on the Lecture 3 page.
  - The problem-set deadline remarks.
- Additions not in MIT: the Unruh-effect name (bracketed, fine), the worked example (original), and the later-developments callout.

## Licensing
- Slide 1's "Image courtesy of IPAC" image and slide 3's image ("removed due to copyright restrictions") are not reproduced or described on the page; the page has no images at all. Since no "Courtesy of" material is used, no `courtesy:` entry is needed.
- No OpenStax or LibreTexts material.
- No paragraph-length verbatim copying was found. Short slide phrases ("explanation of last resort", "Three winds blowing us towards the multiverse", "Chance? Luck? Divine providence?", "flies apart before galaxies can form") are standard terminology or short phrases. See finding 3 for the one closely paraphrased sentence.

## Notes
- `leadsTo` checks:
  - Lecture 3 is "The Doppler Effect and Special Relativity", so that link is correct (page `doppler-effect`).
  - Lecture 20 is "Supernovae Ia and Vacuum Energy Density"; the existing `vacuum-energy-puzzle` page has an "anthropic selection" section, so that link is correct.
  - The prerequisite `eternal-inflation` exists (Lecture 1).
- Later-developments callout:
  - IAU 2018 recommendation of "Hubble–Lemaître law": correct. It was the resolution adopted by electronic vote in October 2018.
  - Bubble collisions: see finding 6 (partly pre-2013; Planck part unverified).
- The Lemaître biography follows Guth's account (MIT PhD 1927, most of the work at Harvard College Observatory). It is attributed to the lecture through context. "Guth notes that…" would make the attribution explicit, since historians date the details slightly differently. This is uncertain and minor.
- Formula `v = H\,r` cited to `reading1` p. 26 is correct. It is a board/spoken equation, not on any slide (the slides end at slide 12, before the housekeeping).

## Resolution (2026-11-14, by the page author)

- Warning 1: the landscape-counting formula now cites "slide 6".
- Warning 2: the Q&A section now says the questions came in two batches (during the review of Lecture 1 and after the anecdote) and are gathered there.
- Info: the slide 9 sentence is reworded and slide 8's other anthropic targets (Higgs and top masses, density ripples) added; "nearby stars" slip bracketed; the geodesic-observer view attributed to Guth; the long-lived (~10^10 yr) and longer-lived-vacuum answers added; the callout now says the WMAP search is the one Guth mentions, with later analyses also null.
