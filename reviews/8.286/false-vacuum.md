---
page: content/year-4/8.286/false-vacuum.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-23-inflation/ (read; lecture page, title "Lecture 23: Inflation"; its transcript link is the PDF cited as reading1)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/2aa1ecae1246c3e9b9fca11aefb81dcb_PsfyE1-s9Rs.pdf (read; transcript pp. 1–12 compared page by page with `pdftotext -f N -l N`; printed footer = PDF page number)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec23/ (read only to check licensing; slides 1–2 are a CMB graph marked "© Science. All rights reserved", one image removed for copyright; nothing else on them)
verdict: pass-with-notes
---

# Review: The false vacuum and the mechanism of inflation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Old inflation and the graceful exit problem", 2nd paragraph | Guth (p. 8): "a few years later, Andrei Linde ... and independently, Albrecht and Steinhardt ... proposed ... the new inflationary model" | "A few years later **Andrei Linde** ... proposed **new inflation**" | Historically it was about one year: Guth, Phys. Rev. D 23, 347 (Jan 1981); Linde, Phys. Lett. B 108, 389 (1982, received Oct 1981); Albrecht & Steinhardt, Phys. Rev. Lett. 48, 1220 (Apr 1982). Per writing rule 4, write "About a year later" and add a short bracketed note that Guth says "a few years" in the lecture (or drop the time phrase). |
| 2 | info | Callout "Later developments" | Guth (p. 1): "in the past few years, people have written a number of papers proposing that maybe the Higgs field of the standard model could ... be the field that drives inflation" | Higgs inflation, "proposed in 2008 by Fedor Bezrukov and Mikhail Shaposhnikov", sits under the heading "Later developments" | The 2008 proposal came before the 2013 lecture. It is the work Guth is referring to, not a later development. Suggest: "The papers Guth mentions include Higgs inflation (Bezrukov & Shaposhnikov, 2008) ...", and keep "Later developments" for the post-2013 part ("fits current data", "plateau potentials favoured by today's CMB measurements"). Naming the data would help, e.g. Planck 2018 and BICEP/Keck 2021. The physics in the callout is correct: non-minimal coupling to gravity, $n_s \approx 0.965$ and small $r$, consistent with those data. |
| 3 | info | Same section, "They don't: bubble formation produces terrible inhomogeneities" | Transcript p. 8: "But that turned out to be the case." The next sentence makes clear he means it did *not* turn out that way (a speech or transcription slip) | Gives the intended meaning | Fine as written. Optionally add a bracketed note, per rule 4, that the transcript literally says the opposite. |
| 4 | info | Summary, last bullet | p. 11: a patch "greater than or about equal to" the Hubble length, expanding faster than a threshold, with average $\phi \approx 0$ | "Inflation needs only a roughly Hubble-sized, expanding patch near the false vacuum" | Say "at least about Hubble-sized" so the summary matches the body text and Guth. |
| 5 | info | Scalar fields section, "the inflaton" | The transcript reads "called the inflation" (an auto-transcription error for "inflaton") | "inflaton" | Correct. No change needed. |

No differences found in the formulas (see below), the definitions, or the attributions to Coleman, Linde, Albrecht & Steinhardt, Vilenkin and Hartle–Hawking.

## Formula citations (all checked against the printed transcript pages)
- "Energy conservation in an expanding universe", $\dot\rho = -3(\dot a/a)(\rho + p/c^2)$, `at="p. 4"`: correct. Guth says the equation aloud and writes it on the board on p. 4. There is no slide for it.
- "Pressure of the false vacuum", $p = -\rho_f c^2 = -u_f$, `at="p. 4"`: correct. On p. 4 he corrects himself to "mass density times $c^2$ ... minus the energy density", with $u$ for energy density and $\rho$ for mass density, as the page states.
- "The piston argument", $\Delta E = \Delta W \Rightarrow u_f\Delta V = -p\Delta V \Rightarrow p = -u_f$, `at="p. 5"`: correct (bottom of p. 5).
- "Second Friedmann equation", $\ddot a = -\frac{4\pi}{3}G(\rho + 3p/c^2)a$, `at="p. 7"`: correct. Guth first leaves out the $a$ and then adds it ("I should write factor of a here", p. 7). The page shows the corrected form.
- All four are board or spoken equations. None comes from the © Science slides.

## Arithmetic and answer checks
- Bracket for the false vacuum: $\rho_f + 3(-\rho_f c^2)/c^2 = -2\rho_f$. Correct.
- Flashcard 3: $-\frac{4\pi}{3}G(-2\rho_f)a = +\frac{8\pi}{3}G\rho_f a$. Correct.
- The page has no numerical worked examples.
- Quiz Q1 (answer 1, "stuck ... temporary"): correct. Matches p. 3 ("false in the sense of the word temporary").
- Q2 (answer 1): correct. The explanation repeats the piston argument correctly (p. 5).
- Q3 (answer 1, tunnelling into bubbles, extreme inhomogeneity): correct per pp. 7–8. Info: the distractor "It ended too slowly" is partly defensible. In the full history (Guth & Weinberg 1983), getting enough inflation needs a slow nucleation rate, and then the bubbles never percolate. A careful student could hesitate. Consider a clearly wrong distractor.
- Q4 (answer 1, flat plateau, coherence region stretched): correct per pp. 8–9. The explanation's attribution (Linde; independently Albrecht & Steinhardt) matches p. 8.
- Q5 (answer 1, patch at least about a Hubble length, expanding, $\phi$ averaging near 0): correct per p. 11. The explanation matches pp. 9 and 11.
- Flashcards 1, 2 and 4: correct.

## Coverage and order
- The page follows transcript pp. 1–11 in order: scalar fields and the Higgs (p. 1); the two potentials, false vacuum, Coleman tunnelling, bubbles, plateau metastability and the Hubble time (pp. 2–3); the meaning of "false vacuum" (p. 3); the $\dot\rho$ argument (p. 4); the piston argument (pp. 4–6); the student question on energy density (p. 6); the second Friedmann equation and repulsion (p. 7); Michael's question on rolling (p. 7); the history of old inflation and bubbles (pp. 7–8); new inflation and coherence regions (pp. 8–9); the graceful exit problem (p. 9); initial conditions: Linde's chaotic idea, Vilenkin/Linde creation from nothing, Hartle–Hawking (pp. 9–10); the patch requirement (p. 11).
- The page stops at the right place: p. 11 continues with the first Friedmann equation and the exponential solution, which belong to the next page (`exponential-expansion.mdx`, which exists in the working tree).
- Nothing important is missing. Small omissions that are fine to leave out: the "fictitious zero-energy vacuum" alternative in the piston argument (p. 5); Hawking "from Cambridge" and Hartle's GR textbook (p. 10). The page adds nothing beyond the lecture apart from the labelled callout.
- Claims checked: Linde at Stanford, Vilenkin at Tufts, Hartle at UC Santa Barbara (p. 9–10), all as stated in 2013. "Lecture 23, the last of the course" and "mostly on the blackboard" (p. 1, "mainly on the blackboard") are supported.

## Licensing
- The Lecture 23 slides are © Science, all rights reserved (CMB comparison graph by Max Tegmark for Guth & Kaiser, Science 307, 884). The page uses nothing from them, does not cite them, and draws no diagram from them.
- No long verbatim passages. The closest wording is short and standard ("frothy mess", "graceful exit problem", "pulling against a suction", "bends and stretches like rubber"), all clearly rewritten. No OpenStax or LibreTexts material.
- No "Courtesy of" material is used, so no `courtesy:` field is needed.

## Forward links
- `leadsTo` points to Lecture 1, "Inflationary Cosmology: Is Our Universe Part of a Multiverse? Part I" (checked in `_course.json`). The "multiverse" wording in `why` fits the lecture title. I did not read the Lecture 1 transcript, so the claim that it "builds on this mechanism" is plausible but not verified here.
- There is no `Callout kind="cosmology"`, which is fine for an 8.286 page. The "Later developments" note is discussed in finding 2.

## Notes
- The transcript reading URL matches the transcript link on the OCW lecture page.
- The prerequisites `magnetic-monopoles` and `cosmological-constant` exist.
- Verdict: pass-with-notes. No errors in physics, citations or answers. Fix the "a few years later" timing (warning 1) and the callout framing (info 2) before setting `status: reviewed`.

## Resolution (2026-11-14, by the page author)

- Warning: now "soon afterwards", with a bracket: Guth says "a few years later", but the new-inflation papers appeared in 1982, about a year after his January 1981 paper.
- Info 2: the callout now presents Higgs inflation as one of the proposals Guth mentions and marks only the Planck 2018 / BICEP/Keck 2021 results as later developments.
- Info 3: added a bracket for the "turned out to be the case" slip.
- Info 4: summary now says "at least about a Hubble length across".
- Info 5: the quiz distractor is now "It produced too few monopoles".
