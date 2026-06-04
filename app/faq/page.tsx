'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

const faqCategories = [
  {
    category: 'Working With Us',
    faqs: [
      { q: 'How do I start a project with Dynamic Designs?', a: 'Simply fill out our contact form or send us an email at hello@dynamicdesigns.studio. Tell us about your project, budget, and timeline. We will respond within 24 hours to schedule a free discovery call.' },
      { q: 'How long does a typical project take?', a: 'Timelines vary by scope. A logo design typically takes 7–14 days. A full brand identity takes 3–6 weeks. A video edit takes 5–10 business days depending on footage volume. We always agree on a timeline before starting work.' },
      { q: 'Do you work with clients outside Nigeria?', a: 'Absolutely. We work with clients across Africa, the UK, the US, and beyond. All our processes are set up for remote collaboration — we use Slack, Notion, and video calls to keep everyone aligned.' },
      { q: 'What is your revision policy?', a: 'Every project includes 2 rounds of revisions at each milestone. We find that this is more than enough for most projects when our discovery process is thorough. Additional revisions can be arranged at an agreed rate.' },
    ],
  },
  {
    category: 'Pricing & Payment',
    faqs: [
      { q: 'How is pricing determined?', a: 'Pricing is based on project scope, complexity, timeline, and the number of deliverables. We provide a detailed quote after our discovery call. We do not have hidden fees — everything is agreed upfront in a written proposal.' },
      { q: 'What payment methods do you accept?', a: 'We accept bank transfers (Nigerian and international), Paystack, Flutterwave, and PayPal for international clients. We require a 50% deposit before commencing work, with the balance due upon project completion.' },
      { q: 'Do you offer payment plans?', a: 'For larger projects (above ₦500K), we can structure milestone-based payments. This means you pay as key deliverables are approved rather than in two large instalments.' },
      { q: 'Is there a minimum project size?', a: 'Our minimum project engagement is ₦50,000. This ensures we can dedicate the time and care every project deserves. We also offer retainer packages for clients who need ongoing creative support.' },
    ],
  },
  {
    category: 'Design & Video',
    faqs: [
      { q: 'Who owns the final design files?', a: 'You do. Once final payment is received, full intellectual property and file ownership transfers to you. We provide source files (AI, PSD, XD, Premiere Pro project files, etc.) along with all exported formats.' },
      { q: 'What file formats do you deliver?', a: 'For print design: PDF, AI, EPS. For digital: PNG, SVG, JPG, WebP. For video: MP4 (H.264 and H.265), ProRes for broadcast. For motion: GIF, MP4, WebM. We always ask what you need before delivery.' },
      { q: 'Can you match our existing brand guidelines?', a: 'Yes — in fact, we encourage it. Share your brand guidelines with us and we will match colours, typography, and tone precisely. We can also build on your existing identity if it needs refreshing.' },
      { q: 'Do you offer rush delivery?', a: 'We can accommodate urgent timelines for a 30% rush fee. Please flag your deadline upfront so we can confirm availability. We never compromise quality for speed.' },
    ],
  },
  {
    category: 'Art Education',
    faqs: [
      { q: 'Who are the education programmes for?', a: 'Our courses are designed for beginners, intermediate creatives, and professionals looking to upskill. We offer beginner-friendly bootcamps, advanced masterclasses, and bespoke corporate training.' },
      { q: 'Are the courses online or in-person?', a: 'We offer both. Our flagship bootcamps run online via Zoom and recorded video lessons. In-person workshops are available in Lagos. Corporate training can be delivered anywhere in Nigeria.' },
      { q: 'Do you offer certificates?', a: 'Yes. All students who complete our programmes receive a Dynamic Designs certificate of completion. Our courses are recognised by several creative industry employers across Nigeria.' },
      { q: 'What software do you teach?', a: 'Adobe Creative Suite (Illustrator, Photoshop, Premiere Pro, After Effects, InDesign), Figma, Canva Pro, and DaVinci Resolve. We keep curricula updated as the industry evolves.' },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border border-white/5 rounded-sm transition-all ${open ? 'bg-brand-green/5 border-brand-green/20' : 'bg-white/[0.01]'}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-6 text-left">
        <span className={`font-display text-base font-semibold leading-snug transition-colors ${open ? 'text-brand-green' : 'text-brand-white'}`}
          style={{ fontFamily: 'var(--font-display)' }}>{q}</span>
        <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-brand-green text-brand-black' : 'bg-white/5 text-brand-white/50'}`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-brand-white/60 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 noise-bg overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">FAQ</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}>
              Got <span className="text-brand-green italic">Questions?</span>
            </h1>
            <p className="text-brand-white/60 text-lg max-w-2xl leading-relaxed">
              We have answered the most common questions below. If yours is not here, just ask us directly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 pb-24 bg-brand-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((cat, i) => (
            <AnimatedSection key={cat.category} delay={i * 80}>
              <div className="mb-12">
                <h2 className="font-display text-xl font-bold text-brand-green mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}>{cat.category}</h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={300}>
            <div className="mt-4 p-10 border border-brand-green/20 rounded-sm bg-brand-green/5 text-center">
              <h3 className="font-display text-xl font-bold text-brand-white mb-3"
                style={{ fontFamily: 'var(--font-display)' }}>Still have questions?</h3>
              <p className="text-brand-white/50 mb-6 text-sm">We are happy to chat. Reach out and we will get back to you within 24 hours.</p>
              <Link href="/contact" className="btn-primary">Contact Us <ArrowRight size={16} /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
