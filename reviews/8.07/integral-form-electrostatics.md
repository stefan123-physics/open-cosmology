---
page: content/year-4/8.07/integral-form-electrostatics.mdx
reviewed: 2026-11-18
sources_read:
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/resources/mit8_07f12_ln3/ (not opened online; the PDF it links was read from a local copy supplied for this review)
  - https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/f2199e24495c1d5e22e03cae0e85d96a_MIT8_07F12_ln3.pdf (read, local copy; handwritten, no text layer; 11 PDF pages = printed pp. 1-10 + OCW citation page; pp. 1-4 read as rendered images, p. 1 unnumbered, pp. 2-4 with circled numbers)
  - 8.07 Lecture Notes 4 (typed, local copy, text) and Lecture Notes 5 (handwritten, local copy, pp. 1 and 7 read as images), only to check the two leadsTo claims
verdict: pass-with-notes
---

# Review: The integral form of electrostatics

Lecture Notes 3 are Guth's handwritten notes for Lecture 6 (Monday, September 17, 2012): ten numbered pages, boxed results, no equation numbers. The page covers printed pp. 1-3 (p. 4 begins "Work and Energy", which belongs to the companion page). All ten `<Formula>` citations were checked against the page images: content, signs and page numbers are correct (three differential equations, the line integral of E with V(a) − V(b), the boxed V(r) = V(r₀) − ∫E(r′)·dℓ′ and "r₀ = arbitrary reference point" on p. 1; "Only potential differences are meaningful", lim V = 0, the infinite-line remark, divergence theorem and flux = (1/ε₀)∫d³x ρ = (1/ε₀)∫dq on p. 2; boxed Gauss's law with "True even for dynamics", Stokes, boxed ∮E·dℓ = 0, "Ambiguity in potential formula ... What path? Ans: it doesn't matter" and ∫P₁ − ∫P₂ = ∮ = 0 on p. 3). The page's statement that the notes use ten pages is correct. The page states its renaming of the volume from V to D ("The page calls the volume D, to keep it apart from the potential V; the notes use the same letter for both"); the notes indeed write V under the volume integrals and in the p. 2 figure. The author's notes.md was not used.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Opening paragraph: "...turns each of them into an integral statement ..., which is often what one actually uses to solve a problem (notes p. 1)." | p. 1 says only "Our goal is to discuss the integral formulation of the following differential equations of electrostatics ... and some related consequences." Nothing about what one uses to solve problems. | The citation "(notes p. 1)" covers a claim the notes do not make. | Move the citation to after "integral statement", or mark the last clause as the page's own remark. |
| 2 | warning | leadsTo 8.07 Lecture 5, `why`: "Because only differences of V matter and the line integral is path independent, a potential that meets the boundary conditions is the only one; the uniqueness theorem turns this into a licence to guess, as in the method of images." | LN5 p. 63′-4 (image read): "Uniqueness Theorem is our lisense to guess", followed by the image-charge recipe, "This is Method of Images". | The link to the uniqueness theorem and "licence to guess" is supported, but the reasoning is a non sequitur: path independence and the arbitrary zero do not make the solution of a boundary-value problem unique; uniqueness comes from Poisson's/Laplace's equation with the boundary conditions. | Reword, e.g. "The potential defined here is fixed up to a constant; the uniqueness theorem of the next notes shows that boundary conditions fix it completely, Guth's 'licence to guess' behind the method of images." |
| 3 | info | "Gauss's law in integral form": "Guth adds a note beside the box" | The note "True even for dynamics" is under the box, joined to it by a hook. | "beside" | "under the box" (cosmetic). |
| 4 | info | Worked example, step "Another path" | (page's own example) | "...back along a quarter circle at 5 cm to the end point." The end point (5 cm from the wire on the same radial line as the start) is never stated in the Problem, and the arcs are implicitly in a plane perpendicular to the wire. | Say "to the point 5 cm out on the original radial line" (and optionally "in a plane at right angles to the wire"). Physics and result are correct. |
| 5 | info | Flashcard 4 back: "For idealised sources that extend to infinity, such as an infinite line of charge: the integral diverges." | p. 2: for idealised textbook problems (e.g. infinite line of charge) the integral "may not converge". | States divergence for all sources extending to infinity (a charge density that falls off fast enough converges). | "For some idealised sources that extend to infinity, such as ...". The body text ("may not converge") is faithful. |
| 6 | info | "The potential as a line integral": "Far from a finite charge distribution it goes to zero" | p. 2 just says the earlier definition gives lim V = 0. | Adds "finite", which is correct and helpful. | None. |

## Arithmetic and answer checks
- λ/(2πε₀) with λ = 2.0 × 10⁻⁹ C/m, ε₀ = 8.8541878128 × 10⁻¹² F/m: 35.9502 V. "35.95 V" correct.
- V(1 cm) − V(5 cm) = 35.9502 × ln 5 = 35.9502 × 1.60944 = 57.860 V → "57.9 V" correct. The sign is right: E points outward (λ > 0), so V falls outward and V(1 cm) > V(5 cm).
- Divergence of the charge integral: ∫ dz/√(r² + z²) from −Z to Z = 2 asinh(Z/r) ≈ 2 ln(2Z/r), grows without bound. Correct.
- Gauss cylinder: E·2πrL = λL/ε₀ → E = λ/(2πε₀r); end caps carry no flux. Correct.
- Second path: arcs are perpendicular to the radial field, E·dℓ = 0; radial segment 1 → 5 cm gives the same 57.9 V. Correct (the loop formed with the straight path does not encircle the wire, and in any case E·dℓ around the wire vanishes for this radial field).
- Plot: expr −35.95·log(r) (mathjs natural log), r in cm, so V(1) = 0 at the "reference" point; V(5) = −57.86 matches the caption's "57.9 V lower"; at the domain ends V(0.2) = +57.86 and V(10) = −82.78, both inside the range [−90, 60]. Caption formula and numbers correct.
- Quiz 1: answer index 2 (constant drops out of the gradient). Correct.
- Quiz 2: answer index 0 (57.9 V). Distractors: 35.95 × log₁₀5 = 25.13 → "25.1 V", and 35.95 → "36.0 V". Explanation correct.
- Quiz 3: answer index 3 (Gauss's law, "true even for dynamics", p. 3). Correct; the other two boxed results (V as a path-independent line integral, ∮E·dℓ = 0) indeed fail when ∂B/∂t ≠ 0. Explanation correct.
- Quiz 4: answer index 1 (difference of two paths is a closed loop, Stokes). Correct.
- Flashcards 1-3 correct; flashcard 4 see finding 5.
- calcs/8.07/integral-form-electrostatics.yaml: all 9 entries pass (`pytest tests/calc -k integral-form-electrostatics`: 9 passed). Every number on the page (35.95, 57.9, 1.609, 25.1, 36.0) has an entry; `quiz: 1` (0-based) is the 57.9 V quiz. Minor: the `source.at` of page-own entries (e.g. ln-five "p. 1") is nominal, and the identity entries carry an unused `samples: {kk: [1.0]}`; harmless.

## Coverage and order
- The page follows pp. 1-3 in order: the three equations → integral of E = −∇V → V(r) with arbitrary reference → only differences matter → lim V = 0 / r₀ = ∞ → infinite line, integral may not converge → Gauss's law via the divergence theorem (boxed, "true even for dynamics") → ∮E·dℓ = 0 via Stokes → ambiguity "what path?" resolved by path independence. Nothing on pp. 1-3 is left out.
- Additions (all correct and labelled as the page's): the Faraday's-law remark that ∮E·dℓ = 0 is electrostatic only, the link to 18.02 path independence, and the worked example with its plot.
- pp. 4-10 (work and energy, self-energy) are left to the companion page `electrostatic-energy-self-energy`, as the intro says.

## Licensing
- No "rights reserved" or "Courtesy of" notice in the PDF (the last page is OCW's standard citation page). The notes' sketches (path a → b, the volume blob, the surface S with edge P, the two paths P₁, P₂) are not reproduced; the only graphic is a generated Plot.
- Wording is the page's own; quoted fragments ("and some related consequences", "true even for dynamics", "it doesn't matter", "Only potential differences are meaningful" in paraphrase) are short and attributed. No OpenStax or LibreTexts material.

## Notes
- Prerequisites all exist: `vector-analysis` (8.07), `gauss-law`, `electric-potential` (8.02), `divergence-theorem`, `stokes-theorem`, `path-independence` (18.02). Inline links `/courses/8-02/gauss-law`, `/courses/8-02/electric-potential`, `/courses/8-02/faradays-law`, `/courses/18-02/divergence-theorem`, `/courses/18-02/stokes-theorem`, `/courses/18-02/path-independence` point to existing pages (course-id-to-URL mapping 8.02 → 8-02 assumed as elsewhere on the site; not checked in a browser).
- leadsTo Lecture 4: LN4 ("Conductors: Surface Forces and Capacitance") uses E_out = (σ/ε₀) r̂ just outside a conductor, discusses the pressure on the surface and capacitance. Claim supported.
- leadsTo Lecture 5: see finding 2.
- No cosmology callout on this page; none needed.
- Symbols (data/symbols.json, meanings scoped to this page): ε / ε₀ (electric constant, F/m), λ (C/m), ρ (C/m³), ℓ and ℓ′ (path step), a (start point; da surface element), b (end point), z (distance along the line), x (in d³x), d (differential), r, r′, r₀, P, P₁, P₂, D (volume; "the page avoids V, which is the potential"), S, E, V (unit V), q, L, Q_enc. All fit this page. The shared meanings of d (lists d³x′, dr) and r (mentions a ball or point charge) also cover the companion page, so some forms they name do not occur here; acceptable. E has no unit (V/m would fit); optional.
- `npm run content:check` was not run by the reviewer.
- No em dashes found in the page text.

## Resolution (2026-11-18, by the page author)

1. Opening paragraph: "(notes p. 1)" now follows "integral statement about paths, surfaces and volumes"; the remark that the integral forms are often what one uses to solve a problem is a separate sentence, the page's own.
2. leadsTo Lecture 5 `why` rewritten along the reviewer's suggestion: the potential is fixed only up to a constant, and the uniqueness theorem of the later notes shows that boundary conditions fix it completely ("licence to guess" behind the method of images).
3. "beside the box" changed to "under the box".
4. Worked example "Another path": the path now lies in a plane at right angles to the wire and ends "5 cm out on the original radial line".
5. Flashcard 4: "For some idealised sources that extend to infinity".
6. No change needed.
- Calcs nits: left as they are (the `samples` field is required by the harness for identity entries; `source.at` of page-own entries points to the section of the notes they illustrate).
- Status set to `reviewed`. content:check, calc:test and build rerun after the changes.
