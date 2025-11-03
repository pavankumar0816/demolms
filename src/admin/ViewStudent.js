import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function ViewStudent() {
  const [students, setStudent] = useState([]);

  const fetchstudents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewstudent`);
      setStudent(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchstudents();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "grey",
        minHeight: "100vh",
        padding: "40px",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        View Students
      </h2>

      <table
        style={{
          width: "90%",
          margin: "0 auto",
          borderCollapse: "collapse",
          textAlign: "center",
          backgroundColor: "#f9f9f9", // lighter table background
          color: "black",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={{ padding: "10px" }}>Student ID</th>
            <th style={{ padding: "10px" }}>Student Name</th>
            <th style={{ padding: "10px" }}>Gender</th>
            <th style={{ padding: "10px" }}>Department</th>
            <th style={{ padding: "10px" }}>Program</th>
            <th style={{ padding: "10px" }}>Semester</th>
            <th style={{ padding: "10px" }}>Year</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(students) && students.length > 0 ? (
            students.map((student, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#e8f5e9",
                }}
              >
                <td style={{ padding: "8px" }}>{student.studentid}</td>
                <td style={{ padding: "8px" }}>{student.studentname}</td>
                <td style={{ padding: "8px" }}>{student.gender}</td>
                <td style={{ padding: "8px" }}>{student.department}</td>
                <td style={{ padding: "8px" }}>{student.program}</td>
                <td style={{ padding: "8px" }}>{student.semester}</td>
                <td style={{ padding: "8px" }}>{student.year}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="7"
                style={{ padding: "15px", color: "red", fontWeight: "bold" }}
              >
                Student Data Not Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
