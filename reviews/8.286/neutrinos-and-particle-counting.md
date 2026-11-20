---
page: content/year-4/8.286/neutrinos-and-particle-counting.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-17-black-body-radiation-and-the-early-history-of-the-universe-part-iii/ (not fetched; the lecture materials were read from local copies listed below)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/156c9d2649df71dc57a05251331238a1_KY91PsqCy_8.pdf (read from a local copy, t17.pdf, split by PDF page as p17.txt. Pages 1–16 were read in full. Printed footers were checked with pdftotext on pp. 4, 8, 9, 10, 11, 12 and 13, and they equal the PDF page numbers.)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/mit8_286f13_lec17/ (read from a local copy, s17.txt. Five slides: a title slide, then four slides summarising Lecture 16. None of this page's formulas are on a slide.)
verdict: pass-with-notes
---

# Review: Neutrinos and counting particle species

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Recap, "Entropy, slide 5 adds, is conserved … **except inflation**: if inflation is right, nearly all of today's entropy was produced in the phase transition at its end." | Slide 5 says only "In the early universe, entropy is essentially conserved for all processes except for inflation." The claim that nearly all of today's entropy came from the phase transition at the end of inflation is **spoken**, on transcript p. 4. | Puts both parts under "slide 5 adds". | Split the attribution. For example: "Entropy, slide 5 adds, is conserved … except inflation. If inflation is right, Guth says, nearly all of today's entropy was produced …" |
| 2 | warning | "Later developments" callout | Not in the lecture (post-2013 facts). | The statements are accurate as far as I can verify (to mid-2026): no confirmed neutrinoless double-beta decay, and no direct detection of the cosmic neutrino background. However, the callout cites nothing (`references: {}`) and gives no date. It also leaves out the **indirect** evidence for the neutrino background (N_eff ≈ 3 from Planck CMB data and from BBN), which a reader might want to know about. | Add one reference with `location`, e.g. the PDG review "Neutrino mass, mixing and oscillations", or the KamLAND-Zen 2024 limit for 0νββ. Write "As of 2026, …". Optionally add: "its presence is inferred indirectly from the CMB and from nucleosynthesis (N_eff ≈ 3)". |
| 3 | info | Recap, "Guth's slides (1–5) review Lecture 16" | Slide 1 is the title slide. Slides 2–5 contain the summary. | "slides (1–5)" | Write "slides 2–5". |
| 4 | info | Plot caption, "which the lecture uses but does not write down" | Pp. 7–8: Guth argues only from state counting with weights e^{-E/kT}. He does not mention the Bose–Einstein or Fermi–Dirac occupation numbers. | "uses" | Write "which underlie the lecture's state counting but are not written down". |
| 5 | info | Worked example, step "Perspective": "Hundreds of neutrinos pass through every cubic centimetre of you" | (Page-internal.) | The computed quantity is a number density: about 336 per cm³ present at any moment. | Write: "About 336 background neutrinos are in every cubic centimetre, including the ones inside you, yet …" |
| 6 | info | "Why the neutrinos are colder", energy-tracking argument | P. 11: Guth writes the energy equation on the board and fumbles it ("du dt is equal to minus 3h, times rho plus p … And this might be a u"). | Leaves the equation out and keeps only the point that the energy evolution depends on the pressure. | Acceptable. This avoids repeating the slip. |

### Formula and citation check
Every formula is cited to the transcript (reading1) as "(board)". The transcript supports the page numbers. The transcript alone cannot confirm that each formula was written on the board, but it is plausible: Guth says "I'll write it just so we can keep track" on p. 8, "times dot, dot, dot" on p. 10, and he dictates the u_r,0 formula on pp. 12–13.
- Fermion factors 7/8 (g) and 3/4 (g*): **p. 8, correct.** This is the first paragraph of p. 8.
- g_ν = 7/8·3·2·1 = 21/4 and g*_ν = 9/2: **pp. 8–9, correct.** The factors are listed on p. 8, and the results 21/4 and 9/2 are on p. 9.
- g_e± = 7/2 and g*_e± = 3: **p. 10, correct.**
- g_total = 2 + 21/4 + 7/2 = 10¾: **pp. 10–11, correct.** The threshold condition is on p. 10, and the sum is on p. 11.
- T_ν = (4/11)^{1/3} T_γ: **p. 12, correct.**
- u_r,0 = [2 + (21/4)(4/11)^{4/3}] (π²/30)(kT_γ)⁴/(ħc)³ = 7.01 × 10⁻¹⁴ J/m³: **pp. 12–13, correct.** The expression begins on p. 12. The rest of it, and the value 7.01 × 10⁻¹⁴, are on p. 13.

## Arithmetic and answer checks
I recomputed every number with a script (Simpson integration, CODATA constants, T_γ = 2.725 K):
- Plot caption: ∫x³/(eˣ+1) ÷ ∫x³/(eˣ−1) = 0.87500 = 7/8, and ∫x²/(eˣ+1) ÷ ∫x²/(eˣ−1) = 0.75000 = 3/4. The mean energy per particle is 2.701 kT for bosons and 3.151 kT for fermions. **Correct.** The curve maxima are 1.42 for bosons and 1.28 for fermions, so both fit the plot range [0, 1.5].
- (4/11)^{1/3} = 0.7138, so T_ν = 1.945 K ≈ 1.95 K. **Correct.**
- Number ratio (9/2)/2 × 4/11 = 9/11 = 0.818. n_γ = 410.50 /cm³, n_ν = 335.9 ≈ 336 /cm³, and 112.0 per flavour. **Correct.**
- u_ν/u_γ = (21/8)(4/11)^{4/3} = 0.6813 ≈ 0.681. u_γ = 4.172 × 10⁻¹⁴ J/m³, and the total is 7.014 × 10⁻¹⁴ J/m³. **Correct.**
- The g products are 21/4, 9/2, 7/2, 3 and 10.75. **Correct.**
- Quiz 1 (answer 1, exclusion principle): correct.
- Quiz 2 (answer 2, 21/4): correct.
- Quiz 3 (answer 2, 10¾): correct.
- Quiz 4 (answer 1, entropy went to the photons after neutrino decoupling): correct, and it matches p. 12.
- Quiz 5 (answer 1, the right-handed antineutrino): correct, and it matches p. 14.
- The explanations are correct.
- Flashcards: all five are correct.
- Bracketed note on "about 2.4" K: **verified.** On p. 12 Guth says "The temperature I think ends up being about 2.4 degrees Kelvin". The correct value is (4/11)^{1/3} × 2.725 K = 1.95 K. The note follows writing rule 4.
- "Out of a hat" in Lecture 15: p. 13 has "this formula that I pulled out out of hat when we first started talking about energy density radiation … used this to calculate when radiation matter equality took place". `matter-radiation-equality.mdx` is Lecture 15 and uses 7.01 × 10⁻¹⁴ J/m³. **Consistent.**
- Muon threshold of 106 MeV and electron threshold of ½ MeV: p. 11. **Correct.** The transcript's "m sub nu" on p. 10 is a transcription error for m_μ, and the page correctly writes m_μ.

## Coverage and order
The page follows the order of transcript pp. 1–16:
- recap (pp. 1–4);
- the entropy and arrow-of-time question (p. 4);
- neutrino flavours and oscillations (p. 5);
- helicity and the rocket/Lorentz argument (pp. 6–7);
- the student's question about a massless spin-½ particle and Lorentz mixing of spin states (pp. 9–10);
- spin–statistics and state counting (pp. 7–8), then the 7/8 and 3/4 factors and energy per particle (p. 8);
- g_ν and g*_ν (pp. 8–9), then g for e± (p. 10), then 10¾ (p. 11);
- the entropy transfer, T_ν and the undetected background (pp. 11–12), then u_r,0 (pp. 12–13);
- Dirac and Majorana masses (pp. 13–14), then lepton number and the student's point about oscillations (pp. 15–16), then counting in the Majorana case (p. 16).

The page moves the spin-½ Q&A (pp. 9–10) up next to the helicity discussion. This is a sensible regrouping, but it is a small change from MIT's order.

Omitted:
- p. 5: Guth's remark that neutrinos were thought massless "until around 1990 or so". Omitting it is fine. Lecture 16 said "around 2000", and the decisive evidence came from Super-Kamiokande in 1998.
- p. 15: the Q&A on what "a Dirac mass like the electron's" means: it enters the equations of motion in the same way, with left- and right-handed electrons related by parity. This is minor. Optionally add one clause to the Dirac bullet.
- p. 15: the Q&A "doesn't there have to be an antiparticle?" This is covered implicitly by "its own antiparticle — like the photon".

Added: the FD/BE spectrum plot and the "neutrino sea" worked example. Both are labelled as the page's own work. The worked example is original: Guth does not compute n_ν or T_ν numerically in this part.

`leadsTo` Lecture 18 ("Cosmic Microwave Background Spectrum and the Cosmological Constant, Part I" in `_course.json`): fair. The cosmology callout refers to "the next page", which is `temperature-and-decoupling` (Lecture 17, order 2). This is correct.

## Licensing
- I ran `grep -il "rights reserved\|courtesy"` on the transcript and slide text, and it found nothing. No third-party material is used.
- The plot is generated from formulas. It is not a copied figure.
- No OpenStax or LibreTexts material.
- No verbatim copying beyond short quoted phrases ("out of a hat", "about 2.4", "something of a mystery"). The text is rewritten throughout.

## Notes
- Arrow-of-time attribution (p. 4): accurate. Guth says that ten physicists might give ten answers, that the other laws are essentially time-reversal invariant, the "usual story" of a low-entropy start, and that he is writing a paper on the growth of entropy and the arrow of time with "a slightly different idea". The page does not try to identify the paper, which is correct, because the transcript gives no title.
- The Dirac and Majorana section matches pp. 13–16 closely. That includes Guth's point that the Majorana case needs non-conservation of lepton number, and that total lepton number might still be conserved even though oscillations violate the individual lepton numbers. The page's "Either way, the counting above stands" is supported. For the Dirac case it relies on the argument that the right-handed states are never produced (p. 14), and the Dirac bullet states that argument.
- Uncertain: "(board)" for each formula cannot be confirmed without the video. The transcript wording is consistent with board work, and no formula is on the slides.
- I found no errors, so the verdict is pass-with-notes. Item 1 (slide vs transcript attribution) and item 2 (an unsourced later-development callout) should be fixed before setting `status: reviewed`.

## Resolution (2026-11-14, by the page author)

- Warning 1: the page now separates the two claims. Slide 5 says entropy is conserved except during inflation; the claim that today's entropy came from the end of inflation is Guth speaking (transcript p. 4).
- Warning 2: the later-developments callout is now dated "as of 2026", cites KamLAND-Zen (PRL 130, 051801, arXiv:2203.02139) and Planck 2018, and adds the indirect evidence N_eff = 2.99 ± 0.17.
- Info: "slides 2–5" (slide 1 is the title slide). The plot caption says the lecture argues only from counting states. "Hundreds pass through every cm³" became "about 336 are present in every cm³". The two omissions (the p. 11 energy equation and the p. 15 Dirac Q&A) are left as they are.
