---
page: content/year-5/8.902/linear-perturbations.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec13.pdf (read; local copy, pdftotext plus pdftoppm renders of pp. 82 and 84)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/mit8_902_f23_lec14.pdf (read; used only to check leadsTo and the page split)
  - https://ocw.mit.edu/courses/8-902-astrophysics-ii-fall-2023/pages/lecture-notes/ (read; saved HTML of the lecture-notes list, used to check _course.json)
verdict: pass-with-notes
---

# Review: How small ripples grow — linear perturbation theory

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Opening paragraph | (Not an 8.902 claim.) The site's own 8.286 pages (`inflation-solutions`, `cmb-spectrum`) discuss the 10⁻⁵ CMB ripples, gravitational instability, and how inflation seeds the ripples. | "8.286 treated the universe as perfectly smooth." | Make it narrower, for example: "8.286's dynamics assumed a perfectly smooth universe. It explained where the ripples come from, but not how they grow." |
| 2 | info | "The ingredients", radiation sentence | Eq. (377): $p/c^2$ is added to $\rho$ both in the continuity flux $\nabla\cdot((\rho+p/c^2)\vec v)$ and in the momentum denominator. $\rho + 3p/c^2$ appears in Poisson's equation. Eq. (377) also has $+\nabla\phi$. | "ρ becomes ρ + p/c² in the inertia and ρ + 3p/c² in Poisson's equation" | Optionally say "in the continuity and momentum equations". Optionally say that the bracketed sign note also applies to eq. (377). |
| 3 | info | "The ingredients", second paragraph | The notes list three bullets for the non-relativistic case: collisionless Boltzmann equation / Jeans moments; no well-defined velocity field because of multistreaming; correct growth on scales > λ_J. They also note, for the relativistic case, that pressure enters the gravitational source. | "Two cautions from the notes." The paragraph then gives all three points. | Change "Two cautions" to "Some cautions", or count the points to match. The content is correct. |
| 4 | info | "The ingredients", first paragraph | The lec13 PDF starts in the middle of the overview: a caption about "the first five stages" and the NASA/WMAP image. The rest of the overview is in earlier notes. | "The notes begin with an overview of cosmic history" | Acceptable. "The notes open with the end of an overview…" would be more exact. |
| 5 | info | Jeans length formula | Eq. (386) gives only $\lambda_J = 2\pi/\tilde k_J \propto v_s/\sqrt{\pi G\bar\rho}$. | Also gives the explicit equality $= \pi v_s/\sqrt{\pi G\bar\rho}$ | Algebra checked and correct (2π·v_s/(2√(πGρ̄))). This is a derived step, so it is fine. Optionally mark it "(from 385)". |
| 6 | info | Jeans mass sentence | $M_J = \frac43\pi\bar\rho\lambda_J^3$ is on p. 85 under "Growth of baryons vs. cold dark matter" (unnumbered). | Stated without a citation. | Optional: add "(p. 85)". |
| 7 | info | Term names and the "exponential vs power law" remark | The notes do not name the terms ("Hubble drag") and do not state the exponential-vs-power-law contrast. It follows from eqs. (383)–(384) vs (391)–(393). | Presented as the page's own explanation. | Fine. This is standard physics and is not attributed to the notes. |

Verified as correct and correctly cited (equation number and printed page):
- Eq. (376), p. 82: continuity, momentum and Poisson equations. The rendered page confirms that the notes print $-\nabla p/\rho + \nabla\phi$. The page's bracketed note is correct: with $\nabla^2\phi = 4\pi G\rho$, the force per unit mass is $-\nabla\phi$.
- Eq. (377), p. 82: described in prose, correctly apart from note 2. $p = \rho c^2/3$ is from the notes on p. 83 (unnumbered). The page's "(eq. 377)" pointer for it is close enough.
- Eq. (378), p. 83: density contrast. Matches.
- Eq. (379), p. 83: both perturbation equations, including the $\frac{32\pi}{3}$ for the relativistic case. Matches.
- Eq. (380), p. 83: $v_s = c_s,\ \sigma,\ c/\sqrt3$, and comoving $\vec x$, $\vec r = a\vec x$. Matches.
- Eq. (381), p. 84: the rendered page confirms $\hat\delta(\vec k, \delta)$ in the inverse transform. The page's bracketed note ("$\hat\delta(\vec k, t)$ is meant") is correct.
- Eq. (382), p. 84: Fourier-mode equation. Matches. The relativistic variant is given in prose.
- Eqs. (383)–(384), p. 84: static case. The notes write $w_0$ and the page writes $\omega_0$, which is harmless. Signs match.
- Eqs. (385)–(386), p. 84: $\tilde k_J = 2\sqrt{\pi G\bar\rho}/v_s$ and the relativistic $\sqrt{32/3}\sqrt{\pi G\bar\rho}/v_s$. Matches.
- Eq. (388), p. 84: $\bar\rho = 3H^2/8\pi G$. Matches.
- Eq. (389), p. 85: $\tfrac32 H^2$ and $4H^2$. Rechecked: $4\pi G\cdot 3H^2/8\pi G = \tfrac32H^2$ and $\tfrac{32\pi}{3}G\cdot3H^2/8\pi G = 4H^2$.
- Eq. (390), p. 85: $H = 2/(3t)$ and $1/(2t)$. Matches.
- Eqs. (391)–(392), p. 85: rechecked. Matter: $n(n-1) + \tfrac43 n - \tfrac23 = n^2 + n/3 - 2/3 = 0 \Rightarrow n = 2/3, -1$. Radiation: $n(n-1) + n - 1 = n^2 - 1 = 0$.
- Eq. (393), p. 85: $\hat\delta \propto a$ (matter) and $a^2$ (radiation). Matches. $D$ normalised to $D(z=0)=1$ matches the notes.
- Eq. (387) (H ≠ 0, pressure dropped) is not shown as a separate Formula. It is covered by the sentence "the pressure term can be dropped" before eq. (389). This is acceptable.

## Arithmetic and answer checks
- Worked example (recomputed with python3):
  - Matter era $\bar\rho = 3H^2/8\pi G$ with $H = 2/3t$ gives $1/(6\pi G t^2)$. Correct.
  - $4\pi G\bar\rho = 2/(3t_1^2)$, so $\tau = \sqrt{3/2}\,t_1 = 1.2247\,t_1$. Correct.
  - $7/1.2247 = 5.715$ and $e^{5.715} = 303.5$, so "≈ 300" is correct. Using the rounded 1.22 gives $e^{5.74} = 310$; either way ≈ 300.
  - $8^{2/3} = 4.000$. Correct.
  - The setup is original (not in the notes). The comparison freezes $\bar\rho$ at $t_1$ for the static case, and the problem says so explicitly.
- Plot: $A t^{2/3} + B/t$ correctly combines the two matter-era modes from eq. (392).
  - With the defaults (A = 1, B = 0.5), the curve runs from 2.84 at t = 0.2 down to a minimum of 1.49 at t ≈ 0.84, then rises to 3.02 at t = 5. It stays inside the range [0, 4].
  - At the extreme slider values (A = 2, or B = 1 with small t), the curves exceed 4 and are clipped. This is only cosmetic. Raising `range` to [0, 6] would avoid it.
  - With A = 0.2 and B = 1, the decaying mode is still larger than the growing mode until about t ≈ 2.4. The caption's "soon dominates" is fine for the default values.
- Quiz:
  - Q1 (answer 1): correct.
  - Q2 (answer 1, Hubble drag): correct. The explanation ("H = 0 → exponential") is correct for the pressure-free case.
  - Q3 (answer 1, larger than λ_J): correct.
  - Q4 (answer 1, δ ∝ a): correct. The explanation matches eqs. (391)–(393).
- Flashcards: all four are correct. The Jeans card's "∝" is consistent with eq. (386). The growing-modes card matches eq. (393).

## Coverage and order
- The page follows the notes' order: basic equations (376–377) → notes on DM and radiation → δ (378) → perturbation equations (379–380) → Fourier (381–382) → static case and Jeans scale (383–386) → H ≠ 0 without pressure (387) → Ω = 1 (388–390) → power laws (391–393) → growth factor D.
- The rest of the Lecture 13 notes, from "Growth of baryons vs. cold dark matter" (p. 85) through 2.B, eqs. (394)–(399), p. 86, is not on this page. It is covered on `why-cold-dark-matter.mdx` as intended. The Lecture 14 PDF opens by repeating p. 86 of the Lecture 13 notes, so putting that material under lecture 14 is reasonable.
- Not reproduced: the explicit Fourier transform pair in eq. (381), described in words only; the radiation versions of eqs. (377), (382) and (384), given in prose; and eq. (387) as a separate formula. None of these are content gaps.

## Licensing
- The notes contain no "All rights reserved" or "Courtesy of" notices (grep of lec13.txt). The only image is the NASA/WMAP timeline, marked public domain, and the page does not reuse it, only mentions it.
- The text is rewritten. I found no copied sentences: the cautions about collisionless DM and multistreaming are paraphrased, and the equations are standard. No OpenStax or LibreTexts material.
- The MIT credit footer is auto-inserted. `license: CC BY-NC-SA 4.0` matches OCW.

## Notes
- leadsTo: 8.902 Lecture 14, "why cold dark matter is needed". This is fair. Lecture 14 notes (p. 86 repeated) state that baryon-only growth gives 10⁻⁵ × 10³ ∼ 10⁻² and conclude "Cold dark matter is needed". The sibling page `why-cold-dark-matter.mdx` has `lecture: 14`, so the link will resolve. There is no `Callout kind="cosmology"`, which is appropriate because this page is itself in the cosmology track.
- Prerequisites `inflation-solutions` and `matter-radiation-equality` exist (content/year-4/8.286/).
- `_course.json` for 8.902: all 21 lecture titles and PDF URLs match the OCW lecture-notes list exactly (Lecture 01 "Key Observations of Galaxies" through Lecture 21 "Lyman-Alpha Forest"; URLs `mit8_902_f23_lecNN.pdf`). The instructor (Vogelsberger), term (Fall 2023) and course URL are consistent with the notes' footer.
- `source.url` and `readings[0].url` are the same PDF. That works, but the OCW resource page (`…/resources/mit8_902_f23_lec13_pdf/`) could be used for `source.url` instead.
- The uncommitted change to `content/year-4/8.286/_course.json` lists `linear-perturbations` and `why-cold-dark-matter` under the 8.286 themes "Structure formation" and "Dark matter" via `pages`. This matches the AGENTS.md suggestion. I did not check whether the schema accepts `pages`; run `npm run content:check`.
- The worked example and plot are original. The notes have no numerical examples on these pages.

## Resolution (2026-11-14, by the page author)

- Warning: the opening now says 8.286's dynamics assumed a smooth universe and explained where the ripples come from, not how they grow.
- Info: eq. (377) described correctly (p/c² in continuity and momentum); the sign-slip bracket now covers eq. (377) too; "Some cautions"; the opening says the notes start mid-way through the overview; the explicit λ_J form is marked as the page's own step and the Jeans mass cited to p. 85; source.url now points to the OCW lecture-notes page. Term names such as "Hubble drag" stay as the page's own explanation.
