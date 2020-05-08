import React, { useState } from "react";

import { axiosWithAuth } from "../util/axiosWithAuth";

export function Login(props) {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });
  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };
  const login = e => {
    e.preventDefault();
    console.log(creds);
    axiosWithAuth()
      .post("/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendslist");
      })
      .catch(err => {
        console.log("Err is: ", err);
      });
  };
  return (
    <section className="loginForm">
      <form onSubmit={login}>
        <label>User Name:</label>
        <input
          type="text"
          name="username"
          value={creds.username}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={creds.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </section>
  );
}
