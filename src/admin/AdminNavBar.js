import React, { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import lmslogo from "../main/images/lms logo.jpg";

import AdminHome from "./AdminHome";
import ChangeAdminPwd from "./ChangeAdminPwd";

import AddStudent from "./AddStudent";
import ViewStudent from "./ViewStudent";
import DeleteStudent from "./DeleteStudent";
import UpdateStudent from "./UpdateStudent";

import AddCourse from "./AddCourse";
import ViewCourse from "./ViewCourse";
import DeleteCourse from "./DeleteCourse";
import UpdateCourse from "./UpdateCourse";

import AddFaculty from "./AddFaculty";
import ViewFaculty from "./ViewFaculty";
import DeleteFaculty from "./DeleteFaculty";
import UpdateFaculty from "./UpdateFaculty";

import FacultyWithCourse from "./FacultyWithCourse";
import MapFacultyStudent from "./MapFacultyStudent";

export default function AdminNavBar() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("admin");
    navigate("/adminlogin");
    window.location.reload();
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? "" : menu);
  };

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

 
  const dropdownContentStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
  };

  const buttonStyle = {
    padding: "12px 20px",
    margin: "10px",
    backgroundColor: "#ef4444",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <Link to="/adminhome">
          <img src={lmslogo} alt="Logo" style={logoStyle} />
        </Link>

        <Link
          to="/adminhome"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Home
        </Link>
        <br />
        <Link
          to="/changeadminpwd"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Change Password
        </Link>
        <br />

        {/* Students Dropdown */}
        <div>
          <div
            style={linkStyle}
            onClick={() => toggleDropdown("students")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Students Menu
          </div>
          {openDropdown === "students" && (
            <div style={dropdownContentStyle}>
              <Link to="/addstudent" style={linkStyle}>
                Add Student
              </Link>
              <Link to="/viewstudent" style={linkStyle}>
                View Student
              </Link>
              <Link to="/deletestudent" style={linkStyle}>
                Delete Student
              </Link>
              <Link to="/updatestudent" style={linkStyle}>
                Update Student
              </Link>
            </div>
          )}
        </div>
        <br />
        <br />

        {/* Courses Dropdown */}
        <div>
          <div
            style={linkStyle}
            onClick={() => toggleDropdown("courses")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Courses Menu
          </div>
          {openDropdown === "courses" && (
            <div style={dropdownContentStyle}>
              <Link to="/addcourse" style={linkStyle}>
                Add Course
              </Link>
              <Link to="/viewcourse" style={linkStyle}>
                View Course
              </Link>
              <Link to="/deletecourse" style={linkStyle}>
                Delete Course
              </Link>
              <Link to="/updatecourse" style={linkStyle}>
                Update Course
              </Link>
            </div>
          )}
        </div>
        <br />
        <br />

        {/* Faculties Dropdown */}
        <div>
          <div
            style={linkStyle}
            onClick={() => toggleDropdown("faculties")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Faculties Menu
          </div>
          {openDropdown === "faculties" && (
            <div style={dropdownContentStyle}>
              <Link to="/addfaculty" style={linkStyle}>
                Add Faculty
              </Link>
              <Link to="/viewfaculty" style={linkStyle}>
                View Faculty
              </Link>
              <Link to="/deletefaculty" style={linkStyle}>
                Delete Faculty
              </Link>
              <Link to="/updatefaculty" style={linkStyle}>
                Update Faculty
              </Link>
            </div>
          )}
        </div>
        <br />

        {/* Mapping */}
        <Link
          to="/facultycoursemapping"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Faculty-Course Mapping
        </Link>
        <br />
        <Link
          to="/facultystudentmapping"
          style={linkStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Faculty-Student Mapping
        </Link>
        <br />
        {/* Logout */}
        <button style={buttonStyle} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: "250px", flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/changeadminpwd" element={<ChangeAdminPwd />} />

          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/viewstudent" element={<ViewStudent />} />
          <Route path="/deletestudent" element={<DeleteStudent />} />
          <Route path="/updatestudent" element={<UpdateStudent />} />

          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/viewcourse" element={<ViewCourse />} />
          <Route path="/deletecourse" element={<DeleteCourse />} />
          <Route path="/updatecourse" element={<UpdateCourse />} />

          <Route path="/addfaculty" element={<AddFaculty />} />
          <Route path="/viewfaculty" element={<ViewFaculty />} />
          <Route path="/deletefaculty" element={<DeleteFaculty />} />
          <Route path="/updatefaculty" element={<UpdateFaculty />} />

          <Route path="/facultycoursemapping" element={<FacultyWithCourse />} />
          <Route
            path="/facultystudentmapping"
            element={<MapFacultyStudent />}
          />
        </Routes>
      </div>
    </div>
  );
}
