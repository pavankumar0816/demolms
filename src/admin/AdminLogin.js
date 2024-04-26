import React,{ useState } from 'react'
import { FaUser , FaLock} from "react-icons/fa";
import './adminlogin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config'

export default function AdminLogin({onAdminLogin}) 
{

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data!=null) 
      {
        onAdminLogin();

        localStorage.setItem('admin'.JSON.stringify(response.data));
        
        navigate("/adminhome")
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
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
        <form  onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
            <div className='input-box'>
               <input  type="text"  name="username" placeholder='Enter Username'  value={formData.username} onChange={handleChange} required/>
               <FaUser className='icon' />
            </div>
            <div className='input-box'>
                <input type="password" name="password" placeholder='Enter Password' value={formData.password} onChange={handleChange} required />
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
