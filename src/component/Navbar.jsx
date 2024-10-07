import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-white p-2 fixed-top">
      <div className="container-fluid">
        {/* <h1 className="navbar-brand fs-4 text-white">ShopFusion</h1> */}
        <h1 className="navbar-brand fs-18 custom-font text-white">ShopFusion</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white fs-6" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fs-6" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fs-6" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fs-6" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link btn text-white fs-6 mx-1" to="/login">
                <i className="fas fa-user"></i> Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fs-6 mx-1" to="/register">
                <i className="fas fa-user-plus"></i> Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fs-6 mx-1" to="/cart">
                <i className="fas fa-shopping-cart border border-1"></i> Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
