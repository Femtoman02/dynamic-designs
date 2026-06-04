interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({ tag, title, subtitle, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {tag && <span className="tag mb-4 inline-block">{tag}</span>}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-brand-black' : 'text-brand-white'
        }`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {!centered && (
        <div className="divider" />
      )}
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto mt-4' : 'mt-4'} ${
          light ? 'text-brand-gray-500' : 'text-brand-white/50'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
