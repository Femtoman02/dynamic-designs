import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Projects & Portfolio',
  description: 'Browse Dynamic Designs portfolio — brand identities, video productions, art education programmes, and motion graphics.',
}

const categories = ['All', 'Branding', 'Video', 'Motion', 'Education', 'Photography']

const projects = [
  { title: 'Lumina Brand Identity', category: 'Branding', description: 'Full brand overhaul including logo, colour system, typography, and brand guidelines for a luxury lifestyle startup.', tags: ['Logo', 'Guidelines', 'Print'], color: 'from-brand-green/20 to-transparent', featured: true },
  { title: 'EduReach Documentary', category: 'Video', description: '12-minute documentary exploring digital learning access across rural Nigeria, screened at 3 international film festivals.', tags: ['Documentary', 'Colour Grade', 'Sound Design'], color: 'from-white/8 to-transparent', featured: true },
  { title: 'CreativeFlow Bootcamp', category: 'Education', description: '6-week intensive graphic design programme — 300+ graduates, 85% employment rate within 6 months.', tags: ['Curriculum', 'Mentorship', 'Online'], color: 'from-brand-green/15 to-transparent', featured: true },
  { title: 'ZenGo App Launch', category: 'Motion', description: 'Animated promo and onboarding sequences for a productivity app launch campaign that reached 2M+ impressions.', tags: ['After Effects', 'UI Animation', 'Social'], color: 'from-white/5 to-transparent', featured: false },
  { title: 'Nourish Food Co.', category: 'Branding', description: 'Packaging design and brand identity for an organic food startup entering the West African retail market.', tags: ['Packaging', 'Retail', 'Brand'], color: 'from-brand-green/12 to-transparent', featured: false },
  { title: 'Afro Beats Visualiser', category: 'Motion', description: 'Real-time music visualiser and lyric video series for an emerging Afrobeats artist with 500K subscribers.', tags: ['Motion', 'Music', 'YouTube'], color: 'from-white/6 to-transparent', featured: false },
  { title: 'TechHub Annual Report', category: 'Branding', description: 'Editorial design and infographics for a 60-page annual report — print and interactive PDF formats.', tags: ['Editorial', 'Infographics', 'Print'], color: 'from-brand-green/10 to-transparent', featured: false },
  { title: 'Solara Photography Campaign', category: 'Photography', description: 'Product and lifestyle photography series for a premium skincare brand launching across e-commerce platforms.', tags: ['Product', 'Lifestyle', 'Retouching'], color: 'from-white/7 to-transparent', featured: false },
  { title: 'FinFlow Explainer', category: 'Motion', description: '90-second animated explainer video simplifying fintech onboarding — reduced user drop-off by 40%.', tags: ['Explainer', '2D Animation', 'Fintech'], color: 'from-brand-green/18 to-transparent', featured: false },
  { title: 'Amara Wedding Films', category: 'Video', description: 'Cinematic wedding film series — high-emotion storytelling with signature colour grading and bespoke soundscapes.', tags: ['Cinematic', 'Colour', 'Audio'], color: 'from-white/5 to-transparent', featured: false },
  { title: 'Design Masterclass Series', category: 'Education', description: 'A 12-part video masterclass on brand design theory, distributed across YouTube and Udemy with 10K+ students.', tags: ['Online', 'Video', 'Curriculum'], color: 'from-brand-green/10 to-transparent', featured: false },
  { title: 'Nova Tech Rebrand', category: 'Branding', description: 'Strategic rebrand for a tech consultancy — new name, identity system, website direction, and launch campaign.', tags: ['Rebrand', 'Strategy', 'Launch'], color: 'from-white/6 to-transparent', featured: false },
]

export default function ProjectsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 noise-bg overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">Portfolio</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}>
              Work That <span className="text-brand-green italic">Speaks</span>
            </h1>
            <p className="text-brand-white/60 text-lg max-w-2xl leading-relaxed">
              500+ projects delivered across branding, video, education, and motion. Every one crafted with precision and purpose.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter - visual only (full filter needs client JS) */}
      <section className="py-6 bg-brand-gray-900 border-y border-white/5 sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat, i) => (
              <button key={cat}
                className={`shrink-0 px-5 py-2 rounded-sm text-sm font-medium border transition-all ${
                  i === 0
                    ? 'bg-brand-green text-brand-black border-brand-green'
                    : 'border-white/10 text-brand-white/50 hover:border-brand-green/40 hover:text-brand-white'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="tag mb-8 inline-block">Featured Work</span>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            {projects.filter(p => p.featured).map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 100}>
                <div className="group card-hover border border-white/5 rounded-sm overflow-hidden bg-white/[0.01]">
                  <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <div className="text-center px-6">
                      <div className="font-display text-2xl font-black text-brand-white/20 select-none"
                        style={{ fontFamily: 'var(--font-display)' }}>{project.title}</div>
                    </div>
                    <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/5 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="tag">{project.category}</span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center">
                        <ExternalLink size={14} className="text-brand-black" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-brand-white mb-2 group-hover:text-brand-green transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}>{project.title}</h3>
                    <p className="text-sm text-brand-white/50 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs bg-white/5 text-brand-white/40 rounded-sm font-mono">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Remaining projects */}
          <AnimatedSection>
            <span className="tag mb-8 mt-10 inline-block">All Projects</span>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.filter(p => !p.featured).map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 60}>
                <div className="group card-hover border border-white/5 rounded-sm overflow-hidden bg-white/[0.01]">
                  <div className={`relative aspect-[16/9] bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <div className="font-display text-xl font-black text-brand-white/10 select-none px-4 text-center"
                      style={{ fontFamily: 'var(--font-display)' }}>{project.title}</div>
                    <div className="absolute top-3 left-3">
                      <span className="tag text-[10px]">{project.category}</span>
                    </div>
                    <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/5 transition-colors" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-brand-white mb-2 group-hover:text-brand-green transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}>{project.title}</h3>
                    <p className="text-xs text-brand-white/45 leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-[10px] bg-white/5 text-brand-white/35 rounded-sm font-mono">{tag}</span>
                      ))}
                    </div>
                  </div>
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
              Have a project in mind?
            </h2>
            <p className="text-brand-white/50 mb-8">Let&apos;s add your project to this portfolio.</p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">Start a Project <ArrowRight size={16} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
