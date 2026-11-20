import type { MetadataRoute } from "next";

/** Web app manifest: lets phones add the site to the home screen with its own icon. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Open Cosmology",
    short_name: "Cosmology",
    description: "A free path to modern cosmology, rewritten from MIT OpenCourseWare.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ea",
    theme_color: "#7b1e2b",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
