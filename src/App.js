import React, { useState } from "react";
import "./App.css";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import AuthorisedApp from "./containers/AuthorisedApp";
import LoginContainer from "./containers/login/LoginContainer";
import { loginUser } from "./ApiAdapter";
// const CableContext = React.createContext(
//   createConsumer("ws://locahost:3000/cable")
// );

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLoginUser = async loginData => {
    try {
      const user = await loginUser(loginData);
      setUser(user);
    } catch (err) {
      console.log(err);

      setError(err.message);
    }
  };

  return (
    // <Context.Provider>
    <>
      <NavbarContainer />
      {error && <h1>{error}</h1>}
      {user ? (
        <AuthorisedApp currentUser={user} />
      ) : (
        <LoginContainer handleLoginUser={handleLoginUser} />
      )}
    </>
    // </Context.Provider>
  );
}

export default App;
