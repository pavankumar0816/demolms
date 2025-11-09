import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";
import lmslogo from "../main/images/lms logo.jpg";

export default function StudentLogin({ onStudentLogin }) {
  const [formData, setFormData] = useState({
    studentid: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.url}/checkstudentlogin`,
        formData,
      );
      if (response.data) {
        onStudentLogin();
        localStorage.setItem("student", JSON.stringify(response.data));
        navigate("/studenthome");
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (err) {
      setMessage("");
      setError(err.message);
    }
  };

  const styles = {
    page: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Roboto', sans-serif",
    },
    left: {
      flex: 1,
      position: "relative",
      background: `url(${lmslogo}) center/cover no-repeat`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "40px",
      color: "#ffffff",
    },
    leftOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      zIndex: 1,
    },
    tagline: {
      fontSize: "2rem",
      fontWeight: "700",
      textAlign: "center",
      textShadow: "1px 1px 10px rgba(0,0,0,0.7)",
      zIndex: 2,
      position: "relative",
    },
    subtitle: {
      marginTop: "20px",
      fontSize: "1.1rem",
      fontWeight: "400",
      textAlign: "center",
      textShadow: "1px 1px 8px rgba(0,0,0,0.5)",
      zIndex: 2,
      position: "relative",
    },
    right: {
      flex: 1,
      background: "lightgray",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 40px",
    },
    box: {
      width: "100%",
      maxWidth: "400px",
      background: "#ffffff",
      borderRadius: "20px",
      padding: "50px 30px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "25px",
      color: "#111827",
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
      width: "100%",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "14px 45px",
      border: "1px solid #d1d5db",
      borderRadius: "10px",
      fontSize: "16px",
      outline: "none",
      color: "#111827",
      transition: "0.3s",
    },
    icon: {
      position: "absolute",
      top: "50%",
      left: "12px",
      transform: "translateY(-50%)",
      color: "#6b7280",
      fontSize: "18px",
    },
    showIcon: {
      position: "absolute",
      top: "50%",
      right: "12px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#6b7280",
      fontSize: "18px",
    },
    rememberForgot: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      marginBottom: "25px",
      width: "100%",
      color: "#6b7280",
    },
    forgotLink: {
      color: "#3b82f6",
      textDecoration: "none",
    },
    btn: {
      width: "100%",
      padding: "15px",
      borderRadius: "10px",
      fontSize: "18px",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      background: "linear-gradient(to right, #3b82f6, #2563eb)",
      color: "#ffffff",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.page}>
      {/* Left illustration */}
      <div style={styles.left}>
        <div style={styles.leftOverlay}></div>
        <div style={styles.tagline}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Welcome to Student LMS
          </a>
        </div>
        <div style={styles.subtitle}>
          Empowering students and faculty with seamless online learning
        </div>
      </div>

      {/* Right login form */}
      <div style={styles.right}>
        <div style={styles.box}>
          <h1 style={styles.title}>Student Login</h1>

          {message && <p style={styles.msg}>{message}</p>}
          {error && <p style={styles.error}>{error}</p>}

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div style={styles.inputBox}>
              <FaUser style={styles.icon} />
              <input
                style={styles.input}
                type="number"
                id="studentid"
                placeholder="Enter Student ID"
                value={formData.studentid}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.inputBox}>
              <FaLock style={styles.icon} />
              <input
                style={styles.input}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                style={styles.showIcon}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div style={styles.rememberForgot}>
              <label>
                <input type="checkbox" style={{ marginRight: "5px" }} />{" "}
                Remember Me
              </label>
              <a href="/forgot-password" style={styles.forgotLink}>
                Forgot Password?
              </a>
            </div>

            <button type="submit" style={styles.btn}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
