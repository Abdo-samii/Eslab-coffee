// src/pages/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [googleEmail, setGoogleEmail] = useState('');

  const handleRegister = () => {
    // تحقق من تطابق كلمة المرور مع إعادة كتابتها
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, confirmPassword, googleEmail })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Account created successfully!');
          window.location.href = '/login'; // التوجيه إلى صفحة تسجيل الدخول بعد إنشاء الحساب
        } else {
          alert('Error creating account');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex justify-center bg-gray-200 items-center h-screen">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Google Email (Optional)"
          value={googleEmail}
          onChange={(e) => setGoogleEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button onClick={handleRegister} className="w-full bg-red-600 text-white p-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
