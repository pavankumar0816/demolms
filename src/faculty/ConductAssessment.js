import React, { useState,useRef } from 'react';
import axios from 'axios';
import config from '../config'

export default function ConductAssessment() 
{ const [formData, setFormData] = useState({
      course: '',
      description: '',
      date: '',
      file: null
});

const fileInputRef = useRef(null); // Ref for the file input element

const [message, setMessage] = useState('');
const [error, setError] = useState('');

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};

const handleFileChange = (e) => {
  setFormData({ ...formData, file: e.target.files[0] });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const formDataToSend = new FormData();
      formDataToSend.append('course', formData.course);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('file', formData.file); // Append the file object

    const response = await axios.post(`${config.url}/uploadassessment`,formDataToSend,{
      headers: {
        'Content-Type': 'multipart/form-data' // Set content type for FormData
      }
    });

    if (response.status === 200) {
      setFormData({
        course: '',
        description: '',
        date: '',
        file: null
      });
      fileInputRef.current.value = '';
    }
    setMessage(response.data);
    setError('');
  } 
  catch (error) 
  {
    setError(error.response.data);
    setMessage('');
  }
};

return (
  <div>
    <h3 align="center"><u>Conduct Assessment</u></h3>
    {message ? <h4 align="center">{message}</h4> : null}
    {error ? <h4 align="center" style={{ color: 'red' }}>{error}</h4> : null}
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label>Course</label>
        <input type="text" id="course" value={formData.course} onChange={handleChange} placeholder='Enter Course Name' required />
      </div>
      <div>
          <label>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} placeholder='Enter Description' required />
        </div>
        <div>
          <label>Date</label>
          <input type="date" id="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Assessment File</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
