---
page: content/year-4/8.286/friedmann-equation.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-7-the-dynamics-of-homogeneous-expansion-part-iii/ (read via the Lecture 7 materials below. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/a8d35e02dbabc99e6a5fb7af82012b61_m00PjHTq6jU.pdf (read via a local copy, t07.txt. Its header "watch?v=m00PjHTq6jU" matches the video ID in this URL. The sections relevant to this page, lines 1–840, were read closely. The rest was searched for the topics covered here. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec07/ (read via local copies, l07.txt and l07.pdf: a title slide plus slides 1–3. The URL itself was not fetched.)
  - A third-party notes file for Lecture 7 (notes-L7.md). Every point taken from it was checked against t07.txt.
verdict: pass-with-notes
---

# Review: The Friedmann equation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | History paragraph: "followed in 1924 by one on negative k" | Guth says the two "now famous papers" appeared "in 1922 and 1923". One is about positive k and one about negative k, and he adds "I forget which order they were in". | 1922 for positive k, 1924 for negative k. | The page is historically right and Guth misspoke. From my own knowledge: Friedmann, Z. Phys. 10, 377 (1922), on positive curvature, and Z. Phys. 21, 326 (1924), on negative curvature. The page departs from its cited source without saying so, though. Add a short note, e.g. "(Guth says 1923 in the lecture; the second paper appeared in 1924.)" |
| 2 | warning | End of the "Notches" section ("What matters is the **sign** of k"), plus the Summary bullet "only the sign of k is physical" | "k and the notch never really appear in final physical quantities". In other words, the numerical value of k is a matter of convention. | Only the sign of k is physical. | This overstates the point. The combination k c²/a² (equivalently, the spatial curvature, or H²(Ω−1)) does not depend on the notch and is physical. Only k's value on its own is arbitrary. Suggest "the number k by itself is convention; its sign, and the combination k/a², are physical." |
| 3 | warning | Quiz 3 explanation: "i.e. (m/notch)² / (m)²" | [k] = [ȧ²/c²] = (s²/m²)·(m²/(notch² s²)) = 1/notch² (transcript). The page's own "Units of k" formula gets this right. | Writes the units of ȧ² as (m/notch)² and of c² as m². | The seconds were dropped, so the expression literally gives wrong units for ȧ and c. Use "(m/(notch·s))² / (m/s)² = 1/notch²". |
| 4 | info | History: "The Russian physicist Alexander Friedmann" | "a Russian meteorologist by profession" who knew a lot about differential equations. | "Russian physicist". | Acceptable, and arguably more accurate: Friedmann was a mathematician and physicist who worked in meteorology. The page simply doesn't repeat Guth's description. You could add "(trained as a mathematician, working in meteorology)" if you want. |
| 5 | info | Convention 1: "(the convention of Barbara Ryden's textbook, for example)" | Guth: Ryden defines a = 1 today, which makes a notch equal to a metre today. | Same. | The attribution matches Guth. From my own knowledge (not checked against Ryden here): Ryden writes the curvature term as κc²/(R₀²a²) with κ = −1, 0, +1. She therefore normalises a = 1 today *and* uses a sign-only κ, with the scale carried by R₀. That is consistent with Guth's statement about a, but a reader who compares with Ryden may find it confusing. Optional: add "(Ryden writes Guth's k as κ/R₀²)". |
| 6 | info | Convention 2 | Guth adds that, among the books he has read, the k = ±1 convention is the more common of the two, and that both are in use. | Leaves this out. | Optional addition. |
| 7 | info | "The two Friedmann equations" Formula (cite="reading1") | The board pair, from the transcript. The ä equation also appears on slide 2 as ä = −(4π/3)Gρ(t)a. | Cites the transcript only. | The citation is correct. The ä half could also cite reading2, slide 2. |
| 8 | info | Pressure callout | The ä equation assumes p = 0. A gas with pressure does work, loses energy and so (relativistically) mass, which means ρ ∝ a⁻³ fails. "the pressure ends up canceling out", so the top equation stays true for any matter. Guth also says both equations, with a pressure term in the ä equation, appear in Friedmann's papers. Note that this pressure question is raised twice in the lecture: once during the slide-2 review and once after the pair of equations. | Matches. | Accurate. No change needed. |

### Formula attribution check
- "The conserved quantity", E = ½ȧ² − (4π/3)Gρ_i/a, cited as reading2 slide 3: correct. The slide 3 footer is "–3–", the title is "Summary: A Conservation Law", and the slide shows the same expression.
- "Rearranged", the curvature constant k ≡ −2E/c², and the boxed Friedmann equation, all cited as reading1: correct. All three were written on the board (transcript lines about 400–460) and none is on the slides. The definition k = −2E/c² and "Nobody talks about E… That's just my convention" match. The equation Guth boxes is (ȧ/a)² = (8π/3)Gρ − kc²/a², and it matches.
- "Physical radius with notches" (r = a r_i, with a(t_i) = 1 m/notch) and "Units of k", both cited as reading1: correct. These were written on the board. The 5-notch example and the unit chain match the transcript.

## Arithmetic and answer checks
- Derivation: (2/a²)[½ȧ² − (4π/3)Gρ_i/a] = (ȧ/a)² − (8π/3)Gρ_i/a³ = (ȧ/a)² − (8π/3)Gρ, which equals 2E/a². Correct. Then 2E = −kc² gives (ȧ/a)² = (8π/3)Gρ − kc²/a². Correct.
- k = −2E/c², so E > 0 means k < 0. Correct, and it matches Guth: open universes have negative k.
- Units of k: (s²/m²)·(m²/(notch² s²)) = notch⁻². Correct.
- Worked example, step 1: same algebra as above. Correct.
- Worked example, step 2: (ȧ/a)² → s⁻². Gρ: m³ kg⁻¹ s⁻² × kg m⁻³ = s⁻². kc²/a²: notch⁻² · m² s⁻² · notch² m⁻² = s⁻². All correct. The example is original: Guth works out only [k], not the check of every term, so it is not copied.
- Quiz 1 (answer 1, k = −2E/c²): correct. The explanation is correct.
- Quiz 2 (answer 1, homogeneity plus small region): correct, and it matches Guth's argument. The pressureless caveat matches his "the case we're doing".
- Quiz 3 (answer 2, 1/notch²): correct. The unit chain in the explanation is sloppy (see row 3).
- Quiz 4 (answer 2, only the first-order equation survives): correct, and it matches the transcript.
- Flashcards: all four are correct. The normalisation card gives "k = +1, 0 or −1". Strictly, k = 0 is not chosen by any normalisation, but the meaning is clear.

## Coverage and order
- The page follows Guth's order for the middle of Lecture 7. First comes rewriting E as the Friedmann equation, then k, the boxed equation, history, the pair of equations, the pressure caveat, why Newton is exact, and notches with the two conventions. This matches the transcript.
- Left out on purpose: the opening review of slides 1–3, which is covered on the expanding-sphere page. Also left out are the sign-of-E classification, a_max, ρ_c and its value, Ω and the 2013 energy budget, and the flat solution a ∝ t^(2/3). These are covered on open-closed-flat.mdx, which exists.
- Also left out: Guth's on-board slip (a missing factor of a, caught by a student) and the admin remarks. Leaving them out is correct.
- The "why Newton is exact" section closely follows Guth's argument: a 1 m box, slow velocities and weak gravity, homogeneity, and GR having to reduce to Newton. It is paraphrased, not quoted. The parenthetical about radiation and dark energy is the page's own addition and is consistent with the lecture.
- The cosmology callout (Friedmann equation gains radiation and dark-energy terms; structure kept; next page covers open/closed/flat and critical density) is correct and fairly attributed.

## Licensing
- The transcript carries the standard OCW Creative Commons header. The slides have no "©", "All rights reserved" or "Courtesy of" notices. The MIT logo on the slides is not reused.
- I found no verbatim copying beyond short phrases. "Nobody … talks about E" is a short paraphrased quote, and "the Friedmann equations" is a term. The page uses CC BY-NC-SA 4.0, which is compatible.

## Notes
- The readings[0] URL contains the video ID m00PjHTq6jU, which matches the transcript file used. I did not fetch any URL online.
- The notes file's "slips" section claims 1922/1924. I checked it against the transcript (Guth says "1922 and 1923") and against my own knowledge (1924 is correct). The other points used from the notes agree with the transcript.
- I did not edit the page.

## Resolution (2026-11-14, by the page author)
- Added a note that Guth recalls the Friedmann papers as 1922 and 1923, while the second actually appeared in 1924.
- "Only the sign of k is physical" softened: the sign and notch-free kc²/a² are physical; bare k is not. Guth's view that k = ±1 is more common added.
- Quiz 3 explanation units corrected to (m/(notch·s))²/(m/s)².
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
