import React from 'react';
import {ModeButton} from "./Button";

export default function SimpleNavbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src="/textutils.png" alt="Logo" width="30" height="30" padding = "2px" className="d-inline-block align-text-top mx-2" />
        Text Utility</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <button className="btn"
           style={{backgroundColor: props.mode==='dark' ? '#181818' : 'white',
           color: props.mode==='dark' ? 'white' : '#181818'
          }} 
           onClick={() => props.pagehaldler("about")}
           >
            About
            </button>         
             </li>
         </ul>
      </div>
      <ModeButton mode = {props.mode} func = {props.togglefunc} />  
    </div>
  </nav>
     );
}

