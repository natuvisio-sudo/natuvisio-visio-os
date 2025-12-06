import "@/styles/globals.css"; // Global styles and Tailwind CSS imports
import { Inter as FontSans } from "next/font/google"; // Recommended font import
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider"; // Client component wrapper for dark mode
import { Toaster } from "@/components/ui/toaster"; // Shadcn/ui toast component

// --- FONT CONFIGURATION ---
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// ------------------------------------------------------------------
// 1. ELITE MANDATE FIX: Metadata and Viewport Exports (RSC)
// ------------------------------------------------------------------

// 🎯 FIX A: Add viewport export to handle themeColor and align with Next.js 16
export const viewport = {
  themeColor: '#000000', // Set the primary theme color for mobile browsers
  initialScale: 1,
  width: 'device-width',
};

// 🎯 FIX B: Define Metadata for SEO and Social Sharing (RSC)
export const metadata = {
  // CRITICAL FIX: Define the base URL for correct absolute URL generation (e.g., for Open Graph images)
  metadataBase: new URL('https://visio-os.com'), 
  
  // Base SEO Configuration
  title: {
    default: siteConfig.name, // VISIO-OS: Human Clarity, Engineered.
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  // Social Sharing and PWA Configuration
  keywords: ["clarity", "wellness", "performance", "Next.js", "SaaS", "ai", "typescript"],
  authors: [
    {
      name: siteConfig.creatorName,
      url: siteConfig.links.github,
    },
  ],
  creator: siteConfig.creatorName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: siteConfig.creatorTwitter,
  },
};

// ------------------------------------------------------------------
// 2. ROOT LAYOUT COMPONENT
// ------------------------------------------------------------------

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* The ThemeProvider handles dark/light mode and must wrap the entire app */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* NOTE: We assume SessionProvider/AuthProvider will wrap children here */}
          {children} 
        </ThemeProvider>
        
        {/* Global Toast Notifications */}
        <Toaster />
      </body>
    </html>
  );
}