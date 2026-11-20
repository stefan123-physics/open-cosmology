---
page: content/year-1/8.02/magnetic-dipoles.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w07d1-1/ (read: local copy presentati_w07d1-1.html and its PDF presentati_w07d1-1.pdf/.txt, 28 PDF pages, slides "P17- 1" to "P17- 26" = PDF pages 1–26, PDF pages 27–28 empty; every slide checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch8magneti_field/ (read: local copy ch8magneti_field.pdf/.txt; Section 8.4 = printed pp. 7–12 = PDF pp. 8–13; equation numbers (8.4.5)–(8.4.8) on printed p. 8 checked with pdftotext -raw because the layout text stacks them)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch9sourc_b_field/ (read: local copy ch9sourc_b_field.pdf/.txt; Section 9.5 = printed pp. 23–25 = PDF pp. 24–26)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w07d2/ (read: local text copy, only to judge the leadsTo; Session 18 slides on levitation use the dipole energy)
  - Session 20 slides (presentati_w09d1-1) (could not read: no local copy; the leadsTo `why` was judged from _course.json and general physics only)
  - content/year-1/8.02/_course.json (read: Sessions 16–21)
  - calcs/8.02/magnetic-dipoles.yaml (read; `npm run calc:test -- -k magnetic-dipoles`: 5 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Magnetic dipoles: torque, energy and force

Citation convention checked: course-note pages are the printed footers, printed page = PDF page − 1 for both chapters (checked page by page). Slides: "P17- N" = PDF page N. `reading1` = Chapter 8, `reading2` = Chapter 9, `reading3` = Session 17 slides (the same URL as `source.url`, so `cite="mit"` would also point to the slides). All five `<Formula>` citations are correct (list below the table).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Summary (frontmatter), quiz 2 explanation ("Aligned magnets attract."), "Force in a non-uniform field", bullet 3 of `## Summary` | Slides 22 and 25 and notes Fig. 8.4.4 (p. 10): a dipole **on the axis** of a bar magnet / of another dipole, pointing the same way, is attracted. | "two aligned magnets attract" / "aligned magnets attract", without the on-axis condition. | Two parallel dipoles placed **side by side** repel, so the unqualified statement is false in general. Write "two magnets lined up end to end (on a common axis, pointing the same way) attract". The body paragraph's "lined up north to south" is right but the summaries drop it. |
| 2 | warning | Worked example (d) | n/a (page's own example) | "a field that changes along its axis at dB_z/dz = −0.5 T/m, with μ along +z … towards −z, where the field is stronger". | "Where the field is stronger" is true only if B_z > 0 at the coil (field along μ). The problem never says so. Add "the field points along +z (along μ)" to the problem. The number −0.0157 N itself is right. |
| 3 | warning | `leadsTo` 8.02 Lecture 20, `why` | Session 18 (`_course.json`: "Levitation (Experiment 8); Ampère's Law") opens with dipole moments and U = −μ · B and uses them to explain levitating a magnet and a diamagnet (presentati_w07d2 slides). Session 20 is "Faraday's Law and its Applications". | Only Session 20, with a `why` that says nothing about dipoles. | The link to Faraday's law is reasonable (a moving magnet, i.e. a dipole, changes the flux through a loop), but the `why` should say so, e.g. "Faraday's law: moving a magnet (a dipole) near a loop changes the flux through it and drives a current." Consider adding Session 18 (levitation uses exactly this page's energy and force) as a second `leadsTo`. I could not read the Session 20 slides, so whether they use dipoles explicitly is uncertain. |
| 4 | info | Opening, "(slides 1–5)" | Slide 1 outline; slides 2–3 recap of Biot–Savart; slide 4 PRS "Force between wires"; slide 5 title "Magnetic Dipoles: Torque & Force". | "a current loop **is** a magnetic dipole (slides 1–5)". | Slides 2–4 do not say this. Cite "slides 1, 5" (or 5–10, where the identification is made). |
| 5 | info | "Torque on a current loop", "(pp. 8–9; slide 10)" | Slide 10 (and 14) define μ ≡ IAn̂ = IA, without N; N appears only in the notes, Eq. (8.4.8). | μ = NIA cited to the notes and slide 10. | Fine; optionally say the slides write it for one turn. |
| 6 | info | "Force in a non-uniform field" | Slide 19 adds a second form, "(after math) = (μ · ∇)B"; slide 20 writes the axis case as F = μ_z ∂B/∂z (a vector). | Only ∇(μ · B), and F_z = μ_z dB_z/dz. | Not wrong (on the axis the transverse components of ∂B/∂z vanish by symmetry). Optionally mention the (μ · ∇)B form the slides use, with the note that the two agree where there is no current at the dipole (∇ × B = 0). |
| 7 | info | "Torque on a current loop", galvanometer "a coil on a spring in a magnet's field" | Slide 13: "Demonstration: Galvanometer" (no description in the text). | Describes it. | Correct physics, but the description is the page's own; no source supports it. Fine. |
| 8 | info | "The field of a dipole", "On the axis it gives the 1/z³ fall-off of the ring field" | Section 9.5 does not say this. | Uncited. | Correct (on the axis Eq. (9.5.5) gives μ₀μ/(2πz³) = μ₀IR²/(2z³), the far limit of Eq. (9.1.15)). Fine as the page's own remark; optionally cite the ring field in Chapter 9, Section 9.1. |
| 9 | info | "Force in a non-uniform field", attraction | Notes Section 8.4.1, p. 10 (Fig. 8.4.4 and Eqs. 8.4.12–8.4.14) derive the attraction of a dipole on a bar magnet's axis via the external work, with dB/dx < 0. | Cites only slides 20–22, 24–25 for the attraction. | Optionally add "notes p. 10" there; it is the clearest written source for the claim. |

Every formula and prose citation checked against its location:
- Uniform B = Bî in the plane of the loop, sides 1, 3 no force, F₂ = IaBk̂ (out), F₄ = −IaBk̂ (in), net zero Eq. (8.4.2): printed p. 7; slides 7. Correct.
- Torque about the centre IabB ĵ = IAB ĵ, Eq. (8.4.3), p. 7; slide 8. Correct. ("a distance b apart": lever arms ±(b/2)î, correct.)
- Area vector, right-hand rule, τ = IA × B, Eq. (8.4.4), p. 8; slide 9. Correct. General angle θ, τ = IabB sin θ, Eqs. (8.4.5)–(8.4.6), p. 8. Correct. N turns, Eq. (8.4.7), p. 8. Correct.
- Formula "Magnetic dipole moment" μ = NIA, Eq. (8.4.8), p. 8: confirmed with the raw text layer (the label (8.4.8) follows "NIA"). Correct. Unit A m²: p. 9. Correct.
- Formula "Torque on a magnetic dipole" τ = μ × B, Eq. (8.4.9), p. 9; analogy with τ = p × E (Eq. 2.8.3), p. 9; slide 10 ("tends to align μ with B"). Correct.
- Compass needle and galvanometer: slides 11–13. "External field connects to field of compass needle and 'pulls' the dipole into alignment": slide 11; slide 12 says the same for the field of a wire. Correct.
- Work μB(cos θ₀ − cos θ), Eq. (8.4.10), p. 9; U₀ = 0 at θ₀ = π/2. Correct.
- Formula "Energy of a magnetic dipole" U = −μB cos θ = −μ · B, Eq. (8.4.11), p. 9. Correct. U_min = −μB stable, U_max = +μB unstable: p. 9. Correct.
- "Dipoles don't move???": slide 16; PRS slide 17; "Something new … non-uniform fields: force": slide 18. Correct.
- Formula "Force on a magnetic dipole" F = −∇U = ∇(μ · B): Eq. (8.4.15) is on printed p. 10 (the gradient definition (8.4.16) on p. 11); −∇U form on slide 19. Correct.
- Axis case and "force down" when ∂B_z/∂z < 0: slide 20; bar magnet below with N on top, aligned, attract: slide 22; anti-parallel repel, parallel attract: slides 24–25; Experiment 7: slide 23. Correct.
- Formula "Field of a magnetic dipole" B = μ₀/(4πr³)[3(μ · r̂)r̂ − μ], Eq. (9.5.5), printed p. 24 (Section 9.5 starts on p. 23). Correct. Comparison with the electric dipole: p. 24 gives it in the (sin θ θ̂ + 2 cos θ r̂) form; the page's vector form is equivalent. Correct.
- Earth: "South pole of such a magnet in the northern hemisphere in order to attract the North pole of a compass": Section 9.5.1, p. 24. Correct.

## Arithmetic and answer checks
- `npm run calc:test -- -k magnetic-dipoles`: 5 passed. Recomputed by hand:
- (a) μ = 50 × 0.5 × π × (0.02)² = 25 × 1.2566 × 10⁻³ = 0.031416 ≈ 0.0314 A m². Correct.
- (b) τ = 0.031416 × 0.2 × 0.5 = 3.1416 × 10⁻³ ≈ 3.14 × 10⁻³ N m. Correct.
- (c) 2μB = 2 × 0.031416 × 0.2 = 0.012566 ≈ 0.0126 J. Correct (U from −μB to +μB).
- (d) F_z = 0.031416 × (−0.5) = −0.015708 ≈ −0.0157 N. Correct; direction statement needs B_z > 0 (row 2).
- Quiz 1 (index 1, torque and no net force): correct; explanation right.
- Quiz 2 (index 0, attracted): correct for a dipole on the axis above the north pole, as the question sets it up; the closing "Aligned magnets attract" needs the on-axis condition (row 1).
- Quiz 3 (index 1, 0.2 A m²): 10 × 2 × 0.01 = 0.2. Correct.
- Flashcards: all three correct.
- calcs file: every number on the page has an entry; `shown` strings match the page text.

## Coverage and order
- MIT order (slides): outline (1) → Biot–Savart recap (2–3) → PRS force between wires (4) → title (5) → review: rectangular loop, forces (6–7) → torque (8) → τ = IA × B (9) → μ, τ = μ × B, analogy with p × E (10) → field-line pictures of the torque (11–12) → galvanometer (13) → μ again (14) → PRS torque (15) → "dipoles don't move???" (16) → PRS force (17) → non-uniform fields (18) → U = −μ · B, F = ∇(μ · B) = (μ · ∇)B (19) → axis case (20–21) → bar magnet below, attract (22) → Experiment 7 (23) → anti-parallel repel, parallel attract (24–25) → PRS (26).
- The page follows this order, inserting the energy derivation from notes p. 9 between the torque and the force (the slides go straight to U on slide 19), and ends with the dipole field from Chapter 9, Section 9.5, which is not in the slides. Fine.
- Left out: PRS questions (slides 4, 15, 17, 26; their content is not in the text extraction); Experiment 7 itself (named only; no lab handout was among the sources, so I cannot say what it measured); the (μ · ∇)B form (row 6); notes pp. 11–12, Animation 8.1 (dip needle oscillating in the Earth's field, Faraday's 1855 quote, conservation of angular momentum between needle and Earth's core currents); Section 9.5 component forms, Eqs. (9.5.1)–(9.5.4) and the ratio B_r/B_θ = 2 cot θ, Eq. (9.5.6); Section 9.5.1's latitude/longitude and the Earth's dipole moment vector, Eq. (9.5.7). The angular-momentum point is the most worthwhile omission; one sentence would cover it.
- Added: the worked example and the 1/z³ remark (row 8). Nothing else goes beyond the sources.
- Prerequisites `biot-savart-law` and `electric-dipoles` exist; inline links `/courses/8-02/magnetic-fields`, `/courses/8-02/biot-savart-law`, `/courses/8-02/electric-dipoles` point to existing pages (content:check passes).

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the slide text, the Chapter 8 or 9 text, or the HTML resource pages (grep: no match in any of the six files). The page uses no image or figure.
- No sentence copied verbatim. Closest paraphrases: "the external field joins onto the field of the needle and pulls it into line" (slide 11: "External field connects to field of compass needle and 'pulls' the dipole into alignment"), attributed to the slides and reworded; "area vector", "magnetic dipole moment", "stable/unstable" are standard terms. Acceptable.
- The worked example is original: Section 8.4 and the slides contain no numerical example; 50 turns, 2 cm, 0.5 A, 0.2 T, 30°, −0.5 T/m are the page's own. (The 30° angle also appears in the page author's own electric-dipoles example, not in MIT.)
- No OpenStax or LibreTexts material.

## Notes
- No `Callout kind="cosmology"`, so no cosmology claim to check; reasonable for this page. `leadsTo` is discussed in row 3.
- `source.url` and `reading3` are the same URL; harmless, but `cite="mit"` and `cite="reading3"` are interchangeable here.
- Not verified: the lecture video and the Session 20 slides (not among the sources).

## Resolution (2026-11-16, by the page author)

- Warning 1: "aligned magnets attract" now says "end to end" in the summary, quiz 2 and the Summary, which adds that parallel dipoles side by side repel.
- Warning 2: worked example (d) now states that the field points along +z.
- Warning 3: added a leadsTo to Session 18 (levitation of diamagnets).
- Info: the opening cites slides 1 and 5; added the notes' dip-needle and angular-momentum remark (pp. 11–12). Other info notes: no change.
