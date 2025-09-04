'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Footer from './Footer'

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
      <div className="flex flex-col flex-1 w-4/5">
        <header className="p-4 bg-white shadow-md md:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Bars3Icon className="w-6 h-6 text-gray-700" />
          </button>
        </header>
        <main className="flex-1 p-8">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
