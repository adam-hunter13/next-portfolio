import './globals.css';
import type { Metadata } from 'next';
import ResponsiveLayout from './components/ResponsiveLayout';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created by Adam Hunter',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden transition-colors duration-300">
        <ResponsiveLayout>
          {children}
        </ResponsiveLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
