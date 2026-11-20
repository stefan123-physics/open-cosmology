import type { NextConfig } from "next";

// One version per build: the commit on Vercel, a timestamp locally. Used by the "new version available" notice.
const buildVersion = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 12) ?? `local-${new Date().toISOString().slice(0, 19)}`;

// The site loads nothing from other hosts, so the policy can be "this site only". 'unsafe-inline' is needed for the
// theme script in <head> and the inline data scripts Next.js writes into every page. Development needs 'unsafe-eval'
// for hot reloading. PhET simulations (public/phet/) are excluded: they are PhET's own unmodified files.
const isDev = process.env.NODE_ENV !== "production";
const csp = [
  "default-src 'self'",
  // 'wasm-unsafe-eval': full-text search (public/pagefind) runs in WebAssembly; it allows only compiling WebAssembly,
  // still only from this site, not eval().
  `script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "media-src 'self' blob:",
  "frame-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const common = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  outputFileTracingIncludes: { "/**": ["./content/**/*"] },
  env: { NEXT_PUBLIC_BUILD_VERSION: buildVersion },
  async headers() {
    return [
      { source: "/:path*", headers: common },
      { source: "/((?!phet/).*)", headers: [{ key: "Content-Security-Policy", value: csp }] },
    ];
  },
};

export default nextConfig;
