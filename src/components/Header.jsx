import React from 'react'

import logolight from '../assets/img/logo-light.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

   <>
   
   <nav className="navbar navbar-expand-lg navbar-light  "  >
      <div className="container-fluid" style={{ backgroundColor: '#26ae61' }}>
        
        {/* Logo on the left */}
        <Link className="navbar-brand " to="/">
        <img src={logolight} className="logo logo-display " alt="" />
        
      </Link>

        {/* Hamburger icon in mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i> {/* FontAwesome bars icon */}
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto "> {/* mx-auto centers the links */}
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/opening">Opening</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/work-from-home">Work from Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/internship">Internship</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/walk-in">Walk-In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/batches">Batches</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>

   
   </>

  )
}

export default Header