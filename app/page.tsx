"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import projects from "../app/data/projects";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProject(null), 300); // wait for fade-out
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 dark:text-gray-200">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
          Hi, I’m Adam Hunter
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          I build fast, modern front-end experiences with React, TypeScript, and Tailwind CSS. Focused on performance, accessibility, and clean design.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            View Projects <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Featured Projects Teaser */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Featured Projects</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <li
              key={project.title}
              className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition bg-white dark:bg-gray-900"
            >
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-lg text-gray-900 dark:text-white">{project.title}</h3>
                  {project.inDevelopment && (
                    <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold w-max">
                      In Development
                    </span>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.descriptionPreview}</p>
                </div>
                <div className="flex flex-row items-center gap-8">
                  <button
                    onClick={() => openModal(project)}
                    className="text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 text-sm font-medium mt-2 inline-block p-2 rounded-lg hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition"
                  >
                    View Details →
                  </button>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="bg-blue-600 dark:bg-blue-500 text-white dark:text-white p-2 rounded-lg text-sm font-medium mt-2 inline-block hover:text-blue-600 dark:hover:text-blue-200 hover:bg-white dark:hover:bg-gray-800 hover:border hover:border-blue-600 transition"
                  >
                    GitHub →
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* About Preview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">A Bit About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
          I&apos;m a front-end developer who enjoys crafting intuitive UIs and clean component architectures. Whether it’s building design systems or collaborating with teams, I focus on clarity and impact.
        </p>
        <Link
          href="/about"
          className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1"
        >
          Learn more about me <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              showModal ? "opacity-50" : "opacity-0"
            }`}
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div
            className={`relative bg-white dark:bg-gray-900 rounded-xl p-6 max-w-lg w-5/6 md:w-full shadow-lg transform transition-all duration-300 ${
              showModal ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-xl font-bold"
            >
              ×
            </button>

            {/* Text Content */}
            <div className="relative flex flex-col gap-4">
              {selectedProject.inDevelopment && (
                <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold mb-2 w-max">
                  In Development
                </span>
              )}

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{selectedProject.title}</h3>

              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{selectedProject.description}</p>

              {selectedProject.image && (
                <div className="w-48 h-48 flex items-center">
                  <Image
                    src={selectedProject.image.startsWith("/") ? selectedProject.image : "/" + selectedProject.image}
                    alt={selectedProject.title}
                    width={200}
                    height={200}
                    className="object-cover rounded-lg"
                  />
                </div>
              )}

              {selectedProject.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-4 mb-4">
                {selectedProject.live && (
                  <Link
                    href={selectedProject.live}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1"
                  >
                    Live <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                )}
                {selectedProject.github && (
                  <Link
                    href={selectedProject.github}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1"
                  >
                    GitHub <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                )}
                <Link
                  href="/projects"
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1"
                >
                  View More Projects <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
