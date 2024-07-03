import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-8">Welcome to CalendIX</h1>
      <p className="text-xl mb-8">Your ultimate calendar and lifestyle management tool.</p>
      <Link to="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Sign Up</Link>
    </div>
  );
};

export default Index;