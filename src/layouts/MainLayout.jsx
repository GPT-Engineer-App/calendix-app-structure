import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>
      
    </div>
  );
};

export default MainLayout;