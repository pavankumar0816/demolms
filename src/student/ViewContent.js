import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material'; // Import Material-UI components
import config from '../config';

export default function ViewContent() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcontent`);
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
        View Content
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', borderRight: '3px solid black', borderBottom: '3px solid black' }}>Course</TableCell>
              <TableCell style={{ fontWeight: 'bold', borderRight: '3px solid black', borderBottom: '3px solid black' }}>Topic</TableCell>
              <TableCell style={{ fontWeight: 'bold', borderRight: '3px solid black', borderBottom: '3px solid black' }}>Description</TableCell>
              <TableCell style={{ fontWeight: 'bold', borderRight: '3px solid black', borderBottom: '3px solid black' }}>Date</TableCell>
              <TableCell>Content File</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.length > 0 ? (
              events.map((event, index) => (
                <TableRow key={index} style={{ marginBottom: 20 }}>
                  <TableCell style={{ borderRight: '3px solid black', borderBottom: '3px solid black' }}>{event.course}</TableCell>
                  <TableCell style={{ borderRight: '3px solid black', borderBottom: '3px solid black' }}>{event.topic}</TableCell>
                  <TableCell style={{ borderRight: '3px solid black', borderBottom: '3px solid black' }}>{event.description}</TableCell>
                  <TableCell style={{ borderRight: '3px solid black', borderBottom: '3px solid black' }}>{event.date}</TableCell>
                  <TableCell>
                    {event.file.endsWith('.jpg') || event.file.endsWith('.jpeg') || event.file.endsWith('.png') ? (
                      <img src={`${config.url}/contentfile/${event.file}`} alt="Event" style={{ width: '150px', height: '150px', borderRadius: '5px' }} />
                    ) : (
                      <Button variant="contained" color="primary" component="a" href={`${config.url}/contentfile/${event.file}`} style={{ marginLeft: 10 }}>Download File</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">No Course Content found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
