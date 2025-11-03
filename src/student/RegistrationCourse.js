import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function RegistrationCourse() {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcourses`);
      setCourses(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const registerCourse = async (coursecode) => {
    try {
      await axios.post(`${config.url}/registercourses/${coursecode}`);
      setMessage("Course Registered Successfully");
      setError("");
      fetchCourses(); // Refresh the courses list after registration
    } catch (e) {
      setError(e.message);
      setMessage("");
    }
  };

  // Styles
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#2F2F2F", // Light grey background
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const tableContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1f2937",
    fontSize: "28px",
    fontWeight: "700",
  };

  const messageStyle = {
    textAlign: "center",
    color: "#16a34a", // green message
    marginBottom: "15px",
    fontWeight: "600",
  };

  const errorStyle = {
    textAlign: "center",
    color: "#ef4444", // red error
    marginBottom: "15px",
    fontWeight: "600",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    backgroundColor: "#e5e7eb",
    padding: "12px",
    fontWeight: "600",
    textAlign: "center",
    borderBottom: "2px solid #d1d5db",
  };

  const tdStyle = {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #e5e7eb",
  };

  const buttonStyle = {
    padding: "6px 12px",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
  };

  const buttonHover = (e) => {
    e.currentTarget.style.backgroundColor = "#2563eb";
  };

  const buttonOut = (e) => {
    e.currentTarget.style.backgroundColor = "#3b82f6";
  };

  return (
    <div style={pageStyle}>
      <div style={tableContainerStyle}>
        <h3 style={headingStyle}>Course Registration</h3>
        {message && <div style={messageStyle}>{message}</div>}
        {error && <div style={errorStyle}>{error}</div>}

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Program</th>
              <th style={thStyle}>Academic Year</th>
              <th style={thStyle}>Year</th>
              <th style={thStyle}>Semester</th>
              <th style={thStyle}>Course Code</th>
              <th style={thStyle}>Course Name</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(courses) && courses.length > 0 ? (
              courses.map((course, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{course.department}</td>
                  <td style={tdStyle}>{course.program}</td>
                  <td style={tdStyle}>{course.academicyear}</td>
                  <td style={tdStyle}>{course.year}</td>
                  <td style={tdStyle}>{course.semester}</td>
                  <td style={tdStyle}>{course.coursecode}</td>
                  <td style={tdStyle}>{course.coursename}</td>
                  <td style={tdStyle}>
                    <button
                      style={buttonStyle}
                      onClick={() => registerCourse(course.coursecode)}
                      onMouseOver={buttonHover}
                      onMouseOut={buttonOut}
                    >
                      REGISTER
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ ...tdStyle, color: "#ef4444" }}>
                  Data Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
