// src/components/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className=" w-full bg-gray-200 flex flex-col items-center justify-center py-12 px-4">
      {/* عنوان الصفحة */}
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        About Us
      </h2>
      
      {/* نص المهمة والرؤية */}
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold text-xl">Aspersullab Mission:</span><br />
          Delivering the best coffee experience with a set of values created using our high-quality beans, 
          Innovative décor, the best flavor, trained and friendly baristas.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold text-xl">Aspersullab Vision:</span><br />
          Become a coffee brand that delivers the best coffee experience worldwide by maintaining our products' 
          basic principles and a sense of fair trade during all periods from the ground to the cup.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold text-xl">Aspersullab Promise:</span><br />
          ➢ Find different tastes of coffee culture and serve it to our customers.<br />
          ➢ To become one of the most successful representatives of the third generation coffee sector.<br />
          ➢ Enrich the ordinary life of our guests with the food and drinks served.<br />
          ➢ Deliver delicious, qualified, healthy, and quality fresh tastes that our guests expect.<br />
          ➢ Plus the value, taste, and quality guests expect, exceeding expectations with individual and friendly service.<br />
          ➢ Provide a respectful, peaceful, safe, and open environment for the development of our employees.<br />
          ➢ Supporting the development of coffee producers and pioneering sustainable coffee production.<br />
          ➢ Participate in social responsibility projects by developing product recycling projects specially produced for coffee.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

