import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function DeleteFaculty() {
  const [faculty, setFaculty] = useState([]);

  const fetchFaculties = async () => {
    try {
      const response = await axios.get(`${config.url}/viewfaculty`);
      setFaculty(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  const deleteFaculty = async (facultyid) => {
    try {
      await axios.delete(`${config.url}/deletefaculty/${facultyid}`);
      fetchFaculties();
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
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Delete Faculty</h2>

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
            <th style={{ padding: "10px" }}>Faculty ID</th>
            <th style={{ padding: "10px" }}>Faculty Name</th>
            <th style={{ padding: "10px" }}>Faculty Department</th>
            <th style={{ padding: "10px" }}>Qualification</th>
            <th style={{ padding: "10px" }}>Designation</th>
            <th style={{ padding: "10px" }}>Email</th>
            <th style={{ padding: "10px" }}>Contact</th>
            <th style={{ padding: "10px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(faculty) && faculty.length > 0 ? (
            faculty.map((f, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#e8f5e9",
                }}
              >
                <td style={{ padding: "8px" }}>{f.facultyid}</td>
                <td style={{ padding: "8px" }}>{f.facultyname}</td>
                <td style={{ padding: "8px" }}>{f.facultydept}</td>
                <td style={{ padding: "8px" }}>{f.qualification}</td>
                <td style={{ padding: "8px" }}>{f.designation}</td>
                <td style={{ padding: "8px" }}>{f.email}</td>
                <td style={{ padding: "8px" }}>{f.contact}</td>
                <td style={{ padding: "8px" }}>
                  <button
                    onClick={() => deleteFaculty(f.facultyid)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
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
                Faculty Data Not Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
