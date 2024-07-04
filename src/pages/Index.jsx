import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpLoginModal from '../components/SignUpLoginModal';
import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';
import heroImage from '../../public/images/hero-image.jpg';

const Index = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (session) {
      navigate('/planner');
    }
  }, [session, navigate]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      

      <main className="w-full flex flex-col items-center">
        <section className="relative w-full h-screen">
          <img src={heroImage} alt="New Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-5xl font-bold text-white mb-4">Effortlessly organize your schedule</h2>
            <p className="text-xl text-white mb-8">Utilize digital calendars or scheduling apps to keep track of your appointments, deadlines, and events.</p>
            <button onClick={openModal} className="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg">Get started</button>
          </div>
        </section>

        <section className="w-full bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8">Smarter scheduling for your work</h3>
            <p className="text-xl mb-8">Optimize your work schedule and maximize productivity with CalendIX's AI-powered insights and recommendations.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Learn more</button>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8">Share your schedule with everyone</h3>
            <p className="text-xl mb-8">Seamlessly share your schedule with family, friends, and colleagues. CalendIX makes collaboration and coordination a breeze.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Learn more</button>
          </div>
        </section>

        <section className="w-full bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8">Get started!</h3>
            <p className="text-xl mb-8">Unlock the full potential of CalendIX and start achieving your goals today. Sign up now and experience the difference of intelligent, personalized scheduling.</p>
            <button onClick={openModal} className="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg">Sign up</button>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold mb-8 text-center">FAQ</h3>
            <div className="bg-white shadow-md rounded-lg p-8">
              <h4 className="text-2xl font-bold mb-4">What is a schedule tool, and how does it work?</h4>
              <p className="text-lg mb-8">CalendIX is an intelligent scheduling tool that learns your unique lifestyle and preferences to create a personalized, optimized schedule. It integrates with your existing calendar apps and provides smart recommendations to help you make the most of your time.</p>
              <h4 className="text-2xl font-bold mb-4">Can I sync my schedule with other calendars?</h4>
              <p className="text-lg mb-8">Yes, CalendIX seamlessly syncs with popular calendar apps like Google Calendar, Outlook, and Apple Calendar. You can easily import and export events for a streamlined experience.</p>
              <h4 className="text-2xl font-bold mb-4">Can I share my schedule with others?</h4>
              <p className="text-lg mb-8">Absolutely! CalendIX makes it easy to share your schedule with family, friends, colleagues, or anyone else who needs to stay in the loop. You have full control over what information is shared and with whom.</p>
              <h4 className="text-2xl font-bold mb-4">Is my data safe and secure with CalendIX?</h4>
              <p className="text-lg mb-8">At CalendIX, we take data privacy and security seriously. We employ industry-standard encryption and follow strict data protection protocols to ensure your information is always safe and secure.</p>
            </div>
          </div>
        </section>

        <section className="w-full bg-gray-200 py-16">
          <div className="container mx-auto">
            <h3 className="text-4xl font-bold mb-8 text-center">What's new?</h3>
            <div className="flex justify-around">
              <div className="bg-white shadow-md rounded-lg p-8 w-1/3">
                <h4 className="text-2xl font-bold mb-4">Introducing the Ultimate Schedule Tool for Your Business</h4>
                <p className="text-lg mb-8">Streamline your team's scheduling and boost productivity with CalendIX's powerful business features.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-8 w-1/3">
                <h4 className="text-2xl font-bold mb-4">Stay Organized, Productive No Matter the Schedule</h4>
                <p className="text-lg mb-8">CalendIX adapts to your ever-changing lifestyle, ensuring you stay on top of your tasks and commitments.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-8 w-1/3">
                <h4 className="text-2xl font-bold mb-4">Smart Productivity with the Intelligent Schedule Tool of the Year</h4>
                <p className="text-lg mb-8">Experience the power of AI-driven scheduling with CalendIX, voted the best intelligent planner of the year.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      

      <SignUpLoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;