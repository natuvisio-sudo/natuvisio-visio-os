// components/core/main-nav.tsx

"use client" // This must be a Client Component due to hooks

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useSelectedLayoutSegment } from "next/navigation"

import type { MainNavItem } from "@/types"
import { siteConfig } from "@/config/site" 
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons" 
import { MobileNav } from "@/components/mobile-nav" 

// The static image source (using the WEBP optimized asset)
const VISIO_LOGO_SRC = "https://res.cloudinary.com/deb1j92hy/image/upload/v1765033070/erasebg-transformed_nkyc3g.webp";

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

// CRITICAL FIX: Ensure this is a NAMED export to match the import in the Layout
export function MainNav({ items = siteConfig.mainNav, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment() 
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  return (
    <div className="flex h-16 items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-6 md:gap-10">
        
        {/* ---- LOGO + BRAND NAME ---- */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          aria-label={siteConfig.name}
        >
          <Image
            src={VISIO_LOGO_SRC}
            alt="VISIO-OS Logo"
            width={32}
            height={32}
            priority={true} 
            className="h-8 w-8 object-contain"
          />

          <span className="hidden font-semibold tracking-tight sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>

        {/* ---- DESKTOP NAVIGATION ---- */}
        {items?.length ? (
          <nav className="hidden md:flex md:gap-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  "hover:text-foreground",
                  item.href.startsWith(`/${segment || ""}`)
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground",
                  item.disabled && "cursor-not-allowed opacity-50"
                )}
                aria-disabled={item.disabled}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>

      {/* ---- USER CONTROLS + MOBILE TOGGLE ---- */}
      <div className="flex items-center space-x-4">
        {children}

        {/* MOBILE MENU BUTTON (Keyboard Accessible) */}
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-expanded={showMobileMenu}
          aria-controls="mobile-nav-menu"
        >
          {showMobileMenu ? (
            <Icons.close className="h-5 w-5" />
          ) : (
            <Icons.menu className="h-5 w-5" /> // Final fix: Icons.menu is available
          )}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>

      {/* ---- MOBILE NAVIGATION OVERLAY ---- */}
      {showMobileMenu && items?.length ? (
        <MobileNav 
          items={items} 
          onClose={() => setShowMobileMenu(false)}
        >
          {children} 
        </MobileNav>
      ) : null}
    </div>
  )
}