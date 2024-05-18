import React, { useState } from "react";
import {Button} from "../component/Button";

export default function TextForm(props) {
  const createdby = "by Debojyoti Chakraborty"
  const [text, settext] = useState("Enter here");

  const handleChange = (event) => {
    const newValue = event.target.value;
    settext(newValue === "Enter here" ? "" : newValue);
  };

  const handleClickA = () => {
    if (text.replace(/\s/g) ===''){
      props.showalert("danger", "Please enter something");
    } else {
      settext(text.replace(/\s/g, ""));
      props.showalert("success", "Empty Space removed");
    }
   
  };
  const handleClickB = () => {
    if (text.toUpperCase() === text){
      props.showalert("danger", "Text already in Upper case or invalid");
    } else {
      settext(text.toUpperCase());
      props.showalert("success", "Converted to Upper case or invalid");
    }
    

  };
  const handleClickC = () => {
    if (text.toLowerCase() === text){
      props.showalert("danger", "Text already in lower case or invalid");
    } else {
      settext(text.toLowerCase());
      props.showalert("success", "Converted to Lower case or invalid");
    }
   

  };
  const handleClickD = () => {
    settext('');
  };
  
  const encodeBase64 = () => {
    if (text.replace(/\s/g) ===''){
      props.showalert("danger", "Please enter something");
    } else {
      const encoded = btoa(text); // Encode input text to Base64
    settext(encoded);
    props.showalert("success", "Converted to Base64");
    }
    

  };

  const decodeBase64 = () => {
    if (text.replace(/\s/g) ===''){
      props.showalert("danger", "Please enter something");
    } else {
      const decoded = atob(text); // Decode Base64-encoded text
      settext(decoded);
      props.showalert("success", "Converted from Base64 to Text");
    }
   

  };

 
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text)
        .then(() => {
          props.showalert("success", "Text copied to clipboard");         
        })
        .catch((error) => {
          props.showalert("success", "Error copying text to clipboard");         
        });
};


  return (
    <>
      <div className= "container" style={{color: props.mode==='dark' ? 'white' : '#343130', paddingTop: '100px'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3"  >
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            onFocus={() => {
              if (text === "Enter here") {
                settext("");
              }
            }}
            id="A"
            rows="10"
            style={{backgroundColor: props.mode==='dark' ? '#343130' : 'white',color: props.mode==='dark' ? 'white' : '#343130'}}
          >
          </textarea>
        </div >
        <Button colour="primary" func={handleClickA} name="Remove blank space" space = "2"/>
        <Button colour="primary" func={handleClickB} name="To Upper" space = "2"/>
        <Button colour="primary" func={handleClickC} name="To Lower" space = "2"/>
        <Button colour="primary" func={encodeBase64} name="Encode to Base64" space = "2"/>
        <Button colour="primary" func={decodeBase64} name="Decode from Base64" space = "2"/>
        <Button colour="danger" func={handleClickD} name="Clear" space = "2"/>
        <Button colour="success" func={handleCopyToClipboard} name="Copy Text" space = "2"/>


        <div className="component my-5" style={{color: props.mode==='dark' ? '#FFFFFF' : '#343130'}}>
        <h2>Your Word Analytics</h2>
        <p>
          Word Count:{" "}
          {text !== "Enter here"
            ? text.trimStart().split(" ").filter(Boolean).length
            : 0}
        </p>
        <p>Letter Count: {text !== "Enter here" ? text.length : 0}</p>
        <h3>Your Text</h3>
        <p>
          {text !== "Enter here"
            ? text !== ""
              ? text !== " "
                ? text
                : "Write something to show"
              : "Write something to show"
            : "Write something to show"}
        </p>
      </div>


      <div className= "container" style={{color: props.mode==='dark' ? '#FFFFFF' : '#343130'}}>
        <footer
          style={{
            textAlign: "right",
            padding: "10px 0",
            bottom: "0",
            width: "100%",
          }}
        >
          <p>{createdby}</p>
        </footer>
      </div>


      </div>

      

     
    </>
  );
}
