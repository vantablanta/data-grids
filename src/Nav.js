
import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="navbar navbar-dark bg-warning">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link text-dark">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="products" className="nav-link text-dark">Products</Link>
        </li>
        
        <li className="nav-item">
          <Link to="about" className="nav-link text-dark">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
