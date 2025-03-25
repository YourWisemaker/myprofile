"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl group">
          <span className="text-primary group-hover:text-primary/80 transition-colors duration-300">Wise</span>
          <span className="group-hover:text-primary transition-colors duration-300">Maker</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 
                ${
                  isActive(item.path) ? "text-primary after:w-full" : "hover:text-primary after:w-0 hover:after:w-full"
                }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="outline"
            size="icon"
            asChild
            className="rounded-full transition-transform duration-300 hover:scale-110"
          >
            <Link href="https://github.com/yourwisemaker">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="rounded-full transition-transform duration-300 hover:scale-110"
          >
            <Link href="https://www.linkedin.com/in/arief-fitranto-a76207119/">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="rounded-full transition-transform duration-300 hover:scale-110"
          >
            <Link href="https://www.upwork.com/freelancers/~0175f2d4c7179895f1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 7.5C18 9.98528 15.9853 12 13.5 12C11.0147 12 9 9.98528 9 7.5C9 5.01472 11.0147 3 13.5 3C15.9853 3 18 5.01472 18 7.5Z" />
                <path d="M13.5 12C9 12 5.5 15 5.5 19.5V21H21.5V19.5C21.5 15 18 12 13.5 12Z" />
              </svg>
              <span className="sr-only">Upwork</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

