---
page: content/year-5/8.962/einstein-hilbert-action.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/b1260b964d101757fa3f3bb2eb8cefa3_JNWXzIFcf3g.pdf (read, local copy L13.pdf / L13.txt and per-page text p13/1-19.txt; 19 PDF pages, no printed footers, so page = PDF page)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-13-the-einstein-field-equation-variant-derivation/ (not fetched; the lecture has no slides or notes, the transcript is the only source)
  - Carroll, Spacetime and Geometry, sections 4.3 and 4.8; Carroll, Duvvuri, Trodden and Turner, Phys. Rev. D 70, 043528 (2004) (fact-checking only, from knowledge, not re-read here: uncertain only where noted)
verdict: needs-changes
---

# Review: The field equation from an action

The transcript contains no "rights reserved" or "courtesy" notice (grep on L13.txt). Hughes writes nearly every equation on the board without reading it out, so for most formulas the transcript only confirms the step and its page, not the exact form; the forms on the page were checked against standard GR (Carroll ch. 4) in signature (−,+,+,+).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Varying the metric", paragraph after the formula "The traced Ricci variation is a divergence" | Hughes (p. 9, not p. 8): we must be careful because we are varying the metric; "once we have finished our variational principle, we will settle down to a metric where that is the case" (∇g = 0). This is a lecturer slip: metric compatibility of the Levi-Civita connection holds for every metric, on or off shell. | "∇g = 0 holds for the metric that solves the problem, not for the varied one in the middle of the calculation" (repeats the slip, and states as fact that ∇g = 0 holds only on shell). | Rewrite: "The covariant derivatives act on δg^μν, not on g^μν. The connection is built from g, so ∇g = 0 always, but δg^μν is an arbitrary symmetric tensor and ∇δg^μν does not vanish." Optionally add a bracketed note that Hughes phrases this as a property of the final metric (writing rule 4). Cite transcript p. 9. |
| 2 | error | Formula "Gravity plus matter", `at="transcript p. 12"` | The general action ("S as the integral d4x square root minus G R over 16 pi G plus the Lagrangian for ... matter") is spoken at the top of PDF p. 13; p. 12 ends with "More generally, we should". | p. 12 | Change to `at="transcript pp. 12–13"` or `"transcript p. 13"`. The prose "(transcript pp. 12–13)" just above is fine. |
| 3 | warning | "Varying the metric", sentence "The covariant derivatives acting on the varied metric do not vanish ... (transcript pp. 8–9)" | This remark is only on p. 9. | pp. 8–9 | Cite p. 9 (together with fix 1). |
| 4 | warning | "A scalar field" paragraph: "LIGO observations of merging black holes and neutron stars now give the tightest limits" | Hughes in 2020 (p. 17): "very recently, the most stringent limits on these possible modifications ... have come about from things like LIGO observations". | Stated in the present tense as a general fact. | Attribute it ("Hughes said in 2020 that ... ") and soften: for the simplest scalar-tensor theory (Brans–Dicke) the Cassini time-delay bound from the solar system remains far tighter than gravitational-wave bounds; GW170817 mainly ruled out theories that change the speed of gravitational waves. Suggested: "gravitational-wave observations (LIGO and Virgo) now constrain many of these theories, and so far show no sign of a scalar". |
| 5 | info | Formula "A scalar-tensor action" (p. 16), "A massive scalar field" (p. 5), "Electromagnetic stress-energy tensor" (p. 14), "Field equation of the 1/R theory" (pp. 14–15) | Hughes writes these on the board without reading them: p. 5 only "a kinetic term ... quadratic in the derivatives" and "the field squared coupling to a parameter with the dimensions of mass"; p. 16 "supplementing this with an action for the scalar field, which, up to an overall constant at least, I will write". | Exact forms with specific normalisations (−½, f(ψ)R − ½(∂ψ)² − V). | The forms are standard and correct (the scalar-tensor action matches Carroll's eq. 4.183 form). Consider one bracketed sentence in the intro saying that equations Hughes writes on the board without reading them are given in their standard form (as in Carroll ch. 4), so the reader knows the transcript does not show their exact normalisation. |
| 6 | info | "A scalar field" paragraph | Hughes adds that Carroll's section on scalar-tensor theories is "a little bit out of date now" (p. 17). | Omitted. | Optional. |
| 7 | info | Quiz Q3 and the Palatini bullet | Hughes: the connection equation gives a metric-compatible connection, hence the Christoffel symbols (pp. 10–11). | Same. | Correct for a torsion-free connection; with a general connection the Palatini equation fixes it only up to a projective mode. A bracketed "(assuming no torsion)" would be precise, not required. |
| 8 | info | `leadsTo` 8.902 Lecture 12 | 8.902 inflation page uses $\mathcal{L} = \frac12\partial_\mu\phi\partial^\mu\phi - V$, signature (+,−,−,−). | "built in the same way as the scalar-field actions here" | Fair claim; the sign of the kinetic term differs only by signature. No change needed. |

## Arithmetic and answer checks
All recomputed independently.
- Determinant identity: δg = g g^μν δg_μν = −g g_μν δg^μν, so δ√−g = −δg/(2√−g) = −½√−g g_μν δg^μν. Correct (Carroll 4.66 form).
- δR_μν = ∇_ρ δΓ^ρ_νμ − ∇_ν δΓ^ρ_ρμ: correct (Carroll 4.62 / Palatini identity).
- g^μν δR_μν = ∇_σ(g_μν ∇^σ δg^μν − ∇_λ δg^σλ): correct (Carroll 4.64). Signs and index placement consistent.
- Varied action: δ√−g R + √−g R_μν δg^μν = √−g (R_μν − ½R g_μν) δg^μν. Correct.
- T_μν = −(2/√−g) δ(√−g L_M)/δg^μν: with S = ∫√−g (R/16πG + L_M), stationarity gives G_μν/16πG + (1/√−g) δ(√−g L_M)/δg^μν = 0, i.e. G_μν = 8πG T_μν. Correct sign and factor.
- EM tensor T_μν = F_μα F_ν^α − ¼ g_μν F²: correct for L = −¼F² in Heaviside–Lorentz units (Carroll 4.76 form).
- Klein–Gordon: ∂L/∂φ = −m²φ, ∂L/∂(∂_μφ) = −η^μν∂_νφ, EL: −m²φ + □φ = 0. Correct; □ = −∂_t² + ∇² in (−,+,+,+). The bracketed note on Hughes's "m²φ" is accurate (p. 5).
- 1/R field equation: general f(R) equation f′R_μν − ½f g_μν + (g_μν□ − ∇_μ∇_ν)f′ = 8πG T_μν with f = R − α/R, f′ = 1 + α/R², f = (1 − α/R²)R, (g□ − ∇∇)f′ = α(g□ − ∇∇)R⁻². Matches the page and the CDTT 2004 equation with α = μ⁴ (normalisation M_p² = 1/8πG). α = 0 gives G_μν = 8πG T_μν, as Hughes says (p. 15).
- "Competes with R when R ~ √α": α/R ~ R gives R ~ √α. Correct. "R² term dominates when R > 1/β": correct. β has dimension length², so with G = c = 1 the Planck scale is β ~ ħ (Planck length²); the page's bracket correcting Hughes's "ħ⁻¹" (p. 16) is right (Hughes probably meant the curvature scale 1/β ~ ħ⁻¹).
- Worked example 1: 3 × 4 × 0.01 = 0.12; 2.01³ − 8 = 0.120601; g_ii δg^ii = a²(−2δa/a³) = −2δa/a, times 3 = −6δa/a, × (−½a³) = 3a²δa. All correct.
- Worked example 2: F_01 = −E matches Carroll's convention (F^01 = E). F² = 2F_01F^01 = −2E² (= 2(B² − E²)). T_00 = E² − ½E² = ½E²; T_11 = −E² + ½E² = −½E²; T_22 = +½E². Correct (tension along, pressure across). ½ε₀E² = 4.427 J/m³ → 4.43; 8πG/c⁴ × 4.427 = 9.19 × 10⁻⁴³ m⁻². Correct.
- Quiz: Q1 answer 1 correct; Q2 answer 1 correct (distractor 4 has the wrong sign and factor, fine as a distractor); Q3 answer 1 correct (see finding 7); Q4 answer 1 matches Hughes p. 15. Explanations correct.
- Flashcards: all correct.
- Calcs file: entries match the page. The `klein-gordon` entry is circular (ω is defined as √(k² + m²), then checked against it) and `one-over-r-limit` is trivial; they test nothing about the page beyond the dispersion relation. Not an error; a symbolic check of the f(R) form (f′ and f) is already in `f-of-R-trace`.

## Coverage and order
- Page follows the transcript order: recap (pp. 1–2), Hilbert and priority (pp. 2–3), action principles and scalar-field example (pp. 3–6), choice of gravitational Lagrangian (pp. 6–7), metric variation (pp. 7–9), boundary term: Carroll's argument, Palatini, extrinsic curvature / Wald App. E (pp. 9–12), matter and T_μν, EM example (pp. 12–14), modified gravity: 1/R, R², scalar-tensor, LIGO (pp. 14–17), halfway outline (pp. 17–19).
- Nothing substantive left out. Omitted asides: exercises in Hughes's notes (p. 13), spring-break scheduling remark (p. 19), Carroll's section being out of date (p. 17). Additions not in the lecture: the Gibbons–Hawking–York name (bracketed, correct), the 2004 date of the CDTT paper (Hughes: "coming up on its second decade"; PRD 70, 043528 (2004), consistent), both worked examples (original), the plot.
- Hughes's other slips checked: "Laplace operator on potential is 4πGρ" (correct, not a slip); φ "related to g_00 ... up to a factor of 2" (not repeated on the page); "the variation of the Lagrange density itself ... must be zero" (p. 4, loose; the page states the correct stationarity condition instead); the ∇g remark (finding 1, repeated).

## Licensing
- No "rights reserved" or "courtesy" notice in the transcript. No OpenStax/LibreTexts material. Carroll and Wald are named as further reading only; no text copied from them.
- Paraphrase: short quoted phrases ("By something of a miracle", "party tricks") are in quotation marks; "horrible mess of coupled, nonlinear partial differential equations" is close to Hughes's wording (p. 18) but short; acceptable, could be put in quotes. No paragraph-level copying found.
- Worked examples are the page's own (no worked numbers in the lecture).

## Notes
- Cosmology callout: the 1/R motivation (acceleration without Λ) is what Hughes says (p. 15); "the scalar-field action is also the template for inflation" is a fair forward link. Fine.
- `leadsTo`: Lecture 14 "Linearized Gravity I", Lecture 18 "Cosmology I", Lecture 20 "Spherical Compact Sources I" exist in `content/year-5/8.962/_course.json` and match Hughes's outline (pp. 18–19). 8.902 Lecture 12 page exists and introduces the inflaton Lagrangian. Correct.
- No em dashes on the page. Ends with `## Summary`. Signature and c = 1 stated.
- Plot: generated from formulas; at α = 2 and R = 0.25 the curve (−7.75) leaves the y-range [−4, 4]; presumably clipped by the component, not checked in a browser.

Summary of findings: 2 errors (a repeated lecturer slip about ∇g = 0 holding only on shell; the "Gravity plus matter" formula cited to p. 12 instead of p. 13), 2 warnings (p. 8–9 citation for the ∇δg remark; LIGO "tightest limits" stated as current fact without attribution and overstated for Brans–Dicke), 4 info. All formulas, signs and numbers otherwise verified correct.

## Resolution (2026-11-19, by the page author)

- #1: rewrote the paragraph. The surviving covariant derivatives act on the arbitrary tensor δg^μν; ∇g = 0 holds for every metric. Added a bracket on Hughes's wording and cited p. 9.
- #2: "Gravity plus matter" now cites pp. 12–13.
- #3: the ∇δg remark now cites p. 9.
- #4: the LIGO limits are now attributed to Hughes in 2020 ("among the most stringent recent limits"). A bracket notes that Cassini still bounds Brans–Dicke more tightly. The flashcard and summary now mention solar-system tests as well.
- Info: the introduction says that board equations are given in their standard forms and normalisations. Added Hughes's remark that Carroll's section is a little out of date. The Palatini statement now assumes a torsion-free connection. The 8.902 leadsTo is kept. The weak calcs entries are left as they are; they are not wrong.
- Status set to reviewed.
