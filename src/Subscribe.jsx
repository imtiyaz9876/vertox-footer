import React from 'react'
import "./Subscribe.css"

const Subscribe = () => {
  return (
    <div>
    
    <div className="subscribe-form">
        <h3>Subscribe Form</h3><br/>
        <input type="text" placeholder='Email Address' required  />
        <br />
        <button id="subscribeBtn">Submit</button>
        
    </div>


    </div>
  )
}

export default Subscribe