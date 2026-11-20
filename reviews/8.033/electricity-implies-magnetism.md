---
page: content/year-2/8.033/electricity-implies-magnetism.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture14_em1/ (read: the slide PDF, deck titled "MIT Course 8.033, Fall 2006, Lecture 14", 21 slides. Text extracted with pdftotext, and all 21 slides rendered and checked as images, including the equations on slides 11, 13, 14, 16, 17, 18, 20 and 21)
  - No transcript exists for this lecture (slides only), so nothing on the page can be checked against spoken content.
verdict: pass-with-notes
---

# Review: Why relativity and electricity imply magnetism

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Bracket after the Lorentz force law; quiz Q1 explanation | Slides 13–18 define $B$ as entries of $M$ in $\mathbb F = (q/c)\mathbf{MU}$, so $B$ has the units of $E$. Slide 11 (from 8.02T) uses SI: $k_e = 1/4\pi\varepsilon_0 = 8.9875\times10^9$ N m²/C². The slides never name a unit system. | "The slides use Gaussian units, in which $B$ is measured in the same units as $E$" | This overstates it. Charge stays in coulombs and $E$ in V/m (slide 11), so the slides use SI with $B_\text{slides} = c\,B_\text{SI}$. That is like Gaussian units in that $E$ and $B$ share units, but it is not the Gaussian system. Suggested: "The slides' $B$ has the same units as $E$ (as in Gaussian units); it is $c$ times the SI field, so in SI units the law reads …". The SI forms on the page (flashcard, example (a): $B_z' = -\gamma\beta E_y/c$) are correct. |
| 2 | warning | "A short history", inverse-square law | Slide 7 (8.02T, dated 2004): "Actual precision better than 2/10⁹!" | "today tested to better than 2 parts in $10^9$, as the slide puts it" | "today" is the page's own word, and it is not right. The 2×10⁻⁹ bound is the old Plimpton–Lawton (1936) level. Williams, Faller and Hill (1971) already pushed the exponent's deviation from 2 down to about 3×10⁻¹⁶. This is from my own knowledge, not MIT; please verify it. Suggested: drop "today", e.g. "tested, as the 8.02 slide puts it, to better than 2 parts in $10^9$ (later experiments did far better)". |
| 3 | warning | "Charge and current", gravity analogy | Slide 19 lists the parts of gravity as "how matter affects fields … and how fields affect matter", then says "the former [is] that matter moves along geodesics … and the latter that matter curves spacetime". That has former and latter swapped: geodesic motion is how fields (the metric) affect matter. | The page lists the parts in the other order (fields affect matter first, then matter affects fields). That order makes "geodesics, then curvature" the correct mapping. | The page silently corrects a slip on the slide. Rule 4 asks for a short bracket, e.g. "(slide 19 pairs these the other way round, a slip)". |
| 4 | warning | Section "Invariants and the current 4-vector" | Order on the slides: 19 (two parts of EM, gravity analogy), 20 (invariants table), 21 (4-current). | Slide 20 first, then slides 19 and 21. | Either follow the slides' order (19, 20, 21), or say in a bracket that the table has been moved before the "two parts" remark. A small reordering, but the site rule is MIT's order. |
| 5 | warning | Several sentences (see Licensing) | Slides 16 and 21 wording | Some sentences follow the slide text almost word for word | Rewrite them in your own words (see Licensing). |
| 6 | info | Bracket on slide 16 | Slide 16, eq. (3): $\mathbf F = q(\mathbf E + \mathbf u\times B)$, with no $1/c$. Slide 18: $\mathbf F = q(\mathbf E + \frac1c\mathbf u\times\mathbf B)$. | The page notes that slide 16 lacks the $1/c$ and that the definition of $M$ needs it. | Verified. With $U = \gamma_u(\mathbf u, c)$ and $\mathbb F = \gamma_u(\mathbf F, P/c)$, the first row gives $F_x = (q/c)(cE_x + u_yB_z - u_zB_y)$, i.e. $q(E_x + (\mathbf u\times\mathbf B)_x/c)$. The slip claim is correct. Slide 16 also writes "$F\dot u$" for $\mathbf F\cdot\mathbf u$ (a typo, no need to mention it). |
| 7 | info | Power in the 4th component | Slides 13 and 16 write the power as $P$ ("$P = q\mathbf E\cdot\mathbf u$"). | $\dot E$ | This is consistent with the force-acceleration page, which explains that the slides write it as $P$. You could repeat that in a few words here, since $P$ is also the momentum 4-vector. |
| 8 | info | "Coulomb's law", "Relativity answers part of that question (slide 11)" | Slide 11 only shows the red annotation "Why of this form?" | It adds that relativity answers part of the question. | This is a fair reading of Tegmark's annotation and of slide 10 ("Let's look at Einstein's 1905 paper again!"), but it is the page's inference. Consider "Tegmark's annotation asks … ; relativity will answer part of it". |
| 9 | info | Invariants table | Slide 20 lists "Mass $m$": classically Y, relativistically N. The arrow says "Integers!" | It glosses mass as "relativistic mass" $\gamma m_0$, and calls charge an integer in units of the electron charge. | The gloss is the page's own and is correct for the table's sense. Optional: mark it as the page's reading. Quarks carry charges of $\pm e/3$ and $\pm 2e/3$, so "integers" strictly holds for free particles (or in units of $e/3$). Optional bracket. |
| 10 | info | Opening paragraph / source title | The deck is titled "Lecture 14" (slide 5). | It is called Lecture 15. | This matches the site syllabus (`lecture14_em1` = site Lecture 15). Other 8.033 pages (e.g. atoms-photons-nuclei) add one sentence explaining the numbering. Consider the same here. |
| 11 | info | Slide 14 | Slide 14 gives the explicit $M'$ for a pure $\mathbf E$: off-diagonal entries $\mp\beta\gamma E_y$, $\mp\beta\gamma E_z$. | Described only in words. | Optional: show it, or say that $M'_{12} = -\beta\gamma E_y$, which is how $B_z' = -\gamma\beta E_y$ in quiz Q1 arises. |

Formula citations checked:
- Coulomb's law, slide 11: on the slide (the slide has "=" where the page has "≈"; fine).
- Electric force with 4-vectors, slide 13: on the slide as eq. (1).
- Transforming the field matrix, slide 14: on the slide, including eq. (2), $M' \equiv \Lambda M\Lambda^{-1}$.
- The field matrix, slide 16: on the slide, entries match exactly.
- Lorentz force law, slide 18: on the slide with the $1/c$.
- Field transformation, slide 18: on the slide; also derived on slide 17 as eq. (5).
- Current 4-vector, slide 21: on the slide. The slide uses ≡ for $\rho_0 U$; the page uses =, which is fine.

None of these is the page's own formula, and none is mis-cited.

## Arithmetic and answer checks
- I recomputed the transformation numerically. With $\Lambda$ = boost along $x$ (rows $(\gamma,0,0,-\gamma\beta)$, …, $(-\gamma\beta,0,0,\gamma)$) and a general $M$ with arbitrary $E$, $B$, the product $\Lambda M\Lambda^{-1}$ reproduces all six relations on slides 17–18 and the page (β = 0.6 test). $E^2 - B^2$ is unchanged. The pure-$E_y$ case gives $E_y' = \gamma E_y$ and $B_z' = -\gamma\beta E_y$, matching slide 14.
- $k_e = 1/(4\pi\varepsilon_0) = 8.98755\times10^9$ N m²/C²: matches 8.9875×10⁹.
- Example (a): γ(0.6) = 1.25, so $E_y' = 1.25\times10^6$ V/m (correct). $B_z' = -1.25\times0.6\times10^6/3.00\times10^8 = -2.5\times10^{-3}$ T (correct). The sign follows $B_z' = \gamma(B_z - vE_y/c^2)$ in SI.
- Example (b): γ(0.8) = 1.6667 and ρ = 1.667×10⁻⁶ C/m³ (correct). $J = \gamma\rho_0 u = 400.0$ A/m² (correct). However, the line as written, "1.67×10⁻⁶ × 0.8 × 3.00×10⁸ = 400", gives 400.8 with the rounded 1.67. Use "≈ 400", or write it as $(10^{-6}/0.6)\times0.8\times3.00\times10^8$ (info). ρc = 500 A/m² and √(500² − 400²) = 300 = ρ₀c (correct, units correct).
- Quiz Q1: answer index 1 ($E_y' = \gamma E_y$, $B_z' = -\gamma\beta E_y$) is correct for $S'$ moving in +x, in the slides' units. The explanation is right, subject to finding 1 about the wording "units".
- Quiz Q2: answer index 2 (electric charge) is correct per slide 20. The explanation's "integers" qualifier: see finding 9.
- Quiz Q3: answer index 3 (1.67ρ₀) is correct. The explanation is right: time component γρ₀c, and length contraction raises the density.
- Flashcards: the Lorentz force in the slides' units and in SI is correct. The six transformation rules match slide 18. $J_4 = (\vec J, \rho c) = \rho_0 U$ matches slide 21.
- The calcs file `calcs/8.033/electricity-implies-magnetism.yaml` covers every number on the page (k_e, example (a) and (b), quiz γ, dates and the 2×10⁻⁹ fact). Values agree with my recomputation. Its `inverse-square` fact entry would need its wording updated if finding 2 is fixed.

## Coverage and order
- Slides 1–6: covered (portrait, recap of slides 2–4, practical items and topic on slide 5). Not mentioned: inverse Compton scattering and the Cas A image on slide 4, and slide 6 ("Feedback form & EM wave", apparently an in-class demonstration). Both are optional (info).
- Slides 7–10 (8.02T history): covered. Slides 9 and 10 repeat 7 and 8; slide 10 adds "Let's look at Einstein's 1905 paper again!", which is not mentioned (info).
- Slide 11 (Coulomb): covered. The slide also gives the form $\vec F_{12} = k_e q_1q_2\vec r/r^3$ (omitted, info).
- Slide 12 (potential landscape): mentioned in words only (good).
- Slides 13–14, 16–18: fully covered. Slide 16's remark that $M_{23}$ would also become non-zero for a boost in another direction is omitted. That remark is the reason all three B components are needed; add a clause (info).
- Slide 15 ("FIELD LINE INTERPRETATION") is a title only, with no content in the PDF. The page does not mention it. Optional: note that the field-line picture was shown in class and is not on the slides (info).
- Slides 19–21: covered, but in the order 20, 19, 21 (finding 4).
- Additions not on the slides: the SI unit remarks, the "relativistic mass" gloss, the Hubble repair date (2009), the cosmology callout and the worked example. All are marked as the page's own or clearly separate, except the Gaussian-units wording (finding 1).

## Licensing
- Slides 7–12 are marked "(From 8.02T S05)" and carry 8.022 footers. The page rewrites the history in its own prose and reuses no figure. It describes slide 12's potential landscape only in words. There are no "All rights reserved" notices in the deck (I grepped the text and checked the images).
- Credited images: the Maxwell portrait ("Image courtesy of Wikipedia", slide 1), the Pound–Rebka figure ("Figure by MIT OCW", slide 3), and the NASA/ESA and MIT Junior Lab images (slide 4). None is reused. The page only mentions that a portrait opens the deck. No `courtesy:` entry is needed.
- No OpenStax or LibreTexts material.
- Wording close to the slides (warning, finding 5). Please rewrite:
  - "The source of electromagnetic fields is charged matter, described at each event by a charge density ρ(r⃗, t) and a current density J⃗(r⃗, t)". Slide 21: "The source of electromagnetic fields is matter carrying electric charge, characterized at each spacetime event by a charge density ρ(r,t) and a current density J(r,t)."
  - "for a blob of charge of uniform density ρ₀ in its rest frame moving with velocity 4-vector U". Slide 21: "For a blob of charge of uniform density ρ₀ in its rest frame that moves with velocity 4-vector U".
  - "The total 4-current of many sources, such as electrons and ions moving in opposite directions, is simply the sum of their 4-currents". Slide 21: "the total 4-current from many sources (say electrons and ions moving in opposite directions) is simply the sum of all the individual 4-currents."
  - "Starting with a pure electric field in S, the force in S′ depends on the particle's velocity: there is a magnetic field". Slide 16: "starting with a pure electric field in S, we found that in S′, the force on our particle will also depend on its velocity …, i.e., there is a magnetic field!"
  - Shorter echoes are acceptable as standard phrasing: "new entries … which do not correspond to an electric field" and "stays antisymmetric however we transform". The quotation "as natural as it can be" is short, in quotes and attributed, so it is fine.

## Notes
- Forward links. leadsTo 8.033 Lecture 16 points to `maxwell-equations-four-potential` (lecture: 16, exists as an untracked file). Its title and summary cover Maxwell's equations in 4-vector form and the field of a moving charge, so the "why" is accurate. leadsTo 8.286 Lecture 7 points to `friedmann-equation` (lecture 7, exists).
- Cosmology callout. "matter curves spacetime … becomes the Friedmann equation" is fair: the Friedmann equation is the time-time Einstein equation for a homogeneous, isotropic universe. It might be worth saying that 8.286 Lecture 7 derives it with Newtonian gravity, and that GR gives the same equation. Otherwise a reader following the link may expect a curvature derivation. Info only.
- Hubble "stay of execution" (slide 5, autumn 2006). Servicing Mission 4 was approved in October 2006 and flown in May 2009. The page's bracket is correct and is clearly a later fact.
- The link `/courses/8-033/force-acceleration-interstellar-travel` exists, and that page introduces $Q$ for the force 4-vector, consistent with this page. The prerequisite `particle-processes-unsolved-problems` exists.
- Site rules. The page has no em dashes (grep count 0). Every display equation is a `<Formula>` with `cite` and `at`. It ends with `## Summary`. `status: draft` is appropriate until the findings are resolved.
- Not checked: `npm run content:check`, symbols, and graph labels (outside this review's scope).

## Resolution (2026-11-16, by the page author)

- Warning 1 (units): the page no longer calls the slides Gaussian; it says the slides' B has E's units (c times the SI field).
- Warning 2: the 2-in-10⁹ figure is now the slide's figure, dated to the 1930s, with a note that later experiments went much further.
- Warning 3: the slide-19 former/latter swap is now stated.
- Warning 4: the current paragraph (slides 19, 21) now comes before the invariants table (slide 20), closer to MIT's order; the section is renamed.
- Warning 5: the four close sentences (slides 16 and 21) are rewritten.
- Info: deck numbering explained; the worked example says "≈ 400 (exactly 400 with γ = 5/3)".
