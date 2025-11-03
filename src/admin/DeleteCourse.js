import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function DeleteCourse() {
  const [courses, setCourses] = useState([]);

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

  const deleteCourse = async (coursecode) => {
    try {
      await axios.delete(`${config.url}/deletecourse/${coursecode}`);
      fetchCourses();
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
        Delete Courses
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
            <th style={{ padding: "10px" }}>Department</th>
            <th style={{ padding: "10px" }}>Program</th>
            <th style={{ padding: "10px" }}>Academic Year</th>
            <th style={{ padding: "10px" }}>Year</th>
            <th style={{ padding: "10px" }}>Semester</th>
            <th style={{ padding: "10px" }}>Course Code</th>
            <th style={{ padding: "10px" }}>Course Name</th>
            <th style={{ padding: "10px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#e8f5e9",
                }}
              >
                <td style={{ padding: "8px" }}>{course.department}</td>
                <td style={{ padding: "8px" }}>{course.program}</td>
                <td style={{ padding: "8px" }}>{course.academicyear}</td>
                <td style={{ padding: "8px" }}>{course.year}</td>
                <td style={{ padding: "8px" }}>{course.semester}</td>
                <td style={{ padding: "8px" }}>{course.coursecode}</td>
                <td style={{ padding: "8px" }}>{course.coursename}</td>
                <td style={{ padding: "8px" }}>
                  <button
                    onClick={() => deleteCourse(course.coursecode)}
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
                Courses Data Not Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
