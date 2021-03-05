import React, { useState } from 'react'

import { Link } from "gatsby"

import LogoSVG from '../assets/images/talita-logo.svg'
import Nav from "./Nav"

import '../assets/styles/Header.scss'

const Header: React.FC = () => {

  const [isOpen, toggleOpen] = useState(false);

  return (
    <header className="Header">
      <div className="Header--logo-container">
        <Link to="/">
          <img src={LogoSVG} alt="Talita Camilo Professional Services Logo"/>
        </Link>
      </div>
      <nav className="navbar navbar-dark justify-content-end  navbar-expand-md">
        <button className="navbar-toggler" type="button"  aria-controls="mainNavigation" aria-expanded={isOpen ? "true": "false"} aria-label="Toggle navigation" onClick={() => toggleOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse collapse ${isOpen ? "show" : ""}`} id="mainNavigation">
          <div className="container-md">
            <Nav />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
