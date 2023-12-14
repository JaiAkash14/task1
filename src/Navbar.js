import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './assets/images/webdesign.png';
import { Typography } from "@mui/material";
import open from './assets/images/webdesign.png';
import './Nav.css'
import { Button } from "@mui/material";
import star from './assets/images/star-icon.png';
import React, {  useEffect } from 'react';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";

// import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      console.log("hiii");
      setShow(true);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  

//   const navigate = useNavigate();
const [showNavbar, setShowNavbar] = useState(false)

const handleShowNavbar = () => {
  setShowNavbar(!showNavbar)
}


  return (
    <nav className='navbar' style={{visibility: show ? 'visible' : 'hidden'}}>
    <div className="" style={{}}>
      <div className="container">
        <div className="logocenter">
        <div onClick={()=>{setShow(!show)
        }} className="logo" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>         
          
        <img src={open} style={{ width: 100, height: 100}} />
        </div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar} >
        <img src={Menu} style={{ width: 55, height: 55 }} />
        </div>
       
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul style={{alignItems:'center'}}>
         
            <li>
            <Link activeClass="active" smooth spy to="Home"> Our Works </Link>
            </li>
            <li>
           <img  src={star}></img>
           </li>
            <li>
            <Link activeClass="active" smooth spy to="Stats"> Services </Link>
            </li>
            <li>
           <img  src={star}></img>
           </li>
            <li>
            <Link activeClass="active" smooth spy to="About"> Culture </Link>
            </li>
            <li>
           <img  src={star}></img>
           </li>
            <li>
            <Link activeClass="active" smooth spy to="Contact"> Insights </Link>
            </li>
            <li>
           <img  src={star}></img>
           </li>
            <li>
            <Link activeClass="active" smooth spy to="Contact"> Get in Touch </Link>
            </li>

            
          </ul>
        </div>
      </div>
      </div>
    </nav>
  )

  

  
}


export default Navbar