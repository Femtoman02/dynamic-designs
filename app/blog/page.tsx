import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Blog & News',
  description: 'Insights, tutorials, and news from the Dynamic Designs creative studio.',
}

const featured = {
  title: 'The Art of Brand Storytelling: Why Most Nigerian Brands Get It Wrong',
  excerpt: 'Brand storytelling is not about your product — it is about your customer. We break down why so many brands miss the mark and how to build a narrative that actually resonates with your audience.',
  author: 'Emeka Osei',
  date: 'May 28, 2026',
  readTime: '8 min read',
  category: 'Brand Strategy',
}

const posts = [
  { title: '10 Video Editing Techniques That Make Amateur Footage Look Professional', excerpt: 'You do not need a Hollywood budget to produce cinematic video. These 10 techniques will transform your raw footage.', author: 'Adanna Nwachukwu', date: 'May 20, 2026', readTime: '6 min read', category: 'Video Editing' },
  { title: 'Typography 101: How to Choose Fonts That Speak for Your Brand', excerpt: 'Typography is 95% of design but most brands treat it as an afterthought. Here is how to choose and pair fonts with intention.', author: 'Seun Adeyemi', date: 'May 12, 2026', readTime: '5 min read', category: 'Graphic Design' },
  { title: 'From Zero to Freelance Designer: A Practical 90-Day Roadmap', excerpt: 'Whether you are coming from art school or teaching yourself from YouTube, this 90-day plan gives you structure and clarity.', author: 'Chidi Eze', date: 'May 5, 2026', readTime: '10 min read', category: 'Education' },
  { title: 'Motion Graphics Trends for 2026: What Is Actually Working', excerpt: 'AI-generated motion? Brutalist animation? We cut through the hype and show you what clients are actually paying for this year.', author: 'Funmi Okafor', date: 'April 28, 2026', readTime: '7 min read', category: 'Motion Graphics' },
  { title: 'How We Redesigned Lumina — and Tripled Their Brand Recall', excerpt: 'A behind-the-scenes breakdown of one of our most transformative brand projects, including research, process, and outcomes.', author: 'Emeka Osei', date: 'April 15, 2026', readTime: '9 min read', category: 'Case Study' },
  { title: 'The Designer\'s Guide to Client Communication (Without Losing Your Mind)', excerpt: 'Scope creep, revision spirals, ghosting — we have been through it all. Here is how we handle client communication at Dynamic Designs.', author: 'Blessing Musa', date: 'April 7, 2026', readTime: '6 min read', category: 'Business' },
]

const categories = ['All', 'Brand Strategy', 'Graphic Design', 'Video Editing', 'Motion Graphics', 'Education', 'Case Study', 'Business']

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 noise-bg overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">Blog & Insights</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}>
              Ideas Worth <span className="text-brand-green italic">Reading</span>
            </h1>
            <p className="text-brand-white/60 text-lg max-w-2xl leading-relaxed">
              Tutorials, case studies, and creative perspectives from the Dynamic Designs team. We share what we know so you can grow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="group relative rounded-sm border border-brand-green/20 bg-gradient-to-br from-brand-green/10 via-brand-green/5 to-transparent p-10 md:p-14 card-hover overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className="tag">Featured</span>
                  <span className="tag">{featured.category}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-brand-white mb-5 group-hover:text-brand-green transition-colors leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}>{featured.title}</h2>
                <p className="text-brand-white/60 leading-relaxed mb-8">{featured.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-brand-white/40">
                  <div className="flex items-center gap-2"><User size={13} />{featured.author}</div>
                  <div className="flex items-center gap-2"><Clock size={13} />{featured.readTime}</div>
                  <span>{featured.date}</span>
                </div>
                <Link href="#" className="btn-primary mt-8 inline-flex">Read Article <ArrowRight size={16} /></Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <div className="py-5 border-y border-white/5 bg-brand-gray-900/50 sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat, i) => (
              <button key={cat}
                className={`shrink-0 px-4 py-1.5 rounded-sm text-sm font-medium border transition-all ${
                  i === 0
                    ? 'bg-brand-green text-brand-black border-brand-green'
                    : 'border-white/10 text-brand-white/50 hover:border-brand-green/40 hover:text-brand-white'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts */}
      <section className="py-16 noise-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 80}>
                <article className="group border border-white/5 rounded-sm bg-white/[0.02] card-hover overflow-hidden">
                  <div className="aspect-[16/8] bg-gradient-to-br from-brand-green/10 to-transparent flex items-center justify-center p-6 border-b border-white/5">
                    <div className="text-center">
                      <span className="tag mb-3 inline-block">{post.category}</span>
                      <div className="font-display text-lg font-black text-brand-white/10 leading-tight"
                        style={{ fontFamily: 'var(--font-display)' }}>{post.title.slice(0, 30)}…</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-base font-bold text-brand-white mb-3 group-hover:text-brand-green transition-colors leading-snug"
                      style={{ fontFamily: 'var(--font-display)' }}>{post.title}</h3>
                    <p className="text-sm text-brand-white/45 leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3 text-xs text-brand-white/30">
                        <div className="flex items-center gap-1.5"><User size={11} />{post.author}</div>
                        <div className="flex items-center gap-1.5"><Clock size={11} />{post.readTime}</div>
                      </div>
                      <Link href="#" className="text-xs text-brand-green flex items-center gap-1 hover:gap-2 transition-all">
                        Read <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="mt-12 text-center">
              <button className="btn-outline">Load More Articles <ArrowRight size={16} /></button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
