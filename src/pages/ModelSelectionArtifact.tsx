import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Target, 
  MessageSquare, 
  Image as ImageIcon, 
  Table as TableIcon, 
  ArrowLeft,
  Info,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

const models = [
  {
    name: "GPT-4o",
    domain: "NLP / GenAI",
    size: "1.7T+ Params",
    accuracy: "State-of-the-Art",
    speed: "Slow (Cloud-Only)",
    explainability: "Low",
    sizeScore: 3, // Red (High)
    accScore: 1,  // Green (High)
    speedScore: 3, // Red (Slow)
    explScore: 3,  // Red (Low)
    desc: "A massive multimodal LLM. State-of-the-art for reasoning and generation but a complete 'black box' with heavy compute needs."
  },
  {
    name: "BERT-Base",
    domain: "NLP (Encoder)",
    size: "110M Params",
    accuracy: "High (Task-Specific)",
    speed: "Fast (CPU/GPU)",
    explainability: "Moderate",
    sizeScore: 2, // Yellow (Medium)
    accScore: 1,  // Green (High)
    speedScore: 1, // Green (Fast)
    explScore: 2,  // Yellow (Moderate)
    desc: "Bidirectional Encoder Representations from Transformers. Efficient for classification and search; attention maps provide some interpretability."
  },
  {
    name: "EfficientNet-B7",
    domain: "Computer Vision",
    size: "66M Params",
    accuracy: "Top-Tier",
    speed: "Moderate",
    explainability: "Low",
    sizeScore: 2, // Yellow
    accScore: 1,  // Green
    speedScore: 2, // Yellow
    explScore: 3,  // Red
    desc: "Optimized scaling for high-accuracy image classification. Highly effective but complex layered filters make internal logic opaque."
  },
  {
    name: "MobileNetV3",
    domain: "Computer Vision",
    size: "5.4M Params",
    accuracy: "Moderate/High",
    speed: "Ultra-Fast (Edge)",
    explainability: "Moderate",
    sizeScore: 1, // Green (Small)
    accScore: 2,  // Yellow (Moderate)
    speedScore: 1, // Green (Fast)
    explScore: 2,  // Yellow
    desc: "Designed for mobile and edge devices. Trades peak accuracy for extreme speed and low memory footprint."
  },
  {
    name: "XGBoost",
    domain: "Tabular Data",
    size: "KB to MB",
    accuracy: "Industry Leader",
    speed: "Instantaneous",
    explainability: "Very High",
    sizeScore: 1, // Green
    accScore: 1,  // Green
    speedScore: 1, // Green
    explScore: 1,  // Green (High)
    desc: "Extreme Gradient Boosting for structured data. Highly interpretable via feature importance and decision trees."
  }
];

const ModelSelectionArtifact: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const getScoreColor = (score: number) => {
    if (score === 1) return "bg-emerald-50 text-emerald-600 border-emerald-100";
    if (score === 2) return "bg-amber-50 text-amber-600 border-amber-100";
    return "bg-rose-50 text-rose-600 border-rose-100";
  };

  return (
    <div className="min-h-screen p-6 md:p-12 font-inter bg-brand-beige/30">
      {/* Navigation */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold uppercase tracking-widest mb-4">
          Artifact 6: Model Selection & Trade-offs
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
          The Decision <span className="text-emerald-600">Matrix</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
          Selecting an AI model is a balancing act of the "Iron Triangle": 
          <strong> Accuracy</strong>, <strong>Latency</strong>, and <strong>Computational Cost</strong>. 
          This matrix guides the selection process by analyzing trade-offs across diverse application domains.
        </p>
      </motion.header>

      {/* Decision Matrix Table Section */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto space-y-6"
      >
        <motion.div variants={item} className="bento-card overflow-hidden !p-0">
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <BarChart3 size={24} className="text-emerald-400" />
              Cross-Domain Decision Matrix
            </h2>
            <div className="flex gap-4 text-[10px] uppercase font-bold tracking-widest opacity-60">
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Optimal</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-400" /> Balanced</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-400" /> Intensive</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase font-black text-slate-400 tracking-widest">
                  <th className="px-6 py-4">Model Name</th>
                  <th className="px-6 py-4">Domain</th>
                  <th className="px-6 py-4">Model Size</th>
                  <th className="px-6 py-4">Accuracy</th>
                  <th className="px-6 py-4">Inference Speed</th>
                  <th className="px-6 py-4">Explainability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {models.map((model, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="font-black text-slate-900">{model.name}</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                        {model.domain === "NLP / GenAI" && <MessageSquare size={12} className="text-blue-500" />}
                        {model.domain.includes("Vision") && <ImageIcon size={12} className="text-pink-500" />}
                        {model.domain === "Tabular Data" && <TableIcon size={12} className="text-emerald-500" />}
                        {model.domain}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-black border ${getScoreColor(model.sizeScore)}`}>
                        {model.size}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-black border ${getScoreColor(model.accScore)}`}>
                        {model.accuracy}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-black border ${getScoreColor(model.speedScore)}`}>
                        {model.speed}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-black border ${getScoreColor(model.explScore)}`}>
                        {model.explainability}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Domain Analysis Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={item} className="bento-card flex flex-col group">
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-fit mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">NLP Domain</h3>
            <p className="text-xs text-slate-500 leading-relaxed flex-grow font-medium">
              Priority: High-dimensional semantic understanding. 
              Trade-off: Moving from local BERT-like models to cloud GPT models increases reasoning capability but exponentially raises cost and latency.
            </p>
          </motion.div>

          <motion.div variants={item} className="bento-card flex flex-col group">
            <div className="p-3 rounded-2xl bg-pink-50 text-pink-600 w-fit mb-4 group-hover:scale-110 transition-transform">
              <ImageIcon size={24} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Computer Vision</h3>
            <p className="text-xs text-slate-500 leading-relaxed flex-grow font-medium">
              Priority: Real-time spatial feature detection.
              Trade-off: MobileNet is optimal for edge/camera deployment, whereas EfficientNet dominates in precision for medical or research forensics.
            </p>
          </motion.div>

          <motion.div variants={item} className="bento-card flex flex-col group">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 w-fit mb-4 group-hover:scale-110 transition-transform">
              <TableIcon size={24} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Tabular Domain</h3>
            <p className="text-xs text-slate-500 leading-relaxed flex-grow font-medium">
              Priority: Structured pattern recognition and compliance.
              Trade-off: Deep learning is rarely used; boosted trees (XGBoost) provide superior accuracy and critical interpretability for audit trails.
            </p>
          </motion.div>
        </div>

        {/* Strategic Recommendations */}
        <motion.div variants={item} className="bento-card bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Scale size={200} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <Target className="text-emerald-400" />
                Strategic Recommendations
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start border-l-2 border-emerald-500 pl-6 py-2">
                  <div>
                    <h4 className="font-black text-emerald-400 uppercase tracking-widest text-[10px] mb-1">Scenario A: Edge Computing</h4>
                    <p className="text-sm text-slate-400 font-medium">Deploy <strong>MobileNetV3</strong> for real-time mobile app detection to minimize server costs and data transmission.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start border-l-2 border-blue-500 pl-6 py-2">
                  <div>
                    <h4 className="font-black text-blue-400 uppercase tracking-widest text-[10px] mb-1">Scenario B: High-Stake Reasoning</h4>
                    <p className="text-sm text-slate-400 font-medium">Utilize <strong>GPT-4o</strong> for complex legal or research tasks where accuracy outweighs speed constraints.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start border-l-2 border-purple-500 pl-6 py-2">
                  <div>
                    <h4 className="font-black text-purple-400 uppercase tracking-widest text-[10px] mb-1">Scenario C: Financial Compliance</h4>
                    <p className="text-sm text-slate-400 font-medium">Implement <strong>XGBoost</strong> for loan risk assessment, prioritizing high explainability for regulatory audits.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="font-black text-white flex items-center gap-2 mb-3 uppercase tracking-widest text-xs">
                  <Info size={16} className="text-emerald-400" />
                  Key Insight
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
                  "Accuracy alone is a dangerous metric. Without considering inference speed and model explainability, a highly accurate model may be undployable in real-world environments."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Summary */}
        <motion.div variants={item} className="text-center py-12">
          <p className="text-slate-400 text-xs uppercase tracking-widest font-black">
            End of Artifact 6 — NathanTempest Portfolio
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ModelSelectionArtifact;
