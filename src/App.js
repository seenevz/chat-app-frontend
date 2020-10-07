import React, { useEffect, useState } from "react";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import AuthorisedApp from "./containers/AuthorisedApp";
import LoginContainer from "./containers/login/LoginContainer";
import { verifyUser, logoutUser } from "./ApiAdapter";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    (async () => {
      const user = await verifyUser();
      setUser(user ? user : undefined);
    })();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setUser(undefined);
  };

  return (
    <>
      <NavbarContainer logged_in={!!user} handleLogout={handleLogout} user={user}/>
      {user ? (
        <AuthorisedApp currentUserId={user.id} />
      ) : (
        <LoginContainer setUser={setUser} />
      )}
    </>
  );
}

export default App;
