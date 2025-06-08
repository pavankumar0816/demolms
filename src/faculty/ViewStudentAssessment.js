import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";

export default function ViewStudentAssessment() {
  const [assessments, setAssessments] = useState([]);

  const fetchAssessments = async () => {
    try {
      const response = await axios.get(`${config.url}/viewstudentassessment`);
      setAssessments(response.data);
    } catch (error) {
      console.error("Error fetching assessments:", error.message);
    }
  };

  useEffect(() => {
    fetchAssessments();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Typography variant="h4" align="center">
        View Student Assessments
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Student ID</b>
              </TableCell>
              <TableCell>
                <b>Student Name</b>
              </TableCell>
              <TableCell>
                <b>Courses</b>
              </TableCell>
              <TableCell>
                <b>File</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assessments.length > 0 ? (
              assessments.map((assessment, index) => (
                <TableRow key={index}>
                  <TableCell>{assessment.student?.studentid}</TableCell>
                  <TableCell>{assessment.student?.studentname}</TableCell>
                  <TableCell>
                    {assessment.courses.map((course, idx) => (
                      <div key={idx}>
                        {course.coursecode} - {course.coursename}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>
                    {assessment.file?.endsWith(".jpg") ||
                    assessment.file?.endsWith(".png") ? (
                      <img
                        src={`${config.url}/viewstudentassessmentfile/${assessment.file}`}
                        alt="Assessment"
                        style={{ width: 150, height: 150 }}
                      />
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        component="a"
                        href={`${config.url}/viewstudentassessmentfile/${assessment.file}`}
                        target="_blank"
                      >
                        Download File
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No Assessment Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
