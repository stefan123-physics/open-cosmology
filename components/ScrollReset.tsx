"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * A link to another page always opens that page at the top.
 *
 * Next.js normally does this itself, but it can leave the old scroll position in place in some browsers and
 * situations (for example Safari while the phone menu has just released its scroll lock). This makes the rule hard:
 * after every change of page (pathname) it scrolls to the top, unless
 *  - the address has a #anchor (search results, #chapter-2, #sec-4-3: the browser or the page jumps there), or
 *  - the change came from Back / Forward (popstate), where the browser restores the old position.
 * The first page load is left to the browser. Runs before paint, so the old position never shows.
 */
export function ScrollReset() {
  const pathname = usePathname();
  const fromHistory = useRef(false);
  const first = useRef(true);

  useEffect(() => {
    const onPop = () => {
      fromHistory.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (fromHistory.current) {
      fromHistory.current = false;
      return;
    }
    if (window.location.hash) return;
    // Release a scroll lock that may still be set (phone menu), then go to the top.
    if (document.documentElement.style.overflow === "hidden" && document.documentElement.dataset.menuOpen === undefined)
      document.documentElement.style.overflow = "";
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
