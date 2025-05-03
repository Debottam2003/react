import React from 'react';
import { useContext } from 'react';
import { usercontext } from './main.jsx';
import UserContext from './UserContext.js';
function Contextd() {

    const {user,age} = useContext(usercontext);

  return (
    <div className="d">
        <h1>this is the context d {user} {age}</h1>
    </div>
  )
}

export default Contextd;