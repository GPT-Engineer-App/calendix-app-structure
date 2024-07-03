import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpLoginModal from '../components/SignUpLoginModal';

import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Index = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (session) {
      navigate('/planner');
    }
  }, [session, navigate]);

  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-8 text-blue-600">Welcome to PlanIt</h1>
      <p className="text-xl mb-8">Your ultimate calendar and lifestyle management tool.</p>
      <button onClick={openModal} className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Sign Up / Login</button>
      <SignUpLoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;