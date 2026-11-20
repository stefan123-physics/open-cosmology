---
page: content/year-4/8.286/falling-into-a-black-hole.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-14-the-geodesic-equation/ (read via the Lecture 14 materials below. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/9cf8a66ecf4f21637b50ab2b75bb38e8_-yIKKST-_Mw.pdf (read via a local copy split by PDF page, p14.txt. Pages 13–26 were read in full. Printed footers were checked with pdftotext on pp. 13, 20 and 26, and they equal the PDF page numbers.)
  - Lecture 14 slides (local copy, slides14.txt). These only summarise Lecture 13, so none of this page's formulas are on a slide. Everything on this page was on the board.
  - Lecture 15 transcript (could not read; not available locally). The claim about Lecture 15 was checked only against transcript p. 26 and the Lecture 15 title in `_course.json`.
verdict: needs-changes
---

# Review: Falling into a black hole

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Worked example, step "Outside" | (Page-internal number, not an MIT claim.) Exact closed form, checked against numerical integration: t(1.01 r_s) = 59.836 r_s/c. With r_s/c = 9.851e-5 s this is **5.894 ms**. It is still 5.894 ms if r_s/c is rounded to 9.85e-5 s. | "$1.01\,r_s$ after 5.90 ms" | Change to "5.89 ms". (The caption's "59.8" is correct.) |
| 2 | warning | Plot, second curve (Schwarzschild time t) | (Plot code, not MIT.) The parametric range ends at s = 3.1416, which is just **above** π. There, tan(s/2) ≈ −2.7e5 is negative, so the condition `tan(s/2) < sqrt(R-1)` is true. The last sample then gives a finite, spurious point at (x ≈ 56.5, y ≈ 1e-10) for R = 10 (11.1 for R = 3 and 72.9 for R = 12). This was checked by running the expression through the repo's mathjs. In the line plot it is an isolated point between NaNs, so it may not be visible. It **does** appear in the keyboard/text-alternative "Points on: …" table (s = 3.1416 row), where it says the outside observer sees r ≈ 0 at t ≈ 56.5. That is wrong. | Spurious last point. | Make the condition `tan(s/2) >= 0 and tan(s/2) < sqrt(R-1)`, or end the range at 3.14159 (just below π). The τ curve is fine at s = 3.1416, because r = (R/2)(1 + cos s) ≈ 1e-10 there and τ ≈ 49.67. |
| 3 | warning | Plot, `points` | — | The fixed marker "horizon crossed, τ ≈ 49.0" sits at (48.99, 1). It is correct only for the default r₀/r_s = 10. When the slider moves R (3–12), the marker stays put and no longer lies on the τ curve. For example, at R = 3 the horizon is crossed at τ ≈ 7.5. | Fixed marker. | Use a marker computed from R if `points` accepts expressions. If not, label it "for r₀ = 10 r_s", or remove the slider. |
| 4 | warning | Callout "Where this leads": "This was Guth's one detour away from cosmology." | Transcript p. 13 says only "For example, though, I'll do something different." Nothing in Lecture 14 says this is the course's only detour. | "one detour" | This is not supported by the source, and I did not verify it against the whole course. Suggested wording: "This lecture was a detour away from cosmology." The second sentence (energy of radiation postponed for lack of time) **is** supported by p. 26: "I'm not going to get to talk about the energy associated with radiation. But we'll get to that on Thursday." |
| 5 | info | Near-horizon Formula, `dr/dt ≈ −c (r − r_s)/r_s` | p. 24 gives the magnitude only: "a factor of c times r minus r Schwarzchild over r Schwarzchild". The minus sign appears only in his t(r) integral, "minus r sub s over c times the integral". | Includes the minus sign. | The sign is **correct**: dr/dτ < 0 and dt/dτ > 0, so dr/dt = −c·h·[1 + O(h)]. Optionally add a bracketed note: "[Guth writes the magnitude; the sign follows because r decreases]". This follows AGENTS rule 4. |
| 6 | info | Intro: "the most surprising metric there is" | p. 13 says that among the things the Schwarzschild metric describes, black holes are "where the most surprises lie". | Calls it the most surprising metric of all. | Soften to "a metric full of surprises" or "the metric where, Guth says, the most surprises lie". |
| 7 | info | "Answering questions, Guth adds … our Galaxy has a supermassive black hole at its centre" | pp. 15–16: a **student** brings up the Galactic black hole, and Guth agrees and expands on it. | Credits it to Guth. | Acceptable as written, since Guth endorses it. Optionally write "a student points out, and Guth agrees, …". |
| 8 | info | "Two times, two stories": "both vanish as ħ → 0" | p. 26: Guth says this explicitly only for Hawking evaporation ("It would go to 0 as h bar goes to 0"). For the firewall he says that all arguments for it "are based on the quantum physics of black holes". | Applies the ħ → 0 statement to both effects. | This is a fair inference, but it goes slightly beyond the transcript. Optionally write "both are quantum effects". |
| 9 | info | Worked example "Outside", the "distant observer" in the plot labels and the "time of a distant observer" sentence | Guth (p. 23) says "our external time variable. The variable t that appears in the Schwarzschild metric." | Calls t what a distant observer "sees". | This is a common simplification. Strictly, t is Schwarzschild coordinate time (since release), and what is *seen* also includes light-travel delay. Optionally write "in Schwarzschild time t (counted from the release)". |

### Formula and citation check (all board; none is on the Lecture 14 slides)
- Schwarzschild metric, p. 13 (board). The note "inverse power added on p. 14" is **correct**: p. 14 says "one of these should be inverted. Important inverse, it's a minus 1 power". The definition ds² ≡ −c² dτ² is also on p. 13. **Correct.**
- r_s = 2GM/c², p. 14. **Correct.**
- Metric along the path (both forms), p. 18. **Correct.** The first form is written with the c² that a student pointed out was missing on the board (p. 18), so the page already uses the corrected version. The h-notation form is at the bottom of p. 18. **Correct.**
- r component of the geodesic equation, p. 19. **Correct.** The equation runs onto the first word of p. 20 ("squared"). Citing p. 19 is fine, and "pp. 19–20" would be slightly more complete.
- d²r/dτ² = −GM/r², p. 20. **Correct.**
- dr/dτ = −√(2GM(r₀ − r)/(r r₀)), p. 21 (it starts at the bottom of p. 21 and ends at the top of p. 22). **Correct.**
- τ(r), p. 22. **Correct.** The remark "can't really be inverted analytically" is also on p. 22.
- dr/dt with denominator √(h⁻¹ + c⁻² h⁻² (dr/dτ)²), p. 23. **Correct.**
- Near-horizon dr/dt and t(r) ≈ −(r_s/c)∫^r dr'/(r' − r_s) ≈ −(r_s/c) ln(r − r_s), p. 24. **Correct.** The open lower limit and the student's question about it are also on p. 24. The divergence argument continues on p. 25.

### Independent physics checks
- **r geodesic equation → −GM/r².** With g_rr = h⁻¹ and g_tt = −h c², the left side is h⁻¹ r̈ − h⁻² h′ ṙ², and the right side is −½ h⁻² h′ ṙ² − ½ c² h′ ṫ². Substituting c² ṫ² = c² h⁻¹ + h⁻² ṙ² makes the ṙ² terms cancel, leaving r̈ = −½ c² h′ = −½ c² r_s/r² = −GM/r². **Verified.**
- **τ(r).** A numerical derivative of the page's τ(r) equals 1/|dr/dτ| at r = 0.5, 3 and 7 (r₀ = 10, units r_s = c = 1), to 1e-8. τ(r₀) = 0 and τ(0) = (π/2)√(r₀³/2GM). **Verified.**
- **dr/dt and its sign.** dt/dτ = √(h⁻¹ + c⁻² h⁻² ṙ²) > 0, so dr/dt has the sign of dr/dτ, which is negative. Near r_s, dr/dt → −c h ≈ −c (r − r_s)/r_s. **Verified.**
- **Cycloid form in the caption.** r = (r₀/2)(1 + cos η) and τ = √(r₀³/8GM)(η + sin η) reproduce τ(r) exactly (checked at r = 5, 2, 1.01, 1.001, 1.0001). **Verified.**
- **Closed form for t(η).** The plot's expression agrees with a Simpson integration of dt/dη over the cycloid to better than 1e-9 at r = 5, 2 and 1.01, and to 1e-7 at 1.001. **Verified.**

## Arithmetic and answer checks
Constants: GM☉ = 1.32712e20 m³/s², c = 2.99792458e8 m/s.
- r_s of the Sun = 2.953 km. The page's "2.95 km" is **correct** and matches Guth (p. 15).
- 10 M☉: r_s = 29.53 km, giving "29.5 km" (**correct**). r_s/c = 9.851e-5 s, giving "9.85 × 10⁻⁵ s" (**correct**).
- τ to the centre = (π/2)·10√10 = 49.673 r_s/c = 4.893 ms. The page's "49.67" and "4.89 ms" are **correct**.
- τ to the horizon = √10 (10 tan⁻¹ 3 + 3) = 48.985 r_s/c = 4.826 ms. The page's "48.99" and "4.83 ms" are **correct**.
- Horizon to centre = 0.688 r_s/c = 0.0678 ms. The page's "0.068 ms" and the quiz's "0.07 ms" are **correct**.
- Schwarzschild time t (from release, r₀ = 10 r_s):
  - r = 2 r_s: 53.467 r_s/c = 5.267 ms. The caption's "53.5" and the example's "5.27 ms" are **correct**.
  - r = 1.01 r_s: 59.836 r_s/c = **5.894 ms**. The caption's "59.8" is correct. The example's "5.90 ms" is **wrong** (finding 1).
  - r = 1.001 r_s: 62.153 r_s/c. The caption's "62.2" is **correct**.
  - r = 1.0001 r_s: 64.457 r_s/c.
- Increments per factor of 10: 2.317 (1.01 → 1.001) and 2.304 (1.001 → 1.0001), approaching ln 10 = 2.3026. In time units this is 0.2268 ms, so the page's "≈ 0.23 ms" is **correct**.
- Plot: the τ curve ends at 49.673 for R = 10 (s = 3.1416). The t curve gives 53.467 at r = 2 and 59.836 at r = 1.01. Both match the closed forms. The spurious endpoint is described in finding 2.
- Quiz:
  - Q1: answer index 1, 2GM/c². **Correct.**
  - Q2: answer index 1. **Correct** (p. 15).
  - Q3: answer index 1. **Correct** (pp. 20–21).
  - Q4: answer index 1, "about 4.9 ms". **Correct.** The explanation's 49.67, 4.89, 4.83 and 0.07 are all correct.
  - Q5: answer index 1. **Correct.** Its explanation's dr/dt ≈ −c(r − r_s)/r_s and "(r_s/c) ln 10 per factor of 10" are correct.
- Flashcards: the metric, r_s, dr/dτ, the infall time and the circumferential radius are all **correct**.

## Coverage and order
- The page follows the transcript order for pp. 13–26 exactly:
  1. RW homework mention
  2. Schwarzschild metric
  3. angles
  4. the M = 0 limit
  5. r_s
  6. removable singularity and Kruskal
  7. only the mass matters
  8. the Sun and 2.95 km
  9. horizon (stated, not shown)
  10. Q&A on horizons inside stars and the Galactic black hole
  11. radial infall set-up
  12. metric along the path and the h notation
  13. the r component
  14. −GM/r²
  15. reinterpretation of r and τ
  16. energy integral
  17. dr/dτ
  18. τ(r)
  19. finite fall, the true singularity, spaghettification
  20. dr/dt
  21. near-horizon form
  22. log divergence
  23. locally measured time
  24. firewall
  25. Hawking
  26. end of lecture
- The notation change to τ and Greek indices (pp. 16–17) is on `christoffel-symbols`, as intended.
- Small omissions (all acceptable):
  - Guth's remark that the Kruskal construction came "some years later by other people" and is left for a GR class (p. 14).
  - His remark that for a body like the Sun the true distance from the centre could be defined by integrating the metric, but would not equal r (p. 20).
  - "Everybody believed that … until maybe a couple years ago" (p. 25).
- The page adds:
  - the "Later developments" callout
  - the cycloid parametrisation and closed-form t in the plot caption, which are marked as the page's own computation
  - the original worked example

## Licensing
- The transcript carries the standard OCW Creative Commons notice. `grep` finds no "All rights reserved" or "Courtesy of" notices in the Lecture 14 transcript or slides.
- No copied passages were found. The page is a rewrite in its own words. The short quoted words "controversial" and "not settled" are attributed to Guth and match pp. 25–26.
- The worked example (10 M☉, r₀ = 10 r_s) is original. Guth gives no numerical example of the fall.
- The plot is generated from formulas, with no static image. No OpenStax or LibreTexts material is used.

## Notes
- **Later developments callout.** It is accurate. Almheiri, Marolf, Polchinski and Sully, "Black Holes: Complementarity or Firewalls?", arXiv:1207.3123 (July 2012), published in JHEP 2013. Guth's "a couple years ago" (p. 25) fits this. The callout is clearly marked as post-lecture. "Remains an open research question today" is a fair summary, although later work (for example on the Page curve and "islands", from 2019 on) has changed the debate. This is optional extra context.
- **Hawking 1974.** Guth's hedged "I think, 1974" (p. 26) is correct: Nature 248, 30 (1974). The page states the year without the hedge, which is fine.
- **Lecture 15 claim.** The `leadsTo` text ("energy of radiation, the start of the hot Big Bang") is consistent with the Lecture 15 title in `_course.json` ("Black-Body Radiation and the Early History of the Universe, Part I") and with p. 26. The Lecture 15 transcript itself was not read.
- **"Stated, not shown, in the lecture"** for the horizon property is correct (p. 15: "What you can show — we won't").
- **Uncertain.** I did not render the page in a browser, so I could not confirm whether Plotly visibly draws the spurious isolated endpoint (finding 2). It is certainly present in the generated data and in the text-alternative table.

## Resolution (2026-11-14, by the page author)

- Error 1: the worked example now says 5.89 ms at 1.01 r_s.
- Warning 2: the t-curve guard is now `tan(s/2) >= 0 and tan(s/2) < sqrt(R-1)`, so the false point at s ≈ π is gone.
- Warning 3: removed the fixed "horizon crossed" marker. The caption still gives the crossing time for r₀ = 10 r_s.
- Warning 4: removed "Guth's one detour away from cosmology"; the callout keeps the p. 26 point about running out of time.
- Info: added a note that Guth gives dr/dt only in magnitude and that it is negative. "Most surprising metric" now quotes Guth's "where the most surprises lie". The Galactic black hole is now attributed to a student, with Guth agreeing. The ħ → 0 remark now applies only to Hawking evaporation. t is described as Schwarzschild coordinate time.
