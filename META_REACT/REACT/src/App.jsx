import { useState } from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { createContext } from "react";
import Contact from "./Contact";
import Todo from "./Todo";

export let userContext = createContext(undefined);

export default function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <nav style={{ display: "flex", flexDirection: "row", gap: "20px", fontFamily: "cursive" }}>
          <Link to='/'><li style={{ listStyleType: "none" }}>Home</li></Link>
          <Link to='/about'><li style={{ listStyleType: "none" }}>About</li></Link>
          {/* <Link to='/contact'><li style={{ listStyleType: "none" }}>Contact Us</li></Link> */}
          <Link to='/form'><li style={{ listStyleType: "none" }}>Form</li></Link>
        </nav>
      </div>
      <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>This is a example of prop drilling...</h1>
      <Hero name="Debottam Kar" />
      <Outlet />
      <userContext.Provider value={{ name: "okudera" }}><Contact /></userContext.Provider>
      <Todo />
    </>
  );
}

//export default App;
