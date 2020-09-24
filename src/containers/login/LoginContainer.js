import React, { useState } from "react";
import { loginUser } from "../../ApiAdapter";

import "./login.css";
import LoginForm from "../../components/LoginForm";

export default function LoginContainer({ setUser }) {
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
    <div className="login-container">
      {error && <p>{error}</p>}
      <LoginForm handleSubmit={handleLoginUser} />
    </div>
  );
}
