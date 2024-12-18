// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';  // استيراد أيقونات من Heroicons

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // الحالة الافتراضية: غير مسجل الدخول
  const [isOpen, setIsOpen] = useState(false); // الحالة للتحكم في فتح/غلق القائمة في الشاشات الصغيرة
  const [language, setLanguage] = useState('en'); // الحالة للتحكم في اللغة (إنجليزي/عربي)
  const navigate = useNavigate();

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // إذا كان المستخدم مسجلاً الدخول، يقوم بتسجيل الخروج
      setIsLoggedIn(false);
      localStorage.removeItem('token'); // إزالة التوكن من التخزين المحلي عند تسجيل الخروج
    } else {
      // إذا كان المستخدم غير مسجل الدخول، يوجهه إلى صفحة تسجيل الدخول
      navigate('/login');
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en'); // تغيير اللغة بين الإنجليزي والعربي
  };

  useEffect(() => {
    // هنا يمكنك إضافة منطق لتحميل البيانات الخاصة باللغة عند التبديل بين اللغات
    document.documentElement.lang = language; // تعيين لغة الصفحة
  }, [language]);
  const handleMenuItemClick = () => {
    setIsOpen(false); // إغلاق القائمة
  };

  return (
    <>
    <nav className="bg-gray-200 p-4 flex justify-between items-center">
      {/* الشعار */}
      <div className="text-white lg:px-8 font-bold">
        <Link to="/" className="md:text-xl text-black">
          ESPRESS<span className="relative inline-block text-red-700">O
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-700"></span>
          </span>LAB
        </Link>
      </div>

      {/* القائمة في الشاشات الكبيرة */}
      <div className="space-x-6 hidden md:flex">
        <Link to="/menu" className="text-xl hover:text-red-500 hover:underline text-black">{language === 'en' ? 'Menu' : 'القائمة'}</Link>
        <Link to="/about" className="text-xl hover:text-red-500 hover:underline text-black">{language === 'en' ? 'About' : 'حول'}</Link>
        <Link to="/contact" className="text-xl hover:text-red-500 hover:underline text-black">{language === 'en' ? 'Contact' : 'اتصل بنا'}</Link>
      </div>

      {/* الأزرار لتسجيل الدخول و تغيير اللغة */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLoginLogout}
          className="text-xl bg-red-600 hover:bg-red-500 hover:-translate-y-2 p-2 font-bold rounded-xl text-white">
          {isLoggedIn ? (language === 'en' ? 'Logout' : 'تسجيل الخروج') : (language === 'en' ? 'Login' : 'تسجيل الدخول')}
        </button>
        
        {/* زر تغيير اللغة */}
        <button
          onClick={toggleLanguage}
          className="ml-4 text-xl bg-red-600 hover:bg-red-500 hover:-translate-y-2 font-bold p-2 rounded-xl text-white">
          {language === 'en' ? 'Language' : 'اللغة'}
        </button>

        {/* أيقونة القائمة في الشاشات الصغيرة */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl text-black">
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>
      </nav>
      {/* القائمة المنبثقة في الشاشات الصغيرة */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-4 bg-gray-200 py-4">
          <Link
           to="/menu"
                        onClick={handleMenuItemClick}
     className="block text-xl text-center hover:-translate-y-2 rounded-lg bg-white mx-4 p-2 text-black hover:text-red-500 hover:underline">
            {language === 'en' ? 'Menu' : 'القائمة'}</Link>
          <Link
           to="/about" 
             onClick={handleMenuItemClick}
     className="block text-xl text-center hover:-translate-y-2 text-black rounded-lg bg-white mx-4 p-2 hover:text-red-500 hover:underline">
            {language === 'en' ? 'About' : 'حول'}</Link>
          <Link
           to="/contact"
             onClick={handleMenuItemClick}
     className="block text-xl text-center hover:-translate-y-2 text-black rounded-lg bg-white mx-4 p-2  hover:text-red-500 hover:underline">
              {language === 'en' ? 'Contact' : 'اتصل بنا'}</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
