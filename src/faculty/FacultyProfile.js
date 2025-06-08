import React, { useEffect, useState } from "react";

export default function FacultyProfile() {
  const [facultyData, setFacultyData] = useState(null);

  useEffect(() => {
    const storedFacultyData = localStorage.getItem("faculty");
    if (storedFacultyData) {
      const parsedFacultyData = JSON.parse(storedFacultyData);
      setFacultyData(parsedFacultyData);
    }
  }, []);

  return (
    <div className="profile-card">
      {facultyData ? (
        <>
          <p>
            <strong>Faculty ID:</strong> {facultyData.facultyid}
          </p>
          <p>
            <strong>Faculty Name:</strong> {facultyData.facultyname}
          </p>
          <p>
            <strong>Faculty Department:</strong> {facultyData.facultydept}
          </p>
          <p>
            <strong>Qualification:</strong> {facultyData.qualification}
          </p>
          <p>
            <strong>Designation:</strong> {facultyData.designation}
          </p>
          <p>
            <strong>Contact:</strong> {facultyData.contact}
          </p>
        </>
      ) : (
        <p>No Faculty Data Found</p>
      )}
    </div>
  );
}
