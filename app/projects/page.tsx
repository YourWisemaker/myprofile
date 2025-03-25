import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { SlideUp } from "@/components/slide-up"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with inventory management, payment processing, and analytics. Built with scalability and performance in mind to handle high traffic and large product catalogs.",
      tags: ["Node.js", "React", "PostgreSQL", "Redis", "Docker"],
      image: "/placeholder.svg?height=450&width=800",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "A real-time analytics dashboard for monitoring system performance and user behavior. Features customizable widgets, data visualization, and alerting capabilities.",
      tags: ["Python", "Vue.js", "Redis", "WebSockets"],
      image: "/placeholder.svg?height=450&width=800",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management system with real-time updates, team workspaces, and progress tracking. Designed for teams to organize and prioritize their work efficiently.",
      tags: ["TypeScript", "React", "Node.js", "MongoDB", "Socket.io"],
      image: "/placeholder.svg?height=450&width=800",
    },
    {
      title: "Content Management System",
      description:
        "A headless CMS with a user-friendly interface for content creators and a flexible API for developers. Supports multiple content types, versioning, and role-based access control.",
      tags: ["Go", "React", "GraphQL", "PostgreSQL"],
      image: "/placeholder.svg?height=450&width=800",
    },
  ]

  const openSourceProjects = [
    {
      title: "Node.js Performance Monitoring",
      description:
        "Contributed to a popular Node.js performance monitoring library, improving memory usage tracking and adding new metrics.",
    },
    {
      title: "Database Connection Pool",
      description:
        "Created and maintained a database connection pool library for Go, focusing on performance and reliability.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12 space-y-8">
          <section className="space-y-6">
            <FadeIn>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
              <p className="text-xl text-muted-foreground max-w-[800px]">
                A collection of my work, personal projects, and open-source contributions.
              </p>
            </FadeIn>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <SlideUp
                key={project.title}
                className="group relative overflow-hidden rounded-lg border hover:border-primary/50 transition-all duration-500 hover:shadow-xl"
                delay={i * 100}
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
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
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full transition-all duration-300 hover:bg-primary/20 hover:scale-105"
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
                      <Link href="#">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>

          <section className="space-y-6 pt-8">
            <FadeIn>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Open Source Contributions</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openSourceProjects.map((project, i) => (
                <SlideUp
                  key={project.title}
                  className="border rounded-lg p-6 space-y-4 group hover:border-primary/50 hover:shadow-md transition-all duration-500 hover:translate-y-[-5px]"
                  delay={i * 100}
                >
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>
                  <Button variant="outline" asChild className="transition-all duration-300 hover:scale-105">
                    <Link href="#">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Link>
                  </Button>
                </SlideUp>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

