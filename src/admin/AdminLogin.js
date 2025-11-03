 import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";

export default function AdminLogin({ onAdminLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data != null) {
        onAdminLogin();
        localStorage.setItem("admin", JSON.stringify(response.data));
        navigate("/adminhome");
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
      // background: "linear-gradient(135deg, #1e3c72, #2a5298)", // new gradient background
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
    },
  box: {
 background: "linear-gradient(135deg, #1e3c72, #2a5298)",      // card background
  padding: "80px 100px",        // increased padding
  borderRadius: "20px",        // rounded corners
  width: "100%",                // let maxWidth control the size
  maxWidth: "700px",           // bigger card
  boxShadow: "0 25px 60px rgba(0,0,0,0.6)", // deeper shadow
  color: "#ffffff",
},

    title: {
      textAlign: "center",
      fontSize: "32px", // bigger title
      fontWeight: "bold",
      marginBottom: "30px",
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
      marginBottom: "35px",
    },
    input: {
      width: "100%", // slightly bigger input
      padding: "14px 45px",
      border: "1px solid #4a5568",
      backgroundColor: "#1f2937",
      color: "#fff",
      borderRadius: "10px",
      fontSize: "16px",
      outline: "none",
    },
    icon: {
      position: "absolute",
      top: "50%",
      left: "12px",
      transform: "translateY(-50%)",
      color: "#9ca3af",
      fontSize: "18px",
    },
    rememberForgot: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      marginBottom: "25px",
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
      padding: "14px",
      borderRadius: "10px",
      fontSize: "18px", // slightly bigger button text
      cursor: "pointer",
      transition: "background 0.3s ease, transform 0.2s",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.box}>
          <h1 style={styles.title}>Admin Login</h1>

          {message && <p style={styles.msg}>{message}</p>}
          {error && <p style={styles.error}>{error}</p>}

          <form onSubmit={handleSubmit}>
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
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.rememberForgot}>
              <label>
                <input type="checkbox" style={{ marginRight: "5px" }} /> Remember Me
              </label>
              <a href="/forgot-password" style={styles.forgotLink}>
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              style={styles.btn}
              onMouseOver={(e) => (e.target.style.background = "#2b6cb0")}
              onMouseOut={(e) => (e.target.style.background = "#3182ce")}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
