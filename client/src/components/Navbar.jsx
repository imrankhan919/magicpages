import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, LayoutDashboard, Image, Palette, User, ShieldAlert, LogOut } from 'lucide-react';
import CreditBadge from './CreditBadge';
import logoImg from '../assets/logo.png';

export default function Navbar({ 
  isLoggedIn = false, 
  isAdmin = false, 
  credits = 5 
}) {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to determine if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-magic-purple-light/20 bg-white/75 backdrop-blur-md px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to={isLoggedIn ? "/dashboard" : "/"} 
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
        >
          <img src={logoImg} alt="MagicPages Logo" className="h-16 w-auto object-contain" />
          {isAdmin && (
            <span className="ml-2 text-xs font-quicksand font-bold px-2 py-0.5 bg-magic-pink text-white rounded-full uppercase tracking-wider animate-pulse">
              Admin
            </span>
          )}
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <>
              {!isAdmin ? (
                // Logged In User Links
                <div className="hidden md:flex items-center gap-4">
                  <NavLink 
                    to="/dashboard" 
                    className={({ isActive }) => `flex items-center gap-1.5 px-3 py-2 rounded-full font-quicksand font-bold text-sm transition-all duration-200 ${
                      isActive 
                        ? 'bg-magic-purple text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-magic-purple-soft hover:text-magic-purple-dark'
                    }`}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Dashboard</span>
                  </NavLink>

                  <NavLink 
                    to="/upload" 
                    className={({ isActive }) => `flex items-center gap-1.5 px-3 py-2 rounded-full font-quicksand font-bold text-sm transition-all duration-200 ${
                      isActive 
                        ? 'bg-magic-purple text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-magic-purple-soft hover:text-magic-purple-dark'
                    }`}
                  >
                    <Image className="w-4 h-4" />
                    <span>Upload Photo</span>
                  </NavLink>

                  <NavLink 
                    to="/templates" 
                    className={({ isActive }) => `flex items-center gap-1.5 px-3 py-2 rounded-full font-quicksand font-bold text-sm transition-all duration-200 ${
                      isActive 
                        ? 'bg-magic-purple text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-magic-purple-soft hover:text-magic-purple-dark'
                    }`}
                  >
                    <Palette className="w-4 h-4" />
                    <span>Templates</span>
                  </NavLink>

                  <NavLink 
                    to="/profile" 
                    className={({ isActive }) => `flex items-center gap-1.5 px-3 py-2 rounded-full font-quicksand font-bold text-sm transition-all duration-200 ${
                      isActive 
                        ? 'bg-magic-purple text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-magic-purple-soft hover:text-magic-purple-dark'
                    }`}
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </NavLink>
                </div>
              ) : (
                // Admin Links
                <div className="hidden md:flex items-center gap-4">
                  <NavLink 
                    to="/admin" 
                    end
                    className={({ isActive }) => `flex items-center gap-1.5 px-3 py-2 rounded-full font-quicksand font-bold text-sm transition-all duration-200 ${
                      isActive 
                        ? 'bg-magic-purple text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-magic-purple-soft hover:text-magic-purple-dark'
                    }`}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Admin Panel</span>
                  </NavLink>

                  <NavLink 
                    to="/admin/users" 
                    className={({ isActive }) => `flex items-center gap-1.5 px-3 py-2 rounded-full font-quicksand font-bold text-sm transition-all duration-200 ${
                      isActive 
                        ? 'bg-magic-purple text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-magic-purple-soft hover:text-magic-purple-dark'
                    }`}
                  >
                    <User className="w-4 h-4" />
                    <span>Users</span>
                  </NavLink>

                  <NavLink 
                    to="/admin/credit-requests" 
                    className={({ isActive }) => `flex items-center gap-1.5 px-3 py-2 rounded-full font-quicksand font-bold text-sm transition-all duration-200 ${
                      isActive 
                        ? 'bg-magic-purple text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-magic-purple-soft hover:text-magic-purple-dark'
                    }`}
                  >
                    <ShieldAlert className="w-4 h-4" />
                    <span>Requests</span>
                  </NavLink>

                  <NavLink 
                    to="/admin/templates" 
                    className={({ isActive }) => `flex items-center gap-1.5 px-3 py-2 rounded-full font-quicksand font-bold text-sm transition-all duration-200 ${
                      isActive 
                        ? 'bg-magic-purple text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-magic-purple-soft hover:text-magic-purple-dark'
                    }`}
                  >
                    <Palette className="w-4 h-4" />
                    <span>Templates</span>
                  </NavLink>
                </div>
              )}

              {/* User actions / Credits */}
              <div className="flex items-center gap-3">
                {!isAdmin && <CreditBadge credits={credits} />}
                
                {/* Switch to Admin / User Toggle */}
                <Link
                  to={isAdmin ? "/dashboard" : "/admin"}
                  className="hidden lg:block text-xs font-quicksand font-bold text-magic-purple hover:underline"
                >
                  {isAdmin ? 'Switch to User View' : 'Switch to Admin View'}
                </Link>

                <button 
                  onClick={() => navigate("/")}
                  className="p-2 text-gray-500 hover:text-magic-pink rounded-full hover:bg-gray-100 transition-colors duration-200"
                  title="Sign Out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </>
          ) : (
            // Guest Links
            <div className="flex items-center gap-3">
              <Link 
                to="/login"
                className="px-5 py-2 font-quicksand font-bold text-gray-700 hover:text-magic-purple transition-colors duration-200"
              >
                Log In
              </Link>
              <Link 
                to="/register"
                className="px-6 py-2.5 bg-gradient-to-r from-magic-purple to-magic-pink text-white rounded-full font-quicksand font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Sign Up Free
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
