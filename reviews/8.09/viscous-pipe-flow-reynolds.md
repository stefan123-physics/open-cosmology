---
page: content/year-4/8.09/viscous-pipe-flow-reynolds.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf (read: local copy, rendered pages 130-134 read as images for every equation; text of pp. 128-129 and Section 6.8, pp. 135-140, read for context)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_6/ (not opened separately; it is the resource page of the same PDF)
verdict: pass-with-notes
---

# Review: Viscous flow in pipes, the Reynolds number and similar flows

All fifteen `<Formula>` citations were compared with the rendered pages. Every equation number and printed page is right: (6.120) p. 130; (6.121) to (6.125) p. 131; (6.126) p. 132; (6.127) to (6.132) p. 133; (6.133) and (6.134) p. 134. The page uses the same physics and notation, except that it writes P and F where the notes use script letters, which is harmless. The page has no errors.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | info | "The Reynolds number and similarity", sphere example | p. 134 prints "the Reynolds number is R = (u/a)ν". | It writes R = ua/ν and says in brackets that the notes print (u/a)ν. | None. **Slip confirmed** in the rendered p. 134. The page's correction is right: (6.133) with L = a gives ua/ν. Also, the printed (u/a)ν would grow fourfold when both ν and u are doubled, so the notes' own next sentence ("R is unchanged") needs ua/ν. |
| 2 | warning | "Flow in a round pipe", after (6.130) | p. 133: "we must have a = 0 (if the geometry excluded the region at the middle )". Read literally, this makes a = 0 depend on the axis being *excluded*, which is the wrong way round. | "(a pipe with a solid core, which excludes the axis, would keep it)" | The page's reading is the correct physics: in an annulus the ln r term stays. But it silently reverses the literal wording. Following writing rule 4, add a short bracket such as "[the notes' bracket is incomplete; the log term survives only when the axis is excluded]". |
| 3 | info | "The Reynolds number and similarity", first paragraph | p. 134: "(The above examples of Poiseuille flow have R ≲ 2000.)" | "The Poiseuille flows above are found for R ≲ 2000." | Acceptable reading. Section 6.8 (pp. 139-140) supports it: "The viscous flow in pipes we previously considered were laminar flow at smaller R values". Optional: say "are seen (stay laminar) only for R ≲ 2000" to make clear that this is an observed limit, not a property of the solution. |
| 4 | info | Same paragraph, bracketed remark | Section 6.7 does not say this. Section 6.8, eq. (6.136), p. 135, does: the viscous term is "enhanced by a factor of 1/R" compared with v·∇v. | "Compared with the advective term, the viscous term of (6.113) is of order 1/R; our remark, made precise in Section 6.8." | Correct. (u²/L)/(νu/L²) = uL/ν = R, and (6.113) is the Navier-Stokes equation (p. 128). The remark is labelled as the page's own, and the forward claim matches 6.8. No change needed. |
| 5 | info | Flashcard "Poiseuille flow between parallel plates" and Summary | (6.126) gives the force only on the bottom plate. | "Each wall feels a drag −hk/2 per unit area." | True by symmetry: at y = h, ∂v_x/∂y = kh/(2η) and n̂ = −ŷ, which give the same +x force, −hk/2. This goes slightly beyond the notes. Fine as it is, or add "(by symmetry)". |
| 6 | info | "Flow in a round pipe", the no-radial-flow argument | p. 133 gives the same heuristic argument: the flow through the curved sides can balance "only ... if there is no flow in the r̂ direction". | The page paraphrases it faithfully. | Optional. The tight version is that continuity makes 2πr v_r constant, so v_r ∝ 1/r, which is ruled out by finiteness on the axis. Not required. |
| 7 | info | "Flow in a round pipe", first paragraph | The sentence "The fact that there is r dependence makes sense ..." begins on p. 132 and ends on p. 133. | Cited "(p. 133)". | Optional: "(pp. 132-133)". |

## Arithmetic and answer checks
All recomputed with Python/SymPy:
- (6.125): η ∂²v/∂y² = k, and v(0) = v(h) = 0. Correct.
- (6.126): η ∂v/∂y at y = 0 is −hk/2. Correct.
- (6.129) to (6.131): (1/r)(r v′)′ = k/η for v = (−k/4η)(L² − r²). Correct.
- (6.132): ρ∫₀ᴸ 2πr v dr = −πkL⁴/(8η/ρ) = −πkL⁴/8ν. Correct. Units: (Pa/m)·m⁴/(m²/s) = kg/s.
- Worked example, water. Speed on the axis: 5 × 10⁻⁴/(4 × 10⁻³) = 0.125 m/s. Correct. Discharge: π × 5 × 10⁻⁸/(8 × 10⁻⁶) = 0.019635 kg/s, about 20 g/s. Correct. Half the radius: 1.227 g/s, "about 1.2 g/s". Correct. Raising the gradient sixteenfold to keep the flow is correct.
- Worked example, wind tunnel: u = 200 m/s, and M = 200/340 = 0.588, given as 0.59. Correct. The physical conclusion (compressibility spoils similarity; tests use denser fluids, meaning a smaller ν, or larger models) is sound.
- Quiz 1: answer 2 (parabolic). Correct; the explanation is right.
- Quiz 2: answer 3 (16). Correct. The explanation (a quarter of the area times a quarter of the speed) is right, because v ∝ L².
- Quiz 3: R = 0.125 × 0.01/10⁻⁶ = 1250, answer 2. Correct. Comparing it with "about 2000" is consistent: uL/ν with the axis speed and the radius equals the usual diameter-and-mean-speed Reynolds number, because u_mean = u_max/2 and D = 2L.
- Quiz 4: answer 1 (10 times faster). Correct.
- Sphere example: R = ua/ν. Doubling u and ν gives v doubled and P quadrupled, since P/ρu² is fixed. Correct.
- Calcs file: every entry agrees with the page and with my recomputation. The `shown` strings match the page text (quiz-reynolds correctly uses the doubled backslashes of the frontmatter). I did not run `npm run calc:test`; the values were checked by hand and with Python.
- Plot: 4y(1 − y) is the parabola scaled to its centre value and y is the linear profile scaled to u. It agrees with the caption.

## Coverage and order
- The page follows Section 6.7 in MIT's order: introduction and (6.120); the parallel-plate example (6.121) to (6.126); the moving top plate; the round pipe (6.127) to (6.132) with the blood-vessel remark; "Reynolds Number and Similarity" (6.133); the R ≲ 2000 remark; dimensional analysis (6.134) and similar flows; the sphere example; other ratios (lengths, Mach number); counting the number of ratios. Nothing in the section is left out.
- Added by the page: two worked examples (its own, clearly labelled), the 1/R remark (labelled), the plot, and the symmetric drag on each wall (see #5).
- The leadsTo entry for Section 6.8 (Stokes flow, small-R limit; eddies and turbulence at larger R) agrees with 6.8, pp. 135-140. The target page does not exist yet, as expected.
- The page has no `Callout kind="cosmology"`, which is fine for this section.

## Licensing
- ch6 has no "All rights reserved" or "Courtesy of" notices (checked with grep).
- None of the notes' four figures (duct, parabolic profile, linear profile, cylinder) is reproduced. The page has one generated `<Plot>` computed from formulas.
- No OpenStax or LibreTexts material.
- Paraphrase: the text is rewritten throughout. One clause is close to verbatim: "the fluid tries to drag the pipe along with it" (p. 132), nine words. That is acceptable as a short phrase, though it could be reworded.

## Notes
- The prerequisite `viscous-fluid-equations` exists, and the internal link `/courses/8-09/viscous-fluid-equations` uses the course slug `8-09`.
- The notes write M = u/c_S; the page matches.
- What I verified: every equation against the rendered page images, and every number. Not verified: whether `content:check` and `calc:test` pass (not run).

## Resolution (2026-11-19, by the page author)

1. Slip bracket kept.
2. Added a bracket quoting the notes' incomplete "(if the geometry excluded the region at the middle)" and saying that as written it reads the wrong way round.
3. Now "are found, and stay laminar, for R ≲ 2000".
4. No change.
5. Added "By symmetry the top plate feels the same" after (6.126).
6. No change (follows the notes).
7. Citation widened to pp. 132–133.
8. Reworded: "the moving fluid pulls the wall in its own direction".
9. Expected; resolves with Section 6.8.

Status set to reviewed.
