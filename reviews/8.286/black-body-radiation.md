---
page: content/year-4/8.286/black-body-radiation.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-16-black-body-radiation-and-the-early-history-of-the-universe-part-ii/ (read via the local Lecture 16 materials below. The URL itself was not fetched.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/20c456df533b6f63151a28bfe9df60eb_6b83DypBeYg.pdf (read via a local copy, t16.pdf, split by PDF page as p16.txt. Pages 16–30 were read in full. Printed footers were checked with pdftotext on pp. 16, 22, 24, 25, 26, 28, 29 and 30, and they equal the PDF page numbers.)
  - Lecture 16 slides, MIT8_286F13_lec16.pdf (read via a local copy, s16.txt). The three slides only summarise Lecture 15 (E = mc², photons, u ∝ 1/a⁴). None of this page's formulas are on a slide.
  - Lecture 17 transcript, 156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (local t17.txt). Searched, to check the claims about Lecture 17.
  - Lecture 16 transcript pp. 1–15. Searched only, to check the "piston argument" and p = u/3 remark.
  - https://arxiv.org/abs/0911.1955 (read: abstract page)
verdict: needs-changes
---

# Review: Black-body radiation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Bracketed note after the `T ∝ 1/a` formula ("In this answer the transcript has Guth saying 'protons' …") | The "protons" slip is on **p. 25**, while Guth states the entropy formula: "the same g that appears in two cases, 2 in both cases for protons by themselves". The answer to the student's question about T ∝ 1/a is on p. 26, and it has no such slip. | Places the slip "in this answer", meaning the T ∝ 1/a answer on p. 26. | Move the note to the entropy paragraph, after "with the same $g$ as in $u$". For example: "[On p. 25 the transcript has 'protons' where Guth means photons.]" |
| 2 | warning | Neutrinos section, "(Why no $\Delta m_{31}^2$ is quoted, Guth admits he doesn't know; it is fixed by the other two.)" | p. 29: Guth says "I think it's just the lack of knowledge … I'm sure it is defined", and that he does not know more. He does **not** say that it is fixed by the other two. | The clause "it is fixed by the other two" reads as part of what Guth says. It is also only true up to sign: Δm²₃₁ = Δm²₃₂ + Δm²₂₁, and the sign of Δm²₃₂ (the mass ordering) was unknown. | Mark it as the page's own remark and make it precise. For example: "(Guth says he doesn't know why no $\Delta m^2_{31}$ is quoted. In fact it follows from the other two, $\Delta m^2_{31} = \Delta m^2_{32} + \Delta m^2_{21}$, once the sign of $\Delta m^2_{32}$ is known.)" |
| 3 | warning | Worked example, last step: "Photons are only about 60% of today's radiation; the other 68% on top comes from …" | (Page-internal arithmetic.) | Mixes two bases. 60% is the photon share of the total, while 68% is relative to the photons. A reader may read "the other 68%" as 60% + 68%. | Write: "Photons are only about 60% of today's radiation. Neutrinos add another 68% on top of the photon value (about 40% of the total)." |
| 4 | warning | "Later developments" callout | — | "cosmological data now limit the sum of the three masses to a fraction of an eV" has no source. Fixsen (2009) predates the 2013 lecture, so it is not strictly a later development. | Add a reference for the Σm bound, e.g. Planck 2018 (Σm < 0.12 eV, 95%) or the PDG review, with `location`. Optionally move the Fixsen sentence to the worked example, cited as `cite="fixsen2009"` on the statement of T₀. |
| 5 | info | Neutrinos section, last sentence: "Their contribution to black-body radiation is the first topic of Lecture 17." | t17: Lecture 17 opens with a review of the radiation-dominated universe and the black-body formulas, then has a Q&A on entropy and the arrow of time. Only then does it say "we're going to begin with neutrinos". | "first topic" | Write "the first new topic of Lecture 17". |
| 6 | info | "Until around 2000 they were thought to be massless" | p. 26: "Until around 2000 or so". Lecture 17 instead says "until around 1990 or so". | Follows Lecture 16. | Acceptable. Optionally note that the first convincing evidence (Super-Kamiokande) came in 1998. |
| 7 | info | "The classical disaster", "each mode gets $kT$" | p. 21: the transcript says "the energy of a harmonic oscillator should just be kT per degree of freedom", which is a slip for kT per oscillator. | States the correct physics (kT per mode). | A bracketed note is optional (writing rule 4), because the page silently corrects it. |
| 8 | info | Quiz 2 explanation, "Jeans's paradox" | pp. 21–22: "Jean's Paradox". | "Jeans's paradox (also known as the ultraviolet catastrophe)". | Fine. Optionally mention the usual name, Rayleigh–Jeans law. |

### Formula and citation check (all on the board; the slides do not contain this material)
- E = nhν = nħω is on p. 22. **Correct.** Guth's words are "quantized as some integer times h times nu … think of it as n times h nu, or h bar omega". The n + ½ remark, "It will be important later actually", is also on p. 22, and the page reports it correctly. "(board)" cannot be confirmed from the transcript alone, but it is plausible.
- u = g (π²/30)(kT)⁴/(ħc)³ with g = 2 is on p. 24. **Correct.** The sentence begins at the very bottom of p. 23 ("the energy density is equal to"), and the formula itself is on p. 24.
- p = u/3 is on p. 24. **Correct.** "agreeing with the piston argument of Lecture 15" is acceptable: the piston argument was given in Lecture 15, and Lecture 16 p. 8 recaps it and deduces p = u/3 from it.
- n = g* (ζ(3)/π²)(kT/ħc)³ with ζ(3) = Σ1/n³ ≈ 1.202 is on p. 24. **Correct**, including the definition of ζ(3) and the value 1.202 ("to three decimal places").
- s = g (2π²/45) k⁴T³/(ħc)³ is on p. 25. **Correct.** The remarks about "same g" and the units of k and T, and the two polarisations, are also on p. 25.
- T ∝ 1/a(t) is on p. 26. **Correct.** It was spoken in the answer to a question. The page does not mark it "(board)", which is right.
- Δm²₂₁c⁴ = (7.50 ± 0.20)×10⁻⁵ eV² is at the bottom of p. 28, and Δm²₂₃c⁴ = (2.32 +0.12 −0.08)×10⁻³ eV² is on p. 29. "pp. 28–29" is **correct**. These values match the PDG 2012 tables Guth cites. Guth labels the second one "23", where PDG writes Δm²₃₂. The page keeps Guth's label, which is acceptable.
- "Guth's argument (transcript pp. 17–19)": the black-body argument runs from p. 17 (the definition of black) to p. 19 (filters, the name). **Correct.** The student exchange about cooling is on pp. 19–20.

### Slip notes
- "protons" for photons: the slip is real, but the page puts it in the wrong place. See item 1.
- "938 MeV, three million electron volts" is on p. 29. **Correct**, and the bracketed correction is right.

## Arithmetic and answer checks
All values were recomputed with a script (CODATA k, ħ, c, e; ζ(3) summed numerically).
- kT at 2.725 K = 3.7623e-23 J (page 3.762e-23, **correct**). ħc = 3.1615e-26 J·m (page 3.162e-26, **correct**).
- u_γ = 4.1717e-14 J/m³ (page 4.17e-14, **correct**).
- n_γ = 4.1050e8 m⁻³ = 410.5 cm⁻³ (page 4.11e8 and "about 410", **correct**; 4.1050 rounds to 4.11).
- u/n = 1.0163e-22 J = 6.343e-4 eV = 2.701 kT (page 1.01e-22 J, 6.3e-4 eV, 2.70 kT, **correct**). Analytically, this is π⁴/(30ζ(3)) = 2.701.
- 7.01e-14 / 4.1717e-14 = 1.680 (page 1.68, **correct**). The photon share is 1/1.680 = 59.5% (page "about 60%", **correct**). Cross-check: 1 + (21/8)(4/11)^{4/3} = 1.6813. At T = 2.725 K the Lecture 17 formula gives u_rad = 7.014e-14 J/m³, consistent with Guth's 7.01e-14.
- Plot: x/(eˣ−1) = 0.5820 at x = 1 (page 0.58, **correct**) and 4.540e-4 at x = 10 (page 0.00045, **correct**). The peak of x³/(eˣ−1) solves x = 3(1 − e⁻ˣ), giving x = 2.8214 with height 1.42144 (page point (2.821, 1.4214), **correct**). For small x, x³/(eˣ−1) → x², so the dashed classical curve x² is the right Rayleigh–Jeans comparison.
- The caption honestly states that the plotted functions are standard statistical-mechanics results that Guth refers to but does not write down. **Good.** "number of modes (∝ ν²)" is correct for the mode density per unit frequency.
- Cosmology callout: ρ = 3/(32πGt²) matches the flat radiation-dominated result on `radiation-dominated-universe` (Lecture 16 p. 15). **Correct.**
- Quiz 1: answer index 1, "Only the temperature T". **Correct** (pp. 16–17).
- Quiz 2: answer index 1. **Correct** (pp. 21–22).
- Quiz 3: answer index 1. **Correct** (pp. 22–23). "minimum ante" is Guth's phrase on p. 22. It is short, so it is fine.
- Quiz 4: answer index 1, "About 410". **Correct** (410.5 cm⁻³). The other options are 4, 41,000 and 4e8. The last one is the per-m³ value, a deliberate distractor that is clearly wrong per cm³.
- Quiz 5: answer index 1. **Correct** (pp. 27–28). "below 1 eV²" is true (both values are ≤ 2.4e-3 eV²).
- Flashcards: all formulas match pp. 24–25. "total entropy is conserved, so T ∝ 1/a" matches p. 26. The two polarisations match p. 25.

## Coverage and order
- The page follows the transcript order: introduction (p. 16) → cavity radiation and names (pp. 16–17) → black-body argument (pp. 17–19) and the student exchange (pp. 19–20) → classical modes and equipartition, Jeans's paradox (pp. 20–22) → quantisation and freeze-out (pp. 22–23) → long-wavelength question (p. 23) → u, p, n, ζ(3) (pp. 23–24) → entropy, s, polarisations (pp. 24–25) → T ∝ 1/a Q&A (p. 26) → neutrinos: massless until about 2000, cosmologically massless, flavours (pp. 26–27) → oscillation and the clock argument, photon pair-creation Q&A (pp. 27–28) → Δm² values, 938 MeV, mass and flavour eigenstates, Δm²₃₁ Q&A (pp. 28–29) → treated as massless, formulas postponed to Lecture 17 (p. 30). No segment is out of order.
- Left out, minor and acceptable: Guth's aside that the black-body idea is "important for some things in cosmology" (p. 17), the "measure of the disorder" wording for entropy (p. 24), "crucial for our survival" (p. 23), and the course logistics (quiz, office hour) on p. 30.
- Added, not in the lecture: the plot (honestly labelled), the CMB worked example (original numbers; Guth does not compute n_γ in this lecture), "also known as the ultraviolet catastrophe", and the "Later developments" callout.
- Claims about Lecture 17 were checked in t17.txt and are **correct**. Lecture 17 introduces neutrinos with the 7/8 fermion factor and T_ν = (4/11)^{1/3} T_γ, and writes u_rad,0 = (2 + (21/4)(4/11)^{4/3}) (π²/30)(kT)⁴/(ħc)³ = 7.01e-14 J/m³. That is the source of the factor 0.68 (21/8 × (4/11)^{4/3} = 0.681), although Guth never writes "0.68" himself. Lecture 17 also adds e⁺e⁻ pairs to g (g = 10¾ at about 1 s) and derives kT = (45ħ³c⁵/(16π³gG))^{1/4} t^{-1/2}. So "Lecture 17 adds neutrinos and electron–positron pairs to g and does exactly that" is accurate.

## Licensing
- `grep -il "rights reserved\|courtesy"` finds nothing in the Lecture 16 transcript or slide text. No third-party material is used.
- The text is rewritten. The short phrases quoted from Guth ("minimum ante", "we'd all freeze to death", "breaks the clock") are brief and attributed. No passage is copied verbatim. The plot is generated from formulas. The worked example is original. No OpenStax or LibreTexts material was found.

## Notes
- Fixsen reference verified: arXiv:0911.1955, D. J. Fixsen, "The Temperature of the Cosmic Microwave Background", ApJ 707, 916–920 (2009). The abstract gives 2.72548 ± 0.00057 K as the combined value (FIRAS recalibrated alone gives 2.7260 ± 0.0013 K). The page's `location` and callout value are **correct**. The worked example uses 2.725 K, a rounding of that value. That is fine, but the example does not cite the source where it uses the number (see item 4).
- The later-developments statements are true as of 2026 to my knowledge: current global fits give Δm²₂₁ ≈ 7.4–7.5e-5 eV² and |Δm²₃₂| ≈ 2.4–2.5e-3 eV², both below 1e-2 eV². Cosmological bounds on Σm_ν are about 0.07–0.12 eV (Planck 2018, DESI 2024). These were not checked against a fetched source in this review, which is why item 4 asks for a reference.
- The "(board)" labels could not be confirmed independently. The transcript does not describe the blackboard, but the slides certainly do not contain these formulas, so "board" is the right default.

## Resolution (2026-11-14, by the page author)

- Error 1: the "protons" slip note has moved to the entropy paragraph (p. 25). It is no longer attached to the T ∝ 1/a answer.
- Warning (Δm²₃₁): the page now says Guth puts this down to lack of knowledge. Our own bracketed note adds that its size follows from the other two, up to the unknown mass ordering.
- Warning (60% vs 68%): reworded to "photons are about 60% of the radiation; the neutrinos add another 68% of the photon value (1.68 = 1 + 0.68)".
- Warning (callout): added the Planck 2018 reference for Σm_ν < 0.12 eV. Fixsen 2009 is now cited where the worked example uses T₀ and is gone from the "later developments" callout.
- Info: "first topic" became "first new topic" for Lecture 17, and the page notes Guth's 2000 vs 1990 dates. No note added for the p. 21 per-degree-of-freedom wording, since the page already states the correct physics.
