---
page: content/year-1/8.02/electric-dipoles.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w01d2-1/ (read: local copy p2.pdf / p2.txt, Session 2 slides "P02 - 1" onwards, 41 PDF pages; slide number = PDF page; this is both `source.url` and `reading2`; slides 1–23 in scope, 24 onwards belong to the continuous-charge page)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chap2coulomb_law/ (read: local copy ch2.pdf / ch2.txt, Course Notes Chapter 2 "Coulomb's Law"; printed page = PDF page − 1, checked page by page with pdftotext -f 9 -l 17 for Sections 2.5–2.9)
  - content/year-1/8.02/_course.json (read: lecture 5 = "Gauss's Law", presentati_w02d2-1)
  - calcs/8.02/electric-dipoles.yaml (read; `npm run calc:test -- -k electric-dipoles`: 6 passed)
  - `npm run content:check`: no error or warning on this page other than the missing review file (the 2 errors reported are on continuous-charge-distributions.mdx)
verdict: pass-with-notes
---

# Review: Field lines, charging and electric dipoles

Citation convention checked: `reading1` = Course Notes Chapter 2 (printed page numbers), `reading2` = Session 2 slides (P02 numbers). `source.url` and `reading2` are the same URL, as for the Session 1 page.

Course notes page map (printed pages): p. 8 = 2.5 starts (Fig. 2.5.1 radial lines, dipole lines, the four sketching rules: symmetry, near field, far field, null point); p. 9 = list of field-line properties, 2.6 starts (plates, E = −E_y ĵ, Eq. 2.6.1, "cannot exert a force on itself"); p. 10 = Eqs. 2.6.2–2.6.4, 2.7 starts, Eqs. 2.7.1–2.7.2; p. 11 = HCl, CO, H₂O, polar molecules, 2.7.1, Eqs. 2.7.3–2.7.8, start of the 1/r³ remark; p. 12 = end of the 1/r³ remark, Fig. 2.7.2, Animation 2.3, 2.8 starts, Eq. 2.8.1; p. 13 = Eq. 2.8.2, τ = pE sin θ, Eq. 2.8.3, 2.8.1 starts (Eq. 2.8.4); p. 14 = Eqs. 2.8.5–2.8.7, U_min/U_max, non-uniform field, Eq. 2.8.8; p. 15 = Eq. 2.8.9, comb and paper, 2.9 starts.

Slide map (1–23): 1 outline; 2–3 review of fields ("create / feel"); 4 PRS; 5 field-line rules (tangent, away from + to −, never cross); 6 in-class problem (field of ±q on the perpendicular bisector); 7 PRS; 8–9 charging (friction, transfer, induction, with a sketch of separated charges); 10 demonstrations; 11–12 dipole, p = 2qa ĵ, from − to +; 13 "Nature likes to make dipoles" (molecule visualization link); 14 title; 15 field components E_x, E_y with k_e q; 16 PRS "dipole fall-off"; 17 point-dipole limit; 18 Shockwave link; 19–20 titles/demo; 21 dipole in uniform field (p = 2qa(cos θ î + sin θ ĵ), F_net = 0, τ = p × E = pE sin θ, "p tends to align"); 22 torque visualization ("field lines transmit tension"); 23 PRS dipole in non-uniform field.

All six formulas are at the cited place: Eq. (2.6.2) p. 10; Eq. (2.7.1) p. 10; Eqs. (2.7.3) and (2.7.5) p. 11 (page writes q/(4πε₀) as k_e q, as slide 15 does); Eqs. (2.7.6)–(2.7.7) p. 11; Eq. (2.8.3) p. 13; Eq. (2.8.7) p. 14. Every prose page and slide reference was checked against the maps above and is correct, with the qualifications below. No em dash on the page.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Charging objects" (cited to slide 9) | Slide 9 lists only friction, transfer (touching) and induction, with a sketch of a charge +q separating the charges of a neutral object. Nothing about grounding or splitting; Chapter 2 does not discuss charging. | "ground or split it, and it keeps a net charge of the opposite sign" | The grounding/splitting step is not in the source, and for splitting it is imprecise: the near part gets the opposite sign, the far part the same sign. Either drop it, or rewrite as "ground it (or separate the near and far parts) and the near side keeps a charge of the opposite sign" and mark it as the page's own addition (e.g. "the slide shows only the separation"). |
| 2 | info | "The field of a dipole", point-dipole formula | Notes p. 11: sin θ = x/r, cos θ = y/r, i.e. θ measured from the +y axis (the direction of p). | "θ the angle from the dipole's axis". In the next section θ is the angle between p and E = E î (as in Section 2.8). | Add "(sin θ = x/r, cos θ = y/r)" so the reader knows which side is positive, and perhaps note that θ in the next section is a different angle (MIT reuses the letter too). |
| 3 | info | "Field lines", sketching rules | Notes p. 8 give the four rules (symmetry, near field, far field, null point) for the dipole pattern of Fig. 2.5.2; the far-field rule adds "unless Q = 0". | "To sketch the pattern of several charges …" ; far field "looks like a single charge equal to the total". | Fine as a generalisation. Optionally add "(unless the total is zero, as for a dipole)", which also links to the 1/r³ result later on the page. |
| 4 | info | "The field of a dipole", 1/r³ paragraph cited to slide 16 | Slide 16 is only the title "PRS Question: Dipole Fall-Off"; the statement is in the notes, pp. 11–12. | "(Section 2.7.1, pp. 11–12; slide 16)" | Acceptable (the slide is where the topic comes up); could read "the PRS question on slide 16". |
| 5 | info | "The electric dipole" | Notes p. 10 also give the general dipole moment of a neutral system, p = Σ qᵢ rᵢ (Eq. 2.7.2), and p. 11 the vector form E = (1/4πε₀)(−p/r³ + 3(p·r)r/r⁵) (Eq. 2.7.8), valid in 3D. | Neither is mentioned. | Consider one sentence for each (Eq. 2.7.2 is the definition later chapters use; Eq. 2.7.8 shows the 1/r³ directly). Not required for correctness. |
| 6 | info | "A charge in a field" | Notes p. 10 also give the final speed v_y = √(2qE_y y/m) (Eq. 2.6.3); the uniformity of the field between plates is promised "in Chapter 4". | Only K = qE_y y; "Between two oppositely charged plates the field is uniform". | Optional: add "(shown later with Gauss's law)" after "uniform". |

## Arithmetic and answer checks
- (a) p = 2(10⁻⁹)(10⁻³) = 2 × 10⁻¹² C m. Correct.
- (b) Distances on the axis at y = 0.1 m: 0.099 m (to +q at y = +a) and 0.101 m. 1/0.099² = 102.0304, 1/0.101² = 98.0296, difference 4.0008 ≈ 4.001. k_e q = 8.99 × 10⁹ × 10⁻⁹ = 8.99 N m²/C, so E ≈ 35.97 N/C. Correct.
- (b) Point dipole on the axis (θ = 0 in Eq. 2.7.7: E_y = 2p/(4πε₀r³)): 2(8.99 × 10⁹)(2 × 10⁻¹²)/10⁻³ = 35.96 N/C. Correct. "50 times the size of the dipole": 0.1 m / 2 mm = 50. Correct.
- (c) τ = (2 × 10⁻¹²)(3 × 10⁴)(0.5) = 3 × 10⁻⁸ N m. Work from aligned (U = −pE) to perpendicular (U = 0): pE = 6 × 10⁻⁸ J. Correct.
- All six numbers are in calcs/8.02/electric-dipoles.yaml and pass (`npm run calc:test -- -k electric-dipoles`: 6 passed).
- Worked example is original: own charges, distances, field and angle; MIT's slide 6 in-class problem (perpendicular bisector) and Solved Problem 2.13.4 are different problems.
- Quiz 1: answer 1 (begin on +, end on −, or at infinity). Correct (notes p. 9).
- Quiz 2: answer 1 (torque, no net force). Correct (notes pp. 12–13; slide 21).
- Quiz 3: answer 2 (1/r³). Correct (notes pp. 11–12).
- Flashcards: p = 2qa from −q to +q (Eq. 2.7.1); zero net force, τ = p × E, U = −p·E, lowest when aligned (Eqs. 2.8.3, 2.8.7, p. 14); on-axis field 2k_e p/r³ (Eq. 2.7.7 with θ = 0). All correct.

## Coverage and order
- Order follows the slides and Sections 2.5–2.8: field lines (slide 5, 2.5) → charge in a field (2.6) → charging (slides 8–9) → dipole (slides 11–13, 2.7) → field of a dipole (slides 15–17, 2.7.1) → dipole in a field (slides 21–23, 2.8, 2.8.1). Section 2.6 is not on the slides; placing it before charging is a reasonable merge.
- Left out (all optional): slide 6 in-class problem (field of ±q at a point on the perpendicular bisector; a natural second example, its answer is the dipole field at θ = 90°); slide 22's idea that "field lines transmit tension" and pull the dipole into alignment; the Shockwave and molecule visualizations (slides 13, 18, 22) and demonstrations (slides 10, 20); Eqs. 2.6.3, 2.7.2, 2.7.4 and 2.7.8 (see findings 5 and 6). PRS slides 4, 7, 16, 23 have no content in the PDF.
- Slides 2–3 (review of fields) are covered by the Session 1 page and linked in the opening paragraph.
- Section 2.9 onwards and slides 24+ are out of scope (continuous-charge page).
- leadsTo 8.02 Lecture 5: `_course.json` lists it as "Gauss's Law" (presentati_w02d2-1). The reason ("explains why field lines begin and end only on charges") is a fair description of what Gauss's law adds (flux through a closed surface ∝ enclosed charge). The page has no cosmology callout; none is needed, as there is no direct cosmology link for dipoles in this lecture.

## Licensing
- `grep -il "rights reserved\|courtesy"` on ch2.txt and p2.txt: no match. No figure from MIT is reused; the page has no images or diagrams.
- No verbatim copying found. Closest phrasing: "the centres of their positive and negative charges do not coincide" (notes p. 11: "the centers of the positive and negative charges do not coincide"), a short standard phrase; acceptable, could be reworded.
- No OpenStax or LibreTexts material.

## Notes
- The page mixes k_e (field components, flashcard) and 1/(4πε₀) (point dipole), exactly as MIT does (slide 15 vs Eq. 2.7.6–2.7.7). Fine, since the Session 1 page defines k_e = 1/(4πε₀); optionally write the point-dipole formula with k_e for consistency with the worked example.
- Torque direction: MIT computes τ = 2aF sin θ (−k̂), clockwise, turning p towards E; the page's "it turns p towards E" agrees.
- Verdict pass-with-notes: no errors; finding 1 (unsupported and slightly imprecise induction sentence) should be fixed before `status: reviewed`.

## Resolution (2026-11-16, by the page author)

- Finding 1: the charging-by-induction sentence now states only what slide 9 shows (charges separate, the opposite sign on the near side); the step that leaves a net charge is in brackets and marked as the page's own addition, with the near part cut off or the object grounded.
- Finding 2: θ for the point dipole is now defined as MIT does (sin θ = x/r, cos θ = y/r), and the next section says θ is now the angle to the field.
- Finding 3: added "unless the total is zero" to the far-field rule.
- Finding 4: the 1/r³ statement now cites only the notes, pp. 11–12.
- Findings 5 and 6: no change (optional omissions).
