import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { navigation } from '../data/navigation'

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-28% 0px -58%', threshold: [0, 0.15, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-ink/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="group relative font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white" aria-label="Back to top">
          <span className="absolute -inset-3 -z-10 scale-75 rounded-xl bg-teal-500/10 opacity-0 blur-sm transition group-hover:scale-100 group-hover:opacity-100" />
          KH<span className="inline-block text-teal-600 transition-transform duration-300 group-hover:rotate-180 group-hover:scale-125 dark:text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/60 p-1.5 shadow-sm backdrop-blur-xl lg:flex dark:border-white/10 dark:bg-white/[0.035]">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative isolate rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === item.href.slice(1)
                  ? 'text-slate-950 dark:text-white'
                  : 'text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-cyan-400'
              }`}
            >
              {activeSection === item.href.slice(1) ? (
                <motion.span
                  layoutId="active-navigation"
                  className="absolute inset-0 -z-10 rounded-full bg-teal-500/10 shadow-inner shadow-teal-500/5 dark:bg-cyan-400/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              ) : null}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -70, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 70, scale: 0.5 }}
                transition={{ duration: 0.22 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <a href="#contact" className="button-primary hidden px-5 py-2.5 sm:inline-flex">
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="icon-button lg:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 5rem)' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-white/10 dark:bg-ink lg:hidden"
          >
            <div className="section-shell flex h-full flex-col justify-center gap-3 pb-20">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group flex items-center justify-between border-b py-4 font-display text-2xl font-semibold transition-colors dark:border-white/10 ${
                    activeSection === item.href.slice(1)
                      ? 'border-teal-500/30 text-teal-700 dark:text-cyan-300'
                      : 'border-slate-200 text-slate-900 hover:text-teal-700 dark:text-white dark:hover:text-cyan-300'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-slate-400 transition-transform group-hover:translate-x-1">0{index + 1}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
