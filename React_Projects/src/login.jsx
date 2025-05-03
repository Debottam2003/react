import React from "react";
import './login.css';
import { Link, Outlet } from "react-router-dom";
export default function Login(){

    return(
    <div className="login">
    <h1 >this is the login page</h1>
    <Link 
    to='details' 
    style={{color:"white" ,
            textDecoration:"none",
            fontSize:"1.5rem",
            fontFamily:"cursive"
           }}
    >
        Detial page Click Here
    </Link>
    <Outlet />
    </div>
);

}