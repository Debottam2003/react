import { Children, useEffect, useState } from "react";
import UserContext from "./UserContext";

export const UserContextProvider = (({children})=>{
    let [data, setData] = useState('');
    let [expiry, setExpiry] = useState(true);
    if(parseInt(localStorage.getItem('expiry')) < Date.now()){
        localStorage.removeItem('data');
        localStorage.removeItem('expiry');
    }
    function setdata(){
        let expiry = Date.now() + (1000 * 60);
        localStorage.setItem("data", "debottam kar");
        localStorage.setItem('expiry', expiry);
        let name = localStorage.getItem('data');
        setData(name);
    }
    let [login, setLogin] = useState("true");
    return <UserContext.Provider value={{login, setLogin, data, setData}}>
                {children}
                <button onClick={setdata}>Print</button>
                {expiry && <h1>hello boy</h1>}
           </UserContext.Provider>
});
