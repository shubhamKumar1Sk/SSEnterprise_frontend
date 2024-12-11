import React, { useState } from "react";
import "../CSS/login.css";
import { apiUrl , createUrl} from "../Configuration/config.js"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {toastStyle} from "../CSS/toastStyle.js";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Details:", { email, password });
   try {
    const url = createUrl(apiUrl,"validate")
    const response = await fetch(url, {
      method: "POST",
      headers: {
       "Content-Type" : "application/json"
      },
      body: JSON.stringify({"email": email,
        "password": password})
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data) {
        toast.success("Login successful!",toastStyle);
        
        navigate("/dashboard");
      } else {
        toast.error("Invalid credentials. Please try again.",toastStyle);
        navigate("/login");
      }
    } else {
      toast.error("Failed to connect to the server.",toastStyle);
    }
  } catch (err) {
    console.error("Error during login", err);
    toast.error("An unexpected error occurred. Please try again.",toastStyle);
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
      </form>
    </div>
  );
}

export default Login;
