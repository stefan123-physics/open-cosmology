import katex from "katex";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Renders a plain string that may contain inline math between single dollar signs
 * ("The slope is $v = dx/dt$.") into safe HTML. Used for quiz and flashcard text
 * that lives in frontmatter.
 */
export function renderInlineTex(text: string): string {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts
    .map((part) => {
      if (part.length > 2 && part.startsWith("$") && part.endsWith("$")) {
        return katex.renderToString(part.slice(1, -1), { throwOnError: false, output: "htmlAndMathml" });
      }
      return escapeHtml(part).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    })
    .join("");
}

export function renderDisplayTex(tex: string): string {
  return katex.renderToString(tex, { displayMode: true, throwOnError: false, output: "htmlAndMathml" });
}
