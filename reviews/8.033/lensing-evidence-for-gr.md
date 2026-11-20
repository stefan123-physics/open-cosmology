---
page: content/year-2/8.033/lensing-evidence-for-gr.mdx
reviewed: 2026-11-17
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture24_bh4/ (read: resource page fetched; PDF "lecture24_bh4", 50 slides, read as extracted text and rendered images, slides 11–16, 25–26 and 31–32 at high resolution)
verdict: pass-with-notes
---

# Review: Light bending, the evidence for general relativity and time travel

Source is slides only (no transcript, no video compared). The deck is titled "MIT Course 8.033, Fall 2006, Lecture 24" (slide 5); the page explains the site's numbering (Lecture 26) in its opening paragraph. No "All rights reserved" notice anywhere in the deck.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "The Einstein field equations" paragraph, last sentence "(slide 26)"; repeated in the cosmology Callout ("The field equations on slide 26 … become the Friedmann equations") | Slide 26 says only that for the FRW metric T_μν "is not zero but takes a simple diagonal form independent of position". It does not mention the Friedmann equations. | Attributes "for the FRW metric, the field equations become the Friedmann equations" to slide 26. The physics is right, but the slide does not say it. | Say what the slide says (T_μν is diagonal and the same everywhere for FRW), then mark the Friedmann step as the page's own link, e.g. "(this is how Friedmann obtained his equations; 8.286 derives them in a Newtonian way)". |
| 2 | warning | Same paragraph: "the Einstein tensor G_μν is built from second derivatives of the metric" | Slide 26 defines G_μν through the Ricci tensor, Riemann tensor and Christoffel symbols: products of first derivatives (ΓΓ terms) as well as second derivatives, plus g_μν itself. | "built from second derivatives of the metric" | "built from the metric and its first and second derivatives". |
| 3 | warning | Hulse–Taylor paragraph: "Slide 32 shows how the measured effects pin down both masses." | Slide 32 is an uncaptioned mass–mass diagram with curves ω̇, γ, Ṗ_b, r and s, crossing at about (1.33, 1.34) solar masses. The r and s curves (Shapiro delay) and the crossing point fit PSR B1534+12, not PSR 1913+16 (Hulse–Taylor masses ≈ 1.44 and 1.39). **Uncertain**: the slide names no pulsar. | Presents it as the Hulse–Taylor masses. | Write "Slide 32 shows how such measured effects (periastron advance, time dilation, orbital decay, Shapiro delay) pin down both masses of a binary pulsar", without saying which pulsar. |
| 4 | warning | Frontmatter | Slides 1, 6, 21, 23 and 41 carry "Courtesy of Andrew Hamilton. Used with permission."; slides 10 and 18 say "Images courtesy of NASA". | The page describes these in words (and names Hamilton in the text) but has no `courtesy:` entry. AGENTS.md rule 3: keep any "Courtesy of" credit in `courtesy:` when such material is referred to. | Add `courtesy:` lines for Andrew Hamilton's simulations and Kruskal diagram, and for the NASA images (slides 10, 18), noting they are described, not reproduced. |
| 5 | info | "Slides 15–16 plot this integral" | Slide 15 is the plot. Slide 16 is text ("Interesting special cases"). | "Slides 15–16 plot …" | "Slide 15 plots this integral … ; slide 16 lists the special cases". |
| 6 | info | Deflection formula | Slide 14 writes Δϕ (\phi). | Δφ (\varphi). | Same quantity. The page uses \varphi throughout to match the previous page. No change needed. |
| 7 | info | Slide 16, third case | The slide writes "For b < √27" (M omitted). | Page writes √27 M correctly. | No change needed. Optionally note it as a slide typo. |
| 8 | info | Slide 31 vs slide 30 | Slide 31's figure labels the merger "250 Million Years"; slide 30 says about 300 million years. | Page uses 300 million (slide 30). | Optional: note the difference in brackets. |
| 9 | info | Quiz 4 explanation, 42% paragraph | 5.7% for a non-spinning hole is not on these slides. | "(compared with 5.7% for a non-spinning hole)" | Correct, and covered on the previous page (schwarzschild-orbits-perihelion). Fine as is. You could add "(last lecture)". |
| 10 | info | Shapiro time delay | Slide 5 lists "Shapiro time delay" as a topic. The deck only has it as "(movie)" in the evidence list on slide 28. The OCW resource description says the delay was covered. | Mentioned only as "the Shapiro time delay of radar signals passing the Sun". | Optional: one sentence of explanation, marked as the page's own (radar echoes from planets passing behind the Sun come back later than they would in flat space). |
| 11 | info | leadsTo 8.286 Lecture 7 "Einstein's field equations for a uniform universe: the Friedmann equations" | — | Guth derives the Friedmann equation in a Newtonian way. The 8.286 friedmann-equation page says Friedmann derived it from general relativity, so the link is fair. | Optional: say "the same equations Friedmann derived from the field equations". |

## Arithmetic and answer checks
I recomputed everything independently (NumPy/SciPy in a scratch script), and `npm run calc:test` passes (3510 tests).
- Photon orbit equations (slide 12, eq. 4): the slide's form matches what I derived from dφ/dλ = L/r² and dt/dλ = E/(1−2M/r): (dr/dt)² = (1−2M/r)²[1 − b²(1−2M/r)/r²] = γ_r⁻⁴[1 − (b/γ_r r)²], and r dφ/dt = b/(rγ_r²). The page copies the slide exactly. The citation "slide 12" is correct.
- Deflection integral (slide 14): substituting u = r_min/r and r_min²/b² = 1 − 2M/r_min gives exactly the integrand on the slide. b = (1 − 2M/r_min)^(−1/2) r_min is also on slide 14. Citation correct.
- Weak field: integral at r_min = 1000M ÷ (4M/b) = 1.003. Δφ ≈ 4M/b confirmed. The Newtonian 2M/b is on slide 16.
- Δφ = π at b = 5.3570M (r_min = 3.521M), matching slide 16's 5.357M.
- √27 = 5.196, and 3/√(1−2/3) = √27 (photon sphere ↔ critical b). Area ratio 27/4 = 6.75 (the slide says "≈ 7").
- Example (a) and quiz 1: 4GM/(c²R) = 8.489 × 10⁻⁶ rad = 1.751″. Newtonian half = 0.875″, so "0.87" is right (truncated). This 0.87 is not in the calcs file (minor).
- Example (b): GM/c² = 5.906 × 10⁹ m; 2√27 GM/c² = 6.14 × 10¹⁰ m; 8.0 kpc = 2.469 × 10²⁰ m; angle = 51.3 μas. All correct. EHT 2022: Sgr A* ring 51.8 ± 2.3 μas, so "about 52" is right. (Strictly, EHT measured the emission ring, which is close to but not the same as the shadow. The page's wording "measured a ring" is accurate.)
- Example (c): 8766/7.75 = 1131.1 orbits; × 3.1 mm = 3.51 m per year. Correct.
- Slip claim, slide 31 "3.1mm/year": confirmed. Slide 30 says 3.1 mm per orbit. An independent check from Ṗ_b ≈ −2.4 × 10⁻¹² and a ≈ 1.95 × 10⁹ m gives Δa = (2/3)a·Ṗ_b ≈ 3.1 mm per orbit, about 3.5 m per year. The page's correction is right.
- Mercury: 3600/43 × 100 = 8372 years per degree, so "about 8400" is right (slide 30).
- Kerr efficiency: 1 − 3^(−1/2) = 0.4226, so 42% (slide 37). Schwarzschild 1 − √(8/9) = 0.0572, so 5.7%.
- Hulse–Taylor data on the page (1974, 59 ms, 7.75 h, 1.1 and 4.8 R_sun, 3.1 mm per orbit, about 300 Myr, 4.2° per year, Nobel 1993) match slides 29–30 and the published values.
- Slip claim, slide 39 Gödel "1937": confirmed. Gödel's rotating-universe solution was published in 1949 (Rev. Mod. Phys. 21, 447). The other dates on the slide (Wells 1895, Tipler 1974, Morris–Thorne–Yurtsever 1988, Gott 1991) are correct.
- Quiz answers: Q1 → index 3 (1.75″), correct. Q2 → index 0 (√27 M ≈ 5.2M), correct. Q3 → index 1 (gravitational waves), correct. Q4 → index 2 (about 42%), correct. All explanations are correct.
- Flashcards: all three are correct.
- Later developments: Gravity Probe B final results 2011 (frame dragging and geodetic effect); LIGO first detection September 2015 (announced 2016); EHT M87* 2019 and Sgr A* 2022. All correct and marked as later.

## Coverage and order
- The page follows the deck in order: recap (1–6), lensing (7–10), photon orbits and deflection (11–16), films and images (17–23), the "what's wrong" picture (24), field equations (25–26), evidence (27–28), Hulse–Taylor (29–32), 42 (33–37), time travel (38–39), Kruskal and wormholes (40–45), mysteries (46–50). No slide is skipped.
- Content omitted from slides: slide 2's orbit equations (the effective-potential recap; covered on the previous page); slide 26's definitions of R_μν, R, Riemann and Christoffel, g^μν, and the Kerr metric as the axially symmetric solution; slide 47's "M-theory? Black hole evaporation?". These are acceptable omissions for an "optional" slide, but the Kerr mention could be one clause.
- The page's answer to slide 24 is clearly marked as its own.

## Licensing
- No images are reproduced. Hamilton's simulations and Kruskal diagram, NASA images, the Wikipedia/other photographs and the "Figure by MIT OCW" figures are described in words only. See finding 4 about the missing `courtesy:` entries.
- Slide 10's long NASA caption is not copied as a whole, but one span stays close: page "the distant galaxy 1938+666 imaged into an Einstein ring by an intervening galaxy" vs caption "the distant galaxy 1938+666 which has been imaged into an Einstein ring by an intervening galaxy". Rephrase (e.g. "an intervening galaxy bends the light of the far galaxy 1938+666 into a ring").
- Other wording close to the slides (short; suggest light rewording):
  - slide 12 "the only constant of motion that we need to keep track of" → page "the only constant of motion to keep track of";
  - slide 13 "the smallest r-coordinate that the photon would ever get if the black hole were not there and the photon simply moved in a straight line" → page "the closest the photon would come if the mass were not there and it moved in a straight line";
  - slide 16 "with 27/4 ≈ 7 larger area than you might naively expect" → page "with 27/4 times the area one might naively expect";
  - slide 30's Hulse–Taylor paragraph: the page follows its sentence order and phrasing ("in an elongated orbit (period 7.75 hours, …)", "Mercury does 1° every 8400 years"). The data are facts, but the sentence structure is the slide's. Restructure.
  - slide 39 "shows that the universe itself could be a time machine", "vast, spinning cylinder" → page nearly identical. Short, but could be reworded.
- No OpenStax or LibreTexts material. No em dashes found (`grep —` gives no matches).

## Notes
- Formula citations: both `<Formula>` blocks are on the slides they cite (slide 12 eq. 4; slide 14). The field equation G_μν = 8πG T_μν is inline, not a `<Formula>`. That is allowed, but it is a display equation on slide 26 and could be a cited `<Formula at="slide 26">`.
- 8.286 links: `/courses/8-286/friedmann-equation` (Lecture 7) and `/courses/8-286/cosmological-redshift` (Lecture 5) exist with those lecture numbers. "the cosmological redshift … is how the expansion of the universe was found" is fair (Slipher/Hubble), though it is the page's own claim, not the slide's.
- Uncertain: slide 32's pulsar identity (finding 3) rests on reading the plot (crossing point near 1.33/1.34 M_sun and the presence of r, s Shapiro curves).

## Resolution (2026-11-17, by the page author)

- Warning 1: the Friedmann-equation statement is marked as the page's own; slide 26's actual content (T_μν diagonal and the same everywhere for FRW) is given.
- Warning 2: G_μν is now "built from the metric and its first and second derivatives".
- Warning 3: slide 32 is described as a mass–mass diagram for a binary pulsar, without naming it.
- Warning 4: a `courtesy` entry now credits Andrew Hamilton's simulations and NASA's images (neither reproduced).
- Licensing: the slide-10 caption, the slide-30 paragraph and the slide-39 Gödel/Tipler items are reworded.
- Info: slide 15 is the plot and slide 16 the list; slide 31's 250 million years is noted.
