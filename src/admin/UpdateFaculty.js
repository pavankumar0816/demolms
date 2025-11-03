import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function UpdateFaculty() {
  const [facultyData, setFacultyData] = useState({
    facultyid: "",
    facultyname: "",
    facultydept: "",
    qualification: "",
    designation: "",
    email: "",
    contact: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [initialFacultyData, setInitialFacultyData] = useState({});

  useEffect(() => {
    const storedFacultyData = localStorage.getItem("faculty");
    if (storedFacultyData) {
      const parsedFacultyData = JSON.parse(storedFacultyData);
      setFacultyData(parsedFacultyData);
      setInitialFacultyData(parsedFacultyData);
    }
  }, []);

  const handleChange = (e) => {
    setFacultyData({ ...facultyData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {};
      for (const key in facultyData) {
        if (
          facultyData[key] !== initialFacultyData[key] &&
          initialFacultyData[key] !== ""
        ) {
          updatedData[key] = facultyData[key];
        }
      }
      if (Object.keys(updatedData).length !== 0) {
        updatedData.facultyid = facultyData.facultyid;
        const response = await axios.put(
          `${config.url}/updatefaculty`,
          updatedData
        );
        setMessage(response.data);
        setError("");
        localStorage.setItem("faculty", JSON.stringify(facultyData));
      } else {
        setMessage("No Changes in Faculty Data");
        setError("");
      }
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
          <u>Update Faculty</u>
        </h3>
        {message ? (
          <h4 style={{ textAlign: "center", color: "green" }}>{message}</h4>
        ) : (
          <h4 style={{ textAlign: "center", color: "red" }}>{error}</h4>
        )}

        <form onSubmit={handleSubmit}>
          {/* Faculty Id */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Faculty Id</label>
            <input
              type="text"
              id="facultyid"
              value={facultyData.facultyid}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          {/* Faculty Name */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Faculty Name
            </label>
            <input
              type="text"
              id="facultyname"
              value={facultyData.facultyname}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          {/* Department */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Faculty Department
            </label>
            <input
              type="text"
              id="facultydept"
              value={facultyData.facultydept}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          {/* Qualification */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Qualification</label>
            <input
              type="text"
              id="qualification"
              value={facultyData.qualification}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          {/* Designation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Designation</label>
            <input
              type="text"
              id="designation"
              value={facultyData.designation}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          {/* Email */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Email</label>
            <input
              type="email"
              id="email"
              value={facultyData.email}
              onChange={handleChange}
              required
              style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
            />
          </div>

          {/* Contact */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Contact</label>
            <input
              type="number"
              id="contact"
              value={facultyData.contact}
              onChange={handleChange}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
