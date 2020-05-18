import React from "react";
import HomeContainer from "../containers/home/HomeContainer";

export default function AuthorisedApp() {
  console.log(document.cookie);

  return (
    <>
      <HomeContainer />
    </>
  );
}
