import React, { useState, useEffect } from 'react';
import whatsApp from '../assets/images/whatsapp.png'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home'); // Default active menu item

  // Detect scrolling and set the state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Add background changes after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when the menu is open
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

  const handleMenuClick = (item) => {
    setActiveItem(item); // Set the clicked menu item as active
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div
      className={`lg:pt-4 lg:pb-4 pt-1 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-white bg-opacity-40 shadow-lg' // Glassmorphism effect when scrolled
          : 'bg-transparent' // Fully transparent initially
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(10px)' : 'none', // Apply blur effect dynamically
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none', // Safari compatibility
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
                <li
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`cursor-pointer ${
                    activeItem === item
                      ? 'text-[#004591]' // Brighter for active
                      : 'text-[#004591] opacity-70' // Dimmed for inactive
                  } transition-colors duration-300`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp Button for Larger Screens */}
          <div className="hidden md:block">
      
            <a
              href="https://wa.me/11234567890" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#004591] bg-green-500 p-3 rounded-full text-sm  hover:bg-green-600 transition-colors duration-300"
            >
             
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
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="self-end text-4xl font-bold p-4"
              >
                ✕
              </button>

              {/* Menu Items */}
              <ul className="flex flex-col gap-6 items-center justify-center h-full text-2xl font-devanagari">
                {['Home', 'About', 'Services', 'Works', 'Contact', 'WhatsApp'].map(
                  (item) => (
                    <li
                      key={item}
                      onClick={() => handleMenuClick(item)}
                      className={`cursor-pointer ${
                        activeItem === item
                          ? 'text-white ' // Brighter and bold for active
                          : 'text-gray-400' // Dimmed for inactive
                      } transition-colors duration-300`}
                    >
                      {item === 'WhatsApp' ? (
                        <a
                        href="https://wa.me/11234567890" // Replace with your WhatsApp number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#004591] bg-green-500 p-3 rounded-full text-sm  hover:bg-green-600 transition-colors duration-300"
                      >
                       
                        WhatsApp
                        
                      </a>
                      ) : (
                        item
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
