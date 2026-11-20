---
page: content/year-1/8.02/generating-em-waves.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w14d1/ (read: local copy presentati_w14d1.html; its PDF 8e5a4d5ac288f03aa480af815f7206f5_presentati_w14d1.pdf = presentati_w14d1.pdf/.txt, 36 slides, slide number = "P32- N" label = PDF page; many slides are images or applets with no extractable text: 2, 3, 5, 6, 13–16, 19–21, 25–35)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapte13em_waves/ (read: local copy chapte13em_waves.html; its PDF 13e4e0069a9ffca5ae3f909083695c2b_chapte13em_waves.pdf = chapte13em_waves.pdf/.txt, 51 PDF pages; printed page = PDF page − 1, confirmed with pdftotext -f N -l N for printed pp. 21–31)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w14d2/ (read: Session 33 slides, for the leadsTo check)
  - content/year-1/8.02/_course.json (read: lecture 32 and 33 entries)
  - calcs/8.02/generating-em-waves.yaml (read; `npm run calc:test -- -k generating-em`: 9 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: needs-changes
---

# Review: Generating electromagnetic waves

Citation convention checked: course-notes pages are the printed footers (Section 13.8 starts on printed p. 22 = PDF p. 23; 13.8.1 on p. 25; Eq. 13.8.6–13.8.10 on p. 28; Eq. 13.8.11–13.8.12 on p. 29; 13.8.2 on p. 30). Slide numbers are the "P32- N" labels. No "rights reserved" or "courtesy" notice in the notes chapter, the slides, or either OCW resource page.

Every page citation in the prose and both `<Formula>` citations were checked against the printed page: all are correct (no off-by-one this time). Eq. (13.8.6) is on p. 28 and also on slide 8; Eq. (13.8.12) is on p. 29 and also on slide 11.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "The spark-gap transmitter" | Slide 24: f_rad = 1/T = c/4l = (3×10¹⁰ cm/s)/(12.4 cm) = 2.4 GHz, i.e. **4l = 12.4 cm** (l ≈ 3.1 cm per rod; 12.4 cm is the wavelength). | "$c/4\ell \approx 2.4$ GHz for its 12.4 cm" | As written a reader takes ℓ = 12.4 cm, which gives c/4ℓ ≈ 0.60 GHz. Say "$c/4\ell \approx 2.4$ GHz, with $4\ell = 12.4$ cm (rods about 3.1 cm long, so λ ≈ 12.4 cm)". The calcs entry `spark-frequency` (3e10/12.4) is right; only the wording is wrong. |
| 2 | warning | "Dipole radiation and antennas" | Notes p. 23: in the far region both fields fall as 1/r and the intensity varies as sin²θ/r², maximum in the plane through the antenna's midpoint perpendicular to it (Fig. 13.8.4). Slide 29: PRS questions on "Angular distribution & polarization of radiation". | Not mentioned. | Add one or two sentences on the sin²θ/r² pattern (no radiation along the axis), cited to p. 23 and slide 29. This is a core result of the lesson and the slides ask about it. |
| 3 | warning | "Dipole radiation and antennas", "A quarter-wave antenna has rods each a quarter wavelength long (pp. 23, 25; …)" | Notes p. 23 calls this a **half-wavelength** antenna ("the length of each rod is equal to one quarter of the wavelength"); p. 25 and slides 17–20 call it a quarter-wave antenna (tip-to-tip length λ/2). | Uses "quarter-wave" only, citing p. 23 as support. | Correct physics, but the notes' p. 23 name differs; add a short bracket: "(the notes, p. 23, call the same antenna a half-wavelength antenna, after its tip-to-tip length λ/2)". |
| 4 | warning | "Polarization" | Slides 30–33 are a demonstration, a "Polarization" picture, "Polarization of TV EM Waves: Why oriented as shown? Why different lengths?" and a microwave polarization demonstration, with no text beyond the titles. The notes' Section 13.8 do not discuss polarization or wire grids. | States that receiving antennas work best aligned with E (hence TV antenna orientation) and that a grid of parallel wires blocks microwaves polarized along the wires "and passes the others". | The physics is correct (standard wire-grid polarizer), but the source does not state it in readable text; mark it as the page's explanation of the demonstrations, e.g. "The demonstrations show…; the reason is…". "Passes the others" is loose: say it passes the component perpendicular to the wires. Optionally answer slide 32's "why different lengths?" (different channels, different wavelengths). |
| 5 | info | "Shaking a sheet of charge", last sentence | Notes p. 30, Eq. (13.8.13): velocity **vector** v(t) = −v₀ cos ωt ĵ. | "$v(t) = -v_0\cos\omega t$", in a section where $v$ was the downward **speed** of the sheet. | With the page's convention (v = downward speed), the minus sign reverses the meaning. Write the vector form with ĵ, or "moves with downward speed $v_0\cos\omega t$". |
| 6 | info | "Shaking a sheet of charge" | Notes p. 31: the static field E₀ can be removed by a stationary sheet of charge −σ; real sources are neutral, with electrons accelerated and ions at rest. Notes p. 30: the retarded arguments t ∓ x/c. | Neither mentioned. | Optional: one sentence each; the neutral-medium remark explains why we see only the wave field. |
| 7 | info | "The spark-gap transmitter" | Slides 22–23: "First: example of 'lumped' LC oscillator", then a group problem (parallel-plate capacitor plus cylindrical inductor, find ω₀ = 1/√(LC)). Slide 22's title: "Spark Gap Generator: An LC Oscillator". | "A spark gap is a 'lumped' LC oscillator, a small capacitor and inductor in one piece (slides 21–23)." | Acceptable summary; the group problem is not covered (optional). |
| 8 | info | "Polarization", Experiment 12 | Slide 34: "Measure wavelength by setting up standing wave". | "measures its wavelength from the spacing of the nodes" | Correct; optionally add that adjacent nodes are λ/2 apart (as on the standing-waves page). |
| 9 | info | Session 33 slide 2 (next lecture) | "Last time: Microwaves f = 2×10⁹ Hz, λ = 15 cm". | 2.4 GHz from slide 24. | No change needed (the page follows Session 32's own slide); noted only because the next page may quote 15 cm. |

## Arithmetic and answer checks
- 700 kHz: λ = 3×10⁸/7×10⁵ = 428.6 m ≈ 429 m; λ/4 = 107.1 m ≈ 107 m. Matches slide 18. (Slide 18 also gives the real WLW tower height, 747 ft ≈ 228 m; the page does not quote it, fine.)
- RC = 4.5×10⁶ Ω × 33×10⁻¹² F = 1.485×10⁻⁴ s ≈ 1.5×10⁻⁴ s. Correct.
- 3×10¹⁰ cm/s / 12.4 cm = 2.42×10⁹ Hz ≈ 2.4 GHz. Correct, but see finding 1 for what 12.4 cm is.
- Force per unit area σ²v/2ε₀c and work rate σ²v²/2ε₀c: match Eqs. (13.8.7)–(13.8.9). S = E₁B₁/μ₀ = (vσ/2ε₀c)(μ₀σv/2)/μ₀ = σ²v²/4ε₀c: matches (13.8.12); 2S = work rate, so the "factor of two" argument (half to each side, total = work done) is right and agrees with p. 29 and slide 11. B₁ = E₁/c = vσ/(2ε₀c²) = μ₀σv/2: correct.
- Direction claims: E₁ points up (+ĵ) on both sides when the sheet moves down (p. 28: E₁ does not change direction across x = 0, B₁ does), so S points away on both sides. The page says this correctly.
- Worked example (a): 2.998×10⁸/10⁸ = 2.998 m ≈ 3.0 m; λ/4 = 0.7495 m ≈ 0.75 m. Correct.
- Worked example (b): E₁ = 10⁻⁶/(2 × 8.854×10⁻¹² × 2.998×10⁸) = 1.884×10⁻⁴ V/m ≈ 1.9×10⁻⁴. S = 10⁻¹²/(4 × 8.854×10⁻¹² × 2.998×10⁸) = 9.42×10⁻¹¹ W/m² ≈ 9.4×10⁻¹¹. Work rate 1.884×10⁻¹⁰ ≈ 1.9×10⁻¹⁰ W/m². All correct. The example is original (MIT has no numerical sheet example; the FM antenna is a different frequency from slide 18's AM case).
- Quiz 1 (accelerating charges, index 2): correct (notes p. 22).
- Quiz 2 (1 MHz, index 1 = 75 m): λ = 300 m, λ/4 = 75 m. Correct.
- Quiz 3 (index 1, upwards, resisting): correct (p. 28, slide 8 "back force up").
- Flashcards: all three correct (B₁ = E₁/c = μ₀σv/2 verified above; 700 kHz numbers as above).
- calcs/8.02/generating-em-waves.yaml covers all nine numbers on the page; `npm run calc:test -- -k generating-em`: 9 passed.

## Coverage and order
- Order follows the slides: outline and recap (1–4), plane waves from a sheet (5–14), dipole radiation and quarter-wave antennas (15–20), spark gap (21–28), polarization (29–33), Experiment 12 (34–35). Exam 3 results (slide 36) out of scope, as instructed.
- Missing: the angular distribution sin²θ/r² and 1/r far fields (finding 2); the stationary −σ sheet / neutral source and retarded time (finding 6); the lumped LC group problem (finding 7). The notes' Animations 13.1–13.3 (dipole with 10% variation, full reversal, Eqs. 13.8.1–13.8.2) are summarised only as "energy flowing out and back each cycle" (pp. 23–24), which is acceptable.
- Slide 4's recap of EM wave properties is covered by the link to the Maxwell's-equations page; fine.

## Licensing
- No figures are reused; the page has no images or diagrams at all. No notice of "rights reserved" or "courtesy" in either source.
- No verbatim copying found. "Field lines resist being dragged, as a string under tension does" paraphrases notes p. 28 ("the electric field line has a tension associated with it, just as a string does"); "100% efficient" is a two-word phrase from slide 12. Both fine.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.02 Lecture 33: _course.json lists it as "Interference; Experiment 13: Interference" (presentati_w14d2), and its slides open with "Last time: Microwaves" and interference. The "why" is correct.
- No `<Callout kind="cosmology">`. Optional: a real link exists (the CMB is thermal radiation and its polarization pattern is a key cosmological measurement; 8.286 discusses the CMB), but nothing on the page is wrong for its absence.
- Prerequisite `standing-waves` and the inline link to `maxwell-equations-and-em-waves` both exist.
- "Polarized along the antenna": correct for the far field near the equatorial plane (E along θ̂, in the plane containing the antenna); fine at this level.

## Resolution (2026-11-16, by the page author)

- Error: the spark gap now reads 4ℓ = 12.4 cm (rods about 3.1 cm), giving c/4ℓ ≈ 2.4 GHz.
- Warnings: added the far-field 1/r fields and the sin²θ/r² intensity pattern (p. 23); noted that the notes call the antenna a half-wavelength antenna; the polarization explanation is marked as the page's own, and the grid passes the component perpendicular to the wires.
- Info: the shaking velocity is described without the sign problem; node spacing λ/2 added for Experiment 12. Other info items: no change.
