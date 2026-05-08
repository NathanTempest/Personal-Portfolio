import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      school: "Indiana Wesleyan University",
      degree: "M.S. in Computer Science / AI",
      period: "2025 – Present",
      focus: ["RL models", "Agentic development", "Rust Development"]
    },
    {
      school: "University at Buffalo",
      degree: "M.S. in Data Science",
      period: "2022",
      gpa: "3.8 / 4.0",
      focus: ["Data Pipelines", "AI/ML models", "Python Development"]
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center">
      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
        <GraduationCap className="text-emerald-500" size={20} />
        Education
      </h3>
      <div className="space-y-6 overflow-y-auto custom-scrollbar pr-2">
        {education.map((edu, idx) => (
          <div key={idx} className={idx !== 0 ? "pt-4 border-t border-slate-100" : ""}>
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-sm font-bold text-slate-900">{edu.school}</h4>
              <span className="text-[10px] font-medium text-slate-400">{edu.period}</span>
            </div>
            <p className="text-xs text-slate-500 mb-1">{edu.degree}</p>
            {edu.gpa && (
              <p className="text-[10px] font-semibold text-emerald-600 mb-2 uppercase tracking-wider">GPA: {edu.gpa}</p>
            )}
            <div className="flex flex-wrap gap-1">
              {edu.focus.map(f => (
                <span key={f} className="px-1.5 py-0.5 bg-slate-50 border border-slate-100 rounded text-[9px] text-slate-500">
                  {f}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
