import React from 'react'
import {HomeButton} from "../component/Button";


export default function About(props) {

  return (
    <div 
    className="container"  
   
     >
       <div className="form-center"  
       style={{backgroundColor: props.mode==='dark' ? '#181818' : 'white',
               color: props.mode==='dark' ? 'white' : '#181818'
              }}  
              >
       <section className="about-section" >
    <h2 className="about-heading "   
         style={{backgroundColor: props.mode==='dark' ? '#181818' : 'white',
               color: props.mode==='dark' ? 'white' : '#181818'
              }} 
              >
                About Us
    </h2>
    <strong className="about-content">
        This is a project to learm basic React project with the help of bootstrap .
        </strong>
        <br/><br/><br/>
    <p className="about-content">
        This example will also make your application deployable from github   
    </p>
    <p className="about-content">
        This is a multiple page application that has Home and About section
    </p>
    <p className="about-content">
         with basic react knoledge .
    </p>
        <HomeButton func= {props.pagehaldler} name="Go to Home" input = "home"/>

</section>
  
    </div>

    </div>
  );
   
}

