import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function AdminHome() {
  const [counts, setCounts] = useState({
    studentCount: 0,
    courseCount: 0,
    facultyCount: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get(`${config.url}/count`);
      setCounts(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch counts');
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', width: '100%' }}>
        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3>Students</h3>
          </div>
          <div style={cardContentStyle}>
            <p>Student Count: {counts.studentCount}</p>
          </div>
        </div>
        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3>Faculty</h3>
          </div>
          <div style={cardContentStyle}>
            <p>Faculty Count: {counts.facultyCount}</p>
          </div>
        </div>
        <div style={cardStyle}>
          <div style={cardHeaderStyle}>
            <h3>Courses</h3>
          </div>
          <div style={cardContentStyle}>
            <p>Course Count: {counts.courseCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  width: '30%',
  background: '#f4f4f4',
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  margin: '0 10px', // Added margin to separate the cards
};

const cardHeaderStyle = {
  borderBottom: '1px solid #ddd',
  marginBottom: '10px',
  paddingBottom: '10px',
};

const cardContentStyle = {
  marginTop: '10px',
};
