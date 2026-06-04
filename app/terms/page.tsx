import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Dynamic Designs terms and conditions of service.',
}

const sections = [
  { title: '1. Acceptance of Terms', content: `By engaging Dynamic Designs for any service, accessing our website, or submitting an enquiry, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.\n\nThese terms apply to all clients, website visitors, students, and any other individuals who interact with Dynamic Designs.` },
  { title: '2. Services', content: `Dynamic Designs provides graphic design, video editing, art education, motion graphics, brand identity, and photography services. The specific scope of work for each engagement is defined in a written project proposal or service agreement provided before work commences.\n\nWe reserve the right to refuse service to any client for any reason, including but not limited to requests for content that is illegal, harmful, or inconsistent with our values.` },
  { title: '3. Project Proposals and Agreements', content: `All projects begin with a written proposal outlining scope, deliverables, timeline, and pricing. Work commences only after the client has approved the proposal in writing (email acceptance is sufficient) and the required deposit has been received.\n\nChanges to the agreed scope during a project may affect pricing and timelines. Any scope changes will be documented and approved before implementation.` },
  { title: '4. Payment Terms', content: `Payment is required as follows: 50% deposit before work commences, and the remaining 50% upon project completion before final files are delivered.\n\nFor projects above ₦500,000, milestone-based payment schedules may be agreed upon. All payments are non-refundable once work on the relevant milestone has commenced.\n\nLate payments (beyond 7 days of the due date) may incur a late fee of 5% per week. We reserve the right to pause work on projects with outstanding payments.` },
  { title: '5. Revisions and Changes', content: `Each project includes 2 rounds of revisions per milestone as defined in the project proposal. Revisions must be provided as consolidated feedback — not piecemeal. Additional revision rounds beyond those included may be charged at our standard hourly rate.\n\nRequests for changes that alter the fundamental direction of the project (e.g., changing brand colours after final approval) are considered out-of-scope and will be quoted separately.` },
  { title: '6. Intellectual Property', content: `Upon receipt of full payment, Dynamic Designs transfers full ownership of the final deliverables to the client. This includes all source files and exported assets specified in the project agreement.\n\nDynamic Designs retains the right to display completed work in our portfolio, on our website, and across our marketing materials unless the client explicitly requests confidentiality in writing before project commencement.\n\nAny third-party assets (stock images, licensed fonts, etc.) used in a project are subject to their respective license terms.` },
  { title: '7. Confidentiality', content: `We treat all client information, business details, and project briefs as confidential. We will not disclose confidential information to third parties without your consent, except as required by law.\n\nClients may request a Non-Disclosure Agreement (NDA) before project commencement. Standard NDA processing takes 2–3 business days.` },
  { title: '8. Education Services', content: `For our training programmes and courses: enrolment fees are non-refundable after the course start date. Cancellations made more than 7 days before a course starts are eligible for a full refund. Cancellations within 7 days of the start date may transfer their enrolment to a future cohort.\n\nCertificates are issued upon successful completion of all required coursework and assessments.` },
  { title: '9. Limitation of Liability', content: `Dynamic Designs is not liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our maximum liability is limited to the total amount paid by the client for the specific project in question.\n\nWe are not responsible for outcomes resulting from client use of our deliverables, including but not limited to business results, third-party rejections, or printing errors arising from client-managed production.` },
  { title: '10. Governing Law', content: `These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.\n\nWe encourage clients to first attempt to resolve disputes directly with us. Most issues can be resolved through good-faith conversation.` },
  { title: '11. Contact', content: `For questions about these terms, contact us at:\n\nDynamic Designs\nlegal@dynamicdesigns.studio\nVictoria Island, Lagos, Nigeria` },
]

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 noise-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="tag mb-6 inline-block">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}>Terms & Conditions</h1>
            <p className="text-brand-white/50 text-sm font-mono">Last updated: June 1, 2026</p>
            <div className="mt-6 p-5 border border-brand-green/20 rounded-sm bg-brand-green/5">
              <p className="text-brand-white/70 text-sm leading-relaxed">
                Please read these terms carefully before engaging our services. These terms constitute a legally binding agreement between you and Dynamic Designs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 bg-brand-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 40}>
                <div className="border-t border-white/5 pt-8">
                  <h2 className="font-display text-xl font-bold text-brand-white mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}>{section.title}</h2>
                  <div className="text-brand-white/60 text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
