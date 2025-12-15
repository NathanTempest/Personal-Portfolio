import React, { useState } from "react";

interface ArtifactProps {
  id: number;
  title: string;
  githubLink?: string;
  introduction: string;
  description: string;
  objective: string;
  process: string;
  techStack: string;
  valueProposition: string;
  uniqueValue: string;
  relevance: string;
}

const artifactsData: ArtifactProps[] = [
  {
    id: 1,
    title: "Soccer Pundit Chatbot",
    githubLink: "https://github.com/NathanTempest/Soccer-Pundit-Chatbot",
    introduction: "A chatbot that provides soccer match predictions, player stats, and insights using NLP and AI techniques.",
    description: "Built a conversational interface that fetches real-time match data and uses AI models to generate insights.",
    objective: "Provide users with predictive analytics and match insights.",
    process: "Integrated APIs, LangChain, Hugging Face models, and Flask backend to generate responses dynamically.",
    techStack: "Python, LangChain, Hugging Face, OpenAI APIs, Flask",
    valueProposition: "Real-time insights and predictions for soccer enthusiasts.",
    uniqueValue: "Combines AI, NLP, and live match data in one interactive chatbot.",
    relevance: "Useful for sports analytics, prediction tools, and AI-driven chat applications."
  },
  {
    id: 2,
    title: "AI/ML Personal Experience",
    introduction: "Exploration of AI/ML platforms including LangChain, Hugging Face, OpenAI APIs, Claude, MCP Servers, Cursor, and Windsurf.",
    description: "Practical application of AI models to build conversational and predictive experiences.",
    objective: "Gain hands-on expertise in modern AI/ML frameworks and improve prompt engineering skills.",
    process: "Experimented with prompt tuning, chain-of-thought reasoning, and API integrations across multiple platforms.",
    techStack: "Python, LangChain, Hugging Face, OpenAI APIs, Claude, MCP Servers, Cursor, Windsurf",
    valueProposition: "Demonstrates adaptability and understanding of AI frameworks.",
    uniqueValue: "Showcases proficiency across multiple AI tools and libraries.",
    relevance: "Useful for AI-focused projects and personal experimentation."
  },
  {
    id: 3,
    title: "Prime Number Bot",
    introduction: "A reinforcement learning bot that learns to pick prime numbers only.",
    description: "Rewards the bot for generating unseen non-composite numbers, teaching RL concepts.",
    objective: "Demonstrate reinforcement learning fundamentals in a simple use case.",
    process: "Implemented reward mechanisms and iterative training for RL optimization.",
    techStack: "Python, Reinforcement Learning",
    valueProposition: "Educational RL project demonstrating core AI principles.",
    uniqueValue: "Unique application of RL to prime number identification.",
    relevance: "Useful for AI/ML learning and teaching basic RL."
  },
  {
    id: 4,
    title: "Personal Tracker Bot",
    introduction: "A personalized tracker app for fitness, academic, reading, and career goals.",
    description: "Uses gamification and notifications to maintain weekly planners and deadlines.",
    objective: "Increase productivity and track progress across personal goals.",
    process: "Built frontend in React, backend in Node.js, and data storage in Firebase.",
    techStack: "React, TypeScript, Node.js, Firebase",
    valueProposition: "Helps users stay organized and motivated.",
    uniqueValue: "Gamified experience to improve adherence to personal goals.",
    relevance: "Useful for productivity and personal management apps."
  },
  {
    id: 5,
    title: "Adaptive Personal Recommendation System (In Progress)",
    introduction: "A concept-driven AI system designed to learn and adapt to a user’s evolving tastes in music, movies, books, and art.",
    description: "This project explores how personalized recommendations can be generated using explicit user feedback such as ratings, reviews, and curated lists from platforms like Apple Music, Goodreads, and Letterboxd.",
    objective: "Design an adaptive recommendation framework that evolves with user preferences while respecting privacy and ethical AI principles.",
    process: "Outlined a hybrid learning approach using preference embeddings, temporal weighting, and feedback-driven adaptation inspired by reinforcement learning concepts.",
    techStack: "Python (planned), Pandas, Scikit-learn, Reinforcement Learning concepts, API-based data ingestion",
    valueProposition: "Provides deeply personalized recommendations without relying on invasive data collection or engagement-driven algorithms.",
    uniqueValue: "Balances human creativity with AI efficiency while prioritizing transparency, explainability, and user consent.",
    relevance: "Highly relevant to modern recommender systems, ethical AI design, and real-world personalization challenges."
  }
];

const ArtifactCard: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="artifacts" className="p-12">
      <h2 className="text-4xl font-bold mb-2 text-pink-500">Artifacts</h2>
      <p className="text-gray-400 italic text-sm mb-6">Click on artifacts for more information</p>
      <div className="space-y-6">
        {artifactsData.map(a => (
          <div
            key={a.id}
            className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => handleClick(a.id)}
          >
            <h3 className="text-2xl font-bold text-pink-500">{a.id}. {a.title}</h3>
            {expandedId === a.id && (
              <div className="mt-4 text-gray-300 space-y-3">
                <p><strong>Introduction:</strong> {a.introduction}</p>
                <p><strong>Description:</strong> {a.description}</p>
                <p><strong>Objective:</strong> {a.objective}</p>
                <p><strong>Process:</strong> {a.process}</p>
                <p><strong>Tech Stack:</strong> {a.techStack}</p>
                <p><strong>Value Proposition:</strong> {a.valueProposition}</p>
                <p><strong>Unique Value:</strong> {a.uniqueValue}</p>
                <p><strong>Relevance:</strong> {a.relevance}</p>
                {a.githubLink && (
                  <p>
                    <strong>Link:</strong>{" "}
                    <a
                      href={a.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-400 underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub Repository
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtifactCard;