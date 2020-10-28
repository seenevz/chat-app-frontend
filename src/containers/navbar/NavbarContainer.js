import React from "react";

export default function NavbarContainer({ logged_in, handleLogout, user = {}}) {

  const {username} = user

  return (
    <div className="navbar">
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
