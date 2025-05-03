import React,{useState} from 'react';
import './App.css';

function App() {
  let [counter,setCounter] = useState(0);
  let arr = [2,4,6,8,10,12,14,16,18,20,22,24];
  let increment = ()=>{
    // for(let i of arr){
    //   console.log(i);
    // }
    if(counter < 100){
    counter++;
    setCounter(counter);
    }
    // for(let i=1;i <= 100;i++){
    //   console.log(i);
    // }
  };
  let decrement = ()=>{
    if(counter > 0){
    counter--;
    setCounter(counter);
    }
  };
  return (
    <>
      <div>
      <h1>This is a basic Counter</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={increment}>Increment {counter}</button>
      <button onClick={decrement}>Decrement {counter}</button>
      </div>
    </>
  )
}

export default App;
