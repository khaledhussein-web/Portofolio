export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}
