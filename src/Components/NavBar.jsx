import React, { useState, useEffect } from 'react';
import whatsApp from '../assets/images/whatsapp.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Default active section

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Dynamically determine which section is currently in view
      const sections = ['home', 'about', 'services', 'works', 'contact'];
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (section) => {
    setActiveSection(section); // Set active section immediately
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={`lg:pt-2 lg:pb-4 pt-1 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white bg-opacity-40 shadow-lg' : 'bg-transparent'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="container mx-auto mb-3">
        <div className="navItem lg:mt-2 pb-1 flex flex-row gap-5 items-center justify-between text-2xl font-devanagari text-[#004591]">
          {/* Logo Section */}
          <div className="flex justify-start">Sujay.mp4</div>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden md:block">
            <ul className="flex flex-row gap-5 items-center justify-center text-2xl font-devanagari">
              {['Home', 'About', 'Services', 'Works', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleClick(item.toLowerCase())}
                    className={`cursor-pointer text-[#0061d3] opacity-100 hover:opacity-100 transition-opacity duration-300 ${
                      activeSection === item.toLowerCase()
                        ? 'text-[#004591] font-semibold ' // Bright color for active state
                        : 'hover:text-[#0061d3]' // Hover color for non-active items
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp Button for Larger Screens */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/+919380036964"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-500 px-4 py-2 rounded-full text-xl flex items-center gap-2 hover:bg-green-600 transition-colors duration-300"
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
                    <button
                      onClick={() => {
                        handleClick(item.toLowerCase());
                        toggleMenu();
                      }}
                      className={`cursor-pointer text-white hover:text-[#0061d3] transition-colors duration-300 ${
                        activeSection === item.toLowerCase()
                          ? 'text-[#0061d3]' // Active item color for mobile
                          : ''
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
                <li>
               <a
                          href="https://wa.me/+919380036964"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Contact me on WhatsApp"
                          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm md:text-base hover:bg-green-600 transition duration-300"
                        >
                          <img src={whatsApp} alt="WhatsApp" className="h-6 w-6" />
                          WhatsApp
                        </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
