'use client';

import React from 'react';
import Link from 'next/link';
import { useAI } from '@/context/AIContext';

export const Header: React.FC = () => {
  const { profile, setProfile } = useAI();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#0070ad]">
              CAPGEMINI<span className="text-gray-400">_AI</span>
            </Link>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <Link href="/insights" className="text-gray-600 hover:text-[#0070ad] font-medium transition-colors">Insights</Link>
              <Link href="/industries" className="text-gray-600 hover:text-[#0070ad] font-medium transition-colors">Industries</Link>
              <Link href="/services" className="text-gray-600 hover:text-[#0070ad] font-medium transition-colors">Services</Link>
              <Link href="/about" className="text-gray-600 hover:text-[#0070ad] font-medium transition-colors">About Us</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
             <select
              value={profile.role}
              onChange={(e) => setProfile({ role: e.target.value as any })}
              className="text-xs border rounded p-1 bg-gray-50"
            >
              <option value="General">Select Role</option>
              <option value="CEO">CEO</option>
              <option value="CTO">CTO</option>
              <option value="Gov">Gov</option>
              <option value="Startup">Startup</option>
              <option value="Investor">Investor</option>
            </select>
            <Link href="/contact" className="bg-[#0070ad] text-white px-4 py-2 rounded font-medium hover:bg-[#005a8d] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
