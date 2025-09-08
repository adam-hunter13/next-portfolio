type Project = {
  title: string
  descriptionPreview: string
  description: string
  tags: string[]
  live?: string
  github: string
  image?: string
  featured?: boolean
  inDevelopment?: boolean
}

const projects: Project[] = [
  {
    title: 'Portfolio Website (Currently Viewing)',
    descriptionPreview: 'A personal site built with Next.js and Tailwind CSS to showcase my work and writing.',
    description: 'A personal site built with Next.js and Tailwind CSS to showcase my work and writing.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    live: '/projects',
    github: 'https://github.com/adam-hunter13/next-portfolio',
    image: '',
    featured: true,
    inDevelopment: false,
  },
  {
    title: 'BookShelf',
    descriptionPreview: 'An application that allows the user to create an account and proceed to create Bookshelves where they can...',
    description: 'Allow users to create an account and proceed to create Bookshelves containing books. Each book they add to their bookshelf, requires the user to add the book title, book author, a short description and the users overall review.',
    tags: ['Vite.js', 'Firebase'],
    github: 'https://github.com/adam-hunter13/bookshelf',
    image: 'bookshelf.png',
    featured: true,
    inDevelopment: true,
  },
  {
    title: 'Texas Hold\'em',
    descriptionPreview: 'Want to play Texas Hold\'em? This is the site for you...',
    description: 'Allow the user to play Texas Hold\'em vs 3 bots',
    tags: ['Next.js','Tailwind CSS'],
    github: 'https://github.com/adam-hunter13/texas-holdem',
    image: '',
    featured: false,
    inDevelopment: true,
  },
  {
    title: 'Natural Disaster Tracker',
    descriptionPreview: 'This app is a natural disaster tracker that utilizes Google Maps API and the NASA API to plot current natural disasters on a map...',
    description: 'This app is a natural disaster tracker that utilizes Google Maps API and the NASA API to plot current natural disasters on a map. When the natural disaster icon is clicked information pertaining to that specific event is displayed.',
    tags: ['React', 'Google Maps API', 'NASA API', 'CSS'],
    github: 'https://github.com/adam-hunter13/natural-disaster-tracker',
    image: 'Natural-Disaster.png',
    featured: true,
    inDevelopment: false,
  },
  {
    title: 'Weather Application',
    descriptionPreview: 'Weather application that takes the users geo location and displays their current weather...',
    description: 'Weather application that takes the users geo location and displays their current weather. Look at the weather anywhere in the world.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Open Weather API'],
    github: 'https://github.com/adam-hunter13/weather-app',
    image: 'Weather-App.png',
    featured: false,
    inDevelopment: false,
  },
  {
    title: 'Destination Planner',
    descriptionPreview: 'This application allows the user to create an overview for a desired vacation destination...',
    description: 'This application allows the user to create an overview for a desired vacation destination. The user puts in the location, how many people are traveling, and the average cost of a ticket for one person. An estimated total cost is then displayed.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/adam-hunter13/Destination-Planning',
    image: 'Destination-App.png',
    featured: false,
    inDevelopment: false,
  },
]

export default projects
