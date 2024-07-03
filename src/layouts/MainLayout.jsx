import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white p-4 text-center">
        <img src="/images/logo.png" alt="PlanIt Logo" className="inline-block h-8 mr-2" />
        <span className="text-xl font-bold">PlanIt</span>
      </header>
      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>
      <footer className="bg-green-600 text-white p-4 text-center">
        &copy; 2023 PlanIt. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;