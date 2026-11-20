---
page: content/year-4/8.286/flatness-problem.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-21-problems-of-the-conventional-non-inflationary-hot-big-bang-model/ (read: lecture page)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/3747051d1048b4df855d7574a3a8360c_PK1KNojfvMQ.pdf (read: transcript, pp. 12–20 checked page by page with pdftotext -f N -l N; printed footer = PDF page)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec21/ (read: slides; they hold no flatness-problem material, so they are not cited and not needed)
verdict: pass-with-notes
---

# Review: The flatness problem

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Radiation era" paragraph, bracketed note on p. 18 | p. 18: "this diverges even a little faster. It goes like t, rather than like t to the 2/3, which is a slightly slower growth." The most natural reading is that "which" refers to $t^{2/3}$ (the slower growth), and the sentence before says "a little faster". | "[On p. 18 the transcript calls $t$ 'a slightly slower growth' than $t^{2/3}$; it is faster.]" | This is probably not a slip; it is at most an ambiguous sentence. Drop the bracket, or reword it as "(the transcript's wording on p. 18 is ambiguous; $t$ grows faster than $t^{2/3}$)". |
| 2 | warning | "How close to 1 is Ω today?", last paragraph (circa 1980) | p. 13: "Omega was somewhere in the range of about 0.1 and 0.2, which is not nearly as close to 1 as what we know now, but still close to 1." On p. 19, "three orders of magnitude" weaker than $10^{-2}$ means $\lvert\Omega-1\rvert/\Omega \sim 10$, which fits $\Omega \approx 0.1$. | "known … only to within roughly an order of magnitude, with a lower end around 0.1" | The page's reading is fair and matches the arithmetic. A range of 0.1 to 0.2 would not be "still close to 1", so the transcript probably means "0.1 and 2" (likely, not confirmed). But the page quietly differs from the transcript. Per writing rule 4, add a short bracket, e.g. "[the transcript has '0.1 and 0.2', most likely a transcription of 0.1 to 2]". |
| 3 | warning | "Later developments" callout | (not in lecture) | Planck 2018 gives $\Omega_k = 0.0007 \pm 0.0019$; "a few times sharper than in Guth's 2013 numbers" | The 2018 value matches my recollection of Planck 2018 VI (TT,TE,EE+lowE+lensing+BAO, 68%), but I could not check it against the paper here. The 2013 number Guth quoted ($-0.0010^{+0.0062}_{-0.0065}$ in Planck 2013 XVI, as I recall) was a **95%** limit, while ±0.0019 is **68%**. Comparing like with like, the gain is about 1.5–2×, not "a few times". Say "roughly twice as tight", or state both confidence levels. Also add the Planck 2018 paper to `references` so the claim is sourced. |
| 4 | info | Present bound paragraph, bracket on sign convention | p. 12: "$\Omega_0 - 1 = -0.0010 \pm 0.0065$" | Page notes that Planck published $\Omega_k = 1 - \Omega$, so the central value of $\Omega_0 - 1$ has the opposite sign | The convention is right: Planck defines $\Omega_K = -Kc^2/(a_0H_0)^2 = 1 - \Omega_{\rm tot}$. From memory, the 2013 XVI value was $\Omega_K = -0.0010^{+0.0062}_{-0.0065}$ (95%, Planck+lensing+WP+highL+BAO). I believe this but could not confirm it here, so treat it as uncertain. One consequence: in Planck's convention the larger error bar is on the **positive** side of $\Omega_0 - 1$, giving $0.0075/1.0075 = 0.0074$ rather than 0.0076. This is negligible, and the page correctly follows Guth's own (sign-flipped) reasoning. No change needed. Optionally mention that Planck's error was a 95% limit (Guth calls it "one sigma" on p. 16; the page does not repeat that claim). |
| 5 | info | "Why one second?" | p. 14: "that's where this problem was first discussed by Dicke and Peebles back in 1979" | States as fact that Dicke and Peebles "first discussed the problem in 1979" | Dicke raised the issue earlier, in his 1969 Jayne Lectures (*Gravitation and the Universe*, 1970). I am fairly confident of this but have not verified it here. Attribute the claim: "Guth credits Dicke and Peebles (1979)…". |
| 6 | info | Present bound paragraph | p. 16 says "the more accurate thing would be 0.076" (a slip for 0.0076) | Uses 0.0076 | Correct. Optionally add a bracket per rule 4. Not required. |

## Arithmetic and answer checks
All values were recomputed with python3 (1 yr = 3.156 × 10^7 s).
- Algebra: dividing $H^2 = \frac{8\pi}{3}G\rho - kc^2/a^2$ by $\frac{8\pi}{3}G\rho$ gives $1/\Omega = 1 - 3kc^2/(8\pi G\rho a^2)$. Hence $(\Omega-1)/\Omega = 3kc^2/(8\pi G\rho a^2) = AT^2/\rho$ with $A = 3kc^2/(8\pi G a^2T^2)$. This is exact, as the page and p. 15 say. Correct.
- Scalings: matter era $T^2/\rho \propto a^{-2}/a^{-3} = a \propto t^{2/3}$; radiation era $T^2/\rho \propto a^{-2}/a^{-4} = a^2 \propto t$. Correct.
- Negative-side bound: $0.0075/0.9925 = 0.00756 \approx 0.0076$. Correct (within Guth's convention).
- Worked example: $47{,}000/13.8\times10^9 = 3.41\times10^{-6}$; $(\cdot)^{2/3} = 2.26\times10^{-4}$; 47,000 yr $= 1.48\times10^{12}$ s; $1/(1.48\times10^{12}) = 6.74\times10^{-13}$; product $0.0076 \times 2.26\times10^{-4} \times 6.74\times10^{-13} = 1.16\times10^{-18} \approx 1.2\times10^{-18}$; times $10^{-35}$ gives $1.2\times10^{-53}$. All correct.
- Plot: $\log_{10}(13.8\times10^9\ \text{yr}/\text{s}) = 17.639$ and $\log_{10}(5\times10^4\ \text{yr}/\text{s}) = 12.198$, both matching the expression. For B = −2: y(0) = −17.83 (label −17.8, correct), y(12.198) = −5.63 (label −5.6, correct), y(17.64) = −2.00 (correct). Caption value $1.5\times10^{-18}$ (correct). For B = 1: y(0) = −14.8, which is $\approx 10^{-15}$, consistent with the 1980 statement. "About 1 is the 1980 situation" is consistent with $\Omega_0 = 0.1$: $\log_{10} 9 = 0.95$.
- Quiz 1 (answer 1): correct.
- Quiz 2 (answer 1): correct. The distractor $kc^2/a^2$ is wrong, as it should be.
- Quiz 3 (answer 1, "like $t$"): correct.
- Quiz 4 (answer 2, ~$10^{-18}$): the explanation's product is $1.495\times10^{-18}$, matching the stated 1.5e-18. Correct.
- Quiz 5 (answer 1, $10^{-15}$): with $\lvert\Omega_0-1\rvert/\Omega_0 = 9$ the value is $1.3\times10^{-15}$. Correct.
- Flashcards: all three are correct.

## Coverage and order
- Formula citations were all checked against the transcript footer pages. Planck limit p. 12 (correct); Friedmann / $\rho_c$ / Ω p. 14 (correct); $aT \approx$ const pp. 14–15 (correct; the "squiggle" remark is at the top of p. 15); rearranged equation p. 15 (correct); bound < 0.01 p. 16 (correct); matter-era relation p. 17 (correct; it is spoken on p. 17 and discussed further at the top of p. 18); radiation-era relation p. 18 (correct); $\lvert\Omega-1\rvert \lesssim 10^{-18}$ p. 18 (correct; it starts at the foot of p. 18 and continues on p. 19). Everything here was on the board; the slides contain no flatness material, so "(board)" is right throughout.
- The page follows the transcript order: definition of the problem (p. 12), Planck value (p. 12), the 1980 remark (p. 13), unstable equilibrium and pencil (p. 13), why one second (p. 14), Friedmann + $aT$ (pp. 14–15), rearrangement (p. 15), present bound (p. 16), the matter era first and then the radiation era, working backwards as Guth does (pp. 16–18), result and the 1980 comparison (pp. 18–19), "hope for an explanation" (p. 19), student question on zero energy (p. 20).
- No MIT segment in pp. 12–20 is left out. Additions beyond the lecture: the plot, the extrapolation to $10^{-35}$ s in the worked example (clearly labelled as an assumption), and the vacuum-energy remark in the plot caption (correct in substance; Guth does not discuss it here).
- The prerequisites `horizon-problem`, `matter-radiation-equality` and `open-closed-flat` all exist.

## Licensing
- The transcript and slides contain no "All rights reserved" or "Courtesy of" notices (grep). The page uses no slide material; the only third-party image in the slides (Wikimedia Standard Model chart, slide 6) is not used.
- No long verbatim copying. Some short phrases follow the transcript closely ("rapidly trail off towards 0", "a hope for an explanation", "pencil … standing on its tip"). These are short and acceptable.
- The worked example is original (Guth gives no numerical example beyond the bound itself).
- No OpenStax or LibreTexts material.

## Notes
- leadsTo Lecture 23 ("Inflation drives Ω towards 1"): this is consistent with p. 19 ("inflation, which you'll be learning about in the next few lectures, provides … a mechanism that drives the early universe towards Omega equals 1") and with the syllabus title of Lecture 23 ("Inflation"). I did not read the Lecture 23 transcript to confirm that the flatness solution appears there specifically, so this is likely but unverified.
- `source.readings` lists only the transcript (the sibling `horizon-problem` page also lists the slides). This is fine because no slide is cited.
- The Planck 2013 XVI and Planck 2018 VI figures in findings 3 and 4 are from my memory of those papers and were not fetched. They are marked uncertain where they matter.

## Resolution (2026-11-14, by the page author)

- Warning 1: removed the bracket calling p. 18 a slip; the wording is ambiguous rather than wrong.
- Warning 2: added a bracket noting the transcript's "0.1 and 0.2" and that a range of about 0.1 to 2 is probably meant.
- Warning 3: the later-developments callout now gives the Planck 2018 value as a 68% bound and calls it a modest tightening, without claiming it is a few times sharper.
- Info: Dicke and Peebles are now credited as Guth credits them ("whose 1979 discussion he credits with introducing the problem"). The sign-convention bracket and the silent use of 0.0076 are left as they are.
