import {
  BrainCircuit,
  CheckCircle2,
  Code2,
  Container,
  Database,
  Languages as LanguagesIcon,
  LayoutTemplate,
  Server,
  Users,
} from 'lucide-react'
import { languages, skillGroups } from '../data/skills'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons = {
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  container: Container,
  brain: BrainCircuit,
  code: Code2,
  check: CheckCircle2,
  users: Users,
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Technical toolkit"
            title="Skills that move ideas into production."
            description="A growing toolkit shaped by academic work, internships, and end-to-end product development."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon]
            return (
              <Reveal key={group.title} delay={(index % 4) * 0.05}>
                <article className="card surface-shine group h-full p-6 transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:text-cyan-400">
                    <Icon size={21} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tech-pill">{skill}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-6">
          <div className="card surface-shine flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-cyan-400">
                <LanguagesIcon size={21} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">Languages</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Comfortable working across multilingual teams.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((language) => (
                <div key={language.name} className="rounded-xl bg-slate-50 px-4 py-3 dark:bg-white/5">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{language.name}</span>
                  <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">{language.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
