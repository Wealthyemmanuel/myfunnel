import React, { useState } from 'react';
import { FunnelStep, SubscriberData } from './types';
import { OptinPage } from './components/OptinPage';
import { StoryPage } from './components/StoryPage';

export default function App() {
  const [currentStep, setCurrentStep] = useState<FunnelStep>('optin');
  const [subscriber, setSubscriber] = useState<SubscriberData>(() => {
    try {
      const saved = localStorage.getItem('lead_subscriber');
      return saved ? JSON.parse(saved) : { name: '', email: '' };
    } catch {
      return { name: '', email: '' };
    }
  });

  const handleOptinSuccess = (data: SubscriberData) => {
    setSubscriber(data);
    try {
      localStorage.setItem('lead_subscriber', JSON.stringify(data));
    } catch (e) {
      console.warn('Storage warning:', e);
    }
    setCurrentStep('story');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans">
      {currentStep === 'optin' && (
        <OptinPage
          onSuccess={handleOptinSuccess}
          subscriber={subscriber}
        />
      )}

      {currentStep === 'story' && (
        <StoryPage
          subscriber={subscriber}
        />
      )}
    </div>
  );
}
