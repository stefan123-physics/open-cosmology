import type { MetadataRoute } from "next";
import { getSite } from "@/lib/content";
import { SITE_URL as BASE } from "@/lib/site-url";
import { glossary, symbolYearPath } from "@/lib/symbols";


export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSite();
  return [
    { url: BASE },
    { url: `${BASE}/courses` },
    { url: `${BASE}/highschool` },
    { url: `${BASE}/about` },
    { url: `${BASE}/symbols` },
    ...[...new Set(glossary(site).flatMap((e) => e.pages.map((p) => p.yearNumber)))].sort((a, b) => a - b).map((y) => ({ url: BASE + symbolYearPath(y) })),
    { url: `${BASE}/review` },
    { url: `${BASE}/accessibility` },
    { url: `${BASE}/wonder` },
    { url: `${BASE}/privacy` },
    ...site.courses.map((c) => ({ url: BASE + c.href })),
    ...site.pages.map((p) => ({ url: BASE + p.href })),
  ];
}
