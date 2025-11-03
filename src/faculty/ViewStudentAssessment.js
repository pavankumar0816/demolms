import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

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
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>View Student Assessments</h2>

        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Courses</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {assessments.length > 0 ? (
              assessments.map((assessment, index) => (
                <tr key={index}>
                  <td>{assessment.student?.studentid || "N/A"}</td>
                  <td>{assessment.student?.studentname || "N/A"}</td>

                  <td>
                    {assessment.courses?.length > 0 ? (
                      assessment.courses.map((course, idx) => (
                        <div key={idx}>
                          {course.coursecode} - {course.coursename}
                        </div>
                      ))
                    ) : (
                      <div>No courses assigned</div>
                    )}
                  </td>
                  <td>
                    {assessment.file ? (
                      assessment.file.endsWith(".jpg") ||
                      assessment.file.endsWith(".png") ? (
                        <img
                          src={`${config.url}/viewstudentassessmentfile/${assessment.file}`}
                          alt="Assessment"
                          style={styles.image}
                        />
                      ) : (
                        <a
                          href={`${config.url}/viewstudentassessmentfile/${assessment.file}`}
                          target="_blank"
                          rel="noreferrer"
                          style={styles.downloadBtn}
                        >
                          Download File
                        </a>
                      )
                    ) : (
                      <span>No file</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={styles.noData}>
                  No Assessment Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#e5e7eb",
    paddingTop: "50px",
    paddingBottom: "50px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "1000px",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    padding: "30px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#1f2937",
    fontSize: "26px",
    fontWeight: "700",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  thead: {
    backgroundColor: "#f3f4f6",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "8px",
  },
  downloadBtn: {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "600",
  },
  noData: {
    textAlign: "center",
    padding: "20px",
    color: "#ef4444",
    fontWeight: "600",
  },
};
