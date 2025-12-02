import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="p-12">
      <h2 className="text-4xl font-bold text-pink-500 mb-6">Resume</h2>
      <a
        href="/Personal-Portfolio/NathanielJason_Resume.pdf"
        download
        className="bg-pink-500 hover:bg-pink-400 text-black px-6 py-3 rounded-xl transition"
      >
        Download Resume
      </a>
    </section>
  );
}