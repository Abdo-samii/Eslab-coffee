import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // من هنا يمكنك إرسال البريد الإلكتروني لعملية استعادة كلمة المرور
    fetch('http://localhost:5000/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Check your email for password reset instructions');
        } else {
          alert('Email not found');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex justify-center bg-gray-200 items-center h-screen">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button onClick={handleForgotPassword} className="w-full bg-red-600 text-white p-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
