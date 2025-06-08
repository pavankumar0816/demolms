import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function ViewFaculty() {
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

  return (
    <div style={{ textAlign: "center" }}>
      <h2>View Facultys</h2>

      <table
        border={1}
        align="center"
        style={{ width: "auto", height: "auto" }}
      >
        <thead>
          <tr>
            <th>Faculty ID</th>
            <th>Faculty Name</th>
            <th>Faculty Department</th>
            <th>Qualification</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(faculty) && faculty.length > 0 ? (
            faculty.map((faculty, index) => (
              <tr key={index}>
                <td>{faculty.facultyid}</td>
                <td>{faculty.facultyname}</td>
                <td>{faculty.facultydept}</td>
                <td>{faculty.qualification}</td>
                <td>{faculty.designation}</td>
                <td>{faculty.email}</td>
                <td>{faculty.contact}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9"> Faculty Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
