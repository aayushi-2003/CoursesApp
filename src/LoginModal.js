import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  const handleSignUpRedirect = () => {
    console.log("Sign Up clicked");
    onClose(); 
    navigate('/profile'); 
  };

  return (
    <div className="fixed inset-0 z-[1000] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>

        <div className="relative w-full max-w-md transform rounded-lg bg-white shadow-xl transition-all">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoMdClose className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-primary-blue">
              Welcome Back!
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <button type="button" className="text-sm text-primary-blue hover:text-opacity-80">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors" onClick={handleSignUpRedirect} 
              >
                Sign In
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button className="font-semibold text-primary-blue hover:text-opacity-80">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;