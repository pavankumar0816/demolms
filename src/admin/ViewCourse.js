import React,{useState,useEffect} from 'react'
import axios from 'axios'
// import config from '../config'

export default function ViewCourse() 

{
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () =>{
        try
        {
             const response = await axios.get('http://localhost:2024/viewcourses');
             setCourses(response.data)

        }
        catch(e)
        {
               console.error(e.message)
        }
    }

    useEffect(()=>{
        fetchCourses();
    },[]);

  return (
    <div style={{ textAlign:'center'}}>

        <h2 align="center" >View Courses</h2>
       
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
            <th>Department</th>
            <th>Program</th>
            <th>Academic Year</th>
            <th>Year</th>
            <th>Semester</th>
            <th>Course Code</th>
            <th>Course Name</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(courses) && courses.length>0 ? (
              courses.map((course,index)=>(
                <tr key={index}>
                  <td>{course.department}</td>
                  <td>{course.program}</td>
                  <td>{course.academicyear}</td>
                  <td>{course.semester}</td>
                  <td>{course.year}</td>
                  <td>{course.coursecode}</td>
                  <td>{course.coursename}</td>
                </tr>
              ))
            ):(
              <tr>
                 <td colSpan="9"> Courses Data Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  )
}
