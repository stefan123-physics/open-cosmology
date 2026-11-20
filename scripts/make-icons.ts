/**
 * Renders the site icons and the social share image from the SVGs in /brand.
 *   npm run icons
 * Outputs (Next.js file conventions pick these up automatically):
 *   app/favicon.ico            16, 32, 48 px (browser tab)
 *   app/icon.svg               scalable favicon for modern browsers
 *   app/apple-icon.png         180 px (iPhone/iPad home screen)
 *   public/icons/icon-192.png, icon-512.png, maskable-512.png (Android home screen, via app/manifest.ts)
 *   app/opengraph-image.png, app/twitter-image.png  1200×630 (link previews)
 * Text in the share image uses the OFL fonts in brand/fonts.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// Point fontconfig at brand/fonts (EB Garamond, Source Serif 4) before sharp loads,
// so the share image is set in the site's own typefaces on any machine.
const fontsDir = path.resolve("brand/fonts");
const fcDir = fs.mkdtempSync(path.join(os.tmpdir(), "oc-fonts-"));
fs.writeFileSync(
  path.join(fcDir, "fonts.conf"),
  `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig><dir>${fontsDir}</dir>` +
    `<include ignore_missing="yes">/etc/fonts/fonts.conf</include><cachedir>${fcDir}/cache</cachedir></fontconfig>`
);
process.env.FONTCONFIG_FILE = path.join(fcDir, "fonts.conf");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const sharp: typeof import("sharp").default = require("sharp");

const read = (f: string) => fs.readFileSync(f);
const png = (svg: Buffer, size: number, density = 300) =>
  sharp(svg, { density }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

/** ICO container holding PNG images (supported by every current browser). */
function ico(images: { size: number; data: Buffer }[]): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  const entries: Buffer[] = [];
  let offset = 6 + 16 * images.length;
  for (const img of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(img.size >= 256 ? 0 : img.size, 0);
    e.writeUInt8(img.size >= 256 ? 0 : img.size, 1);
    e.writeUInt8(0, 2); // palette
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4); // colour planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(img.data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += img.data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

async function main() {
  const full = read("brand/icon.svg");
  const small = read("brand/icon-small.svg");
  const maskable = read("brand/maskable.svg");

  const icoImages = await Promise.all(
    [16, 32, 48].map(async (size) => ({ size, data: await png(size <= 32 ? small : full, size) }))
  );
  fs.writeFileSync("app/favicon.ico", ico(icoImages));
  fs.copyFileSync("brand/icon.svg", "app/icon.svg");

  // Apple touch icon: square, no transparency (iOS rounds the corners itself).
  const appleSvg = Buffer.from(
    full.toString().replace('<rect width="512" height="512" rx="112"', '<rect width="512" height="512" rx="0"')
  );
  fs.writeFileSync("app/apple-icon.png", await sharp(await png(appleSvg, 180)).flatten({ background: "#7b1e2b" }).png().toBuffer());

  fs.mkdirSync("public/icons", { recursive: true });
  fs.writeFileSync("public/icons/icon-192.png", await png(full, 192));
  fs.writeFileSync("public/icons/icon-512.png", await png(full, 512));
  fs.writeFileSync("public/icons/maskable-512.png", await png(maskable, 512));

  const og = fs.readFileSync("brand/og.template.svg");
  const ogPng = await sharp(og, { density: 144 }).resize(1200, 630).png({ compressionLevel: 9 }).toBuffer();
  fs.writeFileSync("app/opengraph-image.png", ogPng);
  fs.writeFileSync("app/twitter-image.png", ogPng);

  console.log("Icons and share image written.");
}

main();
