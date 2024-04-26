import React,{ useState } from 'react'
import { FaUser , FaLock} from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config'

export default function FacultyLogin({onFacultyLogin}) 
{

  const [formData, setFormData] = useState({
    facultyid : '',
    password : ''
  });
  
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkfacultylogin`, formData);
      if (response.data!=null) 
      {
        onFacultyLogin();

        localStorage.setItem('faculty',JSON.stringify(response.data));
        
        navigate("/facultyhome")
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div className="login-container">
      <div className='login'>
      <h1>Faculty Login</h1>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
        <form  onSubmit={handleSubmit}>
       
            <div className='input-box'>
               <input  type="number"  id="facultyid" placeholder='Enter ID'  value={formData.facultyid} onChange={handleChange} required/>
               <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" id="password" placeholder='Enter Password' value={formData.password} onChange={handleChange} required />
                <FaLock className='icon' />

            </div>

            <div className='remember-forgot'>
                <label><input type='checkbox'/>Remember Me</label>
                
                <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>

        </form>

      </div>
    </div>
  )
}
