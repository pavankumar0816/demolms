import React, { useEffect, useState } from "react";

export default function StudentHome() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const storedStudentData = localStorage.getItem("student");
    if (storedStudentData) {
      setStudentData(JSON.parse(storedStudentData));
    }
  }, []);

  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px 20px",
    fontFamily: "'Roboto', sans-serif",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "900px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
  };

  const welcomeStyle = {
    display: "inline-block",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    padding: "12px 25px",
    borderRadius: "25px",
    fontWeight: "700",
    fontSize: "22px",
    marginBottom: "30px",
  };

  const sectionTitleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "15px",
  };

  const sectionStyle = {
    backgroundColor: "#f3f4f6",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        {studentData && (
          <>
            <span style={welcomeStyle}>Welcome, {studentData.studentname}</span>

            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Your Courses</h2>
              <p>You can view all your enrolled courses here.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Assessments</h2>
              <p>Check upcoming assessments, deadlines, and grades.</p>
            </div>

            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Resources & Content</h2>
              <p>
                Access learning materials and other content provided by your
                faculty.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
