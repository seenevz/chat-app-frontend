import React from "react";
import "./Navbar.css";

export default function NavbarContainer({ logged_in, handleLogout }) {
  return (
    <div className="navbar-container">
      Navbar
      {logged_in && (
        <div className="logout-container ">
          <button onClick={handleLogout}>logout</button>
        </div>
      )}
    </div>
  );
}
