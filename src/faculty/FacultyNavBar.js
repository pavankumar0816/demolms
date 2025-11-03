import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import lmslogo from "../main/images/lms logo.jpg";

import FacultyHome from "./FacultyHome";
import CourseContent from "./CourseContent";
import ConductAssessment from "./ConductAssessment";
import ViewMappedCourses from "./ViewMappedCourses";
import ViewStudentAssessment from "./ViewStudentAssessment";
import FacultyProfile from "./FacultyProfile";

export default function FacultyNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isFacultyLoggedIn");
    localStorage.removeItem("faculty");
    navigate("/facultylogin");
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
        <Link to="/facultyhome">
          <img src={lmslogo} alt="Logo" style={logoStyle} />
        </Link>
        <h2
          style={{
            color: "#1f2937",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Faculty Dashboard
        </h2>

        <Link
          to="/facultyhome"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Home
        </Link>
        <br />
        <Link
          to="/facultyprofile"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Profile
        </Link>
        <br />
        <Link
          to="/uploadcontent"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Upload Course Content
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
        <Link
          to="/viewstudentassessment"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          View Student Assessment
        </Link>
        <br />
        <Link
          to="/viewmappedcourses"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          View Mapped Courses
        </Link>

        <button
          style={logoutButtonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff6666")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#ef4444")
          }
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={contentStyle}>
        <Routes>
          <Route path="/facultyhome" element={<FacultyHome />} exact />
          <Route path="/facultyprofile" element={<FacultyProfile />} exact />
          <Route path="/uploadcontent" element={<CourseContent />} exact />
          <Route
            path="/uploadassessment"
            element={<ConductAssessment />}
            exact
          />
          <Route
            path="/viewstudentassessment"
            element={<ViewStudentAssessment />}
            exact
          />
          <Route
            path="/viewmappedcourses"
            element={<ViewMappedCourses />}
            exact
          />
        </Routes>
      </div>
    </div>
  );
}
