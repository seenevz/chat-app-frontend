import React from "react";
import "./Navbar.css";

export default function NavbarContainer({ logged_in, handleLogout, user = {}}) {

  const {username} = user

  return (
    <div className="navbar-container">
      {logged_in && (
        <>
          Logged in user: {username}
          <div className="logout-container ">
            <button onClick={handleLogout}>logout</button>
          </div>
        </>
      )}
    </div>
  );
}
