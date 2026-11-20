---
page: content/year-5/8.962/event-horizons-kruskal-kerr.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-22-black-holes-i/ (not opened; the lecture has no slides or notes, the board is only described in the transcript)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/9cb27977551aade8f7121d257bfe82da_ZqF-7bjnzCU.pdf (read: local copy L22.pdf, pdftotext text and a copy with PDF page markers; pages spot-checked against pdftotext -f 14 -l 14; the transcript has no printed footer numbers, so PDF page = cited page)
verdict: needs-changes
---

# Review: Black holes: infinite redshift, the event horizon, Kruskal coordinates and the Kerr family

Hughes writes everything on the board and the transcript only says "like so", so most equations are reconstructed. I checked each reconstruction against what Hughes says on the cited page and against the standard results (Carroll's conventions, which Hughes follows: signature (-,+,+,+), c = 1, G kept). All formulas are correct except where noted below.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Charged black holes", paragraph before the `g^{rr} = 0` formula | p. 14: in a stationary spacetime one can find coordinates in which "surfaces of constant r are spacelike surfaces", and the horizon is where such a surface goes "from being a spacelike surface to being a null surface". This is a slip: outside the horizon a surface r = const has normal ∂_μ r with g^rr = 1 − 2GM/r > 0 (spacelike normal), so the surface is **timelike**; at g^rr = 0 it is null; inside it is spacelike. | Repeats the slip: "surfaces of constant r are spacelike; the horizon is where such a surface turns null". | Say "timelike (their normal is spacelike, g^rr > 0)" and add a bracketed note that Hughes says "spacelike" here. The `g^{rr} = 0` condition itself is right. |
| 2 | warning | "Eddington–Finkelstein coordinates", paragraph after "Radial light in (v, r)" | p. 9: Hughes draws the ingoing and outgoing rays at about 45° far out, with "my time axis be v". | "Draw it with v up and r across. Far out the cone is the usual 45°." | With the literal coordinate v on the vertical axis the ingoing ray (dv/dr = 0) is horizontal and the far-out outgoing ray has slope 2, so the cone is not 45°. The usual 45° picture uses t̃ = v − r vertically (Carroll). Either plot v − r, or drop "the usual 45°". The qualitative statements (outgoing edge steepens, vertical at 2GM, negative slope inside) hold either way. |
| 3 | warning | Same section, after the ingoing EF metric | p. 8: "We do still see something that's ... at least a coordinate singularity at r equals 2GM. We haven't quite gotten rid of it entirely here. But we've definitely mollified" it. | "nothing blows up at r = 2GM (only g_vv passes through zero)". | The page is physically right (the metric is regular there; its determinant is −r⁴ sin²θ), but it contradicts Hughes without saying so. Add a short bracket: Hughes calls it "mollified"; in fact no component diverges and the metric stays invertible. |
| 4 | warning | Cosmology callout | (Page's own) | "the horizon of a universe with a cosmological constant is also a coordinate effect" | The event horizon of de Sitter space is a real (observer-dependent) causal boundary, just as the black-hole horizon is real; what is a coordinate effect is the singularity of the *static* de Sitter metric, −(1 − r²/ℓ²)dt² + …, at r = ℓ. Reword, e.g. "the static form of the de Sitter metric also breaks down at its horizon, which, like r = 2GM, is a coordinate singularity on a real causal boundary". The redshift remark (galaxies near the event horizon redshift without limit, like the beacon) is correct. |
| 5 | info | "Charged black holes", RN metric | p. 14: the metric function is spoken as "1 minus 2GM over r plus q squared over r squared" (no G on q²), horizon "G [times a] quantity that involves the square root of m squared minus q squared", in "goofy" units. | Δ = 1 − 2GM/r + GQ²/r², r± = GM ± √(G²M² − GQ²), Gaussian units with c = 1. | Physics correct and the unit change is disclosed. Optionally say that Hughes's charge is Q/√G in these units (his form is r± = G(M ± √(M² − Q²))), so his \|Q\| > M matches the page's GQ² > G²M². |
| 6 | info | "Light cones in Schwarzschild coordinates", bracket | p. 6: "as r goes to 2GM, we see dt dr going to 0" | Bracket: Hughes says dt/dr goes to 0; it is dr/dt. | Correct correction; the board formula and his next sentences (cone closing, rays parallel to r = 2GM) confirm it is a spoken slip. Since "dt dr" is a transcription of speech, "the transcript says" would be slightly more careful. |
| 7 | info | Tortoise coordinate | p. 7: "taking ever smaller and smaller steps" | Adds "like the tortoise of the paradox". | Page's own (Zeno's paradox); fine. |
| 8 | info | No-hair theorem | p. 16 states it without conditions. | Same. | Optionally note the standard assumptions (Einstein–Maxwell theory, asymptotically flat, electrovacuum outside the horizon). Not required: page follows Hughes. |

## Arithmetic and answer checks
All recomputed independently:
- Static observer: g_tt (U^t)² = −(1 − 2GM/r)/(1 − 2GM/r) = −1. Correct. E_r = −p_t/√(1 − 2GM/r), E_∞ = −p_t, ratio √(1 − 2GM/r). Correct.
- Worked example: √(1/3) = 0.57735 (57.7%), 1/0.57735 = 1.732 s; √(1 − 2/2.1) = √0.047619 = 0.21822 (21.8%), 1/0.21822 = 4.583 s; √(1 − 2/2.01) = √0.0049751 = 0.070534 (7%), 1/0.070534 = 14.18 s. All correct.
- Radial null rays: dt/dr = ±1/(1 − 2GM/r). Correct.
- Tortoise: dr*/dr = 1 + 1/(r/2GM − 1) = 1/(1 − 2GM/r). Correct. Plot caption: r*(4GM) = 4GM; r*(2.01GM) = 2.01 + 2 ln 0.005 = −8.587 → −8.59GM; r*(10GM) = 10 + 2 ln 4 = 12.77 → 12.8GM (above the range 12, as the caption says). Correct.
- Ingoing EF: dt = dv − dr/f gives −f dv² + 2 dv dr (the dr² terms cancel). Correct. Outgoing ray dv/dr = 2/f; negative for r < 2GM. Correct.
- Kruskal–Szekeres: with v' = e^{v/4GM}, u' = −e^{−u/4GM} and e^{r*/4GM} = e^{r/4GM}(r/2GM − 1)^{1/2}: T = √(r/2GM − 1) e^{r/4GM} sinh(t/4GM), R = … cosh(t/4GM). Correct; the minus sign on u' is the standard one (Carroll) and is needed for these relations, as the page's bracket says (p. 10 gives the definitions only in words: "exponential of … V, normalized for GM", "exponent of U … divided by 4GM"). T² − R² = (1 − r/2GM)e^{r/2GM}, T/R = tanh / coth. Correct. Metric prefactor 32G³M³ e^{−r/2GM}/r: correct (checked dt-only step: gives −(1 − 2GM/r)dt²). r = 0 ↔ T² − R² = 1; horizon ↔ T = ±R ↔ t → ±∞. Correct. Constant-t lines of slope tanh(t/4GM) in (R across, T up): correct.
- RN horizons: r² − 2GMr + GQ² = 0 → r± = GM ± √(G²M² − GQ²). Correct.
- Kerr metric (Boyer–Lindquist): g_φφ = (r² + a² + 2GMa²r sin²θ/ρ²) sin²θ equals the standard [(r² + a²)² − a²Δ sin²θ] sin²θ/ρ² (expanded algebraically). g_tφ = −2GMar sin²θ/ρ² (line element −4GMar…, both cross terms). g^rr = Δ/ρ² since r does not mix. a = J/M (a length with c = 1, G kept), horizon needs a ≤ GM. All correct and as Hughes states on p. 15.
- Kerr plot: r± = 1 ± √(1 − x²); at a = 0.9GM, r+ = 1 + √0.19 = 1.4359GM → 1.436 (caption, point) and 1.44 (quiz). The RN analogy "√G·Q in place of a" is correct (a² ↔ GQ²).
- Quiz 1: 0.577E, answer index 1. Correct. Quiz 2: index 1, explanation correct (inside, both radial null directions have dr < 0 to the future). Quiz 3: 1.44GM, index 1. Correct. Quiz 4: mass, spin and charge, index 1. Correct.
- Flashcards: all five correct.
- calcs/8.962/event-horizons-kruskal-kerr.yaml covers every number on the page; I did not run `calc:test`.

## Coverage and order
- Order follows the lecture: recap and puzzle (pp. 1–2), energy measured by an observer and conserved p_t (p. 3), static observer and the U^t typo (pp. 3–4), redshift and pulse interval (pp. 4–5), infinite-redshift surface and the pole analogy (pp. 5–6), radial null rays (pp. 6–7), tortoise coordinate (p. 7), v and u (p. 8), ingoing EF metric and null rays (p. 8), light-cone sketch and event horizon (pp. 9–10), black holes named (p. 10), Kruskal–Szekeres (pp. 10–13), Penrose diagram mention (p. 13), summary (pp. 13–14), Reissner–Nordström and naked singularity (p. 14), g^rr = 0 (p. 14), Kerr (pp. 15–16), Kerr–Newman and the no-hair theorem (p. 16), Kerr hypothesis, collapse, Price's theorem (pp. 17–18). Nothing material left out.
- Omitted asides only: the police officer / ODL note, the Spring 2019 redshift notes, "Roy Kerr, a mathematician from New Zealand". Fine.
- Formula citations: every `at=` page matches where Hughes writes or describes the formula (pp. 3–4, 4–5, 6, 7, 8, 8, 8, 10, 10, 11, 11, 14, 14, 14, 15, 15, 15). Correct.

## Bracketed notes on lecturer slips
- U^t typo (p. 3 "the timelike component is 1 square root of 1 minus 2GM over r", corrected on p. 4): right.
- dt/dr going to 0 (p. 6): right (see #6).
- "cosine of the square root of theta" (p. 15) for cos²θ: right that the intended quantity is cos²θ; whether it is a mis-transcription or a misspeak cannot be told from the text (uncertain, harmless).
- Kerr's PhD (pp. 15 and 17: "a big part of his PhD work", "derived … as his PhD thesis"): right. Kerr's PhD (Cambridge) predates the 1963 discovery, made at the University of Texas at Austin (Phys. Rev. Lett. 11, 237, 1963).
- Missed: the "constant-r surfaces are spacelike" slip (#1). Hughes's "still a coordinate singularity" in EF (#3) is a looseness rather than a slip, but the page silently differs.
- None invented.

## Licensing
- No slides or figures; all diagrams are generated plots. No "All rights reserved" or "Courtesy of" material in the transcript.
- Paraphrase is the page's own throughout; short phrases kept ("surface of infinite redshift", "everything that can be radiated is radiated" as the statement of Price's theorem, "complicated mess") are standard terms or brief quotations. The black/hole sentence is rewritten. Worked example numbers are original (Hughes uses a microsecond-to-two-microseconds illustration).
- No OpenStax or LibreTexts material.

## Notes
- Links: `/courses/8-033/evidence-for-black-holes` and `/courses/8-902/g-dwarf-problem-agn` exist; the latter covers AGN powered by supermassive black holes, so the link fits. Prerequisite `buchdahl-equations-of-state-schwarzschild` is the Lecture 21 page, matching "the puzzle that Lecture 21 left open" (pp. 1–2).
- `leadsTo` Lecture 23 ("Black Holes II"): Hughes says the final lecture studies orbits around a black hole (p. 18). The detail "conserved quantities, effective potentials and the innermost stable orbit" is not in this transcript; I did not read the Lecture 23 transcript, so that detail is unverified here (it is standard content for such a lecture).
- Opening sentence (two further lectures exist only as notes): matches p. 1.
- "Kerr hypothesis … passed every test so far (as of 2020)": matches p. 17, dated correctly.
- Summary line "drags frames through g_tφ": Hughes speaks of a "magnetic-like" effect splitting prograde and retrograde orbits (pp. 15–16), not of frame dragging by name; the physics is right.

## Resolution (2026-11-19, by the page author)

1. Horizon condition: the page now says surfaces of constant r are timelike outside the black hole, null at the horizon (g^rr = 0) and spacelike inside, with a bracketed note that Hughes says "spacelike".
2. Eddington–Finkelstein light cone: the page now says that with v vertical the ingoing edge is horizontal and the outgoing edge has slope 2 far out; the 45° cone needs v − r on the vertical axis, as Hughes sketches it.
3. "Nothing blows up" now reads "no metric component blows up", with a bracket on Hughes's "mollified".
4. Cosmology callout reworded: only the singularity of the static de Sitter metric at the horizon is a coordinate effect; the horizon itself is a real causal boundary.
5. Info: Reissner–Nordström units note now says Hughes's spoken q²/r² uses q = √G Q; the dt/dr bracket now says "the transcript says". The no-hair assumptions are left as stated.

Status set to `reviewed`.
