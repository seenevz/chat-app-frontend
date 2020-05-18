import React, { useState } from "react";

export default function LoginForm({ handleSubmit }) {
  const [formValues, setFormValues] = useState({ username: "", password: "" });

  const { username, password } = formValues;

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
      <input type="submit" name="submit" value="Login" />
    </form>
  );
}
