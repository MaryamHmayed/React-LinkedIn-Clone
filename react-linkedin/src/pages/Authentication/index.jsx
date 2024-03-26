import "./style.css";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import axios from "axios";


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
        
    <div className="container"> 
         
       
        <div className="text"> 
            <h1>Sign in</h1> 
            <p>Stay updated on your professional world</p> 
        </div> 
        <div className="your-input"> 
            <div className="input"> 
                <input type="text" name="email" 
                    id="email" required 
                    onChange={(e) => {
                        setCredentials({
                          ...credentials,
                          email: e.target.value,
                    
                        });
                      }
                    }
        
                    /> 
                <label className="email">email</label> 
            </div> 
            <div className="input"> 
                <input type="password" name="password" 
                    id="password" required 
                    onChange={(e) => {
                        setCredentials({
                          ...credentials,
                          password: e.target.value,
                        });
                      }}
                    
                    /> 
                <label className="password"> 
                    password 
                </label> 
            </div> 
        </div> 
        <a  className="forgot-password-link"> 
            Forgot Password? 
        </a> 
        <button className="login"
        onClick={async () => {
            try {
              const { email, password } = credentials;

              const response = await axios.post(
                "http://localhost/LinkedIn-clone/back-end/login.php",
                {
                  email,
                  password,
                }
              );

              console.log(response.data);
            } catch (error) {
              console.error(error);
            }
          }}

        >Sign in</button> 
        <p className="join-link"> 
            New to linkedin? 
            <span className="join-now"onClick={handleJoinNowClick}> 
                Join now 
            </span> 
        </p> 
    </div> 

  
 
        
        
        </>
    )
}





export default Authentication