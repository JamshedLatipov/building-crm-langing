'use client';

import { DynamicContent } from "@/components/DynamicContent";
import { useAI } from "@/context/AIContext";
import { ArchitectureStudio } from "@/components/ArchitectureStudio";
import { BriefBuilder } from "@/components/BriefBuilder";

export default function Home() {
  const { profile } = useAI();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="bg-gradient-to-r from-[#0070ad] to-[#005a8d] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DynamicContent role="CEO">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Scale Your Vision with Strategic AI Transformation</h1>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto">We partner with CEOs to drive sustainable growth and operational excellence through executive-level AI advisory and large-scale delivery.</p>
            <button className="bg-white text-[#0070ad] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">Request Strategic Consultation</button>
          </DynamicContent>

          <DynamicContent role="CTO">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Reshape Your Tech Stack with Intelligent Engineering</h1>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto">Empowering CTOs with AI-driven DevOps, cloud-native architectures, and robust cybersecurity frameworks.</p>
            <button className="bg-white text-[#0070ad] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">Talk to an Architect</button>
          </DynamicContent>

          <DynamicContent role="Gov">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Secure Digital Sovereignty for Modern Government</h1>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto">Specialized AI solutions for the public sector, focusing on compliance, security, and digital inclusion.</p>
            <button className="bg-white text-[#0070ad] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">Explore Secure Infrastructure</button>
          </DynamicContent>

          <DynamicContent role={["General", "Startup", "Investor"]}>
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Realize Your Future with AI-Driven Excellence</h1>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto">Global leader in partnering with companies to transform and manage their business by harnessing the power of technology.</p>
            <button className="bg-white text-[#0070ad] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">Explore Our Solutions</button>
          </DynamicContent>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#0070ad] text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
              <p className="text-gray-600">Accelerate your delivery with AI-powered automation and cloud-native excellence.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#0070ad] text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-4">Data & AI</h3>
              <p className="text-gray-600">Turn data into actionable intelligence with our advanced LLM and data platform services.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#0070ad] text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-600">Protect your assets with proactive, AI-driven security monitoring and threat response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <p className="text-[#0070ad] font-semibold cursor-pointer">View all cases →</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <DynamicContent industry="Finance">
              <div className="group cursor-pointer">
                <div className="h-64 bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all"></div>
                  <div className="p-8 absolute bottom-0">
                    <span className="bg-[#0070ad] text-white px-3 py-1 text-xs font-bold uppercase rounded">Finance</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-[#0070ad] transition-colors">Global Bank scales AI-driven fraud detection by 300%</h3>
              </div>
            </DynamicContent>

            <DynamicContent industry="Healthcare">
               <div className="group cursor-pointer">
                <div className="h-64 bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all"></div>
                   <div className="p-8 absolute bottom-0">
                    <span className="bg-[#0070ad] text-white px-3 py-1 text-xs font-bold uppercase rounded">Healthcare</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-[#0070ad] transition-colors">Speeding up medical diagnoses with AI and cloud technology</h3>
              </div>
            </DynamicContent>

            <DynamicContent industry="General">
               <div className="group cursor-pointer">
                <div className="h-64 bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all"></div>
                   <div className="p-8 absolute bottom-0">
                    <span className="bg-[#0070ad] text-white px-3 py-1 text-xs font-bold uppercase rounded">Technology</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-[#0070ad] transition-colors">TechnoVision 2026: The multi-year AI advantage</h3>
              </div>
            </DynamicContent>

            <div className="group cursor-pointer">
              <div className="h-64 bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all"></div>
                 <div className="p-8 absolute bottom-0">
                  <span className="bg-[#0070ad] text-white px-3 py-1 text-xs font-bold uppercase rounded">Innovation</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-[#0070ad] transition-colors">How Generative AI is quietly reshaping executive decisions</h3>
            </div>
          </div>
        </div>
      </section>

      <ArchitectureStudio />
      <BriefBuilder />
    </div>
  );
}
