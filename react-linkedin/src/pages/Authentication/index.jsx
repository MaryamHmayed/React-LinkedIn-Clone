import "./style.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";



const Authentication=()=>{




    return(
        <>
         <div className="logo">
        <img src={logo} alt="linkedin logo" />
        </div>
        
    <div class="container"> 
         
       
        <div class="text"> 
            <h1>Sign in</h1> 
            <p>Stay updated on your professional world</p> 
        </div> 
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
                    Password 
                </label> 
            </div> 
        </div> 
        <a href="#" class="forgot-password-link"> 
            Forgot Password? 
        </a> 
        <button>Sign in</button> 
        <p class="join-link"> 
            New to linkedin? 
            <a href="#" class="join-now"> 
                Join now 
            </a> 
        </p> 
    </div> 

  
 
        
        
        </>
    )
}









export default Authentication