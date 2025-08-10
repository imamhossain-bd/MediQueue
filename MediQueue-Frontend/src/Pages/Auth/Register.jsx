import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Shield, Sparkles, Stethoscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setTimeout(() => {
      setMessage('Registration successful! Please log in.');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-pink-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Section */}
          <div className="space-y-8 lg:pr-12">
            {/* Logo + Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                HealthCare Pro
              </h1>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
              Your Health,
              <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Experience premium healthcare services with our world-class doctors and state-of-the-art facilities.
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Secure & Private</h3>
                  <p className="text-gray-600 text-sm">Your data is protected with enterprise-grade security</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Premium Experience</h3>
                  <p className="text-gray-600 text-sm">Enjoy seamless booking and personalized care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Register Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mb-4 shadow-md">
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Join Us Today
              </h2>
              <p className="text-gray-500">
                Create your account to get started
              </p>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={registerData.name}
                  onChange={e => setRegisterData({ ...registerData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={registerData.email}
                  onChange={e => setRegisterData({ ...registerData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={registerData.password}
                  onChange={e => setRegisterData({ ...registerData, password: e.target.value })}
                  className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={registerData.confirmPassword}
                  onChange={e => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-xl font-semibold text-white ${ isLoading ? 'bg-gray-400' : 'bg-gradient-to-r from-gray-900 to-blue-600 hover:from-blue-600 hover:to-gray-900 transition-all duration-700'}`}
              >
                {isLoading ? 'Creating account...' : 'Sign Up'}
              </button>
            </form>

            {/* Message */}
            {message && (
              <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-xl text-green-800 text-center">
                {message}
              </div>
            )}

            {/* Switch to Login */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?
                <button
                  onClick={() => navigate('/login')}
                  className="ml-2 text-pink-500 hover:underline font-medium"
                >
                  Sign in instead
                </button>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
