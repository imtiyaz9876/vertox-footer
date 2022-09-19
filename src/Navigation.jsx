import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navigation.css"

function Navigation() {
  return (
    <div>
   
  <div className="nav-bar">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div className="logo">
      <div className="logo-img"><img src='https://static.wixstatic.com/media/409291_9b3f3edd64ba4bdcbca8991a7bd58bd3~mv2.png/v1/fill/w_178,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82_VertoX_Up%202_edited.png' alt='' /></div>
      <div className="logo-text">
      <h1>VERTOX LABS PVT.LTD</h1>
      <p>(Scaling,Transforming)^X</p>
      </div> 
    </div>

    <div className="nav-items">
    <ul className='list'>
      <li><NavLink to="/" >Home</NavLink></li>
      <li>  <NavLink to="/about" >About</NavLink> </li>
      <li>  <NavLink to="/blog" >Blog</NavLink></li>
      <li><NavLink to="/contact" >Contact</NavLink></li>
      <div class="dropdown">
  <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    MORE
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><NavLink to="/presskit" >Press Kit</NavLink></li>
    <li><NavLink to="/faq" >FAQ</NavLink></li>
  </ul>
</div>
      <li> <NavLink to="/button" > <button id='nav-btn'>Get In Touch</button> </NavLink> </li>
      
    </ul>
      
    </div>
  </div>

   
   

    </div>
  )
}

export default Navigation