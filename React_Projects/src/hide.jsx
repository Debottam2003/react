import React,{useEffect} from 'react';
import './hide.css';


export default function Hide(){

useEffect(()=>{
let eye = document.querySelector('.eye');
let password = document.querySelector('.password');
let hide = true;
eye.addEventListener('click',(event)=>{
    if(hide === true) {
        password.type = 'text';
        eye.innerText = '🔓';
        hide = false;
    }
    else{
        password.type = 'password';
        eye.innerText = '🔒';
        hide = true;
    }
});
},[]);

return(
   <>
    <input type="password" name="password" className="password" placeholder="Enter Password" />
    <button className="eye">🔒</button>
   </>
);
}


