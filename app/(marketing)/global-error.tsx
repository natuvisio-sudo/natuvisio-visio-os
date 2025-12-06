// app/global-error.tsx

'use client'; // Required for hydration and using onClick

import * as React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
          <h1 className="text-3xl font-extrabold mb-4">CRITICAL SYSTEM FAILURE</h1>
          <p className="text-gray-400 mb-6">
            A fatal server rendering error occurred. The system requires a reboot.
          </p>
          <p className="text-sm text-red-400 mb-6">Error: {error.message}</p>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            onClick={
              // Force a full page reload for a clean restart
              () => window.location.reload()
            }
          >
            Hard System Reboot
          </button>
        </div>
      </body>
    </html>
  );
}