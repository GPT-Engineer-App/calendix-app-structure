import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SignUpLoginModal from '../components/SignUpLoginModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-background-new.jpg)' }}>
      <h1 className="text-5xl font-bold mb-8 gradient-text">Welcome to CalendIX</h1>
      <p className="text-xl mb-8">Your ultimate calendar and lifestyle management tool.</p>
      <button onClick={openModal} className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Sign Up / Login</button>
      <SignUpLoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;