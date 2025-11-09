import React from "react";

const SkillsTable: React.FC = () => {
  const skills = [
    { category: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "Backend", items: ["Spring Boot", "Flask", "Node.js", "REST", "GraphQL", "Microservices", "TDD"] },
    { category: "Frontend", items: ["React.js", "Flutter", "HTML5", "CSS3", "Tailwind", "Redux"] },
    { category: "Databases", items: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB"] },
    { category: "Cloud & DevOps", items: ["AWS Lambda/ECS/S3/CloudWatch", "Docker", "Kubernetes", "Terraform", "Helm", "GitHub Actions", "Jenkins"] },
    { category: "Messaging & Observability", items: ["Kafka", "SQS", "RabbitMQ", "Splunk", "Prometheus/Grafana"] },
  ];

  return (
    <section className="overflow-x-auto animate-fade-in">
      <table className="table-auto w-full bg-gray-900 text-left rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-700">Category</th>
            <th className="px-4 py-2 border-b border-gray-700">Technologies</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, i) => (
            <tr key={i} className="hover:bg-gray-800 transition-colors">
              <td className="px-4 py-2 border-b border-gray-700">{skill.category}</td>
              <td className="px-4 py-2 border-b border-gray-700">{skill.items.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SkillsTable;