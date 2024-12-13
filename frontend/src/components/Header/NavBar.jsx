import React from 'react';

const NavBar = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      <a href="/dashboard" className="hover:text-blue-400">
        Dashboard
      </a>
      <a href="/features" className="hover:text-blue-400">
        Features
      </a>
      <a href="/about" className="hover:text-blue-400">
        About
      </a>
    </nav>
  );
};

export default NavBar;
