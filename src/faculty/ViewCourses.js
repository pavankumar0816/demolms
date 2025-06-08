import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function ViewCourses() {
  const [facultyData, setFacultyData] = useState("");
  useEffect(() => {
    const storedFacultyData = localStorage.getItem("faculty");
    if (storedFacultyData) {
      const parsedFacultyData = JSON.parse(storedFacultyData);
      setFacultyData(parsedFacultyData);
    }
  }, []);

  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchCourses = async () => {
    try {
      const response = await axios.post(`${config.url}/viewcourses`);
      setCourses(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  });

  return (
    <div className="table-container">
      <h3 align="center">View Courses</h3>
      {message ? (
        <h4 align="center">{message}</h4>
      ) : (
        <h4 align="center" style={{ color: "red" }}>
          {error}
        </h4>
      )}
      <table className="job-table mx-auto" align="center">
        <thead>
          <tr>
            <th>Department</th>
            <th>Academic Year</th>
            <th>Semester</th>
            <th>Year</th>
            <th>Course Code</th>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={index}>
                <td>{course.department}</td>
                <td>{course.academicyear}</td>
                <td>{course.semester}</td>
                <td>{course.year}</td>
                <td>{course.coursecode}</td>
                <td>{course.coursename}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
