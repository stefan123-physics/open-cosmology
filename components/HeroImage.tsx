/**
 * Photograph beside the homepage title (university and High School).
 * Square crops in two widths are made from the originals in brand/photos/ (named by
 * their ESA/Hubble id)
 * and live in public/images/hero/ as `<name>-480.webp` and `<name>-960.webp`.
 */
export function HeroImage({ name, alt, title, credit, source }: { name: string; alt: string; title: string; credit: string; source: string }) {
  const base = `/images/hero/${name}`;
  return (
    <figure className="hero-image">
      <img
        src={`${base}-960.webp`}
        srcSet={`${base}-480.webp 480w, ${base}-960.webp 960w`}
        sizes="(max-width: 700px) 90vw, 440px"
        width={960}
        height={960}
        alt={alt}
        fetchPriority="high"
        decoding="async"
      />
      <figcaption className="muted small">
        <a href={source} rel="noopener">{title}</a> (cropped). Credit: {credit}. Licence:{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/" rel="license noopener">CC BY 4.0</a>
      </figcaption>
    </figure>
  );
}
