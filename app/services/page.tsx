import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Brush, Film, BookOpen, Eye, Layers, Camera, CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore Dynamic Designs services: graphic design, video editing, art education, motion graphics, branding, and photography.',
}

const services = [
  {
    id: 'graphic-design',
    icon: Brush,
    title: 'Graphic Design',
    tagline: 'Visuals that mean business',
    description: 'We craft design solutions that communicate, persuade, and endure. From brand identities and packaging to social media assets and print materials — every pixel is intentional.',
    features: ['Brand Identity & Logos', 'Marketing Collateral', 'Social Media Design', 'Packaging Design', 'Infographics', 'Print & Publication'],
    price: 'From ₦50,000',
  },
  {
    id: 'video-editing',
    icon: Film,
    title: 'Video Editing',
    tagline: 'Stories that move people',
    description: 'Raw footage becomes compelling narrative. Our editors bring precision cutting, colour science, sound design, and pacing that transforms video into an emotional experience.',
    features: ['Corporate Videos', 'YouTube & Social Content', 'Documentary Editing', 'Colour Grading', 'Sound Design', 'Subtitles & Captions'],
    price: 'From ₦80,000',
  },
  {
    id: 'art-education',
    icon: BookOpen,
    title: 'Art Education',
    tagline: 'Upskill. Create. Thrive.',
    description: 'Structured courses, workshops, and 1-on-1 mentorship for aspiring and professional creatives. We teach the tools, principles, and mindset needed to build a creative career.',
    features: ['Graphic Design Bootcamp', 'Video Editing Masterclass', 'Brand Strategy Workshop', '1-on-1 Mentorship', 'Corporate Training', 'Online Courses'],
    price: 'From ₦30,000',
  },
  {
    id: 'motion',
    icon: Eye,
    title: 'Motion Graphics',
    tagline: 'Animation that demands attention',
    description: 'Animated explainers, logo reveals, kinetic typography, and data visualisations. We make information beautiful and impossible to scroll past.',
    features: ['Logo Animations', 'Explainer Videos', 'Kinetic Typography', 'Data Visualisation', 'Social Reels', 'Broadcast Graphics'],
    price: 'From ₦120,000',
  },
  {
    id: 'branding',
    icon: Layers,
    title: 'Brand Identity',
    tagline: 'The whole picture, not just the logo',
    description: 'Comprehensive brand development — from strategy and naming to full visual identity systems and brand guidelines. We make your brand unmistakable.',
    features: ['Brand Strategy', 'Visual Identity System', 'Brand Guidelines', 'Tone of Voice', 'Brand Naming', 'Brand Refresh'],
    price: 'From ₦200,000',
  },
  {
    id: 'photography',
    icon: Camera,
    title: 'Creative Photography',
    tagline: 'Moments captured, brands elevated',
    description: 'Product photography, corporate portraits, event coverage, and editorial shoots. Stunning imagery that works seamlessly across all brand touchpoints.',
    features: ['Product Photography', 'Corporate Portraits', 'Event Coverage', 'Editorial Shoots', 'Photo Retouching', 'Content Library'],
    price: 'From ₦60,000',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn your brand, audience, and goals inside out before touching a single tool.' },
  { step: '02', title: 'Strategy', desc: 'We define the creative direction, deliverables, and timeline with full transparency.' },
  { step: '03', title: 'Creation', desc: 'Our team executes with craft — iterating with your feedback at every key milestone.' },
  { step: '04', title: 'Delivery', desc: 'Final files delivered in every format you need, with post-delivery support included.' },
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 noise-bg overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">Services</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-3xl"
              style={{ fontFamily: 'var(--font-display)' }}>
              Creative Services <span className="text-brand-green italic">Built to Perform</span>
            </h1>
            <p className="text-brand-white/60 text-lg max-w-2xl leading-relaxed">
              Six specialised service lines, one unified creative vision. We handle every stage of your creative journey — from brand concept to final delivery.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 80}>
                <div id={service.id} className="group p-8 md:p-10 border border-white/5 rounded-sm bg-white/[0.02] card-hover scroll-mt-24">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-12 h-12 rounded-sm bg-brand-green/10 border border-brand-green/20 flex items-center justify-center shrink-0 group-hover:bg-brand-green/20 transition-colors">
                      <service.icon size={22} className="text-brand-green" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-brand-white mb-1"
                        style={{ fontFamily: 'var(--font-display)' }}>{service.title}</h2>
                      <p className="text-brand-green text-sm font-mono">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-brand-white/55 leading-relaxed mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-7">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-brand-white/50">
                        <CheckCircle size={13} className="text-brand-green shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-5 border-t border-white/5">
                    <span className="font-mono text-brand-green text-sm font-medium">{service.price}</span>
                    <Link href="/contact" className="flex items-center gap-2 text-sm text-brand-white/60 hover:text-brand-green transition-colors group/link">
                      Get a Quote <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader tag="How We Work" title="Our Creative Process" centered
              subtitle="A clear, collaborative process ensures every project is delivered on time and on vision." />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 100}>
                <div className="relative p-7 border border-white/5 rounded-sm bg-white/[0.02] card-hover">
                  <div className="font-display text-5xl font-black text-brand-green/15 mb-4 select-none"
                    style={{ fontFamily: 'var(--font-display)' }}>{p.step}</div>
                  <h4 className="font-display text-lg font-bold text-brand-white mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h4>
                  <p className="text-sm text-brand-white/50 leading-relaxed">{p.desc}</p>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight size={16} className="text-brand-green/40" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-black text-brand-white mb-5"
              style={{ fontFamily: 'var(--font-display)' }}>
              Not sure which service you need?
            </h2>
            <p className="text-brand-white/50 mb-8">Book a free 30-minute discovery call and we will point you in the right direction.</p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Free Call <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
