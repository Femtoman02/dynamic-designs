import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Linkedin, Twitter, Instagram } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the creative minds behind Dynamic Designs — designers, editors, educators, and strategists.',
}

const leadership = [
  { name: 'Emeka Osei', role: 'Founder & Creative Director', bio: 'With 12 years in design and visual communication, Emeka founded Dynamic Designs on the belief that African brands deserve world-class creative. He has led projects for brands in 10 countries.', initials: 'EO', speciality: 'Brand Strategy · Art Direction' },
  { name: 'Adanna Nwachukwu', role: 'Head of Video Production', bio: 'Former broadcast editor at a leading Nigerian TV network, Adanna brings cinematic storytelling expertise to every frame. Her documentary work has screened at international festivals.', initials: 'AN', speciality: 'Documentary · Cinematography' },
  { name: 'Seun Adeyemi', role: 'Lead Graphic Designer', bio: 'Seun\'s typography-first approach and obsessive attention to detail have produced some of the studio\'s most celebrated brand identities. 8 years in brand design.', initials: 'SA', speciality: 'Typography · Identity Systems' },
]

const team = [
  { name: 'Funmi Okafor', role: 'Motion Graphics Lead', initials: 'FO', speciality: 'After Effects · 3D Animation' },
  { name: 'Chidi Eze', role: 'Art Education Coordinator', initials: 'CE', speciality: 'Curriculum · Mentorship' },
  { name: 'Blessing Musa', role: 'Brand Strategist', initials: 'BM', speciality: 'Strategy · Positioning' },
  { name: 'Tunde Akinola', role: 'Video Editor', initials: 'TA', speciality: 'Premiere Pro · Colour Grade' },
  { name: 'Ngozi Ike', role: 'Graphic Designer', initials: 'NI', speciality: 'Print · Packaging' },
  { name: 'Rotimi Bello', role: 'Photographer', initials: 'RB', speciality: 'Product · Editorial' },
  { name: 'Chisom Obi', role: 'UI/UX Designer', initials: 'CO', speciality: 'Figma · Design Systems' },
  { name: 'Ade Ogundipe', role: 'Social Media Designer', initials: 'AO', speciality: 'Content · Social Assets' },
]

export default function TeamPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 noise-bg overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">Our Team</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}>
              The Minds Behind <span className="text-brand-green italic">the Masterpieces</span>
            </h1>
            <p className="text-brand-white/60 text-lg max-w-2xl leading-relaxed">
              20 creatives. One unified mission. We are designers, editors, educators, and strategists united by a love for craft and a drive to deliver excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader tag="Leadership" title="The Core Team" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {leadership.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 100}>
                <div className="group p-8 border border-white/5 rounded-sm bg-white/[0.02] card-hover">
                  <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-brand-green/30 to-brand-green/10 flex items-center justify-center mb-6 text-brand-green font-display text-xl font-black"
                    style={{ fontFamily: 'var(--font-display)' }}>
                    {person.initials}
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-white mb-1 group-hover:text-brand-green transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}>{person.name}</h3>
                  <p className="text-brand-green text-sm font-mono mb-4">{person.role}</p>
                  <p className="text-brand-white/50 text-sm leading-relaxed mb-5">{person.bio}</p>
                  <div className="pt-5 border-t border-white/5">
                    <p className="text-xs text-brand-white/30 font-mono uppercase tracking-wider">{person.speciality}</p>
                  </div>
                  <div className="flex gap-3 mt-4">
                    {[Linkedin, Twitter, Instagram].map((Icon, j) => (
                      <a key={j} href="#" className="text-brand-white/25 hover:text-brand-green transition-colors">
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full team */}
      <section className="py-20 noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader tag="The Full Crew" title="Every Creative Counts" />
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            {team.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 60}>
                <div className="group p-6 border border-white/5 rounded-sm bg-white/[0.015] card-hover text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green/20 to-brand-green/5 flex items-center justify-center mx-auto mb-4 text-brand-green font-bold text-sm group-hover:from-brand-green/30 transition-all">
                    {person.initials}
                  </div>
                  <h4 className="font-display text-sm font-bold text-brand-white mb-1 group-hover:text-brand-green transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}>{person.name}</h4>
                  <p className="text-xs text-brand-white/40 mb-3">{person.role}</p>
                  <p className="text-[10px] text-brand-green/60 font-mono">{person.speciality}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-20 bg-brand-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="p-12 border border-brand-green/20 rounded-sm bg-gradient-to-br from-brand-green/10 to-transparent">
              <span className="tag mb-5 inline-block">We&apos;re Hiring</span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-brand-white mb-4"
                style={{ fontFamily: 'var(--font-display)' }}>Join the Dynamic Designs Team</h2>
              <p className="text-brand-white/50 mb-8">We are always looking for talented creatives who care about craft and collaboration.</p>
              <Link href="/careers" className="btn-primary">View Open Roles <ArrowRight size={16} /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
