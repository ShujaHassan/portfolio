import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/hassan.png";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-900 text-center md:text-left"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 w-4/5">
        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            I'm a Full Stack Developer with extensive experience in designing and building scalable, high-performance, and user-friendly web applications. My expertise spans <span className="text-cyan-400 font-semibold">React.js</span> for dynamic front-end interfaces, <span className="text-green-400 font-semibold">Node.js</span> and <span className="text-green-500 font-semibold">Express.js</span> for backend systems, <span className="text-blue-400 font-semibold">PHP</span> and <span className="text-blue-500 font-semibold">MySQL</span> for server-side programming and databases, and <span className="text-indigo-400 font-semibold">APIs</span> for integrating third-party services. I have worked on full-stack dashboards, portals, ticket booking platforms, and content management systems, implementing features like real-time updates, image uploads, QR code generation, secure login, role-based access, and smooth animations. Additionally, I have experience deploying applications on <span className="text-orange-400 font-semibold">AWS</span>, managing cloud infrastructure, and optimizing performance. I focus on writing clean, efficient code and delivering elegant solutions to complex problems, ensuring optimal user experience across all devices and platforms.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img
              src={profileImg}
              alt="Hassan Ali"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
