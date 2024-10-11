import React, { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'seydiop@07' && password === 'admin') {
      setError('');
      localStorage.setItem('isAuthenticated', 'true');
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } else {
      setError('Invalid username or password. Try again!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-80 border border-transparent rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-80 border border-transparent rounded-md text-sm shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-white focus:ring-2 focus:ring-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="text-red-300 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;