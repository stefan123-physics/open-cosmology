"use client";
import { useEffect } from "react";

/**
 * Course menus start closed (so phones never see them flash open and push the lesson down) and are
 * opened on wide screens, where the menu sits in its own sidebar column.
 */
export function CollapseOnMobile() {
  useEffect(() => {
    if (window.matchMedia("(min-width: 901px)").matches && !document.documentElement.dataset.large)
      document.querySelectorAll<HTMLDetailsElement>("details[data-collapse-mobile]").forEach((d) => (d.open = true));
  }, []);
  return null;
}
