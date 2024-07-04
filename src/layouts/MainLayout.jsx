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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-xl font-bold mb-2">About Us</h4>
            <p>Learn more about our mission and values.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Contact</h4>
            <p>Get in touch with us for any queries or support.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Follow Us</h4>
            <p>Stay updated with our latest news and updates.</p>
          </div>
        </div>
        <div className="container mx-auto mt-4">
          <p>&copy; 2023 PlanIt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;