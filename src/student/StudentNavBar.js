import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import lmslogo from "../main/images/lms logo.jpg";

import StudentHome from "./StudentHome";
import ViewContent from "./ViewContent";
import RegistrationCourse from "./RegistrationCourse";
import StudentProfile from "./StudentProfile";
import ViewAssessment from "./ViewAssessment";
import UploadAssessment from "./UploadAssessment";

export default function StudentNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isStudentLoggedIn");
    localStorage.removeItem("student");
    navigate("/studentlogin");
    window.location.reload();
  };

  // Sidebar and content styles
  const sidebarStyle = {
    height: "100vh",
    width: "250px",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "white",
    paddingTop: "20px",
    boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  };

  const logoStyle = {
    width: "100px",
    margin: "0 auto 30px",
    display: "block",
    borderRadius: "50%",
  };

  const linkStyle = {
    padding: "12px 20px",
    textDecoration: "none",
    color: "#1f2937",
    fontWeight: "600",
    cursor: "pointer",
    display: "block",
    transition: "background 0.2s",
  };

  const logoutButtonStyle = {
    padding: "12px 20px",
    backgroundColor: "#ef4444",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "20px",
    transition: "all 0.3s ease",
  };

  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
  };

  const contentStyle = {
    marginLeft: "250px",
    flex: 1,
    padding: "20px",
    backgroundColor: "#f3f4f6",
    minHeight: "100vh",
  };

  // Hover effect handler
  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "#e5e5e5";
    e.currentTarget.style.borderRadius = "8px";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "transparent";
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <Link to="/studenthome">
          <img src={lmslogo} alt="Logo" style={logoStyle} />
        </Link>
        <h2 style={{ color: "#1f2937", marginBottom: "20px", textAlign: "center" }}>
          Student Dashboard
        </h2>

        <Link
          to="/studenthome"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Home
        </Link>
        <br />
        <Link
          to="/studentprofile"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Profile
        </Link>
        <br />
        <Link
          to="/registercourses"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Courses Registration
        </Link>
        <br />
        <Link
          to="/viewcontent"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          View Content
        </Link>
        <br />
        <Link
          to="/viewassessment"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          View Assessment
        </Link>
        <br />
        <Link
          to="/uploadassessment"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Upload Assessment
        </Link>
        <br />
        <button
          style={logoutButtonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ff6666")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={contentStyle}>
        <Routes>
          <Route path="/studenthome" element={<StudentHome />} exact />
          <Route path="/studentprofile" element={<StudentProfile />} exact />
          <Route path="/registercourses" element={<RegistrationCourse />} exact />
          <Route path="/viewcontent" element={<ViewContent />} exact />
          <Route path="/viewassessment" element={<ViewAssessment />} exact />
          <Route path="/uploadassessment" element={<UploadAssessment />} exact />
        </Routes>
      </div>
    </div>
  );
}
