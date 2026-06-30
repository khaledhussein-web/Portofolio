import { useMemo, useState } from 'react'
import { Check, Layers3 } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectFilters, projects } from '../data/projects'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visibleProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.category.includes(filter))),
    [filter],
  )

  return (
    <section id="projects" className="section-padding">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects built around real problems."
              description="A selection of full-stack, e-commerce, AI, and infrastructure work across web and mobile."
            />
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {projectFilters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    filter === item
                      ? 'bg-slate-950 text-white dark:bg-cyan-400 dark:text-ink'
                      : 'border border-slate-200 text-slate-600 hover:border-teal-500/40 hover:text-teal-700 dark:border-white/10 dark:text-slate-400 dark:hover:text-cyan-300'
                  }`}
                  aria-pressed={filter === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="card group relative overflow-hidden p-7 sm:p-8"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600 dark:text-cyan-400">{project.date}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{project.subtitle}</p>
                  </div>
                  <span className="font-display text-5xl font-bold text-slate-100 transition-colors group-hover:text-teal-500/10 dark:text-white/5 dark:group-hover:text-cyan-400/10">
                    {project.number}
                  </span>
                </div>
                <p className="mt-6 leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tech-pill">{technology}</span>
                  ))}
                </div>
                <div className="mt-7 border-t border-slate-200 pt-6 dark:border-white/10">
                  <p className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                    <Layers3 size={16} className="text-teal-600 dark:text-cyan-400" /> Key features
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Check size={15} className="mt-0.5 shrink-0 text-teal-600 dark:text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
