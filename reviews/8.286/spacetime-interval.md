---
page: content/year-4/8.286/spacetime-interval.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-12-non-euclidean-spaces-open-universes-and-the-spacetime-metric/ (not fetched; lecture content read via the local transcript below)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/21d454d325f85ab73f2e29dc992e0de0_dBhMcn7UDs0.pdf (read via local copy t12.pdf / t12.txt; video ID dBhMcn7UDs0 matches the filename. PDF pages 18-19 and 22-28 read in full, and each cited passage was located page by page with `pdftotext -f N -l N`. The URL itself was not fetched, so I could not confirm that the link resolves.)
  - Third-party study notes notes-L12.md (used only as a guide; every point used here was checked against t12.pdf. The notes' page numbers for section E are one page too low; see Notes.)
  - Lecture 13 materials: not read. The title of Lecture 13 is taken from content/year-4/8.286/_course.json only.
  - Appendix to 8.286 lecture notes 5: not read.
verdict: needs-changes
---

# Review: The spacetime interval

Page numbers below are PDF page numbers of the transcript. Each page's footer number closes that page, which is the convention used in the other 8.286 reviews (e.g. sphere-metrics.md).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Formula "The spacetime interval", `at="p. 22"` | The interval s_ab² is written on PDF p. 23 ("minus c squared times ta minus tb squared", p. 23 line 12). p. 22 only has the appendix remark and the definition of an event. | p. 22 | `at="p. 23"` (or "pp. 22–23" if the event definition is included). |
| 2 | error | Formula "Proper time", `at="p. 24"` | s_ab² = −c²τ_ab² is on PDF p. 25 (with the strobe example). The name "proper time" and the wristwatch are on p. 26. p. 24 has the spacelike case and the "there exists" theorem. | p. 24 | `at="p. 25"` (or "pp. 25–26" to include the name "proper time"). |
| 3 | error | Formula "The interval between nearby events", `at="p. 26"` | ds² = dx² + dy² + dz² − c²dt² is on PDF p. 27 (line 31). p. 26 has proper time/proper distance and the start of the lightlike case. | p. 26 | `at="p. 27"`. |
| 4 | warning | "Events and the interval": "disagree about every one of the four differences" | Guth says the two observers will "in general" find different values for each of the four. | Drops "in general". As written it is false: under a boost along x, Δy and Δz do not change. | "...will in general disagree about each of the four differences." |
| 5 | info | Intro: "(8.286's lecture notes derive it in an appendix)" | More specific: an appendix to lecture notes 5, which is optional reading (p. 22). | "an appendix" | Optionally name "lecture notes 5". |
| 6 | info | "The infinitesimal interval": signature paragraph | Guth discusses the signature (3 positive, 1 negative eigenvalues; some people reverse the sign convention) earlier, on pp. 18–19, while discussing positive-definite spatial metrics. He does not repeat it with ds² on p. 27. | Puts the signature after ds². | Fine as a teaching choice. Optionally note "(discussed earlier in the lecture, p. 18)". Content is correct. |
| 7 | info | "This is the spacetime version of Gauss's metric" | Guth only says a metric gives infinitesimal distances and that ds² is the infinitesimal form of the interval (p. 27). He does not mention Gauss here. | Gauss's metric | Acceptable link to the non-euclidean-geometry page; not an MIT claim. |
| 8 | info | "It is to spacetime what distance is to ordinary space" | Not said by Guth. | Analogy | Fine as the page's own analogy. |
| 9 | info | Plot curve label "all frames' view of the event: x² − (ct)² = 16" | No plot in MIT (the lecture is board only). | Plots event b's coordinates (x', ct') in all boosted frames on one set of axes. | Correct (at η = 0 the curve gives (4, 0), the β = 0.6 frame). A clearer label would be "event b's coordinates in every frame: x² − (ct)² = 16". |
| 10 | info | Quiz 3 explanation: "shrinks the separation by √((1−β)/(1+β)), which can approach 0 or grow without bound" | p. 27: arbitrarily close or arbitrarily far depending on the frame. | "shrinks ... or grow" | Strictly the factor shrinks for β > 0 and grows for β < 0. Suggest "rescales the separation by ...". |

## Arithmetic and answer checks
- Interval definition (p. 23): the page's formula matches the transcript term for term, including the sign and the ≡. The notation s_ab, τ_ab matches Guth's.
- Lorentz invariance: Guth assumes it and does not prove it (p. 22: "we are going to assume but not prove"). The page says the same. Correct.
- Three cases: spacelike (s² > 0, a frame exists where the events are simultaneous, s = proper distance; pp. 23–24, 26), timelike (s² < 0, a frame exists where they are at the same place, s² = −c²τ², strobe and wristwatch; pp. 24–26), lightlike (s² = 0, light goes one way only; p. 26). All match. Guth's spelling "spacelike" without a hyphen is followed.
- Lightlike, no invariant distance (p. 27): matches. Recomputed: take Δx = cΔt = L. Then Δx' = γ(L − βL) = γ(1−β)L = √((1−β)/(1+β)) L, and cΔt' is the same. This goes to 0 as β → 1 and to ∞ as β → −1. Correct.
- Callout "A common confusion": matches the student question on p. 27 (lightlike describes events, not objects moving at c). Correct.
- ds² (p. 27): matches the transcript. Signature (+,+,+,−) and "some books use the opposite overall sign" match pp. 18–19.
- Plot: the hyperbola x = 4 cosh η, ct = 4 sinh η passes through (5, 3) at cosh η = 5/4, sinh η = 3/4, i.e. η = ln 2 ≈ 0.693, which is inside the plotted range [−0.6, 1.2]. Correct. At η = 1.2 the curve reaches x ≈ 7.24, just outside the domain [−1, 7], so it is clipped at the edge (harmless). The light line ct = x is correct.
- Simultaneity line: for an observer moving at β along x, t' = γ(t − βx/c) = 0 gives ct = βx. Correct. At β = 0.6, ct = 0.6 × 5 = 3, so the line passes through b = (5, 3). Correct. The caption's claim (simultaneous, 4 light-seconds apart in that frame) is correct.
- Worked example: s² = 25 − 9 = 16 > 0, so spacelike with s = 4 light-seconds. Correct. ct' = γ(ct − βx) = 0 gives 3 − 5β = 0, so β = 0.6. Correct. γ = 1/√(1 − 0.36) = 1/0.8 = 1.25. Correct. x' = 1.25 × (5 − 0.6 × 3) = 1.25 × 3.2 = 4. Correct, and it equals the proper distance.
- Timelike twin: x = 3, ct = 5 gives s² = 9 − 25 = −16, so cτ = 4 light-seconds and τ = 4 s. Correct. Same place in the boosted frame: x' = γ(x − βct) = 0 gives β = 3/5. Correct. (Check: ct' = 1.25 × (5 − 0.6 × 3) = 4. Correct.)
- Quiz 1 (answer 1, Spacelike): correct; s² = 16 > 0.
- Quiz 2 (answer 1, proper time on a clock carried at constant velocity): correct (pp. 25–26).
- Quiz 3 (answer 0): correct (p. 27); see #10 for a wording point.
- Quiz 4 (answer 1, three positive and one negative): correct (pp. 18–19).
- Flashcards: all four are correct.

## Coverage and order
- The page covers section E of the lecture (transcript pp. 22–28): adding time, the SR fact assumed, event, interval, Lorentz invariance, the three cases with special frames, proper distance and proper time, lightlike, the student question, ds². It follows Guth's order. The rest of the lecture (review of L11, open universes, homogeneity, size, GBL) is covered by other pages (open-universe-geometry.mdx).
- Left out (minor): Guth's remark that physical laws are the same in all Lorentz frames, so physics must be built from quantities that change simply between frames (pp. 23–24); his remark that lightlike pairs make rigorous theorems in relativity awkward (p. 27); the note that two separate events cannot have both separations zero (p. 23).
- Added (not in MIT): the plot, the worked example, the analogy with distance, the link to Gauss's metric, and the sentence that combining ds² with the RW metric gives the expanding-universe spacetime metric (Guth only says "how to extend this into general relativity" next time, p. 27).
- leadsTo Lecture 13: the title in _course.json is "Non-Euclidean Spaces: Spacetime Metric and Geodesic Equation", so "The spacetime metric of the expanding universe and the geodesic equation" fits the title and Guth's p. 27 announcement. I did not read the Lecture 13 materials, so the details are unverified.

## Licensing
- No slides are used. All of section E was on the board or spoken (the L12 slides only review L11), so there are no "Courtesy of" or "All rights reserved" items to keep or avoid.
- No verbatim copying found. The finger snap, strobe and wristwatch appear as Guth's examples, but rewritten in the page's own words. The worked example (5, 3) / (3, 5) is original, not from MIT.
- License field CC BY-NC-SA 4.0. No OpenStax or LibreTexts material.

## Notes
- The three citation errors (#1–#3) all come from one off-by-one in page numbering, which matches the off-by-one in notes-L12.md section E (the notes give p. 22 for the interval, p. 24 for proper time, p. 26 for ds²). Under the convention the notes themselves state (footer N closes page N), and as `pdftotext -f N -l N t12.pdf` confirms, the correct pages are 23, 25 and 27. The notes' signature reference "pp. 17–18" should also be pp. 18–19. Other pages citing notes-L12 page numbers for pp. 21–27 may be off in the same way; I did not check them.
- No `Callout kind="cosmology"` on this page. The closing link to RW is a forward pointer to L13 and is reasonable.
- Prerequisites `doppler-effect` and `open-universe-geometry` both exist in content/year-4/8.286/.

## Resolution (2026-11-14, by the page author)
- Errors 1–3 fixed: formula citations corrected to transcript pp. 23, 25 and 27.
- "Disagree about every one of the four differences" → "in general disagree", with the boost example.
- Appendix now named (Lecture Notes 5).
- Status set to `reviewed`.
