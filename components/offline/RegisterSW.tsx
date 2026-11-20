"use client";
import { useEffect } from "react";

/** Registers public/sw.js in production builds only; in development any old worker is removed so it never gets in the way. */
export function RegisterSW() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") {
      navigator.serviceWorker.getRegistrations().then((rs) => rs.forEach((r) => r.unregister()));
      return;
    }
    navigator.serviceWorker.register("/sw.js").catch(() => {
      /* offline support is optional */
    });
  }, []);
  return null;
}
