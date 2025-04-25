
import React, { useState } from 'react';

const AutocompleteSearch = ({ doctors, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = doctors
        .filter((doctor) =>
          doctor.name.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 3);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setSuggestions([]);
    onSearch(suggestion.name);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const selectedDoctor = suggestions[0];
      if (selectedDoctor) {
        onSearch(selectedDoctor.name);
      }
    }
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search Doctors"
        className="autocomplete-input"
      />
      <div className="suggestions-list">
        {suggestions.map((doctor) => (
          <div
            key={doctor.id}
            className="suggestion-item"
            onClick={() => handleSuggestionClick(doctor)}
          >
            {doctor.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutocompleteSearch;
