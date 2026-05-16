'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import floodImage from '../ProjectPicture/FloodDetectionPrototype/03c50dd8-6942-4eae-ac8a-1ce37b17142a.jpg'
import innImage from '../ProjectPicture/InnProject/InnProject.png'
import aboutPhoto from '../Abad1.jpg'

const projects = [
  {
    title: 'Flood Detection Prototype',
    description: 'Machine learning-based flood detection prototype with visual data analysis and alert previews.',
    href: '/project-picture/flood-detection-prototype',
    image: floodImage,
  },
  {
    title: 'Inn Project',
    description: 'Hotel and inn interface concept with design screens and booking experience visuals.',
    href: '/project-picture/inn-project',
    image: innImage,
  },
]

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [statusMessage, setStatusMessage] = useState('')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const handleInput = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { name, email, message } = formState

    if (!name || !email || !message) {
      setStatusMessage('Please fill in all fields')
      return
    }

    setStatusMessage('Thank you for your message! I will get back to you soon.')
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#09090f] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-24 left-10 h-72 w-72 rounded-full bg-blue-900/40 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 h-96 w-96 rounded-full bg-sky-900/30 blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-slate-900/70 blur-3xl animate-pulse delay-1000" />
      </div>

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold text-blue-500">Gabriel.</div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-lg border border-white/10 bg-slate-900/80 p-2 text-white transition hover:bg-slate-900"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex">
            <button onClick={() => scrollToSection('home')} className="transition hover:text-blue-400">Home</button>
            <button onClick={() => scrollToSection('about')} className="transition hover:text-blue-400">About</button>
            <button onClick={() => scrollToSection('projects')} className="transition hover:text-blue-400">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="transition hover:text-blue-400">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="transition hover:text-blue-400">Contact</button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 text-slate-300 md:hidden">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection('home')} className="text-left transition hover:text-blue-400">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left transition hover:text-blue-400">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-left transition hover:text-blue-400">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-left transition hover:text-blue-400">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-left transition hover:text-blue-400">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-24">
        <section id="home" className="flex min-h-[78vh] items-center px-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">Hi, I&apos;m Gabriel Abad</h1>
            <p className="mt-6 text-xl font-semibold text-blue-400">Web Developer & Designer</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">I create beautiful and functional websites that help businesses grow</p>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-500"
            >
              Get In Touch
            </button>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.2fr_0.8fr] xl:gap-24">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
              <p className="text-slate-300 leading-8">
                I&apos;m a passionate web developer with a love for creating clean, modern websites. I started my journey in web development and have been learning new technologies every day.
              </p>
              <p className="text-slate-300 leading-8">
                My focus is on building responsive, user-friendly interfaces that look great on all devices. I love turning ideas into reality through code.
              </p>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/90 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-[4/3] w-full">
                <Image src={aboutPhoto} alt="Gabriel Abad" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">My Projects</h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <div key={project.title} className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/90 shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition hover:border-blue-500/30 hover:shadow-[0_30px_90px_rgba(0,102,255,0.25)]">
                  <div className="relative h-64 w-full">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className="space-y-4 p-8">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-slate-300 leading-7">{project.description}</p>
                    <Link href={project.href} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                      View Pictures →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                { title: 'HTML & CSS', value: 90 },
                { title: 'JavaScript', value: 75 },
                { title: 'Responsive Design', value: 85 },
                { title: 'Web Design', value: 80 },
              ].map((skill) => (
                <div key={skill.title} className="rounded-[24px] border border-white/10 bg-slate-950/90 p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
                    <span className="text-sm font-medium text-slate-400">{skill.value}%</span>
                  </div>
                  <div className="mt-4 h-4 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-blue-500 transition-all" style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">Get In Touch</span>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Let&apos;s work together</h2>
            <p className="mt-6 text-slate-300 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
            </p>
            <form onSubmit={handleSubmit} className="mt-12 grid gap-6 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  value={formState.name}
                  onChange={(event) => handleInput('name', event.target.value)}
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-5 py-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                <input
                  value={formState.email}
                  onChange={(event) => handleInput('email', event.target.value)}
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-5 py-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <textarea
                value={formState.message}
                onChange={(event) => handleInput('message', event.target.value)}
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-5 py-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <button
                type="submit"
                className="mx-auto rounded-2xl bg-blue-600 px-10 py-4 text-base font-semibold text-white transition hover:bg-blue-500"
              >
                Send Message
              </button>
              {statusMessage && <p className="text-center text-slate-300">{statusMessage}</p>}
            </form>
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-12">
          <div className="mx-auto max-w-6xl text-center text-sm text-slate-400">
            <p>© 2024 Gabriel Abad. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
