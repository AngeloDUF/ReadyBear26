import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de autenticación (reemplaza con lógica real)
    if (email === "admin@readybear.com" && password === "123456") {
      localStorage.setItem("auth", "true"); // Guarda autenticación
      navigate("/"); // Redirige a Home
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login Page</h1>
      <p>Enter your credentials to access your account.</p>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", margin: "10px auto", padding: "8px" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", margin: "10px auto", padding: "8px" }} />
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
