import React, { useState } from 'react';

const UserGoals = ({ onClose }) => {
  const [goals, setGoals] = useState('');

  const handleSave = () => {
    // Save the goals to the state or backend here
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Your Goals</h1>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="5"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          placeholder="Enter your goals here..."
        />
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg w-full"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UserGoals;