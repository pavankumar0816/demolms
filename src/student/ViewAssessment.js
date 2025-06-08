import React, { useState, useEffect } from "react";
import axios from "axios";
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
} from "@mui/material"; // Import Material-UI components
import config from "../config";

export default function ViewAssessment() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewassessment`);
      setEvents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Typography variant="h4" align="center" gutterBottom>
        View Assessment
      </Typography>
      <TableContainer component={Paper}>
        <Table style={{ border: "3px solid black" }}>
          <TableHead>
            <TableRow style={{ border: "3px solid black" }}>
              <TableCell
                style={{
                  fontWeight: "bold",
                  borderRight: "3px solid black",
                  borderBottom: "3px solid black",
                }}
              >
                Course
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  borderRight: "3px solid black",
                  borderBottom: "3px solid black",
                }}
              >
                Description
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  borderRight: "3px solid black",
                  borderBottom: "3px solid black",
                }}
              >
                Date
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  borderRight: "3px solid black",
                  borderBottom: "3px solid black",
                }}
              >
                Assessment File
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.length > 0 ? (
              events.map((event, index) => (
                <TableRow key={index} style={{ border: "3px solid black" }}>
                  <TableCell
                    style={{
                      borderRight: "3px solid black",
                      borderBottom: "3px solid black",
                    }}
                  >
                    {event.course}
                  </TableCell>
                  <TableCell
                    style={{
                      borderRight: "3px solid black",
                      borderBottom: "3px solid black",
                    }}
                  >
                    {event.description}
                  </TableCell>
                  <TableCell
                    style={{
                      borderRight: "3px solid black",
                      borderBottom: "3px solid black",
                    }}
                  >
                    {event.date}
                  </TableCell>
                  <TableCell
                    style={{
                      borderRight: "3px solid black",
                      borderBottom: "3px solid black",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {event.file.endsWith(".jpg") ||
                      event.file.endsWith(".jpeg") ||
                      event.file.endsWith(".png") ? (
                        <img
                          src={`${config.url}/assessmentfile/${event.file}`}
                          alt="Event"
                          style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "5px",
                          }}
                        />
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          component="a"
                          href={`${config.url}/assessmentfile/${event.file}`}
                          style={{ marginLeft: 10 }}
                        >
                          Download File
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow style={{ border: "3px solid black" }}>
                <TableCell
                  colSpan={4}
                  align="center"
                  style={{ borderBottom: "3px solid black" }}
                >
                  No Assessment Data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
