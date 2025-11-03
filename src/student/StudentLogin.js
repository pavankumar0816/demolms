import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";

export default function StudentLogin({ onStudentLogin }) {
  const [formData, setFormData] = useState({
    studentid: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkstudentlogin`, formData);
      if (response.data != null) {
        onStudentLogin();
        localStorage.setItem("student", JSON.stringify(response.data));
        navigate("/studenthome");
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

 const styles = {
  page: {
    minHeight: "100vh",
    background: "#283046",  
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  box: {
    background: "linear-gradient(135deg, #1e3c72, #2a5298)", 
    padding: "40px 30px",        // smaller padding
    borderRadius: "15px",        // slightly smaller corners
    width: "100%",
    maxWidth: "400px",           // smaller max width
    boxShadow: "0 15px 35px rgba(0,0,0,0.6)", // smaller shadow
    color: "#ffffff",
  },
  title: {
    textAlign: "center",
    fontSize: "26px", // smaller title
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ffffff",
  },
  msg: {
    color: "#f87171",
    textAlign: "center",
    marginBottom: "10px",
  },
  error: {
    color: "#ef4444",
    textAlign: "center",
    marginBottom: "10px",
  },
  inputBox: {
    position: "relative",
    marginBottom: "25px", // smaller margin
  },
  input: {
    width: "80%", 
    padding: "10px 35px",  // smaller input padding
    border: "1px solid #4a5568",
    backgroundColor: "#1f2937",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "14px",      // smaller font
    outline: "none",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    color: "#9ca3af",
    fontSize: "16px", // smaller icon
  },
  rememberForgot: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px", // smaller font
    marginBottom: "20px",
    color: "#e2e8f0",
  },
  forgotLink: {
    color: "#63b3ed",
    textDecoration: "none",
  },
  btn: {
    width: "100%",
    background: "white",
    color: "black",
    border: "none",
    padding: "12px",     // smaller button height
    borderRadius: "8px",
    fontSize: "16px",    // smaller text
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s",
  },
};

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h1 style={styles.title}>Student Login</h1>

        {message && <p style={styles.msg}>{message}</p>}
        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div style={styles.inputBox}>
            <input
              type="number"
              id="studentid"
              placeholder="Enter ID"
              value={formData.studentid}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <FaUser style={styles.icon} />
          </div>

          <div style={styles.inputBox}>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <FaLock style={styles.icon} />
          </div>

          <div style={styles.rememberForgot}>
            <label>
              <input type="checkbox" style={{ marginRight: "5px" }} />
              Remember Me
            </label>
            <a href="/forgot-password" style={styles.forgotLink}>
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            style={styles.btn}
            onMouseOver={(e) => (e.target.style.background = "#059669")}
            onMouseOut={(e) => (e.target.style.background = "#10b981")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
