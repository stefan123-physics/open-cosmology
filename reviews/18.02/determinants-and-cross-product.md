---
page: content/year-1/18.02/determinants-and-cross-product.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-2-determinants/ (read via the local copy of its transcript; lecture page HTML not re-checked in this review)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/c542939492274449e99caa5df72fab3f_9FLItlbBUPY.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec02", 15 pages of text, no printed page numbers; every page extracted with pdftotext -f/-l, so cited page = PDF page)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week1/ (read: local copy week1.pdf; Lecture 2 on printed p. 2 = PDF p. 3, confirmed with pdftotext -f/-l)
  - content/year-4/8.286/expanding-sphere.mdx (read: lecture 6, ρ = ρᵢ/a³ because the volume grows as a³)
  - content/year-1/18.02/_course.json (read: Lecture 2 = Determinants, Lecture 3 = Matrices)
  - content/year-1/8.01/torque-and-cross-product.mdx (exists; link target)
  - calcs/18.02/determinants-and-cross-product.yaml (read; `npm run calc:test -- -k determinants`: 13 passed)
  - `npm run content:check`: 0 errors; the only warning is the missing review file for this page
verdict: pass-with-notes
---

# Review: Determinants and the cross product

Citation convention checked: transcript pages are PDF pages (the transcript has no printed numbers); notes pages are the printed footers (Lecture 2 = printed p. 2 = PDF p. 3). `reading1` = Week 1 summary, `reading2` = transcript; every `cite` uses the right key. No "rights reserved" or "courtesy" notice in the transcript or the Week 1 summary.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Components along a direction", pendulum | Transcript p. 3: the normal component of the weight "is what is going to be responsible for the tension of the string", it keeps the string taut. | "the component along N is what the tension in the string must balance" | For a swinging pendulum the tension is not equal to the normal component of the weight: T = mg cos θ + mv²/L, the extra term supplying the centripetal acceleration. They balance only when the mass is momentarily at rest. Say instead "the component along N pulls the string taut and is what the tension responds to (together with the centripetal force needed for the circular motion)", or keep MIT's looser "is responsible for the tension". |
| 2 | info | "The cross product", the î × ĵ check | Transcript pp. 12–13: î coefficient 0·0 − 0·1 = 0; ĵ coefficient "one times zero minus zero times zero, that is a zero, minus zero j". | "the î and ĵ coefficients are 0·0 − 0·1 = 0 and 1·0 − 0·0 = 0" | The ĵ coefficient is minus that 2 × 2 determinant (as the page itself writes in worked example (b): −(1·1 − 2·0)). The value is 0 either way, but for consistency write "−(1·0 − 0·0) = 0". |
| 3 | info | "Area and the 2 × 2 determinant", sign of the determinant | Transcript p. 6: the sign "depends on whether A and B are clockwise or counterclockwise from each other"; notes p. 2: "without details". | Positive when B is counterclockwise from A, negative when clockwise. | Correct (î, ĵ gives +1) and a fair, small addition beyond MIT. No change needed. |
| 4 | info | "Volume and the triple product", formula "Base times height" and the Summary / flashcard "up to sign" | Notes p. 2: "volume = A·(B × C) = det(A, B, C)"; transcript p. 15 the same, without a sign remark. | Same derivation; the Summary and flashcard add "up to sign". | Fine, and the worked example (c) shows a negative triple product. Optionally say in the section itself that A·n̂ is negative when A lies on the other side of the base, so the triple product is plus or minus the volume, matching the theorem on p. 9. |
| 5 | info | "Determinants in space" | Transcript p. 10: the expansion can also be done along other rows or columns, with care over the sign rules ("I will refer you to the notes"). | Not mentioned. | Optional one-line remark. |

Every formula and every prose page reference was checked against its cited location:
- Opening "(transcript, pp. 1, 3)": continuing with vectors p. 1; area as the next topic p. 3. Correct.
- Component along û, |A| cos θ = |A||û| cos θ: p. 1; "= A·û" and the î, k̂ examples: p. 2. Formula `reading2` "pp. 1–2" correct; also notes p. 2. Pendulum with T and N: pp. 2–3. Correct.
- Polygon cut into triangles (lecture: a pentagon into three triangles): p. 3. Correct. ½ base × height, |B| sin θ, the sin² + cos² route "very complicated" (notes: "ugly formula"): p. 4. Correct.
- θ′ = π/2 − θ, cos θ′ = sin θ, |A||B| sin θ = |A′||B| cos θ′: p. 4; "= A′·B": p. 5. Formula "pp. 4–5" correct.
- A′ = ⟨−a₂, a₁⟩, clockwise ⟨a₂, −a₁⟩, a₁b₂ − a₂b₁, determinant notation: p. 5. Formula "p. 5" correct (the det(A, B) notation itself is from the notes p. 2; fine).
- Determinant = area of the parallelogram, triangle half of it, sign, "plus or minus the area": p. 6; absolute value: pp. 6–7. Correct.
- 3 × 3 determinant by first-row expansion, six terms, minus on the middle term, 18.06: p. 8 (the notation is introduced at the bottom of p. 7 and finished on p. 8). Formula "p. 8" correct; also notes p. 2.
- Why the minus sign, handedness and mirror images, the theorem "± volume of the parallelepiped", "box with parallelogram sides", alternating signs and the 1 × 1 view of the 2 × 2 determinant: p. 9. Correct (prose "pp. 8–9" for 18.06 and alternating signs is right).
- Cross product only in three dimensions, a vector not a number, "do your multiplication symbol well", symbolic determinant with î ĵ k̂: p. 10; the expansion written out: p. 11. Formula "pp. 10–11" correct; also notes p. 2.
- Length = area of the parallelogram in space, "simplest way", no ± needed, direction perpendicular: p. 11; right-hand rule: pp. 11–12. Correct.
- î × ĵ = k̂ geometrically: p. 12; by the definition: pp. 12–13; "easier to do it geometrically ... complicated vectors ... calculation": p. 13. Correct.
- Volume = base × height, area of base |B × C|, height A·n̂: p. 14; n̂ = B × C/|B × C|: pp. 14–15. Formula "Base times height" cited `reading1` "Lecture 2, p. 2": the notes give exactly this expression. Correct.
- Triple product, order matters (A·B is a number), check by components: p. 15. Correct. "the geometric route still needs a determinant (p. 9)": p. 9, "computationally the only way to compute it is really to use a determinant". Correct.

## Arithmetic and answer checks
- Rotation identity ⟨−a₂, a₁⟩·⟨b₁, b₂⟩ = a₁b₂ − a₂b₁: correct.
- 3 × 3 expansion and the cross-product formula: correct as written (signs +, −, +; minors correct). Triple product A·(B × C) equals the first-row expansion: verified by components and by the calcs identity.
- Worked example (a): 3·2 − 1·1 = 5; B = ⟨1, 2⟩ at 63.4° is counterclockwise from A = ⟨3, 1⟩ at 18.4°, so the positive sign is right; triangle 2.5. Correct.
- Worked example (b): P × Q = ⟨0·1 − 2·3, −(1·1 − 2·0), 1·3 − 0·0⟩ = ⟨−6, −1, 3⟩; P·(P × Q) = −6 + 0 + 6 = 0; Q·(P × Q) = 0 − 3 + 3 = 0; |P × Q| = √46 = 6.782 ≈ 6.78. Correct.
- Worked example (c): Q × R = ⟨3·1 − 1·1, −(0·1 − 1·1), 0·1 − 3·1⟩ = ⟨2, 1, −3⟩; P·(Q × R) = 2 + 0 − 6 = −4; expansion 1(3 − 1) − 0 + 2(0 − 3) = −4; volume 4; negative sign = left-handed set. Correct.
- The worked example uses its own vectors; MIT's only example is î × ĵ. Original.
- Quiz 1 (index 1, 5): 2·3 − 1·1 = 5; explanation right. Quiz 2 (index 2, ⟨−a₂, a₁⟩): correct, matches p. 5. Quiz 3 (index 1, −k̂): correct; explanation right. Quiz 4 (index 1, area of the parallelogram): correct.
- Flashcards: all three correct ("up to sign" on the third refers to the volume; A·(B × C) = det(A, B, C) holds exactly, which is how the card reads).
- Cosmology callout: scaling every edge by a multiplies each of the three rows of the determinant by a, so each six-term product picks up a³ and the volume is multiplied by a³; density of a fixed number of galaxies ∝ 1/a³. Correct.
- calcs/18.02/determinants-and-cross-product.yaml: 13 entries, all pass, values agree with the page. Info: the î × ĵ coefficients and quiz 3 have no entries (trivial; optional).

## Coverage and order
- MIT order (transcript): recap of the dot product (p. 1) → components along û, pendulum (pp. 1–3) → area, triangles, the sine problem (pp. 3–4) → rotation by 90°, A′ = ⟨−a₂, a₁⟩, the 2 × 2 determinant (pp. 4–5) → ± area of the parallelogram (pp. 6–7) → 3 × 3 determinant, minus sign, ± volume (pp. 7–10) → cross product, length, direction, right-hand rule (pp. 10–12) → î × ĵ (pp. 12–13) → volume as base × height, triple product (pp. 14–15). The page follows this order exactly.
- Left out (minor): expansion along other rows/columns (p. 10, see #5); the student Q&A on pp. 6–7 (repeats content already on the page); the French corkscrew version of the right-hand rule (p. 11).
- Added: worked example, the sign convention detail (#3), a link to 8.01 torque, the cosmology callout. Nothing else beyond the lecture.

## Licensing
- No paragraph copied from the transcript or notes; wording is rewritten throughout. Short standard phrases only ("expansion along the first row", "right-hand rule", "parallelepiped").
- No "All rights reserved" or "Courtesy of" material in either source; no figures reused. No OpenStax or LibreTexts material.

## Notes
- Cosmology callout and leadsTo: 8.286 `expanding-sphere` is Lecture 6 and derives ρ = ρᵢ/a³ from "the mass is fixed and the volume grows as a³", so both the link and the `leadsTo` entry (8.286, lecture 6) are correct and fairly attributed. The callout's "galaxies inside stay inside" assumes no peculiar motions across the box, which is the homogeneous-expansion idealisation 8.286 uses; fine.
- leadsTo 18.02 Lecture 3: the syllabus title is "Matrices", and the transcript p. 15 says the next lecture continues "into matrices, equations of planes". Correct.
- The internal link `/courses/8-01/torque-and-cross-product` points to an existing page (8.01 Lesson 30).
- Verdict pass-with-notes: no errors; one physics wording warning (#1) worth fixing.

## Resolution (2026-11-16, by the page author)

- **Warning 1:** the pendulum sentence now says, as the lecture does, that the normal component is responsible for the tension, with a bracket noting that the tension also supplies the force that keeps the mass on its circle.
- Info 2: the ĵ coefficient in the î × ĵ check now carries the minus sign of the expansion.
- Info 4: the triple-product section now says it can be negative and is plus or minus the volume.
- Info 3 and 5 are left as they are.
