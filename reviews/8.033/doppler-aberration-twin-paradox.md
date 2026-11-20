---
page: content/year-2/8.033/doppler-aberration-twin-paradox.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture7_kinem4/ (read: the Lecture 7 slide PDF, 23 pages, from a local copy; the text layer is incomplete (slides 5, 7, 9, 11, 13, 18 are mostly images), so every slide was also read from rendered images)
  - content/year-2/8.033/four-vectors-doppler-aberration.mdx (read, to check what slides 5 and 7/11 repeat from Lecture 6)
  - content/year-4/8.286/cosmological-redshift.mdx (read, to check the leadsTo and the cosmology callout)
verdict: pass-with-notes
---

# Review: Doppler effect, aberration and the twin paradox

Slide map used (PDF page = slide): 1 welcome, Einstein portrait ("Image Courtesy of Wikipedia"); 2 summary of last lecture; 3 "The Three Types of 4-Vectors" figure ("Figure by MIT OCW"); 4 title and "Today" list; 5 φ′ = φ, cos θ′ = (cos θ − β)/(1 − β cos θ), k′ = kγ(1 − β cos θ); 6 title "DOPPLER EFFECT"; 7 repeat of Lecture 6 slide 28 (Weiskopf handout, aberration/Doppler names, λ′/λ = k/k′, Resnick tan θ′ form, classical limits, transverse Doppler ω′ = ωγ); 8 "Doppler demos / Doppler applet"; 9 plot of Doppler shift ω′/ω against β = v/c, curves labelled "Einstein", "Doppler, moving source", "Doppler, moving observer"; 10 "Three interpretations: momentum, energy, pulses"; 11 = slide 7 repeated; 12 title "ABERRATION"; 13 cos θ′ formula and plot of θ′ against θ (0–180°) for many β; 14 CERN bubble chamber, "Image removed due to copyright restrictions"; 15 Chandra "Cosmic traffic pile-up in energetic quasar jet" ("Image courtesy of NASA"); 16 VLA 6 cm image of quasar 3C175 ("Image courtesy of NRAO/AUI/NSF"); 17 = slide 3 repeated; 18 "Superluminal communication?" (seven bullets); 19 "THE TWIN PARADOX" cartoon (home path "slow", travel path "fast"); 20 "IS IT RIGHT?"; 21 "Time dilaton examples: GRB's, supernovae, clocks on planes, GPS"; 22 "24 NAVSTAR satellites … 11,000 miles above the earth's surface"; 23 "How GPS receivers calculate your location" (six steps, figure by MIT OCW, speed of radio waves 299,792,459 m/s).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Time dilation in practice, GPS (slide 23) | Slide 23: one satellite gives "a circle of possible locations", three circles meet (trilateration), and "a fourth satellite is required to obtain the elevation". | "one satellite places it on a sphere, three locate it, and a fourth corrects its own clock (slide 23)". | The page's version is the better physics (four unknowns x, y, z, t; a sphere, not a circle), but it is cited to slide 23 without saying it differs from the slide. Per writing rule 4, add a short bracket, e.g. "(the slide says the fourth satellite gives the elevation; in fact it is needed because the receiver's clock is not exact)". |
| 2 | warning | Faster than light? (slide 18) | Slide 18 bullets, in order: velocity addition rules out accelerating past c; "another way, say a type of radiation that moves faster than light?"; can A influence B at spacelike separation; "There is another frame where B happened before A! (PS3)"; draw Minkowski diagram; "By inertial frame invariance, B can then send a signal that arrives back to A before she sent her initial signal, telling her not to send it"; "c isn't merely the speed of light, but the limiting speed for anything". | A bullet list that mirrors the slide one to one, with closely paraphrased wording, including "telling her not to send it" and "$c$ is not merely the speed of light but the limiting speed for anything". | Content is correct, but the section is the closest to the slide wording on the page. Rewrite as prose in the page's own words (e.g. explain the reversal with a one-line Minkowski-diagram or Lorentz-transformation argument, Δt′ = γ(Δt − vΔx/c²) < 0 when v > c²Δt/Δx), and reword the last two sentences. |
| 3 | warning | Time dilation in practice and cosmology callout ("The slides' first examples of time dilation are cosmological") | Slide 21 lists only "GRB's, SUPERNOVAE, CLOCKS ON PLANES, GPS", with no explanation. | Reads GRBs and supernovae as cosmological light-curve stretching by 1 + z, and states the slides' first examples "are cosmological". | The slide does not say which effect is meant; GRBs could also illustrate time dilation in their ultra-relativistic jets (Lorentz factors of hundreds). The interpretation is reasonable but uncertain; mark it as the page's reading ("probably refers to…", "a likely reading of the slide"), and note that the 1 + z stretching is cosmological time dilation (expansion), not the special-relativistic γ of this lecture. |
| 4 | info | Section 1 Formula "Three Doppler factors" (cite slide 9) | Slide 9 is a plot only; no formulas. Checked against the plot: red line from (−1, 2) to (1, 0) = 1 − β (moving observer); green curve reaching about 0.5 at β = 1 and 2 at β = −0.5 = 1/(1 + β) (moving source); black curve diverging at β = −1 and going to 0 at β = 1 = √((1 − β)/(1 + β)) (Einstein). | Formulas given, with the prose saying they are "the page's own reading of the three curves". | Correct and honestly flagged. Optionally put "read from the plot" in the `at` attribute ("slide 9, read from the plot") so the citation itself does not suggest the formulas are printed on the slide. |
| 5 | info | Section 1, slide 10 | Slide 10 lists three interpretations (momentum, energy, pulses) without working any out. | Works out only the pulse picture, flagged as the page's own. | Fine. Optionally add one sentence each for the momentum (photon 4-momentum) and energy pictures, since the slide names three. |
| 6 | info | Section 1, slide order | Slide 8 (Doppler applet) comes before slide 9 (plot) and slide 10 (interpretations). | Mentions slide 8 last, after slide 10. | Minor; move the applet sentence before the plot, or leave as is. |
| 7 | info | Aberration, "Seen from a fast-moving body, light and particles crowd into the forward direction" | Slide 13 only plots θ′(θ). | General statement. | Correct as a description of where sources appear (headlight effect) and of where a fast source's emission goes. Note that with the slide's convention θ is the direction the light travels, so for β > 0 the curves push θ′ towards 180° (light travelling backwards = arriving from ahead). One clause saying this would avoid confusion when a reader compares with the plot. |
| 8 | info | Aberration, bubble-chamber bullet | Slide 14 image is withheld ("Image removed due to copyright restrictions"); only the title survives. | "where fast particles fly out in a narrow forward cone". | Not reused, which is right. The description of what the image showed cannot be verified from OCW; it is plausible (fixed-target collision) but say "would show" or "typically show". |
| 9 | info | Aberration, superluminal-jet note | Not on the slides (flagged as such). | Apparent speed β sin θ/(1 − β cos θ). | Formula correct, but here θ is the angle between the jet and the line of sight, not the light direction θ of slide 5/13. Say so ("θ now the angle between jet and line of sight"), and check that the θ symbol meaning on this page covers both uses. Also, the slides show these jets as aberration/beaming examples; the page does not explain how aberration relates to jets (relativistic beaming makes the approaching jet bright, the receding one faint). One sentence would help. |
| 10 | info | GPS, "11,000 miles … (that is about 20,000 km, so nautical miles)" | Slide 22: "11,000 miles". | Interprets as nautical miles. | Correct arithmetic: 11,000 nmi = 20,370 km, close to the real orbit altitude of about 20,200 km; 11,000 statute miles would be 17,700 km. Fine. |
| 11 | info | Twin paradox | Slide 19 is a cartoon only (home path labelled "slow", travel path "fast"); slide 20 asks "IS IT RIGHT?". | Explanation of the asymmetry (change of inertial frame, less proper time). | Correct and standard, but the reasoning is not on the slides; add "(the reasoning is the page's own; the slides show only a cartoon)" for consistency with the rest of the page. |
| 12 | info | Omitted slides | Slides 2, 3/17 (three types of 4-vectors, figure by MIT OCW), 7/11 (repeat of Lecture 6 slide 28: tan θ′ form, λ′/λ = k/k′, transverse Doppler ω′ = γω). | Not mentioned. | All are repeats of Lecture 6, which the prerequisite page covers (it has tan θ′ and the transverse Doppler effect, citing Lecture 6 slide 28). Optional: one sentence recalling the transverse Doppler effect as the lecture does, and a pointer that slide 17 (spacelike/timelike/null) is shown again before the superluminal argument because spacelike separation is the key. |
| 13 | info | Slide 23 speed of radio waves | "299,792,459 m/s" (slide slip; c = 299,792,458 m/s exactly). | Not quoted. | Nothing to fix; do not quote it. |

Formula check: the only formula printed on a slide, "Aberration and Doppler shift" (φ′ = φ, cos θ′ = (cos θ − β)/(1 − β cos θ), k′ = kγ(1 − β cos θ)), matches slide 5 exactly (it is also on slide 13, cos θ′ only). The "Three Doppler factors" formula is not printed on slide 9 but matches its three curves and is flagged as the page's reading (row 4).

## Arithmetic and answer checks
- Geometric mean: √((1 − β)/(1 + β)) = √((1 − β) · 1/(1 + β)), exact; all three factors are 1 − β + O(β²), so "agree to first order" is right.
- Pulse picture: interval γT(1 + β), ratio 1/(γ(1 + β)) = √(1 − β²)/(1 + β) = √((1 − β)/(1 + β)). Correct.
- Quiz 1: √(0.5/1.5) = 0.577 → 0.58; classical 0.50 and 0.667. Marked answer (index 2) correct.
- Quiz 2: marked answer (index 1) correct. The distractor "Because it would need infinite energy only" is awkward: infinite energy is a genuine reason for matter (the slide's first bullet, via velocity addition); the word "only" is what makes it wrong. Consider a cleaner distractor (info).
- Quiz 3: marked answer (index 3) correct; explanation correct.
- Quiz 4: marked answer (index 3) correct. At 3.9 km/s, ½(v/c)² = 8.45 × 10⁻¹¹ ≈ 8 × 10⁻¹¹, × 86,400 s = 7.3 μs; "about 7 μs" fine.
- Worked example (a): 2 × 4.2/0.6 = 14.0 yr; γ = 1/√0.64 = 1.25; 14.0/1.25 = 11.2 yr; difference 2.8 yr. Correct (turnaround idealized as instantaneous, which is fine).
- (b): ½(3.87 × 10³/3.00 × 10⁸)² = 8.32 × 10⁻¹¹; × 86,400 s = 7.19 μs/day. Correct. 3.87 km/s is the real GPS orbital speed.
- (c): GM/c²(1/R_E − 1/r) × 86,400 s with the calcs-file values = 45.66 μs/day → 45.7. Net 45.7 − 7.2 = 38.5 μs/day. Correct. Position error 38,500 ns × 0.2998 m/ns = 11.5 km; the page's "about 11 km" is a slight under-rounding (calcs file expects 11.6 with tolerance 0.6, so it passes). Suggest "about 11.5 km" or "about 12 km" (info).
- 1 ns of light travel = 29.98 cm → "30 cm". Correct.
- Flashcards: all three correct.
- Calcs file `calcs/8.033/doppler-aberration-twin-paradox.yaml`: every entry recomputed by hand and agrees with the page. Some entries give `source: {cite: mit, at: 'slide 19'/'slide 21'/'slide 23'}` for numbers that are page-own (they also say `origin: page-own`), which is acceptable.

## Coverage and order
- Page follows the slide order: recap (5) → Doppler (6–10) → aberration (12–16) → superluminal (18) → twin paradox (19–20) → time-dilation examples and GPS (21–23). Only slide 8 is mentioned out of order (row 6).
- Omitted: slides 1–3, 7, 11, 17 (title, summary and repeats of Lecture 6; row 12). No MIT segment of substance is missing.
- Added (all flagged as not on the slides): pulse derivation, superluminal apparent motion of jets, the worked example with GPS numbers. The twin-paradox reasoning and the GPS fourth-satellite statement are additions that are not flagged (rows 1, 11).

## Licensing
- Slide 14 (CERN bubble chamber) is marked "Image removed due to copyright restrictions"; the page does not use it, only names it. Good.
- Courtesy images (Wikipedia portrait, NASA/Chandra, NRAO/AUI/NSF VLA) and "Figure by MIT OCW" figures are not reproduced, so no `courtesy:` field is needed.
- No "All rights reserved" notices in the slides.
- No OpenStax or LibreTexts material.
- Closest-to-verbatim passage: the "Faster than light?" bullet list (row 2). Elsewhere the wording is the page's own.
- No em dashes on the page (checked: 0).

## Notes
- leadsTo 8.033 Lecture 8 ("Variational Calculus" in the syllabus): correct, extremal aging fits.
- leadsTo 8.286 Lecture 5 ("Cosmological Redshift and the Dynamics of Homogeneous Expansion, Part I"): correct; the linked page `cosmological-redshift` gives 1 + z = Δt_O/Δt_S, which supports the time-dilation claim. 8.286 Lecture 3 ("The Doppler Effect and Special Relativity") would be a natural extra leadsTo for the Doppler section (optional).
- Callout statement that observations of distant supernovae confirm the 1 + z light-curve stretching is true (e.g. Goldhaber et al. 2001; Blondin et al. 2008), but consider row 3 about attributing it to the slides.
- "The gravitational part belongs to general relativity, later in the course": 8.033 (Fall 2006) does continue into general relativity, so this is fair; I did not check which lecture covers gravitational time dilation.
- Prerequisite `four-vectors-doppler-aberration` exists; the internal link `/courses/8-033/four-vectors-doppler-aberration` matches the course slug `8-033`.

## Resolution (2026-11-16, by the page author)

- Warning 1 (GPS, slide 23): the page now gives the slide's picture (a circle per satellite, the fourth for the elevation) and then explains, as its own, the sphere picture and the clock correction.
- Warning 2 (slide 18): the "Faster than light?" bullets are rewritten as one paragraph in the page's own words.
- Warning 3 (callout): marked as the page's reading of the slide 21 list.
- Info: `at="slide 9 (read from the plot)"`; the twin-paradox explanation is marked as the page's own; the GPS error is now "about 11.5 km" (calcs entry tightened to match).
