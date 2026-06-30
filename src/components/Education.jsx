import { CalendarDays, GraduationCap, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-50 dark:bg-slate-950/40">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Computer science meets business thinking." align="center" />
        </Reveal>
        <Reveal className="mx-auto mt-12 max-w-4xl">
          <article className="card relative overflow-hidden p-7 sm:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-gradient-to-bl from-cyan-400/10 to-transparent" />
            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-glow dark:bg-cyan-400 dark:text-ink">
                <GraduationCap size={29} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-teal-600 dark:text-cyan-400">
                  Saint Joseph University of Beirut
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
                  Bachelor of Computer Science for Business
                </h3>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> September 2022 - Present</span>
                  <span className="inline-flex items-center gap-2"><MapPin size={16} /> Beirut, Lebanon</span>
                </div>
                <div className="mt-7 inline-flex rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  Expected graduation: Spring 2026
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
