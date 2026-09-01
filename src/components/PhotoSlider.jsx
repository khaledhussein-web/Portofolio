import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { projectGalleries } from '../data/photos'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const AUTOPLAY_DELAY = 3000

const slideVariants = {
  enter: (direction) => ({ opacity: 0, x: direction * 100, scale: 1.02 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction) => ({ opacity: 0, x: direction * -100, scale: 0.99 }),
}

function ProjectGallery({ gallery }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const { photos } = gallery

  const showNext = useCallback(() => {
    setDirection(1)
    setActiveIndex((index) => (index + 1) % photos.length)
  }, [photos.length])

  const showPrevious = useCallback(() => {
    setDirection(-1)
    setActiveIndex((index) => (index - 1 + photos.length) % photos.length)
  }, [photos.length])

  useEffect(() => {
    if (photos.length < 2 || isPaused || reduceMotion) return undefined
    const timer = window.setTimeout(showNext, AUTOPLAY_DELAY)
    return () => window.clearTimeout(timer)
  }, [activeIndex, isPaused, photos.length, reduceMotion, showNext])

  const activePhoto = photos[activeIndex]

  function choosePhoto(index) {
    if (index === activeIndex) return
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  function handleDragEnd(_, info) {
    const swipeStrength = Math.abs(info.offset.x) + Math.abs(info.velocity.x) * 0.25
    if (swipeStrength < 80) return
    if (info.offset.x < 0) showNext()
    else showPrevious()
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }
  }

  return (
    <Reveal className="min-w-0">
      <article className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-cyan-950/20">
        <div className={`h-1 bg-gradient-to-r ${gallery.accent}`} />
        <header className="flex flex-col gap-2 border-b border-slate-200 px-6 py-5 sm:px-8 dark:border-white/10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-600 dark:text-cyan-400">Project gallery</p>
          <h3 className="font-display text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">{gallery.project}</h3>
          <p className="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-400">{gallery.description}</p>
        </header>

        <div
          className="group relative bg-slate-950"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${gallery.project} images`}
        >
          <div className="relative aspect-video cursor-grab overflow-hidden active:cursor-grabbing">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activePhoto.src}
                custom={direction}
                variants={reduceMotion ? undefined : slideVariants}
                initial={reduceMotion ? { opacity: 0 } : 'enter'}
                animate={reduceMotion ? { opacity: 1 } : 'center'}
                exit={reduceMotion ? { opacity: 0 } : 'exit'}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                drag={reduceMotion ? false : 'x'}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 touch-pan-y"
              >
                <img src={activePhoto.src} alt={activePhoto.alt} draggable={false} className="h-full w-full select-none object-contain" />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/95 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhoto.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-6 sm:px-9 sm:pb-8"
              >
                <p className="font-display text-xl font-bold text-white sm:text-3xl">{activePhoto.title}</p>
                <p className="mt-2 hidden max-w-2xl text-sm leading-6 text-slate-200 sm:block">{activePhoto.caption}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {photos.length > 1 ? (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-white shadow-lg backdrop-blur-xl transition hover:bg-white hover:text-slate-950 sm:left-6"
                aria-label={`Show previous ${gallery.project} image`}
              >
                <ArrowLeft size={19} />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-white shadow-lg backdrop-blur-xl transition hover:bg-white hover:text-slate-950 sm:right-6"
                aria-label={`Show next ${gallery.project} image`}
              >
                <ArrowRight size={19} />
              </button>
            </>
          ) : null}

          <div className="relative flex items-center justify-between gap-4 border-t border-white/10 bg-slate-950 px-5 py-4 sm:px-7">
            {!isPaused && !reduceMotion && photos.length > 1 ? (
              <motion.div
                key={activeIndex}
                className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-cyan-400 to-teal-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: AUTOPLAY_DELAY / 1000, ease: 'linear' }}
              />
            ) : null}
            <p className="font-mono text-xs text-white/50">
              {String(activeIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </p>
            <div className="flex items-center justify-center gap-2.5">
              {photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => choosePhoto(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    activeIndex === index ? 'w-9 bg-cyan-300' : 'w-2.5 bg-white/25 hover:bg-white/60'
                  }`}
                  aria-label={`Show ${gallery.project} image ${index + 1}: ${photo.title}`}
                  aria-current={activeIndex === index}
                />
              ))}
            </div>
            <p className="hidden text-xs font-medium text-white/40 sm:block">Drag to explore</p>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function PhotoSlider() {
  if (!projectGalleries.length) return null

  return (
    <section id="photos" className="section-padding overflow-hidden">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Project showcase"
            title="Explore each project up close."
            description="Independent galleries highlighting the interfaces, workflows, and visual systems behind selected projects."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-10">
          {projectGalleries.map((gallery) => (
            <ProjectGallery key={gallery.id} gallery={gallery} />
          ))}
        </div>
      </div>
    </section>
  )
}
