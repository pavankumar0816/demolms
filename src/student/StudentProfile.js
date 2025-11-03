import React, { useEffect, useState } from "react";

export default function StudentProfile() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const storedStudentData = localStorage.getItem("student");
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData);
    }
  }, []);

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#2F2F2F", // Black background
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
    color: "#111111", // Dark text for white background
  };

  const labelStyle = {
    fontWeight: "600",
    color: "#3b82f6", // blue labels
  };

  const valueStyle = {
    color: "#111111", // black for values
    marginLeft: "10px",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "25px",
    color: "#ef4444", // red heading for contrast
    fontSize: "28px",
    fontWeight: "700",
  };

  const fieldStyle = {
    padding: "8px 0",
    borderBottom: "1px solid #e5e7eb", // subtle divider
  };

  return (
    <div style={pageStyle}>
      <div style={profileCardStyle}>
        <h2 style={headingStyle}>Student Profile</h2>
        {studentData ? (
          <>
            <p style={fieldStyle}>
              <span style={labelStyle}>Full Name:</span>
              <span style={valueStyle}>{studentData.studentname}</span>
            </p>
            <p style={fieldStyle}>
              <span style={labelStyle}>Gender:</span>
              <span style={valueStyle}>{studentData.gender}</span>
            </p>
            <p style={fieldStyle}>
              <span style={labelStyle}>Department:</span>
              <span style={valueStyle}>{studentData.department}</span>
            </p>
            <p style={fieldStyle}>
              <span style={labelStyle}>Program:</span>
              <span style={valueStyle}>{studentData.program}</span>
            </p>
            <p style={fieldStyle}>
              <span style={labelStyle}>Semester:</span>
              <span style={valueStyle}>{studentData.semester}</span>
            </p>
            <p style={fieldStyle}>
              <span style={labelStyle}>Year:</span>
              <span style={valueStyle}>{studentData.year}</span>
            </p>
          </>
        ) : (
          <p style={{ textAlign: "center", color: "#ef4444" }}>
            No Student Data Found
          </p>
        )}
      </div>
    </div>
  );
}
