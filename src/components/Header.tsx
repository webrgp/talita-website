import { useState } from 'react'
import { Link } from 'gatsby'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import LogoSVG from '../assets/images/tc-ps.svg'
import Nav from './Nav'

import '../assets/styles/Header.scss'

const Header: React.FC = () => {
  const [isOpen, toggleOpen] = useState(false)

  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  return (
    <header className="Header">
      <div className="Header--logo-container">
        <Link to="/" onClick={() => toggleOpen(false)}>
          <img src={LogoSVG} alt="TC Professional Services Logo" />
        </Link>
        <div className="particles-bg">
          <Particles
            className="tsparticles"
            init={particlesInit}
            url="/particlesjs-config.json"
          />
        </div>
      </div>
      <nav className="navbar navbar-dark justify-content-end navbar-expand-md">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavigation"
          aria-expanded={isOpen ? `true` : `false`}
          aria-label="Toggle navigation"
          onClick={() => toggleOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`navbar-collapse collapse ${isOpen ? `show` : ``}`}
          id="mainNavigation"
        >
          <div className="container-fluid">
            <Nav onLinkClick={() => toggleOpen(false)} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
