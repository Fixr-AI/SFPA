import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stop Foreclosures PA | Get Fair Cash Offer in 24 Hours | Licensed PA Home Buyers',
  description: 'Facing foreclosure in Pennsylvania? We buy houses fast for cash and help you avoid foreclosure. Licensed, trusted, and serving all PA counties. Free consultation.',
  keywords: 'stop foreclosure PA, avoid foreclosure Pennsylvania, sell house fast foreclosure, PA foreclosure help, cash home buyers Pennsylvania',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Stop Foreclosures PA - Licensed Cash Home Buyers',
    description: 'Avoid foreclosure in Pennsylvania. Get a fair cash offer in 24 hours. Licensed buyers serving all PA counties.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Stop Foreclosures PA Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Foreclosures PA - Licensed Cash Home Buyers',
    description: 'Avoid foreclosure in Pennsylvania. Get a fair cash offer in 24 hours.',
    images: ['/android-chrome-512x512.png'],
  },
  alternates: {
    canonical: 'https://stopforeclosurespa.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
