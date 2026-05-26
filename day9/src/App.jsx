import React from 'react'
import Hellow from './Hellow'
import Icon from "./assets/react.svg"
import "./App.css"
const App = () => {

  function HandleClieck(){
    alert("hellwo")
  }
  function getName(){
    return "ht ebios[dlfhjwbe"
  }


  function handleFrom(e){
    console.log("The ,essage is",e.taget.value)
  }
  return (
    <div>
      Hellow boys
      <Hellow/>
      <img src={Icon} alt="" />
      <h1>{getName()}</h1>
      <button onClick={HandleClieck}>Click</button>
      <button onClick={()=>alert("Hellow my akjfnsejfseyugfKFzrufgyug")}>Click</button>
      <input onChange={(e)=>handleFrom(e)} type="text" />
    </div>
  )
}

export default App
