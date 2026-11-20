/**
 * Rehype plugin: wraps each `## heading` and the content after it in
 * <section class="md-section" id="…" data-label="…">, so every part of a page can be read aloud
 * on its own and linked to. Content before the first heading becomes an intro section.
 */
type Node = { type: string; tagName?: string; value?: string; children?: Node[]; properties?: Record<string, unknown> };

function text(node: Node): string {
  if (node.type === "text") return node.value ?? "";
  // Leave maths out of labels and ids, so they match lib/headings.ts (which strips $…$).
  const cls = node.properties?.className as string[] | undefined;
  if (Array.isArray(cls) && (cls.includes("katex") || cls.includes("katex-display"))) return "";
  return (node.children ?? []).map(text).join("");
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function rehypeSections() {
  return (tree: Node) => {
    const kids = tree.children ?? [];
    const out: Node[] = [];
    let current: Node | null = null;
    const used = new Set<string>();
    for (const node of kids) {
      if (node.type === "element" && node.tagName === "h2") {
        const label = text(node).replace(/\s+/g, " ").trim();
        let id = slugify(label) || "section";
        while (used.has(id)) id += "-2";
        used.add(id);
        node.properties = { ...node.properties, id, dataLabel: label };
        current = { type: "element", tagName: "section", properties: { className: ["md-section"], dataLabel: label }, children: [node] };
        out.push(current);
        continue;
      }
      if (!current) {
        current = { type: "element", tagName: "section", properties: { className: ["md-section", "md-intro"], dataLabel: "Introduction" }, children: [] };
        out.push(current);
      }
      current.children!.push(node);
    }
    tree.children = out;
  };
}
