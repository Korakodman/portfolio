import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skill", "Project", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="App-Header p-4 border-2 shadow-md shadow-[#ff9f1c]  border-[#ff9f1c] bg-[#011627]  flex justify-between items-centersticky top-0 z-50 sticky">
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
              key={item}
              className={`mr-8 warp-to ${
                index === navItems.length - 1 ? "mr-0" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed  inset-0  bg-[#011627]  z-50 md:hidden  flex  flex-col  items-center  justify-center  space-y-6">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="text-2xl text-white warp-to"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
