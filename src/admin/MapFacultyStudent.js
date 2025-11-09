import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config"; // update according to your project structure

const MapFacultyStudent = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [facultyid, setFacultyid] = useState("");
  const [studentid, setStudentid] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const facultyResponse = await axios.get(`${config.url}/viewfaculty`);
        setFacultyList(facultyResponse.data);

        const studentResponse = await axios.get(`${config.url}/viewstudent`);
        setStudentList(studentResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage({
          text: "Error fetching faculty or student data.",
          type: "error",
        });
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { facultyid, studentid };
      const response = await axios.post(
        `${config.url}/facultystudentmapping`,
        body,
      );

      setMessage({
        text: response.data.message,
        type: "success",
      });
      setFacultyid("");
      setStudentid("");
    } catch (error) {
      console.error(error);
      setMessage({
        text: error.response?.data?.message || "Something went wrong",
        type: "error",
      });
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Map Faculty to Student
      </h2>

      {message.text && (
        <p
          style={{
            color: message.type === "success" ? "green" : "red",
            textAlign: "center",
          }}
        >
          {message.text}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "6px" }}>
          Select Faculty:
        </label>
        <select
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
          value={facultyid}
          onChange={(e) => setFacultyid(e.target.value)}
          required
        >
          <option value="">--Select Faculty--</option>
          {facultyList.map((f) => (
            <option key={f._id} value={f.facultyid}>
              {f.name} ({f.facultyid})
            </option>
          ))}
        </select>

        <label style={{ display: "block", marginBottom: "6px" }}>
          Select Student:
        </label>
        <select
          style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
          value={studentid}
          onChange={(e) => setStudentid(e.target.value)}
          required
        >
          <option value="">--Select Student--</option>
          {studentList.map((s) => (
            <option key={s._id} value={s.studentid}>
              {s.name} ({s.studentid})
            </option>
          ))}
        </select>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Map
        </button>
      </form>
    </div>
  );
};

export default MapFacultyStudent;
