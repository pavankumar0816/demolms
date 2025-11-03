import React, { useState } from "react";
import axios from "axios";
import config from "../config";

export default function AddCourse() {
  const [formData, setFormData] = useState({
    department: "",
    program: "",
    academicyear: "",
    year: "",
    semester: "",
    coursecode: "",
    coursename: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/addcourse`, formData);
      if (response.status === 200) {
        setFormData({
          department: "",
          program: "",
          academicyear: "",
          year: "",
          semester: "",
          coursecode: "",
          coursename: "",
        });
      }
      setMessage(response.data);
      setError("");
    } catch (e) {
      setError(e.response.data);
      setMessage("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "30px",
          borderRadius: "8px",
          width: "500px",
          boxShadow: "0px 4px 10px rgba(255,255,255,0.2)",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          <u>Add Course</u>
        </h3>
        {message ? (
          <h4 style={{ textAlign: "center", color: "green" }}>{message}</h4>
        ) : (
          <h4 style={{ textAlign: "center", color: "red" }}>{error}</h4>
        )}

        <form onSubmit={handleSubmit}>
          {/* Department */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Department</label>
            <select
              id="department"
              value={formData.department}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            >
              <option value="">---Select Department---</option>
              <option value="cse-h">CSE-H</option>
              <option value="cse-r">CSE-R</option>
              <option value="cs&it">CS & IT</option>
              <option value="aids">AIDS</option>
              <option value="ece">ECE</option>
            </select>
          </div>

          {/* Program */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Program</label>
            <select
              id="program"
              value={formData.program}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            >
              <option value="">---Select Program---</option>
              <option value="B.TECH">B.TECH</option>
              <option value="M.TECH">M.TECH</option>
              <option value="PHD">PHD</option>
            </select>
          </div>

          {/* Academic Year */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Academic Year
            </label>
            <select
              id="academicyear"
              value={formData.academicyear}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            >
              <option value="">---Select Academic Year---</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
              <option value="2021-2022">2021-2022</option>
              <option value="2020-2021">2020-2021</option>
            </select>
          </div>

          {/* Year */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Year</label>
            <input
              type="text"
              id="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Enter Year"
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          {/* Semester */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Semester</label>
            <select
              id="semester"
              value={formData.semester}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            >
              <option value="">---Select Semester---</option>
              <option value="odd">ODD</option>
              <option value="even">EVEN</option>
            </select>
          </div>

          {/* Course Code */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Course Code
            </label>
            <input
              type="text"
              id="coursecode"
              value={formData.coursecode}
              onChange={handleChange}
              placeholder="Enter Course Code"
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          {/* Course Name */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Course Name
            </label>
            <input
              type="text"
              id="coursename"
              value={formData.coursename}
              onChange={handleChange}
              placeholder="Enter Course Name"
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "darkblue",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
