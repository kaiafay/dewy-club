import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Dewy Club — Your Skin\'s New Situationship',
  description: 'Gen Z skincare built for real life. No fluff, no 47-step routines. Just the good stuff.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} bg-[#F9F7F4]`}>
      <body className="font-sans antialiased text-[#1A1A1A]">
        {children}
      </body>
    </html>
  )
}
