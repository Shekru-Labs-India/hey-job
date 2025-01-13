import React from 'react'
import logolight from '../assets/img/logo-light.png'
import logo from '../assets/img/logo/logo_low.png'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '../config/categories'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-0">
        <div className="container-fluid" style={{ backgroundColor: "#26ae61" }}>
          <Link className="navbar-brand" to="/">
            <img src={logo} className="logo logo-display" alt="" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item me-3">
                <Link className="nav-link active text-white" to="/">
                  <i className="fa-solid fa-home me-1"></i>
                  Home
                </Link>
              </li>
              {CATEGORIES.map((category, index) => (
                <li key={index} className="nav-item me-3">
                  <Link
                    className="nav-link text-white"
                    to={`/category/${category.urlSlug}`}
                  >
                    <i className={`fa-solid ${category.icon} me-1`}></i>
                    {category.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header