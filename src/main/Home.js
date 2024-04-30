import React from 'react';
import './home.css';
import lmsbg from "./images/lmsbg.png";


export default function Home() {

  return (
    <div className="header">
     <div className='background-image'>
     <img src={lmsbg} alt="" className='background-image' />
     </div>

    </div>
  );
}
