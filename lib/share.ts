import type { Metadata } from "next";

const ALT =
  "Open Cosmology: a free path to modern cosmology, from vectors to the Big Bang. Expanding rings around a bright core on a starry background.";

/**
 * Open Graph / Twitter metadata for a page with its own title. Pages that set `openGraph`
 * replace the inherited image, so the site share image (app/opengraph-image.png) is added here.
 */
export function shareMetadata(title: string, description: string | undefined, type: "website" | "article" = "website"): Metadata {
  return {
    openGraph: {
      type,
      siteName: "Open Cosmology",
      title,
      description,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: ALT, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: "/twitter-image.png", width: 1200, height: 630, alt: ALT }],
    },
  };
}
