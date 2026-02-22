'use client';

import Image from "next/image";
import { Header } from "@/components/Header";
import { ArchitectureStudio } from "@/components/ArchitectureStudio";
import { BriefBuilder } from "@/components/BriefBuilder";
import { DynamicContent } from "@/components/DynamicContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />

      {/* Dynamic Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0070ad] to-[#004a75] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <DynamicContent role="CEO">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight animate-in">Driving Sustainable Growth through AI Transformation</h1>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto animate-in" style={{ animationDelay: '0.1s' }}>Partner with the global leader in consulting and technology to future-proof your business strategy with ethical AI.</p>
            <button className="bg-white text-[#0070ad] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg animate-in" style={{ animationDelay: '0.2s' }}>Request Strategic Consultation</button>
          </DynamicContent>

          <DynamicContent role="CTO">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight animate-in">Reshape Your Tech Stack with Intelligent Engineering</h1>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto animate-in" style={{ animationDelay: '0.1s' }}>Empowering CTOs with AI-driven DevOps, cloud-native architectures, and robust cybersecurity frameworks.</p>
            <button className="bg-white text-[#0070ad] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg animate-in" style={{ animationDelay: '0.2s' }}>Talk to an Architect</button>
          </DynamicContent>

          <DynamicContent role="Gov">
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight animate-in">Secure Digital Sovereignty for Modern Government</h1>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto animate-in" style={{ animationDelay: '0.1s' }}>Specialized AI solutions for the public sector, focusing on compliance, security, and digital inclusion.</p>
            <button className="bg-white text-[#0070ad] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg animate-in" style={{ animationDelay: '0.2s' }}>Explore Secure Infrastructure</button>
          </DynamicContent>

          <DynamicContent role={["General", "Startup", "Investor"]}>
            <h1 className="text-5xl font-extrabold mb-6 tracking-tight animate-in">Realize Your Future with AI-Driven Excellence</h1>
            <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto animate-in" style={{ animationDelay: '0.1s' }}>Global leader in partnering with companies to transform and manage their business by harnessing the power of technology.</p>
            <button className="bg-white text-[#0070ad] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg animate-in" style={{ animationDelay: '0.2s' }}>Explore Our Solutions</button>
          </DynamicContent>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-[#0070ad] text-4xl mb-4 transition-transform group-hover:scale-110">☁️</div>
              <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
              <p className="text-gray-600 mb-6">Accelerate your delivery with AI-powered automation and cloud-native excellence.</p>
              <button className="text-[#0070ad] font-bold text-sm hover:underline">Learn more →</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-[#0070ad] text-4xl mb-4 transition-transform group-hover:scale-110">🤖</div>
              <h3 className="text-xl font-bold mb-4">Data & AI</h3>
              <p className="text-gray-600 mb-6">Turn data into actionable intelligence with our advanced LLM and data platform services.</p>
              <button className="text-[#0070ad] font-bold text-sm hover:underline">Learn more →</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="text-[#0070ad] text-4xl mb-4 transition-transform group-hover:scale-110">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">Protect your assets with proactive, AI-driven security monitoring and threat response.</p>
              <button className="text-[#0070ad] font-bold text-sm hover:underline">Learn more →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <p className="text-[#0070ad] font-semibold cursor-pointer hover:underline transition-all">View all cases →</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <DynamicContent industry="Finance">
              <div className="group cursor-pointer">
                <div className="h-80 rounded-2xl mb-6 overflow-hidden relative shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Finance AI"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="p-8 absolute bottom-0 flex justify-between items-end w-full">
                    <div>
                      <span className="bg-[#0070ad] text-white px-3 py-1 text-xs font-bold uppercase rounded mb-3 inline-block">Finance</span>
                      <h3 className="text-2xl font-bold text-white leading-tight">Global Bank scales AI-driven fraud detection by 300%</h3>
                    </div>
                    <button className="bg-white text-[#0070ad] px-5 py-2 rounded-full font-bold text-xs hover:bg-[#0070ad] hover:text-white transition-all">Read Story</button>
                  </div>
                </div>
              </div>
            </DynamicContent>

            <DynamicContent industry="Healthcare">
               <div className="group cursor-pointer">
                <div className="h-80 rounded-2xl mb-6 overflow-hidden relative shadow-lg">
                   <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                    alt="Healthcare AI"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                   <div className="p-8 absolute bottom-0 flex justify-between items-end w-full">
                    <div>
                      <span className="bg-[#0070ad] text-white px-3 py-1 text-xs font-bold uppercase rounded mb-3 inline-block">Healthcare</span>
                      <h3 className="text-2xl font-bold text-white leading-tight">Speeding up medical diagnoses with AI and cloud technology</h3>
                    </div>
                    <button className="bg-white text-[#0070ad] px-5 py-2 rounded-full font-bold text-xs hover:bg-[#0070ad] hover:text-white transition-all">Read Story</button>
                  </div>
                </div>
              </div>
            </DynamicContent>

            <DynamicContent industry="General">
               <div className="group cursor-pointer">
                <div className="h-80 rounded-2xl mb-6 overflow-hidden relative shadow-lg">
                   <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                    alt="Technology AI"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                   <div className="p-8 absolute bottom-0 flex justify-between items-end w-full">
                    <div>
                      <span className="bg-[#0070ad] text-white px-3 py-1 text-xs font-bold uppercase rounded mb-3 inline-block">Technology</span>
                      <h3 className="text-2xl font-bold text-white leading-tight">TechnoVision 2026: The multi-year AI advantage</h3>
                    </div>
                    <button className="bg-white text-[#0070ad] px-5 py-2 rounded-full font-bold text-xs hover:bg-[#0070ad] hover:text-white transition-all">Read Story</button>
                  </div>
                </div>
              </div>
            </DynamicContent>

            <div className="group cursor-pointer">
              <div className="h-80 rounded-2xl mb-6 overflow-hidden relative shadow-lg">
                 <Image
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
                  alt="Innovation AI"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                 <div className="p-8 absolute bottom-0 flex justify-between items-end w-full">
                  <div>
                    <span className="bg-[#0070ad] text-white px-3 py-1 text-xs font-bold uppercase rounded mb-3 inline-block">Innovation</span>
                    <h3 className="text-2xl font-bold text-white leading-tight">Generative AI is quietly reshaping executive decisions</h3>
                  </div>
                  <button className="bg-white text-[#0070ad] px-5 py-2 rounded-full font-bold text-xs hover:bg-[#0070ad] hover:text-white transition-all">Read Story</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArchitectureStudio />
      <BriefBuilder />
    </div>
  );
}
