import React from 'react'
import "./CopyRight.css"

function CopyRight() {
  //  let year=props.getFullYear();
   let yr = new Date()
   let year= yr.getFullYear();

  return (
    <div>
    <div className="copyRight">


         <h4>{year} by <a href={"www.vertoxlabs.com"}>www.vertoxlabs.com</a> Proudly created with Wix.com </h4> 
         
    </div>
    


    </div>
  )
}

export default CopyRight