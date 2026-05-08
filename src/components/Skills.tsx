import { FaReact, FaJava, FaPython, FaAws, FaNodeJs, FaRust } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiKubernetes, SiOpenai, SiLangchain } from "react-icons/si";

const skillCategories = [
  {
    name: "Backend",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "Rust", icon: <FaRust className="text-orange-700" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    ]
  },
  {
    name: "Cloud & AI",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      { name: "K8s", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "OpenAI", icon: <SiOpenai className="text-slate-800" /> },
      { name: "LangChain", icon: <SiLangchain className="text-slate-700" /> },
    ]
  }
];

export default function Skills() {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
        Tech Stack
      </h3>
      <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {skillCategories.map((cat) => (
          <div key={cat.name}>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{cat.name}</p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-700 hover:border-emerald-200 hover:bg-emerald-50 transition-colors cursor-default"
                >
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
