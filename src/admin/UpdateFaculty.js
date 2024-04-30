import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function UpdateFaculty() 
{
    const [facultyData, setFacultyData] = useState({
        facultyid:  '',
        facultyname: '',
        facultydept:'',
        qualification:'',
        designation:'',
        email:'',
        contact:''
     });
    
      const [message, setMessage] = useState('');
      const [error, setError] = useState('');
      const [initialFacultyData, setInitialFacultyData] = useState({});
    
      useEffect(() => {
        const storedFacultyData = localStorage.getItem('faculty');
        if (storedFacultyData) {
          const parsedFacultyData = JSON.parse(storedFacultyData);
          setFacultyData(parsedFacultyData);
          setInitialFacultyData(parsedFacultyData);
        }
      }, []);
    
      const handleChange = (e) => {
        setFacultyData({...facultyData, [e.target.id]: e.target.value});
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const updatedData = {};
          for (const key in facultyData) {
            if (facultyData[key] !== initialFacultyData[key] && initialFacultyData[key] !== '') {
              updatedData[key] = facultyData[key]; 
            }
          }
          if (Object.keys(updatedData).length !== 0) {

            updatedData.facultyid = facultyData.facultyid;
            const response = await axios.put(`${config.url}/updatefaculty`, updatedData);
            setMessage(response.data);
            setError('');
            // No need to make a GET request here
            localStorage.setItem("faculty", JSON.stringify(updatedData));
          } else {
            // No changes
            setMessage("No Changes in Faculty Data");
            setError("");
          }
        } catch (error) {
          setError(error.response.data);
          setMessage('');
        }
      };
    
      return (
        <div>
          <h3 align="center"><u>Update Faculty</u></h3>
          {message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: 'red' }}>{error}</h4>}
          <form onSubmit={handleSubmit} >
          <div>
            <label>Faculty Id</label>
            <input type="text" id="facultyid" value={facultyData.facultyid} onChange={handleChange} required /> 
          </div>
          <div>
            <label>Faculty name</label>
            <input type="text" id="facultyname"  value={facultyData.facultyname} onChange={handleChange} required />
          </div>
          <div>
          <label>Faculty Department</label>
            <input type="text" id="facultydept"  value={facultyData.facultydept} onChange={handleChange} required />
          </div>
          <div>
          <label>Faculty Qualification</label>
            <input type="text" id="qualification"  value={facultyData.qualification} onChange={handleChange} required />
          </div>
          <div>
          <label>Faculty Designation</label>
            <input type="text" id="designation"  value={facultyData.designation} onChange={handleChange} required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" id="email" value={facultyData.email} onChange={handleChange} required />
          </div> 
          <div>
            <label>Contact</label>
            <input type="number" id="contact" value={facultyData.contact} onChange={handleChange} required />
          </div> 
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
  
  