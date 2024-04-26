import React,{useState} from 'react'
import axios from 'axios';
import './add.css'
import config from '../config'

export default function AddStudent() 
{

  const[formData, setFormData] = useState({
    studentid:  '',
    studentname: '',
    gender:'',
    department:'',
    program:'',
    semester:'',
    year:''
     });
  
     const [message,setMessage] = useState('');
     const[error, setError] = useState('');
  
     const handleChange = (e) =>{
           setFormData({...formData, [e.target.id]: e.target.value});
     };
  
     const handleSubmit = async(e) =>{
      e.preventDefault();
      try
      {
           const response = await axios.post(`${config.url}/addstudent`, formData);
           if(response.status===200)
           {
            setFormData({
              studentid:  '',
              studentname: '',
              gender:'',
              department:'',
              program:'',
              semester:'',
              year:''
  
            });
           }
           setMessage(response.data)
           setError('');
      }
      catch(error)
      {
          setError(error.response.data)
          setMessage('');
      }
     };
  
    return (
      <div>
        <h3 align="center"><u>Add Student</u></h3>
        {
          message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
        }
        <form onSubmit={handleSubmit} >
          <div>
            <label>Student Id</label>
            <input type="number" id="studentid" value={formData.studentid} onChange={handleChange} placeholder='Enter Student ID' required /> 
          </div>
          <div>
            <label>Student name</label>
            <input type="text" id="studentname"  value={formData.studentname} onChange={handleChange} placeholder='Enter Student Name' required />
          </div>
          <div>
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">---Select Gender---</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <label>Department</label>
          <select id="department" value={formData.department} onChange={handleChange} required>
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
          <select id="program" value={formData.program} onChange={handleChange} required>
            <option value="">---Select Program---</option>
            <option value="btech">B.Tech</option>
            <option value="mtech">M.Tech</option>
            <option value="degree">Degree</option>
            <option value="phd">PHD</option>
          </select>
        </div>
          <div>
            <label>Semester</label>
            <input type="text" id="semester"  value={formData.semester} onChange={handleChange} placeholder='Enter Semester' required />
          </div>
          <div>
            <label>Year</label>
            <input type="number" id="year"  value={formData.year} onChange={handleChange} placeholder='Enter Year' required />
          </div>

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }