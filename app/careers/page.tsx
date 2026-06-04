import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Briefcase, Heart, Zap, Users, BookOpen } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Dynamic Designs team. Explore open roles in design, video, education, and more.',
}

const openRoles = [
  { title: 'Senior Graphic Designer', department: 'Design', type: 'Full-time', location: 'Lagos (Hybrid)', description: 'We need a skilled brand designer with 4+ years experience who can lead visual identity projects from strategy to final delivery.' },
  { title: 'Video Editor', department: 'Video', type: 'Full-time', location: 'Lagos / Remote', description: 'Looking for a sharp editor with strong colour grading skills and experience across documentary and commercial formats.' },
  { title: 'Motion Designer', department: 'Motion', type: 'Full-time', location: 'Remote', description: 'Create stunning animated content for brands and social media. Strong After Effects skills required; Cinema 4D is a bonus.' },
  { title: 'Art Education Instructor', department: 'Education', type: 'Part-time / Contract', location: 'Lagos + Online', description: 'Teach graphic design fundamentals to beginner and intermediate students via structured online and in-person programmes.' },
  { title: 'Brand Strategist', department: 'Strategy', type: 'Full-time', location: 'Lagos (Hybrid)', description: 'Help clients define brand positioning, tone of voice, and visual direction. Strong communication and presentation skills required.' },
]

const perks = [
  { icon: Zap, title: 'Creative Freedom', desc: 'We trust our team to bring bold ideas. Bureaucracy-free creative process.' },
  { icon: BookOpen, title: 'Learning Budget', desc: '₦100K annual learning allowance for courses, workshops, and conferences.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'HMO coverage for you and your immediate family from day one.' },
  { icon: Users, title: 'Flexible Work', desc: 'Remote and hybrid options for most roles. Output > presence.' },
]

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 noise-bg overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">Careers</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}>
              Build Your Career <span className="text-brand-green italic">with Us</span>
            </h1>
            <p className="text-brand-white/60 text-lg max-w-2xl leading-relaxed">
              We are a team of passionate creatives on a mission to produce extraordinary work. If you care deeply about craft and collaboration, we want to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeader tag="Our Culture" title={'A Studio Built\nfor Creatives'} />
              <div className="space-y-4 text-brand-white/60 leading-relaxed">
                <p>At Dynamic Designs, we believe great work only comes from people who feel valued, trusted, and inspired. We have built a culture where creative risk-taking is celebrated and every team member has a voice in the work we produce.</p>
                <p>We work hard, we care about craft, and we laugh often. Work-life balance is not a slogan here — it is a practice.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {perks.map((perk, i) => (
                  <div key={perk.title} className="p-6 border border-white/5 rounded-sm bg-white/[0.02] card-hover">
                    <perk.icon size={20} className="text-brand-green mb-4" />
                    <h4 className="font-display text-sm font-bold text-brand-white mb-2"
                      style={{ fontFamily: 'var(--font-display)' }}>{perk.title}</h4>
                    <p className="text-xs text-brand-white/45 leading-relaxed">{perk.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader tag="Open Positions" title={`${openRoles.length} Roles Available`}
              subtitle="All roles include competitive compensation, growth opportunities, and a genuinely great team." />
          </AnimatedSection>
          <div className="space-y-4 mt-12">
            {openRoles.map((role, i) => (
              <AnimatedSection key={role.title} delay={i * 80}>
                <div className="group p-7 border border-white/5 rounded-sm bg-white/[0.02] card-hover">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-display text-xl font-bold text-brand-white group-hover:text-brand-green transition-colors"
                          style={{ fontFamily: 'var(--font-display)' }}>{role.title}</h3>
                        <span className="tag">{role.department}</span>
                      </div>
                      <p className="text-brand-white/50 text-sm leading-relaxed mb-4">{role.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-brand-white/35">
                        <div className="flex items-center gap-1.5"><Briefcase size={12} />{role.type}</div>
                        <div className="flex items-center gap-1.5"><MapPin size={12} />{role.location}</div>
                        <div className="flex items-center gap-1.5"><Clock size={12} />Apply by June 30, 2026</div>
                      </div>
                    </div>
                    <Link href="/contact" className="btn-primary shrink-0">
                      Apply Now <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open application */}
      <section className="py-20 bg-brand-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="p-12 border border-brand-green/20 rounded-sm bg-gradient-to-br from-brand-green/10 to-transparent">
              <span className="tag mb-5 inline-block">Don&apos;t see your role?</span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-brand-white mb-4"
                style={{ fontFamily: 'var(--font-display)' }}>Send an Open Application</h2>
              <p className="text-brand-white/50 mb-8">We are always interested in exceptional talent. Send your portfolio and tell us what you bring to the table.</p>
              <Link href="/contact" className="btn-primary">Get in Touch <ArrowRight size={16} /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
