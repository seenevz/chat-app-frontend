import React from "react";
import "./login.css";
import LoginForm from "../../components/LoginForm";

export default function LoginContainer({ handleLoginUser }) {
  return (
    <div className="login-container">
      <LoginForm handleSubmit={handleLoginUser} />
    </div>
  );
}
