import React from "react";
import List from './list.jsx';

function List_render(){
    let listobj = [
        {id:1, name: "deb",age: 21},
        {id:2, name: "rony",age: 22},
        {id:3, name: "okudera",age: 18},
        ]
    let user = [
            {id:1, name: "debottam kar",age: 21},
            {id:2, name: "rony kar",age: 22},
            {id:3, name: "okudera kar",age: 18},
            ]
return(<>
       <List items = {listobj}/>
       <List items = {user}/>
      </>);

}

export default List_render;