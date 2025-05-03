import React from "react";

export default function List(prop){
    let listobj2 = prop.items;
    let listobj = listobj2.map((obj) => <li key={obj.id}>{obj.name}: <b>{obj.age}</b></li>)
return(
      <ol>{listobj}</ol>
      );
}