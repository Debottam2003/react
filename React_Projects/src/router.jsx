import React from "react";
import './router.css';
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from './footer.jsx';

export default function App() {
    return (
        <>
            <nav className="nav">
                <NavLink 
                    to='/' 
                    className="hometext" 
                    style={({isActive})=> { return {"color": isActive ? 'red' : ''}}}
                >
                    Home
                </NavLink>
                <NavLink 
                to='/login' 
                className="logintext"
                style={({isActive})=> ({"color": isActive ? 'red' : ''})}
                >
                   Login
                </NavLink>
            </nav>
            <Outlet />
            <Footer />
        </>
    );
}
