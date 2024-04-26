import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material';
import config from '../config'

export default function ViewMappedCourses() 
{
    const [studentmappedCourses, setStudentMappedCourses] = useState([]);

    useEffect(() => {
        // Fetch mapped courses
         axios.post(`${config.url}/viewstudentmappedcourses`)
            .then(response => {
                setStudentMappedCourses(response.data);
            })
            .catch(error => {
                console.error('Error fetching mapped courses:', error);
            });
    }, []);

    return (
        <div style={{ marginTop: '80px' }}>
            {/* Creating space below the navbar */}
            <Typography variant="h4" gutterBottom align="center" style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'black', marginBottom: '50px' }}>
               Registered Courses
            </Typography>
            {studentmappedCourses.map(mappedCourse => (
                <Box 
                    key={mappedCourse.course.coursecode} 
                    boxShadow={2} 
                    p={3} 
                    mb={2} 
                    bgcolor="#f8f8f8" 
                    border={1} 
                    borderColor="red"
                    borderRadius={4}
                >
                    <Typography variant="subtitle1" color="red">Student ID:</Typography>
                    <Typography>{mappedCourse.studentId}</Typography>
                    <Typography variant="subtitle1" color="blue">Course Code:</Typography>
                    <Typography>{mappedCourse.course.coursecode}</Typography>
                    <Typography variant="subtitle1" color="green">Course Name:</Typography>
                    <Typography>{mappedCourse.course.coursename}</Typography>
                </Box>
            ))}
        </div>
    );
}

