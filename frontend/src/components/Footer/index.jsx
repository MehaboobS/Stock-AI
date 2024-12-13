import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">AI Stock Predictor</h3>
            <p className="text-sm mt-2">
              Empowering your investments with AI insights.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
        <p className="text-sm mt-4 text-gray-500">
          &copy; {new Date().getFullYear()} AI Stock Predictor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
