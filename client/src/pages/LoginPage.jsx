import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Mail, Lock, Eye, EyeOff, KeyRound } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login success and redirect to dashboard route
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-magic-bg flex items-center justify-center p-6 relative overflow-hidden font-vietnam">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-magic-purple/10 blur-[80px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-magic-pink/10 blur-[100px] animate-pulse" />
        
        {/* Floating Sparkles / Emojis */}
        <div className="absolute top-[15%] left-[20%] text-magic-pink animate-bounce duration-1000">
          <Sparkles className="w-8 h-8 fill-magic-pink/20" />
        </div>
        <div className="absolute bottom-[20%] left-[15%] text-magic-yellow animate-bounce duration-700">
          <span className="text-4xl">⭐</span>
        </div>
        <div className="absolute top-[25%] right-[20%] text-magic-blue animate-bounce duration-500">
          <span className="text-4xl">🎨</span>
        </div>
        <div className="absolute bottom-[15%] right-[15%] text-magic-purple animate-pulse">
          <Sparkles className="w-10 h-10 fill-magic-purple/20" />
        </div>
      </div>

      {/* Main card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo and Brand */}
        <div className="text-center mb-8 cursor-pointer flex flex-col items-center" onClick={() => navigate('/')}>
          <img src={logoImg} alt="MagicPages Logo" className="h-28 w-auto object-contain" />
          <p className="text-gray-500 font-medium mt-2">Where your stories begin.</p>
        </div>

        {/* Card */}
        <div className="bg-white border-2 border-magic-purple-light/10 rounded-[2.5rem] p-8 shadow-magic relative overflow-hidden">
          {/* Decorative Corner Accent */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-magic-yellow/40 rounded-full blur-lg" />
          <div className="absolute top-4 right-4 text-magic-yellow-dark animate-pulse">
            <span className="text-xl">⭐</span>
          </div>

          <h2 className="font-quicksand font-bold text-2xl text-gray-800 text-center mb-6">Welcome Back! ✨</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block font-quicksand font-bold text-sm text-gray-600 ml-1" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-2 border-magic-purple-light/20 focus:border-magic-purple focus:bg-white rounded-full font-quicksand text-sm text-gray-800 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="block font-quicksand font-bold text-sm text-gray-600" htmlFor="password">
                  Secret Password
                </label>
                <button
                  type="button"
                  className="text-xs font-quicksand font-bold text-magic-purple hover:underline"
                  onClick={() => alert("Just enter any email and password to log in!")}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-11 pr-11 py-3 bg-gray-50 border-2 border-magic-purple-light/20 focus:border-magic-purple focus:bg-white rounded-full font-quicksand text-sm text-gray-800 outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-magic-purple transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-gradient-to-r from-magic-purple to-magic-purple-dark text-white rounded-full font-quicksand font-bold text-base shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 border-b-4 border-magic-purple-dark hover:border-b-2 active:border-b-0"
            >
              <KeyRound className="w-5 h-5" />
              <span>Let's Color!</span>
            </button>
          </form>

          {/* Bottom Register Link */}
          <div className="mt-8 text-center">
            <p className="font-quicksand text-sm text-gray-500">
              New to MagicPages?{' '}
              <Link
                to="/register"
                className="font-bold text-magic-purple hover:text-magic-pink transition-colors underline decoration-2 underline-offset-4 decoration-magic-purple/20 hover:decoration-magic-pink/40"
              >
                Sign Up Here
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
