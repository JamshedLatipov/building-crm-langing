'use client';

import React from 'react';
import { useAI, UserRole, Industry } from '@/context/AIContext';

interface DynamicContentProps {
  role?: UserRole | UserRole[];
  industry?: Industry | Industry[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const DynamicContent: React.FC<DynamicContentProps> = ({
  role,
  industry,
  children,
  fallback = null
}) => {
  const { profile } = useAI();

  const roleMatch = !role || (Array.isArray(role) ? role.includes(profile.role) : profile.role === role);
  const industryMatch = !industry || (Array.isArray(industry) ? industry.includes(profile.industry) : profile.industry === industry);

  if (roleMatch && industryMatch) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};
