import React from "react";
import useCustom from './customhook.js';

function Usecustomhook() {
    const {counter, statechange} = useCustom();
  return (
    <div>
        <h1 style={{backgroundColor: counter,padding:"2rem",}}>count: {counter}</h1>
        <button onClick = {statechange} 
        style={{border: "none",
                padding: "1rem",
                backgroundColor: 'blue',
                borderRadius: '10px',
                margin: '5px',
                fontSize: '1rem',
                fontWeight: 'bolder',
                fontFamily: 'cursive',
                color: 'black'
              }}
        > 
        state change 
        </button>
        {/* <button onClick = {reset}> reset </button> */}
        {/* <button onClick = {decrement}> decrement </button> */}
    </div>
  );
}

export default Usecustomhook;