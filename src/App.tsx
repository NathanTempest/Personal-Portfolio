import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  Code,
  Wrench,
  Brain,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Brain },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "ai-ml", label: "AI & ML", icon: Brain },
    { id: "projects", label: "Projects", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const experiences = [
    {
      company: "Boeing",
      role: "Full Stack Software Engineer",
      location: "Seattle, WA",
      dates: "Jan 2024 – Jul 2025",
      description:
        "Modernized legacy Java apps into containerized Spring Boot microservices; implemented CI/CD pipelines; enhanced observability.",
      projects: [
        "Legacy Flight Booking App modernization with Spring Boot + React",
        "Contract applications for airlines (Delta, Southwest)",
        "Monitoring dashboards with Prometheus/Grafana",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "Kubernetes",
        "Docker",
        "GitHub Actions",
        "Terraform",
      ],
      impact: "Improved scalability and deployment velocity; reduced MTTR by 30%",
    },
    {
      company: "Amazon Web Services",
      role: "Software Development Engineer",
      location: "Boston, MA",
      dates: "Sep 2022 – Nov 2023",
      description:
        "Built highly available microservices; migrated REST APIs to GraphQL; developed ETL pipelines.",
      projects: [
        "Fast Snapshot Restore APIs transition to Step Functions",
        "Advertising Data Pipeline with GraphQL",
        "API performance & latency dashboards",
      ],
      technologies: ["Java", "Python", "AWS ECS", "Lambda", "GraphQL", "Kafka", "SQS", "Airflow"],
      impact: "Reduced API latency by 60%; accelerated deployments by 40%",
    },
    {
      company: "Zomato",
      role: "Data Engineering Intern",
      location: "Hyderabad, India",
      dates: "Jan 2020 – Jun 2020",
      description:
        "Built Python/Airflow pipelines and dashboards; reduced latency for analytics.",
      projects: [
        "Clickstream and transaction data pipelines",
        "Real-time analytics dashboards",
      ],
      technologies: ["Python", "Airflow", "MongoDB", "React", "REST APIs"],
      impact: "Reduced dashboard latency by 25%",
    },
  ];

  const education = [
    {
      degree: "M.S. in Computer Science & AI",
      school: "Indiana Wesleyan University",
      dates: "Aug 2025 - Present",
      status: "Ongoing",
      focus: "Advanced AI/ML algorithms, Deep Learning, Natural Language Processing",
    },
    {
      degree: "M.S. in Data Science & Machine Learning",
      school: "University at Buffalo",
      dates: "Jul 2021 - Aug 2022",
      focus: "Statistical modeling, Machine Learning, Big Data Analytics",
    },
    {
      degree: "B.S. in Computer Science",
      school: "Sreenidhi University",
      dates: "Jun 2016 - May 2020",
      focus: "Software Engineering, Algorithms, Database Systems",
    },
  ];

  const aiExperience = {
    overview:
      "Passionate about leveraging AI and Machine Learning to solve real-world problems. Currently pursuing advanced studies in AI while applying practical ML techniques in production environments.",
    tools: [
      { name: "OpenAI GPT", proficiency: "Advanced", use: "Building conversational AI applications" },
      { name: "Claude (Anthropic)", proficiency: "Advanced", use: "Code generation, technical analysis" },
      { name: "TensorFlow", proficiency: "Intermediate", use: "Deep learning model development" },
      { name: "PyTorch", proficiency: "Intermediate", use: "Neural network training and deployment" },
      { name: "Scikit-learn", proficiency: "Advanced", use: "Traditional ML algorithms and pipelines" },
      { name: "Langchain", proficiency: "Intermediate", use: "LLM application development" },
      { name: "Hugging Face", proficiency: "Intermediate", use: "Pre-trained model fine-tuning" },
    ],
    projects: [
      {
        title: "Soccer Pundit AI Chatbot",
        description:
          "Developed an AI-powered football analysis chatbot using OpenAI's GPT models with FastAPI backend. Provides real-time match analysis, player statistics, and tactical insights.",
        technologies: ["OpenAI GPT", "FastAPI", "Python", "REST APIs"],
        features: ["Real-time match analysis", "Natural language processing", "Statistical insights", "Conversational interface"],
        link: "https://github.com/NathanTempest",
      },
      {
        title: "Predictive Analytics Pipeline",
        description:
          "Implemented ML models for predictive maintenance and anomaly detection in production systems at AWS using ensemble methods and time-series forecasting.",
        technologies: ["Python", "Scikit-learn", "AWS SageMaker", "Apache Airflow"],
        features: ["Time-series forecasting", "Anomaly detection", "Automated retraining", "Model monitoring"],
      },
      {
        title: "NLP-Driven Log Analysis",
        description:
          "Built an intelligent log analysis system that uses NLP techniques to categorize, cluster, and extract insights from millions of application logs.",
        technologies: ["Python", "spaCy", "TensorFlow", "Elasticsearch"],
        features: ["Text classification", "Entity recognition", "Pattern detection", "Automated alerting"],
      },
    ],
    learningJourney: [
      "Completed Andrew Ng's Machine Learning Specialization (Coursera)",
      "Deep Learning Specialization focusing on CNNs and RNNs",
      "Active participation in Kaggle competitions and open-source ML projects",
      "Currently exploring Large Language Models and prompt engineering techniques",
    ],
  };

  const projects = [
    {
      title: "Legacy Flight Booking System Modernization",
      description:
        "Transformed monolithic Java applications into containerized Spring Boot microservices deployed on Kubernetes (EKS). Designed secure REST and GraphQL APIs with Oracle/Postgres backends, implementing role-based access control and query optimization.",
      tech: ["Spring Boot", "Kubernetes", "Docker", "GraphQL", "Oracle", "PostgreSQL", "Java"],
      company: "Boeing",
      architecture:
        "Microservices architecture with API Gateway, Service Mesh, and distributed caching",
    },
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Built comprehensive CI/CD pipelines using GitHub Actions, Helm, and Terraform to automate infrastructure provisioning and application deployments. Implemented automated testing with JUnit, Mockito, and Selenium achieving 90% test coverage.",
      tech: ["GitHub Actions", "Terraform", "Helm", "Jenkins", "JUnit", "Mockito", "Selenium"],
      company: "Boeing & AWS",
      architecture: "GitOps workflow with infrastructure as code and blue-green deployments",
    },
    {
      title: "Real-Time Analytics Platform",
      description:
        "Built Python/Airflow pipelines for processing clickstream and transaction data with enforced task dependencies and SLAs. Designed MongoDB schemas for real-time data ingestion, reducing dashboard latency by 25%. Created React dashboards integrated with REST APIs.",
      tech: ["Python", "Apache Airflow", "MongoDB", "React", "REST APIs"],
      company: "Zomato",
      architecture: "Lambda architecture with batch and stream processing layers",
    },
  ];

  const skills = [
    { category: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "Backend", items: ["Spring Boot", "Flask", "Node.js", "REST", "GraphQL", "Microservices", "TDD"] },
    { category: "Frontend", items: ["React.js", "Flutter", "HTML5", "CSS3", "Tailwind", "Redux"] },
    { category: "AI & ML", items: ["OpenAI GPT", "TensorFlow", "PyTorch", "Scikit-learn", "Langchain", "Hugging Face", "NLP"] },
    { category: "Databases", items: ["Oracle", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB"] },
    { category: "Cloud & DevOps", items: ["AWS Lambda/ECS/S3/CloudWatch", "Docker", "Kubernetes", "Terraform", "Helm", "GitHub Actions", "Jenkins"] },
    { category: "Messaging & Observability", items: ["Kafka", "SQS", "RabbitMQ", "Splunk", "Prometheus/Grafana"] },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 min-h-screen">
  
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Brain className="text-blue-400" size={28} />
            <span className="text-xl font-bold">Nathaniel Jason</span>
          </div>
          <nav className="flex items-center space-x-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-sm ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800"
                  }`}
                  onClick={() => scrollToSection(tab.id)}
                >
                  <Icon size={16} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>
  
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="max-w-7xl mx-auto px-6 py-32 relative text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-4">
            Software Engineer • AI/ML Enthusiast • Cloud Architect
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nathaniel Jason
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 font-light max-w-4xl mx-auto">
            Building scalable, data-driven systems that enhance reliability and performance in enterprise environments
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Full Stack Software Engineer with expertise in microservices architecture, cloud computing, and AI/ML applications. 
            Experienced in modernizing legacy systems, implementing CI/CD pipelines, and leveraging artificial intelligence 
            to solve complex business problems at scale.
          </p>
  
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all"
            >
              <span>View My Work</span>
              <ChevronDown size={20} />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center space-x-2 px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700 transition-all"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </button>
            <a
              href="https://github.com/NathanTempest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700 transition-all"
            >
              <Github size={20} />
              <span>GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="text-3xl font-bold text-blue-400">5+</div>
              <div className="text-sm text-slate-400 mt-2">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-sm text-slate-400 mt-2">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="text-3xl font-bold text-pink-400">3</div>
              <div className="text-sm text-slate-400 mt-2">Major Companies</div>
            </div>
            <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="text-3xl font-bold text-cyan-400">7+</div>
              <div className="text-sm text-slate-400 mt-2">AI/ML Tools</div>
            </div>
          </div>
        </div>
      </section>
  
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
  
        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-6 border border-blue-700 rounded-xl bg-slate-900/50 hover:scale-[1.01] transition-transform duration-300">
                <h3 className="text-xl font-semibold text-blue-400">{exp.company}</h3>
                <p className="text-slate-300 mt-1">{exp.role}</p>
                <p className="text-slate-400 mt-1">{exp.location} • {exp.dates}</p>
                <p className="mt-2 text-slate-300">{exp.description}</p>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mt-3">
                  <p className="text-green-300 text-sm">Impact: {exp.impact}</p>
                </div>
                <p className="text-slate-400 mt-2 text-sm font-semibold">Key Projects:</p>
                <ul className="list-disc list-inside text-slate-300">
                  {exp.projects.map((proj, i) => (
                    <li key={i}>{proj}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 text-xs border border-blue-500 rounded-full text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* AI/ML Section */}
        <section id="ai-ml">
          <h2 className="text-4xl font-bold mb-8 text-purple-400">AI & Machine Learning</h2>
          <p className="text-slate-400 mb-6">{aiExperience.overview}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {aiExperience.tools.map((tool, idx) => (
              <div key={idx} className="p-4 border border-purple-500 rounded-xl bg-slate-900/50 hover:scale-[1.01] transition-transform duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-slate-100 font-semibold">{tool.name}</h4>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    tool.proficiency === "Advanced"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}>{tool.proficiency}</span>
                </div>
                <p className="text-slate-400 text-sm">{tool.use}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6 mt-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">AI/ML Projects</h3>
            {aiExperience.projects.map((proj, idx) => (
              <div key={idx} className="p-6 border border-purple-700 rounded-xl bg-slate-900/50 hover:scale-[1.01] transition-transform duration-300">
                <h4 className="text-lg font-semibold text-purple-400">{proj.title}</h4>
                <p className="text-slate-300 mt-2">{proj.description}</p>
                {proj.features && (
                  <ul className="mt-2 text-slate-400 text-sm list-disc list-inside">
                    {proj.features.map((f, fIdx) => (
                      <li key={fIdx}>{f}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 text-xs border border-purple-500 rounded-full text-purple-300">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-4xl font-bold mb-8 text-pink-400">Projects</h2>
          <div className="space-y-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="p-6 border border-pink-700 rounded-xl bg-slate-900/50 hover:scale-[1.01] transition-transform duration-300">
                <h3 className="text-xl font-semibold text-pink-400">{proj.title}</h3>
                <p className="text-slate-300 mt-2">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {proj.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 text-xs border border-pink-500 rounded-full text-pink-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm text-slate-400 italic">Architecture: {proj.architecture}</p>
                <p className="mt-1 text-sm text-slate-400">Company: {proj.company}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Education Section */}
        <section id="education">
          <h2 className="text-4xl font-bold mb-8 text-green-400">Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="p-6 border border-green-700 rounded-xl bg-slate-900/50 hover:scale-[1.01] transition-transform duration-300">
                <h3 className="text-xl font-semibold text-green-400">{edu.degree}</h3>
                <p className="text-slate-300 mt-1">{edu.school}</p>
                <p className="text-slate-400 mt-1">{edu.dates} {edu.status ? `• ${edu.status}` : ""}</p>
                <p className="mt-2 text-slate-400 italic">{edu.focus}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Skills Section */}
        <section id="skills">
          <h2 className="text-4xl font-bold mb-8 text-yellow-400">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-6 border border-yellow-700 rounded-xl bg-slate-900/50 hover:scale-[1.01] transition-transform duration-300">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="px-2 py-1 text-xs border border-yellow-500 rounded-full text-yellow-300">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Contact</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-slate-300">
              I’m always open to discussing new opportunities, collaborations, or AI/ML projects. Reach out via email or LinkedIn!
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="mailto:nishanthjason@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:shadow-lg transition">
                <Mail size={20} /> Email
              </a>
              <a href="tel:716-463-9623" className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:shadow-lg transition">
                <Phone size={20} /> Call
              </a>
              <a href="https://www.linkedin.com/in/nishanthjason/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-700 rounded-lg text-white font-semibold hover:shadow-lg transition">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="https://github.com/NathanTempest" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white font-semibold hover:bg-slate-700 transition">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
        </section>
  
      </main>
  
      {/* Footer */}
      <footer className="py-6 mt-12 border-t border-slate-800 text-center text-slate-400">
        &copy; {new Date().getFullYear()} Nathaniel Jason. All rights reserved.
      </footer>
  
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
      `}</style>
  
    </div>
  );
  };

  export default App;