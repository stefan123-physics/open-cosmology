---
page: content/year-4/8.286/cosmological-redshift.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-5-cosmological-redshift-and-the-dynamics-of-homogeneous-expansion/ (not fetched; lecture content taken from a local copy of the full Lecture 5 transcript, t05.txt, whose header names video ID 45RQrWHzovU. The redshift part, transcript pp. 1-13, was read in full.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec05/ (read via local copies l05.txt/l05.pdf of the Lecture 5 slides. They contain only the Newton-Bentley letters and the shell figures for the dynamics part; nothing on redshift. The URL itself was not fetched.)
  - third-party structured notes (notes-L5.md), used only as a map and checked against the transcript
verdict: needs-changes
---

# Review: Cosmological redshift

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Worked example, step "Expansion" | (Not from MIT: Guth uses no numerical example.) Physics: 364.8 nm is near-ultraviolet (UVA); the visible band starts at about 380-400 nm. | "Ultraviolet light has been stretched into the visible." | Change to "Far-ultraviolet light has been stretched into the near ultraviolet, just short of the visible", or pick a larger redshift (for example z = 3, observed at 486.4 nm, which is visible) and recompute. |
| 2 | warning | Frontmatter `source.readings[0]` | The transcript is a separate PDF resource on OCW. | Title "8.286 Lecture 5 transcript", but the URL is identical to `source.url`, the lecture video page. All three formulas cite `reading1`, so the reader is sent to the video page, not to a transcript. | Point `reading1` at the OCW transcript PDF for Lecture 5 (look up its real URL on OCW; I did not verify it), or retitle it "8.286 Lecture 5 video page (with transcript)". |
| 3 | info | "How this relates to the Doppler shift", last paragraph | No gravity: a(t) = constant + constant times t (a constant a(t) is a special case); one then chooses t = 0 where a = 0 to get a proportional to t. | "a(t) grows linearly, a ∝ t". | Optional: add "choosing t = 0 when a = 0". |
| 4 | info | Same paragraph | Guth says it "will be, I'm pretty sure, an extra-credit homework problem", that it is hard because it needs the relation between the two coordinate systems (time dilation, Lorentz contraction), and that the answers agree exactly. | "Guth leaves it as an extra-credit problem to show that ... reproduces the relativistic Doppler formula exactly." | Acceptable. Could say "promises" rather than "leaves", and mention that it requires relating the inertial and comoving coordinates. |
| 5 | info | "It uses different variables" | Guth says the SR answer gives z as a function of velocity in an inertial frame, and (later) that with gravity there is no global inertial coordinate system. | Adds: so "the velocity" of a distant galaxy "is not well defined in the special-relativity sense". | Standard and correct, but it is the page's own inference, not stated by Guth in this lecture. Fine as is. |
| 6 | info | "Clocks and coordinates, again" | Guth gives two synchronisation signals: the Hubble expansion rate and the CMB temperature. | Only the CMB temperature. | Optional: mention the Hubble rate too. |
| 7 | warning | Callout "The furthest redshift we can see" | Not in Lecture 5 (Guth does not mention z ≈ 1100 here). Checked from my own knowledge, not from an MIT source: CMB decoupling at T ≈ 3000 K, z ≈ 1090 (Planck z* ≈ 1090), so "about 1/1100 of its present size" and "z ≈ 1100" are correct. | Uses `kind="key"` and is not marked as coming from outside this lecture, though it says "later lectures ... derive in detail". | Content is right. Consider `kind="cosmology"` (the forward-link callout kind) so it is clearly a forward pointer, not lecture content. |

## Arithmetic and answer checks
- Lyman-alpha rest wavelength 121.6 nm: correct (121.567 nm).
- 364.8 / 121.6 = 3.000, so 1 + z = 3, z = 2: correct. 121.6 x 3 = 364.8: correct.
- a(t_O)/a(t_S) = 3, so distances were one third of today's: correct.
- "Ultraviolet ... into the visible": wrong, see finding 1.
- Quiz 1 (z = 2): marked answer "3 times" (index 1) correct; explanation correct.
- Quiz 2 (why λ ∝ a): marked answer index 1 (same coordinate speed, fixed coordinate separation) correct; matches transcript p. 5.
- Quiz 3 (where is gravity hidden): marked answer index 1 (in a(t)) correct; this is exactly the student answer Guth accepts on p. 8.
- Quiz 4 (contracting universe): marked answer "blueshifted" (index 1) correct; Guth confirms on p. 10.
- Flashcards: all three correct. "Cosmic time" card and "redshift without gravity" card match the transcript.
- Formulas: dx/dt = c/a(t) (p. 5), λ(t) ∝ a(t) (p. 5), 1 + z = Δt_O/Δt_S = λ_O/λ_S = a(t_O)/a(t_S) (p. 6) all match the blackboard results; λ = cΔt (page writes Δt = λ/c) matches p. 6.
- Plot: emitted wave period 1.5, received period 1.5(1+z): consistent with the formula.

## Coverage and order
Transcript order of the redshift part, with page coverage:
1. Agenda: finish kinematics (redshift), then dynamics. Covered (intro).
2. Recap: comoving coordinates, matter at rest, peculiar motions in the real universe. Covered.
3. Cosmic time: local clocks at rest relative to matter, synchronised by a cosmic signal (Hubble rate or CMB temperature), stay synchronised by homogeneity. Covered (Hubble-rate example omitted).
4. Q&A: CMB temperature not Lorentz invariant (dipole, ~1/1000 c); CMB temperature measured in distant galaxies. Omitted (acceptable).
5. Q&A: clocks near masses; Sun ~1 part in 10^6, supermassive black holes much more; cosmic time an idealisation. Covered, numbers correct.
6. Derivation: x in notches, ℓ_p = a ℓ_c, crests as pulses, dx/dt = c/a independent of x, Δx constant, λ ∝ a, λ = cΔt, 1+z. Covered, in the same order, correctly.
7. Q&A on the Lorentz-invariant interval. Omitted (fine).
8. Difference 1: more general, includes gravity; no time dilation because both clocks read cosmic time; cosmic time is not the time of any inertial frame. Covered. The remark "cosmic time is not inertial-frame time" is only implicit on the page.
9. Gravity hidden in a(t). Covered (text and quiz 3).
10. "Could we have used this instead of the SR derivation? Not easily." Omitted (fine).
11. Difference 2: different variables (a(t) for comoving objects vs velocity in an inertial frame). Covered.
12. Q&A: cosmic time vs Newton's absolute time; contraction gives blueshift; rescaling c is a rescaling of space, time is local; clock carried infinitely slowly (Guth unsure, answers next time). Only the blueshift point is covered (callout + quiz 4). Others omitted (fine).
13. No-gravity check: a linear in t, a ∝ t with t = 0 at a = 0; promised extra-credit problem; agreement is exact. Covered (finding 3, 4).
- Nothing on the page goes beyond the redshift part except the CMB callout (finding 7) and the worked example (original). Order matches the lecture.

## Licensing
- No verbatim copying from the transcript found; the page paraphrases. Guth's phrase "those words really say it all" is not reused.
- The worked example (Lyman-alpha quasar) is original; Guth gives no numerical example.
- No slide material reused (the slides cover only the later Newton part). No OpenStax/LibreTexts material.
- License CC BY-NC-SA 4.0 is consistent with OCW.

## Notes
- Clock-effect claims verified: "near the Sun by about one part in a million" matches "on the order of a part in a million or so" (p. 3); "near a giant black hole by much more" matches the supermassive-black-hole remark.
- "Why no time dilation" paragraph is accurate to pp. 7-8.
- "The first thing Guth does in Lecture 5" and "last piece of the kinematics" are correct (p. 1).
- Prerequisite pages `doppler-effect` and `homogeneous-expansion` exist in content/year-4/8.286/.
- `references: {}` is empty; acceptable since all citations go through `readings`.
- I did not fetch any OCW URL; the transcript PDF's real URL for finding 2 is unverified.

## Resolution (2026-11-14, by the page author)
- Error fixed: 364.8 nm is now described as near-ultraviolet, with z = 3 (486 nm) given as the visible case.
- reading1 now links the Lecture 5 transcript PDF itself.
- CMB z ≈ 1100 callout changed to a "Looking ahead" cosmology callout.
- Added: t = 0 chosen where a = 0; the extra-credit problem is "announced"; Hubble-rate synchronisation mentioned.
- Page stays `draft` (video not compared).

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
