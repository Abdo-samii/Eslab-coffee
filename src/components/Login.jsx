import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('token', data.token); // حفظ التوكن
        navigate('/'); // التوجيه للصفحة الرئيسية بعد تسجيل الدخول
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="flex justify-center w-full bg-gray-200 items-center h-screen">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        {error && <div className="mb-4 text-red-600">{error}</div>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button onClick={handleLogin} className="w-full bg-red-600 text-white p-2 rounded mb-4">
          Login
        </button>

        <div className="flex justify-between">
          <button onClick={handleForgotPassword} className="text-sm text-red-600 hover:underline">
            Forgot Password?
          </button>
          <button onClick={handleRegister} className="text-sm text-red-600 hover:underline">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
