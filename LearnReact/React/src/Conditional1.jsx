import React from "react";
import { Helmet } from "react-helmet";

function Conditional1() {
  return (
    // <div style={{color: "red"}}>This is a Conditional Render page 1🔴</div>
    <div
      style={{
        border: "2px solid aliceblue",
        padding: "1rem",
        gap: "1rem",
        backgroundColor: "#212121",
        boxShadow: "0 5px 15px white",
      }}
    >
          <Helmet>
            <title>This is the login page</title>
          </Helmet>
      <h2>Login Page</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            style={{
              padding: "1rem",
              margin: "1rem",
              boxShadow: "0 5px 10px white",
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            style={{
              padding: "1rem",
              margin: "1rem",
              boxShadow: "0 5px 10px white",
            }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Conditional1;
