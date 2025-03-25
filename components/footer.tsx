import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <Link href="/" className="font-bold text-lg group">
            <span className="text-primary group-hover:text-primary/80 transition-colors duration-300">Wise</span>
            <span className="group-hover:text-primary transition-colors duration-300">Maker</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arief Fitranto. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {[
            {icon: <Github className="h-4 w-4" />, label: "GitHub", href: "https://github.com/yourwisemaker" },
            { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", href: "https://www.linkedin.com/in/arief-fitranto-a76207119/" },
            {
              icon: (
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
              ),
              label: "Upwork",
              href: "https://www.upwork.com/freelancers/~0175f2d4c7179895f1",
            },
          ].map((social) => (
            <Button
              key={social.label}
              variant="ghost"
              size="icon"
              asChild
              className="transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              <Link href={social.href}>
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  )
}

