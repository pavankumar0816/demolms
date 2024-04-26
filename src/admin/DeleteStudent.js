import React,{useEffect, useState} from 'react'
import axios from 'axios'
import config from '../config'

export default function DeleteStudent() 
{
    const[student,setStudent] = useState([]);

    const fetchstudents = async () =>{
        try
        {
             const response = await axios.get(`${config.url}/viewstudent`)
             setStudent(response.data)
             
        }
        catch(e)
        {
             console.error(e.message)
        }
    }

    useEffect(()=>{
        fetchstudents();
    },[]);

    const deleteStudent = async (studentid) => {
        try 
        {
          await axios.delete(`${config.url}/deletestudent/${studentid}`);
          fetchstudents();
        } 
        catch (e) 
        {
          console.error(e.message);
        }
      }

    return (
        <div style={{ textAlign: 'center'}} >
        <h2>Delete Students</h2>
    
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Program</th>
              <th>Semester</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            {Array.isArray(student) && student.length > 0 ? (
                student.map((student,index)=>(
                    <tr key={index}>
                        <td>{student.studentid}</td>
                        <td>{student.studentname}</td>
                        <td>{student.gender}</td>
                        <td>{student.department}</td>
                        <td>{student.program}</td>
                        <td>{student.semester}</td>
                        <td>{student.year}</td>
                        <td>
                            <button onClick={()=> deleteStudent(student.studentid)} className='button-62' >Delete</button>
                        </td>
    
                    </tr>
                ))
            ) :(
              <tr>
                <td colSpan="9"> Student Data Not Found</td>
              </tr>
           )}
          </tbody>
        </table>
    </div>
    )
    }
    