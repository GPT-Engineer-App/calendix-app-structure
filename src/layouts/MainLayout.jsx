import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>
      <footer className="bg-green-600 text-white p-4 text-center">
        &copy; 2023 Supabase Planner. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;