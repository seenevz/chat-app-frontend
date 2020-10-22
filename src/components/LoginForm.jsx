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
      className="box" 
      onSubmit={e => {
        e.preventDefault();
        handleSubmit({ auth: { ...formValues } });
      }}
    >
      <div className="field">
      <label className="label" htmlFor="username">Username</label>
      <div className="control">
      <input
        className="input"
        name="username"
        type="text"
        onChange={handleInput}
        value={username}
      /></div>
      </div>
      <div className="field">
      <label  className="label" htmlFor="password">Password</label>
      <div className="control">
      <input
        className="input"
        name="password"
        type="password"
        onChange={handleInput}
        value={password}
      />
      </div>
      </div>
      {!loginScreen && (
        <>
      <div className="field">
          <label className="label" htmlFor="password_confirmation">
            Confirm Password
          </label>
          <div className="control">
            <input
              className="input"
              name="password_confirmation"
              type="password"
              onChange={handleInput}
              value={password_confirmation}
            />
          </div>
      </div>
      <div className="field">
          <label className="label" htmlFor="first_name">
            First Name
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="first_name"
              onChange={handleInput}
              value={first_name}
            />
          </div>
      </div>
      <div className="field">
          <label className="label" htmlFor="last_name">
            Last Name
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="last_name"
              onChange={handleInput}
              value={last_name}
            />
          </div>
      </div>
        </>
      )}
      <div className="control">
      <button
        className="button is-primary"
        type="submit"
        name="submit"
          >
        {loginScreen ? "Login" : "Sign up"}
      </button>
      </div>
    </form>
  );
}
