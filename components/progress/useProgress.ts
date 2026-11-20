"use client";
import { useEffect, useState } from "react";
import { loadProgress, type Progress } from "@/lib/progress";

/** Current study progress; null until loaded in the browser (so server and client render alike). */
export function useProgress(): Progress | null {
  const [p, setP] = useState<Progress | null>(null);
  useEffect(() => {
    const update = () => setP(loadProgress());
    update();
    window.addEventListener("progress-change", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("progress-change", update);
      window.removeEventListener("storage", update);
    };
  }, []);
  return p;
}
