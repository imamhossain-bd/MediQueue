import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, Calendar, MapPin, Heart, Shield, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Registration form state
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Simulate API call
    setTimeout(() => {
      setMessage('Login successful! Welcome back.');
      setIsLoading(false);
    }, 2000);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Basic validation
    const newErrors = {};
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (registerData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setMessage('Registration successful! Please check your email for verification.');
      setIsLoading(false);
    }, 2000);
  };

  const switchToRegister = () => {
    setIsLogin(false);
    setMessage('');
    setErrors({});
  };

  const switchToLogin = () => {
    setIsLogin(true);
    setMessage('');
    setErrors({});
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' ... %3E')] opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-pink-400/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-purple-400/20 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Side */}
          <div className="text-white space-y-8 lg:pr-12">
            {/* Branding */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  HealthCare Pro
                </h1>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Your Health,
                  <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Our Priority
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Experience premium healthcare services with our world-class doctors and state-of-the-art facilities.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Secure & Private</h3>
                  <p className="text-gray-400 text-sm">Your data is protected with enterprise-grade security</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Premium Experience</h3>
                  <p className="text-gray-400 text-sm">Enjoy seamless booking and personalized care</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-gray-400 text-sm">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-gray-400 text-sm">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-gray-400 text-sm">Specialties</div>
              </div>
            </div>
          </div>

          {/* Right Side - Forms */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12">

              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-4 shadow-xl">
                  {isLogin ? (
                    <Lock className="w-8 h-8 text-white" />
                  ) : (
                    <User className="w-8 h-8 text-white" />
                  )}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {isLogin ? 'Welcome Back' : 'Join Us Today'}
                </h2>
                <p className="text-gray-300">
                  {isLogin ? 'Sign in to access your healthcare dashboard' : 'Create your account to get started'}
                </p>
              </div>

              {/* Login Form */}
              {isLogin ? (
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  {/* Email */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-pink-400 transition-colors" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={loginData.email}
                      onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-pink-400 transition-colors" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={loginData.password}
                      onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-pink-400"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Remember + Forgot */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-gray-300">
                      <input type="checkbox" className="mr-2 rounded" /> Remember me
                    </label>
                    <a href="#" className="text-pink-400 hover:text-pink-300">Forgot password?</a>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 rounded-xl font-semibold text-lg ${
                      isLoading
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'
                    } text-white`}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </button>
                </form>
              ) : (
                /* Registration Form */
                <form onSubmit={handleRegisterSubmit} className="space-y-5">
                  {/* Fields... (same as yours but inside <form>) */}
                  {/* ... */}
                </form>
              )}

              {/* Success Message */}
              {message && (
                <div className="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl">
                  <p className="text-green-300 text-center font-medium">{message}</p>
                </div>
              )}

              {/* Switch Forms */}
              <div className="mt-8 text-center">
                <p className="text-gray-300">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={isLogin ? switchToRegister : switchToLogin}
                    className="ml-2 text-pink-400 hover:text-pink-300 font-semibold"
                  >
                    {isLogin ? 'Sign up now' : 'Sign in instead'}
                  </button>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Login;
