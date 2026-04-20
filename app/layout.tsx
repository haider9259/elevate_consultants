import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// ✅ Variable names se properly define karo
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",  // ← CSS variable add karo
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",  // ← CSS variable add karo
});

export const metadata: Metadata = {
  title: 'Elevate Consultants - Enterprise Solutions',
  description: 'Transform your business with cutting-edge consulting solutions. Strategic insights, digital innovation, and operational excellence.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* ✅ CSS variables apply karo body pe */}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}