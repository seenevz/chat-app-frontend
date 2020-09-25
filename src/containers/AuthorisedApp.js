import React, { useEffect } from "react";
import HomeContainer from "../containers/home/HomeContainer";

import { cableConnection } from "../ApiAdapter";

export default function AuthorisedApp({currentUserId}) {
  useEffect(() => {
    return () => cableConnection.disconnect();
  });
  return (
    <>
      <HomeContainer currentUserId={currentUserId}/>
    </>
  );
}
