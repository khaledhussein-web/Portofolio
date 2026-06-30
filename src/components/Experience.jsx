import { BriefcaseBusiness, MapPin } from 'lucide-react'
import { experience } from '../data/experience'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-950/40">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Learning by building in real teams."
            description="Professional experience across telecommunications, AI automation, enterprise software, and core banking."
          />
        </Reveal>
        <div className="relative mt-14">
          <div className="absolute bottom-4 left-[19px] top-4 hidden w-px bg-slate-200 sm:block dark:bg-white/10" />
          <div className="space-y-6">
            {experience.map((item, index) => (
              <Reveal key={`${item.company}-${item.date}`} delay={index * 0.07}>
                <article className="relative sm:pl-16">
                  <div className="absolute left-0 top-7 z-10 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-slate-50 bg-slate-950 text-white sm:flex dark:border-[#090f1c] dark:bg-cyan-400 dark:text-ink">
                    <BriefcaseBusiness size={16} />
                  </div>
                  <div className="card p-6 sm:p-8">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{item.role}</h3>
                          {item.current && (
                            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-1 font-semibold text-teal-700 dark:text-cyan-400">{item.company}</p>
                      </div>
                      <div className="text-sm text-slate-500 md:text-right dark:text-slate-400">
                        <p className="font-semibold text-slate-700 dark:text-slate-300">{item.date}</p>
                        <p className="mt-1 inline-flex items-center gap-1.5"><MapPin size={14} /> {item.location}</p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
