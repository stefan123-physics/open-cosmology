---
page: content/year-4/8.09/hamiltonian-generators-conservation-laws.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf (read: page images of printed pp. 69-72 for every equation, text layer for Section 4.2 eq. (4.43)/(4.49)/(4.51) and the start of Section 4.4)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_4/ (not fetched separately; same PDF)
  - 8.09 Chapter 1 notes, text layer (read, Section 1.3 "Symmetry and Conservation Laws", Noether's theorem)
verdict: pass-with-notes
---

# Review: Equations of motion, conservation laws and infinitesimal canonical transformations

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Symmetries and conservation laws", sentence after eq. (4.100) | p. 72: "Thus a conservation law exists if and only if there is a symmetry present." | "A conservation law exists if and only if there is a symmetry." | Nearly verbatim. Short and close to standard wording, but rephrase (e.g. "Every conservation law comes with a symmetry, and every symmetry of this kind with a conservation law."). |
| 2 | info | "The time derivative of any quantity", paragraph after eq. (4.78) | p. 69: holds "for any canonical variables (q, p) and corresponding Hamiltonian H". | Adds "since brackets are canonical invariants". | The reason is really that Hamilton's equations hold in any canonical variables with their own Hamiltonian (K for a time-dependent transformation); bracket invariance alone is not the argument. Consider dropping the "since" clause or rewording. |
| 3 | info | "The motion as a canonical transformation", Liouville remark in brackets | The notes do not mention Liouville in 4.3; p. 69 eqs. (4.74)-(4.75) show canonical transformations preserve phase-space volume. | "(This is why Liouville's theorem follows from Section 4.2 ...)" | Correct physics, but it is the page's own addition; fine as is, or mark "(not in the notes)". |
| 4 | info | "Conserved quantities", **Poisson's theorem** | Notes call it "Another fact" (no name). | Names it Poisson's theorem. | Standard name (Goldstein); fine. |
| 5 | info | "Symmetries and conservation laws", "The right-hand side reads backwards as a theorem" | p. 72 reads the equation as "Ġ = 0 iff ΔH = 0". | Wording is unclear ("reads backwards"). | Say "Read from right to left, the equation says ...". |
| 6 | info | Graph caption, "carries each point to the next" | n/a (page's own graph; the notes' sketch on p. 72 is not reproduced). | Each plotted point is 0.2 s after the last, so it is reached by many infinitesimal steps, not one. | Optionally "carries each point to the next through many small steps". |

All 18 `<Formula>` citations were checked against the page images: eqs. (4.77), (4.78) p. 69; (4.81), (4.84), (4.86), (4.87), (4.88) p. 70; (4.89), (4.91), (4.92), (4.94)-(4.95), the unnumbered G = H line p. 71; (4.98), (4.100) p. 72. Each equation matches the notes in content and notation, and every equation number and printed page is correct. Equation numbers given in running text ((4.76), (4.79)-(4.80), (4.82), (4.83), (4.85), (4.90), (4.93), (4.96), (4.97), (4.99), and (4.43) for the bracket definition in Section 4.2) also match.

## Arithmetic and answer checks
- Worked example, bracket: ∂L_x/∂z = −p_y, ∂L_y/∂p_z = −x, ∂L_y/∂z = p_x, ∂L_x/∂p_z = y, which gives (−p_y)(−x) − p_x y = L_z. The x and y terms vanish (checked: for x, ∂L_x/∂x = 0 and ∂L_x/∂p_x = 0; for y, ∂L_y/∂y = 0 and ∂L_y/∂p_y = 0). Correct, with the sign convention of eq. (4.43), {u, v} = Σ ∂u/∂q ∂v/∂p − ∂u/∂p ∂v/∂q.
- Numbers at r = (1, 2, 0) m and p = (0, 1, 3) kg m/s: L_x = 2·3 − 0·1 = 6, L_y = 0·0 − 1·3 = −3, L_z = 1·1 − 2·0 = 1. Correct. The units of {L_x, L_y} come out as kg m²/s, as the page states.
- Rotation with δθ = 0.01: δx = −yδθ = −0.02 m, δy = xδθ = 0.01 m, δp_x = −p_yδθ = −0.01 kg m/s, δp_y = p_xδθ = 0. All correct. Also δx = ε ∂L_z/∂p_x = ε(−y), consistent with eq. (4.91).
- Graph: q = cos 2t and p = −2 sin 2t solve q̇ = p/m and ṗ = −mω²q for m = 1 and ω = 2 (q̇ = −2 sin 2t = p; ṗ = −4 cos 2t = −4q). The curve x = cos s, y = −2 sin s with s = 2t matches. Points: t = 0.2 gives (0.92106, −0.77884), shown (0.921, −0.779); t = 0.4 gives (0.69671, −1.43471), shown (0.697, −1.435); t = 0.6 gives (0.36236, −1.86408), shown (0.362, −1.864). All correct, and all lie on the orbit to 3 decimals, so `offCurve: true` is only there for the checker. The domain [−1.6, 1.6] and range [−2.6, 2.6] contain the whole orbit.
- Quiz 1 (answer 0): correct. The explanation is right, and {u, u} = 0 holds for every function.
- Quiz 2 (answer 1): correct. The distractors are wrong for the right reasons.
- Quiz 3 (answer 0, −0.02 m): correct. Distractor 0.01 m is δy; the others are plausible sign and value slips.
- Quiz 4 (answer 1): correct; it matches the unnumbered line on p. 71.
- Flashcards: all five correct. ΔH = −ε{G, H} − ε∂G/∂t = −εĠ holds because Ġ = {G, H} + ∂G/∂t. The Jacobi-identity step in card 2 matches eq. (4.87).
- Poisson's theorem in general: I checked the signs. u̇ = 0 gives {H, u} = ∂u/∂t and {v, H} = −∂v/∂t. Then −{u, ∂_t v} + {v, ∂_t u} = −({u, ∂_t v} + {∂_t u, v}) = −∂_t{u, v}. The Jacobi identity (4.49) gives {{u, v}, H} = {u, {v, H}} + {v, {H, u}}. Correct.
- Heisenberg equation as written, dû/dt = (i/ħ)[Ĥ, û] + ∂û/∂t: consistent with the quantization rule (4.51) of the notes, [u, v] = iħ{u, v}, and with the linked 8.05 page (iħ dA_H/dt = [A_H, H_H] + ...). Correct sign.
- Central-potential example: {L_z, H} = 0 for H = p²/2m + V(|r|) is correct.
- Calcs file: every entry recomputed by hand agrees. Notes on it (none affect the page):
  - `graph-orbit` only checks the derivatives of cos 2t and −2 sin 2t against hand-written derivatives, not Hamilton's equations themselves. Better: check dq/dt − p/m = 0 and dp/dt + mω²q = 0.
  - `rot-dx` checks the magnitude only.
  - In `lz-central-conserved`, the momentum part uses (−p_y)(p_x/m) + p_x(p_y/m), where the true derivatives give p_y p_x/m − p_x p_y/m. Both are zero, so the identity holds, but the written bracket has flipped signs.
  - Several `source.at` values (for example eq. (4.87) for the L_x/L_y bracket, eq. (4.97) for the graph points) cite the nearest section rather than a matching equation. That is acceptable for page-own numbers.

## Coverage and order
- Section 4.3 (pp. 69-72) is covered completely and in the notes' order: eqs. (4.76)-(4.81) and the three checks; conservation (4.82)-(4.84) with the quantum remark; Poisson's theorem in the special case (4.85)-(4.86) and in general (4.87); infinitesimal canonical transformations (4.88)-(4.92); the three examples (momentum, L_z, H); the active view (4.96)-(4.98) (the notes' sketch is replaced by the page's own oscillator graph); the direct search (4.99) leading to Hamilton-Jacobi; the Goldstein remark on time-dependent transformations; (4.100) and symmetry ⇔ conservation. Nothing left out.
- Additions (all correct, all the page's own): the worked example {L_x, L_y} = L_z, numbers for the rotation, the Liouville remark, and the central-potential example.
- Claims about other sections: Section 1.3 is "Symmetry and Conservation Laws" and uses Noether's theorem (ch1 text). Section 4.2 contains canonical quantization (eq. (4.51)) and the theorem that the active view extends. Section 4.4 opens with "Let us take the suggestion from the end of the previous section seriously", so the `leadsTo` reason is fair.
- Linked pages exist: `content/year-3/8.05/time-evolution-heisenberg-picture.mdx` (Lecture 13, has the Heisenberg equation) and `content/year-3/8.05/angular-momentum-algebra.mdx` (Lecture 21, has [L_i, L_j] = iħε_ijk L_k). Calling the commutator "the starting point" of the algebra is fair, though that 8.05 page first derives it from vector operators. The prerequisite `angular-momentum-point-particle` exists (8.01).

## Licensing
- The notes carry no courtesy or rights-reserved notices (confirmed by the course lead; nothing seen in pp. 69-72).
- The notes' phase-space sketch (p. 72) is not redrawn. The graph is the page's own, generated from a formula (an oscillator with m = 1, ω = 2).
- The worked example (L_x, L_y, L_z bracket with numbers) does not appear in the notes; it is original.
- Paraphrase is in the page's own words throughout, except finding 1 (one near-verbatim sentence). Close but rewritten: "The left side is the change produced by the transformation; the right side is how far the system actually moves" (notes p. 71-72) is acceptable.
- No OpenStax or LibreTexts material. No em dashes in the page.

## Notes
- Attribution is honest: "Goldstein shows (the notes quote the result, p. 72)" and "The notes also mention, citing Goldstein, ..." match the notes' "(see Goldstein)" and "Goldstein also describes in some detail".
- Symbol meanings scoped to this page in `data/symbols.json` (δ, ε, G, x, y, z, x_i, y_i, z_i, p_x/p_y/p_z, p_ix/p_iy/p_iz, L_x/L_y/L_z, η_0/η_1/η_n, t_n, Ġ, Ḣ, u̇, V, r, O, i and the shared Hamiltonian-chapter ones) fit their use on the page. The units are right: L in kg m²/s, V in J, p components in kg m/s. The meaning of `i` covers both the index and iħ, and the page uses both.
- No errors found; the verdict is pass-with-notes. Finding 1 should be reworded before `status: reviewed`.

## Resolution (2026-11-19, by the page author)

- Warning 1 (near-verbatim sentence): replaced by "Every conservation law therefore comes paired with a symmetry of the Hamiltonian, and every such symmetry with a conserved quantity."
- Info 2: the reason eq. (4.78) holds in any canonical variables is now given as "the derivation used only Hamilton's equations".
- Info 3: the Liouville remark is marked as ours ("Our remark, not the notes'").
- Info 4: "Poisson's theorem (the usual name; the notes simply call it another fact)".
- Info 5: "reads backwards" replaced: since ε is not zero, ΔH vanishes exactly when Ġ does.
- Info 6: the caption now says the Hamiltonian carries each point to the next "through many small steps".
- Calcs: `lz-central-conserved` now writes the momentum part of {L_z, H} with the signs of the definition, (∂L_z/∂x)(∂H/∂p_x) + (∂L_z/∂y)(∂H/∂p_y) − [(∂H/∂x)(∂L_z/∂p_x) + (∂H/∂y)(∂L_z/∂p_y)]; `graph-orbit` and `rot-dx` left as they are (the sign of δx is checked by the `shown` text and the quiz).
- Status set to reviewed.
