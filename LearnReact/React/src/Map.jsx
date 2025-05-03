import React from 'react';
import contacts from './contacts.js';
import Card from './Card.jsx';
import Conditional1 from './Conditional1.jsx'; 
import Conditional2 from './Conditional2.jsx';


function Map() {
    let color = "red";
    const isLoggedIn = true;
//   return (
//     <div>
//         {contacts.map((contact, index)=>{
//             return <Card name={contact.name} email={contact.email} phone={contact.phone} key={contact.id}/>
//         })}
//     </div>
//   )
//   if(color === "green"){
//     return <div><Conditional2 /></div>
//   }
//   else{
//     return <div><Conditional1 /></div>
//   }
  //return (color === "red") ? <Conditional1 /> : <Conditional2 />
  return (isLoggedIn) ? <Conditional2 /> : <Conditional1 />
}

export default Map