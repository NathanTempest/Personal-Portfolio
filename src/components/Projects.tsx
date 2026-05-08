import { Layers, Zap, Database, Globe } from "lucide-react";

const projects = [
  {
    title: "Boeing Modernization",
    desc: "Refactored monolithic aviation systems into Spring Boot microservices.",
    impact: "Reduced latency & improved ETL by 35%.",
    icon: <Layers className="text-blue-500" size={20} />
  },
  {
    title: "Telemetry Pipelines",
    desc: "Spark + Airflow ETL pipelines for flight data analytics.",
    impact: "35% faster processing runtimes.",
    icon: <Zap className="text-yellow-500" size={20} />
  },
  {
    title: "Ad Insights GraphQL",
    desc: "Migrated REST services to GraphQL for personalized ad reporting.",
    impact: "Eliminated over-fetching and improved UX.",
    icon: <Globe className="text-emerald-500" size={20} />
  },
  {
    title: "High-Perf SaaS",
    desc: "Scalable SaaS modules using Spring Boot, React, and Redis.",
    impact: "30% increase in API throughput.",
    icon: <Database className="text-purple-500" size={20} />
  }
];

export default function Projects() {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Layers className="text-emerald-500" size={20} />
        Key Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto custom-scrollbar pr-2">
        {projects.map((p, i) => (
          <div key={i} className="group p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all">
            <div className="mb-3">{p.icon}</div>
            <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">{p.title}</h4>
            <p className="text-[11px] text-slate-500 mb-2 leading-relaxed">{p.desc}</p>
            <div className="text-[10px] font-semibold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-full w-fit">
              {p.impact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
