---
page: content/year-3/8.06/identical-particles-exchange-degeneracy.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/l22-4/ (read online; title "L22.4 Identical Particles and Exchange Degeneracy"; its only PDF link is exactly the reading1 URL)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/e37d7be5639be1a79fe0c2a7fccffaf8_ZzUkt-UQCX8.pdf (read, local copy; L22.4 transcript, 6 PDF pages, no printed footers, each page extracted with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/fb48dd49e8649557f1715f0415de4f4d_MIT8_06S18ch8.pdf (read: fetched online, first page confirmed "Chapter 8 Identical Particles"; local copy read as text and as page images for printed pp. 151-154)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/resources/chapter-8-summary-of-connection-formulas/ (read online; heading "Chapter 8: Summary of Connection Formulas", links to the ch8 PDF above)
  - https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2018/pages/lecture-notes/ (read online; link text "Chapter 8: Identical Particles (PDF)" pointing to the mislabelled resource page)
verdict: pass-with-notes
---

# Review: Identical particles and exchange degeneracy

Transcript citations use PDF page numbers (no printed footers); every one was checked page by page. Notes: printed page = PDF page + 150, checked on the page images. Neither the transcript, the resource pages nor chapter 8 carries a "rights reserved" or "Courtesy of" notice (the chapter has only "© B. Zwiebach", under the course's CC BY-NC-SA licence). The author's notes.md was not used.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Identical particles in classical mechanics", after (8.1.1): "(In the lecture this is said in words.)" | Transcript p. 4: "If you have a Hamiltonian for identical particles-- R2, P2-- that Hamiltonian is symmetric under the exchange. Whatever the formula is, it's not changed if you put r2, p2 and r1, p1." The broken "R2, P2--" reads like pointing at something written on the board. The transcript alone cannot settle whether it was written. | States as fact that it was only said in words. | Drop the bracket, or write "(the lecture states it at L22.4 transcript p. 4)". The citation to (8.1.1) in the notes is right either way. |
| 2 | warning | "Can we declare them equivalent?": "This ambiguity in the specification of a state of identical particles is called **exchange degeneracy** (notes p. 153)." | Notes p. 153: "This ambiguity in the specification of a state of identical particles is called *exchange degeneracy*." | The same sentence word for word, without quotation marks. | Rewrite in your own words (e.g. "The notes call this ambiguity, that one physical situation has many candidate kets, exchange degeneracy") or put it in quotes. |
| 3 | info | "Identical particles in classical mechanics": "(notes p. 151, Fig. 8.1)" | Fig. 8.1 (the two labellings) is on p. 152. The text on p. 151 says "As shown in Fig. 8.2", which is a slip in the notes: Fig. 8.2 is the collision with detectors on p. 153. | p. 151 | "(notes pp. 151-152, Fig. 8.1)". Optionally add "[the notes' text says Fig. 8.2]". |
| 4 | info | Same paragraph: "Give one particle, starting at $\vec r_1$, the label 1" | Notes: particle 1 starts at r₀ (Case 1), and with the labels swapped particle 1 is the one that starts at r₀′ (Case 2). r₁, r₂ are the labelled coordinates. | Uses $\vec r_1$ for a starting point, which mixes up the coordinate and the initial position (the page's symbol meaning for r₁ is "the position of particle 1"). | "Give the particle that starts at $\vec r_0$ the label 1 …", or say it in words with no symbol. |
| 5 | info | Intro bracket: "On OCW the notes file is listed under the title 'Chapter 8: Summary of connection formulas'" | Verified: the resource page's heading is "Chapter 8: Summary of Connection Formulas" (slug chapter-8-summary-of-connection-formulas), but the Lecture Notes index lists it as "Chapter 8: Identical Particles (PDF)". The cited direct PDF URL works and is the Identical Particles chapter. | Correct in substance. | Optional, more precise: "the notes file's OCW resource page is titled …". |
| 6 | info | Fig. 8.2 sentence: "in quantum mechanics it is impossible to tell which happened" | Fig. 8.2 caption: "In principle, in quantum mechanics it is impossible to tell which one happened." | Almost the same words. | Short enough to accept; a light rewording ("there is no way to know which of the two happened") would be safer. |
| 7 | info | Bracket on the lecturer's slip | The slip is at L22.4 transcript p. 5. | The bracket has no location. | Add "(L22.4 transcript p. 5)" inside the bracket. |

No `error` findings: every formula matches its cited equation and page, the slip is described correctly, every number recomputes, and every quiz answer is right.

## Formula and citation checks
- (8.1.1) H(r₁, p₁; r₂, p₂) = H(r₂, p₂; r₁, p₁): notes p. 151, correct (vectors shown with arrows on the page, bold in the notes, which is fine).
- Tensor product |ψ₁⟩⊗…⊗|ψ_N⟩, cite reading1 p. 4: transcript p. 4, correct ("PSI i1 for the particle one … PSI in for the particle n"). The page discloses that Zwiebach writes ψ_{i₁}, … ("double subscripts" is acceptable for nested subscripts).
- (8.2.1) |+⟩⊗|−⟩ or |−⟩⊗|+⟩: notes p. 152, correct; the notes' (1), (2) labels are dropped and the page says the first ket is particle 1's, as the notes do. The orthogonality remark is in the notes (p. 152), correctly attributed. The footnote "static and very close, even on top of each other" is notes p. 152 footnote 1, correctly attributed.
- (8.2.2) |ψ⟩ = α|+⟩⊗|−⟩ + β|−⟩⊗|+⟩: notes p. 152; the normalization |α|² + |β|² = 1 is in the text at the top of p. 153. Citing (8.2.2), p. 152 is fine.
- (8.2.3) |ψ₀⟩ expansion: notes p. 153, correct (the notes write |+, χ⟩ for |+, x⟩). Transcript p. 5 has the same expansion in words.
- (8.2.4) |⟨ψ₀|ψ⟩|² = |½(α + β)|²: notes p. 153, correct.
- Six three-particle kets: notes p. 153, same six and in the same order (a b c, a c b, b c a, b a c, c a b, c b a), correctly labelled as notes-only (the transcript does not discuss three particles). "Any superposition of them is a candidate too" and "N! kets in general" are the page's own reasonable extensions; the page does not attribute them to the notes beyond "the notes add how the degeneracy grows", which is fair.
- Transcript citations: p. 1 (definition, the two-electron thought experiment, "lots to think about"), p. 2 (protons, neutrons, hydrogen atoms), pp. 2-3 (isospin), p. 3 (classical trajectories; far-apart remark), pp. 3-4 (tagging, red/black dots), p. 4 (symmetric Hamiltonian, detectors, tensor product, the two candidate states), p. 5 (hypothesis, "Unfortunately, that does not work", superposition, ψ₀, inner product), p. 6 (contradiction, "next time"). All checked and correct.

## The lecturer's slip (verified)
Transcript p. 5: "And this gives you 1/2 of alpha plus beta squared … this is in fact 1/2 of alpha squared plus beta squared plus 2 real of alpha beta star. And since alpha and beta are normalized, this is 1/2 plus real of alpha beta star." So Zwiebach's expression is ½|α + β|² = ½ + Re(αβ*): the factor ½ of the overlap is not squared. The correct value is |½(α + β)|² = ¼|α + β|² = ¼ + ½Re(αβ*), as in the notes (8.2.4). Check: α = β = 1/√2 gives 1 with the lecture's expression (impossible as a probability alongside the other outcomes) and ½ with the correct one. The page's bracket describes this accurately and keeps the conclusion. (The words "1/2 of alpha plus beta squared" alone are ambiguous; the following expansion to "1/2 plus real of alpha beta star" is what makes the slip certain.)

## Arithmetic and answer checks
- ¼ + ½Re(αβ*): |α + β|² = |α|² + |β|² + 2Re(αβ*) = 1 + 2Re(αβ*), divided by 4. Correct.
- Range 0 to ½: Re(αβ*) ∈ [−½, ½] for normalized α, β, so P ∈ [0, ½]; 0 at β = −α, ½ at β = α (= 1/√2 up to a common phase). Correct (page, flashcard, summary).
- Worked example (a): (0.6 + 0.8)²/4 = 1.96/4 = 0.49; (0.6 − 0.8)²/4 = 0.04/4 = 0.01; |0.6 + 0.8i|² = 1, /4 = 0.25 (αβ* = −0.48i, purely imaginary, correct); (2/√2)²/4 = 2/4 = 0.5. All normalized (0.36 + 0.64 = 1). Correct.
- (b): ⟨++|ψ⟩ = 0 since |ψ⟩ has no |++⟩ component; probability 0. Correct.
- (c): 4! = 24; two up and one down: 3 kets = 3!/2!; the three kets listed are right. Correct.
- Quiz 1: answer 1 (electron at rest vs fast electron with spin down): correct; explanations of the other choices correct.
- Quiz 2: answer 2: correct; "the classical Hamiltonian is symmetric under exchange too" agrees with transcript p. 4.
- Quiz 3: α = 0.6, β = −0.8: overlap −0.1, probability 0.01, answer index 3 = "0.01": correct.
- Quiz 4: 3! = 6, answer index 0 = "6": correct.
- Flashcards: all four correct.
- calcs/8.06/identical-particles-exchange-degeneracy.yaml: 18 entries, cover every number on the page; `pytest tests/calc -k identical-particles-exchange` passes (18 passed). The complex-number identity is done correctly through real and imaginary parts (sample points keep 1 − a1² − b1² − b2² > 0). Minor: `lecture-slip` has `origin: mit` although the value 0.5 is the page's correction; `page-own` would be more accurate (info).

## Coverage and order
- Covers all of L22.4 in MIT's order: definition (intrinsic properties), indistinguishability (the two electrons handed back), protons, neutrons, hydrogen atoms, isospin aside, classical trajectories, tagging, symmetric Hamiltonian, why both fail in QM, the two-detector collision, tensor products for distinguishable particles, the two candidate states, the equivalence hypothesis, superposition, ψ₀ along +x, the probability, the contradiction, "next time". The far-apart remark (transcript p. 3, in the classical part) is moved to the QM section; harmless.
- Notes §8.1 and §8.2.1 (pp. 151-153) fully covered, including the two labellings of Fig. 8.1 (in words), Fig. 8.2 (in words), orthogonality, footnote 1, and the three-particle list. The page stops before §8.2.2 (permutation operators, p. 154), which belongs to Lecture 23. Correct split.
- L22.1-L22.3 (Born approximation) are on the separate born-approximation page, as the intro says.
- Additions: the worked example (own numbers), the N! generalisation, and the expansion ¼ + ½Re(αβ*). All correct.

## Licensing
- No figure of the notes is reproduced or redrawn; Figs. 8.1 and 8.2 are only described in words. No rights-reserved or courtesy material in the sources. No OpenStax or LibreTexts material.
- One full sentence of the notes is copied without quotes (finding 2); the Fig. 8.2 caption is closely paraphrased (finding 6). Quoted phrases ("a tremendous ambiguity") are marked as quotes. Otherwise the text is rewritten.
- The worked example is original (the notes and lecture give no numbers).

## Forward links
- leadsTo 8.06 Lecture 23: the syllabus title is "Permutation operators", and notes §8.2.2 (p. 154) starts permutation operators right after this material. Fair.
- leadsTo 8.286 Lecture 17 and the callout: the linked page neutrinos-and-particle-counting is Lecture 17 and has the 7/8 factor (energy density; 3/4 for number). The `guth-l17` reference URL matches that page's source URL. The claim that the 7/8 comes from fermions allowing at most one particle per state (Fermi-Dirac versus Bose-Einstein integrals) is correct physics. "Weighted by 7/8 relative to photons" is right per spin state. The callout's last sentence ("This lecture only poses the problem") is honest.
- 8.044 link: content/year-3/8.044/identical-particles.mdx exists ("Quantum states of many identical particles"); fair as a pointer.

## Symbols (data/symbols.json)
- New page-scoped meanings checked: β (coefficient of |−⟩⊗|+⟩), ψ (the two-spin state), `angle` (Dirac brackets: ket, inner product; text correct), a, b, c (the three single-particle states), r⃗₁, r⃗₂, p⃗₁, p⃗₂ (classical Hamiltonian; units m and kg·m/s fine), ψ₁, ψ₂, ψ_N, ψ₀. All right for this page.
- Page added to existing meanings: α "A complex coefficient." (scoped meaning shared with nmr-tensor-products, same sense, not a widening of a general meaning), H, x, z, i, N, ⊗. All fit.
- Small tension with finding 4: r⃗₁ is defined as "the position of particle 1", while the page also uses it as a starting point.

## Notes
- The page's prose follows the sources closely in order but is in its own words apart from findings 2 and 6. No em dashes.
- Prerequisites (entanglement-bell-teleportation, spin-one-half-states-operators, born-approximation) exist.
- I did not compare the video; I cannot tell whether the board shows the Hamiltonian identity (finding 1).

## Resolution (2026-11-18, by the page author)

1. Warning 1: the bracket after (8.1.1) now reads "(The lecture states it at L22.4 transcript p. 4.)".
2. Warning 2: the definition is reworded: "The notes give this ambiguity, one physical situation with many candidate kets, a name: exchange degeneracy (notes p. 153)."
3. Info 3: Fig. 8.1 is now cited as notes pp. 151–152.
4. Info 4: the starting point is described in words ("the particle that starts at one chosen point"), so r⃗₁ keeps its meaning as the position of particle 1.
5. Info 5: the intro now says it is the OCW resource page of the notes file that carries the title "Chapter 8: Summary of connection formulas".
6. Info 6: the Fig. 8.2 sentence is reworded away from the caption ("quantum mechanics offers no way to find out which of the two took place").
7. Info 7: the slip bracket now cites L22.4 transcript p. 5; the calcs entry `lecture-slip` has `origin: page-own`.

Status set to `reviewed`.
