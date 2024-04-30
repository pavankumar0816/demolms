import React from 'react';
import './about.css';
import about from "./images/about.png";

export default function About() {
  return (
    
    <div className="about-container">
      <h2 style={{ color: 'brown', textAlign: 'center', marginBottom: '20px' }}>About Student LMS</h2>
      <img src={about} alt="" className='about-image' />
      
      <div className="about-paragraphs">
        <div className="about-paragraph">
          <h2 className="about-heading">Student Learning Management System (SLMS) website</h2>
          <p className="about-text">
            Where education meets innovation. Our platform is designed to empower
            students, educators, and institutions by providing a seamless online
            learning experience With user-friendly interfaces and cutting-edge
            technology, we offer a comprehensive suite of tools to facilitate
            course management, content delivery, collaboration, and assessment.
          </p>
        </div>

        <div className="about-paragraph">
          <h2 className="about-heading">Students can access interactive learning materials</h2>
          <p className="about-text">
            engage in discussions with peers, submit assignments, and track their
            progress all within a dynamic and supportive online environment.
            Meanwhile, instructors can create, customize, and manage courses
            effortlessly, leveraging advanced analytics and reporting features to
            monitor student performance and tailor instruction accordingly.
          </p>
        </div>

        <div className="about-paragraph">
          <h3 className="about-heading">Our commitment to excellence extends beyond the virtual classroom</h3>
          <p className="about-text">
            as we continuously strive to enhance accessibility, scalability, and user
            satisfaction. Join us on this journey of learning and discovery, where
            the possibilities are endless.
          </p>
        </div>
      </div>
    </div>
  );
}
