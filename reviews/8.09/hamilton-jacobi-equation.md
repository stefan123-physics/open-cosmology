---
page: content/year-4/8.09/hamilton-jacobi-equation.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf (read: page images of printed pp. 73-79 for every equation, plus the text layer for the end of Section 4.3, Section 4.1 eqs. (4.25) and (4.33), the opening eqs. (4.1)-(4.2), Section 4.5 and Section 4.6)
  - MIT 8.09 Chapter 5 notes, Section 5.1 (read, text layer, for the leadsTo claim)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_4/ (not opened separately; it is the landing page of the same PDF)
  - content/year-3/8.06/semiclassical-local-de-broglie-wavelength.mdx and content/year-3/8.06/wkb-approximation-connection-formula.mdx (read, for the linked claim)
verdict: pass-with-notes
---

# Review: The Hamilton-Jacobi equation

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Plot, `points` | (page-own graph) | The "top" point is fixed at (1, 4.9) while the slider changes α; for any α other than 9.604 J the label no longer sits on the curve's top (top is at α/(mg), e.g. 7.14 m at α = 14 J). | Tie the point to the curve (`{ curve: 0, at: … }` with a fixed t = 1 parameter) or compute its y from E, or drop the slider. |
| 2 | info | "W as a generating function", formula label "W is the abbreviated action" | p. 78: W is "a different sort of 'action'"; the notes never use the term "abbreviated action". | Label uses "abbreviated action" (standard Goldstein term); body text says "an action of a kind". | Fine physics; optionally say in the text that "abbreviated action" is the usual name, not the notes' term. |
| 3 | info | "New variables that never move", eq. (4.101) | p. 73: "new canonical variables that are all cyclic, such that Q̇ = Ṗ = 0". | "new canonical variables that are all constant". | No change needed; the equation itself says the same. |
| 4 | info | Remark list, eq. (4.136) | p. 78: "α_i = α_i(γ)", "replace α₁ = α₁(γ)". | "re-chosen as functions γ_i of the α's". | Equivalent for an invertible choice; no change needed. |
| 5 | info | Last paragraph of "Separation of variables" | p. 79 states only that a spherically symmetric problem may separate in spherical but not Cartesian coordinates. | Adds "The Kepler problem of Section 4.5 is the example." | Acceptable (4.5 does separate the Kepler problem in plane polar, then spherical, coordinates), but 4.5 does not show a failure in Cartesian coordinates; "Section 4.5 separates the Kepler problem in polar and spherical coordinates" would be more exact. |
| 6 | info | "The Hamilton-Jacobi equation", sentence after eq. (4.105) | | "...the **Hamilton's principal function** $S$." | Grammar: drop "the" ("Hamilton's principal function $S$"). |

## Formula citations (all checked against the page images)
Every `<Formula>` matches the notes in content and notation, and every equation number and printed page is right:
(4.101) p. 73, (4.103) p. 73, (4.104) p. 73, (4.105) p. 73, (4.106) p. 73, (4.107) p. 73, (4.109) p. 74, (4.111) p. 74, (4.112) p. 74, (4.113) p. 75, (4.114) p. 75, (4.115) p. 75, (4.116) p. 75, (4.118) p. 75, (4.123)-(4.124) p. 76 (the formula shown is (4.124)), (4.125) p. 76, (4.126)-(4.127) p. 76 (page omits the middle member of (4.127), harmless), (4.129) p. 76, (4.130) p. 77, (4.131) p. 77, (4.134)-(4.135) p. 77, (4.137) p. 78, (4.138) p. 78, (4.141)-(4.142) p. 78, (4.146)-(4.147) p. 79.
In-text equation numbers (4.102), (4.108), (4.110), (4.117), (4.119)-(4.122), (4.128), (4.132), (4.133), (4.136), (4.139), (4.140), (4.143)-(4.145) also refer to the right equations.
Cross-references: K = H + ∂F₂/∂t is in Section 4.1 (eq. (4.25)) as claimed; the oscillator is eq. (4.33) in Section 4.1 as claimed; "the opening of this chapter" (linear-in-time coordinates) is eqs. (4.1)-(4.2); the end of Section 4.3 (eqs. (4.98)-(4.99), p. 72) does suggest looking for a canonical transformation to constant variables, as the intro says.

## Arithmetic and answer checks
- Oscillator: d/dq[(1/ω) arcsin(√(mω²/2α) q)] = m/√(2mα − (mωq)²), so (4.125) and the page's version are right; the remark that shifting ωβ by π flips the signs of both sin and cos (so the + roots can be kept) is correct.
- Worked example: W = −[2m(α − mgq)]^{3/2}/(3m²g) gives ∂W/∂q = √(2m(α − mgq)) (checked numerically: 1.7486 vs 1.7486 at q = 1 m) and ∂W/∂α = −√(2m(α − mgq))/(mg) (−1.000 at q = 0, α = 9.604 J, matching t + β = −1). Squaring gives q = α/(mg) − ½g(t + β)². Branch: the + root means p ≥ 0, ∂W/∂α ≤ 0, so t ≤ −β: the way up, as the page says; β = ∂W/∂α − t follows the notes' convention (4.131)/(4.134). Correct.
- Numbers: α = ½(0.2)(9.8)² = 9.604 J; top 9.604/1.96 = 4.9 m; time to top 1 s, β = −1 s; q(0) = 4.9 − 4.9 = 0; p(0) = √(2·0.2·9.604) = 1.96 kg m/s = mv₀. All correct.
- Graph: expr uses (t − 1) = (t + β) with β = −1; at E = 9.604 it passes (0, 0), (1, 4.9), (2, 0). Caption correct. At the slider minimum E = 6 the curve starts at q(0) = −1.84 m, below the range −1 (clipped, harmless). See finding 1 for the fixed "top" point.
- Quiz 1-4: marked answers correct; explanations correct. Quiz 3 distractors are all wrong (4.9 is the height not the energy; 1.96 is p₀; 19.2 J = 2α), only choice 0 is right.
- Flashcards: all five correct.
- Calcs file: every entry matches the page; identities checked by hand above.

## Coverage and order
- The page follows Section 4.4 in the notes' order: (4.101)-(4.108), the three comments (choice of constants, S as action, Schrödinger limit), the oscillator (4.115)-(4.127), time separation and W (4.128)-(4.131), W as an F₂ with K = α₁ (4.132)-(4.135), the three comments (4.136)-(4.137) and the Schrödinger analogy, separation (4.138)-(4.143), cyclic coordinates (4.144)-(4.147) and the choice of coordinates. Nothing in Section 4.4 is left out.
- Added: the thrown-ball worked example and graph (page-own, placed between the W remarks and the separation part).

## Licensing
- No rights-reserved or courtesy material in Section 4.4 (and none in the notes per the course lead); no figures exist in this section, and the page draws only a generated Plot.
- Paraphrase: rewritten throughout. Two sentences stay close in structure to the notes ("S is the action ... the shared letter S is no accident" vs p. 74 "...so it is no coincidence that the same symbol is used"; "a spherically symmetric problem may separate in spherical coordinates and not in Cartesian ones" vs p. 79). Single sentences of standard content; acceptable, could be reworded further.
- The thrown-ball example is original: the notes have no gravity example in Section 4.4 (their only example is the oscillator).

## Forward links and claims about other sections
- 4.5 leadsTo: correct (plane polar (r, ψ) with ψ cyclic, then "Let's solve this problem again ... in 3 dimensions" with spherical coordinates, eq. (4.163)-(4.164)).
- 4.6 leadsTo: correct (4.6 opens by finding frequencies of periodic motion without solving for it, and uses W(q, J), eqs. (4.174)-(4.177)).
- 5.1 leadsTo: correct (5.1 keeps the canonical transformation generated by the H₀ principal function, and for H = H₀ + ΔH the variables α, β are no longer constant, eqs. (5.8)-(5.11)).
- 8.06 links: both pages exist (`content/year-3/8.06/`, course slug `8-06`). The WKB page has S₀ = ±∫p dx and ψ ∝ exp(±(i/ħ)∫p dx); so "the phase is ∫p dx/ħ, which is W/ħ" fits (W = ∫p dq, eq. (4.137)), and "leading term of the WKB approximation" matches the notes' "0'th order term in the WKB approximation".

## Symbols (meanings scoped to this page in data/symbols.json)
- All checked against use on the page; they fit. α (unit J: energy in both examples), β (unit s: time offset in the oscillator and ball), g (two meanings, oscillator time part and gravity, both used on the page), i (index and imaginary unit, both used), S and W (J s), L, V, E (J), γ, γ_i, v_i, h₁, h₂, f, W′, W₁, W₃, W_i, q₀/p₀, q_i0/p_i0 and the dotted symbols all match their use. The shared ω meaning "ω = √(k/m)" mentions k, which this page does not use; harmless.

## Notes
- No em dashes in the page (grep count 0). Attribution is fair: "the notes add three remarks", "the notes point out", "which the notes call β_i".
- Slips in the notes (not carried over): "it it is simplest" (p. 73), "One of these" capitalised mid-sentence (p. 73). None affect the physics.
- Reading title "pp. 60-91" is right (PDF page 33 is OCW boilerplate).
- I did not run `npm run calc:test`; the calcs entries were checked by hand and with a short numerical check.

## Resolution (2026-11-19, by the page author)

- Warning 1 (fixed "top" point under a moving curve): the point is removed; the caption still gives the top (4.9 m after 1 s) for α = 9.604 J. Its calcs entry is removed.
- Info 2: the formula label is now "W as a kind of action".
- Info 5: the sentence now says that separation depends on the coordinates as much as on the problem, and that Section 4.5 separates the Kepler problem in plane polar and then spherical coordinates (no claim about Cartesian failure in 4.5).
- Info 6: "the Hamilton's principal function" corrected.
- Info 7: the "no accident" sentence reworded ("that is why the two share the letter S"); the spherical/Cartesian sentence reworded as above.
- Info 8: the graph's vertical range is now −3 to 8 m.
- Infos 3 and 4: left as they are (equivalent statements).
- Status set to reviewed.
