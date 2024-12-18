import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState,useRef } from 'react';

  


const HomePage = () => {
  const videoUrls = [
    'https://videos.pexels.com/video-files/7116715/7116715-sd_360_640_25fps.mp4',
    'https://videos.pexels.com/video-files/4821917/4821917-sd_506_960_25fps.mp4', // يمكنك استبداله برابط فيديو آخر
    'https://videos.pexels.com/video-files/6202080/6202080-sd_360_640_24fps.mp4',
    'https://videos.pexels.com/video-files/7658024/7658024-sd_360_640_25fps.mp4' // يمكنك استبداله برابط فيديو آخر
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null); 
  const handleVideoEnd = () => {
    // عند انتهاء الفيديو، نقوم بتحديث الفيديو التالي
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const branches = [
    {
      id: 1,
      name: "Point 90",
      address: "Obour Street - Off Teseen Street - Inside Point 90 Mall - Second Floor - New Cairo.",
      phone: "010 9837 6405",
      image: "https://lh5.googleusercontent.com/p/AF1QipN5RJh2dnKvTZEHuIV25wbJrEpSyE9fhr7KC8CD=w408-h306-k-no", // يمكنك استبدال هذا الرابط بصورة حقيقية للمكان
      googleMapsLink: "https://maps.app.goo.gl/Es1mJLvPWmUc9N7z5"
    },
    {
      id: 2,
      name: "White Water Way",
      address: "Mohamed Naguib Axis - Inside The Waterway Mall - Ground Floor - New Cairo.",
      phone: "+20 987 654 321",
      image: "https://lh5.googleusercontent.com/p/AF1QipPI4pbFk7Gr1_7T3gB9Bh5O2LIj_sQis5ZFw4nC=w408-h302-k-no", // يمكنك استبدال هذا الرابط بصورة حقيقية للمكان
      googleMapsLink: "https://maps.app.goo.gl/qDUeeWQ4ioojkFiD7"
    },{
      id: 3,
      name: "Maadi",
      address: "Street 213 - next to the American College - Maadi - Cairo.",
      phone: "084 5554465",
      image: "https://lh5.googleusercontent.com/p/AF1QipOCjA_xT8bNwy1xj7hrcj-wrJ-zIB25eYIGFD76=w408-h306-k-no", // يمكنك استبدال هذا الرابط بصورة حقيقية للمكان
      googleMapsLink: "https://maps.app.goo.gl/X2BY4ykY8gofv2Ka9"
    },{
      id: 4,
      name: "City Center Almaza",
      address: "El Nasr Road - Intersection of Cairo-Suez Road - Inside City Center Almaza - Heliopolis - Cairo",
      phone: "015 5515 1576",
      image: "https://lh5.googleusercontent.com/p/AF1QipMYv-7xFEGNeGUBZiOUhjXQLnxwxZqxoMtgSWfn=w408-h306-k-no", // يمكنك استبدال هذا الرابط بصورة حقيقية للمكان
      googleMapsLink: "https://maps.app.goo.gl/SkZsxTebMCvtuwPx7"
    },{
      id: 5,
      name: "Mall of Egypt",
      address: "Inside Mall of Egypt - 6th of October - Giza",
      phone: "+20 987 654 321",
      image: "https://lh5.googleusercontent.com/p/AF1QipPZ2BHGUnCm5Q82BsgvnX1xIxnHA_Ob7Fd7dHhp=w408-h306-k-no", // يمكنك استبدال هذا الرابط بصورة حقيقية للمكان
      googleMapsLink: "https://maps.app.goo.gl/6GV7PPVofDqAGNqQA"
    },{
      id: 6,
      name: "Park Strip Mall",
      address: "Inside Park Strip Mall - 6th of October - Giza",
      phone: "+20 987 654 321",
      image: "https://images.pexels.com/photos/9102648/pexels-photo-9102648.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // يمكنك استبدال هذا الرابط بصورة حقيقية للمكان
      googleMapsLink: "https://maps.app.goo.gl/SkZsxTebMCvtuwPx7"    },{
      id: 7,
      name: "City Stars Mall",
      address: " Inside City Stars Mall - First Phase - Third Floor - Nasr City - Cairo.",
      phone: "+20 987 654 321",
      image: "https://lh5.googleusercontent.com/p/AF1QipMAVLJUIbfN6mEQoK90QLa2BF3l3lq0B5JSeqC1=w408-h305-k-no", // يمكنك استبدال هذا الرابط بصورة حقيقية للمكان
      googleMapsLink: "https://maps.app.goo.gl/ABFMrmkBmBtycd4S7"
    },{
      id: 8,
      name: "Mansoura",
      address: "117 Republic Street - in front of the Faculty of Law - Mansoura - Dakahlia.",
      phone: "+20 987 654 321",
      image: "https://images.pexels.com/photos/10337246/pexels-photo-10337246.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // يمكنك استبدال هذا الرابط بصورة حقيقية للمكان
      googleMapsLink: "https://maps.app.goo.gl/SkZsxTebMCvtuwPx7"    },{
      id: 9,
      name: "Rehab",
      address: "Avenue Mall - Rehab City - Cairo",
      phone: "+20 987 654 321",
      image: "https://images.pexels.com/photos/19069608/pexels-photo-19069608/free-photo-of-view-of-the-counter-and-menu-boards-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // يمكنك استبدال هذا الرابط بصورة حقيقية للمكان
      googleMapsLink: "https://maps.app.goo.gl/SkZsxTebMCvtuwPx7"    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen relative">

      {/* Hero Section */}
      <motion.div
        className="relative w-full h-96  bg-gray-100"
        initial={{ y: '-10vw' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {/* Video as background */}
        <motion.div
          className="absolute opacity-80 top-0 left-0 w-full h-full"
          initial={{ y: '10vw' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <video
             ref={videoRef}
             src={videoUrls[currentVideoIndex]}// ضع الرابط للفيديو هنا
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            playbackRate={4.0}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content Centered */}
        <div className="absolute flex flex-col items-center py-12 md:px-32 text-center text-black">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyCoffee</h1>
          <p className="text-lg font-bold leading-relaxed mb-6">
  Every cup of our coffee is a unique moment, because we believe that coffee is not just about taste, but the entire experience.
</p>

          <p className="text-lg mb-6">The best coffee experience you'll ever have.</p>
          <Link to="/menu" className="mt-4 hover:-translate-y-2 hover:bg-red-500 inline-block bg-red-600 text-white py-2 px-6 rounded-lg font-bold">
            View Menu
          </Link>
        </div>
      </motion.div>

      {/* Branches Section */}
      <div className="py-16">
        <motion.h2
          className="text-3xl px-20 font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our Branches
        </motion.h2>
        <div className="flex flex-wrap m-9 gap-6">
          {branches.map((branch) => (
            <motion.div
              key={branch.id}
              className="bg-white hover:translate-y-4 p-6 rounded-lg shadow-lg w-96"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
              whileHover={{
                scale: 1.10,
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                transition: { type: 'spring', stiffness: 300, damping: 10 },
              }}
            >
              <img src={branch.image} alt={branch.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">{branch.name}</h3>
              <p className="text-gray-700">{branch.address}</p>
              <p className="text-gray-700">Phone: {branch.phone}</p>
              <a
                href={branch.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block hover:-translate-y-2 bg-red-600 text-white py-2 px-6 rounded-lg font-bold"
              >
                Visit Us Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center  py-6 mt-16">
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-600 hover:translate-y-2 space-x-3 flex items-center transition-colors duration-300"
          >
            <FaFacebook /> <div>Facebook</div>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-400 hover:translate-y-2 space-x-3 flex items-center transition-colors duration-300"
          >
            <FaTwitter /> <div>Twitter</div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-pink-600 hover:translate-y-2 space-x-3 flex items-center transition-colors duration-300"
          >
            <FaInstagram /> <div>Instagram</div>
          </a>
        </div>

        <p className="mt-4 text-lg">
          &copy; 2024 MyCoffee. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default HomePage;