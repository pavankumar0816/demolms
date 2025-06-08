import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function ViewAssessment() {
  const [assessments, setAssessments] = useState([]);

  const fetchAssessments = async () => {
    try {
      const response = await axios.post(`${config.url}/viewquestions`);
      setAssessments(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchAssessments();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>View Assessments</h2>
      {assessments.map((assessment, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "#333" }}>Assessment {index + 1}</h3>
          <p style={{ marginBottom: "10px" }}>
            <strong>Description:</strong> {assessment.description}
          </p>
          <div
            style={{
              backgroundColor: "#cfe2f3",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
              width: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4 style={{ marginBottom: "10px", color: "red" }}>Questions:</h4>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                textAlign: "left",
                width: "100%",
              }}
            >
              {assessment.questions.map((question, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "5px",
                    color: "blue",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <span style={{ marginRight: "10px" }}>{idx + 1}.</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
