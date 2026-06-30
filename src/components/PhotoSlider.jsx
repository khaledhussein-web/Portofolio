import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { photos } from '../data/photos'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function PhotoSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const hasPhotos = photos.length > 0

  useEffect(() => {
    if (!hasPhotos) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') showNext()
      if (event.key === 'ArrowLeft') showPrevious()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, hasPhotos])

  if (!hasPhotos) return null

  const activePhoto = photos[activeIndex]

  function showNext() {
    setDirection(1)
    setActiveIndex((index) => (index + 1) % photos.length)
  }

  function showPrevious() {
    setDirection(-1)
    setActiveIndex((index) => (index - 1 + photos.length) % photos.length)
  }

  function choosePhoto(index) {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  return (
    <section id="photos" className="section-padding">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Photo moments"
            title="A closer look at the work behind the profile."
            description="Selected photos from projects, internships, and milestones."
            align="center"
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:shadow-black/30">
            <div className="relative aspect-[16/9] min-h-[280px] overflow-hidden sm:min-h-[420px]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={activePhoto.src}
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 80, scale: 1.02 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction * -80, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent p-5 sm:p-7">
                <p className="max-w-2xl font-display text-xl font-bold text-white sm:text-2xl">{activePhoto.title}</p>
                {activePhoto.caption && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">{activePhoto.caption}</p>}
              </div>
            </div>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-white shadow-lg backdrop-blur transition hover:bg-white hover:text-slate-950 sm:left-6"
              aria-label="Show previous photo"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-white shadow-lg backdrop-blur transition hover:bg-white hover:text-slate-950 sm:right-6"
              aria-label="Show next photo"
            >
              <ArrowRight size={20} />
            </button>

            <div className="flex items-center justify-center gap-2 bg-slate-950 px-5 py-4">
              {photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => choosePhoto(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index ? 'w-8 bg-cyan-300' : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Show photo ${index + 1}`}
                  aria-current={activeIndex === index}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
