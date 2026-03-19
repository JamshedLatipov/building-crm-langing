"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="bg-gradient-to-br from-[#0070ad] to-[#004a75] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight animate-in">
            About Dynamic AI
          </h1>
          <p className="text-xl mb-10 text-gray-100 max-w-3xl mx-auto animate-in">
            Pioneering the future of enterprise intelligence. We build the systems that build tomorrow.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#0070ad]">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Dynamic AI, we empower businesses through cutting-edge artificial intelligence, transforming operations and driving sustainable growth. We believe that ethical, scalable, and intelligent technology is the key to solving the world&apos;s most complex enterprise challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0070ad]">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                To be the global leader in AI-driven digital transformation, setting the standard for innovation, reliability, and security in the enterprise cloud ecosystem.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By bridging the gap between human ingenuity and machine intelligence, we create synergistic systems that elevate human potential and operational efficiency.
              </p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Dynamic AI Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#0070ad] text-center">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Innovation", desc: "Relentless pursuit of technological breakthroughs." },
                { title: "Integrity", desc: "Uncompromising ethical standards in AI development." },
                { title: "Impact", desc: "Delivering measurable, transformative results for our clients." }
              ].map((value) => (
                <div key={value.title} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
