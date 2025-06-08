import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Box, CircularProgress } from "@mui/material";
import config from "../config";

export default function ViewMappedCourses() {
  const [mappedCourses, setMappedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Retrieve faculty data from localStorage
  const faculty = JSON.parse(localStorage.getItem("faculty"));
  const facultyId = faculty?.facultyid; // Get faculty ID safely

  useEffect(() => {
    if (!facultyId) {
      setError("Faculty ID is missing. Please log in.");
      setLoading(false);
      return;
    }

    axios
      .get(`${config.url}/viewmappedcourses/${facultyId}`)
      .then((response) => {
        setMappedCourses(response.data.mappedCourses);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching mapped courses:", error);

        if (error.response && error.response.status === 404) {
          setError("No mapped courses found.");
        } else {
          setError("Failed to fetch mapped courses.");
        }

        setLoading(false);
      });
  }, [facultyId]);

  return (
    <div style={{ marginTop: "80px" }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
          color: "black",
          marginBottom: "50px",
        }}
      >
        Mapped Courses
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="red" variant="h5" fontWeight="bold" align="center">
          {error}
        </Typography>
      ) : mappedCourses.length === 0 ? (
        <Typography align="center" color="gray">
          No courses mapped for this faculty.
        </Typography>
      ) : (
        mappedCourses.map((course) => (
          <Box
            key={course.coursecode}
            boxShadow={2}
            p={3}
            mb={2}
            bgcolor="#f8f8f8"
            border={1}
            borderColor="gray"
            borderRadius={4}
          >
            <Typography variant="subtitle1" color="blue">
              Course Code:
            </Typography>
            <Typography>{course.coursecode}</Typography>
            <Typography variant="subtitle1" color="green">
              Course Name:
            </Typography>
            <Typography>{course.coursename}</Typography>
          </Box>
        ))
      )}
    </div>
  );
}
