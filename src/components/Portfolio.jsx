import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import acpkhi from "../assets/acpkhi.png";
import dashboardimg from "../assets/dashboard.png";
import tbcimg from "../assets/tbc.png";


const projects = [
  {
    name: "Arts Council of Pakistan | Artists & Cultural Hub",
    description: "Arts Council of Pakistan Karachi – Official Website Developed a full-stack web platform with React 18, Vite, Tailwind CSS (frontend) and Node.js + Express (backend). Includes a modern admin dashboard (React) to manage festivals, sessions, academic data, artists, sponsors, and more, with real-time updates and responsive design.",
    image: acpkhi,
    link: "https://acpkhi.com",
    github: "https://github.com/your-repo",
  },
  {
    name: "Dashboard SystemDashboard System – Arts Council of Pakistan",
    description: "Full-stack Admin Dashboard for Arts Council of Pakistan built with React 18, Vite, Tailwind CSS (frontend) and Node.js + Express (backend). Manage festivals, sessions, speakers, academic data, banners, sponsors, feedback, and facilities with real-time updates. Features: responsive design, Add/Edit/View modules, image uploads, QR code generation, secure login, and smooth animations.",
    image: dashboardimg,
    link: "https://your-live-demo-link.com",
    github: "https://github.com/your-repo",
  },
  {
    name: "The Big Chips Website",
    description: "A modern, responsive creative agency website built with React, Tailwind CSS, and Vite, featuring animated sections for team, portfolio, clients, and services. The Node.js/Express backend handles dynamic content and contact form submissions, providing a scalable, full-stack solution with smooth performance and mobile-first design.",
    image: tbcimg,
    link: "https://thebigchips.com",
    github: "https://github.com/your-repo",
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-800">
      <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
        Portfolio
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-cyan-500/50 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

export default Portfolio;
