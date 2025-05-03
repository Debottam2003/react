import React from 'react';
import Contextd from './contextd.jsx';
import { useState } from 'react';
import { useContext } from 'react';
import { usercontext } from './contexta.jsx';
function Contextc() {
     const [username,setusername] = useState('');
     const {setuser} = useContext(usercontext);
function handlesubmit(){
     setuser(username);
}
  return (
    <div className="c">
        <h1>this is the context c</h1>
        <input type='text' value={username} onChange={(event)=> setusername(event.target.value)}></input>
        <button onClick={handlesubmit}>Submit</button>
        <Contextd />
    </div>
  )
}

export default Contextc;