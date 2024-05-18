
import React, { useState } from "react";
import SimpleNavbar from "./component/SimpleNavbar";
import Alerts from "./component/Alerts";
import RoutePages from "./routes.js/RoutePages";
import {getCookie} from "./helper/Helper"
import {setCookie} from "./helper/Helper"


import "./App.css";




function App() {
const [mode, setmode] = useState((getCookie("mode")==="light" ? 'light' : 'dark'))
const [alert, setalert] = useState(null)
const [page, setPage] = useState('home');
document.body.style.background = (getCookie("mode")==="light" ? '#FFFFFF' : '#181818');


const showalert = (alerttype,message) => {
  setalert ({
    msg: message,
    type: alerttype
  })
  setTimeout (() => {
    setalert(null)
  }, 2000
)
}

const setpages= (pagename) => {
  setPage(pagename);
}

const handleMode = () => {
  let newMode;
  if (getCookie("mode") === "light" || getCookie("mode") === "") {
    newMode = "dark";
    document.body.style.background = ('#181818');
    showalert("success", "Dark Mode Enabled");
  } else {
    newMode = "light";
    document.body.style.background = ('#FFFFFF' );
    showalert("success", "Light Mode Enabled");
  }
  setCookie("mode", newMode, 1);
  setmode(newMode); // Update the mode state after setting the cookie
}

console.log(getCookie("mode") ==="light")

  return (
    <>
      <SimpleNavbar mode = {mode} togglefunc = {handleMode} pagehaldler = {setpages} />
      <Alerts alerts = {alert} />
      <RoutePages mode = {mode} showalert = {showalert} pagehaldler = {setpages} page = {page} />
    </>
  );
}


export default App;

