import React from 'react'
import { useState } from 'react';

function Background() {
  let [color,setcolor] = useState('')
  function change1(){
    setcolor('red');
  }
  function change2(){
    setcolor('blue');
  }
  function change3(){
    setcolor('green');
  }
  function change4(){
    setcolor('yellow');
  }
  function change5(){
    setcolor('white');
  }
  return (
    <>
    <div className='back' style={{"backgroundColor": color}}>
      <div className='buttons'>
        <button className='red' style={{"backgroundColor": "red"}} onClick={change1}>press</button>
        <button className='blue' style={{"backgroundColor": "blue"}} onClick={change2}>press</button>
        <button className='green' style={{"backgroundColor": "green"}} onClick={change3}>press</button>
        <button className='yellow' style={{"backgroundColor": "yellow"}} onClick={change4}>press</button>
        <button className='none' style={{"backgroundColor": "white"}} onClick={change5}>press</button>
      </div>
    </div>
    </>
  )
}

export default Background;