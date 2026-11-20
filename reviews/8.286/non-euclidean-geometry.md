---
page: content/year-4/8.286/non-euclidean-geometry.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-10-introduction-to-non-euclidean-spaces/ (read via a local copy of the Lecture 10 transcript, t10.txt, and slides, l10.pdf/l10.txt. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/a5797d0353558704dd159fea99440aae_YfbXB_MSkSY.pdf (same transcript, local t10.txt. Video ID YfbXB_MSkSY matches the filename. pp. 11-30 read in full. The URL was not fetched, so I could not confirm that the link resolves.)
  - Lecture 10 slides (local l10.pdf). Slides 9-24 were rendered and inspected, including the licence notices on PDF pages 4-7.
  - A third-party notes file (notes-L10.md), including its slide-by-slide licence table. Every point used here was checked against t10.txt or the rendered slides.
verdict: needs-changes
---

# Review: Non-Euclidean geometry

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Curved geometries", parenthesis after the GBL paragraph | Guth gives no date for the GBL work in the transcript (pp. 15-17). He calls Bolyai "I think, a Prussian military man" (p. 16). The only date is "~1750-1850" on slide 19, which is one of Mustafa Amin's slides, and it is a range, not "the later 1700s". | "In the lecture Guth places it in the later 1700s and calls Bolyai Prussian" | Remove "places it in the later 1700s". Keep the Bolyai correction. The page should not draw on the Amin slide 19 dating in any case. |
| 2 | warning | Saccheri paragraph | Guth (p. 15) and slide 17: Saccheri looked for a contradiction, found none, "considered all of this a failure", and published anyway. | "He never found one, but published anyway, convinced he had." | Historically the page is the more accurate version: Saccheri did claim, wrongly, to refute the acute-angle hypothesis. However, it contradicts the lecture without saying so. Add a short note, for example: "Guth describes him as seeing it as a failure; in fact Saccheri claimed, wrongly, to have found a contradiction." |
| 3 | warning | Quiz 1 explanation, "Curved geometries" sphere paragraph | p. 17: the sphere violates Euclid's second postulate as well as the fifth, because a great circle closes on itself. | "Non-Euclidean geometries keep Euclid's first four postulates and replace the fifth." The sphere is presented as a second non-Euclidean geometry without this caveat. | Restrict the explanation to GBL (hyperbolic) geometry, or add that spherical geometry also breaks an earlier postulate. Strictly, it breaks uniqueness in postulate 1 for antipodal points and, as Guth says, unbounded extension in postulate 2. |
| 4 | warning | "Gauss's metric", locally Euclidean sentence | pp. 22-23: every tiny patch "looks flat and can be covered by Euclidean coordinates". Slide 24 adds g_xx g_yy − g_xy² > 0, which Guth reads as positive definiteness (pp. 24-25). | "you can always choose local coordinates x′, y′ in which ds² = dx′² + dy′² near that point" | This holds exactly only at the point, and approximately (to second order) nearby. It also needs the form to be positive definite. Say "at that point, and approximately in a small region around it", and mention positive definiteness in words, without copying slide 24. |
| 5 | warning | Cosmology callout | Not in L10. In the course, the spatial sections of a homogeneous isotropic universe are the 3-sphere, flat 3-space and 3-D hyperbolic space (L11 onward). | "The three geometries on this page are exactly the three possible geometries of a homogeneous, isotropic universe" | The page shows 2-D surfaces. Say "the two-dimensional analogues of the three possible geometries (3-sphere, flat, hyperbolic)…". The sign mapping (sphere ↔ k > 0 closed, GBL ↔ k < 0 open) is correct in Guth's convention. |
| 6 | info | Klein paragraph, dating note | p. 19: Klein's paper was "1870". | It is "usually dated 1871", and Beltrami gave a model in 1868. | Correct as written. Klein, "Über die sogenannte Nicht-Euklidische Geometrie", Math. Annalen 4 (1871). Beltrami, "Saggio di interpretazione della geometria non-euclidea" (1868). Optionally add "(hence 'Beltrami–Klein model')". |
| 7 | info | Klein formula | p. 19 (spoken). Slide 20 writes the same formula as d = a cosh⁻¹[…]. | The cosh form, cited "p. 19" | The formula matches the transcript and is the standard Beltrami–Klein distance (curvature −1/a²). The citation is correct. |
| 8 | info | Metric formula | The board formula on p. 23, with the factor-2 explanation running onto p. 24. | Cited "p. 23", with the factor-2 explanation | Correct. You could cite "pp. 23-24". |
| 9 | info | Circumference plot | Not in L10 (circles on a sphere appear in L11). | Original plot | The physics is correct: the circumference at geodesic radius r is 2πR sin(r/R) on a sphere, 2πr on a plane and 2πR sinh(r/R) on a hyperbolic plane of curvature −1/R². On the y-range [0, 20], the sinh curve is clipped near r ≈ 1.9R, which is fine. Consider labelling it as an addition beyond L10. |

## Arithmetic and answer checks
- Quiz 1: "The fifth" is correct. The explanation is not quite right for the sphere (see #3).
- Quiz 2: "more than 180°" is correct. The pole-plus-equator triangle matches p. 18.
- Quiz 3: "Infinitely many" is correct (p. 17).
- Quiz 4: "Only the distance between infinitesimally close points, as a quadratic form" is correct (pp. 22-23).
- Flashcards: all correct. The "exactly one parallel" card is Playfair's form, which is equivalent statement (b) in the lecture.
- Klein boundary: from the origin, cosh(d/a) = 1/√(1−r²), so d = a artanh r → ∞ as r → 1. This supports "the disk is infinite".
- Equivalent statement "one triangle with 180° makes every triangle 180°": this is correct (Saccheri–Legendre).
- History checked from my own knowledge, not from MIT: Saccheri published in 1733 and died that year. His name is Giovanni Girolamo (Guth and slide 17 write "Geralamo"), and the page's "Girolamo" is right. Lobachevsky published in 1829-30 and Bolyai in 1832, and Gauss did not publish, so "1820s and 1830s" is fair. János Bolyai was Hungarian and served as an officer in the Austrian army.

## Coverage and order
- The page follows the L10 order from p. 11 on: scope of GR, Euclid, the equivalent statements, Saccheri, GBL, the sphere, Klein, inner and outer properties, the metric, local flatness, and why Newton's law fails. The first part of L10 (matter-dominated ages, pp. 1-11) belongs to the open-universe page, which is fine.
- Left out: equivalent statement (a) (a line meeting one of two parallels meets the other); Gauss's biography and students (p. 16); the SR background (1916, Michelson–Morley, p. 25); the remark that action-at-a-distance theories consistent with SR are possible, with Feynman's retarded-time form (pp. 27-29); the student Q&As. None of these is essential. The page's line "Electromagnetism had already shown the way out" leaves out Guth's point that action at a distance is not strictly impossible. This is optional to add.
- Added: the circumference plot and the cosmology callout (see #5 and #9).
- The page correctly avoids Guth's slips: "beginning of coordinate geometry" (p. 20), "dy squared" for dy′² (p. 23) and "hypergeometric".
- The GR-scope paragraph matches p. 11: describe curved spaces and motion in them, without deriving the field equations, and state the FRW result without deriving it. The Newton and field-theory paragraph matches pp. 26 and 29.

## Licensing
- Amin slides 10-12 and 19-24 ("Slides courtesy of Mustafa Amin. Used with permission."): I compared the page with the rendered slides. No figures are reproduced or imitated: no mesh surfaces, no portrait collage, no crossed-out "5th Postulate", no tangent-plane picture. The page does not use slide-only phrases such as "constant negative curvature", "no global embedding…" or "Geometry (after Klein)". The formulas (Klein distance, ds², dx′² + dy′²) are mathematics, and Guth also states them aloud (pp. 19, 22-23). Restating them is fine. The one exception is the dating in #1, which looks derived from slide 19 and is misattributed to Guth.
- The courtesy frontmatter line is adequate: it names Mustafa Amin, says MIT showed the slides with his permission, and states that they are not reproduced. Optionally quote MIT's exact credit form, "Slides courtesy of Mustafa Amin. Used with permission.", for traceability.
- Slide 17 (Saccheri, "© Source unknown. All rights reserved"): nothing is reproduced. The page has no title-page image, and its wording ("tried to prove the postulate by assuming it false…") differs from the slide bullets. Only facts are restated.
- Slides 13-16 (equivalent statements, quoted on the slides and probably after Weinberg ch. 1): the page paraphrases them. For example, "Through a point not on a line there is exactly one parallel to it" versus the slide's "one and only one line that passes through any given point…". Likewise, "you can scale any figure up or down without changing its shape" versus "Given any figure there exists a figure, similar to it, of any size". There is no quotation marks or figure copy. This is acceptable.
- I found no verbatim transcript sentences, and no OpenStax or LibreTexts material.

## Notes
- The `references: {}` field is empty while the Formulas cite `reading1`. This is consistent with the other pages, assuming `reading1` maps to `source.readings[0]`.
- The "next lecture" link `/courses/8-286/sphere-metrics` exists (L11, `sphere-metrics.mdx`), and `leadsTo` (L11, metric of a sphere and of a 3-D closed universe) is accurate.
- The "Riemannian / pseudo-Riemannian" wording matches pp. 22-23 ("time enters with the opposite sign" is a fair gloss of Guth's "Lorentz metric").

## Resolution (2026-11-14, by the page author)
- Error fixed: the "later 1700s" dating is Guth's wording from the Lecture 11 review (t11, p. 2), not Lecture 10; the page now says so. "Prussian" attributed to Lecture 10 (t10).
- Saccheri: page now gives Guth's "failure" description and the historical view.
- Sphere also breaks postulate 2 — noted in the text and in quiz 1's explanation.
- Locally Euclidean: now "at a chosen point, approximately nearby", with positivity.
- Cosmology callout: "two-dimensional versions" of the three 3-D geometries.
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
