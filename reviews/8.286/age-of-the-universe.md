---
page: content/year-4/8.286/age-of-the-universe.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/58ae3113f8c0144438b1ad474ed34a7b_OtJFD9HNnoc.pdf (read: local copy of the Lecture 8 transcript, t08.txt; the page covers pp. 10–16)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec09/ (read: local copy l09.txt; slide 1 is the "Summary of Lecture 8")
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-8-the-dynamics-of-homogeneous-expansion-part-iv/ (not fetched separately; the transcript stands in for its content)
  - Study notes notes-L8.md (read, checked against the transcript)
verdict: pass-with-notes
---

# Review: The age of the universe and the Big Bang singularity

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "A long-running age problem", Krauss & Chaboyer paragraph | Guth quotes Krauss & Chaboyer from "the lecture notes": oldest stars 12.6 (+3.4, −2.2) Gyr at 95% confidence, so at least 10.4 Gyr, plus about 0.8 Gyr before stars could form, giving at least 11.2 Gyr (t08 p. 13). He uses this number to illustrate the pre-1998 tension. | Gives the 11.2 Gyr minimum, then says straight away "Before 1998 this created a real tension". | Uncertain, from outside the lecture: these exact figures appear to come from Krauss & Chaboyer, *Science* 299, 65 (2003), which postdates 1998. The page names no year, so it states no wrong date. But the wording suggests this result caused the pre-1998 tension. Suggest wording like "a later globular-cluster analysis by Krauss and Chaboyer (2003) put the minimum at 11.2 Gyr; similar but less precise star ages caused the tension before 1998", or simply leave out "Before 1998". |
| 2 | warning | Opening paragraph | Age is "the next question" (p. 10). Guth has already listed two "very nontrivial results" from the calculation: the critical density and the maximum size of a closed universe. | "asks the first big quantitative question they can answer" | Change to "the next quantitative question". |
| 3 | info | "What do we mean by 'age'?", second bullet | "Hawking proved that that was not a way out." He adds that Hawking did not prove the density goes to infinity, only that the spacetime becomes singular in other ways (p. 14). | "Stephen Hawking and Roger Penrose showed…" | The joint credit is historically fair (the Hawking–Penrose singularity theorems), but it differs from Guth without saying so. Optional: keep it, and add Guth's caveat that the singularity need not be one of infinite density. |
| 4 | info | Same section, last paragraph | "we don't know how the universe began" (p. 14). Guth also stresses that inflation gives no answer to how it all ultimately began (p. 15). | "we do not know how — or whether — the universe began". The caveat about inflation is missing. | "or whether" is a defensible reading of the multiverse remarks. Consider adding Guth's caveat about inflation. The multiverse hedging ("probably", "possibly") matches Guth's "pretty likely, although we sure don't know". |
| 5 | info | Age problem paragraph and quiz Q2 | "a factor of seven", "ages of the order of 2 billion years" (p. 11). No year or H value is given. | Adds "1929" and H ≈ 500 km/s/Mpc. | Both are historically correct (7 × 67.3 ≈ 470). No change needed. |
| 6 | info | Quiz Q4, correct choice | "very strong reasons to believe" classical GR fails there (p. 15). | "quantum effects, which surely matter at such densities" | Slightly stronger than Guth's wording, but acceptable. |

No error-level differences found.

## Arithmetic and answer checks
- t = (2/3)H⁻¹: H = ȧ/a = (2/3)b t^(−1/3) / (b t^(2/3)) = 2/(3t). This is correct and matches p. 11. The transcript's "little v" is a mistranscription of b. The claim that the notch-carrying constant drops out matches pp. 9 and 11.
- Conversion: 1/(10¹⁰ yr) = 3.0857×10¹⁹ km / 3.156×10¹⁷ s = 97.8 km/s/Mpc. This is correct and matches p. 12.
- Planck: 97.8/67.3 = 1.453, so 1/H = 14.5 Gyr and t = 9.69 ≈ 9.7 Gyr. Uncertainty: 9.69 × 1.2/67.3 = 0.17 ≈ 0.2. The page's 67.3 ± 1.2 and 9.7 ± 0.2 match p. 12. They also match the L9 slide 1 range of 9.5–9.9 Gyr.
- Hubble's value: 97.8/500 = 0.196, so 1/H = 1.96 Gyr and t = 1.30 Gyr. Correct. "One or two billion years" covers both 1/H and (2/3)/H, and is consistent with Guth's "of the order of 2 billion".
- Krauss & Chaboyer: 12.6 − 2.2 = 10.4, and 10.4 + 0.8 = 11.2. The page's 11.2 matches p. 13.
- 13.8 Gyr with dark energy: matches p. 13.
- Quiz Q1 (answer 1, t = (2/3)H⁻¹): correct.
- Quiz Q2 (answer 1, about 7× too large, 1–2 Gyr): correct.
- Quiz Q3 (answer 1, oldest stars are older): correct. "Nearly flat but not matter-dominated" matches L9 slide 1.
- Quiz Q4 (answer 1): correct. The explanation of "age" matches pp. 15–16.
- Flashcards: all four are correct.
- The worked example (two Hubble rates through the 97.8 conversion) is close in structure to Guth's p. 12 numbers but written in the page's own words. Part (a) is original. This is acceptable.

## Coverage and order
- The order follows t08 pp. 10–16: age derivation, Hubble's mis-measurement, the Planck number, the pre-1998 tension, dark energy, then the meaning of age, the singularity, quantum gravity and the multiverse.
- Omitted (info): that a flat universe expands forever with ȧ → 0, unlike an open one (p. 10). Also omitted: that pre-1998 data "looked more open", and that COBE fluctuation data also suggested Ω = 1 (p. 13). The page also leaves out the details 12.6 (+3.4, −2.2) at 95% confidence and the 10.4 + 0.8 sum. It keeps the 11.2 result.
- Horizon distance (p. 16 onward) is correctly left to horizon-distance.mdx.
- The summary of Lecture 7 (pp. 1–10) is correctly reduced to one sentence and a link.

## Licensing
- The transcript and slides are CC BY-NC-SA, and the page's license matches. No "All rights reserved" material is used, and there are no figures.
- No long verbatim copying. "The smart money is on" echoes Guth's "all the smart money bets on". It is a short idiom and acceptable, but it could be rephrased.
- No OpenStax or LibreTexts material.

## Notes
- All Formula citations use `cite="reading1"`, which is the Lecture 8 transcript (readings[0]). This is correct: both formulas were derived or quoted on the board (pp. 11–12). The second could also cite the L9 slide 1 summary.
- `references: {}` is empty. If the Krauss & Chaboyer paper is named, a reference entry is advisable. The year 2003 is my identification and was not checked against the paper.
- The cosmology Callout is accurate and fairly attributed: Guth says the age calculation "will be extending as we go through the course".
- notes-L8.md matches the transcript wherever checked. It still spells the name "Freedman" in places; the page correctly uses "Friedmann".

## Resolution (2026-11-14, by the page author)
- Krauss & Chaboyer now presented as Guth's illustration; the pre-1998 tension attributed to stellar ages of this kind generally, not to that study.
- Opening line now says "the next" quantitative question, after ρ_c and a_max.
- Singularity theorems: Guth credits Hawking; page notes the usual Hawking–Penrose attribution.
- Removed "or whether"; added Guth's caveat that inflation does not explain the ultimate beginning.
- Page stays `draft`.

## Status
- Marked `reviewed` on 2026-11-14: the owner decided that review against MIT's notes, slides and transcripts (with all findings resolved) is sufficient; the lecture videos are not compared.
