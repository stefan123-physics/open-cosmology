---
page: content/year-4/8.286/inflation-overview.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-1-inflationary-cosmology-is-our-universe-part-of-a-multiverse/ (read; lecture page HTML, its first PDF link is the transcript 7374706759bab97b9b6d0c4d649faf70_ANCN7vr9FVk.pdf, matching reading1)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/7374706759bab97b9b6d0c4d649faf70_ANCN7vr9FVk.pdf (read; pp. 1–24, printed footers checked against PDF page numbers for pp. 3, 11, 12, 17, 19, 20)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec01/ (read; slides PDF a352d15201da5f115a4a4734549cd7e7_MIT8_286F13_lec01.pdf, slides –1– to –21–)
verdict: pass-with-notes
---

# Review: The Big Bang and its prequel — an overview of inflation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Worked example "Counting doublings" | Transcript p. 7–8 and slide 5: patch $10^{-28}$ cm, "about 100 doublings", factor $10^{28}$, $10^{-35}$ s, "just 100 times $10^{-37}$" (p. 8) | Recomputes exactly Guth's numbers ($10^{-28}$ cm → 1 cm, $10^{-37}$ s per doubling) | The arithmetic is right, but AGENTS.md rule 1 asks for original numbers or situations. Change the numbers (for example a different start size or doubling time, or ask how many doublings give $10^{30}$), or present it clearly as a check of Guth's figures rather than as a worked example. |
| 2 | warning | `leadsTo` Lecture 3, "why" | The Lecture 3 title is "The Doppler Effect and Special Relativity". The repo's Lecture 3 page (`doppler-effect.mdx`) never mentions Hubble's law. | "The course proper starts from Hubble's law and the Doppler shift." | I did not read the Lecture 3 transcript, so whether Guth covers Hubble's law there is uncertain. Safer wording: "The course proper starts with the Doppler shift and special relativity." |
| 3 | info | Flatness, bracket after "15 decimal places" | Slide 11 and transcript p. 17 say 15 decimal places. Guth does not say which present-day bound he used. | "[Lecture 21 gets 18 decimal places using Planck's tighter bound on Ω today; the 15 corresponds to a much looser bound.]" | This matches `flatness-problem.mdx`: $\lvert\Omega-1\rvert<0.01$ today gives $10^{-18}$, and a bound about 1000 times weaker (1980 knowledge) gives $10^{-15}$. But Lecture 1 itself does not explain the 15. Write "probably corresponds to" or "Lecture 21 explains that 15 corresponds to the 1980 bound", so the page does not seem to quote Guth's reasoning in Lecture 1. |
| 4 | info | Miracle 1 bracket | Transcript p. 5: "Einstein introduced this in 1916, I guess" | "[Guth says 1916; Einstein's cosmological paper was 1917]" | Correct. Einstein's "Kosmologische Betrachtungen zur allgemeinen Relativitätstheorie" is from February 1917. No change needed. |
| 5 | info | Flatness, e-fold bracket | Transcript p. 19: "every e-fold drives it another factor of 10 closer" | "[… the factor is $e^2 \approx 7.4$ — roughly ten.]" | Correct. During inflation $H$ is nearly constant, so $\lvert\Omega-1\rvert \propto 1/(a^2H^2)$ falls by $e^2 = 7.39$ for each e-fold. "Roughly ten" is fair. No change needed. |
| 6 | info | `source.title` | The OCW page title is "Lecture 1: Inflationary Cosmology: Is Our Universe Part of a Multiverse? Part I" (`_course.json` syllabus also says "Part I") | No "Part I" | Add "Part I" to match OCW and the syllabus. |
| 7 | info | Dark energy paragraph | Slide 12: the expansion "has been accelerating for about the last 5 billion years" | Leaves out the 5 billion years | Optional addition. |
| 8 | info | Flatness, Planck number | Transcript p. 19: Guth reads the result as Ω = 1 "to about a half a percent or maybe 1%" | Gives only the number | Optional: add Guth's reading of the error bar. |
| 9 | info | Section structure | The slides introduce Miracle #1 (slide 3) and Miracle #2 (slide 6) in parallel | Miracle 1 is a bold paragraph inside "Inflation: the prequel"; Miracle 2 is a `###` heading inside "How inflation works" | This is a style mismatch only, not a physics problem. Consider formatting both miracles the same way. |

Formula citations (all checked against the slides PDF):
- Age $t_0 = 13.82 \pm 0.05$ billion years, `reading2` slide 1: correct. The value is printed on slide –1– and also spoken on transcript p. 2.
- $\Omega$ = actual mass density / critical mass density, `reading2` slide 10: correct. It is on slide –10–.
- $\Omega = 1.0010 \pm 0.0065$, `reading2` slide 12: correct. It is on slide –12– and also in transcript p. 19.

## Arithmetic and answer checks
- Worked example (checked with python3): $\log_2 10^{28} = 28/\log_{10}2 = 93.01$ → "93" is correct. $2^{100} = 1.27\times10^{30}$ → "$\approx 1.3\times10^{30}$" is correct. $93\times10^{-37}$ s $= 9.3\times10^{-36}$ s ≈ $10^{-35}$ s is correct.
- "Double the radius … density falls eightfold": correct ($2^3$), and it matches transcript p. 9.
- Other numbers checked against the transcript: CMB uniform to 1 part in $10^5$ (p. 11); dipole about 1 part in 1000 (p. 12); about 400,000 years (p. 13); 100 × the speed of light (p. 14); Ω ≈ 0.2–0.3 before 1998 and visible matter ≈ 0.04 (pp. 19–20); Earth about $10^{30}$ times the mean density (p. 20); $10^{16}$ GeV and 1 GeV ≈ proton mass-energy (p. 7). All match.
- Quiz Q1 (answer 1): correct (transcript pp. 2–3).
- Quiz Q2 (answer 2): correct (slide 2; pp. 4–5). The other choices are things the Big Bang does describe (slide 1).
- Quiz Q3 (answer 1): correct (slide 6; pp. 9–10).
- Quiz Q4 (answer 1): correct (slide 8; p. 14).
- Quiz Q5 (answer 1): correct (slide 12; pp. 19–20). The explanation's number matches slide 12.
- Flashcards: all four agree with slides 3–6 and 8–13. "Factor ≳ $10^{28}$" matches slide 5 ("at least $10^{28}$").
- Later-developments callout: Planck 2018 gives age 13.787 ± 0.020 Gyr and $\Omega_k = 0.0007 \pm 0.0019$ (TT,TE,EE+lowE+lensing+BAO), and $n_s = 0.9649 \pm 0.0042$. The callout's rounded values are correct, and they are marked as later developments. No primordial B-mode or tensor detection has been made as of 2026 (best bounds about $r < 0.03$–0.04). I checked these from my own knowledge, not from a source fetched in this review.

## Coverage and order
- The page follows the order of slides 1–13 and transcript pp. 1–23:
  - Planck/COBE/WMAP introduction
  - the standard Big Bang (what it is, what it describes, the egg cartoon)
  - what it doesn't describe
  - prequel and Miracle 1
  - the GUT-scale patch, doubling, decay and the eternal-inflation caveat
  - Miracle 2 and the schematic energy bars (slide 7, described in words)
  - evidence: uniformity (with the dipole Q&A), flatness (with the fourth-dimension Q&A), and small-scale nonuniformity (with the dark-energy Q&A)
- Slides 14–16 (theory–data comparison graphs) are described in words only. That is right given their licence.
- Slides 17–21 (multiverse, dark energy, vacuum-energy nightmare, landscape) and transcript pp. 23 (end)–29 are left to `eternal-inflation.mdx`, as intended.
- Small omissions, none important:
  - the "two-thirds of the term" rationale (partly given)
  - helium-3 as the example of a confirmed abundance (p. 4)
  - Guth's remark that Ω at 1 s is "probably the most accurate number we know in physics" (p. 17)
  - the "1/100" value in the list of possible pre-inflation Ω values (p. 18)
  - Andromeda as an example of a quantum fluctuation (p. 21)
  - the sound-spectrum analogy for "spectrum" (p. 22)
- Nothing on the page is unsupported by the source. Claims beyond the source (the Einstein date, the $e^2$ factor, Planck 2018) are bracketed or put in the later-developments callout.

## Licensing
- Slides 14–15 (Tegmark graph for Guth & Kaiser, *Science* 307, 884) are marked "© Science. All rights reserved." The page does not reproduce them. It describes them in words, says why, and links to `/courses/8-286/inflation-solutions`. That page exists and describes the same graph.
- The slide 16 image was removed by MIT for copyright. The page does not use it and only mentions in words that Planck 2013 data were shown.
- The IPAC images ("Image courtesy of IPAC") on slides 1, 9 and 10 are not used. The page mentions the Planck picture and the curved surfaces only in words, and draws no diagram from them, so no `courtesy:` entry is needed.
- No OpenStax or LibreTexts material. `references: {}`.
- No verbatim copying of paragraphs. The closest phrasings are short and either attributed or standard:
  - "what banged, why it banged, or what happened before it banged" (explicitly "In Guth's phrase"; slide 2)
  - "aftermath of a bang", "bangless", "prequel", "dead wrong", "pencil balanced on its tip", "air in a lecture hall"
- `grep -il "rights reserved\|courtesy"` on the extracted text matches only `slides.txt`, consistent with the above.

## Notes
- `leadsTo` Lecture 21 (horizon and flatness problems) and Lecture 23 (false vacuum, negative pressure, exponential expansion) are correct and fairly worded. Pages exist for both (`horizon-problem.mdx`, `flatness-problem.mdx`; `false-vacuum.mdx`, `exponential-expansion.mdx`, `inflation-solutions.mdx`).
- There is no `<Callout kind="cosmology">`. That is fine, because this is itself the 8.286 page. The "Later developments" callout is correctly labelled as post-2013.
- Transcript page numbers were spot-checked (the printed footer equals the PDF page). The page cites no transcript pages, only slides.
- The video was not compared (owner decision).
- No errors found. The verdict is pass-with-notes. Fixing warnings 1 and 2 is recommended before setting `status: reviewed`.

## Resolution (2026-11-14, by the page author)

- Warning 1: the worked example now uses its own numbers (10⁻²⁶ cm to 3 cm at 5×10⁻³⁷ s per doubling: 88 doublings, 4.4×10⁻³⁵ s), with Guth's figures only as a comparison.
- Warning 2: the Lecture 3 leadsTo now says the course begins with the Doppler effect and special relativity.
- Info: source title now ends "Part I"; the 15-decimal bracket now says Lecture 21 explains the numbers; Miracle 1 is a heading like Miracle 2; added "accelerating for about the last 5 billion years" and Guth's "half a percent, or maybe 1%".

## Correction (2026-11-20)

The calcs entries `doublings`, `doublings-guth` and `duration` cited slide 10 for Guth's inflation figures; slide 10 is about Ω. Checked in the Lecture 1 slides PDF: the patch of 10⁻²⁸ cm and the doubling time of 10⁻³⁷ s are on slide 4, and the factor of at least 10²⁸ (about 100 doublings), the 10⁻³⁵ s and the marble on slide 5. The entries now cite slides 4–5 and say that the 10⁻²⁶ cm, 3 cm and 5 × 10⁻³⁷ s inputs are the page's own variant. The page itself was correct (its Ω formula rightly cites slide 10). Found by the review of High School lesson 0.9; fixed with the owner's approval.
