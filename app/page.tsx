import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import projects from '@/app/data/projects'

export default function HomePage() {

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section className="space-y-16 max-w-3xl xl:max-w-7xl">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I’m Adam Hunter
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          I build fast, modern front-end experiences with React, TypeScript, and Tailwind CSS.
          Focused on performance, accessibility, and clean design.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            View Projects <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Featured Projects Teaser */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <li key={index} className="rounded-xl border p-4 hover:shadow transition">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                </div>
                <div>
                  <div className="flex flex-row items-center gap-8">
                    <Link href={project.live ?? '/projects'} className="text-blue-600 border border-blue-600 text-sm font-medium mt-2 inline-block p-2 rounded-lg hover:text-white hover:bg-blue-600">
                      View Details →
                    </Link>
                    <Link href={project.github} target="_blank" className="bg-blue-600 text-white p-2 rounded-lg text-sm font-medium mt-2 inline-block hover:text-blue-600 hover:bg-white hover:border hover:border-blue-600">
                      GitHub →
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* About Preview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">A Bit About Me</h2>
        <p className="text-gray-600 max-w-2xl">
          I&apos;m a front-end developer who enjoys crafting intuitive UIs and clean component architectures.
          Whether it’s building design systems or collaborating with teams, I focus on clarity and impact.
        </p>
        <Link href="/about" className="text-blue-600 font-medium inline-flex items-center gap-1">
          Learn more about me <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
