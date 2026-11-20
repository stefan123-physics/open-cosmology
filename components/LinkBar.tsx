import Link from "next/link";
import type { ReactNode } from "react";

/**
 * A standalone link shown as a wide, low bar: a title, one short line saying where it goes, and a quiet arrow.
 * Matches the rows of the phone menu. Use it for links that stand on their own (next lesson, MIT source,
 * prerequisites, related pages); links inside sentences stay ordinary inline links.
 */
export function LinkBar({
  href,
  title,
  sub,
  kicker,
  external = false,
  back = false,
  className = "",
}: {
  href: string;
  title: ReactNode;
  /** One short line: where the link goes. */
  sub?: ReactNode;
  /** A small-caps label above the title ("Previous lesson"). */
  kicker?: string;
  external?: boolean;
  /** A link back (previous lesson): the arrow points left and comes first. */
  back?: boolean;
  className?: string;
}) {
  const arrow = (
    <span className="link-bar-arrow" aria-hidden="true">
      {external ? "↗" : back ? "←" : "→"}
    </span>
  );
  const body = (
    <>
      {back && arrow}
      <span className="link-bar-text">
        {kicker && <span className="link-bar-kicker">{kicker}</span>}
        <span className="link-bar-title">{title}</span>
        {sub && <span className="link-bar-sub">{sub}</span>}
      </span>
      {!back && arrow}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </>
  );
  const cls = `link-bar ${back ? "link-bar-back" : ""} ${className}`.replace(/\s+/g, " ").trim();
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {body}
    </Link>
  );
}

/** A list of link bars sharing divider lines. */
export function LinkBars({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <ul className="link-bars" aria-label={label}>
      {children}
    </ul>
  );
}
