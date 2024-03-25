import './style.css';
import React from "react";
import logo from "./assets/logo.png";
import { Navigate, useNavigate } from 'react-router-dom';




const Header=()=>{
    const navigate = useNavigate();
    const handleJoinNowClick = () => {
        navigate("/Signup"); 
    }
    const handleSigninClick = () => {
        navigate("/auth"); 
    }


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
        <button className='register'onClick={handleJoinNowClick}>Join now</button>
        <button className='sign-in'onClick={handleSigninClick}>Sign in</button>        
        </div>
        </div>
   </div>
    
    
    
    </>

)}



export default Header;