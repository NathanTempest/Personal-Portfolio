import React from "react";  
import { FaReact, FaJava, FaPython, FaAws, FaDatabase, FaBrain } from "react-icons/fa";  
import Experience from "./components/Experience";  
import Projects from "./components/Projects";  
import Skills from "./components/Skills";  
import Education from "./components/Education";  
import ArtifactsCard from "./components/ArtifactsCard";  
import Contact from "./components/Contact";  
import Resume from "./components/Resume";  

const App: React.FC = () => {  
  return (  
    <div className="bg-black text-gray-200 min-h-screen font-sans">  
      {/* Navbar */}  
      <nav className="flex justify-between items-center p-6 fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">  
        <div className="text-2xl font-bold text-pink-500">Nathaniel Jason</div>  
        <div className="space-x-4">  
          {["about", "experience", "projects", "skills", "artifacts", "contact", "resume"].map((id) => (  
            <button  
              key={id}  
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}  
              className="text-pink-500 hover:text-pink-400 transition"  
            >  
              {id.charAt(0).toUpperCase() + id.slice(1)}  
            </button>  
          ))}  
        </div>  
      </nav>  

      {/* About Me */}  
      <section  
        id="about"  
        className="p-12 pt-32 flex flex-col md:flex-row gap-6 hover:scale-105 transition-transform duration-300"  
      >  
        <div className="max-w-xl">  
          <h2 className="text-4xl font-bold text-pink-500 mb-4">About Me</h2>  
          <p className="text-gray-300">  
            Full Stack Software Engineer with 5+ years of experience in backend and distributed systems. Skilled in Java (Spring Boot), Python, React.js, and cloud-native development (AWS). Passionate about modernizing legacy platforms, building scalable applications, and applying AI/ML technologies to real-world problems.  
          </p>  
        </div>  
        <div className="flex gap-4 text-pink-500 text-4xl self-start mt-2 md:mt-0">  
          <FaReact />  
          <FaJava />  
          <FaPython />  
          <FaAws />  
          <FaDatabase />  
          <FaBrain />  
        </div>  
      </section>  

      {/* Modular Components */}  
      <Experience />  
      <Projects />  
      <Skills />  
      <Education />  
      <ArtifactsCard />  
      <Contact />  
      <Resume />  
    </div>  
  );  
};  

export default App;  