import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Meta",
    role: "Software Engineer",
    period: "Nov 2025 – Present",
    impact: "Contributing to core developer tooling and open-source Python typechecking infrastructure.",
    tech: ["Rust", "Python", "AWS", "VSCode Development", "Typechecking", "ASTs", "BUCK"],
    points: [
      "Contributing to 'Pyrfely', an open-source Python typechecker and Language Server built in Rust.",
      "Implementing type checking and resolution logic using Abstract Syntax Trees (ASTs) for high-performance analysis.",
      "Developing and maintaining the Language Server Protocol (LSP) implementation for VSCode integration.",
      "Managing version upgrades for both the core software and the VSCode extension.",
      "Utilizing BUCK for efficient build orchestration across distributed systems."
    ]
  },
  {
    company: "Blue Space Technologies (Client: Boeing)",
    role: "Software Engineer",
    period: "Dec 2023 – Jul 2025",
    impact: "Modernized critical aviation maintenance systems with 35% ETL improvement.",
    tech: ["Spring Boot", "PostgreSQL", "Airflow", "Spark"],
    points: [
      "Refactored legacy aircraft systems into Spring Boot microservices.",
      "Built Spark + Airflow pipelines for telemetry analysis.",
      "Optimized PostgreSQL with indexing and partitioning (40% reduced latency)."
    ]
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "Software Development Engineer",
    period: "Oct 2022 – Dec 2023",
    impact: "Accelerated large-scale ad analytics and reduced operational latency.",
    tech: ["Java", "Node.js", "Lambda", "Step Functions", "GraphQL"],
    points: [
      "Migrated monolith advertising systems to GraphQL & Airflow DAGs.",
      "Built serverless workflows handling millions of daily requests.",
      "Improved incident response times using distributed tracing."
    ]
  }
];

export default function Experience() {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Briefcase className="text-emerald-500" size={20} />
        Professional Experience
      </h3>
      <div className="space-y-8 overflow-y-auto custom-scrollbar pr-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-slate-100 last:border-0 pb-2">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-emerald-500 rounded-full"></div>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h4 className="font-bold text-slate-900">{exp.company}</h4>
              <span className="text-xs font-medium text-slate-400">{exp.period}</span>
            </div>
            <p className="text-sm font-semibold text-emerald-600 mb-2">{exp.role}</p>
            <ul className="text-xs text-slate-600 space-y-1.5 mb-3 list-disc ml-4">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map(t => (
                <span key={t} className="px-1.5 py-0.5 bg-slate-200/50 text-[10px] font-medium text-slate-600 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
