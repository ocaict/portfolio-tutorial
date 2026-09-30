import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <img src="/ocatech logo.png" alt="OCATECH DIGITAL SOLUTION" />
            <span>OCATECH</span>
          </Link>

          <div className="navbar-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="navbar-actions">
            <ThemeToggle />
            <Link to="/contact" className="navbar-cta">Let's Talk</Link>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </div>
    </>
  )
}
