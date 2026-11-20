---
page: content/year-4/8.286/expanding-sphere.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-6-the-dynamics-of-homogeneous-expansion-part-ii/ (read via a local copy of the Lecture 6 transcript, t06.txt, video ID vKLqWj0FRyc, read in full. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec06/ (read via local copies l06.txt/l06.pdf of the slides. The PDF text layer is sparse: slides 1, 2, 7 and 8 have readable text, and slides 3 to 6 are figures. The URL itself was not fetched.)
  - Lecture 7 transcript (local t07.txt, searched for the E-sign classification and the open/closed/flat wording) and a third-party notes file for Lecture 7 (notes-L7.md). The parts used here were checked against t07.txt.
  - A third-party notes file for Lecture 6 (notes-L6.md). Every point taken from it was checked against t06.txt.
verdict: pass-with-notes
---

# Review: The expanding sphere and the equation for a(t)

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example, "Compare" step | (Not in MIT. This is an original example.) | "in one Hubble time, gravity from matter alone would slow the expansion rate by roughly 15%" | The number is right if "expansion rate" means ȧ, because ä/(aH²) = (ä/ȧ)·(1/H) is the fractional drop in ȧ per Hubble time. The step just before it, however, compares with H² and calls H the rate, so a reader will take "expansion rate" to mean H. H itself falls by (1+q)H² per unit time, which is about 115% per Hubble time, because even without gravity it drops through dilution. Say "the recession speed ȧ of any given galaxy would drop by roughly 15% per Hubble time (if the deceleration stayed constant)". You could also note that the ratio is the deceleration parameter q = Ω_m/2. |
| 2 | warning | Last paragraph before Summary: "connects the sign of E to the geometry of space: closed, open or flat" | In Lecture 7 Guth classifies E > 0, E < 0 and E = 0 as open, closed and critical/"flat". He says explicitly that for now these words describe the time evolution, and that the meaning of "flat" will be motivated later. The geometric interpretation does not come in Lecture 7. | Says the next lecture connects E to spatial geometry. | Say "The next lecture names the three cases open, closed and flat (the geometric meaning of these names comes later in the course)". The `leadsTo` text ("decides whether the universe is closed, open or flat") is fine as written. |
| 3 | info | "A conserved quantity" section: the bullets for E > 0, E < 0 and E = 0, plus the Plot | Lecture 6 ends with the conserved E and its test-particle interpretation. The qualitative classification by the sign of E, and ȧ² = 2E + (8π/3)Gρ_i/a with a_max = −4πGρ_i/(3E), come from Lecture 7. | Presented as part of the Lecture 6 page with no attribution. | All three statements are correct (see checks). You could add "(Lecture 7)" or move the material to the Lecture 7 page. |
| 4 | info | "Density and deceleration": "In Guth's convention a carries units of metres per notch" | In Lecture 6 Guth treats r_i as a length and a(t_i) = 1. He also misspeaks and says "notches per meter". The convention r_i in notches with a in m/notch is set out formally in Lecture 7. | Gives the correct convention (m/notch) and does not repeat the slip. | Fine. You could note that the convention is set out in Lecture 7. |
| 5 | info | Model bullet on eras: "until a few billion years ago (when dark energy took over)" | Guth gives "about 9 billion years" after the Big Bang for the onset of dark-energy domination and acceleration. That is about 5 Gyr ago. | "a few billion years ago" | Consistent with Guth, and with modern values (from my own knowledge, not checked against a source: matter–Λ density equality is at z ≈ 0.3, about 3.5–4 Gyr ago, and acceleration begins at z ≈ 0.6–0.7, about 6 Gyr ago). The 50,000-year figure for the radiation-to-matter transition matches the transcript. |
| 6 | info | Quiz 3 explanation / "Guth emphasises..." paragraph | Guth: if the force went as 1 over any other power of r, r_i would not drop out. | Same. | Correct for a force sourced by the enclosed mass. A force proportional to r (for example a cosmological-constant term) would also keep the expansion homogeneous. You could add "for a force produced by the enclosed mass" if you want to stay strictly accurate. |
| 7 | info | Conserved-quantity paragraph (E_phys) | Guth adds that for an interior particle, m r_i² E is not its true potential energy, because outer shells contribute and a single particle's PE among moving masses is not conserved. It is conserved only in an "analog problem" with the outer matter removed. He also says the total energy of the sphere is ∝ E (a homework problem). | Limits the claim to a test particle on the outer edge. | Correct as written. You could add the interior-particle caveat. |
| 8 | info | Frontmatter `readings[0]` ("8.286 Lecture 6 transcript") | The transcript is a separate PDF linked from the lecture page. | Its URL is the same as `source.url` (the lecture page). | Link the transcript PDF directly, if available. |

## Arithmetic and answer checks
- M(r_i) = (4π/3) r_i³ ρ_i: matches the transcript (L6, mass inside the shell).
- Shell equation r̈ = −(4π/3) G r_i³ ρ_i / r², with r(r_i,t_i) = r_i and ṙ(r_i,t_i) = H_i r_i: matches.
- Rescaling: ü = −(4π/3) G r_i³ρ_i / (r_i u² r_i²) = −(4π/3) Gρ_i/u², with u(t_i) = 1 and u̇(t_i) = H_i. Algebra correct, and matches Guth (he writes the denominator as u² r_i³). The page says the r_i³ from the mass cancels against the r_i³ from rescaling. Guth splits the denominator into one r_i from the change of variables and r_i² from the inverse-square law. The two descriptions are equivalent.
- r = a(t) r_i, ρ = ρ_i/a³ and ä = −(4π/3)Gρ a: all match. The statement that ä/a depends only on the current density matches Guth.
- E = ½ȧ² − (4π/3)Gρ_i/a and dE/dt = ȧ[ä + (4π/3)Gρ_i/a²] = 0: differentiated and verified. Matches.
- E_phys = m r_i² E = ½m(ȧ r_i)² − GmM(r_i)/(a r_i). This is KE + PE of a test particle at r_i = R_max,i, as the page says.
- Initial Hubble flow v_i = H_i r, cited to slide 8: matches slide 8 ("Mathematical Model").
- Shell-crossing argument: a faithful paraphrase of Guth (shells initially separating; equations valid up to any first crossing would have to predict it; they predict none).
- Newtonian = GR: Guth says the Newtonian calculation gives exactly the GR answer for this (pressureless) case and that he will explain why later (he does so in L7). The page's "promises that, for ordinary matter, it gives exactly the same answer" is accurate.
- Worked example: (4π/3) × 6.674e-11 × 2.7e-27 = 7.55e-37 s⁻², which matches −7.5e-37. 70 km/s/Mpc = 70 / 3.0857e19 s = 2.27e-18 s⁻¹, and H² = 5.15e-36 s⁻², which matches 5.1e-36. Ratio 7.55/51.5 = 0.147 ≈ 0.15, correct. ρ = 2.7e-27 kg/m³ is Ω_m ≈ 0.29 of ρ_c = 9.2e-27 kg/m³ at h = 0.70, which is reasonable. Interpretation: see finding 1. "Dark energy more than cancels this braking today" is correct (q₀ < 0).
- Plot: from E, ȧ² = 2E + (8π/3)Gρ_i/a. With 8πGρ_i/3 = 1 this is ȧ² = 2E + 1/a, and the curve crosses zero at a = −1/(2E). This agrees with Guth's a_max = −4πGρ_i/(3E), since 4πGρ_i/3 = ½ in these units. Default E = −0.15 gives a_max ≈ 3.33, inside the domain. The part of the curve below zero (a > a_max) is the forbidden region. You could say so in the caption.
- E > 0: ȧ² ≥ 2E > 0, so the expansion slows but never stops (Guth: "minimum expansion rate", open). E < 0: maximum size, then recollapse (closed). E = 0: borderline, ȧ → 0 (critical). All correct and match L7.
- Quiz 1 (answer index 2, "an eighth"): correct, since ρ ∝ a⁻³. Quiz 2 (index 1): correct. Quiz 3 (index 1, "exactly inverse-square"): correct per Guth (see finding 6). Quiz 4 (index 2, "stops at a maximum size and reverses"): correct. Answer indices are 0-based, as components/Quiz.tsx compares `ci === q.answer`.
- Flashcards: all four correct.

## Coverage and order
- The page follows the order of the second half of L6: model → eras → shells → no crossing → M(r_i) → equation of motion and initial conditions → u-rescaling → r = a r_i → ρ ∝ a⁻³ → ä equation → R_max,i → ∞ → first integral E → E_phys.
- Left out (L6): the recap of Gauss's law and Poisson's equation, the ordering ambiguity and Newton's symmetry argument (covered on newtons-static-universe); the aside on infinities (Guth marks it optional); why radiation dominated early on (blueshift argument); Guth's contrast with textbooks (Ryden) that assume uniformity rather than derive it; the interior-particle energy caveat; the homework on the total energy of the sphere.
- Added: the E-sign classification and plot (from L7, finding 3), and an original worked example.

## Licensing
- No verbatim passages from the transcript found. The wording is paraphrased. The slides carry no "All rights reserved" or "Courtesy of" notices, and the page reproduces no slide images. No OpenStax or LibreTexts material. Licence CC BY-NC-SA 4.0 is consistent with OCW.

## Notes
- No error-level findings. The two warnings are about wording: the meaning of "expansion rate" in the worked example, and attributing the geometric meaning of open/closed/flat to Lecture 7.
- Internal links checked: /courses/8-286/newtons-static-universe and /courses/8-01/acceleration-1d both exist. The latter has a section on accelerating cosmic expansion, so the link fits.

## Resolution (2026-11-14, by the page author)
- Worked example now says the recession speed ȧ slows ~15% per Hubble time, and that H falls faster.
- Inverse-square claim now notes that a force ∝ r (cosmological-constant-like) also preserves uniformity.
- Added Guth's caveat that E's energy interpretation is cleanest at the sphere's edge; E>0/<0/=0 cases flagged as developed in Lecture 7.
- Closing paragraph no longer claims Lecture 7 connects E to spatial geometry; notch-unit convention attributed to Lecture 7.
- Transcript reading now links the Lecture 6 transcript PDF. Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
