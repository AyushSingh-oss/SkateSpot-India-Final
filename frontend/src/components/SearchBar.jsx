import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex items-center justify-between bg-neutral-900 px-4 py-2 rounded-lg shadow-md w-full max-w-md mx-auto mt-6 border border-neutral-800 focus-within:ring-2 focus-within:ring-red-500 transition-all duration-200">
      <input
        type="text"
        placeholder="Search location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent border-none text-white text-base w-full outline-none placeholder-gray-400"
      />
      <button
        onClick={handleSearch}
        className="ml-3 text-red-500 text-lg hover:text-red-400 transition-colors"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
