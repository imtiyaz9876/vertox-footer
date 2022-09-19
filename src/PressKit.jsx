import React from 'react'
import CopyRight from './CopyRight'
import LinkdinLink from './LinkdinLink'
import "./PressKit.css"
import Subscribe from './Subscribe'

function PressKit() {
  return (
    <div>
    <div className="presskit_container">
        <div className="headeing_text">
            <h1>THE PRESS KIT</h1>
            <p>Our press kit below includes all the information you need in order to cover our story. Please get in touch if you need additional information!</p>
        </div>
    </div>

    <div className="presskit_body">
        <div className="img">
            <img src='https://static.wixstatic.com/media/nsplsh_7344756b5a5a5a31555267~mv2_d_3000_2003_s_2.jpg/v1/fill/w_600,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Kotagauni%20Srinivas.jpg' alt='' />
        </div>
        <div className="text">
            <h1>NEED MORE DETAILS?</h1>
            <p>Write to us for a comprehensive company profile or<br /> get hold of our portfolio of technologies. We will be<br /> more than happy to setup a brief interaction with<br /> our team to check your requirements and provide<br /> feedback on how our technology can help make a difference!</p>
            <span>Contact</span>
        </div>
    </div>
    <div className="Subscribe">
            <Subscribe />
            <LinkdinLink />
            <CopyRight />

        </div>
        

    </div>
  )
}

export default PressKit