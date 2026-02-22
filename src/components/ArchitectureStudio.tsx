'use client';

import React, { useState } from 'react';

const GOALS = ['Scalability', 'Security', 'Cost Efficiency', 'High Availability', 'Low Latency'];
const STACKS = ['Modern Web', 'Data Engineering', 'Microservices', 'Serverless'];

export const ArchitectureStudio: React.FC = () => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [stack, setStack] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Architecture Studio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Interactively design your system architecture with our AI-guided studio.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4">1. Select Business Goals</h3>
                <div className="flex flex-wrap gap-2">
                  {GOALS.map(goal => (
                    <button
                      key={goal}
                      onClick={() => toggleGoal(goal)}
                      className={`px-4 py-2 rounded-full border transition-all ${selectedGoals.includes(goal) ? 'bg-[#0070ad] text-white border-[#0070ad]' : 'bg-white text-gray-600 hover:border-gray-400'}`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">2. Select Tech Stack Focus</h3>
                <div className="grid grid-cols-2 gap-4">
                  {STACKS.map(s => (
                    <button
                      key={s}
                      onClick={() => setStack(s)}
                      className={`p-4 rounded-xl border text-left transition-all ${stack === s ? 'border-[#0070ad] bg-blue-50 ring-1 ring-[#0070ad]' : 'bg-white hover:border-gray-300'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsGenerated(true)}
                disabled={!stack || selectedGoals.length === 0}
                className="w-full bg-[#0070ad] text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 hover:bg-[#005a8d] transition-colors"
              >
                Generate Architecture Diagram
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden min-h-[400px]">
              {isGenerated ? (
                <div className="p-8 text-center animate-in fade-in duration-700">
                  <div className="text-6xl mb-6">🏗️</div>
                  <h4 className="text-xl font-bold mb-2">Personalized {stack} Architecture</h4>
                  <p className="text-sm text-gray-500 mb-6">Optimized for: {selectedGoals.join(', ')}</p>
                  <div className="space-y-2 text-left bg-gray-50 p-4 rounded-lg text-xs font-mono">
                    <p className="">[UI Layer] -{'>'} [API Gateway]</p>
                    <p className="">[API Gateway] -{'>'} [Auth Service]</p>
                    <p className="">[API Gateway] -{'>'} [{stack} Service Cluster]</p>
                    <p className="">[{stack} Service Cluster] -{'>'} [Encrypted DB]</p>
                    {selectedGoals.includes('Low Latency') && <p className="text-green-600">+ Edge Caching Enabled</p>}
                    {selectedGoals.includes('Security') && <p className="text-green-600">+ WAF & IDS/IPS Layers Added</p>}
                  </div>
                  <div className="mt-8 flex space-x-4 justify-center">
                    <button className="text-[#0070ad] text-sm font-bold underline">Export PDF</button>
                    <button className="text-[#0070ad] text-sm font-bold underline">Consult Expert</button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400 p-8">
                  <p>Configure your goals and stack to see your personalized architecture.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
