import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">Contact Me</h2>
      <motion.form
        className="w-4/5 mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! (form backend connect karna hai)");
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-cyan-400 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-cyan-400 outline-none"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full mt-6 p-4 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-cyan-400 outline-none"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full mt-6 p-4 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-cyan-400 outline-none"
          required
        ></textarea>
        <button
          type="submit"
          className="mt-6 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}

export default Contact;
