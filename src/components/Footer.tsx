import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#0070ad]">Insights</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">AI Guide 2026</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Future Tech</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#0070ad]">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Cloud</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Data & AI</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#0070ad]">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Finance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Manufacturing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#0070ad]">About</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Who we are</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Values</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex justify-between items-center text-gray-500 text-sm">
          <p>© 2026 CAPGEMINI_AI. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Notice</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
