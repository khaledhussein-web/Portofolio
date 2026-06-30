import { useState } from 'react'
import { Github, Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'khaled.hussein.lb@hotmail.com', href: 'mailto:khaled.hussein.lb@hotmail.com' },
  { icon: Phone, label: 'Phone', value: '+961 70/007736', href: 'tel:+96170007736' },
  { icon: MapPin, label: 'Location', value: 'Beirut, Lebanon' },
  { icon: Github, label: 'GitHub', value: 'khaledhussein-web', href: 'https://github.com/khaledhussein-web' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something worth shipping."
            description="I’m open to software development opportunities, ambitious teams, and thoughtful collaborations."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <div className="card h-full p-7 sm:p-8">
              <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">Start a conversation</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Have a role, project, or technical challenge in mind? Reach out through any of the channels below.
              </p>
              <div className="mt-8 space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-cyan-400">
                        <Icon size={19} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">{label}</span>
                        <span className="mt-1 block break-words text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</span>
                      </span>
                    </>
                  )
                  return href ? (
                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="flex items-center gap-4 transition hover:translate-x-1">
                      {content}
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-4">{content}</div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="card p-7 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-label">
                  Name
                  <input className="form-input" type="text" name="name" placeholder="Your name" required />
                </label>
                <label className="form-label">
                  Email
                  <input className="form-input" type="email" name="email" placeholder="you@company.com" required />
                </label>
              </div>
              <label className="form-label mt-5">
                Subject
                <input className="form-input" type="text" name="subject" placeholder="How can I help?" required />
              </label>
              <label className="form-label mt-5">
                Message
                <textarea className="form-input min-h-36 resize-y" name="message" placeholder="Tell me a little about the opportunity or project..." required />
              </label>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="button-primary">
                  Send message <Send size={17} />
                </button>
                <p className="text-sm text-slate-500 dark:text-slate-400" role="status">
                  {submitted ? 'Thanks! Form delivery will be connected in the next backend integration.' : 'Usually available within one business day.'}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
