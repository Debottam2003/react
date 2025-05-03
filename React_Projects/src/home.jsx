import React, { useContext } from "react";
import UserContext from "./UserContext";
import './home.css';
import { auth } from "./Wrap";

export default function Home(){
    //let {login, setLogin} = useContext(auth);
    const {login, setLogin, data, setData} = useContext(UserContext);
    return(<h1 className="home">{login} this is the home page {data}</h1>);

}