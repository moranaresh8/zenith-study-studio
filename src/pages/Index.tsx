import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DocumentProcessing from '@/components/DocumentProcessing';
import AutomatedAssessments from '@/components/AutomatedAssessments';
import ProgressAnalytics from '@/components/ProgressAnalytics';
import AIRecommendations from '@/components/AIRecommendations';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DocumentProcessing />
      <AutomatedAssessments />
      <ProgressAnalytics />
      <AIRecommendations />
      <Footer />
    </div>
  );
};

export default Index;
