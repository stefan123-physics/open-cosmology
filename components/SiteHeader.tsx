"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Crest } from "./Crest";

/**
 * The site header: masthead (brand + tools), the main navigation row, and on phones (≤ 700px) a one-row header
 * with a menu button that opens a full-height, scrollable menu holding the four tools and every link.
 *
 * The tools (reading options, search, read-aloud, theme) exist once: in the masthead on wider screens, at the top
 * of the menu on phones. Two copies would mean two search shortcuts and two reading-option panels.
 */

/** `label`: "Year II", or "High School" for year 0. `href`: the phone menu's target; `rowHref`: the link row's. */
export type NavYear = { number: number; label: string; short: string; href: string; rowHref: string };
export type Tool = { label: string; node: ReactNode };

const PHONE = "(max-width: 700px)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(PHONE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
/** True on phones. False on the server and in the first render, so hydration matches; CSS hides the masthead
 *  tools on phones until then, so nothing jumps. */
function useIsPhone() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(PHONE).matches, () => false);
}

const ROW_BEFORE = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Programme" },
];
const ROW_AFTER = [
  { href: "/courses/8-286", label: "Cosmology" },
  { href: "/symbols", label: "Symbols" },
  { href: "/glossary", label: "Glossary" },
  { href: "/review", label: "Review" },
  { href: "/about", label: "About" },
  { href: "/wonder", label: "Wonder" },
];
// The phone menu has no separate "Cosmology" item: Year IV is the cosmology course and links straight to it.
// Accessibility is in the phone menu and the footer; the desktop link row has no room left for it on one line.
const MENU_AFTER = [...ROW_AFTER.filter((l) => l.href !== "/courses/8-286"), { href: "/accessibility", label: "Accessibility" }];

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])';

export function SiteHeader({ years, tools }: { years: NavYear[]; tools: Tool[] }) {
  const pathname = usePathname();
  const isPhone = useIsPhone();
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(0);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  const close = useCallback((refocus: boolean) => {
    setOpen(false);
    if (refocus) toggle.current?.focus();
  }, []);

  // Close on navigation, and when the screen grows past phone width.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!isPhone) setOpen(false);
  }, [isPhone]);

  // The menu starts where the header ends (the header can grow with the text size); the page behind stays still.
  useLayoutEffect(() => {
    if (!open || !header.current) return;
    const measure = () => setTop(Math.max(0, Math.round(header.current!.getBoundingClientRect().bottom)));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(header.current);
    const root = document.documentElement;
    const before = root.style.overflow;
    root.style.overflow = "hidden";
    root.dataset.menuOpen = "true";
    return () => {
      ro.disconnect();
      root.style.overflow = before;
      delete root.dataset.menuOpen;
    };
  }, [open]);

  // Focus moves into the menu when it opens.
  useEffect(() => {
    if (open) panel.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
  }, [open]);

  // Escape closes (after any dialog opened from the menu has closed itself); Tab stays inside the menu and its button.
  useEffect(() => {
    if (!open) return;
    const dialogOpen = () => !!document.querySelector(".ro-panel, .search-overlay");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (dialogOpen()) return;
        close(true);
        return;
      }
      if (e.key !== "Tab" || dialogOpen() || !panel.current || !toggle.current) return;
      const items = [toggle.current, ...panel.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null || el === toggle.current,
      );
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      // The search dialog and the reading options are rendered on <body>: a tap inside them is not "outside the menu".
      if ((t as Element).closest?.(".search-overlay, .ro-panel")) return;
      if (!panel.current?.contains(t) && !header.current?.contains(t)) close(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, close]);

  const current = (href: string) => (href === pathname ? ("page" as const) : undefined);
  // Release the menu's scroll lock at once, before the next page renders, so the page can scroll to the top
  // (some browsers, Safari in particular, ignore scrolling while the root has overflow: hidden).
  const onLink = () => {
    document.documentElement.style.overflow = "";
    setOpen(false);
  };

  return (
    <>
      <header className="masthead" ref={header}>
        <Link href="/" className="brand" aria-label="Open Cosmology, home">
          <Crest />
          <span className="brand-words">
            <span className="brand-text">Open Cosmology</span>
            <span className="brand-motto">Physics &amp; cosmology: four years, plus a graduate year</span>
          </span>
        </Link>
        {!isPhone && (
          <div className="masthead-tools">
            {tools.map((t) => (
              <span key={t.label} className="tool-slot">
                {t.node}
              </span>
            ))}
          </div>
        )}
        <button
          ref={toggle}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden="true" focusable="false" strokeWidth={1.75} /> : <Menu aria-hidden="true" focusable="false" strokeWidth={1.75} />}
        </button>
      </header>

      <nav className="main-nav" aria-label="Main">
        <div className="nav-row">
          {ROW_BEFORE.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
          {years.map((y) => (
            <Link key={y.number} href={y.rowHref} className="nav-year" aria-current={y.number === 0 ? current(y.rowHref) : undefined}>
              {y.label}
            </Link>
          ))}
          {ROW_AFTER.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Not `hidden` when closed but invisible (CSS), so the search dialog, which lives here on phones, can still
          open from its keyboard shortcut with the menu closed. */}
      <div id="site-menu" ref={panel} className="site-menu" data-open={open ? "true" : "false"} style={{ top }}>
        {isPhone && (
          <div className="menu-tools">
            {tools.map((t) => (
              <div key={t.label} className="menu-tool">
                {t.node}
                <span className="menu-tool-label" aria-hidden="true">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        )}
        <nav aria-label="Main">
          <ul className="menu-list">
            {ROW_BEFORE.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="menu-item" aria-current={current(l.href)} onClick={onLink}>
                  {l.label}
                </Link>
              </li>
            ))}
            {years.map((y) => (
              <li key={y.number}>
                <Link href={y.href} className="menu-item menu-year" aria-current={current(y.href)} onClick={onLink}>
                  <span>{y.label}</span>
                  <span className="menu-sub">{y.short}</span>
                </Link>
              </li>
            ))}
            {MENU_AFTER.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="menu-item" aria-current={current(l.href)} onClick={onLink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
