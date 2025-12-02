import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="p-12">
      <h2 className="text-4xl font-bold text-pink-500 mb-8">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-pink-500 mb-4">Backend</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Java (Spring Boot) — <span className="text-green-400">Expert</span></li>
            <li>Python — <span className="text-green-400">Expert</span></li>
            <li>Node.js — <span className="text-yellow-300">Intermediate</span></li>
            <li>Microservices — <span className="text-green-400">Expert</span></li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-pink-500 mb-4">Frontend</h3>
          <ul className="space-y-2 text-gray-300">
            <li>React.js — <span className="text-green-400">Expert</span></li>
            <li>TypeScript — <span className="text-yellow-300">Intermediate</span></li>
            <li>HTML/CSS — <span className="text-green-400">Expert</span></li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-pink-500 mb-4">Cloud & DevOps</h3>
          <ul className="space-y-2 text-gray-300">
            <li>AWS — <span className="text-green-400">Expert</span></li>
            <li>Kubernetes — <span className="text-yellow-300">Intermediate</span></li>
            <li>CI/CD — <span className="text-green-400">Expert</span></li>
            <li>GitHub Actions — <span className="text-green-400">Expert</span></li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-pink-500 mb-4">AI/ML Tools</h3>
          <ul className="space-y-2 text-gray-300">
            <li>OpenAI — <span className="text-green-400">Expert</span></li>
            <li>Claude — <span className="text-green-400">Expert</span></li>
            <li>LangChain — <span className="text-orange-400">Beginner</span></li>
            <li>Hugging Face — <span className="text-orange-400">Beginner</span></li>
          </ul>
        </div>

      </div>
    </section>
  );
}