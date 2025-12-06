// components/main-nav.tsx (Ensure this is the structure)

"use client" // Must be a client component due to hooks

// ... imports

// CRITICAL FIX: Ensure this is a NAMED export
export function MainNav({ items = siteConfig.mainNav, children }: MainNavProps) {
  // ... component logic using useSelectedLayoutSegment, useState, etc.
  
  return (
    // ... JSX content
  );
}

// NOTE: Ensure no other default export exists in this file.