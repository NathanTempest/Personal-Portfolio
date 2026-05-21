import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Network, Brain, Zap, Target, Settings, Cpu, Layers as LayersIcon, Sparkles } from "lucide-react";

const components = [
  {
    name: "Layers",
    desc: "The organizational structure of a network.",
    detail: "Neural networks consist of an Input Layer (receives data), Hidden Layers (perform computations), and an Output Layer (produces the result). Deep networks have many hidden layers.",
    icon: <LayersIcon className="text-blue-500" size={24} />,
    color: "bg-blue-50"
  },
  {
    name: "Neurons (Nodes)",
    desc: "The basic unit of computation.",
    detail: "Inspired by biological neurons, these nodes receive inputs, apply a mathematical operation, and pass the result forward if a certain threshold is met.",
    icon: <Cpu className="text-emerald-500" size={24} />,
    color: "bg-emerald-50"
  },
  {
    name: "Weights & Biases",
    desc: "The learnable parameters.",
    detail: "Weights determine the strength of the connection between neurons, while biases allow the model to shift the activation function. These are adjusted during training.",
    icon: <Settings className="text-orange-500" size={24} />,
    color: "bg-orange-50"
  },
  {
    name: "Activation Functions",
    desc: "Adding non-linearity.",
    detail: "Functions like ReLU, Sigmoid, or Tanh determine whether a neuron should 'fire'. Non-linearity allows the network to learn complex patterns beyond simple linear relationships.",
    icon: <Zap className="text-yellow-500" size={24} />,
    color: "bg-yellow-50"
  },
  {
    name: "Loss Functions",
    desc: "Measuring performance.",
    detail: "Also called cost functions, these quantify the difference between the model's prediction and the actual target. The goal of training is to minimize this loss.",
    icon: <Target className="text-rose-500" size={24} />,
    color: "bg-rose-50"
  },
  {
    name: "Optimization Algorithms",
    desc: "The learning engine.",
    detail: "Algorithms like Gradient Descent or Adam use the loss value to update the weights and biases, guiding the model toward the most accurate configuration.",
    icon: <Brain className="text-purple-500" size={24} />,
    color: "bg-purple-50"
  }
];

const NeuralNetworkArtifact: React.FC = () => {
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
    <div className="min-h-screen bg-brand-beige p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <div className="px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">
            Deep Learning Artifact
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {/* Main Title Card */}
          <motion.div variants={item} className="bento-card lg:col-span-4 bg-white">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Neural Network Architecture</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A visual breakdown of how computers learn to recognize patterns. This artifact explores the fundamental components that enable machines to simulate human-like cognition through deep learning.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="p-8 bg-emerald-50 rounded-3xl">
                  <Network size={80} className="text-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Diagram Section */}
          <motion.div variants={item} className="bento-card lg:col-span-4 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles size={200} />
            </div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="text-emerald-400" />
              Visualizing Information Flow
            </h2>
            
            <div className="flex flex-col md:flex-row justify-around items-center gap-12 py-12 relative">
              {/* Connection Lines (Conceptual) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 hidden md:flex">
                <div className="w-2/3 h-px bg-gradient-to-r from-blue-400 via-emerald-400 to-rose-400"></div>
              </div>

              {/* Input Layer */}
              <div className="z-10 text-center group">
                <div className="w-24 h-24 rounded-2xl bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  <div className="flex flex-col gap-2">
                    <div className="w-8 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-8 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
                <p className="font-bold">Input Layer</p>
                <p className="text-xs text-slate-400">Raw Data</p>
              </div>

              {/* Hidden Layer 1 */}
              <div className="z-10 text-center group">
                <div className="w-32 h-40 rounded-3xl bg-emerald-500/20 border-2 border-emerald-400 flex flex-wrap gap-2 p-4 items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-emerald-400 shadow-sm animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
                <p className="font-bold">Hidden Layers</p>
                <p className="text-xs text-slate-400">Feature Extraction</p>
              </div>

              {/* Output Layer */}
              <div className="z-10 text-center group">
                <div className="w-24 h-24 rounded-2xl bg-rose-500/20 border-2 border-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-rose-500/20">
                  <Target size={32} className="text-rose-400" />
                </div>
                <p className="font-bold">Output Layer</p>
                <p className="text-xs text-slate-400">Prediction</p>
              </div>
            </div>
            
            <p className="text-center text-sm text-slate-400 mt-8">
              Data flows forward (Inference) and errors flow backward (Backpropagation) to refine the parameters.
            </p>
          </motion.div>

          {/* Component Breakdown Grid */}
          <motion.div variants={item} className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((comp, i) => (
              <div key={i} className="bento-card hover:border-emerald-200 transition-all flex flex-col group">
                <div className={`p-3 rounded-xl w-fit mb-4 ${comp.color}`}>
                  {comp.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{comp.name}</h3>
                <p className="text-sm font-semibold text-emerald-600 mb-3">{comp.desc}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{comp.detail}</p>
              </div>
            ))}
          </motion.div>

          {/* Summary / Reflection Card */}
          <motion.div variants={item} className="bento-card lg:col-span-4 border-t-4 border-emerald-500">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Key Insights & Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-sm text-slate-600 leading-relaxed">
                Visualizing neural networks is essential because it demystifies the "black box" of AI. By practicing in the Neural Network Playground, I observed how increasing noise required more hidden layers to maintain accuracy, and how different activation functions like ReLU accelerated training compared to Sigmoid. 
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                The most important insight was the relationship between loss functions and optimization: without a clear metric for error (Loss) and a robust way to update weights (Optimizer), a network cannot learn. These components work in a delicate symphony to transform raw data into intelligent action.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NeuralNetworkArtifact;
