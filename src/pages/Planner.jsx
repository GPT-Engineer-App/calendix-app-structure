import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';
import { useLifestyleQuestions, useImportantDates, useAddLifestyleQuestion, useAddImportantDate } from '../integrations/supabase/index.js';
import LifestylePrompt from './LifestylePrompt';
import ImportantDates from './ImportantDates';
import UserGoals from './UserGoals';


const Planner = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const { data: lifestyleQuestions, isLoading: isLoadingLifestyleQuestions } = useLifestyleQuestions();
  const { data: importantDates, isLoading: isLoadingImportantDates } = useImportantDates();
  const addLifestyleQuestion = useAddLifestyleQuestion();
  const addImportantDate = useAddImportantDate();

  useEffect(() => {
    if (!session) {
      navigate('/signup');
    } else {
      // Check if the user has completed onboarding
      const userOnboardingCompleted = lifestyleQuestions?.length > 0 && importantDates?.length > 0;
      if (!userOnboardingCompleted) {
        setShowCarousel(true);
      }
    }
  }, [session, navigate, lifestyleQuestions, importantDates]);

  const handleNext = () => {
    setCarouselIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCarouselIndex((prevIndex) => prevIndex - 1);
  };

  const handleFinish = () => {
    setShowCarousel(false);
    // Save onboarding completion status
  };

  if (isLoadingLifestyleQuestions || isLoadingImportantDates) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Your Yearly Planner</h1>
      <p className="text-xl mb-8">Explore your schedule and manage your events.</p>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        {/* Planner content goes here */}
      </div>
      {showCarousel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="flex justify-between mb-4">
              <span className={`breadcrumb-item ${carouselIndex === 0 ? 'font-bold' : ''}`}>Lifestyle Questions</span>
              <span className={`breadcrumb-item ${carouselIndex === 1 ? 'font-bold' : ''}`}>Important Dates</span>
              <span className={`breadcrumb-item ${carouselIndex === 2 ? 'font-bold' : ''}`}>Your Goals</span>
            </div>
            <div className="carousel">
              {carouselIndex === 0 && <LifestylePrompt onClose={handleNext} />}
              {carouselIndex === 1 && <ImportantDates onClose={handleNext} />}
              {carouselIndex === 2 && <UserGoals onClose={handleFinish} />}
            </div>
            <div className="flex justify-between mt-4">
              {carouselIndex > 0 && <button onClick={handlePrev} className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Previous</button>}
              {carouselIndex < 2 && <button onClick={handleNext} className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Next</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planner;