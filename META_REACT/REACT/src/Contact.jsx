import React from 'react'
import { useContext } from 'react'
import { userContext } from './App'

function Contact() {
  let data = useContext(userContext);
  return (
    <div style={{color: "blue", fontSize: " 4rem"}}>This is the Contact Page {data.name}</div>
  )
}

export default Contact