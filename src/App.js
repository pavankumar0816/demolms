import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import StudentNavBar from "./student/StudentNavBar";
import FacultyNavBar from "./faculty/FacultyNavBar";

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);
  const [isFacultyLoggedIn, setIsFacultyLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    const studentLoggedIn = localStorage.getItem("isStudentLoggedIn") === "true";
    const facultyLoggedIn = localStorage.getItem("isFacultyLoggedIn") === "true";

    setIsAdminLoggedIn(adminLoggedIn);
    setIsStudentLoggedIn(studentLoggedIn);
    setIsFacultyLoggedIn(facultyLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem("isAdminLoggedIn", "true");
    setIsAdminLoggedIn(true);
  };

  const onStudentLogin = () => {
    localStorage.setItem("isStudentLoggedIn", "true");
    setIsStudentLoggedIn(true);
  };

  const onFacultyLogin = () => {
    localStorage.setItem("isFacultyLoggedIn", "true");
    setIsFacultyLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            isAdminLoggedIn ? (
              <AdminNavBar />
            ) : isStudentLoggedIn ? (
              <StudentNavBar />
            ) : isFacultyLoggedIn ? (
              <FacultyNavBar />
            ) : (
              <MainNavBar
                onAdminLogin={onAdminLogin}
                onStudentLogin={onStudentLogin}
                onFacultyLogin={onFacultyLogin}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
}
