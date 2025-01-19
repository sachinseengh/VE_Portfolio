import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="text-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Hamburger Icon */}
          <div
            className="lg:hidden cursor-pointer bg-[#004591] p-2 rounded-md"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>

          {/* Menu Links */}
          <div
            className={`lg:flex lg:items-center lg:gap-8 ${
              isMenuOpen ? "block" : "hidden"
            } absolute lg:relative top-0 left-0 w-full lg:w-auto bg-[#004591] lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row items-center lg:gap-8 gap-4 text-center lg:text-left lg:text-[#004591]">
              <li className="font-serif text-lg hover:text-gray-300">
                <a href="#home">Home</a>
              </li>
              <li className="font-serif text-lg hover:text-gray-300">
                <a href="#about">About</a>
              </li>
              <li className="font-serif text-lg hover:text-gray-300">
                <a href="#services">Services</a>
              </li>
              <li className="font-serif text-lg hover:text-gray-300">
                <a href="#recentworks">Recent Works</a>
              </li>
              <li className="font-serif text-lg hover:text-gray-300">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
