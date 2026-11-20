---
page: content/year-1/8.02/faradays-law.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w09d1-1/ (read: local copy presentati_w09d1-1.pdf, 42 slides; slide number = "P20- N" label = PDF page)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/cha10faraday_law/ (read: local copy cha10faraday_law.pdf, 32 PDF pages; printed page = PDF page − 1, checked page by page with pdftotext -f N -l N for PDF pages 3 and 6–15)
  - content/year-1/8.02/_course.json (read, for the leadsTo check)
  - calcs/8.02/faradays-law.yaml (read; `npm run calc:test -- -k faradays-law`: 7 passed)
verdict: needs-changes
---

# Review: Faraday's law of induction

Citation convention checked: `cite="mit"` and `reading2` are both the Session 20 slides (same URL); `reading1` = Course Notes Chapter 10. Notes pages are the printed footer numbers.

Notes page map (printed pages): p. 1 = 10.1 intro, Faraday 1831, galvanometer; p. 2 = 10.1.1, Eqs. (10.1.1)–(10.1.4), weber; p. 3 = Eq. (10.1.5), three ways (Figs. 10.1.3–10.1.5); p. 4 = 10.1.2 Lenz's law, the four-step procedure; p. 5 = Fig. 10.1.7, sign table, bar magnet north pole down (flux negative, counterclockwise current); p. 6 = force picture (loop acts as north pole up), 10.2 starts, qvB = qE; p. 7 = Eqs. (10.2.1)–(10.2.5); p. 8 = Eqs. (10.2.6)–(10.2.10); p. 9 = Eq. (10.2.11), 10.3 starts, Eqs. (10.3.1)–(10.3.3); p. 10 = Eqs. (10.3.4)–(10.3.7), E = (r/2) dB/dt; p. 11 = Eq. (10.3.8), 10.4 starts, Eq. (10.4.1); p. 12 = Eqs. (10.4.2)–(10.4.9), mechanical power = electrical power; p. 13 = 10.5 eddy currents, laminating and cuts; p. 14 = eddy-current applications (damping, magnetic braking), 10.6 summary, 10.7 appendix.

The five formulas:
- "Magnetic flux" (`reading1`, Eqs. (10.1.1)–(10.1.2), p. 2): both on p. 2, same content. Correct.
- "Faraday's law" (`reading1`, Eq. (10.1.4), p. 2): ε = −N dΦ_B/dt, p. 2. Correct (also slides 17, 19, 21, 24).
- "Emf and current of a sliding rod" (`reading1`, Eqs. (10.2.4)–(10.2.5), p. 7): notes have ε = −Bℓv and I = |ε|/R = Bℓv/R on p. 7. Correct.
- "Faraday's law in integral form" (`reading2`, slide 35): slide 35 has ∮_C E · ds = −dΦ_B/dt. The page writes the flux out as −d/dt ∬ B · dA (see #6). Correct physics.
- "Emf of a generator" (`reading1`, Eq. (10.4.3), p. 12): ε = −N dΦ_B/dt = NBAω sin ωt, p. 12; also slide 38. Correct.

In-text citations checked against the map above: Section 10.1, p. 1; 10.1.1, p. 2; pp. 2–3; 10.1.2, p. 4; pp. 5–6; Section 10.2, pp. 6–7; pp. 7–8; Eqs. 10.2.6–10.2.8, p. 8; pp. 8–9; Section 10.3, p. 9; Section 10.3, p. 10; Section 10.4, pp. 11–12 are all correct. Slides 8, 9–14, 13, 16, 17, 18, 20, 22, 25–32, 30, 35, 38, 36–42 are correct; slide 37 see #3. Two wrong: "Section 10.5, pp. 12–13" and "(pp. 12)" (#1, #2).

Physics checked: Lenz direction for a north pole pushed down towards a loop (downward flux grows, induced field up, counterclockwise from above, loop acts as north-up and repels) matches notes pp. 5–6. Jumping ring: increasing flux, induced current opposes it, ring repelled: correct. Braking force B²ℓ²v/R, power B²ℓ²v²/R = I²R, τ = mR/B²ℓ²: match Eqs. (10.2.6)–(10.2.11). Induced field inside a region of uniform, growing B: E = (r/2) dB/dt matches Eq. (10.3.6), and a long solenoid does produce such a field (#5). No em dash on the page (grep: 0). Internal links `/courses/8-02/gauss-law` and `/courses/18-02/div-curl-and-maxwell` and both prerequisites exist.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Generators and other applications": eddy currents "(Section 10.5, pp. 12–13)" | Section 10.5 starts on printed p. 13 (PDF p. 14); p. 12 is all generator (Eqs. 10.4.2–10.4.9). Laminating/cuts on p. 13. | pp. 12–13 | "(Section 10.5, p. 13)". |
| 2 | error (minor) | Same paragraph: "equals the electrical power delivered (pp. 12)" | Eqs. (10.4.5)–(10.4.9), p. 12 | "pp. 12" | "(Eqs. 10.4.5–10.4.9, p. 12)". |
| 3 | warning | "A motor is the same device run backwards (slide 37)" | Slide 37 is "DC Motor (magnetostatics)", i.e. torque on a current loop, no induction; slide 38 "Motors & Generators" has the generator formula; notes p. 11: a generator converts mechanical to electrical energy, a motor the reverse. Neither says "same device run backwards". | Attributes the claim to slide 37 | "A motor does the reverse, turning electrical energy into mechanical (course notes, p. 11; slides 37–38)." |
| 4 | warning | "Faraday's law is also at work in microphones and loudspeakers, metal detectors, …" (slides 36–42) | Slide 39 labels "Speakers & Microphones (magnetostatics)". A loudspeaker is driven by the force on a current in a field, not by induction (a dynamic microphone does use induction). | Loudspeakers listed as Faraday's-law devices | Say "microphones (and, run the other way, loudspeakers, which use the magnetic force on a current)", or drop loudspeakers. |
| 5 | warning | "Induced electric fields", first paragraph: "What pushes the charges round a loop when the flux changes? Not the magnetic field … It must be an electric field" | Notes p. 9 make the same argument, but the notes' summary (p. 14) restricts it: "An induced emf in a stationary conductor is associated with a non-conservative electric field"; the appendix 10.7 discusses frames. | Stated for any loop, directly after the sliding-rod section where the page itself says the charges are pushed by q v × B | Add "a stationary loop" ("What pushes the charges round a stationary loop when the flux through it changes?"), and optionally one sentence that in the moving rod it is the magnetic force q v × B. |
| 6 | info | Formula "Faraday's law in integral form", cited to slide 35 | Slide 35: ∮ E · ds = −dΦ_B/dt | −d/dt ∬_S B · dA | Same thing with Φ_B written out; optionally cite also notes Eq. (10.3.3) plus (10.1.2), or keep. |
| 7 | info | "Inside a long solenoid … E = (r/2) dB/dt" | Notes p. 10: "a uniform magnetic field … confined to a circular region with radius R", inside r < R; outside, E = (R²/2r) dB/dt (Eq. 10.3.8, p. 11); direction from Lenz (Fig. 10.3.1) | Solenoid framing, inside only, no direction | Physically right (a long solenoid's field is such a region). Optionally say "(the notes take a uniform field confined to a circle of radius R)", add the outside result R²/(2r) dB/dt, and the sense of circulation. |
| 8 | info | Lenz section: "field lines get hung up on the ring (slide 16)" | Slide 16: "hung up at the coil" (the visualization uses a coil) | "on the ring" | Optional: "at the coil". Short quoted phrase "tries to remain the same" is paraphrased; fine. |
| 9 | info | Flashcard "Faraday's law": ε = ∮ E · ds = −N dΦ_B/dt | Notes: ε = −N dΦ_B/dt (10.1.4) and ∮ E_nc · ds = −dΦ_B/dt (10.3.3) for one loop | Combines the line integral with the factor N | Acceptable if the path runs over all N turns; optionally write ∮ E · ds = −dΦ_B/dt and, for N turns, ε = −N dΦ_B/dt. |

## Arithmetic and answer checks
- Worked example (a): ε = (0.5)(0.2)(3) = 0.3 V; I = 0.3/0.6 = 0.5 A; F = IℓB = (0.5)(0.2)(0.5) = 0.05 N; P = Fv = 0.15 W; I²R = 0.25 × 0.6 = 0.15 W, and B²ℓ²v²/R = 0.01 × 9 / 0.6 = 0.15 W. All correct.
- Worked example (b): ω = 2π × 50 = 314.16 rad/s ≈ 314; NBAω = 100 × 0.2 × 0.01 × 314.16 = 62.83 V ≈ 62.8 V. Correct ("50 times a second" read as 50 rev/s, as intended).
- `npm run calc:test -- -k faradays-law`: 7 passed. The calcs file covers every number on the page (1831 as a fact; the worked example).
- Quiz 1: answer 2 (steady uniform field, stationary loop): correct; the other three change B, θ or A. Quiz 2: answer 1 (opposes the change in flux): correct. Quiz 3: answer 1 (Bℓv): correct; explanation d(Bℓx)/dt = Bℓv correct.
- Flashcards: Lenz and AC generator correct; Faraday see #9.
- Worked example is original: the notes' sliding-rod problems (10.9.3, 10.11.1, 10.11.4) are symbolic, and the generator problem 10.11.8 uses 120 V, 60 rev/s, 0.40 T; the page's numbers and wording differ.

## Coverage and order
- The page follows the course notes' order 10.1 → 10.5 (induction, flux, Faraday, three ways, Lenz, motional emf, induced E, generators, eddy currents) and places the slides' demonstrations and applications within it. The slides' order (demos → Faraday → flux → Lenz → ways to induce emf → Maxwell's equations → technology) is compatible.
- Omitted from the notes (minor): Eq. (10.1.5) expanding d(BA cos θ)/dt into its three terms; the four-step sign procedure and right-hand rule of Section 10.1.2 with the sign table (Fig. 10.1.7); the general motional emf ∮ (v × B) · ds, Eq. (10.2.2); the field outside the region, Eq. (10.3.8) (#7); the generator's current amplitude NBAω/R and the torque/dipole-moment steps (summarised in words); eddy-current applications (damping oscillations, magnetic braking in transit cars, p. 14); the notes' remark that the coasting bar travels a finite distance.
- Omitted from the slides: recap of the previous sessions (slides 2–7: force on a dipole, Ampère's law, torus group problem), PRS questions (slides 3, 23, 28), applet links (slides 10, 16, 33). Fine for a lesson page.
- Added by the page: the worked example, the link back to 18.02. No cosmology callout; acceptable, since Faraday's law has no direct 8.286 use, and the forward link is within 8.02.

## Licensing
- grep for "rights reserved" and "courtesy" in both text files: no match. Both sources under the course's CC BY-NC-SA licence.
- The page has no figures or images; nothing reproduced from the notes' figures or the slides' pictures (checked on the text extraction only; the slide images were not inspected visually, but the page uses none).
- howstuffworks.com (slides 39–40, speaker diagram and metal-detector animation): nothing from there is used or linked on the page; the page mentions metal detectors and speakers in words only.
- No OpenStax or LibreTexts material. No sentence copied verbatim from the notes; standard phrases ("electromagnetic induction", "motional emf", "non-conservative") only. The Lenz statement is reworded.

## Notes
- leadsTo 8.02 Lecture 24: `_course.json` lists Session 24 as "Inductance and LR Circuits; Energy in Inductors" (presentati_w10d2). The reason ("a coil's own changing current induces an emf in itself") is correct and fairly stated. Not checked against the Session 24 slides themselves.
- `source.url` and `reading2` are the same URL (the slides); that is the 8.02 convention on earlier pages, fine.
- Status `draft` is correct until #1–#5 are resolved.

## Resolution (2026-11-16, by the page author)

- Errors 1–2: eddy currents now cite Section 10.5, p. 13; the generator power balance cites Eqs. 10.4.5–10.4.9, p. 12.
- Warning 3: the motor now "does the reverse" (notes p. 11; slides 37–38).
- Warning 4: loudspeakers and DC motors are now said to work by the force on a current, not by induction.
- Warning 5: the induced-field paragraph now speaks of a stationary loop and contrasts it with the sliding rod.
- Info: added the outside field R²/2r · dB/dt (Eq. 10.3.8) and the direction by Lenz's law; "at the coil" as on slide 16; the flashcard now separates N from the single-loop line integral.
