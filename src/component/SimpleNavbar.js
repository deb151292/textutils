import React from 'react';
import { ModeButton } from "./Button";
import {Systemlogo} from "../asset/logo"
import { getCookie } from '../helper/Helper';

export default function SimpleNavbar(props) {

const buttonmode =  (getCookie("mode")==="light" ? false : true)

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <Systemlogo/>
          Text Utility
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
            <li className="nav-item">
              <button
                className="nav-link btn btn-outline-success"
                style={{
                  backgroundColor: props.mode === 'dark' ? '#181818' : 'white',
                  color: props.mode === 'dark' ? 'white' : '#181818'
                }}
                onClick={() => props.pagehaldler("about")}
              >
                About
              </button>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <ModeButton func={props.togglefunc} buttonmode = {buttonmode}/>
          </ul>
        </div>
      </div>
    </nav>
  );
}