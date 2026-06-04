import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Target, Eye, Heart, Zap } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Dynamic Designs — our story, mission, values, and the team behind the masterpieces.',
}

const values = [
  { icon: Target, title: 'Purpose-Driven', description: 'Every design decision serves your goals. We never create for aesthetics alone — beauty must work.' },
  { icon: Eye, title: 'Bold Clarity', description: 'We cut through the noise with visuals that are striking, intentional, and unmistakably clear.' },
  { icon: Heart, title: 'Client-First', description: 'Your vision is our brief. We listen deeply, collaborate openly, and deliver beyond expectations.' },
  { icon: Zap, title: 'Always Evolving', description: 'Design trends shift. We stay ahead — investing in education, tools, and creative exploration.' },
]

const milestones = [
  { year: '2016', title: 'Founded', desc: 'Dynamic Designs launches as a one-person freelance graphic design studio in Lagos.' },
  { year: '2018', title: 'Team Growth', desc: 'Expanded to a core team of 5 creatives; launched our first video editing service line.' },
  { year: '2020', title: 'Education Arm', desc: 'Introduced the Art Education programme — training the next generation of Nigerian designers.' },
  { year: '2022', title: '100+ Clients', desc: 'Crossed the 100-client milestone and moved into a dedicated studio space.' },
  { year: '2024', title: 'Regional Reach', desc: 'Serving clients across 10 African countries and international brands in the UK and US.' },
  { year: '2026', title: 'Today', desc: 'A 20-person studio delivering 500+ projects with a 98% client satisfaction rate.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 noise-bg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">About Us</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-3xl"
              style={{ fontFamily: 'var(--font-display)' }}>
              We Build Brands That <span className="text-brand-green italic">Last</span>
            </h1>
            <p className="text-brand-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              Dynamic Designs is a full-service creative studio born in Lagos, built for the world. For over eight years, we have been helping brands communicate powerfully through design, video, and education.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeader tag="Our Story" title={'From Passion to\nProfession'} />
              <div className="space-y-5 text-brand-white/60 leading-relaxed">
                <p>It started with a sketchbook and an obsession with making things look extraordinary. Our founder, Emeka Osei, began Dynamic Designs in 2016 from a small Lagos apartment — taking on logo projects and flyer designs for local businesses.</p>
                <p>What grew from that single sketchbook is now a 20-person creative studio trusted by startups, NGOs, media companies, and global brands. The mission has never changed: turn every idea — no matter how rough — into something that makes people stop and stare.</p>
                <p>Today, Dynamic Designs operates across three disciplines: graphic design and branding, video production and editing, and structured art education. We believe great design is not a luxury — it is the sharpest competitive edge a brand can have.</p>
              </div>
              <Link href="/team" className="btn-primary mt-8 inline-flex">Meet the Team <ArrowRight size={16} /></Link>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '500+', label: 'Projects' }, { num: '120+', label: 'Clients' },
                    { num: '10', label: 'Countries' }, { num: '98%', label: 'Satisfaction' },
                  ].map((s) => (
                    <div key={s.label} className="p-8 border border-white/5 rounded-sm bg-white/[0.02] text-center card-hover">
                      <div className="font-display text-4xl font-black text-brand-green mb-2"
                        style={{ fontFamily: 'var(--font-display)' }}>{s.num}</div>
                      <div className="text-sm text-brand-white/40 font-mono uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-brand-green/20 rounded-sm -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { tag: 'Mission', title: 'Why We Exist', text: 'To democratise world-class creative services for African businesses and creators — making powerful design, video, and art education accessible to anyone with a vision worth sharing.' },
              { tag: 'Vision', title: 'Where We\'re Going', text: 'To be Africa\'s most trusted creative studio — a place where bold ideas are welcomed, nurtured, and launched into the world as masterpieces that outlast trends.' },
            ].map((item, i) => (
              <AnimatedSection key={item.tag} delay={i * 150}>
                <div className="p-10 border border-brand-green/20 rounded-sm bg-gradient-to-br from-brand-green/10 to-transparent">
                  <span className="tag mb-4 inline-block">{item.tag}</span>
                  <h3 className="font-display text-2xl font-bold text-brand-white mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                  <p className="text-brand-white/60 leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader tag="Our Values" title="What Drives Every Decision" centered />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="p-7 border border-white/5 rounded-sm bg-white/[0.02] card-hover group">
                  <div className="w-11 h-11 rounded-sm bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-5 group-hover:bg-brand-green/20 transition-colors">
                    <v.icon size={20} className="text-brand-green" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-brand-white mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}>{v.title}</h4>
                  <p className="text-sm text-brand-white/50 leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 noise-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader tag="Our Journey" title="Eight Years of Growth" centered />
          </AnimatedSection>
          <div className="mt-14 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-green/20 -translate-x-px" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 80}>
                  <div className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 flex flex-col md:items-end pl-16 md:pl-0">
                      <div className="absolute left-4 md:left-1/2 top-1 w-5 h-5 rounded-full bg-brand-green border-2 border-brand-black -translate-x-2.5 md:-translate-x-2.5 animate-pulse-green" />
                      <span className="font-mono text-brand-green text-sm font-bold mb-1">{m.year}</span>
                      <h4 className="font-display text-xl font-bold text-brand-white mb-2"
                        style={{ fontFamily: 'var(--font-display)' }}>{m.title}</h4>
                      <p className="text-brand-white/50 text-sm leading-relaxed md:text-right">{m.desc}</p>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-white mb-5"
              style={{ fontFamily: 'var(--font-display)' }}>
              Ready to work with us?
            </h2>
            <p className="text-brand-white/50 mb-8">Let us bring your next creative project to life.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Get a Free Quote <ArrowRight size={16} /></Link>
              <Link href="/projects" className="btn-outline">See Our Work</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
