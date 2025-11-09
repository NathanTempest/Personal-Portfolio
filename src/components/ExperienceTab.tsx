import React from "react";
import boeingLogo from "../assets/Boeing.jpg";
import amazonLogo from "../assets/Amazon.png";
import zomatoLogo from "../assets/Zomato.png";

const ExperienceTab: React.FC = () => {
  const experiences = [
    {
      company: "Boeing",
      logo: boeingLogo,
      role: "Full Stack Software Engineer",
      location: "Seattle, WA",
      dates: "Jan 2024 – Jul 2025",
      description:
        "Modernized legacy Java apps to containerized Spring Boot microservices; implemented CI/CD pipelines; enhanced observability.",
      projects: [
        "Legacy Flight Booking App modernization with Spring Boot + React",
        "Contract applications for airlines (Delta, Southwest)",
        "Monitoring dashboards with Prometheus/Grafana",
      ],
      technologies: ["Java", "Spring Boot", "React", "Kubernetes", "Docker", "GitHub Actions", "Terraform"],
    },
    {
      company: "Amazon Web Services",
      logo: amazonLogo,
      role: "Software Development Engineer",
      location: "Boston, MA",
      dates: "Sep 2022 – Nov 2023",
      description:
        "Built highly available microservices; migrated REST APIs to GraphQL; developed ETL pipelines.",
      projects: [
        "Fast Snapshot Restore APIs transition to Step Functions",
        "Advertising Data Pipeline with GraphQL",
        "API performance & latency dashboards",
      ],
      technologies: ["Java", "Python", "AWS ECS", "Lambda", "GraphQL", "Kafka", "SQS", "Airflow"],
    },
    {
      company: "Zomato",
      logo: zomatoLogo,
      role: "Data Engineering Intern",
      location: "Hyderabad, India",
      dates: "Jan 2020 – Jun 2020",
      description:
        "Built Python/Airflow pipelines and dashboards; reduced latency for analytics.",
      projects: [
        "Clickstream and transaction data pipelines",
        "Real-time analytics dashboards",
      ],
      technologies: ["Python", "Airflow", "MongoDB", "React", "REST APIs"],
    },
  ];

  return (
    <section className="space-y-8 animate-fade-in">
      {experiences.map((exp) => (
        <div key={exp.company} className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-2">
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain" />
            <div>
              <h3 className="text-xl font-bold">{exp.company}</h3>
              <p className="text-gray-400">{exp.role} | {exp.location} | {exp.dates}</p>
            </div>
          </div>
          <p className="mt-2">{exp.description}</p>
          <ul className="list-disc list-inside mt-2">
            {exp.projects.map((proj, i) => (
              <li key={i}>{proj}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-gray-400">Technologies: {exp.technologies.join(", ")}</p>
        </div>
      ))}
    </section>
  );
};

export default ExperienceTab;