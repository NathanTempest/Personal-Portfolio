import React, { useState } from "react";
import { FaReact, FaJava, FaPython, FaAws, FaDatabase, FaBrain } from "react-icons/fa";

const App: React.FC = () => {
  const [expandedArtifact, setExpandedArtifact] = useState<number | null>(null);

  const handleArtifactClick = (index: number, link?: string) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      setExpandedArtifact(expandedArtifact === index ? null : index);
    }
  };

  return (
    <div className="bg-black text-gray-200 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="text-2xl font-bold text-pink-500">Nathaniel Jason</div>
        <div className="space-x-4">
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="text-pink-500 hover:text-pink-400 transition">About Me</button>
          <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} className="text-pink-500 hover:text-pink-400 transition">Experience</button>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="text-pink-500 hover:text-pink-400 transition">Projects</button>
          <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })} className="text-pink-500 hover:text-pink-400 transition">Skills</button>
          <button onClick={() => document.getElementById("artifacts")?.scrollIntoView({ behavior: "smooth" })} className="text-pink-500 hover:text-pink-400 transition">Artifacts</button>
          <button onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })} className="text-pink-500 hover:text-pink-400 transition">Resume</button>
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

      {/* Experience */}
      <section id="experience" className="p-12">
        <h2 className="text-4xl font-bold mb-8 text-pink-500">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Boeing */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pink-500">Boeing</h3>
            <ul className="list-disc pl-5 mt-4 text-gray-300">
              <li>Refactored a legacy aircraft maintenance system into Spring Boot microservices with React frontend, enabling modular deployments and faster iteration.</li>
              <li>Built Spark + Airflow pipelines for telemetry analysis, cutting ETL runtimes by 35%.</li>
              <li>Optimized PostgreSQL queries with indexing/partitioning, reducing latency by 40%.</li>
              <li>Automated deployments with Kubernetes and GitHub Actions for zero-downtime rollouts.</li>
            </ul>
            <p className="mt-2 font-bold text-pink-400">Highest Impact: Modular microservices enabled faster deployment cycles and reduced system downtime.</p>
            <p className="mt-2 italic text-gray-400">Tech Stack: Spring Boot, React.js, Spark, Airflow, PostgreSQL, Kubernetes, GitHub Actions</p>
          </div>

          {/* AWS */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pink-500">Amazon Web Services</h3>
            <ul className="list-disc pl-5 mt-4 text-gray-300">
              <li>Modernized advertising insights platform by migrating monoliths into Airflow DAGs and GraphQL APIs.</li>
              <li>Built Java and Node.js microservices integrated with DynamoDB and RDS serving millions of queries daily.</li>
              <li>Deployed serverless data workflows using AWS Lambda and Step Functions for large-scale streaming data.</li>
              <li>Reduced incident response time by 25% with CloudWatch monitoring and distributed tracing.</li>
            </ul>
            <p className="mt-2 font-bold text-pink-400">Highest Impact: Reduced latency and improved scalability of analytics platforms impacting millions of customers.</p>
            <p className="mt-2 italic text-gray-400">Tech Stack: Java, Node.js, GraphQL, Airflow, DynamoDB, RDS, Lambda, Step Functions</p>
          </div>

          {/* Capgemini */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pink-500">Capgemini</h3>
            <ul className="list-disc pl-5 mt-4 text-gray-300">
              <li>Designed SaaS solutions with Spring Boot, Angular/React, and PostgreSQL.</li>
              <li>Improved API throughput by 30% via Redis caching and database query tuning.</li>
              <li>Implemented real-time data pipelines with Kafka and MongoDB.</li>
              <li>Delivered production-ready microservices using Agile CI/CD pipelines.</li>
            </ul>
            <p className="mt-2 font-bold text-pink-400">Highest Impact: Real-time pipelines and optimized APIs significantly improved performance for enterprise clients.</p>
            <p className="mt-2 italic text-gray-400">Tech Stack: Spring Boot, Angular, React, PostgreSQL, Redis, Kafka, MongoDB</p>
          </div>

          {/* Zomato */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pink-500">Zomato</h3>
            <ul className="list-disc pl-5 mt-4 text-gray-300">
              <li>Built React dashboards and Flask APIs for restaurant analytics and reporting.</li>
              <li>Automated ETL workflows on MySQL, streamlining operational insights.</li>
            </ul>
            <p className="mt-2 font-bold text-pink-400">Highest Impact: Enhanced restaurant analytics and automated ETL improved operational decision-making.</p>
            <p className="mt-2 italic text-gray-400">Tech Stack: React, Flask, MySQL</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-12">
        <h2 className="text-4xl font-bold mb-8 text-pink-500">Projects</h2>
        <div className="space-y-6">
          {/* Boeing Projects */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pink-500">Aircraft Maintenance System Refactor</h3>
            <p>Converted legacy monolith to Spring Boot microservices with React frontend, enabling modular deployments.</p>
            <p>Impact: Reduced deployment time and improved maintainability for engineers.</p>
            <p>Tech: Spring Boot, React, PostgreSQL, Kubernetes</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pink-500">Telemetry ETL Pipelines</h3>
            <p>Built Spark + Airflow pipelines to process telemetry data efficiently.</p>
            <p>Impact: ETL runtime reduced by 35%, improving analytics speed.</p>
            <p>Tech: Spark, Airflow, PostgreSQL</p>
          </div>

          {/* AWS Projects */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pink-500">Advertising Insights Platform Modernization</h3>
            <p>Migrated monolith services into Airflow DAGs and GraphQL APIs, reducing latency and over-fetching.</p>
            <p>Impact: Millions of daily queries served under 100ms improving user experience.</p>
            <p>Tech: Java, Node.js, GraphQL, Airflow, DynamoDB, RDS</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pink-500">Serverless Data Workflows</h3>
            <p>Deployed AWS Lambda & Step Functions for large-scale streaming data processing.</p>
            <p>Impact: Reduced operational overhead and increased scalability.</p>
            <p>Tech: Lambda, Step Functions, DynamoDB</p>
          </div>

          {/* Capgemini Projects */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pink-500">SaaS Platform Development</h3>
            <p>Designed SaaS solutions, improving API throughput and real-time data pipelines.</p>
            <p>Impact: Enterprise clients benefited from faster and more reliable services.</p>
            <p>Tech: Spring Boot, Angular, React, PostgreSQL, Redis, Kafka, MongoDB</p>
          </div>

          {/* Zomato Projects */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-pink-500">Restaurant Analytics Dashboard</h3>
            <p>Built dashboards and automated ETL workflows for restaurant reporting.</p>
            <p>Impact: Streamlined operational insights and decision-making.</p>
            <p>Tech: React, Flask, MySQL</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="p-12">
        <h2 className="text-4xl font-bold mb-8 text-pink-500">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-pink-500">Frontend</h3>
            <p>React.js, Angular, TypeScript</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-pink-500">Backend</h3>
            <p>Java (Spring Boot), Python (Flask, FastAPI), Node.js</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-pink-500">Database</h3>
            <p>PostgreSQL, MySQL, MongoDB, DynamoDB, Redis</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-pink-500">Cloud/DevOps</h3>
            <p>AWS (Lambda, ECS, S3, RDS), Docker, Kubernetes, Terraform, GitHub Actions</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-pink-500">AI/ML</h3>
            <p>LangChain, Hugging Face, OpenAI, Claude, MCP Servers, Cursor, Windsurf</p>
          </div>
        </div>
      </section>

{/* Artifacts */}
<section id="artifacts" className="p-12">
  <h2 className="text-4xl font-bold mb-8 text-pink-500">Artifacts</h2>
  <div className="space-y-6">
    {/* Soccer Pundit Chatbot */}
    <div
      className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => handleArtifactClick(0)}
    >
      <h3 className="text-2xl font-bold text-pink-500">1. Soccer Pundit Chatbot</h3>
      {expandedArtifact === 0 && (
        <div className="mt-2 text-gray-300">
          <p>A chatbot that provides soccer match predictions, player stats, and insights using NLP and AI techniques.</p>
          <p><strong>Tech Stack:</strong> Python, LangChain, Hugging Face, OpenAI APIs, Flask</p>
          <p><strong>Process:</strong> Built a conversational interface that fetches real-time match data, uses AI models to generate insights, and responds to user queries intelligently.</p>
          <p>
            <strong>Link:</strong> <a href="https://github.com/NathanTempest/Soccer-Pundit-Chatbot" target="_blank" className="text-pink-500 hover:text-pink-400 underline">GitHub Repository</a>
          </p>
        </div>
      )}
    </div>

    {/* AI/ML Personal Experience */}
    <div
      className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => handleArtifactClick(1)}
    >
      <h3 className="text-2xl font-bold text-pink-500">2. AI/ML Personal Experience</h3>
      {expandedArtifact === 1 && (
        <div className="mt-2 text-gray-300">
          <p>Amateur but growing experience with LangChain and Hugging Face prompting. Good experience with Claude and OpenAI APIs. Beginner exposure to MCP servers, intermediate experience with Cursor and Windsurf platforms.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            <div>LangChain <span className="text-yellow-400">Beginner</span></div>
            <div>Hugging Face <span className="text-yellow-400">Beginner</span></div>
            <div>OpenAI <span className="text-green-500">Expert</span></div>
            <div>Claude <span className="text-green-500">Expert</span></div>
            <div>MCP Servers <span className="text-yellow-400">Beginner</span></div>
            <div>Cursor <span className="text-orange-400">Intermediate</span></div>
            <div>Windsurf <span className="text-orange-400">Intermediate</span></div>
          </div>
        </div>
      )}
    </div>

    {/* Prime Number Bot */}
    <div
      className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => handleArtifactClick(2)}
    >
      <h3 className="text-2xl font-bold text-pink-500">3. Prime Number Bot</h3>
      {expandedArtifact === 2 && (
        <div className="mt-2 text-gray-300">
          <p>A reinforcement learning bot that learns to pick prime numbers only. Rewards given when generating unseen non-composite numbers. Demonstrates simple but effective RL concepts.</p>
          <p><strong>Tech Stack:</strong> Python, Reinforcement Learning</p>
          <p><strong>Process:</strong> Built to understand reward mechanisms and learning optimization in AI.</p>
        </div>
      )}
    </div>

    {/* Personal Tracker Bot */}
    <div
      className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => handleArtifactClick(3)}
    >
      <h3 className="text-2xl font-bold text-pink-500">4. Personal Tracker Bot</h3>
      {expandedArtifact === 3 && (
        <div className="mt-2 text-gray-300">
          <p>A personalized tracker app for fitness, academic, reading, and career goals using gamification and notifications to maintain weekly planners and deadlines.</p>
          <p><strong>Tech Stack:</strong> React, TypeScript, Node.js, Firebase</p>
          <p><strong>Process:</strong> Gamified task completion with notifications to improve productivity.</p>
        </div>
      )}
    </div>
  </div>
</section>

      {/* Resume Download */}
      <section id="resume" className="p-12 hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold mb-6 text-pink-500">Resume</h2>
        <a href="/NathanielJason_Resume.pdf" download className="bg-pink-500 hover:bg-pink-400 text-black px-6 py-3 rounded-xl transition">
          Download Resume
        </a>
      </section>
    </div>
  );
};

export default App;