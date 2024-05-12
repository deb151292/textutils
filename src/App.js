
import React, { useState } from "react";
// import TextForm from "./pages/TextForm";
import SimpleNavbar from "./component/SimpleNavbar";
import Alerts from "./component/Alerts";
import RoutePages from "./pages/RoutePages";


import "./App.css";




function App() {
const [mode, setmode] = useState("light")
const [alert, setalert] = useState(null)
const [page, setPage] = useState('home');


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

const handleMode = () =>{
  if(mode ==="light") {
    setmode("dark") 
    document.body.style.background = "#181818"
    showalert("success", "Dark Mode Enabled");
  }else {
    setmode("light")
    document.body.style.background = "#FFFFFF"
    showalert("success", "Light Mode Enabled");

  }
}
console.log(page)
  return (
    <>
      <SimpleNavbar mode = {mode} togglefunc = {handleMode} pagehaldler = {setpages}/>
      <Alerts alerts = {alert} />
      <RoutePages mode = {mode} showalert = {showalert} pagehaldler = {setpages} page = {page} />
    </>
  );
}


export default App;

