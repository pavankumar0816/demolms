import React,{useState,useEffect} from 'react'
import axios from 'axios'
import config from '../config'



export default function DeleteCourse() 
{
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () =>{
        try
        {
             const response = await axios.get(`${config.url}/viewcourses`);
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

    const deleteCourse = async(coursecode) =>{
        try
        {
          await axios.delete(`${config.url}/deletecourse/${coursecode}`);
           fetchCourses();
        }
        catch(e)
        {
           console.error(e.message);
        }
    }


  return (
    <div style={{ textAlign: 'center'}} >
        <h2>Delete Courses</h2>

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            {Array.isArray(courses) && courses.length > 0 ? (
                courses.map((course,index)=>(
                    <tr key={index}>
                       <td>{course.department}</td>
                       <td>{course.program}</td>
                      <td>{course.academicyear}</td>
                      <td>{course.semester}</td>
                      <td>{course.year}</td>
                      <td>{course.coursecode}</td>
                      <td>{course.coursename}</td>
                        <td>
                            <button onClick={()=> deleteCourse(course.coursecode)} className='button-62' >Delete</button>
                        </td>

                    </tr>
                ))
            ) :(
              <tr>
                <td colSpan="9"> Courses Data Not Found</td>
              </tr>
           )}
          </tbody>
        </table>
    </div>
  )
}
