---
page: content/year-1/8.01/massive-rope.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-4-drag-forces-constraints-and-continuous-systems/13-1-rope-hanging-between-trees/ (read; segment pages 13.1 to 13.6 read for titles and transcript links)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/resources/mit8_01scs22_chapter8/ (read; Example 8.4, Section 8.5.2, Example 8.11, pp. 8-23 to 8-26 and 8-46 to 8-49)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/3b9759866d97007b2c57304fada85597_9NS0JcjNdp4.pdf (13.1 transcript, read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/404503d75524611651accebf64a85fd1_NBOL5X13UFY.pdf (13.2 transcript, read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/48a15ef6e170830a0cc49587c0bf6dbc_cadbtBS5qf4.pdf (13.3 transcript, read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/17a4fb8434bb0be25579bd0156d6cd81_5QKJG0FZTio.pdf (13.4 transcript, read)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-4-drag-forces-constraints-and-continuous-systems/13-5-demo-wrapping-friction/ (page read; video only, no transcript on OCW, video not watched)
  - https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/a1e3923728fb0ab7f51f6fc15aa17d1d_vUg50UI1aqs.pdf (13.6 transcript, read)
  - content/year-5/Ferreras/galaxy-clusters.mdx (site page, read for the cosmology callout)
verdict: needs-changes
---

# Review: A rope with mass: differential analysis

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Cosmology callout, first sentence | (Not MIT.) Ferreras 2.3 as rewritten on `galaxy-clusters.mdx`: the gas is "settled in the cluster's potential"; hydrostatic equilibrium is used to find the total mass M(r) that holds it. | "a ball of hot gas held together by its own gravity" | Wrong physics, and it contradicts the callout's own conclusion: cluster gas is held by the gravity of the whole cluster (mostly dark matter), not by its own gravity. Write e.g. "a ball of hot gas held in place by gravity" or "held by the gravity of the whole cluster". |
| 2 | warning | Opening paragraph | 13.2 p. 1: "if the rope has nonzero mass, then its tension will vary along its length" (in the context of a hanging rope). | "A real rope has mass, and then the tension changes from point to point." | Correct for the examples here, but too general, and it reads as a contradiction of `tension-and-springs.mdx` ("The rope does not accelerate … whatever the rope's mass … the tension is the same at every point"). Add one sentence: the tension varies here because gravity pulls on every piece of the rope (a force along it); a massive rope at rest with no such force has uniform tension. (The tension-and-springs page's case 1 should also be qualified to "and no other force acts along the rope"; that is outside this review.) |
| 3 | warning | Opening paragraph and "Differential analysis" | 13.2 p. 7: "This is just the first instance we're using it." | "This lesson … introduces the method … differential analysis." | On this site the method has already been used: `circular-motion-dynamics-examples.mdx`, section "A spinning rope" (dT/dr = −(m/L)ω²r, notes Eq. 9.3.11). Add a back-reference ("you met this once already for a spinning rope; here it is set out step by step") so readers are not told it is new. |
| 4 | warning | Formula "Tensions at the end and the middle" | 13.1 p. 2 spoken: "that's nothing else but mg/2 over 2 tangent theta" (a slip; the preceding line gives (m/2)g sinθ/cosθ). | T_mid = (mg/2) tanθ | The page is correct. Per writing rule 4, add a short bracketed note that the recording garbles the last step. |
| 5 | warning | "Wrapping friction: the capstan", first paragraph | 13.5 has no transcript; the OCW page only says it "contains the video Demo: Wrapping Friction". | "a rope wound round a post can hold a heavy load with a light pull (13.5 video, no transcript). The notes analyse it …" | What the demo shows could not be verified (video not watched); the description is the standard wrapping-friction demo and is probably right, but mark it uncertain for the author. "The notes analyse it" suggests the notes analyse this demo; they analyse a ship's capstan. Prefer "The notes analyse the same effect for a ship's capstan". Linking 13.5 to Example 8.11 is otherwise fair and the page says honestly that 13.5 has no transcript. |
| 6 | warning | Symbols, `g` meaning scoped to massive-rope | — | "magnitude of the gravitational acceleration near the Earth's surface, 9.81 m/s²" | Does not fit g(r) in the cosmology callout (gravitational acceleration at radius r inside the cluster). Add a callout-specific clause or a separate meaning, e.g. "In the cosmology note, g(r) is the gravitational acceleration at distance r from the centre." |
| 7 | info | "A rope hanging between two trees" | 13.1 p. 1: î "going in the x direction" (x horizontal). | Uses î horizontal, ĵ up, but x elsewhere on the page is "distance down the rope". | The global î meaning ("pointing towards increasing x") will pop up on a page whose x is vertical. Harmless, but a page-scoped î meaning ("horizontal") would avoid the clash. |
| 8 | info | "A rope hanging between two trees" | 13.1 does not say the rope is horizontal at the midpoint; it follows from the î equation (T_mid has no vertical component). | "(the rope is horizontal at its lowest point)" | Fine; symmetric rope implied by "angle θ on each side". |
| 9 | info | Notation | Notes Example 8.4 / 8.5.2 use M, L, y (down); transcript 13.2 uses m, l, x. | Follows the transcript (m, l, x). | Consistent; no change needed. |

## Arithmetic and answer checks
- `calcs/8.01/massive-rope.yaml`: `pytest tests/calc -k massive-rope` gives 25 passed.
- Chain, 2.0 kg, 60° from vertical: T_end = 19.62/(2 × 0.5) = 19.62 N ≈ 19.6 N (correct); T_mid = 9.81 × 1.7321 = 16.99 N ≈ 17.0 N (correct); at 80°: 9.81 × 5.671 = 55.6 N, ratio 5.67 > 5 (correct). Check: T_end > T_mid since T_end² = T_mid² + (mg/2)², so "largest at the trees" holds.
- Angle convention: θ from the vertical, as in the transcript (T_end sinθ horizontal, T_end cosθ vertical). Consistent in text, formulas, quiz 2, worked example and the θ symbol meaning. θ → 90° means horizontal, and T_mid → ∞: the claim "no finite pull can make a rope with mass perfectly horizontal" is correct and marked as the page's own.
- Hanging rope: T(x) = mg(1 − x/l) and dT/dx = −mg/l consistent.
- Tapering rope: λ = 2m(l − x)/l² integrates to m over [0, l] (correct); T(x) = g∫ₓˡ λ dx' = mg(l − x)²/l² (correct), T(0) = mg; at x = 1.0 m: 3.0 × 9.81/4 = 7.36 N, exactly half of 14.7 N; mass above the midpoint 3m/4 (so "most of this rope's mass is above the midpoint" is correct).
- Plot 1: top tension 3.0 × 9.81 = 29.4 N, halfway 14.7 N and 7.36 N (correct). Range [0, 35] covers the largest m (3.5 × 9.81 = 34.3 N).
- Steel cable: 2.0 cm² = 2.0 × 10⁻⁴ m²; λ = 8000 × 2.0 × 10⁻⁴ = 1.6 kg/m; T = 1.6 × 100 × 9.81 = 1569.6 N ≈ 1570 N (correct). Density 8000 kg/m³ is flagged as a round figure (real steel ≈ 7850); fine.
- Capstan plot caption: e^(−0.30 × 2π) = 0.152 → 15%; e^(−0.30 × 6π) = 0.00350 → 0.35% (correct).
- Bollard: 6π = 18.85 rad, μθ = 5.655, e^(−5.655) = 0.00350, 5000 × 0.00350 = 17.5 N, 17.5/9.81 = 1.78 kg ≈ 1.8 kg (correct).
- Quiz 1: T(l/4) = 3mg/4, answer index 2 (correct).
- Quiz 2: grows without limit, index 2 (correct).
- Quiz 3: index 1 matches 13.2 p. 2 and 13.6 (correct).
- Quiz 4: e^(0.25 × 4π) = e^π = 23.1, "about 23", index 2 (correct).
- Flashcards: all four correct.

## Coverage and order
- Order follows MIT: 13.1 (trees), 13.2 (cut argument, then differential analysis, clumpy rope), 13.3 (elements), 13.4 (densities), 13.5 (wrapping friction, via notes Example 8.11), 13.6 (summary). Nothing from 13.1 to 13.6 is left out.
- Additions (all page-own and labelled or clearly original): the "never perfectly straight" consequence, the chain example, the tapering rope (a worked version of 13.2 p. 7's "clumpy rope" remark), the steel cable, the bollard example, the capstan derivation from the notes.
- Citations checked against the PDFs and printed footers:
  - "Half rope in equilibrium" and "Tensions at the end and the middle" (reading2 = 13.1, p. 2): correct.
  - "Tension in a hanging rope" (reading3 = 13.2, pp. 1–2): formula on p. 1, end-point checks on p. 2; correct.
  - "Second law for one element" (p. 3), "Differential equation for the tension" (p. 4), "Separation of variables" (pp. 5–6): correct; Δm = (m/l)Δx on p. 4, boundary condition p. 6, clumpy rope p. 7: correct.
  - Notes Eq. (8.5.13) on p. 8-24 and Eqs. (8.5.15)–(8.5.20) on pp. 8-25 to 8-26: correct.
  - "Linear, surface and volume density" (reading5 = 13.4, p. 1): correct (13.4 states σ through Δm = σΔA; same content). Elements, including the arc/arbitrary path and ΔV = AΔx, are on 13.3 p. 1: correct.
  - Capstan: slice set-up pp. 8-46 to 8-47, Eqs. (8.6.89)–(8.6.92) p. 8-47, (8.6.93)–(8.6.101) p. 8-48, Eq. (8.6.102) and (8.6.108) on p. 8-49: all page citations correct. Physics matches: N = TΔθ, ΔT = −f_s, f_s = μ_s N, integration from T_A at θ = 0 to T_B at θ_BA.
  - 13.6 recipe: matches the transcript's five steps.
- Frontmatter transcript URLs match the "Download transcript" links on the OCW segment pages 13.1, 13.2, 13.3, 13.4 and 13.6.

## Licensing
- No "All rights reserved" or "Courtesy of" notice in the five transcripts or in Chapter 8 of the notes; the page reuses no figure.
- No OpenStax or LibreTexts material.
- Text is rewritten; only short standard phrases overlap ("the ends are special cases", "separation of variables", "small but finite"). Worked examples use the page's own numbers and situations; the notes' capstan example has no numbers, and the page's derivation is a condensed rewrite.

## Notes
- Repetition with `tension-and-springs.mdx`: limited to the forward pointer there ("A rope with mass is the subject of Lesson 13"); see finding 2 for the apparent contradiction. Repetition with `circular-motion-dynamics-examples.mdx`: the spinning-rope analysis uses the same method; see finding 3. Neither duplicates this page's examples.
- Cosmology callout: dP/dr = −ρ g(r) is the correct hydrostatic equation and the "far more mass than stars and gas" conclusion agrees with Ferreras 2.3 as rewritten on `galaxy-clusters.mdx` (which uses the integrated form, Eq. 2.7). Only the "its own gravity" wording is wrong (finding 1). `leadsTo` Ferreras 2.3 and 8.01 Lesson 14 ("Resistive Forces" in `_course.json`) are correct and fairly worded.
- Symbols scoped to `massive-rope` in `data/symbols.json` (θ, λ, μ, σ, T, x, d, e, m, g, r, P, A, L, N, M, f_s, μ_s, x′, V, l, T_A, T_B, T′, T_mid, T_end, T_top, θ_BA): all fit the page except g for the callout (finding 6); ρ uses the general "density" meaning, which fits both the volume density and the gas. The bare-μ entry ("In the capstan graph …") is only needed if the scanner sees μ apart from μ_s; uncertain, and `content:check` would report it if unused.
- No em dashes on the page.

## Resolution (2026-11-15, by the page author)

- **Error 1 (callout):** the gas is now "held in place by the gravity of the whole cluster", and g(r) is defined as the cluster's gravitational acceleration at radius r.
- **Warning 2:** the opening now says the tension changes along a rope with mass when gravity acts along it (or it accelerates).
- **Warning 3:** the page now "sets out carefully" differential analysis and points back to the spinning rope on the circular-motion examples page as a first taste.
- **Warning 4:** a bracketed note after the tensions formula says the recording garbles the last step.
- **Warning 5:** "The notes analyse the same effect … for a ship's capstan".
- **Warning 6:** the page-scoped g meaning now also covers g(r) in the callout.
- Info notes 7–9 left as they are (the î meaning is the general one; the others need no change).
