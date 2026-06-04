import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Dynamic Designs. Start a project, ask a question, or book a free discovery call.',
}
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
