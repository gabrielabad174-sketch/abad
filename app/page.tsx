'use client'

import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-border/40 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Alex Developer</div>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-12 text-sm">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition font-medium"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-primary transition font-medium"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary transition font-medium"
            >
              CONTACT
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border py-4">
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-primary transition text-left font-medium"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="hover:text-primary transition text-left font-medium"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-primary transition text-left font-medium"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 animate-in fade-in duration-1000">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">Welcome to my portfolio</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Crafting beautiful digital experiences
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                I&apos;m a full-stack developer passionate about building elegant, performant web applications that solve real problems. Currently focused on modern frontend architecture and user experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition flex items-center gap-2 w-fit"
              >
                View My Work <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition backdrop-blur"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 border-t border-border/40 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  I&apos;m a self-taught web developer with 4+ years of experience building web applications. I specialize in React, Next.js, and modern JavaScript.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="p-3 bg-card hover:bg-primary/20 border border-border/50 hover:border-primary/50 rounded-lg transition">
                    <Github size={20} />
                  </a>
                  <a href="#" className="p-3 bg-card hover:bg-primary/20 border border-border/50 hover:border-primary/50 rounded-lg transition">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-3 bg-card hover:bg-primary/20 border border-border/50 hover:border-primary/50 rounded-lg transition">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div className="relative border-l-2 border-primary/30 hover:border-primary/80 pl-8 pb-8 transition">
                  <div className="absolute -left-2 top-0 w-3 h-3 bg-primary rounded-full" />
                  <h3 className="text-accent font-semibold text-sm mb-3 uppercase tracking-wide">Experience</h3>
                  <h4 className="text-2xl font-bold mb-2">Senior Frontend Engineer</h4>
                  <p className="text-muted-foreground mb-4 text-sm">2022 - Present</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Led development of customer-facing applications, improved performance metrics by 40%, and mentored junior developers. Built scalable component libraries and implemented modern design systems.
                  </p>
                </div>

                <div className="relative border-l-2 border-primary/30 hover:border-primary/80 pl-8 pb-8 transition">
                  <div className="absolute -left-2 top-0 w-3 h-3 bg-accent rounded-full" />
                  <h3 className="text-accent font-semibold text-sm mb-3 uppercase tracking-wide">Previous Role</h3>
                  <h4 className="text-2xl font-bold mb-2">Full Stack Developer</h4>
                  <p className="text-muted-foreground mb-4 text-sm">2020 - 2022</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed full-stack features for SaaS products, collaborated with design teams, and optimized database queries resulting in 50% faster load times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6 border-t border-border/40 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Projects</h2>
          <div className="space-y-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A modern, fully-featured e-commerce solution with real-time inventory management, sophisticated product filtering, and seamless checkout experience.',
                tech: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
                link: '#'
              },
              {
                title: 'Analytics Dashboard',
                description: 'Real-time data visualization platform for tracking business metrics. Built with interactive charts, custom reporting, and export capabilities.',
                tech: ['Next.js', 'TypeScript', 'Recharts', 'PostGres'],
                link: '#'
              },
              {
                title: 'Task Collaboration App',
                description: 'Team productivity tool featuring real-time collaboration, task assignments, progress tracking, and integrated messaging for seamless communication.',
                tech: ['React', 'Firebase', 'Socket.io', 'Tailwind CSS'],
                link: '#'
              },
            ].map((project, i) => (
              <div key={i} className="group">
                <div className="relative border border-border/40 rounded-xl p-8 hover:border-primary/50 bg-card/50 hover:bg-card/80 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition">{project.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, j) => (
                          <span
                            key={j}
                            className="px-4 py-2 bg-primary/15 text-primary border border-primary/30 rounded-full text-sm font-medium group-hover:bg-primary/25 group-hover:border-primary/60 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="h-56 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/10 rounded-lg border border-border/40 group-hover:border-primary/50 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 border-t border-border/40 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-sm font-semibold text-accent">Get in touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Let&apos;s work together</h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@example.com"
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Send me an email
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition flex items-center justify-center gap-2 backdrop-blur"
            >
              <Github size={20} /> View my GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/40 py-12 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 Alex Developer. Designed and built by me.</p>
        </div>
      </footer>
    </div>
  )
}
