import React from 'react';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <label htmlFor="darkModeToggle" className="flex flex-col md:flex-row items-center cursor-pointer">
      <div className="relative">
        {/* The checkbox input */}
        <input
          type="checkbox"
          id="darkModeToggle"
          className="sr-only" // Hide the actual checkbox
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        {/* The slider */}
        <div
          className={`block bg-gray-400 w-8 h-6 md:w-14 md:h-6 rounded-full ${
            isDarkMode ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <div
            className={`dot absolute top-1 left-1 w-4 h-4 md:w-6 md:h-4 bg-white rounded-full transition ${
              isDarkMode ? 'transform translate-x-2 md:translate-x-6' : ''
            }`}
          ></div>
        </div>
      </div>

      {/* Sun or Moon icon */}
      <span className="text-sm md:text-md mt-2 md:mt-0 md:ml-3">
        {isDarkMode ? "Dark" : "Light"}
      </span>
    </label>
  );
};

export default DarkModeToggle;
