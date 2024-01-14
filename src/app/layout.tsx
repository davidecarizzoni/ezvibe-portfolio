import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {PropsWithChildren} from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ezvibe',
  description: 'Ezvibe',
  authors: [
    {
      name: 'Davide',
      url: 'https://github.com/davidecarizzoni'
    }
  ],
  icons: {
    icon: [
      {
        url: '/favicon.png',
        href: '/favicon.png',
      },
    ],
  },
  alternates:{
    canonical: 'ezvibe.com'
  }
}

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <SpeedInsights />
      <Analytics />
      </body>
    </html>
  )
}
