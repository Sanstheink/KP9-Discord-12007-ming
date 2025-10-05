import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }).then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1 style={{ color: "#C9184A" }}>Users</h1>
      <table style={{ width: "100%", background: "#21223b", color: "#fff", borderRadius: 8 }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.username}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}