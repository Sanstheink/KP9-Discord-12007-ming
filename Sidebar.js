import React from 'react';
import { Link } from 'react-router-dom';

const menu = [
  { title: "Dashboard", path: "/" },
  { title: "Users", path: "/users" },
  // Add more items as needed
];

const Sidebar = () => (
  <aside style={{ width: 220, background: '#1A1B2F', color: '#FFF', display: 'flex', flexDirection: 'column' }}>
    <div style={{ fontWeight: 'bold', fontSize: 22, padding: 24, borderBottom: '1px solid #444', color: '#C9184A' }}>
      Discord 12007
    </div>
    {menu.map((item) => (
      <Link key={item.path} to={item.path} style={{ color: '#fff', padding: '18px 24px', textDecoration: 'none', borderBottom: '1px solid #333' }}>
        {item.title}
      </Link>
    ))}
  </aside>
);

export default Sidebar;