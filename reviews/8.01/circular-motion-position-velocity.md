---
page: content/year-1/8.01/circular-motion-position-velocity.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/8-1-polar-coordinates/ (read; segment page, plus the Week 3 page for the lesson's segment list, which is "Lesson 8 … [8.1-8.3]")
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/8-2-circular-motion-position-and-velocity-vectors/ (read; segment page, reference seg82)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-3-circular-motion/8-3-angular-velocity/ (read the segment page only, to see what Lesson 8 contains; its transcript was not read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter6/ (read; Chapter 6 PDF, "Spring 2022" version, printed pp. 1–5 checked page by page with pdftotext; printed page = PDF page − 1)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/247f27d5277aa59ec38dc6ebdfa67f24_uo86ir31pn0.pdf (read; 8.1 transcript, 2 pp.)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/85d9753f9c7ac78171dadfebffa0af8f_S9_Oe51XkVY.pdf (read; 8.2 transcript, 3 pp.)
  - https://doi.org/10.1051/0004-6361/201935656 (could not read: A&A returned 403; read the arXiv abstract, arXiv:1904.05721, instead)
verdict: pass
---

# Review: Circular motion — polar coordinates, position and velocity

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Whole page / `source.title` "(8.1–8.2)"; `leadsTo` Lesson 9 "… frequency and angular velocity" | OCW lists Lesson 8 as segments **8.1–8.3**; 8.3 is "Angular Velocity". The notes' Section 6.2 (inside the page's stated range 6.1–6.2.1) also defines the angular speed $\omega \equiv \lvert d\theta/dt\rvert$, Eq. (6.2.10), p. 3, and Eq. (6.2.15) ends "$= r\omega$". | Angular velocity is not mentioned. The page says Lesson 9 brings "angular velocity", but MIT puts it in Lesson 8 (segment 8.3). No second Lesson 8 page exists, and nothing on the page says 8.3 is covered elsewhere. | Add a Lesson 8 page (order 2) for segment 8.3, or add a section on $\omega = \lvert d\theta/dt\rvert$ (Eq. 6.2.10) and $v = r\omega$ to this page. Then fix the Lesson 9 `leadsTo` wording (it could say "uniform circular motion: period and frequency"). |
| 2 | warning | Cosmology callout, "(… a 2019 measurement by the GRAVITY collaboration, a later result, gives about 27,000.)" | The notes (p. 1) say the Sun orbits "50,000 light years from a massive black hole at the center of the galaxy". The notes PDF is the **Spring 2022** version (footer of the PDF), so it is newer than the 2019 measurement. Also, Sun–Galactic-centre distances of about 8 kpc (≈ 26,000 ly) had been accepted for decades before 2019. | Calls GRAVITY 2019 "a later result". That suggests 50,000 ly was the accepted value when the notes were written, and that only a newer measurement changed it. | Reword without "later", e.g. "(The notes give 50,000 light years. That is closer to the radius of the Galactic disc. The measured distance is about 8.2 kpc ≈ 26,700 light years [GRAVITY 2019].)" The correction itself is right (see Notes). In the calcs file, `origin: later-data` can stay or become a measured/fact value. Your choice. |
| 3 | info | Formula "Position on a circle", `cite="reading1"`, `at="Eqs. (6.2.1)–(6.2.2), p. 2; transcript 8.2, p. 2"` | The equation is in the notes (Eqs. 6.2.1–6.2.2, p. 2) and on the board in 8.2 p. 2 ("r cosine theta of t i hat plus r sine theta of t j hat"). Both locations are correct. | `at` names the transcript, but `cite` links only the notes (reading1). The 8.2 transcript is reading3. | Same known pattern as in earlier 8.01 reviews: keep `at` for the notes only, or accept as is. |
| 4 | info | Section "Why circular motion needs a force" | The notes' introduction also names planetary models, Newton's two-body result that orbits can be circles, ellipses, parabolas or hyperbolas, Rutherford scattering, and the tangential acceleration of a speeding-up object. | Covers only the tangential velocity, centripetal acceleration, Newton 1666 and $F_r = m a_r$. | Optional: one sentence on conic-section orbits and on the tangential acceleration. Lesson 10 covers it, so this is not required. |
| 5 | info | Section "The velocity vector": order | The notes derive $d\hat r/dt$ and $d\hat\theta/dt$ first (Eqs. 6.2.4–6.2.7) and then the velocity (6.2.8). The 8.2 transcript differentiates the Cartesian components directly. | Follows the transcript order: velocity first, unit-vector derivatives afterwards. | None needed. This is a sensible choice, and both orders appear in MIT's material. |
| 6 | info | "Newton realised in 1666 …" | Notes p. 2: "In 1666, twenty years before Newton published his Principia, he realized that the moon is always 'falling' …" | Matches the notes. | None. (Historically the 1666 date rests on Newton's own later recollection. That is not a problem for this page.) |

Citation checks (each `<Formula>` against the notes, printed page numbers checked with `pdftotext -f N -l N`):
- $F_r = m a_r$: Eq. (6.1.1), p. 2. **Correct.**
- $\hat r$, $\hat\theta$ in Cartesian form: Eqs. (6.2.2)–(6.2.3), p. 2. **Correct** (same signs; also on the board in 8.2 p. 1).
- Position on a circle: Eqs. (6.2.1)–(6.2.2), p. 2; transcript 8.2 p. 2. **Correct** (see #3).
- Chain rule: Eqs. (6.2.5)–(6.2.6), p. 3. **Correct.**
- Velocity $r\,\dot\theta(-\sin\theta\,\hat i + \cos\theta\,\hat j) = r\dot\theta\,\hat\theta$: `reading3`, transcript 8.2 p. 3. **Correct.** Factoring out $d\theta/dt$ and recognising $\hat\theta$ is on p. 3. The two chain-rule terms are at the bottom of p. 2, which is acceptable.
- $v_\theta = r\,d\theta/dt$, $\vec v = v_\theta\hat\theta$: Eqs. (6.2.8)–(6.2.9), p. 3. **Correct.**
- $d\hat r/dt = \dot\theta\hat\theta$, $d\hat\theta/dt = -\dot\theta\hat r$: Eqs. (6.2.4), (6.2.7), p. 3. **Correct.**
- Chord $\lvert\Delta\vec r\rvert = 2r\sin(\Delta\theta/2)$: Eq. (6.2.11), p. 4. **Correct.**
- Speed $v = r\lvert d\theta/dt\rvert$: Eq. (6.2.15), p. 5. **Correct.** The notes continue "$= r\omega$" (see #1). pdftotext lost the absolute-value bars, but the text ("rate of change of the magnitude of the angle") supports the page's $\lvert\Delta\theta\rvert$.
- The small-angle series in the text matches Eq. (6.2.13), p. 4.

## Arithmetic and answer checks
- Roundabout: $v_\theta = 50 \times 0.40 = 20$ m/s ✓. $\hat\theta(30°) = -0.500\,\hat i + 0.866\,\hat j$ ✓. $\vec v = -10.0\,\hat i + 17.3\,\hat j$ m/s ($20\cos 30° = 17.32$) ✓. $\sqrt{10.0^2 + 17.3^2} = 19.98 \approx 20$ ✓. Dot product $(-10.0)(0.866) + (17.3)(0.500) = -0.01 \approx 0$ ✓.
- Small angle: $10° = 0.17453$ rad ✓. $\sin 5° = 0.087156$ ✓. $2\sin 5° = 0.17431$ ✓. $1 - 0.17431/0.17453 = 0.127\% \approx 0.13\%$ ✓. The statement that the chord is shorter is right.
- Callout: $8178\text{ pc} \times 3.2616\text{ ly/pc} = 26{,}673$ ly, so "about 27,000" is acceptable (26,700 would be more precise). GRAVITY 2019 title, journal (A&A 625, L10) and $R_0 = 8178 \pm 13_{\rm stat} \pm 22_{\rm sys}$ pc are confirmed from the arXiv abstract. The DOI itself returned 403 and was not read.
- Quiz 1: $\hat\theta$ (index 1) ✓.
- Quiz 2: $2.0 \times (-0.5) = -1.0$ m/s (index 1) ✓. "Clockwise" is right with the usual anticlockwise-positive choice.
- Quiz 3: index 1 ✓. The explanation is correct: unit length and perpendicular, but the direction depends on θ.
- Quiz 4: $d\hat r/dt = \dot\theta\,\hat\theta$ (index 1) ✓. The derivation in the explanation is correct.
- Flashcards: all four are correct and match Eqs. 6.2.2–6.2.4, 6.2.7–6.2.9.
- Plot: the $\hat\theta$ curve is $(\cos\theta - s\sin\theta,\ \sin\theta + s\cos\theta)$, which is the correct direction $-\sin\theta\,\hat i + \cos\theta\,\hat j$. The caption matches the formulas.
- `calcs/8.01/circular-motion-position-velocity.yaml` matches the page: every `shown` string is on the page, sources match the `at` values, and `pytest tests/calc -k circular` gives 19 passed. The 27,000 ly entry passes only through the trailing-zero tolerance (±500); its actual value is 26,673.

## Coverage and order
- 8.1 (polar coordinates, reference line, $0 \le \theta < 2\pi$, unit vectors point the way their coordinate increases, $S_1$/$S_2$ unit vectors differ): fully covered, in order. The lecturer's slip "r is always greater than r" (8.1 p. 1) is correctly not repeated ($r \ge 0$).
- 8.2 (decomposing into $\hat i,\hat j$; time dependence; position; chain-rule velocity; $v_\theta$ sign cases positive/zero/negative): fully covered, in order.
- Notes 6.1–6.2.1: covered, except the angular speed definition (6.2.10) and some examples from the introduction (#1, #4).
- **Missing: segment 8.3 "Angular Velocity"**, which belongs to Lesson 8 on OCW (#1).
- Added (not in MIT): two original worked examples and the interactive unit-vector plot. All are fine.

## Licensing
- The notes' chapter opens with a song-lyric epigraph (Joni Mitchell, "The Circle Game", credited to Siquomb Publishing Company). **Not reproduced.** The page does not quote or paraphrase the lyrics.
- No "All rights reserved" or "Courtesy of" notice in the notes, transcripts or segment pages (grep on all extracted text). The notes' Figures 6.1–6.3 are not reused. The page draws its own plot from formulas.
- No verbatim copying found. Sentences such as "a unit vector points the way its coordinate increases" and "the horizontal part is adjacent to the angle" are short standard phrasing reworded from the transcript. Worked examples (50 m roundabout, 10° chord) are original. The notes use a 6° example.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: correcting 50,000 ly is right. The measured Sun–Galactic-centre distance is ≈ 8.2 kpc ≈ 26,700 ly, and the notes' figure is roughly twice that. The issue is only the "later result" framing (#2). Attribution to the notes and to GRAVITY 2019 is otherwise fair.
- The rotation-curve claim ("some of the first strong evidence for dark matter", speeds staying high far from the centre) is fair as stated. Earlier evidence came from galaxy clusters (Zwicky, 1933), so "some of the first" rather than "the first" is the right wording. Strictly, rotation curves are built from Doppler line-of-sight velocities converted to circular speeds, so "exactly the $v_\theta$ of this lesson" simplifies. This is acceptable at this level.
- `leadsTo`: Lesson 10 (acceleration in polar coordinates, radial/centripetal part) is correct. Ferreras 2.2 exists (`content/year-5/Ferreras/rotation-curves.mdx`) and is about rotation curves, which is correct. The Lesson 9 wording assigns angular velocity to Lesson 9 (#1). Uncertain: the Lesson 9 transcripts were not read, so I cannot confirm whether Lesson 9 also treats ω for uniform motion.
- The notes' running head on p. 1 reads "Chapter 6 Central Motion", while the OCW title and table of contents say "Circular Motion". The page's reading title follows OCW, which is fine.
- `npm run content:check`: 0 errors. The only warning for this page is the missing review file, which this file resolves.

## Re-check (2026-11-15)

Only the new and changed parts were checked. Sources read: the 8.3 transcript (https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/d237dc352aa70b53a03f98ee7b1f5167_q785KV5ZIN0.pdf, 3 pp.) and notes Section 6.5.1 (PDF pp. 11–12 = printed 6-10 and 6-11; the footer changes from "9" to "6-10" there).

**Warning 1 (segment 8.3 / ω missing): resolved.**
- The new "## Angular velocity" section follows the 8.3 transcript in order:
  - observers above and below see opposite senses → right-hand rule with $\hat n$;
  - ⊙/⊗ symbols;
  - $\hat k$ out of the board, $\vec\omega = (d\theta/dt)\hat k$;
  - $\omega_z$, angular speed $= \lvert d\theta/dt\rvert$;
  - $\vec v = r\omega_z\hat\theta$.
- The text is reworded, not copied.
- The source title now says 8.1–8.3. The transcript URL (reading4) matches the 8.3 segment page's PDF link. The Lesson 9 `leadsTo` no longer claims angular velocity.

**Warning 2 ("a later result" framing): resolved.** The callout now reads "about twice the true value … 8178 parsecs in 2019, about 26,700 light years, in line with the roughly 8 kiloparsecs accepted for decades". Recomputed: $8178 \times 3.2616 = 26{,}673$ ly → 26,700 ✓; $50{,}000/26{,}673 = 1.87$ → "about twice" ✓.

Citations of the changed formulas:
- "Angular velocity", Eq. (6.5.4), p. 6-11: **correct**. Transcript 8.3 p. 2 has $\vec\omega = (d\theta/dt)\hat k$, which is correct. The $= \omega_z\hat k$ part is said on p. 3, so "pp. 2–3" would be more exact (info). The transcript is again named in `at` while `cite="reading1"` (same known pattern as #3, info).
- "Angular speed", Eqs. (6.2.10), p. 3, and (6.5.5), p. 6-11: **correct**.
- "Velocity and angular velocity" $\vec v = r\omega_z\hat\theta$, reading4, transcript 8.3 p. 3: **correct**. The notes' Eq. (6.5.6), p. 6-11, gives the same result as $\vec\omega \times \vec r$.
- "Speed on a circle" now ends "$= r\,\omega$": matches Eq. (6.2.15), p. 5 ✓.
- "Position on a circle": `at` now names only Eqs. (6.2.1)–(6.2.2), p. 2 ✓ (#3 resolved).

Numbers, quiz and flashcard:
- Roundabout $\omega_z = 20/50 = 0.40$ rad/s ✓.
- The sign and direction claims are correct for anticlockwise motion viewed from above, with $\hat k$ out of the page.
- New quiz (wheel turning clockwise seen from above → down, index 1) ✓. The explanation is right.
- New flashcard ✓.
- YAML strings use doubled backslashes and JSX attributes use single ones. Escaping is correct.
- `pytest tests/calc -k circular`: 22 passed. `npm run content:check`: 0 errors.
- Calcs entries `sun-distance-gravity` (26,700 ± 50 ly), `sun-distance-ratio` (1.9), `roundabout-omega` and `velocity-from-omega` match the page text.

New findings (info only, no change required):
1. Angular-velocity formula: "transcript 8.3, p. 2" could be "pp. 2–3", because $\omega_z$ is introduced on p. 3.
2. The roundabout is horizontal, so "out of the page" for its $\vec\omega$ assumes the reader views it from above, as in a map. "Upwards (out of the page when drawn from above)" would be clearer.

Verdict after re-check: **pass** (no open errors or warnings).

## Resolution (2026-11-15, by the page author)

- Warning 1 (segment 8.3 missing): fixed. Added the "Angular velocity" section from the 8.3 transcript (now reading4) and notes Eqs. (6.2.10), (6.5.4)–(6.5.5), a quiz question and flashcard on ω, "= r ω" in the speed formula, the source title 8.1–8.3 and the seg83 reference; the Lesson 9 leadsTo no longer mentions angular velocity. Confirmed in the re-check above.
- Warning 2 ("a later result"): fixed. The callout now gives GRAVITY's 8178 pc ≈ 26,700 ly, says the notes' figure is about twice that, and that about 8 kpc had been accepted for decades. Calcs entries updated (tolerance ±50 ly) and sun-distance-ratio added.
- Info (position formula at= naming transcript 8.2): removed.
- Re-check info 1: the angular-velocity formula now cites only the notes, Eq. (6.5.4), p. 6-11.
- Re-check info 2: the roundabout's ω is now described as pointing upwards (out of the page in a map view).
- Also: plot labels and caption use words instead of r̂/θ̂, whose combining hats rendered badly in the graph legend.
- Not changed: the notes' introductory examples (conic orbits, Rutherford scattering, tangential acceleration) belong to later lessons.
