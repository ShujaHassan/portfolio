import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Programmer",
    company: "Arts Council of Pakistan",
    period: "2022 - Present",
    desc: "Building modern web applications, dashboards & portals using React and Node.js.",
  },
  {
    role: "Web Programmer",
    company: "Tecbz",
    period: "2013 - 2015",
    desc: "Worked on PHP, MySQL and front-end development for client projects.",
  },
  {
    role: "VAS Team Leader",
    company: "Connect Logistics",
    period: "2017 - 2022",
    desc: "Managed supply chain operations, team mentoring, and warehouse systems.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
        Experience
      </h2>
      <div className="container mx-auto w-4/5 relative">
  {/* Vertical line only for md+ screens */}
  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-400 h-full hidden md:block"></div>

  {experiences.map((exp, index) => (
    <motion.div
      key={index}
      className={`mb-12 flex flex-col md:flex-row items-center ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
    >
      <div className="md:w-1/2 p-6 bg-gray-800 rounded shadow-lg">
        <h3 className="text-2xl font-semibold text-cyan-400">{exp.role}</h3>
        <p className="text-gray-400 italic">{exp.company}</p>
        <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
        <p className="text-gray-300">{exp.desc}</p>
      </div>
    </motion.div>
  ))}
</div>
    </section>
  );
}

export default Experience;
