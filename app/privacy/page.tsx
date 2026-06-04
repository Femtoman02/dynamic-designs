import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Dynamic Designs privacy policy — how we collect, use, and protect your data.',
}

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you fill out our contact form, subscribe to our newsletter, apply for a job, or engage our services. This includes your name, email address, phone number, company name, and any project details you share.

We also collect limited technical data automatically when you visit our website, including your IP address, browser type, pages visited, and time spent on pages. This helps us improve our website and understand how visitors interact with our content.`
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to respond to your enquiries and deliver the services you request, to communicate about your projects, invoices, and deliverables, to send marketing communications you have opted into, to improve our website and service quality, and to comply with legal obligations.

We do not sell, rent, or share your personal information with third parties for their marketing purposes.`
  },
  {
    title: '3. Data Storage and Security',
    content: `Your data is stored on secure servers. We implement industry-standard security measures including encryption, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.

We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.`
  },
  {
    title: '4. Cookies',
    content: `Our website uses cookies to enhance your browsing experience. These include essential cookies (required for the website to function), analytics cookies (to understand how visitors use our site), and preference cookies (to remember your settings).

You can control cookie settings through your browser. Disabling certain cookies may affect website functionality.`
  },
  {
    title: '5. Third-Party Services',
    content: `We use trusted third-party services to operate our business, including EmailJS for contact form processing, Google Analytics for website analytics, and Vercel for website hosting. These providers have their own privacy policies governing how they handle data.

Links to third-party websites on our site are provided for convenience. We are not responsible for their privacy practices.`
  },
  {
    title: '6. Your Rights',
    content: `You have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data (subject to legal obligations), withdraw consent for marketing communications at any time, and lodge a complaint with a data protection authority.

To exercise any of these rights, contact us at privacy@dynamicdesigns.studio.`
  },
  {
    title: '7. Children\'s Privacy',
    content: `Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will take steps to delete it.`
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website or sending an email to subscribers. Your continued use of our website after changes are posted constitutes your acceptance of the updated policy.`
  },
  {
    title: '9. Contact Us',
    content: `If you have questions about this Privacy Policy or how we handle your data, please contact us at:\n\nDynamic Designs\nprivacy@dynamicdesigns.studio\nVictoria Island, Lagos, Nigeria\n+234 800 123 4567`
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 noise-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}>Privacy Policy</h1>
            <p className="text-brand-white/50 text-sm font-mono">Last updated: June 1, 2026</p>
            <div className="mt-6 p-5 border border-brand-green/20 rounded-sm bg-brand-green/5">
              <p className="text-brand-white/70 text-sm leading-relaxed">
                Dynamic Designs (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website and services.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 bg-brand-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 50}>
                <div className="border-t border-white/5 pt-8">
                  <h2 className="font-display text-xl font-bold text-brand-white mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}>{section.title}</h2>
                  <div className="text-brand-white/60 text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
