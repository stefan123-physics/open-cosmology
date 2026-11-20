---
page: content/year-5/8.962/buchdahl-equations-of-state-schwarzschild.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/dd826563ba0278e6f3fb2a040ca62e0a_K1vpc9YwlQI.pdf (read: local copy L21.pdf, 17 pages, extracted with pdftotext; page markers = PDF pages, no printed footer numbers; no "rights reserved" or "courtesy" notice in the text)
  - https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/resources/lecture-21-spherical-compact-sources-ii/ (not opened separately; the lecture has no slides or notes, only the transcript and video)
  - Misner, Thorne & Wheeler, Gravitation, eqs. 25.28 and 25.37 (radial infall, cycloid and Schwarzschild-time forms) (from memory, fact-checking only; checked numerically, see below)
verdict: needs-changes
---

# Review: Constant-density stars, Buchdahl's limit, and the puzzles of the Schwarzschild spacetime

The page follows Lecture 21 in Hughes's order and covers every part of it. All physics checked is correct: the constant-density TOV equation, its solution in the form (rho + P)/(rho + 3P) = Q/sqrt(1 - 8 pi G rho r^2/3), the central pressure, the 4/9 limit, the polytrope energy density, the Kretschmann scalar, the world-tube area, and both infall formulas (verified numerically against the geodesic equations). Every transcript page cited contains the material cited. The only error-level findings are two rounding slips in the Buchdahl worked example that do not follow from the page's own stated input (GM_sun/c^2 = 1477 m). The rest are notes on labelling and one lecturer slip that was not flagged.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | Worked example "How small can a neutron star be?", step 1.4 solar masses; quiz 1 choice 0 | (page-own numbers) | Input GM_sun/c^2 = 1477 m, GM/c^2 = 2068 m, then "2GM/c^2 = 4.13 km". | 2 x 2068 = 4136 m = 4.14 km. The 4.13 comes from the precise 1476.6 m, which the page does not give. Write 4.14 km (worked example and quiz choice), and update calcs `horizon-14` (expected 4.14 km with the 1477 m input, or compute from 1477 explicitly). |
| 2 | error | Same worked example, step 2.0 solar masses | (page-own numbers) | GM/c^2 = 2954 m, "r_star > 6.64 km". | 9/4 x 2954 = 6646.5 m = 6.65 km (the calcs `where` text itself says 6.65 while `expected` is 6.64). Use 6.65 km, or state the more precise constant. Note that step 1 uses 4653 m (from 1477) while 4.13 and 6.64 come from 1476.6: pick one input and use it throughout. |
| 3 | warning | "A coordinate singularity", bracket after the world-tube formula | p. 14: "g phi phi in the theta equals pi over 2 plane is just r. gtt is the square root of 1 minus 2gm over r." | Flags only the g_phiphi slip. | The same slip is made for g_tt: it is -g_tt = 1 - 2GM/r, and sqrt(-g_tt) is the square root. Extend the bracket: "the transcript says g_phiphi is 'just r' and g_tt 'the square root of 1 - 2GM/r', meaning sqrt(g_phiphi) and sqrt(-g_tt)". |
| 4 | warning | Formula "Radial infall in proper time" | pp. 15–16: Hughes says he will quote the result, "written as tau over 2GM ... as a function of r"; the formula itself is on the board and not recoverable from the transcript. | Cited to the transcript with "(Hughes writes tau as a function of r; the parametric form is equivalent)". | The cycloid is correct (checked: (dr/dtau)^2 = 2GM/r - 2GM/r0 at three values of eta), but its content cannot be checked against the transcript, unlike the claim that it is "equivalent" to what Hughes wrote. Label it like the Schwarzschild-time formula: "standard result (cycloid form); Hughes writes tau(r) on the board". |
| 5 | warning | Formula "Radial infall in Schwarzschild time" | p. 16: the coordinate-time solution is long, contains a natural log, and r reaches 2GM only as t goes to infinity. | Cited to the transcript as "form of the expression: standard result, used to check the lecture's statement". | The labelling is honest and the formula is right (it is MTW eq. 25.37; verified numerically: dt/dtau = sqrt(1 - 2GM/r0)/(1 - 2GM/r) to 1e-9 at eta = 0.3, 1.0, 2.0; t(0) = 0; diverges at tan(eta/2) = sqrt(r0/2GM - 1), i.e. r = 2GM). But `references: {}` is empty, so the "standard result" has no source a reader can follow. Add a reference key (e.g. MTW section 25.5, or Hartle's textbook) and cite it alongside reading1. |
| 6 | info | "The polytrope", bracket on Hughes's missing step | p. 8: "this becomes rho equals p over gamma minus 1 plus a constant"; Hughes then fixes the constant by rho -> rho0. | Note says Hughes reaches the result but could not reconstruct one step; the page supplies its own. | The note is accurate (pp. 8–10). The page silently also corrects the spoken intermediate: the constant multiplies rho0 (rho = C rho0 + P/(Gamma - 1)), not an additive constant. Optional: say so in the bracket. |
| 7 | info | "The constant-density star", bracket on sound speed | p. 2: "a speed of sound, which is defined as dpd rho that is infinite". | "[The transcript has the speed of sound as dP/drho; it is its square.]" | Correct; keep. |
| 8 | info | "Buchdahl's limit" | p. 5: proof assumes "the pressure profile is not singular in any place"; Weinberg section 11.6. | Follows Hughes. | Fine as attribution. Buchdahl's theorem also assumes an isotropic perfect fluid whose density does not increase outwards; optionally add "and a density that does not increase outwards". |
| 9 | info | Worked example "How small...", step "Reading the result" | (later development, not in lecture) | Radii 11 to 13 km, "about twice the bound". | The 11–13 km range is a fair summary of NICER (PSR J0030+0451, J0740+6620) and GW170817 results, and it is marked as a later development. "About twice" is loose: 12 km / 4.65 km = 2.6 for 1.4 solar masses, 12.4 / 6.65 = 1.9 for 2.0. "Two to three times" is closer. The calcs fact `ns-radii` gives no URL; consider a reference entry. |
| 10 | info | Worked example "Tides at r = 2GM", 10 solar masses | (page-own) | "difference in acceleration of order 10^9 m/s^2" across 2 m. | sqrt(48) GM/r^3 x 2 m = 7.1e8 m/s^2; the actual radial tidal stretch, 2GM L/r^3, is 2.1e8 m/s^2. "Of order 10^9" overstates by a factor 1.5 to 5. Write "several times 10^8 m/s^2". |
| 11 | info | "Schwarzschild everywhere" | p. 11: "There is nothing in this spacetime, and that nothing has a mass of m." p. 3: "nature and analysis conspire and a miracle occurs." | "Nothing everywhere, and that nothing has mass M"; "nature and analysis conspire and a miracle occurs". | Both are close to Hughes's words. They are short and attributed ("Hughes says"), so acceptable; put the second in quotation marks since it is verbatim. |
| 12 | info | Plot of P/rho, slider max C = 0.43 | (page-own) | range [0, 2]. | At C = 0.43 the central pressure is 5.1 rho, so the curve runs off the top of the plot for C above about 0.40. Acceptable (the caption says it grows without limit); a range to 6 would show it. |

## Arithmetic and answer checks
Recomputed with GM_sun = 1.32712e20 m^3/s^2, c = 299792458 m/s (GM_sun/c^2 = 1476.6 m):
- Constant-density TOV: with m = 4 pi rho r^3/3, m + 4 pi r^3 P = (4 pi r^3/3)(rho + 3P) and r(r - 2Gm) = r^2(1 - 8 pi G rho r^2/3); result matches the page: correct.
- Pressure profile: the standard solution P/rho = (A - B)/(3B - A), A = sqrt(1 - 2GMr^2/R^3), B = sqrt(1 - 2GM/R), gives (rho + P)/(rho + 3P) = B/A, and at r = 0 Q = B: the page's form is correct, and 8 pi G rho r^2/3 = 2GMr^2/R^3 as stated.
- Central pressure P_c = rho (1 - B)/(3B - 1): correct. 3B = 1 gives 2GM/R = 8/9, GM/R = 4/9, R > 9GM/4: correct.
- Plot curves: P/rho with x = r/r_star and 2GMr^2/r_star^3 = 2C x^2: correct; dashed curve for C = 0.1 correct.
- Caption: C = 0.1: 0.1056/1.6833 = 0.0627 (0.063): correct. C = 0.3: 0.3675/0.8974 = 0.410 (0.41): correct. C = 0.44: 0.6536/0.0392 = 16.7: correct. 4/9 = 0.444: correct.
- Worked example 1.4 solar masses: 1.4 x 1477 = 2068 m; 9/4 x 2068 = 4653 m = 4.65 km: correct. 2GM/c^2 = 4136 m = 4.14 km, page 4.13: inconsistent (finding 1). Quiz choice 3GM/c^2 = 6204 m = 6.20 km: correct.
- 2.0 solar masses: 2954 m: correct; 9/4 x 2954 = 6646 m = 6.65 km, page 6.64 (finding 2); 2 x 2954 = 5908 m = 5.91 km: correct.
- 9/4 = 1.125 x 2, 12.5%: correct.
- Fermi temperature ratios 1e13/1e9 = 1e4 to 1e13/1e6 = 1e7: correct (p. 6).
- Polytrope: -P d(1/rho0) = K rho0^Gamma drho0/rho0^2 = K rho0^(Gamma-2) drho0; integral K rho0^(Gamma-1)/(Gamma-1) + C = P/((Gamma-1) rho0) + C; rho = C rho0 + P/(Gamma-1), C = 1 from rho -> rho0 as P -> 0: correct.
- Kretschmann I = 48 G^2M^2/r^6 (c = 1): correct. I(2GM) = 48/64 /(G^4M^4) = 3/(4G^4M^4): correct.
- Tides: 10 solar masses: r = 29532 m (29.5 km), sqrt(48) GM/r^3 = 3.57e8 s^-2 (3.6e8): correct. 4e6 solar masses: r = 1.181e10 m, 2.23e-3 s^-2 (2.2e-3): correct; across 2 m 4.5e-3 m/s^2, "a few mm/s^2": correct. (4e5)^2 = 1.6e11: correct. Scaling 1/M^2: correct. Units: c^2 sqrt(I) with I in m^-4 is sqrt(48) GM/r^3 in s^-2: correct.
- World tube: integral of sqrt(-g_tt g_phiphi) = 2 pi r sqrt(1 - 2GM/r) Delta t: correct.
- Cycloid: (dr/dtau)^2 = 2GM/r - 2GM/r0 checked at eta = 0.3, 1.0, 2.5 (r0 = 10 GM): agrees to 1e-11. Total proper time pi sqrt(r0^3/8GM) = pi sqrt(125) = 35.12 GM: correct. Same result as the 8.286 page ((pi/2) sqrt(r0^3/2GM)).
- Schwarzschild-time formula: see finding 5; correct. Plot (r0 = 10 GM): sqrt(r0/2GM - 1) = 2, t = 2 ln(...) + 4[eta + 2.5(eta + sin eta)]: correct. At eta = 2.2: t = 48.33 GM (48.3), r = 2.057 GM (2.06): correct. 2.2 < 2 arctan 2 = 2.214, so no sign problem in the log without abs.
- Quiz: Q1 answer index 1 (4.65 km): correct. Q2 index 1: correct. Q3 index 1: correct. Q4 index 1: correct; "approx 35 GM": correct.
- Flashcards: all correct.

## Coverage and order
- Lecture order (pp.): recap and recipe 1–2; constant-density star 2–4; Buchdahl and "squeeze it" 4–5; entropy and cold EOS 5–7; polytrope and rest-mass density 7–9; model recipe 9–10; Schwarzschild everywhere and point charge 11–12; singular radii and Kretschmann 12–13; world tube and map analogy 13–15; infall in two times 15–16; meaning of t, asymptotic flatness, Einstein synchronisation 16–17. The page follows this order exactly and covers every part.
- Left out (minor, acceptable): the gr tool on the course website (p. 12); the linearised-gravity "only two of ten components radiative" aside (p. 12, mentioned in one clause); hot matter at tens of trillions of kelvin (p. 6).
- Added: the two worked examples, the plots and the cosmology callout (page's own; fine).

## Licensing
- The transcript carries no "All rights reserved" or "Courtesy of" notice. No figures from MIT are reproduced; both graphs are generated from formulas.
- No OpenStax or LibreTexts material.
- Paraphrase is the page's own throughout; two short phrases are close to Hughes's words (finding 11), both attributed.

## Notes
- Forward links: `leadsTo` Lecture 22 ("Black Holes I" in `_course.json`) for light in Schwarzschild, horizon-crossing coordinates and the event horizon matches p. 17 ("we will pick this up in the next lecture ... the motion of light"). The coordinates and horizon are not announced in Lecture 21 itself; they are standard Black Holes I content, so this is reasonable but not verified against the Lecture 22 transcript.
- Links checked to exist: /courses/8-962/schwarzschild-birkhoff-tov, /courses/8-286/falling-into-a-black-hole (which does use the cycloid form, as the page says), /courses/8-902/spherical-collapse.
- Cosmology callout: the Birkhoff argument for an isolated overdense sphere and the gentle horizon tides of supermassive black holes are correct and fairly worded as the site's own connections, not Hughes's.
- Bracketed lecturer-slip notes: sound speed squared (right), g_phiphi = r^2 (right, but the g_tt half of the same slip is missed, finding 3), Hughes's missing step (right; pp. 8–10 confirm he says so twice).
- "(in 8.07 terms, a delta function)" adds "delta function" to Hughes's "singular point charge" (p. 11); harmless.
- No em dashes on the page.

## Resolution (2026-11-19, by the page author)

1. and 2. Constants made consistent: the worked example and quiz now use GM_sun/c^2 = 1477 m throughout: 2GM/c^2 = 4.14 km (1.4 solar masses), 9/4 x 2954 m = 6.65 km (2.0 solar masses). Calcs `horizon-14`, `buchdahl-14`, `quiz-3gm`, `gm-20`-based entries now compute from 1477 m.
3. The g_phiphi bracket now also covers Hughes's "g_tt is the square root of 1 - 2GM/r".
4. and 5. Added a reference `mtw` (Misner, Thorne and Wheeler, Gravitation, section 25.5); both infall formulas now cite it as standard results, noting that Hughes writes tau(r) on the board (transcript pp. 15–16) and states the t behaviour on p. 16.
Info items: the constant of integration note added ("the constant multiplies rho_0; Hughes says plus a constant"); Buchdahl's assumptions (isotropic fluid, density not increasing outwards, non-singular pressure) added; "two to three times the bound"; `ns-radii` fact now names NICER and GW170817 papers with arXiv links; the tide across 2 m is now "several times 10^8 m/s^2"; Hughes's "nature and analysis conspire and a miracle occurs" is in quotation marks; plot range raised to 6 so the curve stays visible up to C = 0.43.

Status set to `reviewed`.
