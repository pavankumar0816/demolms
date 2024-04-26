import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

export default function RegistrationCourse() {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fetchCourses = async () => {
    try {
      const response = await axios.post(`${config.url}/viewcourses`);
      setCourses(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const registerCourse = async (coursecode) => {
    try {
      await axios.post(`${config.url}/registercourses/${ coursecode }`);
      setMessage('Course Registered Successfully');
      fetchCourses(); // Refresh the courses list after registration
    } catch (e) {
      setError(e.message);
    }
  };
  

  return (
    <div className='table-container'>
      <h3 align="center">Registered Courses</h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: "red" }}>{error}</h4>
      }
      <table className="job-table mx-auto" align='center'>
        <thead>
          <tr>
            <th>Department</th>
            <th>Program</th>
            <th>Academic Year</th>
            <th>Year</th>
            <th>Semester</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={index}>
                <td>{course.department}</td>
                <td>{course.program}</td>
                <td>{course.academicyear}</td>
                <td>{course.year}</td>
                <td>{course.semester}</td>
                <td>{course.coursecode}</td>
                <td>{course.coursename}</td>
                <td>
                <button onClick={() => registerCourse(course.coursecode)} className='button-62' >REGISTER</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
