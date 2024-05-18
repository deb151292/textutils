
import React from 'react'

export default function Alerts(props) {
  return (
<div className="container" style={{ height: '5px' , width : '500px'}} >
 {props.alerts &&   
    <div className= {`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
  <h4 className="alert-heading">{props.alerts.type=== "success" ? "Success" : "Oops"}</h4>
  <p className="mb-0">{props.alerts.msg}</p>
</div>}
</div>
  )
}


