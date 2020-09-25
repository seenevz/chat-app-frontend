import React, { useEffect, useState } from "react";
import "./App.css";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import AuthorisedApp from "./containers/AuthorisedApp";
import LoginContainer from "./containers/login/LoginContainer";
import { verifyUser, logoutUser } from "./ApiAdapter";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const user = await verifyUser();
      setUser(user);
    })();
  }, []);

  const handleLogout = async () => {
    const resp = await logoutUser();
    setUser(resp);
  };

  return (
    <>
      <NavbarContainer logged_in={!!user} handleLogout={handleLogout} />
      {user ? (
        <AuthorisedApp currentUserId={user.id} />
      ) : (
        <LoginContainer setUser={setUser} />
      )}
    </>
  );
}

export default App;
