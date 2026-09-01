import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Mail, MapPin } from 'lucide-react'

const stats = [
  ['5+', 'Production projects'],
  ['3', 'Industry internships'],
  ['8', 'Skill areas'],
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-20 bg-white dark:bg-ink" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-24 bottom-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="section-shell grid items-center gap-14 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-500/5 px-4 py-2 text-sm font-semibold text-teal-700 dark:border-cyan-400/20 dark:text-cyan-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
            Open to software opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="mb-3 font-display text-lg font-medium text-slate-600 dark:text-slate-400"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.65 }}
            className="font-display text-5xl font-bold leading-[1.04] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Khaled Hussein<span className="text-teal-600 dark:text-cyan-400">.</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-tight text-slate-700 sm:text-3xl dark:text-slate-300"
          >
            Full Stack Developer <span className="text-slate-400">|</span> DevOps Enthusiast{' '}
            <span className="text-slate-400">|</span> AI Integration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.65 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400"
          >
            Full-stack developer building real-world web, mobile, AI, and DevOps projects with a focus on thoughtful, scalable engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.65 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#projects" className="button-primary">
              View projects <ArrowDown size={17} />
            </a>
            <a href="#contact" className="button-ghost">
              Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400"
          >
            <a className="inline-flex items-center gap-2 hover:text-teal-600 dark:hover:text-cyan-400" href="https://github.com/khaledhussein-web" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 hover:text-teal-600 dark:hover:text-cyan-400" href="mailto:khaled.hussein.lb@hotmail.com">
              <Mail size={17} /> Email
            </a>
            <span className="inline-flex items-center gap-2"><MapPin size={17} /> Beirut, Lebanon</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-8 rounded-[2.75rem] border border-dashed border-teal-500/20 dark:border-cyan-400/15"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/15 to-blue-600/10 blur-2xl" />
          <motion.div
            aria-hidden="true"
            className="absolute -right-5 top-16 z-20 hidden items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-bold text-slate-700 shadow-xl backdrop-blur sm:flex dark:border-white/10 dark:bg-slate-900/90 dark:text-cyan-300"
            animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" /> API ready
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="absolute -left-7 bottom-20 z-20 hidden rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-bold text-slate-700 shadow-xl backdrop-blur sm:block dark:border-white/10 dark:bg-slate-900/90 dark:text-violet-300"
            animate={reduceMotion ? undefined : { y: [0, 9, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            AI integrated ✦
          </motion.div>
          <div className="surface-shine relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/30">
            <div className="mb-8 flex items-center gap-2 border-b border-slate-200 pb-5 dark:border-white/10">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-xs text-slate-400">khaled.profile.js</span>
            </div>
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-slate-700 dark:text-slate-300" aria-label="Developer profile code">
              <code>
                <span className="text-violet-600 dark:text-violet-400">const</span> developer = {'{\n'}
                {'  '}name: <span className="text-emerald-600 dark:text-emerald-400">&apos;Khaled Hussein&apos;</span>,{'\n'}
                {'  '}focus: [{'\n'}
                {'    '}<span className="text-emerald-600 dark:text-emerald-400">&apos;Full Stack&apos;</span>,{'\n'}
                {'    '}<span className="text-emerald-600 dark:text-emerald-400">&apos;DevOps&apos;</span>,{'\n'}
                {'    '}<span className="text-emerald-600 dark:text-emerald-400">&apos;AI Integration&apos;</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}location: <span className="text-emerald-600 dark:text-emerald-400">&apos;Beirut&apos;</span>,{'\n'}
                {'  '}readyToBuild: <span className="text-orange-500">true</span>{'\n'}
                {'}'}
              </code>
            </pre>
            <a
              href="https://github.com/khaledhussein-web"
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-500/40 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              Explore my work on GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 lg:col-span-2 dark:border-white/10"
        >
          {stats.map(([value, label]) => (
            <motion.div key={label} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 350, damping: 22 }}>
              <p className="font-display text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">{value}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm dark:text-slate-400">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
