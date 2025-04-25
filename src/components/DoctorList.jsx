import React from 'react';

const DoctorList = ({ doctors }) => {
  return (
    <div>
      {doctors.length === 0 ? (
        <p>No doctors found</p>
      ) : (
        doctors.map((doctor) => (
          <div key={doctor.id || doctor.name} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>Specialties: {doctor.specialties?.join(', ') || 'N/A'}</p>
            <p>Consultation: {doctor.consultationType || 'Not Specified'}</p>
            <p>Fees: ${doctor.fee || 'Not Available'}</p>
            <p>Experience: {doctor.experience ? `${doctor.experience} years` : 'Experience not specified'}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DoctorList;
