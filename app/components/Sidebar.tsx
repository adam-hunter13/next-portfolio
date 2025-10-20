'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { navItems } from '../data/navigation'



type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-900 bg-opacity-30 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={clsx(
          'fixed z-40 top-0 left-0 min-h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-sm p-6 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Close button (mobile only) */}
        <div className="flex justify-end md:hidden mb-4">
          <button
            onClick={onClose}
            aria-label="Close Sidebar"
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col gap-2">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={name}
                href={href}
                onClick={onClose}
                className={clsx(
                  'flex items-center gap-3 rounded-lg px-4 py-2 font-medium transition-colors duration-200',
                  isActive
                    ? 'bg-indigo-100 dark:bg-blue-600 text-blue-700 dark:text-white'
                    : 'text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {name}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
