// src/pages/ResetPassword.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tokenValid, setTokenValid] = useState(false);
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    // استخراج التوكن من الرابط
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      setTokenValid(true); // يمكن التحقق من التوكن هنا مع الخادم
    }
  }, [location]);

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    fetch('/api/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, newPassword }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Password reset successfully');
          window.location.href = '/login';
        } else {
          alert('Invalid or expired token');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex justify-center bg-gray-200 items-center h-screen">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
        {tokenValid ? (
          <>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button onClick={handleResetPassword} className="w-full bg-red-600 text-white p-2 rounded">
              Reset Password
            </button>
          </>
        ) : (
          <p>Invalid or expired token</p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
