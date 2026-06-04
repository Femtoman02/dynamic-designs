'use client'

import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import emailjs from '@emailjs/browser'

// ── Replace these with your real EmailJS credentials ──
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

const services = ['Graphic Design', 'Video Editing', 'Art Education', 'Motion Graphics', 'Brand Identity', 'Photography', 'Other']
const budgets = ['Under ₦100K', '₦100K – ₦300K', '₦300K – ₦700K', '₦700K – ₦1.5M', 'Above ₦1.5M', 'Let\'s Discuss']

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    from_name: '', from_email: '', phone: '',
    service: '', budget: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ from_name: '', from_email: '', phone: '', service: '', budget: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="relative pt-40 pb-20 noise-bg overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">Get in Touch</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}>
              Let&apos;s Create Something <span className="text-brand-green italic">Together</span>
            </h1>
            <p className="text-brand-white/60 text-lg max-w-2xl leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Fill in the form below or reach us directly — we respond within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 pb-24 bg-brand-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}>Contact Information</h2>
                  <div className="divider" />
                </div>

                {[
                  { icon: Mail, label: 'Email', value: 'hello@dynamicdesigns.studio', href: 'mailto:hello@dynamicdesigns.studio' },
                  { icon: Phone, label: 'Phone', value: '+234 800 123 4567', href: 'tel:+2348001234567' },
                  { icon: MapPin, label: 'Location', value: 'Victoria Island, Lagos, Nigeria', href: '#' },
                  { icon: Clock, label: 'Working Hours', value: 'Mon–Fri: 9AM – 6PM WAT', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-sm bg-brand-green/10 border border-brand-green/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xs text-brand-white/30 font-mono uppercase tracking-wider mb-1">{label}</p>
                      <a href={href} className="text-brand-white/70 hover:text-brand-green transition-colors text-sm">{value}</a>
                    </div>
                  </div>
                ))}

                <div className="p-6 border border-brand-green/20 rounded-sm bg-brand-green/5 mt-8">
                  <p className="text-sm text-brand-white/60 leading-relaxed">
                    <span className="text-brand-green font-semibold">Quick turnaround:</span> We aim to respond to all project enquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={150} className="lg:col-span-2">
              <div className="p-8 md:p-10 border border-white/5 rounded-sm bg-white/[0.02]">
                <h2 className="font-display text-2xl font-bold text-brand-white mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}>Tell Us About Your Project</h2>

                {status === 'success' && (
                  <div className="mb-6 p-5 border border-brand-green/30 rounded-sm bg-brand-green/10 flex items-start gap-3">
                    <CheckCircle size={18} className="text-brand-green mt-0.5 shrink-0" />
                    <div>
                      <p className="text-brand-white font-semibold text-sm mb-1">Message sent successfully!</p>
                      <p className="text-brand-white/60 text-sm">We will be in touch within 24 hours. Thank you for reaching out to Dynamic Designs.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-5 border border-red-500/30 rounded-sm bg-red-500/10 flex items-start gap-3">
                    <AlertCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-brand-white font-semibold text-sm mb-1">Something went wrong</p>
                      <p className="text-brand-white/60 text-sm">Please try again or email us directly at hello@dynamicdesigns.studio</p>
                    </div>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-brand-white/40 font-mono uppercase tracking-wider mb-2">Full Name *</label>
                      <input name="from_name" value={form.from_name} onChange={handleChange} required
                        placeholder="John Adeyemi" className="form-input" />
                    </div>
                    <div>
                      <label className="block text-xs text-brand-white/40 font-mono uppercase tracking-wider mb-2">Email Address *</label>
                      <input name="from_email" type="email" value={form.from_email} onChange={handleChange} required
                        placeholder="john@company.com" className="form-input" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-brand-white/40 font-mono uppercase tracking-wider mb-2">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+234 800 000 0000" className="form-input" />
                    </div>
                    <div>
                      <label className="block text-xs text-brand-white/40 font-mono uppercase tracking-wider mb-2">Service Needed *</label>
                      <select name="service" value={form.service} onChange={handleChange} required className="form-input">
                        <option value="">Select a service…</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-brand-white/40 font-mono uppercase tracking-wider mb-2">Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange} className="form-input">
                      <option value="">Select budget range…</option>
                      {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-brand-white/40 font-mono uppercase tracking-wider mb-2">Project Details *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                      placeholder="Tell us about your project — what are you trying to achieve, what's your timeline, and any other details that would help us understand your needs…"
                      className="form-input resize-none" />
                  </div>

                  <button type="submit" disabled={status === 'sending'}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'sending' ? (
                      <>Sending… <div className="w-4 h-4 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin" /></>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
