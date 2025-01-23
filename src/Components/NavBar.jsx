import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import whatsApp from '../assets/images/whatsapp.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`lg:pt-4 lg:pb-4 pt-1 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white bg-opacity-40 shadow-lg' : 'bg-transparent'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="container mx-auto mb-3">
        <div className="navItem lg:mt-4 pb-1 flex flex-row gap-5 items-center justify-between text-2xl font-devanagari text-[#004591]">
          {/* Logo Section */}
          <div className="flex justify-start">Sujay.mp4</div>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden md:block">
            <ul className="flex flex-row gap-5 items-center justify-center text-2xl font-devanagari">
              {['Home', 'About', 'Services', 'Works', 'Contact'].map((item) => (
                <li key={item}>
                  <HashLink
                    to={`#${item.toLowerCase()}`}
                    smooth
                    className="cursor-pointer text-[#004591] opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    {item}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp Button for Larger Screens */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/11234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-500 p-3 rounded-full text-xl flex items-center gap-2 hover:bg-green-600 transition-colors duration-300"
            >
                <img src={whatsApp} alt="WhatsApp" className="object-cover h-7" />
              WhatsApp
            
            </a>
          </div>

          {/* Breadcrumb Button for Smaller Screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl font-bold p-2 border rounded-md"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-90 text-white z-50 h-screen">
            <div className="flex flex-col h-full">
              <button
                onClick={toggleMenu}
                className="self-end text-4xl font-bold p-4"
              >
                ✕
              </button>
              <ul className="flex flex-col gap-6 items-center justify-center h-full text-2xl font-devanagari">
                {['Home', 'About', 'Services', 'Works', 'Contact'].map((item) => (
                  <li key={item}>
                    <HashLink
                      to={`#${item.toLowerCase()}`}
                      smooth
                      className="cursor-pointer text-white hover:text-gray-400 transition-colors duration-300"
                      onClick={toggleMenu}
                    >
                      {item}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
