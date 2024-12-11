import React, { useState } from "react";
import "../CSS/login.css";
import "../Configuration/config.js"
import { useNavigate } from "react-router-dom";
import { validate_url } from "../Configuration/config.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Details:", { email, password });
   try {
    const response = await fetch(validate_url, {
      method: "POST",
      headers: {
       "Content-Type" : "application/json"
      },
      body: JSON.stringify({"email": email,
        "password": password})
    });
    
    if(response.ok){
      const data = await response.json();
      if(data){
       navigate("/dashboard")
      }
      else{
        navigate("/login")
      }
    }
    else{

    }
   }
   catch(err){
  console.error("Error during login", err);
   }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <a href=""></a>
      </form>
    </div>
  );
}

export default Login;
