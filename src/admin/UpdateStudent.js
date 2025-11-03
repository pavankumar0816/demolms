import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function UpdateStudent() {
  const [studentData, setStudentData] = useState({
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
  const [initialStudentData, setInitialStudentData] = useState({});

  useEffect(() => {
    const storedStudentData = localStorage.getItem("student");
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData);
      setInitialStudentData(parsedStudentData);
    }
  }, []);

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {};
      for (const key in studentData) {
        if (
          studentData[key] !== initialStudentData[key] &&
          initialStudentData[key] !== ""
        ) {
          updatedData[key] = studentData[key];
        }
      }
      if (Object.keys(updatedData).length !== 0) {
        updatedData.studentid = studentData.studentid;
        const response = await axios.put(
          `${config.url}/updatestudent`,
          updatedData
        );
        setMessage(response.data);
        setError("");
        localStorage.setItem("student", JSON.stringify(updatedData));
      } else {
        setMessage("No Changes in Student Data");
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
          <u>Update Student</u>
        </h3>
        {message ? (
          <h4 style={{ textAlign: "center", color: "green" }}>{message}</h4>
        ) : (
          <h4 style={{ textAlign: "center", color: "red" }}>{error}</h4>
        )}
        <form onSubmit={handleSubmit}>
          {[
            { label: "Student ID", id: "studentid", type: "number" },
            { label: "Student Name", id: "studentname", type: "text" },
            { label: "Semester", id: "semester", type: "text" },
            { label: "Year", id: "year", type: "text" },
          ].map((field) => (
            <div
              key={field.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <label style={{ width: "40%", fontWeight: "bold" }}>
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                value={studentData[field.id]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                required
                style={{ width: "55%", padding: "8px", borderRadius: "5px" }}
              />
            </div>
          ))}

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
              value={studentData.gender}
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
              value={studentData.department}
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
              marginBottom: "20px",
            }}
          >
            <label style={{ width: "40%", fontWeight: "bold" }}>Program</label>
            <select
              id="program"
              value={studentData.program}
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
