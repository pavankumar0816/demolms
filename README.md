**Project Name:** Student Learning Management System - Frontend (built with React.js, CSS, and Bootstrap)


This is the **Frontend** part of the Student Learning Management System (LMS), built using **React.js**. It supports role-based functionality for **Admin**, **Student**, and **Faculty** users. The frontend interacts with the backend API to manage students, courses, content, and assessments.

---

## 📁 Folder Structure (inside `src/`)

### `src/admin/`
Admin can perform full CRUD (Create,Retrieve, Update,Delete) operations:
- Performed CRUD operations on Students, Faculty, and Courses
- `FacultyWithCourse.jsx` for mapping faculty with courses
- I also implemented functionality to retrieve user details (such as student or faculty) based on their ID.

### `src/student/`
Student features:
- Login Page, Profile Pages
- View and Register Courses
- Submit Assignments
- View Uploaded Assessments
- View Course Content

### `src/faculty/`
Faculty features:
- Login Page, Profile Pages
- Upload Course Content
- Upload Assessments
- View Student Assignment Submissions

### `src/main/`
- Common components like navbar, routing, and shared layouts

---

## 🔐 Session Management (for Login)

- Session-based authentication is used to store and validate logged-in users.
- Once logged in, session information (e.g., user ID or token) is stored using **sessionStorage** or **localStorage**, and used to restrict unauthorized access.
- Protected routes prevent accessing dashboards without login.

---

## 🧰 Tech Stack (Frontend)

- **React.js** for component-based UI
- **React Router** for role-based navigation
- **Tailwind CSS** / Bootstrap for styling
- **Axios** for HTTP requests to backend APIs
- **SessionStorage** for managing authentication sessions
- **React Hooks / Context API** for state and logic sharing

---

## 🚀 How to Run Frontend Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/pavankumar0816/demolms.git
   cd demolms

2. **Install Dependencies** => npm install
3. **Start the App** ==> npm start
4. Open http://localhost:3000 in your browser.
