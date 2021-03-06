import React, { useEffect } from "react";
import HomeContainer from "./home/HomeContainer.jsx";

import { cableConnection } from "../ApiAdapter";

export default function AuthorisedApp({currentUserId}) {
  useEffect(() => {
    return () => cableConnection.disconnect();
  });
  return (
    <div className="hero is-primary is-fullheight-with-navbar is-clipped">
      <HomeContainer currentUserId={currentUserId} />
    </div>
  );
}
