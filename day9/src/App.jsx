import React from 'react'
import Hellow from './Hellow'
import Icon from "./assets/react.svg"
import "./App.css"
const App = () => {
  return (
    <div>
      Hellow boys
      <Hellow/>
      <img src={Icon} alt="" />
    </div>
  )
}

export default App
