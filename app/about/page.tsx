import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Code, Database, FileText, Github, Linkedin, Mail, Server, Twitter, Cloud, Library, ClipboardList } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { SlideUp } from "@/components/slide-up"
import { SlideIn } from "@/components/slide-in"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12 space-y-16">
          <section className="space-y-6">
            <FadeIn>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
            </FadeIn>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <SlideIn className="flex-1 space-y-4" direction="left">
                <p className="text-xl text-muted-foreground">
                  I'm Arief Fitranto, a software engineer with over 10 years of experience building scalable full-stack
                  systems and web applications.
                </p>
                <p className="text-muted-foreground">
                  My journey in software development began when I was studying Computer Science at Gadjah Mada University. Since then, I've
                  worked with startups and enterprise companies to build robust, high-performance applications that
                  solve real-world problems.
                </p>
                <p className="text-muted-foreground">
                  I specialize in fullstack development, system architecture, and database design. I'm passionate about
                  clean code, performance optimization, and creating maintainable software that can scale with business
                  needs.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me at gym, reading about new technologies, or contributing to
                  open-source projects.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button asChild className="transition-all duration-300 hover:scale-105">
                    <Link href="/contact">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Me
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="transition-all duration-300 hover:scale-105">
                    <Link href="https://bheckibo32.ufs.sh/f/Z0TFg4IATlW6bfCttD54cbv73lR6JVruaCh1oFpO5Tjkn2tK">
                      <FileText className="h-4 w-4 mr-2" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </SlideIn>
              <SlideIn className="flex-shrink-0" direction="right">
                <div className="overflow-hidden rounded-lg transition-all duration-500 hover:shadow-xl">
                  <Image
                    src="/assets/myphoto2.jpg"
                    alt="Arief Fitranto"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </SlideIn>
            </div>
          </section>

          <section className="space-y-8">
            <FadeIn>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Work Experience</h2>
            </FadeIn>
            <div className="space-y-8">
              {[
                {
                  period: "Aug 2024 - Present",
                  title: "Chief Technology Officer",
                  company: "ARIF",
                  description:
                    "Led the development of a scalable data analysis platform, optimizing workflows and integrating machine learning models. Enhanced security protocols and streamlined audio/video file conversion processes. Collaborated with Data Scientists and Engineers to ensure optimal system performance and data management.",
                  skills: ["System Architecture", "Machine Learning", "Data Engineering", "Security"],
                },
                {
                  period: "Dec 2024 - Feb 2025",
                  title: "Fullstack Developer",
                  company: "Study In Asia",
                  description:
                    "Spearheaded MVP development using Next.js, delivering within two-month deadline. Coordinated 50+ UI/UX iterations, improving delivery speed by 25%. Managed development team using Jira and reported directly to co-founder.",
                  skills: ["Next.js", "UI/UX", "Jira", "Project Management"],
                },
                {
                  period: "Sep 2021 - Dec 2024",
                  title: "Fullstack Engineer",
                  company: "CPR Vision Management",
                  description:
                    "Developed microservices architecture using Docker and Kubernetes, integrating with CRM systems. Worked with major clients including L'Oreal and Science Centre Singapore. Implemented solutions using C#, PHP, JavaScript, and WordPress.",
                  skills: ["Docker", "Kubernetes", "C#", "PHP", "Next.js", "Vue", "WordPress"],
                },
                {
                  period: "May 2024 - Sep 2024",
                  title: "Backend Developer",
                  company: "Paramount Students",
                  description:
                    "Developed backend features using Laravel for mobile application. Implemented real-time notifications and ensured seamless API integration with Flutter. Conducted requirements gathering and testing to enhance performance.",
                  skills: ["Laravel", "API Development", "Flutter Integration", "Real-time Systems"],
                },
                {
                  period: "Feb 2019 - Jul 2021",
                  title: "Software Engineer",
                  company: "Viagoo",
                  description:
                    "Implemented automated build processes and maintained logistics APIs. Promoted best practices with Docker and GitHub. Developed admin control panel and optimized real-time tracking systems.",
                  skills: ["DevOps", "API Development", "Docker", "GitHub", "Logistics Systems"],
                },
                {
                  period: "Jan 2017 - Dec 2019",
                  title: "Chief Technology Officer",
                  company: "Clenovio",
                  description:
                    "Managed company architecture and led engineering team in VR-based educational projects. Optimized IT infrastructure and implemented cutting-edge technologies. Used Trello for project management and engaged with stakeholders.",
                  skills: ["VR Development", "Team Leadership", "Project Management", "IT Infrastructure"],
                },
                {
                  period: "Jul 2017 - Feb 2019",
                  title: "Fullstack Developer",
                  company: "Excellence Asia",
                  description:
                    "Enhanced software performance and developed innovative front-end and back-end features. Collaborated with CTO and remote teams to ensure project success. Supported company events across Jakarta.",
                  skills: ["Full Stack Development", "System Design", "Remote Collaboration"],
                },
                {
                  period: "Nov 2015 - Jun 2017",
                  title: "Software Engineer",
                  company: "Citos Corporation",
                  description:
                    "Developed and optimized software solutions, focusing on performance improvements and system enhancements.",
                  skills: ["Software Development", "System Optimization"],
                },
                {
                  period: "Feb 2015 - Nov 2015",
                  title: "Full Stack Developer",
                  company: "KreasiKode",
                  description:
                    "Developed and maintained custom web applications, implementing features and performing bug fixes. Collaborated with clients to gather requirements and create technical specifications. Created custom CMS plugins and participated in code reviews to enhance development practices.",
                  skills: ["Web Development", "Full Stack", "CMS", "Client Collaboration"],
                },
              ].map((job, i) => (
                <SlideUp key={`${job.title}-${job.company}`} delay={i * 100}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 group hover:bg-muted/50 p-4 rounded-lg transition-all duration-300">
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <div className="md:w-2/3 space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {job.title}
                      </h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full transition-all duration-300 hover:bg-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <FadeIn>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Education</h2>
            </FadeIn>
            <SlideUp>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 group hover:bg-muted/50 p-4 rounded-lg transition-all duration-300">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2011 - 2015</span>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    Computer Science
                  </h3>
                  <p className="text-primary font-medium">Gadjah Mada University</p>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Graduated with honors. Specialized in Algorithms and Distributed Systems. Thesis: "Optimizing
                    Database Performance in Distributed Systems"
                  </p>
                </div>
              </div>
            </SlideUp>
          </section>

          <section className="space-y-8">
            <FadeIn>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Skills</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code className="h-5 w-5 text-primary" />,
                  title: "Programming Languages",
                  skills: ["JavaScript/TypeScript", "Python", "PHP", "Java", "C#", "C++", "SQL", "Unity"],
                },
                {
                  icon: <Server className="h-5 w-5 text-primary" />,
                  title: "Frameworks Technologies",
                  skills: ["Node.js", "Express", "Django", "Laravel", "REST API", "GraphQL", "WordPress", "Drupal", "ASP.NET"],
                },
                {
                  icon: <Database className="h-5 w-5 text-primary" />,
                  title: "Databases",
                  skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
                },
                {
                  icon: <Cloud className="h-5 w-5 text-primary" />,
                  title: "Cloud & DevOps",
                  skills: ["AWS", "Docker", "Git", "Cloud Computing", "CI/CD"],
                },
                {
                  icon: <Library className="h-5 w-5 text-primary" />,
                  title: "Frameworks & Libraries",
                  skills: ["React.js", "Next.js", "Angular", "AngularJS", "Bootstrap 5", "Bootstrap 3", "jQuery UI", "Entity Framework", "Entity Framework Core"],
                },
                {
                  icon: <ClipboardList className="h-5 w-5 text-primary" />,
                  title: "Project Management",
                  skills: ["Agile Methodology", "Scrum", "Team Leadership", "Requirements Analysis", "Technical Documentation"],
                },
              ].map((category, i) => (
                <SlideUp
                  key={category.title}
                  className="border rounded-lg p-6 space-y-4 group hover:border-primary/50 hover:shadow-md transition-all duration-500"
                  delay={i * 100}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="group-hover:text-foreground/80 transition-colors duration-300 hover:translate-x-1 hover:text-primary"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </SlideUp>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <FadeIn>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Connect With Me</h2>
            </FadeIn>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Github className="h-4 w-4 mr-2" />, label: "GitHub", href: "https://github.com" },
                { icon: <Linkedin className="h-4 w-4 mr-2" />, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: <Twitter className="h-4 w-4 mr-2" />, label: "Twitter", href: "https://twitter.com" },
                { icon: <Mail className="h-4 w-4 mr-2" />, label: "Email", href: "mailto:fitranto.arief@gmail.com" },
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
                      className="h-4 w-4 mr-2"
                    >
                      <path d="M18 7.5C18 9.98528 15.9853 12 13.5 12C11.0147 12 9 9.98528 9 7.5C9 5.01472 11.0147 3 13.5 3C15.9853 3 18 5.01472 18 7.5Z" />
                      <path d="M13.5 12C9 12 5.5 15 5.5 19.5V21H21.5V19.5C21.5 15 18 12 13.5 12Z" />
                    </svg>
                  ),
                  label: "Upwork",
                  href: "https://upwork.com/freelancers/alexjohnson",
                },
              ].map((social, i) => (
                <Button
                  key={social.label}
                  asChild
                  className="transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Link href={social.href}>
                    {social.icon}
                    {social.label}
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

