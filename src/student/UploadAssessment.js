import React, { useState, useRef } from "react";
import axios from "axios";
import config from "../config";

export default function UploadAssessment() {
  const [formData, setFormData] = useState({
    file: null,
    description: "",
    saveAs: "",
    courseId: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Assuming you saved the student in localStorage after login
  const student = JSON.parse(localStorage.getItem("student"));
  const studentId = student?._id;

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      return alert("Please select a file before uploading.");
    }

    try {
      setLoading(true);
      setMessage("");
      setError("");

      const formDataToSend = new FormData();
      formDataToSend.append("file", formData.file);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("saveAs", formData.saveAs);
      formDataToSend.append("courseId", formData.courseId);
      formDataToSend.append("studentId", studentId);

      const response = await axios.post(
        `${config.url}/uploadstudentassessment`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        setMessage(response.data);
        setFormData({ file: null, description: "", saveAs: "", courseId: "" });
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Styles
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#2F2F2F",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: "#1f2937",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: loading ? "not-allowed" : "pointer",
    fontWeight: "600",
    fontSize: "16px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          Upload Assessment
        </h2>

        {message && <h4 style={{ color: "green", textAlign: "center" }}>{message}</h4>}
        {error && <h4 style={{ color: "red", textAlign: "center" }}>{error}</h4>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label style={labelStyle}>Select File</label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Description</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            style={inputStyle}
            placeholder="Enter description"
          />

          <label style={labelStyle}>Save As</label>
          <input
            type="text"
            value={formData.saveAs}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, saveAs: e.target.value }))
            }
            style={inputStyle}
            placeholder="Enter display file name"
          />

          <label style={labelStyle}>Course ID</label>
          <input
            type="text"
            value={formData.courseId}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, courseId: e.target.value }))
            }
            style={inputStyle}
            placeholder="Enter Course ID"
            required
          />

          <button
            type="submit"
            style={buttonStyle}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
}
