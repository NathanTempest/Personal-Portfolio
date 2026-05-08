import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Brain, Database, Cpu, MessageSquare, Image, Sparkles } from "lucide-react";

const algorithms = [
  {
    name: "Linear Regression",
    type: "Supervised",
    domain: "Tabular Data",
    useCase: "Predicting house prices or sales trends.",
    explanation: "Models the linear relationship between a dependent variable and one or more independent variables.",
    icon: <Database className="text-blue-500" size={24} />
  },
  {
    name: "Random Forest",
    type: "Supervised",
    domain: "Tabular Data",
    useCase: "Credit scoring or customer churn prediction.",
    explanation: "An ensemble of decision trees that improves classification/regression accuracy by averaging results.",
    icon: <Database className="text-emerald-500" size={24} />
  },
  {
    name: "K-Means Clustering",
    type: "Unsupervised",
    domain: "Tabular Data",
    useCase: "Market segmentation or organizing documents.",
    explanation: "Partitions data into K distinct clusters based on feature similarity.",
    icon: <Database className="text-purple-500" size={24} />
  },
  {
    name: "CNN (Convolutional Neural Networks)",
    type: "Supervised",
    domain: "Computer Vision",
    useCase: "Facial recognition or medical image analysis.",
    explanation: "Uses specialized layers to automatically and adaptively learn spatial hierarchies of features from images.",
    icon: <Image className="text-pink-500" size={24} />
  },
  {
    name: "YOLO (You Only Look Once)",
    type: "Supervised",
    domain: "Computer Vision",
    useCase: "Self-driving cars or real-time surveillance.",
    explanation: "A fast, real-time object detection system that treats detection as a single regression problem.",
    icon: <Cpu className="text-red-500" size={24} />
  },
  {
    name: "LSTM (Long Short-Term Memory)",
    type: "Supervised",
    domain: "NLP",
    useCase: "Time-series forecasting or speech recognition.",
    explanation: "A type of RNN capable of learning long-term dependencies, perfect for sequential data.",
    icon: <MessageSquare className="text-yellow-500" size={24} />
  },
  {
    name: "Transformers (BERT/GPT)",
    type: "Self-Supervised",
    domain: "NLP / GenAI",
    useCase: "Translation, summarization, or chatbots.",
    explanation: "Utilizes 'attention' mechanisms to process entire sequences of data in parallel, capturing deep context.",
    icon: <Brain className="text-cyan-500" size={24} />
  },
  {
    name: "GANs (Generative Adversarial Networks)",
    type: "Unsupervised",
    domain: "Generative AI",
    useCase: "Creating synthetic data or deepfake generation.",
    explanation: "Two neural networks (Generator and Discriminator) compete to create realistic new data.",
    icon: <Sparkles className="text-orange-500" size={24} />
  },
  {
    name: "VAEs (Variational Autoencoders)",
    type: "Unsupervised",
    domain: "Generative AI",
    useCase: "Image denoising or latent space exploration.",
    explanation: "Generative models that learn a probabilistic mapping between input data and a latent space.",
    icon: <Sparkles className="text-indigo-500" size={24} />
  },
  {
    name: "Diffusion Models",
    type: "Generative",
    domain: "Generative AI",
    useCase: "High-quality art generation (Midjourney, DALL-E).",
    explanation: "Learns to generate data by gradually reversing a controlled noise-addition process.",
    icon: <Sparkles className="text-rose-500" size={24} />
  }
];

const MLFrameworkArtifact: React.FC = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">ML Algorithm Visual Framework</h1>
              <p className="text-slate-500 font-medium italic">Portfolio Artifact #3 — Comprehensive Algorithm Classification</p>
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
                <p className="text-slate-600">Illustrate key ML algorithm types and their application domains clearly.</p>
              </div>
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Tech Stack</p>
                <p className="text-slate-600">React, Tailwind CSS, Framer Motion, Lucide Icons.</p>
              </div>
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Unique Value</p>
                <p className="text-slate-600">Bridging classical ML with modern Generative AI paradigms.</p>
              </div>
              <div>
                <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Relevance</p>
                <p className="text-slate-600">Critical for selecting the right model for real-world engineering challenges.</p>
              </div>
            </div>
          </motion.div>

          {/* Reflection Card */}
          <motion.div variants={item} className="bento-card lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Personal Reflection</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Developing this framework reinforced my understanding of the vast AI landscape. Moving from classical supervised methods like Linear Regression to the cutting-edge stochastic nature of Diffusion Models highlights the incredible pace of the industry. This journey emphasizes that while architectures evolve, the fundamental goal remains the same: transforming complex data into actionable intelligence. My growth through this program is centered on being able to bridge these theoretical foundations with practical, scalable software engineering.
            </p>
          </motion.div>

          {/* Visual Framework Grid */}
          <motion.div variants={item} className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {algorithms.map((alg, i) => (
              <div key={i} className="bento-card hover:border-emerald-200 transition-colors flex flex-col">
                <div className="mb-4">{alg.icon}</div>
                <h3 className="font-bold text-slate-900 mb-1">{alg.name}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded uppercase">{alg.type}</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-600 rounded uppercase">{alg.domain}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-4 flex-grow">{alg.explanation}</p>
                <div className="pt-3 border-t border-slate-50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Use Case</p>
                  <p className="text-[10px] font-medium text-slate-600">{alg.useCase}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MLFrameworkArtifact;
