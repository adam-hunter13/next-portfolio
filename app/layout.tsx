import './globals.css'
import type { Metadata } from 'next'
import ResponsiveLayout from './components/ResponsiveLayout'
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";


export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created by Adam Hunter',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='h-full'>
      <body className='flex min-h-screen overflow-x-hidden'>
        <ResponsiveLayout>{children}</ResponsiveLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
