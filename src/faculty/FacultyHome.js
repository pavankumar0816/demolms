import React, { useEffect, useState } from "react";

export default function FacultyHome() {
  const [facultyData, setFacultyData] = useState(null);

  useEffect(() => {
    const storedFacultyData = localStorage.getItem("faculty");
    if (storedFacultyData) {
      setFacultyData(JSON.parse(storedFacultyData));
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
        {facultyData && (
          <>
            <span style={welcomeStyle}>Welcome, {facultyData.facultyname}</span>

            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Course Management</h2>
              <p>
                Add or update course materials, upload lecture notes, and manage
                course content.
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Assessments</h2>
              <p>
                Create, manage, and evaluate assignments, quizzes, and exams.
              </p>
            </div>

            <div style={sectionStyle}>
              <h2 style={sectionTitleStyle}>Mapped Courses</h2>
              <p>
                View all courses assigned to you and manage student enrollment.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
