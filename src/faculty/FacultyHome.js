import React, { useEffect, useState } from 'react';

export default function FacultyHome(){ 
  const [facultydata, setFacultyData] = useState("");

  useEffect(() => {
    const storedFacultyData = localStorage.getItem('faculty');
    if (storedFacultyData) {
      const parsedFacultyData = JSON.parse(storedFacultyData);
      setFacultyData(parsedFacultyData)
    }
  }, []);

  return (
    <div>
      {facultydata && (
        <div>
          <h4>Welcome {facultydata.fullname}</h4>
        </div>
      )}
    </div>
  );
}

