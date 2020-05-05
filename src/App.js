import React, { useState } from "react";
import "./App.css";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import AuthorisedApp from "./containers/AuthorisedApp";
import LoginContainer from "./containers/login/LoginContainer";

// const CableContext = React.createContext(
//   createConsumer("ws://locahost:3000/cable")
// );

function App() {
  const [user, setUser] = useState(null);
  return (
    // <Context.Provider>
    <>
      <NavbarContainer />
      {user ? <AuthorisedApp /> : <LoginContainer />}
    </>
    // </Context.Provider>
  );
}

export default App;
