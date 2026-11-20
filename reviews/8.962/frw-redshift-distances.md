---
page: content/year-5/8.962/frw-redshift-distances.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/7d554b8ced54e6d434f1c4acdbadf2a3_p_10lgn2BiI.pdf (read: local copy L19.pdf, 24 PDF pages, text via pdftotext; page numbers checked with pdftotext -f N -l N for pp. 8, 15, 23)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-19-cosmology-ii/ (not opened; the transcript is the only content of the lecture, Hughes writes on the board)
  - https://arxiv.org/abs/astro-ph/9905116 (not read; only cited, number and date match what Hughes says on p. 13)
verdict: pass-with-notes
---

# Review: Observing an FRW universe: redshift, distances, flatness and horizons

The transcript has no slides; every equation was written on the board, so each `<Formula>` is a reconstruction from what Hughes says. I checked each against the transcript page cited and against the physics (signature −,+,+,+, c = 1; Carroll, *Spacetime and Geometry*, ch. 8, used for fact-checking only). All citations point to the right PDF page (the transcript has no printed footer numbers, so PDF page = cited page). No errors found.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "What is measured in practice", type Ia bullet | p. 18: "because it has a defined mass associated with it, every event basically has the same amount of matter participating. This is a standard candle." | States as fact that type Ia supernovae are standard candles "because each explodes when a white dwarf reaches the same mass, the Chandrasekhar mass". | This is Hughes's simplified reasoning, and it is shaky in today's view: SNe Ia are *standardisable* candles (peak brightness calibrated by light-curve width, the Phillips relation), and some may come from sub-Chandrasekhar or merging white dwarfs. Attribute the reason to Hughes ("Hughes explains this by…") or add "nearly the same mass… and their light curves allow the remaining spread to be calibrated". The bracketed correction itself (thermonuclear explosion, no neutron star left behind) is right. |
| 2 | info | Bracket after the d_A branches | p. 15: "one term where it involves minus square root the absolute value of the curvature parameter times sine". | "[For k = +1 the transcript has "minus square root" in front of the sine; the prefactor is 1/√\|Ω_curv\|.]" | The physics of the page is right. But "minus square root" is very likely Hughes reading \|Ω_curv\|^(−1/2) aloud ("to the minus one-half", or "one over square root") rather than a sign slip; the board cannot be checked. The bracket is phrased as what the transcript says, which is honest; consider "the transcript's 'minus square root' means the power −1/2" so it does not read as a lecturer error. The calcs entry `da-closed-branch` is marked `origin: slip`; uncertain. |
| 3 | info | "R₀ from the curvature parameter" | p. 15: "r0 is the Hubble constant now, divided by the square root of the absolute value of the curvature". | R₀ = 1/(H₀√\|Ω_curv\|). | The page is correct (from Ω_curv = −k/(R₀²H₀²)); the transcript has lost the "one over". No bracket needed (it is a transcription/speech gap, not a physics claim), but one could be added for consistency with #2. |
| 4 | info | "Inflation", first sentence | p. 22: "something that our own Alan Guth shares a lot of the credit for helping to develop". | "an idea Hughes credits largely to MIT's own Alan Guth". | Slightly stronger than Hughes; "shares much of the credit for" would be exact. |
| 5 | info | "Killing tensors" | p. 6: "we consider this [the Killing vector] to be a rank one Killing tensor"; for rank n "symmetrize over all n indices". | Omits the "rank one" remark; says the gradient is symmetrised over all n + 1 indices. | n + 1 is correct (Carroll eq. 3.176 style: ∇₍σK_μ₁…μₙ₎ = 0); Hughes's "n indices" is loose speech, page silently right, fine. Could add "a Killing vector is a Killing tensor of rank one". |

## Arithmetic and answer checks
- Killing tensor K = a²(g + UU): matches Carroll's FRW Killing tensor. For null p, g_μν p^μ p^ν = 0, and with (−,+,+,+) the energy measured by U is E = −U_μp^μ, so K = a²(U·p)² = a²E² and aE is constant. Correct; the proof sketch (geodesic equation kills the other term, the symmetric p^αp^μp^ν picks out the symmetrised gradient) is correct.
- ω_obs/ω_em = a_em/a_obs = a_em, λ_em/λ_obs = a_em, z = (λ_obs − λ_em)/λ_em ⇒ a_em = 1/(1 + z): correct.
- Hughes's z = 4.8 → 1/5.8, and his self-correction from 1/4.8: matches p. 8.
- Line element with S_k = sin χ, χ, sinh χ; d_p = aR₀χ; ḋ_p = ȧR₀χ = H d_p: correct.
- Euclidean definitions F = L/(4πd_L²), δθ = δℓ/d_A, θ̇ = v⊥/d_M: match pp. 11–12.
- F1 in z: curvature as n = 2 (w = −1/3), Ω_i sum to 1, H = H₀E(z): correct.
- d_A derivation: δℓ = a_em R₀ S_k(χ) δφ (θ = π/2 plane) → d_A = R₀S_k(χ)/(1 + z). Radial null ray dt = aR₀dχ; dt = da/(aH); a = 1/(1 + z) gives da/a² = −dz, so χ = (1/(R₀H₀))∫₀^z dz′/E. Correct.
- Ω_curv = −κ/H₀² = −k/(R₀²H₀²) ⇒ R₀ = 1/(H₀√|Ω_curv|) for k = ±1: correct. Branches: R₀ sin(√|Ω_c| I)/(1 + z) = sin(√|Ω_c| I)/(H₀√|Ω_c|(1 + z)), likewise sinh; k = 0: I/(H₀(1 + z)). Correct; both curved branches tend to the flat one as Ω_curv → 0.
- d_L = (1 + z)d_M = (1 + z)²d_A, d_M without a (1 + z) factor: matches p. 16 and Hogg's relations; holds for all k (Etherington). Correct.
- Worked example (own numbers, not in the lecture): ∫₀¹(1 + z)^(−3/2)dz = 2(1 − 1/√2) = 0.5858 → 0.586; c/H₀ = 299 792.458/70 = 4282.7 → 4283 Mpc; d_M = 2508.8 → 2509 Mpc; d_A = 1254.4 → 1254 Mpc; d_L = 5017.6 → 5018 Mpc. Maximum of 2(1 − u)u² with u = (1 + z)^(−1/2): u = 2/3, z = 1.25, value 8/27 = 0.2963 → 0.296. All correct. The physical explanation of the turnover is correct.
- Plot: Λ-only flat universe E = 1 gives d_M = z, d_A = z/(1 + z); d_M (matter) → 2c/H₀; d_L grows without limit in both. Correct, and all curves stay inside the range [0, 2.2] on [0, 6].
- Flatness: (a⁻²)/(a⁻³) = a, (a⁻²)/(a⁻⁴) = a²: correct. Inflation: H² = Λ/3 so a ∝ exp(√(Λ/3)t) (c = 1, Λ in G_μν + Λg_μν), Ω_curv/Ω_Λ ∝ a⁻² = exp(−2√(Λ/3)t): correct.
- Scalar field φ̈ + 3Hφ̇ + dV/dφ = 0: standard, signs correct (p. 23 "looks like this" on the board).
- Quiz 1: aE (choice 1), correct. Quiz 2: 1/4 (choice 1), correct. Quiz 3: (1 + z)² (choice 2), correct, and "same for every curvature" is true. Quiz 4: e^120 = 1.30 × 10⁵², e^60 = 1.14 × 10²⁶ (choice 1), correct.
- Flashcards: all five correct.
- calcs file: every number on the page has an entry; entries match the page. I did not run `npm run calc:test`.

## Coverage and order
- The page follows the lecture order: recap and recipe (pp. 1–4), radiation hint (p. 5), Killing tensors (pp. 5–6), FRW Killing tensor and null geodesics (pp. 6–8), redshift (p. 8), time → distance (p. 9), proper distance and Hubble's law (pp. 9–11), three distances (pp. 11–13), Hogg, E(z) (p. 13), d_A derivation (pp. 14–16), distance relations (p. 16), practical measurements (pp. 16–19), flatness and horizon (pp. 19–22, including the post-interruption repeat), inflation and the scalar field (pp. 20–24).
- Left out (harmless): the "rank one Killing tensor" remark (p. 6), hydrogen Balmer lines as an example of spectroscopy (p. 8), the MIT police interruption and recording break (pp. 16–17, 21). Hughes's inconsistent problem-set numbers (p. 13 "p set 8", p. 20 "problem set eight", p. 24 "problem set seven") are avoided by saying "a problem set".
- Added: the worked example and plot (original), the cross-links to 8.286/8.902 pages. Lecturer slips not repeated: p. 21 "falls off as the scale factor to the fourth power" (should be inverse), p. 15 "r0 is the Hubble constant" (finding #3).

## Licensing
- `grep -il "rights reserved\|courtesy"` on the transcript: no matches. No figures used; the plot is generated from formulas.
- No verbatim copying beyond short quoted phrases ("whateveron", "current prejudice", "best wisdom"), which are attributed. Paraphrase is the page's own throughout.
- Hogg (astro-ph/9905116) is only cited as Hughes's recommendation; no content taken from it. No OpenStax/LibreTexts.

## Notes
- Links checked: all linked slugs exist (`cosmological-redshift`, `supernova-evidence`, `flatness-problem`, `horizon-problem`, `inflation-solutions`, `luminosity-and-redshift` in 8.286; `observational-cosmology-distances`, `inflation-scalar-field` in 8.902), course URL slugs `8-286`, `8-902` are right. Claims about them verified: the 8.286 redshift page does follow successive wave crests; the 8.902 page uses f_k(χ) with D_A = f_k/(1 + z), D_L = (1 + z)f_k; the 8.286 "Luminosity and redshift" page does use d_L for the type Ia acceleration result.
- `leadsTo` (8.962 Lecture 20, compact spherical sources) matches the syllabus entry "Spherical Compact Sources I" and Hughes's announcement on p. 1. The cosmology callout's claims are correct.
- "Carroll calls it the instantaneous physical distance" matches p. 10 and Carroll ch. 8.
- The bracketed type Ia note is correct physics: Hughes confused SNe Ia with accretion-induced collapse; a normal SN Ia is a thermonuclear disruption leaving no compact remnant.

## Resolution (2026-11-19, by the page author)

1. Type Ia bullet: the Chandrasekhar-mass reasoning is now attributed to Hughes, and the page adds that type Ia supernovae are standardisable candles, calibrated from how fast the light curve fades, some possibly from sub-Chandrasekhar white dwarfs or mergers. The bracketed correction stays.
2. k = +1 bracket: reworded to say the transcript's "minus square root" is most likely |Ω_curv| to the power minus one half read aloud; calcs entry `da-closed-branch` now has origin `mit`.
3. R₀: no change needed.
4. Inflation credit: now "MIT's own Alan Guth shares much of the credit, Hughes notes".
5. Killing tensors: added that a Killing vector is a Killing tensor of rank one.

Status set to `reviewed`.
