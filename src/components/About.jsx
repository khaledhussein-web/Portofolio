import { BrainCircuit, Code2, Layers3, Workflow } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const focusAreas = [
  { icon: Layers3, title: 'Full Stack', text: 'Polished interfaces backed by reliable APIs and data models.' },
  { icon: BrainCircuit, title: 'AI Integration', text: 'Practical AI services, image analysis, and intelligent workflows.' },
  { icon: Workflow, title: 'DevOps', text: 'Repeatable delivery with Docker, Jenkins, GitHub, and CI/CD.' },
  { icon: Code2, title: 'Architecture', text: 'Maintainable backend systems designed to grow with the product.' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-950/40">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="About me" title="Building software with purpose and precision." />
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
          <Reveal>
            <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              <p>
                I&apos;m a motivated, detail-oriented developer focused on building modern, scalable, and intelligent applications. I enjoy connecting clean user experiences to dependable backend architecture and useful AI capabilities.
              </p>
              <p>
                My hands-on work spans React, React Native, Node.js, Express.js, JavaScript, Java, Python, FastAPI, PostgreSQL, Docker, Jenkins, GitHub, CI/CD, and custom AI modules.
              </p>
              <p>
                I&apos;ve contributed to real web and mobile products, built Python microservices with FastAPI, and developed automation workflows in professional environments. I&apos;m now deepening my expertise in NestJS and TypeScript to build even stronger scalable systems.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="card surface-shine group h-full p-6 transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:text-cyan-400">
                    <Icon size={21} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
