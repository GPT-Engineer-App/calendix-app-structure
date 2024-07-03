import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Index from './pages/Index.jsx';
import './index.css';
import { SupabaseProvider } from './integrations/supabase/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </Router>
    </SupabaseProvider>
  </React.StrictMode>,
);