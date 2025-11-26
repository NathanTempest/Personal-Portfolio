import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Briefcase, GraduationCap, Code, Rocket, Wrench, Brain, ChevronDown, ExternalLink, User, Download, TrendingDown, Zap, Database, GitBranch } from "lucide-react";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Brain },
    { id: "about", label: "About Me", icon: User },
    { id: "artifacts", label: "Portfolio Artifacts", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
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

  const artifacts = [
    {
      number: 1,
      title: "Soccer Pundit AI Chatbot",
      submittedDate: "Workshop 1 - November 2024",
      problemStatement: "Sports enthusiasts lack accessible, real-time AI-powered analysis for football matches. Traditional sports commentary is limited to broadcast schedules, and fans want on-demand tactical insights and player statistics through natural conversation.",
      solution: "Developed an AI-powered chatbot using OpenAI's GPT-4 models integrated with a FastAPI backend. The system processes natural language queries about football matches, players, and tactics, providing real-time analysis and statistical insights through conversational interface.",
      technicalImplementation: {
        architecture: "Client-server architecture with React frontend, FastAPI backend, and OpenAI GPT-4 API integration. Implements prompt engineering for sports domain expertise and context management for multi-turn conversations.",
        tools: ["OpenAI GPT-4", "FastAPI", "Python", "React", "REST APIs", "Prompt Engineering"],
        features: [
          "Natural language query processing",
          "Real-time match analysis and commentary",
          "Player statistics and performance insights",
          "Tactical formation analysis",
          "Historical data comparison"
        ]
      },
      businessImpact: "Enhanced user engagement through conversational AI, providing instant access to expert-level football analysis. Demonstrates proficiency in LLM integration and prompt engineering.",
      aimlCompetencies: [
        "Large Language Model (LLM) integration",
        "Prompt engineering and context management",
        "Natural Language Processing (NLP)",
        "API design for AI applications",
        "Domain-specific AI customization"
      ],
      reflection: "This artifact demonstrates my ability to leverage state-of-the-art LLMs to create domain-specific AI applications. It showcases prompt engineering skills, API integration, and understanding of how to customize general-purpose AI models for specialized use cases. The project appeals to both technical audiences (showing architectural decisions) and non-technical stakeholders (demonstrating practical AI applications).",
      targetAudience: "Technical recruiters seeking AI/ML engineers, sports tech companies, and stakeholders interested in conversational AI applications.",
      link: "https://github.com/NathanTempest"
    },
    {
      number: 2,
      title: "NLP-Driven Intelligent Log Analysis System",
      submittedDate: "Workshop 2 - November 2024",
      problemStatement: "Production systems generate millions of log entries daily, making manual analysis impractical. Traditional keyword-based searching misses patterns and anomalies, leading to delayed incident response and increased downtime costs.",
      solution: "Built an intelligent log analysis system using NLP techniques to automatically categorize, cluster, and extract actionable insights from application logs. The system employs text classification, named entity recognition, and pattern detection to identify issues before they escalate.",
      technicalImplementation: {
        architecture: "ML pipeline with data ingestion layer (Elasticsearch), NLP processing engine (spaCy + TensorFlow), pattern detection algorithms, and alerting system. Implements transfer learning from pre-trained models fine-tuned on application-specific log formats.",
        tools: ["Python", "spaCy", "TensorFlow", "Elasticsearch", "Scikit-learn", "Kibana"],
        features: [
          "Automated log classification by severity and category",
          "Named Entity Recognition (NER) for extracting error codes, IPs, and user IDs",
          "Clustering similar error patterns",
          "Anomaly detection using unsupervised learning",
          "Automated alerting for critical issues"
        ]
      },
      businessImpact: "Reduced incident response time by 40% through automated log analysis. Improved system reliability by proactively identifying recurring issues. Saved engineering hours previously spent on manual log review.",
      aimlCompetencies: [
        "Natural Language Processing (NLP)",
        "Text classification and clustering",
        "Named Entity Recognition (NER)",
        "Anomaly detection",
        "Transfer learning and model fine-tuning"
      ],
      reflection: "This artifact showcases a different AI/ML skill set from Artifact 1—moving from conversational AI to NLP for structured text analysis. It demonstrates my understanding of traditional NLP techniques, supervised and unsupervised learning, and practical application of ML in production environments. The project solves a real business problem (reducing downtime) and shows measurable impact.",
      targetAudience: "DevOps engineers, SRE teams, technical leads seeking ML solutions for operational efficiency, and companies looking to implement intelligent monitoring systems.",
      link: ""
    },
    {
      number: 3,
      title: "Predictive Analytics Pipeline for System Reliability",
      submittedDate: "Workshop 3 - December 2024",
      problemStatement: "Reactive maintenance leads to unexpected system failures and costly downtime. Organizations need predictive capabilities to forecast potential issues before they impact production systems.",
      solution: "Implemented a machine learning pipeline for predictive maintenance and anomaly detection using ensemble methods and time-series forecasting. The system analyzes historical system metrics to predict failures and performance degradation up to 48 hours in advance.",
      technicalImplementation: {
        architecture: "End-to-end ML pipeline with data collection (CloudWatch/Prometheus), feature engineering, model training (ensemble of Random Forest, XGBoost, LSTM), automated retraining, and deployment on AWS SageMaker with real-time inference.",
        tools: ["Python", "Scikit-learn", "XGBoost", "AWS SageMaker", "Apache Airflow", "TensorFlow/Keras"],
        features: [
          "Time-series forecasting for resource utilization",
          "Anomaly detection using statistical methods and ML",
          "Ensemble model combining multiple algorithms",
          "Automated model retraining pipeline",
          "Real-time prediction API with low latency"
        ]
      },
      businessImpact: "Predicted 85% of system failures 24+ hours in advance, enabling proactive maintenance. Reduced unplanned downtime by 60% and maintenance costs by 35%. Improved system availability from 99.5% to 99.9%.",
      aimlCompetencies: [
        "Time-series forecasting",
        "Ensemble learning methods",
        "Anomaly detection algorithms",
        "MLOps and model deployment",
        "Automated model retraining and monitoring"
      ],
      reflection: "This artifact demonstrates yet another distinct AI/ML capability—predictive analytics and time-series analysis. Unlike Artifacts 1 (LLM) and 2 (NLP), this focuses on traditional ML algorithms and their practical application in production environments. It showcases the full ML lifecycle: data collection, feature engineering, model selection, training, deployment, and monitoring. The measurable business impact (60% downtime reduction) demonstrates my ability to deliver value through ML.",
      targetAudience: "Data science teams, infrastructure engineers, CTOs/VPs seeking ML-driven operational improvements, and organizations implementing predictive maintenance strategies.",
      link: ""
    },
    {
      number: 4,
      title: "AI Personal Trainer & Wellness Accountability Coach",
      submittedDate: "Workshop 4 - December 2024",
      problemStatement: "Students and professionals struggle with maintaining healthy habits and academic/work-life balance. Traditional tracking apps lack personalized coaching and fail to provide actionable, contextual feedback that adapts to individual patterns.",
      solution: "Developed an intelligent personal coaching system combining behavioral tracking with AI-powered feedback. The system monitors sleep patterns (7+ hours target), study time, assignment submissions, and gym attendance (5/7 days goal), providing personalized weekly reports, gamified progress tracking, and conversational coaching through OpenAI GPT integration.",
      technicalImplementation: {
        architecture: "Full-stack application with React frontend, Python/FastAPI backend, PostgreSQL database for user data and progress tracking, and OpenAI API for personalized coaching. Implements gamification engine with point system, streak tracking, and achievement badges.",
        tools: ["OpenAI GPT-4", "Python", "FastAPI", "React", "PostgreSQL", "Chart.js", "Cloud Hosting"],
        features: [
          "Multi-dimensional habit tracking (sleep, study, fitness, deadlines)",
          "Gamification with points, levels, and achievements",
          "Weekly progress reports with data visualization",
          "AI-powered Q&A coaching for motivation and advice",
          "Personalized recommendations based on behavioral patterns",
          "Streak tracking and goal setting"
        ]
      },
      businessImpact: "Improved user engagement through gamification and AI coaching. Provides data-driven behavioral insights for wellness improvement. Demonstrates application of AI in personal development and behavioral change.",
      aimlCompetencies: [
        "Conversational AI for coaching and motivation",
        "Behavioral pattern analysis",
        "Personalization algorithms",
        "Data visualization and reporting",
        "Gamification design with ML-driven insights"
      ],
      reflection: "This artifact combines multiple AI/ML skills: conversational AI (like Artifact 1), behavioral analysis, and personalization. It demonstrates my ability to design AI systems for human behavior change—a growing area in AI applications. The gamification aspect shows understanding of user engagement principles, while the coaching feature showcases practical LLM application. This project appeals to wellness tech, edtech, and HR tech audiences while demonstrating creative AI application beyond traditional business problems.",
      targetAudience: "Wellness tech companies, educational technology platforms, HR departments implementing employee wellness programs, and organizations interested in AI-driven behavioral change applications.",
      link: "https://github.com/NathanTempest"
    }
  ];

  const projects = [
    {
      title: "GraphQL API Migration & Optimization",
      featured: true,
      description: "Migrated legacy REST APIs to GraphQL, implementing optimized resolvers and data loaders that reduced API latency by 60%. Built scalable microservices on AWS ECS and Lambda with autoscaling capabilities.",
      tech: ["GraphQL", "Java", "Python", "AWS ECS", "AWS Lambda", "API Gateway"],
      company: "AWS",
      architecture: "Event-driven microservices with GraphQL Federation",
      businessImpact: "60% latency reduction, 40% faster deployments, improved developer experience"
    },
    {
      title: "Legacy Flight Booking System Modernization",
      description: "Transformed monolithic Java applications into containerized Spring Boot microservices deployed on Kubernetes (EKS). Designed secure REST and GraphQL APIs with Oracle/Postgres backends, implementing role-based access control and query optimization for improved performance.",
      tech: ["Spring Boot", "Kubernetes", "Docker", "GraphQL", "Oracle", "PostgreSQL", "Java"],
      company: "Boeing",
      architecture: "Microservices architecture with API Gateway, Service Mesh, and distributed caching",
      businessImpact: "Improved scalability by 300%, reduced deployment time by 50%"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built comprehensive CI/CD pipelines using GitHub Actions, Helm, and Terraform to automate infrastructure provisioning and application deployments. Implemented automated testing with JUnit, Mockito, and Selenium achieving 90% test coverage.",
      tech: ["GitHub Actions", "Terraform", "Helm", "Jenkins", "JUnit", "Mockito", "Selenium"],
      company: "Boeing & AWS",
      architecture: "GitOps workflow with infrastructure as code and blue-green deployments",
      businessImpact: "90% test coverage, 70% faster deployment cycles"
    },
    {
      title: "System Observability & Monitoring Platform",
      description: "Designed and implemented monitoring dashboards using CloudWatch, Prometheus, and Grafana to track system health, performance metrics, and API latency. Reduced Mean Time To Resolution (MTTR) by 30% through proactive alerting and visualization.",
      tech: ["Prometheus", "Grafana", "CloudWatch", "Splunk"],
      company: "Boeing",
      architecture: "Distributed tracing with centralized logging and metrics aggregation",
      businessImpact: "30% MTTR reduction, improved system visibility"
    },
    {
      title: "Event-Driven Data Pipeline Architecture",
      description: "Developed ETL workflows and event-driven pipelines using Apache Airflow, Kafka, and SQS to process high-volume data streams. Improved system throughput and reliability through asynchronous processing and message queuing.",
      tech: ["Apache Airflow", "Kafka", "SQS", "Python", "AWS"],
      company: "AWS",
      architecture: "Event sourcing with stream processing and data lake integration",
      businessImpact: "3x throughput increase, 99.9% pipeline reliability"
    },
    {
      title: "Real-Time Analytics Platform",
      description: "Built Python/Airflow pipelines for processing clickstream and transaction data with enforced task dependencies and SLAs. Designed MongoDB schemas for real-time data ingestion, reducing dashboard latency by 25%. Created React dashboards integrated with REST APIs for monitoring operational KPIs.",
      tech: ["Python", "Apache Airflow", "MongoDB", "React", "REST APIs"],
      company: "Zomato",
      architecture: "Lambda architecture with batch and stream processing layers",
      businessImpact: "25% latency reduction, real-time insights for business decisions"
    },
  ];

  const skills = [
    { category: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "Backend", items: ["Spring Boot", "Flask", "Node.js", "REST", "GraphQL", "Microservices", "TDD"] },
    { category: "Frontend", items: ["React.js", "Flutter", "HTML5", "CSS3", "Tailwind", "Redux"] },
    { category: "AI & ML", items: ["OpenAI GPT", "TensorFlow", "PyTorch", "Scikit-learn", "Langchain", "Hugging Face", "NLP", "Time-series Forecasting"] },
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
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-xs ${
                      activeTab === tab.id
                        ? "bg-blue-500/20 border border-blue-500 text-blue-300"
                        : "hover:bg-slate-800/50 text-slate-300"
                    }`}
                    onClick={() => scrollToSection(tab.id)}
                  >
                    <Icon size={14} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Home Section */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">Welcome</h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          Full Stack Developer, AI Engineer, and Cloud Architect passionate about delivering production-ready systems, AI-powered applications, and scalable enterprise solutions.
        </p>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          I am a Full Stack and AI Engineer with expertise in Java, React, Python, ML systems, and cloud-native architectures. My work spans enterprise modernization, scalable backend systems, AI-driven applications, and real-time analytics pipelines.
        </p>
      </section>

      {/* Artifacts */}
      <section id="artifacts" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-purple-400">Portfolio Artifacts</h2>
        <div className="space-y-10">
          {artifacts.map((a) => (
            <div key={a.number} className="p-6 bg-slate-900/60 border border-purple-700 rounded-xl hover:scale-[1.01] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-purple-300 mb-2">
                {a.number}. {a.title}
              </h3>
              <p className="text-slate-400 italic mb-4">{a.submittedDate}</p>
              <p className="text-slate-300 mb-2"><strong>Problem:</strong> {a.problemStatement}</p>
              <p className="text-slate-300 mb-2"><strong>Solution:</strong> {a.solution}</p>
              <p className="text-slate-300 mb-2"><strong>Business Impact:</strong> {a.businessImpact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-green-400">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-6 bg-slate-900/60 rounded-xl border border-green-700">
              <h3 className="text-2xl font-semibold text-green-300">{exp.role} – {exp.company}</h3>
              <p className="text-slate-400">{exp.location} | {exp.dates}</p>
              <p className="text-slate-300 mt-3">{exp.description}</p>
              <ul className="list-disc list-inside mt-3 text-slate-400">
                {exp.projects.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-pink-400">Projects</h2>
        <div className="space-y-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 border border-pink-700 rounded-xl bg-slate-900/50 hover:scale-[1.01] transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-pink-400">{proj.title}</h3>
              <p className="text-slate-300 mt-2">{proj.description}</p>
              <p className="text-slate-400 text-sm mt-2"><strong>Architecture:</strong> {proj.architecture}</p>
              <p className="text-slate-400 text-sm"><strong>Impact:</strong> {proj.businessImpact}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {proj.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-pink-700/30 border border-pink-600 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((sk, idx) => (
            <div key={idx} className="p-6 bg-slate-900/50 border border-yellow-700 rounded-xl">
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">{sk.category}</h3>
              <div className="flex flex-wrap gap-2">
                {sk.items.map((item, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-yellow-700/30 border border-yellow-600 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-300">Contact</h2>
        <p className="text-slate-300 mb-4">Get in touch</p>

        <div className="flex justify-center space-x-6 text-slate-300">
          <a className="hover:text-blue-400 flex items-center space-x-2" href="mailto:nishanthjason@gmail.com">
            <Mail size={20} /><span>Email</span>
          </a>
          <a className="hover:text-blue-400 flex items-center space-x-2" href="tel:7164639623">
            <Phone size={20} /><span>Phone</span>
          </a>
          <a className="hover:text-blue-400 flex items-center space-x-2" href="https://www.linkedin.com/in/nathanjason" target="_blank">
            <Linkedin size={20} /><span>LinkedIn</span>
          </a>
          <a className="hover:text-blue-400 flex items-center space-x-2" href="https://github.com/NathanTempest" target="_blank">
            <Github size={20} /><span>GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;