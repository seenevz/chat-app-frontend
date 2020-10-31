import React, { useState } from "react";
import { loginUser, signupUser } from "../../ApiAdapter";

import LoginForm from "../../components/LoginForm.jsx";

export default function LoginContainer({ setUser }) {
  const [error, setError] = useState(null);
  const [loginScreen, setLoginScreen] = useState(true);

  const handleScreenChange = () => setLoginScreen(current => !current);

  const handleLoginUser = async loginData => {
    try {
      const user = await loginUser(loginData);
      setUser(user);
    } catch (err) {
      console.log(err);

      setError(err.message);
    }
  };

  const handleSignupUser = async signupData => {
    try {
      const user = await signupUser(signupData);
      setUser(user);
    } catch (err) {
      console.log(err);

      setError(err.message);
    }
  };

  return (
    <div className="section is-large">
      {error && <p>{error}</p>}  
        <div className="column is-one-third is-offset-one-third">
          <LoginForm handleSubmit={loginScreen ? handleLoginUser : handleSignupUser} loginScreen={loginScreen} />
          <a onClick={handleScreenChange}>{loginScreen ? "Sign up" : "Login"}</a>
      </div>
    </div>
  );
}
