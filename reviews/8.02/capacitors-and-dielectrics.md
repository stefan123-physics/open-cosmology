---
page: content/year-1/8.02/capacitors-and-dielectrics.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w03d2-1/ (read: local copy presentati_w03d2-1.pdf/.txt, "Class 08", 36 slides labelled P8-1 to P8-36, slide number = PDF page; slides 11, 17, 31 and 32 also checked as rendered images because the text layer drops σ, κ and Δ)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap5capacitance/ (read: local copy chap5capacitance.pdf/.txt, Course Notes Chapter 5; printed page = PDF page − 1; Sections 5.3 (printed pp. 9–11) and 5.5 (printed pp. 15–23) read page by page with `pdftotext -f N -l N`)
  - Course Notes Chapter 4, Gauss's law (read: local copy chapte4gauss_law.txt; Example 4.5 "Conductor with Charge Inside a Cavity", printed p. 17), for the shielding remark
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w04d2/ (read: Session 10 slides "Class 10", downloaded to the scratchpad; for the leadsTo check)
  - content/year-1/8.02/_course.json (read: Lecture 8 = "Conductors; Experiment 3: Faraday Ice Pail; Capacitors and Dielectrics", Lecture 10 = "DC Circuits; Kirchhoff's Loop Rules")
  - content/year-1/8.02/conductors-and-capacitors.mdx (read: prerequisite; it covers U = Q²/2C = ½CΔV², which the worked example uses)
  - calcs/8.02/capacitors-and-dielectrics.yaml (read; `npm run calc:test -- -k capacitors-and-diel`: 11 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: pass-with-notes
---

# Review: Shielding, combining capacitors and dielectrics

Citation convention checked: `reading1` = Course Notes Chapter 5 (printed page numbers), `reading2` = Session 8 slides (slide = P8 label = PDF page); `cite="mit"` is not used. Every `<Formula>` is at the cited place:

- "Capacitors in parallel", `reading1` Eq. (5.3.3), p. 9: correct (PDF p. 10; the notes write C_eq = Q/|ΔV| = C₁ + C₂).
- "Capacitors in series", `reading1` Eq. (5.3.7), p. 10: correct (PDF p. 11).
- "Capacitance with a dielectric", `reading1` Eq. (5.5.1), p. 15: correct (PDF p. 16).
- "Field in a dielectric", `reading2` slides 31–32: correct. Slide 31 has E = (σ − σ′)/ε₀; slide 32 has the full chain E = (σ − σ′)/ε₀ ≡ E₀/κ = σ/κε₀ and σ′ = σ(1 − 1/κ) (checked on the rendered slide).
- "Gauss's law with a dielectric", `reading2` slide 32: correct. The rendered slide shows ∯_S κ E · dA = q_free,inside / ε₀ (the text layer loses the κ). The page writes ∮_S; same meaning.

Prose citations checked: Sections 5.3.1/5.3.2 (pp. 9, 10), generalisations Eqs. (5.3.4) p. 9 and (5.3.8) p. 11, Example 5.4 p. 11, Section 5.5 pp. 15–16 (dielectric constant, table, strength, "break down less readily than air", p. 15), polar/non-polar pp. 16–17, Section 5.5.1 and Eqs. 5.5.2–5.5.5 pp. 17–19, Eq. (5.5.11) κ = 1 + χₑ p. 20, Sections 5.5.2–5.5.3 pp. 20–22 (Eq. 5.5.13 and 5.5.14 on p. 21, Eq. 5.5.17 on p. 22), slides 4–6, 15–16, 18–23, 27–34: all correct. Physics checks: sign of the induced surface charge (positive on the face towards the negative plate; dipoles align with E₀, which points to the negative plate) is right; battery-disconnected (Q fixed, ΔV → ΔV₀/κ) and battery-connected (ΔV fixed, Q → κQ₀) both match Eqs. (5.5.13)–(5.5.17) and slides 33–34. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Batteries", last sentence (slide 17) | Slide 17 shows two **equal** batteries (each ΔV) in parallel: "Net voltage still ΔV. Don't do this!" | "Connecting batteries of **different** voltages in parallel is a bad idea (slide 17)." | Say what the slide says: two equal batteries in parallel still give ΔV, and the slide warns not to do it. If you want to add that unequal batteries would drive a large current between them, mark it as the page's own remark. |
| 2 | warning | Coverage of slides 35–36 | Slide 36 is a group problem, "Partially Filled Capacitor: what is the capacitance of this capacitor?"; slides 24 and 35 are PRS questions on series/parallel and dielectrics. | Not mentioned. | Foundation pages cover their lecture fully: add a short paragraph (a slab of dielectric plus an air gap behaves as two capacitors in series, κε₀A/d₁ and ε₀A/d₂), with your own numbers, or a quiz item on it. |
| 3 | info | "Conductors as shields", first bullet | Example 4.5 is in Course Notes **Chapter 4**, p. 17, which is not among this page's `source.readings` or `references`. | "(slide 5; course notes for Session 7, Chapter 4, Example 4.5)". | Either add Chapter 4 to `references` (key, title, URL `.../resources/chapte4gauss_law/`, location "Example 4.5, p. 17") or keep the remark as plain prose. Physics is right: Example 4.5 has −q on the cavity wall and Q + q on the outer surface. |
| 4 | info | Faraday ice pail paragraph (slide 11) | Slide 11 is only the title "Experiment 3: Faraday Ice Pail"; no slide explains the method. | "the charge induced on the outside of the pail measures the object's charge (slide 11)". | Physics is correct (for a neutral pail the outer surface carries +q, by Example 4.5), but slide 11 does not support it. Cite Example 4.5 / the reasoning in the bullet above instead, or the Experiment 3 write-up if you have read it. |
| 5 | info | "Some values: … (Section 5.5, p. 16; slide 32)" | Notes p. 16: air 1.00059, paper 3.7, glass 4–6, water 80. Slide 32: vacuum 1.0, paper 3.7, **Pyrex glass 5.6**, water 80. | Notes values, cited to both. | Fine as is; optionally cite only the notes for the list, or add "(slide 32 gives 5.6 for Pyrex)". |
| 6 | info | Intro "(slides 1–3, 11–13)" | Slides 12–13 are the "Last time: Capacitors" recap (C = Q/ΔV, C = ε₀A/d). | Cited as part of the outline. | Fine. |

## Arithmetic and answer checks
- Worked example (a): C₁₂ = 2 + 4 = 6 μF; C_eq = 6·3/(6 + 3) = 2 μF; Q = 2 μF × 12 V = 24 μC; ΔV₃ = 24/3 = 8 V; ΔV₁₂ = 24/6 = 4 V; 8 + 4 = 12 V. Energy ½(2 × 10⁻⁶)(144) = 1.44 × 10⁻⁴ J. All correct.
- Worked example (b): Q₀ = 88.5 × 10⁻¹² × 100 = 8.85 × 10⁻⁹ C; C = 3.7 × 88.5 = 327.45 ≈ 327 pF; ΔV = 100/3.7 = 27.03 ≈ 27.0 V; U₀ = ½(88.5 × 10⁻¹²)(100²) = 4.425 × 10⁻⁷ J, shown as 4.43 × 10⁻⁷ (round half up, acceptable); U = 4.425 × 10⁻⁷/3.7 = 1.196 × 10⁻⁷ ≈ 1.20 × 10⁻⁷ J. All correct. The physical remark (energy falls, the field pulls the dielectric in, battery disconnected) is right.
- Calcs file: 11 entries, all pass. The initial energy 4.43 × 10⁻⁷ J is not a separate entry (only the final 1.20 × 10⁻⁷ J is); consider adding `paper-energy-before` with formula `0.5 * 88.5e-12 * 100**2`. The `network-energy` entry cites "Section 5.4, p. 12", which is Session 7 material; fine as a source of U = ½CΔV².
- Quiz 1 (series: same charge), answer index 1: correct; explanation correct (inner plates neutral, equal and opposite charges; voltages add).
- Quiz 2 (2 μF and 2 μF in series), answer index 1 = 1 μF: correct.
- Quiz 3 (disconnected, dielectric inserted: voltage falls by κ), answer index 1: correct, matches Eq. (5.5.13).
- Flashcards: parallel/series rules, C = κC₀ with κ > 1, polar (water) vs non-polar (methane, slide 29 "CH4"): all correct.

## Coverage and order
- The page follows the slide order: conductors recap and shields (slides 3–6), Faraday ice pail (11), batteries (14–17), parallel and series capacitors (18–23), dielectrics: definition (27), polar/non-polar (28–29), field reduction (30–32), battery disconnected/connected (33–34).
- Left out: slides 7–8 (PRS: point charge inside a conductor), 9 (shielding demonstration), 10 (inductive-charging visualization), 24 and 35 (PRS), 25–26 (dielectric demonstration), and 36 (group problem: partially filled capacitor; see finding 2). Demonstrations and PRS slides have no content in the PDF; the group problem is the only substantive omission.
- Added from the notes beyond the slides: polarization vector, susceptibility κ = 1 + χₑ, dielectric strength. All clearly cited.
- Section 5.5.4 (Gauss's law for dielectrics, Eqs. 5.5.18–5.5.24, notes pp. 22–23) is covered through slide 32's version; acceptable.

## Licensing
- `grep -il "rights reserved\|courtesy"` over the slides and both chapters: no match. No "Courtesy of" credits to carry.
- No figures reused: the page has no images or diagrams.
- No verbatim copying beyond short standard phrases ("fixes potential difference", "hill/mountain" metaphor reworded as "hill of potential", "rubber, glass or waxed paper" as a list of examples). Prose is rewritten.
- Worked example (a) uses the same topology as notes Example 5.4 (C₁ ∥ C₂, in series with C₃), which is solved there only symbolically; the page's numbers, voltages and energy are its own. Acceptable as a rewritten example (info only). Example (b) is original.
- No OpenStax or LibreTexts material.

## Notes
- leadsTo 8.02 Lecture 10 ("DC Circuits; Kirchhoff's Loop Rules"): checked against the Session 10 slides (presentati_w04d2). They open with a capacitors-and-dielectrics recap, then current, resistance, circuit elements battery/resistor/capacitor with sign conventions (P10-19 to P10-22), Kirchhoff's rules and power in a battery, resistor and capacitor. The "why" ("batteries drive currents through resistors and charge capacitors") is fair; RC charging in time may come in a later session, so "charge capacitors" is slightly ahead of Session 10 (uncertain; not checked beyond the slide titles).
- No `Callout kind="cosmology"` on the page; none is required for this lecture.
- Page and calcs file were briefly absent from the working tree during the review (presumably moved by the author) and reappeared unchanged (114 lines); this review is of that version.

## Resolution (2026-11-16, by the page author)

- Warning 1: the batteries sentence now follows slide 17 (two equal batteries in parallel, same voltage, not recommended).
- Warning 2: added that the session's group problem on a partly filled capacitor (slide 36) is left for the problem pages.
- Info 3: the Chapter 4 citation is replaced by a link to the Session 7 page.
- Info 4: the ice-pail explanation is marked as the page's own (slide 11 is a title slide).
- Info 7: added a calcs entry for the starting energy 4.43 × 10⁻⁷ J. Info 5 and 6: no change.
