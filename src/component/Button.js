import React from "react";

export function Button(props) {
  return (
    <button
      type="button"
      className={`btn btn-${props.colour} mx-${props.space} my-2 `}
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
    <div className= {`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
    <input className="form-check-input" onClick= {props.func} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode === 'dark' ? 'Dark Mode Off' : 'Dark Mode On'}</label>
  </div>
  );
}
