import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function AdminHome() {
  const [counts, setCounts] = useState({
    studentCount: 0,
    courseCount: 0,
    facultyCount: 0,
  });

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get(`${config.url}/count`);
      setCounts(response.data);
    } catch (error) {
      console.error("Failed to fetch counts:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#111111", // Dark background
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        flexDirection: "column", // Stack heading and cards vertically
      }}
    >
      {/* Heading Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "36px",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Admin Dashboard
        </h1>
        <p style={{ color: "#d1d5db", fontSize: "16px", marginTop: "8px" }}>
          Overview of Students, Faculty, and Courses
        </p>
      </div>

      {/* Cards Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3 style={{ color: "#111111" }}>Total Students</h3>
          </div>
          <div style={cardContentStyle}>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              {counts.studentCount}
            </p>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3 style={{ color: "#111111" }}>Total Faculties</h3>
          </div>
          <div style={cardContentStyle}>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              {counts.facultyCount}
            </p>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3 style={{ color: "#111111" }}>Total Courses</h3>
          </div>
          <div style={cardContentStyle}>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              {counts.courseCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "30%",
  background: "#f3f4f6",
  borderRadius: "12px",
  padding: "20px",
  margin: "0 10px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
  textAlign: "center",
};

const cardHeaderStyle = {
  borderBottom: "1px solid #ddd",
  marginBottom: "10px",
  paddingBottom: "10px",
};

const cardContentStyle = {
  marginTop: "10px",
};
