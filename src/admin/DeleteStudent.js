import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

export default function DeleteStudent() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewstudent`);
      setStudents(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (studentid) => {
    try {
      await axios.delete(`${config.url}/deletestudent/${studentid}`);
      fetchStudents();
    } catch (e) {
      console.error(e.message);
    }
  };

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
        Delete Students
      </h2>

      <table
        style={{
          width: "90%",
          margin: "0 auto",
          borderCollapse: "collapse",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
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
            <th style={{ padding: "10px" }}>Action</th>
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
                <td style={{ padding: "8px" }}>
                  <button
                    onClick={() => deleteStudent(student.studentid)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#e53935",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
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
