import React, { useEffect, useState } from "react";

export default function StudentHome() {
  const [studentData, setStudentData] = useState("");

  useEffect(() => {
    const storedStudentData = localStorage.getItem("student");
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData);
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
      {studentData && (
        <div>
          <span style={nameLabelStyle}>Welcome, {studentData.studentname}</span>
          <div style={{ marginTop: "20px" }}>
            {/* You can place more student-related content here */}
            <p>Here you can view your courses, assessments, and content.</p>
          </div>
        </div>
      )}
    </div>
  );
}
