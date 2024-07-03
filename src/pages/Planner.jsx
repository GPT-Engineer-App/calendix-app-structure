import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';
import LifestylePrompt from './LifestylePrompt';
import ImportantDates from './ImportantDates';
import UserGoals from './UserGoals';

const Planner = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const [showLifestylePrompt, setShowLifestylePrompt] = useState(false);
  const [showImportantDates, setShowImportantDates] = useState(false);
  const [showUserGoals, setShowUserGoals] = useState(false);

  useEffect(() => {
    if (!session) {
      navigate('/signup');
    } else {
      // Check if the user has completed onboarding
      const userOnboardingCompleted = false; // Replace with actual check
      if (!userOnboardingCompleted) {
        setShowLifestylePrompt(true);
      }
    }
  }, [session, navigate]);

  const handleLifestylePromptClose = () => {
    setShowLifestylePrompt(false);
    setShowImportantDates(true);
  };

  const handleImportantDatesClose = () => {
    setShowImportantDates(false);
    setShowUserGoals(true);
  };

  const handleUserGoalsClose = () => {
    setShowUserGoals(false);
    // Save onboarding completion status
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Your Yearly Planner</h1>
      <p className="text-xl mb-8">Explore your schedule and manage your events.</p>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        {/* Planner content goes here */}
      </div>
      {showLifestylePrompt && <LifestylePrompt onClose={handleLifestylePromptClose} />}
      {showImportantDates && <ImportantDates onClose={handleImportantDatesClose} />}
      {showUserGoals && <UserGoals onClose={handleUserGoalsClose} />}
    </div>
  );
};

export default Planner;