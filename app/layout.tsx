import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Dynamic Designs | Turning Ideas into Masterpieces',
    template: '%s | Dynamic Designs',
  },
  description: 'Dynamic Designs is a creative studio specializing in art, education, video editing, and graphic design. We turn your ideas into masterpieces.',
  keywords: ['graphic design', 'video editing', 'art education', 'creative studio', 'branding', 'motion design', 'Dynamic Designs'],
  authors: [{ name: 'Dynamic Designs' }],
  creator: 'Dynamic Designs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dynamicdesigns.studio',
    siteName: 'Dynamic Designs',
    title: 'Dynamic Designs | Turning Ideas into Masterpieces',
    description: 'Creative studio specializing in art, education, video editing, and graphic design.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Dynamic Designs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynamic Designs',
    description: 'Turning Ideas into Masterpieces',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="grain">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
