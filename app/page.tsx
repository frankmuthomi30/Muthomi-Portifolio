import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Education } from '../components/Education'
import { Certifications } from '../components/Certifications'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import {CurrentProjects} from '../components/CurrentProjects'
import {CVDownload} from '../components/CVDownload'
import './globals.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section id="hero" aria-labelledby="hero-title">
          <Hero />
        </section>
        <section id="about" aria-labelledby="about-title">
          <About />
        </section>
        <section id="experience" aria-labelledby="experience-title">
          <Experience />
        </section>
        <section id="education" aria-labelledby="education-title">
          <Education />
        </section>
        <section id="projects" aria-labelledby="projects-title">
          <Projects />
        </section>
        <section id="skills" aria-labelledby="skills-title">
          <Skills />
        </section>
        <section id="currentProjects" aria-labelledby="current-Projects">
          <CurrentProjects />
        </section>
        <section id="certifications" aria-labelledby="certifications-title">
          <Certifications />
        </section>
        <section id="contact" aria-labelledby="contact-title">
          <Contact />
        </section>
        <section id="cv" aria-labelledby="cv-download">
          <CVDownload/>
        </section>
      </main>
      <Footer />
    </div>
  )
}
