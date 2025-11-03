import React, { useState } from "react";
import axios from "axios";
import config from "../config";

export default function AddStudent() {
  const [formData, setFormData] = useState({
    studentid: "",
    studentname: "",
    gender: "",
    department: "",
    program: "",
    semester: "",
    year: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/addstudent`, formData);
      if (response.status === 200) {
        setFormData({
          studentid: "",
          studentname: "",
          gender: "",
          department: "",
          program: "",
          semester: "",
          year: "",
        });
      }
      setMessage(response.data);
      setError("");
    } catch (error) {
      setError(error.response.data);
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
          <u>Add Student</u>
        </h3>
        {message ? (
          <h4 style={{ textAlign: "center", color: "green" }}>{message}</h4>
        ) : (
          <h4 style={{ textAlign: "center", color: "red" }}>{error}</h4>
        )}
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Student Id
            </label>
            <input
              type="number"
              id="studentid"
              value={formData.studentid}
              onChange={handleChange}
              placeholder="Enter Student ID"
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Student Name
            </label>
            <input
              type="text"
              id="studentname"
              value={formData.studentname}
              onChange={handleChange}
              placeholder="Enter Student Name"
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Gender</label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            >
              <option value="">---Select Gender---</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Department
            </label>
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
              <option value="btech">B.Tech</option>
              <option value="mtech">M.Tech</option>
              <option value="degree">Degree</option>
              <option value="phd">PHD</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Semester
            </label>
            <input
              type="text"
              id="semester"
              value={formData.semester}
              onChange={handleChange}
              placeholder="Enter Semester"
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Year</label>
            <input
              type="number"
              id="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Enter Year"
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

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
