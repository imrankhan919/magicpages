import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboard from './pages/UserDashboard';
import UploadPage from './pages/UploadPage';
import TemplatesPage from './pages/TemplatesPage';
import GeneratingPage from './pages/GeneratingPage';
import ResultPage from './pages/ResultPage';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminCreditRequestsPage from './pages/admin/AdminCreditRequestsPage';
import AdminTemplatesPage from './pages/admin/AdminTemplatesPage';
import './App.css';

function DevSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();

  const devScreens = [
    { path: '/', label: '1. Landing' },
    { path: '/login', label: '2. Login' },
    { path: '/register', label: '3. Register' },
    { path: '/dashboard', label: '4. Dashboard' },
    { path: '/upload', label: '5. Upload' },
    { path: '/templates', label: '6. Templates' },
    { path: '/generating', label: '7. Loading...' },
    { path: '/result', label: '8. Result' },
    { path: '/profile', label: '9. Profile' },
    { path: '/admin', label: '10. Admin Dash' },
    { path: '/admin/users', label: '11. Admin Users' },
    { path: '/admin/credit-requests', label: '12. Admin Requests' },
    { path: '/admin/templates', label: '13. Admin Templates' }
  ];

  return (
    <div className="sticky top-0 z-[100] w-full bg-slate-900 text-white text-xs font-semibold py-2 px-4 flex items-center gap-3 overflow-x-auto select-none border-b border-slate-700 shadow-lg">
      <span className="bg-gradient-to-r from-magic-purple to-magic-pink text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shrink-0 animate-pulse">
        🛠️ Dev Router Switcher
      </span>
      <div className="flex items-center gap-1 shrink-0">
        {devScreens.map((screen) => (
          <button
            key={screen.path}
            onClick={() => navigate(screen.path)}
            className={`px-2.5 py-1 rounded-md transition-colors shrink-0 ${
              location.pathname === screen.path
                ? 'bg-magic-purple text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Dev preview switcher */}
      <DevSwitcher />

      {/* Declarative Routes */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/generating" element={<GeneratingPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/credit-requests" element={<AdminCreditRequestsPage />} />
          <Route path="/admin/templates" element={<AdminTemplatesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
