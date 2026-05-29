import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Database, Cpu, Brain, Zap, Clock, Server, Layers } from "lucide-react";

const trainingSteps = [
  {
    title: "Data Acquisition",
    desc: "Curation of massive multi-modal datasets from web crawls, licensed books, and proprietary code repositories.",
    icon: <Database className="text-blue-500" size={24} />,
    color: "bg-blue-50"
  },
  {
    title: "Massive Pre-training",
    desc: "Self-supervised learning on thousands of GPUs to predict next tokens and learn fundamental world knowledge.",
    icon: <Cpu className="text-purple-500" size={24} />,
    color: "bg-purple-50"
  },
  {
    title: "Supervised Fine-Tuning",
    desc: "Refining the model on curated instruction datasets to follow specific user prompts and formatting.",
    icon: <Brain className="text-emerald-500" size={24} />,
    color: "bg-emerald-50"
  },
  {
    title: "Alignment (RLHF)",
    desc: "Using Reinforcement Learning from Human Feedback to align the model with human values and safety constraints.",
    icon: <Layers className="text-orange-500" size={24} />,
    color: "bg-orange-50"
  },
  {
    title: "Optimization & Deployment",
    desc: "Quantization, distillation, and scaling across global inference nodes for real-time user interaction.",
    icon: <Server className="text-slate-500" size={24} />,
    color: "bg-slate-50"
  }
];

const GenAITrainingArtifact: React.FC = () => {
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

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* Header Card */}
          <motion.div variants={item} className="bento-card lg:col-span-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">GenAI Training & Infrastructure</h1>
              <p className="text-slate-500 font-medium italic">Portfolio Artifact #4 — Training Processes & Resource Costs</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-bold text-sm">
              <BookOpen size={18} />
              Academic Assignment
            </div>
          </motion.div>

          {/* Context Card */}
          <motion.div variants={item} className="bento-card lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Artifact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Objective</p>
                <p className="text-slate-600">Illustrate the training pipeline and resource requirements for modern LLMs.</p>
              </div>
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Tech Stack</p>
                <p className="text-slate-600">React, Tailwind CSS, Framer Motion, Lucide Icons.</p>
              </div>
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Focus Areas</p>
                <p className="text-slate-600">Data, Compute, Energy, and Time costs.</p>
              </div>
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Relevance</p>
                <p className="text-slate-600">Critical for understanding the economic and environmental impact of AI.</p>
              </div>
            </div>
          </motion.div>

          {/* Training Pipeline Card */}
          <motion.div variants={item} className="bento-card lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Training Lifecycle</h2>
            <div className="space-y-4">
              {trainingSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start relative">
                  {idx !== trainingSteps.length - 1 && (
                    <div className="absolute left-[23px] top-10 w-[2px] h-[calc(100%-16px)] bg-slate-100" />
                  )}
                  <div className={`p-3 rounded-xl ${step.color} z-10 shrink-0`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GenAITrainingArtifact;
