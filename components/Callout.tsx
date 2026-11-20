import { ReadSectionButton } from "./speech/ReadButtons";

/** Highlighted aside: kind = "key" (key idea), "note", "cosmology" (link forward), "warning". */
export function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: "key" | "note" | "cosmology" | "warning";
  title?: string;
  children: React.ReactNode;
}) {
  const defaults = { key: "Key idea", note: "Note", cosmology: "Why cosmology needs this", warning: "Watch out" };
  return (
    <aside className={`callout callout-${kind}`}>
      <div className="callout-head">
        <div className="callout-title">{title ?? defaults[kind]}</div>
        <ReadSectionButton scope=".callout" label={title ?? defaults[kind]} />
      </div>
      <div className="callout-body">{children}</div>
    </aside>
  );
}
