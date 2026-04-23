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
    title: 'Shelfie',
    descriptionPreview: 'A cozy social bookshelf app — track your reading, write reviews, and share recommendations with friends.',
    description: 'Shelfie is a full-stack social reading tracker built with Next.js, TypeScript, and Supabase. Users can build a personal bookshelf, write reviews, track reading progress, and connect with friends to share recommendations. Features include real-time reactions, push notifications, dark mode, an animated 3D bookshelf view, and a stats dashboard with yearly reading goals.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'PostgreSQL'],
    live: 'https://shelfie-black.vercel.app/',
    github: 'https://github.com/adam-hunter13/shelfie',
    image: 'Shelfie_Screen_Shot.png',
    featured: true,
    inDevelopment: false,
  },
  {
    title: 'Portfolio Website (Currently Viewing)',
    descriptionPreview: 'A personal site built with Next.js and Tailwind CSS to showcase my work and writing.',
    description: 'A personal site built with Next.js and Tailwind CSS to showcase my work and writing.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
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
    title: 'Natural Disaster Tracker',
    descriptionPreview: 'This app is a natural disaster tracker that utilizes Google Maps API and the NASA API to plot current natural disasters on a map...',
    description: 'An interactive natural disaster tracker that pulls live event data from NASA\'s EONET API and plots them on a global map using Leaflet and OpenStreetMap. Users can click any event marker to view details, filter events by custom date ranges, and reference a legend of all tracked disaster categories including wildfires, volcanoes, storms, floods, and more.',
    tags: ['React', 'JavaScript', 'Leaflet', 'OpenStreetMap', 'NASA EONET API', 'CSS'],
    live: 'https://natural-disaster-tracker-klz6.vercel.app/',
    github: 'https://github.com/adam-hunter13/natural-disaster-tracker',
    image: 'Natural-Disaster.png',
    featured: true,
    inDevelopment: false,
  },
  // {
  //   title: 'Texas Hold\'em',
  //   descriptionPreview: 'Want to play Texas Hold\'em? This is the site for you...',
  //   description: 'Allow the user to play Texas Hold\'em vs 3 bots',
  //   tags: ['Next.js','Tailwind CSS'],
  //   github: 'https://github.com/adam-hunter13/texas-holdem',
  //   image: '',
  //   featured: false,
  //   inDevelopment: true,
  // },
]

export default projects
