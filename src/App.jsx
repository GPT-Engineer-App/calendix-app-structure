import { Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import SignUp from './pages/SignUp';
import LifestylePrompt from './pages/LifestylePrompt';
import CalendarImport from './pages/CalendarImport';
import ImportantDates from './pages/ImportantDates';
import Planner from './pages/Planner';
import { useSupabaseAuth } from './integrations/supabase/auth.jsx';
import MainLayout from './layouts/MainLayout'; // Import MainLayout

function App() {
  const { session } = useSupabaseAuth();

  return (
    <MainLayout> {/* Wrap Routes with MainLayout */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lifestyle-prompt" element={session ? <LifestylePrompt /> : <Navigate to="/signup" />} />
        <Route path="/calendar-import" element={session ? <CalendarImport /> : <Navigate to="/signup" />} />
        <Route path="/important-dates" element={session ? <ImportantDates /> : <Navigate to="/signup" />} />
        <Route path="/planner" element={session ? <Planner /> : <Navigate to="/signup" />} />
      </Routes>
    </MainLayout>
  );
}

export default App;