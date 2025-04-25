
import React, { useState, useEffect } from 'react';
import { fetchDoctors } from '../services/api';
import SearchBar from '../components/AutoCompleteSearch';
import FilterPanel from '../components/FilterPanel';
import DoctorList from '../components/DoctorList';

const DoctorListingPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [consultationMode, setConsultationMode] = useState('');
  const [specialties, setSpecialties] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const getDoctors = async () => {
      const data = await fetchDoctors();
      setDoctors(data);
      setFilteredDoctors(data);
    };
    getDoctors();
  }, []);

  const handleFilterChange = ({ consultationMode, specialties }) => {
    let filtered = doctors;

    if (consultationMode) {
      filtered = filtered.filter((doctor) =>
        doctor.consultationType === consultationMode
      );
    }

    if (specialties && specialties.length > 0) {
      filtered = filtered.filter((doctor) =>
        doctor.specialties.some((specialty) => specialties.includes(specialty))
      );
    }

    setFilteredDoctors(filtered);
  };

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption);
    let sorted = [...filteredDoctors];
    if (sortOption === 'fees') {
      sorted = sorted.sort((a, b) => a.fee - b.fee);
    } else if (sortOption === 'experience') {
      sorted = sorted.sort((a, b) => b.experience - a.experience);
    }
    setFilteredDoctors(sorted);
  };

  const handleSearch = (name) => {
    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="main-content">
        <div className="left-side">
          <FilterPanel
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            specialties={['Dentist', 'Dermatologist', 'Cardiologist']}
          />
        </div>
        <div className="right-side">
          <DoctorList doctors={filteredDoctors} />
        </div>
      </div>
    </div>
  );
};

export default DoctorListingPage;
