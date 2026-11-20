"use client";
import { useEffect, useRef, useState } from "react";

export type ChapterLink = { id: string; label: string; title: string; empty: boolean };

/**
 * Chapter navigation for a course page. Desktop (≥ 1000px): a sticky list beside the sections. Narrower: a sticky,
 * horizontally scrolling row of chips that slides away while scrolling down and returns when scrolling up (it stays
 * put with reduced motion). The chapter in view is marked with aria-current. Plain anchor links, so it also works
 * without JavaScript and offline.
 */
export function ChapterNav({ chapters }: { chapters: ChapterLink[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const listRef = useRef<HTMLOListElement>(null);

  // Which chapter is in view.
  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter((e): e is HTMLElement => e !== null);
    if (!els.length || !("IntersectionObserver" in window)) return;
    const visible = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting);
        const first = els.find((el) => visible.get(el.id));
        if (first) setActive(first.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [chapters]);

  // Keep the active chip visible in the horizontal row (without moving the page vertically).
  useEffect(() => {
    const list = listRef.current;
    if (!list || !active || list.scrollWidth <= list.clientWidth) return;
    const a = list.querySelector<HTMLElement>(`a[href="#${active}"]`);
    if (!a) return;
    const left = a.offsetLeft - list.clientWidth / 2 + a.clientWidth / 2;
    list.scrollTo({ left, behavior: "auto" });
  }, [active]);

  // Narrow screens: hide the row while scrolling down, show it when scrolling up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 8) return;
      setHidden(y > last && y > 200);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="chapter-nav" aria-label="Chapters" data-hidden={hidden ? "" : undefined}>
      <ol ref={listRef}>
        {chapters.map((c) => (
          <li key={c.id} data-empty={c.empty ? "" : undefined}>
            <a href={`#${c.id}`} aria-current={active === c.id ? "location" : undefined} onFocus={() => setHidden(false)}>
              <span className="chapter-nav-label">{c.label}</span>
              <span className="chapter-nav-title">{c.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
