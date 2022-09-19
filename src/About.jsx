import React from 'react'
import "./About.css"
 import CopyRight from './CopyRight'
 import LinkdinLink from './LinkdinLink'
// import Navigation from './Navigation'
import Subscribe from './Subscribe'
import TeamName from './TeamName'


const About = () => {
  return (
    <div>
    <div className="about">
        <div className="heading">
            <h1>OUR TEAM</h1> <br/>
            <h3>The people who matter</h3> <br/>
            <p>Founded in 2021, our team is comprised of the following folks coming from various backgrounds and with varied <br />levels of experience. Have a look below to connect with them!</p>
        </div>
        <TeamName />
        <Subscribe />
         <LinkdinLink />
        <CopyRight  /> 



    </div>


    </div>
  )
}

export default About