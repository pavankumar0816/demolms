import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

export default function UpdateStudent() 
{
   const [studentData, setStudentData] = useState({
    studentid: '',
    studentname:'',
    gender:'',
    department:'',
    program:'',
    semester:'',
    year:''
   });

   const [message, setMessage] = useState('');
   const [error, setError] = useState('');
   const[initialStudentData, setInitialStudentData] = useState({});

   useEffect(()=>{
    const storedStudentData = localStorage.getItem('student');
    if(storedStudentData)
    {
        const parsedStudentData = JSON.parse(storedStudentData);
        setStudentData(parsedStudentData);
        setInitialStudentData(parsedStudentData);
    }
   }, []);

   const handleChange = (e) =>{
    setStudentData({...studentData, [e.target.id]: e.target.value});
   };
 
   const handleSubmit = async (e) =>
   {
    e.preventDefault();
    try
    {
         const updatedData = {};
         for (const key in studentData) {
            if (studentData[key] !== initialStudentData[key] && initialStudentData[key] !== '') {
              updatedData[key] = studentData[key]; 
            }
          }
          if (Object.keys(updatedData).length !== 0) {
            // There are changes
            updatedData.studentid = studentData.studentid;
            const response = await axios.put(`${config.url}/updatestudent`, updatedData);
            setMessage(response.data);
            setError('');
            const res =  await axios.get(`${config.url}/addstudent/${studentData.studentid}, updatedData`);
            localStorage.setItem("student",JSON.stringify(res.data))
          } else {
            // No changes
            setMessage("No Changes in Student Data");
            setError("");
          }
        } 
        catch (error) {
          setError(error.response.data);
          setMessage('');
        }
      };
  return (
    <div>
       <h3 align="center"><u>Update Student</u></h3>
     {message ? <h4 align="center">{message}</h4> : <h4 align="center" color='red'>{error}</h4>}
     <form onSubmit={handleSubmit}>
      <div>
        <label>Student ID</label>
        <input type="number" id="studentid" value={studentData.studentid} onChange={handleChange} placeholder='Enter Student ID' required />
      </div>
      <div>
      <label>Student Name</label>
        <input type="text" id="studentname" value={studentData.studentname} onChange={handleChange} placeholder='Enter Student Name' required />
      </div>
      <div>
      <label>Gender</label>
        <select id="gender" value={studentData.gender} onChange={handleChange} required>
            <option value="">---Select Gender---</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
      </div>
      <div>
      <label>Department</label>
        <select id="department" value={studentData.department} onChange={handleChange} required>
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
        <select id="program" value={studentData.program} onChange={handleChange} required>
            <option value="">---Select Program---</option>
            <option value="btech">B.Tech</option>
            <option value="mtech">M.Tech</option>
            <option value="degree">Degree</option>
            <option value="phd">PHD</option>
            </select>
      </div>
      <div>
      <label>Semester</label>
        <input type="text" id="semester" value={studentData.semester} onChange={handleChange} placeholder='Enter Semester' required />
      </div>
      <div>
      <label>Year</label>
        <input type="text" id="year" value={studentData.year} onChange={handleChange} placeholder='Enter Year' required />
      </div>
      <button type="submit">Update</button>
     </form>

    </div>
  )
}
