---
page: content/year-5/8.962/schwarzschild-birkhoff-tov.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/96fab1aa22da86fbde1c5abc5b6b8c7e_PVYTNKZDHBo.pdf (read: local copy L20.pdf, 16 pages, extracted with pdftotext; page markers checked against pdftotext -f N -l N for pp. 7, 12, 14; no "rights reserved" or "courtesy" notice in the text)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-20-spherical-compact-sources-i/ (not opened separately; the lecture has no slides or notes, only the transcript)
  - Carroll, Spacetime and Geometry, eqs. 5.13 (Ricci of the static spherical metric), 5.30 (R_tr in the Birkhoff proof), 7.x (G_tt, G_rr of the stellar interior) (from memory, fact-checking only)
verdict: pass-with-notes
---

# Review: Spherical stars: the Schwarzschild metric, Birkhoff's theorem and the TOV equations

The page follows Lecture 20 in Hughes's order and covers it fully. Every formula was checked independently (signature -,+,+,+, c = 1) and is correct; every transcript page cited contains the step cited. All numbers recompute. The quiz answers are right. No error-level findings; the notes below are about precision, one unsupported attribution, and sourcing of the history correction.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Inside: the mass function", bracket after m_b | p. 13: "there is a homework exercise where you guys are going to explore this a little bit", referring to m_b versus m. Hughes does not distinguish rest-mass density from rho. | "(strictly, counting baryons uses the rest-mass density in place of rho; a problem set explores the difference)": reads as if the problem set explores rest-mass density versus rho. | Separate the two: "a problem set explores the difference between m_b and m. [Strictly, counting baryons uses the rest-mass density in place of rho; the lecture does not make this distinction.]" |
| 2 | warning | "Birkhoff's theorem", last paragraph; flashcard "Birkhoff's theorem" | p. 11: "any spherically symmetric vacuum spacetime is going to have a time-like Killing vector". | Repeated as a general fact. | The Killing vector d/dt is timelike only for r > 2GM (it is spacelike inside the horizon). Outside a star (r_star > 2GM) the statement holds. Add "outside r = 2GM" or "outside a star", or attribute it ("Hughes notes..."). |
| 3 | warning | History paragraph, bracket on Schwarzschild's illness and death | p. 8: lung infection, death "several weeks after". | Corrects to pemphigus, May 1916 (both correct to my knowledge: Schwarzschild died 11 May 1916 of pemphigus). | The correction relies on an outside source, but `references: {}` is empty, and calcs entry `history-dates` cites the transcript pp. 7–8 for "died in May 1916", which the transcript does not say. Add a reference (e.g. a biography or the MacTutor entry) and cite it in the calcs fact. |
| 4 | info | History paragraph: "read them while ill" | p. 8: he was ill and recuperating in hospital when he received Einstein's papers. | Keeps "while ill". | Uncertain: by most accounts Schwarzschild found the solution in December 1915 while still serving on the Russian front and was invalided home in March 1916. The page attributes the story to Hughes ("Hughes tells its history"), so this is acceptable; optionally extend the bracket to say the solution was sent to Einstein in December 1915 from the front. |
| 5 | info | "The most general static spherical metric", weak-field remark | p. 3: "the mu that appears here is equal to minus phi with phi itself being very small". | "exactly of this form, with mu = -Phi" | The weak-field metric matches the isotropic form to first order in Phi (1 + 2Phi approximates e^{2Phi}). Say "to first order in Phi" in place of "exactly". |
| 6 | info | TOV recipe, closing paragraph | p. 16: "this is how professionals make models of stars". | "This is how professionals model neutron stars". | Narrower than Hughes; neutron stars are the natural case, so harmless, or write "relativistic stars". |
| 7 | info | Birkhoff proof: "With Lambda time-independent, R_thth keeps its static form" | p. 10: R_thth "turns out to be completely unchanged". | Phrased as following from Lambda-dot = 0. | R_thth contains no time derivatives in the time-dependent metric anyway (Carroll). Harmless; could say "R_thth is unchanged". |

## Arithmetic and answer checks
Recomputed with G = 6.674e-11, M_sun = 1.98847e30 kg, c = 299792458 m/s:
- GM_sun/c^2 = 1476.6 m (page 1477): correct.
- 1.4 x 1477 = 2068 m (precise 2067.2 m): correct.
- 2GM/(r c^2) = 4136/12000 = 0.3447 (precise 0.3445), quoted 0.345: correct.
- Sun: 2 x 1477/6.96e8 = 4.244e-6, quoted 4.24e-6: correct.
- sqrt(1 - 0.345) = 0.8093 (precise 0.8096), quoted 0.810: correct.
- 1/0.810 - 1 = 0.2346, precise 0.2352, quoted 0.235: correct.
- Plot point: r = 12000/2067.2 = 5.805 GM, quoted 5.80; 1 - 2/5.80 = 0.6552, quoted 0.655: correct. The point lies on the -g_tt curve.
- Formula checks (by hand, signature -,+,+,+):
  - Ricci components match Carroll eq. 5.13 with alpha = Phi, beta = Lambda, including R_thth = e^{-2Lambda}[r(Lambda' - Phi') - 1] + 1.
  - e^{-2(Phi-Lambda)}R_tt + R_rr = (2/r)(Phi' + Lambda'): correct.
  - With Lambda = -Phi, R_thth = e^{2Phi}(-2rPhi' - 1) + 1 = 1 - d(r e^{2Phi})/dr, so e^{2Phi} = 1 + a/r: correct.
  - Gamma^r_tt = e^{2(Phi-Lambda)}Phi' = e^{4Phi}Phi' = -(a/2r^2)(1 + a/r): correct. The sign chain d^2r/dt^2 = +a/(2r^2), a = -2GM: correct.
  - R_tr = (2/r) d_t Lambda (Carroll 5.30): correct; d_t R_thth = -r e^{-2Lambda} d_t d_r Phi = 0, so Phi separates: correct; the time rescaling absorbs Phi_2: correct.
  - G^t_t = -(1/r^2) d/dr[r(1 - e^{-2Lambda})] (from G_tt = (e^{2Phi}/r^2) d/dr[r(1 - e^{-2Lambda})] and g^tt = -e^{-2Phi}); T^t_t = -rho; so dm/dr = 4 pi r^2 rho: correct.
  - m_b with factor e^{Lambda} = 1/sqrt(1 - 2Gm/r): correct, and m_b > m for rho > 0.
  - G^r_r = e^{-2Lambda}(2Phi'/r + 1/r^2) - 1/r^2 = 8 pi G P: correct. Solving for Phi' gives G(m + 4 pi r^3 P)/[r(r - 2Gm)]: verified algebraically.
  - Hydrostatic equilibrium: (rho + P) a^r = -g^{rr} P', a^r = Gamma^r_tt (U^t)^2; multiplied by g_rr this is the page's form, and Gamma^r_tt (U^t)^2 g_rr = Phi': correct.
  - U^t = e^{-Phi}, U_t = -e^{Phi}: correct. Matching e^{2Phi(r_star)} = 1 - 2GM/r_star: correct.
- Quiz: Q1 answer 1 (a = -2GM) correct; Q2 answer 1 (static Schwarzschild, no waves) correct; Q3 answer 1 (m < m_b) correct, though the question defines m_b as "the sum of the rest masses" while the formula uses rho (see finding 1; acceptable as Hughes's framing); Q4 answer 1 (pressure gravitates) correct. Explanations correct.
- Flashcards: all correct (see finding 2 for the Killing vector).
- Calcs file: entries agree with the page. Only `history-dates` cites the transcript for a date the transcript does not contain (finding 3).

## Coverage and order
- Order follows the lecture: compact source and static metric (pp. 1–2), areal radius and Schwarzschild coordinates (p. 2), isotropic coordinates and the weak field (p. 3), Ricci tensor (p. 4), perfect fluid and U^t (p. 5), exterior combination (pp. 5–6), theta-theta equation (p. 6), Newtonian matching (p. 7), history (pp. 7–8), Birkhoff (pp. 9–11), G^t_t and mass function (pp. 11–12), m_b (pp. 12–13), G^r_r and dPhi/dr (pp. 13–14), hydrostatic equilibrium (pp. 14–15), TOV recipe (pp. 15–16).
- Every Formula citation was checked against the page markers; all are on the cited transcript pages. Equations are board work reconstructed from speech; the reconstructions are physically correct.
- Left out (minor, fine): the optional problem converting Schwarzschild to isotropic coordinates (p. 3); Hughes's aside that a homologously moving charge distribution still gives a point-charge field, and that Schwarzschild is "the gravitational equivalent of a point charge", to be revisited (p. 9); the reference to P set 3 is given as "a problem-set result".
- Added by the page: the plot, the worked example (original numbers and situation), step 3 of the recipe ("integrate until the pressure vanishes", implied by Hughes's surface matching), and the cosmology callout.
- Bracketed slip notes: the U^t correction (p. 5, "e to the phi... Pardon me. e to the minus") is accurately reported. The illness/date bracket is accurate as to what Hughes said (lung infection, "several weeks"). Other slips the page silently corrects, none needing a bracket: "2/r, the radial derivative of phi equals the radial derivative of lambda" (p. 5; he immediately concludes phi = -lambda), "1 minus 2gm of r over m" (p. 12, should be over r), "dt dr equals ... minus gm over r squared" (p. 7), "only the time-like component of its four-velocity is 0" (p. 15, should be non-zero), "rr component of the stress energy tensor" (p. 13, Einstein tensor), "4 pi rho of r prime" without r'^2 (p. 12), "Western-- excuse me-- Eastern Front" (self-corrected). Nothing invented in the brackets.

## Licensing
- The transcript carries no "rights reserved" or "courtesy" notice. No figures reused; the plot is generated from the formula.
- Paraphrase is the page's own. Short phrases close to Hughes ("algebraic stamina", "energy gravitates", "areal radius") are standard or very short. No OpenStax or LibreTexts material.

## Notes
- leadsTo: Lecture 21 "Spherical Compact Sources II" (constant-density star, realistic equations of state: matches p. 16; Buchdahl's limit is not mentioned in Lecture 20, uncertain whether Lecture 21 covers it, not checked) and Lecture 22 "Black Holes I" (syllabus title matches). Check Lecture 21's content for "Buchdahl's limit" when that page is written.
- Cosmology callout: the use of Birkhoff's theorem (strictly its corollary that matter outside a spherical region does not affect it) for the Newtonian expanding sphere is standard and fairly stated. The 8.902 page cosmological-principle-expansion invokes Birkhoff by name and spherical-collapse does too ("an overdense sphere behaves like a small closed universe"), so those links are apt. The 8.286 friedmann-equation page does not mention Birkhoff; the callout's claim ("that is why ... gives the right answer") is the site's own explanation, not Guth's, which is acceptable as worded.
- Prerequisite link /courses/8-033/schwarzschild-black-holes exists and introduces the metric, as claimed.
- The transcript spells "Carl" on p. 7 and "Karl" on p. 8; the page uses the correct "Karl". Fine.

## Resolution (2026-11-19, by the page author)

1. Problem-set attribution: the bracket now says the problem set compares m_b with m, and separately that counting baryons strictly uses the rest-mass density (introduced in Lecture 21).
2. Killing vector: body, flashcard and summary now say the Killing vector ∂_t is timelike where r > 2GM, in particular everywhere outside a star, attributed to Hughes.
3. Sourcing: added a `mactutor` reference (MacTutor biography of Schwarzschild) and cited it in the bracket; the calcs entry for the death date is now a separate fact with `source: {ref: mactutor}`; `history-dates` no longer claims the transcript says May 1916.
4. "While ill": the story is now attributed to Hughes ("Hughes tells it as work done while ill and recuperating").
5. Weak field: now "has this form to first order in Φ".
6. "how professionals model stars (neutron stars above all)".
7. R_θθ sentence no longer conditional.
8. Buchdahl: checked, Lecture 21 (pp. 4–5) derives Buchdahl's limit, so the leadsTo stands.

Status set to `reviewed`.
