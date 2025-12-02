import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="p-12">
      <h2 className="text-4xl font-bold text-pink-500 mb-8">Projects</h2>

      <div className="space-y-8">

        {/* Boeing Projects */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.02] transition duration-300">
          <h3 className="text-2xl font-bold text-pink-500">Boeing — Maintenance System Modernization</h3>
          <p className="mt-3 text-gray-300">
            Refactored a monolithic aircraft maintenance system into modular Spring Boot microservices, 
            enabling distributed processing and easier deployments.
          </p>
          <p className="mt-2 text-gray-400">
            <strong>Impact:</strong> Reduced latency, improved ETL performance, and modernized aviation data workflows.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.02] transition duration-300">
          <h3 className="text-2xl font-bold text-pink-500">Telemetry Analysis Pipelines</h3>
          <p className="mt-3 text-gray-300">
            Created Spark + Airflow-based ETL pipelines for flight telemetry, with optimized PostgreSQL storage 
            for faster retrieval and analytics.
          </p>
          <p className="mt-2 text-gray-400">
            <strong>Impact:</strong> Reduced pipeline runtimes by 35% and increased operational reliability.
          </p>
        </div>

        {/* AWS Projects */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.02] transition duration-300">
          <h3 className="text-2xl font-bold text-pink-500">Ad Insights GraphQL Migration</h3>
          <p className="mt-3 text-gray-300">
            Migrated legacy REST services to GraphQL APIs enabling faster, more efficient personalized ad reporting 
            with reduced over-fetching.
          </p>
          <p className="mt-2 text-gray-400">
            <strong>Impact:</strong> Improved query performance and accelerated ad analytics for global customers.
          </p>
        </div>

        {/* Capgemini Projects */}
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-[1.02] transition duration-300">
          <h3 className="text-2xl font-bold text-pink-500">High-Performance SaaS Platform</h3>
          <p className="mt-3 text-gray-300">
            Designed and implemented scalable SaaS modules using Spring Boot, React, and Redis caching.
          </p>
          <p className="mt-2 text-gray-400">
            <strong>Impact:</strong> Improved API throughput by 30% and enhanced user experience.
          </p>
        </div>

      </div>
    </section>
  );
}