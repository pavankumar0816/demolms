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

    // Clear message after 3 seconds
    setTimeout(() => setMessage({ text: "", type: "" }), 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Map Faculty with Course
        </h2>

        {message.text && (
          <div
            className={`p-2 text-center rounded-md mb-4 ${message.type === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
          >
            {message.text}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Select Faculty:
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            onChange={(e) => setSelectedFaculty(e.target.value)}
            value={selectedFaculty}
          >
            <option value="" disabled>
              Select Faculty
            </option>
            {facultyList.map((faculty) => (
              <option key={faculty.facultyid} value={faculty.facultyid}>
                {faculty.facultyname}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Select Course:
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            onChange={(e) => setSelectedCourse(e.target.value)}
            value={selectedCourse}
          >
            <option value="" disabled>
              Select Course
            </option>
            {courseList.map((course) => (
              <option key={course.coursecode} value={course.coursecode}>
                {course.coursename}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleMap}
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200"
        >
          Map Faculty & Course
        </button>
      </div>
    </div>
  );
};

export default FacultyWithCourse;
