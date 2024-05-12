import React, { useState } from "react";

const FilterDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    toggleDropdown();
  };

  const filterOptions = (value) => {
    setSearchTerm(value);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Select..."
        className="border-gray-300 input px-4 py-2 text-md bg-white border-2 rounded-5 focus:outline-none placeholder:text-black/25 focus:border-red-500"
        value={searchTerm}
        onChange={(e) => filterOptions(e.target.value)}
        onClick={toggleDropdown}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute right-3 top-3 text-gray-400 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <div
        className={`dropdown-content absolute bg-gray-100 border border-gray-300 mt-1 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {filteredOptions.map((option) => (
          <a
            href={`#${option}`}
            key={option}
            className="block px-4 py-2"
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;
