import React, { useState } from 'react';
import { useAddImportantDate } from '../integrations/supabase/index.js';

const ImportantDates = ({ onClose }) => {
  const [dates, setDates] = useState([]);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const addImportantDate = useAddImportantDate();

  const handleAddDate = () => {
    setDates([...dates, { date, description }]);
    setDate('');
    setDescription('');
  };

  const handleDone = async () => {
    // Save the important dates to the backend here
    for (const d of dates) {
      await addImportantDate.mutateAsync({
        user_id: 1, // Replace with actual user ID
        date: d.date,
        description: d.description,
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Important Dates</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg w-full mb-4"
            onClick={handleAddDate}
          >
            Add Date
          </button>
          <button
            type="button"
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg w-full"
            onClick={handleDone}
          >
            Done
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Added Dates</h2>
          <ul>
            {dates.map((d, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">{d.date}</span>: {d.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;