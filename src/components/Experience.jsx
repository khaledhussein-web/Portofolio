import { BriefcaseBusiness, Code2, Cpu, Database, MapPin } from 'lucide-react'
import { experience } from '../data/experience'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const roles = ['Full Stack', 'Frontend', 'Backend & APIs', 'Mobile', 'AI Integration', 'DevOps']

const capabilities = [
  {
    icon: Code2,
    title: 'Frontend & Mobile',
    technologies: ['React', 'React Native', 'JavaScript', 'Tailwind CSS'],
  },
  {
    icon: Database,
    title: 'Backend & Data',
    technologies: ['Node.js', 'Express.js', 'FastAPI', '.NET', 'REST APIs', 'PostgreSQL', 'MySQL', 'SQL Server'],
  },
  {
    icon: Cpu,
    title: 'AI, Quality & Delivery',
    technologies: ['Python AI', 'Image Analysis', 'Docker', 'Jenkins', 'Git', 'CI/CD', 'API Testing'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-950/40">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Full-stack experience, from idea to delivery."
            description="Building reliable software across telecommunications, AI automation, enterprise systems, and core banking."
          />
        </Reveal>
        <Reveal delay={0.06} className="mt-12">
          <div className="card surface-shine overflow-hidden p-7 sm:p-9">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
              <div>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-cyan-400 dark:text-ink">
                    <span className="font-display text-2xl font-bold leading-none">2</span>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-wider">Years</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-teal-600 dark:text-cyan-400">Professional profile</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">Full Stack Software Developer</h3>
                  </div>
                </div>
                <p className="mt-6 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
                  Two years of hands-on experience delivering web, mobile, backend, AI-enabled, and enterprise applications. Comfortable owning features end to end—from interface and API design through data modeling, authentication, testing, deployment, and stakeholder collaboration.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {roles.map((role) => <span key={role} className="tech-pill">{role}</span>)}
                </div>
              </div>

              <div className="grid gap-4">
                {capabilities.map(({ icon: Icon, title, technologies }) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/[0.025]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-700 dark:text-cyan-400">
                        <Icon size={17} />
                      </span>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white">{title}</h4>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{technologies.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-10">
          <div className="absolute bottom-4 left-[19px] top-4 hidden w-px bg-slate-200 sm:block dark:bg-white/10" />
          <div className="space-y-6">
            {experience.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.07}>
                <article className="relative sm:pl-16">
                  <div className="absolute left-0 top-7 z-10 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-slate-50 bg-slate-950 text-white sm:flex dark:border-[#090f1c] dark:bg-cyan-400 dark:text-ink">
                    <BriefcaseBusiness size={16} />
                  </div>
                  <div className="card surface-shine p-6 sm:p-8">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{item.role}</h3>
                        </div>
                        <p className="mt-1 font-semibold text-teal-700 dark:text-cyan-400">{item.company}</p>
                      </div>
                      <div className="text-sm text-slate-500 md:text-right dark:text-slate-400">
                        <p className="inline-flex items-center gap-1.5"><MapPin size={14} /> {item.location}</p>
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
