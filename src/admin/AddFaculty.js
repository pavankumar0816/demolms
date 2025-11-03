import React, { useState } from "react";
import axios from "axios";
import config from "../config";

export default function AddFaculty() {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/addfaculty`, formData);
      if (response.status === 200) {
        setFormData({
          facultyid: "",
          facultyname: "",
          facultydept: "",
          qualification: "",
          designation: "",
          email: "",
          contact: "",
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
          <u>Add Faculty</u>
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
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Faculty Id
            </label>
            <input
              type="text"
              id="facultyid"
              value={formData.facultyid}
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
              value={formData.facultyname}
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
              value={formData.facultydept}
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
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              value={formData.qualification}
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
            <label style={{ width: "40%", fontWeight: "bold" }}>
              Designation
            </label>
            <input
              type="text"
              id="designation"
              value={formData.designation}
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
              value={formData.email}
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
              value={formData.contact}
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
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
