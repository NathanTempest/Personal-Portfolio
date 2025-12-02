import React from "react";

const Education: React.FC = () => {
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
    <section id="education" className="p-12">
      <h2 className="text-4xl font-bold text-pink-500 mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold text-pink-500">{edu.degree}</h3>
            <p className="text-gray-400 mt-1">
              {edu.school} | {edu.dates}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;