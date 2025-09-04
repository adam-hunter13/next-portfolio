import Carousel from "../../components/Carousel";
import profileImages from "@/app/data/profileImages";
import nationalParkSliderImages from "@/app/data/nationalParkSliderImages";
import techItems from "@/app/data/techItems";

export default function AboutPage() {

  return (
    <section className="max-w-2xl space-y-6 text-gray-700">
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight">About Me</h1>

      {/* Profile + About text */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        <Carousel
          slides={profileImages}
          className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-10/12 rounded-2xl overflow-hidden shadow-md mx-auto"
        />
        <div className="space-y-4">
          <p>
            I&apos;m Adam Hunter, a front-end developer who focuses on building fast, accessible,
            and beautiful web interfaces. I enjoy working with technologies like React, TypeScript,
            and Tailwind CSS to turn ideas into polished digital experiences.
          </p>
          <p>
            I have a strong eye for design systems, component architecture, and usability. Whether
            I’m collaborating on a product team or building solo projects, I value clean code and
            thoughtful design decisions.
          </p>
          <p>
            Outside of coding, I’m always learning—whether it’s trying out a new framework,
            brushing up on design principles, or exploring UX patterns. I believe in continuous
            improvement and bring that mindset to every project.
          </p>
        </div>
      </div>

      {/* Tech list */}
      <div className="pt-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">Tech I Enjoy Working With</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {techItems.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 border border-blue-100 hover:bg-blue-100 transition-colors duration-200"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Scenic images */}
      <div className="flex flex-col gap-4">
        <p>
          When I&apos;m not working I enjoy spending quality time with my wife and twin sons. We
          love exploring the outdoors and visiting as many national parks as possible.
        </p>
        <Carousel slides={nationalParkSliderImages} showArrows showOverlay />
      </div>
    </section>
  )
}
