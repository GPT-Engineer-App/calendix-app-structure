import React from 'react';

const Planner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Your Yearly Planner</h1>
      <p className="text-xl mb-8">Explore your schedule and manage your events.</p>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        {/* Planner content goes here */}
      </div>
    </div>
  );
};

export default Planner;