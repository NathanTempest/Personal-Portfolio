import { Bot, Network, Plus, ArrowUpRight, Zap, Eye, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const artifacts = [
  {
    title: "Soccer Pundit Chatbot",
    status: "Implemented",
    desc: "AI-driven chatbot for soccer predictions and player stats using LangChain and OpenAI.",
    tech: ["Python", "OpenAI", "LangChain", "Flask"],
    icon: <Bot className="text-emerald-500" size={24} />,
    link: "https://github.com/NathanTempest/Soccer-Pundit-Chatbot",
    isPlaceholder: false
  },
  {
    title: "Artifact 2: Neural Networks",
    status: "Implemented",
    desc: "An interactive visual breakdown of Neural Network architectures, covering core components from nodes to optimizers.",
    tech: ["React", "Framer Motion", "SVG", "AI Theory"],
    icon: <Network className="text-emerald-500" size={24} />,
    internalLink: "/artifact/neural-networks",
    isPlaceholder: false
  },
  {
    title: "Artifact 3: ML Framework",
    status: "Implemented",
    desc: "Comprehensive visual framework outlining 10+ algorithms across Tabular, Vision, NLP, and GenAI.",
    tech: ["React", "Tailwind", "ML Theory"],
    icon: <Plus className="text-emerald-500" size={24} />,
    internalLink: "/artifact/ml-framework",
    isPlaceholder: false
  },
  {
    title: "Artifact 4: GenAI Training",
    status: "Implemented",
    desc: "A visual exploration of the infrastructure, processes, and costs required to train large language models.",
    tech: ["React", "Tailwind", "GenAI Infrastructure"],
    icon: <Zap className="text-emerald-500" size={24} />,
    internalLink: "/artifact/genai-training",
    isPlaceholder: false
  },
  {
    title: "Artifact 5: Explainable AI",
    status: "Implemented",
    desc: "Visualizing the challenges and solutions for making LLM decision-making processes transparent and trustworthy.",
    tech: ["React", "XAI Theory", "Framer Motion"],
    icon: <Eye className="text-emerald-500" size={24} />,
    internalLink: "/artifact/explainable-ai",
    isPlaceholder: false
  },
  {
    title: "Artifact 6: Model Selection",
    status: "Implemented",
    desc: "A Decision Matrix comparing trade-offs in Size, Accuracy, and Speed across NLP, Vision, and Tabular models.",
    tech: ["React", "Model Theory", "UI Design"],
    icon: <BarChart3 className="text-emerald-500" size={24} />,
    internalLink: "/artifact/model-selection",
    isPlaceholder: false
  }
];

export default function ArtifactsCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Bot className="text-emerald-500" size={20} />
          Artifacts & AI Bots
        </h3>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Selected Works</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        {artifacts.map((a, i) => {
          const Content = (
            <div 
              className={`h-full flex flex-col p-5 rounded-2xl border transition-all duration-300 ${
                a.isPlaceholder 
                  ? "bg-slate-100/50 border-slate-200/50 border-dashed cursor-default" 
                  : "bg-brand-card border-slate-200/50 hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              }`}
            >
              <div className="mb-4 flex justify-between items-start">
                <div className={`p-3 rounded-xl ${a.isPlaceholder ? "bg-slate-100" : "bg-emerald-50 text-emerald-600"}`}>
                  {a.icon}
                </div>
                {a.link && (
                  <a 
                    href={a.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
                {a.internalLink && (
                  <div className="p-2 rounded-lg bg-slate-50 text-slate-400">
                    <ArrowUpRight size={18} />
                  </div>
                )}
              </div>
              
              <h4 className={`text-sm font-bold mb-1 ${a.isPlaceholder ? "text-slate-400" : "text-slate-900"}`}>
                {a.title}
              </h4>
              <p className="text-[11px] text-slate-500 mb-4 leading-relaxed flex-grow">
                {a.desc}
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-50 flex flex-wrap gap-1.5">
                {a.tech.map(t => (
                  <span key={t} className="px-1.5 py-0.5 bg-slate-100 text-[10px] font-medium text-slate-400 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );

          if (a.internalLink) {
            return (
              <Link key={i} to={a.internalLink}>
                {Content}
              </Link>
            );
          }

          return <div key={i}>{Content}</div>;
        })}
      </div>
    </div>
  );
}
