/** The site's own domain. */
export const SITE_DOMAIN = "https://opencosmology.eu";

/**
 * Absolute site URL, used for share images, the sitemap and "Report a mistake" links.
 * NEXT_PUBLIC_SITE_URL overrides it (no slash at the end); otherwise every production build
 * (Vercel or a local `npm run build`) uses opencosmology.eu, and `npm run dev` uses localhost.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.NODE_ENV === "production" ? SITE_DOMAIN : "http://localhost:3000");
