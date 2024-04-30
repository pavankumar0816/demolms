
// Home, ChangePassword, Students, Faculties, Logout

import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import lmslogo from '../main/images/lms logo.jpg'
// import { BsToggle2On } from "react-icons/bs";
// import { FaSearch } from "react-icons/fa";

import AdminHome from './AdminHome';
import ChangeAdminPwd from './ChangeAdminPwd';


import AddStudent from './AddStudent'
import ViewStudent from './ViewStudent'
import DeleteStudent from './DeleteStudent';
import UpdateStudent from './UpdateStudent';

import AddCourse from './AddCourse';
import ViewCourse from './ViewCourse';
import DeleteCourse from './DeleteCourse';
import UpdateCourse from './UpdateCourse';

import AddFaculty from './AddFaculty';
import ViewFaculty from './ViewFaculty';
import DeleteFaculty from './DeleteFaculty'
import UpdateFaculty from './UpdateFaculty'

import FacultyWithCourse from './FacultyWithCourse'
 


// import AdminLogin from './AdminLogin'
// import SideBar from './Sidebar'



export default function AdminNavBar() 
{
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };
  return (
   
    <div className='navbar'> 
    <img src={lmslogo} alt="" className='logo' />
    <nav>
     <ul>
     <li><Link to="/adminhome">Home</Link></li>
     <li><Link to="/changeadminpwd">Change Password</Link></li>
     {/* <li><Link to="/sidebar">Sidebar</Link></li> */}

     <li className="dropdown">
            <Link>Students</Link>
            <div className="dropdown-content">
              <Link to="/addstudent">Add Student</Link>
              <Link to="/viewstudent">View Student</Link>
              <Link to="/deletestudent">Delete Student</Link>
              <Link to="/updatestudent">Update Student</Link>
            </div>
          </li>
     <li className="dropdown">
            <Link>Courses</Link>
            <div className="dropdown-content">
              <Link to="/addcourse">Add Course</Link>
              <Link to="/viewcourse">View Course</Link>
              <Link to="/deletecourse">Delete Course</Link>
              <Link to="/updatecourse">Update Course</Link>
            </div>
          </li>
      <li className="dropdown">
            <Link>Faculties</Link>
            <div className="dropdown-content">
              <Link to="/addFaculty">Add Faculty</Link>
              <Link to="/viewfaculty">View Faculty</Link>
              <Link to="/deletefaculty">Delete Faculty</Link>
              <Link to="/updatefaculty">Update Faculty</Link>
            </div>
          </li>
         <li className="dropdown">
            <Link>Mapping</Link>
            <div className="dropdown-content">
              <Link to="/facultycoursemapping">Faculty Course Mapping</Link>
             
            </div>
          </li> 
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
     </ul>
     </nav>
     <Routes>
      {/* <Route path="/sidebar" element={<SideBar/>}  /> */}
    <Route path="/adminhome" element={<AdminHome/>} exact/>
    <Route path="/changeadminpwd" element={<ChangeAdminPwd/>} exact/>

    <Route path="/addstudent" element={<AddStudent/>} />
    <Route path="/viewstudent" element={<ViewStudent/>} />
    <Route path="/deletestudent" element={<DeleteStudent/>} />
    <Route path="/updatestudent" element={<UpdateStudent/>} />

      <Route path="/addCourse" element={<AddCourse/>} exact/>
      <Route path="/viewcourse" element={<ViewCourse/>} exact/>
      <Route path="/deletecourse" element={<DeleteCourse/>} exact/>
      <Route path="/updatecourse" element={<UpdateCourse/>} exact/>

      <Route path="/addfaculty" element={<AddFaculty/>} exact />
      <Route path="/viewfaculty" element={<ViewFaculty/>} exact/>
      <Route path="/deletefaculty" element={<DeleteFaculty/>}  />
      <Route path="/updatefaculty" element={<UpdateFaculty/>} exact/>

      <Route path="/facultycoursemapping" element={<FacultyWithCourse/>} />
       

    </Routes>

        {/* <div className='search-box'>
     <input type="text" placeholder='Search' /> 
      <FaSearch />
     </div>

    <div className='icon'>
     <BsToggle2On/> 

    </div> */}
    </div>
  )
}