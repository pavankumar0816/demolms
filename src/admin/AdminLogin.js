import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";
import lmslogo from "../main/images/lms logo.jpg";

export default function AdminLogin({ onAdminLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.url}/checkadminlogin`,
        formData,
      );
      if (response.data) {
        onAdminLogin();
        localStorage.setItem("admin", JSON.stringify(response.data));
        navigate("/adminhome");
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
      flexDirection: "row",
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
      color: "#ffffff",
      flexDirection: "column",
      padding: "40px",
    },
    leftOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      zIndex: 0,
      borderRadius: "0 0 0 0",
    },
    tagline: {
      fontSize: "2rem",
      fontWeight: "700",
      textAlign: "center",
      textShadow: "1px 1px 10px rgba(0,0,0,0.7)",
      zIndex: 1,
    },
    subtitle: {
      marginTop: "20px",
      fontSize: "1.1rem",
      fontWeight: "400",
      textAlign: "center",
      textShadow: "1px 1px 8px rgba(0,0,0,0.5)",
      zIndex: 1,
    },
    right: {
      flex: 1,
      background: "lightgray",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 40px",
      animation: "fadeIn 0.8s ease forwards",
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
      transition: "0.3s, transform 0.2s",
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
          <h1 style={styles.title}>Admin Login</h1>

          {message && <p style={styles.msg}>{message}</p>}
          {error && <p style={styles.error}>{error}</p>}

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div style={styles.inputBox}>
              <FaUser style={styles.icon} />
              <input
                style={styles.input}
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.inputBox}>
              <FaLock style={styles.icon} />
              <input
                style={styles.input}
                type={showPassword ? "text" : "password"}
                name="password"
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

            <button
              type="submit"
              style={styles.btn}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "none";
                e.target.style.boxShadow = "none";
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
