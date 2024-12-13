import React, { useState } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Logo from './Logo'

const Header = () => {
  // Simulate user authentication state (replace with actual auth logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => setShowProfileMenu((prev) => !prev);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
       <Logo/>
        

        {/* Navigation Bar */}
        <NavBar />

        {/* Search Bar and Auth Actions */}
        <div className="flex items-center space-x-4">
          <SearchBar />

          {isAuthenticated ? (
            <div className="relative">
              {/* Profile Icon */}
              <button
                onClick={toggleProfileMenu}
                className="flex items-center text-sm focus:outline-none"
              >
                <img
                  src="/path-to-placeholder-avatar.jpg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded shadow-lg z-50">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Settings
                  </a>
                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Login and Sign-Up Buttons */}
              <a
                href="/login"
                className="hidden md:inline-block text-sm text-gray-300 hover:text-white"
              >
                Login
              </a>
              <a
                href="/signup"
                className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-sm text-white px-4 py-2 rounded"
              >
                Sign Up
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
