import React, { useState, useEffect } from 'react';
import whatsApp from '../assets/images/whatsapp.png';
import Gmail from '../assets/images/gmail.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
    setActiveSection(section);
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
      <div className="container mx-auto px-4">
        <div className="navItem lg:mt-2 pb-1 flex flex-row gap-5 items-center justify-between text-2xl font-devanagari text-[#004591]">
          <div className="flex justify-start">Sujay.mp4</div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex flex-row gap-5 items-center justify-center text-2xl font-devanagari">
              {['Home', 'About', 'Services', 'Works', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleClick(item.toLowerCase())}
                    className={`cursor-pointer text-[#0061d3] opacity-100 hover:opacity-100 transition-opacity duration-300 ${
                      activeSection === item.toLowerCase()
                        ? 'text-[#004591] font-semibold'
                        : 'hover:text-[#0061d3]'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp & Gmail Buttons - Responsive */}
          <div className="hidden md:flex gap-3 flex-wrap justify-end">
            <a
              href="https://wa.me/+919380036964"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-500 px-3 py-2 rounded-full text-base flex items-center gap-2 hover:bg-green-600 transition-colors duration-300 shadow-lg shadow-green-700 hover:shadow-2xl"
            >
              <img
                src={whatsApp}
                alt="WhatsApp"
                className="object-cover h-6 w-6 transition-all duration-300 hover:drop-shadow-[0px_0px_10px_rgba(34,197,94,0.9)]"
              />
              WhatsApp
            </a>

            <a
              href="mailto:Suzyt182@gmail.com"
              className="text-white bg-orange-500 px-3 py-2 rounded-full text-base flex items-center gap-2 hover:bg-orange-600 transition-colors duration-300 shadow-lg shadow-orange-700 hover:shadow-2xl"
            >
              <img
                src={Gmail}
                alt="Gmail"
                className="object-cover h-6 w-6 transition-all duration-300 hover:drop-shadow-[0px_0px_10px_rgba(239,68,68,0.9)]"
              />
              Gmail
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl font-bold p-2 border rounded-md">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-90 text-white z-50 h-screen flex flex-col items-center justify-center gap-6">
            <button onClick={toggleMenu} className="absolute top-5 right-5 text-4xl font-bold">
              ✕
            </button>
            <ul className="flex flex-col gap-6 text-2xl font-devanagari">
              {['Home', 'About', 'Services', 'Works', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      handleClick(item.toLowerCase());
                      toggleMenu();
                    }}
                    className={`cursor-pointer text-white hover:text-[#0061d3] transition-colors duration-300 ${
                      activeSection === item.toLowerCase() ? 'text-[#0061d3]' : ''
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/+919380036964"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-base hover:bg-green-600 transition duration-300 shadow-lg shadow-green-700 hover:shadow-2xl"
              >
                <img
                  src={whatsApp}
                  alt="WhatsApp"
                  className="h-6 w-6 transition-all duration-300 hover:drop-shadow-[0px_0px_10px_rgba(34,197,94,0.9)]"
                />
                WhatsApp
              </a>
              <a
                href="mailto:Suzyt182@gmail.com"
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-base hover:bg-orange-600 transition duration-300 shadow-lg shadow-orange-700 hover:shadow-2xl"
              >
                <img
                  src={Gmail}
                  alt="Gmail"
                  className="h-6 w-6 transition-all duration-300 hover:drop-shadow-[0px_0px_10px_rgba(239,68,68,0.9)]"
                />
                Gmail
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
