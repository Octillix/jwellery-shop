"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, X, ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const pathname = usePathname()
  const isLandingPage = pathname === "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isLandingPage ? 'border-b border-primary/5 bg-background/40 backdrop-blur-md shadow-none' : 'border-b border-border/50 bg-background/70 backdrop-blur-lg shadow-sm'}`}>
      <div className="container flex h-16 sm:h-18 md:h-20 items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 group">
          <div className="relative">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-xl sm:text-2xl md:text-2xl">💎</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse opacity-75"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Jewellery
            </span>
            <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
              Premium Collection
            </span>
          </div>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-2">
          <Link
            href="/"
            className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              pathname === "/"
                ? "text-primary"
                : "text-foreground/80 hover:text-primary"
            }`}
          >
            <span className="relative z-10">Home</span>
            {pathname === "/" ? (
              <>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </>
            ) : (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            )}
          </Link>
          <Link
            href="/collections"
            className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              pathname === "/collections"
                ? "text-primary"
                : "text-foreground/80 hover:text-primary"
            }`}
          >
            <span className="relative z-10">Collections</span>
            {pathname === "/collections" ? (
              <>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </>
            ) : (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            )}
          </Link>
          <Link
            href="/about"
            className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              pathname === "/about"
                ? "text-primary"
                : "text-foreground/80 hover:text-primary"
            }`}
          >
            <span className="relative z-10">About</span>
            {pathname === "/about" ? (
              <>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </>
            ) : (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            )}
          </Link>
          <Link
            href="/contact"
            className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              pathname === "/contact"
                ? "text-primary"
                : "text-foreground/80 hover:text-primary"
            }`}
          >
            <span className="relative z-10">Contact</span>
            {pathname === "/contact" ? (
              <>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </>
            ) : (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            )}
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Search */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg backdrop-blur-sm bg-background/30 hover:bg-background/60 border border-border/30 hover:border-border/50 transition-all duration-300"
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Shopping Bag */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg backdrop-blur-sm bg-background/30 hover:bg-background/60 border border-border/30 hover:border-border/50 transition-all duration-300 relative"
          >
            <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-[10px] text-primary-foreground font-bold">0</span>
            </span>
            <span className="sr-only">Shopping Cart</span>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Sign In Button */}
          <Button 
            variant="default" 
            size="sm" 
            className="hidden sm:inline-flex text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-lg font-medium backdrop-blur-sm bg-primary/90 hover:bg-primary border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5" />
            Sign In
          </Button>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 rounded-lg backdrop-blur-sm bg-background/30 hover:bg-background/60 border border-border/30 hover:border-border/50 transition-all duration-300"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className={`fixed top-16 sm:top-18 md:top-20 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-xl border-b border-border shadow-lg transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <nav className="container mx-auto px-4 sm:px-6 py-6 space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                  pathname === "/"
                    ? "text-primary bg-primary/10 border-l-4 border-primary"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                Home
                {pathname === "/" && (
                  <span className="ml-auto w-2 h-2 bg-primary rounded-full"></span>
                )}
              </Link>
              <Link
                href="/collections"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                  pathname === "/collections"
                    ? "text-primary bg-primary/10 border-l-4 border-primary"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                Collections
                {pathname === "/collections" && (
                  <span className="ml-auto w-2 h-2 bg-primary rounded-full"></span>
                )}
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                  pathname === "/about"
                    ? "text-primary bg-primary/10 border-l-4 border-primary"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                About
                {pathname === "/about" && (
                  <span className="ml-auto w-2 h-2 bg-primary rounded-full"></span>
                )}
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                  pathname === "/contact"
                    ? "text-primary bg-primary/10 border-l-4 border-primary"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                Contact
                {pathname === "/contact" && (
                  <span className="ml-auto w-2 h-2 bg-primary rounded-full"></span>
                )}
              </Link>
              
              {/* Mobile Sign In Button */}
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="default" 
                  size="lg"
                  className="w-full text-base font-semibold bg-primary hover:bg-primary/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

