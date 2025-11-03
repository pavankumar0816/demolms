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

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#2F2F2F", // Dark background
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "50px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const profileCardStyle = {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#ffffff", // White card
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
    color: "#111111",
  };

  const labelStyle = {
    fontWeight: "600",
    color: "#3b82f6", // blue labels
  };

  const valueStyle = {
    color: "#111111",
    marginLeft: "10px",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "25px",
    color: "#ef4444", // red heading
    fontSize: "28px",
    fontWeight: "700",
  };

  const fieldStyle = {
    padding: "8px 0",
    borderBottom: "1px solid #e5e7eb",
  };

  return (
    <div style={pageStyle}>
      <div style={profileCardStyle}>
        <h2 style={headingStyle}>Faculty Profile</h2>
        {facultyData ? (
          <>
            <p style={fieldStyle}>
              <span style={labelStyle}>Faculty ID:</span>
              <span style={valueStyle}>{facultyData.facultyid}</span>
            </p>
            <p style={fieldStyle}>
              <span style={labelStyle}>Full Name:</span>
              <span style={valueStyle}>{facultyData.facultyname}</span>
            </p>
            <p style={fieldStyle}>
              <span style={labelStyle}>Department:</span>
              <span style={valueStyle}>{facultyData.facultydept}</span>
            </p>
            <p style={fieldStyle}>
              <span style={labelStyle}>Qualification:</span>
              <span style={valueStyle}>{facultyData.qualification}</span>
            </p>
            <p style={fieldStyle}>
              <span style={labelStyle}>Designation:</span>
              <span style={valueStyle}>{facultyData.designation}</span>
            </p>
            <p style={fieldStyle}>
              <span style={labelStyle}>Contact:</span>
              <span style={valueStyle}>{facultyData.contact}</span>
            </p>
          </>
        ) : (
          <p style={{ textAlign: "center", color: "#ef4444" }}>
            No Faculty Data Found
          </p>
        )}
      </div>
    </div>
  );
}
