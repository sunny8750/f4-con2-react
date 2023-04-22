import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"

function LoginPage() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleLogin = async () => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"username":`${username}`,
        "password":`${password}` }),
    });

    if (response.ok) {
      const { token, id } = await response.json();
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      setError("");
       navigate("/profile");
    } else {
      const { message } = await response.json();
      setError( message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>Username:</label><br/>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div><br/>
      <div>
        <label>Password:</label><br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div><br/>
      <button  id='login' onClick={handleLogin}>Login</button>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
   
  );
}

export default LoginPage;
