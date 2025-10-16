import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

function Home({ setDarkMode, darkMode }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white dark:from-white dark:via-gray-100 dark:to-gray-200 dark:text-black">
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default Home;
