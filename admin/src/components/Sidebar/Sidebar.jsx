import React, { useState } from 'react';
import './Sidebar.css';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? '←' : '→'}
        </button>

        <nav className="sidebar-nav">
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#messages">Messages</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </nav>
      </div>
      {/* Optional overlay to close sidebar on mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};
