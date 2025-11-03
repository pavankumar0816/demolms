import React, { useEffect, useState } from "react";

export default function FacultyHome() {
  const [facultyData, setFacultyData] = useState("");

  useEffect(() => {
    const storedFacultyData = localStorage.getItem("faculty");
    if (storedFacultyData) {
      const parsedFacultyData = JSON.parse(storedFacultyData);
      setFacultyData(parsedFacultyData);
    }
  }, []);

  const nameLabelStyle = {
    display: "inline-block",
    backgroundColor: "#3b82f6", // blue background
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "20px",
    fontWeight: "600",
    fontSize: "18px",
    marginBottom: "20px",
  };

  const containerStyle = {
    padding: "30px",
    backgroundColor: "#f3f4f6",
    minHeight: "80vh",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  return (
    <div style={containerStyle}>
      {facultyData && (
        <div>
          <span style={nameLabelStyle}>Welcome, {facultyData.facultyname}</span>
          <div style={{ marginTop: "20px" }}>
            {/* You can place more faculty-related content here */}
            <p>
              Here you can upload course content, manage assessments, and view
              mapped courses.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
