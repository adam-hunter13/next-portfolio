import education from "@/app/data/education";

export default function EducationPage() {

  return (
    <div className="max-w-2xl space-y-6 text-neutral-800">
      <h1 className="text-4xl font-bold text-black mb-10">Education</h1>

      <ol className="relative border-l border-blue-200">
        {education.map((edu, index) => (
          <li key={index} className="mb-10 ml-6">
            {/* Timeline dot */}
            <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border-4 border-white shadow-sm" />

            <h2 className="text-xl font-semibold text-gray-900">{edu.institution}</h2>
            <p className="text-black font-medium">{edu.degree}</p>
            <p className="text-sm text-gray-500 italic">{edu.date}</p>
            <p className="text-sm text-blue-600 font-semibold mt-1">{edu.honors}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
