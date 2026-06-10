import React from "react";
import { motion } from "framer-motion";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import ArtifactsCard from "../components/ArtifactsCard";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Home: React.FC = () => {
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
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min"
      >
        {/* Profile / Intro Card */}
        <motion.div 
          variants={item}
          className="bento-card md:col-span-2 lg:col-span-2 flex flex-col justify-between"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Nathaniel Jason
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Full Stack Software Engineer specializing in backend systems, cloud-native development, and AI/ML integration. Currently leading technical efforts at Meta.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-auto">
            <a href="https://github.com/NathanTempest" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors">
              <Github size={20} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors">
              <Linkedin size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="mailto:nathaniel@example.com" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors">
              <Mail size={20} />
              <span className="text-sm font-medium">Email</span>
            </a>
            <div className="flex items-center gap-2 text-slate-500 ml-auto">
              <MapPin size={18} />
              <span className="text-sm">Remote / US</span>
            </div>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div variants={item} className="bento-card lg:col-span-1">
          <Skills />
        </motion.div>

        {/* Resume / Contact Mini Cards */}
        <motion.div variants={item} className="bento-card lg:col-span-1 flex flex-col justify-center items-center text-center group">
          <Resume />
        </motion.div>

        {/* Experience Card */}
        <motion.div variants={item} className="bento-card md:col-span-3 lg:col-span-2">
          <Experience />
        </motion.div>

        {/* Projects Card */}
        <motion.div variants={item} className="bento-card md:col-span-2 lg:col-span-2">
          <Projects />
        </motion.div>

        {/* Artifacts Card */}
        <motion.div variants={item} className="bento-card md:col-span-3 lg:col-span-3">
          <ArtifactsCard />
        </motion.div>

        {/* Education Card */}
        <motion.div variants={item} className="bento-card md:col-span-1 lg:col-span-1">
          <Education />
        </motion.div>

        {/* Contact Footer Card */}
        <motion.div variants={item} className="bento-card md:col-span-3 lg:col-span-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <Contact />
        </motion.div>
      </motion.div>
      
      <footer className="mt-12 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Nathaniel Jason. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
};

export default Home;
