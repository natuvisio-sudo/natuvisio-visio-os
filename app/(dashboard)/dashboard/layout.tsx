// app/(dashboard)/layout.tsx (or root layout)

import { MainNav } from "@/components/core/main-nav";
// ... other imports

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  // 🎯 DEBUG TRACE IMPLEMENTATION
  let NavComponent = null;
  try {
    NavComponent = <MainNav />;
  } catch (e) {
    console.error("MainNav Render Error during trace:", e);
    // Render a placeholder if it fails immediately
    NavComponent = <header className="bg-red-500 text-white p-4">NAV FAILED TO RENDER: Check console!</header>;
  }

  return (
    <div className="flex min-h-screen">
      {/* {NavComponent}  <-- Replace MainNav component with the trace variable */}
      <header>{NavComponent}</header>
      <main className="flex-1">{children}</main>
    </div>
  );
}