import Link from 'next/link'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import projects from '@/app/data/projects'

export default function ProjectsPage() {
  return (
    <section className="max-w-3xl space-y-6">
      <h1 className="text-4xl font-bold tracking-tight text-black">Projects</h1>
      <p className="text-gray-700 max-w-2xl">
        Here are some of the projects I&apos;ve worked on recently. I enjoy creating tools, design systems, and user-first applications.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <li
            key={project.title || index}
            className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition transform hover:scale-105 flex flex-col h-full"
          >
            {/* Top Half */}
            <div className="p-4 flex-1">
              {project.inDevelopment && <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold mb-2 w-max">
                  In Development
                </span>}
              <h2 className="text-lg font-semibold text-gray-900">{project.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            </div>

            {/* Bottom Half */}
            <div className="flex flex-col sm:flex-row  p-4 gap-4">
              {/* Left Section: Tags + Links */}
              <div className="flex-1 flex flex-col justify-end">
                {/* Tags */}
                <ul className="flex flex-wrap gap-2 text-xs text-gray-600 mb-3">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4">
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="text-blue-600 flex items-center gap-1 text-sm hover:underline"
                    >
                      Live Demo <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-gray-600 flex items-center gap-1 text-sm hover:underline"
                    >
                      GitHub <CodeBracketIcon className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Right Section: Image */}
              {project.image && (
                <div className="w-full sm:w-32 h-24 relative flex-shrink-0">
                  <Image
                    src={project.image.startsWith('/') ? project.image : `/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
