type Project = {
  title: string
  description: string
  tags: string[]
  live?: string
  github: string
  image?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Portfolio Website (Currently Viewing)',
    description: 'A personal site built with Next.js and Tailwind CSS to showcase my work and writing.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    live: '/projects',
    github: 'https://github.com/adam-hunter13/next-portfolio',
    image: '',
    featured: true,
  },
  {
    title: 'BookShelf',
    description: 'Currently in development. Allow users to create an account and proceed to create Bookshelves containing books...',
    tags: ['Vite.js', 'Firebase'],
    github: 'https://github.com/adam-hunter13/bookshelf',
    image: 'bookshelf.png',
    featured: true,
  },
  {
    title: 'Texas Hold\'em',
    description: 'Currently in development. Allow the user to play Texas Hold\'em vs 3 bots',
    tags: ['Next.js','Tailwind CSS'],
    github: 'https://github.com/adam-hunter13/texas-holdem',
    image: '',
    featured: false,
  },
  {
    title: 'Natural Disaster Tracker',
    description: 'This app is a natural disaster tracker that utilizes Google Maps API and the NASA API...',
    tags: ['React', 'Google Maps API', 'NASA API', 'CSS'],
    github: 'https://github.com/adam-hunter13/natural-disaster-tracker',
    image: 'Natural-Disaster.png',
    featured: true,
  },
  {
    title: 'Weather Application',
    description: 'Weather application that takes the users geo location and displays their current weather...',
    tags: ['HTML', 'CSS', 'JavaScript', 'Open Weather API'],
    github: 'https://github.com/adam-hunter13/weather-app',
    image: 'Weather-App.png',
    featured: false,
  },
  {
    title: 'Destination Planner',
    description: 'This application allows the user to create an overview for a desired vacation destination...',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/adam-hunter13/Destination-Planning',
    image: 'Destination-App.png',
    featured: false,
  },
]

export default projects
