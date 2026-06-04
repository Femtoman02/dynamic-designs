import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, ArrowRight, Quote } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what clients say about Dynamic Designs — real reviews from brands we have helped grow.',
}

const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '120+', label: 'Clients Served' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '87%', label: 'Repeat Clients' },
]

const testimonials = [
  { name: 'Adaeze Okonkwo', role: 'CEO', company: 'Lumina Lifestyle', service: 'Brand Identity', stars: 5, text: 'Dynamic Designs completely transformed our brand. The attention to detail, the creative vision, and the professionalism throughout the process was beyond what we imagined. Our brand recall has tripled since the rebrand launched.', featured: true },
  { name: 'Marcus Johnson', role: 'Executive Director', company: 'EduReach Foundation', service: 'Video Production', stars: 5, text: 'The documentary they produced for us was stunning. Emotionally resonant, technically polished, and delivered ahead of schedule. Our donors were moved to tears. We will not use anyone else for video.', featured: true },
  { name: 'Chiamaka Bello', role: 'Freelance Designer', company: 'Independent', service: 'Art Education', stars: 5, text: 'The CreativeFlow bootcamp gave me the skills to go full-time as a designer within 3 months of completing it. The curriculum was practical, the mentorship was real, and the community is incredible. Life-changing.', featured: true },
  { name: 'Tobi Adesanya', role: 'Founder', company: 'ZenGo App', service: 'Motion Graphics', stars: 5, text: 'Our launch campaign animations drove 2M+ impressions. The team understood our product deeply and translated complex features into visually elegant, memorable sequences. Exceptional work.' },
  { name: 'Ngozi Eze', role: 'Marketing Manager', company: 'Nourish Food Co.', service: 'Packaging Design', stars: 5, text: 'We needed packaging that could compete on retail shelves with international brands. Dynamic Designs delivered exactly that — clean, premium, and distinctly African. Sales are up 40% since the relaunch.' },
  { name: 'David Obi', role: 'Creative Director', company: 'TechHub Nigeria', service: 'Editorial Design', stars: 5, text: 'Our annual report went from something we were embarrassed to share to something our partners and donors reference as a benchmark. The infographics especially are outstanding.' },
  { name: 'Funke Lawal', role: 'Artist Manager', company: 'Sound Empire', service: 'Motion Graphics', stars: 5, text: 'The lyric videos and visualisers for our artists have consistently outperformed our previous creative. The team is fast, collaborative, and genuinely invested in the work.' },
  { name: 'Emeka Nwosu', role: 'Head of Product', company: 'FinFlow Africa', service: 'Explainer Video', stars: 5, text: 'Our onboarding drop-off rate went from 65% down to 25% after we deployed the explainer video Dynamic Designs created. That is a direct ROI that speaks for itself.' },
  { name: 'Kemi Adeyemi', role: 'Programme Director', company: 'Creative Lagos', service: 'Art Education', stars: 5, text: 'We commissioned a 2-day corporate design workshop for our team of 30. The delivery was professional, engaging, and packed with practical value. Every attendee left with actionable skills.' },
]

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 noise-bg overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">Testimonials</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}>
              Clients Who <span className="text-brand-green italic">Trust Us</span>
            </h1>
            <p className="text-brand-white/60 text-lg max-w-2xl leading-relaxed">
              Real words from real clients. We let the results — and the people behind them — do the talking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-14 bg-brand-gray-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 80}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-black text-brand-green mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}>{s.value}</div>
                  <div className="text-sm text-brand-white/40 font-mono uppercase tracking-wider">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader tag="Featured Reviews" title="From Our Happiest Clients" />
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            {testimonials.filter(t => t.featured).map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 100}>
                <div className="group relative p-8 border border-brand-green/20 rounded-sm bg-gradient-to-br from-brand-green/10 to-transparent card-hover h-full flex flex-col">
                  <Quote size={28} className="text-brand-green/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-brand-green fill-brand-green" />
                    ))}
                  </div>
                  <p className="text-brand-white/70 leading-relaxed mb-6 flex-1 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-sm">{t.name[0]}</div>
                    <div>
                      <div className="font-semibold text-brand-white text-sm">{t.name}</div>
                      <div className="text-xs text-brand-white/35">{t.role}, {t.company}</div>
                    </div>
                    <span className="ml-auto tag text-[10px]">{t.service}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All testimonials */}
      <section className="py-16 bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader tag="More Reviews" title="What Others Are Saying" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {testimonials.filter(t => !t.featured).map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 70}>
                <div className="p-7 border border-white/5 rounded-sm bg-white/[0.02] card-hover h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={12} className="text-brand-green fill-brand-green" />
                    ))}
                  </div>
                  <p className="text-brand-white/60 text-sm leading-relaxed mb-5 flex-1 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-8 h-8 rounded-full bg-brand-green/15 flex items-center justify-center text-brand-green font-bold text-xs">{t.name[0]}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-brand-white text-sm">{t.name}</div>
                      <div className="text-xs text-brand-white/30 truncate">{t.role}, {t.company}</div>
                    </div>
                    <span className="tag text-[10px] shrink-0">{t.service}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 noise-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-white mb-5"
              style={{ fontFamily: 'var(--font-display)' }}>
              Be our next success story
            </h2>
            <p className="text-brand-white/50 mb-8">Let&apos;s create work that gives you results worth talking about.</p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">Start a Project <ArrowRight size={16} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
