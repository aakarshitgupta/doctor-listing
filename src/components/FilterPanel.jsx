// src/components/FilterPanel.jsx
import React from 'react';

const FilterPanel = ({ onSortChange, onFilterChange, specialties }) => {
  return (
    <div className="filter-panel">
      {/* Sort by Component */}
      <div className="sort-by">
        <h3>Sort By</h3>
        <label>
          <input
            type="radio"
            name="sortOption"
            value="fees"
            onChange={(e) => onSortChange(e.target.value)}
          />
          Sort by Fee
        </label>
        <label>
          <input
            type="radio"
            name="sortOption"
            value="experience"
            onChange={(e) => onSortChange(e.target.value)}
          />
          Sort by Experience
        </label>
      </div>

      {/* Consultation Mode Filter (Radio Buttons) */}
      <div className="consultation-mode">
        <h3>Consultation Type</h3>
        <label>
          <input
            type="radio"
            name="consultationType"
            value="Video Consult"
            onChange={(e) => onFilterChange({ consultationMode: e.target.value })}
          />
          Video Consult
        </label>
        <label>
          <input
            type="radio"
            name="consultationType"
            value="In Clinic"
            onChange={(e) => onFilterChange({ consultationMode: e.target.value })}
          />
          In Clinic
        </label>
      </div>

      {/* Specialties Filter (Checkboxes) */}
      <div className="specialties-filter">
        <h3>Specialties</h3>
        {specialties.map((specialty) => (
          <label key={specialty}>
            <input
              type="checkbox"
              value={specialty}
              onChange={(e) =>
                onFilterChange({ specialties: e.target.value })
              }
            />
            {specialty}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
