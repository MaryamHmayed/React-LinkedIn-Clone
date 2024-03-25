import './style.css';
import React from "react";
import logo from "./assets/logo.png";




const Header=()=>{
    

    return(
    <>
    <div className="navbar flex space-between">
        <div className="logo">
        <img src={logo} alt="linkedin logo" />
        </div>
        <div className='nav-container flex gap-20'>
        <ul className="navlist no-style flex space-between gap-10">
            <li>
            Articles
            </li>
            <li>
            People
            </li>
            <li>
            Learning
            </li>
            <li>
              Jobs  
            </li>
            <li>
            Get The App
            </li>
        
        </ul>
        <div className='Join flex gap-10 space-between'>
        <button className='register'>Join now</button>
        <button className='sign-in'>Sign in</button>        
        </div>
        </div>
   </div>
    
    
    
    </>

)}



export default Header;