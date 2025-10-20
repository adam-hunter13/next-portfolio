import HorizontalScroller from "@/app/components/HorizontalScroller";
import TextCarousel from "@/app/components/TextCarousel";
import experiences from "@/app/data/experience";
import { recommendations } from "@/app/data/recommendations";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function ExperiencePage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-10">Experience</h1>

      <ol className="relative border-l border-blue-200 dark:border-blue-700">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-10 ml-6">
            {/* Timeline dot */}
            <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border-4 border-white shadow-sm dark:border-gray-900" />

            {/* Content */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{exp.role}</h2>
            <p className="font-medium text-black dark:text-gray-200">
              {exp.company} &middot; <span className="italic">{exp.date}</span>
            </p>
            <ul className="list-disc list-inside mt-2 md:ml-4 space-y-1 text-gray-700 dark:text-gray-300">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <HorizontalScroller items={exp.tools} speed={50} />
          </li>
        ))}
      </ol>

      {/* Recommendations */}
      <div className="my-16 relative">
        <h2 className="text-2xl font-semibold mb-10 text-center text-gray-900 dark:text-gray-100">
          What People Say About Working With Me
        </h2>
        <div className="relative max-w-3xl mx-auto p-4 md:p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md">
          {/* Quotation marks */}
          <span className="absolute top-4 left-6 text-6xl text-blue-200 dark:text-gray-700 font-serif select-none">“</span>
          <span className="absolute bottom-10 right-6 text-6xl text-blue-200 dark:text-gray-700 font-serif select-none">”</span>

          <TextCarousel data={recommendations} interval={10} />
        </div>
      </div>

      {/* Resume CTA */}
      <div className="flex flex-col items-center text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Want to see my full experience?</h2>
        <p className="mb-6 max-w-md text-gray-600 dark:text-gray-300">
          Download my resume to view a detailed overview of my projects, skills, and work history.
        </p>
        <a
          href="/resume.pdf"
          download
          className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
          Download Resume
        </a>
      </div>
    </section>
  );
}
