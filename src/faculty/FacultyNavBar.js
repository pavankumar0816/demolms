import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

import FacultyHome from './FacultyHome';
// import ViewCourses from './ViewCourses'
import CourseContent from './CourseContent'
import ConductAssessment from './ConductAssessment';

// import ViewMappedCourses from './ViewMappedCourses';

import ViewStudentAssessment from './ViewStudentAssessment';
import FacultyProfile from './FacultyProfile';

export default function FacultyNavBar() 
{
  const navigate = useNavigate();

  const handleLogout = () => {
      localStorage.removeItem('isFacultyLoggedIn');
      localStorage.removeItem('faculty');
  
      navigate('/facultylogin');
      window.location.reload()
    };

  return (
    <div>
    <nav>
      <ul>
          <li><Link to="/facultyhome">Home</Link></li>
          <li><Link to="/facultyprofile">Profile</Link></li>
          {/* <li><Link to="/mycourses">My Courses</Link></li> */}
          <li><Link to="/uploadcontent">Upload Course Content</Link></li>
          <li className="dropdown">
            <Link>Assessments</Link>
            <div className="dropdown-content">
              <Link to="/uploadassessment">Upload Assessment</Link>
              <Link to="/viewstudentassessment">View Student Assessment</Link>
            </div>
          </li>
          {/* <li><Link to="/viewmappedcourses">View Mapped Courses</Link></li> */}
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
         
      </ul>
    </nav>
    <Routes>
      <Route path="/facultyhome" element={<FacultyHome/>} exact />
      

      {/* <Route path="/mycourses" element={<ViewCourses/>} exact /> */}

      <Route path="/uploadcontent" element={<CourseContent/>} exact />

      <Route path="/uploadassessment" element={<ConductAssessment/>} exact/>
      <Route path="/viewstudentassessment" element={<ViewStudentAssessment/>} exact />
      
      {/* <Route path="/viewmappedcourses" element={<ViewMappedCourses/>} exact /> */}
            
      

    </Routes>
  </div>
  )
}
