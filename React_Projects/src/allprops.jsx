import React from 'react'
import proptypes from 'prop-types';

function Allprops(prop) {
  return (
    <>
    <p>{prop.name}</p>
    <p>{prop.age}</p>
    <p>{prop.cgpa}</p>
    <hr></hr>
    {/* <p>practicing prop</p>
    <h1>these are props</h1>
    <hr /> */}
    </>
  );
}

Allprops.prototype = {
    name : proptypes.string,
    age : proptypes.number,
    cgpa : proptypes.number
}

Allprops.defaultProps = {
    name : "User",
    age : 0,
    cgpa : 0
}

export default Allprops;