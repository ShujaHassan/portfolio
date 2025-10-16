import React from "react";
import { motion } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 text-white rounded-xl shadow-xl max-w-2xl w-full p-6 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400"
        >
          <FaTimes size={20} />
        </button>

        {/* Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />

        {/* Content */}
        <h2 className="text-2xl font-bold text-cyan-400 mb-3">{project.name}</h2>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Links */}
        <div className="flex space-x-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectModal;
