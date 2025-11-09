import React, { useState, useEffect, useRef } from "react";
import lmsbg from "./images/lmsbg.png"; // Hero image
import { motion } from "framer-motion";

export default function Home() {
  // eslint-disable-next-line no-unused-vars
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
          .gradient-text {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(to right, #f472b6, #fb923c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
          }

          .main-heading {
            font-size: 3.5rem;
          }

          .hero-section {
            position: relative;
            height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-radius: 15px;
            margin-bottom: 1px;
            background-image: url(${lmsbg});
            background-size: cover;
            background-position: center;
            overflow: hidden;
            filter: brightness(1) contrast(0.9) saturate(1.5);
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            backdrop-filter: blur(4px);
            z-index: 1;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            padding: 0 20px;
            color: white;
          }

          .dropdown-button {
            padding: 12px 25px;
            font-size: 1.2rem;
            font-weight: bold;
            background-color: #10b981;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            margin: 10px auto;
            display: block;
          }

          .dropdown-menu {
            position: absolute;
            top: 0;
            left: 100%;
            min-width: 180px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.25);
            background-color: #ffffff;
            z-index: 10;
          }

          .dropdown-item {
            display: block;
            padding: 8px 12px;
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
            padding: 20px 10px;
            color: #1f2937;
          }

          .stats-card {
            flex: 1;
            min-width: 100px;
            margin: 2px;
            text-align: center;
          }

          .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 2px;
          }

          .stat-label {
            font-size: 0.9rem;
            color: #6b7280;
          }

          .features-section {
            padding: 40px 10px;
          }

          .features-title {
            text-align: center;
            margin-bottom: 20px;
            font-size: 2rem;
            font-weight: bold;
            color: #14b8a6;
          }

          .roles-section {
            padding: 30px 10px;
          }

          .footer {
            background-color: white;
            color: black;
            padding: 20px 0;
            text-align: center;
            margin-top: 50px;
          }

          .footer span {
            color: #ef4444;
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content"></div>
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <div className="stats-card">
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "2px",
              }}
            >
              50K+
            </div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stats-card">
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "2px",
              }}
            >
              $2B+
            </div>
            <div className="stat-label">Transactions</div>
          </div>
          <div className="stats-card">
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "2px",
              }}
            >
              90%
            </div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stats-card">
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "2px",
              }}
            >
              4.5/5
            </div>
            <div className="stat-label">Rating</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="features-section"
        style={{ backgroundColor: "#1f2937" }}
      >
        <h2 className="features-title">Powerful Features</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {[
            { icon: "📚", desc: "Access course materials and notes easily." },
            { icon: "📝", desc: "Submit assignments online effectively." },
            { icon: "📊", desc: "Track performance with analytics." },
            { icon: "💬", desc: "Interact with teachers and classmates." },
            { icon: "📅", desc: "Stay organized with calendar and schedule." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: "white",
                width: "200px",
                height: "200px",
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                textAlign: "center",
                color: "#1f2937",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
                {feature.icon}
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                {feature.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roles Section */}
      <section className="roles-section" style={{ backgroundColor: "#1f2937" }}>
        <h2 className="features-title"> How Student LMS Works</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "60px",
          }}
        >
          {[
            {
              role: "Admin",
              color: "#0ea5e9",
              responsibilities: [
                "Manage Students",
                "Manage Faculties",
                "Manage Courses",
                "Map Faculty & Students",
                "Monitor Updates",
              ],
              link: "/adminlogin",
            },
            {
              role: "Faculty",
              color: "#22c55e",
              responsibilities: [
                "Upload Content",
                "Provide Assignments",
                "Monitor Submissions",
                "Profile Updates",
                "Manage Courses",
              ],
              link: "/facultylogin",
            },
            {
              role: "Student",
              color: "#f97316",
              responsibilities: [
                "View Content",
                "Submit Assignments",
                "Track Progress",
                "Profile Updates",
              ],
              link: "/studentlogin",
            },
          ].map((item, index) => (
            <a href={item.link} key={index} style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  backgroundColor: "white",
                  width: "260px",
                  borderRadius: "15px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  padding: "10px",
                  color: "#1f2937",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "1rem",
                    margin: "0 auto 10px",
                  }}
                >
                  {item.role}
                </div>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "15px",
                    fontSize: "0.85rem",
                    margin: 0,
                  }}
                >
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} style={{ marginBottom: "3px" }}>
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p style={{ margin: 0, fontSize: "0.9rem" }}>
          Made with <span>❤</span> by <strong>PMPK</strong>
        </p>
      </footer>
    </div>
  );
}
