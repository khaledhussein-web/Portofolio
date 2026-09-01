import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PhotoSlider from './components/PhotoSlider'
import Projects from './components/Projects'
import Skills from './components/Skills'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.25 })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500"
      style={{ scaleX }}
    />
  )
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme')
  if (savedTheme) return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-white text-slate-900 transition-colors duration-500 dark:bg-ink dark:text-slate-100">
      <ScrollProgress />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="ambient-orb left-[-10rem] top-[8%] h-80 w-80 bg-cyan-400/15 dark:bg-cyan-400/10" />
        <div className="ambient-orb right-[-8rem] top-[38%] h-96 w-96 bg-blue-500/10 [animation-delay:-7s] dark:bg-blue-500/10" />
        <div className="ambient-orb bottom-[-12rem] left-[35%] h-96 w-96 bg-teal-400/10 [animation-delay:-13s] dark:bg-teal-400/[0.07]" />
      </div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar theme={theme} toggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <PhotoSlider />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <div className="relative z-10"><Footer /></div>
    </div>
  )
}
