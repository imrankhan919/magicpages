import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, User, Mail, Phone, Lock, Eye, EyeOff, ClipboardEdit } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate register success and redirect to user dashboard route
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-magic-bg flex items-center justify-center p-6 relative overflow-hidden font-vietnam">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-magic-purple/10 blur-[80px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-magic-pink/10 blur-[100px] animate-pulse" />
        
        {/* Floating elements */}
        <div className="absolute top-[10%] right-[15%] text-magic-pink animate-bounce duration-1000">
          <span className="text-3xl">✨</span>
        </div>
        <div className="absolute bottom-[25%] left-[10%] text-magic-purple animate-pulse">
          <span className="text-4xl">📚</span>
        </div>
        <div className="absolute top-[20%] left-[15%] text-magic-blue animate-bounce">
          <span className="text-4xl">🚀</span>
        </div>
      </div>

      {/* Card Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8 cursor-pointer flex flex-col items-center" onClick={() => navigate('/')}>
          <img src={logoImg} alt="MagicPages Logo" className="h-28 w-auto object-contain" />
          <p className="text-gray-500 font-medium mt-2">Where your stories begin.</p>
        </div>

        {/* Card */}
        <div className="bg-white border-2 border-magic-purple-light/10 rounded-[2.5rem] p-8 shadow-magic relative">
          <h2 className="font-quicksand font-bold text-2xl text-gray-800 text-center mb-6">Create Account 🌟</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="block font-quicksand font-bold text-sm text-gray-600 ml-1" htmlFor="name">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Kid Explorer"
                  className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border-2 border-magic-purple-light/20 focus:border-magic-purple focus:bg-white rounded-full font-quicksand text-sm text-gray-800 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
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
                  placeholder="explorer@magicpages.com"
                  className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border-2 border-magic-purple-light/20 focus:border-magic-purple focus:bg-white rounded-full font-quicksand text-sm text-gray-800 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <label className="block font-quicksand font-bold text-sm text-gray-600 ml-1" htmlFor="phone">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border-2 border-magic-purple-light/20 focus:border-magic-purple focus:bg-white rounded-full font-quicksand text-sm text-gray-800 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Secret Password */}
            <div className="space-y-1">
              <label className="block font-quicksand font-bold text-sm text-gray-600 ml-1" htmlFor="password">
                Secret Password
              </label>
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
                  className="block w-full pl-11 pr-11 py-2.5 bg-gray-50 border-2 border-magic-purple-light/20 focus:border-magic-purple focus:bg-white rounded-full font-quicksand text-sm text-gray-800 outline-none transition-colors"
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 py-3 px-4 bg-gradient-to-r from-magic-purple to-magic-pink text-white rounded-full font-quicksand font-bold text-base shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 border-b-4 border-magic-purple-dark hover:border-b-2 active:border-b-0"
            >
              <ClipboardEdit className="w-5 h-5" />
              <span>Sign Up Now</span>
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="font-quicksand text-sm text-gray-500">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-bold text-magic-purple hover:text-magic-pink transition-colors underline decoration-2 underline-offset-4 decoration-magic-purple/20 hover:decoration-magic-pink/40"
              >
                Log In Here
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
