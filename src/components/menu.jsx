import React, { useState, useEffect } from 'react';
import { httpPatch } from '../lib/http';

const Dropdown = ({ label, options, onSelect }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const syncMenuSelection = async () => {
      try {
        await httpPatch('user', { [`menu-state-${label}`]: selectedOption });
        
      } catch (error) {
        console.error(error); 
      }
    };

    if (selectedOption) {
      syncMenuSelection();
    }
  }, [selectedOption, label]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-button"
        id="dropdownButton"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        {label}
      </button>

      {isOpen && (
        <ul className="dropdown-menu dropdown-section" role="menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
