import { ReadSectionButton } from "./speech/ReadButtons";

/** `## Heading` in MDX: an anchor-linkable heading with a read-aloud button for its section. */
export function SectionHeading({ id, children, ...rest }: React.HTMLAttributes<HTMLHeadingElement> & { "data-label"?: string }) {
  const label = rest["data-label"];
  return (
    <div className="section-head">
      <h2 id={id}>
        {children}
        {id && (
          <a className="anchor" href={`#${id}`} aria-label={`Link to ${label ?? "this section"}`} data-noread>
            #
          </a>
        )}
      </h2>
      <ReadSectionButton scope="section" label={label} />
    </div>
  );
}
