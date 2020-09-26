import React, { useState } from "react";

export default function LoginForm({ handleSubmit, loginScreen }) {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
  });

  const {
    username,
    password,
    password_confirmation,
    first_name,
    last_name,
  } = formValues;

  const handleInput = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form
      className="login-form"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit({ auth: { ...formValues } });
      }}
    >
      <label htmlFor="username">Username</label>
      <input
        name="username"
        type="text"
        onChange={handleInput}
        value={username}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        onChange={handleInput}
        value={password}
      />
      {!loginScreen && (
        <>
          <label>
            Confirm Password
            <input
              name="password_confirmation"
              type="password"
              onChange={handleInput}
              value={password_confirmation}
            />
          </label>
          <label>
            First Name
            <input
              type="text"
              name="first_name"
              onChange={handleInput}
              value={first_name}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="last_name"
              onChange={handleInput}
              value={last_name}
            />
          </label>
        </>
      )}
      <input
        type="submit"
        name="submit"
        value={loginScreen ? "Login" : "Sign up"}
      />
    </form>
  );
}
