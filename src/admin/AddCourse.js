import React, { useState } from "react";
import axios from "axios";
import "./add.css";
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
    <div>
      <h3 align="center">
        <u>Add Courses</u>
      </h3>
      {message ? (
        <h4 align="center">{message}</h4>
      ) : (
        <h4 align="center" style={{ color: "red" }}>
          {error}
        </h4>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Department</label>
          <select
            id="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">---Select Department---</option>
            <option value="cse-h">CSE-H</option>
            <option value="cse-r">CSE-R</option>
            <option value="cs&it">CS & IT</option>
            <option value="aids">AIDS</option>
            <option value="ece">ECE</option>
          </select>
        </div>
        <div>
          <label>Program</label>
          <select
            id="program"
            value={formData.program}
            onChange={handleChange}
            required
          >
            <option value="">---Select Program---</option>
            <option value="B.TECH">B.TECH</option>
            <option value="M.TECH">M.TECH</option>
            <option value="PHD">PHD</option>
          </select>
        </div>
        <div>
          <label>Academic Year</label>
          <select
            id="academicyear"
            value={formData.academicyear}
            onChange={handleChange}
            required
          >
            <option value="">---Select Academic Year---</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2021-2022">2021-2022</option>
            <option value="2020-2021">2020-2021</option>
          </select>
        </div>
        <div>
          <label>Year</label>
          <input
            type="text"
            id="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Enter Year"
            required
          />
        </div>
        <div>
          <label>Semester</label>
          <select
            id="semester"
            value={formData.semester}
            onChange={handleChange}
            required
          >
            <option value="">---Select Semester---</option>
            <option value="odd">ODD</option>
            <option value="even">EVEN</option>
          </select>
        </div>
        <div>
          <label>Course Code</label>
          <input
            type="text"
            id="coursecode"
            value={formData.coursecode}
            onChange={handleChange}
            placeholder="Enter Your Course Code"
            required
          />
        </div>
        <div>
          <label>Course name</label>
          <input
            type="text"
            id="coursename"
            value={formData.coursename}
            onChange={handleChange}
            placeholder="Enter Your Course Name"
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
