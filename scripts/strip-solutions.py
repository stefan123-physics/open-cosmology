"""Print a problem-set page with its hints, answer boxes and solutions removed, for a blind review.

usage: python scripts/strip-solutions.py <page.mdx> [out-file]
Removes every <Hint>…</Hint>, <Solution>…</Solution> and <Answer … /> block (also
multi-line ones). The frontmatter and the statements of <Exercise> and <Part> stay.
Written 2026-11-21 for the problem-sets run (docs/PROBLEM-SETS-RUN.md, step 2).
"""
import re, sys

text = open(sys.argv[1], encoding="utf-8").read()
for tag in ("Solution", "Hint"):
    text = re.sub(rf"<{tag}\b[^>]*>.*?</{tag}>", f"[{tag.lower()} removed]", text, flags=re.S)
# answer boxes: self-closing, may span lines and hold braces with '>' inside strings
text = re.sub(r"<Answer\b.*?/>", "[answer box removed]", text, flags=re.S)
# collapse runs of blank lines
text = re.sub(r"\n{3,}", "\n\n", text)
left = [t for t in ("<Solution", "<Hint", "<Answer") if t in text]
if left:
    sys.exit(f"strip failed: {left} still present")
if len(sys.argv) > 2:
    open(sys.argv[2], "w", encoding="utf-8").write(text)
else:
    sys.stdout.write(text)
