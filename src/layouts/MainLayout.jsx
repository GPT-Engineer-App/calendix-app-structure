import React from 'react';

import headerImage from '../../public/images/header-image.jpg';
import footerImage from '../../public/images/footer-image.jpg';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="relative w-full h-64">
        <img src={headerImage} alt="Header" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white mb-2">Achieve your long-term goals</h1>
          <p className="text-lg text-white">Learn More: CalendIX's AI-powered goal tracking system</p>
        </div>
      </header>
      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>
      <footer className="relative w-full h-64">
        <img src={footerImage} alt="Footer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h4 className="text-2xl font-bold text-white mb-2">Share your journey with loved ones</h4>
          <p className="text-lg text-white">Learn More: CalendIX makes it easy to share your goals</p>
        </div>
        <div className="container mx-auto mt-4 text-center text-white">
          <p>&copy; 2023 PlanIt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;