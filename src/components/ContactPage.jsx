// src/components/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  return (<div className=" w-full h-screen bg-gray-200 flex flex-col items-center justify-center py-6 px-4">
    {/* عنوان الصفحة */}
    <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
    Contact Us
    </h2>
      <form className="max-w-4xl bg-white p-12  rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block">Name</label>
          <input type="text" id="name" className="w-full px-32 border border-gray-300 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block">Message</label>
          <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-red-700 hover:translate-y-2 text-white py-2 px-6 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
