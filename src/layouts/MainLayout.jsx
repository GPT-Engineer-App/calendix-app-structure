import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="PlanIt Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">PlanIt</h1>
        </div>
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