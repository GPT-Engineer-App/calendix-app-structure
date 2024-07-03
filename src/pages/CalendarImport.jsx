import React from 'react';
import { useNavigate } from 'react-router-dom';

const CalendarImport = () => {
  const navigate = useNavigate();

  const handleImport = () => {
    // Handle calendar import logic here
    navigate('/important-dates');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Import Calendar</h1>
      <p className="text-xl mb-8">Do you want to import your events from Google Calendar?</p>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg"
        onClick={handleImport}
      >
        Import Calendar
      </button>
    </div>
  );
};

export default CalendarImport;