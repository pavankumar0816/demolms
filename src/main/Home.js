import React from 'react';

import mobapp from './images/lmsmob.png';
import lmscourse from './images/lmscourse.png';
import lmssubj from './images/lmssubj.png';
import backgroundpng from './images/background.png'; // Importing the background image

import './home.css';

export default function Home() {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundpng})`,
    height: '100vh',
    marginTop: '-1px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '10px 8%',
    position: 'relative',
    resize: 'none',
  };

  return (
    <div style={headerStyle}>

        {/* <div className="explore-button">
            <button id="signInButton">Sign-in</button>
            <div className="dropdown-content" id="signInDropdown">
              <a href="/adminlogin">Admin Login</a>
              <a href="/studentlogin">Student Login</a>
              <a href="/facultylogin">Faculty Login</a>
            </div>
          </div> */}

      <div className="header-content">
        <h3>Student LMS</h3>
        <h6>Learn the courses</h6>
        {/* <p>Ready to start? Login In</p> */}
      </div>

      {/* <div className="sources">
        <div className="row">                 
          <div className="text-col">
            <h3>Enjoy by accessing all the Content</h3>
            <p>There are several modules for all the courses</p>
          </div>
          <div className="img-col">
               <img src={mobapp} alt="app"/>
          </div>
        </div>
      </div>

      <div className="sources1"> 
        <div className="row1">  
          <div className="img1-col">
               <img src={lmscourse} alt="app"/>
          </div>                                                             
          <div className="text1-col">
            <h3>SLMS</h3>
            <p>PMPK</p>
          </div>
        </div>
      </div>

      <div className='sources2'> 
        <div className="row2">                 
          <div className="text2-col">
            <h3>PSPK</h3>
            <p>HLO</p>
          </div>
          <div className="img2-col">
               <img src={lmssubj} alt="app"/>
          </div>
        </div>
      </div> */}
    </div>
  );
}
