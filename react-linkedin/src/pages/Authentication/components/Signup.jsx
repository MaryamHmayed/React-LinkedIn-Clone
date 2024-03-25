import "../style.css"
import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png";



const Signup=()=>{
    const navigate = useNavigate();
const handleSigninClick = () => {
    navigate("./Authentication/index.jsx"); 
}




    return(
        <>
         <div className="logo">
        <img src={logo} alt="linkedin logo" />
        </div>
        <div class="text"> 
            <h2 className="position-center ">Make the most of your professional life</h2>
           
        </div> 
    <div class="container "> 
        
        <div class="your-input"> 
            <div class="input"> 
                <input type="text" name="email" 
                    id="email" required /> 
                <label for="email">Email</label> 
            </div> 
            <div class="input"> 
                <input type="password" name="password" 
                    id="password" required /> 
                <label for="password"> 
                    Password (6+ characters)
                </label> 
            </div> 
        </div> 
         
        <button>Agree & Join</button> 
        <p class="join-link"> 
            Already on LinkedIn? 
            <span  class="join-now" onClick={handleSigninClick} > 
             Sign in
            </span> 
        </p> 
    </div> 

  
 
        
        
        </>
    )
}

export default Signup;