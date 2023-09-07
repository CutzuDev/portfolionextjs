import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const gradientTextClass =
  "bg-gradient-to-l from-orange-700 via-orange-500 to-orange-300 bg-clip-text text-white";
