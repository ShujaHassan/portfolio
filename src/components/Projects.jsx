import React from "react";

import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Ticket Booking System",
    description: "A PHP-based ticket booking app with QR code generation.",
    live: "#",
    github: "https://github.com/your-repo",
  },
  {
    id: 2,
    name: "React Dashboard",
    description: "Responsive admin dashboard with sidebar and CRUD modules.",
    live: "#",
    github: "https://github.com/your-repo",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg p-6 rounded-xl cursor-pointer hover:shadow-2xl transition"
              onClick={() => setSelected(project)}
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-500 mt-2">
                {project.description.substring(0, 50)}...
              </p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold mb-4">{selected.name}</h3>
              <p className="text-gray-700 mb-4">{selected.description}</p>
              <div className="flex space-x-4">
                <a
                  href={selected.live}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href={selected.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
