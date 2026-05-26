import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
      <h2>Prodect Types</h2>
      <nav>
        <Link to="laptop"> Laptop </Link>
        <Link to="phone"> Phone </Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default Product
