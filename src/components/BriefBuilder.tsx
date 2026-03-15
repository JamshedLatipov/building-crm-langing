'use client';

import React, { useState, useEffect } from 'react';
import { useAI } from '@/context/AIContext';

const STEPS = [
  { id: 1, title: 'Project Type', questions: ['What are you building? (Web App, Mobile, AI Platform, etc.)'] },
  { id: 2, title: 'Scope', questions: ['What is the primary business goal?', 'Who are the target users?'] },
  { id: 3, title: 'Constraints', questions: ['What is your preferred timeline?', 'Are there specific security requirements?'] }
];

export const BriefBuilder: React.FC = () => {
  const { profile } = useAI();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [brief, setBrief] = useState<string | null>(null);

  useEffect(() => {
    const defaultAnswers: Record<string, string> = {};
    if (profile.industry === 'Finance') {
      defaultAnswers['Are there specific security requirements?'] = 'Strict PCI-DSS Compliance, End-to-End Encryption';
      defaultAnswers['Who are the target users?'] = 'High Net Worth Individuals / Banking Clients';
    } else if (profile.industry === 'Healthcare') {
      defaultAnswers['Are there specific security requirements?'] = 'HIPAA Compliance, PII Data Anonymization';
      defaultAnswers['What are you building? (Web App, Mobile, AI Platform, etc.)'] = 'Telehealth Mobile Platform';
    } else if (profile.role === 'Startup') {
      defaultAnswers['What is your preferred timeline?'] = 'MVP in 4-6 weeks';
    } else if (profile.role === 'Gov') {
      defaultAnswers['Are there specific security requirements?'] = 'FedRAMP Compliance, Sovereign Cloud';
    }

    setAnswers(prev => ({ ...prev, ...defaultAnswers }));
  }, [profile.industry, profile.role]);

  const handleNext = () => {
    if (step < STEPS.length) {
      setStep(step + 1);
    } else {
      generateBrief();
    }
  };

  const generateBrief = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const pType = answers['What are you building? (Web App, Mobile, AI Platform, etc.)'] || 'Digital Transformation';
      const goal = answers['What is the primary business goal?'] || 'Not specified';
      const target = answers['Who are the target users?'] || 'Not specified';
      const time = answers['What is your preferred timeline?'] || 'TBD';
      const sec = answers['Are there specific security requirements?'] || 'Enterprise Standard';

      const pTypeLower = pType.toLowerCase();
      const techStack = pTypeLower.includes('mobile') ? 'React Native / Flutter' :
                        pTypeLower.includes('ai') ? 'Python / LangChain / HuggingFace' :
                        pTypeLower.includes('web') ? 'Next.js / React / Node.js' : 'Cloud Native Architecture';

      const aiRecs = [];
      if (pTypeLower.includes('ai')) {
        aiRecs.push('- Fine-tune LLMs for specific industry data.');
        aiRecs.push('- Implement RAG with vector databases (Pinecone/Weaviate).');
      } else if (pTypeLower.includes('mobile')) {
        aiRecs.push('- Integrate on-device ML models for offline capabilities.');
        aiRecs.push('- Use AI-driven analytics for user behavior tracking.');
      } else {
        aiRecs.push('- Implement RAG (Retrieval-Augmented Generation) for knowledge management.');
        aiRecs.push('- Deploy automated CI/CD pipelines with integrated security scanning.');
        aiRecs.push('- Use predictive monitoring for proactive system health.');
      }

      const generatedBrief = `
# Project Brief: ${pType}

## Strategic Overview
Goal: ${goal}
Target Audience: ${target}

## Technical Roadmap
Focus: High-performance scalable architecture using ${techStack}.
Security: ${sec}
Estimated Timeline: ${time}

## AI Recommendations
${aiRecs.join('\n')}
`;
      setBrief(generatedBrief);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">AI Project Brief Builder</h2>
            <p className="text-gray-500">Answer a few questions and let our AI draft your project roadmap.</p>
          </div>

          {!brief ? (
            <div className="space-y-8">
              <div className="flex justify-between mb-8">
                {STEPS.map(s => (
                  <div key={s.id} className={`h-2 flex-1 mx-1 rounded-full ${step >= s.id ? 'bg-[#0070ad]' : 'bg-gray-200'}`}></div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">{STEPS[step-1].title}</h3>
                {STEPS[step-1].questions.map(q => (
                  <div key={q}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{q}</label>
                    <textarea
                      className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-[#0070ad] focus:outline-none"
                      rows={3}
                      onChange={(e) => setAnswers({...answers, [q]: e.target.value})}
                      value={answers[q] || ''}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-[#0070ad] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#005a8d] transition-colors"
              >
                {step === STEPS.length ? (isGenerating ? 'Analyzing...' : 'Generate Brief') : 'Next Step'}
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="bg-blue-50 p-8 rounded-2xl mb-8 whitespace-pre-wrap font-mono text-sm border border-blue-100">
                {brief}
              </div>
              <div className="flex space-x-4">
                <button className="flex-1 bg-[#0070ad] text-white py-4 rounded-xl font-bold">Download PDF</button>
                <button
                  onClick={() => {setBrief(null); setStep(1); setAnswers({});}}
                  className="flex-1 border border-[#0070ad] text-[#0070ad] py-4 rounded-xl font-bold"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
