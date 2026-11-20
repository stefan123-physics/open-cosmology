"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Crest } from "@/components/Crest";

/**
 * A slim bar that slides in at the top when the reader scrolls up after the header has gone out of view: a small
 * crest (home), Search and Reading options ("Aa", where focus mode lives). It hides again on scrolling down, so it
 * never sits over the text while reading, and stays away in focus mode and near the top of the page (the full
 * header is visible there). The buttons open the site's one search dialog and reading options panel by event.
 * Sets data-slim on <html> while shown, so sticky bars below it (the course chapter navigation) move down.
 */
export function SlimBar() {
  const [shown, setShown] = useState(false);
  const aa = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    const update = () => {
      const y = window.scrollY;
      const html = document.documentElement;
      const header = document.querySelector(".masthead");
      const headerGone = !header || header.getBoundingClientRect().bottom < 0;
      const focus = html.dataset.focusActive === "true";
      const menuOpen = html.dataset.menuOpen === "true";
      let next = shown;
      if (focus || menuOpen || !headerGone || y < 120) next = false;
      else if (y < last - 6) next = true; // scrolling up
      else if (y > last + 6) next = false; // scrolling down
      if (Math.abs(y - last) > 6) last = y;
      setShown(next);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [shown]);

  useEffect(() => {
    const html = document.documentElement;
    if (shown) html.dataset.slim = "on";
    else delete html.dataset.slim;
  }, [shown]);

  // While hidden the bar is inert: out of the tab order and invisible to screen readers.
  return (
    <div className="slim-bar" data-shown={shown ? "" : undefined} data-noread inert={!shown}>
      <Link href="/" className="slim-home" aria-label="Open Cosmology, home">
        <Crest size={28} />
      </Link>
      <span className="slim-title" aria-hidden="true">
        Open Cosmology
      </span>
      <button
        type="button"
        className="slim-btn"
       
        aria-label="Search the site"
        onClick={() => window.dispatchEvent(new Event("open-search"))}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </button>
      <button
        ref={aa}
        type="button"
        className="slim-btn slim-aa"
       
        aria-label="Reading options, including focus mode"
        onClick={() => window.dispatchEvent(new CustomEvent("open-reading-options", { detail: { anchor: aa.current } }))}
      >
        <span aria-hidden="true">
          A<small>a</small>
        </span>
      </button>
    </div>
  );
}
