import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      setMsg("Login success!");
      window.location.href = "/";
    } catch {
      setMsg("Login failed!");
    }
  };

  return (
    <div style={{ maxWidth: 330, margin: "60px auto", background: "#21223b", padding: 28, borderRadius: 10 }}>
      <h2 style={{ color: "#C9184A" }}>Login</h2>
      <form onSubmit={handleLogin}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required style={{ width: "100%", marginBottom: 10 }} />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required style={{ width: "100%", marginBottom: 10 }} />
        <button type="submit" style={{ width: "100%", background: "#C9184A", color: "#fff", padding: 9, border: "none", borderRadius: 5 }}>Login</button>
      </form>
      <div style={{ color: "#fff", marginTop: 10 }}>{msg}</div>
    </div>
  );
}