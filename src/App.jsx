import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PhotoSlider from './components/PhotoSlider'
import Projects from './components/Projects'
import Skills from './components/Skills'

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
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 transition-colors dark:bg-ink dark:text-slate-100">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar theme={theme} toggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} />
      <main id="main-content">
        <Hero />
        <About />
        <PhotoSlider />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
