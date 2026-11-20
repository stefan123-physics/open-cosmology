---
page: content/year-1/18.01/exponentials-and-logarithms.mdx
reviewed: 2026-11-15
sources_read:
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lecture-6-exponential-and-log/ (read: local copy lec6.html supplied by the page author; page title "Lecture 6: Exponential and Log"; its PDF link is 9v25gg2qJYE.pdf, matching reading2, and it links resources/lec6, matching reading1)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/resources/lec6/ (read: local copy n6.pdf / n6.txt, "Lecture 6: Exponential and Log, Logarithmic Differentiation, Hyperbolic Functions", OCW cover + 7 printed pages; text layer only, Figures 1 to 3 seen only as their text labels)
  - https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/9v25gg2qJYE.pdf (read: local copy t6.pdf / t6pages.txt, transcript "ocw-18-01-f07-lec06", 11 pages; no printed footer, transcript page = PDF page; page starts of pp. 4, 6, 8, 9, 10 checked with pdftotext -f N -l N)
  - content/year-4/8.286/exponential-expansion.mdx, age-with-vacuum-energy.mdx, cosmological-constant.mdx (read: cosmology callout and leadsTo check)
  - content/year-1/18.01/implicit-differentiation.mdx, derivatives-of-sine-and-cosine.mdx, chain-rule-and-higher-derivatives.mdx (read: repetition check)
  - calcs/18.01/exponentials-and-logarithms.yaml (read; pytest -k exponentials: 15 passed)
  - data/symbols.json (read: working-tree file at review time; the 22 meanings scoped to exponentials-and-logarithms)
  - The 8.286 Lecture 19 and 23 transcripts themselves (not read: the callout was checked only against the reviewed 8.286 pages)
verdict: needs-changes
---

# Review: Exponentials and logarithms: the number e and its derivatives

## Differences from the MIT source
| # | Severity | Where on page | MIT says | Page says | Suggested fix |
|---|----------|---------------|----------|-----------|---------------|
| 1 | error | "Any base", Method 2, sentence before the "Logarithmic derivative" formula | Transcript p. 8: d ln u/du = 1/u, times du/dx (chain rule); the prime is kept for d/dx: (ln u)′ = u′/u. Notes p. 5 the same. | "By the chain rule and $(\ln u)' = 1/u$:" With the page's own prime meaning d/dx, this equation is false, and the next formula says $(\ln u)' = u'/u$. | Write "By the chain rule and $\frac{d}{du}\ln u = \frac1u$:" (or "$\ln$ has derivative $1/u$ with respect to $u$"). |
| 2 | info | "Exponentials", rules of exponents formula and the sentence before it ("The exponential function is fixed by") | Transcript p. 1: $a^0 = 1$, $a^1 = a$ and $a^{x_1+x_2} = a^{x_1}a^{x_2}$ define the function; $(a^{x_1})^{x_2} = a^{x_1x_2}$ is "deduced from these". | Lists all four rules as what fixes the function. | Optional: "fixed by the first three; the fourth follows from them". Citation p. 1 is correct. |
| 3 | info | "Exponentials", first sentence | Notes p. 1: "We always assume the base, a, is greater than 1." Transcript p. 1: a is positive. | "Start with a positive number $a$". | Follows the transcript; fine. No change needed. |
| 4 | info | "Any base", Method 2, "(p. 9)" for $u = a^x$ | Transcript: $u = a^x$ and $\ln u = x\ln a$ are on p. 8; $(\ln u)' = \ln a$ and $u' = u\ln a$ on p. 9. | "(p. 9)". | Optional: "(pp. 8–9)". |
| 5 | info | In-text page references "(pp. 4–5)", "(p. 8)", "(p. 9)" | These are transcript pages; the notes are cited as "(notes, p. 2)", "(notes, p. 7)". | Bare "p." means transcript. | Readers cannot tell; consider "(transcript, pp. 4–5)" once, or leave as is. |
| 6 | info | Source title in frontmatter | OCW lecture page title: "Lecture 6: Exponential and Log". The notes' title adds "Logarithmic Differentiation, Hyperbolic Functions". | "MIT 18.01 Lecture 6: Exponential and Log, Logarithmic Differentiation" | Fine as a description; optional to match the OCW title exactly. |
| 7 | info | Cosmology callout | 8.286 Lecture 23 (as reviewed on exponential-expansion.mdx) writes the inflationary rate as $\chi = \sqrt{8\pi G\rho_f/3}$, $a \propto e^{\chi t}$; cosmological-constant.mdx uses $H_\text{vac}$. | $a(t) \propto e^{Ht}$ "with a constant $H$". | Physics correct ($\dot a/a = \chi = H$). Optional: "(Guth writes the rate as χ)". |

Checked and correct (no finding):
- Every `<Formula>` citation against the transcript: rules of exponents p. 1; difference quotient with $a^x$ factored out p. 2; $M(a)$ defined and $d/dx\,a^x = M(a)a^x$ p. 3; $M(e) = 1 \Rightarrow (e^x)' = e^x$ p. 4; log laws, $\ln 1 = 0$, $\ln e = 1$ p. 6; implicit differentiation of $e^w = x$ pp. 6–7 (derivation p. 6, boxed $1/x$ p. 7); $a^x = e^{x\ln a}$ and $(\ln a)a^x$ p. 7; $(\ln u)' = u'/u$ p. 8; $x^x$ p. 9; $n\ln(1+1/n)$ as a difference quotient of $\ln x$ at 1 p. 10; limit $= e$ pp. 10–11. All were board work (the lecture has no slides), so transcript citations are the right ones.
- In-text claims: graph of $2^x$ through $(-1, \frac12)$, $(0,1)$, $(1,2)$ (pp. 1–2); $x$ fixed and $\Delta x$ moving (p. 2); comparison with sine and radians (p. 3); "beg the question" (p. 3–4); stretching $f(kx) = 2^{kx} = (2^k)^x$, slope $kM(2)$, $k = 1/M(2)$ (pp. 4–5); $\ln$ graph through $(1,0)$, slope 1, only $x > 0$ (p. 6); $\ln a$ is a constant like the 3 in $e^{3x}$ (p. 7); $(\ln 2)2^x$, $(\ln 10)10^x$ and "natural" as independent of base (p. 8); $1.01^{100}$ as "perfectly decent" approximation (p. 11).
- Notes citations: the 2-and-4 secant argument is on printed p. 2; Remark 2 (relative rate $f'/f = (\ln f)'$, stock-market example) on printed p. 7.
- The bracketed remark "[The notes print that second point as $(1, 0)$; it is $(0, 1)$.]" is correct: notes p. 2 say "The secant line from (−1/2, 1/2) to (1, 0) on the graph of y = 4^x has slope 1", and the Figure 3 label on p. 3 also reads "(1,0)". $(1,0)$ is not on $y = 4^x$, and the secant to $(1, 4)$ would have slope 7/3; the secant from $(-\frac12, \frac12)$ to $(0, 1)$ has slope $(1 - \frac12)/\frac12 = 1$. The geometric conclusions (convexity: $M(2) < 1$ from the right-hand secant, $M(4) > 1$ from the left-hand secant) are right.
- Not flagged on the page, and correctly not repeated: the notes' typo "If w = ln(x), then e^x = w" (notes p. 4; should be $e^w = x$) and the transcript's "ln(x+1)" aside on p. 9 (the board quantity is $1 + \ln x$). The page has $e^w = x$ and $1 + \ln x$. Optional: a bracketed note on the first, in the style of the $(1,0)$ remark.

## Arithmetic and answer checks
- Worked example (a): $\ln 3 = 1.098612$; $\times 9 = 9.8875 \approx 9.89$. Correct.
- Worked example (b): $1 + \ln 2 = 1.693147$; $\times 4 = 6.7726 \approx 6.77$. Correct.
- Worked example (c): $\frac{d}{dx}\ln(x^2+1) = 2x/(x^2+1) = 2/2 = 1$ at $x = 1$. Correct.
- Closing the loop: $1.01^{100} = 2.70481 \approx 2.705$; $1.001^{1000} = 2.71692 \approx 2.717$; $e = 2.718282$. Correct.
- Graph caption: $1/\ln 2 = 1.442695 \approx 1.443$; slope of $2^{kx}$ at 0 is $k\ln 2$; $2^{1.443} = e^{1.00019} \approx e$. Correct. (Info: the slider step 0.01 cannot reach 1.443; at $k = 1.44$ the curves differ by about 0.2% at $x = 1$, visually coinciding. Fine.)
- Secant slopes: $2^x$ from $(0,1)$ to $(1,2)$: 1; $4^x$ from $(-\frac12,\frac12)$ to $(0,1)$: 1. Correct.
- Quiz 1: $(e^{5x})' = 5e^{5x}$, answer index 1. Correct.
- Quiz 2: $(\ln x)' = 1/x$, index 1; explanation correct.
- Quiz 3: $M(a) = \ln a$, index 2; $M(2) = 0.6931$. Correct.
- Quiz 4: $(x^x)' = x^x(1+\ln x)$, index 2; explanation correct.
- Quiz 5: limit $e$, index 2; explanation (difference quotient of $\ln x$ at 1, tends to 1, so $e^1$) correct.
- Flashcards: all four correct ($e \approx 2.718$, log laws, $(\ln u)' = u'/u$).
- calcs/18.01/exponentials-and-logarithms.yaml: 15 entries, all pass (`pytest -k exponentials`: 15 passed). Every number on the page is covered except trivial ones (secant slope 1 of $2^x$; $2^{1/\ln 2} = e$ in the caption). Optional additions: `2**(1/log(2))` expected `e`, and the $2^x$ secant. Entries `m2` (cites transcript p. 8) and `e-limit-1000` (cites p. 11) point to places where the lecture does not state that number; they are marked `origin: page-own`, which is accurate.
- `npm run content:check`: 0 errors; the only warning for this page is the missing review file (this file).

## Coverage and order
- Order follows the transcript exactly: rules of exponents, filling in by continuity, graph of $2^x$, difference quotient, $M(a)$ and its meaning as the slope at 0, comparison with sine, begging the question with $e$, stretching argument, natural log and its properties and graph, derivative of $\ln x$ by implicit differentiation, Method 1 (base $e$), base 2 and base 10, Method 2 (logarithmic differentiation) on $a^x$, $x^x$, and $\lim(1+1/n)^n = e$. The notes' 2-and-4 secant argument and Remark 2 are added in sensible places and attributed to the notes.
- Omitted, minor: Jerison's remark (transcript p. 5) that rescaling $\sin(kt)$, e.g. to degrees, multiplies the derivative by a constant factor in the same way as stretching $2^x$; the remark that circular and circuitous differ (p. 3–4); the notes' remark that $x^x$ can also be done as $e^{x\ln x}$ (notes p. 6). Optional to add the sine/degrees parallel in one sentence, since the derivatives-of-sine-and-cosine page sets it up ("In degrees the slope of sine at 0 would be π/180"). [Jerison's degree factor on p. 5 is said loosely as "180 over pi, or something like that"; if added, use π/180 as the earlier page does.]
- Hyperbolic functions: the notes' title lists "Hyperbolic Functions", but neither the notes (7 printed pages, ending with Remark 2) nor the transcript covers them. The page does not mention hyperbolic functions, which matches the content; optional: one bracketed sentence saying the notes' title mentions them but Lecture 6 does not treat them, so readers comparing with OCW are not puzzled.
- Notes' Remark 1 says $k = 10$ gives "a pretty good approximation" ($1.1^{10} = 2.594$); the page uses the transcript's $n = 100$ instead, which is the better choice. No finding.
- Repetition with earlier 18.01 pages: none. implicit-differentiation.mdx only forward-links to Lecture 6 ("the logarithm is the inverse of the exponential, and its derivative follows the same way"), which this page delivers; derivatives-of-sine-and-cosine.mdx covers radians, which this page refers to in one sentence only. The link `/courses/18-01/implicit-differentiation` is used for Lecture 5; it resolves under the current routing as far as content:check reports (no broken-link error).

## Licensing
- `grep -il "rights reserved\|courtesy"` on the notes and transcript text: no matches. The notes carry only the OCW cover and terms line.
- Notes Figures 1 to 3 are not reused: the page has one generated `<Plot>` (stretched $2^{kx}$ against $e^x$ with a movable tangent), which is a different picture from the notes' secant figures.
- No verbatim copying beyond short standard phrases ("mystery number", "beg the question", "filling in by continuity", "closes the loop", "honest numerical way"), all used in rewritten sentences. Worked examples (a) and (c) are original; (b) evaluates MIT's own example $x^x$ at a new point, which is acceptable as practice of the lecture's result.
- No OpenStax or LibreTexts material.

## Notes
- Cosmology callout: correct and fairly attributed. Exponential growth under vacuum-energy domination matches 8.286 Lecture 23 (exponential-expansion.mdx: $a \propto e^{\chi t}$) and Lecture 19 (age-with-vacuum-energy.mdx: "Guth says our universe is approaching such an exponentially expanding phase now"; cosmological-constant.mdx: $a \propto e^{H_\text{vac}t}$). $\dot a/a$ constant for $a \propto e^{Ht}$ is right. "e-folds" appears on the 8.286 pages only in a page-own worked example (exponential-expansion.mdx, "How many e-folds?"); whether Guth uses the word in the lecture was not verified (uncertain). The callout does not claim he does, so no finding. The notation $(\ln a)^{\cdot}$ is unusual but correct.
- leadsTo: 8.286 Lecture 23 is the right target for inflation. Optional: add 8.286 Lecture 19 for the "today's dark energy in the far future" clause.
- Symbols: the 22 meanings scoped to this page fit their uses. `a` covers both the base and the callout's scale factor; `H`, `t` cover the callout; `k`, `b`, `f`, `M`, `u`, `v`, `w`, `n`, `m`, `x_1`, `x_2` and the primes match the text. content:check reports no symbol warnings for this page.
- Summary bullet "stretching $2^x$ shows such a base exists, between 2 and 4" merges two arguments (the stretch gives existence; the secants give the bounds). Accurate enough; optional rewording.
- No em dashes found in the page text.

## Resolution (2026-11-15, by the page author)

- **Error fixed:** Method 2 now reads "By the chain rule and $\dfrac{d}{du}\ln u = \dfrac1u$", as in the transcript (p. 8) and notes (p. 5); the formula that follows keeps $(\ln u)' = u'/u$.
- **Exponent rules:** the sentence before the formula now says the lecture deduces the fourth rule from the first three.
- **Citation detail:** the u = aˣ check now cites pp. 8–9.
- Other info notes (χ vs H in the callout, extra leadsTo, sine/degrees parallel, notes typo, hyperbolic functions, extra calcs) left as they are; none is an error.
