---
page: content/year-2/8.033/symmetry-galilean-invariance.mdx
reviewed: 2026-11-16
sources_read:
  - https://ocw.mit.edu/courses/8-033-relativity-fall-2006/resources/lecture2_symme1/ (read: the 16-slide PDF from a local copy. The text layer is incomplete, so every slide was checked against rendered images; slides 6, 7, 8, 9, 12 and 16 were rendered at higher resolution)
  - Lecture 1 and Lecture 3 slides (local copies, text only), used only to check "8.033 opens with" and the leadsTo to Lecture 3
  - content/year-4/8.286/homogeneous-expansion.mdx (read, for the cosmology callout and leadsTo)
verdict: pass-with-notes
---

# Review: Symmetry and Galilean invariance

The course has lecture slides only (no transcript or notes), so "MIT says" below always means what is printed on a slide. Slide numbers count PDF pages: 1 Welcome (Noether photo), 2 practical stuff and today's topic, 3 "What do we mean by symmetry?", 4 "What's the symmetry of the universe? of physics?", 5 translation, 6 rotation, 7 reflection, 8 symmetry in modern physics, 9 "What's the symmetry of classical mechanics?", 10 Galilean transformation, 11 spacetime transformation summary, 12 velocity and acceleration, 13 F = ma, 14 energy and momentum, 15 trajectories and non-invariants, 16 "Which do you trust more".

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | warning | Remark after the slide 11 formula: "(The slides write the boost with $+\vec vt$ …)" | The slides do not use one sign. Slide 10 defines $\mathbf r' = \mathbf r - \mathbf vt$; slide 11 (Galilean and combined) and slide 15 use $+\mathbf vt$, $\mathbf u + \mathbf v$, $\mathbf p + m\mathbf v$; slide 12 derives $\mathbf u' = \mathbf u - \mathbf v$ but then writes $\mathbf a' = \frac{d}{dt}(\mathbf u + \mathbf v)$ | Says "the slides" use $+\vec vt$, which suggests that is their only convention | Name the slides: "Slides 11 and 15 write the boost with $+\vec vt$ (slide 10 uses $-\vec vt$) …". The physics of the remark is right: $\vec r' = \vec r + \vec vt$ is the frame moving at $-\vec v$ (equivalently, the inverse of slide 10's transformation). |
| 2 | warning | Velocity and acceleration formula (slide 12) | Acceleration line: $\mathbf a' = \frac{d}{dt}(\mathbf u + \mathbf v)$, a sign slip against the $\mathbf u - \mathbf v$ two lines above (harmless, since $\mathbf v$ is constant) | $\vec a' = \frac{d}{dt}(\vec u - \vec v)$, silently corrected | Under writing rule 4, add a short bracket, e.g. "(slide 12 writes $\vec u + \vec v$ here, a sign slip; with $\vec v$ constant the result is the same)". The page's formula itself is correct. |
| 3 | warning | Opening paragraph: "8.033 opens with a question …" | This is Lecture 2 ("Welcome back to 8.033!"); Lecture 1 is the course overview. The "Million Dollar question" is on slide 2 of Lecture 2 | Suggests it is the first thing the course does | "Lecture 2 opens with …" or "8.033's study of symmetry opens with …". |
| 4 | warning | Opening paragraph: "Emmy Noether, whose theorem ties symmetries to conservation laws (slides 1–2)" | Slides 1–2 only show her photo and list her as a "key person"; Noether's theorem is not stated on any slide | Cites slides 1–2 for the description of the theorem | Keep it (it is correct: continuous symmetries correspond to conservation laws), but move the citation so it covers only her name, e.g. "Galileo and Emmy Noether (slides 1–2); Noether's theorem, not on the slides, ties …". |
| 5 | info | "What is a symmetry?" paragraph, cited "(slides 2–4)" | Slide 2 lists the key terms; slide 3 only asks "What do we mean by symmetry?"; slide 4 asks about the symmetry of the universe and of physics. None of them defines the terms | Gives definitions of transformation, invariant and symmetry | The definitions are standard and correct, and the intro says the page "fills in the reasoning". Optionally write "(terms listed on slide 2)" instead of "(slides 2–4)". |
| 6 | info | Translation paragraph: "Only differences of positions enter, so the law is translationally invariant." | This sentence is on slide 6, about the wave equation ("Since only differences in position and time enter, it's translationally invariant"), as a contrast with the finite difference $|\mathbf r_2 - \mathbf r_1|$ of slide 5 | Applied to gravity on slide 5 | Fine as physics. The slide 6 point that the wave equation is also translationally invariant (differences enter as derivatives) is left out; consider one clause in the rotation paragraph. |
| 7 | info | Rotation paragraph | Slide 6 adds "∇² is invariant under rotation (remember Gauss' theorem)" and writes the wave equation with $\ddot{\mathbf E}$ | Writes $\partial^2\vec E/\partial t^2$; leaves out the Gauss hint | Equivalent notation; no change needed. |
| 8 | info | Slide 10 paragraph | Slide 10 is a "Demo with colliding carts, ball", after which "Newtonian mechanics appears to be invariant"; it also asks "Are we in an inertial frame? (PS1)" | "Colliding carts and a ball, the slides suggest, behave the same in a lab moving at constant velocity" | Acceptable. "the lecture's demonstration with colliding carts and a ball suggests …" would be more exact. The PS1 question is left out (fine). |
| 9 | info | Slide 8 paragraph (LHC) | "In 2007, the Large Hadron Collider at CERN will search for supersymmetry." | "would soon search", then a later-development note: started 2008–2010, no supersymmetric particles found as of the mid-2020s | Correctly marked as a later development, and correct (first beams September 2008, physics collisions from March 2010; no SUSY signal so far). No change. |

No formula differs from its slide in physics or notation, apart from the silent correction in row 2:
- Slide 5 (gravity under translation): matches slide 5 exactly.
- Slide 10 ($\vec r' = \vec r - \vec vt$, $t' = t$): matches the bullets on slide 10. The inline length invariance $\Delta\vec r' = \Delta\vec r$ also matches slide 10.
- Slide 11 (translation, rotation, combined): matches, with $\Delta\vec r$, $R\vec r$ and $R\vec r + \Delta\vec r + \vec vt$, $t' = t + \Delta t$. The slide's separate "Galilean: $\mathbf r' = \mathbf r + \mathbf vt$" line is not shown; the remark below the formula covers it.
- Slide 12: matches (see row 2).
- Slide 14 (work-energy theorem): matches, except that the page skips the slide's intermediate step $m\int (dx/dt)\,dv$. The result is the same.
- Slide 15 ($\vec r' = \vec r + \vec vt$, $\vec u' = \vec u + \vec v$, $\vec p' = \vec p + m\vec v$): matches. The page correctly adds "(in the slides' convention)".
- Inline rotation statements ($\vec r_i' = R\vec r_i$, $|R(\vec r_2 - \vec r_1)| = |\vec r_2 - \vec r_1|$): match slide 6.

Prose slide citations checked: slide 5 (translation), 6 (rotation, MIT/Australia), 7 (reflection, Lee/Yang/Wu/Lederman, 1957 Nobel), 8 (Lorentz, diffeomorphism, C/P/T, gauge), 10, 11, 12 (flashlight on the train), 13 (spring $F = k(x_2 - x_1)$, gravity, $m$ invariant, "physical law is invariant, but not the initial conditions"), 14 (neither E nor p invariant, conservation holds in every frame; $W$ and $KE$ alone not invariant), 15 (basketball: line in frame A, parabola in frame B), 16 (closing question). All are on the slides cited.

## Arithmetic and answer checks
- `npm run calc:test -- -k symmetry-galilean`: 7 passed.
- Worked example, recomputed by hand. Train frame: $\Delta KE = \tfrac12(0.50)(10^2) = 25$ J; $a = 10/T$, $F = 5/T$ N, distance $\tfrac12(10/T)T^2 = 5T$ m, $W = 25$ J. Ground frame: speeds 30 to 40 m/s, $\Delta KE = 0.25(1600 - 900) = 175$ J; distance $5T + 30T = 35T$ m, $W = (5/T)(35T) = 175$ J. All correct. The force is the same in both frames (Galilean-invariant acceleration and mass), so the reasoning is right. The example is original: the slides have no numerical example.
- Quiz 1 (answer index 1, velocity): correct; $\vec u' = \vec u - \vec v$.
- Quiz 2 (index 1, depends only on the difference): correct; explanation algebra correct.
- Quiz 3 (index 1, no, but $W = \Delta KE$ holds): correct; matches slide 14.
- Quiz 4 (index 2, reflection/parity): correct. Lee and Yang proposed it in 1956; Wu's cobalt-60 experiment was done in late 1956 and published in 1957, as was the Garwin–Lederman–Weinrich accelerator (muon decay) experiment; Nobel Prize 1957. "1956–57" is fair.
- Flashcards: all three are correct.
- Frontmatter summary: consistent with the body, no errors.

## Coverage and order
- The page follows the slide order 1–8, 10–16.
- Slide 9 ("What's the symmetry of classical mechanics?", a title slide with a photo) is not named. Its question is effectively the "Galilean boosts" section. Fine.
- Left out (all minor): slide 2's practical items (PS1, notes posted); slide 6's "Is everyone cool with 3 × 3 matrices?", Gauss hint, and translational invariance of the wave equation (row 6); slide 10's "Are we in an inertial frame? (PS1)"; slide 11's separate Galilean line.
- Additions: Noether's theorem as a statement (row 4); the LHC later development (row 9, correctly marked); the original worked example; the cosmology callout.

## Licensing
- Slide 1's Noether photo is marked "Image courtesy of Wikipedia." Slides 9 and 16 carry portrait photos with no credit. Slides 5, 6, 7, 10, 13 and 15 have rocket/cart drawings "Figures by MIT OCW." The page uses **no images** from the slides, so there is nothing to credit and nothing reused.
- On the rendered slides I saw no "All rights reserved" notice. The PDF text layer is incomplete, so this is a visual check.
- No OpenStax or LibreTexts material.
- Wording: the text is rewritten. A few short phrases follow the slides closely ("No experiment inside a closed lab can tell whether the lab has been shifted" for "No experiment within your lab can determine whether it's been shifted"; "the physical law is invariant, though the initial conditions are not"; "Velocities add and subtract as expected"). These are single sentences of standard content and acceptable. The one direct quote ("Which do you trust more: classical mechanics, or E&M?") is short and marked as a quote.

## Notes
- **Sign convention remark** (+vt): the physics is correct. With $\vec r' = \vec r - \vec w t$ for a frame moving at $\vec w$, $\vec r' = \vec r + \vec vt$ means $\vec w = -\vec v$. Only the attribution to "the slides" in general needs narrowing (row 1).
- **leadsTo 8.033 Lecture 3**: fair. The Lecture 3 slides list "Symmetry of electromagnetism (wave equation, light propagation)" and "Does speed of light depend on … motion of observer? … No, no and no!", plus Michelson–Morley.
- **Cosmology callout and leadsTo 8.286 Lecture 4**: correct and fairly attributed. `content/year-4/8.286/homogeneous-expansion.mdx` (lecture 4) has a section "Hubble's law does not put us at the centre", which says that switching to another galaxy's frame "(a Galilean change of velocity is enough here)" gives the same law. The link `/courses/8-286/homogeneous-expansion` uses the right URL form. A small optional addition: the Galilean argument holds for the non-relativistic (low-speed) picture, as on the 8.286 page.
- The page has no em dashes and uses no `$$`.
- Uncertain: the identities of the people in the photos on slides 9 and 16 (possibly the lecturer). They are irrelevant to the page, since no photo is used.

## Resolution (2026-11-16, by the page author)

1. The sign-convention remark now names slides 11 and 15 (+vt) and slide 10 (−vt).
2. Added a bracket for slide 12's d/dt(u + v) slip.
3. The opening now says Lecture 2 opens with the question (after the course overview).
4. Noether is cited to slides 1–2 by name only; her theorem is marked as not on the slides.
Info: not changed.
