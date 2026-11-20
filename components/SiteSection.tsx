"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isHighSchoolPath } from "@/lib/site-section";

/**
 * Keeps `data-site="highschool"` on <html> in step with the address while the reader moves between the High School
 * and the university years. The first paint is handled by SITE_SECTION_SCRIPT in the root layout, so nothing flashes.
 */
export function SiteSection() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    if (isHighSchoolPath(pathname)) root.setAttribute("data-site", "highschool");
    else root.removeAttribute("data-site");
  }, [pathname]);
  return null;
}
