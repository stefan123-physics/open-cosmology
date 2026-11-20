"use client";
import { useEffect, useState } from "react";
import type { Heading } from "@/lib/headings";
import { SpeakerIcon, useSpeech } from "./speech/SpeechProvider";

/**
 * "On this page": the page's sections, built from its `## ` headings. The section in view is
 * highlighted, and each entry can be read aloud on its own.
 *  - variant "aside": sticky column next to the article (wide screens)
 *  - variant "inline": collapsible box above the article (phones and tablets)
 */
export function OnThisPage({ headings, variant }: { headings: Heading[]; variant: "aside" | "inline" }) {
  const [active, setActive] = useState<string | null>(null);
  const speech = useSpeech();

  useEffect(() => {
    const els = headings.map((h) => document.getElementById(h.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const visible = new Map<string, boolean>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting);
        // The active section is the last heading above the middle of the screen.
        const mid = window.innerHeight * 0.4;
        let current: string | null = null;
        for (const el of els) if (el.getBoundingClientRect().top < mid) current = el.id;
        setActive(current ?? els[0].id);
      },
      { rootMargin: "0px 0px -50% 0px", threshold: [0, 1] }
    );
    els.forEach((el) => obs.observe(el));
    const onScroll = () => {
      const mid = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const el of els) if (el.getBoundingClientRect().top < mid) current = el.id;
      setActive(current ?? els[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [headings]);

  if (headings.length < 3) return null;

  const list = (
    <ol className="otp-list">
      {headings.map((h) => (
        <li key={h.id} className={active === h.id ? "active" : ""}>
          <a href={`#${h.id}`} aria-current={active === h.id ? "location" : undefined}>
            {h.label}
          </a>
          {speech?.supported && (
            <button
              type="button"
              className="otp-read"
              aria-label={`Read aloud: ${h.label}`}
              title="Read this section aloud"
              onClick={() => {
                const sec = document.getElementById(h.id)?.closest("section");
                if (sec) speech.readRegion(sec, h.label);
              }}
            >
              <SpeakerIcon />
            </button>
          )}
        </li>
      ))}
    </ol>
  );

  if (variant === "inline")
    return (
      <details className="otp otp-inline" data-noread>
        <summary>On this page · {headings.length} sections</summary>
        {list}
      </details>
    );
  return (
    <nav className="otp otp-aside" aria-label="On this page" data-noread>
      <div className="otp-title">On this page</div>
      {list}
    </nav>
  );
}
