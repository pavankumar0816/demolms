import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

import StudentHome from "./StudentHome";
import ViewContent from "./ViewContent";
import RegistrationCourse from "./RegistrationCourse";

import StudentProfile from "./StudentProfile";

import ViewAssessment from "./ViewAssessment";

// import ViewMappedCourses from './ViewMappedCourses';

import UploadAssessment from "./UploadAssessment";

export default function StudentNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isStudentLoggedIn");
    localStorage.removeItem("student");

    navigate("/studentlogin");
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/studenthome">Home</Link>
          </li>
          <li>
            <Link to="/studentprofile">Profile</Link>
          </li>
          <li>
            <Link to="/registercourses">Courses Registration</Link>
          </li>
          <li>
            <Link to="/viewcontent">View Content</Link>
          </li>

          <li>
            <Link to="/viewassessment">View Assessment</Link>
          </li>

          {/* <li><Link to="/viewstudentmappedcourses">Registered Courses</Link></li> */}

          <li>
            <Link to="/uploadassessment">Upload Assessment</Link>
          </li>

          <li>
            <button className="logoutButton" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/studenthome" element={<StudentHome />} exact />
        <Route path="/studentprofile" element={<StudentProfile />} exact />

        <Route path="/registercourses" element={<RegistrationCourse />} exact />
        <Route path="/viewcontent" element={<ViewContent />} exact />

        <Route path="/viewassessment" element={<ViewAssessment />} exact />

        {/* <Route path="/viewstudentmappedcourses" element={<ViewMappedCourses/>} exact/> */}

        <Route path="/uploadassessment" element={<UploadAssessment />} exact />
      </Routes>
    </div>
  );
}
