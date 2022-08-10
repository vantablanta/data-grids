import About from './About'
import Products from './Products'
import Nav from './Nav'
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  const Home = () => (
    <div className='container'>
      <div className="text-center">
      <h1>Home Page</h1>
      <p>Grid Page Home Page</p>
      </div>
    </div>
  )


  return (
    <BrowserRouter>
      <Nav/> 
      <Routes className="text-center">
        <Route path='/' element={<Home/>}></Route>
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



