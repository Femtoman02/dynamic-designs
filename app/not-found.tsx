import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center noise-bg">
      <div className="text-center px-4">
        <div className="font-display text-[180px] font-black leading-none text-brand-green/10 select-none mb-0"
          style={{ fontFamily: 'var(--font-display)' }}>404</div>
        <h1 className="font-display text-3xl md:text-4xl font-black text-brand-white -mt-8 mb-4"
          style={{ fontFamily: 'var(--font-display)' }}>Page Not Found</h1>
        <p className="text-brand-white/50 mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Back to Home <ArrowRight size={16} /></Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
