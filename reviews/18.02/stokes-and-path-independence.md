---
page: content/year-1/18.02/stokes-and-path-independence.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-32-stokes-theorem-cont/ (lecture page itself not re-fetched; its transcript and notes read from local copies supplied by the author)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/3515522981d38f99e16097a22c2c9db6_sr7kCpzAuYw.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec32", 5 pages; cited page = PDF page; text per page checked with pdftotext -f N -l N)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week13/ (read: local copy week13.pdf; printed page = PDF page − 1; Lecture 32 is printed pp. 3–4; printed p. 4 starts at "always. (Checked by calculating in terms of components of F")
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-33-maxwells-equations/ (read, for the leadsTo check)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week14/ (read: Week 14 summary PDF, Lecture 33 on printed p. 1)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/11223c52fb049953cd0a8c06e70454b8_BChhAS1sFvA.pdf (read: Lecture 33 transcript, 3 pages)
  - content/year-1/18.02/_course.json (read: Lecture 32 = Stokes' Theorem (cont.), Lecture 33 = Maxwell's Equations)
  - calcs/18.02/stokes-and-path-independence.yaml (read; `npm run calc:test -- -k stokes-and-path`: 4 passed)
verdict: pass-with-notes
---

# Review: Stokes' theorem, path independence and div curl = 0

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers (PDF page − 1). `reading1` = Week 13 summary, `reading2` = transcript. Transcript page map: p. 1 = recap of Stokes and of how line and surface integrals are evaluated, definition of simply connected, space without the origin ("trick question"), space without the z-axis (cylinder going up forever, the doughnut question), the problem-set field as a counterexample, the theorem (curl 0 on a simply connected region ⟹ gradient field), start of the proof up to "we can find S … because the region is simply connected"; p. 2 = Stokes gives ∬ curl F · n̂ dS = 0, the warning about paths on both sides of the z-axis, topology aside (sphere simply connected, torus with two independent loops, "not really an 18.02 topic"), the curve winding twice around the z-axis, Möbius strip, non-orientable, Klein bottles, hemisphere with a twisted slit, "no Möbius strips on the exam", surface independence set-up (S1 half sphere, S2, both normals up); p. 3 = S = S1 − S2 closed with outward normal, divergence theorem, div curl expanded and the three cancelling pairs, u · (u × v) = 0, start of the review, triple integrals (rectangular, cylindrical, bounds with dz first and the shadow, spherical dV = ρ² sin φ dρ dφ dθ, the meaning of ρ, φ, θ), applications (mass, average value, moment of inertia, gravitational attraction), start of surface integrals; p. 4 = n̂ dS formulas (yz-plane, sphere, cylinder, "two integral signs" check, graph ⟨−z_x, −z_y, 1⟩, N/(N · k̂)), advice to practise flux, line integrals, "three different kinds", the bridges: divergence theorem and Stokes, evaluated as any other integral; p. 5 = end of that, fundamental theorem as the bridge between zero and one integral signs, "one more integral sign", finding a potential (two methods), closing remarks. Notes p. 3: Lecture 32 heading, definition, the two examples, topology, theorem, proof, orientability and the Möbius strip, surface independence up to "div(curl F) = 0,"; notes p. 4: "always", ∇ · (∇ × F) = 0 like u · (u × v) = 0, review (three types, n̂ dS formulas, line integrals, bridges a) and b), the fundamental theorem), "One more topic: … finding a potential function".

The four formulas:
- "Path independence from Stokes" (`reading1`, "Lecture 32, p. 3"): notes p. 3, same chain ∫_{C1} − ∫_{C2} = ∮_C = ∬_S ∇ × F · n̂ dS = 0. Correct (also transcript pp. 1–2, said in words).
- "The difference of the two fluxes" (`reading2`, p. 3): transcript p. 3 ("flux integral for S1 minus the flux integral for S2 … triple integral over the region inside … of divergence of curl F dV"). Correct; notes p. 3 has it too.
- "div curl = 0" (`reading2`, p. 3): transcript p. 3, components Ry − Qz, Pz − Rx, Qx − Py, differentiated in x, y, z. Correct.
- "Flux element from a normal vector" (`reading1`, "Lecture 32, p. 4"): notes p. 4, n̂ dS = ±N/(N · k̂) dx dy. Correct (transcript p. 4 says it in words).

Every in-text page citation was checked against the page map above. All are correct, including the ranges (proof pp. 1–2, surface independence pp. 2–3, review pp. 3–5, bridges pp. 4–5, div curl in notes pp. 3–4).

No "rights reserved" or "courtesy" notice in the Lecture 32 transcript text or the Week 13 summary text (grep: no match). No em dash on the page (grep: 0). Internal links (`stokes-theorem`, `divergence-theorem`) point to existing pages; prerequisites `stokes-theorem` and `simply-connected-regions` exist.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | "Simply connected regions", first bullet: "Auroux calls this a trick question: the plane without the origin is not simply connected, but in space there is room to go around the hole." | Transcript p. 1: "So, in fact, this is simply connected. That was a trick question." Nothing about the plane without the origin. The reason the page gives is true (the plane case is Lecture 24) but it is not Auroux's. | The explanation is attributed to Auroux through the colon. | Split it: "Auroux calls this a trick question (p. 1). The contrast is with the plane without the origin, which is not simply connected ([Lecture 24](/courses/18-02/simply-connected-regions)): in space a surface can go around the hole." |
| 2 | warning | `leadsTo` Lecture 33: "Maxwell's equations, where the divergence theorem and Stokes' theorem turn the laws of electricity and magnetism into local equations." | Lecture 33 (Week 14 notes p. 1; transcript pp. 2–3) goes the other way: it states the Gauss–Coulomb law div E = ρ/ε₀ and Faraday's law curl E = −∂B/∂t as local equations and uses the divergence theorem and Stokes' theorem to turn them into statements about a closed surface (∬ E · n̂ dS = Q/ε₀) and a closed loop (∮ E · dr = −d/dt ∬ B · n̂ dS), which Auroux calls the more intuitive form. The lecture also opens with curl of force fields and torque. | "turn … into local equations" | e.g. "Maxwell's equations: the divergence theorem and Stokes' theorem turn the local laws for div E and curl E into Gauss's law for a closed surface and Faraday's law of induction for a loop of wire." Optional: mention the torque interpretation of curl. |
| 3 | warning | "Three kinds of integrals", end | Notes p. 4: "One more topic: given F with curl F = 0, finding a potential function." Transcript p. 5: two methods for finding a potential, to remember for the exam. | Not mentioned | One sentence: finding a potential for a curl-free field, by the two methods of Lecture 30 (antiderivatives, or a line integral along segments), with a link to the existing page. |
| 4 | info | Worked example / "Zero curl means conservative": "The planar example from the problem sets, ⟨−y, x⟩/(x² + y²)" | Transcript p. 1 says only "the example that we had in one of our older problem sets", a plane field that, extended with no z component, is defined everywhere except on the z-axis. The field is not named. | Names the field | Uncertain, not wrong: ⟨−y, x⟩/(x² + y²) is the standard such field and the one Lecture 24 uses (see `simply-connected-regions`), so the identification is very likely right. Optional: "presumably" or "the field of Lecture 24". |
| 5 | info | "Three kinds of integrals", item 1 | Transcript p. 3 and notes p. 4 list applications of triple integrals: mass, average value, centre of mass, moment of inertia, gravitational attraction. | Not mentioned | Optional half sentence. |
| 6 | info | Item 2 (flux) | Transcript p. 4 / notes p. 4 also give the normals of a sphere and a cylinder (straight out or in, position vector divided by the radius) and the notes warn that ⟨−f_x, −f_y, 1⟩ is not n̂ and dx dy is not dS. | Only dS for sphere and cylinder | Optional: add n̂ = ±⟨x, y, z⟩/a (sphere) and ±⟨x, y, 0⟩/a (cylinder). |
| 7 | info | Callout "Curl-free and divergence-free" | Not in Lecture 32 (the page's own note, not attributed to MIT). The claims are correct: curl ∇f = 0 with a converse on simply connected regions; div curl = 0 with a converse (vector potential) on all of space or star-shaped regions; ∇ · B = 0 is why B = ∇ × A. | "on suitable regions, such as all of space" | Correct as written. Optional, to stop readers assuming simple connectivity is enough: space without the origin is simply connected, yet r̂/r² has zero divergence and no vector potential (its flux through a sphere is 4π). Optional MIT link: Lecture 33 transcript p. 3 says div B = 0 is "fortunate" because otherwise surface independence in Stokes would fail for Faraday's law, a direct tie to this page's last section. |
| 8 | info | "Orientability" | Transcript p. 2 also mentions Klein bottles and that there will be no Möbius strips on the exam. | Not mentioned | Fine to omit. |

## Arithmetic and answer checks
- `npm run calc:test -- -k stokes-and-path`: 4 passed.
- (a) P = −y/(x² + y²), Q = x/(x² + y²), R = 0. Q_x = (y² − x²)/(x² + y²)², P_y = −[(x² + y²) − 2y²]/(x² + y²)² = (y² − x²)/(x² + y²)². Q_x − P_y = 0. The first two components R_y − Q_z and P_z − R_x are 0 because R = 0 and P, Q do not depend on z. Correct.
- (b) On r = ⟨cos θ, sin θ, 0⟩, F = ⟨−sin θ, cos θ, 0⟩ = dr/dθ, F · dr = dθ, work 2π. Correct; the explanation (every surface bounded by the circle crosses the z-axis) matches transcript p. 1.
- (c) G = ⟨xy, yz, zx⟩: curl = ⟨R_y − Q_z, P_z − R_x, Q_x − P_y⟩ = ⟨0 − y, 0 − z, 0 − x⟩ = ⟨−y, −z, −x⟩; divergence ∂(−y)/∂x + ∂(−z)/∂y + ∂(−x)/∂z = 0. Correct. Part (c) is original; parts (a)–(b) use the standard field that MIT mentions but does not compute in this lecture, with the page's own working.
- div curl expansion: (R_y − Q_z)_x + (P_z − R_x)_y + (Q_x − P_y)_z = R_yx − Q_zx + P_zy − R_xy + Q_xz − P_yz; the pairs named on the page (R_yx/R_xy, Q_zx/Q_xz, P_zy/P_yz) are the ones in transcript p. 3. Correct.
- Quiz 1: "space without the origin" (index 1). Correct. The distractors are all not simply connected (z-axis removed, solid torus, punctured plane). Explanation correct.
- Quiz 2: index 1 (one side, no consistent normal, flux undefined). Correct; matches transcript p. 2 and notes p. 3.
- Quiz 3: "0 for every F" (index 0). Correct; explanation correct.
- Flashcards: all three correct.
- calcs file: `topology-century` and `two-loops` are `kind: fact` from transcript p. 2 (correct page). `curl-free-work` integrand reduces to 1, giving 2π; `curl-free-third` checks Q_x = P_y numerically at three points. Their `source: {cite: reading2, at: 'p. 1'}` points to where MIT mentions the field; `origin: page-own` is correct. Part (c) and the div curl identity have no calcs entry; optional (a symbolic identity check would be cheap).

## Coverage and order
- Order follows the transcript: recap, simply connected (origin removed, z-axis removed, doughnut question), the theorem and its proof, the warning about the z-axis, topology aside (sphere, torus), Möbius strip and the two-sided alternative, surface independence through the divergence theorem, div curl = 0 and u · (u × v), review (triple, flux, line integrals, the bridges). The notes put the topology remark before the theorem; the page follows the lecture, which is right.
- Left out: finding a potential (finding 3), triple-integral applications (finding 5), sphere and cylinder normals (finding 6), Klein bottles and exam remarks (finding 8).
- Added: the worked example and the "Curl-free and divergence-free" callout, both the page's own and not attributed to MIT.
- `leadsTo` Lecture 33: the lecture is indeed Maxwell's equations and does use both theorems, but the direction is stated the wrong way round (finding 2).

## Licensing
- No "All rights reserved" or "Courtesy of" material in the sources used; the page has no figures (MIT's Möbius strip and twisted-hemisphere pictures are only described in words).
- No OpenStax or LibreTexts material.
- Wording is rewritten throughout; no verbatim sentences from the transcript or notes. Short standard phrases ("simply connected", "bounds some surface", "non-orientable", "one more integral sign") only.

## Notes
- No `<Callout kind="cosmology">` and no cosmology `leadsTo`; acceptable for this maths lecture. The note callout's magnetism remark is a natural link to 8.02 later.
- The page's spherical φ, ρ and the letters P, Q, R, N need meanings in `data/symbols.json` for this page; `content:check` will report any that are missing (not checked here).

## Resolution (2026-11-16, by the page author)

- Warning 1: the remark about the plane without the origin is now in brackets, separate from Auroux's "trick question", with a link to the Lecture 24 page.
- Warning 2: the leadsTo reason now has the right direction (div and curl laws become flux and loop laws via the theorems) and mentions torque.
- Warning 3: added the review topic "finding a potential" (p. 5; notes p. 4) with a link to the Lecture 30 page.
- Info: the callout now adds that r̂/r² on space without the origin has zero divergence but is not a curl (flux 4π through a sphere), and links div B = 0 to surface independence. Other info notes: no change.
