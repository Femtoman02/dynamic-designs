import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/team', label: 'Our Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Blog' },
  ],
  services: [
    { href: '/services#graphic-design', label: 'Graphic Design' },
    { href: '/services#video-editing', label: 'Video Editing' },
    { href: '/services#art-education', label: 'Art Education' },
    { href: '/services#branding', label: 'Brand Identity' },
    { href: '/services#motion', label: 'Motion Graphics' },
  ],
  support: [
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQs' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ],
}

const socials = [
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Twitter, label: 'Twitter/X' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-gray-900 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="36" height="36" rx="4" fill="#1DB954"/>
                  <path d="M8 10 L18 8 L28 10 L28 26 L18 28 L8 26 Z" fill="#0A0A0A"/>
                  <path d="M12 16 L18 13 L24 16 L24 22 L18 25 L12 22 Z" fill="#1DB954"/>
                  <circle cx="18" cy="19" r="3" fill="#0A0A0A"/>
                </svg>
              </div>
              <div>
                <span className="font-display text-lg font-bold text-brand-white">Dynamic</span>
                <span className="font-display text-lg font-bold text-brand-green"> Designs</span>
              </div>
            </Link>
            <p className="text-brand-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Turning ideas into masterpieces. We are a full-service creative studio specializing in art, education, video editing, and graphic design.
            </p>
            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: Mail, text: 'hello@dynamicdesigns.studio' },
                { icon: Phone, text: '+234 800 123 4567' },
                { icon: MapPin, text: 'Lagos, Nigeria' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-brand-white/50">
                  <Icon size={14} className="text-brand-green shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Company', links: footerLinks.company },
            { title: 'Services', links: footerLinks.services },
            { title: 'Support', links: footerLinks.support },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-brand-green mb-5">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-white/50 hover:text-brand-white transition-colors animated-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-white/30">
            © {new Date().getFullYear()} Dynamic Designs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-brand-white/30 hover:text-brand-green transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
