import React, { useEffect, useState } from "react";
import "./StudentProfile.css"; // Import the CSS file for styling

export default function StudentProfile() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const storedStudentData = localStorage.getItem("student");
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData);
    }
  }, []);

  return (
    <div className="profile-card">
      {studentData ? (
        <>
          <p>
            <strong>Full Name:</strong> {studentData.studentname}
          </p>
          <p>
            <strong>Gender:</strong> {studentData.gender}
          </p>
          <p>
            <strong>Date of Birth:</strong> {studentData.department}
          </p>
          <p>
            <strong>Email:</strong> {studentData.program}
          </p>
          <p>
            <strong>Location:</strong> {studentData.semester}
          </p>
          <p>
            <strong>Contact:</strong> {studentData.year}
          </p>
        </>
      ) : (
        <p>No Student Data Found</p>
      )}
    </div>
  );
}
