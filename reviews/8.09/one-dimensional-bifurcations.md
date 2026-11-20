---
page: content/year-4/8.09/one-dimensional-bifurcations.mdx
reviewed: 2026-11-19
sources_read:
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/a3b977a17091d225ee1870d100c7a308_MIT8_09F14_Chapter_7.pdf (read: extracted text of the whole chapter; page images at 120 dpi of printed pp. 156, 157, 158, 159, 162, 163, and at 80 dpi of pp. 152-164, for every equation checked; Sections 7.3 and 7.4.2 read from the text for the forward links)
  - https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_chapter_7/ (link checked: HTTP 200; resource page, not compared further)
  - content/year-4/8.286/higgs-field.mdx (read, as the site's account of 8.286 Lecture 22; the Lecture 22 transcript itself was not reopened)
verdict: needs-changes
---

# Review: Bifurcations in one dimension: saddle-node, transcritical and pitchfork

Compared with Stewart's typed 8.09 notes, Chapter 7, Section 7.2 (7.2 intro, 7.2.1-7.2.4, the bead-on-a-hoop and constant-torque examples), printed pp. 153-163 (printed page = PDF page + 141, checked on the footers). All 20 `<Formula>` citations, every number on the page, all 6 plots, the 4 quiz questions and the 5 flashcards were checked. The calcs file passes (`pytest tests/calc -k one-dimensional-bif`: 22 passed). One error (a wrong stability argument), two warnings, several info notes.

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Saddle-node bifurcation", paragraph after (7.20) | p. 155: two fixed points for r < 0, one stable, one unstable (Fig. 7.9) | "$x_* = -\sqrt{-r}$ (stable, since $f$ rises through zero there)" | Wrong reason: $f = r + x^2$ has $f'(x_*) = 2x_* = -2\sqrt{-r} < 0$ there, so $f$ *falls* through zero (positive on the left, negative on the right), which is what makes the point stable. Write "stable, since $f$ falls through zero there ($f' = -2\sqrt{-r} < 0$)". |
| 2 | warning | `<Callout kind="cosmology">`, first sentence | (8.286 Lecture 22, as given on the higgs-field page) the minimum of $V$ lies at $\lvert h\rvert \neq 0$; "early on, when everything is hot, the field sits where the energy is high; as the universe cools, it moves to the minimum" and settles at random into one of infinitely many equivalent minima. The temperature-dependent potential whose symmetric point turns unstable is a toy model marked "not from the lecture". | "The same picture, a symmetric state that becomes unstable while equally good minima appear around it, is how Guth describes spontaneous symmetry breaking" | Overstates the lecture: Guth does not describe the symmetric state *becoming unstable* while minima *appear* (the pitchfork mechanism); he describes a fixed potential with off-centre minima and a field that settles into one at random. Suggest: "Guth describes spontaneous symmetry breaking by the Higgs field the same way at the end: a symmetric potential whose minima lie away from the symmetric point, and a field that settles at random into one of them. The pitchfork adds how such minima can appear as a parameter (in cosmology, the temperature) changes." The closing bracket (no bifurcation language in the lecture) is good and should stay. The `leadsTo` "why" is fair as written. |
| 3 | warning | Several definition sentences (see Licensing) | typed prose of pp. 154, 157, 159, 163 | sentences that follow the notes' wording and structure closely | Rewrite in the page's own construction (details under Licensing). |
| 4 | info | "A graphical method", lead-in sentence | (7.21) and (7.22) and the "hard to solve analytically" remark are all on p. 156 | "(pp. 155–156)" | "(p. 156)". The Formula citation itself (p. 156, eqs. (7.21), (7.22)) is right. |
| 5 | info | "Two fixed points exist for $r > 1$, none for $r < 1$ (p. 156)" | p. 156 states only $r_C = 1$; the two cases are shown in Fig. 7.14 (r = 1.5, 1.0, 0.5) | cited to p. 156 as a statement | Fine in substance; optionally "(Fig. 7.14, p. 156)". |
| 6 | info | Sections "Subcritical pitchfork bifurcation and hysteresis" (bead) and the potential $V$ in "Supercritical pitchfork" | Notes put the bead (a *supercritical* example) and the torque pendulum at the end of 7.2.4; the potential $V = -\frac12 rx^2 + \frac14x^4$ is not in the notes | Bead sits under the subcritical heading, in MIT's order; $V$ is given without saying it is the page's own | Order matches MIT, so acceptable; a short lead-in such as "Two physical examples close the section" would stop readers taking the bead as subcritical. Mark the $V$ paragraph as the page's own addition (it is correct: $-dV/dx = rx - x^3$). |
| 7 | info | Laser bracket after (7.30)/(7.31) | p. 158, eq. (7.29): "$\approx n(r - x) + O(n^3)$"; p. 159: "a fixed point at a non-zero $n = r$" (both confirmed on the page images) | "both are shorthand for $n(r - bn)$ and $n_* = r/b$, equal when $b$ is scaled to 1, as in their Figs. 7.17 and 7.18" | Correct. "$n(r - x)$" is really a misprint (x is not a variable of this model) rather than shorthand; consider "a misprint for $n(r - bn)$". Figs. 7.17/7.18 indeed show the fixed point at $n = 1$, consistent with $r = b = 1$. |

## Arithmetic and answer checks
- Formulas (7.17)-(7.36): every equation number and printed page matches the notes (7.17 p. 153; 7.18, 7.19 p. 154; 7.20 p. 155; 7.21-7.24 p. 156; 7.25, 7.26 p. 157; 7.27-7.29 p. 158; 7.30-7.32 p. 159; 7.33 p. 160; 7.34 p. 161; 7.35 p. 162; 7.36 p. 163). Content checked on the images: (7.24) Taylor expansion, (7.25) both conditions, (7.29) bracket form, (7.31) $r = pG/f - K$, $b = G^2p/f^2$, (7.35) $ma\ddot\theta + b\dot\theta = m\sin\theta(a\omega^2\cos\theta - g)$, (7.36). All reproduced faithfully.
- Laser algebra re-derived: $\dot n = n[pG - K(Gn+f)]/(Gn+f)$; expanding $1/(Gn+f)$ gives $n[(pG/f - K) - (G^2p/f^2)n] + O(n^3)$. Threshold $p = Kf/G$; non-zero fixed point $r/b$; rescaling $m = bn$ gives $\dot m = m(r - m)$. All correct.
- Normal-form bracket after (7.25): verified that the notes' substitution $x' = \sqrt{|b|}(x - x_*)$, $r' = a(r - r_C)$ gives $\dot x' = \sqrt{|b|}(r' \pm x'^2)$, so the notes' claim $\dot x' = r' \pm x'^2$ indeed needs a time rescaling; the page's alternative $x' = |b|(x - x_*)$, $r' = |b|a(r - r_C)$ gives $\dot x' = r' \pm x'^2$ exactly. Slip note correct.
- $\dot x = r - x - e^{-x}$: $-1 + e^{-x_*} = 0 \Rightarrow x_* = 0$, $r_C = 1$ (matches notes). Crossings at $r = 1.5$: $x = -0.8577$ and $1.1983$ (page: −0.86, 1.20). Correct.
- Mirror case $r - x^2$ from $x \to -x$, $r \to -r$: correct; fixed points $\pm\sqrt r$ for $r > 0$.
- Half-stable point at $r = 0$ ("approached from the left and left from the right"): correct, $\dot x = x^2 \ge 0$.
- Transcritical: $f' = r - 2x$; stabilities as stated; plot branches (solid 0 for $r<0$, solid $r$ for $r>0$, dashed otherwise) match Fig. 7.16.
- Supercritical: $f'(\pm\sqrt r) = -2r$. Correct.
- Subcritical: $f'(\pm\sqrt{-r}) = r + 3(-r) = -2r > 0$ for $r<0$. Correct.
- Quintic (7.34): $x_*^2 = \frac12(1 \pm \sqrt{1+4r})$; five real fixed points for $-\frac14 < r < 0$; outer branch stable ($u = x^2 > \frac12$ gives $f' = 2u(1-2u) < 0$), inner unstable, origin stable for $r<0$; fold at $r = -\frac14$, $|x| = 0.707$; outer branch at $r = 0$: $|x| = 1$. All correct.
- Bead: fixed points and stabilities match p. 162. Worked example: $\omega_C = \sqrt{49.05} = 7.0036$ rad/s = 66.9 rpm (page: 7.00, about 67); $\cos\theta_* = 0.4905$, $\theta_* = 60.63° = 1.058$ rad (page: 60.6°, 1.06 rad); $a\omega^2/g = 2.039$ (page: 2.04). Correct.
- Bottleneck: $\int_0^{2\pi} d\theta/(\tau - b\sin\theta) = 2\pi/\sqrt{\tau^2 - b^2}$ (standard; checked numerically by the calcs file). $\tau = 2$: 3.628 s (page 3.63); $\tau = 1.01$: $\tau^2 - b^2 = 0.0201$, $T = 44.32$ s (page 44.3). Divergence $\propto (\tau - b)^{-1/2}$ and minimum speed $\tau - b$ at $\theta = \pi/2$: correct.
- Plot expressions: all five plots draw the formulas stated in their captions. Hysteresis plot: the outer stable branches use $s \in [0.7071, 1.25]$, i.e. they stop at $r = 1.25^4 - 1.25^2 = 0.879$, while the axis and the dashed $x^* = 0$ line run to $r = 1$; using $s$ up to 1.272 ($r = 1.000$) would carry the branches to the edge (cosmetic, info).
- Quiz 1 (answer $r_C = 1$), quiz 2 ($\pm 60.6°$), quiz 3 (subcritical description), quiz 4 (44.3 s): all marked answers and explanations correct. Distractors 3.6 s and 6.3 s are indeed wrong for $\tau = 1.01$.
- Flashcards: all five correct (laser $r = pG/f - K$; stable large-amplitude branches for $r > -\frac14$; linearization criterion).
- `pytest tests/calc -k one-dimensional-bif`: 22 passed.

## Coverage and order
- The page follows the notes' order exactly: 7.2 intro (7.17, the $x^2 - 1$ example, linearization, 7.18, 7.19, bifurcation diagram) → 7.2.1 (7.20, $r - x^2$, 7.21-7.23, 7.24-7.25 and the normal form) → 7.2.2 (7.26, normal-form remark, laser 7.27-7.31) → 7.2.3 (7.32) → 7.2.4 (7.33, 7.34 and hysteresis, the bead 7.35, the torque pendulum 7.36).
- Nothing in Section 7.2 is left out. The notes' per-r flow pictures (Figs. 7.9-7.11, 7.15, 7.19, 7.24-7.25) are replaced by one interactive flow plot (saddle-node) and generated bifurcation diagrams; the transcritical and pitchfork flows $\dot x(x)$ for fixed $r$ have no plot of their own (optional).
- Additions, all correct and mostly marked: the potential $V$ (not marked, finding 6), the explicit quintic roots (marked "our solution"), the bead worked example (original numbers), the bottleneck period (marked "This calculation is ours"), the cosmology callout.
- Forward links: 7.3 does linearize with $\dot{\vec x} = M\vec x$ in 2D and classifies nodes, saddles, spirals and centres (pp. 164 ff.); 7.4.2 "Fixed Point Bifurcations Revisited and Hopf Bifurcations" revisits saddle-node, transcritical and pitchfork bifurcations in 2D and introduces the Hopf bifurcation with a limit cycle. Both `leadsTo` entries are accurate. The 8.286 Lecture 22 entry is fair; the callout overstates slightly (finding 2).

## Licensing
- No figure is reproduced: all plots are generated from formulas. The hysteresis and hoop diagrams show the same mathematical content as Figs. 7.22 and 7.23, which is unavoidable for a bifurcation diagram and drawn from the page's own formulas. No "rights reserved" or "courtesy" notice occurs in Chapter 7 (grep on the extracted text). The only third-party credit nearby (Abbasi's Mathematica demonstration, Figs. 7.6-7.7, Section 7.1) is not used here.
- The worked examples (bead at $a = 0.20$ m, $\omega = 10$ rad/s; bottleneck periods) are original; the notes contain no numerical examples in this section.
- Sentences too close to the typed notes (finding 3), to be rewritten:
  - Saddle-node: "is the basic way fixed points are born and destroyed" vs notes "is the basic mechanism by which fixed points are created and destroyed" (p. 154).
  - Transcritical: "a fixed point exists for every value of the parameter but exchanges its stability ..." vs "a fixed point exists for all values of the parameter, but changes its stability as the parameter is varied" (p. 157).
  - Supercritical: "one fixed point is always present and turns from stable to unstable at the very parameter value where two new stable fixed points branch off it" vs "one fixed point is always present but changes from being stable to being unstable at the same place where two stable fixed points appear" (p. 159).
  - Torque pendulum: "gravity beats the torque" and "the torque wins" are the notes' own phrases (p. 163).
  - "Many bifurcations in higher dimensions turn out to be straightforward generalizations of one-dimensional ones" vs "many examples of bifurcations in higher-dimensions are simple generalizations of the 1D case" (p. 153); short, borderline.
  None is longer than a sentence, so this is a warning, not a licence error.

## Notes
1. **error**: wrong stability argument for $x_* = -\sqrt{-r}$ ("f rises through zero"); it falls (finding 1).
2. **warning**: the cosmology callout attributes the pitchfork mechanism (symmetric state turning unstable as minima appear) to Guth's lecture; the lecture as recorded on the higgs-field page describes off-centre minima and a random choice as the universe cools, and the temperature-dependent version there is a toy model "not from the lecture" (finding 2).
3. **warning**: five sentences paraphrase the notes too closely (finding 3 and Licensing).
4. info: "(pp. 155–156)" should be "(p. 156)" (finding 4).
5. info: "two fixed points for $r>1$, none for $r<1$" is from Fig. 7.14, not the p. 156 text (finding 5).
6. info: bead under the subcritical heading (MIT's order) and the uncited potential $V$ (finding 6).
7. info: the laser bracket is correct; "misprint" would be more accurate than "shorthand" (finding 7).
8. info: hysteresis plot branches stop at $r = 0.879$; extend $s$ to 1.272.
9. Verified slip notes: the normal-form rescaling bracket and the laser bracket both describe real slips in the notes and correct them correctly. No other slip of the notes is repeated on the page (the notes' "x ↔ −x" symmetry, "hysterisis", "looses" typos are not carried over; the notes' subcritical definition "changes from unstable to stable" as r decreases is rephrased correctly).
10. Uncertain: the Lecture 22 transcript was not reopened for this review; finding 2 relies on the reviewed higgs-field page's account of it.

## Resolution (2026-11-19, by the page author)

1. Fixed: x* = −√(−r) is stable because f falls through zero there (f′ = 2x* < 0).
2. The cosmology Callout now claims only the end state (settling at random into one of several equal minima), which is what the higgs-field page attributes to Lecture 22; the closing bracket is kept.
3. The five close sentences (saddle-node, transcritical and supercritical definitions, the torque/gravity sentences, the higher-dimensional generalization) are rewritten in our own structure.
4. Citation changed to p. 156.
5. Now cites "p. 156 and Fig. 7.14".
6. Added a sentence that the bead example, placed by the notes after the subcritical case, is a supercritical pitchfork; the potential V is marked as our own picture.
7. The laser bracket now calls "n(r − x)" a misprint.
8. The stable branches of the hysteresis plot now run to s = 1.272, i.e. to r = 1.
