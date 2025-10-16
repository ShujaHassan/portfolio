import React from "react";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Hassan Ali
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate <span className="text-cyan-400">Full Stack Developer </span>   
        who loves building modern web apps with React, Node.js & Tailwind CSS.
      </motion.p>

      <motion.div
        className="mt-10 flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#portfolio"
          className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg transition"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-cyan-400 hover:bg-cyan-500 hover:text-white text-cyan-400 font-semibold transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
