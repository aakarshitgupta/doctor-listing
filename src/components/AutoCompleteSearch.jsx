import React, { useState } from 'react';

const SearchBar = ({ doctors, onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchText(query);

    if (query) {
      const filteredSuggestions = doctors
        .filter((doctor) =>
          doctor.name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 3); // Limit to top 3 suggestions

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion.name);
    setSuggestions([]);
    onSearch(suggestion.name);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <div className="search-box-container">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search doctors"
            className="search-box"
          />
        </div>
        <button type="submit" className="search-btn">Search</button>
      </form>

      {suggestions.length > 0 && (
        <div className="suggestion-list">
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
      )}
    </div>
  );
};

export default SearchBar;
