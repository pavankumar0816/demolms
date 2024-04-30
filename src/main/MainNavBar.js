import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import lmslogo from './images/lms logo.jpg'
// import { BsToggle2On } from "react-icons/bs";
// import { FaSearch } from "react-icons/fa";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './navbar.css' 
import StudentLogin from './../student/StudentLogin';
import AdminLogin from './../admin/AdminLogin'
import FacultyLogin from './../faculty/FacultyLogin'

export default function MainNavBar({ onAdminLogin,onStudentLogin,onFacultyLogin }) 
{ 

  return (
   <div className='navbar'> 
     <img src={lmslogo} alt="" className='logo' />
     
   <nav>   
    <ul>
    <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <li className="dropdown">
            <Link>Login</Link>
            <div className="dropdown-content">
              <Link to="/studentlogin">Student Login</Link>
              <Link to="/facultylogin">Faculty Login</Link>
              <Link to="/adminlogin">Admin Login</Link>
            </div>
          </li>
    </ul>
    </nav>
    
    <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/studentlogin" element={<StudentLogin onStudentLogin={onStudentLogin}/>} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        <Route path="/facultylogin" element={<FacultyLogin onFacultyLogin={onFacultyLogin}/>} exact />
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