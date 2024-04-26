import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Select, Button, FormControl, MenuItem, Box, Paper, Grid, InputLabel } from '@mui/material';
import config from '../config'

const StudentWithCourse = () => {
    const [studentList, setStudentList] = useState([]);
    const [courseList, setCourseList] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
          axios.get(`${config.url}/viewstudent`)
            .then(response => {
                setStudentList(response.data);
            })
            .catch(error => {
                console.error('Error fetching Student list:', error);
            });

              axios.get(`${config.url}/viewcourses`)
            .then(response => {
                setCourseList(response.data);
            })
            .catch(error => {
                console.error('Error fetching course list:', error);
            });
    }, []);

    const handleMap = () => {
          axios.post(`${config.url}/studentcoursemapping`, { studentid: selectedStudent, coursecode: selectedCourse })
            .then(response => {
                alert(response.data.message);
            })
            .catch(error => {
                if (error.response && error.response.status === 400 && error.response.data.message === 'Mapping already exists') {
                    alert('This student is already mapped to this course.');
                } else {
                    console.error('Error mapping Student with course:', error);
                }
            });
    };

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
                <Box mt={3} mb={3}>
                    <Typography variant="h2" align="center" style={{ fontWeight: 'bold', color: '#333' }}>
                        Map Student with Course
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box mb={2}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel>Select Student</InputLabel>
                            <Select
                                value={selectedStudent}
                                onChange={e => setSelectedStudent(e.target.value)}
                                size="small"
                            >
                                <MenuItem value="">Select Student</MenuItem>
                                {studentList.map(student => (
                                    <MenuItem key={student.studentid} value={student.studentid}>{student.studentname}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box mb={2}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel>Select Course</InputLabel>
                            <Select
                                value={selectedCourse}
                                onChange={e => setSelectedCourse(e.target.value)}
                                size="small"
                            >
                                <MenuItem value="">Select Course</MenuItem>
                                {courseList.map(course => (
                                    <MenuItem key={course.coursecode} value={course.coursecode}>{course.coursename}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box mt={2}>
                    <Button variant="contained" color="primary" size="small" fullWidth onClick={handleMap}>Map</Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default StudentWithCourse;
