// app/error.tsx
"use client";

import * as React from 'react';

// The function name should be capitalized, and it must be the default export.
export default function ErrorBoundary({ 
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error for centralized reporting
    console.error("Client Error Caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <h2 className="text-xl font-bold mb-4">VISIO-OS Crash Detected</h2>
      <p className="text-muted-foreground mb-6">
        Something went wrong during rendering. Please try resetting the application segment.
      </p>
      <p className="text-sm text-red-500 mb-6">Error: {error.message}</p>
      <button
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
        onClick={
          // Attempt to re-render the segment where the error occurred
          () => reset()
        }
      >
        Attempt Reset
      </button>
    </div>
  );
}