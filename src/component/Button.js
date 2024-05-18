import React from "react";

export function Button(props) {
  return (
    <button
      type="button"
      className={`btn btn-${props.colour} mx-${props.space} my-${props.space} `}
      onClick={props.func}
>
      {props.name}
    </button>
  );
}

export function HomeButton(props) {
  console.log(props.input)

  return (
    <button
      type="button"
      className={`btn btn-warning my-2 `}
      onClick={() => props.func(props.input)}
    >
      {props.name}
    </button>
  );
}


export function ModeButton(props) {
  return (
    <div className= {`form-check form-switch text-${props.buttonmode === true ? 'light' : 'dark'}`} >
    <input className="form-check-input" onClick= {props.func} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked = {props.buttonmode}/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.buttonmode === true ? 'Dark Mode Off' : 'Dark Mode On'}</label>
  </div>
  );
}
