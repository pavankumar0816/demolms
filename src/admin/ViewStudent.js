import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './view.css'

export default function ViewStudent()
{
   const[students,setStudent] = useState([]);

   const fetchstudents = async () =>{
    try
    {
        const response = await axios.get('http://localhost:2024/viewstudent')
        setStudent(response.data)
    }
    catch(e)
    {
        console.error(e.message)
    }
   }

   useEffect(()=>{
    fetchstudents();
   },[])

  return (
    <div style={{ textAlign: 'center'}} >
    <h2>View Students</h2>

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
        </tr>
      </thead>
      <tbody >
        {Array.isArray(students) && students.length > 0 ? (
            students.map((student,index)=>(
                <tr key={index}>
                    <td>{student.studentid}</td>
                    <td>{student.studentname}</td>
                    <td>{student.gender}</td>
                    <td>{student.department}</td>
                    <td>{student.program}</td>
                    <td>{student.semester}</td>
                    <td>{student.year}</td>
                     
    

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
