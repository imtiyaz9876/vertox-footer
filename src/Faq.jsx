import React from 'react'
import CopyRight from './CopyRight'
import "./Faq.css"
import LinkdinLink from './LinkdinLink'
import Subscribe from './Subscribe'

function Faq() {
  return (
    <div>
    <div className="faq">
        <div className="faq_heading">
            <h1>FAQ</h1>
        </div>
        <div className="body_text">
            <div className="text1">
                <h1>HOW CAN I INVEST IN YOUR STARTUP?</h1>
                <p>Please send us an email at admin@vertoxlabs.com if you need to get in<br />  touch with us for our pitch deck and take the conversation forward</p>
            </div>

            <div className="text2">
                <h1>DO YOU HAVE INTERN POSITIONS?</h1>
                <p>We'll be happy to consider interns if your aspirations and career<br /> objectives are tied to the domain of sustainability and circularity.<br />  Please send an email to us  at admin@vertoxlabs.com with <br />  the subject  "Intern looking for opportunities"</p>
            </div>
            
        </div>
    </div>

    <Subscribe />
    <LinkdinLink />
    <CopyRight />
    </div>
  )
}

export default Faq