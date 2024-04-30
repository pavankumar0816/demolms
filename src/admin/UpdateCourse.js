import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function UpdateCourse() 
{
    const [courseData, setCourseData] = useState({
        department:'',
        program:'',
        academicyear:'',
        year:'',
        semester:'',
        coursecode:  '',
        coursename: '',
      });
    
      const [message, setMessage] = useState('');
      const [error, setError] = useState('');
      const [initialCourseData, setInitialCourseData] = useState({});
    
      useEffect(() => {
        const storedCourseData = localStorage.getItem('course');
        if (storedCourseData) {
          const parsedCourseData = JSON.parse(storedCourseData);
          setCourseData(parsedCourseData);
          setInitialCourseData(parsedCourseData);
        }
      }, []);
    
      const handleChange = (e) => {
        setCourseData({...courseData, [e.target.id]: e.target.value});
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const updatedData = {};
          for (const key in courseData) {
            if (courseData[key] !== initialCourseData[key] && initialCourseData[key] !== '') {
              updatedData[key] = courseData[key]; 
            }
          }
          if (Object.keys(updatedData).length !== 0) {
            // There are changes
            updatedData.coursecode = courseData.coursecode;
            const response = await axios.put(`${config.url}/updatecourse`, updatedData);
            setMessage(response.data);
            setError('');
            // No need to make a GET request here
            localStorage.setItem("course", JSON.stringify(updatedData));
          } else {
            // No changes
            setMessage("No Changes in Course Data");
            setError("");
          }
        } catch (error) {
          setError(error.response.data);
          setMessage('');
        }
      };
    
      return (
        <div>
          <h3 align="center"><u>Update Course</u></h3>
          {message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: 'red' }}>{error}</h4>}
          <form onSubmit={handleSubmit}>
         <div>
          <label>Department</label>
          <select id="department" value={courseData.department} onChange={handleChange} required>
            <option value="">---Select Department---</option>
            <option value="cse-h">CSE-H</option>
            <option value="cse-r">CSE-R</option>
            <option value="cs&it">CS & IT</option>
            <option value="aids">AIDS</option>
            <option value="ece">ECE</option>
          </select>
        </div>
        <div>
          <label>Program</label>
          <select id="program" value={courseData.program} onChange={handleChange} required>
            <option value="">---Select Program---</option>
            <option value="B.TECH">B.TECH</option>
            <option value="M.TECH">M.TECH</option>
            <option value="PHD">PHD</option>
          </select>
        </div>
        <div>
          <label>Academic Year</label>
          <select id="academicyear" value={courseData.academicyear} onChange={handleChange} required>
            <option value="">---Select Academic Year---</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2021-2022">2021-2022</option>
            <option value="2020-2021">2020-2021</option>
          </select>
        </div>
        <div>
        <label>Year</label>
          <input type="text" id="year"  value={courseData.year} onChange={handleChange} placeholder='Enter Year' required />
        </div>
        <div>
        <label>Semester</label>
          <select id="semester" value={courseData.semester} onChange={handleChange} required>
            <option value="">---Select Semester---</option>
            <option value="odd">ODD</option>
            <option value="even">EVEN</option>
          </select>
        </div>
        <div>
          <label>Course Code</label>
          <input type="text" id="coursecode" value={courseData.coursecode} onChange={handleChange} placeholder='Enter Your Course Code' required /> 
        </div>
        <div>
          <label>Course name</label>
          <input type="text" id="coursename"  value={courseData.coursename} onChange={handleChange} placeholder='Enter Your Course Name' required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

