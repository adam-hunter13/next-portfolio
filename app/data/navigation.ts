import {
  HomeIcon,
  UserCircleIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  FolderIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

export type NavigationItem = {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const navItems: NavigationItem[] = [
    {
        name: 'Home',
        href: '/',
        icon: HomeIcon 
    },

    {
        name: 'About',
        href: '/about',
        icon: UserCircleIcon 
    },

    {
        name: 'Experience',
        href: '/experience',
        icon: BriefcaseIcon 
    },

    {
        name: 'Education',
        href: '/education',
        icon: AcademicCapIcon 
    },

    {
        name: 'Projects',
        href: '/projects',
        icon: FolderIcon 
    },

    {
        name: 'Contact',
        href: '/contact',
        icon: EnvelopeIcon 
    },
]
