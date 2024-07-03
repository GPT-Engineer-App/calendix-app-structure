import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="PlanIt Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">PlanIt</h1>
        </div>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/planner" className="mr-4">Planner</Link>
          <Link to="/important-dates" className="mr-4">Important Dates</Link>
          <Link to="/calendar-import" className="mr-4">Import Calendar</Link>
        </nav>
      </header>
      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        &copy; 2023 PlanIt. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;