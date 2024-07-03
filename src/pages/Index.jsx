import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUpLoginModal from '../components/SignUpLoginModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handlePostMessage = (event) => {
      const allowedOrigins = ['https://preview-2258c8b3--calendix-app-structure.gptengineer.run', 'https://run.gptengineer.app'];
      if (!allowedOrigins.includes(event.origin)) {
        console.error(`Blocked postMessage from disallowed origin: ${event.origin}`);
        return;
      }
      // Log the received message
      console.log('Received message:', event.data);
    };

    window.addEventListener('message', handlePostMessage);

    return () => {
      window.removeEventListener('message', handlePostMessage);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-background-new.jpg)' }}>
      <h1 className="text-5xl font-bold mb-8 gradient-text">Welcome to PlanIt</h1>
      <p className="text-xl mb-8">Your ultimate calendar and lifestyle management tool.</p>
      <button onClick={openModal} className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Sign Up / Login</button>
      <SignUpLoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;