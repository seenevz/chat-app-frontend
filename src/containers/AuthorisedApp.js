import React, { useState } from "react";
import HomeContainer from "../containers/home/HomeContainer";
import { createConsumer } from "../../node_modules/@rails/actioncable";

export default function AuthorisedApp() {
  const cableConnection = createConsumer("ws://localhost:3000/cable");
  const [user, setUser] = useState(null);
  return (
    <>
      <HomeContainer cableConnection={cableConnection} />
    </>
  );
}
