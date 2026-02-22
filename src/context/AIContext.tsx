'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'CEO' | 'CTO' | 'Gov' | 'Startup' | 'Investor' | 'General';
export type Industry = 'Telecom' | 'Finance' | 'Healthcare' | 'Manufacturing' | 'Public Sector' | 'General';

interface VisitorProfile {
  role: UserRole;
  industry: Industry;
  region: string;
  maturity: 'Low' | 'Medium' | 'High';
}

interface AIContextType {
  profile: VisitorProfile;
  setProfile: (profile: Partial<VisitorProfile>) => void;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

export const AIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfileState] = useState<VisitorProfile>({
    role: 'General',
    industry: 'General',
    region: 'Global',
    maturity: 'Medium',
  });

  const setProfile = (newProfile: Partial<VisitorProfile>) => {
    setProfileState((prev) => ({ ...prev, ...newProfile }));
  };

  // Mock AI Profiler: In a real app, this would analyze behavior or use cookies
  useEffect(() => {
    const savedProfile = localStorage.getItem('visitorProfile');
    if (savedProfile) {
      setProfileState(JSON.parse(savedProfile));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('visitorProfile', JSON.stringify(profile));
  }, [profile]);

  return (
    <AIContext.Provider value={{ profile, setProfile }}>
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => {
  const context = useContext(AIContext);
  if (context === undefined) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
};
