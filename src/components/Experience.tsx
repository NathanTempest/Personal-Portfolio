import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="p-12">
      <h2 className="text-4xl font-bold text-pink-500 mb-8">Experience</h2>

      <div className="space-y-10">

        {/* HCL (Current Role) */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-pink-500">HCL America Inc. — Technical Lead(Client: Meta)</h3>
          <p className="text-gray-400 text-sm mb-4">Nov 2025 – Present</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Leading core engineering and modernization efforts across cloud-native and distributed systems.</li>
            <li>Driving scalable backend solutions, automation, and secure system integration for enterprise teams.</li>
            <li>Supporting development best practices, CI/CD pipelines, and cross-functional collaboration.</li>
            <li>Providing architectural guidance for API development, platform reliability, and data-driven applications.</li>
          </ul>

          <p className="text-pink-400 font-semibold mt-4">
            Impact: Strengthened platform reliability, standardized development workflows, and accelerated delivery efficiency across multiple engineering teams.
          </p>

          <p className="text-gray-400 mt-2">
            <strong>Tech Stack:</strong> Java, Spring Boot, Python, React, AWS, Kubernetes, CI/CD, SQL/NoSQL
          </p>
        </div>

        {/* Boeing via Blue Space */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-pink-500">Software Engineer — Blue Space Technologies (Client: Boeing)</h3>
          <p className="text-gray-400 text-sm mb-4">Dec 2023 – Jul 2025</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Refactored legacy aircraft maintenance systems into Spring Boot microservices.</li>
            <li>Built Spark + Airflow pipelines for telemetry analysis (35% ETL improvement).</li>
            <li>Optimized PostgreSQL with indexing and partitioning (40% reduced latency).</li>
            <li>Implemented zero-downtime deployments using Kubernetes & GitHub Actions.</li>
          </ul>

          <p className="text-pink-400 font-semibold mt-4">
            Impact: Modernized a critical aviation system and significantly improved data processing reliability.
          </p>

          <p className="text-gray-400 mt-2">
            <strong>Tech Stack:</strong> Java, Spring Boot, React, PostgreSQL, Airflow, Spark, K8s, GitHub Actions
          </p>
        </div>

        {/* AWS */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-pink-500">Software Development Engineer — Amazon Web Services</h3>
          <p className="text-gray-400 text-sm mb-4">Oct 2022 – Dec 2023</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Migrated monolith advertising insights systems to GraphQL & Airflow DAGs.</li>
            <li>Built Node.js & Java microservices handling millions of requests daily (&lt;100ms latency).</li>
            <li>Developed serverless data workflows with Lambda + Step Functions.</li>
            <li>Improved incident response times using CloudWatch & distributed tracing.</li>
          </ul>

          <p className="text-pink-400 font-semibold mt-4">
            Impact: Accelerated large-scale ad analytics and reduced operational latency across platforms.
          </p>

          <p className="text-gray-400 mt-2">
            <strong>Tech Stack:</strong> Java, Node.js, AWS Lambda, Step Functions, DynamoDB, RDS, GraphQL
          </p>
        </div>

        {/* Capgemini via Auridene */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-pink-500">Senior Software Engineer — Auridene Technologies (Client: Capgemini)</h3>
          <p className="text-gray-400 text-sm mb-4">Mar 2019 – Jun 2021</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Developed SaaS solutions using Spring Boot, Angular/React, PostgreSQL.</li>
            <li>Improved API throughput 30% via Redis caching & query tuning.</li>
            <li>Built Kafka + MongoDB real-time pipelines.</li>
            <li>Delivered microservices in Agile teams with CI/CD automation.</li>
          </ul>

          <p className="text-pink-400 font-semibold mt-4">
            Impact: Delivered production-ready SaaS applications that improved platform scalability.
          </p>

          <p className="text-gray-400 mt-2">
            <strong>Tech Stack:</strong> Spring Boot, Angular, React, Redis, Kafka, MongoDB, PostgreSQL
          </p>
        </div>

      </div>
    </section>
  );
}