import React from "react";

const EducationTab: React.FC = () => {
  const education = [
    {
      degree: "M.S. in Computer Science & AI (Ongoing)",
      school: "Indiana Wesleyan University",
      dates: "Aug 2025 - Present",
    },
    {
      degree: "M.S. in Data Science & Machine Learning",
      school: "University at Buffalo",
      dates: "Jul 2021 - Aug 2022",
    },
    {
      degree: "B.S. in Computer Science",
      school: "Sreenidhi University",
      dates: "Jun 2016 - May 2020",
    },
  ];

  return (
    <section className="space-y-6 animate-slide-up">
      {education.map((edu, i) => (
        <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">{edu.degree}</h3>
          <p className="text-gray-400">{edu.school} | {edu.dates}</p>
        </div>
      ))}
    </section>
  );
};

export default EducationTab;