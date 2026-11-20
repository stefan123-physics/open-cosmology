---
page: content/year-1/8.02/fields-gravitational-and-electric.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/presentati_w01d1-1/ (read: local copy p1.pdf / p1.txt, Session 1 slides "P01 - 1" to "P01 - 54"; slide number = PDF page; this is both `source.url` and `reading2`)
  - https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/chapter1fields/ (read: local copy ch1.pdf / ch1.txt, Course Notes Chapter 1 "Fields", 25 printed pages; printed page = PDF page − 1, checked with pdftotext -f 13 -l 13 (printed p. 12: Eqs. 1.5.1–1.5.3) and -f 14 -l 14 (printed p. 13: parabola remark, Eqs. 1.6.1–1.6.2))
  - content/year-4/8.286/_course.json and content/year-4/8.286/expanding-sphere.mdx (read, for the leadsTo check)
  - calcs/8.02/fields-gravitational-and-electric.yaml (read; `npm run calc:test -- -k fields-gravitational`: 13 passed)
verdict: pass-with-notes
---

# Review: Fields: scalar, vector, gravitational and electric

Citation convention checked: `reading1` = Course Notes Chapter 1 (printed page numbers), `reading2` = Session 1 slides (P01 numbers).

Course notes page map (printed pages): p. 1 = 1.1 (Maxwell quote, Treatise 1873, Faraday, action at a distance, contact-force objection, transmission element by element); p. 2 = 1.1 ends (finite speed, "action by continuous contact", first field theory), 1.2 starts (Mars night-time temperature map); p. 3 = altitude profile, spherical coordinates, T(r, θ, φ); p. 4 = Example 1.1 (Eq. 1.2.1), pressure/wind remark, 1.2.1 and Eq. 1.2.2, contour maps start; p. 5 = Eq. 1.2.3, contour figure, colour-coding; p. 6 = relief map, 1.3 vector fields, snowflakes; p. 7 = velocity vector field, 1.4, Eq. (1.4.1), sources and sinks (Fig. 1.4.1); p. 8 = textures, source next to sink; p. 9 = Eqs. 1.4.2–1.4.4 (divergence, incompressible), circulations; p. 10 = two circulations, curl vs divergence, Helmholtz-type remark, electrostatic curl-free / magnetic divergence-free; p. 11 = Fig. 1.4.8, 1.4.1 (fluid analogy and its limits), 1.5 starts; p. 12 = Eqs. 1.5.1–1.5.3, G value; p. 13 = parabola remark, 1.6, Eqs. 1.6.1–1.6.2, N/C, created/exerts; p. 14 = 1.7 magnetic field; p. 15 = Earth's field, 1.8, Eq. 1.8.1, 1.8.1; p. 16 = vector field representation, 1.8.2 field lines; p. 17 = field line rules (1), (2), 1.8.3 grass seeds; p. 18 = "most information", iron filings, "what is between the field lines", 1.8.4, 1.9 summary.

Slide map (relevant): 2 outline; 3–7 why physics; 8–11 TEAL; 12–18 administration; 19–22 maths from 18.02; 23–25 four forces, fields, Maxwell's equations and Lorentz force; 27 scalar field (temperature); 28 contours/colours; 29 T = T(x, y, z), work in 2D; 30 vector field, wind; 31–34 fluid flow (sources, sinks, circulating); 35 three methods; 36 field lines (tangent, never cross); 37 PRS; 38 grass seeds ("we don't know absolute direction, we can determine relative direction"); 39–40 PRS, weird-field contest; 42–43 gravitational force and field, created by M / felt by m; 44 in-class problem; 46 charge (two types, coulomb, e = 1.602 × 10⁻¹⁹ C, quantized Q = ±Ne, conserved); 47 like charges repel; 48 Coulomb's law, k_e = 1/(4πε₀) = 8.9875 × 10⁹, r̂ from q₁ to q₂; 49 Coulomb example (3 C charges, equilateral triangle a = 1 m); 50 superposition of forces; 51 E = F/q₀, E = k_e q r̂/r²; 52 E_total = Σ E_i; 53 summary "create / feel"; 54 PRS.

The six formulas:
- "A vector field" (`reading1`, Eq. (1.4.1), p. 7): matches notes p. 7 exactly. Correct.
- "Newton's law of gravitation" (`reading1`, Eq. (1.5.1), p. 12): matches, including r̂ from M towards m. Correct.
- "Gravitational field" (`reading1`, Eq. (1.5.2), p. 12): the notes write g = lim_{m→0} F_g/m; the page's form g = F_g/m = −GM r̂/r² is the one on slide 42. Physics correct (see #3).
- "Coulomb's law" (`reading2`, slide 48): matches slide 48 (F₁₂ = k_e q₁q₂ r̂/r², k_e = 1/(4πε₀) = 8.9875 × 10⁹, rounded to 8.99 × 10⁹; r̂ from q₁ to q₂). Correct. (The notes, Eq. 1.6.1, give k_e = 9.0 × 10⁹.)
- "Electric field of a point charge" (`reading1`, Eq. (1.6.2), p. 13): the notes use Q for the source charge, q for the test charge and lim_{q→0}; the page's notation (source q, test charge q₀, no limit) is slide 51's. Physics correct (see #4).
- "Superposition" (`reading2`, slide 52): matches slide 52. Correct.

Every in-text page/slide citation was checked against the maps above; all are correct except the two items #1 and #2 in the table (both minor). No em dash on the page (grep: 0). Internal links `/courses/18-02/vector-fields-and-line-integrals`, `/courses/18-02/divergence-theorem`, `/courses/18-02/line-integrals-in-space` and `/courses/8-01/universal-gravitation` point to existing pages; both prerequisites exist.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Introduction: "Of the four fundamental forces, gravity … and electromagnetism act over long distances … (slides 24–25)" | Slide 24: "Long range: Gravity", "Short Range: Strong and Weak", "Mid Range: Electromagnetic (8.02)". | Both gravity and EM long-range, cited to slides 24–25 | The page's physics is right (the Coulomb force has infinite range, like gravity), but it differs from the cited slide without saying so. Add a bracket, e.g. "(the slide files electromagnetism as 'mid range', meaning the scales of everyday life; its force law reaches as far as gravity's)", or drop the claim from the slide citation. |
| 2 | info | "Scalar fields": "a temperature $T(x, y, z)$ (course notes, Section 1.2, p. 3; slide 27)" | Notes p. 3 write T(r, θ, φ) in spherical coordinates; T(x, y, z) is on slide 29 (and in the notes' summary, p. 18). Slide 27 has no formula. | T(x, y, z) cited to p. 3 and slide 27 | Cite "slide 29" for T(x, y, z), or say the notes use spherical coordinates T(r, θ, φ). |
| 3 | info | Formula "Gravitational field" | Notes Eq. (1.5.2): g = lim_{m→0} F_g/m. Slide 42: g = F_g/m. | g = F_g/m, cited to Eq. (1.5.2) | Either add "slide 42" to the citation or write the limit; the text already says "small test mass", so this is cosmetic. |
| 4 | info | Formula "Electric field of a point charge" | Notes Eq. (1.6.2): E = lim_{q→0} F_e/q = k_e Q r̂/r² (Q source, q test charge), k_e = 9.0 × 10⁹. Slide 51: E = F/q₀, E = k_e q r̂/r². | Slide 51's notation, cited to Eq. (1.6.2) | Add "slide 51" to the `at`, or mention that the notes call the source charge Q. |
| 5 | warning | "Drawing vector fields", item 3 (grass seeds) | Slide 38: grass seeds do not show the absolute direction of the field, only the relative direction (the streaks have no arrowheads). | "a texture of short streaks along the field … the densest picture of the field's shape" | Add one sentence: grass seeds show the line of the field but not which way along it it points; MIT's slide 38 stresses this, and it is the point of the PRS questions on slide 39. |
| 6 | info | "Electric charge and Coulomb's law", second bullet, cited "(slides 46–47; course notes, Section 1.6, p. 13)" | e = 1.602 × 10⁻¹⁹ C, quantization (Q = ±Ne) and conservation are only on slide 46; the notes p. 13 give only the two kinds of charge. | Mixed citation | Fine as it stands (slide cited first); optionally attach "slide 46" to this bullet alone. |
| 7 | info | "Action at a distance and fields", first sentence | Notes p. 1: action at a distance is the "older" view that "preceded field theory", with gravitational attraction and electric repulsion as examples; Newton and Coulomb are not named. | "Newton's gravity and Coulomb's electric force were first understood as action at a distance" | A fair reading of the notes. Optional: "Gravitational attraction and electric repulsion were first understood as …". |
| 8 | info | "Vector fields and fluid flow", plan paragraph | Notes p. 10 also say that any vector field is the sum of a curl-free and a divergence-free part, and that magnetic fields stay divergence-free even when they change in time. | Only the static statement and "only fields that change in time give electric fields with both" | Optional half sentence on each; the second anticipates ∇ · B = 0 throughout the course. |
| 9 | info | `leadsTo` 8.286 Lecture 6, `why` | Lecture 6 (page `expanding-sphere`) applies Newton's gravitational field of the mass inside a sphere to an expanding uniform ball. | "Gravity, not electricity, rules the expansion of the universe, because matter on large scales is electrically neutral." | Correct and sensible. Optionally name the direct link too: "Lecture 6 uses exactly this field, g = −GM r̂/r², for the mass inside an expanding sphere." |

## Arithmetic and answer checks
- Worked example (a): 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ = 3.982 × 10¹⁴; (6.37 × 10⁶)² = 4.058 × 10¹³; ratio 9.813 ≈ 9.81 m/s². Correct.
- Worked example (b): E₁ = 8.99 × 10⁹ × 2 × 10⁻⁶ / 0.16 = 1.1238 × 10⁵ N/C, straight up (q₁ positive, P directly above it). Correct. Distance to q₂: √(0.09 + 0.16) = 0.5 m. Correct. |E₂| = 8.99 × 10⁹ × 10⁻⁶ / 0.25 = 3.596 × 10⁴ ≈ 3.60 × 10⁴ N/C; q₂ negative, so E₂ points from P towards q₂: (0.3, −0.4)/0.5 = ⟨0.6, −0.8⟩. Correct. Components ⟨2.158, −2.877⟩ × 10⁴. Sum ⟨2.16 × 10⁴, 11.238 × 10⁴ − 2.877 × 10⁴ = 8.36 × 10⁴⟩ N/C. Correct. Size √(2.158² + 8.361²) × 10⁴ = √74.56 × 10⁴ = 8.63 × 10⁴ ≈ 8.6 × 10⁴ N/C. Correct.
- The example is original: MIT's Coulomb example (slide 49) uses 3 C and 6 C charges on an equilateral triangle of side 1 m, and asks for a force; the in-class problem (slide 44) is gravitational. No copying.
- Callout: k_e e²/(G m_p m_e) = 8.99 × 10⁹ × (1.602 × 10⁻¹⁹)² / (6.67 × 10⁻¹¹ × 1.673 × 10⁻²⁷ × 9.109 × 10⁻³¹) = 2.307 × 10⁻²⁸ / 1.016 × 10⁻⁶⁷ = 2.27 × 10³⁹ ≈ 2.3 × 10³⁹. Correct (the standard figure, independent of distance).
- k_e = 1/(4π × 8.854 × 10⁻¹²) = 8.988 × 10⁹ ≈ 8.99 × 10⁹. Correct.
- `npm run calc:test -- -k fields-gravitational`: 13 passed. The calcs file's `source` entries for the worked-example numbers point to the slides that state the formulas used, with `origin: page-own`: appropriate.
- Quiz 1: answer 2 (wind velocity): correct; the other three are scalar fields.
- Quiz 2: answer 1 (two directions at the crossing point): correct, MIT's own reason (notes p. 17, rule (2)). However the distractor "they can, at a charge" is not cleanly wrong: field lines do meet at a point charge (and at a zero of the field), where the field direction is undefined. A careful reader may hesitate. Suggest replacing it with an unambiguous distractor, e.g. "because the field is zero between them" (warning-level quiz clarity issue).
- Quiz 3: answer 1 (a quarter): correct, 1/2² = 1/4.
- Flashcards: all three correct (scalar vs vector field; g = −GM r̂/r² towards M, F = m g; E = k_e q r̂/r², away from positive / towards negative, F = q₀E, superposition).

## Coverage and order
- Order follows the slides: outline → why physics / TEAL / 18.02 maths / four forces and fields (slides 2–25) → scalar fields (27–29) → vector fields and fluid flow (30–34) → three representations (35–38) → gravitational field (41–43) → charge and Coulomb's law (45–48) → superposition of forces (50) → electric field (51) → superposition of fields (52) → create/feel summary (53). The notes' Section 1.8 (representations) comes after 1.6 in the chapter; the page rightly follows the session's order instead.
- Omitted (minor, mostly session business or examples): slides 3–7 (why physics, Einstein 1905) and 12–18 (administration); the PRS questions (12, 21, 37, 39, 54); the weird-field contest (40); the in-class gravitational problem (44); the Coulomb example (49); notes Example 1.1 (half-frozen planet, Eq. 1.2.1) and the analytic scalar and vector fields Eqs. (1.2.2), (1.8.1); the divergence formulas Eqs. (1.4.2)–(1.4.4), described in words instead; the notes' remark that the positive charge is a "source" and the negative a "sink" of E (p. 16), which would tie "Vector fields and fluid flow" to "The electric field" nicely; slide 25's preview of Maxwell's equations and the Lorentz force; Section 1.8.4 (animated field lines move along E × B, the direction of energy flow), which is within the requested Section 1.8 (info: one sentence would complete it, or say it is deferred to the Poynting-vector lesson). Section 1.7 (magnetic field) is outside this session and is rightly left out.
- Added by the page (not in MIT, not attributed to MIT): the worked example and the cosmology callout. Both correct.

## Licensing
- `grep -i "rights reserved\|courtesy\|©"` on ch1.txt and p1.txt: no match. Both documents fall under the course's CC BY-NC-SA licence.
- No figure is reused: the page has no images (the Mars temperature map, atmospheric profile, fluid-flow animations, grass-seed textures and slide photos are all described in words only, not reproduced).
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short standard phrases. Closest wording: "More field lines that were not drawn" (notes p. 18: "more field lines that we have chosen not to draw") and "the easiest vector fields to picture" (notes p. 7: "easiest vector fields to visualize"); both are short and acceptable.

## Notes
- `source.url` and `reading2` are the same URL (the session's slides page). This matches the course `syllabus` entry for Session 1 and is acceptable; there is no separate OCW lecture page for this course.
- The `location: "Sections 1.1–1.6, 1.8"` on `reading1` matches the session's scope, though the page itself skips 1.8.4 (see Coverage).
- The cosmology callout is fair: it does not attribute the neutrality argument to MIT, and the statement (charges cancel on large scales, masses only add) is standard.
- No errors found; verdict pass-with-notes. The two warnings (#1 the "long range" claim against slide 24, #5 grass seeds and direction) and the quiz 2 distractor are the items most worth fixing.

## Resolution (2026-11-16, by the page author)

- Warning 1: the introduction now gives the slides' "mid range" for electromagnetism, with a bracket explaining why the page's physics differs.
- Warning 2: added that grass seeds show the line of the field but not its direction (slide 38).
- Warning 3: quiz 2's distractor "they can, at a charge" replaced by "they can, where the field is strongest".
- Info: the gravitational-field and point-charge formulas now also cite slides 42 and 51; T(x, y, z) cites slides 27, 29; added the notes' p. 10 remarks (magnetic fields stay divergence-free; curl-free plus divergence-free decomposition); the leadsTo reason now names the expanding sphere. Section 1.8.4 and the other minor omissions are left out.
