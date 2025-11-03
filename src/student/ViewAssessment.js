import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function ViewAssessment() {
  const [assessments, setAssessments] = useState([]);

  const fetchAssessments = async () => {
    try {
      const response = await axios.get(`${config.url}/viewassessment`);
      setAssessments(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAssessments();
  }, []);

  // Styles
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#2F2F2F", // light grey background
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const containerStyle = {
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

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    padding: "12px",
    fontWeight: "600",
    textAlign: "center",
    backgroundColor: "#e5e7eb", // light grey header
    border: "1px solid #d1d5db",
  };

  const tdStyle = {
    padding: "12px",
    textAlign: "center",
    border: "1px solid #e5e7eb",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "5px",
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
    textDecoration: "none",
  };

  const buttonHover = (e) => {
    e.currentTarget.style.backgroundColor = "#2563eb";
  };

  const buttonOut = (e) => {
    e.currentTarget.style.backgroundColor = "#3b82f6";
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h3 style={headingStyle}>View Assessment</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Assessment File</th>
            </tr>
          </thead>
          <tbody>
            {assessments.length > 0 ? (
              assessments.map((assessment, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{assessment.course}</td>
                  <td style={tdStyle}>{assessment.description}</td>
                  <td style={tdStyle}>{assessment.date}</td>
                  <td style={tdStyle}>
                    {assessment.file.endsWith(".jpg") ||
                    assessment.file.endsWith(".jpeg") ||
                    assessment.file.endsWith(".png") ? (
                      <img
                        src={`${config.url}/assessmentfile/${assessment.file}`}
                        alt="Assessment"
                        style={imageStyle}
                      />
                    ) : (
                      <a
                        href={`${config.url}/assessmentfile/${assessment.file}`}
                        style={buttonStyle}
                        onMouseOver={buttonHover}
                        onMouseOut={buttonOut}
                      >
                        Download File
                      </a>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ ...tdStyle, color: "#ef4444" }}>
                  No Assessment Data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
