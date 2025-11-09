import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Briefcase, GraduationCap, Code, Rocket, Wrench, Brain, ChevronDown, ExternalLink } from "lucide-react";

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
    if (sectionId !== "home") {
      setTimeout(() => {
        window.scrollTo({ top: 600, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      company: "Boeing",
      role: "Full Stack Software Engineer",
      location: "Seattle, WA",
      dates: "Jan 2024 – Jul 2025",
      description:
        "Modernized legacy Java apps to containerized Spring Boot microservices; implemented CI/CD pipelines; enhanced observability.",
      projects: [
        "Legacy Flight Booking App modernization with Spring Boot + React",
        "Contract applications for airlines (Delta, Southwest)",
        "Monitoring dashboards with Prometheus/Grafana",
      ],
      technologies: ["Java", "Spring Boot", "React", "Kubernetes", "Docker", "GitHub Actions", "Terraform"],
      impact: "Improved scalability and deployment velocity; reduced MTTR by 30%"
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
      impact: "Reduced API latency by 60%; accelerated deployments by 40%"
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
      impact: "Reduced dashboard latency by 25%"
    },
  ];

  const education = [
    {
      degree: "M.S. in Computer Science & AI",
      school: "Indiana Wesleyan University",
      dates: "Aug 2025 - Present",
      status: "Ongoing",
      focus: "Advanced AI/ML algorithms, Deep Learning, Natural Language Processing"
    },
    {
      degree: "M.S. in Data Science & Machine Learning",
      school: "University at Buffalo",
      dates: "Jul 2021 - Aug 2022",
      focus: "Statistical modeling, Machine Learning, Big Data Analytics"
    },
    {
      degree: "B.S. in Computer Science",
      school: "Sreenidhi University",
      dates: "Jun 2016 - May 2020",
      focus: "Software Engineering, Algorithms, Database Systems"
    },
  ];

  const aiExperience = {
    overview: "Passionate about leveraging AI and Machine Learning to solve real-world problems. Currently pursuing advanced studies in AI while applying practical ML techniques in production environments.",
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
        description: "Developed an AI-powered football analysis chatbot using OpenAI's GPT models with FastAPI backend. The system provides real-time match analysis, player statistics, and tactical insights through natural language conversations.",
        technologies: ["OpenAI GPT", "FastAPI", "Python", "REST APIs"],
        features: ["Real-time match analysis", "Natural language processing", "Statistical insights", "Conversational interface"],
        link: "https://github.com/NathanTempest"
      },
      {
        title: "Predictive Analytics Pipeline",
        description: "Implemented machine learning models for predictive maintenance and anomaly detection in production systems at AWS. Used ensemble methods and time-series forecasting to predict system failures.",
        technologies: ["Python", "Scikit-learn", "AWS SageMaker", "Apache Airflow"],
        features: ["Time-series forecasting", "Anomaly detection", "Automated retraining", "Model monitoring"],
      },
      {
        title: "NLP-Driven Log Analysis",
        description: "Built an intelligent log analysis system that uses NLP techniques to categorize, cluster, and extract insights from millions of application logs, reducing incident response time.",
        technologies: ["Python", "spaCy", "TensorFlow", "Elasticsearch"],
        features: ["Text classification", "Entity recognition", "Pattern detection", "Automated alerting"],
      }
    ],
    learningJourney: [
      "Completed Andrew Ng's Machine Learning Specialization (Coursera)",
      "Deep Learning Specialization focusing on CNNs and RNNs",
      "Active participation in Kaggle competitions and open-source ML projects",
      "Currently exploring Large Language Models and prompt engineering techniques"
    ]
  };

  const projects = [
    {
      title: "Legacy Flight Booking System Modernization",
      description: "Transformed monolithic Java applications into containerized Spring Boot microservices deployed on Kubernetes (EKS). Designed secure REST and GraphQL APIs with Oracle/Postgres backends, implementing role-based access control and query optimization for improved performance.",
      tech: ["Spring Boot", "Kubernetes", "Docker", "GraphQL", "Oracle", "PostgreSQL", "Java"],
      company: "Boeing",
      architecture: "Microservices architecture with API Gateway, Service Mesh, and distributed caching"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built comprehensive CI/CD pipelines using GitHub Actions, Helm, and Terraform to automate infrastructure provisioning and application deployments. Implemented automated testing with JUnit, Mockito, and Selenium achieving 90% test coverage.",
      tech: ["GitHub Actions", "Terraform", "Helm", "Jenkins", "JUnit", "Mockito", "Selenium"],
      company: "Boeing & AWS",
      architecture: "GitOps workflow with infrastructure as code and blue-green deployments"
    },
    {
      title: "System Observability & Monitoring Platform",
      description: "Designed and implemented monitoring dashboards using CloudWatch, Prometheus, and Grafana to track system health, performance metrics, and API latency. Reduced Mean Time To Resolution (MTTR) by 30% through proactive alerting and visualization.",
      tech: ["Prometheus", "Grafana", "CloudWatch", "Splunk"],
      company: "Boeing",
      architecture: "Distributed tracing with centralized logging and metrics aggregation"
    },
    {
      title: "GraphQL API Migration & Optimization",
      description: "Migrated legacy REST APIs to GraphQL, implementing optimized resolvers and data loaders that reduced API latency by 60%. Built scalable microservices on AWS ECS and Lambda with autoscaling capabilities.",
      tech: ["GraphQL", "Java", "Python", "AWS ECS", "AWS Lambda", "API Gateway"],
      company: "AWS",
      architecture: "Event-driven microservices with GraphQL Federation"
    },
    {
      title: "Event-Driven Data Pipeline Architecture",
      description: "Developed ETL workflows and event-driven pipelines using Apache Airflow, Kafka, and SQS to process high-volume data streams. Improved system throughput and reliability through asynchronous processing and message queuing.",
      tech: ["Apache Airflow", "Kafka", "SQS", "Python", "AWS"],
      company: "AWS",
      architecture: "Event sourcing with stream processing and data lake integration"
    },
    {
      title: "Real-Time Analytics Platform",
      description: "Built Python/Airflow pipelines for processing clickstream and transaction data with enforced task dependencies and SLAs. Designed MongoDB schemas for real-time data ingestion, reducing dashboard latency by 25%. Created React dashboards integrated with REST APIs for monitoring operational KPIs.",
      tech: ["Python", "Apache Airflow", "MongoDB", "React", "REST APIs"],
      company: "Zomato",
      architecture: "Lambda architecture with batch and stream processing layers"
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
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
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
        </div>
      </div>

      {/* Landing/Hero Section */}
      {activeTab === "home" && (
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto px-6 py-32 relative">
            <div className="text-center space-y-8 animate-fade-in">
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
          </div>
        </div>
      )}

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
              <p className="text-slate-400 text-lg">Building scalable solutions at leading tech companies</p>
            </div>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-100">{exp.company}</h3>
                    <p className="text-lg text-blue-400 mt-1">{exp.role}</p>
                    <p className="text-slate-500 mt-1">{exp.location} • {exp.dates}</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-green-400 mb-1">Impact:</p>
                  <p className="text-green-300">{exp.impact}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Key Projects:</p>
                  <ul className="space-y-3 pl-1">
                    {exp.projects.map((proj, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300 leading-relaxed">{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-blue-300 rounded-full text-sm border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI & ML Experience Tab */}
        {activeTab === "ai-ml" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <Brain className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <h2 className="text-4xl font-bold mb-4">AI & Machine Learning Experience</h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">{aiExperience.overview}</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">AI/ML Tools & Technologies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {aiExperience.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-purple-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-100">{tool.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tool.proficiency === "Advanced" 
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}>
                        {tool.proficiency}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">{tool.use}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">AI/ML Projects</h3>
              {aiExperience.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-slate-100">{project.title}</h4>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Key Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-purple-300 rounded-full text-sm border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Continuous Learning Journey</h3>
              <ul className="space-y-3">
                {aiExperience.learningJourney.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-slate-400 text-lg">Technical solutions delivered across enterprise environments</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-100">{proj.title}</h3>
                  </div>
                  <p className="text-xs text-pink-400 font-semibold mb-3 uppercase tracking-wide">{proj.company}</p>
                  <p className="text-slate-300 mb-3 leading-relaxed text-sm">{proj.description}</p>
                  
                  {proj.architecture && (
                    <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-3 mb-4">
                      <p className="text-xs font-semibold text-pink-400 mb-1">Architecture:</p>
                      <p className="text-xs text-pink-300">{proj.architecture}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-pink-300 rounded-full text-xs border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Education</h2>
              <p className="text-slate-400 text-lg">Academic foundation in Computer Science and AI/ML</p>
            </div>
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-100">{edu.degree}</h3>
                    {edu.status && (
                      <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                        {edu.status}
                      </span>
                    )}
                    <p className="text-lg text-purple-400 mt-3">{edu.school}</p>
                    <p className="text-slate-500 mt-1">{edu.dates}</p>
                    {edu.focus && (
                      <p className="text-slate-400 mt-3 text-sm">
                        <span className="font-semibold">Focus Areas:</span> {edu.focus}
                      </p>
                    )}
                  </div>
                  <GraduationCap className="text-purple-400" size={32} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
              <p className="text-slate-400 text-lg">Comprehensive toolkit for modern software development</p>
            </div>
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
              >
                <h3 className="text-xl font-bold text-green-400 mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-800 text-slate-200 rounded-lg text-sm border border-slate-700 hover:border-green-500/50 hover:bg-slate-700 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === "contact" && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">Get In Touch</h2>
              <div className="space-y-6">
                <a
                  href="mailto:nishanthjason@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-slate-100 font-medium">nishanthjason@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-xl">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-slate-100 font-medium">716-463-9623</p>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/nathanjason"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all">
                    <Linkedin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">LinkedIn</p>
                    <p className="text-slate-100 font-medium">linkedin.com/in/nathanjason</p>
                  </div>
                </a>

                <a
                  href="https://github.com/NathanTempest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-all">
                    <Github className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>
                    <p className="text-slate-100 font-medium">github.com/NathanTempest</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-500">
          <p>© 2024 Nathaniel Jason. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;