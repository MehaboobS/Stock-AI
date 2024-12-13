import React from 'react';

const SearchBar = () => {
  return (
    <div className="hidden md:block">
      <input
        type="text"
        placeholder="Search stock..."
        className="bg-gray-800 text-sm text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
