import React from "react";

const SideProjectsTab: React.FC = () => {
  const sideProjects = [
    {
      title: "Soccer Pundit Chatbot",
      description: "AI-powered football pundit chatbot using FastAPI backend and HTML/JS frontend for real-time match analysis.",
      tech: ["FastAPI", "OpenAI GPT", "HTML", "JavaScript", "Render"],
    },
    {
      title: "Portfolio Website",
      description: "Built with React + TailwindCSS, deployed on GitHub Pages.",
      tech: ["React", "TailwindCSS"],
    },
    {
      title: "Advertising Data Pipeline",
      description: "Migrated REST APIs to GraphQL for faster queries.",
      tech: ["GraphQL", "AWS"],
    },
  ];

  return (
    <section className="space-y-6 animate-slide-up">
      {sideProjects.map((proj, i) => (
        <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">{proj.title}</h3>
          <p className="mt-2">{proj.description}</p>
          <p className="mt-2 text-sm text-gray-400">Technologies: {proj.tech.join(", ")}</p>
        </div>
      ))}
    </section>
  );
};

export default SideProjectsTab;