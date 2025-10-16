import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiRedux,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux size={40} className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: "PHP", icon: <FaPhp size={40} className="text-indigo-400" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-500" /> },
  { name: "MySQL", icon: <SiMysql size={40} className="text-blue-400" /> },
  { name: "Databases", icon: <FaDatabase size={40} className="text-pink-400" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">Skills</h2>
      <div className="container mx-auto w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <p className="text-gray-300 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
