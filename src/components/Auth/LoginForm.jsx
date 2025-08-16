import { useState } from 'react';
import Button from '../UI/Button';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (username.trim() && password.length > 2) {
      const success = onLogin(username, password);
      if (!success) {
        setError('Login failed. Please try again.');
      }
    } else {
      setError('Username and password (min 3 chars) are required.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-[#ab6bef] to-purple-700 flex items-center justify-center p-5">
      <form 
        onSubmit={handleSubmit}
        className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-10 w-full max-w-md border border-white/30 shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-center pb-1 mb-2 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
          Rajgraphy
        </h1>
        <p className="text-center text-[#c7c7c9] mb-8 text-lg">
          Share your daily stories and memories
        </p>

        <div className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-[#c7c7c9] font-semibold mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Type your name"
              maxLength={20}
              required
              className="w-full bg-gray-800 text-white pl-6 p-4 rounded-full border-none text-base focus:outline-none focus:ring-1 focus:ring-white/30"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#c7c7c9] font-semibold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              minLength={3}
              maxLength={30}
              required
              className="w-full bg-gray-800 text-white pl-6 p-4 rounded-full border-none text-base focus:outline-none focus:ring-1 focus:ring-white/30"
            />
          </div>

          {error && (
            <div className="text-red-400 text-center text-sm">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full text-lg py-4">
            Login
          </Button>

          <p className="text-center text-[#c7c7c9] text-sm">
            Inspired by Threads. <br />
            Crafted with ❤️ by{' '} Rajiv Sharma <br />
            rajivsharma93056@gmail.com
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
