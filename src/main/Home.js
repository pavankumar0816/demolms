import React, { useState, useEffect, useRef } from "react";
import lmsbg from "./images/lmsbg.png"; // Hero image
import { motion } from "framer-motion";

export default function Home() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#2c2c2c",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <style>
        {`
          .hero-section {
            text-align: center;
            padding: 60px 20px;
          }

          .gradient-text {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(to right, #f472b6, #fb923c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
          }

          .main-heading {
            font-size: 3.5rem;
          }

          .sub-heading {
            font-size: 2.8rem;
            font-weight: 700;
          }

          .hero-section p {
            font-size: 1.2rem;
            color: white;
            margin-bottom: 40px;
          }

          .hero-image {
            max-width: 600px;
            width: 100%;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            margin-bottom: 50px;
            transition: transform 0.5s ease;
          }

          .hero-image:hover {
            transform: scale(1.02);
          }

          .dropdown-button {
            padding: 12px 25px;
            font-size: 1.3rem;
            font-weight: bold;
            background-color: #10b981;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            margin-top: 20px;
          }

          .dropdown-menu {
            position: absolute;
            top: 0;
            left: 100%;
            min-width: 200px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.25);
            background-color: #ffffff;
            z-index: 10;
          }

          .dropdown-item {
            display: block;
            padding: 10px 15px;
            color: #1f2937;
            text-decoration: none;
            font-weight: 500;
          }

          .dropdown-item:hover {
            background-color: #3b82f6;
            color: white;
          }

          .stats-section {
            background-color: #f9fafb;
            padding: 60px 20px;
            color: #1f2937;
          }

          .stats-card {
            flex: 1;
            min-width: 150px;
            margin: 10px;
            text-align: center;
          }

          .stat-value {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 5px;
          }

          .stat-label {
            font-size: 1.2rem;
            color: #6b7280;
          }

          .features-section {
            padding: 80px 20px;
          }

          .features-title {
            text-align: center;
            margin-bottom: 50px;
            font-size: 2.5rem;
            font-weight: bold;
            color: #14b8a6;
          }

          .feature-card {
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            margin-bottom: 30px;
          }

          .feature-icon {
            font-size: 2rem;
            color: #2563eb;
          }

          .feature-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-top: 15px;
            margin-bottom: 10px;
          }

          .feature-desc {
            color: #6b7280;
          }

          .how-section {
            padding: 20px 20px;
            background-color: #f9fafb;
          }

          .how-title {
            text-align: center;
            margin-bottom: 50px;
            font-size: 2.5rem;
            font-weight: bold;
            color: #15803d;
          }

          .how-step {
            text-align: center;
            margin-bottom: 30px;
          }

          .how-icon {
            font-size: 2rem;
            color: #16a34a;
          }

          .how-step-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-top: 10px;
          }

          .how-step-desc {
            color: #6b7280;
          }

          .footer {
            background-color: white;
            color: black;
            padding: 20px 0;
            text-align: center;
            margin-top: 100px;
          }

          .footer span {
            color: #ef4444;
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="gradient-text main-heading">Student LMS</h1>
        <h3 className="gradient-text sub-heading">
          Online E-Learning Platform
        </h3>
        <br />
        <p>
          Student LMS is a comprehensive digital platform designed to connect
          students, faculty, and administrators in a seamless learning
          ecosystem.
        </p>

        {/* Dropdown Button */}
        <div
          style={{ position: "relative", display: "inline-block" }}
          ref={dropdownRef}
        >
          <button
            className="dropdown-button"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            Connect & Explore
          </button>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <a href="/adminlogin" className="dropdown-item">
                Admin Login
              </a>
              <a href="/studentlogin" className="dropdown-item">
                Student Login
              </a>
              <a href="/facultylogin" className="dropdown-item">
                Faculty Login
              </a>
            </div>
          )}
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <img src={lmsbg} alt="Dashboard Preview" className="hero-image" />
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="stats-card">
            <div className="stat-value">50K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stats-card">
            <div className="stat-value">$2B+</div>
            <div className="stat-label">Transactions Tracked</div>
          </div>
          <div className="stats-card">
            <div className="stat-value">90%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stats-card">
            <div className="stat-value">4.5/5</div>
            <div className="stat-label">User Rating</div>
          </div>
        </div>
      </section>

      <section
        className="features-section"
        style={{ padding: "80px 20px", backgroundColor: "#1f2937" }}
      >
        <h2
          className="features-title"
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#14b8a6",
            marginBottom: "40px",
          }}
        >
          Explore the Powerful Features of Student LMS
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {[
            {
              icon: "📚",
              desc: "Access all your course materials and notes in one place for easy learning.",
            },
            {
              icon: "📝",
              desc: "Submit assignments online and track submission deadlines effectively.",
            },
            {
              icon: "📊",
              desc: "Monitor your performance with detailed grade reports and analytics.",
            },
            {
              icon: "💬",
              desc: "Interact with teachers and classmates through discussion boards and chat.",
            },
            {
              icon: "📅",
              desc: "Stay organized with calendar and schedule features for classes and exams.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: "white",
                width: "220px",
                height: "220px",
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                textAlign: "center",
                color: "#1f2937",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
                {feature.icon}
              </div>
              <div style={{ fontSize: "1rem", fontWeight: "500" }}>
                {feature.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roles Overview Cards */}
      <section style={{ padding: "80px 20px", backgroundColor: "#2c2c2c" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "60px",
          }}
        >
          How Student LMS Works
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {[
            {
              role: "Admin",
              responsibilities: [
                "Manage Students",
                "Manage Faculties",
                "Manage Courses",
                "Map Faculty & Students",
                "Monitor Updates",
              ],
              color: "#0ea5e9",
            },
            {
              role: "Faculty",
              responsibilities: [
                "Upload Content",
                "Provide Assignments",
                "Monitor Submissions",
                "Profile Updates",
                "Manage Courses",
              ],
              color: "#22c55e",
            },
            {
              role: "Student",
              responsibilities: [
                "View Content",
                "Submit Assignments",
                "Track Progress",
                "Profile Updates",
              ],
              color: "#f97316",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: "white",
                width: "280px",
                borderRadius: "15px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                padding: "20px",
                color: "#1f2937",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "1.2rem",
                  marginBottom: "20px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                }}
              >
                {item.role}
              </div>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {item.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    style={{ marginBottom: "8px", fontSize: "0.95rem" }}
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p style={{ margin: 0, fontSize: "1rem" }}>
          Made with <span>❤</span> by <strong>PMPK</strong>
        </p>
      </footer>
    </div>
  );
}
