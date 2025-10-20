'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Footer from './Footer'

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-4/5">
        {/* Mobile Header */}
        <header className="p-4 bg-white dark:bg-gray-800 shadow-md md:hidden transition-colors duration-300">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 border- border-gray-200 dark:border-gray-700">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
