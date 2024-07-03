import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LifestylePrompt = () => {
  const [workingHours, setWorkingHours] = useState('');
  const [commuteTime, setCommuteTime] = useState('');
  const [readingSpeed, setReadingSpeed] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    // Save the lifestyle details to the state or backend here
    navigate('/calendar-import');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Lifestyle Questions</h1>
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="workingHours">
            What are your typical working hours?
          </label>
          <input
            type="text"
            id="workingHours"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="commuteTime">
            How long is your daily commute?
          </label>
          <input
            type="text"
            id="commuteTime"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={commuteTime}
            onChange={(e) => setCommuteTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="readingSpeed">
            How fast do you read? (words per minute)
          </label>
          <input
            type="text"
            id="readingSpeed"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={readingSpeed}
            onChange={(e) => setReadingSpeed(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg w-full"
          onClick={handleNext}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default LifestylePrompt;