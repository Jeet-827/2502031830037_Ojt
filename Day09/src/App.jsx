import React, { useState } from 'react'
import Hi from './Hi'
import ABC from "./assets/react.svg"
import Home from './Home'
import Bye from './Bye'
import About from './about'
import Contact from './Contact'
import User from './User'
import { Route, Routes, Link, useParams } from 'react-router-dom'
import Product from './Product'
import Laptop from './Laptop'
import Phone from './Phone'
// import {getname} from './Hi'
const App = () => {
  const [count, setCount] = useState(0)

  const incerase = () => {
    setCount(count + 1)
  }

  const decerase = () => {
    setCount(count - 1)
  }
  function user() {
    console.log(useParams())
    const { name } = useParams();
    return <h1>{name}</h1>
  }

  return (
    // <div>
    //   <h1>Hello World!</h1>
    //   <Hi name="Y@$H" />
    //   <Bye />
    //   {/* {getname()} */}
    //   <img src={ABC} alt="" />
    //   <h2>Count : {count}</h2>
    //   <button onClick={incerase}>Incerase</button>
    //   <button onClick={decerase}>Decrease</button>

    // </div>
    <>

      <div>

        {/* <a href="/"> Home </a>
        <a href="/bye"> Bye </a>
        <a href="/about"> About </a>
        <a href="/contact"> Contact </a> */}

        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="Product"> Product </Link>


      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}>
          <Route path="laptop" element={<Laptop />}></Route>
          <Route path="phone" element={<Phone />}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
