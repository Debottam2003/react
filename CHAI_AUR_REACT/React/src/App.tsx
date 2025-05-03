import { useState } from 'react'
import './App.css'

const App: React.FC = function () {
  const [count, setCount] = useState<number>(0)
  function set(){
    setCount((prevdata)=>(prevdata + 1));
  }
  const n: number = 0;
  function data(d: string):string {
    return d + " data";
  }
  return (
    <>
      <h1 onClick={set}>{n} {count}  {data("bro")}</h1>
    </>
  )
}

export default App
