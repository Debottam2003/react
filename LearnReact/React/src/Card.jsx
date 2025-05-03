import React from "react";

function Card({
  name = "Debottam Kar",
  email = "debottamkar2003@gmail.com",
  phone = "9073850584",
}) {
  return (
    <div
      style={{
        border: "2px solid aliceblue",
        backgroundColor: "cornflowerblue",
        color: "black",
        borderRadius: "10px"
      }}
    >
      <h3>Name:{name}</h3>
      <h3>Email:{email}</h3>
      <h3>Phone:{phone}</h3>
    </div>
  );
}

export default Card;
