"use client";
import { usePathname } from "next/navigation";

/** The slug of the page being shown: the last part of /courses/<course>/<slug>. Progress is keyed by it. */
export function usePageSlug(): string {
  return (usePathname() ?? "").split("/").filter(Boolean).pop() ?? "";
}
