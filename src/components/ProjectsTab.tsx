import React from "react";

const ProjectsTab: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built with React + TailwindCSS, deployed on GitHub Pages with animations and smooth scrolling.",
      tech: ["React", "TailwindCSS", "GitHub Pages"],
    },
    {
      title: "Advertising Data Pipeline",
      description: "Migrated REST APIs to GraphQL for faster queries.",
      tech: ["GraphQL", "Java", "Python", "AWS"],
    },
    {
      title: "API Performance Dashboards",
      description: "Visualized latency and error metrics for operational insights.",
      tech: ["React", "Grafana", "Prometheus", "AWS"],
    },
  ];

  return (
    <section className="space-y-6 animate-fade-in">
      {projects.map((proj, i) => (
        <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">{proj.title}</h3>
          <p className="mt-2">{proj.description}</p>
          <p className="mt-2 text-sm text-gray-400">Technologies: {proj.tech.join(", ")}</p>
        </div>
      ))}
    </section>
  );
};

export default ProjectsTab;