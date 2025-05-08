import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Skill", ref: skillsRef },
    { name: "Project", ref: projectsRef },
    { name: "Contact", ref: contactRef },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="App-Header p-4 border-2 shadow-md shadow-[#ff9f1c]  border-[#ff9f1c] bg-[#011627] flex justify-between items-center sticky top-0 z-50">
      <div className="head-logo p-2">
        <h1 className="text-2xl text-white ml-4 md:ml-7 cursor-pointer">
          Korakod.
        </h1>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex text-xl">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`mr-8 
                group relative inline-block overflow-hidden z-10
  px-6 py-1 border-2 border-red-500 rounded-md text-white hover:text-black
  before:content-[''] before:absolute before:top-0 before:left-0 
  before:w-full before:h-full before:bg-red-500 before:scale-x-0 
  before:origin-left before:transition-transform before:duration-300 
  before:ease-in-out before:-z-10 hover:before:scale-x-100 ${
    index === navItems.length - 1 ? "mr-0" : ""
  }`}
            >
              <button
                onClick={() => scrollToSection(item.ref)}
                className="text-white cursor-pointer"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#011627] z-50 md:hidden flex flex-col items-center justify-center space-y-6">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                scrollToSection(item.ref);
                toggleMenu(); // ปิดเมนูหลังจากกด
              }}
              className="text-2xl  group relative inline-block overflow-hidden z-10
  px-6 py-1 border-2 border-red-500 rounded-md text-white hover:text-black
  before:content-[''] before:absolute before:top-0 before:left-0 
  before:w-full before:h-full before:bg-red-500 before:scale-x-0 
  before:origin-left before:transition-transform before:duration-300 
  before:ease-in-out before:-z-10 hover:before:scale-x-100"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
