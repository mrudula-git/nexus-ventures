import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="py-8 flex items-center justify-center">
      <div className="w-[110%] max-w-6xl flex rounded-lg shadow-lg overflow-hidden bg-white">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2">
          <img 
            src="/login.jpg" 
            alt="Login" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 p-8 lg:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Login</h2>
            <p className="text-gray-600">Fill in your credentials and click on the Login button</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                User name
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition-colors duration-200"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-primary hover:underline font-medium">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
