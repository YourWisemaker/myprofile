"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Code, User, FileText, Send } from "lucide-react"
import Image from "next/image"
import { AnimatedText } from "@/components/animated-text"
import { FadeIn } from "@/components/fade-in"
import { SlideUp } from "@/components/slide-up"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  const expertiseRef = useRef<HTMLDivElement>(null)

  const scrollToExpertise = () => {
    expertiseRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="container py-24 sm:py-32 space-y-8 md:space-y-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <FadeIn className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm <AnimatedText text="Arief Fitranto" className="text-primary" />
              </h1>
              <p className="text-xl text-muted-foreground">Software Engineer | Fullstack Specialist</p>
              <p className="text-muted-foreground max-w-[600px]">
                I build scalable, high-performance applications with modern technologies. Passionate about clean code,
                system architecture, and solving complex problems.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild className="transition-all duration-300 hover:scale-105">
                  <Link href="/contact">Get in touch</Link>
                </Button>
                <Button variant="outline" asChild className="transition-all duration-300 hover:scale-105">
                  <Link href="/projects">View my work</Link>
                </Button>
              </div>
            </FadeIn>
            <SlideUp className="flex-shrink-0">
              <div className="relative h-80 w-80 rounded-full overflow-hidden border-4 border-primary transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <Image
                  src="/assets/myphoto.png"
                  alt="Arief Fitranto"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>
            </SlideUp>
          </div>
          <div className="flex justify-center">
            <Button variant="ghost" size="icon" className="animate-bounce" onClick={scrollToExpertise}>
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </div>
        </section>

        <section ref={expertiseRef} className="bg-muted py-16 sm:py-24">
          <div className="container space-y-12">
            <FadeIn className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Expertise</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Specialized in building robust fullstack systems and scalable web applications
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="h-6 w-6 text-primary" />,
                  title: "Fullstack Development",
                  description:
                    "Building scalable APIs, microservices, and server-side applications with Node.js, Python, and Go.",
                },
                {
                  icon: <FileText className="h-6 w-6 text-primary" />,
                  title: "Database Design",
                  description:
                    "Designing efficient database schemas and optimizing queries for PostgreSQL, MongoDB, and Redis.",
                },
                {
                  icon: <User className="h-6 w-6 text-primary" />,
                  title: "System Architecture",
                  description:
                    "Designing and implementing scalable, maintainable system architectures for complex applications.",
                },
              ].map((item, i) => (
                <SlideUp
                  key={item.title}
                  className="bg-background p-6 rounded-lg shadow-sm border group hover:shadow-md transition-all duration-500 hover:border-primary/50"
                  delay={i * 100}
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {item.description}
                  </p>
                </SlideUp>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-24 space-y-12">
          <FadeIn className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              A selection of my recent work and personal projects
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-stack e-commerce platform with inventory management, payment processing, and analytics.",
                tags: ["Node.js", "React", "PostgreSQL"],
              },
              {
                title: "Real-time Analytics Dashboard",
                description: "A real-time analytics dashboard for monitoring system performance and user behavior.",
                tags: ["Python", "Vue.js", "Redis"],
              },
            ].map((project, i) => (
              <SlideUp
                key={project.title}
                className="group relative overflow-hidden rounded-lg border hover:border-primary/50 transition-all duration-500 hover:shadow-lg"
                delay={i * 200}
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt={project.title}
                    width={800}
                    height={450}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full transition-all duration-300 hover:bg-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild className="transition-all duration-300 hover:scale-105">
                      <Link href="#">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="transition-all duration-300 hover:scale-105">
                      <Link href="#">Live Demo</Link>
                    </Button>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild className="transition-all duration-300 hover:scale-105">
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
        </section>

        <section className="bg-muted py-16 sm:py-24">
          <div className="container space-y-12">
            <FadeIn className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Have a project in mind or want to discuss opportunities? Let's talk!
              </p>
            </FadeIn>
            <SlideUp className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <Link
                href="mailto:fitranto.arief@gmail.com"
                className="flex items-center gap-2 text-primary hover:underline transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                fitranto.arief@gmail.com
              </Link>
              <div className="h-4 w-px bg-border hidden md:block"></div>
              <Link
                href="https://linkedin.com"
                className="flex items-center gap-2 text-primary hover:underline transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="h-5 w-5" />
                linkedin.com/in/alexjohnson
              </Link>
              <div className="h-4 w-px bg-border hidden md:block"></div>
              <Link
                href="https://upwork.com/freelancers/alexjohnson"
                className="flex items-center gap-2 text-primary hover:underline transition-all duration-300 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 7.5C18 9.98528 15.9853 12 13.5 12C11.0147 12 9 9.98528 9 7.5C9 5.01472 11.0147 3 13.5 3C15.9853 3 18 5.01472 18 7.5Z" />
                  <path d="M13.5 12C9 12 5.5 15 5.5 19.5V21H21.5V19.5C21.5 15 18 12 13.5 12Z" />
                </svg>
                alexjohnson
              </Link>
            </SlideUp>
            <div className="flex justify-center">
              <Button asChild className="transition-all duration-300 hover:scale-110">
                <Link href="/contact">
                  <Send className="h-4 w-4 mr-2" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

