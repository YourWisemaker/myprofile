import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { SlideUp } from "@/components/slide-up"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Designing Scalable Microservices Architecture",
      excerpt:
        "Learn how to design and implement a scalable microservices architecture that can handle high traffic and complex business requirements.",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["Architecture", "Microservices", "Scalability"],
      slug: "microservices-architecture",
      image: "/placeholder.svg?height=450&width=800",
    },
    {
      title: "Advanced Database Optimization Techniques",
      excerpt:
        "Explore advanced techniques for optimizing database performance, including indexing strategies, query optimization, and caching.",
      date: "February 28, 2024",
      readTime: "12 min read",
      tags: ["Database", "Performance", "SQL"],
      slug: "database-optimization",
      image: "/placeholder.svg?height=450&width=800",
    },
    {
      title: "RESTful API Design Best Practices",
      excerpt:
        "A comprehensive guide to designing RESTful APIs that are intuitive, consistent, and developer-friendly.",
      date: "January 10, 2024",
      readTime: "10 min read",
      tags: ["API", "REST", "Fullstack"],
      slug: "api-design",
      image: "/placeholder.svg?height=450&width=800",
    },
    {
      title: "Building a Comprehensive System Monitoring Stack",
      excerpt:
        "Learn how to set up a comprehensive monitoring stack to track system performance, detect issues, and ensure reliability.",
      date: "December 5, 2023",
      readTime: "15 min read",
      tags: ["Monitoring", "DevOps", "Reliability"],
      slug: "system-monitoring",
      image: "/placeholder.svg?height=450&width=800",
    },
  ]

  const topics = ["Architecture", "Fullstack Development", "Database", "Performance", "API Design", "DevOps", "Security"]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12 space-y-8">
          <section className="space-y-6">
            <FadeIn>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
              <p className="text-xl text-muted-foreground max-w-[800px]">
                Thoughts, insights, and tutorials on software development, system architecture, and technology trends.
              </p>
            </FadeIn>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <SlideUp key={post.slug} className="group" delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="overflow-hidden rounded-lg border mb-4 group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                      {post.excerpt}
                    </p>
                    <div className="flex gap-2 pt-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </SlideUp>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Button variant="outline" className="transition-all duration-300 hover:scale-105" asChild>
              <Link href="https://medium.com/@fitranto.arief">Load More Articles</Link>
            </Button>
          </div>

          <section className="space-y-6 pt-8">
            <FadeIn>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Topics</h2>
            </FadeIn>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, i) => (
                <Button
                  key={topic}
                  variant="outline"
                  size="sm"
                  className="rounded-full transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:text-primary"
                  asChild
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <Link href={`/blog/topics/${topic.toLowerCase().replace(" ", "-")}`}>
                    <Tag className="h-4 w-4 mr-2" />
                    {topic}
                  </Link>
                </Button>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

