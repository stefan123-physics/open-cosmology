---
page: content/year-4/8.286/higgs-field.mdx
reviewed: 2026-11-14
sources_read:
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/resources/lecture-22-game-plan/ (read; local copy of the lecture page, title "Lecture 22: The Higgs Field and the Cosmological Magnetic Monopole Problem", links the transcript PDF below; no slides for this lecture)
  - https://ocw.mit.edu/courses/8-286-the-early-universe-fall-2013/3ef27cdafbe29bfb9991e9265544754e_seBwiL9InII.pdf (read; pp. 1-13 compared in full; footer page numbers checked with pdftotext against PDF pages 3, 4, 7, 8, 12)
  - 8.286 Lecture 21 transcript (read p. 7 and p. 28 only, for the identity of the substitute lecturer)
verdict: pass-with-notes
---

# Review: The Higgs field and spontaneous symmetry breaking

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Direction in an abstract space", last paragraph | p. 13: "four real parameters ... they are isomorphic to sort of rotations in a three space and you're adding one constraint" (garbled answer) | Restates in the page's own voice: "four real parameters (two complex numbers), like rotations in a three-dimensional space, and the breaking adds one constraint" | This repeats a lecturer slip without a bracket (writing rule 4). Correct reading: the condition $\lvert h\rvert = 1$ is one constraint on four real numbers, so the minima form a 3-dimensional set, a 3-sphere (as the plot caption already says). SU(2) as a space is also a 3-sphere. Rephrase that way, or add a bracketed note. |
| 2 | warning | "Direction in an abstract space" and the Higgs-field formula | p. 6-7: breaking SU(2) picks a direction and leaves a U(1). p. 7: $h \to Uh$ with $U \in$ SU(2) | Gives both statements. The hypercharge bracket (section "Symmetries that weren't always broken") only partly covers the problem | With SU(2) acting alone, any non-zero doublet breaks SU(2) **completely**: no SU(2) element except the identity leaves a non-zero $h$ unchanged. The U(1) that survives exists only because $h$ also carries hypercharge ($h \to e^{i\alpha/2}Uh$), so the unbroken group is a combination of the two. The page's existing bracket is correct. Consider adding one sentence here that links the "circle on a sphere" picture to it, so readers do not think SU(2) alone breaks to U(1). |
| 3 | warning | "Gauge groups, briefly", student question about non-Abelian | p. 5-6: the masses of the weak gauge bosons are "connected to the non-abelian nature ... not the whole answer" | Reported with the lecturer's hedge | It is attributed, but physically misleading: gluons are non-Abelian and massless, and the W and Z masses come from the Higgs mechanism. Suggest a bracket: [The W and Z masses come from symmetry breaking, not from non-commutativity; gluons are non-Abelian yet massless. One direct consequence of being non-Abelian is that the gauge bosons carry the charge themselves and so interact with each other.] |
| 4 | warning | "Symmetries that weren't always broken", first paragraph | p. 6: "in a perfect world they would actually be SU(2) governing both" at 10^16 GeV | "a single symmetry would govern both" | The bracket fixes the energy scale, but "a single symmetry" is still the lecturer's simplification. Above the electroweak scale the symmetry is restored as SU(2) × U(1)_Y, still two factors with two couplings. A single simple group (e.g. SU(5)) appears only at the GUT scale. Add this to the existing bracket. The bracket's other statements (EM U(1) as a mixture with hypercharge; electroweak breaking at around 100 GeV against 10^16 GeV for GUTs) are physically correct and fairly worded. |
| 5 | info | Same section, list of bosons | p. 5: SU(2) with Z, W+, W-; U(1) with the photon | Same | The Z, like the photon, is a mixture of the SU(2) $W^3$ and the hypercharge boson $B$. You could add "and the Z" to the existing bracket. |
| 6 | info | "Direction in an abstract space", student question (circle on a sphere) | The question and answer come at p. 13, after the mass discussion | Moved forward to the SU(2) picture (p. 6 material) | A sensible regrouping, but it differs from MIT's order. Optionally say "(a student later asked ...)". |
| 7 | info | Consequence 1, muon and tau | p. 11: the question is "[INAUDIBLE]"; p. 12 he says "yes including mu and tau ... this one I'm very confident on" | "Asked about the muon and tau, the lecturer believes the same holds" | The topic of the question can be inferred from p. 12 but is not audible in the transcript. Acceptable. On p. 12 he says he is "very confident", which is stronger than "believes". |
| 8 | info | Opening paragraph, Hamlet joke | p. 1-2: the instructor is listed as "W. Shakespeare" but the teacher turns out to be "Warren Shackspeare" | "finding someone other than Shakespeare at the front" | A fair paraphrase. |
| 9 | info | Consequence 3 | p. 13: the Higgs field becoming non-zero leads to "the universe is filled with magnetic monopoles" | Body: "The universe fills with magnetic monopoles". Summary: "in grand unified theories" | The Summary's qualification is correct physics (electroweak breaking alone produces no monopoles). Consider adding "in grand unified theories" to the body as well. |
| 10 | info | "The Higgs field", paragraph on the shape of $V$ | p. 9: early on the field is "up here where the potential energy is very high" | Same | Fine as a description of the zero-temperature $V$. In the toy plot, by contrast, $h = 0$ is the true minimum at high $T$. A half-sentence linking the two pictures would help, but it is optional. |

## Formula citations (all checked against transcript footers; this lecture has no slides, so every equation is board material cited by transcript page)
- Elements of U(1), $z = e^{i\theta}$: p. 3. Correct.
- $\psi \to e^{ie\Lambda}\psi$: p. 4. Correct. The lecturer writes $e_0$ for the charge and laments the notation. The page's $e$, its "$\hbar = c = 1$" and its sign-convention caveat are fine. The classical shift $A_\mu \to A_\mu + \partial_\mu\Lambda$ (p. 3) is described in words only, which is acceptable.
- Higgs doublet and $h \to Uh$: cited p. 7. The doublet is on p. 7, and the transformation sentence runs from the bottom of p. 7 onto the top of p. 8 ("This is / what they look like in a new gauge"). p. 7 is acceptable; "pp. 7-8" would be more exact (info).
- $V = V(\lvert h\rvert^2)$: p. 8. Correct. The transcript says only "the following combination of the fundamental fields", so the explicit $\lvert h_1\rvert^2 + \lvert h_2\rvert^2$ is inferred from the board. It is the correct invariant.
- $m = \hbar\omega_\text{min}/c^2$: p. 12. Correct. Using $\omega_\text{min}$ for the rest mass is a correct sharpening of the lecturer's "for every oscillation frequency omega there's an associated mass".

## Arithmetic and answer checks
- Toy potential $V = (x^2-1)^2 + 2s x^2$: $dV/dx = 4x(x^2 - 1 + s)$, so the minima are at $x^2 = 1 - s$ for $s < 1$, and the only minimum is $x = 0$ for $s \ge 1$. With $s = (T/T_c)^2$ the transition is at $T = T_c$, as the caption says. At $s = 0$ the minimum value is 0 and $V(0) = 1$, both visible in the range [-0.2, 3]. The caption marks the plot clearly as "An illustrative toy model, not from the lecture". The "(in fact a 3-sphere)" remark is correct. Possible note: in this toy model the transition is second order, while lattice studies show the Standard Model electroweak transition is a smooth crossover (info only).
- Quiz Q1 (answer index 1, local phase $e^{ie\Lambda}$): correct, and the explanation matches p. 4.
- Quiz Q2 (answer 1, gauge invariance gives $\lvert h\rvert^2$): correct. Matches p. 8, including the spherical-symmetry analogy.
- Quiz Q3 (answer 1, random choice among equivalent minima): correct. Matches pp. 9-10. The water-freezing explanation matches pp. 10-11.
- Quiz Q4 (answer 1, electrons and neutrinos distinct, quarks and charged leptons get mass): correct. The distractor "photons acquire mass" is correctly wrong.
- Flashcards: the SU(n) and U(1) definitions, the Higgs doublet, and $m = \hbar\omega_\text{min}/c^2$ are all correct.
- Later-developments callout: Higgs mass about 125 GeV (measured 125.1 GeV) is correct. Discovery in 2012 is correct (before the lecture, which refers to it). LHC coupling measurements agreeing with the SM so far is correct. KATRIN $m_\nu < 0.45$ eV (90% CL; published in Science in 2025) is correct. A cosmological bound on $\Sigma m_\nu$ of "less than roughly 0.1 eV" is consistent with Planck 2018 (< 0.12 eV) and DESI 2024/2025 (about 0.06-0.07 eV). Suggestions (info): say that this bound assumes ΛCDM, and that oscillations require $\Sigma m_\nu \gtrsim 0.06$ eV, so the two are now close to each other. The material is correctly placed under "Later developments".

## Coverage and order
- The page covers transcript pp. 1-13 up to the monopole remark: the game plan, the Hamlet joke, SU(3)×SU(2)×U(1), the U(1) phase and classical gauge freedom, the Dirac field phase, the non-Abelian question, electroweak symmetry and the 10^16 GeV remark, the SU(2)-as-sphere picture, the Higgs doublet, gauge-invariant $V$, minima at non-zero $\lvert h\rvert$, the measurement question, the gravity question, freezing water, and the three consequences (including the neutrino mass, the jury-rigged masses and generations). Nothing substantive from pp. 1-13 is missing. The ∇·B monopole sentence at the bottom of p. 13 is left to the monopole page, which is appropriate.
- The order follows the transcript, except that the p. 13 SU(2)/U(1) circle question is moved forward (item 6).
- Lecturer identification: the Lecture 22 transcript never names the lecturer. Lecture 21 names him twice: p. 7 ("you'll be learning about next time from Scott Hughes") and p. 28 ("Scott Hughes will pick up this discussion next Tuesday"). The page's wording, "Scott Hughes, according to Guth at the end of Lecture 21", is supported and fairly hedged. The p. 3 remark "Some of you here are in 807 with me" is consistent with this but does not prove it.
- leadsTo Lecture 23 ("Inflation", slug confirmed in `_course.json`): the claim that inflation is driven by a scalar field held away from the minimum of its potential matches the standard false-vacuum account Guth gives. The Lecture 23 transcript was **not** read in this review, so the attribution to that lecture is plausible but unverified.

## Licensing
- The transcript carries the standard OCW Creative Commons notice. `grep` finds no "rights reserved" or "courtesy" text. The lecture has no slides, and the page uses no MIT figures. The plot is generated from a formula.
- No OpenStax or LibreTexts material.
- A 7-word overlap scan found only short phrases plus one near-verbatim sentence: "with spherical symmetry, the electrostatic potential can only depend on the distance from the charge" (transcript p. 8: "if you're working in spherical symmetry the electrostatic potential can only depend on the distance from a point charge"). It is one sentence of an analogy, so the risk is low, but rewording it is suggested (info). "U(1) 'could be an SU(1)'" is a marked quotation, which is fine.

## Notes
- Bracketed corrections:
  - (a) SU(1) is trivial: correct and fair. The lecturer's reason for dropping the S (p. 2, "its determinant is 1 if ... modulus is one") confuses modulus with determinant. The bracket handles this gently.
  - (b) EM U(1) as a mixture with hypercharge, and 100 GeV against 10^16 GeV: correct. See items 2, 4 and 5 for small extensions.
  - (c) SU(2) as the double cover of SO(3): correct. The lecturer said "isomorphic" (p. 6), which is wrong globally; the two groups are only locally isomorphic.
- Items 1 and 3 are lecturer simplifications repeated without a bracket. Writing rule 4 asks for a short bracket in such cases. They are warnings, not errors, because item 3 is attributed and hedged, and item 1 is a loose analogy. No formula, page number or quiz answer is wrong, so the verdict is pass-with-notes.
- The source URL slug `lecture-22-game-plan` is odd but is MIT's real slug, and the reading URL hash matches the transcript linked from that page.

## Resolution (2026-11-14, by the page author)

- Warning 1 and 2: the p. 13 answer is now attributed to the lecturer, with a bracket explaining that |h| = const is one constraint on four real numbers (minima form a 3-sphere) and that the electromagnetic U(1) survives only through hypercharge.
- Warning 3: added a bracket that the mass–non-Abelian link is loose (gluons are non-Abelian and massless; W and Z masses come from symmetry breaking).
- Warning 4: reworded to "one unbroken symmetry" as the lecturer's picture, and the bracket now says the electroweak symmetry above ~100 GeV is still SU(2) × U(1), with a single group only at grand unification; it also notes the Z is a mixture.
- Info: citation changed to pp. 7–8; the electrostatics analogy reworded; the muon/tau remark now reflects the lecturer's "very confident" on p. 12; the monopole consequence now says "in grand unified theories"; the neutrino-mass callout notes the ΛCDM assumption and the ~0.06 eV oscillation minimum. The p. 13 question stays where it fits the topic.
