import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white h-screen">
        <div className="p-4 flex items-center">
          <FaCalendarAlt className="text-3xl mr-2" />
          <span className="text-xl font-bold">CalendIX</span>
        </div>
        <nav className="mt-10">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="/">Home</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="/signup">Sign Up</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="/lifestyle-prompt">Lifestyle Questions</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="/calendar-import">Import Calendar</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="/important-dates">Important Dates</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="/planner">Planner</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;