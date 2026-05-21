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

const NeuralNetworkGraph = () => {
  const inputNodes = [100, 200, 300];
  const hiddenNodes = [60, 130, 200, 270, 340];
  const outputNodes = [150, 250];

  const xInput = 100;
  const xHidden = 400;
  const xOutput = 700;

  return (
    <div className="w-full overflow-x-auto py-8">
      <svg viewBox="0 0 800 400" className="w-full min-w-[600px] h-auto">
        {/* Connection Lines: Input to Hidden */}
        {inputNodes.map((iy) =>
          hiddenNodes.map((hy, idx) => (
            <motion.line
              key={`ih-${iy}-${hy}`}
              x1={xInput}
              y1={iy}
              x2={xHidden}
              y2={hy}
              stroke="rgba(52, 211, 153, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: idx * 0.05 }}
            />
          ))
        )}

        {/* Connection Lines: Hidden to Output */}
        {hiddenNodes.map((hy) =>
          outputNodes.map((oy, idx) => (
            <motion.line
              key={`ho-${hy}-${oy}`}
              x1={xHidden}
              y1={hy}
              x2={xOutput}
              y2={oy}
              stroke="rgba(52, 211, 153, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + idx * 0.05 }}
            />
          ))
        )}

        {/* Animated Pulses */}
        {[...Array(12)].map((_, i) => {
          const startNode = inputNodes[i % inputNodes.length];
          const midNode = hiddenNodes[Math.floor(Math.random() * hiddenNodes.length)];
          const endNode = outputNodes[Math.floor(Math.random() * outputNodes.length)];
          
          return (
            <g key={`pulse-${i}`}>
              <motion.circle
                r="3"
                fill="#10b981"
                initial={{ cx: xInput, cy: startNode, opacity: 0 }}
                animate={{ 
                  cx: [xInput, xHidden, xOutput], 
                  cy: [startNode, midNode, endNode],
                  opacity: [0, 1, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />
            </g>
          );
        })}

        {/* Input Nodes */}
        {inputNodes.map((y, i) => (
          <g key={`in-${i}`}>
            <motion.circle
              cx={xInput}
              cy={y}
              r="12"
              fill="#3b82f6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="shadow-lg"
            />
            {i === 0 && <text x={xInput} y={y - 25} textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">Input Layer</text>}
          </g>
        ))}

        {/* Hidden Nodes */}
        {hiddenNodes.map((y, i) => (
          <g key={`hid-${i}`}>
            <motion.circle
              cx={xHidden}
              cy={y}
              r="12"
              fill="#10b981"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            />
            {i === 0 && <text x={xHidden} y={y - 25} textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">Hidden Layers</text>}
          </g>
        ))}

        {/* Output Nodes */}
        {outputNodes.map((y, i) => (
          <g key={`out-${i}`}>
            <motion.circle
              cx={xOutput}
              cy={y}
              r="12"
              fill="#f43f5e"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            />
            {i === 0 && <text x={xOutput} y={y - 25} textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">Output Layer</text>}
          </g>
        ))}
      </svg>
    </div>
  );
};

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
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Sparkles size={200} />
            </div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Sparkles className="text-emerald-400" />
              Information Flow & Architecture
            </h2>
            <p className="text-slate-400 text-sm mb-8 max-w-2xl">
              This diagram illustrates a Multilayer Perceptron (MLP) structure. Data flows from left to right during inference, with each connection representing a weight that transforms the signal.
            </p>
            
            <NeuralNetworkGraph />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-xs font-medium text-slate-300">Input: Features / Data</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-medium text-slate-300">Hidden: Computation & Nonlinearity</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <span className="text-xs font-medium text-slate-300">Output: Predictions / Classifications</span>
              </div>
            </div>
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
