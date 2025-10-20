import education from "@/app/data/education";

export default function EducationPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 dark:text-gray-200">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-10">Education</h1>

      <ol className="relative border-l border-blue-200 dark:border-blue-700">
        {education.map((edu, index) => (
          <li key={index} className="mb-10 ml-6">
            {/* Timeline dot */}
            <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border-4 border-white shadow-sm dark:border-gray-900" />

            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{edu.institution}</h2>
            <p className="font-medium text-black dark:text-gray-200">{edu.degree}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">{edu.date}</p>
            {edu.honors && (
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mt-1">{edu.honors}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
