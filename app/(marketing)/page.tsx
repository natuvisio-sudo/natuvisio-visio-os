// app/(marketing)/page.tsx

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

// NOTE: Ensure your siteConfig object in /config/site.ts does NOT contain React elements.
// The default export for the page MUST be an async function if fetching data (RSC).

export default function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex flex-col items-center gap-4 text-center">
          
          {/* CRITICAL CHECK: Ensure only strings or JSX elements are here */}
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow @{siteConfig.creatorName || "visio_os"}
          </Link>
          
          <h1 className="font-extrabold tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.heroTitle || "VISIO-OS: Human Clarity, Engineered."}
          </h1>
          
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {siteConfig.description}
          </p>
          
          <div className="space-x-4 pt-4">
            <Link href="/dashboard-os" className={cn(buttonVariants({ size: "lg" }))}>
              Start Building Clarity
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <Icons.gitHub className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </section>
      
      {/* Optionally, check any component used directly on the page, like <FeatureGrid /> */}
      {/* If any component returns raw JSON or an object, that is the source of the error. */}
    </>
  )
}