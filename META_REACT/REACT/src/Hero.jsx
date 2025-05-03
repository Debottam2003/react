import React from 'react'
import Component from './Component'

function Hero(prop) {
  return (
    <div style={{width: "500px", height: "400px", border: "2px solid black"}}>Hero
    <Component name = {prop.name} />
    <h2>{prop.name}</h2>
    </div>
  )
}

export default Hero