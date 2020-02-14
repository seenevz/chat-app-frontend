import React from "react";
import "./App.css";
import HomeContainer from "./containers/home/HomeContainer";
import NavbarContainer from "./containers/navbar/NavbarContainer";

function App() {
  return (
    <>
      <NavbarContainer />
      <HomeContainer />
    </>
  );
}

export default App;
