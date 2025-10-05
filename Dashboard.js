import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [summary, setSummary] = useState({});
  useEffect(() => {
    axios.get('http://localhost:5000/api/dashboard/summary')
      .then(res => setSummary(res.data))
      .catch(() => setSummary({ users: 0, online: 0 }));
  }, []);
  return (
    <div>
      <h1 style={{ color: "#C9184A" }}>Dashboard</h1>
      <div style={{ display: 'flex', gap: 18 }}>
        <div style={{ background: "#3A3B5A", color: "#fff", padding: 24, borderRadius: 10, minWidth: 160 }}>
          <div>Members</div>
          <div style={{ fontSize: 32 }}>{summary.users || 0}</div>
        </div>
        <div style={{ background: "#3A3B5A", color: "#fff", padding: 24, borderRadius: 10, minWidth: 160 }}>
          <div>Online</div>
          <div style={{ fontSize: 32 }}>{summary.online || 0}</div>
        </div>
      </div>
    </div>
  );
}