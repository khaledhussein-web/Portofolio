import { ArrowUp, Github, Mail } from 'lucide-react'
import { navigation } from '../data/navigation'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 dark:border-white/10 dark:bg-slate-950/60">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          <div>
            <a href="#home" className="font-display text-xl font-bold text-slate-950 dark:text-white">
              Khaled Hussein<span className="text-teal-600 dark:text-cyan-400">.</span>
            </a>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Full Stack Developer · Beirut, Lebanon</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-cyan-400">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a className="icon-button" href="https://github.com/khaledhussein-web" target="_blank" rel="noreferrer" aria-label="Khaled Hussein on GitHub"><Github size={18} /></a>
            <a className="icon-button" href="mailto:khaled.hussein.lb@hotmail.com" aria-label="Email Khaled Hussein"><Mail size={18} /></a>
            <a className="icon-button" href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>
          </div>
        </div>
        <p className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-400 dark:border-white/10">
          © {new Date().getFullYear()} Khaled Hussein. Designed and built with React.
        </p>
      </div>
    </footer>
  )
}
