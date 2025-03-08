"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Menu, X, Sun, Moon, LogIn } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { SignInBtn } from "./signinup"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-10">
          <Link href="/" className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DevOverflow</span>
          </Link>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-4">
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/users" className="font-medium transition-colors hover:text-primary">
                Users
              </Link>
              <Link href="/about" className="font-medium transition-colors hover:text-primary">
                About
              </Link>
            </nav>
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:gap-3 flex-1 px-2 pl-6">
          <div className="relative w-full flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-full pl-10" />
          </div>

          {isMounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  {theme === "dark" ? <Moon className="w-5" /> : <Sun className="w-5" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <SignInBtn />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          {isMounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 flex h-[calc(100vh-4rem)] w-full flex-col bg-background p-6 md:hidden">
          <div className="flex flex-col gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full pl-10" />
            </div>
            <nav className="flex flex-col gap-6 text-base">
              <Link
                href="/"
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/users"
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Users
              </Link>
              <Link
                href="/about"
                className="font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
            <div className="flex flex-col gap-2">
              <SignInBtn />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function MessageSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

