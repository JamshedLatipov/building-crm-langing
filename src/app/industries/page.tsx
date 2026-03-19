"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      name: "Finance",
      icon: "📈",
      description: "Secure, AI-driven architectures for algorithmic trading, fraud detection, and zero-trust banking.",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      description: "Cloud-native solutions for predictive diagnostics, patient data enclaves, and regulatory compliance.",
    },
    {
      name: "Telecom",
      icon: "📡",
      description: "Next-generation network automation, edge computing, and AI-powered predictive maintenance.",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Smart factory integrations, supply chain optimization, and digital twin implementations.",
    },
    {
      name: "Public Sector",
      icon: "🏛️",
      description: "Secure, scalable citizen services, smart city infrastructure, and data modernization.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="bg-gradient-to-br from-[#0070ad] to-[#004a75] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight animate-in">
            Industries We Serve
          </h1>
          <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto animate-in">
            Tailored AI and Cloud solutions designed for the unique challenges of your sector.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-gray-50 border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {industry.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center font-bold text-[#0070ad] hover:text-[#005a8d] transition-colors group/link"
                >
                  Explore solutions
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
