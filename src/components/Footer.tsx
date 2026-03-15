import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-white group flex items-center mb-6"
            >
              DYNAMIC<span className="text-[#0070ad] ml-0.5">AI</span>
            </Link>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Pioneering the next generation of intelligent IT solutions. From
              predictive monitoring to AI-governed delivery models.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#0070ad]">
              Services
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  AI Core Engine
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Predictive DevOps
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sovereign Cloud
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#0070ad]">
              Industries
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FinTech
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Public Sector
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Global Startups
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#0070ad]">
              Company
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Dynamic AI
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 border-t border-gray-900 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <p>© 2026 Dynamic AI. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Security Standards
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
