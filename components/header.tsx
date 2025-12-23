"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const pathname = usePathname()
  const isLandingPage = pathname === "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header 
        className={`fixed ${isLandingPage && !isScrolled ? 'md:top-0 lg:top-0 top-0' : 'top-0'} left-0 right-0 z-[100] w-full transition-all duration-500 ${
          isScrolled || !isLandingPage 
            ? 'bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/80' 
            : 'bg-background/95 backdrop-blur-lg border-b border-border/40'
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex h-16 sm:h-20 md:h-24 items-center justify-between gap-2 sm:gap-4">
            {/* Logo Section - Responsive Design */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0 group min-w-0">
              <div className="relative flex-shrink-0">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 group-hover:scale-105">
                  <span className="text-xl sm:text-2xl md:text-3xl">💎</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 h-3 w-3 sm:h-4 sm:w-4 bg-accent rounded-full border-2 border-background"></div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground leading-none tracking-tight group-hover:text-primary transition-colors truncate">
                  Ravi Jewellers
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.15em] sm:tracking-[0.2em] font-light mt-0.5 truncate">
                  Since 1985
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Elegant Underline Style */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-1 py-2 text-xs md:text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span 
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Theme Toggle */}
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden h-9 w-9 sm:h-10 sm:w-10 rounded-full"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden ${
                isLandingPage && !isScrolled ? 'top-16 sm:top-20' : 'top-16 sm:top-20'
              }`}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <div className={`fixed left-0 right-0 z-50 md:hidden bg-background border-b border-border shadow-2xl transition-all duration-300 ${
              isLandingPage && !isScrolled ? 'top-16 sm:top-20' : 'top-16 sm:top-20'
            }`}>
              <nav className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-2 sm:space-y-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10 border-2 border-primary/20"
                          : "text-foreground hover:text-primary hover:bg-muted/50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0"></div>
                      )}
                    </Link>
                  )
                })}
                
                {/* Mobile Theme Toggle */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border">
                  <div className="flex justify-center">
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      {!isLandingPage && <div className="h-16 sm:h-20 md:h-24" />}
    </>
  )
}

