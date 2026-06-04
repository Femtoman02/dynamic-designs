import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Play, Star, CheckCircle, Zap, Eye, Brush, Film, BookOpen, Award, Users, TrendingUp, ChevronRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Dynamic Designs | Turning Ideas into Masterpieces',
  description: 'Dynamic Designs is a creative studio specializing in art, education, video editing, and graphic design. We turn your ideas into masterpieces.',
}

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: Zap },
  { value: '120+', label: 'Happy Clients', icon: Users },
  { value: '8+', label: 'Years Experience', icon: Award },
  { value: '98%', label: 'Client Satisfaction', icon: TrendingUp },
]

const services = [
  {
    icon: Brush,
    title: 'Graphic Design',
    description: 'From brand identities to marketing materials — we craft visuals that speak louder than words.',
    href: '/services#graphic-design',
    color: 'from-green-900/30 to-transparent',
  },
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Cinematic cuts, colour grading, and motion design that transform raw footage into compelling stories.',
    href: '/services#video-editing',
    color: 'from-green-900/20 to-transparent',
  },
  {
    icon: BookOpen,
    title: 'Art Education',
    description: 'Structured courses and mentorship programmes that equip creatives with real-world skills.',
    href: '/services#art-education',
    color: 'from-green-900/25 to-transparent',
  },
  {
    icon: Eye,
    title: 'Motion Graphics',
    description: 'Animated explainers, logo reveals, and kinetic typography that capture every scroll and click.',
    href: '/services#motion',
    color: 'from-green-900/20 to-transparent',
  },
]

const featuredProjects = [
  {
    title: 'Lumina Brand Identity',
    category: 'Graphic Design',
    description: 'Complete brand overhaul for a luxury lifestyle startup.',
    gradient: 'from-brand-green/20 via-transparent to-transparent',
  },
  {
    title: 'EduReach Documentary',
    category: 'Video Editing',
    description: '12-minute documentary on digital learning in Africa.',
    gradient: 'from-white/5 via-transparent to-transparent',
  },
  {
    title: 'CreativeFlow Course',
    category: 'Art Education',
    description: '6-week online graphic design bootcamp — 300 graduates.',
    gradient: 'from-brand-green/15 via-transparent to-transparent',
  },
]

const testimonials = [
  {
    name: 'Adaeze Okonkwo',
    role: 'CEO, Lumina Lifestyle',
    text: 'Dynamic Designs completely transformed our brand. The attention to detail and creative vision they brought was beyond what we imagined.',
    stars: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Director, EduReach Foundation',
    text: 'The documentary they produced for us was stunning. Professional, emotionally resonant, and delivered ahead of schedule.',
    stars: 5,
  },
  {
    name: 'Chiamaka Bello',
    role: 'Freelance Designer',
    text: 'The CreativeFlow course gave me the skills to go full-time as a designer within 3 months of completing it. Life-changing.',
    stars: 5,
  },
]

const marqueeItems = [
  'Graphic Design', 'Video Editing', 'Brand Identity', 'Art Education',
  'Motion Graphics', 'UI/UX Design', 'Photography', 'Content Creation',
  'Graphic Design', 'Video Editing', 'Brand Identity', 'Art Education',
  'Motion Graphics', 'UI/UX Design', 'Photography', 'Content Creation',
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center noise-bg overflow-hidden pt-24">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-brand-green/5 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-green/3 blur-[80px]" />
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(245,245,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,1) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="tag mb-6 inline-block">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse inline-block mr-1" />
                Creative Studio · Est. 2016
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8 animate-fade-up"
              style={{ fontFamily: 'var(--font-display)', animationDelay: '0.2s' }}
            >
              Turning <br />
              <span className="gradient-text italic">Ideas</span> into{' '}
              <br className="hidden sm:block" />
              <span className="text-brand-green green-text-glow">Masterpieces</span>
            </h1>

            <p className="text-brand-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.35s' }}>
              We are a full-service creative studio delivering world-class graphic design,
              video editing, art education, and motion graphics that elevate brands
              and empower creatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.45s' }}>
              <Link href="/projects" className="btn-primary text-base px-7 py-3.5">
                View Our Work <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-outline text-base px-7 py-3.5">
                Start a Project
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-14 flex flex-wrap gap-6 items-center animate-fade-up" style={{ animationDelay: '0.55s' }}>
              {['500+ Projects', '120+ Clients', '8+ Years', 'Award-Winning'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-brand-green" />
                  <span className="text-sm text-brand-white/40 font-mono">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <span className="text-xs text-brand-white/20 font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-brand-green/40 to-transparent" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-white/5 py-4 overflow-hidden bg-brand-gray-900">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-4 text-brand-white/30 font-mono text-sm uppercase tracking-widest whitespace-nowrap">
              {item}
              <span className="text-brand-green">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="text-center group">
                  <stat.icon size={24} className="text-brand-green mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div
                    className="font-display text-4xl md:text-5xl font-black text-brand-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-brand-white/40 font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
            <AnimatedSection>
              <SectionHeader
                tag="What We Do"
                title={`Creative Services\nBuilt to Perform`}
                subtitle="From concept to completion, we handle every stage of your creative journey."
              />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Link href="/services" className="btn-outline shrink-0">
                All Services <ChevronRight size={16} />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <Link
                  href={service.href}
                  className={`block group relative p-8 rounded-sm border border-white/5 bg-gradient-to-br ${service.color} card-hover overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/[0.03] transition-colors duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-sm bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors">
                      <service.icon size={22} className="text-brand-green" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-white mb-3 group-hover:text-brand-green transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-brand-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center gap-2 text-brand-green text-sm font-medium">
                      <span>Learn more</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS PREVIEW ── */}
      <section className="py-24 bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
            <AnimatedSection>
              <SectionHeader
                tag="Our Portfolio"
                title={`Work That\nSpeaks for Itself`}
                subtitle="A selection of projects that showcase our range and craft."
              />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Link href="/projects" className="btn-outline shrink-0">
                View All Projects <ChevronRight size={16} />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 120}>
                <Link href="/projects" className="block group">
                  <div className={`relative rounded-sm overflow-hidden bg-gradient-to-br ${project.gradient} border border-white/5 aspect-[4/3] mb-4 card-hover`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={20} className="text-brand-green ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-brand-black/80 to-transparent">
                      <span className="tag text-xs">{project.category}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-white mb-1.5 group-hover:text-brand-green transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-white/40">{project.description}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              tag="Testimonials"
              title="Clients Who Trust Us"
              subtitle="Don't take our word for it — hear from the people we've worked with."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 100}>
                <div className="p-7 rounded-sm border border-white/5 bg-white/[0.02] card-hover">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-brand-green fill-brand-green" />
                    ))}
                  </div>
                  <p className="text-brand-white/60 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                    <div className="w-9 h-9 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brand-white">{t.name}</div>
                      <div className="text-xs text-brand-white/30">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="mt-10 text-center">
              <Link href="/testimonials" className="btn-outline">
                Read More Reviews <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-sm border border-brand-green/20 bg-gradient-to-br from-brand-green/10 via-brand-green/5 to-transparent p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-green/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-green/5 rounded-full blur-[60px]" />
              </div>
              <div className="relative z-10">
                <span className="tag mb-6 inline-block">Ready to start?</span>
                <h2
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-white mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Let&apos;s Create Something{' '}
                  <span className="text-brand-green italic">Extraordinary</span>
                </h2>
                <p className="text-brand-white/50 text-lg max-w-xl mx-auto mb-10">
                  Whether you need a brand identity, a video, or creative training, we&apos;re ready to bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary text-base px-8 py-4">
                    Start a Project <ArrowRight size={18} />
                  </Link>
                  <Link href="/services" className="btn-outline text-base px-8 py-4">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
