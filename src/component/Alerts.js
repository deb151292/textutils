
import React from 'react'

export default function Alerts(props) {
  return (
    props.alerts &&   
    <div className= {`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
  <h4 className="alert-heading">{props.alerts.type=== "success" ? "Success" : "Oops"}</h4>
  <p className="mb-0">{props.alerts.msg}</p>
</div>

  )
}


