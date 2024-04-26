import React,{useState} from 'react'
import axios from 'axios';
import './add.css'
import config from '../config'

export default function AddFaculty() 
{
    const[formData, setFormData] = useState({
        facultyid:  '',
        facultyname: '',
        facultydept:'',
        qualification:'',
        designation:'',
        email:'',
        contact:''
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
           const response = await axios.post(`${config.url}/addfaculty`, formData);
           if(response.status===200)
           {
            setFormData({
                facultyid:  '',
                facultyname: '',
                facultydept:'',
                qualification:'',
                designation:'',
                email:'',
                contact:''
  
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
        <h3 align="center"><u>Add Faculty</u></h3>
        {
          message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
        }
        <form onSubmit={handleSubmit} >
          <div>
            <label>Faculty Id</label>
            <input type="text" id="facultyid" value={formData.facultyid} onChange={handleChange} required /> 
          </div>
          <div>
            <label>Faculty name</label>
            <input type="text" id="facultyname"  value={formData.facultyname} onChange={handleChange} required />
          </div>
          <div>
          <label>Faculty Department</label>
            <input type="text" id="facultydept"  value={formData.facultydept} onChange={handleChange} required />
          </div>
          <div>
          <label>Faculty Qualification</label>
            <input type="text" id="qualification"  value={formData.qualification} onChange={handleChange} required />
          </div>
          <div>
          <label>Faculty Designation</label>
            <input type="text" id="designation"  value={formData.designation} onChange={handleChange} required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div> 
          <div>
            <label>Contact</label>
            <input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
          </div> 
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
  
  