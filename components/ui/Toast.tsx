"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Short in-site messages after an action ("Progress imported"). showToast() from anywhere; <Toaster /> is mounted
 * once in the root layout. The message is announced to screen readers (a polite status region that is always in
 * the page) and disappears after a few seconds; nothing is stored.
 */
export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent("site-toast", { detail: message }));
}

export function Toaster() {
  const [message, setMessage] = useState("");
  const [shown, setShown] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const on = (e: Event) => {
      const text = (e as CustomEvent<string>).detail;
      clearTimeout(timer.current);
      // Clear first so the same message twice is announced twice.
      setMessage("");
      setTimeout(() => {
        setMessage(text);
        setShown(true);
      }, 30);
      timer.current = setTimeout(() => setShown(false), 4500);
    };
    window.addEventListener("site-toast", on);
    return () => {
      window.removeEventListener("site-toast", on);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className={`toast${shown && message ? " shown" : ""}`} role="status" aria-live="polite" aria-atomic="true">
      {message}
    </div>
  );
}
