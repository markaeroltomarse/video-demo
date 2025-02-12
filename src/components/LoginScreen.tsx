import React from 'react';
import { Mail, Lock, Github, Twitter } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}>
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="email" className="sr-only">Email</label>
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="email"
                name="email"
                type="email"
                value="demo@example.com"
                readOnly
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="password"
                name="password"
                type="password"
                value="••••••••"
                readOnly
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50"
            >
              <Github className="h-5 w-5 text-gray-700" />
              <span className="ml-2">Github</span>
            </button>
            <button
              type="button"
              className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50"
            >
              <Twitter className="h-5 w-5 text-blue-400" />
              <span className="ml-2">Twitter</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};