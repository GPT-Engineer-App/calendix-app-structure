import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layouts/Sidebar';
import Index from './pages/Index';
import SignUp from './pages/SignUp';
import LifestylePrompt from './pages/LifestylePrompt';
import CalendarImport from './pages/CalendarImport';
import ImportantDates from './pages/ImportantDates';
import Planner from './pages/Planner';

function App() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lifestyle-prompt" element={<LifestylePrompt />} />
        <Route path="/calendar-import" element={<CalendarImport />} />
        <Route path="/important-dates" element={<ImportantDates />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </Sidebar>
  );
}

export default App;