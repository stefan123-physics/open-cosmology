/** The site's seal: concentric rings around a bright core, drawn as line art. */
export function Crest({ size = 44 }: { size?: number }) {
  return (
    <svg className="crest" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="26.5" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="32" cy="32" r="17" fill="none" stroke="var(--accent)" strokeWidth="3.2" />
      <circle cx="32" cy="32" r="10.5" fill="none" stroke="var(--accent)" strokeWidth="1.2" opacity="0.7" />
      <circle cx="32" cy="32" r="4.6" fill="var(--accent)" />
      <g fill="currentColor">
        <circle cx="32" cy="8.6" r="1.3" />
        <circle cx="55.4" cy="32" r="1.3" />
        <circle cx="32" cy="55.4" r="1.3" />
        <circle cx="8.6" cy="32" r="1.3" />
      </g>
    </svg>
  );
}
