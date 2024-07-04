import React from 'react';

import headerImage from '../../public/images/header-image.jpg';
import footerImage from '../../public/images/footer-image.jpg';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="relative w-full h-64">
        <img src={headerImage} alt="Header" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white mb-2">Effortlessly organize your schedule</h1>
          <p className="text-lg text-white">Utilize digital calendars or scheduling apps to keep track of your appointments, deadlines, and events.</p>
        </div>
      </header>
      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>
      <footer className="relative w-full h-64">
        <img src={footerImage} alt="Footer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h4 className="text-2xl font-bold text-white mb-2">Get started!</h4>
          <p className="text-lg text-white">Utilize digital calendars or scheduling apps to keep track of your appointments, deadlines, and events.</p>
        </div>
        <div className="container mx-auto mt-4 text-center text-white">
          <p>&copy; 2023 PlanIt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;