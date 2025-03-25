import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css"; // Import CSS

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      // Ganti dengan password yang lebih aman
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("Password salah!"); // Menampilkan pesan kesalahan
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Admin</h2>
        <input
          type="password"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
