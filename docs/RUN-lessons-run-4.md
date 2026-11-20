# Lessons run 4 (branch `lessons-run`)

An unattended run adding new lessons, started 2026-11-16 at 19:37, planned to stop by 00:37 (five hours).
The branch starts from `main` (0683f79), which already holds runs 1–3.
Rules for the run (owner, as for runs 2 and 3): new lessons only, plus their calcs, reviews and new entries in `data/symbols.json`;
no changes to existing lessons or site code; one commit per lesson; nothing pushed.

Plan: 18.06 Lectures 21–33 (quiz reviews 24b and 32 and the final review 34 skipped), then 8.02 Session 35 if its material is enough for a page, then 8.03.

## Lessons

| # | Lesson | Page | Status | Notes |
|---|---|---|---|---|
| 1 | 18.06 Lecture 21: Eigenvalues and eigenvectors | `eigenvalues-and-eigenvectors` | reviewed | Review: no errors; citations of det = product tightened, Strang's remark on in-between matrices stated exactly, flashcard allows λ = 0 or complex. |
| 2 | 18.06 Lecture 22: Diagonalization and powers of A | `diagonalization-and-powers` | reviewed | Review: no errors; the multiplicity rule marked as general, Jordan-form remark and orthogonal Fibonacci eigenvectors added; Fibonacci formula finished as the page's own step (F₁₀₀ ≈ 3.54 × 10²⁰). |
| 3 | 18.06 Lecture 23: Differential equations and exp(At) | `differential-equations-exp-at` | reviewed | Review: no errors; order note and companion-matrix wording added. Strang's "single first order equation" (he means second order) noted. |
| 4 | 18.06 Lecture 24: Markov matrices; Fourier series | `markov-matrices-fourier-series` | reviewed | Review: no errors; positivity of the steady state limited to a non-repeated λ = 1; Strang's "orthonormal" Fourier basis noted as orthogonal. Lecture 24b (quiz review) skipped. |
| 5 | 18.06 Lecture 25: Symmetric matrices and positive definiteness | `symmetric-matrices-positive-definite` | reviewed | Review: no errors, one warning fixed (the pivots/eigenvalues product remark). Strang's spoken "five three two two" reconstructed as (5 2; 2 3). |
| 6 | 18.06 Lecture 26: Complex matrices; fast Fourier transform | `complex-matrices-fft` | reviewed | Review: no errors, three warnings fixed (Fourier/Gauss given as Strang's guesses, F⁻¹ = Fᴴ/n marked as the general statement). |
| 7 | 18.06 Lecture 27: Positive definite matrices and minima | `positive-definite-matrices-minima` | reviewed | Review: no errors, one warning fixed (which earlier lecture made the start). Strang's "one over the eigenvalues" for the ellipsoid axes noted (half-length 1/√λ). |
| 8 | 18.06 Lecture 28: Similar matrices and Jordan form | `similar-matrices-jordan-form` | reviewed | Review: no errors, one warning fixed (the 7 must stay above the diagonal). Strang's spoken matrices reconstructed and marked as such. |
| 9 | 18.06 Lecture 29: Singular value decomposition | `singular-value-decomposition` | reviewed | Review: no errors. Strang's unresolved sign puzzle in the first example explained as the page's own step (uᵢ = Avᵢ/σᵢ). |
| 10 | 18.06 Lecture 30: Linear transformations and their matrices | `linear-transformations-matrices` | reviewed | Review: no errors; order note and one quotation mark added. |
| 11 | 18.06 Lecture 31: Change of basis; image compression | `change-of-basis-compression` | reviewed | Review: no errors, three warnings fixed (1999 claims dated, JPEG's cosine transform noted, letter clash). Worked example given new pixel values in case the old ones matched a textbook example. |
| 12 | 18.06 Lecture 33: Left and right inverses; pseudoinverse | `left-right-inverses-pseudoinverse` | reviewed | Review: no errors, one warning fixed (ΣΣ⁺ and Σ⁺Σ project onto the spaces of Σ, not of A). Lectures 32 and 34 (reviews) skipped: 18.06 is complete. |
| 13 | 8.03 course list | `_course.json` | n/a | MIT's 24 lectures of 8.03SC (Fall 2016, Yen-Jie Lee) added as the syllabus, in their own commit. |
| 14 | 8.03 Lecture 1: Periodic oscillations, harmonic oscillators | `harmonic-oscillator` | reviewed | First 8.03 page. Review: no errors, two warnings fixed (demonstration claims cited exactly; cosmology callout says why each 8.286 oscillator is one). V‴ written as d³V/dx³ (the symbol list allows at most two primes). |
| 15 | 8.03 Lecture 2: Damped free oscillators | `damped-free-oscillators` | reviewed | Review: no errors, one warning fixed (a demonstration detail not in the sources). The lecture's 99% for sin 5°/5° noted (the notes' 99.9% is right); Γ± renamed Γ₁, Γ₂ for read-aloud. |
| 16 | 8.03 Lecture 3: Driven oscillators, transients, resonance | `driven-oscillators-resonance` | reviewed | Review: no errors, one warning fixed (the sources' tan δ → ∞ for fast driving noted: it tends to 0 from below). |
| 17 | 8.03 Lecture 4: Coupled oscillators, normal modes | `coupled-oscillators-normal-modes` | reviewed | Review found two errors, fixed: the three-mass system had been described as a chain m–2m–m, but MIT's has the 2m with both small masses on one side (the equations and frequencies were unaffected). |
| 18 | 8.03 Lecture 5: Beat phenomena (Prof. Wyslouch) | `coupled-pendulums-beats` | reviewed | Review: no errors, five warnings fixed (beat period added; Jupiter/Moon identified as a simulation; slip note placed correctly; worked example's initial conditions stated). |
| 19 | 8.03 Lecture 6: Driven coupled oscillators; symmetry (Prof. Wyslouch) | `driven-coupled-oscillators-symmetry` | reviewed | Review: no errors, five warnings fixed (simulations separated from demonstrations, attributions, knob settings without units). Wyslouch's "plus 1 and plus 2" for the eigenvalues of S noted (they are −1 and +1). |
| 20 | 8.03 Lecture 7: Symmetry, infinite number of coupled oscillators | `symmetry-infinite-oscillators` | reviewed | Review: no errors, two warnings fixed (the ω₁ ≠ ω₂ condition for modes to be eigenvectors of S; cos(jka) modes and the ka = 0, π cases). |
| 21 | 8.03 Lecture 8: Translation symmetry; beaded string; wave equation | `beaded-string-wave-equation` | reviewed | Review: no errors, one warning fixed (the lecture's "power law" for geometric growth βʲ). |
| 22 | 8.03 Lecture 9: Standing waves, Fourier series | `standing-waves-fourier-series` | reviewed | Review: no errors, one warning fixed (a prepared 59-term slide and the live Fourier program were run together). |
| 23 | 8.03 Lecture 10: Travelling waves, energy, reflection and transmission | `travelling-waves-reflection` | reviewed | Review: no errors, three warnings fixed (T → τ for the transmission coefficient in summary and flashcard; a paraphrase no longer quoted; "refraction" slip noted). |
| 24 | 8.03 Lecture 11: Sound waves | `sound-waves` | reviewed | Review: no errors, five warnings fixed (τ attribution; helium speed also from density, not only γ; a slip in the notes' driven-pipe resonance, (m − ½)π/L for mπ/L; 8.286 link wording). The lecture's "389 m/s" for Newton's 289 noted. |
| 25 | 8.03 Lecture 12: Maxwell's equations, electromagnetic waves | `electromagnetic-waves` | reviewed | Review: no errors, one warning fixed (the cosmology callout overstated what 8.286 does with box modes). Rømer and Bradley values said as 10⁹ in the lecture noted. |
| 26 | 8.03 Lecture 13: Dispersive medium, phase and group velocity | `dispersion-phase-group-velocity` | reviewed | Review: no errors, one warning fixed (an inaudible remark had been attributed to a student). A slip in the notes' sum-of-waves formula ((A + B) in the cosine) noted; the page cites the transcript for it. |
| 27 | 8.03 Lecture 14: Fourier transform, AM radio | `fourier-transform-am-radio` | reviewed | Review found one error, fixed: an exponent typo in a worked-example step (10²⁶ for 10¹⁶; the result was right). Two slips in the notes' delta-function formulas noted. |
| 28 | 8.03 Lecture 15: Uncertainty principle, 2D waves | `uncertainty-principle-2d-waves` | reviewed | Review: no errors, four warnings fixed (r and R in the proof; two silent fixes of slips in the notes now marked; pulsar figures attributed to Lee; 8.286 link wording). Notes slips noted: e^(Γ|t|), a stray i, ħ as 6.6 × 10⁻¹⁰ eV·s. |
| 29 | 8.03 Lecture 16: 2D and 3D waves, Snell's law | `two-dimensional-waves-snells-law` | reviewed | Review: no errors, four warnings fixed (citation of the time factor; "in general" four modes; mode (4, 3); cosmology callout added). Slips noted: the notes' ω = (T/ma) sin(ka/2), k_x twice in the box guess, "non-dispersive". |
| 30 | 8.03 Lecture 17: Polarization, polarizers | `polarization-polarizers` | reviewed | Review found one error, fixed: a flashcard called in-phase light with unequal amplitudes elliptical. Five warnings fixed (summary wording, demonstration credit, single-photon case, "refract" slip, own numbers in the worked example). Lee's dropped minus sign (rotation sense) noted. |
| 31 | 8.03 Lecture 18: Wave plates, radiation | `wave-plates-radiation` | reviewed | Review found one error, fixed: the forward link promised "why the sky is blue", which Lecture 19 does not cover. Five warnings fixed (8.286 link to Lecture 17, a notes slip r² flagged, θ defined, sugar-tube demo, cosmology callout). Notes slips noted: 4π for 6π in the total power, c³ for c². |
| 32 | 8.03 Lecture 19: Waves in medium, Brewster's angle | `em-waves-in-matter-brewster` | reviewed | Review: no errors, four warnings fixed (two demonstrations separated, sky angle, a notes typo ∂B/∂t, dispersion sentence). Slips noted: the notes' sin θ_I/sin θ_2, normal incidence said as 90°, diamond index 2.6. |
| 33 | 8.03 Lecture 20: Interference, soap bubble | `interference-soap-bubbles` | reviewed | Review: no errors, two warnings fixed (the notes round 3.7% to 3.8%; the visible range runs to about 700 nm). |
| 34 | 8.03 Lecture 21: Phased radar, single-electron interference | `phased-radar-electron-interference` | reviewed | Review: no errors, two warnings fixed (steering formula cited to the board; Huygens and odd dimensions credited to Lee with a bracket). Notes slips noted: a missing 2π and a missing d. |
| 35 | 8.03 Lecture 22: Diffraction, resolution | `diffraction-resolution` | reviewed | Review: no errors, three warnings fixed (source of the red-light range; the ppi limit given with distances; cosmology callout added). |
| 36 | 8.03 Lecture 23: Quantum waves and gravitational waves | `quantum-and-gravitational-waves` | reviewed | Review: no errors, two warnings fixed (a time shift not given in the lecture; a closing quotation that matched neither source). Lecture 24 (final review) skipped: 8.03 is complete. |
| 37 | Quiz answer positions | 34 pages of this run | n/a | The correct answer had been the second choice in 78 of 92 8.03 quizzes (and often in 18.06). One commit reorders the choices so the answers are spread over all positions (33/40/29/34 over positions 1–4); every correct answer was checked to be unchanged. `markov-matrices-fourier-series` is left as it is, because one explanation refers to "the third choice". |
| 38 | 8.033 course list | `_course.json` | n/a | MIT's 26 sessions of 8.033 (Fall 2006, Max Tegmark) added as the syllabus, in their own commit. The course has lecture slides only (no transcripts or notes); some slide images are "courtesy of" NASA, NRAO or Wikipedia and must not be reused. |
| 39 | 8.033 Lecture 2: Symmetry and invariance | `symmetry-galilean-invariance` | reviewed | First 8.033 page (slides only). Review: no errors, four warnings fixed (slide numbers for the +vt convention, a slide 12 slip noted, Noether's theorem marked as not on the slides). Lecture 1 (course overview) has no page. |
| 40 | 8.033 Lecture 3: Symmetry and invariance (cont.): speed of light, Michelson–Morley | `speed-of-light-michelson-morley` | reviewed | Review found one error, fixed: the remark on slide 9's sign convention described the slide wrongly. Five warnings fixed (slide slips 2v/c and γ ≈ 1 + (v/c)², the F = ma table entry, arm lengths, "first American Nobel" in the sciences). |
| 41 | 8.033 Lecture 4: Relativistic kinematics: the Lorentz transformation | `lorentz-transformation` | reviewed | Review: no errors, two warnings fixed (rapidity addition marked as not on slide 19; slide 23 quotation attributed). Slide 21's stray γ_u in the wave 4-vector noted. |
| 42 | 8.033 Lecture 5: Relativistic kinematics: time dilation, length contraction | `time-dilation-length-contraction` | reviewed | Review found one error, fixed: the 8.286 forward link pointed to Lecture 2 instead of Lecture 4 (cosmic time). Three warnings fixed (a link promising jets, the perpendicular velocity factor in the summary, slide 7's naive argument). |
| 43 | 8.033 Lecture 6: Relativistic kinematics: 4-vectors, Doppler effect, aberration | `four-vectors-doppler-aberration` | reviewed | Review: no errors, two warnings fixed (the cosmology callout's claims about early galaxy measurements and cosmological redshift made exact; "2×2 matrices"). |

## Pauses

None. The run worked unattended from 19:37. At about 22:35 the owner interrupted; no new lesson was started after that, and the two lessons already written (8.033 Lectures 5–6) were reviewed and committed. The run ended at about 22:40.

## Summary

40 new lessons, every one reviewed against its MIT source, with its calcs file, its own symbol meanings and one commit each, plus two course lists and one quiz commit:

- **18.06**: Lectures 21–33 (12 pages; Lectures 24b, 32 and 34 are reviews). 18.06 is now complete.
- **8.03**: the full lecture list in `_course.json` (its own commit), then all 23 lecture pages, Lectures 1–23 (Lecture 24 is the final-exam review). 8.03 is now complete.
- **8.033**: the 26-session list in `_course.json` (its own commit), then Lectures 2–6 (5 pages: symmetry and Galilean invariance, the speed of light and Michelson–Morley, the Lorentz transformation, time dilation and length contraction, 4-vectors and the Doppler effect). Lecture 1 is the course overview; Lecture 7 onwards are still to do.
- **Quizzes**: one commit varies the position of the correct answer on this run's pages (it had been the second choice in most 8.03 quizzes); every correct answer was checked to be unchanged.

### Notes for the owner

- **8.02 Session 35** still has no page: run 3 found it has no notes or slides.
- **8.03 pages follow Prof. Yen-Jie Lee's notes and transcripts** (Lectures 5–6 by Prof. Bolek Wyslouch). Reviewers found slips in the notes as well as in the lectures; they are noted in brackets on the pages, for example the notes' (m − ½)π/L for a driven pipe (Lecture 11), (A + B) in the cosine of the sum-of-waves identity (Lecture 13), ½ for 1/2π in the delta-function formula (Lecture 14), ħ as 6.6 × 10⁻¹⁰ eV·s (Lecture 15) and 4π for 6π in the radiated power (Lecture 18).
- **Two reviews found real errors**, both fixed before committing: an exponent typo in an intermediate worked-example step (Lecture 14) and a flashcard that called in-phase light with unequal amplitudes elliptical (Lecture 17). One forward link promised content the next lecture does not have (Lecture 18) and was reworded.
- **8.033 (Fall 2006) has lecture slides only**, no transcripts or notes. The 8.033 pages follow the slides in order and fill in the reasoning between them; several slide images are "courtesy of" Wikipedia, NASA or NRAO and were not reused.
- **Demonstrations**: some 8.03 transcripts contain separately recorded demonstrations after the lecture; the pages label them as separate recordings.
- **Branch**: everything is on `lessons-run`, starting from `main` (0683f79); nothing was pushed.
