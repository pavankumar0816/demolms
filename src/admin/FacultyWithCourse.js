import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'


const FacultyWithCourse = () => {
    const [facultyList, setFacultyList] = useState([]);
    const [courseList, setCourseList] = useState([]);
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {

         axios.get(`${config.url}/viewfaculty`)
            .then(response => {
                setFacultyList(response.data);
            })
            .catch(error => {
                console.error('Error fetching faculty list:', error);
            })
            axios.get(`${config.url}/viewcourses`)
            .then(response => {
                setCourseList(response.data);
            })
            .catch(error => {
                console.error('Error fetching course list:', error);
            });
    }, []);


    const handleMap = () => {
        axios.post(`${config.url}/facultycoursemapping`, { facultyid: selectedFaculty, coursecode: selectedCourse })
            .then(response => {
                alert(response.data.message);
            })
            .catch(error => {
                if (error.response && error.response.status === 400 && error.response.data.message === 'Mapping already exists') {
                    alert('This Faculty is already mapped to this course.');
                } else {
                    console.error('Error mapping Faculty with course:', error);
                }
            });
    };
    return (
        <div>
            <h2>Map Faculty with Course</h2>
            <div>
                <label>Select Faculty:</label>
                <select onChange={e => setSelectedFaculty(e.target.value)}>
                    <option value="">Select Faculty</option>
                    {facultyList.map(faculty => (
                        <option key={faculty.facultyid} value={faculty.facultyid}>{faculty.facultyname}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Select Course:</label>
                <select onChange={e => setSelectedCourse(e.target.value)}>
                    <option value="">Select Course</option>
                    {courseList.map(course => (
                        <option key={course.coursecode} value={course.coursecode}>{course.coursename}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleMap}>Map</button>
        </div>
    );
};

export default FacultyWithCourse;
