---
page: content/year-1/18.02/flux-through-surfaces.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lecture-27-vector-fields-in-3d/ (read: local copy lec.html, title "Lecture 27: Vector Fields in 3D"; its .pdf link is 1e8454840e4a5ba924294fb34ac4dda1_phk05iSMezA.pdf, matching the transcript reading)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/1e8454840e4a5ba924294fb34ac4dda1_phk05iSMezA.pdf (read: local copy transcript.pdf, "ocw-18_02-f07-lec27", 4 dense pages, no printed page numbers; cited page = PDF page; text per page checked in tp.txt; the text layer drops "+" signs)
  - https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/resources/lec_week11/ (read: local copy week11.pdf; PDF p. 1 is a cover, so printed page = PDF page − 1. Printed p. 2 (PDF p. 3) ends Lecture 26 (F_z integral, Newton's theorem), then the Lecture 27 header, vector fields in space, flux, dS⃗ = n̂ dS, two choices of n̂, the geometric interpretation (parallelepiped, base × height) and Example 1 (radial field, a(4πa²)). Printed p. 3 (PDF p. 4) has Example 2 (H = z k̂, (4/3)πa³), "Setup", the formulas to remember 0)–3) (planes, sphere, cylinder, graph n̂ dS = ⟨−f_x, −f_y, 1⟩ dx dy), then Lecture 28)
  - content/year-1/18.02/_course.json (read: Lecture 27 = Vector Fields in 3D; Lecture 28 = Divergence Theorem)
  - content/year-4/8.286/newtons-static-universe.mdx (read: lecture 5, target of the callout link and the leadsTo; Gauss's law ∮ g⃗ · da⃗ = −4πG M_enclosed, cited to the Lecture 6 slides)
  - calcs/18.02/flux-through-surfaces.yaml (read; `npm run calc:test -- -k flux-through`: 6 passed)
  - `npm run content:check`: 0 errors; the only warning for this page is the missing review file
verdict: needs-changes
---

# Review: Vector fields in space and flux through surfaces

Citation convention checked: transcript pages are PDF pages; notes pages are printed page numbers (PDF page − 1). `reading1` = Week 11 summary, `reading2` = transcript. All four formulas are at the cited place:
- "Flux in space" (`reading2`, pp. 1–2): the definition ∫∫_S F⃗ · n̂ dS is boxed on transcript p. 2 and dS⃗ = n̂ dS is on p. 2; p. 1 only introduces flux through a surface and the unit normal. Acceptable; "p. 2" would be exact (#5). Also notes p. 2.
- "Flux of the radial field" (`reading2`, p. 2): transcript p. 2 (F · n̂ = a, a ∫∫ dS = a · 4πa² = 4πa³). Correct; also notes p. 2.
- "Flux of z k through the sphere" (`reading2`, p. 3): transcript p. 3 (z = a cos φ, dS = a² sin φ dφ dθ, bounds 0..π and 0..2π, −cos³φ/3, 2/3, (4/3)πa³). Correct; the setup H · n̂ = z²/a is on p. 2. Also notes p. 3.
- "Flux through a graph" (`reading1`, "Lecture 27, p. 3"): notes p. 3, item 3) "n̂ dS = ⟨−f_x, −f_y, 1⟩ dx dy". Correct. The notes have no ±; the ± is from transcript p. 4 ("Plus/minus depending on which way you want it to go"), so the page's form is supported.

No "rights reserved" or "courtesy" notice in the transcript, the Week 11 summary or the lecture page (grep: no match). The lecture's pictures are not reproduced. No em dash on the page (grep: 0).

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Two examples on a sphere", second paragraph: "(pp. 2–3; notes, p. 2)" | Example 2 (H = z k̂) is on notes printed p. 3 (PDF p. 4), first lines. | notes, p. 2 | "(pp. 2–3; notes, p. 3)". |
| 2 | error | "Setting up flux integrals", first paragraph: "(transcript, p. 3; notes, p. 2)" and "(pp. 3–4; notes, p. 2)" | "Setup. Sometimes we have an easy geometric argument …" and the list "formulas to remember" 0)–3) are on notes p. 3. | notes, p. 2 (twice) | "notes, p. 3" in both places. |
| 3 | error | Cylinder bullet "(p. 4; notes, p. 2)" and graph bullet "(p. 4; notes, p. 2)" | Items 2) cylinder and 3) graph are on notes p. 3. | notes, p. 2 | "notes, p. 3" in both bullets (the graph formula's own `<Formula>` already correctly cites p. 3). |
| 4 | warning | Cosmology callout, last sentence: "Gauss's law for gravity, which Guth uses to find the gravity of a uniform distribution of matter" | The linked page (`newtons-static-universe`, Lecture 5) uses Gauss's law to show that a static, uniformly filled universe is impossible (g⃗ = 0 everywhere would force zero enclosed mass); it does not use it to find the field of a uniform distribution (that page's shell sum around Q uses the shell theorem, and Gauss's law there is cited to the Lecture 6 review slides). | "which Guth uses to find the gravity of a uniform distribution of matter" | Say what the linked page does, as `greens-theorem.mdx` already does: "Guth applies it to closed surfaces in a uniform universe to show that such a universe cannot be static; see …". |
| 5 | info | `<Formula label="Flux in space">`, `at="pp. 1–2"` | The boxed definition and dS⃗ are both on transcript p. 2. | pp. 1–2 | Optional: `at="p. 2"`. |
| 6 | info | "Flux through a surface", last paragraph (velocity-field interpretation) | In the transcript this comes last (p. 4, "One last thing I want to say"); in the notes (p. 2) it comes before the examples. | Placed before the examples, citing p. 4 and notes p. 2 | Fine: it follows the notes' order. No change needed. |
| 7 | info | Vector fields, gradient bullet: "gravitational and electric fields are gradients of potentials" | Transcript p. 1 says the same ("given by the gradient of the gravitational or electric potential"). | Same | Optional: "(up to sign) gradients of potentials", since with the usual convention g⃗ = −∇Φ. |
| 8 | info | Callout: "the flux counts the mass inside" | The page shows the flux is −4πGM through every sphere centred on the mass; that it holds for every closed surface needs the divergence theorem (Lecture 28). | Stated generally | Optional: add "(for any closed surface, by the divergence theorem of the next lecture)". |

## Arithmetic and answer checks
- Radial field: n̂ = ⟨x, y, z⟩/a, F · n̂ = (x² + y² + z²)/a = a; a · 4πa² = 4πa³. Correct (calc `radial-flux`).
- z k̂: H · n̂ = z²/a; (a² cos²φ / a) · a² sin φ = a³ cos²φ sin φ; ∫₀^π cos²φ sin φ dφ = [−cos³φ/3]₀^π = 1/3 + 1/3 = 2/3; 2π a³ · 2/3 = (4/3)πa³. Correct (calc `zk-flux`, a = 1.5: 14.137).
- Worked example (a): n̂ = ⟨x, y, 0⟩, F · n̂ = x² + y² = 1; side area 2π · 1 · 2 = 4π = 12.566 ≈ 12.6. Correct.
- Worked example (b): k̂ · n̂ = z = cos φ on the unit sphere, dS = sin φ dφ dθ; ∫₀^{π/2} cos φ sin φ dφ = 1/2; 2π · 1/2 = π, equal to the area of the unit disc (the flux of k̂ through it). Correct.
- Worked example (c): n̂ = k̂, G · k̂ = z = 2 on the plane, disc area π, flux 2π. Correct.
- Callout: |g⃗| = GM ρ/ρ³ = GM/a² on the sphere, pointing in, so g⃗ · n̂ = −GM/a²; times 4πa² gives −4πGM, independent of a. Correct, and the sign matches −4πG M_enclosed on `newtons-static-universe`.
- Quiz 1: "a surface" (index 1). Correct.
- Quiz 2: ⟨x, y, 0⟩/a (index 1). Correct; explanation matches transcript p. 4.
- Quiz 3: 4π (index 1); 4πa³ with a = 1. Correct.
- Flashcards: all three correct (definition and dS⃗; sphere and cylinder n̂, dS; graph ±⟨−f_x, −f_y, 1⟩ dx dy over the shadow).
- `npm run calc:test -- -k flux-through`: 6 passed. The calcs file covers every number on the page.

## Coverage and order
- Lecture order (transcript): vector fields in space and examples (p. 1); flux through a surface, unit normal, orientation (pp. 1–2); definition, dS vs dA, tangent field gives zero, dS⃗ = n̂ dS and the planar ⟨dy, −dx⟩ analogy (p. 2); Example 1 (p. 2); Example 2 (pp. 2–3); student questions (p. 3); setup: planes (p. 3), sphere, cylinder, graph (p. 4); geometric interpretation (p. 4). The page follows this order, except the interpretation, which it places with the definition as the notes do (#6).
- Everything in the notes' Lecture 27 section is covered.
- Left out (minor, all info): the student question whether flux can be written like M dx + N dy (p. 3: no, it needs two variables and Jacobians); the remark why n̂ uses a rather than ρ (p. 2); for the cylinder, the substitution x = a cos θ, y = a sin θ (p. 4); for the graph, that dS = |⟨−f_x, −f_y, 1⟩| dx dy and n̂ is that vector scaled to unit length (p. 4); "more complicated planes: next time" (p. 3).
- Added: the worked example (own numbers) and the cosmology callout. Both are marked as the page's own.
- leadsTo: 18.02 Lecture 28 is "Divergence Theorem"; the notes' Lecture 28 begins with more flux setups (graphs, parametric surfaces) before the divergence theorem, so "More flux integrals, and the divergence theorem" is accurate. 8.286 Lecture 5 resolves to `newtons-static-universe` (lecture: 5), whose subject is Gauss's law for gravity. Correct; see #4 for the callout's wording.

## Licensing
- No "All rights reserved" or "Courtesy of" material in either source; none reused.
- No paragraphs copied. Close but short echoes: "like a net" (transcript p. 1), "contents of a slanted box with base ΔS and side F⃗" (notes p. 2: "contents of a parallelepiped with base ΔS and third side given by F⃗"), "base times height". Short phrases of standard terminology; acceptable.
- The worked example is original: MIT's examples are ⟨x, y, z⟩ and z k̂ through a sphere (both reproduced as MIT's, correctly attributed); the cylinder, hemisphere and disc cases are the page's own.
- No OpenStax or LibreTexts material.

## Notes
- The prose citation "(p. 1)" after "temperature or pressure gradients" sits inside a list whose lead-in cites the notes; temperature and pressure appear only in the notes (p. 2), not in the transcript. Fine as is.
- The link to `/courses/18-02/spherical-coordinates` for the surface element is appropriate: dS = a² sin φ dφ dθ was derived in Lecture 26 (notes p. 1), and the transcript (p. 3) recalls it from "last time".
- Read-aloud of integrals with grouped upper limits is a known site issue (lib/speech.ts), not this page's fault; not checked further.
- I compared the page as it is on disk at review time (10,858 bytes; calcs 2,113 bytes).

## Resolution (2026-11-16, by the page author)

- **Errors 1–3:** the five prose citations of material on printed p. 3 of the Week 11 notes now say "notes, p. 3".
- **Warning 4:** the callout now says Guth applies Gauss's law to closed surfaces in a uniform universe to show it cannot be static, and that it holds for any closed surface by the divergence theorem.
- Info: "gradients of potentials, up to sign". The other info items are left as they are.
