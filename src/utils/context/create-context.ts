"use client";
import { createContext as baseCreateContext } from "use-context-selector";

export function createContext<T>() {
  return baseCreateContext<T>((null as unknown) as T);
}
