import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<Home setDarkMode={setDarkMode} darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
