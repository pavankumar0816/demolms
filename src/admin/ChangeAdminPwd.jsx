import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";

export default function ChangeAdminPwd() {
  const [adminData, setAdminData] = useState("");

  useEffect(() => {
    const storedAdminData = localStorage.getItem("admin");
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
    }
  }, []);

  const [formData, setFormData] = useState({
    oldpassword: "",
    newpassword: "",
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
      const response = await axios.put(`${config.url}/changeadminpwd`, {
        ...formData,
        username: adminData.username,
      });
      if (response.data != null) {
        localStorage.removeItem("isAdminLoggedIn");
        localStorage.removeItem("admin");
        navigate("/adminlogin");
        window.location.reload();
      } else {
        setMessage("Old Password is Incorrect");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.response.data);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#111111",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#f3f4f6",
          padding: "40px 30px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#111111",
            fontSize: "28px",
            fontWeight: "700",
            textDecoration: "underline",
          }}
        >
          Change Password
        </h2>

        {message && (
          <p
            style={{
              textAlign: "center",
              color: "green",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            {message}
          </p>
        )}
        {error && (
          <p
            style={{
              textAlign: "center",
              color: "red",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="oldpassword"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#111111",
              }}
            >
              Old Password
            </label>
            <input
              type="password"
              id="oldpassword"
              value={formData.oldpassword}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label
              htmlFor="newpassword"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#111111",
              }}
            >
              New Password
            </label>
            <input
              type="password"
              id="newpassword"
              value={formData.newpassword}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "16px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#111111",
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "16px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#333333")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#111111")
            }
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
