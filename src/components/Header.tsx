'use client';

import React from 'react';
import Link from 'next/link';
import { useAI } from '@/context/AIContext';
import { ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const { profile, setProfile } = useAI();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-black tracking-tighter text-gray-900 group flex items-center">
              DYNAMIC<span className="text-[#0070ad] group-hover:animate-pulse ml-0.5">AI</span>
            </Link>
            <nav className="hidden md:ml-12 md:flex md:space-x-10">
              {['Insights', 'Industries', 'Services', 'About Us'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm font-semibold text-gray-600 hover:text-[#0070ad] transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0070ad] transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative flex flex-col items-start">
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1 ml-1">Context</span>
              <div className="relative">
                <select
                  value={profile.role}
                  onChange={(e) => setProfile({ role: e.target.value as any })}
                  className="text-xs font-bold border border-gray-100 bg-gray-50 rounded-lg pl-3 pr-8 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0070ad]/20 appearance-none hover:bg-gray-100 transition-colors"
                >
                  <option value="General">Generic</option>
                  <option value="CEO">Executive (CEO)</option>
                  <option value="CTO">Technical (CTO)</option>
                  <option value="Gov">Government</option>
                  <option value="Startup">Startup Founder</option>
                  <option value="Investor">Investor</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <ChevronDown size={12} />
                </div>
              </div>
            </div>
            <Link href="#" className="bg-[#0070ad] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-[#005a8d] hover:shadow-blue-500/40 transition-all active:scale-95">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
