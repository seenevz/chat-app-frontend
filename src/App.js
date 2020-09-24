import React, { useEffect, useState } from "react";
import "./App.css";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import AuthorisedApp from "./containers/AuthorisedApp";
import LoginContainer from "./containers/login/LoginContainer";
import { verifyUser, logoutUser } from "./ApiAdapter";
// const CableContext = React.createContext(
//   createConsumer("ws://locahost:3000/cable")
// );

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
    // <Context.Provider>
    <>
      <NavbarContainer logged_in={!!user} handleLogout={handleLogout} />
      {user ? (
        <AuthorisedApp currentUser={user} />
      ) : (
        <LoginContainer setUser={setUser} />
      )}
    </>
    // </Context.Provider>
  );
}

export default App;
