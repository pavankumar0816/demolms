import React, { useState, useRef } from "react";
import axios from "axios";
import config from "../config";

export default function CourseContent() {
  const [formData, setFormData] = useState({
    course: "",
    topic: "",
    description: "",
    date: "",
    file: null,
  });

  const fileInputRef = useRef(null); // Ref for the file input element

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("course", formData.course);
      formDataToSend.append("topic", formData.topic);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("date", formData.date);
      formDataToSend.append("file", formData.file); // Append the file object

      const response = await axios.post(
        `${config.url}/uploadcontent`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for FormData
          },
        },
      );

      if (response.status === 200) {
        setFormData({
          course: "",
          topic: "",
          description: "",
          date: "",
          file: null,
        });
        fileInputRef.current.value = "";
      }
      setMessage(response.data);
      setError("");
    } catch (error) {
      setError(error.response?.data || "Something went wrong");
      setMessage("");
    }
  };

  // Styles
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#2F2F2F", // Gray background
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "50px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "25px",
    color: "#1f2937",
    fontSize: "26px",
    fontWeight: "700",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    margin: "8px 0 20px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "100px",
    resize: "vertical",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  const buttonHover = (e) => {
    e.currentTarget.style.backgroundColor = "#2563eb";
  };

  const messageStyle = {
    textAlign: "center",
    color: "green",
    marginBottom: "15px",
    fontWeight: "600",
  };

  const errorStyle = {
    textAlign: "center",
    color: "red",
    marginBottom: "15px",
    fontWeight: "600",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h3 style={headingStyle}>Upload Content</h3>
        {message && <div style={messageStyle}>{message}</div>}
        {error && <div style={errorStyle}>{error}</div>}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label>Course</label>
            <input
              type="text"
              id="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter Course Name"
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label>Topic</label>
            <input
              type="text"
              id="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter Topic"
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Description"
              required
              style={textareaStyle}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label>Content File</label>
            <input
              type="file"
              id="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              required
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={buttonHover}
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#3b82f6")
            }
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
