// lib/utils.ts

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// 🎯 CRITICAL: This must be a NAMED export to match the import { cn } in MainNav
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Ensure there is NO line like:
// export default cn;