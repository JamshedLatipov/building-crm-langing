"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Cloud Transformation",
      icon: "☁️",
      description: "Seamless migration, modern cloud-native architectures, and cost optimization for scalable, resilient enterprise infrastructure.",
    },
    {
      name: "Data & AI",
      icon: "🤖",
      description: "Advanced machine learning models, generative AI integrations, and big data pipelines to unlock actionable business intelligence.",
    },
    {
      name: "Cybersecurity",
      icon: "🛡️",
      description: "Proactive threat hunting, zero-trust network design, and AI-driven security operations centers to protect your most critical assets.",
    },
    {
      name: "DevOps & Automation",
      icon: "⚙️",
      description: "CI/CD pipeline engineering, infrastructure as code (IaC), and automated testing to accelerate software delivery cycles.",
    },
    {
      name: "Custom Software Engineering",
      icon: "💻",
      description: "Bespoke full-stack web, mobile, and enterprise applications engineered for high performance and maintainability.",
    },
    {
      name: "IT Strategy Consulting",
      icon: "💡",
      description: "Strategic roadmapping, technology assessments, and digital transformation blueprints aligned with your business objectives.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="bg-gradient-to-br from-[#0070ad] to-[#004a75] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight animate-in">
            Our Services
          </h1>
          <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto animate-in">
            Comprehensive technology solutions to drive innovation, efficiency, and growth.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center font-bold text-[#0070ad] hover:text-[#005a8d] transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
