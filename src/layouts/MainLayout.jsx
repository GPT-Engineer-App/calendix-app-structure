import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">PlanIt</h1>
        </div>
      </header>
      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2023 PlanIt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;