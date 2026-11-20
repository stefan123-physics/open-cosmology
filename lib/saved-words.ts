"use client";
import { useEffect, useState } from "react";
import { today } from "./flashcards";

/**
 * "My words" (docs/GLOSSARY-PLAN.md §5, §10): glossary words the reader saved, kept only in this browser
 * (localStorage key "saved-words", listed on the Privacy page). Each is { id, at } with the date it was saved.
 * Saved words become flashcards on /review (card id "term:<id>") and are part of export/import (lib/backup.ts).
 */
export const SAVED_KEY = "saved-words";
export type SavedWord = { id: string; at: string };

const ID = /^[a-z0-9][a-z0-9-]{0,119}$/;
const DAY = /^\d{4}-\d{2}-\d{2}$/;
export const MAX_SAVED = 5000;

/** Checks stored or imported data: an array of { id, at } with valid ids and dates, no duplicates. */
export function isSavedWords(x: unknown): x is SavedWord[] {
  if (!Array.isArray(x) || x.length > MAX_SAVED) return false;
  const seen = new Set<string>();
  for (const w of x) {
    if (!w || typeof w !== "object" || Array.isArray(w)) return false;
    const { id, at } = w as Record<string, unknown>;
    if (typeof id !== "string" || !ID.test(id) || typeof at !== "string" || !DAY.test(at) || seen.has(id)) return false;
    if (Object.keys(w).length !== 2) return false;
    seen.add(id);
  }
  return true;
}

export function loadSaved(): SavedWord[] {
  try {
    const raw = JSON.parse(localStorage.getItem(SAVED_KEY) ?? "null");
    return isSavedWords(raw) ? raw : [];
  } catch {
    return [];
  }
}

export function storeSaved(list: SavedWord[]) {
  try {
    if (list.length) localStorage.setItem(SAVED_KEY, JSON.stringify(list));
    else localStorage.removeItem(SAVED_KEY);
  } catch {}
  window.dispatchEvent(new Event("saved-words-change"));
}

/** Saves the words not saved yet; returns how many were new. */
export function saveWords(ids: string[]): number {
  const list = loadSaved();
  const have = new Set(list.map((w) => w.id));
  const add = [...new Set(ids)].filter((id) => ID.test(id) && !have.has(id)).map((id) => ({ id, at: today() }));
  if (add.length) storeSaved([...list, ...add].slice(0, MAX_SAVED));
  return add.length;
}

export function removeWord(id: string) {
  storeSaved(loadSaved().filter((w) => w.id !== id));
}

/** Saves or removes one word; returns true when it is now saved. */
export function toggleWord(id: string): boolean {
  if (loadSaved().some((w) => w.id === id)) {
    removeWord(id);
    return false;
  }
  saveWords([id]);
  return true;
}

/** The saved words, kept up to date across components and tabs. Empty until mounted (no hydration mismatch). */
export function useSavedWords(): SavedWord[] {
  const [list, setList] = useState<SavedWord[]>([]);
  useEffect(() => {
    const update = () => setList(loadSaved());
    update();
    const onStorage = (e: StorageEvent) => e.key === SAVED_KEY && update();
    window.addEventListener("saved-words-change", update);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("saved-words-change", update);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  return list;
}
