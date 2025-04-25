// src/hooks/useFilters.js
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const useFilters = () => {
  const location = useLocation();
  const history = useHistory();

  const [filters, setFilters] = useState({
    searchTerm: '',
    consultationMode: '',
    specialties: [],
    sortOrder: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const newFilters = {
      searchTerm: params.get('searchTerm') || '',
      consultationMode: params.get('consultationMode') || '',
      specialties: params.getAll('specialties') || [],
      sortOrder: params.get('sortOrder') || ''
    };
    setFilters(newFilters);
  }, [location]);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    const queryParams = new URLSearchParams(newFilters);
    history.push({ search: queryParams.toString() });
  };

  return [filters, updateFilters];
};

export default useFilters;
