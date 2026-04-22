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
    title: 'F1 Standings',
    descriptionPreview: 'A personal site built with Next.js and Tailwind CSS to display F1 statistics.',
    description: 'A personal site built with Next.js and Tailwind CSS to display F1 statistics. This includes current standings for the drivers and constructors championships, current and previous race season history and I have also added a theme selector so the theme of the app can be the colors of your favorite f1 team.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Jolpica API'],
    live: 'https://f1-app-dashboard.vercel.app/',
    github: 'https://github.com/adam-hunter13/f1-app',
    image: 'f1_app_preview.png',
    featured: true,
    inDevelopment: false,
  },
  {
    title: 'Shelfie',
    descriptionPreview: 'A cozy social bookshelf app — track your reading, write reviews, and share recommendations with friends.',
    description: 'Shelfie is a full-stack social reading tracker built with Next.js, TypeScript, and Supabase. Users can build a personal bookshelf, write reviews, track reading progress, and connect with friends to share recommendations. Features include real-time reactions, push notifications, dark mode, an animated 3D bookshelf view, and a stats dashboard with yearly reading goals.',
    tags: ['Next.js, TypeScript, Supabase, Tailwind, PostgreSQL'],
    live: 'https://shelfie-black.vercel.app/',
    github: 'https://github.com/adam-hunter13/shelfie',
    image: 'Shelfie_Screen_Shot.png',
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
    description: 'Weather application that takes the users geo location and displays their current weather.',
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
