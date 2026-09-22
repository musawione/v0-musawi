import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Ahmed Al-Musawi | Marketing Manager, Performance & Growth',
  description: 'Marketing Manager with 12+ years building and running marketing functions across real estate, FMCG, media, luxury retail, and the non-profit sector.',
  openGraph: {
    title: 'Ahmed Al-Musawi | Marketing Manager, Performance & Growth',
    description: 'Marketing Manager with 12+ years building and running marketing functions across real estate, FMCG, media, luxury retail, and the non-profit sector.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
