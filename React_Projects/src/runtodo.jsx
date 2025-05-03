import React, { useState } from 'react'
import { createContext } from 'react';
import Todo from './todo.jsx';
export const todolist = createContext();
function Runtodo() {
  const [arr,setarr] = useState(JSON.parse(localStorage.getItem('todolistdata')));
  return (
    <>
    <div style={{textAlign:'center',fontFamily:'cursive',fontSize:'2rem'}}>Very Simple ToDo List</div>
    <todolist.Provider value={{arr,setarr}}>
        <Todo />
    </todolist.Provider>
    </>
  );
}

export default Runtodo;