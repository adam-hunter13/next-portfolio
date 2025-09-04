import experiences from "@/app/data/experience";

export default function ExperiencePage() {

  return (
    <div className="max-w-2xl space-y-6 text-neutral-800">
      <h1 className="text-4xl font-bold text-black mb-10">Experience</h1>

      <ol className="relative border-l border-blue-200">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-10 ml-6">
            {/* Timeline dot */}
            <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border-4 border-white shadow-sm" />

            {/* Content */}
            <h2 className="text-xl font-semibold text-gray-900">{exp.role}</h2>
            <p className="text-black font-medium">
              {exp.company} &middot; <span className="italic">{exp.date}</span>
            </p>
            <ul className="list-disc list-inside mt-2 md:ml-4 text-gray-700 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-2 text-sm text-gray-600 mt-4">
              {exp.tools.map((tool, i) => (
                <li 
                  key={i}
                  className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 border border-blue-100 hover:bg-blue-100 transition-colors duration-200"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
