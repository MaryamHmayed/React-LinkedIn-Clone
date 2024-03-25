import "./style.css";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";



const Authentication=()=>{
      const [credentials, setCredentials] = useState({ email: "", password: "" });
      const [error, setError] = useState("");
      const navigate = useNavigate();


    useEffect(() => {
        if (!credentials.email.includes("@")) {
        setError("Invalid email");
        } else if (credentials.password.length < 6) {
        setError("Short password");
        } else {
        setError("");
        }}, [credentials]);
    
    const handleJoinNowClick = () => {
        navigate("/Signup"); 
    }




    



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
                    id="email" required 
                    onChange={(e) => {
                        setCredentials({
                          ...credentials,
                          email: e.target.value,
                        });
                      }}
        
                    /> 
                <label for="email">Email</label> 
            </div> 
            <div class="input"> 
                <input type="password" name="password" 
                    id="password" required 
                    onChange={(e) => {
                        setCredentials({
                          ...credentials,
                          password: e.target.value,
                        });
                      }}
                    
                    /> 
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
            <span class="join-now"onClick={handleJoinNowClick}> 
                Join now 
            </span> 
        </p> 
    </div> 

  
 
        
        
        </>
    )
}





export default Authentication