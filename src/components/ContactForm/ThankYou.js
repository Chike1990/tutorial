// install react routerdom
import React from 'react'
import { Link } from 'react-router-dom'
import check from "../../images/check.gif"


const ThankYou = () => {
  return (
    <div>
        <h2>
            <Link to="/">Go back to home</Link>
        </h2>
        <img src={check} alt="Your submission was successful!!" style={{marginLeft: "auto", marginRight: "auto"}}/>
      <h3 style={{textAlign: "center", color:"green"}}>Thank you for contacting us! Our customer care officer will be in touch shortly.</h3>
    </div>
  )
}

export default ThankYou
