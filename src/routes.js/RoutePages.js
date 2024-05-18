import React from 'react'
import TextForm from '../pages/TextForm';
import About from '../pages/About';

export default function RoutePages(props){
    return (
      <div className= "container my-3">
          {props.page === 'home' && <TextForm heading = "Text Formatter" mode = {props.mode} showalert = {props.showalert} />}
          {props.page === 'about' && <About mode = {props.mode} pagehaldler = {props.pagehaldler}/>}
        </div>
    );
    }

 