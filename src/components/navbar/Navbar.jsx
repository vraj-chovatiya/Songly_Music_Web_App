import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Songly</div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/playlists">Playlists</Link>
        <Link to="/profile">Profile</Link>
      </div>

      {/* Login Button */}
      <button>Login</button>
    </nav>
  );
}

export default Navbar;