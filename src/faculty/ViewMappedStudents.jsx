import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

const ViewMappedStudents = () => {
  const [mappedStudents, setMappedStudents] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  const faculty = JSON.parse(localStorage.getItem("faculty"));
  const facultyId = faculty?.facultyid;

  useEffect(() => {
    if (!facultyId) {
      setMessage("Faculty ID missing. Please log in again.");
      setLoading(false);
      return;
    }

    axios
      .get(`${config.url}/viewmappedstudents/${facultyId}`)
      .then((response) => {
        setMappedStudents(response.data.mappedStudents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching mapped students:", error);
        if (error.response && error.response.status === 404) {
          setMessage("No mapped students found.");
        } else {
          setError("Failed to fetch mapped courses.");
        }
        setLoading(false);
      });
  }, [facultyId]);

  return (
    <div
      style={{
        width: "600px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        background: "#fafafa",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Students Mapped to You
      </h2>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      {message && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {message}
        </p>
      )}

      {mappedStudents.length > 0 && (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <thead>
            <tr style={{ background: "#e0e0e0" }}>
              <th style={{ border: "1px solid #aaa", padding: "8px" }}>
                Student ID
              </th>
              <th style={{ border: "1px solid #aaa", padding: "8px" }}>
                Student Name
              </th>
              <th style={{ border: "1px solid #aaa", padding: "8px" }}>
                Department
              </th>
            </tr>
          </thead>
          <tbody>
            {mappedStudents.map((student) => (
              <tr key={student._id}>
                <td style={{ border: "1px solid #aaa", padding: "8px" }}>
                  {student.studentid}
                </td>
                <td style={{ border: "1px solid #aaa", padding: "8px" }}>
                  {student.studentname}
                </td>
                <td style={{ border: "1px solid #aaa", padding: "8px" }}>
                  {student.department}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && mappedStudents.length === 0 && !message && (
        <p style={{ textAlign: "center" }}>No students mapped to you.</p>
      )}
    </div>
  );
};

export default ViewMappedStudents;
