import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  AlertTriangle, 
  Zap, 
  CheckCircle, 
  MessageSquare, 
  Layers, 
  Scale, 
  Activity, 
  ChevronLeft,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const XAIArtifact: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen p-6 md:p-12 font-inter">
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
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold uppercase tracking-widest mb-4">
          Artifact 5: Explainability & Trust
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Explainable AI <span className="text-emerald-600">(XAI)</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
          As AI models transition from laboratory experiments to critical infrastructure in healthcare, 
          finance, and law, the "Black Box" problem becomes a liability. XAI is the bridge between 
          computational complexity and human trust.
        </p>
      </motion.header>

      {/* Bento Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6"
      >
        {/* Definition & Importance */}
        <motion.div 
          variants={item}
          className="md:col-span-4 bento-card flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
            <Eye size={120} className="text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Eye className="text-emerald-600" />
            The Core Objective
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The fundamental goal of XAI is to make the outputs and decision-making processes of AI models 
            transparent and understandable to human stakeholders. It ensures that model behavior can 
            be verified, audited, and corrected.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="text-emerald-600 font-bold text-sm mb-1">Human Trust</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">Allowing users to rely on AI for critical medical or financial decisions.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="text-emerald-600 font-bold text-sm mb-1">Accountability</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">Providing clear trails for regulatory compliance and legal responsibility.</p>
            </div>
          </div>
        </motion.div>

        {/* The Black Box Problem */}
        <motion.div 
          variants={item}
          className="md:col-span-2 bento-card flex flex-col relative overflow-hidden group border-amber-100 bg-amber-50/30"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 text-amber-600">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">The "Black Box" Problem</h2>
          <div className="space-y-6 flex-grow">
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-amber-500" 
                />
              </div>
              <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400">
                <span>Model Complexity</span>
                <span className="text-amber-600">90% Opacity</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              LLMs utilize billions of parameters. Their reasoning is non-linear and distributed, 
              making it impossible to "read" the decision path like a standard algorithm.
            </p>
            <ul className="text-[11px] space-y-2 text-slate-500 font-medium">
              <li className="flex gap-2 items-center"><ArrowRight size={12} className="text-amber-500" /> Distributed Parameters</li>
              <li className="flex gap-2 items-center"><ArrowRight size={12} className="text-amber-500" /> Non-Linear Reasoning</li>
              <li className="flex gap-2 items-center"><ArrowRight size={12} className="text-amber-500" /> Emergent Behaviors</li>
            </ul>
          </div>
        </motion.div>

        {/* Current Techniques */}
        <motion.div 
          variants={item}
          className="md:col-span-3 bento-card bg-emerald-50/50 border-emerald-100 group"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
            <Zap className="text-emerald-600" />
            Industry Techniques
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 transition-colors shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <MessageSquare size={16} className="text-emerald-600" />
                Chain-of-Thought (CoT)
              </h3>
              <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                Prompting models to show step-by-step reasoning before arriving at a final answer. 
                Used by OpenAI and Anthropic to inspect "internal logic."
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 transition-colors shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <Layers size={16} className="text-emerald-600" />
                Attention Visualization
              </h3>
              <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                Heatmaps showing which tokens the model "paid attention to" when generating a specific word. 
                Reveals the influence of specific data points.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 transition-colors shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <Scale size={16} className="text-emerald-600" />
                Post-Hoc Probing
              </h3>
              <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                Creating smaller surrogate models (like LIME or SHAP) to approximate how 
                the larger model weights specific features.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Validation & Metrics */}
        <motion.div 
          variants={item}
          className="md:col-span-3 bento-card bg-indigo-50/50 border-indigo-100 group"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
            <Activity className="text-indigo-600" />
            Validation & Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-indigo-100 flex flex-col shadow-sm">
              <div className="text-3xl font-black text-indigo-600 mb-2">F1</div>
              <h3 className="font-bold text-slate-900 text-xs mb-1 uppercase tracking-wider">Precision/Recall</h3>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                Balancing true positives vs. false alarms in classification tasks.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-indigo-100 flex flex-col shadow-sm">
              <div className="text-3xl font-black text-indigo-600 mb-2">H-Rate</div>
              <h3 className="font-bold text-slate-900 text-xs mb-1 uppercase tracking-wider">Hallucination</h3>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                Measuring frequency of factual errors and fabricated information.
              </p>
            </div>
            <div className="sm:col-span-2 p-5 rounded-2xl bg-white border border-indigo-100 flex items-center gap-4 shadow-sm">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">RLHF (Human-in-the-Loop)</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">Reinforcement Learning from Human Feedback ensures alignment with human values.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-indigo-100/50">
            <p className="text-xs text-slate-500 font-bold italic text-center">
              "Validation is the shield against model hallucination and bias."
            </p>
          </div>
        </motion.div>

        {/* Summary Footer */}
        <motion.div 
          variants={item}
          className="md:col-span-6 bento-card text-center bg-slate-50/50 border-dashed"
        >
          <p className="text-slate-600 text-sm max-w-3xl mx-auto italic font-medium">
            XAI is not just about understanding why a model failed; it's about building systems 
            robust enough to prevent failure. Transparency is the prerequisite for progress.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default XAIArtifact;
