import React from 'react'
import Header from "../Header/Header"
import { useState } from "react"
import Fade from 'react-reveal/Fade';
export default function Home() {




 const [active,  setActive] = useState(1)

  const SetView = (active) => {
  setActive(active);
  };
  
 
  return (
    <div>
        <Header/>
        
        <div className="button-toolbar">
      <button className="button btn-dark" onClick={() => SetView(1)}>
        Button 1
      </button>
      <button className="button btn-dark" onClick={() => SetView(2)}>
        Button 2
      </button>
      <button className="button btn-dark" onClick={() => SetView(3)}>
        Button 3
      </button>

      {/ {ActiveView()} /}
    </div>

      <Fade right>
      {active === 1 ? <h1>This is heading1</h1> : ""} 
      </Fade>
      <Fade top>
      {active === 2 ? <h1>This is heading2</h1> : ""} 
      </Fade>
      <Fade bottom>
      {active === 3 ? <h1>This is heading3</h1> : ""} 
      </Fade>
    </div>
  )
}