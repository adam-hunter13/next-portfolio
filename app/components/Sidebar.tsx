'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import {
  HomeIcon,
  UserCircleIcon,
  FolderIcon,
  EnvelopeIcon,
  XMarkIcon,
  BriefcaseIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: UserCircleIcon },
  { name: 'Experience', href: '/experience', icon: BriefcaseIcon },
  { name: 'Education', href: '/education', icon: AcademicCapIcon },
  { name: 'Projects', href: '/projects', icon: FolderIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
]

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
          'fixed z-40 top-0 left-0 min-h-screen w-64 bg-white border-r border-gray-200 shadow-sm p-6 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Close button (mobile only) */}
        <div className="flex justify-end md:hidden mb-4">
          <button
            onClick={onClose}
            aria-label="Close Sidebar"
            className="text-gray-500 hover:text-gray-700"
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
                    ? 'bg-indigo-100 text-blue-700'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
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
