import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

const FacultyWithCourse = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const facultyResponse = await axios.get(`${config.url}/viewfaculty`);
        setFacultyList(facultyResponse.data);

        const courseResponse = await axios.get(`${config.url}/viewcourses`);
        setCourseList(courseResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage({
          text: "❌ Error fetching faculty or course data.",
          type: "error",
        });
      }
    };
    fetchData();
  }, []);

  const handleMap = async () => {
    if (!selectedFaculty || !selectedCourse) {
      setMessage({
        text: "⚠️ Please select both Faculty and Course.",
        type: "error",
      });
      return;
    }

    try {
      const response = await axios.post(`${config.url}/facultycoursemapping`, {
        facultyid: Number(selectedFaculty),
        coursecode: selectedCourse,
      });

      setMessage({ text: `✅ ${response.data.message}`, type: "success" });
    } catch (error) {
      console.error("Error mapping Faculty with course:", error);
      if (error.response) {
        if (error.response.status === 400) {
          setMessage({
            text: "⚠️ Faculty ID and Course Code are required.",
            type: "error",
          });
        } else if (error.response.status === 409) {
          setMessage({
            text: "⚠️ This Faculty is already mapped to this Course.",
            type: "error",
          });
        } else {
          setMessage({
            text: "❌ Failed to map Faculty with Course.",
            type: "error",
          });
        }
      } else {
        setMessage({
          text: "❌ Server is unreachable. Please try again later.",
          type: "error",
        });
      }
    }

    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "black",
        padding: "24px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          padding: "32px",
          width: "100%",
          maxWidth: "500px",
          border: "1px solid #e5e7eb",
          transition: "box-shadow 0.3s",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "24px",
            color: "#1f2937",
          }}
        >
          Map Faculty with Course
        </h2>

        {/* Message Box */}
        {message.text && (
          <div
            style={{
              padding: "12px",
              textAlign: "center",
              borderRadius: "12px",
              marginBottom: "24px",
              fontWeight: "500",
              fontSize: "14px",
              backgroundColor:
                message.type === "success" ? "#d1fae5" : "#fee2e2",
              color: message.type === "success" ? "#065f46" : "#b91c1c",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            {message.text}
          </div>
        )}

        {/* Faculty Dropdown */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              color: "#374151",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Select Faculty
          </label>
          <select
            value={selectedFaculty}
            onChange={(e) => setSelectedFaculty(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "16px",
              border: "1px solid #d1d5db",
              outline: "none",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <option value="" disabled>
              -- Select Faculty --
            </option>
            {facultyList.map((faculty) => (
              <option key={faculty.facultyid} value={faculty.facultyid}>
                {faculty.facultyname}
              </option>
            ))}
          </select>
        </div>

        {/* Course Dropdown */}
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "block",
              color: "#374151",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Select Course
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "16px",
              border: "1px solid #d1d5db",
              outline: "none",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <option value="" disabled>
              -- Select Course --
            </option>
            {courseList.map((course) => (
              <option key={course.coursecode} value={course.coursecode}>
                {course.coursename}
              </option>
            ))}
          </select>
        </div>

        {/* Map Button */}
        <button
          onClick={handleMap}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "16px",
            backgroundColor: "#60a5fa",
            color: "red",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#60a5fa")}
        >
          Map Faculty & Course
        </button>
      </div>
    </div>
  );
};

export default FacultyWithCourse;
